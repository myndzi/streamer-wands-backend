import express, { Router } from 'express';
import passport from 'passport';

import { DB } from '../db/db';

export const initAuthRoutes = ({ db }: { db: DB }): Router => {
  const router = express.Router();

  router.get(
    '/twitch/callback',
    passport.authenticate('twitch', {
      successRedirect: '/',
      failureRedirect: '/login',
    })
  );

  router.get('/login/:token', passport.authenticate('twitch'));

  router.get('/logout', async (req, res, next) => {
    if (!req.user) {
      res.redirect('/');
      return;
    }

    await db.Tokens.delete(req.user.id).catch(err => {
      console.log('logout: Failed to delete refresh token');
    });

    req.logout(err => {
      if (err) {
        return next(err);
      }
      res.redirect('/');
    });
  });

  router.get('/ticket', async (req, res, next) => {
    if (!req.user) {
      res.redirect('/auth/login');
      return;
    }

    const token = await db.Tokens.find(req.user.id);

    if (!token) {
      next('user is logged in, but no token was created');
      return;
    }

    res.json({
      instructions:
        'replace the ticket in your mod token.lua file, without removing the quotation marks',
      token: token.token,
    });
  });

  return router;
};
