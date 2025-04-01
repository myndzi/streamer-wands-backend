const apothIcons = {
    enemies: [
        {
            id: "player",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlUlEQVR4nGNkIABm58/6D2OnTkxjRJdnJEZzz6Zuhpv3b2NVy0TIBSDN+AATPsknT+8QMp+BoAsijAPBmCwDZKRVwJgsF8yGBiAhbzDh0gyLMpgLIp1D/pPkAmIBEwOFgBGb4Nd7E/9zK+UzXpxtC3c2l6oWg6rDTPJS4pOndxga13SRlxIZCACC0Ui2ARS5gFjbQYoBvCox0Q+zXIcAAAAASUVORK5CYII=",
            name: "Min\u00e4",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Min\u00e4"
        },
        {
            id: "sheep",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA50lEQVR4nO1SMQrCQBCcC/mBCVhY5A8mfxF8hvgHOwXxJVr4AAshEfMDU6RL7Kw92cVNNmsn2LkQZm/3ZnbuLsA/fhN5nntC75+ePpvrcJaYJAmiaIS2vaOqKtBagupMckHHCy3ZbhbUIU5IyGmynagFyFEnVu66fqA3W7IQhUxI5NXxwT1CR0nTNJ6maxHthshFcUGaToHDEpj0gwKyX5ZlVxAhmzMZQDGeAfW7Xlf9K+h7ECfWBR8BQBzHzu8XH0/KInQc+Q80+uuWe7f1fEAcXGIanlk9Om14nWUZOxSknh06EPgmXgi0je3wlz7WAAAAAElFTkSuQmCC",
            name: "Lammas",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Lammas"
        },
        {
            id: "sheep_bat",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSUlEQVR4nI1SPUvEQBCdPa6WQC5oESFaCZYm+B8EG20ObCwEmysUsRP8qOws5AQ7C/0FKvgThES80kpTXHMkB0GuduWNzrJ3yWkeDG+ZzXvzdghRBU53bzSKakBNCuV8fL09djcNTVvozs7QcPDJXBcNiG2BmNQ2cGtO0/pLo0oGNAVIJqIsy3SeD43RmEHnbEPJu3FG873/xpcQoVotl6sqTUMEEMdxrFfX582HV0ePRigJGL0ul3691Gyw6C8RxEEQ8H3nZJNN13aWjRhGbNLr0vnTiPtghYOI0zQlYUAMIU6SFwrDFaKHQyI/qF5i8CsQtsFiIkrm2kT9nwFgBcaWJ6dWpZA9eJ6n9P0BL1EhflEU5DhOKYn9pLD5TLnfptHtHi3s35V/cxghCRglPfsbbB38cbFl+mYHURQpmWj3SpP+QtWE//ANEYvHjFPnd+MAAAAASUVORK5CYII=",
            name: "Lentolammas",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Lentolammas"
        },
        {
            id: "sheep_fly",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHElEQVR4nKVSS0rEQBB9kTlAwAm4mEU8gznMwFzCQbyDi4AL8QZ6Al3kCEIyOGTlzoZxISRCwNm4mZbXmWrKNqjEguJVF/VefRIAgLU7S8cYs3Zn6837OLK2+j8i9Z48SsTud88L40V0TvI/ds+DolDkT4eugzVEhN40jfNfRfLCuIKyLD1BE0MnJ9ITfLw+IctO3Ltt32CM+fKeTg/74vW1b3ogAclpmqKqVs59sSITSb4oti5PjBhwZJLZUZDGmEYyRd009+fALP0+gSYIapNVqqM58NI3IEZEHirsOjSFWwFAkiSRvTvrj8jxu65DHMe+mxaRlbLJA9rZHNubUxwvb/3xvcmnI9Ilp2vs45V7P18uhv8FLTJYMGCfR6UXB/Qu9QIAAAAASUVORK5CYII=",
            name: "Suhiseva lammas",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Suhiseva lammas"
        },
        {
            id: "scorpion",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAUklEQVR4nGNgGAWjYHiCi+vt/l84NOc/WZonVLuQrJEFmeNo8gvuivkbvzMk+nOC+fqBhxhxGYAhgawZRMMAiI/PIDg4GmkH9gaMBhkIwrg0AABBKyTdHCN1NwAAAABJRU5ErkJggg==",
            name: "Skorpioni",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Skorpioni"
        },
        {
            id: "fish",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZUlEQVR4nGNgGAXUB////wdju7KO//FzL/6H8WGYIIhH0oTNEHTAiM0F9uWd/wWe8KCIT7Pfw+A64yPD9fP7UfQw4XLJ7etrwRgGQJqvndvHSJIX/kO9QbIX8AFGRsKOGAUMpAEAPoBcohJf950AAAAASUVORK5CYII=",
            name: "Ev\u00e4k\u00e4s",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Ev\u00e4k\u00e4s"
        },
        {
            id: "fish_large",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAj0lEQVR4nGNgGAUUA0Z0gf///4Ppw/Pd/2u72IPZQrJVjIyMjCjyMMCEbsC7x21gFbaJOxmv7jkIFwNphGkGGQbHDFhcALJdeetXFHGpNUfgamGuweoCGJh7+SEYwwDIFc9CbP4TDIO3j1r/g/wM46O7BuQSZBdgAJhfQfjQPDe4358GW/8HYfRAHAUMlAMAZftRQkQGSLQAAAAASUVORK5CYII=",
            name: "Suurev\u00e4k\u00e4s",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Suurev\u00e4k\u00e4s"
        },
        {
            id: "duck",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuElEQVR4nGNgGAW0B8EVjv9BGJc8EyHNe6afw2sBCyEXuGQageknG5LgrpAJmMdItAEg8OrBO4bHvA/BbMvqe3DNKF6YN7EWw59rO/aDFYspCDGUXebF0IzhgnkTa/+/vX6aQVjTlAFEg8AJhp8M+AATjAHTANK8b8smuALOs+8YLD6wEzagdMYORpghIHDx7nMw1leWBPMPr7iI4XwQwBDszvD4j+wFkMF4/YANIEcZIYAzIRFrCAAgbUZJoDYjMwAAAABJRU5ErkJggg==",
            name: "Ankka",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Ankka"
        },
        {
            id: "wolf",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkElEQVR4nGNgGAXUAwE+1v9hWF1D9z9MDFkemz5GXBLX73xi0FThA9M3b1xmBBkK4m/YcpQRWR0LLheBFMNoTRXsloAAEzHeW7p+Cpz99ff5/0R5ARcAeQkEQN4i2gXIAOIlPnigssBMhPkZGcACkAEPYAIRIEXIoQtiwwwmBJhw2YDNRUQBYhIPigvIswYBAPSBQmFkM62MAAAAAElFTkSuQmCC",
            name: "Susi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Susi"
        },
        {
            id: "deer",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAn0lEQVR4nGNgGPRgb23Qf2xsGGAkZMCHD3P+n+3dhiLm3LwOro+JkAECAilgxVmrb8PF1DV0/xNtAAxMC1WFswO0lBjKg/z/k2QAMnDTZgZjosJgL1rAIfufoAv2EtAMAizYooYUwARjGBd7UWbAWaS4JsUwJmyK0RMOCOy6+he7AdgUE6sZbABMAQwjhzSIjS3kUQxAVtC5biPBdIEOAG7CPNDYPaEWAAAAAElFTkSuQmCC",
            name: "Nelikoipi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Nelikoipi"
        },
        {
            id: "elk",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxUlEQVR4nGNkQAMfPsz5D2MLCKQwIss9PVsPlpM2bkQRx6oZnQ/TjM7GC3AZgAyYcGlEdw0+Q6jvAhAYeBdMKLL/j8zmVpbFqo4Rn+0LmhajiBX0HWQk2gUC0EQ0fds7uJi6hu5/og2AgUwvIThbU4WPIcDH+j9RBiyeYYlhm4MaCxgTZQADAwODsNovhhvfmMAYm/9BAKsgzPajFzjgYjNm7MeqFsU9yM4GabY2+IFiCFYDQHEMcioyQNYMsjkjwxFnCgQAcQxwOCSFDc8AAAAASUVORK5CYII=",
            name: "Poro",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Poro"
        },
        {
            id: "cat_mocreeps_spoopy_skittle",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7klEQVR4nNVRMRKCMBC8MD6Bljcg9tY0ofAN/gE7UTv9DEVSaGFlr/AFaflDnM1M8JDgSOnOXC5zudvs3RH9PQSOIo1oFYc2MD89JhEEOPaXhsq6tYEqT6YTFGlkVnFoiAjmhVLqqwLhFIyRSCk7Ek4WsBxO0gNmpLU20W1LxhiC9xF4C91MoKBZHqw654EZy8cc4AUKAbcZvNWbBdmolFbJqIKybs3u/LTFuPOZrK9Bz9vf6C3XKehWyhRQfLx3d601ZVkmfD0bhypPrH1CKdXb0oAFSQNmXiBEr2Z0C5CJZHjYz4Bs1w5vjb9xvADDFIMZbbiY4AAAAABJRU5ErkJggg==",
            name: "",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/"
        },
        {
            id: "cat_mocreeps",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbElEQVR4nGNgGAWjYEiB7dP8/4PoJW1uYBoGmEgx5Ovv8/+FBTjBNEyMEZtNYpwcDK++/2CA0diAZ9ZGsF4UF5ydHw422ThxJYrBIIOQNcI0YxgAsg1ZEt32YxeeY7gExQBkzTANIDF0FyEDACQDLcYsJCOFAAAAAElFTkSuQmCC",
            name: "Kissa",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Kissa"
        },
        {
            id: "eel",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEUlEQVR4nGNgIAJ8zXD9j0uOiRgDTjw+wvC1U/s/WQbs9eb8b2GnBHEJ1BBkFzER4wJ0AxkUnxHngr0g22Vt4PwTh+4xoLuGCZfmF8cdEH6+LwXRjGQYzBBGfBrPX/sGptnWXUbR3MfxkCE1XAosz4jVRjQAUmioxYVCz1j2gGFmixbEAGTNs1c+Yzhz+QNYEtkAkBjIVnQxpu1zzf6jC5roCsCdD6NxARaQBhgAOS8jSgHuTGTNMIPRASOIaC5Q+w+ThGlG1gjCeRyfGX4F6aKIgfQwIpsGMgjdBphmUCyAkjQMHFOVRbgAH4AlJpBmcFRCUyF3+VWwXoIGoBsCAs5bv8P1EWUA3BBoMobZDuIAAAHGnjSopEKGAAAAAElFTkSuQmCC",
            name: "Nahkiainen",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Nahkiainen"
        },
        {
            id: "bubble_liquid",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyklEQVR4nGNgGGjASKzC+LV3/iPzFwargPWyEKMpVFOAYfX1D3BxEJ8BKseITaNJ8yawpLaWFoo4WCMDA4MwOwPD258MYEOZcNmOrhkEYK4AaQYZAjKQEZvt2DSjA5BmkCFMxNgMczo6ALmECd12bAoxAhBJjBGbZpgrrl67htVFyIAJmyBIIzY2sitgLmGCCX59fAdDIch2fLGB4YKvSIag24zOhxmCMx2ga0IOF2SAkg400/rAAcktq4LVO9gAVhcgewXZZmwBCgBzfVXHUtiDCQAAAABJRU5ErkJggg==",
            name: "Nestem\u00e4inen kupla",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Nestem\u00e4inen kupla"
        },
        {
            id: "zombie_weak",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyklEQVR4nGNgGAUUA0ZiFV48ueU/iP74+g6DnU8BXB8TKZpBgF9UheHQlgn/iTJgxfTY/6UZNnDFxSX5YBc0dU5mwGvAiumx/0EYXby3ZyLD5i1rGOrKc3EbsAJJ49mL9xliEisYlszvANsMAsb6iijqmfBphgGQISCbQYZEZC5GCXgmdBfANHbPOAJXCHIBCMBCH2ssrJge+1/TKBzsRHRDkA1DBxguABkC0gALfZjf8QKQ7chxjRx1IACLd3RxFABSBDMEpJBYQwDJ73CZ+E+3dQAAAABJRU5ErkJggg==",
            name: "Heikkohurtta",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Heikkohurtta"
        },
        {
            id: "zombie",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwklEQVR4nGNgGAUUA0ZiFd5/ceA/iH7x/hKDpWYeXB8TKZpBQEJQj+H49Un/iTJg/u7g/7lNxnDFCSmxYBdUlHYz4DVg/u7g/yCMLr5gzmKGZasXMnR0l+I2YD6SxnPHHzAUpfUy9M0qBtsMAkaWCijqmfBphgGQISCbQYYkuq5FCXgmdBfANE6uOwtXCHIBCMBCHzkWGJBtB4U2esDBYgBZDK8LHHRzwbbDNMD8jhfAbIfx0W2DxTsuV8AVITuXWEMAolV4SiCTp7cAAAAASUVORK5CYII=",
            name: "Hurtta",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Hurtta"
        },
        {
            id: "miner_weak",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABL0lEQVR4nGNgoBAwElIwtS31P4ydXTWboHoUEOhh9h+Ef7yeBMYgNqoKBgYWBjzAxU4fhS8nI8pAkgHyLhpges/932BaL0yBgWEOEQZMRfI3CLQUz2bQ0pdjsPZTxVDLhEvzrXvPGF5+uAcXv3bxEUOy21RGvAZMRdKspiTFcGnVA7AhqbXOYBdgA0zYBEGaQYbAAMigeVN2wW1Hjg0m9ECDBRzIEBA4uuk2w2cOSCDCNK/fcYoRpwteIvkbBlT1pBjaZyX8X2xq+t/i6XfCXli8+gDDnkMXGU6evQV2+u1LCO/8yzXGbcBLqO0nzt8GO1FSXBDMBxkiM/sqw35zCB8ZYKSD2eW7sDkKDNQPPmcoRwpMFAAKHAtDVXjoovNxAbgXnr98D3YyLIrQ+bgAAAcNe/mYWy+pAAAAAElFTkSuQmCC",
            name: "Tappurahiisil\u00e4inen",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Tappurahiisil\u00e4inen"
        },
        {
            id: "miner",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABO0lEQVR4nGNgoBAwElKw5VTv/5cf7oHZyW5TGUkyYMup3v9PTvwAs58+f83w6vUbhplzlqDoYSHGmfsOHme4e+8hVjkmfBrn1q0E0072lgwmxvpgjA5YsGmc2pb6H0TLu2gwgLwAcr6YqAjYCwQNmArVfOveMwaOD2wMT5+zwuXev/+AYQAjLs1qSlJgWsJMlOH2pWdg+XlTdjESFQZqUM0wwPuDFUVzoIfZf6wGyLtogDHMEBAA2f6Z4zcDsub1O04x4nTBS2iiQQaqelIM7bMS/i82Nf1v8fQ7YS8sXn2AYc+hiwwnz94COx0WBiDwL9cYtwEvobafOH8b7ERJcUEwH2SIzOyrDPvNIXxkgBGNs8t3YXMUGKgffM5QjiUmwAAUOBaGqvDQRefjAnAvPH/5HuxkWBSh83EBAE7Wh+CrBsnhAAAAAElFTkSuQmCC",
            name: "Tappurahiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Tappurahiisi"
        },
        {
            id: "miner_fire",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeUlEQVR4nGNkwANKS0v/CwsLg9kVFRWM2NQwEaMZxsemjoWBANi4cSOKId3d3YwkGeDv7w9nv337ljgv5MWE/j9y5AjDuXPnwHwY/fDhQ8IG5MWE/vdUk2KwtdJiePz4MdhWGL1q1SqMgGRE5mxvygcH1KX7Txj0FGXANJu2OsPz5y8Zunrn4o+F/p6q/6oRAWA2TPPT30wMNjbaDMLvPqBoaqjx+o9iQH9P1X9fP1eG9++egTWCAEgzCNy9+5xB3sUSRXNDyzZGlFiwsdEGc/bNXAdXCAoHkGHnzl1nMDLSZFixtOf/ty8XMbzAgsw5cf85Cg0C6+evZSwrTgY7WUONgeHGLTawYRHRJWBXMIGII0euMqioOcKdtf7AMUZhVkSYgQJQQ+0XnA/TDDegsKQNLgDTOGf3UbAhKa7WYNsfPX4LxuixgeIFkIa3vxFJHsSGGYgccFgNANn08OVbht2XbmC4Bh+ApwOQZh4hIbiTYWIgVyCLoQMApm2p65oywoQAAAAASUVORK5CYII=",
            name: "Tulihiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Tulihiisi"
        },
        {
            id: "miner_santa",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABVklEQVR4nGNgoBAw4pK45uX1H11Ma9s2DPVMuDSffvECRQzEX2hkhGEoC7rA/////zMyMoJtAmkwlZAAa8YFWNAFYJpBQHhGNMM9EA3lv/xwj4HB7RxOw1C8AMJbTvX+h4G3V6+CaQZCLrgGDTyQs/+AbGRgYLC00wTTW2esZcBrwDUkzWC/VxxnmMeQw3D80HWGd9euMWADTNgEcQWcsLY2OHwCPczgXmFEVgDyM4hWatgL5oMMOWglAmbPm7ILrnn9jlOMOF3w8sM9BvHubgbNrVsZfBYvBoup6kkxtM9K+L/Y1PS/xdPvuMMABtJdXRnUeXgYbn75wrDm2TPGpBy3/yBDQOBfrjEDQ9plBqwueAkNdZAmEA0yBARAzpeZfZVhv7kgsnIwwHDB9oT1GIpgQP3gc4ZyaFhggGo1tf8hUlLw0EXn4wJwL4D8C3IySCM2Pi4AAEUgmFZwV1ysAAAAAElFTkSuQmCC",
            name: "Jouluhiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Jouluhiisi"
        },
        {
            id: "miner_chef",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABD0lEQVR4nGNgoBAwYhM8vHfjf3SxYyfOgOny6mYUPUzE2ALTjA0wYRO0dfbH6jJ020GABZfJH3nvwNnargIMLz/cI94FyKCleDbDukU74fyLxcX/W318/uM14PDejf+Rbbx28RFDsttUrN5iQeZsOdX7n/+zCpj95rQQA4PpPYbUWmcw/4TbDfzRuOVUL9hZIJvVmN1QQl/E9B3YwH+ijxm8bgozbFN/y1CZtoARwwsvP9xDcaqVhQmYPrrpNlgzCEz8eRm3F5Jx+FNd0pyhPA0ShaBA3LLpJqYXkEGghxlGSgSB9TtO4U8HFoaq/yXFBTE0gAx8/vI9NjNRwwCkGaYQ2TaQGEgOl8sIOp2mAABjL2qsJ4zK/wAAAABJRU5ErkJggg==",
            name: "Kokkihiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kokkihiisi"
        },
        {
            id: "hiisi_thief",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVR4nGNgGGjASIwiPz+//zD2pk2bGEkywM/P7/+XL1/gfB4eHhSDGInRLCsjhCL++Mk7sEEgQ5jwGQDTfOv2UzA20FMD0yAxmKsYsWk0MTH5LyUlBTcApFFSEuGK7TtPMCxctAaslwUm2N9T9X/zthMo/gTRIOcyMNxiYGCAGPL8+TuoGAQwgojTJ5b+FxSSYkjLaIZrRvcKtgDE8IKTk9N/ZANAGj99+gRm8/Hxgel9+/ah6GFC5iBLImsGAWQ2TgP8oAkGWTPnn59gjAuwwBgprtb/X2Gx+TsLO4MsDxuY/RGfAWDFD24xfGLjYThz5gyKP89ALRBm+MmwD5cXHr58y8AjJMRgIMiO1akg+be//zMEOljB8wVVAADI94ZXqS4FHwAAAABJRU5ErkJggg==",
            name: "Varashiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Varashiisi"
        },
        {
            id: "goblin_bomb",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDElEQVR4nGNgGPKAkViFTfHB/6WkWcHslLYVuPUpKZj8987x/m9kYwmmQWJzqiLANDbAhE1wS2wPg6SBEJgGgWdPfxPvBSUFk/8CMqxgA55feMfw4clvhnsPzjBeML30X38KK8PFnN8MBqf1GLG6wFfD+L82x3+4ZhAdqCDC0GaSAdYMAiAaxMdqwNUfjAz/XCQYmPa8YJB+8wtMwwDIZmQarxc0fcThfG5ePYaqPZEM2/5Pg4t5MWbBvcGI7gWYS5CBSaQr2BAYQA4DBnQDih084P4DsWGG4gIsyJynImwMT/98hPP3g9gibPj0IwC6bdj42PTB/QJSrCYhCpe49eI1isLNN84SnexJAgA/qmt67XKYdwAAAABJRU5ErkJggg==",
            name: "S\u00e4hik\u00e4ismennink\u00e4inen",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/S\u00e4hik\u00e4ismennink\u00e4inen"
        },
        {
            id: "shotgunner_weak",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABCklEQVR4nGNgoBAwogtcObHuP4z9/s0TBlufPAw1yIAJXQCkae6C1WC2oIgMw+Etk/6TZAAIGOqqwA0DGUKSAbY+eYyK8qJg9rotx8GG4AMsyJypbalg567ZsJMhJMAd7BKQIUQZMBWqGQTUlKTAhhADmGAMeydPMAaBW/eegQ0hBjCiR9/28loGGQkBsNgHhxgGFRVIgN65cwfOBgFXV1ewXkZk03AZAgLc/56B6a9MUgyZmZlwfYzIBoDCAeaNg/u2g73CxMIHDsy47GasCYoRmRPoYQZ2wfOX7xkkxQXB9Inzt0lLic+RNIEMIQSwpkQQWL/jFNgQmKtINgDZRUQbAPM7eljgcwUA52xqR9dR314AAAAASUVORK5CYII=",
            name: "Heikko haulikkohiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Heikko haulikkohiisi"
        },
        {
            id: "shotgunner",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABC0lEQVR4nGNgoBAwogtsOdX7H8Z++eEeQ7LbVAw1yIAJXQCkad2inWC2uIASw9xd2f9JMgAEVPWk4IaBDCHJgGS3qYxiCtxg9tFNt8GG4AMsyJypbalg515a9YBBLwziEpAhRBkwFaoZBNSUpMCGgAAvAytxXpB30QBjELh17xnYEGIAI3r0XS+dxyAjIQAW++AQw6CiogJm37lzB84GAVdXV7BeRmTTcBkCpplPgmmBv+YMmZmZcH2MyAaAwgHmjYd7boC98pnjNzgwK9MWYE1QjMicQA8zsAuev3zPICkuCKZPnL9NWkp8jqQJZAghgDUlgsD6HafAhsBcRbIByC4i2gCY39HDAp8rAHWVbC8aJm/LAAAAAElFTkSuQmCC",
            name: "Haulikkohiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Haulikkohiisi"
        },
        {
            id: "hisii_giga_bomb",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9ElEQVR4nGNgoBdId7L8X5fo+59szQxQADIE2SAWbBq2nOr9//LDPTA72W0qI7Jc0/zNKHxGbJqfnPgBZk+YuQVMS0orweX371qKoocFl7PRNWvqWMCk/iMbwoiuMdDD7P/1x8wYNiMbcv3KCbhLmNANcLHTx+UosEZ0wIhNoaNbNDiUnz+9h+EKGMDpgi2nev+DNGIDSOEAB0y4nAuzHUTDDMTmBSZ0gYd7bjD0zA9BMQTGRnc+VgOyq2aDJUv7jTA0gthuIawo6rEGIigqk5vCGUCpcUvfaYjml+8ZTpy/jVU9VgNAmJAYVi/AnfvyPVGWAQC7TnKZJMaTbgAAAABJRU5ErkJggg==",
            name: "Psykopaattihiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Psykopaattihiisi"
        },
        {
            id: "hisii_minecart_tnt",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXUlEQVR4nGNgoBAwEqNoalvqfxg7u2o2UXrgINDD7D8I/3g9CYxBbIQsAwMLAwHgYqePwpeTEWUgyQB5Fw0wvef+bzCtF6bAwDCHCAOmIvkbBFqKZzNo6csxWPupoqhjwqf51r1nDC8/3IOLX7v4iCHZbSojXgOmImlWU5JiuLTqAdiQ1FpnsAvQARMuL4A0gwyBAZBB86bsgtsOiw0mbIEGCziQISBwdNNths8ckECEaV6/4xQjThe8RPI3DKjqSTG0z0r4v9jU9L/F0+9wcUYQUVwzCx7iH96/ZhAQRI1rZIAs39uSxgh2wY3r58ESIICuGSYOAyB5kBhIDwiA0wEXFy/DixdPGB49uM3AxsHJ8OsHwokgABIHAZgciAbpgXsBBFy9E/4LCIkxfHj3CqwAGwBphqnZvXUBWC/YBaGxZf/l5FUwNHz79hlMw2wD0SB1ICwgJPZ/9eIuRgAbr4v66Y8MaQAAAABJRU5ErkJggg==",
            name: "Kaivosk\u00e4rrytappurahaulikkohiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Kaivosk\u00e4rrytappurahaulikkohiisi"
        },
        {
            id: "hisii_minecart",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABaUlEQVR4nGNkwAK2nOr9D2O//HCPIdltKiMDDsCETRCkad2inWC2uIASw9xd2f9JMgAEVPWk4IaBDCHJgGS3qYxiCtxg9tFNt8GG4AIs6AJT21LBzr206gGDXhjEJSBDiDJgKlQzCKgpSYENAQFeBlbivCDvogHGIHDr3jOwIYQAI7bou146j0FGQgAs9sEhhkFFRQXMvnPnDpwNAq6urowY8YvLEDDNfBJMC/w1Z8jMzATrZUQ3ABQOMG883HMD7JXPHL/BgVmZtgBDPWNxzSx4wH14/5pBQFAUp3+R5Xtb0sCGMd24fh4sAXYammaYOAyA5EFiID0wwMLFxcvw4sUThkcPbjOwcXAy/PrxHUUTSBwEYHIgGqQH7gVwaHon/BcQEmP48O4VWAE2ANIMU7N7KyIsWEJjy/7LySOiBga+ffsMpmG2gWiQOhAWEBL7v3pxFyQMQAKPHt4BY2SDkJ0JAujqQBaDJAC/jZc2WH4T9wAAAABJRU5ErkJggg==",
            name: "Kaivosk\u00e4rryhaulikkohiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Kaivosk\u00e4rryhaulikkohiisi"
        },
        {
            id: "scavenger_smg",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNUlEQVR4nGNkwAF6d878D2MXu6cz4lLHREjzsd1HUfhEGQADDTN3o9BEG/DkwTOIxnRXFBobYEEX6Gt1/a8q8JRh3wNMA/EaEBwcDPanqoogw+07DxmcVKASpmwMDAxPGfqJccHTP28ZGBgEGVRV5MGG7DshgVXTrNlr/qelhoBjhhHZdogBDAyxPL/ANKtDEQM+ADKEBVnA8tsbhuNcIgyLv7CB2U58Oxh2HJZj2HVoFYOishLD/bv3GIQVRRhObDwATxeMMBdYG31ieHzgOVgQZAgIhJmxgmkesXQwPW/LFBTNKGGgqiIPF3RCYoPA808QGl0z3AUgsHllCjy1gQIQGRRV78aZlFmQNcFcgewaQgBuwKpTvxmqVTBtB4kTNMDC3wHsfN/wOShOhYkTBPgUEjIEAC1Lc+Pbq0U9AAAAAElFTkSuQmCC",
            name: "Rynkkyhiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Rynkkyhiisi"
        },
        {
            id: "scavenger_grenade",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGUlEQVR4nGNkwAF6d878D2MXu6cz4lLHREjzsd1HUfhEGQADDTN3o9BEG/DkwTOIxnRXFBobYEEX6Gt1/a8q8JRh3wNMA/EaEBwcDPanqoogw+07DxmcVKASpmwMDAxPGfqJ8YK10ScwraoiDzYEhtHB4opoeKAyIttuxPQZLCinLApX/OjuawwDQPKxHUsZUVxgBNWMTePBPxwoNNYwuPka4nwYOzRThyG/8xSDirwCw52HDxgYoPSuc5cY8UajgSsvWDMITCw3g4t/+veJQUxWCMMFjDDG5pUp8IBBD7hVp34znNh4AGtyZkHWBAp9EIDRMHCieg7OvAA3AGRLtQp22/EBsAEW/g5g5/uGo9oEEycI8CkkZAgA9yh0wSCqHsYAAAAASUVORK5CYII=",
            name: "Kranuhiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kranuhiisi"
        },
        {
            id: "scavenger_mine",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOElEQVR4nGNkwANu3779H8ZWVVVlxKaGiRjNc+bMQeETZQAMmJiYoNBEG3DmzBmsNDpgwSbY5Ov7X+LKFQZkLUQZEBwcDPanrYYGw+FLlxhsoeIeLCwMDFeuEOcF/V+/GHb8+cNgq6cHNgSEL4gpM0iuXs1wQ03tf//Eef+xGhAMtf2rlhZcEmQIMh8GysvL/+MNAxAA2Xzw2zcGHTEOhhcMDAzbsyvA4i+e3WT48egKg7Oz8/+9e/cysqA735aFBewFkM01LCwMLSdOMJjIMTDsXzcdru4rCx8DSDNGGNhC/c197RqYDzIIFv+aFk4Mmw6eZgTRMM0gwIhswP7qarjfQAYhg7rNm7EmZRZkDjjq9PTgrkEBmzdj049qACzE0W3HFhMYBsCixrG1FcWpyFGGF+BTiM8QAJjChh+jAPa3AAAAAElFTkSuQmCC",
            name: "Miinankylv\u00e4j\u00e4",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Miinankylv\u00e4j\u00e4"
        },
        {
            id: "scavenger_heal",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLklEQVR4nGNkwANu3779H8ZWVVVlxKaGiRjNc+bMQeETZQAMmJiYoNBEG3DmzBmsNDpgwSbY5Ov7X+LKFQZkLUQZEBwcDPanrYYGw+FLlxhsoeIeLCwMDFeuEOcF/V+/wLStnh7YEBiGgbitpSiByYhuu4qKCgP3tWsMdzI0wOJX5hxh0EmxgdOPrt1nkNNSZFjk3c2IMxC/ammBFYIAn5U0Co3XC/q/fjHsvnWI4c6dOwzmb5ThtoEAjP507CnuQLTV02PYcG0fw/1/zxgY7jAwmDOoMHgcgygpvrYP7ApFJim481HCAAT2V1fDAwg54EBgnx07mD5QuoYRpwsOg6JOTw/MhtFwAxhuovCxGgAKPGy2g8TRbcYwoLy8HOx8x9ZWFIUwcYIAn0J8hgAAey9+FBRSRqgAAAAASUVORK5CYII=",
            name: "Parantajahiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Parantajahiisi"
        },
        {
            id: "scavenger_glue",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABhUlEQVR4nGP8//8/AyWABUQwMjJiSDx+efH/k8fPwGxLE0+wAmyWMYIE0Q04fmb7//reiShiu5bvYCTaALdIj//Vc4tRxOy5XPEbEF/S+v/Vw9tgwVlTChmSC8pRFDL/kWAQk1dlCHL3ZFi3cztDYUo0g766PCPcAM/QBLDxdeXhDBcvn2XQ1zWGawaFAUweBkCGLeiuYmRCFgTZDAIgzSBDmjpXgvkz5rf83756ASNMIwiAXILihccvL/7fum0zis0wADIsPaGa8cmrS/+DErMZTm87Ao8VJliogzTff3gXrFhGVgqsEeaCjMQaxhNnd/xPy+lnEOFWQTGcCUSANGzcdodBUV4ZLAiKf5AYzEuwcAA5H+YFFAOCErMxnA0yBGQjMgDFEiymUFLi6W1HGD1DVcChDPIGCIOAnjYkfSDHACwwUQxggEr4e7X8h3kDFpigMIEBdOejGFDekAi2BRRgMDFQ9MEMB7kC3flgAEueMMXoAJc4XC/MAFMvG6wKcYnDDAAARZ3D1p5i5qQAAAAASUVORK5CYII=",
            name: "Liimahiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Liimahiisi"
        },
        {
            id: "hisii_engineer",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNUlEQVR4nGNgoBAwEqPo9u3b/2FsVVVVFD0sxGjesasQzBYRigbzkQ1hImQATLOtTRTDm3dLGc5fbEGRZyLGCyDNMNrWuphh8lSf/0SFQXFZ3n9urssMoqLcYM3r1s8Gizc17GfEGwbBwcFgG/T0dRkuXWRgYHh9GaxZWRXiEgaG/YQDUUFZmgHFEAYGhksXL2OoY8Fl+4mjZxmYvkoy6FiJwGlsgIUBD7h97wbD7XsMDKpKGjjVsOBy/rVr1xgYGO4wWBn4gG3H5nycBujp64LpbZt3Mxy7sIVBxyoBLhYfnYoSc4zYDFi4dDY8nq8ce8Pwj/s5XK63axLhpAxz7t3LH8E0KAxICkQWRk4GLT0VhruXjzAo6/Iz3L58g+EfNz9YnKAB5eXlYOfD/bodKq4HEUcHAOexaAbuOMt6AAAAAElFTkSuQmCC",
            name: "Insin\u00f6\u00f6rihiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Insin\u00f6\u00f6rihiisi"
        },
        {
            id: "scavenger_invis",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSElEQVR4nGNkwANu3779H8ZWVVVlxKaGEZ/mOXPmgNmf37yBi0+bOxdFDxMuA0CaZ8yYwbDz3G+GY4/4GfgNc8A00S5Yvnz5/wsXLhB0ASM2zfUxc/5LK4ox8Gp9RRGPjIzEUM+CzAkODgYHGkjz0/uvGKQZxBgIASZ0AR1OTwZkQ2AYBppX/f+P1YBgqO0/pG+DNbzU9WVg8Utm2MBmBqanPlUAa7559xl+F8AMgSnUVRVGoUEAZJB+0qX/GGGgw+nJsOG1GYPKx0YGFZVJDDfv5jGoK0uB5WD05dtvGZZUSsMDkwXZAJC/GZ4yMNzhr2dguAMxRPyyNVgO5AWQK0CGX0TSw4hswKzaTfAAQg44ELirDQlcZNsxwuApkiaQa5AxukasXgAFHgMDJPowxTFtRzGgvLwc7Py0Zj8URTBxggCfQnyGAAANaYrLp31pwgAAAABJRU5ErkJggg==",
            name: "H\u00e4ivehiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/H\u00e4ivehiisi"
        },
        {
            id: "scavenger_shield",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABUklEQVR4nGNgwANu3779H4QNq67/x6cOKwBpXL58+X+5hC3/J736Tpwhk159hysK8vEBa4449gZsAAiD+HgNkENSALK9q7Pzv5DPVLAhIBqbHiZsgvElrf8f/hZkkJWTY6iw/cKwq20lmMYGGJE5wcHBYFtM/VMZrl86y6CpZ4yiuGvVXQYeEXmGRwt84PpY0E3kUTQC0yDNIENgAMSX13NiON+myYjVC8FQ2yWYP4E1rrwhz3CJLYhh8w0BMA2yHQaQY4QJm79Ahrx9BtEAcjIyDQtoWIwxoTt/9lU5hjt37jBEih8GGyIspQyWg9Ew/+eJcTJiGKAJDbT9P53ghoRrPATjh5f2wb2KHA6MyAZ0LNoB9xtyAILAwp5qRlBawBsL15GiDj0KQeDdlmzGd2hiKAaAAg+b7TBxbABuQHl5Odj5FXEeKN6CiRME+BTiMwQA5IepHzv6pXIAAAAASUVORK5CYII=",
            name: "Kilpihiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kilpihiisi"
        },
        {
            id: "hisii_rocketshotgun",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABZklEQVR4nGNgoBAwogtsjfT7D6LvvXzFkLvvBFh+spPFfyVxMQbv5Zsw1DNhMxVZMwiA2CAxbIAJm+CBp6+IEsNpQJKRDtwrMG+BxIgywBvqz3nnroA1dhmo/gexcQEmbIIg/yLbCGJjC0CsBvS1uv5XSIdohtlMtAs2r0z5r6oiz3D7zkMUV+DyPwgwgojg4GBwgFkbfWIAGXB9C8RGVQl+htsvPjJwPmVgkDHmZwjs3sm4vtQdrFZaw5DhwIEDDEwwzU//vGWYsfE53GSQZpAiEG0e7QAWOzW3AqwWZChMDROyc1LUeRj+nHmM4kSQITDw9MZ5FDmQQSzIAjAnIwOYJmSDArs7GBkWnwCzUQxANgRi0HkkAxG2d8Va/HdwcICEwdq1a8EB+e75G4bOWz/h/tb00WFgMZEFs+fc/AKXQ7cMHAYJYYIMGf6SKE4GRSUI3xf4B5YrV2NnMEvuAFsG0ggLTACT1KGpEmsT2AAAAABJRU5ErkJggg==",
            name: "Rakettihaulikkohiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Rakettihaulikkohiisi"
        },
        {
            id: "scavenger_poison",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPUlEQVR4nGNgQAMV82f+B2FkPgMewMRAIWDCJjh1826sbKINyPZ1xcrGBlhwuQDk99tXj5LugjfvHpHkAiZkTl+r639/mZdwVyDTBA3YvDLlv6qKPMPtOw9RXEHIBYzBwcHgeLY2+sQAMmDy0wdYFe4q2sOI1QWfrT8y3OOCaAJpzpVWAGOP74wo2K3PBZ6gkNksr8+/ZxA1FGTYwfCfgUdPj2HypUtg+stTCP8LlM9w6RJD0J6i/yA+DID4jCAvgFwAMgSsEApgCkEWYAMw9UwgTpOPIYZGEOA4IQBWKPtTEUzDMDKAJySQTa/PHwQruFq+j0FdWYXh5t07DOoMEFrspzDDF74PDOcXn4UE5mKQF/T+M4KiDxR1sBgABSCIjwyKqnczggIOW0yADQAxYJp2cP4HuwbkEhiNLxoBcHqlRjAYaKUAAAAASUVORK5CYII=",
            name: "Myrkkyhiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Myrkkyhiisi"
        },
        {
            id: "scavenger_clusterbomb",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTElEQVR4nGNgQAIV82f+B2FkPgMBwERIAckGTN28GyubaAOyfV2xsnEBFmwuAPn99tWjpLvgzbtHJLuACcboa3X97y/zEu4KZJqgAZtXpvxXVZFnuH3nIYorcLlgcUU0PHoZg4OD/1sbfWIAGQACIEOucZjBFSueOM1w8/UnBnVRPjgtpyzK8Ojua7A8S0KYIMPtO5/gGsAG3TkFZn+/wEhcLExZ+5JBRZ6T4c7DBwzJyhIMcspiYBtgNrlaKINpkO3Vq3cxgrwAosFeaA11+w9SCAMwp4Gciw2ge4EJXSMIHPzDAVb4QlAMTMMwNsAY52ABDlGQgrl3XzCoyCuAvQKjRaQEGDS+/IJrWHTgBNgLsR1LwV5ggpmuFyLHMLEcEfogkBMsznBqyyFGdFfANMMDEQRA0QeKgdwIMQYGBhBGgI3ff4BpkGHofgAASD6VF3rpVb4AAAAASUVORK5CYII=",
            name: "Isohiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Isohiisi"
        },
        {
            id: "scavenger_leader",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABZ0lEQVR4nGM087H7L6uhwAACa3sWMTLgAcElcf8f33jAcGrLIbg6FhBHVkPhf2+aB4j/H5tBII0gGqQmrGgGiqEsIAJkavGsHWABZINA4jDXwTQj2w4CTCACJAhSDAJoBsFpbJpBgBGZgxweyC5A9zeGC2AgwpKdIcGUjQEZ4NMMAozBwcFg/4JAQpggw+07DxlUVeRRFPmGz8FpAAuIsDb6BOUKgjWDDCEWMMEYII2TV7xiyO88BWaLfhaD0yCwuCL6P1YDrKG2gzTCwKU1j1Do1lC3/8g0VhcQC2CGwFzECBOQUxaFK3p09zWYvvkaFjaoQF2UD6wepI4JWQKmEQQO/uEAK3whKAamYRgdsMBsAdGhmTrgsFCRV2C48/ABAwOU3nXuEmOcgwXc/yDbYzuWgqMWHI0GrrxwEyeWm4FjA5nfvFjgvzonB1bvsIBshQFY/OdGgBISJPpgYOP3H2AalCqRoxQAxjOh/2G4+EoAAAAASUVORK5CYII=",
            name: "Toimari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Toimari"
        },
        {
            id: "alchemist",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABM0lEQVR4nGNkIACWzs35D6LfffjBkFs8hxFdnomBSCAkwMEwuTcFbBgyYCFGM8j2JYuPgNnZcX7/py7axEiUC5ZCnQ/SrJQcBDHMVId0L5joqTHcm7sOzP6wdjeKHCM+22/ffcWgqiwG9gIMoAckIz6ngwDIEBB4/PQdw9yFezDUM+LSDLIVFPIwAOK/ffuJoaFtFSPOMFiKpBmkGB2AXIEOmNAFYJpBfkcWwwUYsdl+4dIDBllpIaw2g8SRvcECYyxZfBKuSEqeHyX0hYX5wPS2zRcZnj38iN0F81YuArvgyatnDG+u3mIQEREBi7958wbMBtPaamCxutwKzJSYFB7HCNKMDOpauhgnzZjHCNKMrhEn8HQw/X9qQzRKpsEmhuEFGEiPdIcrnLl8J1gemxgMAADTdJeKbCv2IAAAAABJRU5ErkJggg==",
            name: "Puistokemisti",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Puistokemisti"
        },
        {
            id: "hisii_hobo_rich",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABUUlEQVR4nGNgoBAwElJw+sTS/zD23bvPGSKiS1D0MOHT3N9TBdYsKCQFxsrKkgwrlvb8J9oFqqqqKIph4Pbt24wEXaBfU/U/Kz0Uzl+2uAGrOkZsgpO3RP/fxBTBYLh3A4OkpDiDpKQQWPz583cMhSVtjHgNcN22Gezs9xcvMQjq64HpaNavDM+fv2To6p2LoZ4JPdCmq/CA2SDNgSzrGH5//cpgY6PNsE9ECasXmJA1+/q5Mrx/9wysEQRmHpKER1+JHDt+A2xstMF05v4HDPPOqoDZYlaWDKzc3Aznzl0H89GjEARY0AX49+wD0/+gND8DA0PX3r2MZcXJWKMUI9E4Ozv/B2EQ29vbG87GBZhgDOTo4eDgANNbt25lBLFBBhE0AFnzjx8/4HxkNkHw+PHj/3v27EGxDSQGwkS54ObNmwzS0tJgTchiX758QRFDBgDFk4k4S145/QAAAABJRU5ErkJggg==",
            name: "Rikashiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Rikashiisi"
        },
        {
            id: "hisii_hobo",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQklEQVR4nGNgoBAwElJw+sTS/zD23bvPGSKiS1D0MOHTvGJpD1izoJAUGCsrS8LFiDIABPIKpzDExlcxvH/3DMxGBywMOEBeTOj/58/fMeTnBMPFQGyQGMEwyIsJ/e+pJsWw/+MXBklJcQZJSSGwOEhzYUkbI14Dtjflg/146f4TBj1FGTDNpq3O8Pz5S4au3rkY6pmQOf09Vf9VIwLAbJjmp7+ZGGxstBmE333A6lUmZM2+fq7gwAJpBAGQZlj0ybtY4jfAxkYbTO+buQ4uCQoHadZ/DOfOXQfz0aMQayycuP8chQaB9fPXMpYVJ2NoRgH9PVVgBYEOVv9BGMROcbWGs3EBJhgDOXqEWSHMObuPMoLYIIMIGoCs+e1vhHpkNjaAEgYgmx6+fMuw+9INDNcQ5QKQZh4hIRQng8RArsDlDQA1MIn3CN99OgAAAABJRU5ErkJggg==",
            name: "Koditonhiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Koditonhiisi"
        },
        {
            id: "sniper",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABI0lEQVR4nGNgYGBgqDx59T+IRmcTA1hgDHe/qP8qDqoM51pbSdHPwAQi2s21GUH0nQO3GUCGgAwjyQAYAGmGGUKWAXcO3EahSTJAxUEVjHkluBhYXd2JNoAROeQ/HV0FFnx54ylDemg4hmJXV1dGrC74dHQVimZxDWmGmatXMty5cwesCUbjdEF2Xz3YBQob1zDISAiAJT44xDCoqKiA2SADYGwYAIllZmYywtMBCLzrWsXAUBYGNkTgwBKGOwwxYPGtf7gYtuBzAcwVfNZhYDbIOyCvvBJWYOCTkmXYkhuPVTMIMMIYsMTz/OlDBklpeTB96exRnBqxpoPnSJpAhhADwAaAbCfWRpwuQNe8c9MyogwDG/Dx8WmGQA8zeAZC5+MDAHnpecCf9sOGAAAAAElFTkSuQmCC",
            name: "Snipuhiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Snipuhiisi"
        },
        {
            id: "shaman",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFUlEQVR4nGNgGGjAiC5gF+7+H5l/aOVODDXIgAmfZk1bFQwxnAZo2Bj8f/X0JQMIwzQj08gApBbFAA0bg/9i0uIoiq4fvgOnkV0B0wyjmfA5D2YIOvj99DUDzEIWEAHjgGiYF7ABL3uN/zLifxmEtUQZ3n54xsBjr/EfwwX4DLn3l4OByWlOz9zjQs9B9LaDNxgxDEDWDItCkBjIzzeOXADz9XbflYSpYULXBAPIoQ/SCNPMJT/dzJK9AEzDDQABXM5Gj8ZvDzNPPZvgDabhgXjjyAVGWLTAbGJgYMBIQKBAfLQ8nkFfnYPh4oEfJV72GiUoCpATCAhgS4XKitL/QQaBaBAfns5hmkGxAAo8dD5W/1EDAADouX0OS/QAzAAAAABJRU5ErkJggg==",
            name: "M\u00e4rki\u00e4inen",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/M\u00e4rki\u00e4inen"
        },
        {
            id: "shaman_greater_apotheosis",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLElEQVR4nGNkQAMeGcH/kfk7ZqxlZMADGGEMu3D3/1yCPFgV4TOERd/N8j+/IB+Y8+39FzCNyyBsgAmbIMggeR0JMMbmLQwDPr7/hCKoaasCZ8MMIckF1w/fgbMfXnmB1wAWGAPkClhYoBuCL0yYfn77juH0V09fYsQCKJZAmKAXNKGGHFq5Ex51GjYG/0GGgjC6IUzsXJxYnQ3SBDPsxpELjDCM7jomGAPm/4MrjoJpMWlxFBfhAiygMAC5AhaIIFvAtkK8wZA+JRvFyb+fvkYxgBHkVBADZMjFXcdxJlkve43/MuKsDMICzAxvP/xlePLyN8O2gzcYsaYDbACs2GlOz9zjQs9BNIiPEgbEAr3ddyWR+XADQGFh4mePM82DAJf8dDNL9gIwDRMEAJaBe+H99swuAAAAAElFTkSuQmCC",
            name: "Suur-M\u00e4rki\u00e4inen",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Suur-M\u00e4rki\u00e4inen"
        },
        {
            id: "coward",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABX0lEQVR4nGNgoBAwogtEJqf8Rxc7feYMg4CICJh9Zu8eFD1M6Io/f/oEx8hAQkiIOBdgc8ntBw8YVBUUGJbPnYOhnokBBxCTV8RwBTbAgsxxCwj4//XLFwbv0HCoiD7D3csXGT68ecPwmZAX3KCauXl4GISFRcAuEBcXY3j58hVYfmJdNVhtRJzv/xWLNsP1McIY1i4uYAM0tXXAfF0zc4YbN28ysP25zyAkzg238dHN9ww62gYMNeXNjBheQAYgm3+9ucnwi4GB4csHEMnAwCPABsavX77FHYi6ZuZg+uubcwxy6oJwTSAMAqraMgwT+6Yx4jTgxs2bYP/fuPmV4d3LrwzcIkZg/PWrIFgMHTDBGEf37GG8cOIEo4a6OsP7D+8ZJBQUwBpBAfnq4X1wGjiycwfj2zfvCSdlXTNzeOiDACwGiALoeQFb3sDqBWIUYwMo0fj4yRMGkD/RxfABAKxaiqqNvkgTAAAAAElFTkSuQmCC",
            name: "Raukka",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Raukka"
        },
        {
            id: "flamer",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABY0lEQVR4nGNkQAPBvo7/127ezwhiT+0q/Q8Tzy7rBouhA0ZsgiBDnGxNMMSxGcKEzQCQC/YdPgNmW9p5MIDYIBobYMIqysDAAHPB8UM7UGh0wILMOZST8//a588MWry8DHZl3YzIYYALMMEYbZMn/j+irsqQsXAh4wouDnA4wLyBDzAiG/Dk8WOG29euMwTYaYHFQAbAYgSvATPi4/9fEhcFC2iLMDKcPn8NRdGC5VtxGsICIkB+voSkWc3KjUFdWYXh5t07YFrNyg0cFlW5+SguBvFZQBy7KVMYQQF4mYGTwdRQi+EjDtvWbtsKD1SQ4SiBuIKLg0H30XcG5quvGG4d28WwefE0FIUgoCjEwfDiygFML8DAvLf3wS7Is4sDx/vpY7vgYZAQ6f2f//sTcIIysnCGe4URrhua9pEDEGQYCODKByCA4gKQZpgmZDF8AMUAmAZYtIGcjVc3tryAL86xAQAa/4/9KvPyOgAAAABJRU5ErkJggg==",
            name: "Liekkari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Liekkari"
        },
        {
            id: "icer",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXklEQVR4nGNkwAO6pqz8D2OX5YQzYlPDhC7gG5L0H1lzmL8DWPzB45dww5ABIzZBmCG2Du5g/uEDO8FsbK5gwmbA5jXzGGGaYS6A0eiABZkz49L8/9ef3mTQlFZnyNALZwR5Y9XGA2A5GI3TBavmL/gvdJaRYaJnB+Pn1Q/A3gA5nRBgRDbg4b37DOeuXGYwdA6H+x3kHYIG5G+v+C9zjB0s8F9ci+H82RMoipbP78dpCAuIAPn5M8MDuOZAO30GDV1dhhuXL4PpQDt9SJQmJqC4GMRnAnEy9BIZeUMVwBKGxhY4nXvpzNn/MIwRiJ9XP2Dgs/vG8FT5PMP6QxcZ2qcuAYuDXAEDfOIyDDtO3MH0Agwc7L8EdkFhkwM42tYfOgEPg8jEwv8PvnKC04OCrDjcK4xw3dDkixyAMO/gygcggOICkGb0MECPEbwGwDTAog3kbLy6seUFfHGODQAAzgCY3W8GanEAAAAASUVORK5CYII=",
            name: "J\u00e4\u00e4hdytyslaite",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/J\u00e4\u00e4hdytyslaite"
        },
        {
            id: "bigzombie",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPUlEQVR4nGNgoBAw4pM8eeb+f2S+uYkihnomYjWDwOT52zHEGPAZAMJsfPxgDGOjG8KE2wgGhlOXb2BlIwNGZM6kJdvApp+7e43BWE4bLGamqwGmbZ0MGHonrmDITfRkxOqCSUu2/TfX0GQAYSNlLYazj66i2HR43wUwjdML5hqaDOhskCEgp0/fuhZMo9sOAizITkf2L8gVYEPuXmXQkFKGy6EbwgJjgGxB9zdIDKYZm+0oXjBS1mL4z/ofrhnkigX1JWBNN57dZeiYvR5rGmCBMUAhD6NBLgEZBIp7ZFdgA4zo/ocZkukdDGafvHGd4dv3n2A2yCUwwypSA8GuQ4kFkEYQBikCpXuQN0Di3CwcKJpBAOYlsCmwdA/ShOxXR0MDsBhIHlkOZjscgBQgJ5CExp7/yAahZyzkAAUAP9Cruch9dHIAAAAASUVORK5CYII=",
            name: "M\u00e4t\u00e4nev\u00e4 ruumis",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/M\u00e4t\u00e4nev\u00e4 ruumis"
        },
        {
            id: "bigzombietorso",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLUlEQVR4nGNgoAdg4+P/j0uOEV1g0pJtYMXn7l5jWNbbDBb79ekjhjoYYELXbK6hyQDCRspaDFHFtQRdwYTMAWlEZ4MMAWnG5QpGdNth4NTlGwz/WSGWgryjIaXMUJEaiGEICzJn+ta1DMZy2mC2ma4GXAykmagwMFLWAtsK0wxyxYL6ErCtN57dZeiYvf4/Xhecu3sNToNcAjLo5Jn7//G5ghHmf3QJkCGZ3sFg9skb1xm+ff/JAHMJzDBQmDAhawIFIkgjLNDMTRQZQd4AiXOzcKBoBgGQlxhBtufFeDGCnAo2xESREdmvjoYGYDGQPLIcRoycPHP//+T52+EaExp7/iMbBLMA2XY4B6QRWQFIEluIYwPgMIBFGzIA+ZdoA0AAFFgwV8ACixhXAAAIB6JOYmI3QwAAAABJRU5ErkJggg==",
            name: "M\u00e4t\u00e4nev\u00e4 kroppa",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/M\u00e4t\u00e4nev\u00e4 kroppa"
        },
        {
            id: "bigzombiehead",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmElEQVR4nGNgGPKAEZfEyTP3/yPzzU0UsaplIkYzCEyevx1DDCc4eeb+fxBm4+MHYxgbmyFMxBh46vINnHIs+DQc3ncBTNs6GTD0TlzBkJvoyUiUC84+uorChxmEzQss2AxYUF/CyNDY8x9mmLGcNpwmygAQMFLWYjh79yqDhpQy3NAFDGSAjtnriY8+BmqBSUu2DYCt5AIADLdCjkUHWAQAAAAASUVORK5CYII=",
            name: "M\u00e4t\u00e4nev\u00e4 p\u00e4\u00e4",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/M\u00e4t\u00e4nev\u00e4 p\u00e4\u00e4"
        },
        {
            id: "slimeshooter_weak",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuElEQVR4nGNgGGjAiEvi5K7a/zC2uVszTnWM2AR7J0b+t9FUwRDHZhATNs0w9pHrd3DKYXVBLxabQYYgi4H4xfnL4fpYkBXDFMJsBvEXrj3DwBDMAKbjg00gfFxeOILk5Nq69WD6zsXHKDR6ALNgcwGI3r+6FMyG0Sr6shD5YFSLmLC5AFkBjD27JgLFEqwGYIsq9HABAeRAZGLAAWAGgTTCQh7GRgZMuAzAZhsymygASzjYEtDgAQCP2lytdUGkLQAAAABJRU5ErkJggg==",
            name: "Heikko limanuljaska",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Heikko limanuljaska"
        },
        {
            id: "slimeshooter",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAs0lEQVR4nGNgGGjAiEti1enY/zB2mOlinOoYsQmmTHb472YhiyGOzSAmbJph7F0nHuOUw+qCFCw2gwxBFgPx5+QegOtjQVYMUwizGcTftvoemA2ivUKV4HysXtiF5OQFtcfB9KtLL1Fo9ABmweYCEO22G8JetjsM4gK9exguxOmCXUgKYOwJvfYolmA1AFtUYbMVZyCiGwTyK0wjWBOWaGRCF0AHyLYhs4kCsISDLQENHgAAgq1aVTjYns0AAAAASUVORK5CYII=",
            name: "Limanuljaska",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Limanuljaska"
        },
        {
            id: "acidshooter_weak",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9klEQVR4nGNgoBAwYhM8uav2PzZxc7dmDPWMxGoGgSPX7zDYaKqgGMSIrhmmCKYBG0A2hAUm2Dsx8j9MEqYxyLcUTDdOqGCoL+gAs9dt7sb0wkmos9E1wgDIAF1lYbg4yBCYK5jQnYauGQYu330LZ4PUwCxjQg+kV3fWgzEy+PP1OwofWZ4R5n9kv8MCEQTEVAIxNMLUFecvZ4QHIiz0QTRyTIA0IRuMbgkTzCTkcEA2FCYGE4exYXIs6GGArACbYeiACZkDcgnMC8ia0DWD1J2/9ATVAJgAupeQNSOLL5l7GGs+YohJtoXnBVjqRBZDZhMExCgGAM7HlhKwSRXqAAAAAElFTkSuQmCC",
            name: "Heikko happonuljaska",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Heikko happonuljaska"
        },
        {
            id: "acidshooter",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA30lEQVR4nGNgoBAwYhP0P1j0H5v4Rvs+DPWMxGoGgS9HrzDwWOugGMSIrhmmCKYBG0A2hAUm6Nzm9h8mCdM4MaYVTOcvqUZhY3jBH+psdI0wANOEbAjMFUzoTkPXjA2A1MAsY0IPpOr7y8EYGTy//AyFjyzPCPM/st9hgQgCrYqRGBph6vZW7WKEGwDTiM0QZDFkNjwM9lbtgkcnLo0wcRgbJseCHgbICrAZhg6YkDkgl4AUwhSj08jqYAELNwA5pJG9hKwZWfza8itY8xGDVqQOPC/AAhdZDJlNEBCjGABZ1Y9nF5upMgAAAABJRU5ErkJggg==",
            name: "Happonuljaska",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Happonuljaska"
        },
        {
            id: "lasershooter",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2klEQVR4nGNgoBAwYhMsPjT5PzbxXrtcDPWMuDTfOHQcq40adpYoBjGia4Zp7IktxGpAyeJ+FEOYYBLeLVFwZ+PSDJNDdh0jurPxaUYGcx6eALuCCd1/xAKYK5iwCeLyOzbAREgjDCB77cajc6gGwAwBeQFZEhc48v8X3LtMIGJrzTJGZEmQIdgMQhaHuZoFRQHUFSBDbBjZsBoCkkMGLMgcsEtaGP7DDEE2GARgzgZFn1GEJTjq4QY8v3IfrgGkADlhYRM/t+I41nzEADMZBGCKkcWQ2QQBMYoBrKJ6X5FZ2X0AAAAASUVORK5CYII=",
            name: "Mulkkio",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mulkkio"
        },
        {
            id: "blindgazer",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6UlEQVR4nGNgoBAwYhMsPjT5PzbxXrtcDPWMuDTfOHQcq40adpYoBjGia8anUUWInWHLhgMohrDAFHi3RKE4Oy04FMWAZ39fg2mfAAewISguKEZzNkyzoZgRhksmXt0EZ4NcwYSuAJ9mEMjX9mNAtowJ3Z/4NGMDTMimgcCh108IagIFJooB6IaA/InsV2Sw9flOeEygRKM3NBZgErhsRY6BrTXLGOHRiO4SZINAYjegbJg41kDcWrMM7CJcroCJg6Lv+ZX7YDbcBTABmAL0hIUufm7Fcaz5iMEowhKuEaYYWQyZTRAQoxgAOAFqzJ05+OUAAAAASUVORK5CYII=",
            name: "Sokeakatselija",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Sokeakatselija"
        },
        {
            id: "giantshooter_weak",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXklEQVR4nIWTMUsDQRCFb48rLK3tLEQRbA79BRo40EKwtrETUlmJVSpJFYSIgoUW1hGRCAG1slTSCGKwSGedMt3JN/iW8Txw4G53595782aWC0klBk+tMqmJ8WSa7O+0QzUf/iP+En8Y2nrSvou8jNd577BUlfnZGVtHL+8GWFxbthzko4NTyxWNvCzWWyaSQgZAQILcv340MI9yCNW1GtioIoTjTjNWUvSez+x70cjjPOQw1eHz4ysZvl1GkI86shylqnx1cROHhJDC7/lOexJFJOMFKF/Zs4QqaKAaJGRcUkhtxVsYT6bJoNOMlQCK5IcnshyYwOjHCj3iQsqaS13gGA6YzFfzvbGqIgRcckPgF5bmoljGQSRA1akT3W7fSJ4sd2Fze7VUUv16Fwqdq/nUK3JFPH5wqiSyrlEYc7C1u/EHIMsK34Ly7M2BflNWxMghxqqzyMrf374GhL4Bt/oQwRvWYl0AAAAASUVORK5CYII=",
            name: "Heikko \u00e4itinuljaska",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Heikko \u00e4itinuljaska"
        },
        {
            id: "giantshooter",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXklEQVR4nIWTr0sEQRTHZ5YFu00MGmyK4aqghgXT/gEmi6Bc1yKXLghaPVFYgxgEi+G4IGxQwXrBH+3CGcR2/dLK5+F3GNYFH+zNzJv3/fHecN7V4vq1U7mGGE2mrrt54ut5/x8wjrI/tPXmaBBwKT+dx8NKKkuzM7aOXz6sYHFt2XKAT/fPLZflRbWz2jWSBDAFBCDAT5elFfMpB1FTq56NFAEcXLSDkqL31rP7LG+FechhosPn+7d7+CpCURxNYDlKpHx3dh+GBJEi3nNPeyKFxGsGW/O7ZjW+1GxilwiprfAKo8nUlf12UKIQAhTj4QksESMY/6rRY90FRE1BW2CoSWM1lxfBPqsUAeCSF6J+YWUukKUcBKKoPnXi6nhgoBgsd359u1UpqX5jFwqd6/kkZuSJ+OLBSUlgPaNqzMHGXvanQJYVcQvKszcH+puyQkYOMladBVb++XboIfoBfxkRO2sbt9EAAAAASUVORK5CYII=",
            name: "\u00c4itinuljaska",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/\u00c4itinuljaska"
        },
        {
            id: "poring_holy_arch",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4UlEQVR4nGNgoBAwkqL4/5+F5BnwH6rx508GBg7ueNIM+PEVYSu6ZrABnz9//g9i8PLy4jTsxdOpcLaEdDaqAQ8ePAAbICwsjNcQdINggIWBBPDmszPYMm2eFQgX7Ny587+6ujqYo6CgAHfBlRs3wIoJASaY5i1btsA14tKMbDOMzwgKA5DmnJwcxgNHLsA1iohwMLx58wPOxgVY0DXDNCJrhrHRAUiOEcZBtx0EsBkCY8NoJmQTv7z5ANeIbCsuzSAAdgGy7cQCmCsx0gHMFTwiAngNgLkA7gVkjYQ0I7sCABQaeW91k7N/AAAAAElFTkSuQmCC",
            name: "Korkeajumalallinenhyytel\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Korkeajumalallinenhyytel\u00f6"
        },
        {
            id: "poring_holy",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA80lEQVR4nGNgoBAwkqL4/5+F/8ky4D9U48+fDAwc3PGMJBnw4yvCVnTNYAM+f/4MVsDLy4vTsBdPp8INkZDORnXBgwcPwJLCwsJ4DUE3CAZYGEgAIqdFwDSzqxrCgJs3bzKoq6szvH37FkXxnw0rMWyDgb+7byEMUFdXBzO2bNlCUCPIZmTNID4jKAxAmnNychhfzZz5X+DfV7Akk6Q0w7/nT+FsXIAFpvnX9L7/DP++wjUia4ax0QFIjhHGARuAJAEC2AyBseE0AxJ49+w9XCOyrbg0gwDYBci2EwtgrsRIBzBXCEkJ4jUA7ipsGglpRnYFAJuhgRRyQl/NAAAAAElFTkSuQmCC",
            name: "Jumalallinenhyytel\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Jumalallinenhyytel\u00f6"
        },
        {
            id: "poring_devil",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJElEQVR4nGNgGGjAuKX7yBkYx6fUxoRUA5iuPr7PAMJ3Xj1lQDaMWMACY7z++JRh/fGZpOpnYPn04zWYceTaFoaDR/bh9AKy67xzdeDijPY2TmAJZM24vALSuHXyFRQxRly2EANABjIiawYFJghoyyoyILNhgO3fJ2NkA34x8Z0FG9CZt/gMukZ0PtPnl2DNyhJSDK9+fAOLKUlIMTAhmwhSDNIEsxXGR9Z898Uzhs8fPjCIcXAx3HvxDBGN556dZjCSMkVxAcwQJiTN+hpaDF8+fACzwYHYCXU+zBAQABmEDL69f2rMwwK3Cw54BQQgXkDWiK4ZGXz58weFD/IGSiDCvIHNNciuABkEY4MNCA/JO4PLZhRDb++CR6OGiDYDl6D0WQDfMJCQ1MdImwAAAABJRU5ErkJggg==",
            name: "Ep\u00e4pyh\u00e4hyytel\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Ep\u00e4pyh\u00e4hyytel\u00f6"
        },
        {
            id: "poring_magic",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA90lEQVR4nGNgGPKAkRTFF2pvbYaxZXzE8BtwAUkxMgBpfLLlFW4XXMChERdgROYci7+0mYEJwuaS4WD49uQHnA3XwPjUB6sBxxIvbUbXiM7/+PECWDO7CCsDD4sQWIwJ3UkgxSBNMFthfGTNP9/8Znj74iXDlz/vUA34cv87XBOyK2BsmGYpHVk4mxHZ+ciG8Chyorjs/utTPkJsbBiByIRNI7pmZPDu1y9MA6zm6/nCNMEMgrFhfEVRsy0gzTBXwAzC6gIYgLkG2ZCnjz8zgPD3lz/BhsCjcZfDSXg4wDQhG4bOh4mhJKTlRls3C/OJoLgEl0aYGACEgIjYrqe5PgAAAABJRU5ErkJggg==",
            name: "Lumottuhyytel\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Lumottuhyytel\u00f6"
        },
        {
            id: "poring_lukki",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABA0lEQVR4nIVTOQ7CMBC0Aw8AGghUNEhAJD5Ah3hOnpCKnoaCx/AKWnquBqiRODQhE4bFiJEs2+ud2dnY8YcsezhBazbzul+n6aNZq7nj5eIw25zIGUBQRUeLhQcZ4KyIbABJGKjMGCvzXAtE1jKTLckWIbz2SqImoAV1M5yMy7PKtPcWYP+2mhKUeFttXi0cpB8lgxgiAyTnAsfio8Am7CIYJ4m777f5AHRt4XnPdNAfdF/KceeD9GtftdYJHCIp5EDFIntlwGl3/mmdZMwYHkFeE+2rSKNdD/ZeCrrirkPEf2Tg4x0A1+U8dwMhCuj6SyD0t9lk2w73QFWfLkWUEHKiBZ7e27hPgyNjQAAAAABJRU5ErkJggg==",
            name: "Lukkihyytel\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Lukkihyytel\u00f6"
        },
        {
            id: "poring",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqElEQVR4nGNgGAWMpGr4s2Hlfxib2VUNvwHIipEBSOPf3bdwu+APDo3YACO6wKuZM/8L/PsKZjNJSjP8e/4UziZowK/pff/RNWLjI4sxYTMVLCEpDbcVxsdmIAu65nfP3jMISQli2IjsFWQDGdGdDzMEBEAGEQJM6LbDNBKjGcUAtswiRpgmmEEwNjIfHaCEAcz/yLYjG4rNAoxYQLYRWSFIM7oXQQYCAJPFXvO2dZ7cAAAAAElFTkSuQmCC",
            name: "Hyytel\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Hyytel\u00f6"
        },
        {
            id: "goo_slug",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3UlEQVR4nGNgGAXUBf+/nv9Pqh4mZM7f3bfwGojNAqY/G1b+x2UzsoG/pvf9Z+Q2ZERXwwgygJAzmV3VIIqxGMACY/x7/hSnAf8WPWVgkpSGewHZICaQRphmkCJ0ABK7fu0+w9W9Rxh+L9oPFkP2MiPIC9hsB2kEiYM0c6a6MKgqyzFcqpjHoKmlCJdnCQhnZEHXDNOILP7m7Qec3gOHwbtn7xmEpASxhoW4gADDy3VnGL4zMMBtB6mXyCwChwM4HcA0wySRaZAcSCMIw8RQXIBNEN0QdDmJ5mZ4dAIAYSN4NUAyDYgAAAAASUVORK5CYII=",
            name: "Liimanetana",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Liimanetana"
        },
        {
            id: "slime_teleporter",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABB0lEQVR4nGNgoBAwYhNMj5z9H0TryapiyGV3OaDoYULmhHu3/gdhkEYQPnT1KFgcmZ5aduA/TgNAQIBPjAEG7LStCRrCBGOAbAZphjkbpBCEQYZMDi0G08gAZggTTDNIwYdPr+A2gfggHKplwSAazw6mYYbA1KC44NLj23Db8AGYa2CGMCFLIpsMMpAYwIQukLu6lwFXFILA6msnsHvhw6dXKH6EuQCk4fXCn2CDYQELAjC1jDADYAGJ7gXk9IAsDxJbubWaEWcYgFwE8wayy2D4yfOrmGGwcms1I7Iz0WlkdTKS2tgDEWQySAE2V4HEYTbDaDiwNooCpyxQWOATIwhgmgiJwQAA7iWlbnOcOj8AAAAASUVORK5CYII=",
            name: "S\u00e4r\u00f6ilev\u00e4 limanuljaska",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/S\u00e4r\u00f6ilev\u00e4 limanuljaska"
        },
        {
            id: "slime_leaker",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVR4nJVSq25CQRDd3WyCx6FA4KDmWhJqsHwAXwABTR1fgIa0sooPqEUACRbBwyFA4eqrLjkbzmYYFpIewTzPzNnh2u/tKJ//bAzQamfm+PtnJKrFQvRRO60PMa40asaOFh85m56RSQRBw6eIBJSd9xdTrpcealTiOVlvA8a96R1p+NkPzwxo1EKfxwZK4y0QD94Gd+TJbhLy+g4e8pCotrPQAD9FliQAiwHb7GQ530glfJa+eCrv5IFYSF1bk+FDhYWC924rNiy/5qFBDuY/IS17HH5IgsUw5KgCVpIZc7DnNNjVbGPL9VIuc/o74DL0Qr1DEYG+rhgYfVp5G/dwrdv0VJ6gIvQ5btRFqUgPlJyogE164L+Bw7yKNa6z3s1slSnYgwAAAABJRU5ErkJggg==",
            name: "Vuotavajaska",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Vuotavajaska"
        },
        {
            id: "slime_leaker_weak",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKklEQVR4nJVSoW4CQRDd3ayoruQHIJdLak7xAQ0Cwyk+AEGTqkpkPwDVpBWViFPUVBCCxnAhISGk/YHK6rojb8PbDMO2SZ9gZmfnvXk7nN1sH5u399oAg35hPr9/jET7+irmuDus9/GcdXNjZ6tJw6bfyCSCoOFTRALOPg5fppO1Lu7oxFNZTwMe7p7OSNPn+/DMgG4e+jwm0Bp3gXPvZnxGXuxeQl3vwcMeCu1+ERqQp8iSBGAwYMth0fCNdMJn6Y2n6k4uiBepbWsycriwcFCObmPD/HUZGqQw/wkZ2ePwQxIixFCjC0RJ5pnCnmqI86q2nazVyJr+DuKwqg7uXXBQ1VZvVwjGnFHuxl1s66SeqhN0hD7HifpSOtKCkhMdsEkL/htYzF9njSPqM80D31ZOXQAAAABJRU5ErkJggg==",
            name: "Heikko Vuotavajaska",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Heikko Vuotavajaska"
        },
        {
            id: "miniblob",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAQklEQVR4nGNgGAWjYBSAACO2YChtifiPzO+uWYFVHQgw4dKckMSD00C8Bjx9+AaMW+sfgGlkg7ABFryyDAxgg/ABANe8FiQITb50AAAAAElFTkSuQmCC",
            name: "M\u00f6ykky",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/M\u00f6ykky"
        },
        {
            id: "blob",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeElEQVR4nGNgGAUUA0Z8kqUtEf9h7O6aFVjVMhLSiAywGcJErOaEJB6sckwMRIIF875gtYCJkO0gm/EBJnSBpw/fYLUZZhi6PAs229EVScuLwA178/Ijbhd016xgRFcAMxCGQcDNzxQzoKNSXVAEsSmCqcFqwIABAGYPPbP24dTpAAAAAElFTkSuQmCC",
            name: "Kiukkum\u00f6ykky",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kiukkum\u00f6ykky"
        },
        {
            id: "blob_huge",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjElEQVR4nGMsbYn4z0AAdNesYMQlxwRjJCTxgDE2gM8SJphmQgCXIUzInAXzvqBIorsKmyFMMI3omtENwmUIE0G3YzEErwEJSApxuQrZFYxXn6X8x+d8QlHLxEAhYCLFdmyByYRPMXrAYbOMiYFCwILsNGQbiPUaEzHJGAaweQvuBXIDExwLxGrGpg4AS1lAObaBWMYAAAAASUVORK5CYII=",
            name: "Kammottavam\u00f6ykky",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Kammottavam\u00f6ykky"
        },
        {
            id: "blob_big",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAfklEQVR4nGNgGGjACCJKWyL+Y5PsrlnBSNCAUhyaiTWMiYFIgMsiJkIaE5J48BrCRMiABfO+4JVnYiARoLuCCZ+T8YmRHAu4YoWJgQSAzSVMpCjGFqBMuAzAF/pPH74hbAAxmok2AKQJhkHgzcuPDG5+puDAZ0E3kRAAaUYGANjCNSiHkNBwAAAAAElFTkSuQmCC",
            name: "Isom\u00f6ykky",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Isom\u00f6ykky"
        },
        {
            id: "ant",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBUlEQVR4nGNgoBAw/v//n6CiRHU3uKL5N3cxgjUygikGBpAB+HCCmut/bOIwwEKKc5FdAnIEUV6wEtf6ry4gg+J8ZC8wEWPzlxYHhlsB4uguIGyAFdT2Z2eu41TDiMsLDcYxYIldT84xwLwAAyCv4PVCIpJTj728xnjzwxOcLmBB1wAC8jxiYPrhl1dgGuQCkK0gdcgBCXZBA9Sp2ABIMUgepgldM9wL8lAbYQBmMwg0nF0CNgSvFxjQAMjPyIaiGwLioxgAshGkAUSDNIMCDqzQOOY/TDGyprmu/SDDwHwWUDTBbAUBNxkjrDYjG4ACLMU0/4NwvVE0ONPAaHQ8x6UPRRwGAIAJu+G3Flu8AAAAAElFTkSuQmCC",
            name: "Murkku",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Murkku"
        },
        {
            id: "ant_pheromone",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6ElEQVR4nGNgoDdQU5T5j8xnJFXTrftPGCmyEV2chYEEgM0ljIQ0SYgI/ufj5QazP33+yvDizXvSvCAhIvj//9fH/9/e3PIfm3eYiLH93ZOLWL2B1wsmumpghU+ev2aAeQFbTLCga0S3AepnsEtAYYBuGAuyBpACEODj4YLwv3yDG8LHy/0fRL948x7FACaYYmwA5FSYV0BsUJigq2GB2QiyDeZMZFecuXwLbgiIjdUAdAD2K5LLYBqxGQSORnBII2kA+RXZZmSDlGQEGMI8zeDi8HQAMgRks4ykKIoGkCHIBq3afgrFGwD/kXyPOn/tCAAAAABJRU5ErkJggg==",
            name: "Sairaanhoitajamurkku",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Sairaanhoitajamurkku"
        },
        {
            id: "ant_suffocate",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4ElEQVR4nGNgoCfQ9Qj9T7ZGXUo0M+ARZyHXwMs7VjOCaEZiNEnrGP8XklFiQNYIA0zkuoBoA6Shtj/eYsBwuUsYIngpA24ICz6b+CVlwez7pw8yfLgG1YwGWAg5ES5e9hbB0ZvBiNUL0jrGcM0w2z8+f8zw9MpZxndP7mF3gS7UqSCF2BSBQt0mseg/SB7ExhmI/JKyDKDAghkC0gADR+b3McJchB6NGGGAbAhME8wQkEtgbAwXgGxE1gDyN7ImmEZhTUkG/65uuBjcAJCtoOgC0Yqm9hg2wwzaWFaKknoBc/NyjUpCQ7EAAAAASUVORK5CYII=",
            name: "Tukahduttajamurkku",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Tukahduttajamurkku"
        },
        {
            id: "ant_fire",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4UlEQVR4nGNgoBAwEqswWVH+P4w99/5DovVhaEYHLAwkAnSXMBKjyUZY6L86Hy8DNi8wEat5dpMew5y45xiuYMGnuUVHC6xwx/MXDIx3dmJVw4JLM7ItR96+Y7SdguoNuBeS0UIYxAdhRW5uMP/+169wQ7BFISNMMUjhzU+fGWC2wAyouXKNEeQVEI3NpUwwBkgDSDPIEGSbkQ0hKgzUkQyBuQLdEGTXMCH7FVkDyM/oNoP4ILzAKhwuBvYCKJpAtsJoD0kJopwPBjBJZEXYNMBsRbYd7gJ0gM/WhGMrUWIDACadfeN+TQG1AAAAAElFTkSuQmCC",
            name: "Tulimurkku",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Tulimurkku"
        },
        {
            id: "rat",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhUlEQVR4nGNgGAWjYDAARlwSDZkx/2HsT8+eM/Rt3ItVLRM2wSJ/ZxTNMLEAcz2wOIzGakCRv/N/PilJDENBYutPXATLg2gUL2xLTISbuOfdI7BimM3IhsHETt68z2Curgj2FgtIs9f8+XD/gWyAKYRpQjYQBECacQJrDSW4a5DZyHxkcQCuQz9giKChzQAAAABJRU5ErkJggg==",
            name: "Rotta",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Rotta"
        },
        {
            id: "rat_birthday",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAp0lEQVR4nGNgGAVDFCx3PPmfIgMsrmTDDWAiy4TDmXAmIz51DZkxcJs+PXvO0LdxL6PZ4VSwGJMgG8MJnamMOF1Q5O+Mohkm9un6C4ZPu00Z/r3/hdsLRf7O//mkJDHEQWLXUzcxeF1cyXDSZhaqF7YlJsJt3PPuEVgxzGZkw2BiJ2/eZzBXV2RghGn0mj8fbhiy85Fth2kmCKw1lOAGILOR+ejiZAMAUxpEh8eJAz8AAAAASUVORK5CYII=",
            name: "Juhlarotta",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Juhlarotta"
        },
        {
            id: "bat",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzElEQVR4nGNgoCYI5w7/T6oaRnSJlV9XwsWmu88Gi8koyID5Tx48YThwZA8DsjommGYJERkUg9A1w9gONi4o6pjQnQgyCCQJswlkKwzA2MiGMOHyN0wRTKPPDA+GjB0pGOqYYP558eYJnEbWDAIwjZyMjGD2kycQtSheWAkVANEgBSCMDECaSQLV2vX/QQAUmDA2CIDYyOpY8BlSo9PAICMjA2eDAJh/FS0MsIHWq40oboYZlLkzFUWciYFIgK6RaAMycWgkCsBS4+AGAKxkbVVMRQOdAAAAAElFTkSuQmCC",
            name: "Lepakko",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Lepakko"
        },
        {
            id: "bigbat",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABG0lEQVR4nI2TP07DMBTGny0GEGuHDh7Y4QgdOiDBDXIBqoYzgESQyhlaCS4QdUVquQfdO/gKiDHoc/MZ+yWhfJIV5/m93/vjxBTnRSMiUn/VRhItb16DXev+Y5b5GQKo6eQ67t2F6wD83mcQOx65fwfTnlZn+4KZCeuYDFvQgADxvwDnuhWhFTM0MAQvPqvM9nhVBVC5vTtkN4f4AMCi0j10KtI5gy2bQdlSz1roX3ovt7KebyQCvPfBCH03vdc/OGCbGgEhiM8UShuq5YANnR4unxo9af0tMCuCX3bPBjE2c2ipnAdLjSu5VgiQE1D4wv3q9q3jrJNQFoFY2ok2tMXW8NS+sQVkx6H+25gRZ+me1UaAJqf2vnbo/wP6AcnARlk10wAAAABJRU5ErkJggg==",
            name: "Suurlepakko",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Suurlepakko"
        },
        {
            id: "ccc_bat_psychic",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5ElEQVR4nGNgGF4gisPvP6lqGNEllv3YBBfblbL5/9P7T8BsaUUZBhB799HtDMjqGGGaZYUVGR6/vQ+XnO88/T9MIwiANMPYC5bMhqtjQnciyCCQgTCb0F0AAq7WnnBXs+DyN0wRmD3bB85e4DIDRR0TzCkg58NoTXlduIKEPRkMr4+8ZPhw+R2YBvGfPHkCDwMmmEKYAHIgUgSa1av/gwIShJEBSBxZHQs+Q0BOlZGRQfE3iM9wE6GGkZAr0MVqb7ai6MGIRjTAKCMjA9LACNWIYSEhAxgS92YSUoIbzHeeTlARADdqefGAw0ZtAAAAAElFTkSuQmCC",
            name: "Psyykkinenlepakko",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Psyykkinenlepakko"
        },
        {
            id: "firebug",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAv0lEQVR4nGNgGFTgYPz0/yCMLoZPDxO6gGKYBYpBR6+ewWsICzZBkCFg2xmm/wcZAMJEucB+YSbj/VUnMAzC5xVGbIIwxSADQAaCXPBb+Bpcvn7ncUa8BoBAqL7qfx0JEYYrL94wgOjQ5YwMqyMhjgCxtYSOMeI0oNHdEqwSpBkEQAagA5grmHBpRtYIU4xOYxhw7Z0VXDPIdpgLkF2DLIbVBeiKVl+8zQgKDxAN4zPgA9feWf2HuQSkEZkepgAA1eFp1EiPk2IAAAAASUVORK5CYII=",
            name: "Pikkutulik\u00e4rp\u00e4nen",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Pikkutulik\u00e4rp\u00e4nen"
        },
        {
            id: "bigfirebug",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7klEQVR4nGM8GD/9PwMSsF+YyciABtpMkv9ba5tglWMBEYphFnCBgwwQA7EpxgaYQArvrzoBFwAZBsLoLsNpAAPUNmRDYAYRYwgTjAEzBN01hAxhRBdA1gALmyX1UxhAgXjgxSIUtfU7jzMyImtEDkx0L0250MegIyFC2AvogYmuOXQ5wtEgNiMDDi+g23jlxRusLmDEEAGZrK/6H10zDKy+eJux0d3yP8j/IJoJl2aYJmTN6AaCaCZkiWvvrOCakV0AshWEkfkwmgmbF2CmgzBIEchVMA0wNgygGKAldIwROZSxAWSX4AXoNtEMAAAfY4RMpQIl3gAAAABJRU5ErkJggg==",
            name: "Suurtulik\u00e4rp\u00e4nen",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Suurtulik\u00e4rp\u00e4nen"
        },
        {
            id: "bloom",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIElEQVR4nGNgQAKbnI3+M6CBmxER//GpYULmvP8shKIAm2aQGhQD9nuYYdiKbgvIIGyuOxns9J8JxkB2BbLtH36/QnEhsuZvX79AvABigAQ0ZP+hKMSnGSMMvn39AqZhhmADIDmYPEw9k+OOU4wgBhc3D15DkMVg6kB6mdAFsQFkr4DUgSyDAUYYA1tswBTCDEfmw1zOiKwBZAiy6dg0wpyO4QJ8LoEBZI0wwIJNUftce+yG7IBQEemaYPkVM68zgk1EFijvNv8vIMQBVvjh3Q+Gh3c+Mcir8IH5IPGLp16B1aG4ACYAMgikCKYRBjpLT4INRnYMjM8EYsA4MINAGpD5IC/BDIS5EqYO7hSY0yuTDzIiewmkGeRsEIB5BdkSADNcwhN5uxeFAAAAAElFTkSuQmCC",
            name: "Puska",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Puska"
        },
        {
            id: "shooterflower",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/klEQVR4nGNgwALeTQv5f7dY5z+MD2KDxLCpxav526W5/0EYnyFM6JphbJhGdDa6IUy4JEDg99VLYIzNlVhdAALv795gkIwvRNEIYoPEQHLogAlmIrIkNluRxUBqYa5gwlDJwMDAqq1HlBiGAe+hrsDnAnRvMGETJMYFMD1MIOLa5Z9YbcMnBtPDBCJ8d91mRDbkzZm9GAYgi4HUgvSADejYrvkf3RAQjawBxEaWg2kG6WV69+I3mAESuFrIwrDa5S+KIciaQXIgNTDNIL1gk2ACIBokiA8ISbCC6QrP63C9DGXzVf7DMIhf0qKKkaxhYuhqUSSQNSDzccmB9AIAobHSoOqf6GAAAAAASUVORK5CYII=",
            name: "Plasmakukka",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Plasmakukka"
        },
        {
            id: "mudman_friendly",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABVUlEQVR4nO2Su0oDQRSGv91NspvdREWjGKwEgz6AT7CoaOOlUTFYiCBapBAsBBsLtZOUQVsLy4CFRZBgKeIDWFiICJGYKDHksuQyYoposhvQ3h8GZs6c/5uf4cC/OioyhYiGvWLNRHyke8TxIsKpz9UJIOkaT7kSowHYXi7gbAepcwZYNxHBbqhrKkfnlvSnBDsLbiG7dVJ5LwYWNJZdslMxuuIWZqhCJmMRNF6Qqu+sml7xa4BLrhC/Bb9PRSnJBPxBzpIlKTI3YINI7YXLPcT1PdSLkMqDobs4TVSbfbPjiIu7b5/UDtiY0YVSKaIaGum3MvUqjAzCQdz5w+Wfh81pnygVio39a65Mfxe4PZC2NCdva4LDcJ94TGUbxJNk62tbEwhkhViiZkvRTNCrZkFRbeYvxa6Qhjw1dift49QE3DzAWMBif9555p6LMqFhiC613n8ColBnQYL0+G8AAAAASUVORK5CYII=",
            name: "Mutamies",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Mutamies"
        },
        {
            id: "fly",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHUlEQVR4nGNggILH29L/g/CMUKX/ID6MJhrsztQCawAZAhNDN0RLQvQ/CKNofLwt/T9MM7ohyAaga0Qx7DEWQ2A0zBBkA5DZLCBC1msmI8ygG5sPg2mQGMiQu29+gBVmijMyMIiLgTXe//qb4RrUAEZ84bFi2xMw30CAg2H6y/8IgxgYwPxrL14zgl2ADIpUBP/fOPaGgVjAiMyZrC/2H+Q8RW5WuNiFDz/grkAGIHV9d94zMiHbDKJBmkGSMEUgEOElw5B78RVW7zJhE4QZ4ukqyTD34Se4RpAhIHGY7SgGKCLZjA5cp18DxwiIDdII04zhAkWoITCDkDWC2EQFIgNSAGF1Dr4wwOUFkgAoNl54ehKdEzFiAeZ0Yg0BAHWNqurmRw83AAAAAElFTkSuQmCC",
            name: "Amppari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Amppari"
        },
        {
            id: "frog",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAY0lEQVR4nGNgGAWjgB4gbor9f2QaHTAR0nxhASecxgYYCdmMDhblHGQkaEAcmuZoHUkw7e6wAkM9Xi+8ufITnzR+A0Ca8yMUSDfAK8MC7HwRHXaGiSsegJ2/9MpzsPNhcsgAAMxNJHhQzS+mAAAAAElFTkSuQmCC",
            name: "Konna",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Konna"
        },
        {
            id: "frog_big",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoklEQVR4nGNgGAXDHcRNsf8PwiB2VL3LfxBGV8OETzOIfnPlJ5z94eUXDHUs6AIgW1hEf8P5IjrsEIWivxlERCFsZMCIT3O0jiSK4qVXnjP8ec3KsKxxDyNWL7Dg0QwTQ1aDYkAUUgBh04xLDsUFIOeBwMQVDxiePcUMMGwAxQBQKIMMAQXc6sNvsBqCLgY3ABQwAuI8eA0BsUFiXhkW8PQAAOugTt05YEfYAAAAAElFTkSuQmCC",
            name: "J\u00e4ttikonna",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/J\u00e4ttikonna"
        },
        {
            id: "fungus",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAu0lEQVR4nGNgGPKAEZdE9dTD/2Hs1mxbnOqYCGnGxsfrgvykBWDFPMbKWDWgu4YJXTNIIy7NX87exXANEzZF+ABIPiawHW4II4iACQgLSoJtBymC0TCAzn/7/jnDkvWVjHD/IBuCDEAKkcVAfBAAaYa7ABkgOw8bgGmEAUZcCh/duY5hkJyKJiNR6YCBgYHhyb0bKGxkPjJgwWU7yLZju9bj9Q4IYDgJpBmXbTJKGli9gQJgtiLbjk0MBgCK1mJ/iKiU+gAAAABJRU5ErkJggg==",
            name: "Laahustussieni",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Laahustussieni"
        },
        {
            id: "ceiling_fungus",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArklEQVR4nGNkwAKO7Vr/H0TLKGmA+U/u3QCz5VQ0GdHVsmAzAKaRkGYQYMImCFIM0ggzDMYm2gB0V+ADTIQUwLxAlgFPoE7H5wVGdIH2qkBwDOAClW3rUfQwomuWFBOE85+/es+AzIeJIRvChCwJU6z8UxIrH0SjG8iCy6kwTcj8u+zPMdQx4dNEyFCsgXi4sxprIMJsTyiYhzsQGQgYZFveiqEeZzpAV4xN8+AAAAVfPwCWur2MAAAAAElFTkSuQmCC",
            name: "Kattosieni",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Kattosieni"
        },
        {
            id: "poisonmushroom",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOUlEQVR4nGNgoBAw4pJYVj39P4wd1ZqJUx0jMufGsiP/z129zPDo5RMGOXEZrBrQDWMEER0p1WDb0DWBDPLQdWDgEOUE8zfs246iBmQYI0wzTCHIBUbaumAaHUjzijLwc/KD1YEMAwEWmOS1V3cYHl1+AmZriamAbUd2FYgPE4OJg/hMIAbIdhDn4YvHYIkdlw+gKIJ5BSYPMxAcBpk+cf8jbPwYjt85DxYAKcIF5CVkwTTIMJCLD188DglEkCEwRdbxfGBaW0qPQUXTGq55497pDEcXfkIxcPqWRYzwKFmyOgdsSEzoFLDY+aOz/oMMuHP9KFje0DqNEaYGWR0jLueCDADRMENABmBTx4TLgHt3b+EMC6IMUFJWQwkDkg0gxzUo4PO7q/9BGBQWMJpoFyArhnkDRGMzBADb0ZaT7SXIkgAAAABJRU5ErkJggg==",
            name: "Myrkyllinensieni",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Myrkyllinensieni"
        },
        {
            id: "fungus_smoking_creep",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1klEQVR4nJ2QMQ6EIBBFgWxNo9Vu4Rm8AMXW3oRreQRLK9strSy9ghdg80m+wQksZn8CDOP8NyNKFeS9D1iqIlMr+Avgb3QuArww12DmTvEviGEwDEPY9z3GPCncSxCNzTkXrLWq67riqIRO06QvEzjnIlma5RQluMGG7nJ8GlIQcmjIphFgrVXHcZwG2Qn3FIJ6LEIeTMru67qeeTSQvwQBovmAKKKhJNSkWpZFxwn4gZDcKY2MzyB9mJxSU6pLcp7H0PfvS0HTPLPGLADatk9o29dtwBciwHD4eZZK0AAAAABJRU5ErkJggg==",
            name: "Savuavasieni",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Savuavasieni"
        },
        {
            id: "fungus_big",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwklEQVR4nGNgoBAw4pN8smzZf2T+yw9vCRvwBE0TNoBsECMpGrG5ghGbRpAicQFhDD42LzBhMxWbbdjUvLl2hYEFJgGjYTajiyNrcp8yE+51FkJ+xKYJwwvYAEjTezVBMFbITWHABVhw2bJnz5L/srLqKIpv3jwNDnB1dVNGggnp5s3T/0VEpBEuevMURSNBA96+fYYSvcLCUqSFgTCaBpjz8RqArAgUBshyyN7BC0CGwDSD2CCvwDAuV+A1DF0zuiEAe82QtE6iFyYAAAAASUVORK5CYII=",
            name: "Nuijamalikka",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Nuijamalikka"
        },
        {
            id: "fungus_giga",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/0lEQVR4nGNkQAJ+27f/19ARBbPVeYSQpRhufnkHFgPRXbImjDBxJmRFPEJCKBpBimEAphkdMKELwGxCF0MWjzp58j9WA2SkmDFsR9YIYyOrY4IxkE3F5lRcckzInCfP/hKlCaQOZiEjLPSRAxLZiegApPnLO4SBLCDi/ZNPDIIyfGABkOQTBoifkQ2CuQ5ZM0gfI4xjO3sl2BUwg/ABkEYQOJwazgg3AB2ADIQZBtJQwH6aITiuB0M9Cy4DCthPb2Z4zeCrpKzGcI/9FgOIxgZYcBmgpKzmC6JFJDTAfEPrNKyuZcJlAEwjOptoAwhpJGjAmxc3sLKJNoAY20EKAUJibhrc8lzXAAAAAElFTkSuQmCC",
            name: "Huhtasieni",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Huhtasieni"
        },
        {
            id: "lukki_fungus",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABG0lEQVR4nGNgoCV4+PDhfxDGp4YFn+SnT58IWsKES+Ly5cv/sbGJNgAEXr16hUJjA4wwxud3V//fuX6U4eDpbwzCwsIMUlJSKAovX74MpgsKChjPH53139A6jRHFAGRD1m5/xCAiIsKADN68ecPQ0tIC1qyiac0AUgczhAHdEBgbpBgXH0YzMRAJYDbzCmmj2MpEjmYQH8ZmwqbB2475f7gHE9zpHc0ZKJpBhoFojIR0/ugscCCKCIJ4jAwghSBQUTuDgYM98/+b9wxgMZBhsDBgQXcmCPz4+Z+Bg52RISVKF0yD+CCw9dA/Rl4hbRTXgr2A7EeYU0G2wQwDgS/fGOHOBgGYOjABcg566ILCAZm/9dBfuLORDaAYAABpIJ+mChQ0VgAAAABJRU5ErkJggg==",
            name: "Revitty sieni",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Revitty sieni"
        },
        {
            id: "lurker",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnElEQVR4nGNkwAGiM6v6YOyl09uKcKljxKX5yvEdVjC+jqXHMZghMINhfEZCmpENAdEwOZihjMQagA2ADGFioBCwINuM7ERkICIpx/Dm+SOsBjDCNKNrBGkCAVwaYWHARIqf0TWjeAEdINuMzzVMDBQCRkIBiAvAw4ABmqpAGJZYSAFMpGog2QCQq9BdhhwLWJMyMh89EyGLUQUAAGmwXl7Wu8VVAAAAAElFTkSuQmCC",
            name: "Varjokupla",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Varjokupla"
        },
        {
            id: "maggot",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJUlEQVR4nGMMy53+nwEKbpzdBaYvHVvPyEAkYEHWrGHsBmZrGLuBDV01OZOgQUzompEByHXILsQGGPWsAv9j0wwzGAZweYsFl8norhKRVPq/b20vI1YvENIcoHiOQURKhQEbYEJ3PjbNG+4bgdlOwcXg8FjWl/ofhPF6AaZ5zlE+BgaGOwwwANIYVTQb7hUWBizgzTOoBkUGhjfP7zFUhIjA5ZA1Y4TBjbO7QIEF53esecMQaPqK4ebDa3Cx+nxrlGhlgtuGBYA0n7zwDMwGGQLCMD6KC948u4NwNhqI83cBa4JhEB+nFxiQAMjvMJvRNRFlAAisPy0GNwQG0AMRHgswG2HsT++eg9kLd0LEHty4jz1jKWhYwEMVlC9AGF0ORCOrQwYAaWqNULYT71sAAAAASUVORK5CYII=",
            name: "Toukka",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Toukka"
        },
        {
            id: "skullrat",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJUlEQVR4nGNgGAW0Bf////+vrmX1H5kPA3g17lpc/N/Xyvf/w+uHwIpbglrBGmCaQYbCDGFE1gjSBKLNJSzA/JMvTsDZIGAW+I7BNaYHzN69pITBLbaXkRGX5uq1VXCNrcFtYMNgYNPRTQyPbhxmkNe0Y2SCORlZc2yrLYOGtjWYDaKRDQMBP2s/sGYQmwlETJ5+C6wZZktOcjfDjatHwWwQDbINBHIz1TDCiwkWQCBbQQqQnQryJ8xAkAWn1guB1YC8AAtEJlhA3TyzkUHdxB+sAcQH2QpyGcx2WKDCAhHkNZAhjKDA23xsM9g/INfAXIDsJXQ+yAXgKGRERAJYMywmYN5CpmHpAaQGRIPSCEiOBTlAYC6pWVeNkj7QbTMPsvgPiwUAonu2HZhabUsAAAAASUVORK5CYII=",
            name: "Kallorotta",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kallorotta"
        },
        {
            id: "skullfly",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABg0lEQVR4nHVTsUoDQRCdO+4LrGwFsQsWd6hoK2KTgFpoY2WVQBq1MqkksUslaJVKi1iokCsUTWtIJIhilwi2qfyFkzd37zKe5EHydm/nvd3ZmXUkQRRFUX3nTCq3JwIGqncVp7ZdjxiDuWTgcgBRf9xLGYAYhktbP/qNZk9XR6mpw50RNJdbl5vTN12AoP3STnd6vj6W88uhlIsLGvf92ZGN/YbjFdYKGrCbK8n84qb0xxc6t2IAIpGhMuJiNMRjwGEJwli8PLuSTVVF5WLHiONUHPzhaBTZowdBkAYPBgPlr49H2Tuo6rjVrIkLMYELI6yYgNgCRi4nrABPAncC4+zOhGePjh/nyLXVnORvT8Q1VEJQ29H7Q0TkV/PK9hvg+/4fxrq6jZJALtBgmhGRGvi+rxOwNZlmRGY6Li4ElwNGqfgOAHQfofmKaKfa7y4aCGIwy8SLRKvSyJb79X5mYoDguAvjXVAJvDqagK0RK8aHpa0cdkMNCLsiyPlfByWgkX3iv7qvRyV6mgo/AAAAAElFTkSuQmCC",
            name: "Kallok\u00e4rp\u00e4nen",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kallok\u00e4rp\u00e4nen"
        },
        {
            id: "hideous_mass",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABWElEQVR4nHWTsS8EQRTG3270m6i0EtGJRDYIrUJzl6CgV7lEgwpRyJ1SIzmVioJCJNcQtBJkI0SHRKvyL5z8Rr7J283dl+zOm2+/9715M7PJ5+t192L/xXYutw18vd3YRqMd4qmhaVvem7Dv93t7vhq0p5/HwHceOlGbNBdb3TAzC2LMJJQJ8JxMWksHlvKBxMmF31CZuJosrK+NxphkkPKiKktUXAVFMDs6/ihx0cATGvstXdD3tBcJtKkeh+1GaMObD/RzpkdfXRts9n8a6HhSn+wTqiehvam2ahwjD+BOZFkWRnB7ulmaA+ZeawoQS+BFVTNpxRuT2kytJPIVxHszjwRyZHw+9nt3thWvrd9tTsDrhLRKDo/NlU5DRr2Sg4GCPM/Dz4FQ15nrLfBNo2KQ0AfEyupuIIqiCGN9th5XIkNpBLSpkpkoWRXUBr8zOD9pxmRiVv0HlO00LKIRyUwAAAAASUVORK5CYII=",
            name: "Hirvitt\u00e4v\u00e4massa",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Hirvitt\u00e4v\u00e4massa"
        },
        {
            id: "tentacler_small",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5UlEQVR4nGNgoBAw4pJY3rrzv7iCEMPLB+/A/Mhqd6xqmfBpBgEYvW/p6f9EGbAcSTMIGEn2M3haLgS7BJshTOgCz+++ASsGYZBmZgkuMIYZArIAWT0LMqcvaSlYEqR4+/F4hinT96EYrmwQD7YApwEwANIMAjmZTmDbYWDLegbiAvH53TdgDDLo74tvYDEYjQ4Y0QVg3kAGSTFbwYaBDC2aF82I0wXLW3f+BymQVBZBMWDeEm+4ZvRAZEJ3OgzADAJhZEPRA5EJ2ekw58EUISuGsUFqsHmTAVc4wJxMUBMxhg1OAAC81YAdCzznBAAAAABJRU5ErkJggg==",
            name: "Pikkuturso",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Pikkuturso"
        },
        {
            id: "tentacler",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/klEQVR4nGNkwAGWt+78jy4WWe3OiC7GSEgTDDy/+4ZBUlkEwyAmmEYQFlcQYgBhEIDRMM2pJfvBNLpFTOgaYeDlg3comnF5kQmXk2GakQGyQTA5Fmy24tKEzRUs2DSi24zPhSzEOHli/RYwnZPphKGOCV0zSBOys2GaQWDK9H3wQIWpYYFpTorZyjBviTfD3xff4BpA7PxGHxT+vCUQGgYY+5KW/gclEFhCgbkExobZBNHsjaKmaF40IxN6KgPRyGxk25DFcYYBAxYAMmT78Xi4OhAG2Q42ANk0mCSyYega0QHYFFA44LQeKTxgAGY73AswV1x/dBGrAbg0gyQBHpW1S3NCAgIAAAAASUVORK5CYII=",
            name: "Turso",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Turso"
        },
        {
            id: "tentacler_big",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+UlEQVR4nGPct/T0fwYk8PLBOzj7+d03DKkl+8Hs2T2ODJLKIgzogAmXZnQAMghkIDpgAWkCSaCbjmw7PsAEU4jNdGyuwDAgFYsgMYbB1DHhMh2X82GGw1zOQo7NyIAJxvj74htW2yfWbwFjdItgapiwKUDWjMxGtgQGWGCMKdP3MXDxesNdwyzBxZDf6ANXCNMMim6QC0B8kB4WmCKQwLwl+P07b4k3g6Qygg/Sy4QqiUhMyM5Fth1Gg9SDw4ABqgCbJLIhMDEQgMUWSJ4FWRFMAptLYGLoUQ12Ach0WNTAomf78XiMMEBXA9LHhOx3kG3YogrZMHQ1AH9LrWzgBO3pAAAAAElFTkSuQmCC",
            name: "Isoturso",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Isoturso"
        },
        {
            id: "ghoul",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtUlEQVR4nGNgoBAw4pMsbYn4D6KfPnzDsGz2HqxqGfFpRAa4DGEipDkhiQdMS8uLMFx9lvKfoAHINoLAgnlfUNh4DShFsh1kI0jjxVN3wfzumhWMMINwGoAOQIYgA1AYRKW6oHiDEVuIwzQiBxxII7ZAZMFmKzan4opGJmQOTCPMBbg04XSBNA7b8QEmdAGQIeiBR5IBDEheIcsAUHwjhzxJBqDb/OblR6JdgmGbm58pQdtBCgFOclwkbiB+KAAAAABJRU5ErkJggg==",
            name: "Sylkyri",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Sylkyri"
        },
        {
            id: "giant",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABgklEQVR4nH2TPUgDQRCF5y4BK8vDHzAIIcUVsUiliFVahVR2oo3WoiBoI1pom8rG0i42FlbCgRBEsbBJIIUciAGNxF4s/OFbnXM3dzhw3M3uvDfz3u55MhCr2/WvXjGS/YUpabQ+5XznWophRT7m7iXXLEkwXpDjw3VP6/1BMG8KAb9GIwYMCEJI+k+PTkNfMgJA5+TdWYMQkrhzlzRyCGrLG2aRDjyQ8AZAMA0xuTbsTOHbXdgIl4YMSMHzBzP/TuHrJotoXCz7BkSOfnLtiCxIpqu19ATFsJJlR+KJykJKpoT4VyuhUwCgo01i+5PyINcspbq3H9pOjke2ub5utG4vzeXQjkxBjMbVxGBArONVSgJBARqVRMccPBEm1YZ5saLXjX9AUUEa8uL4Apjue1tvcnVxmqzn9SMYmzDnmoCigjkZzXfLswasOfX9565nJNhXk9HsiwQJ3Y/qgcl1dMU5EmBUEhFJSPXsFUydTvz3L6xs2lzGD5V0E505urUev74BwJf6R9sskLAAAAAASUVORK5CYII=",
            name: "Hiidenkivi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Hiidenkivi"
        },
        {
            id: "pebble_physics",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4klEQVR4nGNgGN4gIL7of2rlhP/41DDh0ywqJQdmV+6p/E+SAb5zfMGaXz97BBc7/7L6P1EGVO6p/N/kq8fwQnkvA8wFb/aKM6y6/A/sKoIGvIEqZj6sCuaLOL8E09cX/2So7+LE74LUygn/Qc4GKYZpDtNlArsGBLC5ggndRJizNWPZwZpBAOSlv7a3wa7D64LX0EADGXLlwRUMxSD5u9fP4TZgw8I+RpghoDCo23wJzAbRID7I4MunDjAi62HEsIaBgUHXzOG/sqYRWAPI/xJ3neG2E2UAzBAQDTIIm8bBAwA2N2nppcoxawAAAABJRU5ErkJggg==",
            name: "Lohkare",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Lohkare"
        },
        {
            id: "longleg",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVR4nGNgGN7AxtDtPwjjU8OET7MYgyYDCOMzhAmf5tJ9X8B8fIYw4XNetxMPmIYZRJQBNoZu/z+++o6iEWYQSS54xXAdrhHEBhmKzRss2GznF+ME82+/Ogdnk+wCYgETMYqOnN/FCHIJNm8wEW0VsS6wNHbBysbGxwqQnYjuXELJmiwAAD2UNmIbWjHMAAAAAElFTkSuQmCC",
            name: "H\u00e4mis",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/H\u00e4mis"
        },
        {
            id: "longleg_pillar",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArklEQVR4nGNkQAM2hm7/P776zsAvxsmATh85v4sRXT0TAxHA0tgFpxwTPg0gWoxBk+Ha46NYbcdqwJHzuxhBGkAaExc+AouB2CCvEe0CGOh24gHTpfu+MOACTLgCEVkjzCCiDICBVwzX4RpBbJCh2LzBhCsKQeD2q3NgzaBwgUUnuiFMDBQCJmQOsk3oACanJWuN4goWUmyDpoX/yGmCiZiEhGwjeoJiwmbLCEtIACp6cgF5VyzcAAAAAElFTkSuQmCC",
            name: "Kohoava Pilari-h\u00e4mis",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Kohoava Pilari-h\u00e4mis"
        },
        {
            id: "lukki_tiny",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3klEQVR4nGNgGAUUA0ZcErUHyv6rCLEz3Hn3kwFEx+s1Y1XLhE0wttX7/4OjV8FskGaYgUQZENvq/V/BWpsBhPdsPgcXBxkEkkNXz4KsEVkC5AKYISD64Mw9DPbpLgwMDFtRDGCEaX545TmDvI4kA4wGaQIZgs6HgcXVW8F6WWCaDy0/BxawizQC80EApAnERjYM2cUgQxhBGmCa0V0DMwTkfBBAVgfSB1LDhE0zTAzERnY2cjiB1CC7CCwJMhWdjQxAYuiBDY9GZNNQTEYCMFuRDYEbAPMzsmKspqABAFh7jXl2O4MuAAAAAElFTkSuQmCC",
            name: "Pikkuh\u00e4m\u00e4h\u00e4kki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Pikkuh\u00e4m\u00e4h\u00e4kki"
        },
        {
            id: "lukki",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABaUlEQVR4nKVTMUvDUBC+VyIObt06xaGbRaSrUB2CINHNRaG6WegPcLB0Ku1/qOAk6OImGZQMUXANHeoWsC51c3MoBJ58Ry9cmjr1G947Xu/77rvrxVhraRU4OIwxucdudGWr5XWOk58ZTd4/6K4T5JOICMUNH0oAZNwiIFgmBG5JJzX7vkXS6zBkghDDp5gFveM65xRaAPDD5u4WXbtrlEYJ+cOQqOVxVRAF89iKE0eTkZx+JuTsn5A7HbET4HYc0F7Ly9pCbrNPcGJ4BueDIytVpNev8TcFB78slkaP5L9ssAgAoYvtHnMdPCA5pJhvt1bhCjdnO5ltcQTA1aRWkVmYbIiaDKCqvvEOMnLgVvJKON4eYiNk2Afa0yqTUf3yfsTvz4NDLiRtAkb2oHFat1pEiy2L8S8UFqkxF5GWZGgaMmC4LiySq8iIpaq+hSycnACwuPMYHEhiW4pk+O9r1Cu7uL6ay32sgj8aL/IWw7JlYQAAAABJRU5ErkJggg==",
            name: "H\u00e4m\u00e4h\u00e4kki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/H\u00e4m\u00e4h\u00e4kki"
        },
        {
            id: "lukki_longleg",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXklEQVR4nIVTsUoDQRCdPQ7s7VKdxXUeItcKkiIoIulsLMROwQ+wUFKJ+g0WFiJoYyeHCCmiYBtEtLOIjXZ2FoKw8i689WUNOnC5vZl5b97MTpxF1ult+3xyInw/v3/a4O7JTncrZ2PM/QVWEvjHkaU8rO0ve02mHR9Ww8Nmq/bn7RJfniQJwVNz0yMV8XQv+3Z9sGTVwofdHHVDvNUuQ8GEYEjDA+Mb/q/ehaXNFcuKRk1KY0GHn5OHjqdcJCLINqCCABDHMQcFkKQT16R4mBpfn9lzifaMPl8e30JyDIZpHMrd/GrpIRsBDAv9bpzdhx6phAVowIxcY1Y0LG3O1kMzy2sgehxI/1oAbYPU6TXq9HUGIIJCXCkKbL3mgTTVvpREF4rtLO5cWVb8gLFMjlU4CzVdLt0PFr097w9vQYdCNQTocpGQYJwDAUz/JDwjGWC+4Y+V/jLu+X8+xL8B6PPvB5ZJ55gAAAAASUVORK5CYII=",
            name: "Lukki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Lukki"
        },
        {
            id: "lukki_creepy_long",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA70lEQVR4nGNkIBPsWmH8H0SzwBhuEWcZidE4q9UQRT0jusTzlwwM9ZPOYxjWmGf4X1IcU54JxkirPs8IkgQpSg3VAxsGAzA+NsMZ0W0CKZaRZGZ48vwvw+zVlxiRDQPx0dUzYvMnsqaHz38xyEuyYdWM14CHz3+hiIEMAbkM5EWYl0E0CzabQQoZGNjAtqNrhoUDKPZAMcGILRZA/kf3ArYwABnCCGMgpwNsAYnMRwmDXQQ0o4uDAEo6cENLgTC/whTDAMwwWCBiBY15hv9hYYELgORB6nBK4tOMTR08KYOAgjIKFyfAqQ6WM4kBMLUAmr+O6exFpJQAAAAASUVORK5CYII=",
            name: "Kasvoton Lukki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kasvoton Lukki"
        },
        {
            id: "lukki_swarmling",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPElEQVR4nGNkYGBg6HZt/Q+ir7y4wrDw8nJGBhIAI4wRrxsJNgQESDGECZmjI6EDxjAXEQNYkG31/ObyX4xLlFi9mC4Qg2p+9e01ipfwAUZ0AZjGDKcgBhE2fYY3vy6CadVuNUaCLvBUdgFrBoXDkWu3GP5/e80g/EcKTB/PX/2foAHb7+5hBGm20VJjsFIUZzh6fj7Dt82RDH/fXgcbhC1wmXD57cK1iwwKL/czfGVlZfh5rIlh4oFesME4YwEGQIkJBCwV5Bi+3//BwMDBwXBLxo0hVtuc4fC1W/AwgqUVRgY0AFNgKCTPYCIrzLD+7AGGINtAhmP3X4INB8UQKLZgNCO6AaCABEmAwgIEQM6esW8dmA3TBAMgNSzoBsBMh3kFBtCTNyhAQWqwCuLShA3gjAViMxTcAHJzIwA4Soa61mx/hgAAAABJRU5ErkJggg==",
            name: "Nopealukki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Nopealukki"
        },
        {
            id: "lukki_dark",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABB0lEQVR4nGMsTWr8f+3RZYbnL58woIOG2laGhuZqnGKS4jIMTAwUAiaY7SCTMVyAx3YQAOljgjkFpgAZvHrzAoydTT1xu4ABahKyyTCN6IZl5SdjNwAGQIZg88ry7fPhbJhrYOpY0EP/8I4jDLhApGci2LBpE+fCXcy4adXe/zDbYc6GKcQHxEQkIAYY6Vr8R3YSNn8SZQAIoAccNgByHQjsPb0dHHuMMANggUPI6SAACgMQmDlrOqoLiHUFzPnwaGwApTAs0YfN6ciawQaA/AGOf2i0gBTAFCM7GeQ1mDiyZYzeLiFgL8DSAygsQAGEDtDzAYzPpCWnCxaA5QeYZkJeAgUgSA8AQcuK6UT8F0QAAAAASUVORK5CYII=",
            name: "Kammolukki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kammolukki"
        },
        {
            id: "star_child",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABpklEQVR4nIVTu0oDURCdDQFRFkFImgRhm2DEB6ksTEBEY+MPCGoh1oJgYZNyGwtB8AMsouAPSAoRERMLSx8YSbMQYmEWBAkGq5Uz7lnXZMUpdrkzc+aeOTNXauUxTyIMfqeS8/6LxzLWqJzspX8l4ZxODMqQmRD8o+LAtdyuGDjkp5N6cF46YqXM4I+khtPs86No7a4tq7stwyCdcDIL0ggIF82vPys2jg9AIk0NphOuggEaye7IW31fzyiKlngJLYYP6X10XElOlRSM5GFrLdABfsTZBs2gQKTN5Mt6VpYXJuTw6Eo2l1xp39tBHO3AVAOnkvPYL28+bZRka2MuuOXs4lFmBraVQThXp/B6vagM0NtkoaS0/7J351geqrZqBUNBI4rB7eeB0qehjZWMHckghn4gDB1Ims/WFUT60IBg5CEfOIzSCNbSnz8EhGBgkiycS7taDKYDP/ehbw+slKmgQG1xteeAtl/USn1vLE0L9K4tR9qq2j2b2PUFbP4sEh9OeOc5Z6pN2ogjL/zA4sXZcTm/edKl6H2NvF1Z+T0zDlytbHpfQGw8GNF1jP0AAAAASUVORK5CYII=",
            name: "T\u00e4htilapsi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/T\u00e4htilapsi"
        },
        {
            id: "miniboss_pit_02",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABU0lEQVR4nH1TTUvDQBCdhFUa27Q0QoioIIIgeBCPevTs2Z/bo9fiQSiIUrRqDBhJW5Oih8ibdpZ1u/FB2N3ZN28+duKdX13XG1FCNn7ylD6zN94H7Q6F+0fklQXVWz2aPd/zGVBwBhnYbAX0vajYEU7VrGA71uprzrYuEXW3Y6pXgXyJCOfpR0ZNEDGb45uR8/SFXh9GTMbehtjGd0NtU00RL6IDvb/Jx2siWsArC3p/euT6TMfLzukfoogEYU9zuYSpo27b2T6v9aBqqNlVkrwIgNfzXY6D+e2/YhCBM0bAty/NhpmCtl2GT0XJLqcvq0vEPKOJgEyjarVDbcQqA+PKRHj9eIczgIjCEMXHZ3wRElE2GmoRAbKTxgkXz4+R5h7ggE8IEskG7kwu9wBzAKU8nRDRhPqHJ5yiCZQpf58NHmU4R8ne0lIWyw6vfmUzZRd+AVQ5rN2nf8I8AAAAAElFTkSuQmCC",
            name: "",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/"
        },
        {
            id: "seeker",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTElEQVR4nJ2SPy9EURDF730h0UnUdBoKJTbZRDQ+g4JmE41G7ROoFauRaCj2K9CIRLIot6DRyG4tERHiiSu/kXPNXkRikvfuu/PnzJwzL7R7T2lt/zSFfxh1kQ9AOLuXV+FoYzkq2FiYz8m/xaJ3TI9X4fbh3ZKVIJ9AyrxsgDBJ/7FOqX41Wsd3z/nhjp+4p119QXx2mBxLYfASrdPhyYX5ObnjJ+47Rz++N4p2VpsZcLtzHtZXFodyoBEZ7yfesxMjViwD5Pr+7Zsewa9QOohv+fi4aqpyNeJHR2+6q7NAIi9QGVtiSQ/R0PjiDQh6mAbtonhzZnSIr3buddm7qTNIJcX73Z45tSqtUKJx1zT6K/FFuHBZau0ap6nGXN6G+PoN8U0z7OxgK5oGFFOogIAwL6ziys0AJQiBv4AxJjcNNL43FXsDWGCc1H0AuYFPxtKPuGsAAAAASUVORK5CYII=",
            name: "Etsij\u00e4",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Etsij\u00e4"
        },
        {
            id: "devourer_magic",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRUlEQVR4nJ1TTUvDQBScPGJDG0RFRQRFT148WRC8iCh48ir4FwS9ePHk3/BHCP0PKl68efIiHiutVqqlpCG1bGQWN+yG0AYHkrcfb2b2vWU9/OHkeCf96PRxe//scX55cZSiBDwz2N/bzAjb9fUyXFfAiIwjf31H6Hz29TgIprC2Og+xE0hmUhFeXttotXtYUYLRSGVrvkkwNc/Nho4TCU1RiKIESikg9BHHCZLkR++LTc6DJBM1GcBBfUNHzvkJJ4N46NTJUxgSCYZcBOGvVq1kCyTbgjZa7z1cNe50NPBtZ3aWYs23bpZw/fDkEGwxfYLz08PUdsy7F5GdEmrViu4o3Rnpzs6Pq9sRGMRDXTeJvDo2z3R6krsWgAX7uspC6MpTLC5MIwwDiIhuXGmBm8ajfg8s4z8Q8wrz3T/b3cLy0sxEhV+eUq7zsJp8SQAAAABJRU5ErkJggg==",
            name: "Taikainen sy\u00f6j\u00e4",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Taikainen sy\u00f6j\u00e4"
        },
        {
            id: "locust_swarm",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8klEQVR4nKVTwQ0DIQwLTHKKbpI+GKVDdRRmQaibUDnCXOBoP0WqUkzixIYLIg/5Z8UdqPpu7v8UsUp5NeQgRp+IH0ARCT1pFIiIFWB/ns+AHMToO9d6IODQR0kpWQEiSXuuDIKcMztal5TSRIxzRi8nwEQH2PhIAkHOmd3Hea2H7VEDwqCqk4EAfYdfmEmo9Rgb7zamWKT5KW8SmjdtSR44yOA8boPSQinlBu6Kv8mILGKk0zSTGN8AsSFBVbej7TpyKu9Z4Lew+sCuIOzXevPIJPhpyMzuvWiaqktovB0j+Pbmrymv5b+DScJure/e48Q+xyXH+a32UgIAAAAASUVORK5CYII=",
            name: "Hein\u00e4sirkka",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Hein\u00e4sirkka"
        },
        {
            id: "giant_centipede",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLUlEQVR4nK1TsW7CQAz1BYhalRYlEWEq6hipEx0qdWHn3/od/YVOnZHYumVACAmxgJKoLagKCKV6BkdOOZZSL3e+83tnv7MNHewx8orAa5G2JPso9/2HiNfnl6HRMaaCIKLB012hwWmyo7B5SYvVN83TFZ/1um32x8tPc0Qg2Qh4ud5SreGS7xa8h913bngFiWMjGMWZATi6DWmT57TbbjiL9lWDwQD63jWfGRsBykAJ9dzlwHi24GAY/DT74vWkBskBjJcEiD0yAlh83NV/EwC8F44qr8IkE/GtGozizMilBsPkN3QJDp1pzqkvlPSlZl23CGklCLwW+UGtBAiJiKj9f/lGx0bwOpxyIyHo7X1SdqAIqDM7u5WP+kAPk2gRNi84GG2tBa0M01/H+Qdn/czOUMOqfgAAAABJRU5ErkJggg==",
            name: "Nuori Tuhatjalkainen",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Nuori Tuhatjalkainen"
        },
        {
            id: "lukki_fire_miniboss_phase2",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABkElEQVR4nG1TsU4CQRCdW88LwkGjyBUEE2JMTOitrK0srCy0tfIbbPQbrEy00cJP8CesTDSGBhovwkWB40IQPfMGZp1DXrLJu5l972Znd5z9ej0lInofj2nZdSmMY3zSai5H657HXPKAjgFGCBJfkwkFvp8RyUIeS4wk70oSiEajqYFJmQtQja5Ac3e+xDAZUKc/pHKpQPRN1BkOMyXrigEX5LnftwmI92p5ujyuUX6rxrHktU2nty16aCeZilClAUGAxXE8E29kxOCIyR4IsbZLpWkT8YEEIGIIjy6adHD9wRyAuZjYW4jQLJNmNkBwcj+mpzCkcDBgLuayT45hGpUKB7lpM6CCrmoeuBwJ4laSt9dq3no92zyNtUJhIZ+H0S8LXUa3cYSrQ4+CYpEaQUB3Z5v/bkLg6Kf80u3aMm/Od23zAIgfP52/N/LjcB+cnWqVDeSFaRNdmfRp1VthLnPDBvNDIyZlnH1p2h8Ry14ZvkwFC03UX7WYrz9NyZWh0QaIlX3fvlA9QHoam1Hk/ALw2feF4l3r3wAAAABJRU5ErkJggg==",
            name: "",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/"
        },
        {
            id: "lukki_fire_tiny",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABmUlEQVR4nMVSTUsCURQ9I1qDghg0Ghha0QciLWzhUpCgltEmaN0mqF/Q/wjatGvVJloaQdAmaKFBiFCSqQl+BIrhZAVN3DvdacZs3YXHe9x3z7nn3PeA/w7lr4vtlZRBe6PVQkjTOHdwdvmrXhkGJJCEgIXsJFdwYFzDugrottbE+U2egYM1DoL54LixnohZkgnk6TVwtRvhRWe7FallgvTstNWViqhrq9vDVmKCC7L5Nz5TXpTYbbl67x8IqKqVIPDx2gyW4qPYOSpj4/SBz/vpEJOISlLNBL4RDzr9vkOiRKaiWyqEnKKrmzuRuC+KJZ5qPKzx9DW/D4e5OgDTwmrEy7uZA+7Lj/B7fUBbZ+VuYRLWxXAQmUIJQB3FvRh3J3C2o2AzlbTmILaVZGSSvZCNeNi0QFboJUQyqYqO+czOAPK1HxKFutOBCL6tWD7nolPWbGinXLWt4675bH0mViBguVheiBjSTawRULpSvdTyDOyMRPjy+olq25Q5eEevRiugqsZ15Ulx/Gv5VPQ3qEheyB4yMwoi+AKam+GiauvIlgAAAABJRU5ErkJggg==",
            name: "Pikku Tulih\u00e4m\u00e4h\u00e4kki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Pikku Tulih\u00e4m\u00e4h\u00e4kki"
        },
        {
            id: "sunken_creature",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABxUlEQVR4nH2TzS8zURTGn97OhIqvTJVEOuIjQoQmIumivLEQCxYihJ2FN2HjT7D2T7DwH4iVnZWkC0uLiohIVCyUeamPkkHlOXqn963yJJPOnHt+zzm3957Q6NJasfBwj0hDE/yXAvLXVxC1xvHhxr7eAahsDn72VN7tmggaW9th10ZgMUCYJs//bvBaeII9NiaJuWg+MIghhnDJ0E+npRBNLF2dsP9aEFiDQ+Nx+Z3pnsLG9lbZLJUKTELcgm79Y2RYYA1aLfUB9HbzKEYUzey6Tji7+1A6wZudEHh4vh+9bcn/4K7wgHzv5Q+CWHPWk46t24uzUqANuehX8vl7Bqb4zThlmthuLxRddPW5xblv8HTjH3nM+PryCjxcwkv1QdGF7ZjS1QhWdmKKnPopQZtUk7kNi5fDlv304WjzEInVZLB4/HT7raqpO9cpd6C3weP6DeI6Cyk3ASd9AsVryS7oZibRpNKI8cxOBg7iAuP6Eira0SN3Wy6Fm5AEnVz5cI05nAvCZEPJhb9FAjJEpQHiEVUTK5uw/Ika5mDk2RInL5WoaqBKbVO8/lRocHK2WNfs4P3NR9jieZQNK8Xx1fDznQdyn2wS8fPpfGl8AAAAAElFTkSuQmCC",
            name: "Sukelluskello",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Sukelluskello"
        },
        {
            id: "worm_tiny",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA10lEQVR4nGNgGAUowClm1n8QbeFS+h+Zjw3A5BhBxP///8Gcx6ebGSr2OjC8uHqDQUJbA0x/e3GbgUtClWHfkjRGkMEn9nQzwjSD5BhhJoIkPz67wZAfcJXB2kSW4eiZxwyHeBcwLKu0A2sAKUYGILX8UhqoLtDS9mNY1fKJIX9dNMPEoKUMqdPMUBTDaBAAuQruBWR/J5itRXHBvb2b4YphAOQarC54jCMM0F0AoiWNfMFyTCCNjFCQMEkC7GeQBIgGyYECDaQYBGDOh/FBcgzUjl6GEQgAvwqHGhMPWUYAAAAASUVORK5CYII=",
            name: "Pikkumato",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Pikkumato"
        },
        {
            id: "worm",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTUlEQVR4nGNgGGjACCL+//8P4/9/fLqZIazqM8Px3V1gORCwdC37zyWhCmbvXZzKiCzGgmTYf0vXMoaPz24wSBr5MkR3HAab+uLqDRTDYACkWUJbA8UAkKL/165uYoC44jZcAmSbkrMvmL20wpbROXb2f5BmZC/8B2lyTzgNFuSXgkiCAMhFyGIgm7+9uA13ARPMdlnTWkaQIpALVrXxgjWCcH7AVYZVLZ8YEszWgvkgzSAA0nxv72a4ASAX/Acp0NL2g7sEBKxNZBlSp5mBaWQXnV/cDaaZsLlg5wJTjACDAZAakCEwmgU5+mAuQAZHzzxmmBi0FEwzMGjDDQEF6r29aOkAFNrHd3dBY+EzUYHIiC0W0GMCBAhFIwMIaGn7wdNBxV4HsBgoIcFSHzKAGYKSEkGB5xw7m+HbC1BStoVqssWalEHeeIFu6oAAAHOXvExR51pMAAAAAElFTkSuQmCC",
            name: "Mato",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mato"
        },
        {
            id: "worm_big",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABdUlEQVR4nGNkQANOMbP+g+hvL24zcEmoMiCzsYkx/v/////j080MCZMkwBLPz21m4JfSgCtEBiBN6IAJRMia1jIsyHsBV/Dx2Q0MxRODlsINnZ11CsxWcvZlYHx0qul/WNVnsCZJI1+wRhB7VcsnsOKwGj6wi2AA3WWMIALkDRCN7JUwuQ4GaxNZsAEgkB9wFcw/euYxw4JTwXDDGEEucE84DTcR2RUwANMMAyBDVj2qAKtjAjkfBK5d3cSwc4EpPAxwaQYBsMvkOiCBuKqNF8zQ0vZjQHYJsuLUaWYM+euiwXxhbVUwBomDLGIBuQBkOywMwqowowpblMIAC8gFINuRwwDZCyCAnIAwDAhDCgNILKAqAAXY7CwQ6xSY//bqbbg4v1Qw9jBAjveJG7TBitENBcUCCDDBwgA5FkDOBYU+LDEhGwJLB/C8gJ4OQLaTnBI1tXz/w8IA2RswxaB8AItGkM2gvADiS2hrIHIjLDBBtpOSGwGgV+YGa8JcowAAAABJRU5ErkJggg==",
            name: "J\u00e4ttimato",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/J\u00e4ttimato"
        },
        {
            id: "worm_maggot_big",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAElEQVR4nGNkIBIEaZr8l+AXYnjx8R0DjP788wcDI7EasQGQIYz4NGdZuP1H5rN7soDpn9v/wMWYcGnuDU//ryyvCLYFpllQhBuMQWyYOBM2zSuL6v/LSEswHL10FuxfbAAkDjKICZcLwvsaGdddP8MIc8WVhY8Y3r/5CsYPV7yCq2PEEwRgl6zcvhUc2rzsHHCbQeD2q2dgMUYGImIB2dkwAItOJgYKARMhL4BokBdgtsIASAzEZ8KnERSQ1nrGYL+CNMhHiMGjUFVMCsxnxGcAKABh/oalAxAAxQQoMeGMxvC+RsYnT18wgGxHdjYyAImDDKE4KdM2M2EzCD07AwBqtIrbnHfEmwAAAABJRU5ErkJggg==",
            name: "Pieni Limatoukka",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Pieni Limatoukka"
        },
        {
            id: "worm_wall",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTklEQVR4nGNkgIL2zKr/IPrdm7cM6EBIRBguvuP8UQYJUSkGUQEJMJ8Rm+bu1TPB4qWh6WBxELjw5D5Y0+sPL+CaQWwWZM0wjTAQ5OEHptPayxl0VY0Y7ISPMDAIMzCsvcsANuTF62cMLLg0////H2ywm5U7XLO1jixU9g7YEJA4EzbNMMDIyMgIsklKXB6bNNhQFqwyUM0gOjckHOyFi6IqYJtB4NBbGwZRAYhLGHEZAPMGyAsgAAs4kGuevXzIcPn2OXBsMOEzAOYFGED2CiwqmRgoBEyEvACKaxgAOR0GQFEIkmNCTizYvNCUkg9XDAp1lT9LwXKgKAxWvoM7FkC2gwyYvGYlg7tNIFgjPB1cOcKw9q4KOFExgdI5LlfAvIDsdGQAik5wGGAzBGT7iXnbGEBeAEUZSPHRK4/BGGQ7KAZA4hRnJnhCIjc7AwAM4rtPgRf5sAAAAABJRU5ErkJggg==",
            name: "Sein\u00e4toukka",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Sein\u00e4toukka"
        },
        {
            id: "worm_skull",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVR4nGPM9Ej/f+bhVYY3H18y4AIi/OIY8iCx09ePMDIqSqn+Bwl46DmhKAAZCgL4DAYBFpjm6TtmMoLYIBftuLSPgVjACNIA0gyikSVAhoTrBDJktmXBxaZXTWNYeWU9qgEMOGxF14zNEFA4MMIMQLaZGAALWEZstr/7+opBiFuMNC8woNkOM4QQYGKgEDBS1QvkBCILTIDUaARpBhnCgishrby0noGhigGvF8DRCMoLFCVlSjMT2OnkZmcTeW0GAIFCnBeXW+rrAAAAAElFTkSuQmCC",
            name: "Kalmamato",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kalmamato"
        },
        {
            id: "worm_end",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIUlEQVR4nKWTIW8CQRCFZy8oVEX/AKaiiJoeCQpZWd3UVKDrUK2kCodGYJpqJLKqCVdTAaKGP4BA1dJ8G95l2B6E0JdcZu925r2Zd7vBthh3rjfE6frHbs7qB+N9K7fXWWFvX4uQieDh/TNofX7R/BM9CcVERGt2JPJe13IzW04+zGZFSR6UcHd1GUcAXo3Exm17hwyS1fc87gXa8Mls8A6YNS0W+k/DGGtSpJjZPPYVixyxTGoyhkcJXk2KKXkmdQpkjE+gUMQpSSSwfyJjBGZhBKIQf5eZPb88RlN5WKcIOoFVJlYVeIFoom2PLy/4IBN9F1VAjLqgD6cepNJELobU/R1AyXfCmm/KOfouFINR2RWQ4WUHMtNv+pheZyI3+BdHIrm8n79XswAAAABJRU5ErkJggg==",
            name: "Helvetinmato",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Helvetinmato"
        },
        {
            id: "worm_spine",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABCElEQVR4nKWTMQrCQBBFd5fcREiTG2ghdtoEbD2AoKTWysrKXhQ8gG3ARjux0AMIC6KkEzyG8ldnmYxBon4IO0nmzfxkZ7V66XY83LGe92sV1lqqKIbqvbGeJR2XG0UVZTgMWZt5gGKICiG33U18rtnNR75zupi+wdSZRPcoAgcBKnOgP11qDjztPiHkToYDFdrMFYACdJUQF70jp9Bqc3Crc9D/ABepHTdy/8SUBQmQsS5bgO8Ul1F/ynwLyG01v4A8DrA9GM+yhdLVVp0uVxXbLD/Kt9clATSQz+Nm1Q+SOxioRBMJUcy3S1qHML3OOj9dHJKnEQByCHYOKJmcyA4SwOQilz7hAUzOpftym9uxAAAAAElFTkSuQmCC",
            name: "Kirottuselk\u00e4ranka",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Kirottuselk\u00e4ranka"
        },
        {
            id: "worm_mechanical",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDElEQVR4nGPcvunUfwYk4OlnxsiABkBqRMX5UcRev/wIVst45uTN/8gCDFiAhprOf1ExCQYBQXGGD+9fgsVAbBBgxKYBXSPYglcvGGCGgICktCx2A+IS8v+/f/sGzAbZhqzx9s2LYDYyYMSmWVBYhOH+natwJ4MMAQFVdX24WpAakFpGXM63tXH5DzMA5mzzl18ZTJU1GcSUhBjqLl0AG8KCywCQJpACmFdA/EdGGgyPGP4zMLx9Cw8DJmyafX2j/4M0c3BwwhWCbA/+yMiQKSyMopaJgULAiEsC5gpQQMG8AHMNUS748P4limYQkDt3A+6N508fM/z48Z0G0RhHSUJCB0QlZYozE6XZGQDz0qlP0bZKmgAAAABJRU5ErkJggg==",
            name: "Mekaaninenmato",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Mekaaninenmato"
        },
        {
            id: "worm_end_big_apotheosis",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAUlEQVR4nJVSIQ7CQBC8a6pQiH4AU0EFBkhQyEo04Q98gEr4AC/A8ABkX0ACGoPhAwgUtmQOhgyX3iVM0tzt5mZubrp2Nx02WV4Y4H69mPrxNGW3Y9Dbn85uD6DuzSbGR6JkAiKoQcY+RAYsHChRQSchMpAqkXZZY60iZPeE+vNmklVoMR5Fyc5BKSFpDoBaX6+2Pw6rzfLtIMsLR6YID+jtJKNPx+g5AeOBIno7ybgVH0VaBf5F6jeYw+1w/LrwbdMRHpmAQBJXHMAUEmpbnwPY+aDf6C8kGGRsiIBE01UyoC6iGfgTSKCvWbQ60Dlom0a4gEhQgMFRhGTUDA5nQiIvNTaXnb7kZC0AAAAASUVORK5CYII=",
            name: "Suur-Helvetinmato",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Suur-Helvetinmato"
        },
        {
            id: "drone_physics",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuklEQVR4nGNgGDTg//9//0GYVLWMMAEwh5EJzCfWEBDNAhMAaS4vL//f0dEOZ6Nr6uzsZARprKioBKsBsRnRTQVJ3rlzh2FWRjVD156VcLkyl3CGtBmtDCoqKgwwS+BeQAb3W1f8X8F0nwEXiPinyKBYHQHXx4gsGRwc/B9kA8gFIGBiYgKXO3PmDJiGya9duxa7C4KDgwnGBEwzSiDCAMgGWIAxoAFsAYtVAS6FhORRALoiojQxjEwAAEIBZCLCD4dJAAAAAElFTkSuQmCC",
            name: "Lennokki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Lennokki"
        },
        {
            id: "drone_mini",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApElEQVR4nGNgGAWMyJzbt2//B9GXH34A87fvPQqmPZ2tGXTlBeDiQS6mKPpwgoD4ov+6Zg5gQ3EBJnySd6+fYyAEGHFJTFywEcXm/AR/RqJdkFo5Aaw5+JUJGCOLETRg4oKN/0/s3cBw5eZ9uBiIDRJDdxWGAamVE/7v33+QISWrEKxhrdgZMAaxQWIgOVwuAQOYJDabYGJ4DWCAAmyKiNI4NAEAZJFRI+s3+sIAAAAASUVORK5CYII=",
            name: "Pieni Lennokki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Pieni Lennokki"
        },
        {
            id: "drone_status_ailment",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPklEQVR4nGNgGPKAEZdEZlH5/2dPH4DZUtIKDNP7OrGqZcQm6B8e/h+mEQRgBm1cuRJDPSMyZ8LMef9v3rzJICYrwfD/x18GRg5msDiM/erxCwZ1dXWGgvQkuD4mZAP279sJpgW5+BkuXjjNoCilAMYgNkgMWQ2GAfX9/f9BTgY59927dwyOTu4M8WEBDL6fK8FskBhIDqQGpBbDAEEufrhfQc4FaYjafo1BKPk6mA3zDkgNzDUoBty8eRNM6xuYwhWYPz7JMHHWfLgFIDlktSDAAmOAAgcWeNu3bmFQUlGFK3r9+jXDyePHGMwtrRgMLCywu2D/vp1gzaAA8/T2Ybh35zZcEYgNEgPJgdQgByQLjAEy+cKJE+C43rhyJYO7X9B/kM0wgBR1/0FqQWowohE5oezctA4rG1tiGlgAAPEFkfL+CBsNAAAAAElFTkSuQmCC",
            name: "Parannuskeinolennokki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Parannuskeinolennokki"
        },
        {
            id: "drone_lasership",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzElEQVR4nMVTwQ3DIAy0UQbhwQiMkOyQUdggGYUdWCEj8Mgmro7WkotSNRWP+nOc4ZyzISwiNBJuSE1E3Ce2bZMYIx3H0TjWCHCsl2Xhrw5yzg1rrU0IDvG+71RKkVst1FpvtTBdJUMItws5S6y9nx2UUkR7ty6AOkh7VofpNIFhWZFGL+7dTiqG5XVdG0IEN+DA8zzJe9+ElkPr7L3imuwhLYK4wpwz6xBZbUOooUVSSm/2X7x9mO0GXuGn6Ws7wHmen2Jm4r//TMMFHtdRfpw/FYhNAAAAAElFTkSuQmCC",
            name: "J\u00e4ttilaser-lennokki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/J\u00e4ttilaser-lennokki"
        },
        {
            id: "tesla_turret",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwElEQVR4nGNgoBAwYhO8dfvxfxD97PknBilJPrCYmqosVrWM6AJr1h34LyIiCmbDNMMMwmYIC7rA9WtXGDS1dFDEQJpBhmADLOgCz549hrORDYK5hqABUlKyGIa8efMaq2acLpCSkkVxDT5DmNAFpk/rZEQ3CBQuIUEOxMUCDLh75/9XlJcCs2dMK8epjgmXxPNnNxnuP3yGS5qwAZJS6gQ14zUABGBeINuA+5R4ARQGxAC8YQDyAiFXEPQCoXAAAMxTRIvrb5A+AAAAAElFTkSuQmCC",
            name: "Teslat\u00f6tter\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Teslat\u00f6tter\u00f6"
        },
        {
            id: "gazer_robot",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNElEQVR4nIWTMa6DMAyGTZRLvI0BqRdgbCc4BFuHdmol5tcTZI/UTu3QjTvARkcuUIm9x6D6U5yXBB79JQgk/mzHTqIsywYiojzPMVCaphSqqioqisL+d11HTdNQHMckl8D/BFs8cCSWYBggOmcx50jOwQD7vqfN7Ua/q5WZuz+fBBdJkngBo7quhxD+OZ1oC7Asfc9aG0cvpawTEUZHZAsfDp9JjHjK0qzBhiVdGPtE2nQ++zBr/N4cj2Y76Ix0U4dMdOhymYA8B5t2ZAReDE8AFkB2GKwJ7ikXBUUyxuH+HWfGZmxjFHYBdbg+Hn4R3Uy0pv16bU+m8C0+fTYRtP5Lm7cwthE2rCjMgAvKB4mLCrDd7aYHSSk1LB1lt+fuhbJFZMM5wTFDczA4iWsZQt/kXuc3qD2lSe5p0lQAAAAASUVORK5CYII=",
            name: "Aluebotti",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Aluebotti"
        },
        {
            id: "drone_shield",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/UlEQVR4nGNgoDX43fj/P0kaYqu6/oMAiI1Og+Twag7MqYYrAGlCth3GRlYDAkzInE+fv8AVMDIyMrLWMzLC5EBskBxIDTJgRLYdWfLd65cMFhryYPaJGw8ZhETF4XJ8vDwM66e0gvWywAS/PbrO4OvtA1ckICAIZ5ubWzB8+PAeYvC7dwwnjx+Dy7HAGEoqqgw3b94EKz558gTDJP4OBpY6iNyfJgaGvI8VYLa6ujpYLYYX3P2C/nt6+4ANASkC2YQMhISEUFywc9M6VC9wyWkybD52Ecy+dewi/jCQ02TACpzj8/+jRxMyAMmB1FA1HWAAilIiNkByXqA7AADs8Jt3f/vziwAAAABJRU5ErkJggg==",
            name: "Turvalennokki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Turvalennokki"
        },
        {
            id: "basebot_sentry",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABR0lEQVR4nGNgoBbYeDLzPzY2SSA0o+o/NjY+wIgu4BKQgKJxz4YFjEQbYBZY8v+DlD9WhTb6cij8eWnyYL1MxGgGgSMXH6Hwk2Y9BLuUBURYOAX8/4emQeDZRoZ7z96hiD16iq4KagCyJpAr3p2Zz8BgksggJIWqWFCKgYFXFOKVz68fMTBsWIAwgOnjHQYePgEGvqdzGeQkGRgYns6Fa7zwHOLT95L/GN7jC0QLp4D/IEPWyj5gSPltxTCH9RhD8GMFhkfSyWB5fTQXrK62ZYS7QMQ86f87zUQGLX05hkKQbdvqGVIkrBgYGJ6h2Ah2OhJggsUAemjLeTUyvH+B0AyyHRmAbIcH4r1n7xiUpIQYPqDZAkpEIMNBgfsQySGn1vfAvQ5nwFKgoIQU2GZYCgSFC7LNJ/ZtwJ0yQYagJ2WYIegGUQ0AAD0Gf1Dfkd2dAAAAAElFTkSuQmCC",
            name: "Tarkkailija",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Tarkkailija"
        },
        {
            id: "basebot_hidden",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFElEQVR4nGNgoAYoWbDvPzY2SSDW3Reu0dfagX6GMKIL5Np6/3/z4AlDhLQOhmJFSyMw/eTjWwaveW2MGAb4Wjv8V2DiZnD5LYDTRnRDWNCd/ODfV4Y1/ExgsQ9fPsM18jx6D6ZZrn1CMZAJxth89ACGdzTlVBgEeHjBbJCXQLhUywHMh9EsyBpAtoAUKWpBnNl97QCDpJA4RPIjquEgL6C4INfWGx7q94+fg9vy/N1LnOGB4oI3D54wiCjIMDD8RrUBEQ58KOIYBix/fJExVkvu/xqGT2BnP396mWHxzs2MhNIEEzIHpgHkbBgbBLAFMIYL0A1BBmAX/CXCBbhAyl9pMM2qJc+wePdWhkhpXXhKpBgAAJz2bnXj6n9sAAAAAElFTkSuQmCC",
            name: "Vakoilija",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Vakoilija"
        },
        {
            id: "basebot_neutralizer",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEUlEQVR4nGNgoAbYvq/kPzY2MYAFREyY9hIu0NJxE0xbu/n+/2udAmZbaiuiaPr48gnDvGwvRhCbESboHhL7f+eaxWC+rFPkf2n7CBRNuAxhRDbgy6cPDEwiCgy/1V2wOhebISwwDkgzCPx784CB/9caFDGYV2Dg2opuBq2IUjCbCSZ4dNdmuGtgQE5dk4GHT4CB+egcDM0gGiUMkP0OcypIkZCkJMO7588ZYABmM0yeCcaxjcqFR9/xq/fhimGaP+qGoNgMoqUdIxFh8ODFGwYFCRGG30gBhBwOyC6AeQOkhhFZEhQTIBrmbFi0wtIEtlhgQhaAaUDWjCuAYS5kRJfABywaN/7XEmGF82GpcYgDAIjmho7pOv1TAAAAAElFTkSuQmCC",
            name: "Pys\u00e4ytt\u00e4j\u00e4",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Pys\u00e4ytt\u00e4j\u00e4"
        },
        {
            id: "basebot_soldier",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMElEQVR4nGNgYGBg+N/x8D+IRmeTBJIK4/5jYxMCjMgc30hvFI2bl29lJNoAr1TX/3yWbFgVKXCrgGkhKUG42Ltn7xk6wicyMmHTfHXTbRT2g693MAwFGVaxMv8/k72XHYqzQRq0/VQx2DBweNppMIYBFhjj0/FfDI9fPySo2TbLFM7WDlCBGPD16U8GPn5eBgVOVYavu6H+5kTVTDAQ7b3s/oMM+cvzi0GCR5LhxZfnDMxf2Bi4XREBCfI3zPkgl4ACkgU5AI1UIc4Dg3UMDK+/vEWxDaQB5gUQGwSYQJpB/geBc7cRgaMRpIQRjTCNMM2gaGTB5z+Qdz4dZ2C4xHANLoaeVlhAoS0rKg8OdRD9jhtiOrEAHIi4kjB6Gjm47RDupA0yBN0gmCHoBlEVAACqZofgIlwu0gAAAABJRU5ErkJggg==",
            name: "Teloittaja",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Teloittaja"
        },
        {
            id: "c_basebot_speeder_apotheosis",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABS0lEQVR4nGNgoAYo+Zf+HxubJFCUH/ofG5sQYIQxUtKMwZoCfFH1snEYMCgpCaOI3bv3lsHNdR5YLyNMs6XZT6w2yMqbgWlchjDBBI6fYmcQF2fDwCCN6JrLy06CxXbtTvoPdoGDox7Y3cJCAigKvTzfYbgCpLmzyxxMp2eoMLCAJIz01OGaPn2/B6bfv+Vm2LZdiCEx4QuGC5ABE4jom7ia8eGTlwwgDAJ8nEoMgsJfweyXL3+B/QvCOA0AgbfvPjBgA6Bw+PXjAgMuwAKKAVjUaWiZwyWmTWJgeM8AcREygPkfRINcxQTSvGEzJDncuLYXrjArTwElLYAAzBswzaBoZMHpNgYGcDiADA/wRXjhxjU0L8yedZNBVFKDAUaHcWAGFsyF6KkUBMAywcF2KDJr1x5CSR8wcGD/JXjSxwAgQ9ANghmCbhAyAACEhYWaEb8PaQAAAABJRU5ErkJggg==",
            name: "Johtaja",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Johtaja"
        },
        {
            id: "healerdrone_physics",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmUlEQVR4nGNgGAWMMMbm+94Mr48k/he1mQ8Xw8X3VdwKN4AJWRLZZBgflziGAW+/X2F48PApXALExiWGDFhgDA3X0ww3dpsyzC4WANtg6/EepxhWF5ALWGCMD5e8GD6/+sOQ2vsBHGinlwr+xyXGwIAlEFcvPIZi8oVzpxhuX/4DppEBujomGANkC7JiGB9mO8xQZP4oYAADABtHbB24HWwlAAAAAElFTkSuQmCC",
            name: "Korjauslennokki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Korjauslennokki"
        },
        {
            id: "roboguard",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAy0lEQVR4nL2TzQ2EIBCFB0MhHOjEFuzAJqACacI7RWgnc7ATN4/NbEYSVswmOwniz7xvHjAS/RhmnufTe395ycy0rqvpAQytDwBjPAJM01RGCOEC+gawtf2UUpmP47gr/gZQFVJdQF1LYGbatu1SFZuI5zsnAy5YhnOOcs7UI9L7YpZlOeFAi/Z9L0c4jmNJBFz2Crm4l6O24kAnaJBAWmFFpB1AJC4ww6UWxRg/TWZrB5KgIboz676wmqgrQSzJXW1d2+yN5r/wN8ALjI51yy3Eco8AAAAASUVORK5CYII=",
            name: "Robottikytt\u00e4",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Robottikytt\u00e4"
        },
        {
            id: "roboguard_big",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+ElEQVR4nJ1SOwqDQBR8K6nTC1uLZYo1J0gZPUZAy/Sp0qdU8BqmzAmCRcqQWrDPBQyzsPJ8cUEc0HXdnXnzPkREdE7TgVZi4z7qPLci766jWOvJJfy7NY3yCsSCADzSkvY7oueLSFfZ6FIKBT5rIG+vhV15AJlugNepqpS0j8jfS2lX4NP348Oh+MbVQQLCHDwNJS9DBAQeKQpDSzoaYwPc21a5YMFcRKSRJYklOjI/Rx2Q3qSNHNLBHFCbg08g1nosJs8f1pGGPW+K5Q6OxgwgO5EoDAeXllrSBbQZIqgHMDuVtSD7xCS8k7gKa1z8OUCP3cDM7SV+6A6CkeaHJQQAAAAASUVORK5CYII=",
            name: "Kyrmyniska",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kyrmyniska"
        },
        {
            id: "assassin",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAu0lEQVR4nGNkwAMmNpf9h7Gv3LjNoKOhypBf28WIrIYJnwHImif1mIFpdMBISDPMFSDNs5eux1DPhE9zanQg3Asg58NA97Mr/wkaMBHN/7gAIy6bYTaiOx1ke6mUDpzPgkszPluRARO6ZphtIENgGBYW6LajGJCKpBkZwOIdJK928BRuF/j4+OJ0JshgEPaPTMKwgBGZs3H5vP9btmyGRxksHLC5jKi4xydGUlL2weM9DADyBj4+/TQTCwDVp2e3fvOXbgAAAABJRU5ErkJggg==",
            name: "Salamurhaajarobotti",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Salamurhaajarobotti"
        },
        {
            id: "spearbot",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxUlEQVR4nK1QwQ3EIAyD6kaho7AD/y4BE8AS3YgN4NFN7hSkIMMFXrWECME2Dkq9hVLKd9Vf3REOLs7z1DMRzzuTAUyk/bqutjiFZKLnBotTSkPPe68w7d8IiOd51A6Y5JAIOWflnOtnqmdTNvmsXkETqgnWWnHkLegTd/d6JzTGtLrWqu77FrnHyoDEJOR6lURLzRhjJ6OJlERL0VGAYzDQZBiBXiYBEVhMO9fSP3QDjh1CaCRMgP+BKbvBLMaaE/Drc4ofgLqXU0R+FmwAAAAASUVORK5CYII=",
            name: "Peitsivartija",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Peitsivartija"
        },
        {
            id: "tank",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1UlEQVR4nGNgoAb4////f4oMCIgvItsAJopsZmBgYEytnPBfR10Rr6L8BH9GZD5Iz+z2ArAYCyHNIKBr5gD2orKmEYoYiM8Ic8GVm/cxNMIMB8nBbMTpgtfPHjE4OtrDNe/ff5CBASp3Yu8GuI3oLmABmY5sE8ggUSk5FJdYOAeAXXD51AG4Cy6fOgDms8A03r1+DqwRphnGJ+gCBiIAyDYojeEClFCGsWGYgQjAgsxBdybcBjwAnhJBmmFOJQUQlRJhAD1Fgg1ATmWgkMfHTskqxDAEAPBqfRiSVJJpAAAAAElFTkSuQmCC",
            name: "KK-Tankki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/KK-Tankki"
        },
        {
            id: "tank_rocket",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxklEQVR4nGNgoAb4////f4oM6Iq1INsAJopsZmBgYFxf6v5fWsOQoMKnN84zgNSZJXcwnppbAXYxiM1EjGZkALIQ2essMJNBNDogZPiRGy8Y4C64/eIjWAMMg/iEgI2GBAPcBTB/gjSqSvAT5R2QC1hgGkEckEaYZggf1VvYvMnEQCII7N7JCGNvOv0AwvYzVYCHLIgNw8QYyILMAWkCBQySDQQNYILZBKLhTiIBEJ0SQQCU8jAMgLkA5HRQyONj12REYBgCAK4+YtmKtl+wAAAAAElFTkSuQmCC",
            name: "IT-Tankki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/IT-Tankki"
        },
        {
            id: "tank_flame_apotheosis",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKklEQVR4nGNgoAb4/v37f4oMKHV1I9sAFnI1ful0kgEbMC0i+r+clhaDorAomIaBR9euMYD4PnXVjNgMYFLml/335MsxJmRN2MCWplYM730/Hy/DKCFmwWwkxcACs2nt+XMMRm9fwxWde/SYoRBquLO6JtwQIzlZBiZeeav/rO/6GP7xM4BdcPDwQay2w8T33rzOCMPdu3eBvcTEp8TAwPQN4gJiY0lRWJQha8VSRiYeucf/vjyyKq6+cIwFJgFyMjoAiYMsQJYDGTa7YD/YyxjRqCgsihIGMAByOpTG7kRnpEACsWGYoN/QXeCsrvnf28oQ2WaCBjAtrNcD2wTSDHMqKYBxaWHpf0lNDaIUO6UlY1jAmGDnAHaBnowsw6UnkIDDxY6LicUwBAAx4oBHta29YQAAAABJRU5ErkJggg==",
            name: "Sytytystankki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Sytytystankki"
        },
        {
            id: "tank_super",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6klEQVR4nGNgoAb4////f4oMCC0KINsAJopsZmBgYMydkPpfS1EHr6JM/3ywuskFsxkxXKBFQDMIGDrowr0IMghZjuXa/SsMIENANDqAGW4TYIEzrFhgil48es3gZO8Il9h3cD+DliKEfWTDCbghMIMk5ETBelhgLgABEBskCJJEBjDNd87dBcut7tvAiBIL1+5fAUuCAEwziA8SB2GQC0Dg/IHLjCALUAKRgQiArBHZdqyhbOig+x+GiTGcBd0gFSNlZJsJGgD3AkgzyKnE2IoMiEqJMABKkRgGwPwKcjosJnCx0wpTMAwBAJ3Wc0sL3jRwAAAAAElFTkSuQmCC",
            name: "Laser-tankki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Laser-tankki"
        },
        {
            id: "turret_left",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyUlEQVR4nGNgoBAwZmR1/kcWmDGtnJEUA1juP3xGqSMYGPQMPf4j06QAJhAhKaXOgExTFAbYAHK4gNSD+DCaEcQAhYOivBQDLgALp+fPboJdCaNBepgIacYHQHpZ0DVji5WdWyfCvSAppf7/0vkdjCAaJM6CrpiQa2CGwWhGXNEHssXdOx9sCz4DGUGKQLYiOx3GJ6QZBJjQNYMALGBBhhMyAAzQvYCcMgkZwgRSgJ4CQXyQOCgcQHGOzxBwUgYpQgbIfJAh+JwPAPmbb3QKyEp7AAAAAElFTkSuQmCC",
            name: "Torjuntalaite",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Torjuntalaite"
        },
        {
            id: "turret_right",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyUlEQVR4nGNgoBAwZmR1/kcWmDGtnJEUA1juP3xGqSMYGPQMPf4j06QAJhAhKaXOgExTFAbYAHK4gNSD+DCaEcQAhYOivBQDLgALp+fPboJdCaNBepgIacYHQHpZ0DVji5WdWyfCvSAppf7/0vkdjCAaJM6CrpiQa2CGwWhGXNEHssXdOx9sCz4DGUGKQLYiOx3GJ6QZBJjQNYMALGBBhhMyAAzQvYCcMgkZwgRSgJ4CQXyQOCgcQHGOzxBwUgYpQgbIfJAh+JwPAPmbb3QKyEp7AAAAAElFTkSuQmCC",
            name: "Torjuntalaite",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Torjuntalaite"
        },
        {
            id: "monk",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABUElEQVR4nKVSsU7DMBA9RykdgoRQh44EyT9AZybimQW1yp7MHaoihS+opUpIhNVfkIUfCBMZmBAfEFXhAxiQ2gExHLoLRnUGhnCSdeez37vn8wlEhP+Y3wektaaqoq7rfgRkZVkyidcHTJWteX3kSyk5Vkqh36d60zS/sU9BmqZIyTAM+SCOY/a011pDlmUgpRSU+/H8dYTxKTDG8GGnQX8pEGflMx73aaIxBvDyCdew5aLe/iE9hZZSylHUtcf5p7iGQ1jDFoAmMUkSjKIIKbaL9t2cXRd3B7jEgGPRHeXZ7AaD4MjJ7XYf7ItixcqifEgOSYnXlXdS3DtAC34/v2XyvatM5sxBlA9xVC0AoAVZJUQymQ/grWrvTeYDHmNmWWKAL/kXx6Nq4ci31Sm32byCf/XA94iMjJrIPRCibfp0mjkNsWQEHo9PGVwUK+fN3yWprAkYuPXwAAAAAElFTkSuQmCC",
            name: "Munkki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Munkki"
        },
        {
            id: "missilecrab",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1ElEQVR4nO2S0Q2DMBBDU5RB+GAENiCbsARMwCrsANmAEfhgE6p3kqOD8lP1t5YicsZ3diAh/PEzXk/kNE0nz33fQ9M0hVc9jmPpq56a27YNLMQ0CaqXZTEDEO8DENDssa5r2dd1fXkX7wNwmef5Ej2ldDHYtq3UlY/jQQrFJ4GWB73RT+v7/pQI/jgOc/dpvBZNxIUCkgYwDIMdw8f2R6SWtoKgYOWc7fcw2bvyTjoNQwtnH1GN2qeULBH7nLP40HXd6Y0sgY8ncFGe+LsZmo+L9C3eRZOOkS/b3FQAAAAASUVORK5CYII=",
            name: "Hein\u00e4sirkka",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Hein\u00e4sirkka"
        },
        {
            id: "necrobot",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA30lEQVR4nGNgwALy6nr/MxAJmAhpIsUwBr+YjP/YaHyAEZuN2sZWKGJXzx5jAIml+1tiqGeEaXpw7zaDgpIqWCEymNNbD2enFDdiGMKIzDG1c8Pq5FOyogxmj1+D2acP7ULRw4LMsXRwx+oCmGaQC04f2oXpBUrCACcAxQAxscCCSwIUoMQARnxegDkdRE9qKmbEmxJx+R8EsIlhTcraUNtgAJQ2QABZDB2AnTVz43FwYIFCGcQGaYAlLJghsDBB9woTtswCcol3aDycRnYNunombHGOzt+0ZAaKrciGAABmW3eHAOoPaAAAAABJRU5ErkJggg==",
            name: "Tuonelankone",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Tuonelankone"
        },
        {
            id: "necrobot_super",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABA0lEQVR4nGNkwALy6nr/P7h3m0FBSZVhUlMxIwOxIK+u9z8hNkHgF5PxHxuNCzAi2wJz7sSIkP8aBgYoCm9cuMAAEnOvqEHxEiO6zc5/3oAVogOYASCAbAgLjAELsOd2bv8Znh1C0XxKVpTBjZmdgeHydQazx6+xewEGsDkfnwuY0BXmr1jDCFKMC6CHAV4AChdCscCCzQswl4DCBZs4snpGbKYihwPM7yAaXTPWMJiIIxCxiWEYkFfX+58jshhsGwycffQY7hJsAO6knR0tYD+CQhnEBmkAaTaWk4UbAmKDALJXwC6ABRC6k6P9fOE0smuQ1YMNwJbu0fmLjp1ECUCYIQBkj4m2JWa9xwAAAABJRU5ErkJggg==",
            name: "Marraskone",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Marraskone"
        },
        {
            id: "fireskull",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3ElEQVR4nGNgwAF+XI76zzAowA8klxDlqh9QRcR6gQmXIV+PXSTKdkZstoM0wwC3lT6KBg7dZSh6GNANeDtT+//ftzv+wwCIDcIgcZA8Xq/9uByFohkZIBuCMwy+IjkdHTAJuTMIhPRiijNgAc/2pzIkqHKD8eUACYZ/73aC2VeT4vFaAgYwPz/dl/L/kr84Bv2oQAl/9L6dqQ1WiGwQCIBoEJ8oA/6+3QG3NV6FC247thjAiFOQQmkvEYYfqpYMbyduZhDO9wXTIDEQEE6/ijsdYHMJcjogSiOpAACiDt6F+sgRsAAAAABJRU5ErkJggg==",
            name: "Liekki\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Liekki\u00f6"
        },
        {
            id: "iceskull",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA20lEQVR4nGNgGLQgasW5CSBMSB0TNo0g2kxPCMyfcO0BXoNY0DWDNC79/+8/WEBTDkydlxViMLv2gOHUpXcMyyKMCvC6IF9TLh+s6csXMIYBO1mhfJircBrwYP1hONuKlw+MQYbA2CAXEAyD80i2gkDP1jtYLcAKJlx7MOHc50//Qfj//39gzMHAAGeDxAm6ICdl/sRDj9/BXXLs8yd4eIDk8Bpw6tI7BoVAW4ZVjRvBhlhHTAbTMEOxAUZ0AVhUrmrciKH42Mr8AoJeWBZhVABzCQjAaGyahwkAAImags+9RVNwAAAAAElFTkSuQmCC",
            name: "J\u00e4\u00e4ti\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/J\u00e4\u00e4ti\u00f6"
        },
        {
            id: "thunderskull",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/ElEQVR4nJVTOw7CMAx1KpgQiIFjcA7UkQ0OwM7AFVgrtUNhpgfgFDAxlju0fBfKAEg1ciBV+nEKT0rjOPbzq5MAAIDtXxBqUIwp5dgVJBwxW9DZ3fFfX8MkO0xSt9cUMNN8iIhCCFGZgIhI8qIHolqTjYgukZEBdYg+CSyISI+3igTnF3qmAv1WXr1FH5KtGjMPjtlmR1hy6PZe62nlUa42t0xuG4QcYZJm9mgRu9zpSFDDiv9NiTrYZAIFTNdXtolKQakH8JUVPwEmg64XbBMZMF4eZFPVmoWjyVJnPvRPsiINpczMooHuAxFRsprZi/TrGzD5c6h73vr+G9sCIfB6d3PbAAAAAElFTkSuQmCC",
            name: "S\u00e4hki\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/S\u00e4hki\u00f6"
        },
        {
            id: "waterskull",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABjElEQVR4nGNgoDe48fT/fxAmSiEDHjEYmwldUVj2riaQ5KTZF5tBdFbDhabY4sNNuCxiRDexrm13MzsHJ0N1kU1ta9+RZpAYLy8vw+fPnxkW99rWwdRpSDOC9bLANIM0gthNVa61IPaRs8cZ7O2Za//8+cPAwvKN4fF7OYbY4sNwjTDAhMwB2QwCbu48tSD6zgtRhgdvJBlAhvz8+YtBSU+uFt07LDDnwJwGcra19f9aFhYWhm3zmhlYWFgZ3OIq4GwLl1wGDANAILdkWbOgkCiY/eCNIoOKxGuwhj9/fjOcOvAVzgaFBVYDvn15A6ZBhvz98xvs/LSieAaQSya19THkVWWA5W8+EQB5rw6mjxHZNNfIpU2CQsLgoGHkE69VVORiUBB5Dg4HGLh38X7zqqludVgD8duXNwzv371lYGD4x/D/08vm+/e/Maxd/RhMgzSCaFAsIethRPEQAwODte/EJi4eEQaYS2Dg/bvXDJN7omphAQ6LTgwDYIbA2CDDQGD38miws5E1Dw4AAObnvjPlF2G3AAAAAElFTkSuQmCC",
            name: "Vesi\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Vesi\u00f6"
        },
        {
            id: "firemage_weak",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7UlEQVR4nGNgwAG+dDr9ZyACMBFSQMggJko04zTgS6fTf2Y3WQYQJtnQ7SEV/7+fj/9vbGz8//eLOWAan3pGGKPZ2hqs0ETSlsFligpcwZ/nhxk4DRcyEvRC7dGjcEV7cu7AFaBrRvcCEzIHZMiZ54fhhoBsB3mJpECsRTLkQKsk1sBFdgUTugHystpgSZghMBoEeMr3MVbUqIJpnAYQAidenEDhs6ArkBBTZGBgeA9mzzi/msFEQgLuKpDcybNbUAKVCZljbuzzH10BCDx8fJURhLHJkewFvAYcmCMMZyOnC6INQE80G+/eJWgIADm7Z1s2j/NIAAAAAElFTkSuQmCC",
            name: "Stendari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Stendari"
        },
        {
            id: "firemage",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7UlEQVR4nGNgwAHsH93/z0AEYCKkgJBBTJRoxmmA/aP7/0NlXzCAMMmGbg+p+D/l//H/xsbG/x/8fw6m8alnhDGara3BCk0kbRk0V+fDFWxheMCQw2jJSNALtUePwhVdD50IV4CuGd0LTMgckCFnnh+GGwKyHeQlkgKxFskQ5dCNWAMX2RVM6AbIy2qDJWGGwGgQOCinyHjbZy+YxmkAIXDixQkUPgu6AgkxRQYGhvdg9ozzqxlMJCTgrgLJnTy7BSVQmZA55sY+/9EVgMDDx1cZQRibHMlewGtA7JlqOBs5XRBtAHqi2Xj3LkFDAL9RafrBEkksAAAAAElFTkSuQmCC",
            name: "Eldari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Eldari"
        },
        {
            id: "wizard_firemage_greater",
            image: "iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAAA5ElEQVR4nGNgoCX40un0H5ccEyGNzG6yDGRpZoZqxGU7EwMBwCJpCzeEaM34/EpQM7JtINuxGcaETSNMIUgTNsPwagYpRNYIA1/QbGeBMcLV1f8n6AZCec8xNIINczvM8IXB6T9P+T5GFJtX3rzJuODyejD7QKskNgdhOB/D2WeeHwbTe3LuMGADnIYLwbaCANzZIACynYGB4T8Dw2EGE0lbuAEuU1TA7AWXT6AYhGHziW8Q80AuQHbF1z834HJYNcvLamPEJSgcYIagA7hmZI2aoqJg2kpPj0FHRIThyps3WC0AAHPnUNGg3xzmAAAAAElFTkSuQmCC",
            name: "Suur-Stendari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Suur-Stendari"
        },
        {
            id: "watermage_greater",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTUlEQVR4nGNgoBAw4pJwSjjXwM7OycDLy8vw+fNnhu0zNRuwqWPCpxkEQJpBhnimXyfOACeo5p8/v4P5IBqfISzoAh/evWIQEBJjgLkA2TCQITgNUDby/2/onMHw6tkXBgbG/wyMzNwMLMysDC/un2EQlnZphBmC0wt3z21kPL93BoOYFDfDn19fGX58/8rw5+9vBglFE4aXj7bXI7sEZywoG/n/B2mQVDJhePXsKwMLGzcDByc3xLAfHxkOLY9gxBsGd89tBCn4D2LDDPnBwMAgJAIS4QdbAFWD6QUYePTqLph+fu8Mw98f16GaGRh+/fgCl8NpAKuMDth2ZAAKF5BhuAATNs3CUhpgmkvcBByIoJjAZQkTuom/n1yB+/HbS9w24zQAF3j77AbccE7jALgrwAaABFjEVVBsJxZguEDDOhEjIEEAFi4gi5ABABzyh+JQvh3uAAAAAElFTkSuQmCC",
            name: "Suur-Vesimagi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Suur-Vesimagi"
        },
        {
            id: "watermage",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABG0lEQVR4nGNkwAGcEs5NZGfnZODl5WX4/Pkzw/aZmvnY1DHh0wwCIM0gQzzTr0/EppYFmWMd3PxfUsmE4c3Llww/f4pPAhny8+d3sBzIEIIuOLq2lvH5vTMMf359Yfjw7hVYM8wQkEuI9oKELA8DF9fnPJghMBobYMQmCPPKi8dfGL59452kpP4/b023JyPBMICBJ6dWgGmQIQwM//MY8AAmfJKg8ECmYSDfu+U/TgPkZbX/S4gpMmATh7FPvDiB2wUSYooMJ89ugfv3/N4ZYPrh46uMIEPMjX3+I8uzMJAAQIY8fHwVRYwJXRHIdAOXHLhzYQCbGFYDGEgE1DcA2akv7p9huHtuIyOIRpfDC0ApUdnIH64YxMelGAAsEX6BGvh1rwAAAABJRU5ErkJggg==",
            name: "Vesimagi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Vesimagi"
        },
        {
            id: "icemage",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0ElEQVR4nGNgGPKAEZfE1TNP/iPztU1ksKplgjHMPAL/u8X0/oexQXRcuj8DMk3QBWYegf8FRGwYbp6fwLBt4XEGbC5YeOP//3gNRkYMFyADdcMCBq94SzAbRuMCjOgCMFeAAMglIMN2LSmG2w5TB3MFE7oBLx+fYfjw5gjcJYQACy4JkCEgl8AMg9kqry37/+HVx/jDAB2ANDHgAEzoCpFNv3V8EZgGiYHk0OXxeoEBDaBrxOoC9LgnBqAYgJxcT+1YjzOZ4zQAHTy4e5GgIQAMq05hj553VwAAAABJRU5ErkJggg==",
            name: "Pakkasukko",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Pakkasukko"
        },
        {
            id: "thundermage",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7klEQVR4nGNgGDTg8eff/3HJTb309T9JhjxGMgzExmc4BkDWALIZXTNO19gnTUSxFaaZaOeDQMzs/f9BGKTJ2NgYbACIZsADmJA5j49fAtN+imwMGw6cALOT5h9iINoAGKhccQTOztbjZsQXW4wMWMJC1lIPzLY0N2M4fvIUw5JUR0ZkzbK8rIw4XfBg9yy4V0CakcGm+7/ANHLAMqEbICGmCHEq1BAQLS+r/R/mnRCHQBRvMSFrNjf2+X/y7BYMbz18fJURZAg2eayBCAOXFi5GMQSb4SwwBshfoOiT5WXFZyYGgLsA5C/k0CUWAACeDY7TAiIlMgAAAABJRU5ErkJggg==",
            name: "Ukko",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Ukko"
        },
        {
            id: "thundermage_big",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBklEQVR4nGNgoAWImb3/Pz75qZe+/idKU8zs/f9Bih9//g2mQWIgNrIaRkIm+ymyofA33f/FkK3HzYjVAJitluZmWDWDgCwvK4oeRgwVUJdg04zNACYGEgEoDJDDhAUmYRjS/F/b3Qan07H5H8UF59fUMl7deQSusHLFETCNrBlbbDGh2wIKwOMnT4HZIBrZEJDtsADGGYiGIc3/+fj4GGQt9TD9f/wSw8F5+YwgVyxJdWTEaoC8rPZ/Bdc0OB9mEMh7706uYHj4+CqKHhZ0zegGXlq4mEFQTR/DNTAADwNkzZ8+fYIrAGl+f+siTkswAhHdiYQA2ACYqfg0gwIWJm9u7AN3BQAzN4CMu28YCgAAAABJRU5ErkJggg==",
            name: "Suur-Ukko",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Suur-Ukko"
        },
        {
            id: "barfer",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABWklEQVR4nGNkwAKqVq38D2O3hYUzMuABTCAipqbmPwija8bGRweMyByYIXJ6unCx1tAwhurVq3C6hAmZs6SlhRGmGaQRBECaCXoBGWydOg1FI4yvb2+P1SuMyJx1MwL+i0nrMWT3HATzdW1twd4BGeKdnYXVGyzInFVPOBgYntximFpiD+aDDAIZANL86NJl/F6IqImAO3HKyVtgDDIIZLsX51WGZ4+OYTWABZmTY67G8OrpJbhrYIbklc5mmNSdChL+b+GTDpaHeYcJWXN6x3yGM0KRYPzq0SsGXADkHVj6YIIJgmz2z++BK8ix4sNpACi6McIAGYD8C3IFNgBzOoYXgjI2MG6cWAJXeO/SeqwGoAOUeHWKcwL7S0xODMwPk/nB0DLhJDgA61YfYdi3aB/+dADTiKy5psAcrBkXgBsASoUMDD8YQCkRBGDRCQKwAM2xCvgP8iqyCQA2W4/d+uUjnQAAAABJRU5ErkJggg==",
            name: "Turvonnu velho",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Turvonnu velho"
        },
        {
            id: "barfer_greater_apotheosis",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIElEQVR4nGNgGGjAiMyJqan5D2MvaWlhJNkAEKhatRJuCAi0hYXjNYgJZCvMZnTNuMSQASOMATNETk8XRUFraBhD9epVOF3CBGOANMI0gzTBAEgzsgU4DXh06TKGpq1Tp8HFLh8+jNUgFmQFIKxrawt2CUizd3YW2GCQOIjNwMDwH92LLDBGfaQgg5i0HkN2z0G4behhAjUEBTDCGE5xTmCnNYXawCVBhqFrRA9MRhgjoiYC7rdXj14xIBsGMgjmnWePjjHsW7QPro8RXTMyQDYIZMjUEnuGutVHwGIwQxhxaUY3CGRIXulshkndqSiGwKMxx1yNIUzmBxwjAzE5MbAmkGaQITCvrZsR8B9sAEhzesd8hjNCkXAMcz4+AFIHAK4aiotAWI0iAAAAAElFTkSuQmCC",
            name: "Suur-Turvonnu velho",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Suur-Turvonnu velho"
        },
        {
            id: "wizard_dark",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBUlEQVR4nGNgwALK7KL+MxAJmHBJIBsSqGn7nyQDbr9+DDfESEr1/8OPL0hzgaqoLJjec+c0To14DdhDhEacBqwNzP4/OTkPwxBcAcuELnCQ4SzDyitLGUCGgICLiimDPL8EcS7IC7SA2wIzBOSSkpAwhgdMl7C6hgXdxHCdaIYXV25gtc1aW/a/2D8FFDEWdM1l67oYrIVtwXx/dAOg4ji98OLKDbAiWDpAB0ffHmbwt7dk6Dq0jBGrAcgA2c/IAN17LMic4PVTGUH+BBkrzcCP1QB0gBGI0qIQjRKCPBi2Hb36mPHo1an4DQBpJORsnAaAUiHYEB0NDI3hgvYMqxiuYJgAAPaYXZLHLThgAAAAAElFTkSuQmCC",
            name: "Sokaisunmestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Sokaisunmestari"
        },
        {
            id: "wizard_tele",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABCklEQVR4nGNgwALK42z/MxAJmHBJIBsS6KCJ00AWbIK3Hr1hUJMTIcolTNgEQZpBoGPhIRQaG2DEJmikIfnf1UwFRaxz0WFGolywbkbA/0ndqQy7T91B8RIu7zChCyy+9pyhd/dOBnRDcAEmZE5gnjncFmRDiotDGU7+fAdXh+waFnQTi13dGV49vYTVNm1r2f9qrDwoYizomtM75jP4KCuA+b6hqAbAxHF64dXTS2BFoEDDBrbcfcDgG+qIEiNMWFUyMKD4Gd0SnF4IytjACPIniC3KwIfLbNwGgDXKQDQKivNg2Hb16GPGoKOP8RsA0kjI2TgNAKVCEC0mrYehMc9RleHAyqsYJgAAfVRkuhwyURYAAAAASUVORK5CYII=",
            name: "Siirt\u00e4j\u00e4mestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Siirt\u00e4j\u00e4mestari"
        },
        {
            id: "wizard_poly",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJUlEQVR4nGNgwALyLQr+g+jFIUv+I/OxASZsGk1kTFAUofNxGmCCpBBmO4zG5RImZE7smhhGZA0gELM6miiXoABXZZf/IINAAJlmwAJY0AXOTTj0X9ZRhSEqKI6BIRTigiWhS7HpxW7AqT19DKf2MDAsW7cIbsiZJ2dwOp8JmTPDJwDuzLXVWWBDFp1fwFAzs4zhyvNZcHXI3mFBNzG4dRrD4/13sNoWoKH1X17ADbcXglunMaSGuzAE61SB+aCwQJGHiuM04PH+O2BFuPy89kobw+yVexhE9aUYsYYBMkD2MzJA9x4LMseowI4R5E8QW11YBKsB6AAjEGEaFQWFMGzbcOMa44YCO/wGgDQScjZOA0CpEETDQh9ZY3hoC0PnUVTbQRIA8Qh5O93MBw4AAAAASUVORK5CYII=",
            name: "Muodonmuutosmestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Muodonmuutosmestari"
        },
        {
            id: "wizard_swapper",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFklEQVR4nGP8//8/AyWACZ9krE/s/1ifWLwGMKK7IGbCURCFzVmMSwqs8bsgBotmbJpwGgAFjPfml8I1gwyFGvIfxIZhGGBB8bPYB7BCrTXLGcJDIhliGLrhhiDJMyx+JYDdgGMHN8PplUiGMO6ZwfDfJYOBGC/8hzHm9LSDDQF5p62/hYH9QA9WdSzoJqaUVDJcO30Fq21dE5v/S4mqMjAguYYFXXNCTDiDZGQvmN+OZgBI/D8+L1w7fQWsCORnbOD58mKGdm8ZEJMRqwHIAM3PcIDuPSZkzrGDmxlBtjx7fRurZhhYWmgDZ2MEooKkJJiWERfHsK0svxbudJwGgDQScjZOA6zsfcGBrGWqg6ExLCwFqwkAehdtP7eC16QAAAAASUVORK5CYII=",
            name: "Vaihdosmestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Vaihdosmestari"
        },
        {
            id: "wizard_neutral",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABL0lEQVR4nGNgIADcI0L+Y2PDACMujYHJ8WDF375+RRHfuWINih4mBiLAjuWrwRgbYEEX6MhN+//w+QuGF8SYjO6Cjty0/xWTZzHuuHYLw+m4ACMyJzPE7z+7lT2DmpwcQ3ddLYOang6GBvQwYERX4OUXDQ48n7gAsCFyKspg8R9fvzGc3LufEa8XvKCaQWDLog0MpU3NDI/u3GUIj0tgYP7NjhFDWAPRJy6A4dajR1j9q65l+F9AUgBFjAVd88S6NgYtSz0wHxQWyAAmjtMLtx49Ait69gC7C64dv8Tg6unDsH7uQkaCCenl7ZdYxdG9x4LMmVBUzAjyJ4gtLCKOy2zcBiBrFBAQxrDt5rXzjDeLzuM3AKSRkLNxGlDQ1wt2Piz0kTWaBbgyHDu0A8MEABZVa5aFiy/hAAAAAElFTkSuQmCC",
            name: "Maadoittajamestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Maadoittajamestari"
        },
        {
            id: "wizard_returner",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPUlEQVR4nGNgoBAw4pLIevr/P4gOEIfw3VgYsaplwSZosPXd/1WBxQyi0moMZ0XkGe5e3M2w68///9gMYcHlApBmPhF5hp8B5gzKeLzAgk2QfcNJhidPb4HZfBsYGD69eciw4SV2A5iwOb95ugeY/frpLbBmEH3swnusBjCiC1j4ZoMDr2n9FIbazB1gMZA3LngL4QxwFM3IGBRwHPJiYFrV3A9sMAg4lSX+xxkGTeunMJTtxO5cfmmt/8LafChiLOiaQ+W1GYyjzSEC7vNQFMPFcRlQtvM9WNGDC9cZFAw0MRSfXXqSYfXDqyiJigmrWxkYGB4ffItVHN17LMgcUEiD/Alii8mI4TIbtwEQjSpgWlhMFsO2j0+vMV7wFsJvAEgjIWfjNACUCn8wMDB0uQtiaOSuW8DAgGY7SAIAd5x0bgxcTFUAAAAASUVORK5CYII=",
            name: "Palauttajamestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Palauttajamestari"
        },
        {
            id: "wizard_hearty",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABE0lEQVR4nGNgGGjAiE9yv63tfxBt4OvLcGHzZgbHw4cZiTJgP1Tj4Xfv4GK1V64wHLCzwzCEkZCtMAAyzFZICEzXXb0K18eEzQUgRciaQQCkGWQoiEYGTOiaS27fR+E7HDqEYiiytzAMeD8n6P+eEwUMG99+hCv80N2N0/kYYVBr5gD2f9EqHwYXiwkM/sL8cDl0jRguqIVqBoG+sC0MMJfkbk1kuP+XFSOQYYAFmQOymWHPMWwWMRhLyPxHdhGGAUVQZ/eoKoL5Bi6oCmHiOL3AsOcYWBF6KMMAKHYMFvtjJCSs6WDR689YDcHmPbgXBFPWMYL8CWLrCYhgNwALQAlEmEYZPgEM286+eMIomPIEwwQAO2F4lAfQUaYAAAAASUVORK5CYII=",
            name: "Haavoittajamestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Haavoittajamestari"
        },
        {
            id: "wizard_homing",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABYUlEQVR4nGNgQAPTtJ3+gzCI3aRi8T9Xyuo/NjkYYELXDKKzru5jBNGvv0Gk////Dxe//v4HXB2GAejg5c//DJOeHmWw59GAGwICyIawIGt48/Mbgwg7FwPI2SDNIPBn7wMUGiQuzs4IVgsCjOi2gvwNMgQEDrz4DqaXrlzGEB0eBdaoKcgB1lx35wQjVgOS1+z+b6InzDDDNJghXUYRbggIOEhwomjGaoBR4Waw21MzpVEMAWmGBS4yYMKmGQRmT3/KkHF6LcPMJ/cZHI9PZejSDYCrQ44FFnQTQTafufSWARsQtc/+n/v0LIoYC7rmutS5DI1vrkME1vegKAaLQwMYqxfOXHoLVgSLInRQL6LJwLi+ByUsmLCqZGBA8TO6JTi9MDfElXGTfTY4gLhxmYwGMAKRW1IdTAtJKmLY9vrgVMa5B6fiNwCkkZCzcRoASoUgGpQS0TU6h2gyzF2BaQIAHySjDfSLWT0AAAAASUVORK5CYII=",
            name: "Kohdennusmestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kohdennusmestari"
        },
        {
            id: "wizard_weaken",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/klEQVR4nGNkwAHU1FT/g+h1yxaC+TomVozY1DHh01xfVggXu3Lm2H+iDZBX0mQwMTEFs4Oi4lFodMBIyAX6BgZwcWzeYMKlmWywdM60/yD/ggwCYWQ+UQZExiT+B2FkQ2AGYVPPhK4Zxm6dMBsehaCwWLBmB1YLWdAFqgtSGS5euIAiBg7INTsYjE0s/n/+9BYsduvWbUYMA6oLUhniM4oYYIpgLoABmDhOL1y8cAGrIhjg5RMGGwqzHcMAYgC695iQOdEpWYwgW0CYWIARiEIiYmBaTUMTw7azZ04wRqecwG+AiAim7egG4TQAllhg6R9ZY0KIB8PuHZswTAAA84hy/0OU+uEAAAAASUVORK5CYII=",
            name: "Turvattomuusmestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Turvattomuusmestari"
        },
        {
            id: "wizard_twitchy",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABH0lEQVR4nGNkwAGqG7P/o4u11k9lxKUeQzMIHzly5L+kihwKjaqSgQGriSCF2/cuZ5i3eDOG3PM7j1D0MGEzYO7iHgZiARM2wR17z4Hp1QuWoYij80GABV0gb1bMf0/LQIakwEIUjaEJUQwgbxEMAw1nU3BA9U+oABuSFOvL8OzZUwYpKWnCsaDhbPofGe+4vBYc+tsvr/2vYq77H1sUs6AbArJ5+/H1WC0AGebhbIQ7EPuhzuZ9zg/G6ADkHZBXcBqw/fh6uJ+xAVC6sAlyQgkLJqwqGRgYVm47hFUc3XssyJxJaUsYQf4EsbmFMb2ADWAEIkwjCw8HwzY020DJeFLaEvwGgDQScjZOA0CpEESDUiK6Rq9kfYZJJy9jmAAABmB8M0AjN50AAAAASUVORK5CYII=",
            name: "S\u00e4tkymestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/S\u00e4tkymestari"
        },
        {
            id: "flesh_wizard_twitchy",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABI0lEQVR4nIVSOwrCQBR8WSwsgpAbKAjaRbA0pZXY2Ao2tl7D1tITiAcQxMoyrZBWEOINBLFIF5nVkc26qwPJkn1vZt4nwSqOy3YYSrPXk2uWiQuIAa648pFJItGMXx6PT06wGwxKn6MpYJNhrCuQN6E7mThLtckgDpPkI6TwqrdawpMBV9l0RR5FFC72m40Uea4fJFHEJINgtgeR8WwmNfZzTFMd0IlZVhHBHQhNEVkfDrIYjfQ3DBWT2BvLZrkkA/Pt9utUruGZWyAZbsDpdtPndLl8DbHI88rw7BWSSFcbCq4YIofESiB4vt+9RCLAj+T6EynAkn1QSHSRiX4U/RaAi713tIMtdBqNvyJ6jaYIh2gO81cbNbhw5wDa4UzMe5/IE9YRtMbehkYHAAAAAElFTkSuQmCC",
            name: "Kirottu S\u00e4tkij\u00e4",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Kirottu S\u00e4tkij\u00e4"
        },
        {
            id: "flesh_wizard_swapper",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSklEQVR4nH1TsW7CQAx1TgwdgK1DMxWpUhjZYWSBVOIL+IJ8Tz8kQzIx5gPCRiQkOoUdGLpRPTcv8h1tvfjO5/f84thRPp/fpbPX2Uz9Z11LaMfbTd6Gwz6HeS4MWCILbi4XLwce8cgqYJWw4tNkIl+nk+yqSmN4g+HswopF2+r9fbvtwTB4EkINC0X7LLtTznKx0ODzaqX+ejh4nwIVVAMMyJwFsxrsJU1lNJ16BFYNMNrEY9cgPqI6wCSJN5uHPwIFwADrcMjWaw3CRkniJV+b5oEAxYAB1qVx7Mlr81zORaFn+LAPlgTYge10X/UPUNhMbeKuqnr59CT5jwi5H2UpDv+TJL+NcEgMY14yHv+MMklssgUBEMY5lQMmcUSLstQO66AEVXGHbFTmVHq7AOMO2AUiwL7DQKAKcOB38ZHennVnujxdqLqWb8jd4Y0f442cAAAAAElFTkSuQmCC",
            name: "Kirottu Korvaaja",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Kirottu Korvaaja"
        },
        {
            id: "flesh_wizard_neutral",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABh0lEQVR4nH1TTUsCYRCeFQ+l4g8QkiKxiGi9KyldQuwSdOjWIfCwnsqfkdttD3oV6hBkSUJQUIEQ3TSKUizD/oFfeduYwXlbX3d7DvvOzDvPM/Msu8r2/p4JY9QenyC8tgoer5fy4WBA52j4A53WB3y+vlFeKBTgpFKGGc8suJnMzc3nFwiGFuny+vRMEOr1uojT6TSc393QIDcSeUIysUFNhmGwriDIsYApQdM0M5/PU8wnQ843d3fMKQFrM4rJZOtJApplop3If5scpZKmsrCybKJ3VVXJkuzR1ve43i1fAOAaTlOtFpw2BFkAgUSZ3MjlbAe57FZDsCVGOJudstXUdQB8EbKqU85bYB3jy2j0b4NMJjPxskjdAYleD95LJYpd+DhMxOnrk0koyJb4rhyLwVWxSPF8JALKQXydfqbj+wfRxH4xH7XbcFutQsjnmxBv9ftUcw863+ANzlEzroUXWwCgGwYs+f3UxGSc+FWrUcw1RVdVs9HtimZWx1oqEBBEK1gEk1+fr9zFx4A2mQAAAABJRU5ErkJggg==",
            name: "Kirottu Neutraloija",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Kirottu Neutraloija"
        },
        {
            id: "flesh_wizard_manaeater",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABbklEQVR4nIWTvWoCURCF7y6Wi2BrsURYErBRSLOgZYpInsAmD+AWeZIUKeIDpLFOEUyR0mKbgGmEhIDBwlYQ+w3fkCPXW2wG5P4458w5c2ej58Ggcs65s37fKX6WS1uzNLX1dbVyV8Oh3X8fDu5zv3cXzab9F4cgrSSedzq2B/C2WLiX7dbON+22y5LEfrEIAPhgQMRDWbr33c7Od3luIF9xdN/rVcaWpiaVvSoBvGy1DGjEm80J2CxkSWIVqXTd7RoRQAV7WSEvtBvDBomaQnI5mZyQELfzudmAxLcbsxEJKvLp1IXBHVbUUJSKKFIP/MaF1f1AHVHMZqY6Yg5oWh0oDNTwlChvcAHT43h8lFsHVL5eooF0PH2t19aD/6QrL/vrXfRRFJU/onU9eBqNjnvNTMxBryCwqoVBZYAMlPKPoyxvqiK/IvOfUQNFYZsDDYUs4NMHQYoyCuhD0jDZM5KkZiKPvSTqXp5VWUV/AR7N9ve2qGBkAAAAAElFTkSuQmCC",
            name: "Kirottu Manavampyyri",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Kirottu Manavampyyri"
        },
        {
            id: "flesh_wizard_wands",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABZUlEQVR4nH1ToXLCQBDdZBAVgEOAIjPMJA48SAykP1CBrYnsNyCR/ZCKgqnMB1wcmWGGKkwdIHDpvG3ezSaiO3Pcsbfv7dvbTfAxn1ciIqf7Xd6KIhBju+m0mnS7erdcLNT37VwjtjOezf6inVNAeb1K3O8LgDC9d06BOGOd8twn6VhWgrCTGHdUCCL4GacEX3muDkpEEM2CCaKPFrJGe8H/2LFQliow969RVPkSJjUJsmN/2W7l53CQJIrkcT7LUkSe6jMUg9ArGNe1wonz82YjwzSVwWrlgwiGodRsvfZdCikVTgT2kkQve3Hswdx5hop0NFLlIVmZhcBbWXoFzM4SbItD/NgsBN6Ox8ZrA/y+3zfng4/4qDMoQQtIQ2aaHz48opiHolkSKxt1t1sektnW+Z9sOzdYQZFlFTuBVrJFVrIdbZhVoATW+Xm5ND4mO8YgaU+svoGdefbXZucY84tkLCbyF0BlAM2QhaD0AAAAAElFTkSuQmCC",
            name: "Kirottu Nukketaiteilija",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Kirottu Nukketaiteilija"
        },
        {
            id: "lukki_tentacle_hungry",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLUlEQVR4nG1TMQ6CQBA8NxYWaGcPCQmU9FraUPJUCztLH2ApCYlWPkAp7DSzYc4BnQLu9nZ3dnbvZvvN5t31fciTJKRVFYDb+Rxg2223vj+eTn4OG4A1AH/Dh4cIJBi8yDJfk0QTwd/CBGSfgglJSBhZKYGlg3ld17EKgFVSKvbGTDAyGQKWZRmWRRGZVIpKNdVD9tf16sFJnnsiADYCfiCEr1EPjO3jMSoZ+FfFqAdpVcXGFKtVDH627aiJmlRlGMsHWIEnuFx+ElEG/JjENCsqoBP+fdfFRFoF/ChjrmOMYxqcpzIIvbXGEfLgcL9/+yDsrEpH6BLSIXgqQ8emAIH2LUrgXaeMsml+mgc7CAh/TPrCOE6waAV6lfXeuAR9mryNYMFaJ4K9No+v8gN7iOtIQzxcYwAAAABJRU5ErkJggg==",
            name: "Kirottuolento",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Kirottuolento"
        },
        {
            id: "wizard_corrupt_weaken",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABB0lEQVR4nGNgwAHU1FT/Xzlz7D+MvXTONDAbHTDh0lxfVghng2h9AwMGbIawYDNAXkkTTAdFxTPcunWbEcrG6gKsAGQrshdgAJ2P1QtqUCfDvABzNkj84oULDATB0jnTwDbDAg45IAnrZmBgiIxJ/A/CMENIioXImES4otYJsxnWLVsIj5EFa3ZgtZAJXaC6IJXBx8EUjGEAFIUgYGxigT8aqwtSGeIzihg+f3oL5oNcgA5AXtMxsWLE6oKLFy7ANRMLmEhSDbUEpwHRKVmMvHzCDCBMLMBIykIiYmBaTUMTw7azZ04wRqecwG+AiAim7fhSIIoBsMQCizZkjQkhHgy7d2zCMAEA4x99l3Kt778AAAAASUVORK5CYII=",
            name: "Korruptoitunut Turvattomuusmestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Korruptoitunut Turvattomuusmestari"
        },
        {
            id: "wizard_corrupt_twitchy",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRklEQVR4nGNgwAJiW73/EyvOhE3hwyvPGWoPlP1H1wwSJwocOXLkv12k0X+YISDNID5MHtlwRmwGJKYH/N+x9xzD6gXLGHb+2cRwcOYesLi8jiSYXly9Fas+OJBUkftf3Zj9H+YSZJoBDbCgC+TNivnvaRnIkBRYCOa3ZU8C07dPv2HYvnc5unIGDKdoOJuCbemfUAE2JCnWl+HZs6cMUlLSDK31U/E7XcPZ9D8y3nF57X+Qd7ZfXvtfxVwX7nyQ93B6oX9CBcP24+uxWgAyzMPZCHc66Ic6m/c5PxijA5B3QF7BacD24+vhfsYG5i3ezGAT5IQSFkxYVTIwMKzcdgirOLr3WJA5k9KWMIL8CWJzC2N6ARvACESYRhYeDoZtaLY9v/OIcVLaEvwGgDQScjZOA0CpEESDUiK6Rq9kfYZJJy9jmAAA1aaQ/ZgnToEAAAAASUVORK5CYII=",
            name: "Korruptoitunut S\u00e4tkymestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Korruptoitunut S\u00e4tkymestari"
        },
        {
            id: "wizard_corrupt_teleport",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/0lEQVR4nGNgwAPK42z/MxAATMRoDnTQxGkQI7E2dy46zEi0C249eoNC4wNM2AQfvvgAptXkRMCGgDAubzChC6ybEfB/Uncqw+5Td8AaQYbADCPKgMXXnjP07t7JADIE5hKivRCYZw53JswQkEuKi0MZTv58hzWQWdBNLHZ1Z3j19BJW27StZf+rsfKgiLGga07vmM/go6wA5vuGohoAE8fphVdPL4EV4Yq+LXcfMPiGOqKkCSasKhkYUPyMbglOLwRlbGAE+RPEFmXgw2U2bgPAGmUgGgXFeTBsu3r0MWPQ0cf4DQBpJORsnAaAUiGIFpPWw9CY56jKcGDlVQwTAHUdadphXLfQAAAAAElFTkSuQmCC",
            name: "Korruptoitunut Siirt\u00e4j\u00e4mestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Korruptoitunut Siirt\u00e4j\u00e4mestari"
        },
        {
            id: "wizard_corrupt_swapper",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJElEQVR4nGNgwAJivGP+MxAJmHBJwAyJcI/4T7IB/10ywHR0/5H/zB45eA1hQhcIzZsKVvxT2RIuBjKEaAN6c7wZ7s0vZWBT1Gf4df8iWAxGE2XAtdNXGFauWQ42hP3ucbBmkGEwlxE04NjBzQxzetrBhtx9fBesmXHPDLBhBA2oS0uH2wIzBOSStv4WBjaWL3B1oMCFsVnQTUwpqQR7AxtwMjP/LyWqyoDsFxZ0zQkx4QySkb1gfjuaASDx//i8cO30FbAikJ+xgefLixnavWUYlhbaMGI1ABmwH+hhwAbQvceCzPGI9mEE+RPEVpCUxGoAOsAIRJhGGXFxDNv2nTrJuC/aB78BII2EnI3TgB1Lt4Cdr2Wqg6ExLCyFYd7GDRgmAADXe2/tqmL64AAAAABJRU5ErkJggg==",
            name: "Korruptoitunut Vaihdosmestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Korruptoitunut Vaihdosmestari"
        },
        {
            id: "wizard_corrupt_neutral",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABmElEQVR4nI2SP0hCURjFz4s3OgiGDqFQQn9MhUBcxK0gHmLSUIghQWtEWE2BQ0FbUYQNQRAtQTU0KAgOgohQi6iQvDfJW0r8vwiCduMKSnjfyw5c3nfhO797vnsfMEaVSoUM6kKhMKwH4tWMkUiEWK1WdDodxGIxUiqVQPej4tQAjUaD5PN56PV6GAwGVKtVNJtNOJ1O7l8JarUa7HY7NBoNeJ5Hr9dDq9Vi+iaUzNOWeWI2myFJEorFYt+cTCb7sLGA/YtzcnRyipnFBToGbDYbEokEHA4Hut0uxkrwBghdNy/PhCbJ5XIknU6TdrvNvACTQPAGhk3Rh1fQJD7/JvJfn1heXR/2ybJMVC/RE/RBkmXFdHOWJRI+PoTRaFRO4An6cBU+w1TvG7veNQbw9HgPt9uNTCajDJBkGXe31xAEAfV6nQFs+LcRfX+Dy+XiVEcQRRHlchnReApbezsMZHQ8/vfmMnTA0TlprZs0KN7DqJgEA6NWq2NOEz+ynBjK/g2gxnGxVQH0L6TfWZOJMTp9K8ik4gzhB9QPo4jNdX3rAAAAAElFTkSuQmCC",
            name: "Korruptoitunut Maadoittajamestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Korruptoitunut Maadoittajamestari"
        },
        {
            id: "wizard_corrupt_manaeater",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTElEQVR4nGNgoBAw4pI46uT0/8WvXwwSbGxgvvW+fVjVMuHTfOnRI4Zdd+4wWDk5gcWIMuAoks0NaWkMd9+/Z2iYNQunF1jQBc59/gymQQbEdnbCxUGGEuUC7pUrGNwOHYIbBAIgl8DCgiBYbGPzH4Rvfv/+/39Ly38Lfv7/Mby8/4kKg8U2NiiKLLu74WyRrVvhbGTDWNBNNNu9m+Ho82dgDDe4vJzhFgMDg7+ExH8XWVkU9YzIHJCzyxQVGcq0tMB8UPSBXKHy7x9D7atXDG+8veFqsaaLeffugv062dQUTMPCAUSXamr+B7kAxMYZBshgw/PnYHrKxo0M+AALMidJSZkRZAuIrSYoCA4HUJQihwc6wHABSCMI6wkLM7DGxYPFrnv7gOmNL14wqnNyovgdIxZAGpEBPttBAMU0UCCCaGtJKayaQV5ENwEAQ0GYQI1ndaUAAAAASUVORK5CYII=",
            name: "Korruptoitunut Mananmestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Korruptoitunut Mananmestari"
        },
        {
            id: "wizard_corrupt_hearty",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDklEQVR4nGNgGNTg/Kzi/4TUMGETbNLW/r/UwuI/MYYwoQu8nxP0f+Pbjwx3P39meHP5IlgMZhjRLthzooABZMjxfc/Bhohoa4NdhU0tC7pA36x3DAyztoANcbGYwMCwDyT6nEGZl5ewC2rNHOC29IVtgbskd2siw54PP+Dq9tva/sfpgqJVPgwMe45htc1YQua/vzA/bi8UrfIBO7tHVRHMN3BBNQAmjtMLDHuOgRUdfvcOqwtKbt9nMFjsz+B4+DAjdgOQwKLXnxmwAjTvsSBzBFPWMYL8CWLrCYhgNwANYAQiTKMMnwCGbWdfPGEUTHmC3wCwRgLOxmkAKBmDGS5WGBr7SpQY5qdcwDABADv3YtSrHlMJAAAAAElFTkSuQmCC",
            name: "Korruptoitunut Haavoittajamestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Korruptoitunut Haavoittajamestari"
        },
        {
            id: "wizard_corrupt_returner",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEElEQVR4nGNgwAL+/////52BwX8YG0zv2vUfxsYL3hkY/N9ubg5WDNMEp7OyCBsAA3BNMLBrF1bNjGBTAwIgPFdXBqLB7t3Yxbebm/+foan5H5sLcLkCIwww/E5KGIQ4+cM1wQITPUbwa9616z+IhrFh2FLfCh6dZU5OcIOYsBk0691DMAaDDRvg4vIiUv/dMzJQ1LIgc1ZXZDMoRCUwhOtpgPmdaAbDxHGCdwYGYOe5KSmBaZBz5Tk44F4AuQA9JphwGXb47Q+s4u/LynB7QejCBUaQLSC2FC9+12I1AKxRWgFMSwuLYtj28M0zRqE3z/AbANKI3dlchF0ATjDvHjIIdnUhaYSArYzfGISwmAAAHN3m/M/kJ/AAAAAASUVORK5CYII=",
            name: "Korruptoitunut Palauttajamestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Korruptoitunut Palauttajamestari"
        },
        {
            id: "wizard_corrupt_ambrosia",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7UlEQVR4nGNgGAXUB9Ulqf+VFGTg2MHG5D8+9UzoAkdPnGeIDPGE8x89ecGAzxAmZA5MIcyQ379/g/Hd+4/BLoOpe7HQAM5mQTfR2sKQ4fWb9wgvlWYzvH79kuHHz18MIC/NT2JGUc+Crnn5mu0MxxpFwHwO9hAwPWvBGoa4SD+4OE4vvH7zHqzo5sP3cI0gkJYAMciq/g3D5MumDBLxFxixGoAMQAphGmEGYQNMyJxZC9YwgmxJnPeXoEYYwAhEXh5uMA0LyNbuqXC5ew+eMLb2zMZvgKAAL1abkGMGpwFpCSHg+BUVEcSpAR0AAMzgYzwcb+hDAAAAAElFTkSuQmCC",
            name: "Korruptoitunut Kuolemattomuudenmestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Korruptoitunut Kuolemattomuudenmestari"
        },
        {
            id: "wizard_corrupt_wands",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKklEQVR4nGNgwALCQ4r+W+kF/IfxkdkEQTiJmpnQBR7fuscgq6aEoRlkMAijq2fEZiqyxjdvXzHcenqMESYOMnzlmj5GnC6AaQIpBNEgoCZtBfYWSAzkQrwuKAtq/G9p6MhQPqOCwdDSAq4BpvnYpQ0oepjQDbjy9gnD7D2LGTozOhjOHz8BDw8QQNeMYYCXfSrc78iGlIYWMTy8fRuuDjkwWdBNTHWJZTh+fj8DNqAkY/hfQkgetwtSXWIZimfmMzxk+gjG6MDUwhHFSxgGHD+/H6wIPaRh4PSJ/QwR+gGEoxEEkP2MDNC9x4LM6VpXzwjyJ4gtJiyD1QB0gBGIMI1CAhIYtt17cp6x68l5/AaANBJyNk4DQKkQRINSIrpGO2UThhMXN2OYAAA61YLACbABsAAAAABJRU5ErkJggg==",
            name: "Nukketeatterinmestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Nukketeatterinmestari"
        },
        {
            id: "wizard_z_poly_miniboss",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFUlEQVR4nGNgoDbItyj4T7HGxSFL/pNl4GIkjTA2yYYtRtOIzSBkwAgz2UTGhCF2TQwjLoUgAJLHagAMIGuOWR0NppeELkXRDLJs4okJGAYxnJtw6P/ri8/+gxSADAKB42UnwDSID8MMuMAMn4D/5dZ2eA3Bpo8JmaMoKMTQkxXBUDOzjOHMkzNg51t0moPlQHxsgBHZBTD2/ffvGEqmrWCICopj+PrrK8PGLWvBBoPAzbdvwPSGG9fAellgmjK2bGAEGWLmUsRgxkAYBGhogS1kRBYE+X9H8z4436PWCa8rUMIAphmXX3EBuAGP99+BC4IMWXuljTQDYACUImEA5ORl6xYxcLNxM/j7BIMDFgTUhUXgGgCHFLN03uF+FwAAAABJRU5ErkJggg==",
            name: "Yli-innokas Muudonmuutosmestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Yli-innokas Muudonmuutosmestari"
        },
        {
            id: "wizard_transmutation",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABc0lEQVR4nGNgoAXIlfb+D8IgdqCoxX8QxqWWEZtmEM3MxMCgISDF8PMfA8MfXlaGB4s1OCar5v1EV8+ELjD56VZGZU4JsGZXX1EGVnF2hjdLzRkUYm/8wOYCJmyCxz/eZPjzh4HhyN4vDH8//mMQKrjGwPTtLwNRBky9c+d/xa3NDBe/P2GwcXFnYObnZ3jfH8/wn4uTuDDosisAh4Hr2lqGaSYxDDo88gx/eNkZHizO4Zisqoo/DLqgmkFgd3AzQ9b5pQwb355hcNzewPAzuAIeBmVO4XB1LOgmum6sZzj29i3UfYwozvRRsfv/698nFPUs6JprTf0ZtOQkwXyrtTNQFEPEJXEbcOztW7CiCw9uMhgoqKM7juHao+cMzac3MhgKCjLijUYQ+PDmDwMxgAmZk62iwgiyhY2JjyjNIIARiFJcomBaRUAWEZhQsOXOIcYtgoL4DQBpRAfoBuE0AJQKQbSVsDCGRv11nQwMKmsxTAAAkyl5f/aNY6AAAAAASUVORK5CYII=",
            name: "Transmutaatioidenmestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Transmutaatioidenmestari"
        },
        {
            id: "wizard_manaeater",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABL0lEQVR4nGNgoBAw4pI46uT0/8WvXwwSbGxgvvW+fVjVMuHTHOThwbDrzh0wBokRZcBRJJtjOzsZ7r5/z9CQlobTC0zoAuc+f2Z49vMnmL24vBxMN8yaxQAyFBtgQRfgXrmCwVpSimGXnR0Dw759DMqCggxuKirEu4A1Lp7hlKsrg9uhQ2DXgDSDaKIMWGxjAw8omCHV58+D6Q3Pn8PVIQcoC7qJZrt3Mxx9/gyrbf4SEv9dZGVRxFjQNZcpKjKUaWlBBLZuRVEMF8dlwNHnz8CKQH424uXFUNx17RpD1/37DOqcnIx4ExIIIPsZH2BB5iQpKTOC/AliqwkKkm4AskY9YWGMwNz44gXjRk5O/AaANKIDXLGCYcC8e3f//wblPEkpDI2aW7cwMCgpY5gAAAbzdfD1rU2tAAAAAElFTkSuQmCC",
            name: "Mananmestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Mananmestari"
        },
        {
            id: "wizard_jackofalltrades",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNElEQVR4nGNgwAKkc2z+w9iiATpwNjbAhEuCWENY8Jmu0u8P1/h6wxXiDeBUFoazw/yCwfQqBob/dwo3MjIQA0TD9P+DbK+6u+g/iA3CIDZRLti1a9d/NTU1BtMyf4ZVDGsZUtuLIS7YtBarZYzoApYTD4BtWu6vADaE31IBLI7L+UzYNINA5MYHDKe7NjK8Wv+MYU/gRAadgqlwOeUJQf9xemG5vwLDrVu3sDpXKbz4/6c/e1DEWNA1O5VPZmC0vA/m71XrQ/Wv5X0GfgZl3F64desWWNHHw3exuuD/cUWGvQF9DHcL1jESTImcD5xxSeF2gZubGyPIFj4WF6I0Y3UBl6QSGPMqamME5r2VvYwKCgoo0YkRCyCN6ABXrGAYAEqFDAy/GEApEV1jn5cqg9sETBMAxwJsJBMWDrEAAAAASUVORK5CYII=",
            name: "Eimit\u00e4\u00e4nmestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Eimit\u00e4\u00e4nmestari"
        },
        {
            id: "wizard_explosive",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVR4nGNgoBAw4pKYn+byH8ZOnLUHpzpGXJp/6jiC2U+fv2Z49foNw8w5S7CqZcHnvH0HjzPcvfcQnxIGJmyCmx59AtNO9pYMJsb6YEy0Abt27frfP2MV3PlioiKkuWDn8gkMkxuzGDz8ouFi799/YCAKFCd6/UfGDx48+K+lIg2mI7wt/2OLIRZ0Q3LrpzHcunULqwWuVjr/JZj+oIixoGtOjfJhiNKRAPPVquagKIaJ4zTg1q1bYEX7rj1hcNKSwVC87MoLhtnLtjAoKCgw4o1GENj59CsDMYAJmePm5sYIsuXFP7zpCwVgqBQW5AXT0mKCGIG5+9gVRgUFBfwGgDSiA1yxgmEAKBWCaDU1NQyNSfmNDCu2umGYAABvZmzpt2ckEQAAAABJRU5ErkJggg==",
            name: "R\u00e4j\u00e4hteidenmestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/R\u00e4j\u00e4hteidenmestari"
        },
        {
            id: "enchanted_duck",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuklEQVR4nGNgGAUEgV+b8X8QxiXPREjzwc47eC1gIeQC+3IVMP1xSwjcFfw+axiJNgAE3tz5yPCcZQ+YrVH2Aa4ZxQvLJpdg+HNT1VmwYhEVfoakGyIYmjFcsGxyyf9vlw8zcOnaMoBosCEMfxjwASYYA6YBpPnQpvVwBVL7PzD4PWAhbEDKrJOMMENA4Mz9N2BsoigC5h+bdwfD+SDAiC4wJ838P7IXQAbj9QM2gBxlhADOhESKIRQBAFSiRgPD7r12AAAAAElFTkSuQmCC",
            name: "Lumottu ankka",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Lumottu ankka"
        },
        {
            id: "wizard_duck",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABR0lEQVR4nGNgoBAw4pKw7vL/D2MfLduIUx0jNkH9IkewZjY+DjCfjYsNp0FM2Az4/uozmP716QeY/rvuJWleUA41+M/MzsLAKcYLcQEfB0Oy8BkUNRm5r8F6WdA179q167+amhqDc2kA3CUg8JbxL5xdXf8ObjELugEXdrcwXNjNwLC3ewPYEBCIZv7LUIakCWcYdJXawUN+1dQ4sCFyD18whGUvYkgL14PLOZUl/sfpgrDsRQy3bt3CZhmDt4PK/+tsIihiLOiasxNcGL6b2YL589TqURSDxBXQDGVB5oBsBil6cOE6g4KBJoYLOE8dZpi6YA+DgoICI950AAIqD88yEAOYkDlubm6MIFs0f70hSjMIYASitDgXxAVyAhiBufXAHcatCqihgGEASCM6wBUrGAaAUiGIBqVEdI0hyT0Ms1a6YZgAAHEzaFzeD/vvAAAAAElFTkSuQmCC",
            name: "Sinisorsienmestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Sinisorsienmestari"
        },
        {
            id: "wizard_copeseethmald",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABD0lEQVR4nGNgwAMaTU3/MxAATMRoxGcQEy6JJSEh/5FpkgxQlpeH09GrV8P5RANfZen/IJtBAOR8ECDkEjg4u6Px/+snF/8jGwKicRnAgi6wd+FeEMkw7+A2hiR7LwaG0FCGuw8f4vQGEzKnK9IObsv80lywISvPH2fIWj+H4dDTW3B1yK5hQTcxsXsyw6MrG7Da5q2i8t9MUBC3FxK7JzMkOAQzRBoYgPlyEwJQFMPEcRrw6MoGsCJcfl5+4QLDggNrGURl9BkJJqRDSH5GtwSnC4w96hlB/gSxpUW5cJmN2wBkjSoKAhi2bb1zh3GrRz1+A0AaCTkbpwGgVAii5XQgoY+sMb0+mGGWxyUMEwCUI3gVKaHffQAAAABJRU5ErkJggg==",
            name: "Uistelunmestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Uistelunmestari"
        },
        {
            id: "wizard_ambrosia",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGUlEQVR4nGNgoBAw4pL4cVLtPzs7OwMDqwQDw+8XDIwGl7GqZcKrGQR+vwAb8v+C7n+iDfj++SnDz58/wWwwDTWEaAOevf4DNwTkErghxBiQlhDyf9nZOBRDkF1E0IBbdx4wHD1xngHZkMAGTQYO81uEA9HBxgQeUDBD9OJ5GKwtDBn0ddThcsgByoJuIkjx6zfvsTpXSUHm/9k5qHIs6JqXr9nOcHeDIJhfs8QCRTFEXBC3F16/eQ9W9OHNPawuUA54DzYUOVExYVXJwMBgEPMLlxRuL8xasIZxzwGZ/yBn8vIQpR8zEHl5uMG0oAAvRmDee/CEsbVnNn4DQBrRAa5YwTAAlApBtKgIJKSRNZqb6DJcvHITwwQAMdmEaTu3llEAAAAASUVORK5CYII=",
            name: "Kuolemattomuudenmestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Kuolemattomuudenmestari"
        },
        {
            id: "enlightened_alchemist",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/klEQVR4nGNgoBAwogvMzp/1H5mfOjGNkWgDZiNpxqVxeevO/5HV7nA5JnTNPZu6GZ48vYPTRpBmkCEoBsxG0gwD9SFlKF5BB31JS/+juKAHSfOKs+txakS2HQRYkP1tpxzIoCmnD2ZLKoswLDd0RvEvTPPzu28YiuZFg8UZYQacunoHRTM6AGmCAZhmsBeeQAPMTFuF4fqji2DNMMUgGoZBACSPrBnsBRlpFTADZBDIEJBimCHoirEBFhgDZhDIFgYGfYaPn0A0YcCELgByBS/vV6I0YzWAAQlEOodgpAVQ+gBhmBw8EHEB5ASFzFYTVALT8DAg1hB0gNcLxAAAbSB4mvNgNSMAAAAASUVORK5CYII=",
            name: "Valaistunut alkemisti",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Valaistunut alkemisti"
        },
        {
            id: "failed_alchemist",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLElEQVR4nGNgoBAwInOWzS3+H5XciyIGArPzZ/1H5qdOTIOrYcFnOkxjz6ZuFPH6kDKweOOaLkYmZAmQ7SBX4NMMAyDNIJrp0pl1/0EYxIHR6E5GBhHGgXDNYC/omQQxwjSfXPyGgYFBnYFYzSDAiM3GJ0/vMMhIq8D5MG/cvH8bI4CZsGlGZ4NsBmFsgAlZMQire/5FUQAz5Nb7e7gNePL0DlgBsiJuvZtw/8LEI51DMAKXCZQoQAqcdNwYfKPkGTYvewj2P4iGeQ8kjgswgeK9sjOKYd+VXWABEBtkO0wTyEsgw2B8dFcwInNAUXnl4lGwBhBYvncNOGHB+CBDsCV1uGYYhqVGZIBNDB6IIE3t5cvAAiAaOUmjG4IujpEbQc4FOR2bbciaYV4BADcXur41PJERAAAAAElFTkSuQmCC",
            name: "Kadotettu alkemisti",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kadotettu alkemisti"
        },
        {
            id: "failed_alchemist_b",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9UlEQVR4nGNgoBAw4pOcnT/rP4z95OkdhsY1XXjVY2iuDyn7r66oCsYgMRCfKBfMhtrcs6kbLnbz/m2sapkYcACQk4kBTLgkZKRVUPiRziH/iTJgNlLARRgHotBEu+AJkvPxacYwYHb+rP8gzSDnw2gQgNHYvMGEy+RnHxA0yDAnHTfCLnjy9A5cI4yvKaePIobTgNn5s/6DUhpIAywMQBqvP7rIMHsPJAUu37uGEd0bLMi2gQBIAwiADELmw+RBhmB1AXI6h2mWVBaBs0HyyFGMNQzAXtnTxQiyFaT5+d03YBrdlXgNgAGYZhC9vHUn2GZsuREAhd166pO+IrcAAAAASUVORK5CYII=",
            name: "Ep\u00e4alkemisti",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Ep\u00e4alkemisti"
        },
        {
            id: "wraith",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMElEQVR4nGNgoBAw4pPs8vX9L6WvzyAtLw/mP334kCGmpQVFDxOxmkEAxF5SU/OfoAuWp6b+/ysuDtYweckSBjUZGRT5W0+eMKw7eJARpwG2enr/m3JzMcR3HjjA4O7ggOIVRmxO3/zwIYOooCBcDJ8LWNANkJWQYGB4+JAhNyYGpwt0Hj4EGcCAYcDy1FR4AIGciS0MQIaAXAADLNjCwEJIiGHmpk0M6X5+GC4BGXz08mXMaFyOZLuRqircEJAGZM0gMVkhIbgYIyzgwH7HAqadPInCzzI3B9ORs2djD0QYePziBcPrz5/hGkD8C58/M5y7fZuh+8ABeOyxwHWgAZCLQBoYbt8G858yMDD4qqrCbSZoAAiANIBsBhlmhEMNOBBx+Z8YgDMzYQPozgcJAgBq3n4ILeqxfwAAAABJRU5ErkJggg==",
            name: "Hyypi\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Hyypi\u00f6"
        },
        {
            id: "wraith_storm",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHElEQVR4nGNgoBAwElIw/eD5/8LCwmD227dvGTLtDRmJNmA6VPPaZYsZHp47wSBvZMHg4O6FYggjMZqDo2Lh4iA+siFM2DRLWbtjaAaxQQDEP7BzG1wtE7pmt/a5/2FskLNhmkFsmCEwcawGSCgowdkgP8NsBbFhroGJYxjghmQ7KMRBGpCdjhwGMMCCy/bmqgqG2rYOuCHIsbAsN54BIxbc2uf+RzZgz5QOMA0yBDkdgDQfvnSJkaAB6AbBgEtOBZheFOnIiOEFZPDiwT2Gd08fwTWA+E/OHmW4dvQAw5kpjagucMNh+5m1ixm4JGTB7G8vHjOYBEMCEmY7COB0AQjANIBs17J2wKoGHI3YbMcFkG2HG4APgGzHZwEAH+CFJWexEP4AAAAASUVORK5CYII=",
            name: "Ukkoshyypi\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Ukkoshyypi\u00f6"
        },
        {
            id: "wraith_glowing",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0UlEQVR4nGNgoDUou/X+//afP8EYxEaXZyKk2VGeC84HsdENYSJWMy5DmLBp1nNywqoZG2BCF6iYOhXDn9hcgdMAOXl5grbuf/gNuwHTtmz5j00RPsCES2JHRjBWQ0Bix0PsMQ2YhmR7RlERVkNgmg9fusQIE2OEBRwuv8/o60PhwwzP8vEB62XB5YVHDx8yPHz0CK4BxD919izD4cOHGZZ3dsJdwILLAJCLYBpA4OXr1wwhQUFwmwkaAAIgDSCb8UUtOBCJiXu8BhAL0J0PEgQApoxmlgbFC/IAAAAASUVORK5CYII=",
            name: "Hohtava hyypi\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Hohtava hyypi\u00f6"
        },
        {
            id: "wraith_alchemy_apotheosis",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABZ0lEQVR4nKWRz2rCQBDGP2OIQjFFtukpepBeehHpRS8+QqHeivgCxQfIY9kX8KKX9lJEUA+FFnTRkj8gkdKQGFJma0XTatF+EDI7u/Pbb2aBfyqxb9MwjFY+n0exWES/30ez2awdfEO9Xm8RaNe+9Bcgl8uBXBwNII3HYxwFMFYzoK/b7bYOGuJdoxGpjCGVSIDpOq7KZUrfV6vV2l7AdaEQaZUK/DCEpmkil5HlnRB5s/i2VIpebRunYQglmYQ3n4NcLJZLgHM8AXA4v9k5g3fXheN5onhmmlgEASzLEg4IMp1M8DKbbTmW4y2wdBqObYvYcRwwxsBNEylJghUEAv6rg7KuRyeqinNFwdtwuD5AEHIzNU2xHnQ62NuC6fsC8tzrrfOKJCGTzeKh3Y4b/mrh4uwsoqKR64oWSJeqitEKQrmB54lcXOIZCUCHCEIiF6TNNcX0f+R86+l/DHHdu/+xFX/D4voEA9uL9jTIzgoAAAAASUVORK5CYII=",
            name: "Alkeeminen H\u00e4r\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Alkeeminen H\u00e4r\u00f6"
        },
        {
            id: "wraith_returner_apotheosis",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABp0lEQVR4nGNgoAV4sMX7/+vzff9hfBD799cXcD4yYEEXODTD7P+jJ68Z5Bj2wsW+PoWwQYawckswIqtnxOWKL88Og21k51cF89E1wgATutNhmpfvf8kAwufvvmdg4RIH2w7zDk4DHj15DdacXrWU4cO7jwz6utoMproaEL8iGYLTgM0nPzJ8f3kazH7x7AnDxctXGU5fvgHmw2hRwyJGrAYcWRn2HxZgEpKSDBo62mBXwAwB0T8/3sYdCyISSgy+5g8YuKWdGSSk+MHOB2m6ceUq2CAIgHgDOUBZ0E0EueDCWVm4N148fw6X+/4S4UUML7y6vg8cBlPX3mFoDXnMcOHsabhmEF0RxsvQNWkmOAyQY4IRxrhxsAIsOHfBejA/O1gFbgvIWyDN1gbcDAH551ACkQVEbJhoBDcxOSEQTE+FGgQBd+DiDAznsAfijQu7GDQM3BjevLjH8OYFQgOIf/LsTbC8tV0MepAhDHAJnciwZ3U+2BCQBgaGXWDxu0//MsRFxjO8/fQKjNEBPBBBoQsyBGSTt7cn2CAQUJZmZjh6aAmGRhgAAAI52S049Q1fAAAAAElFTkSuQmCC",
            name: "Heijastava H\u00e4r\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Heijastava H\u00e4r\u00f6"
        },
        {
            id: "wraith_weirdo_shield",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABP0lEQVR4nGNgoCZYfL/nP8Vqg9cbEDQEWQ0jPgUBBjEMEhxyYLEXPx4xbLiwBMxeG3gBro8Fly0wzTNOtDHc3fGGQdlDBCwGM4Sg/3Y/X/XfIF0GTINcBOMTDCdVfzEMTSA2smHI6pmQORG7jOGSIGeDnA9yOswLMO/gNEBRTA3OBmnIsKiCawbRID6IjRNUXoj8D/ICWWGQ+CD6P8wAZENg/gfRIDEldxEUAxiRDZD48A/MXlO/F0zXTShDSQf1GR0MwhMlGU5rXGbEagADAwMDzBBkg2AgpNEZTLcbLMedkF4IMDF8v3WD4f2db3AN91/dYri38y3DuWMXGN45oWrBMODKj0sMDHIMDIw7vzOcY7gAFnt/9zuDdq41mP0OJI/NAJDT93BcgUv8T+VleMfAwKDDoccghaQB2f8gAQBb1c/3jAy3SAAAAABJRU5ErkJggg==",
            name: "H\u00e4r\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/H\u00e4r\u00f6"
        },
        {
            id: "statue",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlklEQVR4nM2SzQkEIQyFM7JN2IEX7cFerMhuPNlDvNhBysiSAQcW/Bly2gciGPPeRxTgr8XMjIhcSmF1c0pp22xWhdYa5JyPQWZVqLWeMQHgsyt67/UEMUZwzukMEPEeXO9dT0BED8HuJcwsPYRwWWuP6VMDIvrZT7pWBGMOQ3L2imBcFAJZ8h9WzVODIfUMRIIv6W9MvpBiSQaXNWX9AAAAAElFTkSuQmCC",
            name: "Patsas",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Patsas"
        },
        {
            id: "statue_physics",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLklEQVR4nH1SsWrDMBSUhaYEZzKUkECJ11K6dyxdAiWQOR+Qb+oHhIyFdujiuUuXltI1pdBiCp5sktXhhE88S2oOjJ+ku3tP7ylRHZardZtlGZeqqioXYx9rniN+2NwniI0k+UJp9lf+Op5MpGNEkinAuvz5Vm+vL0ECzfLxBwFEvyoJmlCj5R0JaQKcjSeBEc1NcPJP9tv5Qn1+vAdnRgrG0/NoRlmhf6ZPlYqMxfOjjZu67mWnoY6VDTKE7AXidDRSg2EaXNXQjWKQZnmuDvvGxvz7j4wVGbkJEsQEsuKjWJoUT9vEXaHp3PxRYuaxxxM0sejcaMLGEdJElt9rIjflM5bgKG2DRULXAzQLwCjZPODi8sqO82u3s/3w4ZyA65u7FmISUY18G352bB4B2c21b4iBC/QAAAAASUVORK5CYII=",
            name: "Hohtonaamio",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Hohtonaamio"
        },
        {
            id: "snowcrystal",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB40lEQVR4nMWST0jUQRTHv/PDm6E/SAuW/LMuROrBZGOJ4MdeiugYrCwKSSIEK+xeBKEQD3rw1CGDIimUDuHBY6dw0WXBgyi6gnpx/5iykBmusHVIY+T7cAbdyGvv8mbevM+b77w3wP821dER0pnMktJa2+Db1yP6X/mx+CiUUrKJj7zXjuvWGMjCnXfCCN19ANett54xABcKr6dm4JwPEG72tyIYDKH6Sq1A+9/2EIk+xZ+TY/CsUl3VubXcTDibzWPqw4QEm5t8GH6RRF9/AlfrfLh2/QbeTEAPJMZUZQHktzdx+GMfCwtJ7Hwt4t3kNDzPQ1trAPNzs6KgdHiAwk7RMk65/Mtubt66DX+gXdYGTqfT2NzKSoxnzKEqGlnH39JgC/DdRraB6SvNKCDr5HO79uBn+QiBgF8SKNvAXDO2upyyF8iTc7twegfHbdXjk99Yz6xJw5oafXj00EPsWVTWjJ2N8oICFQze0ysri/KRzBhNH+SW7IbsqWzuy2cU8lswEyDrsEo4fF9mG4uPKiaUSt8FpHFs3FMZp+O69QKTIVtlemC+J5dDg0UpyGKUyzefedX9JI6e3oRMQCYY6YpqSqHn3/6r5RXGvFefUsLQO97jAWmGUcKEy2D6jy+fC8PgKQN14eem7542AAAAAElFTkSuQmCC",
            name: "Haamukivi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Haamukivi"
        },
        {
            id: "hpcrystal",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6UlEQVR4nGNgIAI4bU37X3A96f+xn5v+o8sx4tMI0nTpHguDntIfuFiYUgCDFbsfXB8LuibtTo//4jpyYE3omrEBJmya8YFV9zYwIHuFiRTNOF2gjaaZkPORXcEEIsixGWQIPBBfXnmEInmJgXgDWUDEp7tMDHzK/+CCtzc+AfNhBqF7BeQ9GGACEY9nbcOaHmAuA2lAxshyTDDFIFfAAMh2ZD42g6+W7wBbygQTBLkCXROIjx4+IADTjGIAAxFeQWdjGIDuFWQ+SCOy02EAq42yaV4YuQ6X61CAvr4ZXCPIEGwGIasBCQAALzd86qZvagwAAAAASUVORK5CYII=",
            name: "Elvytyskristalli",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Elvytyskristalli"
        },
        {
            id: "worm_esoteric",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABoElEQVR4nJ2TS4oiQRCGv6yqGR/lY5qioXHZ68YDuPAGBbMS14LokVRsDyAKs5y1V2joW4yg4LOsyiaSzKI2g9IBQUQkEX/GU2mtfUDYAxSggQxIrS6MUspIR1pr8SUAfgA/rfRscGLZgWRa6yKAchwAJSAEqjYTCTpbvlk7tcCZDXRZ+wJQAZrAp4Nvt9tcLheSJCFNUyOdvt1uo1ar9a9cLlMqlVBa61fgGfgVx/FfcZTg2+1mAoTFPp1O5i0IAur1Os1mkzAMDcAb8OF+7/f7xnG1WhV7RrfbNVnIr1EUsV6vzXsAlIHfQDQej98bjQaz2YzhcIjneSaD8/nMZrMhjmMqlQrL5TIH9mz3/wDvk8nEOAhJetPplPl8bnSharWa60KLxcIA3CU3Qcnmer3m74PBwJSQFEvIMpkUHA4HRqORCZIGCu12O1NWr9fLy1CPNrHT6XA8HpEPpEyZhJSkHhmjNFGCJROxfd8303B78AI83VskZ+/3+7BWqx0ERMoRANnCR1a5uM75PUgTL/ZgRP73mIqXWSTJ4Fvn7OgLNSwGswK8MUwAAAAASUVORK5CYII=",
            name: "Esoteerinenmato",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Esoteerinenmato"
        },
        {
            id: "esoteric_being",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjElEQVR4nKVS0QrAIAgsifYJ7f+/br+wJ0cwh+SpwYSo9M7uqlr64PIjmlfg+zK5epwmR4g4xwqee6m5DfgtCtmbdROKJHuyNZ5WsEj1SIL5OKUPRp53YvIosxCRjQUGTbIc6QKykeUoAkYheJKNlhW9gl5PXkMATw164tRC9sHgJQrJm81H2j0ZqXwAI2ddFsXbhsAAAAAASUVORK5CYII=",
            name: "Esoteerinenolento",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Esoteerinenolento"
        },
        {
            id: "fairy_esoteric",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC70lEQVR4nH2TT2gdVRTGv3Nn3tzxvfTFJDYz0tBGi9ZqE0srkibQEFqzCLhRwZWoS4VQ6KagCKIolKIktJJINy9mYboQdy6SRY1p+sy/GhNMYlCatBEmYP69ZPrenWTmlHsTQnDhhWE+zj2/czmH8xFQ6wKhjQxlEFsukuQQGBmwkLBiCX1iS4ESBUIIITZhxSWEHAKZHbEP7yTliBOfVTA98/vPP4DikwC9YD6tCc+C6OjCnyP9Jlczmi0Wi8OFwuYI7OrGmdm5h5BeOxz/U6S8jtx3feOQXrfWY2MT68zMcPy3dK5mNEuLiw87Nwqb6aqqynNHnqnPIaEaEHwAFayCVnL9QTAUgDUwAghe+uf+1HsrK6v58uyhR3ZJqdTmVphefLD0YGbyzqXBX+6GH7RfWQOQNf0zagBTINt14+rp5vONmXu/TU1XVlakpXS2xYmXmnpKpZIsFkvpoeGRjbNn6p9mFTSAUWV4FRzXWsf0nc7RuZrRrA2L0hda3xzozX3z/nYUuYNDeaVUFHEUeJ9/+fW2KRIF3p3hkejX0Qn1hOu6SilXM7BEGpDVr5nBSa+788bNhavXrq/qYX32xVeR/v9X67M33HbN2qZPALmbna+8+87bx/A/h6T/NwhLAOb2Y3D9lqnRge/rz17sA+EkgBrT84EWPvnocoocfxmEFQBLYMwCPAtLzNuI+VFd3SkPROsAm+lzFLyoAV3EvLKnSfr3h2//2NzU8kYeQEGzgOOdgvTbzJKkvI6ub3NzcLw8HO8PON5fu8tjdN7cpbwOE5N+m2YJsvr4wvz4T7XPvfoxKKk9uEggSC4FzST9/oOLxKXla+T4DRD8rw0bW7XPn3kdiXgKQgCCFZjWwfyknlBP760y0zPR+uR4/4cv19cdppTXBCtZgy22CDhctm+mxKqAoCowl4M5C0GOGXXCEYgKINpAwisQsYY3tCNtbUmEYYiMAGKhkCThrp0tCezZmS0FJArgEJa2M+/b+TE7MI6GMye1jAAAAABJRU5ErkJggg==",
            name: "Esoteerinenp\u00e4iv\u00e4uni",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Esoteerinenp\u00e4iv\u00e4uni"
        },
        {
            id: "fairy_big_discord",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAChElEQVR4nIVTTWsUQRB9Vd2zvc6sSVYliSIiJHrwJ4gXf4O/wF/gybs/RU/evItHxZOC4EX8gBDFrNHN7iaZyfZMd5XULIh4saGhqXqvqXr1in69PB1Kp/7oVVNduF0Om/32PBdUUUEhn0oAADfiqJ1G6bQurw1Ojl43ywt3ypoLSt7IAKqw6dfjYRpDcFET1nMtazTAwD5Ic2k50DEEi3iYpmHTzyxuH3qoPq8/dffdiC9p1ivk6DJ5XGSmDc06NCCfoyUx5gBNNWvpRuzqjy2qG8Uzrwlvqt3iqXQamr3usSv5qgq2IRhzQX0LmhAVmIExSacSyuvFI952URNeWflFbuSDdDoOW/5BN89viWhLVXcAsjxUNZHQF1Udhi1/LzfyXguaceDCt9P8xFX0EKBSWl24wHdFNJNgLK0YH+wJYHjHfEta/coFlapojMvtLJfxIL9Q0aH1nKNEiI5hnIL7a2+LWc4whjWOcdkF8hxo0M3kHTE8FeQlKSAE4tW1t8UsZxjDGqfn4q+jCXv4z/kX43PUxA6tjapXWzX1PZNCVxIArGAiaKcJRJEDLeVMW8ma/GDsGol6DGAOxszUNsGsZ0l/i0gzEljOTDQ3Y/nAjZeotWZdQDElRxMbFSWCKnZ4wKsxdjZG2Bh/EGiiWafmSomofV7KWbHueoeZSVzZy7IkoWMCeiNZ2X11oElu5Jsf8QE5mnaLfObbn/mUiJzZ04+4dx15zBXYkG5lZXIrK2vC1Mgg+p6OZWZcb1tlIPO2X+MsURqAfknUP8tkglnP1ioHnhq5ujlYVDcHtbeVtK2KhwnVbhmb/bYmj8qf4z/r7DdW66yKOmz6k/pzszSycX8Dj3em0K+MzrUAAAAASUVORK5CYII=",
            name: "J\u00e4ttiristiriitakeiju",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/J\u00e4ttiristiriitakeiju"
        },
        {
            id: "fairy_giant",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5klEQVR4nKWSz2sTQRTH37zZzcwm2U2TklRKi0WktjkJnvwDxP9A8K7Sm3jx0pN3b1LvOfhH9C/w0luFYqzFQ6my2aQpuzU7++vJLk6yWVoQ/MIwvJ+ft/OW+VfHA6DIRMO+Hk/kCwtf7QXu9LnVwj6wmiCKQ3WVfmn21ga/sw+DTnvyiYEIAUTEmJEgIoI7fFnPEm8NACBR033psF0UjS7WTIeLek+2eD9W7rs8DqQaRLEEiE1gWc0gUhaiYXvfX1tyhV9wYW8WiQDQXn0Kl+NDQFG/UzjUs/PRt6zT3T7gwAyWxdPMAJYB4wYXNt3notmFkozaYwA4nNtc2BtWe4bj0zdnRLGVJUmEo+FeTzh0r7n6aKk4p5dvrUb74bpwqE9ETm/nY4Syxbe4aG7Orr+C1XhQnAV9cetYnoei3pEruE4UCeTSubuEuIFatfXnBN7bXSw78+5Sbs2p5bfI/Xm8LAYomXv+hDSlWniTkuhzsZl5k3j2nv6l8LZG7L8ncP820LqtUbUwVxoG7tIj5msKwx9FcrU49+sVL/CkMFX+ryqtSqraBV35F6bV2cfwMj1NQ9/TP4lelZ5C3zqW56Vh8FNN05MkTAVmlAZRYB4Hk6OlSTS1Sg/GR57y2bC1sX0ADEZ/AB0T8aBzmoQSAAAAAElFTkSuQmCC",
            name: "Kolossaalinenkeiju",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Kolossaalinenkeiju"
        },
        {
            id: "fairy_big",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACJElEQVR4nI1TsW7UQBB9M7bPF8e55BIRiQqkiIaCCNGkoKEIP8Af0PALiDShQAKE6JEQH0IECCpSRaGggfwA0XHc5c722ecd9NaXyykNrDTy7Lz3dsczs4KFZQYB9jHJj5T74e/M8dtZT/w+XrrtiIvAzjVSFMUnOu12+95osKXATQUyNQdxTrxQ1egZkDjgu0tXT9y5LgTwmQ4D+fDurgZ5NDprtVSnLQiCJjWpnQvLdCUvXd2tiqL4cK5T+GyYafVlqXPwMRtL2grrq4FgJ4Bc8ybYYYwYOeQ2GoPG8YungFNgEjjX/7qy9uTATK5DZA8ib2a2xxgxcsilhtrQF0yncK4M4E4TWC0Qew7I9kV5BT5GzJ0mDu1aNXTUKuEqf/AMKIK6+rmenb3MG7Ghu7HrrflN2SZGDrmNBlC2itUe9B69Fr0yBqRNoLtxf37/hS9tcsilhlpdnINs+Oot/rEuc5RDwj7DUAO2CVhBoN97Pydd+MRsk1xqvBZMTGHss4j8gMk+YMcsXL934M0XkTGTfXI81w8WoM14Ji5dqcqpsx5gFUweA3YI4LgxO5zFKnLIpYZa4fyPh1tSTbqqw+U4a7WSUGXDzG4A8muW+iZvpjgpy8x1xpMo7rvlzokxN79Gg4daTb6pBmvR6Cy6NMqYjXJVuvpPFcW3XLr6zj+0+QHNIf//mOZdWDyAKS137tRhlNZRnE4nuRQ0+owRI2exr38BjCZE3vXD2asAAAAASUVORK5CYII=",
            name: "J\u00e4ttikeiju",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/J\u00e4ttikeiju"
        },
        {
            id: "fairy_cheap",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAx0lEQVR4nGNgGAWMuCT+/2dgYWBoYIHwGv4wMjL8IdqA//8bOB48OCDOx8cpAuJ/+vT9jYKCw0tGxoYf6GqZsNn89Wvidx5mVqs/f/5HgjCIDRKDuIqAC/7/b+B49+6kNtN/7zO/vm8Ai7FxBjD8Y9xqIiRkfhXdFUy4wuDX9/W92NhEuICB5cEDB2mQs/+xMxuDbfn59+yXv7+PKSgceIoemCwYJjIy/Pn/3+HlgwcHjvGxsNwCiX369hsaiAewxsQoYKAMAAANUVZ8IFi3TwAAAABJRU5ErkJggg==",
            name: "Keiju",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Keiju"
        },
        {
            id: "whisp_giga",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPUlEQVR4nJVTwUoDMRB9E7OtrW1ZagteQk+exP8oxQ/wu/wDz4rQkwe/wVNRBL1ILkJVilsRelmZ2STNrrZsH+weZvJm3rxMaHVzsQSgl3fTZnpyisXDDOl4ghKslTjDn+mdnS/Qan9p0g1kt1dClgPjCWh0XOLnHDdGCq2DuSaQVqqR7HkyjBFy/vosn0coyEWcCtVugZIEil5m+3EyJuL7Y2MRPN53sPrp6dB50F8TDw6B7rDsQzYvCg36MpL4cn3Z0aHz+2fRpUr06A5Bo0iVMUjZfcTyNpGjIr6AeAVA1SbH4zmvmKvqsSoqImj5s6y6CpyRXon210ZHO6hwZIaqXtMu4OYqmBgtzVa4Rl55GCEkt3mRzcubai1U/EAk+d8oHHt7EpVhY90LLW7B2mI9KzKZwBv6B64pP8JfdmJ6/aOPsrsAAAAASUVORK5CYII=",
            name: "Kolossaalinenvirvatuli",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Kolossaalinenvirvatuli"
        },
        {
            id: "whisp_big",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACsElEQVR4nH2TT2hTWRTGf+e+P83LC0mTNm3VkSEII5WKm0GldlFRdK0rEYTKjLpwK64UzTgMuHKpMIvqWsGdO1GhrvyDC7UrbYt/KLQmTUwmafLyznBfbXUG8dscuPd83/nOOfcK34He+H0A1QGMaciZvz/yA4jOzqiMTsgG+fpvHlBC5ADCI5AV0B5KhOqKTfm2lgtctiI8nDZWECM2GkQe0+cVcByPTjROp3sXsPmZL+SYyZMVm2xxmcmTMY4pgAyp3zesft9hdf0t6rin1ciyYn5RMcNAEZH9TByvoFpeF7Aur7D76JL67ilE9+F7O8Fsp7W6g1iO4Pnb8ZwzGvgDjB+7TdS9yhdL6xD++XRTto5e1LnXr6TVLujgphNSzKErNWRl8aD2Z+5JaXwGI3/hhZGluAnRziXuCcaNqSzOSeSmdHBkE36ARoIMj6CeW5TG8mGa1Tvgpgm9OmIFVGG1ESB6HnHg0+eXOrJ1TIaGIJXDJtkccRwUMyJvX0yy69Ag9GztcrJGum1YeH4fz4TaivZKcRiCHBgDdikaQxyjHxcgWkUK2Qfktz3DC89ZB2WiTpr+zQWq78ckl0XrDSTdv0ZOpmOFFBwXyaTAyS7SafXhpv+w+4ZUpkU6X6Xw86xW69DrJbaTyhY22jayGZL72lIe46/a2ZnkZYlRgkxLXz4ty/zCE7odaNcT28S9tdiuo0vLyPzCM3335jwisbUlOjtzSUYnyvG1s4ZOJ0MQ/CRRdEtLpV+lOJi0kzjqdpD5+afqulO0Wx8ITEPcqPf1D/w5Jep5hjgOCcMtEkXTWirtkYE8ulxB5uaeqOdN0Wy+x5imdLuxXLipGwL/EYGQXC5LIZ8lFXi0WxGV6mdqNfuZNshrr+9/SETCUHAcIZf7elGr2VZUmk1dJ9vzfwGBZCzMNMJaEgAAAABJRU5ErkJggg==",
            name: "J\u00e4ttivirvatuli",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/J\u00e4ttivirvatuli"
        },
        {
            id: "whisp",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNUlEQVR4nGNgQAIW5oYOuPjocjDAiC7g7mrvICoqwjC7lIeBRdKWwSd2MVh85+6DBxgIgd8v5oBtyc1OBtNfOp0cYqKC4WyYPF7w/Xx8AzI/Jiq4AZs4DLCgC/zd9RhM52YngzVMqnFpERQUaPi76z4DUWEAAv8/7vzPsGeTAoOkhAhY4PmLNwwufg8Y+d0x1DPBGDAb/9+ZycLw/RMDg77Og6+H959h+PUrEsQGiYHlcBkweepciB+5+VgY7t0wYXjyrJfZTZbh68mjxQw37/SCxbj5WGAWwQAjuon/ny/nYLh/R5tBTOTMHx5Whj/PDzNw8FowMLx6Y8KgqHKVUTLyB1YXwMHXT39AfgZp/rlwGQPHR7ner2tXQ8IBJEdUID5fzsFw7Ig4SiBa2bxEt30UUAkAANO0fTUqLZ43AAAAAElFTkSuQmCC",
            name: "Virvatuli",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Virvatuli"
        },
        {
            id: "ghost",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAq0lEQVR4nGNUlFL9z0Ai8NBzYpi+YyYjiM3EQAbYcWkfQ6ZHOthiRnJcgOwSJmIVH9i0G6s4Iy4XwDQ4+LniNZiRVC+gG8xEjmZkwERIAzZNMNtBgchCiguwhQcLyBRY3BKjAR0wwhighAEyBJ+BMICshgldMyyJwhTCFCNrhGnGGgaZWFwCY4MMR7cMIxaQJUEYxMbnHSZ0G/EBXF6F5ywQDUqZuPjIamEAAJ7bbvGbGZjjAAAAAElFTkSuQmCC",
            name: "Houre",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Houre"
        },
        {
            id: "wand_ghost",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmUlEQVR4nGNgoDX4///ff7I16xdKkaa54NKhbYQ0EzS0AGpI/Xbx/8gaQHTfkS//QV7CaUjBpUPbDn9/dwmmGUTDMEwzDGMYUgDVTLYLDn9/d4kYv2IVL4DaTnKAMTAwMMEYa29feYIuebH/GSPI2UQZEKyqI4NNQZENDyMDqWmAFMCEzMEWDugAr0XoUUkRgBkCcxVVDMUGAFoSiTrh8ELJAAAAAElFTkSuQmCC",
            name: "Taikasauva",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Taikasauva"
        },
        {
            id: "ethereal_being",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAElEQVR4nI1SIQ7CQBDcu+BIUKjq1iFwBBQJWDC8gifQB9An8AoMGiwEj2gCkiD6CchsmHIcd8CI3na7M7s7VyMikqQZjrs8sdlsGcp0Otaz05/JcjHXOC9WcjqsNTY+OQSX7ALiJkmzj87sGprIhw0VIUbXf2A5og+MTFHsHAImtSz+BV+E7wYexExy3XYndXOGJvoiJMeMJRoMUJwXrw9uF5DRwM1xAPPrP4gQawF7u5w1iFWAzN1Dt2VjXd2T3oSMtn4CpqHQN5ViNLU3GOnUKoA1mq22JmI/DQAzeRvH/U559e7d4USqa1lfKXf/ZiAE6hWqa6lJPL6Q3sh4eQC13XuneeHuwQAAAABJRU5ErkJggg==",
            name: "Olematon",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Olematon"
        },
        {
            id: "musical_being_weak",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAfUlEQVR4nGNgIACkVFT/gzAueSZCmrGxiTYAHWAzhImBCPDszm1GXIYwEWMAPkOYiDUA3RCyDMBmEBMDiQDdFUz4FOtYBhM0kImQAkKGMBG0glQXnLn28D8Mk2zAGTRNbZWZBA1ACVFctppoyWPEP1YXkANQDMBmEz7bQQoA1YAsvny2XewAAAAASUVORK5CYII=",
            name: "Hiljainen",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Hiljainen"
        },
        {
            id: "musical_being",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAKMGlDQ1BJQ0MgUHJvZmlsZQAAeJydlndUVNcWh8+9d3qhzTAUKUPvvQ0gvTep0kRhmBlgKAMOMzSxIaICEUVEBBVBgiIGjIYisSKKhYBgwR6QIKDEYBRRUXkzslZ05eW9l5ffH2d9a5+99z1n733WugCQvP25vHRYCoA0noAf4uVKj4yKpmP7AQzwAAPMAGCyMjMCQj3DgEg+Hm70TJET+CIIgDd3xCsAN428g+h08P9JmpXBF4jSBInYgs3JZIm4UMSp2YIMsX1GxNT4FDHDKDHzRQcUsbyYExfZ8LPPIjuLmZ3GY4tYfOYMdhpbzD0i3pol5IgY8RdxURaXky3iWyLWTBWmcUX8VhybxmFmAoAiie0CDitJxKYiJvHDQtxEvBQAHCnxK47/igWcHIH4Um7pGbl8bmKSgK7L0qOb2doy6N6c7FSOQGAUxGSlMPlsult6WgaTlwvA4p0/S0ZcW7qoyNZmttbWRubGZl8V6r9u/k2Je7tIr4I/9wyi9X2x/ZVfej0AjFlRbXZ8scXvBaBjMwDy97/YNA8CICnqW/vAV/ehieclSSDIsDMxyc7ONuZyWMbigv6h/+nwN/TV94zF6f4oD92dk8AUpgro4rqx0lPThXx6ZgaTxaEb/XmI/3HgX5/DMISTwOFzeKKIcNGUcXmJonbz2FwBN51H5/L+UxP/YdiftDjXIlEaPgFqrDGQGqAC5Nc+gKIQARJzQLQD/dE3f3w4EL+8CNWJxbn/LOjfs8Jl4iWTm/g5zi0kjM4S8rMW98TPEqABAUgCKlAAKkAD6AIjYA5sgD1wBh7AFwSCMBAFVgEWSAJpgA+yQT7YCIpACdgBdoNqUAsaQBNoASdABzgNLoDL4Dq4AW6DB2AEjIPnYAa8AfMQBGEhMkSBFCBVSAsygMwhBuQIeUD+UAgUBcVBiRAPEkL50CaoBCqHqqE6qAn6HjoFXYCuQoPQPWgUmoJ+h97DCEyCqbAyrA2bwAzYBfaDw+CVcCK8Gs6DC+HtcBVcDx+D2+EL8HX4NjwCP4dnEYAQERqihhghDMQNCUSikQSEj6xDipFKpB5pQbqQXuQmMoJMI+9QGBQFRUcZoexR3qjlKBZqNWodqhRVjTqCakf1oG6iRlEzqE9oMloJbYC2Q/ugI9GJ6Gx0EboS3YhuQ19C30aPo99gMBgaRgdjg/HGRGGSMWswpZj9mFbMecwgZgwzi8ViFbAGWAdsIJaJFWCLsHuxx7DnsEPYcexbHBGnijPHeeKicTxcAa4SdxR3FjeEm8DN46XwWng7fCCejc/Fl+Eb8F34Afw4fp4gTdAhOBDCCMmEjYQqQgvhEuEh4RWRSFQn2hKDiVziBmIV8TjxCnGU+I4kQ9InuZFiSELSdtJh0nnSPdIrMpmsTXYmR5MF5O3kJvJF8mPyWwmKhLGEjwRbYr1EjUS7xJDEC0m8pJaki+QqyTzJSsmTkgOS01J4KW0pNymm1DqpGqlTUsNSs9IUaTPpQOk06VLpo9JXpSdlsDLaMh4ybJlCmUMyF2XGKAhFg+JGYVE2URoolyjjVAxVh+pDTaaWUL+j9lNnZGVkLWXDZXNka2TPyI7QEJo2zYeWSiujnaDdob2XU5ZzkePIbZNrkRuSm5NfIu8sz5Evlm+Vvy3/XoGu4KGQorBToUPhkSJKUV8xWDFb8YDiJcXpJdQl9ktYS4qXnFhyXwlW0lcKUVqjdEipT2lWWUXZSzlDea/yReVpFZqKs0qySoXKWZUpVYqqoypXtUL1nOozuizdhZ5Kr6L30GfUlNS81YRqdWr9avPqOurL1QvUW9UfaRA0GBoJGhUa3RozmqqaAZr5ms2a97XwWgytJK09Wr1ac9o62hHaW7Q7tCd15HV8dPJ0mnUe6pJ1nXRX69br3tLD6DH0UvT2693Qh/Wt9JP0a/QHDGADawOuwX6DQUO0oa0hz7DecNiIZORilGXUbDRqTDP2Ny4w7jB+YaJpEm2y06TX5JOplWmqaYPpAzMZM1+zArMus9/N9c1Z5jXmtyzIFp4W6y06LV5aGlhyLA9Y3rWiWAVYbbHqtvpobWPNt26xnrLRtImz2WczzKAyghiljCu2aFtX2/W2p23f2VnbCexO2P1mb2SfYn/UfnKpzlLO0oalYw7qDkyHOocRR7pjnONBxxEnNSemU73TE2cNZ7Zzo/OEi55Lsssxlxeupq581zbXOTc7t7Vu590Rdy/3Yvd+DxmP5R7VHo891T0TPZs9Z7ysvNZ4nfdGe/t57/Qe9lH2Yfk0+cz42viu9e3xI/mF+lX7PfHX9+f7dwXAAb4BuwIeLtNaxlvWEQgCfQJ3BT4K0glaHfRjMCY4KLgm+GmIWUh+SG8oJTQ29GjomzDXsLKwB8t1lwuXd4dLhseEN4XPRbhHlEeMRJpEro28HqUYxY3qjMZGh0c3Rs+u8Fixe8V4jFVMUcydlTorc1ZeXaW4KnXVmVjJWGbsyTh0XETc0bgPzEBmPXM23id+X/wMy421h/Wc7cyuYE9xHDjlnIkEh4TyhMlEh8RdiVNJTkmVSdNcN24192Wyd3Jt8lxKYMrhlIXUiNTWNFxaXNopngwvhdeTrpKekz6YYZBRlDGy2m717tUzfD9+YyaUuTKzU0AV/Uz1CXWFm4WjWY5ZNVlvs8OzT+ZI5/By+nL1c7flTuR55n27BrWGtaY7Xy1/Y/7oWpe1deugdfHrutdrrC9cP77Ba8ORjYSNKRt/KjAtKC94vSliU1ehcuGGwrHNXpubiySK+EXDW+y31G5FbeVu7d9msW3vtk/F7OJrJaYllSUfSlml174x+6bqm4XtCdv7y6zLDuzA7ODtuLPTaeeRcunyvPKxXQG72ivoFcUVr3fH7r5aaVlZu4ewR7hnpMq/qnOv5t4dez9UJ1XfrnGtad2ntG/bvrn97P1DB5wPtNQq15bUvj/IPXi3zquuvV67vvIQ5lDWoacN4Q293zK+bWpUbCxp/HiYd3jkSMiRniabpqajSkfLmuFmYfPUsZhjN75z/66zxailrpXWWnIcHBcef/Z93Pd3Tvid6D7JONnyg9YP+9oobcXtUHtu+0xHUsdIZ1Tn4CnfU91d9l1tPxr/ePi02umaM7Jnys4SzhaeXTiXd272fMb56QuJF8a6Y7sfXIy8eKsnuKf/kt+lK5c9L1/sdek9d8XhyumrdldPXWNc67hufb29z6qv7Sern9r6rfvbB2wGOm/Y3ugaXDp4dshp6MJN95uXb/ncun572e3BO8vv3B2OGR65y747eS/13sv7WffnH2x4iH5Y/EjqUeVjpcf1P+v93DpiPXJm1H2070nokwdjrLHnv2T+8mG88Cn5aeWE6kTTpPnk6SnPqRvPVjwbf57xfH666FfpX/e90H3xw2/Ov/XNRM6Mv+S/XPi99JXCq8OvLV93zwbNPn6T9mZ+rvitwtsj7xjvet9HvJ+Yz/6A/VD1Ue9j1ye/Tw8X0hYW/gUDmPP8uaxzGQAAAMJJREFUeJxjZMACyvtX/kfmdxaGMzLgACz4NILAm2cPGfABJnySIM2ZieEMZ649/A/D6GoYQQRIYvXOEwzozsamAQZMtOQZMbxArGYQgMkzIisEuQJd8/T5K8H03O4yeEAiyzMhmxrqboFiC0wzCCSXdv1Hdz6GASZIEui24jKECZ8/sRmCDpgIGUDIECZ8GgnFBE4DTNDCAp/hTMiKkW0EieMyCGc0EuNsdHkUG/BpRk4ToPwBcyVKUoY5mZArkL0GANiLbQQSX5bZAAAAAElFTkSuQmCC",
            name: "Kuulumaton",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Kuulumaton"
        },
        {
            id: "playerghost",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdUlEQVR4nGNgwAMyPdL/K0qpwjGIj089WZqZGIgABzbtxinHRIwBDn6ulBmADzAx0MKATI/0/zsu7SPfAGwAZCC2mGDCZbuHnhNWgwgaQCpgoroB03fMZMTmfJAYSI4oF0zHopAkQEomwhsGxMYEVtuRaXwaAKgSOrV9xTTyAAAAAElFTkSuQmCC",
            name: "Kummitus",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kummitus"
        },
        {
            id: "phantom_a",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqUlEQVR4nJVTwQmAMBDrFedxCF/dRJxIXMOXIIgzuJBSMZCevWoDpRZzueSq4ghD6M+4j8skOC/H5kLb3e/5GRzPxZEQF4QYWgichjvnCJYQHAg6swCIFjiGsINSkSXU5JS/hNiB5+FhaezzmuzMEY4A/HGQXOP4HGocoKnAAa6nJn/iINAVlop1A6+zW0LIzfmzEVxhiLr45aBk3cJLoPZr/D1EDFD/ZBeSAJOx/DZIiQAAAABJRU5ErkJggg==",
            name: "Spiraalikalma",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Spiraalikalma"
        },
        {
            id: "phantom_b",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkUlEQVR4nGNkgIJMj/T/DCSA6TtmMoJoRpjmHZf2kaKfwUPPCWwIE8w0kAAIo4MDm3aj0DB19HHBAaityHzaugAbIBQGLAwEgIOfK5xG1ggDTAxEAmya4QZkQsMAlzdwaQYbkElAMwiA5HGlVCZinI4PMKHbRCpgwheFyK7A5Q14OiDZaijASAforoEFMK6YAAAFm2SdfobEfQAAAABJRU5ErkJggg==",
            name: "Kiukkukalma",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kiukkukalma"
        },
        {
            id: "forsaken_eye",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACLUlEQVR4nGNkwAKuZNQmMTD8n8LMx8PJxMTI8O/ff4a/n75815nRwoWulhGZczW13J+BgdX0PzNjurCrjQibhDADEyc7w7/vPxl+vXjL8Hb3kTeMf//P1J7dUoNhwO+fP9P+/fg18/3h0wyfzl5heH3xAIbLRPUdGPiMdRgEbU0Z2Pl5wXpZQMT+hAYBBgaGmT8ePWW4O28KWLFeZydc489Xr8D0zd5esME68m0gC/+zsrMzgg0QY/5h/O/HL4Yr9VUMiklJYMWfb94E02yCggzsYmJwQ0GGgdSZzF8IFmO5klEdIhbksRpm2+cbN8A0q6AgA4e4OMOv9+/BGN0wEHi96/B/FtEgD6H3h08x3JrRD7cd3TBeDQ2G5dXVDCo8PAx3vnxhiJ82jeFMYjyDqLY1A9ObDVu3/v32C1tsgjXCNN/89InBacECML0wKwssD9LH9P3P/49cmopwJ4IwOgDZ3LtrF4ODqSnD2ffvwXwQAOlj4WRh5P92/T5Y4O3x43BNwpaWcL+DnL3VzQ3MNhYUBPNFxMUZQPqYRAK8vZm52FCcDQpAkGGwMIhsbWVQ5+NjqNPWBtMgPgiA9DHCQpPP3AAcMCJWVmBD8IH78+aBoxGUmJhAAq9WbnVBD/0fL1/C2SDMq64OZyMD5KT8/9ut++BEAgIgl4AALD2ANL45dgwsptPYxsCvqwHWi5KZfn78/J+YvCDh4wTXh2IADFzJqH2NLTdKBrtjqAcAudj0pboDIvoAAAAASUVORK5CYII=",
            name: "Hyl\u00e4ttysilm\u00e4",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Hyl\u00e4ttysilm\u00e4"
        },
        {
            id: "ghost_bow",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABU0lEQVR4nGNUlFJlYGBg+M+AAIxIbIb7z24z4ANMWDT9R8IMUAtwG3AfYQOKzUiG4TWECebMhMhYEGY8sGk3g5qyKiOxhrCAiIdnHiArZrQys2C4dfc2I1LYgMVBhqCHCSO6ZhBD3kQB2UaUAEY3gAmbZpi38IQNigH/0TXjicL/2MKAEZvm/OXcUNYzsCs2FUv9N018z+Cnww1S+GBi5FeIAfVHNRn4xZjgGmQlZMGYg42DYd+pfXBTRVR/Mdw/ws0gqfP9PihSQIaATc5fzu0IVeMKUxzhEWEJZTrAxCwE5sBdd+JDCoOl4Fywy1k+vvq3H+QCBgaG/TAXPHrxCMMFeTP2gGxmsMp4wwB1AcQLjdbXwQxEGNwAY6iX4HH85jYbAygMkJ0P9sLDMw9wxgJYNVpmu/8MnMDgAOR2eIpDSlTImpEBRppAzo0ohuBIiRgAAC6zdtuBwB1gAAAAAElFTkSuQmCC",
            name: "Haamujousi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Haamujousi"
        },
        {
            id: "devourer_ghost",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaUlEQVR4nGNkwAEyPdL/77i0j4EQYKJEM1YDMknQjGFAJomaUQzIJEMz3IBMMjWDDcikQDMIsJCi+MCm3Sh8Bz9X4gxA14gszkSuZhhgosT/YAMYKLCdoAEMlLqAPgZ46DnhlATFMyEAAG/YLkQRIm7gAAAAAElFTkSuQmCC",
            name: "N\u00e4lk\u00e4inenaave",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/N\u00e4lk\u00e4inenaave"
        },
        {
            id: "phantom_c_apotheosis",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApklEQVR4nGNgQAKZHun/FaVU/4NoZHF8ciwMWMCOS/vAGtDFsAEWrKJ4NKADJmQnEqMJ3XVMxGg+sGk3TkOYkCU89JxwaobR6GoYifECSLODnyuKRdN3zATrZSTGC+iuBKmFGcIEEgQxsDkfm2aYWpJd4IGkCRkwwTSDFBDjCgwDGIhwNtEG7CAyIFEMICYAYSGPLZPBY4Fkq6EAIzOhuwY5gLFZBAD05mlKr53k2QAAAABJRU5ErkJggg==",
            name: "Pakkomielteinenkalma",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Pakkomielteinenkalma"
        },
        {
            id: "confusespirit",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkElEQVR4nGNgoBAwogs8PtgBohpxqK+Xta9AEWAiVvOGHcewyjHhchpIA1QTitjjgx2N+AxoZCARMOGSCPCwIkqMCZ/pyBqwaSZowAa0MMAGWND49bBwgGlGNoRkLyBrQtIMsgS7AbKQRFJPrGYMA5ABFueCNeNNiQwEALpmDAPwJGWMPAAD6LGArhmrs6kKAKmbLT6spWzmAAAAAElFTkSuQmCC",
            name: "Utu-Aave",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Utu-Aave"
        },
        {
            id: "berserkspirit",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkklEQVR4nGNgoBAwogvstjUHUY041NeDCNfDJ+ECTCRoBssha8YwABmsvHkbq9huW/NGfAY04jIEm4EgwIJVlIGBIVxdFS8flwtIBkz4JHE5G58X6mHhANOMbAg2bzARsgGmCUlzPU4DXCFxXE+sZrwuCMd0LkYqJMoLDJguxG0AnqRcj00zCKDHArpmrM6mKgAAy3kvOBeDVvEAAAAASUVORK5CYII=",
            name: "Viha-Aave",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Viha-Aave"
        },
        {
            id: "weakspirit",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjklEQVR4nGNgoBAwogu4b/gPohpxqK8HETsDENqYSNAMlkPWjGEAOri0czkG233D/0Z8BjRi0wwCeu6RGGIgwIIhgqSBGDEmBgoBEz5JbE4m5IV6WDjANCMbQpYX9KCakDTX4zRgJySO64nVjNcFepjOxUiFRHmBAdOFuA3Ak5TrsWkGAfRYQNeM1dlUBQBL9S3c8t5z0wAAAABJRU5ErkJggg==",
            name: "Kaamo-Aave",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kaamo-Aave"
        },
        {
            id: "slimespirit",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAl0lEQVR4nGNgoBAwogvsjbgLohpxqK8HEc4rlOECTCRoBssha8YwABnM2N+Nlb834m4jPgMaYYozHEvhmtD5+AwAA5hiEI2NT5QXMtAUY9OM1wAQwOZkdMCCJZrg4YBuCElegAHkcEBOC1gNcIbEcT2xmjEMQAZYnIuRConyAgMSQNeMYQCepFyPTTMIoMcCumaszqYqAACulzuknu5KwQAAAABJRU5ErkJggg==",
            name: "Neva-Aave",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Neva-Aave"
        },
        {
            id: "spirit_healing",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqklEQVR4nGNgoBAwogvsjbjLMKd1dgM2xSnVqWBx5xXK2A3Yi0czDCxX7kCRZ8KlcF/PFqz8yLsVuA2YA7UdphgXDXIpDLBgs92pxAcvnygvEAuYcEmAnIscDuhhgtWAFGg04TOIaBegA1g4gCxBTgcsyIpAEnsZ7jbAYgM98LC5kImQjeiakW3HawADFoCuGcMAXEkZ3d/IACUvoCdTXM7GaQByEiWkEQYA5jVNDaWNxiEAAAAASUVORK5CYII=",
            name: "Parantava-Aave",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Parantava-Aave"
        },
        {
            id: "necromancer",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABaUlEQVR4nGOoi2v+z0AkKPXNwVDLCBLkFBRnaFpUywgSQDbw+/uXYLp78xRGZANgfLgBDAwMDCBDCAF0A0GAiRiNMIBNLSO6s+/cPgaXVFG1wtAAkpcWUYa7ggVd8vqLBygaQIaAnA6yHSaPrIYFWTHIZBB++uYunA/SDOJLQ/kw8fP3r0PCgAEtgGD+BCkCsUGaQTaCaBAf3VuM9d7J/78xccJtxeZvbOGw7Ph2cBgwff7yBS4Bsmnz4WUM0qLSkMASlcbgw1yK4oLPX74wMPOJMuy5shcsqCmhgBGYIOCi4wx3KYoLeHl4GP5+eg1WAAL2VqFgdkZQKZgPokGGqqgZwQMS7oIoS8//qkJSYA7MMFCYYEs0sBhBdgGLBBsfXAFIMyRMvjAw/vvOcPvdMwxDQOpf/PrEALIYZAg4GpEDEiQJEwO5DNkCmPzzz2/hfHBCAtmMbgNMI1gOaj5Ms6GwIphfZB/+HwBXL8AZgDQGcgAAAABJRU5ErkJggg==",
            name: "Hahmonvaihtaja",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Hahmonvaihtaja"
        },
        {
            id: "gazer",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOUlEQVR4nH1TMU7DQBBcWycBchELpbJR5DIhHTUdH+Ab1FS8gMp1al7AC/gCZdJbOlcUobDAEpLRHJrT3sZiJOt8e7s7s7t3mYjI/XY7rcpSuuNRsP4H+AD0zxhsHeik7R/DkCRbFoU4y8DMwLv3wQlA8KP8JL7tMIjTAYRm4j+C76pVytZ3klupOkAzri9T+QASOs0+y9Z30p5WGuFsYywb/pdjJSKfswlyLZeSn8ZK/PchfLuL62DDir1F9tpcTbo5b30nL8Ui9gWTAG7qOqwPX/u0hLVpTtiPixhMVa33IQkVAeifg9xnOUh9vkkS4fCkmepeAFCZ6/p0zTjU6pBIj5X3x5FtV/4F8vaF8Z6lDWN5nBzW7LZpJi2LB7CBRTcN5Vqf+Jj4WGyyuYdGv6iADjRaWLve/wLh/MDEBiKx0QAAAABJRU5ErkJggg==",
            name: "Helvetinkatse",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Helvetinkatse"
        },
        {
            id: "gazer_greater",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRUlEQVR4nIVTMU7DQBDcWJYAubCFqGIUuQTSUSZ0fIAfUFHQ0KTKC6hSp84LeAFfoIQaS3aFUEA6QSSkoLkw5z2fSUayfb7bmd2b2+tdDYfrN2PkKEkEwHgbJvLj/cd4gayJDJptlr35y/7Am4tIZAUMwtPOdnIYVhe1s+sgPWaCQEDUIr7zgzOpvl/sg/E2MtC7G4/X/CmXSxlkmVt8qirnD75Yu/16lnz/tBG4KAonwGwIBBkewEhWQHGIOIGH4tgTIOF+r7aZsJXpqm/XtFfneb4R+ByNPIHHurQiCEAm+ICtgaxPhYni/8wBaZ75ZK8H6lIWXRWwikWSCnFtPoIGYlwUzHY0TFcDcT6CSV1A2bvuBRDDJH0swM172twHY6wX7fN3Anix44iJvDZ7hh9/hrYTgRejYQDdrsF9WKXuVDTA/QUar576dznkagAAAABJRU5ErkJggg==",
            name: "Suur-Helvetinkatse",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Suur-Helvetinkatse"
        },
        {
            id: "skygazer",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSklEQVR4nH1ToU4DQRCdXtahKkh6FYRcqEKRWlJV0yoMX9BQyf1Cf+EqqatE1WFQ5wkKdYQQxJUEgaqqKHnbe9vpHO0km5vdffP2vdm9hohIfzTaSBXtTkcORVkUAcM8YvGxQkuOYuZOb2gA4ne5lGYcBwLMbe60nGNARHqW1lQ564kFBGdfWZjf3l3XCUp1ui4O4NmWJDlt/dsXpyUyNBh5c73rg41GdzjcaG84DY2btO/9/OHkKXR9vBpI9+ZiX0Fqvc1E5utH+fj5lufzV3nLc78MApCNF4N9gsR48/Nym6M4NDPP5LLX8yT9zytPDmXRpJzKy+K95g0qqA4DOQjZdNpy9ElpyCk5We3UeZuVPQxefUQ2FMI3PdvHpW8HN4d9fP0t6OdKANbYeQbsWkxEIBcRJNTKaE0X4xse0qEfx8uNC5HKkcX/AcvbzNpZKbHjAAAAAElFTkSuQmCC",
            name: "Taivaankatse",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Taivaankatse"
        },
        {
            id: "gazer_parasitic",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIElEQVR4nGNsjHX+LycmwAADj159gLPRxV9//MqADET5uRlYUESgmmCGnL39FF0arAkGQAayIGtAlsAFQHIwQ0A0E7pTkTUbq0ozXLzzhCHK3x1Mg/jIakA0IygM0DWDFM7bfpLhx68/KLZzsEF8rK8iA3cFC8xJMM0gm0AYXTMIwMRAFsC8zYIcKCevPWAgFTCRrAPdgNdIgQbzIz4wsTKdATngmWD+B9GdxckEDbl57QrY/yAMMoQJJAiLHpAkKIRBhqAbhC4GSz9MIA7MNJhhSZ7mcINATgbRID5IHJakYTRjjp/Ff+SYAAGQBMxVyAA5xcK8DQ4DmO2wAAWJwfyJDSCnHXBCQtaIng/QExq6OnAYwLwAUwzDyHLo6mAAABjwq0PsKZYBAAAAAElFTkSuQmCC",
            name: "Parasiittinenkatse",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Parasiittinenkatse"
        },
        {
            id: "gazer_greater_cold",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQUlEQVR4nGMM6er6/+nlKwY+cTEGEACx8YFvTo4ofBYQAdKMrBGmiGvffgzN7WZmKGJMMI0wF8AUgTC6bbLCwhguYkK3HVkRMhtmATpgQZYE0cJ37zFMg0qC2G/xaAYbICEtA+e8ePoErhEEbp07Bw8fZMOzlJURBtw6dw7DVJChIHFwGOzbj+ICZBeCAKPN1q3/kTVzQTWw2tmBbZp29y7D70OHwHLIYaVmZARxQTtatFSCiH37GdSgNoFsfAHVjBwrt6AWseAKHFB4SEBpmGZky0AW8V29ysB4+PVrFC+AJU+dYpC4ehVhmLY2RgKCqWPCZjt6gsGWgGDiTKBAwgZAziaUL0CABT1aQODt6jWIAEMKUOT4hxsAImAJBwYeIwUYKLBeXL0KDlB0i0D64AkJObHIKiuh+PM3UqwgA5BeAOgGmBOYIAfQAAAAAElFTkSuQmCC",
            name: "Suur-J\u00e4\u00e4nkatse",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Suur-J\u00e4\u00e4nkatse"
        },
        {
            id: "gazer_cold_apotheosis",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJElEQVR4nHVTMQ7CMAw0KF0YWCpBJWChEg9gYIc38Ap+wAuQ+gCe00o8gI0FCSaQgJGBpQPoolzlWOWGxHFt39lpOuui+GajsRCP+62xrf/9fIlGfzgQF3lCEoucj0cfBCD5s1rGwWUlTicQmok2kneLRRS3FZGulaoTNOMkTa1YX9Bp9jY2sPTKSv7B2cFYNth1mENrAQmMBNjqw0H24ZxervIIO3ybPI8LfMxwILl/OvkE3gTnxCJRgYkZjpccbCRT3bmsZDafN4UBzM9RrpWGj3aYKML/gqoc+7Q942Oi1KEQ22OyVyCBLVOywQJfkk9b2+PNYXdYmADAps8ODe3aGIeFcuhkn1qZP4edcY0CSqJTQwcT+uzfgn5xVECfnrqOI377BLyyQG3bRgAAAABJRU5ErkJggg==",
            name: "J\u00e4\u00e4nkatse",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/J\u00e4\u00e4nkatse"
        },
        {
            id: "gazer_greater_sky",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABVklEQVR4nGN0SU7+//75cwZBSUkGEACxkQEucRhggSlCVpAvlw+mJz6aiFUcxYD3UNthhoAUhabaQGRnQwyBASVRCQbjABUUA5jQbQcpwsaGeQWnF2D0vdcvGBg2gLkMs7i3w8VxASYpVVUGGAaBPQrnwYaANF89dAglfEBiZzfcwXQBCDy7fRtBsxqCNYPCAxQGyC5AdiEIMBp7ef1nQAMgjbAAA9nY8GwSXA7kUpAlcaxhEAMWZexEMQAW6tp2dgxpXz3Bzoa5Dj1KF/1excACjzIYgEYdSNMsVYiXYBqxpQPG72e/Ynhh9ewjYNNhAOZcdMtA6lgwjITF/zMGvAkIJs6EHi0wAHI2rvSPDFhAgZS2wRNFMP9sJUp+mKUKUYPNFWAvgAxxeWAIFgAlJPT8sOj2KnCAolsE0scCSjAg8EwSEregUFeSQiiEhQcsVpAtAukFAA34sYR2DHojAAAAAElFTkSuQmCC",
            name: "Suur-Taivaankatse",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Suur-Taivaankatse"
        },
        {
            id: "spitmonster",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQ0lEQVR4nJVSPUsDQRCdHaIxBLVRRC1EsbrWIoj/wNZG0oTDxl+Q2jq9YCNyjQTE1n8gh38glSgWCkEblaCxMPJGXhg359eDvd2dN+/d7OyGNKkNRESOOhcBM/fd3rPMVSeltf0mzfa4eDAXCFxQCAEAEU1ijBikTlzdWjeid5oPTfYqD7JcX5Td7N24qfKEzeDUl/wdIIbxQUNt/9R/tfyzm04oUYhSm22RluS2vz6+le7LjK0bh33JJLeYyLzFKqWxzyOkSW3gTeJqEIt5Nha9UF8qCC/G2fdP1iTbKX8xZm/w87C5lFgPisBrxBF8JR7hJ4O/QOPA5eN94d0jRs7zWiREqdxzPr+7Gor8WimOCRr5+MbCykiO4rM6PWuDSTDkzJgHcskpXpMn4k5DjFjM8Yf2kHy5/4XiXWPE3f0NrPwDJ1O7qnXl6qoAAAAASUVORK5CYII=",
            name: "Helvetin sylkij\u00e4",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Helvetin sylkij\u00e4"
        },
        {
            id: "triangle_gem",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8UlEQVR4nGNkwAFyexn+WzspwPkRhg8YsaljYqAQMOGz/ei+B2AMAivOK/zHppYRm2YQ/eoRC4OY3B+4OMw76F5hwmYqst9hhoEAzDU4XZALdfr6BU/A/MAEGRSNMG9NLkboY0I3EaT56jlmsGZYGKC7CKsXwvNZ/u/fwA6XQLYVWQzEh4UT3Avh+Sz/QbZqG/0F2+4Y8BNrIGLzChNOtyEFHrIrYGJwF4TjsB0ZwFwCC2AQH+YKFnRbQeEAMgQZwFwA04xsAaOOLft/mO0wGhcAyaO7CGwAvnDAZxgoqjHCgJDtMABzBTgayXXFlcM/GQFe9IdI3FPHVwAAAABJRU5ErkJggg==",
            name: "Kolmionmuotoinenkristalli",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Kolmionmuotoinenkristalli"
        },
        {
            id: "sentry",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2klEQVR4nGNgoAV4b2PznyIDLly4QLQBTPgk3d3d/1NkADEGMaIL7N69+7+oqCjD69evsWq4c+cOmM7MzATrZcGmKKM9iUFYTAjMLvArx2U5dhdYhBv9B2leKOkE5sc/38ewdfIexuTk5P9z585lJCsMknFoxuoCZFeAgIqwBsPEhilY1eF0wYmV5xglvskzgDAhwIRLgpeXF4xf3njD4BHp+p9kA168eAGm379/z/D/HRNeQ1BAQUHBfxCGsUE0yS54++8VWDOIJgQwDABpWjxpGSOMBonh8wIAal1aKkflshoAAAAASUVORK5CYII=",
            name: "Vartiomies",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Vartiomies"
        },
        {
            id: "crystal_physics",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoklEQVR4nGNgIAAWudf+xyfPhE8y3zDsPyFDmAhpJuQSJkKatz04jtcQJnyaX357R9AQJlxeuPL2Hgr/7KubWNUxEaMZnyFMxGrGZQgTA4WACV3g1vtHeDWgu5AJmyJchmDzHhMum9ANwRU2TOgCjz+/YoSxjz67BKZff/8Al9/76AxcHgRQOMhAllcMnmDUBOWwasbrBWSX4NJMFEB2CTYAAL7eT8NNSQh/AAAAAElFTkSuQmCC",
            name: "Kirottu kristalli",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kirottu kristalli"
        },
        {
            id: "bloodcrystal_physics",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArUlEQVR4nIWSMQqDQBBFZ+cIAUVIkRukk7S24nW8TA4S0tqGdN4gRUAMBG9g+MjCEHf//GoW5r11nBUhaarTuvTXlfUog8+HUm7PuzCJMjiGSZTB43d2Jcpg1I/Pm0qUwcilOFKJMjiOwCTBg3GGAIEk1khXt5tASOw2/oNLdJhegQlss90KarCKgyex41gYdbCNbJwUvHsHQ+ZLcvBOkJIwOClISXKwG/wTb80/vZSPh0AFdpMAAAAASUVORK5CYII=",
            name: "Verikristalli",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Verikristalli"
        },
        {
            id: "skycrystal_physics",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoklEQVR4nGNgIADiF7/6j0+eCZ+kZdn2/4QMYSKkmZBLmAhpPrV7LV5DmPBp/vDiAUFDmHB54eGFfSj8W5fPYlXHRIxmfIYwEasZlyFMDBQCJnSB78+v4tWA7kImbIpwGYLNe0y4bEI3BFfYMKELvL+8jRHGfnF+M5j++OIeXP7Zrm64PAigcJCBoK4XPMFwSmpj1YzXC8guwaWZKIDsEmwAAM4pUXbNRPa/AAAAAElFTkSuQmCC",
            name: "Taivaskristalli",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Taivaskristalli"
        },
        {
            id: "mimic_explosive_box",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArklEQVR4nGNgGAWMyJxAR93/xGpcv/8yWC8TuoSsuCBRNAyw4LIhu6gEQ6yivBpDjAWb5o7OVobcvFIwe+fxGwzulhpg9uRJ3QxT+3oYvn7/BVfLhKwRWQKmAaQZRCMDbk427AYgA5DNaqa+YDaIBvGxASZsgiDn3zq9GW4QCID4MG/h9AI6ADkfpBEWBtgAEy4JUGDh4xM0gJBGGEBJiW4W6kSnxF0nbqLoJRsAAA6FOqO7V5qSAAAAAElFTkSuQmCC",
            name: "R\u00e4j\u00e4hdysherkk\u00e4matkija",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/R\u00e4j\u00e4hdysherkk\u00e4matkija"
        },
        {
            id: "chest_mimic",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyklEQVR4nGNgGAUMP14t+f///38GcjBILwvIkNLkmP/kWN7S4ckANuD+k2dk+4Dl54vJDIoyKmRpBullBPnj+8lWhpTJEgxzcl+AJUBsbABZHsTmNK9mYPx4yfx/8wQVhurAcwyt642IshmmtrbgDgPj+82a4ABkkudj+PfwEwqNDpDl4WHAwMDAENzKzcDA8JeBgQGVXlv9lQEhz4AmzwCWZwFJGmmp43DsOTCJSz649SbEC7gCjRAABSSjk4XJf9wuwA/OXaOCCwCShoWGJmH6CwAAAABJRU5ErkJggg==",
            name: "Matkija",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Matkija"
        },
        {
            id: "chest_leggy",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMklEQVR4nGP48WrJ/////zOQg0F6WRgYGBhKk2P+M5ABWjo8GcAG3H/yjIFcwPLzxWQGRRkVsjSD9DKC/PH9ZCtDymQJhjm5L8ASIDY2gCwPYnOaVzMwfrxk/r95ggpDdeA5htb1RkTZDFNbW3CHgfH9Zk1wADLJ8zH8e/gJhUYHyPLwMGBgYGAIbuVmYGD4y8DAgEqvrf7KgJBnQJNnAMuzgCSNtNRxOPYcmMQlH9x6E+IFXIFGCIACktHJwuQ/bhfgB+euUcMFoDQNA2/evIGzb69e9Z9HRIRB0tGJUUREhOHy6lX/v7x5wwAS0w0NY4SpY8JmMkizqJIyA0gDDMA0I4uBADga0W0F4df37oJpGIBpBhl8fPo0sLMtM7MY4S4AORGmAZtt9y9fQjEYhEF6ADHAwox8t/NaAAAAAElFTkSuQmCC",
            name: "Jalkamatkatavara",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Jalkamatkatavara"
        },
        {
            id: "snowman",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIElEQVR4nGNgGGjAiEuiccMlBlUhNjg/yk4DqzomXJoZGBj+I+Nlh24QbwADA8N/ZNuramrAYlCD8RvQCFUE1QQGiUV1DLff/YK5iqAL/oNsP57wn8HxTjUD08Y0lLAgygtVNTUM+1VaGWYJ1TNskqkA2z6/rwm7AeURFijOunn/CdzJIE3qijJgGiQGkkMHjLOKPP7fffaBoXPFCXiURvVv+w/SiG7wskIvjGhnSuvbwagsJcCAzSXINMxgDBcwQAHIJSDDsNmODuoD9BhhehhhXoABrohZ8FCHhQPI/8hi31akMYBcDdIHdwHIC8iacYGL0xLgmkHhBo9G5ECEAeTEhOzCA7J5cPUsyJKQAIP4H+SStpYWFM3Q1AiOWhgAAKBOi4nn1AksAAAAAElFTkSuQmCC",
            name: "Lumiukko",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Lumiukko"
        },
        {
            id: "miner_hell",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABN0lEQVR4nGNgoBAwElJwIivz/5eHD8Bsl63bGUky4ERW5v+5F64wnPv+Acw34hRgmH3sMIoeJkIuAGkuLq0Esx1zMknzQqCH2f9HL7+jiJ09f5mwC6a2pf4H4XIlYzAf5gIYjdcFU9tS/4PoW/eeMfg+/8ew8v0XvGHAgkuzmpIUw2aGZwzazMIMDG8g8uiacXpBTUkKbAgMcGnxoWgGhQ1WA4yfsIAxzBAQuPrmLcO3a58YkDWv33GKEasXQACcaGRkGJCBtogwwwS/gP/Cz58yPHv6nWE9IS8sXn2AYc+hiwwnz94COx3kChhgV1RGUcuEzIEl2RPnb4OdKCkuCOaDDAHZfoiVA8MyDC/UPLuDzVFgoPL5A0MBlpgAA1DgWBiqwkMXnY8LwL3w/OV7sJNhUYTOxwUAUB2J7m3VxBwAAAAASUVORK5CYII=",
            name: "Hornantappurahiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Hornantappurahiisi"
        },
        {
            id: "shotgunner_hell",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJUlEQVR4nGNgoBAwYhNc4GHzH0S/+P6doeLgWUaSDOiwN/5/4M13htc/fjCYSIkzKDL9wmsIEzZBeSF+MH3m2UuG+//Y8HqBCV0AZBvIVlEODgZiAAsyZ2pbKtjvt+49Y3BgeMFw/x8/w8N3H4kzYCpUMwioKUkx3GJgYAC5QZ1BiGHH1WuEvcB96DoYw1wAMoQYwIgeda+/v2eQkRAAi31wiGFQUVEBs+/cuQNng4CrqytYLyOyabgMAYELyxaBaYOoOIbMzEy4PkZkA0DhAPPGVztNsFduHr8PjtaZh48zEoyFPYcugunnL98zSB76BaZPXL3NSFI6eA7SdB6iSVJcEJ9e7AbAwPodp8CGBHqYwaOXJAOQXUS0AWC/iwvCbUXnYwMA8sV2qNQi67MAAAAASUVORK5CYII=",
            name: "Hornahiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Hornahiisi"
        },
        {
            id: "sniper_hell",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMElEQVR4nGNgYGBg2GWv8x9Eo7OJASxgTX+Y4RpBbLLALnud/49vXPufpaUAponVx4hswIbXX+AS0649gMvhA0xwA/4wMwSI8jCQClhgjO/BAQwbGRgYXt14yqBw9TTRBjCCbYcG4Eb/YLDgyxtPGdJDwzEUu7q6MmL1wkb/YBTN4hrSDDNXr2S4c+cOWBOMxumC7L56sAsUNq5hkJEQAEt8cIhhUFFRAbNBBsDYMAASy8zMZISHAQjoMzAyXHzxAWyIwIElDHcYYsDid5fMYMg8ehG3C2Cu8N+4FswGeQfkFe6ThxhEeTgZenBoBgFGGMPdLwrsjedPHzJISsuD6UtnjzISnQ4YoJphmkCGEAPABoBsJ9ZGnC5A17xz0zLik/LHx6cZAj3M4BkInY8PAAA6vIHCvBw6lQAAAABJRU5ErkJggg==",
            name: "Hornasnipuhiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Hornasnipuhiisi"
        },
        {
            id: "hiisi_chef_hell",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKUlEQVR4nGNgoBAw4pM8vHfjf3SxYyfOgOny6mawXiZSbINpRgZM+DTYOvtjdSHMdhBgIWQr69odDNnHj+CUZ8Lnf+QwKC6tRKFhgBGXZpifjY+dYVj5/gvDue8fwHJGnAIMs48dxu2Fw0iarSxMGI4xMDBon7zMwPAGIo+sGa8XrECakUJdxdsBrvlicfH/Vh+f/1gNYF27A4xhhoDA1TdvGe5sPYDVIhZsgl8ePmBgRxPTFhFmmOAX8N9RVZlhy82bDNVbtjDijcbSkhIGXU4JhsvfXzCcOH+bMdXK9j/IEBDgZkJoY8JmOwiANIFokCEgAPI/yPYpx0+hqMcaiDXP7uByGIOCED9DwaYN2PMQyJkWhqrwxIPOxwZQXADyL8jJII3Y+NgAAPl5eG+O9QN9AAAAAElFTkSuQmCC",
            name: "Hornakokkihiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Hornakokkihiisi"
        },
        {
            id: "dark_alchemist",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABZUlEQVR4nGNkIBJcn571X8NREcy+sf8+g2bmNEYGUsD/G93/4eBG93+YOBMDhYAFRDRlhMJNBIG6GasZ0Z2NzUVgA5oyQv+H6osySKs8YeCVtYXLgwwBa1YvwdSNJMYC07xjPyfDn6cHGVikuRlqC8zAhhDjBcZPu/3+gzQb3vnPIM3ExMCpqcmw+uc1Bl1ZYbACFC/AbL7ZgxoGf55+ZZBm4gELfL9+nSFUU4th+YnTDKbfuRi+H3wHFudsMEa1WaMUHE5MT+/IgAWe/vsHlwQZEvCTB+wiQoDp8uO3DJGV9gyrvzxGMQQdgBIP2Ok3eyBsmEsYGBgYVlWF/w+tamdoD4tmCOWRxbB5A/sXBp8YJoYJa9nhUQx3AQMDA0NY20rG1W2VDJWrlmK4BJ9mDLCqKvz//y/3/rd5Wf6/HRb2f1m8z39QLKEnNLwApBiUykCGkKwZBtKDnP+DkjFZmpENIUYhAEw4qGavsSAvAAAAAElFTkSuQmCC",
            name: "Pahan muisto",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Pahan muisto"
        },
        {
            id: "shaman_wind",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJElEQVR4nGNgwAFi6tP/Z9xf+f/Vny//UxeV/8eljgWXZp4EJ4Zfdw8yTHrzmqE1qhYk/H92XCcjQQNikDTLqrMzKPMyM0w6vwCnIUy4NIsIINSpqSIMQfcOEy7NnOJsKC7DZQgTsua/h89h1YzPEBZkzYJaX3BqxmYIKEwYQVGFT7MyrxpWg27d/suQZ5jAwLjg49n/h07PRQk0ZIDLRY9v/mRgU7ZnYFpZ3MJgZ5rMcG7zfQZiwPeXv+CavyzYx8C0fc56xqMbVzEsq11F0BCQ5jcf/sM1L2mcyQhOSNDE8R9kSFRzGIORryJRmlFS4mw8huDSDAIYIQeKX1AUxWfEMuhmSIHFcGnGCUCGgGLHMyXwf9KeLHCuBKUXghqxGUJIMwCXfM4xFvIoqgAAAABJRU5ErkJggg==",
            name: "Valhe",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Valhe"
        },
        {
            id: "mimic_perk_twwe",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5klEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpxqURBmDy4lA9IMDEQCFgQjedGICslomQYtWWQ8S5ABe4XWMHN+TEjVv4DVBtOcTAkryI4YmSBwp9//4DhqLdlxlWPf4JppEBI4jwN9L9/+Lrd5yuABkMcsnfyScYmHMtwGIS3JwMG89dZiQqDECaQQCmGasXfkETCbYwQAfIapkIuYAQABsAStug5AkyGZdLYDaDMEgtSA8IUJyZKAYA7ApiO00dh5IAAAAASUVORK5CYII=",
            name: "Paskiainen",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Paskiainen"
        },
        {
            id: "necromancer_shop",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLUlEQVR4nGNgoDb40p7znxT1TMicdcbm/5FpEFi+fPn/f1AIYqMbwIjP5s0K1gzhEeEMjAhlDCtWrGCIjIxECCADkM0gg2AugNksLy8PxjA2Az7wBcklMOcjawbRODXHtGthSMJcgQyR5VmQOQ8vf4KzV4cngRUaGRoxGP1jZXCtLGLY3d4HpnHGgrwuH9zW7dcvM/wJcGUoLy8Hi4E0e2rqYgQgCzYXpOibM8y5eJJhbUQKmA/SCAIgQ0GGMzEyMeL0/3JowHmz82LxPSQtIKcHJmTbQQpATgW5YPOPjwwnazrAbBgAsUHyWEFMuxbcZHwugMmjuAAkgBwDID8iu2CuRwCYxup3mL/wpYHZ7n5w25FdCbZs5YqV4PS+qOIKhmZfDn54GGC1nYGBAQAXPBIrlN0jBgAAAABJRU5ErkJggg==",
            name: "Stevari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Stevari"
        },
        {
            id: "necromancer_super",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABkElEQVR4nLVSPUjDUBC+aEWXVp1cLKkgWGiVIHSo2Dq4iHVzCVahOFjURVzaUXDJ6KKiU8GfZNeOBQXFSSmoUEEwg4uLhYLg9uR7co9ndBDBD0Iu9+77vrt7MYQQ9C9wXVfo+DPZ1eJfC4gAWATvYG2Ig6PqlbiondN940kdep5H5XJZfSNeXnfE+OSE/M7n0obBZC6CSDZlKlK9XpdCvu9TLBYjMzGlzoqrBZICrKp3kB7uIcuyyLZt5e44Ds10RWi+si9zuwdnZCyOpMRj/ygl4gOSDNW97QqFa8eyCMUswkIMGLQhYDIAMtyB5NqKHAGAM3C3tSMfhqG3H+loyiS3qoPbPiws0el7S+6l6m9SSJ8dzlD3LEsWBQES8hBvzXZT02//7IDJPBdcfgKLLjgJqp+80e2lTyGdLOfTFgcn7IHPgGw+Kp3N61e5UKNUKsl/AM48Y9CRoTur68xOFwVEcJ25zrD6bRHzg1xmrl8kx0x1hhzeageDzzf08tD45g6n3o2odM5l7C9X2DcUpw+O0hntRbzrbQAAAABJRU5ErkJggg==",
            name: "Skoude",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Skoude"
        },
        {
            id: "boss_dragon",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABaUlEQVR4nKVTPUsDQRTcXQVBqxAEm7NQLISIJ/anjWAlSAQtbNMeaVJaK9jdbzCFoNgKWuh1FsKJNiIKSSVosIpiISfzyCzvDhTBgWW/3syb3X1ru6213AzQT2/M9WfFLI68SQ9gDMxedSz6gzDM9bp9bTfz9+yJGl5oLJr3ghokYh9wp/sXZjSckuDH+MsHcgxCtDLpG4gUB89tZ5lYQ6a5dKaQ7fmo5q1rdxCHCJxbnuuy1zNL1apkgTJwGz2Y6WTIEyHIOWIg4DCpHyaGfXrWlTGOph2Nx+syB5EJ5BKNQiMI5IbhRDsiNPElORFHtnBoJaKxu1cvkHAMijnzR5AM4BL59K6cPTlvyxj2gZ2thV+F3cd9KpbZH2/GsrHaWvYiyIZng3W2wis0giAHEQQSsakvsFwHeGLAsrZB/Kmky2u6HuQv0CY3JzbufLkCZREKoTaGSSag3FeB8pkGxQXozySl/N/v/A3NHtgsGl4bagAAAABJRU5ErkJggg==",
            name: "Suomuhauki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Suomuhauki"
        },
        {
            id: "boss_limbs",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPElEQVR4nGM8cm3D/5nrZzOAgIK1NphWEWJnQAZ7Np9jcPE1gvPvvPsJV8cY2+r9H6TxwdGrKIagA5A8shzMEsbaA2X/YQIgm5ANcRezYlARN4Rrmnp5KqYBsVAXIAN0jeigdEYW2BKQIUzIzidGM7KXQGHBRIrNMNCdMQ1uCBPIGeiuAIE7L89j8JHFQHpAMcOCbjpIUVVzE5jdVlsHdxGyGHIgMuFzKkhzWE4gihjIIGRvssASBUwSZAPMFpiTQfSqKesxohPkbUZYOoAJPLzyHG4AskuQwc6ncxjcpVMQXlARYgdjUMDI60iCJWDJG0QjByAoDYBcDTIEaxgoWGsz7Hx1DCM8YAbBEh3IEJBXsKZEZC/BDEXn44wF5JwIUghKNCCNGOkEGvjgpIxsOnKsZOtmY3gPWS2IAwDEC6S5Vb3AjwAAAABJRU5ErkJggg==",
            name: "Kolmisilm\u00e4n koipi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kolmisilm\u00e4n koipi"
        },
        {
            id: "boss_meat",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLElEQVR4nGNcamHxnwEKdDQ1wfSV69cZrv/5A2ZrsrAw4AIgNYw1JiZwA2DgxZs3YFpCRARuCEgxSBxZDARYYBpAEjCNyJrBYkhycDUiImBDWMAmQRUgazpy/z7D21+/IIrfvoUbLMzGBqbvfP7MwKCoiHABCKBowgFA8jBDQOpZQH4DmwaVJAYgG8J0/cULnAortLXBGB9gevv9O07NHVevgjE+Q5gYKASMDsLC8HSAHgYwm0GuQAewMGAMlpH5D/MGsYGIbAATOc6GaU5VVWVg0ZSQYADFBMgVIAlCrgB5C5RnQPll3ZMnkJQY6uoKloRlIpAYLGPBxJEzGjKfCaQBJAADMM166elgPoxGZ0/evx+SG1MUFP7D8gAIhOrqwg2EORUEYNkbPcMBAGICpY6JT7VTAAAAAElFTkSuQmCC",
            name: "Kolmisilm\u00e4n syd\u00e4n",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kolmisilm\u00e4n syd\u00e4n"
        },
        {
            id: "boss_alchemist",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2klEQVR4nGNgGDJgwop1/0EYXZyRGI0g+t2HD2C+kIAAQ0FEECNRBkxA0tyUkYRVLVNsctl/cjWDXRCLZMDiuV2M6JpBTkYHKF6IRXOBsasFA0zzi6dPGSSkpVE0wwyEGcKETzMIwGiQRpBXYIEJDwMGJM0gyUnVFXBNMPDr9RewHMhr6OHBAmOAFIAUgsC1SxdRDFAUUWJYXNvFCAsb5DBggjHun77B8PTBE4wAe3blEoO0ggyGOIYBr1/cQ9GETMMAss0oBiBrDkvIwaoZpwuQNZMDUKKRHAAAZKx4+dkwV5AAAAAASUVORK5CYII=",
            name: "Ylialkemisti",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Ylialkemisti"
        },
        {
            id: "parallel_alchemist",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2klEQVR4nGNgGDJgc/fy/yCMLs5IjEYQ/eHdBzBfQEiAwbc0kpEoAzYjaY5tz8SqlqkqMvY/uZrBLqhCMqBt+WJGdM0gJ6MDFC9UobnA0siLAab56YunDNIS0iiaYQbCDGHCpxkEYDRII8grsMCEhwEDkmaQZMm0argmGPj8+wVYDuQ19PBggTFACkAKQeDC9UsoBigp8jO0LW9khIUNchgwwRjXHxxjePL0HkaAnX95hUFGWglDHMOAO29fo2hCpmEA2WYUA5A15wfHYtWM0wXImskBKNFIDgAAVEJ498/330gAAAAASUVORK5CYII=",
            name: "Alkemistin Varjo",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Alkemistin Varjo"
        },
        {
            id: "boss_ghost",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuElEQVR4nK1TUQqDUAzrK7uDm6dw3nD73WmG315Bdwqnp3BEKGSlTx9sgQda0zTGmvpnt0qA6T3JvCzb9bmqpL7UEU1Ouca2uX41Da8xFErsAM25STmO8kOzvAfPUVaGbT8NhwEO1zSnbFngeBHmqvwIRboAEmYgKNSi5I2L3sRfAQWfg4fnaKS8B89RUzXbCMzu/WTeAeOkx+2+RrZLVvm/GQwFzQA4/IqbQLSFRyK2XFryA0WwwD8dKISEcIhP4QAAAABJRU5ErkJggg==",
            name: "Unohdettu",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Unohdettu"
        },
        {
            id: "boss_ghost_polyp",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA50lEQVR4nGNgIALs3bj5Py45JmIUEW3oXiyC6GIgPrIYE7LkuQvnUTSA2CAxdL6zvy8jTIwR3cbuxqb/RgaGcANhACQG4pfW16HoYcTmP5AhhjauDKKiAmD+69cfGM4f2Q02BNl2sBf2YvEjsmYQALFBYsgughvg7O/LCLIRORxgmmsq6hmkJCTghsAsQLaMCcQA+QtkCLZYSEpIx7AVpA6kHmQ5I7rfQTS6F9DDATkwGUkJRPQYwGnAXrT4BwFY1GLEAgMOzci2gdggjegJDWvAYBPHJ8YCY6A7DQawxT02MbwAX04FADB+pMqTGoo5AAAAAElFTkSuQmCC",
            name: "H\u00e4ive",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/H\u00e4ive"
        },
        {
            id: "islandspirit",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsUlEQVR4nGNgoBAwInMK7/7/D2P3KzOiyKVv/gmWm+nLjiKOVTM6H6YZnY0XFOIwAB0wYdOI7hqSbKbYBSAw8C7wmHTqPzKbS4sNp0WMuGy/vvU0itiOPDNGol3QD01EZbGmcLF97zHDBacL0L0BAveuXAXTt2YlMhJ0QfayFxi2KelogzE6wGoACCiLyDG8fvYIjHH5HwRYcNl+4tIRFHFchsANQHY2SLOFng2GIdgAAM7aauj8lIRwAAAAAElFTkSuQmCC",
            name: "Tapion vasalli",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Tapion vasalli"
        },
        {
            id: "boss_pit",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7UlEQVR4nKVTwQrCMAzNShXHNoSdBh706kXPevTs2c/16N0fEBFEHTjRbW54UVJJGVk7Bz4obdK814Q0zmy5egMAdHsubvAqC7jFJ3V2PR+S8xE43KCv7oo8A9EJI0V+XGO4HHbQBkV612fpPL8GqiHKPNUB1UCbkKS025IIVJq0BczDUc23SfY1nzDVTeSFP9XLJiqobg4icZuLCF4zBnCyTVRnkBh63YRqFgL+hDA519kWmvzVbggeRJdcxCbqDMcTNQscppbx13UGYTT4GYg29yFP4mQhcOctNf08AvHUV+55gVqINrNAZOR8ADj8arwpJMQGAAAAAElFTkSuQmCC",
            name: "Sauvojen tuntija",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Sauvojen tuntija"
        },
        {
            id: "boss_robot",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXUlEQVR4nJVTv0vDQBT+chZqflBKEuIg0a2Dk4ObuyKuJYOTjv4L4ib0X3ASOov/QN3dRJwcutWgYG2kiEntIJHvNCG9Jmg/yOXdvfd9d+/dO23/4CjFL74mMZ7DgbQdbwX1+rK0p9NP+Y+GL7mPMJoOaio5cx7CRfs181q4agBdD0jiWAoxLhlH0NKzi3TvrifJfmsDJ28GNj8mqMK9peN4dJufRKjk4aBfSjR2t+VH8XN3K09JqOQdxy8lF+1MRDctCA4EF/8iqyKGaUK4q2sIxhquoxCLgoUWNNrv1UFJ76ZyjTzxn52KIqpgrThhGqxDlk6xJmUnIQQHNklRpMwuA3li9PSIy2bezQuhixEEr4Lw1ltzAWXXmp2MHSlT4IPgO+jYyZwIA9U0OGfcqQh/OpGLS7o5I6LuXBSin3Eks4PzW6AIX1fHBmADQcOf6Q8WLJC1ShD2HySZjm/uuqa1TQT+mwAAAABJRU5ErkJggg==",
            name: "Kolmisilm\u00e4n silm\u00e4",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kolmisilm\u00e4n silm\u00e4"
        },
        {
            id: "fish_giga",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWklEQVR4nGOUlFZgYGBg+M9AHmBkwqf52LxIMMYD/jPh04yNjQ6YCGkmZAgTA4WAiVibcMkxUd0FpAKmYWiAVdJynIqxyTFR3QW4bMLlMpwuQNaAz1uMlGZnAMeEGj+v9k0aAAAAAElFTkSuQmCC",
            name: "Syv\u00e4olento",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Syv\u00e4olento"
        },
        {
            id: "maggot_tiny",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDklEQVR4nGOscIr9z8DAwPDp2xcGZMDu+ZNBUISbgRBgwqaZFMCET/L9m6+EDfiExfYXH9+Q7gI+Lh4whoGHKz4TdAVIjgmmGdkgCX4RDEPQDYLxWXCZDjIE5BWYIfIRvBiGgORYQAxQOMBcgRwmMEOQXYMOWLAFGDaxLz+/g2kedk4UC1is9UzhAncf3kfRDNOETSNGLNxF0oxsKC7NsFhjwqa5eGUfI4gGaYRpBmlE1gwDjCCiN7zo/9FLpxnWXT8M54MMxQaQNYMCHOwCGWlpuGYYHzlAsQUqSDNIHCMvrCzq/R/eV8yIrBFkOIwN0njr+QO4HNgAkAZ0g2AuAtEgL8H8D9IICh8QBqkBABijoLl/nNC9AAAAAElFTkSuQmCC",
            name: "Limatoukka",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Limatoukka"
        },
        {
            id: "parallel_tentacles",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqUlEQVR4nGNMdwn/z8DAwMDNzgWiGL7+/Mbw6M1zMJuPi5fhwevHDOhAiFsALPfp22cGJi1+ebDmp+9fMVx/epeBGPDu6wc4m+Xhj9dgBsg0EPjw7QtcAbJCXAaxwJxNrCYYgHmNiYFCwESsv3EawAD1N9kGvCPSz3hd8ABLXJNkACWAaZgYoCAqS5ZmkD4mUM4CARhNLICpB+cFAS4eMAYBYtIFTDNIDwCSlkI1fs4PpQAAAABJRU5ErkJggg==",
            name: "Kolmisilm\u00e4n K\u00e4tyri",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kolmisilm\u00e4n K\u00e4tyri"
        },
        {
            id: "boss_toxic_worm_parallel",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeklEQVR4nJVSTUtCQRS9Yy+fT9PCjyJLqp0usk2LxKCoTdAicNHPDFoE/YDCgjZJUK0iKiNeWhaamjZxhu7wfE1FFx5z78w955458wT9I7YKJemtd8s7QvwGKBW3ZWo0Rb1+X9X9j97A+VDAImspW5Tii0dKSUcXh6oo5Jb1tOfmE03G01R/rVHYjpDbeKBIaIQmxuIkVvPrA7La3bZa04kptYaCIYo6UapcneoekCEwOICk897RhwAg7utVqtbuNCED83MLuk7GkhQAuHx+ILAyEUjsYVutIHIbrgJyDl+QQ5UFVpjlNxD3jUcTqtEfAPI1LLCZovbyqD5uZBVesCJwgmEjQTaTUyDTZFaF3HrrtshEgj1Wx0QMZgXILTbFRPBXgEggMZnon87hVaA82FjclK1Ok27dGzq7ruhfe2V+TZMmYkmjAnWFmfFZvTGdyijQ/smecGznW7PXB871K3iJoIr3cH58WVbNuNa3Z8Qr+E1jsp/AXh8+ASKvsrdNrMwzAAAAAElFTkSuQmCC",
            name: "Madon Muisti",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Madon Muisti"
        },
        {
            id: "minipit",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzklEQVR4nGNgoBAwYhPMcor8/4nhB4oYHwMHw7R9yzHUM+LSeP/FYxSFihKyWA1iRNcM0/jp22cGPi5eOI1sELIhTDAJZM3YAMggmMuQvccEsx2bZpgmdABSC9KD4gJCmtDlYa5gwqsaXRMWw5lgDElBUaJdAQIwLzPBBDjYOcA0cojjAzALmUAELEpgcQ0D2AwDiYHUibELoLqAj4EDp0ZsBmGkg2n7ljOCDIGnODy2I1uGkbZh8YstYaGnQqwGYDMIpAlEL9m3Hqd6sgEAT/NjgCY388YAAAAASUVORK5CYII=",
            name: "Pienk\u00e4tyri",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Pienk\u00e4tyri"
        },
        {
            id: "gate_monster_a",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8klEQVR4nGP8//8/AwxMV1dHcPADRhCRefMmAwuy5lkcvETpTvvx+T/MEBZkzdKyCmAFIgJiDF+/fgazubl5GS5ePgWXA4FZjx/ADWFCNx1ZMwiA2CpKmgxPHz/A6homfJqRgb6uGVZDmIjyNNQleF2gr2sGV/T0xSOsirF5hQldEUiztIQchiG4DGXCpplYQzEMkEbSjE0DNsOZYAxQXIPiHF0Dsqvu3LuOkh4wXIANwDSjG47VgDcfXmFV+P33d4zUiNUAbIaA2KCow6YZBGCZiRGUtkFpHASwpThksbQf4PSCyEwgkHnzJiMDidkZpBEA14d0XNhVkVwAAAAASUVORK5CYII=",
            name: "Veska",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Veska"
        },
        {
            id: "gate_monster_b",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArElEQVR4nGP8//8/AzFguro6WGHmzZuMyOIsxGo+aerM8ObDKwYGdfX/yIYwMVAImIi1/eLlU+QZAAPSsgoMJBswHc32p48fEG+Aob4Jiu0gzdhcwYIukBCTBabTfnyG247L+QS9gGw7SV4wP70Xbjuy07G5hIkBD8DndJwGmCPZTowXWPDZjq4B7KLbl3G7AD3ekf2Oyzs4XYBsOzan4zKAERQG5jiVQ9Qg8wCFJFrM/tzNowAAAABJRU5ErkJggg==",
            name: "Molari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Molari"
        },
        {
            id: "gate_monster_c",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR4nGP8//8/AzKYrq4OFsi8eZORgQjAgq75pKkzw5sPrxgY1NX/E2MIEzG2kGzA08cPGLaq6sK9Q7IB0rIK5Lvg4uVTJLmCCV1AX9cMrBnZFYb6JsQbgAxgrkj78fl/QkwWAwiT5AVpIsKCCZsXQACkGWQIzBXmp/f+JysdSBNwBRMxXsDnCiZcXoBpJBQWOBMSTBO6K9DTBUpmQvYCsivwAXQDGEFxjlP17csgVzBmIokBAM5yX8+rinAcAAAAAElFTkSuQmCC",
            name: "Mokke",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mokke"
        },
        {
            id: "gate_monster_d",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/UlEQVR4nKVTsQrCMBC9BP9CBJc2UymC1Q/oaEdHB9f6QXV18Bc6+gGtU+lUXARxEQf/IHKBK0dqIuKDkt7l7t7LXQJaa/B9RRhq3/4IPNgrpaskBVBKA4DIu24QI+FPyG/sTVtDGUToQhW/KWjaGuJoAffb1RkjsBEu9ufrYZLHk6nxry4t5F0nvApm8bxnR1AyqaD9gYLtZmfW5fnUs1MiFSEVVZIaFYdj4e6BfW5XHyQ3ODuyUhJXgRPBOGcPEJRISXYfOKTN7hod2uTnKqRdEdmwCB2Br+TnMFPgt47L5cHcpn+cyOAxcelcgasHRkGWrbHax7vuQxlE4g2Z0M4ACUBzEgAAAABJRU5ErkJggg==",
            name: "Seula",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Seula"
        },
        {
            id: "boss_wizard",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNElEQVR4nGNgIALMnL/xf/fExf+xyTExUAgYkTlZeRX/efkEMRQpKWswfPr0ieH+3asMb1+/YFi5fAEjVhfwYtGMDECahUUlUMRYsCn8/Ok90V5gwSZ4/vw5hhcvnmGInzpzhkFCQor0QNQ3tGRQVNbGKseETdDO3pmhRl8Dzr94/jg4AEEgSUWasBdgoEWYh+GSSyA8Fmr07zCc5RVnIMqAWxqmDGpILgCBG0JSDOxo6pgYKAwDFvTow5YWYC748vkTAzsHF24XWJ86ADYElg5A3kB3ASgxYXVBS+r8//cZGBg437xiMLq3nuGomQNYHOQimAtAwIWDkWElkgHgNA3SjGzq+6+vwLQG+w2GPT/+g5MvyGaQ5hs/IdHbu6wcrJcRm2ZBbjE4G2YIsmaYfM3sREYAGHJ2+XahuDgAAAAASUVORK5CYII=",
            name: "Mestarien mestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mestarien mestari"
        },
        {
            id: "boss_centipede",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEUlEQVR4nJ2SPQvCQAyG03IFlYq1QlVwcHSTrg4O/hB/gj/R0d3BtYgIfgwVUdqig5KTt16vVwcD5T7S90lyiTWdL16k2SXakN8bUJW9Gq18L3SnlVylOD7u5frIUrqcD7m/HfSJspQcv1cGWMk137teh067qBQdsDaRhAiTWI2a3r73bPXmJ332d2v1cgmIqgthfA8IBxJqdDXliT8sCFfx1gixTeLQ4QqJZu5YfiYgyrCRCshIHUJ1b4LY3C4mVdWsQ0oA1+vQv8YzYVc5l/f1zzNMmC75xbleXYROoAOFQSIDhI1BagshliPNb4CZZgecJpAuhk6+QTAKCz/pMPWsigtvAMgzPsqVW6unqwphb+fQeh/vLI8EAAAAAElFTkSuQmCC",
            name: "Kolmisilm\u00e4",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kolmisilm\u00e4"
        },
        {
            id: "ultimate_killer",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAATklEQVR4nGNgGAWjgAAwn5L3H4TxqWHCpxkbmygDzKEafq84zQCjcRnChM95rBGmKDTJBjBAbYe5BBtgxCWB7uSTOZNwqiVoAMmBSAoAAIdfIKjaubsqAAAAAElFTkSuQmCC",
            name: "Kauhuhirvi\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kauhuhirvi\u00f6"
        },
        {
            id: "friend",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhUlEQVR4nGM0n5LHwMDA8J+BBPDv0TtGGJuJVM1gTXJC/5ENIAvADGFioACc7lqC3YDfK06DMSFx8yl5/ylyAQgwgkyhxAAmSl3ANOAGsOCTRA5x1ghT0g1gxaEJBk7mTGKkyAumdQnkh8G/V5/AGQpkADxnkaoZBLCFAS4DETlQjA8uCgAv9CX48oM8rAAAAABJRU5ErkJggg==",
            name: "Toveri",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Toveri"
        },
        {
            id: "forest_monolith",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAs0lEQVR4nGNkQAL7Thz8z4AFXLp5k+HpkxcMr1+8g4stmDyBEUQzoSsEge17D8L5IDZIMy7Agm47uiGEAAtMM8yZpAImmK2ENCP7H8OApyTaLCohhGoANttw2QiTx2sAKYAFm+n3bjzF6lyCBrx+8Q6sAVkTTAwXYELmwGw+eeAyGCOLEeUCJQ1pMG3uoIshRpQBohJCKGEA0kxSGMAMwcXGFrVERyOudIHhAnSb8WkGSQIA79xjqkCWOx0AAAAASUVORK5CYII=",
            name: "Monoliitti",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Monoliitti"
        },
        {
            id: "boss_flesh_monster",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABaklEQVR4nIVTMUvDQBS+HhkcUrBgRamFBALNIikILnbSLqVTZwc3wR/jb+nUUae6CEpEkBQCLahYRGihGdwq39PvuMSWfpC89y73vvfdu7zSxfnV8mv+qWovj+phNlPA3smZ2PfXiarVPbWzvSsx9tFnrPGa3t3IwlGlIhZkYuuekBBIxn6brHQdRUu1BrcHgVESHR7nKlOJDlzXfIDfbrWMf/qWGiVPz/e5ZCpxvGZTqTiWAP6W76v2H6GH13AoSkhCJSTRrI7kaqdj1IAIgKLL+fSfEpJobGTlcqOR6wFJgHUkmk45DJUbBGLtRFthsSfmCFVLOsmA7/FYbNjrmePYJLgdbZIK8ovHoC3ejmY1yAf2u12jwj4K1EziWKVZlvvZHLUBTFwFkDir5CNejEZGeuj7ph/4Z6CCcyM94GaiGJOIVw5wbjYegUj6fbHsARRgavUiSWThYzAQm6W/HeY6+4DKeDg7HPkfMF6oNhNSWkQAAAAASUVORK5CYII=",
            name: "Kerettil\u00e4inenhirvi\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Kerettil\u00e4inenhirvi\u00f6"
        },
        {
            id: "boss_fire_lukki_phase2",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABgElEQVR4nGVTsUrDUBS9CVJC0uKQRDKUCEVEQRB0EMG9kx8g9g8cnBydXFwd+geK39A94KSTUBEXOwXaLm0Tu0XOfbnpy8uBx0veO/fck3tvrLNut5iv1wRMVyvew3abd99xeDfvdY5dnciF5zFRyA1xz6vxbZNw4hdMwvqazYiKQq0yGPc6f6upXtDbbczv7n5M+feEkvcp3SVKvHKZZRxnbTuOOiWifuzScLDLgQII6FBifyzADg6CgK1CdTjYBF4//NQCX+73WOziNCRKlChibamB2EN2BM+yjD7TtFo4E2fCrWoQltn14HS5rDnAmdktJLdNRVg1EXU6tXp8zK1NG6k8QHGEEBi9xvvo8Zifb55/eZcu2Dw0WUav47wSgYujKKplFyCZdKByAIwmObcHGXQRZNc/SwZNYOlzAGAWrg5d1a4SMlBiHxAnlvkz6eOqC50/qfro9tnBZa/H7PFiwX+fDJWISMXNQACDxHMAIHin1SIqJ5N8t1EwMxj8f4WF49narJqSAAAAAElFTkSuQmCC",
            name: "",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/"
        },
        {
            id: "blob_titan",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAD1BMVEUAAABaZUR1hFjV5mRGTjVPkupHAAAAQElEQVR4nGWMwQnAQAzDskrlDZz9dysO6cHRTxCO5UIGeCoXmgHR3kQuJ4d5deqB8bbzA+0Omp3YB/QtQ+nWzQsmmxJBcesDawAAAABJRU5ErkJggg==",
            name: "Kolossaalim\u00f6ykky",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Kolossaalim\u00f6ykky"
        },
        {
            id: "boss_musical_ghost",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzElEQVR4nGNkQAJusRX/QXRbZSZczERLnvHMtYdgcWQxGJsFWQJdk5+fC4OUiiqYRgYgMRibEZlDDmAhVuGzO7fhzkYGjDAXgBTAwmDX4g6wYpjf0b2AbCATPtPxAZjFjMiCMBthoYzsApgl6GHGgh5F2AAuzXAvIIOq9ukM2ACu2GJBThSwQCQUgHhdAALEeAvmNRZ8inFFH8w7IJqJGJuQAUgTcrRjNQAULshhg64JOUCZkBXCNGMzFOTVTZv2YIiD8wJIE7ExgG4IAHz9b38PzCIjAAAAAElFTkSuQmCC",
            name: "Hyl\u00e4ttyorkesteri",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Hyl\u00e4ttyorkesteri"
        },
        {
            id: "boss_toxic_worm_minion",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABG0lEQVR4nGNgGJlALUj+P4zNgk2BhKnIfz5BXgZ+OT4GAQl+sNiHFx8ZTs+5yAjW9IeVQc1NEWwII4rJUEEQ+PT+M5gGGQTj67prMTw89RjMBxkOMpARpsFroQ1Y87kpNzA0IvPlzWQZLu+8BreUBabx5bl3DOJGQgxGORoM2+KPMDKYMoDFYV55fPEpXBNM7OurrwyMxvlaYIWfr39n4NXkBBuC7BJZfWmGj48+wZ0NYsNcBXbB5+vf4U79dAwhQSxggZn24vQbWHjAAxIEQDbCvIAckDAvsID8DNMI8juMf2fpU4TL3n+GByKyGAgwwsIA5ndQYILA02OvMGIDbzTCDDo78RojoYSk5afy/8+PvySHFxwgJ2WKAQCac5L6JPQvDwAAAABJRU5ErkJggg==",
            name: "Myrkyllinenmato",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Myrkyllinenmato"
        },
        {
            id: "boss_toxic_worm",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABkklEQVR4nJVSz0sCURD+dlnXdTU3grKQflqkBS1BVtfo1KFLR8/+WZ079h9EdA0iDCItIzKsNBEV0fUHbsxb3rquW9FcZt6b+b6Z+d4T8A9Ln2yZzvPp+Z0g/AZIpnVzclbDftkqyyrVkXzcmIK0eRg35YGfXXTFDu4vsqx6+0C3u+VbLWjRMKSqCiXoR+29AUXzQwurEPaOdkbGanabzKvLFumqoKAS8eP1+s2u0RbCVs6QIbLORs9OhuQQ8/1noPXSQd40RoCLu/P2ubIUgEjg28uMQJ4TEYms+JivFxqofdYZkMekC8U0lSTFgGRsuO8AFolY9GEQ7QGFcXEJyNeQiM3LiqUPoDTcl0/hBDMCJWCJ5baoPsdAXp1pfK6JZLQ78CKhOz4dJ+JgPgHFEhfFi+AvIyKB/zh30t2dm3MCpoGeSpjdVhftXB+PN0/21944XrNJgxHVcwK2wszKNDuU8QV9PcFAmbMHwTchjRU7deCx/QqciExPgRHRHeVzV3lWTGuNPSO9gls0TvYT2KnDN5CUsAuWRkKCAAAAAElFTkSuQmCC",
            name: "J\u00e4ttim\u00e4inenmyrkkymato",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/J\u00e4ttim\u00e4inenmyrkkymato"
        },
        {
            id: "boss_sky",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2klEQVR4nMVTOwvCMBC+C12EKp2qnVwquHaRbv52t+DSVdDFqepUSsAxcuZhHi0IFTwI3OX4HnchKKWEKcEmoX9BkJhkX+/c+7G50CQHfowdZOnCA+vaIw7vmFt0oh8EU16s5t/tIItVYbvJYV0soa5KT8TbAQT2Zql8gwBy4M0lGsXsg4VKdCgUWAUpmxFCh4lbDCjZeAr7AOMEmWY3LoZIqceb3tbM6WEnVOPa3i2Y7NNxCeuqxDEHSFvuxMfy6fzwHLjgiEA7QFpYe1PPZVwRkNTDkfDvv/EFC/lO4L7Pmh8AAAAASUVORK5CYII=",
            name: "Kivi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kivi"
        },
        {
            id: "meatmaggot",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkUlEQVR4nN2S0Q3DIAxET5mFBdiBYViAJWAk2IEBGMbVVbKVEtLSz/ZJyNi6sxEA/Dc5Z9kWi8hTHGOUs1lzUmuVVYSaGVnkOsNmqlGT5i9QyIkz2nBubCdQZpFzzoSzmXDYYW4ApRT03i0fY9g+hIAVh05mTCnBe4/W2kW4qn31CrJzB+/+wdYr4AO3/+C3eQDQBuUN4zzYdAAAAABJRU5ErkJggg==",
            name: "M\u00e4t\u00e4ry\u00f6mij\u00e4",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/M\u00e4t\u00e4ry\u00f6mij\u00e4"
        },
        {
            id: "mimic_potion",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAz0lEQVR4nGP8//8/AyWAiSLd1DCABZ/kok89MP8xbp4YwrC6VgG3AQEBASDFjFzZ31EUeJi7DvIwYMIhDvIO2P87Tu4G81kt0v9H7XbHb8CGDRtgmhmWue7EarBV5HScBjBCAxKsGZttICD2fed/mLqAgABUF3h1ZDEy4AHHu68yvOJ0Z0S2jAVZwbaKaQwXv11lYMAfc9i9sAHJ/7icDwLPb+6BqQXTGAkJZgg2oM9lwsAg9xcUBnBvEJUOoFHJcPbVKRCFYgnWvAAKLGIBAPEFTWWw5wVtAAAAAElFTkSuQmCC",
            name: "Henkev\u00e4 potu",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Henkev\u00e4 potu",
        }
    ],
    perks: [
        {
            id: "CRITICAL_HIT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSUlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZphmmctWotmE4LC0YxACYvDtUDAkzYbAJpvHTpEkNOTT1DYGIKg4SKKoO1owNWVzGhmw4DU1oaGZ4+fcpw/PBBMF9MQQUut2DLFjibhQEPgGm2tLVnCPr2jSEoPIrhpKoqA+daiBdxegEEYE4GaZaWlgazQZrNb99miF25jAGvAdaODgx3Hz9leHHnNsP6+XNQND+9fBlFLRM+zchAT08PQzOGARM7kzE0g6IUZPO7hgaGimuYBjCCCH8j3f/KZuZggaP7D2DzFUOHli7cAFCCkhMVYNh47jIkIYHA/q07caZAfADsBVDaBiVPkMmw5IoOQLbD5EFqQXrgXgABcjMTxQAAnkWLxCrbFiQAAAAASUVORK5CYII=",
            name: "Critical Hit +",
            description: "You get more critical hits",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Critical_Hit_+",
            ui_name: "$perk_critical_hit",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAz0lEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf9j04jNIJghTLgUBSamMOTU1MP51o4OWNUxIXOQbV8/fw7D06dPwQZJqKgy3H38FC63YMsWOJsFn1NBhsBs7jY2ZWAwNmU4qarKwLl2LXYXoAOQZpDNIRFRYD5Is/nt2wyxK5cRNsAaqvnFndsomp9evoyijokYzSCgp6eHoRlrGFhD/QzTDIoJsM3r1jFUXLuMkh5ISgcdWrooBsDSASO6QlJT4jAAAAdZX0jIDls4AAAAAElFTkSuQmCC"
        },
        {
            id: "BREATH_UNDERWATER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9klEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZphmlUTpsO13R3ViacDZMXh+oBASZ0W0Cab+/dDsblcaYohmEDTOimI4OU+CasmpDVMqFLvnv8ioEUwIIu8H57PYOwZyODkKwYPAxg3kAOD5wGwAx5jxYmcxbWMXQyTMcwhImBAIB5CVd4MOHSCHM22Etqxgyqzp5YvcCEnkhAQNCzEexsZEOQNSOrZcJmO8xWbDZidQEobYOSJ8hkmOkgQ9ABTB6kFqQHBCjOTBQDAOZZdEzltNtwAAAAAElFTkSuQmCC",
            name: "Breathless",
            description: "You can no longer drown, and can move in liquids with ease.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Breathless",
            ui_name: "$perk_breath_underwater",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArElEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf/DNCqnTQfTd2dlYjUIZggTNmeBNN/eu52hPM4UbhAuwITMgdn+7vErMJ0S34RVE7L3mLApeL+9nkFYzZhB1dkT7AWQK3C5hAmX00CGwDTj8w4TAwFAyDtM+DSDbET3DjpgQY8eWAAJejaCna6aNh2s8T2aOoIueA+1GZutVE2JDEMfAABrzk6U0ArdEwAAAABJRU5ErkJggg=="
        },
        {
            id: "EXTRA_MONEY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABO0lEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAgmAbAZpBmmEad65IhzDAJg8SC3MtUy4nOkesRKFf+JIEVZ1TMim4wMWNn0oLsEwAJtNJ27cxrAZ3WuMIMLfSPf/i6/fUSRAGj8+ecrALyMNptG9JMHNybDx3GVIIKIDdM2vbt0CuwYbYEIXWNxkCNFs0ALXLKamxvDxQg3WgGRC5vR7soEVg8DtVWFgF4D4IBpkEMhAkAVYDfj17SdD4fZfYIXXFq4Ha7y9bz+YDaLfHL8KNii27jw8QYEAC7JpoBCGB9Z2pEDbfh4sBzII5MrstWgGgNL26XuPGRz9FoEFQfEMUghyESxcQAYjJ2VLZWkwm+LMRDEAAKthm0JhjUYpAAAAAElFTkSuQmCC",
            name: "Greed",
            description: "You gain double the gold per nugget.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Greed",
            ui_name: "$perk_extra_money",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7ElEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MVwfE7pmkEaY5p0rwlEMgMnBLMEwgA3NVveIlXA2smHI6piw+evEkSIE+8ZtDMOQARM2QQubPrhBHy/UoNje78lG2AC45idPGfhlpBle3boFd0nh9l8MBA1Y3GQI0WzQAqbF1NTALkH2Gk4D+j3ZwBpA4PaqMLALYK4AGQYyHKcBv779BDsRpPjawvVgg27v2w/Gb45fBRsUW3cenh4wEpKhrOz//ZvisIY4KCBBBoMMyl77GZ6YGNEVIqdEkHdALgI5G9lm5JQ4DAAA5PxyuBrpiukAAAAASUVORK5CYII="
        },
        {
            id: "EXTRA_MONEY_TRICK_KILL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLUlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpxqWxbcNBBk15KYbrD58xVAXYM4hD9YAAEyHnrj9/G6wZBEA0iI8MmGAMXLaDbA00VEWhkdUy4bL5xJEiMA1yMswVIBrEx+oCdM0fnzxlOHED4lxk29EBC7rA4iZDsOZXt24xMDDUgA2zsIHYim47hgv6PdkYxNTUGPhlpME0yBCQYSBDcQEWZE7h9l8Miy1vgTW+OX4VLKbq5MjgHrGSsAG/vv1k2L8pDkXxzhXhDBY2fWCXgQxHVsvAzYnpBXckzSBnw/jImrGGAShtg5InyGRYco2tO4+hGCYPUgvSAwIUZyaKAQDw/5Ka6M+jxQAAAABJRU5ErkJggg==",
            name: "Trick Greed",
            description: "4x instead of 2x gold is dropped when death is an accident.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Trick_Greed",
            ui_name: "$perk_extra_money_trick_kill",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2UlEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MVwfE7pmkEZ0zW0bDjKsP3+boWfXCbAczBIMA7ABkEZNeSkwG0SD+MiACZmDzdnXHz5jCDRURaGR1TEiKzZXV/mPyxUwADIEBE7evMOI1wsnjhQxnLgB0YhsOzpgxOaCxU2GDGJqamAxfhlpBgubPgyNOF3Q78kG1gzS+OrWLYaPT56CDcQFmNDjuXD7L7DG2/v2M7w5fhVsUGzdebA8zCBYesDwgiE0HRACIANgiYkRXZLUlDgMAAB7mmCdxuQ3EQAAAABJRU5ErkJggg=="
        },
        {
            id: "GOLD_IS_FOREVER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABZElEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpxqbxj4AWA4dJLYO8vDzDw4cPGX6caWYQf3YerAcEmAg5F6R5QgIDw8G1tQwbGhTAfGTABGPgcjbIZgUFBTDbwKcGzEdWy0LIBSBnP3jAwHBhSwvDgwcPGAoWPESRZ8Gn+cSRIoZNV/kYChZ8YpCX/8/w8CEDOAxYiDHgxJEiho9PnjJovqxhODJlFYOFhipWDUzYNC9uMgRr5jdoYRBTU2P4eKEGbCA2wIQu0O/JBtYEArdXhTHwy0gzvLp1C2wgyGCcBvyCJpLC7b/AGq4tXA826Pa+/Qxvjl8FGxRbdx5FLdYw2LkinME9YiWEsx1Cg8RABoFcB7IAGYANAKXt0/ceM4gzMDA4+i3CSBMwA5GTsqWyNJhNcWaiGAAA2rmPAOC62CMAAAAASUVORK5CYII=",
            name: "Gold Is Forever",
            description: "Gold nuggets never disappear.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Gold_is_Forever",
            ui_name: "$perk_gold_is_forever",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABI0lEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MVwfC7ICc3UVsGZk8EdAi4HDpJZBXl6e4eHDhww/zjQzGDIw/IcZwkTIiSDNExIYGA6urWXY0KAA5iMDJkIGgGxWUFAAsw18asB8ZO+xEDIA5OwHDxgYLmxpYXjw4AFDwYKHKPIs+DSfOFLEsOkqH0PBgk8M8vL/GR4+ZACHAQsxBpw4UsTw8clTBs2XNQxHpqxisNBQxaqBCZvmxU2GYM38Bi0MYmpqDB8v1IANxAaY0OO535MNrAkEbq8KY+CXkWZ4desW2ECQwTB1OF1QuP0XWMO1hevBBt3et5/hzfGrYINi684TTokfzlf/d49YiSK2c0U42FCQQdlrP6OkxGEAAJE+cXU5uI4fAAAAAElFTkSuQmCC"
        },
        {
            id: "TRICK_BLOOD_MONEY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPElEQVR4nGP8//8/AyWABUQwMjIyZDlY/H/66StRmqT5uBmmHTjBCLKcBSQA0rzhwg0GcV5esAI2LnasGn99+wmmT997DNYDspsFJACyGaQZl8a2DQcZNOWlGK4/fMZQFWDPIA7VAwJMhJy7/vxtsGYQANEgPjJggjFw2Q6yNdBQFYVGVsuEy+ZNsf5gGuRkmCtANIiP1QXomr/ee8FwqK8TzEe2HR2woAtME5QEa35/7REDA8M6sGF+UFvRbcdwwZR7QgyCWnIM3EoSYBpkCMgwkKG4AAsyJ0fpHcO0a4/AGj/dgMS5jI8EQ+TRkzgNYEJOJMutzRmy3j8H4wrxdwzyQaoMfos3MnS8FMKaoDC8EIlkE8jZMD7IMLwuAKXtl58/g02GmQ5yBTqAyYPUgvSAADhDUJKZwAQlAAAUzqD38J9k8gAAAABJRU5ErkJggg==",
            name: "Trick Blood Money",
            description: "Blood money is dropped when death is an accident.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Trick_Blood_Money",
            ui_name: "$perk_trick_blood_money",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9UlEQVR4nGP8//8/AyWAiSLdDAwMLMgcRkZGBkNZWbCT2LjYMRT/+vYTTJ9//JgR5nImZAUgzSCN6JrbNhxkWH/+NkPPrhNgOZglRHlh/fnbDJryUmA2iAbxkQETMgebs68/fMYQaKiKQiOrY0SOBQsNVaxRgmwryBAQOHHjNiNeL+wJ82I41NeJ4Qp0wIjNBYs4xBn41SXAYtzq0gwuq7ZhaMTpgin3hMCaQRo/3nzB8PXmU7CBuAATejznKL0Da3y26SzDp2u/wQbF/XgJlocZBEsPGF4wkpMDpwNCAGTAuUePGDEMYCQjJaIYQA6gODNRbAAAs1l3IE0xBeoAAAAASUVORK5CYII="
        },
        {
            id: "EXPLODING_GOLD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIUlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesYEuyFkPQ8rsYGn99+wmmX37+zBBgoAE2hAkkALIZpJmNix2MQZpPrA4EK4bTR4rg8iC1MNeyYHMiWJNiGMOJ1QwMFqHrwWIWNn1YvcMEY4BMXhepDLcRDMCGBILFkQFILYYBIAByOsxGMLi/CsxHDo9+TzaEPLoBMPBs3SUGC5NIsGZ02wu3/8JtwAmo85FthLFP3LgNDkh0wITMQXY+ss0gzSR5AQQw0sGb6QzHW6egiiEb8AuaSNBtBIHbq8IYbu/bDw8DZLUsGEaCvKKhisKPrTuPTRnCBaC0DUqeIJORTV/cZIiiGCYPUgvSAwIUZyaKAQB1qoEtjSUuggAAAABJRU5ErkJggg==",
            name: "Exploding Gold",
            description: "Gold dropped by enemies explodes when it disappears, is picked up or touched by other enemies!",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Exploding_Gold",
            ui_name: "$perk_exploding_gold",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7klEQVR4nGNgGGjAiC5gKCv7f0uyFkPQ8rso4ieOFDEYGbWD2ecfP2bEaoChrOx/Ni52iIbVgQwWoevhNDL49e0n3BAWbM4CaWJQDGM4sZoBQzM6YELmgJwO1gwDYEMCGdZFKsOF+j3ZGGCuxPCCubrKf2QXMNxfhdMFJ2/eYcRwAQw8W3eJwcIkEqwZZvuJG7fBAYkOmJA5MOcjxwCIDdKM7AWcBlggORfZ32DwZjrD8dYpGC5gQY8eWAAhu+L2qjA4u3D7L7A6vOngxI3bDBYaqhi2YUsHTMgSIEGQpJGcHFxscZMhikZkzcMEAAAR9WpjWK7z5AAAAABJRU5ErkJggg=="
        },
        {
            id: "HOVER_BOOST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA30lEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpRtcokT8bTL+YmIpisDhUDwgw4XImSDNIIwjDDMIGmGAMZNthmq0W3wZjdEOQ1bLgshmkMVsDKrj4NsOxWFW4HDJgQTcAQzMDA4QNNQSnF2AAXTMMgMRAcuiABV0AZMsxNIOm3oCIYwNMDBQCJvREQgxAVstEqQvAYQBK26fvPQanMBAAxTMsLLDZDErKlsrSYDbFmYliAAAzrmME01jaPQAAAABJRU5ErkJggg==",
            name: "Strong Levitation",
            description: "You can fly 100% longer.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Strong_Levitation",
            ui_name: "$perk_hover_boost",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAm0lEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MVwfE7pmkEZkzRL5s+FsmBzMEgwD0AFI84uJqSiGoAMmZA66zSDNVotvYxiCrI4Jm6nImrM1GLAagjUQzdVV4H6DaYaBqTcYGI7FqsL5J2/eYcTpAis0zSAAcwk6YMFmAMimY0gGoduODJiwxTMhgKyOiWGgUyLD0AcAVGhC6WBUrT8AAAAASUVORK5CYII="
        },
        {
            id: "STRONG_KICK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABZklEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsE0v2PUZnj0+gMYv/j6HY4lORHsBak/wfIbLtwA64Eb8BRqs51xEgMbFzuKbeffMDDsKGBiCFBkYGBWNWEI02ZnuLHGC66HCd15FprRGE6esfEfQ3aJGQOvnByYntR+DC7HhM2PMEMMRSC2wzSDAIjOq7TCbsDLj09QDAE532PCP4apPacYPj96BBYH0SA+hgH3nx3EcImilD2YZlaRYthx6htcM8hFMMCCrAFiCEQTCLz+foEh2FWK4d4bfgYGhncMf29fY9hwn4FhQ/YpBgluTkwDYIaAbAZpVlUAaWZg+PT1O8Pa888Y7p1nwABMmEIQQ8RFBcFskOa7tx6A2aAwwWnAr28/GXT0NOASIE3ImpEBSC2GAfrG2gxXLt0As2EGYdOM1QWgtL3rwAmwyZqaKnCDsNkMwi8/fwbrAQGKMxPFAABjhLD7GWpC1AAAAABJRU5ErkJggg==",
            name: "Never Skip Leg Day",
            description: "Your kicks deal extra damage and knockback.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Never_Skip_Leg_Day",
            ui_name: "$perk_strong_kick",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIElEQVR4nGNgGGjAiC5gKCv7H0SzcbFD+CIMDOffQOR2FDAxOLV9Zzj/+DFcHxOy5vyA+v8gjTDNIADSDNIYoMjAwKxqwhCmzc7waU/Uf6wGgICFZjQDOpix8R9DdokZA6+cHJie1H6MAacByIaAnA+yHaYZBEB0XqUVA1YDXn58gmIIyPkeE/4xTO05xfD50SOwOIgG8bEagA4UpezBNLOKFMOOU9/gmkEuggEWZA33nx1kYGCAaAKB198vMAS7SjHce8PPwMDwjuHv7WsMG+4zMGzIPoXdAJghIJtBmlUVQJoZGD59/c6w9vwzhnvnGTAAEzLn17efcEPERQXBbJDmu7cegNmw9ABTh2EAMgBpQtZMdkpkQAIwm5FT4jAAAEXadPHdwsSGAAAAAElFTkSuQmCC"
        },
        {
            id: "TELEKINESIS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMElEQVR4nGP8//8/AyWABUQwMjIyZDlY/H/66StRmqT5uBmmHTjBCLKcBSQA0rzhwg0GcV5esAI2LnasGn99+wmmT997DNYDspsFJACyGaQZl0YYgMmLQ/WAABMDhYAF2fT0ZbfB7JlRqmA2iJ7Vl4aiIa1oFopLGUEBEWCs9//F1+9YbYgItWK4fvcpQ3aMO4p4Xe1ihg1nLzGieAHmAhidk+7B8PrdZwYRQT6GqUt2Muw7fgWOMbwAAiAnI9Nv3n1iePP+E9gAMBbiY0AHLOgCyOEAsx1kiKayNNhAEFix+hiDBDcndgNmQm0Hgb17LzPoG8njtB3FgF/ffsJjAhYLyAaCDENWy0DIBTORXIIPgGMBlLZffv4MNhmWXLEBmDxILUgPCIDTASWZCUxQAgBwpJY12NCJxwAAAABJRU5ErkJggg==",
            name: "Telekinetic Kick",
            description: "You gain new telekinetic powers.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Telekinetic_Kick",
            ui_name: "$perk_telekinesis",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5klEQVR4nGP8//8/AyWAiSLdDAwMLMgcRkZGBkNZWbCT2LjYMRT/+vYTTJ9//JgR5nIWZAUgzdg0wgBMDmoJI4YB2MCsvjQUflrRLBQ+I3Igzj/HAObMjFJlSF92G0xHhFoxXL/7lCE7xh1Fo55XKSOGARYaqihRkpPuwXD9zlMw+837TwyaytJwuYLmhYwYsZC+7DYK/ebdJ7BGEBAR5GMQEUJgrF6wQHOBs7MuVttXrD7GcOLGbUwXoLtCJXkdWDMu2zFcYCQnhzcakdPDuUePsLuAVMCI7AJyUiKKAeQAir1AsQEA+ZZo5yHm8hQAAAAASUVORK5CYII="
        },
        {
            id: "REPELLING_CAPE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABF0lEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHa44xaMMzp62rhlMv/z8mSHAQANsCAtIAGQzSDOyRmTNPZu6GQTY/sPlxaF6QICJkHNBmvEBJhgDZrpFcjlc8snTOyiKYXLILmUEEf5Guv9ffP2OYbqHbhCcvePyOhQ5CW5Oho3nLjOieAHZdpD/ZaRVMAxFVoPiBRA4MbeTAR2gG4KuhomQDWY6ixmC3I8zKMkYYBiO1YATUBvm7Ohi8Mr+z3DqSizDup2WDE21wvgN+PXtJ4oEKAy2TYUnVIaY9L0M2NQy4XM+OsAmDzYAlLZByfPQ5CYMlyADmDxILUgPCFCcmSgGAGAfZz1eOPcKAAAAAElFTkSuQmCC",
            name: "Repelling Cape",
            description: "Stains drop at a fast rate (when moving).",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Repelling_Cape",
            ui_name: "$perk_repelling_cape",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAklEQVR4nGP8//8/AyWAiSLdDAwMLMgcRkZGBkNZWbCT2LjYwWIeukEMMtIqYPa0dc1g+vzjx4wwl7MgGwDSDNOIrLlnUzeDANt/uKFQSxgJekFGWoVh1eHleL3AhMyB2WCRXA6mnzy9wyDOJswgJyiDIo7sSkbkWLDQUEWJEpAXYGDH5XUoNp+4cRu7FyygtiAHHjZ5gi5QkjFgcNJxYzDTWQzmd6wQZ7j35AJhF8BsASn2yv7PcOpKLMO6nZYMTbXCDNgAI7ILjOTk4NEIcwEsMJHD4Ne3nwznHj3CHwZqgkoE/Y+RkM4/fszIMLkJZ+Y4NLkJoQ6bF8gBFGcmig0AAPCWXtaVV4WzAAAAAElFTkSuQmCC"
        },
        {
            id: "APOTHEOSIS_ABSORBENT_CAPE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABZUlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHUyneJSB6Tk7usD0r28/wfTLz58ZAgw0wIYwgQRANoM0gzSia+7Z1A1nw+RBamGuZcLnVJBmELgiDfcpBmCCMWA2g4BFcjnDk6d34PwTcztRNCGrZcJmqqf0fDAdYRwIxvgAEzZBFUURBsvAIwwy0ipgGh9gQRcAOX//yv9gNsgbT9bbMFgkq2J4A8MF6zaXgkNb6Mw9BlmzBWAxkAtA4NXOnWCD8RoQ5NsNDm1z/4MMj57+QFF078kFsCFKMgYMS2Y6o8gxggh/I93/j15/AIfu0vlaYIk7998wPD6VAI+NHZfXwTWBEpScqADDxnOXIQkJGew78gRMg1xhprOYIcj9OBjj9QIobYOSJ8jk6ZNfg213spFhOHUlFozX7bRkEDh1G2wISA1ILUgP3AsgQG5mohgAAIDVkKPKJDbUAAAAAElFTkSuQmCC",
            name: "Absorbent Cape",
            description: "Stains drop at a slower rate (when moving).",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Absorbent_Cape",
            ui_name: "$perk_apotheosis_absorbent_cape",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIUlEQVR4nGNgGGjAiC5gKCv7H0SzcbGD+R66QQwy0ioMc3Z0gfm/vv1kOP/4MVwfE7pmkEZ0zT2buhlSPMrAYiA5mCUYBqADkOZVh5eD2VekMRwLBizIHJjNIGCRXM7w5NRtBnE2YQYGQQaGE3M7sapjwmosAwODp/R8MK0so8RgpWSKSxkDTgNUFEUYLAOPgL0BonEBRmSOubrKf5jzdZ5CwunJ0ztg+oOZKoo3Tt68w4jhgnWbS8GhLXTmHsN/6RlgMZALQODVzp1gg/F6wce5BRza5v4HGeSkOVAU3ntyAWyIkowBw5KZzti9YAhNB8nJfAxONjIM+448YTAX5IbLp/U8x0hMjOhOgiWS9g5ZcEDuX+mDEg6HJjehpMRhAAC0+1tt22b5+AAAAABJRU5ErkJggg=="
        },
        {
            id: "EXPLODING_CORPSES",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJElEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0Gclxes4NzWCAaL0PVwDb7eYnD22tWPGV5+/swQYKABNoQJJAiyGaSZjYsdjGGa10Uqg2lFeSm4ASDDQWphrmXB51SpID2GE8UtDAz3V4GMARu8eSvCZSDABGOAbIbZiGw7xAlhDMv234d7BaQWwwAQCFp+F64ZZDs8HMAuwAwPDAN8oZIgg5A1g2yPclRE0YhhgK+3GMPmra9QJEEuARl0/+EzhtYFRxkS+XjBapBdwQRjwDQj+x3mJRiY/+kzbhfg0gQD6K7DMODXt58MxAJQYsIwgAENLFT5R5RhYANAaRuUPEGugLkk/g7EbPRoA8mD1IL0gADFmYliAAB8hXZ52qMGggAAAABJRU5ErkJggg==",
            name: "Exploding Corpses",
            description: "Enemies explode upon death, but you gain immunity to explosive damage.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Exploding_Corpses",
            ui_name: "$perk_exploding_corpses",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5ElEQVR4nGNgGGjAiC5gKCv7/9zWCAaL0PVwMV9vMTh77erHDOcfP4brY0LXzMbFDte8LlIZTCvKS8HVgAwHqcPqAkOoATBwYnUgiutgBv/69hPuCiZkBSDNMFthNAws238f7hVkS5jQwyBo+V2wZqkgPZRwwBYeWA3w9RYDG4KsGWR7lKMihmEYBvh6izFs3voKzge5BGTQ/YfPGFoXHGVI5OMFyyO7ggnZAJhmmP9BLkEG8z99xu+CX99+YtWIbDheA5DBQpV/DLgAKDFhNeD848eMIFeAcPwdiBR6qCOngWECAH76XXx0IFjoAAAAAElFTkSuQmCC"
        },
        {
            id: "SAVING_GRACE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGUlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpxqURBmDy4lA9IMCES/HBvVkMJ27cBmMQGxdggjGWzHCDC87rs2ewd57GYKGhCsYgNkgMm1omGEPLaw5cMKnoIIoGEBskhk0tI4jwN9L9/+Lrd7BzQTbiAzA1EtycDBvPXWaEuwDmT5ACfJqR1cKBv5Huf3N1lf8/nvT9RwYgMRBGBiA1IDGQHpQwAAFQYMEAsleQ2chqUAz49e0nPOCwhQNMDKQGlqBQAvHR6w8EExKyZXKiAohABKVtUPIESSCbjk0jCIPUgvTAXQAC5GYmigEApMuhlN6G/cIAAAAASUVORK5CYII=",
            name: "Saving Grace",
            description: "If you would die and have more than 1 HP, your HP is set to 1 instead.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Saving_Grace",
            ui_name: "$perk_saving_grace",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9ElEQVR4nGP8//8/AyWAiSLdDAwMLMgcRkZGBkNZWbCT2LjYMRT/+vYTTJ9//JgR5nIWZAUgzdg0wgBMDmoJI0EvHNybxXDixm0wjQswIXMWTTKHs+f12TPYO09jsNBQBdMgPjZ1DCC/wPDbq7n//38+9N9cXQWMr25NRqFBGCQPVgfVw4BsQICHCVgBsiHIGCYHVofNAHN1lf+X14fAFcIMQuaD5MFiUD1M6IGSUnEBzg4MLUKh0eUxAvHXt58MczoM4Jqe3/8AZoNomCEgeVh6AAFG5KRsJCeHNx0gW3Tu0SNGDAMYyUiJKAaQAyjOTBQbAACKm9CUrkHWvgAAAABJRU5ErkJggg=="
        },
        {
            id: "INVISIBILITY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1UlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHa5YJaQJzr62qBxMv/z8mSHAQANsCAtIAGQzSDOyRmTN1y5fAFE5bFzsU0AMcageEGAi5FyoZga2m+vAmtEBE4yBbjs+gKyWCZeiX+pBOSBaS9cAjHEBJlwSWroGWJ1MtAHEAiZiAhDZS0QbcO3yBRS/4/ISE9yGbz9RJNAD7trlCznY1DJhMxWbc/GmA1DaBiVPkMkgjMu5MHmQWpAeEKA4M1EMAMOLVuNe9+0bAAAAAElFTkSuQmCC",
            name: "Invisibility",
            description: "You're invisible. Stains, casting spells, kicking and taking damage makes you temporarily visible.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Invisibility",
            ui_name: "$perk_invisibility",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoElEQVR4nGNgGGjAiC5gKCv7n42LHc5XCWmCs68tKgfT5x8/hutjIUbztcsXGJj//mWAyYHUwQxhIuREkGYQYL6zEas8EzIH2XZ8AFkdEy5Ff1X8wbSWrgEY4wJMuCTUDYyJcg0TMf5HdhHRBly7fAHF6bhcxITM+fXtJ5yN7u+bF85iVceEzVRsziUqGs8/fswIMh2Xc0FyIIycEocBAACOwDsS07yGNQAAAABJRU5ErkJggg=="
        },
        {
            id: "GLOBAL_GORE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFklEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZphmlcIyHNEPLiKVyjt5cxAzsfB8PPTz8Ytm47yyAO1QMCTNhsAmkGGQIDIM3INDJggTHQnY1iyIEHDMscFBiOH7yGoZYJWROyrchsGLC018IQY0K3NSjCGkMzyHYYAMlj9QJMct2KowzrGBAA3TCQPEjdsc3nUF3g7WUMlkQG6LGBDTDBGKDoQbcVpvnzi9dwDAKg6MQw4Bc0kSBrRAa7D9yCs9evOYZpAAOZAGwAKG2DkifIFcguAQFQgPFKiILZIBokD1IL0gMCFGcmigEAsPp3cW6P0lIAAAAASUVORK5CYII=",
            name: "More Blood",
            description: "Blood blood blood.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/More_Blood",
            ui_name: "$perk_global_gore",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3ElEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf/DNK6RkGYIefEUzPb2MmZg5+Ng+PnpB8PWbWfBBsEMYcLlNJBmkCEgANKMTCMDJmQOurNhhkQdeADmHz94DUMdE7qJMFuR2cscFMC0pb0WfhfAbA2KsEYxCBmA5PAa4O1lzLBuxVGwQbBARAYgOWRDmNAVgEIZZjssJj6/eA3HIACKDawG/ILGM8xmZBfsPnALzl6/5hhuF5AKmJA5oMQBcgXMJSAA8i+vhCiYDaKRE9EwAQBkemBXMK0qNAAAAABJRU5ErkJggg=="
        },
        {
            id: "APOTHEOSIS_NO_BLOOD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3UlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAgmAbAZpBmnEpdktrRQuD1ILcy0TMU4Gad41qxurHBOMgctmEABpBhliEZ4G5vsU1MDlWIixHQR4Ph1j4GFEGCjBzUmcF3bN6gZrRjcQwwu4ALoGmHdggAmnTiQN+MRYGIgAn1+8xinHhJ5IcIHdB24xYFPLRIwL8AGwAaC0DUqeIJPRXQIKMF4JUTAbRIPkQWpBekCA4sxEMQAAkUhXvPpstisAAAAASUVORK5CYII=",
            name: "Smoked Corpses",
            description: "Enemies leave behind no corpse, and bleed no blood.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Smoked_Corpses",
            ui_name: "$perk_apotheosis_no_blood",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyUlEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MVwfE7pmkEZsmt3SSsHiIAyzBMMAXACk+dz6mQwionwYckzIHGw2c3CwgjUbBaYzqDhFgMV8Cmrg8iwMBIBdXAGY5vl0jIEH6vNds7qxuwAbOLRoAlgzsneQARMDkS6AAZDtyIYwIkuaq6vAQxcZuDqowdm7D9wC0ydv3mHEcMEvaDxjAzCN6OqYGCgETMgcUAoDmY5sQ1CENQOvhCiYDaJBcsgpcRgAAAGVQAAUJIExAAAAAElFTkSuQmCC"
        },
        {
            id: "REMOVE_FOG_OF_WAR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABT0lEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LnaEjZDGKpoo1sQy/vv0Es19+/swQYKABNoQFJACyGaQZpBEEQJon7mlBMQAkBjIEBMShekCABd15MM3WDC4MJi4WYLEze06AxZANgQEWGAPmbJDifJcaBpsECwYWlf9gORDbZIEFWA7dEEYQsb/6+H+YQrCpUI3o4M8dSJgfWXACTDu2WkLCYML2NIYXX78zdDBAXAACMOfDALI4yAUS3JzYw+Aowx4G1lf/GRj2oIqferWb4bcYI4MJA6rBLOgGvPzwmoGBjYHhN5oJL9neMDB8wPQWEzIH5LS2kIlwg5AxCIDk0GOBCcaAJRJkQ8QFRMEYXTNMLYYLGKDpoGpNPlwjzCCQGHrqhBsAStug5IlNMzZDQGpBekCA4sxEMQAAsJGbWebWk+sAAAAASUVORK5CYII=",
            name: "All-Seeing Eye",
            description: "You can see everywhere.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/All-Seeing_Eye",
            ui_name: "$perk_remove_fog_of_war",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/klEQVR4nGNgGGjAiC5gKCv7H0SzcbEzdIQshotXrIll+PXtJ5h9/vFjRqwGGMrK/gdpBAGQ5ol7WuBy+S41YENAAGQQzBAmbM6CabZmcAFrBNEgPrKLsAJzdZX/+6uP/+827wfTv2//h2NkcZA6DC/srz4OFrRJsMBvCwMDw5EFJ8C0Y6slI0oYgEwGOfPMHogCExeEYchioLA4efMOWC8LNhvWfVgOpo/u2QMXe/nhNcQABlQXMqFrBpneFjIRrgmGQQAkDosJrAb8gsYzsiHiAqIYmmHqsLoABEDhULUmH64ZRIP42KKREV0AFBvImpEByCsgl4BCH0Ny6AIAx42FWaqMeOUAAAAASUVORK5CYII="
        },
        {
            id: "LEVITATION_TRAIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+ElEQVR4nGP8//8/AyWABUQwMjIyZDlY/H/66StRmqT5uBmmHTjBCLKcBSQA0rzhwg0GcV5esAI2Lna44hSPMjD95OkdBhlpFYZp65oZTt97DNYDspsJJAmyGaQZpBFZMwiY6SxG4YPkQWphrmXB51SQ7aeuQAwx02FgSOtZh6GGCdlkXGDdTkuGU1diUVyBYQC5gAmf5JwdXQQNYMEloZx/h+HuRBWEIZdJcEHyDYhmGBsfYMImOFdDBSsbrwG/vv1EsQ3kBVwApBarC+Yi2QbyAiHnww0Ape2Xnz+DTQZh29kQjejOh8mD1IL0gAA4Q1CSmcAEJQAAhNJuGqjKr/YAAAAASUVORK5CYII=",
            name: "Levitation Trail",
            description: "When levitating, you leave a trail of magical sparks that harm passing creatures.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Levitation_Trail",
            ui_name: "$perk_levitation_trail",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4ElEQVR4nGP8//8/AyWAiSLdDAwMLMgcRkZGBkNZWbCT2LjYwWIpHmVg+snTOwwy0ioM09Y1M5x//JgR5nImZANAmkEaYZpBwExnMYqNIDmYJRguQAcg209dgRhipsPAkNazDkMNEzIH2WZksG6nJcOpK7FY1TEx4AFzdnQxEAKMyNFooaEK5yjn32G4O1EFp8YTN24z4nRB8g2EZhCbLBcQAlhdkIxkG8gLuMCvbz/hbCZkielysnA2yAuEnI/hBQYGBgYjObn/zksfMxxOxQxAmM3IKRHDAFIBxZmJYgMAuzhURj+KWxQAAAAASUVORK5CYII="
        },
        {
            id: "VAMPIRISM",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2ElEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAgmAbAZpBmlE1twiLIZiAEwepBbmWiYGCgETsunYALor0NUy4TIZplFZVZU4F2ADMM3YXIHXgBY0DSCDcBnCQsh2CT09hODbV8QbANPMGRgIYYOIE0cZcHrhFzSRwGxH1owOkNWyYFMQeeIow3KYrVDgOGs6VsPABoDS9ul7jxnEoYKgeAYZgu5k5KRsqSwNZlOcmSgGAGYpRHyZapZ7AAAAAElFTkSuQmCC",
            name: "Vampirism",
            description: "You lose 25% maximum health, but can replenish health by drinking blood.\\nBlood doesn't affect satiation level and you no longer suffer from food poisoning.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Vampirism",
            ui_name: "$perk_vampirism",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkUlEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MVwfE7pmkEZkzS3CYnA2TA5mCYYB5AAmZA66s5Ftx6WOiZANyqqqOA3Ca0ALkiZ8hrAQsh0EJPT0IAJvXxHvAhgAaeYMDEQYgs+AX9B4htkO04wOkNWxYDWWgYEh8sRRhuUgF0D5jrOm0yYlMgx9AABoQSVyhYVqTwAAAABJRU5ErkJggg=="
        },
        {
            id: "EXTRA_HP",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8ElEQVR4nGNgoBAwwhj+WRb/nz39SpQmKWluho3TToD1MsI0n152g0GclxesgI2LHavGX99+gumXnz8zmEZpgA1hAQmAbAZpxqURBmDy4lA9IMCCrmiqgjKDkIQEg4SeHoPjrOk4xWCABdl0ZIWcgYEM+xkYGK7t2oUhBjLkH1QfEy7nfl+/HkyDNKOLIQMmdIF3L14wvLh0CcyG0chsZDEMA7If3MUwBBmAvBN54ih+F2QjGYLuMpgcXgPQDYFhbJpRDPgFTSQwgKwBXTOyWhasxuLQiNMFoLQNSp4gk9Fdgm4zCIPUgvSAAMWZiWIAAFragt/wT6byAAAAAElFTkSuQmCC",
            name: "Extra Health (One-off)",
            description: "You gain 50% extra maximum health.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Extra_Health",
            ui_name: "$perk_extra_hp",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqUlEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf9j04jNIJghLNgUTFVQZhCSkGCQ0NNjcJw1HYOPDFiQOSDbkRVzBgYy7GdgYHhx6RIKH9kQJnxO/b5+PV4+TgPevXgBthUEcNE4Dch+cBfDEBi4tmsXQ+SJo4RdkI1kCLKrYOIEDUA3BJdmDAN+QRMKDMA0oWtGVseIbiKpKXEYAADrMV73mFEctwAAAABJRU5ErkJggg=="
        },
        {
            id: "HEARTS_MORE_EXTRA_HP",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEklEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpxqURBmDy4lA9IMCCrmiqgjKDkIQEg4SeHoPjrOk4xWCABdl0ZIWcgYEM+xkYGK7t2oUhhmwIEy7nfl+/HkyDNKOLIQMmdIF3L14wvLh0CcyG0chsZDEMA7If3MUwBATOv3zJIO3vz7B9926GyBNH8bsgG8kQmGb5//8Z2AIDwXSZogp+A9AN8UlLYzDesQPMB9EgPlYDfkETCbohW2bNYjjr4QFmg2gQH1ktE4ouNAAypOv+HYaHjIwMv9avB9MgPjKgOClTnJkoBgBpTI6lyEZRoAAAAABJRU5ErkJggg==",
            name: "Stronger Hearts",
            description: "Hearts bestow more maximum health.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Stronger_Hearts",
            ui_name: "$perk_hearts_more_extra_hp",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5ElEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf9j04jNIJghLNgUTFVQZhCSkGCQ0NNjcJw1HYOPDFiQOSDbkRVzBgYy7GdgYHhx6RIKH9kQJnxO/b5+PV4+TgPevXgBthUEQPT5ly8ZmBUVGbbv3g0Xx2lA9oO7KIaANMv//8/AFhgIpkF8gi7IRjLEJy2NwXjHDjAfRIP4yIARmWOurgJOAzAACtCHjIxgm0Gaz3p4gPld9+8wnLx5hxHDBb+gCQXZJSDNIE2/1q+Ha0ZWx4jufFJT4jAAAM9Gco0iVTnfAAAAAElFTkSuQmCC"
        },
        {
            id: "GLASS_CANNON",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFElEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsE0b7hwg+HR6w8Ms6bYMbz4+h0rBsmB1IDUgvTADXj66SuDOC8vAxsXO4Nf4k6GTfPdwTaduHEbjEEAJAaSA6kBqYW5lgnmrB0r/eBOBClEB8hiyGqZkBXAbIbZjo0NcwmGASAAkwBpqEi0Y4ABEBtmCLrrmGAMmO0g2kJDleHA8edwRSA2SAxZDQwwggh/I93/oFBGBzBbQZrRgQQ3J8PGc5cZMVyAjY9PjhGXC0C2w2xGZuN0wa9vPzFswgZAakBqYYAJxgDFLSyEsRkEEwOpQU4HYC/AkjIohYEAKLVhAzCbX37+zBBgoAHODxRnJooBAIQbpRBaC1BlAAAAAElFTkSuQmCC",
            name: "Glass Cannon",
            description: "Your spells are 5 times as powerful, but your maximum health becomes 50 and cannot be increased by normal hearts.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Glass_Cannon",
            ui_name: "$perk_glass_cannon",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3ElEQVR4nGNgGGjAiC5gKCv7f8dKPwa/xJ0YijfNd2fwCN/EcP7xY7g+JnTNbFzsYM0gxSBw4sZtuGaQOEgepA6rATtW+sHZ6C5A5iOrQwHm6ir/Xx7L/g+iQRgZwMRg8lhdgGwTyOkViXZgNoiGeQXdZUzIHJi/QbSFhirDgePPwXwQDeIjy2ONBXMkp4GAg6UkQ8f8Q2AXwAyDgZM37zBi9cImJNOL0vTANoNobPIY4CVSAMICEZlGDkisYeARvgmnTch8ZHWM6K6AJRJQgkEHv779BNPIKXEYAABII4JlRrq0CAAAAABJRU5ErkJggg=="
        },
        {
            id: "LOW_HP_DAMAGE_BOOST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABD0lEQVR4nKVTMQrCQBDcuwQFgyGVwYj/sPQJlr7Bxiqtha2Vjc8Qn2Ap2KS0shEVrURQUQKRObJyJhcRMnDJZnd2Zo/ciSRJqAxsPIQQNOh2kv319ldTy3VotlwJmNtIoHkRbciv12l6uVAY+MbGyeFEQ8+j9XaneuAtUYAzmiu1qmoGERgfz2pxM2rggMvTSlaHM8M0gZ7TuVInsDO7m2KeJCcAcAEN8zgmBmIWyU4nOWB3vEfNBkXt4ENCjJzOyQmEqXLRHyjiyOwEpu9fNZlVZzyEUGNjITZN8iXwuj9zTiaAA25OYKqdQJMQ58DRz4E6yjjbfcsiP1XObgfb4CkBcHuuo2J1IcpcJvUogzfydpM+OP8OAAAAAABJRU5ErkJggg==",
            name: "Living on the Edge",
            description: "Your spells deal 3x damage when you're under 25 HP or 25% of maximum health.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Living_on_the_Edge",
            ui_name: "$perk_low_hp_damage_boost",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8ElEQVR4nKVTsQrCQAxNrkXBqZNioaPgqJvf4epHOHV1cHXyR/wONx0Fx0JFp06KUqi8g5T0ei72Le/SvLzkjpSrqqIuMJ2qiSjUATPTPEmqfVFQGo9a4l1+p3UU0SnLWCY3WoDi3qBviyEGtrdHXYzvyEPnvcK+KOqzO4GOtc64IumsuwvrSbwGgCRRdChLewaLiTuZ0YF0B2/GQzonsY3BiHVewHoPFtNJYylmWU7LMLQTiJngeLlyawLXfRUEtjPYl/deIVV3fDE32PfQRhtgSX510rHWsX4D2UScsTAuPs+3Zb2JDYN/0Pln6mzwBZCldTFUtwVCAAAAAElFTkSuQmCC"
        },
        {
            id: "RESPAWN",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7ElEQVR4nGNgoBAwwhj+WRb/nz39SpQmKWluho3TToD1MsI0n152g0GclxesgI2LHavGX99+gumXnz8zmEZpgA1hAgmAbAZpBmnEpbl+hQ/DuUePwPIgtTDXMhHjZJBmT4N+rHJMMAayzSANIAwD6JqR1TKhm6hjLQXWAMIgNghYaKjidB0TulPnzD0I54PYIDGYQQQNIAewIHMaI7YwrLU+B3dFSrI9w5Wjz4g3AARAGrZfKISzCQEm9EQCcwkIwwByjIDYyGqZCFpBAIC9AErbpw8+ZhCHCqKnRrCLGLagJmVpaTCb4sxEMQAA1PteIeLJ3H8AAAAASUVORK5CYII=",
            name: "Extra Life (One-off)",
            description: "Upon death you respawn with 100 health.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Extra_Life",
            ui_name: "$perk_respawn",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwklEQVR4nGP8//8/AyWAiSLdDAwMLMgcRkZGBkNZWbCT2LjYMRT/+vYTTJ9//JgR5nIWZAUgzdg0wgBMDmoJI8leSJ9gjCHGhM0GbIpBfHNLQwx1TNhsElfnBisG0TAws+AsVlcxYXNm+6JIMBtEY3M2MmBBFwDZtEH9BlhzZdxyhpc3v+I1gAmbIEjTyePnCWrGMOAXNJ5hLkEGMK+AaGR1jMhJ2UhODm86QLbo3KNHjBgGMJKRElEMIAdQnJkoNgAA7OZRzShybZMAAAAASUVORK5CYII="
        },
        {
            id: "WORM_ATTRACTOR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABe0lEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAgmAbAZpBmlE1nwibgIKDZMHqYW5lgmXM3eopDF8OHYNwxB0wARjoDvb484sMA0yBAQsFhUwYFPLhMsFyIYga8bpAmTAbVoGphllA+GGfGLWRJHDacCJG7cZFuS9YFBOmMfAJaEKpmGaQLSEtgaKISzoBli6ljF8fHaDIT9gAYN1kCzD0TOPGQ5pLwDLgTTf27sZzObF5oITN24zHN/dBWZbm8gy5K+LBtMwTUsrbBmUnH3BLoMBRhDhb6T7/9HrD+DQBfkbBBLM1oI1g13Au4DhxdUbKC4Qf7eDYeO5y4wYXgC54PHpZoaKvQsYVq2DaAJpfn4OohHkAhCf4d0ORBiA0vbpe48ZxBkYGIzk5BgE7WsZvp5OArvm7mmIlxiYNRneH2xmYGCoZbixpQyclOFeAAFyMxPFAAAruZBAXanNGgAAAABJRU5ErkJggg==",
            name: "Worm Attractor",
            description: "Worms find you attractive.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Worm_Attractor",
            ui_name: "$perk_worm_attractor",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJ0lEQVR4nGNgGHTAUFb2Pwibq6v8/9+6BYWGySGrZ0TXzMbFDmbvUEkD0wJWWnB5i0UFYPrXt58M5x8/ButlwuUSjzuzwPSHY9dQNKMDJmQOzHZ0Q9A1I6tjwmYqt2kZxH+ygXBDPjFrosjhNODEjdsMC/JeMCgnzGPgklAF0zBNIFpCWwPFEBZ0Ayxdyxg+PrvBkB+wgME6SJbh6JnHDIe0F4DlQJrv7d2M2wUnbtxmOL67C8y2NpFlyF8XDaZhmpZW2DIoOfuCXYYzGtnVI8DsBLO1YM1gF/AuYHhx9QaKC07s6WbE6oXju7sYHp9uZqjYu4Bh1TqIJpDm5+cgGkEuAPGxuoAB6gpB+1qGr6e7wLHw//F6eCxwfL7AAJLbtyQNQ98QBgBE/HbGFisJwgAAAABJRU5ErkJggg=="
        },
        {
            id: "RADAR_ENEMY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKElEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpRtb4uugdmP5+/TfDBJ0kBmEhIYa3794x9HVvZRCH6gEBFmw2gTSL9gnB+cJ2EDbIEHTABGPAbEfWDGI/8nzJUF25GMyPPdSD4UUmXDbD2HLbxRla22PBYovtSsAGYnUBLoNgmmEAZAhBA2AApBnmfBgAeQPZUCYGLABkO7pTcQEWdI3Ifn+rAwnEAztPwtXIHYCIY7jgFzSRINsOinOQQSAwl/MwXFNH4zrsLmCA2bJdHNUL39UgBjlgqgW7AJS2QckT5AqYS0AaQBiUCnVNVcFiIBokD1IL0gMCFGcmigEA2lGGb4p/2tAAAAAASUVORK5CYII=",
            name: "Enemy Radar",
            description: "You can sense nearby enemies.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Enemy_Radar",
            ui_name: "$perk_radar_enemy",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAElEQVR4nGNgGGjAiC5gKCv7H0R/rPkK5n+//pthgk4Sg7CQEMPbd+8YOhrXMZx//BiujwVdMxsXO8ProncMon1CcHFhOwgbZAhIHqQOZggTuguQNYPYjzxfMlRXLgbzYw/14PeC0kyh/8iaYezW9li4GpAhctvFGU7evIPdBfg0g8BiuxIUPhMDHgDSDHM+sguQDWXCphFkO8jvxAAWdI0w54P8+VYHEogHdp6EqzE7rQAWxxqIhtBoBGkCGQADrg5qDHM5DzMkf7dl2H3gFsOvbz/haYEFm7NAmlG88F0NYqADplomZA7IVJDpIAzSAMKgVKhrqgqWB9HItg8TAABSD3LiPQFR0gAAAABJRU5ErkJggg=="
        },
        {
            id: "FOOD_CLOCK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDElEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAgmAbAZpBmnEptk8Xg1uMAiD1MJcy0SMk08uvMUQ12eHVY4FxsBlM58oxI7nz14xYFPLRMhmgS2BDJJSYgyfXv9jcC3RwO0CbCBUo5KBM+0ow/dZ1gxyDAwMj8zXEmdAmcV8MG3gqsVwYZUaw32GW3AXoQMmbJpFxUXBmp9eeg0WUxSAxAI2wIJN8PXL1wyvd0M0EwJM6Ink/gdMZ4LEVt9oZ0BXi9ULq2+0oxiCrhmrF0Bp+/S9xwziSIZgA8hJ2VJZGsymODNRDAC/G2pF/CgYIgAAAABJRU5ErkJggg==",
            name: "Eat Your Vegetables",
            description: "You inflict more damage the more satiated you are, but you start losing health if your stomach is empty.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Eat_Your_Vegetables",
            ui_name: "$perk_food_clock",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5ElEQVR4nGP8//8/AyWAiSLdDAwMLMgcRkZGBkNZWbCT2LjYMRT/+vYTTJ9//JgR5nImZAUgzSCN6JrN49XANEwOZgnRXji58BZDXJ8dYS+wodnsWqIBZz9/9gqrOiZ8Nu/uucEgsCWQQVJKjOHT638oBmJ1AToI1ahk4Ew7yvB9ljWDHAMDwyPztcQbUGYxn0FUXJRB+n0Aw3qGDfCwQAdMeDXriTJc2H2NQVEAEgvYAAt6PIMC6P4HiE2vd78G0yD+6hvtKOrwumD1jXa4Ieia0QEjcl4gJyWiGEAOoDgzUWwAAMYIWb2GOBUCAAAAAElFTkSuQmCC"
        },
        {
            id: "IRON_STOMACH",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7ElEQVR4nGP8//8/AyWABcbIdrT8//TTV6I0SfNxM0zdf5wRxGYEuQCkecOFGwzivLxgBWxc7Fg1/vr2E0y//PyZIcBAA2wIC0gAZDNIMy6NnbMWgekbN24zzO9rZhCH6kHxAi4A0rx61Wo4P7GolmFmSw2czwJjINsOsxEEkDVjU8uCz0ZdPQMGQoAJXQDkTxi4fOkC2BB8BrEQsgFkCAyADAIFIl4X4ALYNBNtgC4OzShe+PXtJzh0QQpBUYUM0DWDExQ3J6oBDHg04ANgL4DSNih5gkyGJVdsACYPUgvSAwLgvAACFGUmSgAAT2lvTDDng94AAAAASUVORK5CYII=",
            name: "Iron Stomach",
            description: "You no longer suffer from negative effects of eating.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Iron_Stomach",
            ui_name: "$perk_iron_stomach",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtElEQVR4nGP8//8/AyWAiSLdDAwMLOgCRnJyYCexcbFjKP717SeYPvfoESNMjBHZCyDN2DR2zloEpm/cuM0wv68ZbBDMEBZCTgRpXr1qNZyfWFTLMLOlBrsX2KC2w2wEAWTN6OqwuqATyUZdPQPSY+HGjdtw9uVLF8CG4DOIhZANIENgAGQQKBDxugAXwKYZw4Bf0HgmpBlZHSO2dACKKmSAbjNyOmBEzwsUpURyAMWZiWIDAMwOWBaXdue/AAAAAElFTkSuQmCC"
        },
        {
            id: "WAND_RADAR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOUlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHUXD45dvGPovPWco1JMEq3n5+TNDgIEG2BAmkAKQzSAJkEaY5tdF7xgeeb4Ea376/h1YTGrVHbBmkFqYa5mwORGkWbRPiEFuuziDrLgIg7SgEFj8WZgKmI8MmGAMZJtBmkEA5gKh9AUMzVN3gmkQH9mLTNhshrEZFzCDNb2bmQAWA9EwQ2CABZ8XGMQZGB5DNcMAyBBkbzAxEADofv5m/gN7GCADkO0g/2MDnJqsuA0Q7RMCOx8EQDEAMuSmwhMUDSBxrAb8+vYTw3aQYvUHMhiugKnFGYhyUNtB4Pv13wxcLzmwegduAChtn773GBToYACKZ2SnPmZARBvIdlBqtFSWBvMpzkwUAwAawoikkXfOCQAAAABJRU5ErkJggg==",
            name: "Wand Radar",
            description: "You can sense nearby wands.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Wand_Radar",
            ui_name: "$perk_radar_wand",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+0lEQVR4nGNgGGjAiC5gKCv7H0R/rPkK5n+//puBcQEzQ/+l5wyFepIM4ry8DOcfP4brY0LXzMbFDtYs2icExiDNT9+/A8tLrbrD8PLzZ7glGAaAwOuid2CNMPb/hL8M0oIQ/rMwFQZZcREGnF5Qmin0H1kziP345RsGofQFcDXvZiaADTl58w4jVhdg0wzSBAIgGtkwnAbAAMgmmGYYQOczMWABINsfeb6EG4IMvpn/wG2AaJ8Q2PkgILddHGwIzCAYsH+tituAX99+otgOMgSEkcGLr9/B6mCABZsXYLbDACgt4AIsyBxQCoMlEmSbHzO8QXElckocBgAARsZuvgXYENsAAAAASUVORK5CYII="
        },
        {
            id: "ITEM_RADAR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpRtb4uugdmP5+/TcD4wJmuLisuAiDOFQPCDBhswmkWbRPCIzltoOUMzCs3LwZq6uYYAyY7TDNMPYjz5dg9pYtW+CakF3KhM1mZDbMBXJycmAaZiBWA7AZ9PjlG4bY9HS4N5DDA6cBMADTDLJdT08PbghIHK8Bon1CGE69dOkSNqUMTOgaYdEH8/vjx48ZHj16hNMQFuREAgpdmO0wA2CGwADMMAwDGJAASDPIEFCAHdi2DavTUQwApe3T9x6DUxgIgFwCdgHCEXBXggAoKYP0gADFmYliAAAS5oCRFD2mBQAAAABJRU5ErkJggg==",
            name: "Item Radar",
            description: "You can sense nearby items.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Item_Radar",
            ui_name: "$perk_radar_item",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/klEQVR4nKVTMQrCQBDcjaIgpBHEyntCQH+RR1jbW/sG32BrbcBnCGnsc1gExWChohaRXdxjTaKCGQh3e3czO3u3wTzPoQ68WmwAaOoAEWE4GLCl0+zMa9ftA3DRcGf6vg8ba1Gce1qAyK1Om8m9eZc/s+7z3nK14pH2JUllCfvpkYkyT8KU51EUVZbg6UAyayFxYIzhkQTJxUcHRRc2PcB4MnFl6Pv4+Qr2RabsQRA4EVr/KtCbd13tgjiOK5N4RSLZJ0jt1lpIkuSjSFMH98vNZRcBERGImAB1K4+M4T7gg2FaujCNXZZhSQBVJ+qn0g4JuhPfBP5B7Z+ptsATg3Z24m7IrtgAAAAASUVORK5CYII="
        },
        {
            id: "MOON_RADAR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlUlEQVR4nKVTTUsCYRB+XFfzAzWkbVGjSxcJEm8p5SZ1WKJLQYd+Q8d+iMfuRURgUZcIocBISOjSIahThz4Ms4JWdNfPYl7cTUslcC4zzDvP88zszAIDmkkP1uORr2el9C9QwO3EZjrLsCYdfHR9B9HlYgVWx1BXYLVcYT5fLGI5HGQkPCVImcDtwMLGB/PqbY358RPReBdbGDK+mxKBhYS3I/ewmGckv43XA529HUxx5HQedocdYYVDPdLETfayo1O+lzLF0oWMmCxBEEagFjVolQqGPW5kUikDw/UagZRjcQlK4R2h0BTMaGAyGIQkzWFWlvsTkFHbpLyytgq/34fp6Aze8jn4fX543G70JRASXvBmDjabDeVPleXEsVEsLMlwOp2wWizdCYSE11hfvdGEpmkolUrIP70aNQ6PHdVa7S9BtXUkREIro699fpaGWtfQ4BpQFAW53AsO9/ZxuLVjEPDdRqB9E8kutoEDsJmpbVI+TiY7ahkB3fbV/SO7MDLas340GfysrP2UoxMBFg/8Mw1s3+rFnn+9eiI6AAAAAElFTkSuQmCC",
            name: "Moon Radar",
            description: "You can sense lunar energy.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Moon_Radar",
            ui_name: "$perk_radar_moon",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABbElEQVR4nK2Tz0rDQBDGv8S0Nim0UoyhwfZcPOnJiljQHop4Ejz4HJ59hr6DIiJU6UlKQUFRsQfBi+DdSiVWhUbSJP0rO5Cy1VDE+l12Z5n5zczurNDv9zGOxLGi/wMg8YYgCFhIJKinxq5FZ/Zjm9ZkSUOr6dL+vloVvNYlHsCCg8ok6jsfUPOxoUxP6wZBPD+W7weAiQ9m+/TZGmRFxrwpopPu4aFyC14Sb7Cy+eDMVQ4ruQxUdRr2pwPHdTEVjeC6XPYHePIys2Cz/o5sdhV3NxXMpVIE+NUryIpMmTe3t6DrcSwuLePNqEGP64hGIqMBaj4GaUJEKBRCs2HTmTY7g+xGDuFwGMFAwB+g5mNUPlOn24PjOLAsC8bz68BHicpotdv+gFbTJQh7Mnbbl+cXsDsOumIXpmmiVntB8egYxb2D0ZeYLGkEOcQ+cALqmZXNMp8WCkO+g4kig5tENlDf5TeJQ4C/aOzP9AU3EJIBnFDvdgAAAABJRU5ErkJggg=="
        },
        {
            id: "APOTHEOSIS_PLANE_RADAR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABe0lEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpRtb4uugdmP5+/TeYltsuDpcXh+oBARZsNoE0i/YJoYgpp+sz3J15EUMtE4wBMx1ZM4j9yPMlmG30wwjORnYpEy6bYWyQ00EaoxOT4GysLsDnhQTGJAYJCQkGJy9veJjAAAsDHgDS4OrrzyAuJgbmxySnMrxZ+4nh0oPDcDWMIMLfSPf/i6/f4TaraeswqPjpMtjKOTJoamqCbUcGjx49Yrh79y6Dk5MTI4oB6M4H+ddHMITBVNSEITUzi2H//v0MuzdvBMtdO7iPYeO5y5B0AEskoNAFaQZpBAUYCF9iOMwg4sXH8OLFC7Dmfdu2gtXKiQrgDgM5pNAGBdrNazMZXK/7Yw0nsAGgtH363mNwCgMBkEtAhiADZNtBSdlSWRoRiCBAKDPJa2gyPLxxHcxGzkwUAwCKiKiyugl/LwAAAABJRU5ErkJggg==",
            name: "Divine Radar",
            description: "You can sense otherworldy energy somewhere in the world.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Divine_Radar",
            ui_name: "$perk_apotheosis_plane_radar",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABC0lEQVR4nGNgGPKAEV3AUFb2P4j+WPMVzP9+/TeYltsuzvDr208w+/zjx4xYDTCUlf3PxsXO8LroHYNonxCKwY88X4INAQGQQTBDmNBdgKwZxAZpNLWxBWsGsdEBEzIH5GxkzSA2SKOorQzcGyBDQK7EagAMoHshzT0Lq+04DYABJy9vhnlrNzBISEgw7Mo8yoANsGATtN5px6BSqctgK+fIoKWtDRbTUdNlWLVrL8Pdu3cZ5j+axHDy5h1MjebqKv+VZgr9B9EgLFnA+3/yign/QaCyMB/Mh8nhjcZHSFEGAu3TZzFEb/LHGo0s2LyAHmVrri9DMRAZ4EyJyFGlpq3DcOvqFawpceABAN+ne2WpMlPIAAAAAElFTkSuQmCC"
        },
        {
            id: "MAP",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGklEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpRtb4uugdmP5+/TeYltsuDpcXh+oBARZsNoE0i/YJoYg98nwJNgQdMMEYMNORNYPYII0wF8DYyC5lwmUzjI2sEZmN1QBcXsCmEa8B2MCp7DNgGj0cmLApBtkOiwUQWLNlK0OIjzdDfkkphlomXBphXoBpBoGJPd0MPgEB2A34BU0kII0w/yJrhoEtGzYwSIpLwfksyJJy8vIMeoaGDMoqqgy22Q4YmmHg4f37DHKiAggDQGn79L3HDAzXbzHcuX4LHM8g56ID5KRsqSwNZlOcmSgGAGB6fVSuzbE1AAAAAElFTkSuQmCC",
            name: "Spatial Awareness",
            description: "If you stop for a moment, you can sense your location relative to the Mountain.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Spatial_Awareness",
            ui_name: "$perk_map",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2ElEQVR4nGNgGGjAiC5gKCv7H0SzcbEzvC56Bxb7fv03mJZYKwCmzz9+zIjVAENZ2f8gjSAA0izaJ4Ri+CPPlwxy28UZfn37CTeECZuzkDWD2CCNIADSDGPDABMyB+ZsZM0gNrJGEPtF8AfsBiADdC9gsx2vAdjAqewzcMMIGiDaJwSPBRBYs2UrQ4iPN0N+SSmKOkZkjrm6yn9szodphgGfgACG2s4eRrzR+AgaZeiaQQA5GlnQnS4nL8+gZ2jIoKyiymCb7YChmaSUyIAGQDaDAHJKHAYAAJwQXxGsBTK0AAAAAElFTkSuQmCC"
        },
        {
            id: "PROTECTION_FIRE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABI0lEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpVgruYBCVkINrOD8/EUwbJs6Hi71+8YiBYW0FWA8IsCDbANJ89tB6OF/OsxFMI4sZ2wUy3EPSwwJjoDt7g+puhoBb2MMAWS0TdiUMDIJGenCD8AEWfJIHw18yMDDoMTDcxq2GCZkDDiAkwOnuBMbIrkBXw4TMebK9nkFOzRjMfn/uEoZ3QHIgNTgNQAYBt10ZnrVPYPi+cx+D/UpxBlyACT2RILsCZAhMM7LtMLU4A/EJyBDPRniiAvkb3ekoBoDS9ul7jxlgDgXFM0jDEzTFyEnZUlkazKY4M1EMAHbIcQcRLvSuAAAAAElFTkSuQmCC",
            name: "Fire Immunity",
            description: "You take no damage from fire.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Fire_Immunity",
            ui_name: "$perk_protection_fire",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9UlEQVR4nGP8//8/AyWAiSLdDAwMLMgcRkZGBkNZWbCT2LjYMRT/+vYTTJ9//JgR5nIWZAUgzUrBHQyiEnI4bXz94hEDw9oKkG5GDANAAKT57KH1YPYG1d0MAbddGZCBsV0gwz1cYcCG5mxBIz24QbjUsTAQAAfDXzIwMOgxMNwmMhZeg/yIBDjdncAY5gp0eSZ0A55sr2eQUzMGs9+fu4TiHZA4SB6vAcgAFIDP2icwfN+5j8F+pTgDNsCInBKN5OT+wwJIxrOR4dGts3A5ZNtB6eHco0fYoxHFK56N4GgF+Rvd6VhdwEhGSkQxgBxAcWai2AAA+jBgP7xVFM8AAAAASUVORK5CYII="
        },
        {
            id: "PROTECTION_RADIOACTIVITY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRklEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpVgruYBCVkINrOD8/EUwbJs6Hi71+8YiBYW0FWA8IsCDbANJ89tB6OF/OsxFMI4sZ2wUy3EPSwwJjoDs7s/ELg5bKF4bc6JsYXkFWy4TNryDNxzc+ZtATCGaYvFQda3jgNeDh9bcMj66/Z8ivjWW4ducs8Qa8BgUQAwPDthXyDBb+0gyW/rIMKzsugV0EcwlMDQywIHOebK8HB9yjW2fBhkCAFcPD6w9BQckgp2YPVkPQCzDgFfEQ7qLp9TwM2AATeiIBu0LNGK4RBkBiMNthajG8wAAFMK/AEhXI3+hORzEAlLZP33vMIA4VBMUzSMMTNMXISdlSWRrMpjgzUQwA60qECjhw/wUAAAAASUVORK5CYII=",
            name: "Toxic Immunity",
            description: "You take no damage from toxic sludge and other toxic things.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Toxic_Immunity",
            ui_name: "$perk_protection_radioactivity",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEUlEQVR4nGP8//8/AyWAiSLdDAwMLMgcRkZGBkNZWbCT2LjYMRT/+vYTTJ9//JgR5nIWZAUgzUrBHQyiEnI4bXz94hEDw9oKkG5GDAPYuNjBms8eWg/mZzZ+YdBSMWbIjb4JV2NsF8jwBMl1TLhsAmk+vvExg55AMMPkpeo4XcSES+Lh9bcMj66/Z8ivjWW4ducs8Qa8BvmRgYFh2wp5Bgt/aQZLf1mGlR2XwC4CuQQmDwMs6AY82V7PIOfZyPDo1lmwIRBgxfDw+kMGBoazDE+27yPOCzDgFfEQ7qKtS+0Z0AETtngGu0LNGK4RBEB8kDiyOqxeQPcKKFpB/oZpRgeMyHmBnJSIYgA5gOLMRLEBAKwbb9WIxepRAAAAAElFTkSuQmCC"
        },
        {
            id: "PROTECTION_EXPLOSION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXElEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpVgruYBCVkINrOD8/EUwbJs6Hi71+8YiBYW0FWA8IsCDbANJ89tB6OF/OsxFMw8TWBm9laGOYw3APSQ8TjAFzNkgRDDy6dRaMQWBb+zuG4LXeGF5kQvcnTBFIwzzxhXD29zPHsYYLEzZBkEaQBokCX4ZT63PAbJDBMANxGvAaFEAMDAxJL+MZPh55wyCiUQfmc5pYwsVharAa8GR7PYOcmjGYDbL9zY0mMBvkApA3QHIgNciABZsXZrsdZvCqtAWz1wZ7QsJlLQODnBqeMPgFTSQgG5ofFMAVgLwCAsi2w9TidMETkFc8G8HpYipDIIMc/yMMp6MYAErbp+89ZhCHCoLiGaThCZpi5KRsqSwNZlOcmSgGAMIblDaZDLgeAAAAAElFTkSuQmCC",
            name: "Explosion Immunity",
            description: "You take no direct damage from explosions.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Explosion_Immunity",
            ui_name: "$perk_protection_explosion",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFUlEQVR4nGP8//8/AyWAiSLdDAwMLMgcRkZGBkNZWbCT2LjYMRT/+vYTTJ9//JgR5nIWZAUgzUrBHQyiEnI4bXz94hEDw9oKkG5GDANAAKS5SjSFIXitNwMy2Nb+juH7meMMbQxzGO7hCgM2qLNBmkEa5okvRNEMMxTZe0wMOABIg0SBL8Op9TlwzTADkQETVj8yMDB8PPKGQUSjDszmNLEE00kv4+HyOA14sr2eQU7NmIHfRoThzY0muGtA3gCJg+SRAQsuL4Bs9aoUYlgb7Anx+1oGBjk1THVM2OIZZEvGfFcUhci2w9SBACNyUjaSk/uPHMIyno3gaAX5G9npIAPOPXrEiGEAIxkpEcUAcgDFmYliAwDzw3tGQ4hFQgAAAABJRU5ErkJggg=="
        },
        {
            id: "PROTECTION_MELEE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpVgruYBCVkINrOD8/EUwbJs6Hi71+8YiBYW0FWA8IsCDbANJ89tB6OF/OsxFMI4sZ2wUy3EPSwwRjYHP2o1tnwRgETm3tZcCmlomBCFC0uZfBzLsYqxwTLk3Ftu/gmvt8sWvGCIPXoACCgt7DQgyHGn4z2KFpRlaD4YIn2+sZ5NSMweww7VcMdg2scJeAAEgOpIYoL6y6KgZ3CT7AhJ5IkF2BDJBth6nFCAMGZK94NsITFcjf6E5HMQCUtk/fe8wgDhUExTNIwxM0xchJ2VJZGsymODNRDAC6h3QFE6iAQAAAAABJRU5ErkJggg==",
            name: "Melee Immunity",
            description: "You take no damage from close-range enemy attacks.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Melee_Immunity",
            ui_name: "$perk_protection_melee",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6ElEQVR4nGP8//8/AyWAiSLdDAwMLMgcRkZGBkNZWbCT2LjYMRT/+vYTTJ9//JgR5nIWZAUgzUrBHQyiEnI4bXz94hEDw9oKkG5GDANAAKT57KH1DOjg1NZeBjPvYgZju0CGe7jCgA2Ls0GgaDNEMzZ1TFh1MDAwFNu+g2vu80VoRgcsWP3IwMDQe1iI4VDDbwY7NM0weZwueLK9nkFOzZghTPsVg10DK9wlIAASB8njNQAGVl0Vg7sEH2DCFs8wVyADZNth6rCGAQyADfFsBEcryN/oTocBRuS8QE5KRDGAHEBxZqLYAADnyVxC6d0v1wAAAABJRU5ErkJggg=="
        },
        {
            id: "PROTECTION_ELECTRICITY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABWElEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpVgruYBCVkINrOD8/EUwbJs6Hi71+8YiBYW0FWA8IsCDbANJ89tB6OF/OsxFMI4sZ2wUy3EPSwwRjwJytEBHOULS5F8x+dOssQ0hvFJh9amsvWA7di0zo/nywYiVDn28x3BAQG6TZzLsYLIcOmNAFYBrXLT0FZoM0r/gHkYO5AKcBr188AtsIUhgUbcYQwcQA1gxzEcgF4EDEZcCT7fUMcmrGYM0gTSDNIJfAXASSA6nB6wUQAGmG0atizcBsbP5HicZf336CQxfsCs9GBiYjFbBLQIEHAsi2gxMUNyeqAQxIAKRQhqGR4eCzX+B4B/kb3ekoLgCl7dP3HjOIQwVhLnmCphg5KVsqS4PZFGcmigEAPEqW+WNu5VEAAAAASUVORK5CYII=",
            name: "Electricity Immunity",
            description: "You take no damage from electric shocks.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Electricity_Immunity",
            ui_name: "$perk_protection_electricity",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/klEQVR4nGP8//8/AyWAiSLdDAwMLMgcRkZGBkNZWbCT2LjYMRT/+vYTTJ9//JgR5nIWZAUgzUrBHQyiEnI4bXz94hEDw9oKkG5GrF4QlZBjeCvFxnD20HowhrGnl9uAaXTDmZA5MGc/WLGSoWhzL5x9amsvg5l3MYNCRDiKOgwvwABI87qlp8B0BBMDw4p/DDgBEzY/9vkWMwRFm8E1g/ggw0CuAYcBPgOebK9nkFMzBmsCaQa5BARANEgcJI/XAGQAMmRVrBmYDbIdG2DCFs8wV4ACDeZ/ZNth6nAGIgiAFMswNDIcfPYLq9NhgBE5L5CTElEMIAdQnJkoNgAAzVR4VwK79IAAAAAASUVORK5CYII="
        },
        {
            id: "APOTHEOSIS_ALCOHOL_IMMUNITY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPElEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpVgruYBCVkINrOD8/EUwbJs6Hi71+8YiBYW0FWA8IsCDbANJ89tB6OF/OsxFMI4sZ2wUy3EPSwwJjYHO24p1SMP2IIQJFHFktEwMeYKLIypDprYRPCQNeA0y1ZPFqxjDgNSiAoMCeaQXD6WuPGZQsVRlOtb3HqgYjEJ9srwcH3KNbZxlOyisz3JDgZ9h4+gdcXk7NGKwGpwHIwPzhXQYTJlYGUyGINyIYJBnweuEXNJGAXaFmDGafuf8b7A1022FqcbrgCUihZzc4XRxgYGBYffMRhtNRDACl7dP3HjOIQwVB8QzS8ARNMXJStlSWBrMpzkwUAwD/B3TPDzVffwAAAABJRU5ErkJggg==",
            name: "Alcohol Immunity",
            description: "You take no effect to being drunk.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Alcohol_Immunity",
            ui_name: "$perk_apotheosis_alcohol_immunity",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1ElEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MVwfC7pmpeAOBlEJOZw2vn7xiIFhbcV/mCEs6ApAms8eWg/n2zOtYDj4LwLON7YLZLiHpJ4JWTM2Z5sosmKIIatjYiAATLVk8cozYfUjkvNPX3vMcKrtPVZ5rAY82V7PIKdmDGaflFdmWCKhyxB1+geYDxIHySMDFnzOM394l8GEiZXBVEiWIYJBkrAXfkHjGdkVZ+7/BnsD2XaYOrwueAJS7NkNjtbVLx5hOJ1qKZFh6AMAfNFPn19AcJgAAAAASUVORK5CYII="
        },
        {
            id: "APOTHEOSIS_TRIP_IMMUNITY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOUlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpVgruYBCVkINrOD8/EUwbJs6Hi71+8YiBYW0FWA8IsCDbANJ89tB6OF/OsxFMI4sZ2wUy3EPSwwJjoDu7sLIXzl63Q53h4fllDNjUsmDzK0jz3ssIPr+0MYM8AwOKITDAhM0AZM3IhmADLMgccAAxMDBc2lIMpiX4OcD0i48/MNRgdcGT7fUMcmoIm/ISQxncXL3gfJAcSA1BL5ACGEGEv5Hu/0evP8BDV8azkeHRrbMoCpFtByUoOVEBho3nLkMSEjoAe8WzEZ6oQP5GdzoMgA0Ape3T9x4ziEMFQS4BaXiCphg5KVsqSyO8AALkZiaKAQAT73NkUH7cYQAAAABJRU5ErkJggg==",
            name: "Shift Immunity",
            description: "The world is set in stone and can not be shifted so long as you live.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Shift_Immunity",
            ui_name: "$perk_apotheosis_trip_immunity",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1ElEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MVwfC7pmpeAOBlEJOZw2vn7xiIFhbcV/mCEs6ApAms8eWo/TAGO7QIZ7SHwWZEl0ZxdW9oLpdTvOMjw8vwyrOhZcNoE0770MYfNLGzPIMzCgGAIDTFj9yMAA1wwDIEOQ5bHGgrm6CjgGZDwbGR7dOgsWk+DnYHjx8QeYLadmzPBkez2YffLmHUasLkAHbq5eDPgAE7Z4BtkCsg0ZINsOU4dhADKAGXL11X8UzVRPiQxDHwAAANRQbc/09EQAAAAASUVORK5CYII="
        },
        {
            id: "TELEPORTITIS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA60lEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpxqURBmDy4lA9IMCETWFUYhIK/8SN2zgNZUI3nRiArJYRRPgb6f7XtLFnkJSSQlGYV16JodlCQxVMS3BzMmw8d5kR7gKQ5mXz56FohilG1ozuHSYY4/mzZygSkzrbsTof3VAmbIqQXYJNE0EDSAFMMMaPL9+I1gRLUCix8Oj1B6KjEmSAnKgAIhZAaRuUPEESyKZj0wjCILUgPXAXgAC5mYliAACzBlu4aXKpzAAAAABJRU5ErkJggg==",
            name: "Teleportitis",
            description: "You take 20% less damage. You teleport away every time you're hurt.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Teleportitis",
            ui_name: "$perk_teleportitis",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuklEQVR4nGP8//8/AyWAiSLdDAwMLMgcRkZGBkNZWbCT2LjYMRT/+vYTTJ9//JgR5nIWZAUgzdg0wgBMDmoJI4YX3AP94eyoxCQ4+8SN29QNAzYkV7KgS+KyGca20FDF7QJJKSmG58+egdl55ZUMkzrbURSDNKN7hwmZA9MMAuiakQ3BacD+nTvg7GXz5+HUhNOAX9B4JgSQ1TEiJ2UjOTm86QDZgHOPHjFiGMBIRkpEMYAcQHFmotgAAKXiTYz0PCEAAAAAAElFTkSuQmCC"
        },
        {
            id: "TELEPORTITIS_DODGE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDklEQVR4nGP8//8/AyWABUQwMjIyZDlY/H/66StRmqT5uBmmHTjBCLKcBSQA0rzhwg0GcV5ehnOPHjFYaKhi1fjr208wffreY7AekN0sIAGQzU/fv4crPHHjNphGN4iNix1Mi0P1gAATTNJITg5FMUgzzCB8gAnGCIiKQJHwCgjE6RWYS1AM2LZhPZjub2uB80GGEO0CETExFAkQH2YoUQa8efUKTO/dsR3ORzcUrwHIzofRIENAAYkvMFnQBWAuwQaQDQow1gPTjKDUFGCs9//F1+9gJ8Ocjs8gUIKSExVg2HD2EiPcC7BURioAGwBK2y8/f2Z49uAx2CBctoPkQBikFqQH7gVKMhOYoAQAAK8yiYeZhI30AAAAAElFTkSuQmCC",
            name: "Teleportitis Dodge",
            description: "You teleport a short distance away when an enemy projectile is near.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Teleportitis_Dodge",
            ui_name: "$perk_teleportitis_dodge",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABemlDQ1BJQ0MgUHJvZmlsZQAAeJx1kc9LAkEUx7/+CIOEOnTwEOHBosAilCCik4FeKkQNKjq0u7oa7Ooyu+Kha9BV6BB16dc/0KmuQV07BUUg/Q1B1CVk+45WSugb3s5nvvvem5k3gHfH0EzbPweYZUdkUonwxuZWONBA8Hcomm2tZpM59LXPJ3jk/Dgja/WP62lD+YKtAZ5BsqFZwiHTsVhzLMlX5FGtpOTJ9+So4AHJb1JXW+z1Sy62OSRZ5DLL5Ch5pNjFahdrJWGSl8gR06hqP+eRNwkWyutZzmn6GIpQYHIoCCOGWXoYU8iiCgsFCEatIUUtyQiV611oJIf/8lTTVCrQqRpUptnn3nuNt/bSUWa0aGXarTwHNVYTzKXJt/nfc1uPx9rVgglg4NV13yeAwCHQrLvu17nrNi8AXwO4LXfyK2fAwgf1ekeLnALD+8D1XUdTj4CbAyD0YilC+Xs1b3y+3T+aT34un4HcHrDyAByfAJM6a21/A62UaO0lqHqEAAAA10lEQVR4nGP8//8/AyWAiSLdDAwMLMgcRkZGBkNZWbCTzj16xGChoYqi+Ne3n2D6/OPHjDCXMyJ7wUhO7j9IIzrAZtC5R48YsXrBAk0xiH/ixm2cXmBC5rBxsTN4BQSiKADx0Q0FqcNqgFdAIMO2DevB7P62FjAN4qMbitMF2zasZxARE0NRAOLDDCUYCyJiYgxvXr0C2753x3awGIgPEt9y6CiYj+4dJmQOSDE2gC6OHKiM6NEICiCYS2A0OsAbjaQCRmQXIKdE5KiCAYIpkRxAsRcoNgAAjLdj4oH92s0AAAAASUVORK5CYII="
        },
        {
            id: "STAINLESS_ARMOUR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKklEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpxqURBmDy4lA9IMCCrMAsroRBUlaSwd5El6Eo0A1Fc9/6XQwHz1xmeP74OcORGa1wcRZk0598/M3AwPCc4SCSBhAAGQjTDFKD7FJGEOFvpPv/xdfvYAEp/3wGGX5WMBvkGhAAaQQBkOZnGyeC2RLcnAwbz12GhAEyACvwzwezj14+Cqbl5WQRcmiABVtgPXz0GEUjjA9xFxEGWOsqwZ2P7P9T5zHVMmEzAORXmL+RAw8bYEJPJDC/wgyBaUb2P7JaFqzGQg15hksS3QWgtA1KniCTkU1HBzB5kFqQHhCgODNRDADNCJttczxcNgAAAABJRU5ErkJggg==",
            name: "Stainless Armour",
            description: "You take 50% less damage as long as you have no active stain status effect.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Stainless_Armour",
            ui_name: "$perk_stainless_armour",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVR4nGP8//8/AyWAiSLdDAwMLMgcRkZGBkNZWbCT2LjYMRT/+vYTTJ9//JgR5nIWZAUgzdg0wgBMDmoJI4YBIGAWV8IgKSvJYG+iy1AU6MYAA33rdzEcPHOZ4fnj5wxHZrTCxVnQbXjy8TcDA8NzhoNImkCGwTSD5JFdyYgcCxYaqmCOlH8+gww/K1gM5BqQRhAAaX62cSKYfeLGbUacsfBs40SwYhBes+0onA3TjAxYGHCAh48eg2l5OVk4G+ImIg2Ql5MFewPkBRANdsF5THVM2OIZ2RuwgEN2PrI6FlwugBnyDJ8C9FhgJCMlohhADqA4M1FsAAChon/6f0KgUgAAAABJRU5ErkJggg=="
        },
        {
            id: "EDIT_WANDS_EVERYWHERE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5klEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpxqURBmDy4lA9IMDEQCFgQjedGICslomQYtWWQ8S5ABe4XWMHN+TEjVv4DVBtOcTAkryI4YmSBwp9//4DhqLdlxlWPf4JppEBI4jwN9L9/+Lrd5yuABkMcsnfyScYmHMtwGIS3JwMG89dZiQqDECaQQCmGasXfkETCbYwQAfIapkIuYAQABsAStug5AkyGZdLYDaDMEgtSA8IUJyZKAYA7ApiO00dh5IAAAAASUVORK5CYII=",
            name: "Tinker With Wands Everywhere",
            description: "A divine blessing allows you to tinker with wands everywhere.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Tinker_with_Wands_Everywhere",
            ui_name: "$perk_edit_wands_everywhere",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnElEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf9j04jNIJghTAwUAiZkDjbbVVsOYYghq2MiZMPtGju4ISdu3MLvAhAAKWZJXsTwRMkDTt+//4ChaPdlhlWPf4JpZMCIzDFXVwHHADZDQS75O/kEA3OuBVjs5M07xAWiKlQzCMA043SB4UBEIyO6AKkpcRgAAIc9QApPbbPIAAAAAElFTkSuQmCC"
        },
        {
            id: "NO_WAND_EDITING",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEUlEQVR4nGP8//8/AyWABUQwMjIyZDlY/H/66StRmqT5uBmmHTjBCLKcBSQA0rzhwg0GcV5esAI2LnasGn99+wmmT997DNYDspsFJACyGaQZl0YYgMmLQ/XAvYAL9IuAlEJA4ZuXWNWwwBjotoM0I2tC5iOrZSJks2rLIbgLkMVxGtCPZBOIfbvGDm6I5ZHDGIYwIXNgCp8oeTCU+nfDDbl//wFD0e7LDKseQ2IBpwG3a+zAtMy9HQx/5sbBXdK9sZShz1WXofvGV8JeKETz67SC1XCXTGr0x4gNJvREgm4IyFUwTTAaWS0LhptwuARvOgClbVDyhCmHxTO6JpjNLz9/ZrBUlgazwRmCkswEJigBAI6th7IrBZnsAAAAAElFTkSuQmCC",
            name: "No Wand Tinkering",
            description: "Wands cannot be tinkered with, but enemies may drop blood money.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/No_Wand_Tinkering",
            ui_name: "$perk_no_wand_editing",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2ElEQVR4nGP8//8/AyWAiSLdDAwMLOgCRnJyYCexcbFjKP717SeYPvfoESNMjBHZCyDNyBr7RcTh7MI3L1EMghnCgstpIM3ImtD5WMOADWo7ss2qLYfgLoCJI7uSCZ/NIPbtGju4IZZHDqMYjtUAEGBJXsQQymcIZoM03L//gKFo92WGVY8hgUjQgD9z4xhk7u2Au6R7YylDn6suQ/eNr4QNKETyKwhMK1gNd8mkRn+MgGTCFs/IhoDCAKYJRsPUgb3LgAOguwRbFGIkJAZKUyI5gOLMRLEBAN3ral1zLj1gAAAAAElFTkSuQmCC"
        },
        {
            id: "WAND_EXPERIMENTER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHUwLdLEzfCj7Cdf46xuE/fLzZ4YAAw2wIUwgAZDNIM0gjTDNIODk4IxiM0wepBbmWiZsTgTZHHTKiyGczwZMg/i4AAuy6TAAcvY6hm0MDKcYGNaZbcPQhKyWCV9g7TuwF580YQM+IAUgWQYU7b5MvgEnbtwC038nnyDPAAsNNTDNnGtBnAG/oIkEBlRbDjFMWnEeTKMDZLVM2EwFabpdY8fwYP8yMI3NEBQDQGkblDxBJoMwSBMIKDhGgWkYHyYPUgvSAwIUZyaKAQBUv2VaYN3WYwAAAABJRU5ErkJggg==",
            name: "Wand Experimenter",
            description: "Firing newly found and unmodified wands heals you.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Wand_Experimenter",
            ui_name: "$perk_wand_experimenter",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1UlEQVR4nGP8//8/AyWAiSLdDAwMLOgCRnJyYCexcbGD+QJd7Awfyn6C2b++Qehzjx4xYnWBkZzcf5BGmGYQcHJwhrNhcjBL8HpBoIudIeiUF0M4nw2YBvEJeoENyWaQs9cxbGNgOMXAsM5sGwMudUwMBMC+A3vxyjMRMgAWgGQbULT7MvkGnLhxC0z/nXyCOAN+QeMZBiw01MA0c64FAy51TPhcoNpyiGHSivNgGif4//8/CjaUlf0PwjGrn/03V1f5L+2ZA6ZBfJgcsnrGAc9MFBsAAG52W6GTOdtiAAAAAElFTkSuQmCC"
        },
        {
            id: "ADVENTURER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMklEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpxqURBmDy4lA9IMCES7GhgxNDSEo6nB2QkAym0QELuumWhvwMP/iNGc4f2AfGIE2Hrr1j+HzoEoNnXDmDoQMDWBwGmNBNBGl+cnUvnC+voMjw+c0TMHv7ok4wHxkwoTsbZPrr14xgl4DAwwf3GXhFZMBsEA3iY/UCCCirqMKdd/z8R7Ah8uzXGBi0tBjkFYzBmpGdj2HAmjkzUSTlxTgZHr76znD+/D6G8wzYARMOcYYIdwmGFTtfwF3CQMiAX9BEgqwZBtANQVbLhM1UZM3IhuB0AShtg5InyGRk09EBTB6kFqQHBCjOTBQDAIM5hloVH/mvAAAAAElFTkSuQmCC",
            name: "Healthy Exploration",
            description: "Every time you visit a new area, you regain 60 health.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Healthy_Exploration",
            ui_name: "$perk_adventurer",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAUlEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MVwfC7pmZI2GDk4MyiqqDGvmzASz5RUUGR4+uM/AsG37f5ghjNgMsDTkZ/jBb8xw/sA+uEGHrr1j+PzmCYNnXDkD04PtDDNmzgLrZUI2AGY7SPOTq3vh4iCbQZpBYPuiTjAfBpgwwsDBCWzz69eMYJeAAMjZvCIyYDaIBnsDWxiAAMjPMKcfP/8RbIg8+zUGBi0tBnkFY7BmmDxWA9bMmYnClxfjZHj46jvD+fP7GM6jK8bmBWQQ4S7BsGLnC7hLGAgZ8Asaz8iaYQDZEGR1jPjSAS4AMgBrOmAgIyUOAwAA0W9sy/rdL/sAAAAASUVORK5CYII="
        },
        {
            id: "ABILITY_ACTIONS_MATERIALIZED",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPElEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbI61NGB4+vkbgzQvF8O3Hz8ZuDjY8fIfffwCNowFZvquK3cZ3HSUGQ7cewK30UFJBisf5BI5UQGwGBNMEuRskMnIABcf2YssyApAzoSBFVkuYPrrs3sMyRvuYchjGOCgJAP2I4iG26zJwLB4xy8GMylReBjA5DHC4ADUr7dfv0PYPO0ew4rJLgwRuXvgNsLkJbg5UcMAHcCcDdIMMgQZBHqaYQ8DXABkiJCFJ5itz/SAYf32U5gu+AVNJNgASLOUgjKYfeQ9P4paJpy60MCzB3cZPn98jyEONgCUtkHJE2QyNpe8O7Edrvnr2YNgtSA9IEBxZqIYAAA9AaBNnpVSSwAAAABJRU5ErkJggg==",
            name: "Bombs Materialized",
            description: "Bomb-like spells can be placed in the ITEMS space in inventory and used like throwable items.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Bombs_Materialized",
            ui_name: "$perk_ability_actions_materialized",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA70lEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWA8o9Hf4//fyNQZqXC8zHx15y5BRYLwuyAbuu3GVw01FmOHDvCZjvoCSDkw0DLMgGIDt7RZYLmI59xsaQvOEezjBgQeaATAY5D26DJgPD4h2/GMykRFHEQWysBhyAOvH263cQm6fdY1gx2YUhIncPXBwdMOFyGszZIM0gQ5BBoKcZA9ZYMFdXAUchNiBk4Qmm9ZkeMOw/dp3h5M07jBgu+AWNZ2yapRSUwewj7/lR1DExEAmePbjL8Pnje/JTIqumBZj+evYgSkocBgAAc79lTs13U8AAAAAASUVORK5CYII="
        },
        {
            id: "PROJECTILE_HOMING",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7ElEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LnWGBpw9DwvYtKBp/ffsJpl9+/swQYKABNoQFJACyGaQZpHGKrAJcA4yd8/gB3GAQEIfqAQEmbE6EaYDR+AALjAFzNggs0NEBOx+dj6wWBpiQTQMp+nLlClwzMv/EjVtYXcCETRDmd+TwsNBQA9PoBrGga4b5G+RsbGEAMwirC04gmY4ehbjUMWEzHZd/sbmCCT2RYHMmuu3IapmIcSYu2+EGgNI2KHmCTIaZju4dmM0gDFIL0gMCFGcmigEANA98R66UuPsAAAAASUVORK5CYII=",
            name: "Homing Shots",
            description: "Your spells home towards enemies very slightly.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Homing_Shots",
            ui_name: "$perk_projectile_homing",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR4nGNgGGjAiMyREhD4L87LC2azcbFj1fDr20+Gl58/Mzz78AGslwlZEqQZpBGmeYGnD4YBIDmYJRgGIIMpsgooNC7AhMxBtplHR4chYfsWMI3uEmTvMSJLmKur/Ed2AUjzlytXGHIeP8Cw+eTNO5hhgAxgmmD0iRu3GLABJgY8AOQFGLDQUMNqCBMDCQBkCF4Dfn37idOpyOIgdThdYAG1BaYBRmOzneSU+AtqM3JKHAYAACxhQ6zSesf7AAAAAElFTkSuQmCC"
        },
        {
            id: "PROJECTILE_HOMING_SHOOTER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDUlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHUOTl24jw4aTFWD2y8+fGQIMNMCGMIEEQDaDNIM04tJ89PZmhgDzDrA8SC3MtUzEOPnl1/sM1x6dBdPogAnGwGYzDIhzKzL4WcSDaXS1TLg0nbhxG0wbKyXADUHmwwALNo0WGqpgDFJ89t4ChrAwCbj8tlUvwOJPX67EboCFhiqcDdIMAl+uZ4JpSBgsAItLcHNieuEE1NnoAKQRWwBiGGCBZDsMoPsZZxj8+vaT4dyjRxiGwLyBDEBqGbB5wQKLCwgBsAGgtA1KniCTcYUDzGYQBqkF6QEBijMTxQAA5bxx+z7GbHIAAAAASUVORK5CYII=",
            name: "Boomerang Spells",
            description: "Your spells arc towards you, but gain extra speed and deal extra damage.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Boomerang_Spells",
            ui_name: "$perk_projectile_homing_shooter",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyElEQVR4nGNgGGjAiC5gKCv7H0SzcbGjiHvpNjJsOFkBZp9//BiujwldM0gjNs1Hb29mCDDvAMvBLMEwABd4+fU+w7VHZ8E0OmBC5qDbDAPi3IoMfhbxYBpdHRMuW0/cuA2mjZUS4IYg83EacAKq0UJDFaz47L0FDDya0+EYxEc2hBFZs7m6Cjxw0AMRBEBhADIABE7evMOI4YITUNvRAUgjtgDEMMBITg5DAbqfQfxf337C+SwMBADMyRSnRAYGBrjNyClxGAAAuPxHrhce+qcAAAAASUVORK5CYII="
        },
        {
            id: "UNLIMITED_SPELLS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9UlEQVR4nGP8//8/AyWABUQwMjIyZDlY/H/66StRmqT5uBmmHTjBCLKcBSQA0rzhwg0GcV5esAI2LnasGn99+wmmT997DNYDspsFJACyGaQZpPHEjdtgRRYaqnCN6GLiUD0gwIRsA0ghSBEIwzRhE0MGTDAGurNhGpBdgk0tE66AgmnGZisyYMFmK7J/sYnhNABdUdHuywx9rrpYNRLhhVtg+u/kEzg14zXAQkMNTDPnWhBnwC9oIoEB1ZZDDJNWnAfT6ABZLQsuk2/X2DE8UfJg+DN3B2EXgNL2y8+fwSajuwTdZhAGqQXpAQFwhqAkM4EJSgAAtm98wbzFBDkAAAAASUVORK5CYII=",
            name: "Unlimited Spells",
            description: "Most spells are now unlimited.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Unlimited_Spells",
            ui_name: "$perk_unlimited_spells",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAz0lEQVR4nGP8//8/AyWAiSLdDAwMLOgCRnJyYCexcbFjKP717SeYPvfoESNWFxjJyf0HaTz36BHDiRu3UTSD+CBxkDzMEjD4//8/HJurq/wHARCNzMYhBtbDhM9/FhqqYJtBNC7AhM8AmGZ07+ANRAskDTCbsYnhNABdUdHuywx9rro4vcHEgAecuHELTP+dfAKnGiZs8QwDFhpqYJo514IBlzomfC5QbTnEMGnFeTCNCzCi5wX0lPhEyYNB5t4OFJuRUyKGAaQCijMTxQYAACA9dWitA+k0AAAAAElFTkSuQmCC"
        },
        {
            id: "FREEZE_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8ElEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpzt18lWHltS9gReFaPBgGgORA4pN9tcF6QIAJWcHMcCMMjQZKbCiaYXwYYIIxYM4GKcCmsN1HCExnmuqgeJEJ3ZkX7v2Ca0amQRoT9SFhhNUF6MCQlx2sCcbGBZjQBUC2IWsAsS00VIk3IBNqKwyc/wyJOhDAZhATLpNhivE5H8WAX9BEQgxAVstESDE+/8MNAKVtUPIEmQzCuDTB5EFqQXpAgOLMRDEAAJiAV4rmiK3WAAAAAElFTkSuQmCC",
            name: "Freeze Field",
            description: "Liquids freeze in your presence.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Freeze_Field",
            ui_name: "$perk_freeze_field",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtklEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf/nbr7KsPLaFzA/XIsHxQCQOEhssq823BAmdFtmhhthaDRQYoNrBrGRARMyB+ZskCJkxRfu/WJo9xECszNNdVC8x4QtYEAaQJphNExjoj4vhlombAaAvAFzCS6NeA2AAUNeiFPnX/wMpi00VBlIMsACqgE94HAa8Asaz8i2o7PR1THhcwG6S2iSEhmGPgAAxfM7aGfKwl4AAAAASUVORK5CYII="
        },
        {
            id: "FIRE_GAS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6UlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpRtboKcSMonn7u79weXGoHhBgwWYTSDNIAyExEGCCMWCmwxSu8+DEcAHMVcguZcJli6CRHphGNgjZEKwGoIP9VeZwg3ABJnySnO5OYIzuHaIMeH/uEpyNzxUsyByYH0F00I7vDOsYJoA1O7adxBkTTOiJBDmgQIZg0wxTi+ECBjSXoIvh9AIobZ++9xicwkAAFM/YNCAnZUtlaTCb4sxEMQAAMn5uecnAD9YAAAAASUVORK5CYII=",
            name: "Gas fire",
            description: "Gases near you ignite automatically.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Gas_Fire",
            ui_name: "$perk_gas_fire",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArUlEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf8ja/QUYoazt7/7i2IQzBAWXE4DaUbWhM6HASZkDsx2mOJ1HpwoLoC5CNmVTPhsFjTSA9P7q8wxDMFpAAyANHG6O8FpXIAJl8T7c5fANEjz9537ULyDDFjQBWDODNrxnWEdwwSwN0CGgfjYApIRVzTiiwWionE7WoBhi0IMFzCQkRKHAQAALrtYm3BL4JIAAAAASUVORK5CYII="
        },
        {
            id: "DISSOLVE_POWDERS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKUlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAgmAbAZpBmnEpnne0hK4wSAMUgtzLRMxTk6K7sEpxwRjYLM5JdkZKx9ZLRMuk+vqk1H4ro7aDHPm7sXtAnTNz548YJCSUQBrBIHd+6+CaW01afwGuDpqgzVbORmCaXRNV289xW2Atpo0g7ySBJi9fM52sAtA/OBID7hLYDQMsCBzQKZLSQswPHv6gcHSVoPh+KETYLaU9AswDfJaU+Nc7Ab8+vaTISvXCx5QyE4FsUExADIQ5MrzF+4xMHBzYrpgDlIogxTCDMEVA/AwAKVtUPIEuQKWXJFdAIsBmDxILUgPCFCcmSgGAIBjg8ER9wSMAAAAAElFTkSuQmCC",
            name: "Dissolve Powders",
            description: "Sand and other soft, powdery materials dissolve quickly in your presence.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Dissolve_Powders",
            ui_name: "$perk_dissolve_powders",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5UlEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf9j04jNIJghTIQUpyQ7Y2XDABMyB912kIaH916A2a6O2gxz5u7FUMeEy+a6+mQGKydDBnklCTB/9/6rYFpbTRq3C5A1K6gJMhzbd55BSkYBbDsMXL31lAGvAdpq0gzPnjwAawY5H2SQpZ0F3BBkwzBiwVxd5T9M0bOnHxgsbTXgYQDiB0d6MDQ1zgXzT968w4g1GrNyveCBhS1AQQadv3APHo2M6AYghzDIOyA/g1wEC0T0dMCIbhOpKXEYAADWaGHpohzUNgAAAABJRU5ErkJggg=="
        },
        {
            id: "BLEED_SLIME",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRklEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpxqXR28uYgZ2Pg+Hnpx8MW7edZRCH6gEBJlzOnKe2Dc4GaUamkQELjIFue9ItL7AhDwV5GRjuMzBcVqxgOH7wGoZaJmRNO80vorhAWlCaQf79ZzD++lGEwdJeC8MFTMgc95P6DO6e/gz15ofBNj99/xQsvlJ5JgM3/xswOyjCGrcBQRHWDDu3b2RoPGkL9wbYC0hg3YqjKIYwIYc0SBIGQIaAvAGiYbZjA0wwBih6kP0PcwEIfH7xGo5BABSdGAb8giYSZI3IYPeBW3D2+jXHsIcBAxIoREoH+ADYAFDaBiVPkCtgLumHugIUYLwSomA2iAbJg9SC9IAAxZmJYgAA0tCFTS60uzAAAAAASUVORK5CYII=",
            name: "Slime Blood",
            description: "You bleed slime, but slime no longer slows you down and you have higher projectile resistance.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Slime_Blood",
            ui_name: "$perk_bleed_slime",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+ElEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf9j0+jtZczAzsfB8PPTD4at286CDYIZwoTPefPUtoFpkGZkGhkwIXNAtsM0gUDSLS+GevPDDLr3O8D84wevwdVh9YK5ugrY/yAA0ij//jOYvVJ5JgM3/xu4unUrjjKcvHkHtxfcPf0ZGk/aMjwU5AXz0TUHRVhj9wIIgCR3bt8IZiMbggswoQuAbEAOB5Ahn1+8hmMQAMUGVgN+QeMZFHggUIhk0O4Dt+Ds9WuO4XYBMuiHGoQPMCFzQIkD5AqYS0AAFCa8EqJgNohGTkTDBAAAzH1izmoVRVUAAAAASUVORK5CYII="
        },
        {
            id: "BLEED_OIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTUlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpxqWxqNSbQVhIiOHtu3cMfd1bGcShekCACZcz/cL84GyQZmQaGTDBGOi2b1q1CWyIpYMpw9wlx8FiUyZtwVDLhMtWEFtFQYpBVEySQUdbi2HLzhsMOXk+GC5gBBH+Rrr/X3z9DhZQ0lZhEBcVBLNBmkHg9avnDD7uGnBN1ZWLGSS4ORk2nrvMiOKC1vZYhntX7zAcP3Aa7g2QZmQA0gxSh+GFolJvsCQMgAwB+R9EI9uODlhgDFD0wADIG8guObDzJIomUHRiuOAXNJGAAEgzOth94Bac3dG4DtMABjQAcgUxAGwAKG2DkifIFTCXwFwBChtdU1UwG0SD5EFqQXpAgOLMRDEAANGUhD4sFr1rAAAAAElFTkSuQmCC",
            name: "Oil Blood",
            description: "You bleed flammable oil, but are immune to fire.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Oil_Blood",
            ui_name: "$perk_bleed_oil",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEklEQVR4nGNgGGjAiC5gKCv7H0SzcbHDxYpKvRmEhYQY3r57x9DRuI7h/OPHcH1M6JpBGkHYL8wPLg7SDKNBcjBLMAxABptWbQIbYulgyjB3yXGw2JRJWxjQARMyB9lmEK2iIMUgKibJoKOtxbBuy1WGnDwfuDqsYWCurgJ2mpK2CoO4qCBYMwg8ffqEIchHG66uunIxw8mbdxixeqG1PZbh3tU7cG+8fvUcRR6kGaQGqxeKSr3BCkDg+IHTYP+DaGTb0QELMqeveysDzAsgV4A0g8CBnSdRNIGiE6sLfn37CaZhXkAGuw/cgrNBaQGrAcgA5ApiABMyB5TCQK4AYZgrQOGia6oKZoNokBxyShwGAACVeGQuso+qsQAAAABJRU5ErkJggg=="
        },
        {
            id: "BLEED_GAS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABR0lEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0//BUZRCWEAIrePviHcOLhy8ZtM014ey3e+8x/Pr2Eyz/8vNnhgADDbAhLCABkM2PphxgcGkJgtsiIS/OcPXkdTA73kiTQdjFmuHtu3cMfd1bGcShekCACdlpIA0gG0EuAdkKA8JCQig0MmCCMdi42MHOBDv3xTuw82GgunIxmJ4yaQtcLYYBMAAyBBYWIG+AsLCzEkPfnqMMOXk+DOiACV1AO8mS4VDbVrArQADmlSIXazDd2h6L24DW9liGq/OOg9kgGqYZ5Apk7yAbwgRjFJV6w/2K7B0QjlJVYcAFWGAMUPTgAgd2nkQ1+N07TBf8giYSXGD3gVtwdkfjOkwDGMgEYANAaRuUPEGuQHcJKGx0TVXBbBANkgepBekBAYozE8UAAB3wk0ek4kZTAAAAAElFTkSuQmCC",
            name: "Gas Blood",
            description: "You bleed flammable gas instead of blood.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Gas_Blood",
            ui_name: "$perk_gas_blood",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAElEQVR4nGNgGGjAiC5QujD/P4h+++Idw4uHLxm0zTUZTH4zMAgLCTG8ffeOoaNxHcP5x4/h+piQNRvKyoI1w4CEvDjD1ZPXwZpBAESzcbGjqGNCdwFIA8h2YQkhsAtAoLpyMZieMmkLhheYkDkg09/uvQfWCDIE5HwQ0E6yZOjbc5QhJ88Hrg6nC0AAZgjMGzA2CLS2xzIgAyYUHpICkCGH2raCNYMMKXKxhnsH2RAmZM1Fpd5w/8IAyKAoVRUGXIAFmdPXvRWrogM7T6Ia+u4ddhf8+vYTp027D9yCs0FpAasB5AAmZA4ohYFcgewSULjomqqC2SAaJIecEocBAAA0b2nos+j9lAAAAABJRU5ErkJggg=="
        },
        {
            id: "SHIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA60lEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZphmk0nXgFqwGn83XAtDhUDwiwoCuCab565TqKuLaOJlgOZggMsMAYINthmq+cOMTw++JGFIVXvvgz6FjYYRjChO4CkM3omkEAJIbuKqwGkAqYBp8B2jqaDKz6/hgKQWIgOXTAgpxIQKELCmVQaF/lEcUwGARAasAJipsT1QAGKIAZgs029DQANwCUtk/fewxOYbgUwlwJAqCkbKksDWZTnJkoBgDAfV+ywj6aFAAAAABJRU5ErkJggg==",
            name: "Permanent Shield",
            description: "You gain a small, permanent shield.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Permanent_Shield",
            ui_name: "$perk_shield",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqklEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf8jazSdeAXOPp2vg2IQzBAWXE4Dab565ToKH9kQGGBB5sBsBym+cuIQw++LG+FyV774ww1BdiUTLpuRNYMAiA8SR/YWVgNIBUxUN+B0vg6Dto4mA6u+P4o4iA8SRw9IFmQOKHpAAQRSBA4LHlG4HLJmWHrAMAAZwAxB5tMkJTIMfQAAIKNNG44hTWAAAAAASUVORK5CYII="
        },
        {
            id: "APOTHEOSIS_OVERSIZED_SHIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHUlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZphmm03xaK1YCDXqvBtDhUDwiwoCuCad7zbi/DWZOTYLbxGXMGFyFnsBzMEBhggjFAtsM077i3k+HNuldwRSA2SAxmAbIXWdBdALL5ostZBgYXhNjDtvsoLsHqAhgAOVu+SpEBHYDEYF7Ca4DxGXMMRfjkmHCqhtqKzTV4DXARcmYQcBLCUAgSQ/c/igG/vv2ER5GHkjuYFgkSA2NkMZAaWIKCp0R/I93/j15/IDohgQyQExVg2HjuMiQlgtL26XuPwSkMWSE6QE7KlsrSCBeAALmZiWIAALiHcaLMbqgZAAAAAElFTkSuQmCC",
            name: "Oversized Shield",
            description: "You gain a very large, permanent shield.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Oversized_Shield",
            ui_name: "$perk_apotheosis_shield_oversized_name",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvElEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf/DNNpvi8Aw4KDXCrhBMENYsDkLpHnPu30Y4i7bIuCGwAATMgdkO0zznw9/GN6se8lw1uQomAbxQeIgeWTvsTDgABddTjIwuEDYD9vugGnjM9YY6phwGSBfpYKXT9AAYgETLgkBJ2EUm2F8vAb8+vYTHMouQk4MLAKQ4BEJEgfTID5IHCQPSw9USQeM6IpITYnDAAAACfRQuhfgy9wAAAAASUVORK5CYII="
        },
        {
            id: "REVENGE_EXPLOSION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABF0lEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAgmAbAZpXhkuiKL5xEwXFANAciAMUgtzLROygtjN3zBsXezLhdNAFAPYoDafOL8aIWuWjtB8fjWDRfoeDC8yoZtoYRgKVoxsMzIbpwtQnHhqJoNq00IwU9XHCs7GcCG6ARZQJ97ecgzDG7fr4iFqDENxGwCzAWQrNoDNK0zoAiAbwC44NRMhCPISDkOZ0BMJKBzg0Qky5NRMsIEgDDMEphYEWNCdCAsHEA0yDMYHg817wGrCVyIMALsAlLZByTN85XsU01E0Q20GqQGpBekBAYozE8UAAA3ie8KX9c1YAAAAAElFTkSuQmCC",
            name: "Revenge Explosion",
            description: "You release a magical explosion upon taking damage, and gain 25% resistance against explosions.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Revenge_Explosion",
            ui_name: "$perk_revenge_explosion",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyUlEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MVwfE7rmleGCKJpPzHSBs0HiIAyzBMMAEIjd/I0BF0A2DKsBbFCbT5xfDaYX+3IxMJilw8Us0vegqMMwAAYsDEPhhsANwgGYcDrz1EwG1aaFYCaMBssjGYzVAIv0PRiKQOB2XTzYJSDX4TUABECKbm85BnYF3DU+VgzYABO2eAZ5Ax4bp2aCDQNhmCEwdRgGgADYmdDQhtEgw0AYxEcPUEYUHhkpcRgAAAuMUt6uJH9SAAAAAElFTkSuQmCC"
        },
        {
            id: "REVENGE_TENTACLE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/UlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LncHIIRmu4dyBuWD617efYPrl588MAQYaYENYQAIgm0Ga0TXCAEgMZAhIHgTEoXpAgAldIQjIyEoxPHx0E0yDMLIcOmCCMSy8ssA0SCMIvL13hGHT4mYwRjcEphYEWJBNg9kI0oQMYHy/2FoGBqh3JLg5MQ04enQ/g7W1I1anIhuE1QsgANMMtolIwARjgJz15PEzuEuINYQJmQMzBJ83cBrwC5pIYACfK5DVMqFLkuoKsAGgtA1KniCTkU0HuQLdZhAGqQXpAQGKMxPFAABoJnjpiufnQQAAAABJRU5ErkJggg==",
            name: "Revenge Tentacle",
            description: "You summon a monstrous tentacle upon taking damage, and gain 25% resistance against projectiles.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Revenge_Tentacle",
            ui_name: "$perk_revenge_tentacle",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAy0lEQVR4nGNgGGjAiC5gKCv7H0RbeGXBxc4dmAumf337CabPP37MiNUAQ1nZ/2xc7AxGDskYNsEMgRkEM4QJXSFMs4ysFMPDRzfBNLI4OmBC5sCcDdIIAm/vHWHYtLgZwxBk77GgmwhSDMIgjTAAY/vF1jIwOCSjeIcF3YCjR/czWFs7YnUusqFYvQACMM1g24gATMgckNOePH4GdwkxhjAhc0DRAzME5BJchsDSA4YBMIBsCCHAhMwBJQ6Q6cg2gFwBAzA55JQ4DAAA80Fhzo/5kLcAAAAASUVORK5CYII="
        },
        {
            id: "REVENGE_RATS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABE0lEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpxqURBmDy4lA9IMCET4OmgjQKjQ0woZsOA9Ya8gzzdxyA09hcgtcFfFKSDMUBLmC2jaYy2CC8LkAHN2/9ABsCAubqigwv3r1nwAZYsIoyMDCoCSox3Lx1j4GBQZDh3pMLuJQxYDUgxaMMhY/PACacMgwMDDLSKvikUQ34BU0kyMBMZzFDkPtxBiUZAxRxZLVM2Eyds6OLwSv7P8OpK7EM63ZaMjTVCuN3AShtg5InyGQQBoXBtqnwbMIQk74XbjMIg9SC9IAAxZmJYgAARQ9f8BjjvUwAAAAASUVORK5CYII=",
            name: "Revenge Rats",
            description: "When you take damage, there's a chance that a helpful rat minion is summoned",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Revenge_Rats",
            ui_name: "$perk_revenge_rats",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1UlEQVR4nGNgGGjAiC5gKCv7H0SzcbFj1fDr20+G848fw/UxoWsGaUTWrKkgjUKD5GCWYBiADqw15Bnm7zgAp7EBJmQOurP5pCQZigNcwGwbTWWwQejqmBjwgJu3foANAQFzdUWGF+/eY6hhwWeAmqASw81b9xgYGAQZ7j25gFUNCy7NKR5lKHxcBjAxEAAy0ip45ZnQ4xgdmOksZghyP86gJGOAVR0TLpPn7Ohi8Mr+z3DqSizDup2WDE21wqSlxKygWrjYk6d3GHZcXge3GTklDgMAAJ7jQFxHRrF8AAAAAElFTkSuQmCC"
        },
        {
            id: "REVENGE_BULLET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9ElEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAgmAbAZpDrTIwKn5+OnbDGevPgLLg9TCXMuErGjrpfkMWQENDKQAJhgDZvO0DQ0MC7N2YthuaaoKxuheZMJmavw0d4YNE4+haCboAmyAkGaCBliaqoINAWFcgAWXxMebn+GGwFyDzMdrQFZAAzgc0F2DbFCggx6qAb++/QSHrrdeIjgm8HkLpFZOVAAzDNQFbMFpgRQANgCUtkHJ8/KzPfDkig2A5EAYpBakBwQozkwUAwDmLmo5YVBjPwAAAABJRU5ErkJggg==",
            name: "Revenge bullets",
            description: "You return fire when hit by projectiles, and you gain 20% resistance against explosions and projectiles.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Revenge_Bullets",
            ui_name: "$perk_revenge_bullet",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAs0lEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MVwfC7pmbBph4OzVR2DaWFvuP8wQJnRF3nqJDFkBDeR5wVxdBex8EFiYtZMhfpo7XO746dsMlqaqcP7Jm3ewuwAGQJo3TDyGVTMyYGIgAPBpJmjAx5ufwZpBhoAwNsCCSzMoIGFhAHMBzBBkFzGiR6OulAuDipwKw9ZL83G6DJQeYNHIgi5588NhMKZbSmQY+gAAPdFI0RIA5u0AAAAASUVORK5CYII="
        },
        {
            id: "APOTHEOSIS_REVENGE_REFLECTIVE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABpElEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHTsD1MoA0SwkI/DeUlQXjB1u8/78+3/ffXF0FjEHs319fwOVBakF6QHpZQATIZnFeXgY2LnaG7kIhhkdPXjPIMeyFW/D1KYR96sZpBhsjGwZxqB64AcigtP8dmN67v5dh734GBnZ+VTAfpJGBYRoDOmCCMUC2r+xVh2qez7B8/0swPn/3PQMLlzjDkXNHwHJbVmSB1WIYAAIgp4M0p1ctZfjw7iODvq42g6muBlgO2RBkwITu/O8vT4PZL549Ybh4+SrD6cs3wHwY7ROB6g0WdBNBASYhacagoaMNdgXIEBAA0Voi4vhd0F0oxMAt7cwgISUDdr6AED/DjStXGQ4ePAY2DATQvcGCzQUXzsrCvfHi+XO43PeXH+FexDCgu1AIGoXvGFb2MjBUr0EoAhkyIV8N7n9QTKQkzwezGUGEv5Hu/0evP6BEDyxKQQDkLeTA+/XtJ4OcqADDxnOXGcEuAKXt0/ceg1MYCIAMCi++ieRQCBukEQRefv7MYKksjXABCFCUmSgBAOZju4n6Tey0AAAAAElFTkSuQmCC",
            name: "Revenge Reflection",
            description: "Reflect copies of enemy projectiles upon taking damage, with a steep damage boost as payback.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Revenge_Reflection",
            ui_name: "$perk_apotheosis_revenge_reflective",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEUlEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MVwfE7pmkEYQXtmrzrBlRRZYHEQfOXcELA7CMEswXGAINQAG9u6fz8DOrwpm2xjZoLgE5gomZANgNsM0L9//kuH83fcMLFziYBfAXINsCRO6Px89eQ3WPH3tLQZ9XW0GU10NsDiyIciACV2gtP8dw/eXp8Hsi5evMpy+fAPMhtE+EdNQ1LNgGMnAwPD16V4GAaFEhg/vPoINgRmmJSKOoZYFXaC7UAhMgzS/ePYEjEFsEPj+8hHYG8gByoQtnsOLbzKEKq5jePH8OQQ/e8KQYPMR7PwPt5bB1RGMxpXQGOGWdkbxO3I0MqJ7gdSUOAwAAJdLg/l7jJUZAAAAAElFTkSuQmCC"
        },
        {
            id: "ATTACK_FOOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDklEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAgmAbAZpBmkMcs/CaTNIHoRBamGuZUJW4GObzLDl8FwGDQU7FDEjfXcwxgZYYAwLSz+GZ5+egNk3HhwCawTxQQZicwkMMCFLnLu4E0yDbANp/PbxO07vYBjwDaoYZDOMDXIJ0QbcgCoGORtZI8g1IEMJGoBuO0wzyFsg7+AyhAmZg2w7SDOyYbgMYUK2DaYBxkYPA5AhIDlYgsJwwY0Hh1A0g9IDevzDYgrFAFDaBmmCaebi5wRrBhkC0gBzOshmEAYlZZAeEKA4M1EMAL+jlMRsFhIIAAAAAElFTkSuQmCC",
            name: "Lukki Mutation",
            description: "You grow curious additional limbs that fight for you.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Lukki_Mutation",
            ui_name: "$perk_attack_foot",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2UlEQVR4nGNgGGjAiC5gKCv7P8g9i2HL4bkYin99+wmmzz9+DNfHhEuzhoIdXNzHNpnBSN+dwcLSj4GNix2sDibHgmwASMGzT0/A7BsPDoE1gvjYXIPVBSBw7uJOMA2yEaTx28fvDOgA5AqsBnyDKgbZDGODXIIPMCFzYIpBzkbWCHINyFCCBqDbDtMM8hbIO9gMYUIXQLYdpBnZMGyGMCFzkDXA2OhhADIEJIfTBTceHELRDEoPyBpA4MTxTbhTYmZY9n+QZi5+ThQXgJy+buc0MBs5JQ4DAAAOSHbDPO34TgAAAABJRU5ErkJggg=="
        },
        {
            id: "LEGGY_FEET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJUlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHTsD1MoA0SwkI/DeUlQVjc3WV/5dWrQJjEBuGQXIgMZBakB6QXhYQAbJZnJeXgY2LnWF2cxvY0C9vXoNpGB8GQOIgtTDXsiBL9mTlwBUVTuyHi/fnF8LZyOIoBkwqKWbgl5TC0IxNE8ilGAbwS0oxfHz+jIFfUpJhdnMrXEFqbTXeAGWCs/6Dw4Thy5s3cAwJg1a4gcgGY7iAgZGRgV9CkiG1DtVGmP9BmmGGYjcALSBLpk1B8T/IIPSwQPHCx+fPwPT///8xwgHZIJwG5PX0gp1fOn0qiv+xReWvbz8xDWBAsw3ZEGTNWF0AStsvP38GmwwzHWQIchSC+DB5kFqQHhCgTmaiBAAAghigJmj8YEsAAAAASUVORK5CYII=",
            name: "Leggy Mutation",
            description: "You grow disturbing looking limbs that fight for you.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Leggy_Mutation",
            ui_name: "$perk_leggy_feet",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVR4nGNgGHTAUFb2Pwibq6v8v7RqFRiD2CAMEgfxkdUzomtm42JnmN3cBuZ/efMaTPOIiMLVgMSy2zsYzj9+DNbLgu6CnqwcuMLCif1gdn9+IVweJobVBZdWrfr/8fkzBn5JSbhYam01Vq+evHkHrJcJRfQ/xHtf3ryB49nNrWAMAjAaGbCguoeRgV9CkiG1DmErSBPMIBCNDpiwOQ8WDjAvgPwN0ozuf7CdDEjg8MQJ/0Eu+PD8GYOAlBTpYZDX0wt2PgsbG9y5MH8jx8Svbz/xpwMYAGniERGBGwbzAsgAWDpghKuGApAhIBrdIJBmmM0wzcMEAAAziYE0Ql8OCgAAAABJRU5ErkJggg=="
        },
        {
            id: "PLAGUE_RATS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8klEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpxqURBmDy4lA9IMDEQCFgQjedGICslolqLiAXsGAT9HSygLM/PXvOcPTGQ+JdYK0hj6IZJqapIA1mw2isBlhryDPwSUli2AISm7/jAFgeRGM1oN7KFsVmEAZphBlYHOACpm00lVFcyQRjVO/Zg+JsZDaymLm6IooLwIEIStun7z1mePfjD8PFa/fA8Qzy6/UHTxkYoAEI4oPk9LWUGHadvAhOyiBAcWaiGAAAUvZYqPZw2w8AAAAASUVORK5CYII=",
            name: "Plague Rats",
            description: "Dying enemies release rats to serve your bidding! All rats become your friend.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Plague_Rats",
            ui_name: "$perk_plague_rats",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvElEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf9j04jNIJghTAwUAiZkDjG2o6tjotQFLLgkPJ0swPSnZ88Zjt54iNMAJmyC1hryGHxNBWkwG0bjNMBaQ56BT0oSRQzEn7/jAFgOROM0oN7KFs4GOR2EYYYVB7iAaRtNZRQXMiEbUL1nD1wzMkDmm6sr4k+JCe72/y9euweOKpB/rz94Cvc7SFxfS4lhwc6DGPqGMAAAn505euY/zJIAAAAASUVORK5CYII="
        },
        {
            id: "VOMIT_RATS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMElEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpxqURBmDy4lA9IMDEQCFgQjcdHWgqSKPQ6GqZCNmgoCTLcOLGbQYhDhYwjdMFMPCNkwPOttaQB9PFAS5g2kZTGS6GYYCquwmY5vr+A0Xzp2fP4YrN1RVRNKMYcHvnGQZ0w0CAT0qS4d2PP3A+MhvFAJjzzXOcwOxX8qJgzSAA8j9I49EbDxnQARN6IgFrUOUD04dfPwbTyBrPvnyLopYJ2TTHZCuGd7c/gdnPnz1n0LZXBxsCchlIIwjAwgjFAFDa1g60BmsG2Q6iQZqvHrzJICklySCmIgzGIJt5dKXBSRmkBwQozkwUAwCpPnD76JKYaQAAAABJRU5ErkJggg==",
            name: "Spontaneous Generation",
            description: "Vomit near you evolves into helpful rat minions",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Spontaneous_Generation",
            ui_name: "$perk_vomit_rats",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAUlEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf9j04jNIJghTIQUaypIo9DogAmZg812BSVZhhM3bjMIcbCAaXR1TNhM/cbJAaatNeTBdHGAC5i20VSGi2E1QNXdBExzff8BV/jp2XO4vLm6In4v3N55BsUgEOCTkmR49+MPnI/MBgEWbM4XUuVjeMXAwKDyGyIN8j9I4/UHTzECkwk9ehyTreD8w68fg+mjNx7Cxc6+fAtPDxgGaAdaQ5x5+xPD82fPGbTt1cGGgFwF0ggLH7wpMSYv4j/ICyBw9eBNBkkpSbBhYINP3mMQMldi2LvmIIa+IQwA2KVbHS7I2LoAAAAASUVORK5CYII="
        },
        {
            id: "CORDYCEPS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpRtYoleDFoGPDy3DlyGeGZwu2oRgsDtUDAkzYbAJpFpQUA7NBNIiPC7DAGMi2g2x8xsDAkNCxiKG0PQ5DE7JaJpxGMzAwyGnI4JMmbEB4gBP5BrRtOMiw/vxtME2yAevP32bQlJcCs0E0iE+SAdcfPmMINFRFoQnGwq9vP+GhWxVgD7cVRIMMwUhQ3Jy4XcCA5gp8AGwAKG2DkifIZFhyBbkCmYbZDMIgtSA9IEBxZqIYAAAZNWuYo43bhQAAAABJRU5ErkJggg==",
            name: "Cordyceps",
            description: "Fungal creatures spawn from the corpses of enemies killed by you.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Cordyceps",
            ui_name: "$perk_cordyceps",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAr0lEQVR4nGNgGGjAiC5gKCv7H0SzcbFj1fDr20+G848fM2I1wFBW9j+yRqkELwYdG16GK0c+MzxbsA2rIUy4nAbSLCgpBmaDaBAfG2BB5iDbDrLxGQMDQ0LHIobS9jgGXOqYGAgAOQ0ZvPJM+CTbNhxkYJOXBdMkG7D+/G0GTXkpMBtEg/gkGXD94TOGQENVFBobYMQXjci2ggwhKRpBgJDtJKfEX99+gmnklDgMAACgq0ZkFvtNSAAAAABJRU5ErkJggg=="
        },
        {
            id: "MOLD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABCklEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHUy7zQkH07tSVoLpX99+gumXnz8zBBhogA1hAQmAbAZphmlE1ozNIHGoHhBgItavT+9yohgKA0wwBrLt2pUJGJqllb+DaZCcQlYgpgEwIJXgBaZBirHR75+/Yni2YBtcPQs2zSBFgpJiKJpgAFkzhgHPkCSfMTAwdHcsArPlzGUYwgOcGLABJgY8QE5DBp80YQOQDVm5YR8DXgN+QRMJDICcD3L2oxtP4BhmCLJaJmymgjSXVsTBwwAEQHyQIVhdAErboOQJMhndJSCNyAAkD1IL0gMCFGcmigEA48Z83HgZwE0AAAAASUVORK5CYII=",
            name: "Fungal Colony",
            description: "Slime near you spontaneously turns into fungal creatures.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Fungal_Colony",
            ui_name: "$perk_mold",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3klEQVR4nGNgGGjAiC5gKCv7H0SzcbEzuM0Jh4vvSlnJ8OvbTzD7/OPHjFgNMJSV/Q/SCALImkHg6V1OBmnl73CDYIYwYXOWdmUCVs0gGiSnkBUIl2NCVgiyXSrBC64JG/3++SuGZwu2wfWwIBsA0wxSJCgphqIJBJA1YjXgGZKCZwwMDN0di8BsOXMZhvAAJ2y+ZcAaBjAgpyGDT5qwAciGrNywj4GgAb+g8cwAdT7I2Y9uPIFjmCHI6piwmQrSXFoRBw8DEADxQYbgdcH5x48ZkU2HaUR3JXJKHAYAAEhQZN7FndXqAAAAAElFTkSuQmCC"
        },
        {
            id: "WORM_SMALLER_HOLES",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABrUlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsE0b7hwg+HR6w9gvKHAmuHF1+8oGCQGl79wA6wHbsDTT18ZxHl5Gdi42MHYonUPw2oTabiNJ6pdwGIweZBamGuZsDkRpDn0zFMwDcIgzSBDsAEWGANkMgzANINoZBdgU8uCK6BghoAAsmZ0wITM4TYtA9OMsoFwQ2CuyFodyeA2M4hBLU4duwEnbtxmWJD3gkE5YR4Dl4QqmIYBkMY7734yVMmzMjy88hxsGIYBlq5lDO4JpxnsPicwTAxaCqZBhrAb8TE8OHoVrCZt2QUG+3RIYPIFyyEM2HD2EsPx3V1gAWsTWYb8ddFg+t7ezQzyOpIM06TugA1x8TUCq5nbvhU1EAOM9RheCnkw8EtpMBw9sxbsgqNnHjMoOTczPLy0lyGLQYVBwVobrAHkjQc6kmCvoMTC8d1dDI9PNzNU7F3AsGrdDQYJbQ2GuwuSwHIPoWoeMDAwgOIDpFnw5m+EF0Bp20hOjiFhkgRY07cXt+GaQeDnuU9g+taim2DNd7bfA+sBxxhMEbmZiWIAAGRau8bbF4x6AAAAAElFTkSuQmCC",
            name: "Feared by Worms",
            description: "Worms run away from you, and worm and lukki enemies no longer destroy terrain while burrowing.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Feared_by_Worms",
            ui_name: "$perk_worm_smaller_holes",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXUlEQVR4nGNgGGjAiC5gKCv7H0Sfa/VmsGjdAxc/Ue3CYFS9Fcw+//gxI1YDDGVl/7NxscP5q02kGULPPAVrRjbs17efcEOYcDkNphlEgzSDDMEGmJA5yLbDNGNzAbI6JnQTuU3LIH6TDURxQdbqSAa3mUEManHquF1w4sZthgV5LxiUE+YxcEmogmmQISCNd979ZKiSZ2V4eOU52DCsgWjhUvr/47MbDPkBVxmsTWQZjp55zHCIdwED879OBgVrbYYHR6+CaRUhdoY9m88xLK7eyojiguO7u8A0SHP+umgwfW/vZoZpUnfAml18jcDyc9u3YveCpWsZA7+UBtjmiUFLwbSSsy9D1jMVsM0gAPKGvI4k2CsYXvj/////x6ebGSr2OjC8uHqDQUJbg+HugiQGdiM+sCYYAGk+tPwcI9aU6BQz6//X013gWPj/eD1cHBT6txbdBBsG0zxMAAD0j49PJvNT1gAAAABJRU5ErkJggg=="
        },
        {
            id: "RISKY_CRITICAL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXklEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0Gclxes4JyTE5i2OHEUReOvbz/B9MvPnxkCDDTAhrCABEA2gzSzcbEznLCwZrhUVARWeKIPoRlkGEgeBMShekCACd15606fZtDr62O4dOkSwxIXF4ZOTU2GgDevwAbDAMyFIMACY8BMh9l2goEBrPn44YNgMRAbJAYCYBcmxqAaAANdf3/B2TDNlrb2DEHfvjHclpdnOKmqymC+di1cDRMDFgBybjEnK1yztLQ0mA3WfPs2g+rDh7gNOAHVfPfxU4YNImIM5devY2hGjh0mfJqRFerp6YE1gwIZGTAhaz4ZqAHXDFIIi1KQzaCYQU8XGIG4asdduM1lzGyQ2ICmBWSbwQmKmxPVBUb79jH0fv8NVwiLDRAf2WbkWIIbAErboOQJMgQXAGkE2QzCILUgPSBAcWaiGAAAjyerKY96VmsAAAAASUVORK5CYII=",
            name: "Close Call",
            description: "You gain additional chance to deal critical hits as long as there are enemies near you.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Close_Call",
            ui_name: "$perk_risky_critical",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHUlEQVR4nGNgGGjAiC5gKCv7/5yTE5htceIoityvbz/B9PnHjxmxGmAI1XypqAjM1+vrg8shGwYyCGYIE7oL1p0+DdZ46dIlhiUuLgydmpoMAW9eMZywsIargbkQBFiQNbNxscNtO8HAANZ8/PBBsBiIDRIDAbALFy7ENAAEuv7+YoABmGZLW3uGoG/fGG7LyzOcVFVlMF+7Fq6GiQELADm3mJMVrllaWhrMBmu+fZtB9eFD3AacgGq++/gpwwYRMYby69cxNCMHKBM+zcgK9fT0wJpBgYwMmJA5JwM14JpBCkEGggIMZDMoZmAGwtIDRiCu2nEXbnMZMxskNqBJAd1mnClxrZbW/5bPn+FRCjIIFDMgGiQOAsgpcRgAADmAhLqrv8Z/AAAAAElFTkSuQmCC"
        },
        {
            id: "FUNGAL_DISEASE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABWElEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpRtYoV70czn7UGolisDhUDwgwYbMJpNldg4nh74s3YIxsGDpggjFgpoMUgzTtXHmGgfnlIwYvBzGweOrilXBNyC5lQrcZpBmmCQRABoENvPEPq0uYkDkgZ4Ns3XbgFYQfboIih807jCDC30j3P1vBPAaGi+cwbDC0Fmc4f/Qlw19xObgYs4QIw68JSQwbz11mhLsAZDo2ANIM1vTyEZhG9h6KF57OzUVxMshmkK0wDDME5D1DnqdwdSzIiWR2bDiDdPJkMH/t1JMIRU+WgGMBpBlk0f1vPxnkRAVQDWBAcgkI8OpUw8W+P2EAG44NgL0AStug5AlyBSy5fv7wEK7oj0wMnA2SB6kF6QEBijMTxQAAmwmaW41es6wAAAAASUVORK5CYII=",
            name: "Fungal Disease",
            description: "When near danger, you sprout fungal growths.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Fungal_Disease",
            ui_name: "$perk_fungal_disease",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/UlEQVR4nGNgGGjAiC5gKCv7H0SzcbFj1fDr20+G848fM2I1wFBW9j+yRrnq5XD2o9ZIrIYw4XIaSLO7BhPD3xdvwBjZMGTAhMyB2Q5SDNK0c+UZBuaXjxi8HMTA4qmLV6Kow+qC1MUrwZpBGkHAPdwEbBBIbNuBVxguYUTmhC46/R+m2dBanOH80ZeQsIGy/4rLgfnMEiIMq+NMMcPgL5LNMM3IbGTvYPXC07m5YCfDAMhmkK0wDAIgbxjyPGXAG43SyZPB/Ic7T8LlWJ4sAYfP7NhwlGhkxGYADHDqVMPZ36+0Ek4H5x8/ZgRJgjAIfP7wEC73RyYGQ/MwAQBPJoV0EE0HYQAAAABJRU5ErkJggg=="
        },
        {
            id: "PROJECTILE_SLOW_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMUlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHUxn29WB6amHmsD0r28/wfTLz58ZAgw0wIawgARANoM0o2u89fotVoPEoXpAgAXdeSDFMI03n16AihrA5WCGwAATjAGyHaYZpLFZ4yXD269PwRjGB8mB1MBcimIAMljlLMnAkJzM8OPvOzCG8bEBJhgDZjvIJmTFRwPd4HyQS2CuwDCAXMAEY4ACR01UmKH2hjgDw9y5cAXW63fB+erSBmA1yAHJgs3UsL3PGVYxzGXgYBZC4UMiEBUwggh/I93/j15/QIkJ5GgE2QwCMNtBCUpOVIBh47nLkISEDEAKEIGE0AiTQwdgA0Bp+/S9x3AHwhTiS8qWytIIL4AAuZmJYgAAB/6ZhsD42AUAAAAASUVORK5CYII=",
            name: "Projectile Slower",
            description: "Projectiles near you slow down.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Projectile_Slower",
            ui_name: "$perk_projectile_slow_field",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxUlEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf/DNGbb1WEYMPVQE9wgmCEs2JwF0nzr9Vus4jBDYIAJmQOyHab55tMLDM0aLxmO3doKZ4PEQfLI3mNiwAFWOUsyMCQnM/z4+w7OxgaYsAmCbINpOBrohlMzTgNqb4gzMMydC2Zbr98FZ2MDLLgkwvY+Z1jFMJeBg1kIzmZgEMdQx4gtGnHFgpqoMDgWkKOREZsBpKQDRnRFpKbEYQAA0xpfmRXMHIcAAAAASUVORK5CYII="
        },
        {
            id: "PROJECTILE_REPULSION_SECTOR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNUlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAgmAbAZpBmnEptlVMxtuMAiD1MJcy0SMk28+vcCQbVeHVY4JxsDlbDk+a4a3X58y3Hr9Fm4IslomGEO15RCGZm5mBbBmYW5psCvwuuB2jR3ckBM3bsEV/Pj7DmwICCC7AsMAluRFDPfvP2Ao2n2ZYdXjn2AapBnZEGyuYIIx/syNY1BUVGDoc9Vl6L7xFUxzMAuB5UA0yBvq0ga4DVBtOQT2Bggw51rAFcA0g4CaqDDD1ENN2A24WmSOYfrXvw/AmkHOR7YdlqBQDGDAAR59Ogo2BJvtcANAaRuUPEEmI5sOAyDbQZph8iC1ID0gQHFmohgAALkkifNT1IUtAAAAAElFTkSuQmCC",
            name: "Projectile Repulsion Sector",
            description: "Projectiles that fly into a small sector in front of you get blown away.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Projectile_Repulsion_Sector",
            ui_name: "$perk_projectile_repulsion_sector",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA90lEQVR4nGNgGGjAiC5gKCv7H0SzcbHDxVw1sxl2X58KZv/69pPh/OPHcH1M6JpBGpE1g8DNpxcYsu3qwGyQHMwSDANwgbdfnzLcev0WbggyYELmaPedxFDAzazAIMwtDXYFDCC7kAlZ8e0aOwbVlkNg9okbt1BcAALYXMGEzGFJXsRw//4DhqLdlxlWPf4Jpn/8fQfGIEOQXYHVgD9z4xgUFRUY+lx1GbpvfAXTHMxCYAzyhrq0AX4DVFsOgb0BAsy5FnBxkGYQUBMVZph6qAm3AVeLzDFs+Pr3Adj5yLaD0gJWA3ABkAuw2U5ySvwFtRk5JQ4DAAAiM2Hj7EB1BwAAAABJRU5ErkJggg=="
        },
        {
            id: "PROJECTILE_EATER_SECTOR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABP0lEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHUNTikcZnF2/sIwhwEADbAgLSABkM0gzssZDahwMdrd+oGju2dTNIMD2H6wW5lombE4Eaa65+RpFDKQZG2CCMWC2gzSfevGe4faPvwx2/z+DxZ48vYOiCdmlLNhM3fTxD4MqBzPYEAZOiFiEcSCY3nF5HXYXINsOAiDNrxjZwP6XkVZhwAWYsNkO04wMcBnChC7gx88Cdr7Y/18o4mY6ixmC3I8zKMkY4DbA7tYPBjMJQTAbZsicHV0MXtn/GU5diWVYt9OSoalWGLsBv779RHEFyBsgQ0BhsG0qPMEyxKTvRVHLhO4FmCtAmg8xQlImPgA2AJS2X37+DDYZhEGGtKiL4tQEUgvSAwIUZyaKAQDzcX9rWULoLwAAAABJRU5ErkJggg==",
            name: "Projectile Eater",
            description: "Projectiles that fly into a small sector behind of you disappear.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Projectile_Eater",
            ui_name: "$perk_projectile_eater_sector",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBElEQVR4nGNgGGjAiC5gKCv7H0SzcbEzHFLjYLC79QMul+JRBqZTJ6bB9TGhawZphGmuufkaQ3PPpm64JRgGwABI86kX7xlu//jLYPf/M1wcpBkdMCFzQDbDwKaPfxhUOZjBhoDAk6d3sKpjwWU7CIA0v2Jkg8tFGAeC6R2X12F3AbLtyJpB/peRVmHABpiwCfrxs4CdL/b/F4o4NkOY0AVA0WYmIQhmoxtiprOYIcj9OIOSjAF2A359+4niCpA3QIbM2dHF4JX9n+HUlViGdTstGZpqhfF7wQ7qCpDmQ4y84DDYNhWR5sJit2E34Pzjx4wgV4AwyJAWdVFs5oPVYZUYmgAAxPZjXj0rcFQAAAAASUVORK5CYII="
        },
        {
            id: "ORBIT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7UlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpRtYYHxqMonnh6rVweXGoHhBgQbdl14LbDHwWDAwWGqoo4iADQYagAyYYA2Y6SPOnE5jOB2mGuQrZpUzotoBsdktQhfORvYJsCFYDsDkZmyaiDCAWMOGSgNl84sZthmjvDuIMWIjmXBAfFKCggMUVE0zoiQTdEFCAggIWWTNMLdZ0wIAjtLGlAbgBoLR9+t5jcAoDAVA8Y9OAnJQtlaXBbIozE8UAAGk9apZuUmLSAAAAAElFTkSuQmCC",
            name: "Phasing",
            description: "Projectiles seemingly phase through you.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Phasing",
            ui_name: "$perk_orbit",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsElEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf8ja4wPDYazF65ei2IQzBAWbM7ateA2A58FA4OFhiqKYciGwAATMgdmO0jzpxOoCkGaYS5CdiUTuokgRSCb3RJUsXoDmY/VAGQAc/aJG7fB3sIGmBjwAJiNIO+AvIUNMCJzzNVV/uMLMGTxkzfvMGK44Bc0nrH5FVkzTB1V0gEjujNJTYnDAAAAOtBWIuB4U6cAAAAASUVORK5CYII="
        },
        {
            id: "ANGRY_GHOST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8ElEQVR4nGNgoBAwgoj///8zZDta/n/66StRmqT5uBmm7j/OyMjIyMACEgBp3nDhBoM4Ly9YARsXO8M8bz+4hqStm8D0r28/wfTpe48ZGBwt/4McwAISANkM0gzSCALImpH5MIPEoXpAgAndeeiaCckxwRgw28FOvH4dzn79/DmGOLJaJnQTQc401dREMQSmGSSO0wXoAKZYVFIShY8OWBjwAGRXkGzAaTQnE+WFeUihDFMMC0RcLmCCMWCJBD2qYGGALUFhuCAJqgAbwCUHDgNQ2gYlT1AKi1m9GiWekQHM5pefPzNYKkuD2RRnJooBAD2YZaP+M8W7AAAAAElFTkSuQmCC",
            name: "Angry ghost",
            description: "An angry spirit comes to your aid, copying nearby spells and projectiles.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Angry_Ghost",
            ui_name: "$perk_angry_ghost",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAq0lEQVR4nGNgGGjAiC5gKCv7H0SzcbEzzPP2g4snbd3E8OvbTzD7/OPHjFgNMJSV/Q/SCALImpEBzCCYIUzYFOHSjE2OCZkDsx0ETl+/Dme/fv4cRRxZHRMuZ5pqaqIYAtMMEsfpAnQAUywqKYnCRwYsDAQAsitINuA0mpMJeuHXt58ooQxTDAtEGB+WHjAMwBVVsDCABTDBlLgkNBRdGAxiVq8G08gpcRgAAP6MRZR2DF26AAAAAElFTkSuQmCC"
        },
        {
            id: "HUNGRY_GHOST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAElEQVR4nGNgoBAwgoj///8zZDta/n/66StRmqT5uBmm7j/OyMjIyMACEgBp3nDhBoM4Ly9YARsXO0PlFBsMjY1Je8H06XuPGRgcLf+DHMACEgDZDNIM0ggCIM2KStIYBtTPc2ZozznCIA7VAwJM6IpwaQYBbOJMMAbMdpii5UsOgel9ey6h8JHVYnVBmtdKMB0ZY4cijs7HaQA6cHLRY8AHmHBJwJxOCDAhc5CjDmQzyN8gDDPs/r2nGAawIHNAAYhsCC5/Y3XBr28/4YZgAyDbQWkAWS2GF9KgMYBPM1YvgNI2KHmCUliCwyKUeEYGMJtffv7MYKkMcSnFmYliAACICWG63UiDbwAAAABJRU5ErkJggg==",
            name: "Hungry Ghost",
            description: "Summons a happy minion who'll eat enemy projectile every now and then.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Hungry_Ghost",
            ui_name: "$perk_hungry_ghost",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtklEQVR4nGNgGGjAiC5gKCv7H0SzcbEzVE6xwdDQmLSX4fzjx4xYDTCUlf0P0ggCIM2KStIYBty/9xTFECZszsKlGQTQxZmQOTDbYYqWLzkEpvftuYTCh6nD6YI0r5VgOjLGDkUcnY/TAHTg5KLHgAsw4ZRBcjo+wIQugBx1IJtB/gZhmGGgWEAGLMicX99+ggMQ2RBs/gapw+sFRRxRCLK9PecI4ZS44EAcVs2gBAQCyClxGAAA3QdCdN3auz8AAAAASUVORK5CYII="
        },
        {
            id: "DEATH_GHOST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8UlEQVR4nGNgoBAwgoj///8zZDta/n/66StRmqT5uBmm7j/OyMjIyMACEgBp3nDhBoM4Ly9YARsXO0NIdi2GxmXdNWD69L3HDAyOlv9BDmABCYBsBmkGaQQBkGZFJTUMA6JKWxjWTG1mEIfqAQEmdEW4NIMANnEmGANmO0zRogUzURQi82FqsbqguzgWTMclpKOIo/NxGkAqYMIlAXMyOo3XgBAsUYcM7t+7hd8ARSU1uCEwP6PTOA349e0n3BBctoPSALJaDBd0Q2MAn2Z0AE6JoLQNSp6gFNaaGYYSz8gAZvPLz58ZLJWlwWyKMxPFAADKrF1s1HNpJwAAAABJRU5ErkJggg==",
            name: "Mournful Spirit",
            description: "Dying creatures leave behind a spirit that deals damage in a small area.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mournful_Spirit",
            ui_name: "$perk_death_ghost",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnUlEQVR4nGNgGGjAiC5gKCv7H0SzcbEzhGTXYmhY1l3DcP7xY0asBhjKyv4HaQQBkGZFJTUMA+7fu4ViCBM2Z+HSDALo4kzIHJjtMEWLFsxEUQzjw9ThdEF3cSyYjktIRxFH5+M0gBTAhE8S5mR0Gq8BIViiDj0WkAEjejRWT18FVoQrFoiKRkU8mtdMbcbtAgYkV+CyGQSQU+IwAADj5kA7r8V7oQAAAABJRU5ErkJggg=="
        },
        {
            id: "HOMUNCULUS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHUxLGQYyPDu/Hq7x17efYPrl588MAQYaYENYQAIgm0GaYRpxAZi8OFQPCLDg06Akz8vg7twI58/vqcdQw4RuOjqYP38hCo2ulgmvmxkYGBIT41FonC7AB5BtRwcsuCQSSyB+v33nLoONrQ2YJtoFiSWNcA2qKspg+vGjh8QZkFjSiDW0H547yCBvZI/bC7++/QSHLkwzyGZ0Z4MMgall4ObE7QUGqN+PbFgExvgA2ABQ2gYlT5DJsOSK7GcYGyYPUgvSAwIUZyaKAQCHZ2484AQw3AAAAABJRU5ErkJggg==",
            name: "Homunculus",
            description: "Every time you leave a Holy Mountain, a helpful homunculus is summoned.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Homunculus",
            ui_name: "$perk_homunculus",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvklEQVR4nGNgGGjAiC5gKCv7n42LHcyWMgxkeHZ+PVzu17efYPr848eMWA0wRNIMAjYBcQyqKspw/vyeerhBMEOYCDlx/vyFKDQ6YELmINsOA4mJ8Sg0ujomQi7AZzsIsOCSSCxpBNO379xlsLG1AdPYABMuzTANsEB8/OghcQYkljTCQxsZPDx3kEHeyB6/F359+wnXDLIZ3dkgQ2Dq8HoBBECaj2xYBMb4ABMyB5Q4YKYj+xnGBskhJ6JhAgCYiVc04Sw0ewAAAABJRU5ErkJggg=="
        },
        {
            id: "LUKKI_MINION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJUlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpxqURBmDy4lA9IMCCS3FDRCODIIcyw/sfd8F0/oIYrOqY0E0HAXftMIbjl6+C2SDNMAOxqWVCNxGk2VJXG4y3nd4EFwcZBJLD6QJ37TAUBSAXwAwBeaN3fSeYj9OA60+uw2mYZhAN4yd5hoBpdFewwBiPPl4GYzl+XbhhIENAbGTDYK69+GAzqgEwoCmjCVcIs3ne9jVgPsgCnF749e0n2GSQZphCmPNhAOb8O8/PwMVYYAxf01i4ZmSD0G0FyW0+vRjVAFDahjkb5BIYGx3AbAYlZUtlaTCb4sxEMQAA/wehIeMmkLIAAAAASUVORK5CYII=",
            name: "Lukki Minion",
            description: "Summons a lukki minion to your help.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Lukki_Minion",
            ui_name: "$perk_lukki_minion",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5ElEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf9j04jNIJghLPgUNkQ0MghyKDO8/3EXTOcviMFQw4TMQbbdXTuM4fjlq2A2SDPMQHR1LMgGgDTBgKWuNtgAkO0gGsTHBliQOdefXGfQlNEE08iGwPgwS3ZeXYXdC48+XoZLgjQh2wyiQWIgjOxSFmzOQnYFyJAkzxCGedvXgC1AB0zo0QMyHaQZphjmEuQwuvP8DHYX+JrGwjUjG4RsM0h88+nF2F3QtK4NnDhALkEOOBgA2QwSR06JwwAAANWEfpsT6MBKAAAAAElFTkSuQmCC"
        },
        {
            id: "ELECTRICITY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFklEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAgmAbAZpBmlE1/zMNBjOhsmD1MJcy4TPqSDNlT0dKIagAyZk07Fpbi+pwNCErJYFn80gAKPbSxgYpE6vxVDLgs0AkEKQBpgBIFdg04ziBWyAkGacLkB2BT7NKAYoGZlCBLh4GDhExBmENPUhEi4mYOrd9YsMP968ZPjz7QuY/+3mFVQDXr9+DWMxsL97x/D+1UsGQTFxsAiI/f3DO4afnz/CbeZGd8G3b98YuLi4wGyQQhAGaYLxkQFILYoBoLT98MM3uAJkg9A1wmhpAYgRFGcmigEAxMx90Sc7dpIAAAAASUVORK5CYII=",
            name: "Electricity",
            description: "You're immune to electric damage, but metal and liquids around you electrify constantly. Look out!",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Electricity",
            ui_name: "$perk_electricity",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6ElEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MVwfE7pmkEZkzc9Mg+FsmBzMEgwD0AFIc2VPB4oh6IAJmYNuM0hze0kFhiZkdSzYTIVpBgEY3V7CwCB1ei2GWhZsBoAUgjTADAC5AptmDC+gA0KacboA2RX4NGMYoGRkChHk4mHgEBFncNDUZ2BwMQGLvbt+keHHm5cMf759AfNP3ryDacDDhw8ZuLi4GBgYXjOwv3vH8P7VSwZBMXEw/f3DO4afnz+C1X379g13SrSysvoPMYSBgZ2XHy6OrPnYsWMY+oYwAAC/ZlY5zL7/LgAAAABJRU5ErkJggg=="
        },
        {
            id: "ATTRACT_ITEMS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4klEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpxqXRXT0TTO+8OR1Mi0P1gAATMU4GaQRhmEHIgAnGwGU7ukEgQ5DVMuHTcOLGbYYTR4rwGsqETzMM9HuyobiCKAPA4M10huOtUxjwASZkDnIg3V4VxnB7334wu3D7L5wGsOCSiK07j9dmDBf8+vYTZ1ThSlAoBjBAAcwQYgwCAbAXQGn79L3H4BQGMwSfzaCkbKksDWZTnJkoBgAK21p6tGPk/gAAAABJRU5ErkJggg==",
            name: "Attract Gold",
            description: "Gold nuggets gravitate towards you.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Attract_Gold",
            ui_name: "$perk_attract_items",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmUlEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf9j0+iungmmd96cDjcIZggTMc4EaQRhmEHIgAmZg812dINAhiCrYyJk+4kbt/HKMxHU/GY6Q78nG4or8BrgjuTP26vCGG7v289QuP0XTktY8Lkgtu48PmlMF/z69hNnaKOrw2oADMAMIWQQVVIiw9AHAJdjP2xTON7wAAAAAElFTkSuQmCC"
        },
        {
            id: "EXTRA_KNOCKBACK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJUlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHUPTiRu3GYzk5MDsl58/MwQYaIANYQIJgGwGaQZphGkGaUAHMHmQWphrmbA5EaTZQkOVIT/FH4xhhmEzlBFE+Bvp/n/x9TtOP6NrBBkuwc3JsPHcZYgXYODABncMzStWTMXQjGwgE7KkQ8BODM0REdlgTTDNyDSKAQew2I7sBWRNWF3gALUdZNCenM9gNsh2QoYxIUuCNLIrOTNwp01HcRFMA7pmFAN+ffvJwOISApcAGYTsGmSDQGqxuuDPnjUMP+/tBbNBNMhbLlMgqRNXGIENAKXtY7v8GOy62Bis3DbBNSNrBPFBNoMwKCmD9IAAxZmJYgAAHeyIITNyQnoAAAAASUVORK5CYII=",
            name: "Extra Knockback on Spells",
            description: "Your spells knock enemies around with more force.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Extra_Knockback_on_Spells",
            ui_name: "$perk_extra_knockback",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4ElEQVR4nGNgGGjAiC5gKCv7H0SzcbGjiJ+4cZvBSE4OzD7/+DFcHxO6ZpBGdM0wAJODWYJhADrIT/EHY5DtIACjcXrBXF3l/4EN7gwOATtRFKFrtNBQZTh58w4jVhc4oGlesWIqhmZkA5mQJUG2o2uOiMgGa4JpRqYxDHAI2Ak2ZE/OZwwvIGtCBizIHJBGdiVnBvY0Z4YDLnsZHAKysWrCaQCLSwicDTLowAYGhj971mDY/uvbT+xe+LNnDcPPe3vBbBAN8pLLFF6s4YM3JR7b5QePDeRohdmMnBKHAQAAsKlWv8GWVdAAAAAASUVORK5CYII="
        },
        {
            id: "LOWER_SPREAD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzUlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1ssA0b7hwg0GclxesgI2LHavGX99+Mpx79BDCcbT6DzKEBcQG2QzSjEsjDCDLw1zLRMi5J27cQqEtNNQYjOTk4fJM6KYfmKONoQGZRncJE4wB0+iQchVFA8wgXIAJxoBpRAcgg/AZwsRAIWBC9wI6ANmO7H+CXjiAIxAJGvDr20+8gYgcDjC1KAYw4ADo0QgyCJ4aYQaA0vbLz5/BJiObjg6Q5UB6QIDizEQxAACqKWCcEuODrQAAAABJRU5ErkJggg==",
            name: "Concentrated Spells",
            description: "Your spells have lower spread and extra damage, but have increased cast delay.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Concentrated_Spells",
            ui_name: "$perk_lower_spread",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkklEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MVwfE7pmkEZsmk/cuMVw7tFDsBzMEgwDsAGQRqK9YK6u8h9Zo4WGGk6NJ2/eYcTqggNztME0smZ8rmBCF3BIuYqhCGQYLkOYcLkAGeDzDhMuFyDbiC8smLDFM7ImmEEgGsZGVseE02gibKdKSmQY+gAAikY//s7iN2sAAAAASUVORK5CYII="
        },
        {
            id: "BOUNCE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyklEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpxqURBmDy4lA9IMDCQAI4ceM2mDaSk4OLMSGbDlNACCC7lAlZwkJDFa8hIHkQRgZM2BShG4LPUCZcNsE0gWh0WwkaQApgwiUBcwU+21EM+AVNJMQAZLWMIMLfSPe/hqsX0QaAwI3d2xg2nrsMSYmgtH3mzBmSDFDn40a4AATIzUwUAwDyPklz8Zc9swAAAABJRU5ErkJggg==",
            name: "Bouncing Spells",
            description: "Almost all your spells bounce around and last longer.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Bouncing_Spells",
            ui_name: "$perk_bounce",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf9j04jNIJghLKQ498SN22DaSE4OLsaErABmO0whLoDsSkZkCXN1FbD/YYZYaKjiNOTkzTuMGC7AB3C5igmXBpDtME34XMPEQCFgwhbP6K5Atx1ZHSOyRHl5OTwQCYHOzk5GrCnR2dmZoCF79+7F0DeEAQC7zzR4VlMSdgAAAABJRU5ErkJggg=="
        },
        {
            id: "FAST_PROJECTILES",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAgmAbC5a/xKsEZvm0BlX4QaDMMgimGuZYIqKHdjgCtEBPjkmYhUiyyG7kokU27DJMZHqZHQ5JgYKARM2wd4DvxhWZ2gzECPHRIlmDAN6idQMS1AoBvSSaDOKAaC03RcoDjYZ2XQYQLYZhEFJGaQHBCjOTBQDACN2aRo7ov6kAAAAAElFTkSuQmCC",
            name: "Faster Projectiles",
            description: "Your projectile spells fly faster than before.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Faster_Projectiles",
            ui_name: "$perk_fast_projectiles",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAd0lEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MVwfE7KC6BX//4M0omtWabwNpmFyMEswDGjwRCgmRhzDAGINQXYhE4ZKEl3ChM0AUgxhwmnAdgaGO/WqBMWZKNGM1YAGIjTD0gOGAQ0k2Ey1lMgw9AEAGrw/XC5N1gMAAAAASUVORK5CYII="
        },
        {
            id: "ALWAYS_CAST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLUlEQVR4nGNgoBAwwhj+WRb/nz39SpQmKWluho3TToD1MsI0n152g0GclxesgI2LHavGX99+gumXnz8zmEZpgA1hAgmAbAZpBmlE1nximxuY3lwjCjcYhEFqYa5lQrcFphgELLx2gWnfltcYhsIAE4wBsxmm+MS5UoYTN26D6UzjN2AaZiiyK1mw+RWk2MKom4GBoRvK72RYmFoOpiHiWFyA4jyuNAYUAONDaWRvsiCrg/kZbNiN2wy4ANibGpyYLtiMZDKxgAnDZBD4NgtVFYwPpZFjggk9kYAAOKCQNIECMH42IgCNHDbD1TKCCFN/3f9/zn0ARw/IdOSwQAcgb7pXPWFgMRJgOL3xMiQlgtI2KHmCXIFsOixMYE4GyYM0g9SC9MBdAALkZiaKAQB8loAyl74j2gAAAABJRU5ErkJggg==",
            name: "Always Cast (One-off)",
            description: "A random Always Cast spell is added to the wand in your hand, up to a maximum of 4.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Always_Cast",
            ui_name: "$perk_always_cast",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA30lEQVR4nGNgGGjAiC5gKCv7H0SzcbEznNjmxmDhtYthc40og2/La4Zf336C1Zx//JgRqwGGsrL/d7bJgBXjAiBDjRw2oxiCYoC5ugoY//868z8YfJ35f0GUAJgJk4O5EgRYENohzgaBE+dKGSyMuhkYGLqh/E6GhdGCDCduvGew0FCFqwMBJnTngQFXGrIwBh8UJlhdYOG1C2HYjdsMuAByGDHhMplYwITV5G+zUFWh8eFepUYsMKIbcO6AL0pYoAOQN92rnsDTAROyJEgQlEhgKQ4WJjAng8SRNQ8TAACUgYD+E3qHewAAAABJRU5ErkJggg=="
        },
        {
            id: "EXTRA_MANA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABC0lEQVR4nGNgoBAwwhj+WRb/nz39SpQmKWluho3TToD1MsI0n152g0GclxesgI2LHavGX99+gumXnz8zmEZpgA1hAgmAbAZpBmkE4V9dJ7EaAJMHqYW5lgnDlq6TDHxWQjgNQQdMyKaDAEjzHHYIjQsge5EJXfLTsXcMKT8hNEkugAG2MnOwZhBNlgEggKxZteUQA8kGIIPbNXZwQ07cuMWA1wDVlkMMLMmLGJ4oeaDQ9+8/YCjafZlh1eOfYBoZMIIIU3/d/3/OfcCZgEAGg1zyd/IJBuZcC3CCYjESYDi98TIkIeEDMM0gANKM1QugtA1KniCTYckVOQxgACYPUgvSA/cCCJCbmSgGAFX2c69olqlPAAAAAElFTkSuQmCC",
            name: "High Mana, Low Capacity (One-off)",
            description: "Your currently held wand loses half its capacity, but gains more mana.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/High_Mana,_Low_Capacity",
            ui_name: "$perk_extra_mana",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAv0lEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MVwfE7pmkEYQ/tV1EsMAmBzMEgwDYACkmc9KCKsh6IAJmQNzNkjzHHYIjQ0ge48Jm4JPx94xpPyE0CS5AAbYyszBmkG0asshBpINAAGQZhC4XWMHN+TEjVsMBA1QbTnEwJK8iOGJkgecvn//AUPR7ssMqx7/BNM404EhNBqxGQpyyd/JJxiYcy3A6QGWFpgwVOPQDAIgzVRPiQxDHwAAMElMPMY+SBUAAAAASUVORK5CYII="
        },
        {
            id: "NO_MORE_SHUFFLE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzUlEQVR4nGP8//8/AyWABUQwMjIyZDlY/H/66StRmqT5uBmmHTjBCLKcBSQA0rzhwg0GcV5esAI2LnasGn99+wmmT997DNYDspsFJACyGaQZl0YYgMmLQ/WAABMuxSdu3IZjGB8bYEE3HabYQkMVhY/NJVhdcIKAZpwugAFkzdj46ICJgULAREwAIouT5AILtLDA5h0W5ESCHLogxcg2ImsGJyhuTlQDGLDYTCgA4V4Ape2Xnz+DTYYlV2wAJg9SC9IDAuAMQUlmAhOUAAC/uG7Kh5lsBwAAAABJRU5ErkJggg==",
            name: "No More Shuffle",
            description: "Most of the wands will be non shuffling. The wands you carry with you turn into non-shufflers too.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/No_More_Shuffle",
            ui_name: "$perk_no_more_shuffle",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnUlEQVR4nGP8//8/AyWAiSLdDAwMLMgcRkZGBkNZWbCT2LjYMRT/+vYTTJ9//JgR5nIWZAUgzdg0wgBMDmoJI0EvnLhxG45hfLxeYEOyHaTYQkMVhY9NHRMum3FpxusCGEDWjI2PDJiI8TuyOFEGwAC6N7C5hAU9nmEBBFKMbCOyZlh6wDAAXTE+v8MAI3JeICclohhADqA4M1FsAAC26U4nPvAqeQAAAABJRU5ErkJggg=="
        },
        {
            id: "NO_MORE_KNOCKBACK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABG0lEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsE0b7hwg+HR6w8MOhLvGF58/c4QZPQBTCNjkDwIg9SC9MANePrpK4M4Ly+DnzEzw567nAzlGSoM0w6zY9jMxsUOxiC1MNcywSS9dP8x7LjOgqLhxI3bBL3DBGOAbAYBkO2dM+7g1QRyBYYB6Jphtvf2VDLgA0z4NIOAtU8SQ36KP2EDPl+9CtdsoaHK8ODCLriiiXM24jSECcaAhTpIMwhERGSDaZhBIENAIMv2J3YDcAGQQStWTIXzebW1sRvw6xuqyciuQQ8nZLVMOK1GcwUyAKUZFANAafvl589gk7G5BORvkO3NfVcZXJS/M8w/9hWsBwQozkwUAwA2c4eRH3nOpAAAAABJRU5ErkJggg==",
            name: "No More Knockback",
            description: "Enemies can no longer knock you back.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/No_More_Knockback",
            ui_name: "$perk_no_more_knockback",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAy0lEQVR4nGNgGGjAiC5gKCv7H0QXuDMwTDvMjiL369tPMH3+8WO4PiZ0zWxc7Ay1RdoYmkEAJAfCMEswDEAHJ27cZiAEmJA5INPLM1QYOmfcwasJpA6rAeVImmG29/ZUEu+CTjTNIGDtk8SQn+JPnAEwzRYaqgwPLuxigIGJczbiNIQJXQCkGQQiIrLBNMwgkCEgkGX7E7cBv6DxjAxABq1YMRXO59XWRlHHhNVdaK6BAWwxxITMAaUwkOnoLoF559+ff2A55JQ4DAAA2F5QiDPtqmIAAAAASUVORK5CYII="
        },
        {
            id: "APOTHEOSIS_NO_RECOIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/klEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxeswMLRjuHcyZMYGn99+wmmX37+zBBgoAE2hAkkALIZpJmNix2MQSC/ohLDAJg8SC3MtUzoiozMzeHsEzduE/QOE7LpMM22jk54NcFciWKAkbk52N8wzZEJSUS5ggXGAGkG+XtiRztRTsdwAQjANGfFxzAgA3wGMqELWGiogl2zfME8FDFchjDhMhnkGhAAGQTSDDLkwAZ33GHw69tPlNCF2YwcoA4BO+FqGbg58buAAYtBMHCo7BeqF0BpG5Q8QSbDkis2AJNXr/0J1gMCFGcmigEAGX1thFITQLIAAAAASUVORK5CYII=",
            name: "No Recoil",
            description: "Your spells have no recoil.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/No_Recoil",
            ui_name: "$perk_apotheosis_no_recoil",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAv0lEQVR4nGNgGGjAiC5gKCv7H0RbONoxnDt5EkXu17efYPr848dwfUzomtm42BlAGATyKypRDIDJwSzBMAAGjMzN4ewTN24z4ANMyByQ6TDNto5OODXBXIhhgJG5OdjfMM2RCUkEXcGCzAFpBvl7Ykc7QadjdQEIwDRnxccwIANcBjJhE7TQUAW7ZvmCeShi2AxhwhbPyK4BAZBBIM0gQw5scEdRx4gtHWADMANgFsESEyO6QlgiwWYQtpQ4DAAABAFRExWoaCkAAAAASUVORK5CYII="
        },
        {
            id: "DUPLICATE_PROJECTILE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwklEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpxqURBmDy4lA9IMBElJsZGBi2HDkOxuiACd10YgCyWiZibAYBHxtLMMbpAlyasWlCBizoGpABIc0YBvigaSDGBUz4JEGasYU8VgN+QRMJNkNgroEZhqyWCa/xRABwGIDS9ul7j8EpDASwpQmQS5CTsqWyNJhNcWaiGAAAOh1LTVp9paIAAAAASUVORK5CYII=",
            name: "Projectile duplication",
            description: "Your projectile spells have a chance to duplicate, but you're more vulnerable to projectile damage",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Projectile_Duplication",
            ui_name: "$perk_spell_duplication",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAgklEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MVwfC7pmbBphYNe5c2DazcjoP8wQJso8gGYALtu3HDkOpn1sLMEYWR0TIRtAmkGacAEWXLbBAD7NWA3wQdNAyAVMeI2HGojuKpzpwJBANMIMcjMyYqBaNDKiC5CaEocBAADIfi3g8vr1fAAAAABJRU5ErkJggg=="
        },
        {
            id: "FASTER_WANDS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJUlEQVR4nGNgoBAwwhj+WRb/nz39SpQmKWluho3TToD1MsI0n152g0GclxesgI2LHavGX99+gumXnz8zmEZpgA1hAQmAbAZpxqURBmDy4lA9IMCETeF/3XcMjTtSGU7cuA3HMDF0wIJuOkjhydVvGcxDhRnqL89GEQOBeobZYLX/oPqY0E1s6i4Ha2a8LIQihgswgghTf93/TDe+gwVAzrXQUGUgBP5pcDKc3niZEWsY4AJqKZjKmdAFdj7oAvsZHXwSec+gZ6pO2IC60k5wgCEbAtKc1GrFMK/6GO5Y+PXtJzh0QYEHCkT0gCuM6WLgeyMIV8vCwIlqAAMSABlS7wGJQhjgY4BoxuoFUNoGJU+QybDkig3A5EFqQXrAlsEkyc1MFAMAJjR+C6KP1IAAAAAASUVORK5CYII=",
            name: "Faster Wands (One-off)",
            description: "All wands you're currently carrying gain a bonus to their cast delay & reload time.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Faster_Wands",
            ui_name: "$perk_faster_wands",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwklEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf9j04jNIJghTLgU/dd9x9C4I5XhxI3bYAzj4/WCuboK2PkgxSdXv2UwDxVmYLwsBOeDgIWGKpg+efMObhc0dZfDNcP4uAAjNheAnAyzCRfA64KdD7rAzkYGn0TeM4TM1MRQy4TNgLrSTrCfYYaANCe1WjHMqz6GoZYFPXpA0QjyOygMkP1eGNPFwPdGEK6OaumAEV2S1JQ4DAAA1Ulgjsk85VsAAAAASUVORK5CYII="
        },
        {
            id: "EXTRA_SLOTS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEElEQVR4nGNgoBAwwhj+WRb/nz39SpQmKWluho3TToD1MsI0n152g0GclxesgI2LHavGX99+gumXnz8zmEZpgA1hAQmAbAZplhMVYJDm4wYrevrpK042TA8IsCDbAFJ09vkbMNtYUgQn+9HrD3A9TDAGLmdjA8hqWZAlQM4D2UCIjQxYkDkvvn4HY2S+asshhhc1dijiyICJkHNv19iBDQGBEzdu4TdAteUQA0vyIoYnSh4o9P37DxiKdl9mWPX4J5hGBowgwtRf9z/TDexOhBkMcsnfyScYmHMtwGL/NDgZTm+8zMiEnkhwaQYBmGZktUzEhAE+ADYAlLZByRNkMi6XwGwGYZBakB4QoDgzUQwAGc6QcgqW4VgAAAAASUVORK5CYII=",
            name: "Extra Wand Capacity (One-off)",
            description: "The wands you're currently carrying gain 1-3 additional spell slots (to a maximum of 25).",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Extra_Wand_Capacity",
            ui_name: "$perk_extra_slots",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0ElEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf+DNEpwczJI83EzPP30FYN+8fU72CCYIUzYnAVSfPb5G6w0OmBC5sCcDbLJWFIEK43uPRZsLgA5E4RBgLdyJ8OLGjs4H68LsIHbNXYMqi2HwOwTN24RNkC15RADS/IihidKHnD6/v0HDEW7LzOsevwTTCMDRmSOuboKOAqxGQpyyd/JJxiYcy3AYidv3sGMhV/QeMamGQRgmpHVMTEQADDNNEuJDEMfAADW92tms1rLQgAAAABJRU5ErkJggg=="
        },
        {
            id: "CONTACT_DAMAGE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQ0lEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHa8Bj1++YQgw0AAbwgISANksKy7CYK4axFAX1AlX2LSunOHk7XVwvoxnI4OohByDzItHDE8PdYDFWGCSW8tvMxy/e4ghepovXEOOeynYQO9OVbjY2UPrGeTUjFHDwN9I9/8PJnm4YIi1H5y95ugmhqVZm+GGgFzxZHs9gwQ3J8PGc5cZmdD9B9Pcs6kbrBkEQK4CuRAEQJqRARO2QAJpRgfIhuA14MnTOwy4ACiMQAFN0AURxoFgjA6m7OxGiSUMA0Ks/RhkpFUYSAFM2AQJGfLr20/8BpjpLGYIcj/OIMTPgSIOShegxIXhAlDaBgFQtHll/2c4dSWWYd1OS4amWmEUxZbKduCU+fLzZ7geijMTxQAAzbtyqSCZKJkAAAAASUVORK5CYII=",
            name: "Contact Damage",
            description: "You take no damage from close-range enemy attacks but enemies near you take damage.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Contact_Damage",
            ui_name: "$perk_contact_damage",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+ElEQVR4nGNgGGjAiC6Q51P2vy6oE85vWlfOcPL2OjD717efYPr848eMWA14M+///+N3DzFM2dkNF8txL2WwVLZj8O5UhYuBDIIZwohsgLuJz38YO8TaDy6+5ugmhqVZm+GGIBvAhM1fMM09m7rBmkEgepovw9by22A2Gxc7XC0TrsABaUYHyIbgNeDJ0zu4zGUAhZG5ahCcz4gtDCwUtOBiJx5cwzAEFB4iSYzYwyDE2o9BRlqFgVjAhEuCWEOYcEmY6SxmCHI/ziDEz4EiDkoXoMSF04A1RzcxeGX/Zzh1JZZh3U5LhqZaYRR5UKKatKULIwUPYQAAD9xV3hPI6KMAAAAASUVORK5CYII="
        },
        {
            id: "EXTRA_PERK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4klEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpBmk0lhQB87HaLCnCcPb5GwZxqB4QYEFWANKMzSUwm0/fewy2+fjdp3A9LDAGSDGyS5ABjA+zGVmeiYFCwIQugCsAcckxUd0Fv6ABhg1gk2Oimgt+ffsJTmGgRAJiI9sG44PkQGqQ5ViQTQMlElA8YyQkbk4wZaksDVaDDMAGgEwFJRJQPIMSCa6YePT6A5gGuQRkGAhQnJkoBgBgimtGZaMReAAAAABJRU5ErkJggg==",
            name: "Extra Perk",
            description: "From now on you will find an extra perk in every Holy Mountain.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Extra_Perk",
            ui_name: "$perk_extra_perk",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAu0lEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf+DNBpLijA8/fQVwwBpPm6Gs8/fgA2CGcKCrgikecOFGwzivLxgPshAmM2n7z1mCDDQYDh+9ylcPQuyZpBikM0gzchegLHFGRjA8shyTAwUAiZsgtgCEJc4EzaFMD8TI87EQCFgQrcBFFUvP38Gs2E2wtggcZA8sktY0E0ExTMoqlDSATcnmLJUlgbLUzUlMgx9AACfcFO3xKcTiAAAAABJRU5ErkJggg=="
        },
        {
            id: "PERKS_LOTTERY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHUlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAgmAbAZpBmlE1hy7eS+DWV07nA+TB6mFuZYFm00gjTCgbmrGoL55L8PN06cYTjVVYqhlQTYdWSMIrGuoBtNBDa04DWJB1gCShNkK04gMjixZiNsFMHB160Y4G2YQTOPNo4cY1K3tGJABEwqPgYFB29sfxUUgzSCNYAPRNGM1ABuAaYQZhNOA1zevY/UKsgteP36EPQx+ffvJcH/lIob7DAwMiuFxKF6Bafxy7ABcLQM3J6oBDEgA2SBkjdgA2ABQ2j597zGDOFQQlhpBBiED5KRsqSwNZlOcmSgGALKSgIvsF6wgAAAAAElFTkSuQmCC",
            name: "Perk Lottery",
            description: "When you pick a perk, there's a 50% chance the others won't disappear.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Perk_Lottery",
            ui_name: "$perk_perks_lottery",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzklEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf9j04jNIJghLMgSyJpjN+9F0XTz9CmGU02VGOqY0E0HaUTWvK6hGkyrm5qBxc3q2lHUs6AbALIJpgEEghpa4XJHlizE8A4LNj9e3boRzgYZBNN48+ghBnVrOxS1TNgM0Pb2R3ERSCPYMDTNOA1ABzCNMINwGvDr20+G1zevY3gF2QWvHz+Cpwe86UAxPI5BVF0TzAYZCtL45dgBjHTAiO4kUlPiMAAARpZb5a/wmp4AAAAASUVORK5CYII="
        },
        {
            id: "GAMBLE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFklEQVR4nGNgoBAwwhj+WRb/nz39SpQmKWluho3TToD1MsI0n152g0GclxesgI2LHavGX99+gumXnz8zmEZpgA1hAQmAbAZpxqURBmDy4lA9IMACk1ywdipWTeLiIgz+bnE4DWVC5uhVlIMx9717cPbLl28YNu5ahNUlKC5ABsqzZkIYu04y6P1+AWaeuLANRY1ZRDCmC1DArpMMDFDNNk4RDLgAEzLnblo6goOmGZchTMicr0pKKIaga8JmCBO6AMiQSx2dKGJaGio4vcCCU4aBgWFyfx3DgYMnGdZu2MkQHODO4GBvTtgFDEjAUF8LrBkEQDSIj9UFoLS9ZPF6hpjYQAwFR/atwBDr7ZkN1gMCFGcmigEAn+xdO0O+UkcAAAAASUVORK5CYII=",
            name: "Gamble (One-off)",
            description: "You gain two random perks.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Gamble",
            ui_name: "$perk_gamble",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBUlEQVR4nGP8//8/AyWAiSLdDAwMLMgcRkZGBkNZWbCT2LjYMRT/+vYTTJ9//JgR5nIWZAUgzQvWTkXRJC4uwuDvFseAbCjUEkYML6QLsTHoVZQzcN+7B6ZB+OXLNwwbdy3C6QVGlEB01kIN0V0nGRh+v8DQZGHgxXDixm1MF+DSbOMUwYALMCFz7qalIzhomnEZwoTM+aqkhGIIuiZshjChC4AMudTRiSKmpaFCnBc2rNyKIjm5v44hOMCd4dqNO2AaxEdOD5gGrNqGYoChvhbD2g07wWwQDeJjgP///8PxxVObwImksTj9///vtzDwjK7q/yD5/99vwfWgpgMyAMWZiWIDAF4of+DwchKdAAAAAElFTkSuQmCC"
        },
        {
            id: "EXTRA_SHOP_ITEM",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8UlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAgmAbAZpBmk8dyEZrOjEsRgMA0DyIAxSC3MtE7KCEz0GDAycjqg0AcAEY4Bstii5AGYj08gugRmI7EUmQjZYWC3BK8+CrBBmAzINdgXMKx6TGE4w5IGZAfU3UQ0AAbDi82j0sRi4K0CaYd6T4OYkzguEABOMgS3a0AHMdqwGGBnMxR4GWAIRlqBQDGCA2fB9PypNjBdAaRuUPEEmg1wCNgyHzSAMUgvSAwIUZyaKAQB5+3T4SaBUiQAAAABJRU5ErkJggg==",
            name: "Extra Item In Holy Mountain",
            description: "There will be an additional item in every Holy Mountain you haven't discovered yet.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Extra_Item_in_Holy_Mountain",
            ui_name: "$perk_extra_shop_item",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtElEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MVwfE7pmkMZzF5LB/BPHYlAMAMmBMMwSDANA4ESPAQMDpyMqjQcwIXNANluUXACzkWlsLsFqAC5gYbUEzsbrInN1lf//N4f8///tIAoNEofL/X4GpnEaYA5S+O0gKv22AcUQEI3VCyfQ/IrVO9CwgQEWZI6RwVyGc9PMUfwKopHDADk9YLgAbsP3/ag0LVMiw9AHAPwqcXRxPpgmAAAAAElFTkSuQmCC"
        },
        {
            id: "GENOME_MORE_HATRED",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTklEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAgmAbAZpBmmEaTbmF2E4ETcVjEFsmMEgDFILcy0LNptAmpDBVP9GMG2xKBtDLQuMAbMZpPnonnlgtpysPph+9PgiXA5kCLIXWZBNgzl1wosrYLoAKg7jW0PVnP34Bq6HEUT4G+n+f/H1O9iGxzfPMsiqG4MlQWwQQOaD2CBXSHBzMmw8d5kRxQUwDTAaXRybHAsyp+PGJoYKDT+wn2HOhoECCR1wmIDU4DTg7Mc3cM19ptEoTi86vRQcJsj+RzHg17ef4NAtfnaWoVcKNQxgLgDJwdQycHNiuoABCkAKjb8+ZIjilgfzl319iGEzigtAafv0vccM4lBBkEtAGtA1ISdlS2VpMJvizEQxAABby5wvN0g+zAAAAABJRU5ErkJggg==",
            name: "More Hatred",
            description: "Creatures become more aggressive towards each other.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/More_Hatred",
            ui_name: "$perk_genome_more_hatred",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1UlEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf8ja+yVMmaQk9VnePT4IkPxs7MoBsEMYcRlwIm4qRgusFiUjWEAC7ICZM1H98wDs2EugImDDEF2JQu6LSBng8CEF1fAdAES2xoqj+wdRmTN5uoq/0G2PL55lkFWHWIQNjbIFSdv3sH0AgiAnA5yNoiG2cxweilDgYQOXBwZsKDwGBjAzuuFOrvPNBpsI8jmIpAhUHlkwIgrFmBRCAPIUYkzFrC5BJlPk5TIMPQBALC0c0+SjzBiAAAAAElFTkSuQmCC"
        },
        {
            id: "GENOME_MORE_LOVE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPklEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpRtZoa+DFkOJbAWbP2dzBcPjCNri8OFQP3AX+Rrr/H73+AFewsPYQVhfEN9vBXSInKsCw8dxlRiaYJLrm/qWdDK+evAZjEBtZDtmlTMg2gJwNAiBN6AAmBlOD1YAU3wq4wsLocrg4jA2Sg4ULVgNeIdlMDBvDgE3n54LppQfnMdx7dBcuDmKDxJDVwAALMgcUVTrCDgzR9klgDcfvH4TLgcRABoHUIANGbNGY6dzFoCSnzCAmIwp3Nkjz9L1lGNHIgmIcFIAUgkJb55EDmH/l7QEMm1G8AErbp+89BqcwEAC5BKThMAOqJuSkbKksjfACCJCbmSgGADAuoR3T2TYXAAAAAElFTkSuQmCC",
            name: "More Love",
            description: "Creatures become more friendly towards each other.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/More_Love",
            ui_name: "$perk_genome_more_love",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3UlEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MVwfE7pmkEaY5kznLoaFtYfANMxQEIZZguECQ6gBIADSiA7im+3gLoG5gglZAbrm/qWdDK+evAbTyOLI3mNCtwXmXJBGZADjw+RxGmBhZQFXXBhdjkKDxEHyeA04cewEmF56cB6cDaJBfGR5rIForq7yH+ZMJTlluCYQiLZPYrj36C7D9L1lYP7Jm3cY8cZCJtQQMRlRsNORNSPHAiMuA0DA1sCLQUfYgeHK2wMMhy9sg4vjNICBjJQ4DAAAuVVyOCQl4VcAAAAASUVORK5CYII="
        },
        {
            id: "PEACE_WITH_GODS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABL0lEQVR4nGP8//8/AyWABUQwMjIyZDlY/H/66StRmqT5uBmmHTjBCLKcBSQA0rzhwg0GcV5esAI2LnasGn99+wmmT997DNYDspsFJACyGaQZl0YYgMmLQ/WAABO6onIeYRSaEGBCNh1dMy5DkF3KhCzR+eUtAzq/oKGZ4fiNW2AMYuN0AbohMM0REREMjFAYHhGOYQgjKCoCjPX+v/j6nQEdvPjxm+H+g/sMigqKYD6IDQKWGmoMEtycDBvOXmLEcAEygGmGaQSBlStWoqhhwmcAsq0wekJDLXYDfkETCTIA2Zaibw6njQyNGEoM7FDUMuGzHWSbp6Yuw+72PjC/vLycoefCIRQ14JQIStug5AlKYSCAHM/IGs6XlYHpl58/M1gqS4PZ4FigJDOBCUoAAFfhiFGjPO3FAAAAAElFTkSuQmCC",
            name: "Peace with Gods",
            description: "You make peace with your Gods.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Peace_with_Gods",
            ui_name: "$perk_peace_with_steve",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/0lEQVR4nGP8//8/AyWAiSLdDAwMLMgcRkZGBkNZ2f9sXOw4Nfz69pPh/OPHjDCXMyFLEtIMAiB5kDqcXijnEUahCQFG5EBcb2KBEaKdX95i1Xjixm1GDBd0oikG8QsamhmO37gFxiA2Bvj//z8cm6ur/AfhdcbmYHr58uX/kcG////AYiA5mB5GZC9YaKiieOHFj98M9x/cZ1BUUATzQWwQsNRQw+4FdADTDNMIAitXrERRw4jsAiM5OZRoBPkbHYBsBwGiXLByxUqGFH1zOG1kaMRQYmAHTkxYXcAITYkgNswlIA3br18Gs10rixi6yspQUiKKAeQAijMTxQYAACeNk0WTFJe1AAAAAElFTkSuQmCC"
        },
        {
            id: "MANA_FROM_KILLS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2ElEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpRtf4q+skxMAycxSDxaF6QIAJlzNBmvmshMAYZhA2wARjINsO0zyHnQGM0Q1BVsuEzVSYZhiAGYLXBcgAWTM+MbxhQCxgwiaY8pM4MZwGfDr2DkUDiA0Sw2vAL2gigcU7zBCYZlhaQFfLhN1hCEPQNaMDcEoEpe3T9x6DUxhYMzSe0TUiJ2VLZWkwm+LMRDEAAExOXfxWIXeAAAAAAElFTkSuQmCC",
            name: "Kills to mana",
            description: "Every time an enemy near you dies, you release mana-recharging liquid.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kills_To_Mana",
            ui_name: "$perk_mana_from_kills",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAk0lEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MVwfE7pmkEZkzb+6TsLZMDmYJRgGoAOQZj4rIRRD0AETMgfdZpDmOewMGIYgq2PCZTJMMwjADCHoAmQA04yLT9CAlJ/4+QQN+HTsHVwTiAbxCRrwCxrPIMBWZg43BESD+NjUMeFyAbIhyJqpnhIZhj4AALkwPpJEGev3AAAAAElFTkSuQmCC"
        },
        {
            id: "ANGRY_LEVITATION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+0lEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHa44xaMMTD95eodBRlqFYdq6ZoaXnz8zBBhogA1hAkmCbAZpBmlE1gwCZjqLUfggeZBamGtZ8DkVZPupKxBDzHQYGNJ61mGoYUI2GRdYt9OS4dSVWBRXYBiADczZ0cVACLAQUgA35DJ2eSZ0gbYNBxnWn78NpokBTMgckEZNeSkwG0SD+CQZcP3hM4ZAQ1UUmqQwqAqwh9sKokGGYAO/vv1kYODmRHXBL5AgmiuIAWADQGkblDxBhoBcAXMNNptBGKQWpAcEKM5MFAMA3bFrZqZmcTcAAAAASUVORK5CYII=",
            name: "Rage-fueled Levitation",
            description: "Killing an enemy makes you replenish some of your levitation power.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Rage-fueled_Levitation",
            ui_name: "$perk_angry_levitation",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6UlEQVR4nGP8//8/AyWAiSLdDAwMLMgcRkZGBkNZWbCT2LjYwWIpHmVg+snTOwwy0ioM09Y1M5x//JgR5nImZANAmkEaYZpBwExnMYqNIDmYJRguQAcg209dgRhipsPAkNazDkMNEzIH2WZksG6nJcOpK7FY1TEx4AFzdnQxEAIs2ATbNhxk0JSXYrj+8BlDVYA9RPAydgOY0AXWn78N1gwCIBrExweY0AVAtgYaqqLQ+AAjcko0kpMDRyOyrSBD0MGvbz8Zzj16xIjVBSBArO0YLmBAcgU2ALIZBJBTIoYBpAKKMxPFBgAA9VBX97zVTz4AAAAASUVORK5CYII="
        },
        {
            id: "LASER_AIM",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9UlEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpxqURBmDy4lA9IMDEQCFgQjedGICslolqLlBtOQSmT9y4BabbREA+JQxYYIz79x8wFO2+zLDq8U8wXeWqCzZk3/fvDNIMDAzqnJxw9lMGBoYrDL9RDVBUVGDoc9Vl+Dv5BANzrgVYc9Wblwirvn5CsVmCm5MBng78jXT/v/j6nSS/gwzYeO4yIxN6IiEGIKtlIslaLABsAChtg5InyGR8LoHJg9SC9IAAxZmJYgAApa1hHo5PSHsAAAAASUVORK5CYII=",
            name: "Pinpointer",
            description: "Your spells fly faster and have lower spread, and you have a handy sightline for aiming!",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Pinpointer",
            ui_name: "$perk_laser_aim",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsUlEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf9j04jNIJghTAwUAiZkDjG2o6tjQpZQbTkEpk/cuAWm20TECRrGiMyx7jr2Py/CEM7vc9UFG3Lz+3cGdU5Ohn3fvzNIMzAwPGVgYGg9dw6slwXZAEVFBbCmv5NPMDDnWoA1V715CZH8+omwC8zVVcBRSAw4efMOZiz8gsYzIYCsjolhoFMiw9AHALHaOvPWpASSAAAAAElFTkSuQmCC"
        },
        {
            id: "PERSONAL_LASER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEklEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpxqURBmDy4lA9IMCCTWGKRxmcPWdHF15DWdBNh2nu2dTNIOTOx8DkyI+hiQNEnPqF2wU9m7oZ4u8FgtlZDJUY8tMY2hlOGm/HbsCTp3fA9EKl9WAXbGbYi9XpYuheQAYRxhDbd+xfx4ATcHOCKSZkMZD/ZaRVGEgBTNgESTGECT2RgICZzmKGIPfjDEoyBlg1IatlQpYAxblX9n+GU1diGdbttGRoqhUmzgWgtA1KnqAw2DYVnj0YYtJRYwBkMwiD1IL0gADFmYliAACJXVxgqKDxdgAAAABJRU5ErkJggg==",
            name: "Personal Plasma Beam",
            description: "You constantly fire a devastating plasma beam, but you fire spells much slower",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Personal_Plasma_Beam",
            ui_name: "$perk_personal_laser",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3klEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf/DNKZ4lMHF5+zowjAIZggLNmfBNPds6mYQcudjYHLkR5HnABEzHjNgGMCG5GyQ5vh7gWB2FkMligHTGNoZjs84i2kADDx5egdML1RaD3bBZoa9DLgACy6JCGOI7Tv2r2PAB5iw+V9GWgWvJrwGwACxhrBgi2cQMNNZzGCmw8Bw670Bw70nFxhwqWNCNxEU517Z/xlOXYllWLfTkqGpVpi0lDg7fxY4JYIAKDZ2XEYEIraUOAwAAAinSalRDsl5AAAAAElFTkSuQmCC"
        },
        {
            id: "MEGA_BEAM_STONE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABCElEQVR4nGNgoBAwwhj+WRb/nz39SpQmKWluho3TTsD1MoA0SwkI/DeUlQVjmzjj/wf+b/wPAyA2SAwmD1IL0gPSywIiQDaL8/IysHGx47UZJi8O1QMCTKT6+YM1qjdZ0E0nBASOcjMwcDEw/IPymRgoBEwwhvI8WTDdeaOX4TXLM5waYOowvHA36TGYLtcoZph5YwZOzTB1GC5ANv3og30M6MCz0QasGd0FTMgckAK/Hd4Mi5pXYRhgreCE3wV+O7zhps+ci90LaVYFKOpQwuDqs0soNBgoQCiYl1DkkA0Ape0D3ucZeIM4wYJnGW5ANCRDNJydC+HDwOd13xlMozTAbOpkJkoAAKxzcaprKV0EAAAAAElFTkSuQmCC",
            name: "Summon S\u00e4dekivi (One-off)",
            description: "You gain an artefact that allows you to call the celestial rage.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Summon_S\u00e4dekivi",
            ui_name: "$perk_mega_beam_stone",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzUlEQVR4nGNgGHTAUFb2PwjbxBn/P/B/438QANEgPkwOWT0TumY2LnYGEMYGYHLIhjCR6sIP1l9R+CzoNhACAke5GRi4EHwmZEnlebJguvNGL8NrlmdYDYCpweqCu0mPwXS5RjHDzBszsGqGqcHqAmQbjj7Yx4AMPBttwJrRXcCEwoO6wm+HN8Oi5lUo4tYKToRd4LfDG27DzLmYXkizKkBRgxEGV59dQqHBQAHhHRRxKGBEF1BPkkRJacbJGgxn595AUXNz3nMMfUMYAAA49lDNiqVprwAAAABJRU5ErkJggg=="
        },
        {
            id: "APOTHEOSIS_GHOSTLY_VISION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZpxqURBmDy4lA9IMDEQCFgQTcdBh7/hQcPGMgy/8dwCYoB6Bp1LIMZkMGV42sxDMLwwmM0zW2VmWCMLIbuMiYGCgEjiPA30v3/4ut3krwgwc3JsPHcZUg0IgOYApgGdHF0wIKcSJBDF5cGmFoGbk7qhAETiAClbVDyBJkMS664bAZhkFqQHhCgODNRDAAfSFytisz33AAAAABJRU5ErkJggg==",
            name: "Ghostly Vision",
            description: "You can see things which aren't there.. Without assistance.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Ghostly_Vision",
            ui_name: "$perk_apotheosis_ghostly_vision",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkUlEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf9j04jNIJghTAwUAhZkDrrtj/8iHCjL/B+rOhZspsI06lgGw8WuHF+LYRBWLzxG09xWmYnCR3YVCDAic8zVVf4T64KTN+8w4vSCLFQRTBM2p8MAC3r0IAcQLk2w9ECVaGREFyA1JQ4DAADe8Dpxgj0OPQAAAABJRU5ErkJggg=="
        },
        {
            id: "APOTHEOSIS_HASTE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7klEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHToD1MsI0b7hwg0GclxesgI2LHavGX99+gumXnz8zBBhogA1hAQmAbAZphmn0XGgBprfHn0AxACYvDtUDAizotoA0l5k3QDgLGzAMQQdMyKajaGZgALNhroHR6F5kwmozEoAZgmwYVhdsjz/B4KjhwdB1EmEIiI3Mx2YIC14PQjVh8Bc2MJzPuojqAnIBEyEFIG+BMAyAvIQcMyzIiQQUuiDJ7QwIDcgAphmcoLg5iXMBAw6bUbwAStug5AkyGZZc0QHMZhAGqQXpAQGKMxPFAACSKm8M2EDQ+AAAAABJRU5ErkJggg==",
            name: "Haste",
            description: "You move faster and levitate quicker.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Haste",
            ui_name: "$perk_apotheosis_haste_name",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvElEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MVwfE7pmkEYQ9lxogWEATA5mCYYBMADSXGbegNUQdMCEzIHZDNIMAsiGIBuGzXtg0HAi5v+3/3cwMEwcRJurq4AxVhdsjz/B4KjhwdB1EuICEA1jgwA2b7EwEAAw76DwFzYwnLS4g+kCbADdFSA2yKVYXfDr20+MAIIpLruB0AxLDxgJyRCaDrABkN9hhoEMgCUmRnSFpKbEYQAAkWprXrXidrYAAAAASUVORK5CYII="
        },
        {
            id: "APOTHEOSIS_VOID",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeElEQVR4nJVTwUrDQBAdg9girA1pJSpJbWmklxySU/0AP6IHf6KXfoRfIn6JntpDL0I8pL0Y0IgUpBUk8ibMuqmt4MDsvp2dN7Ozs0v0Pyk2DXsCxmFYzFcrxrdJQsMgoPsso0vXrRCwNw5DupnNNJdAPrPtIvZ9ZCgG/YBVcKuh9BoKX3DAtTDcpSm5StHBYY0DPjwmOvjTc1axtRqKfeW0FgYcM83zChHYcZrkd3v08r7U9t5JtaR9ARfeqc4IAsh5/soaRxFNplPODpksFvSmSswyDH5qhsZRxPNoNGIFdpym3ocvOCWbSBa/yCLbgkgAC61Ea0TS+YJ2yXnb19jkEKKZrZJMZglyMvhtnJqoo0qy9NwkbKsfPmYJhDZ+fqw5mLQMt47bl26Y4h/ZGlvmhryDQT/gliEIyMCwmT6VAO16nbJlmTn2y4uSByNEcw++4OgA+BjXnseGfq1G3S9i7SjF89WxyzMeED4ZfCufSd7Dzv79Id/H9dk5VH0AEQAAAABJRU5ErkJggg==",
            name: "Void",
            description: "Gain immense power, but the void grows jealous of your options.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Void",
            ui_name: "$perk_apotheosis_void",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/klEQVR4nMVSPQvCMBA9FRQUEaKggsGhimszuepP6s90aldBpy4KWhB3I+/IaVqjbvrg8nGXe3fJC9EPYUPOetVhtLYwJCwXM7ZBr4uZSVwsTGC0ts12i9I8J5dAm+2uVACxKskDqtPhiq5drixrMcR9gvoznWg+GXPFQa/L+1ujSSaO2QD494cjocsQgcWA1k+XKycVxZlW6zWlWUZK9dkfjYb0CVbaNnFskySxAGbsK9d5xdK7v1J9npEshFLAO1eGL5skwYRM/I7gFUbr0stXVZACUOvtR4rcI+ExZS2qyJ+YKvU4Xws0Ap1ZKkjmk4IAsTTPQ3lfEb7333EHcKWFieRD15UAAAAASUVORK5CYII="
        }
    ],
    spells: [
        {
            id: "BOMB",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAiElEQVR4nGNgGDCQ7mRZl+hLgmoGMKhL9CVKG1wDJmBE42toW0pKK0HYz5/eu3H1OJoCFlyqNXUsNHUsGBgY0PQwoal+/vQeRDVE0Mk9SkPbErsGiGq4DcjiDFg1IIPrV06gMbD7AeJRiJGYShnAAGEDxPWYDDgXAlCCFc1/EF+hhRLJ8UB7AAAdgDrjCXh2MgAAAABJRU5ErkJggg==",
            name: "Bomb",
            description: "Summons a bomb that destroys ground very efficiently",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Bomb"
        },
        {
            id: "APOTHEOSIS_BOMB_GIGA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoUlEQVR4nGNgoDVId7L8X5fo+x+XPCMhzTP3HQerQTakaf5mvPpQDGAgABjRBTS0IZokpZUwFO/ftRRDPSM+zZo6FnC561dOYDWEkRibYQZhM4QJWSE2zcgakV2E1YDnT+9hNQDZEHTAQsh2QoAJ3XZsrkAPA6wG4AO4nI81DCSllcA0uktwhQ/WdIAOYOEDMuTGVUjSxmoAPkNAAF0zVQAACaRJkOs1tqcAAAAASUVORK5CYII=",
            name: "Giga Bomb",
            description: "Explosion!!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Giga_Bomb"
        },
        {
            id: "LIGHT_BULLET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAARUlEQVR4nGNgGAXkgrWFn/BwGbDKPVv289mynxDGz9d/IWzs6tYWfoJIQ9T9hKlG14MsBFEH0fkMLIjPVciaCatjGAkAAClgP0vd8vekAAAAAElFTkSuQmCC",
            name: "Spark bolt",
            description: "A weak but enchanting sparkling projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Spark_Bolt"
        },
        {
            id: "LIGHT_BULLET_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAiElEQVR4nGNgoAR8nixOUA0ThPp+v5qBgYHFwALOxgUY4azvh/0ZZHQYnlzhtN1IQMPnyeIgs2V0oGJPrvy5cII39yV1bIACiLtBegj5geRQohJYW/gJD5cBq9yzZT+fLfsJYfx8/RfCxq5ubeEniDREHVw1uh5kIYg6iE6IID5XIWsmrI76AAD6KWBDXTJ/GgAAAABJRU5ErkJggg==",
            name: "Spark bolt with trigger",
            description: "A spark bolt that casts another spell upon collision",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Spark_Bolt_With_Trigger"
        },
        {
            id: "LIGHT_BULLET_TRIGGER_2",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAl0lEQVR4nGNgoDb4PFn8PynyTDDG9/vVYAkWAwsUPiF5RhRFh/3/M8joMDA8ucLAabsRRQ6XPCPMWWCTQZIw8OQKw58LJxh4c18y4pNnpNQFcADzE1gRnjDAJU92LNAWOPZd/k+MGAM+RaWn/v8HYRj75+u/cD5eTY59l+EKYZqQNWM1hAFNAqYJZhhMjihvoBtIkia6AgDX8qZYZf/4/gAAAABJRU5ErkJggg==",
            name: "Spark bolt with double trigger",
            description: "A spark bolt that casts two new spells upon collision",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Spark_Bolt_With_Double_Trigger"
        },
        {
            id: "LIGHT_BULLET_TIMER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAtUlEQVR4nGNgIBEwQijt4OkCEiYQ9ocXZ66uzcSnSTt4unX26cPXvy9fvvzw9e/W2ae1g6fj02ANVv0aDKTN0yF6cClmglBPLmxgYGAw8Km5sKUFwiagQcYggIGB4cKWFjgbn4YPL85UTLly4w3Pnj17brzhqZhy5cOLM1QNJSqAtYWf8HAZsMo9W/bz2bKfEMbP138hbOzq1hZ+gkhD1MFVo+tBFoKog+iECOJzFbJmwuqoDwDgj3+ZIvLZ8wAAAABJRU5ErkJggg==",
            name: "Spark bolt with timer",
            description: "A spark bolt that casts another spell after a timer runs out",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Spark_Bolt_With_Timer"
        },
        {
            id: "BULLET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAALElEQVR4nGNgGAXUAPnLuamhJ3859/H3yf///4eQmOD4+2SauSqfDD8MNwAAJOEj2VH12V0AAAAASUVORK5CYII=",
            name: "Magic arrow",
            description: "A handy magical arrow",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Magic_Arrow"
        },
        {
            id: "BULLET_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAcUlEQVR4nGNgoAR8nixOUA0ThPp+v5qBgYHFwALOxgUY4azvh/0ZZHQYnlzhtN1IQMPnyeIgs2V0oGJPrvy5cII39yV1bIACiLtBegj5geRQogHIX85NDT35y7mPv0/+//8/hMQEx98n08xV5PiBIgAAuRBE0WWSk08AAAAASUVORK5CYII=",
            name: "Magic arrow with trigger",
            description: "A magical arrow that casts another spell upon collision",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Magic_Arrow_With_Trigger"
        },
        {
            id: "BULLET_TIMER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAnklEQVR4nGNgIBEwQijt4OkCEiYQ9ocXZ66uzcSnSTt4unX26cPXvy9fvvzw9e/W2ae1g6fj02ANVv0aDKTN0yF6cClmglBPLmxgYGAw8Km5sKUFwiagQcYggIGB4cKWFjgbn4YPL85UTLly4w3Pnj17brzhqZhy5cOLM1QNJSqD/OXc1NCTv5z7+Pvk////Q0hMcPx9Ms1cRY4fKAIAn3ZkJ7sHXLAAAAAASUVORK5CYII=",
            name: "Magic arrow with timer",
            description: "A magical arrow that casts another spell after a timer runs out",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Magic_Arrow_With_Timer"
        },
        {
            id: "HEAVY_BULLET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAZ0lEQVR4nGNgGAWEASNW0f7D6ioyKhoKBgwMDCoMLXcYahgYGFQZW1E0QBTdeXIHolSFoQXNlDsMNaqMrSAN/YfV4aJwgxEiDFAbbjy44Ku4Fd1JEM0qMioQLkTzDbBSIjw4ChggAACIpRsFoZGYTgAAAABJRU5ErkJggg==",
            name: "Magic bolt",
            description: "A powerful magical bolt",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Magic_Bolt"
        },
        {
            id: "HEAVY_BULLET_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAqUlEQVR4nGNgoAR8nixOUA0ThPp+v5qBgYHFwALOxgUY4azvh/0ZZHQYnlzhtN1IQMPnyeIgs2V0oGJPrvy5cII39yV1bIACiLtBegj5geRQoj1gxCraf1hdRUZFQ8GAgYFBhaHlDkMNAwODKmMrigaIojtP7kCUqjC0oJlyh6FGlbEVpKH/sDpcFG4wQgRmw40HF3wVt6I7CaJZRUYFwoVohiil2PtEAgAC2zv9OCN5LwAAAABJRU5ErkJggg==",
            name: "Magic bolt with trigger",
            description: "A powerful magical bolt that casts another spell upon collision",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Magic_Bolt_With_Trigger"
        },
        {
            id: "HEAVY_BULLET_TIMER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA10lEQVR4nGNgIBEwQijt4OkCEiYQ9ocXZ66uzcSnSTt4unX26cPXvy9fvvzw9e/W2ae1g6fj02ANVv0aDKTN0yF6cClmglBPLmxgYGAw8Km5sKUFwiagQcYggIGB4cKWFjgbn4YPL85UTLly4w3Pnj17brzhqZhy5cOLM1QNJdoCRqyi/YfVVWRUNBQMGBgYVBha7jDUMDAwqDK2omiAKLrz5A5EqQoDKMSQwR2GGlXGVpCG/sPqcFG4wQgRmA03HlzwVdyK7iSIZhUZFQgXohmilGLvEwkA6TJbU8oULG0AAAAASUVORK5CYII=",
            name: "Magic bolt with timer",
            description: "A powerful magical bolt that casts another spell after a timer runs out",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Magic_Bolt_With_Timer"
        },
        {
            id: "AIR_BULLET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAYklEQVR4nLWRXQrAMAiDdexo3jrezUJlIvRHymieUsgXlRLdELrcP1daawGwLmdQwp4OxhL8jt0i4l5ViSiekwVWxZYmFFgA2N8w1tvH8IZxI+kG5mV+Pq3IZX/wicf6290AKaCknJ9I+IwAAAAASUVORK5CYII=",
            name: "Burst of air",
            description: "A brittle burst of air capable of greatly pushing objects",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Burst_of_Air"
        },
        {
            id: "SLOW_BULLET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAxklEQVR4nKVROw7CMAwNFUOlTpyDPSNBPQZrJRYukUt0ido1x0BuR/aeIxOKtyAR5OYDEYinDPazn+wXM/YnnHM5OYBN85T6jC1jTAGej7XPm7bfH05UXmZ9v158zKW5yV2kbtqeSzOAdU8MYLk0Tdu/nxV2FzQbirg0tBihE/U4oQKkZaqyxXHChIkEnXhN6ETtX0iuv0QYJ0zK+ZCKomXWCtCXwyYFuMya0tU0HSG07rvpFKmgfLgf4M8SeeDSlDX5/36LByHodMkdDOP4AAAAAElFTkSuQmCC",
            name: "Energy orb",
            description: "A slow but powerful orb of energy",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Energy_Orb"
        },
        {
            id: "SLOW_BULLET_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAy0lEQVR4nGNgoAR8nixOUA0ThPp+v5qBgYHFwALORgZzDnyHsxnhrO+H/RlkdBieXOG03UjAhs+TxaGqGRgYZHS+H/bH6jazhvfYbbDfuwAueKpBELtFEHd/P+xv1vD++/3q/2Aw58B3iKk4wefJ4nMOfIcoxaWHEc4ya3if5sCBZkSyPcfcgz9mHfgBdxs0WHGBuQd/oImgaEi2h9qQbM8BQciCDGDAgmYemjRWSxDArOE9CZ6G60H2OrJ3UTSYNbyHSyAbiTPiiAcAN1J3PR0o6KMAAAAASUVORK5CYII=",
            name: "Energy orb with a trigger",
            description: "A slow but powerful orb of energy that casts another spell upon collision",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Energy_Orb_With_A_Trigger"
        },
        {
            id: "SLOW_BULLET_TIMER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA+UlEQVR4nGNgIBEwQijt4OkCEiYQ9ocXZ66uzYSrMGt4f6pBEEWTdvB06+zTh69/X758+eHr362zT2sHT8dnizVY9WswkDZPh+hhYGCYc+A7pmImCPXkwgYGBgYDn5oLW1ogbAYGhhQHTri6OQe+////H6FBxiCAgYHhwpYWONus4b1Zw3tks+ce/IHPD////59z4DuaHgZcoVSYm5BszwExddaBH8ihBNUAcUOaA0gRMki250DTA/UDLoBwNwygaIA4A8KAIGRBBjBgQebMPfgDTRqrJQhg1vAeEt4QEmtAITwN14PsdbQggmqYc+A7cqQiG4me7MgAAPKLjryGq6RbAAAAAElFTkSuQmCC",
            name: "Energy orb with a timer",
            description: "A slow but powerful orb of energy that casts another spell after a timer runs out",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Energy_Orb_With_A_Timer"
        },
        {
            id: "HOOK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAUUlEQVR4nGNgGDIgfzn3/+Pvk8GYLM0MSOD///+kG4IMyHIFVTT/J9fpx98n/yeoOR8ayiAAo/EB6ruAGEAVQ45TEgsM5BpClZSIHEska8YHADovbGlhy/c5AAAAAElFTkSuQmCC",
            name: "Hookbolt",
            description: "A glowing hook that pulls the caster towards itself upon collision",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Hookbolt"
        },
        {
            id: "BLACK_HOLE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAp0lEQVR4nGNgGDQgpHbGLGzshN3f/4MwyZoToBpVpU3BmCiDAibs3g7TDNOIjtENYULWvKHA1ROk4GiCHVgsyicfwxKQHLIhTLhcA9LcMCMaqyGYYTD/4hFsTq9PX4LhhZnVx1C8woTP4GVbJmKI9SxAdRETiFiTqG8DCoMFrpyM1gsOYfU/Mh+kBqQWrwuWIdlOdHgE4IlGWHhgTQsh1EhIFCXlAQUAthidjF6jfKMAAAAASUVORK5CYII=",
            name: "Black hole",
            description: "A slow orb of void that eats through all obstacles",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Black_Hole"
        },
        {
            id: "BLACK_HOLE_DEATH_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGUlEQVR4nGNgoBAwwhjawdP/C0iYwCU+vDjDcHVtJlweL9AOnv7fOvv0/8PXv/9fvnw5mAbxQeJEGWAN1fz69WswljZPhxuSsPs7GOPSywRjPLmwAUwb+NQwXNjSAucfTbADY1wGMcEYMgYBYBqkGZkPA8gGYRjw4cUZhoopVxhuvOFh2LNnD5gG8UHi6ADdEEZ8sXBlTQZDQ8ZShmVbJqKG2YJDDAtcORExFDL/4hEQDTJZVdoUjuvTl6DwQXhm9TEwDXMFEwMegG4zCPQsyMcMxDWJ+jYBE3ZvBzkL5DwQiPJBVYjMR/YCEzG2gzQ3zIjGMBQDBEzYvR1bWCCHB9ZEFVI7YxY6G5ZwYAYQSpFYDUE2CL/bKQAAWpbM/UPAAiwAAAAASUVORK5CYII=",
            name: "Black Hole with Death Trigger",
            description: "A slow orb of void that eats through all obstacles and casts another spell as it expires",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Black_Hole_With_Death_Trigger"
        },
        {
            id: "WHITE_HOLE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAr0lEQVR4nGNgGDTAJ3F2PDa2qKLTfxAmWbMoVKO/TT4Y4zKIEc2guVvmpyaDFFpJ62K17NjTywyv7++D62PCp9lA2xTDAJAcskuYcHkLpLlhRjRWQzC84JM4e9eW+alu6E4Hab5w9TSKBi/7cIZtB1fCvcKEz3R0zSAA0owMmEAEyHZQGIBMBJkMsx3dS9gCkokY2/GFByOx0QgLD/RoZIBqJDsh4TUE2SCcGgccAAA3JHR3cqZtiAAAAABJRU5ErkJggg==",
            name: "White hole",
            description: "An orb of positive energy that destroys everything in its path",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/White_Hole"
        },
        {
            id: "BLACK_HOLE_BIG",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA2UlEQVR4nGNkQAUJu7+jiSxw5UTmMqIr3XHr6IoUuKB1xBwGDzVkbSxw1UcT7NDMZmBgkP9yeVkCSH/C7u8QPUzIqqN88tE0LNsyEcI4mmAHcQJIAwRE+eQ3zIjG1IMGWED6dtyCGpaBMBIL2HErYfd3kA1HV6RADEZWjWzV8kkrIMpAoYTLu1iB9YJDCD8QCZjQ+BDbCWiwjpgD50fmReB0TwRIGRMoOsBxiQsgfO+htsCVk4AfMCMHmpaQwyrKJx8tfJdtmWi94BAkaZCc+BAaULQhAbTkDQCIkWBj5lys8AAAAABJRU5ErkJggg==",
            name: "Giga black hole",
            description: "A growing orb of negative energy that destroys everything in its reach",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Giga_Black_Hole"
        },
        {
            id: "WHITE_HOLE_BIG",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAy0lEQVR4nGNkwAJEFZ3+YxN/fX8fI7oYCzaN6ny6DMK8qArffmZgYFBk+I9uECOyZitpXTDbQNuU4cLV0wy4wLGnl+GGMKFrBgFcmkEGgwBILcy1TDitwaK5YUY03BC4F0QVnf5j8zMuQ2CuA4XJzU+XIS6Aaa4tzMPqZHSvgcRhehjR/U8KAAUmEwOFgIlYhejeIysQkQE8EF/f38cIYuAKOFwApAeklwlZEFdc4wMYSRlbMkYXQ07KKLmLUGaCeRVrZsJmEDrAlp0BC2xhgKc/+3YAAAAASUVORK5CYII=",
            name: "Giga white hole",
            description: "A growing orb of positive energy that destroys everything in its reach",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Giga_White_Hole"
        },
        {
            id: "BLACK_HOLE_GIGA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtUlEQVR4nGNgoBAw+k09/B+bxKZsW0aiDFCVNkUxwMgjB0x/N1IiyiBGkAHLJ61giMyLwJAEGUbIIEZ0F0T55DMs2zIRq0HYDGFENwAXwGUIEwOR4NyOKQyc5+4xoAc6Ey4NoHDBZgg6YEL2OzLAFqgggO4KJhgDPeBwAXRXMBGlC48rmIjRgO49gi6IQtOA7j1kb2AYANLcMCMar60oLsBmW0PGUqyBii1qiU6J6ECzqg+cKgF2Yk2a5/QwDgAAAABJRU5ErkJggg==",
            name: "Omega Black Hole",
            description: "Even light dies eventually...",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Omega_Black_Hole"
        },
        {
            id: "WHITE_HOLE_GIGA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuklEQVR4nGNgoBAwiio6/ccm8fr+PkZiDGCxktZFEXj7GcpQZPhPjEFMIKK2MA8uIMwLwSCD1fl0GUAuxOVKsBf8bfJRJA20TRkuXD2N4aqbny5jdQ0TugC6ZpirYK4haAAugMsQJlwakMMF2RB0wITsd2TQ3D8Jq8HormDC53dsAN0VTETpwuMKJmI0oHuPoAsM0DSgew/ZGxgGgDQ3zIjGayuKC7DZ1pCxFGugYotajKRMLDj2FJK0AdtzQYdAWkWOAAAAAElFTkSuQmCC",
            name: "Omega white hole",
            description: "A massive orb of positive energy that destroys everything in its reach",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Omega_White_Hole"
        },
        {
            id: "TENTACLE_PORTAL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABWUlEQVR4nLWTvUoDQRSFd0N6fxpFiWJh0MJ1DQga8AXs7ewsFXwBsQh5AUFLe0HQyrzAwpoqbmKhrFUMStJEfQEj38hZJrtb6i32zs7cc+6ZMzOO81/Rqsftq/27UXouXVdIT5ztXj4AjJ9fvOpW1QkOOyPmWAvC4Pv1/GOMtKiBvdB96jlvXz2TF1dLjH1IZqZn/VwFrXrcvm3cRGEzTEDzEyVTMLc3acaANSdFCUHlpLx+3DjYGAz7kTpvn66ZgvfrT5MBQ8yaraRg793uAhAACsgQamu2oUURVJY2fQEAk+24rz2OKQmboce/ywfXcZwOCpEpREqmbufCcxMF5ZXljhjpgFztXRlQt/a7BbzKmOhY8pALQN2kRGAMz5g4GPYjuSyjBIRQR4vRGC4TXdsoLhN3ATIK5QuEUqdYOJoy2MxVlkSyLpXkQw5Q4NxIPxhOKO8R/Vn8AD2r4ZMVJ4A5AAAAAElFTkSuQmCC",
            name: "Eldritch portal",
            description: "Summons a one-way portal to a sinister realm",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Eldritch_Portal"
        },
        {
            id: "SPITTER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAo0lEQVR4nGNgoDf4HD7rPwjD+CxIEhMZGBjyoNxJvCvT8rFpZgswgLAZZv3nXZnGyISsGSQJVZAHFSPeWT+Xn/oPAyA2sjOJ8gKxAORsZD4LlJ70a8MFmP8Zfm24ABYjxkBGfIFITMAy4jIZOWCRXYXNEKyacQUsUbHzGU0zvthhYqAQMOEQB8UKw68Vp+ECIDa22KE4EHEagGwIzFVExQCpAAAuLpqu0fiQzwAAAABJRU5ErkJggg==",
            name: "Spitter bolt",
            description: "A short-lived magical bolt",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Spitter_Bolt"
        },
        {
            id: "SPITTER_TIMER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABA0lEQVR4nGNgoBAwwhjawdP/C0iYwCU+vDjDcHVtJlweBj6Hz/oPonlXpoHlmJA1d+ToMOTY3AHTID5IHF0zW4ABAwjDDGICETDNGiJfGFxcXBgiEgrghhACTDDGkwsbwLSBTw3DhS0tcD4yADn714YLDCAM8wIYWGef/n/4+vf/r1+/hmMQHyTOQIwLPrw4w1Ax5QrDjTc8DHv27AHTID5InKJYOMHCPImBgSEPKjSJd2VaPk4D0MHn8FkTQZpBIQ4CIH/jMgSrZlA0/Vx+6j8MgNggMajB+MFnNM3ohmCNRnIBEw7xSeD4XnEaLgBiw8IBWSHFgYjTAGRDYK4iKgZIBQDUpbSqEvpc9AAAAABJRU5ErkJggg==",
            name: "Spitter bolt with timer",
            description: "A short-lived magical bolt that casts another spell after a timer runs out",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Spitter_Bolt_With_Timer"
        },
        {
            id: "SPITTER_TIER_2",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsUlEQVR4nGNgoDcIepZ7BIRhfBYYw/pkaKO4rIQziP3y8Yu9R81X12PTHCspbA3mPMs9sk5qsg0LsmaY5GKIGAM2Q3A6a/3/hv8wAGIjO5MoLxALQM5G5rPA/AxyNoNkI8QLz98eBYkRYyAjvkAkJmAZcZmMEbBQVxEVsNYnQxtxBSxIjqABQWia8cUOEwOFgAmbIDhWnr89uoEB4VoQG1vsUByIOA1ANgTmKqKTNikAABtFsejKswnfAAAAAElFTkSuQmCC",
            name: "Large spitter bolt",
            description: "A more powerful version of Spitter Bolt",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Large_Spitter_Bolt"
        },
        {
            id: "SPITTER_TIER_2_TIMER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABCUlEQVR4nGNgoBAwwhjawdP/C0iYwCU+vDjDcHVtJlweBoKe5R4B0eukJtuAaCZkzR05Ogw5NnfANIgPEkfXHCspbA3CMIOYQARMs4bIFwYXFxeGiIQCuCGEABOM8eTCBjBt4FPDcGFLC5yPDEDOXvz87VEQhnkBDKyzT/8/fP37/9evX8MxiA8SZyDGBR9enGGomHKF4cYbHoY9e/aAaRAfJE5RLAiU7WsSl5VwBvFfPn6x96j56nqcBqAD65OhjSDNoBAH8UH+xmUIVs2gaFr/v+E/DIDYIDGQHAMhEISmGd0QrNFILmDCJgjyK8jPGxgQrgWxYeGArJbiQMRpALIhMFcRFQOkAgBO3MZmsXaCfwAAAABJRU5ErkJggg==",
            name: "Large spitter bolt with timer",
            description: "A more powerful version of Spitter Bolt that casts another spell after a timer runs out",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Large_Spitter_Bolt_With_Timer"
        },
        {
            id: "SPITTER_TIER_3",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApklEQVR4nGNgoDfY2fN+PwhjSHTE386GSYLYuDS/OPj/PwjDDGGBaTbUFQnRNxVwQDKQoWKh6lSinfXi4H84QLaBkBdYGEgE7iWCjsh8FhBx/vKbNSBanwHihYunPxyAiRECjDAGLBxgBoL8j02MaKd2QGMFOdRxxQ5ezegBS5QhO9E044sdJgYKAQs2QeRYEbeDiL08RFrsEB2I8GjEZQjZ0UgsAADegckOZDymmgAAAABJRU5ErkJggg==",
            name: "Giant spitter bolt",
            description: "The most powerful version of Spitter Bolt",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Giant_Spitter_Bolt"
        },
        {
            id: "SPITTER_TIER_3_TIMER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+0lEQVR4nGNgoBAwwhjawdP/C0iYwCU+vDjDcHVtJlweBnb2vN8Pot1LBB0ZkDVbZ5/+f/j69//Lly8H0yA+SBxd84uD//+DMMwgJhABsrkjR4dBQ+QLg4uLC0NEQgGYj+wiXIAJxnhyYQOYNvCpYbiwpQXORwYgZ188/eEACKN4wRrq/NevX8MxzBtEueDDizMMFVOuMNx4w8OwZ88eMA3ig8QpioVYHpccQ12REBD//OU3ayoWqk5lIBZ0xN/ORg91kBjJmmGAJEN2omlGNwRrNJILWLAJggIMROszCDiI20HEXh5iYADFP0yOICA2EDEyC7ohZEcjsQAAQkTiFyX0YEQAAAAASUVORK5CYII=",
            name: "Giant spitter bolt with timer",
            description: "The most powerful version of Spitter Bolt that casts another spell after a timer runs out",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Giant_Spitter_Bolt_With_Timer"
        },
        {
            id: "BUBBLESHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAr0lEQVR4nGNgIBEwovE5feeIGIcxMDC8Obvq++YUAro5feck7f+27t6vdfd+Je3/xuk7h4AG2YZP6+79+g8G6+79km34hKmGiVQ/sCBz3pxdtcU+CsLe8vDPm7OrqO1pYgAjfmmcFnL6zpFt+CTb8Ak5KHGGMicOCayhzMTAwCBiHOYjzxKoyBqoyOojzwJxAy6AEqxoAGsogzTgCv7vm1OWMzDsRvU0NJSoH/xwAACVOYAVDfD++wAAAABJRU5ErkJggg==",
            name: "Bubble spark",
            description: "A bouncy, inaccurate spell",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Bubble_Spark"
        },
        {
            id: "BUBBLESHOT_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+UlEQVR4nGNgoBAwogt8niz+X2xXK4OIcRiY/+bsKobvm1Mw1GGA7/er/4Ppw/7/k/Z/+w/ir7v3C8zm9J0DliNsyGF/sEYQDQMgQ2QbPuE0gAnmbJAmBhkdiKiMDsOPIwEMX6ZIELSUBUTw5r5kZGDYyPD9MAPEkCdXGLZLr2ZgkGZg2PLwDzgcSAoDTt85YK+AnE60/2EA5B0GEgAjsQpBLsEbtZy+c8BOxuZsEB8UnaAYwRq1nAQUgAwFiWOLWiYQAXKajzwLQ6AiKxiD2DDnEhWNDAQAyM9b7KPgfOSoBRuATwEIgAJsOQPD/91YAhEekgRDmVYAAOzAyrxtxQwFAAAAAElFTkSuQmCC",
            name: "Bubble spark with trigger",
            description: "A bouncy, inaccurate spell that casts another spell upon collision",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Bubble_Spark_With_Trigger"
        },
        {
            id: "DISC_BULLET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2klEQVR4nGNgGHQgOTl5B4iesXjrNBB96frj/zBMtqEzFm/9D8IwQ5ANY4LaWozN1g07zoE1whQfO3MJbBiy4Yz4bMUlJyEqyRDgYcSI7IIdUE1H0Z0IAg+fvAJjGHjx+jkDTB0LyPlz5871ADk/I9bbGiQIciqy5ld3jkB5NgzyMmIoLmRioBAwYRPMiPWGhw3IRjEVGzCG2Q4CViZ6DHqasow4AxEUAzC/4rOECSaAFJXggFSSF8UZAyDbYQHNgkXNRWRbkAMV2WswgNMLyAA5WkH+JkYP/QAAQneBW0Hdl3oAAAAASUVORK5CYII=",
            name: "Disc projectile",
            description: "Summons a sharp disc projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Disc_Projectile"
        },
        {
            id: "DISC_BULLET_BIG",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1klEQVR4nGNgoBAwElKwYfPe/yD67PmrDM11eRjqmXBpgLFBGnFpxnDBBqiGFy9eMEhISMDFQfzZ09oYYYYH+Doz4jWAEDA21IYbwgQiapsmYZiMC4Bcg6yOBWYiyBCQJLpikFeQvYTsNbgLYADd3/fuvmA4dvQChibkgGYCESAngVyBzzBkAAonmCFMMEF0/4M0WVkbMCgpS+A1jAVdE7pf0Z0Pik7kgGekJAoxvGBsqA1WAEp12GIEG0DxArLJMKcj2whyJXpYYU04IP/BYoWYxEURAACQdX4nrhO7lwAAAABJRU5ErkJggg==",
            name: "Giga disc projectile",
            description: "Summons a large, serrated disc with a curious flight pattern",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Giga_Disc_Projectile"
        },
        {
            id: "DISC_BULLET_BIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlElEQVR4nI1TPUsDQRCdPSNIUNSocIUSFCwSFKz9gpBgEE8QUvgvBAtLLbRLJf4SwTRCJBBjCkEMRHOFoMTz40BB0cYievKGTFgvF/AVt7c3++bevJlVFIBSdt+LFvNqLJfj/eHRiSextdWk0s+qIPK980QLdzVVX0wx8fjL4NjezoZyLIskMRDSyZXNLa/7vEzVcIROx+Oe3SQCruuykrpdJYeopU75/2x+vlNhYoo6IXF7RZHBfhq6sTmJIfW9xqbJHhltHQpC7OWB11pDkZSnkODi8polmqbJhySRnwx1bt8AFb5DlOhqUHgpTQrSxSQhY8UhJJT6QdATw1BW4FgWy5EkOspnFV5n52balHxk1rmlBozofX7sWLcfUIEyBAoPqOC2aRLFE/+7jnTPT7uJ/4F4Eg95ZKAOZOpEltbpWFlO8qS2JjFazKvMZMxDf4Na6MewXW2Oc06x9dhgsiAJaiBRAMdhsHxDHD+UeNtlArZ3D3jKMm8O75EcJmNw/Lfxz2UCZLQhU+YdKGVTNO8jI/AL8NLXdQlXVPgAAAAASUVORK5CYII=",
            name: "Summon Omega Sawblade",
            description: "That's a lot of sawblade",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Omega_Sawblade"
        },
        {
            id: "BOUNCY_ORB",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA10lEQVR4nLVROw6CQBQcqFnsbE2oKSyw80KcYS2h8gCchdjSQWFBTWJrpSz9mmd2k5cVUIxOs7xhZvI+wC+RVn2Nf+N405rX3kw3GQBpyrzYh4cxnTc3ShSLhN6uVQ29xT7cvQ1Iq74OhEjWG2C7Gp7c+R7gegEGpRo3xB9pG9xMoG/iuGY0AICktrmZh5iR5FzAYvhOndPCaGYXxJll5pMBhTkVLYyH2CVyzcsV0qrP7M8lZ/StOYqFtBs2wrJrFZmJKrnZvcQ0OQLSnbTSn+onQ742u3gAFaduU3v0D14AAAAASUVORK5CYII=",
            name: "Energy sphere",
            description: "A fast, arcing projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Energy_Sphere"
        },
        {
            id: "BOUNCY_ORB_TIMER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKUlEQVR4nGNgoBAwwhjawdP/C0iYwCU+vDjDcHVtJlweL9AOnv7fOvv0/8PXv/9fvnw5mAbxQeJEGWAN1fz69WswljZPhxuCrrb7w38UMSYY48mFDWDawKeG4cKWFjg/88in/5lHPrXA1JUKMDJiNUDGIABMgzQj85V0eEGUe+aRT6exuZ4JFmAVU64w3HjDw7Bnzx4wDeKDxA34v4AMMeHh5TXBZggjvliYsCYGzr/wkYfh3pXPZxgYGHZOt+GrwTAA5l+Qk0G2YgNQQxim2/AxYoQBuYAJjd8KcibIJnSA5IVWnAZMh/rt1UOIBmTNIDFkNRgGZELjeroNn+mXz5/PwFwCsxkkBpJDVgsHIAFQCkOWALGhiQhDfPf/zyhiKC4gBpCiliAAALOuxMAAfAy3AAAAAElFTkSuQmCC",
            name: "Energy sphere with timer",
            description: "A fast, arcing projectile that casts another spell after a timer runs out",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Energy_Sphere_With_Timer"
        },
        {
            id: "RUBBER_BALL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdElEQVR4nGNgGAWMuCRM29T/SxgKg9kvzr9lOF11E6taJmQN2DSDAIiNLo9igGmb+n+YDciaPcxkwRjdEJBaGJsJJolsG0wzDCAbgq6OiYFCwAQLJBiAsXecegwXg7GxqWOECeAKB2QNyPIwNiOl0cgwChgAM3RE+mfgzWAAAAAASUVORK5CYII=",
            name: "Bouncing burst",
            description: "A very bouncy projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Bouncing_Burst"
        },
        {
            id: "APOTHEOSIS_RUBBER_BALL_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAy0lEQVR4nGNgoBAwInNu3Hv1H8bWUBJDkcMFmJA1HzlzA8wG0ciGEQQ37r36r2PuBcbobKJccOTMDYY1yxegSID4IPEdVhX/29XDCLtmzqpDcNtBNIgP0gzDyIYgs5nQBQqKK+CGmsoGgzEIGAorwdVV3lzFCGMzwSRTwuwYQU6WmbAN7PTAtZwoBsHUwQCMzYTsDZAhIBpkCLGACUScf3sPLgBjn368Fi4GY2NTx4gcMCC/wdjIzoVpQJaHsRlxOQ3ZEGTNo4ABAwAA2N2FmQMz29oAAAAASUVORK5CYII=",
            name: "Bouncing Burst with Expiration Trigger",
            description: "A very bouncy projectile that casts another spell upon expiration",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Bouncing_Burst_With_Expiration_Trigger"
        },
        {
            id: "ARROW",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAR0lEQVR4nGNgGAXEgalGRidiYqimZ/H8vnt3r8O5jHBWqr8esjpTLYnT116YakkwMDBwqnkwMDBY23kqKWuSbAO5fmAYUQAAgXIYqsD5/fIAAAAASUVORK5CYII=",
            name: "Arrow",
            description: "Summons an arrow",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Arrow"
        },
        {
            id: "POLLEN",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABCUlEQVR4nGNgoBAwYhPctX+6OwMDgwaS0A03x8ydRBmwa//0AAYGBhs+PgERmNinTx/eMDAwHHFzzNyA14BdEJtdlZW0lNAV3r137R4DA8NudJcwoanTQLaZgYFBDMaAiiN7C6sByECMm0tMBNkQbIAJj9wrNJooA25AAwwDQMVv4DXADRJAR0AB9vrNs08gMRANDcCH2KKSCV0AGlW7P336cB5q83lo6E/G5xUGaBSigBevr2M4edf+6bl3Hx5cB6LhLti1f7q7no7DRHRDTpw4iWGRspKWIzeXmBaIhhvg5pi5c/asebAwwAvu3ru2H2QwiCaklqG5tRTDCyCwYfMCuDi+dEAfAABinm2y4BrcQgAAAABJRU5ErkJggg==",
            name: "Pollen",
            description: "A small, floating projectile that homes towards nearby creatures",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Pollen"
        },
        {
            id: "APOTHEOSIS_POLLEN_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABV0lEQVR4nGNgoBAwogt8niz+/7hOgwcDA4MGkvANN8fMndgMYIIxvt+v/g+iWQwsQJSrrcKTCXx8AoYgDOLv2j89gKALvh/2/88go8PA8OQKwzO5ovXIcnfvXbvHwMCwG90lTDBnwzWDgIwOg9SjvkCxTWGBMIV8fAIiaN4CAxYQwZv7kpGBYSPD98MMyC44yq0hJsLw7ZUYAwPDK2zOxwiDw388CmDOl/q3yxoqhVMzigGciq2g8Ljx58IJMP8ZkxtKGHz69OENSJ5gNO6ChLYNyM8KcgYWDx5dOAHV/NDNMXMyThfAgJtj5gZQaH/69OE8iA+ld2PTjAJ27Z/uji724vV1DCfv2j899+7Dg+tANNwFu/ZPd9fTcZiIbsiJEycxLFJW0nLk5hLTAtFwA9wcM3fOnjUPTON1JiRB7QcZDKIJqWVobi3F8AIIbNi8AC6OEYh0BwBdCY61IervCwAAAABJRU5ErkJggg==",
            name: "Pollen with Trigger",
            description: "A small, floating projectile that casts another spell upon collision",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Pollen_With_Trigger"
        },
        {
            id: "LANCE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAN0lEQVR4nGNgGAUUAIu2N7OufZh17cP///8t2t6QoO0/GMy69gG7YRASK5iFrIc0G6jpB4ZhCQBl61A65uoJcAAAAABJRU5ErkJggg==",
            name: "Glowing lance",
            description: "A magical lance that cuts through soft materials",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Glowing_Lance"
        },
        {
            id: "LANCE_HOLY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAPklEQVR4nGNgGAXUB/8PeP0HARQxEHjb8p80g95CNIAMRBcjyxAUgG7Q/7ctcAlSAPVcQNUw+E+tWGAYOQAA9d2TDbCpla4AAAAASUVORK5CYII=",
            name: "Holy Lance",
            description: "A fast-flying, penetrating lance that glows with power",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Holy_Lance"
        },
        {
            id: "APOTHEOSIS_HOLYORB_SHOTGUN",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAKMGlDQ1BJQ0MgUHJvZmlsZQAAeJydlndUVNcWh8+9d3qhzTAUKUPvvQ0gvTep0kRhmBlgKAMOMzSxIaICEUVEBBVBgiIGjIYisSKKhYBgwR6QIKDEYBRRUXkzslZ05eW9l5ffH2d9a5+99z1n733WugCQvP25vHRYCoA0noAf4uVKj4yKpmP7AQzwAAPMAGCyMjMCQj3DgEg+Hm70TJET+CIIgDd3xCsAN428g+h08P9JmpXBF4jSBInYgs3JZIm4UMSp2YIMsX1GxNT4FDHDKDHzRQcUsbyYExfZ8LPPIjuLmZ3GY4tYfOYMdhpbzD0i3pol5IgY8RdxURaXky3iWyLWTBWmcUX8VhybxmFmAoAiie0CDitJxKYiJvHDQtxEvBQAHCnxK47/igWcHIH4Um7pGbl8bmKSgK7L0qOb2doy6N6c7FSOQGAUxGSlMPlsult6WgaTlwvA4p0/S0ZcW7qoyNZmttbWRubGZl8V6r9u/k2Je7tIr4I/9wyi9X2x/ZVfej0AjFlRbXZ8scXvBaBjMwDy97/YNA8CICnqW/vAV/ehieclSSDIsDMxyc7ONuZyWMbigv6h/+nwN/TV94zF6f4oD92dk8AUpgro4rqx0lPThXx6ZgaTxaEb/XmI/3HgX5/DMISTwOFzeKKIcNGUcXmJonbz2FwBN51H5/L+UxP/YdiftDjXIlEaPgFqrDGQGqAC5Nc+gKIQARJzQLQD/dE3f3w4EL+8CNWJxbn/LOjfs8Jl4iWTm/g5zi0kjM4S8rMW98TPEqABAUgCKlAAKkAD6AIjYA5sgD1wBh7AFwSCMBAFVgEWSAJpgA+yQT7YCIpACdgBdoNqUAsaQBNoASdABzgNLoDL4Dq4AW6DB2AEjIPnYAa8AfMQBGEhMkSBFCBVSAsygMwhBuQIeUD+UAgUBcVBiRAPEkL50CaoBCqHqqE6qAn6HjoFXYCuQoPQPWgUmoJ+h97DCEyCqbAyrA2bwAzYBfaDw+CVcCK8Gs6DC+HtcBVcDx+D2+EL8HX4NjwCP4dnEYAQERqihhghDMQNCUSikQSEj6xDipFKpB5pQbqQXuQmMoJMI+9QGBQFRUcZoexR3qjlKBZqNWodqhRVjTqCakf1oG6iRlEzqE9oMloJbYC2Q/ugI9GJ6Gx0EboS3YhuQ19C30aPo99gMBgaRgdjg/HGRGGSMWswpZj9mFbMecwgZgwzi8ViFbAGWAdsIJaJFWCLsHuxx7DnsEPYcexbHBGnijPHeeKicTxcAa4SdxR3FjeEm8DN46XwWng7fCCejc/Fl+Eb8F34Afw4fp4gTdAhOBDCCMmEjYQqQgvhEuEh4RWRSFQn2hKDiVziBmIV8TjxCnGU+I4kQ9InuZFiSELSdtJh0nnSPdIrMpmsTXYmR5MF5O3kJvJF8mPyWwmKhLGEjwRbYr1EjUS7xJDEC0m8pJaki+QqyTzJSsmTkgOS01J4KW0pNymm1DqpGqlTUsNSs9IUaTPpQOk06VLpo9JXpSdlsDLaMh4ybJlCmUMyF2XGKAhFg+JGYVE2URoolyjjVAxVh+pDTaaWUL+j9lNnZGVkLWXDZXNka2TPyI7QEJo2zYeWSiujnaDdob2XU5ZzkePIbZNrkRuSm5NfIu8sz5Evlm+Vvy3/XoGu4KGQorBToUPhkSJKUV8xWDFb8YDiJcXpJdQl9ktYS4qXnFhyXwlW0lcKUVqjdEipT2lWWUXZSzlDea/yReVpFZqKs0qySoXKWZUpVYqqoypXtUL1nOozuizdhZ5Kr6L30GfUlNS81YRqdWr9avPqOurL1QvUW9UfaRA0GBoJGhUa3RozmqqaAZr5ms2a97XwWgytJK09Wr1ac9o62hHaW7Q7tCd15HV8dPJ0mnUe6pJ1nXRX69br3tLD6DH0UvT2693Qh/Wt9JP0a/QHDGADawOuwX6DQUO0oa0hz7DecNiIZORilGXUbDRqTDP2Ny4w7jB+YaJpEm2y06TX5JOplWmqaYPpAzMZM1+zArMus9/N9c1Z5jXmtyzIFp4W6y06LV5aGlhyLA9Y3rWiWAVYbbHqtvpobWPNt26xnrLRtImz2WczzKAyghiljCu2aFtX2/W2p23f2VnbCexO2P1mb2SfYn/UfnKpzlLO0oalYw7qDkyHOocRR7pjnONBxxEnNSemU73TE2cNZ7Zzo/OEi55Lsssxlxeupq581zbXOTc7t7Vu590Rdy/3Yvd+DxmP5R7VHo891T0TPZs9Z7ysvNZ4nfdGe/t57/Qe9lH2Yfk0+cz42viu9e3xI/mF+lX7PfHX9+f7dwXAAb4BuwIeLtNaxlvWEQgCfQJ3BT4K0glaHfRjMCY4KLgm+GmIWUh+SG8oJTQ29GjomzDXsLKwB8t1lwuXd4dLhseEN4XPRbhHlEeMRJpEro28HqUYxY3qjMZGh0c3Rs+u8Fixe8V4jFVMUcydlTorc1ZeXaW4KnXVmVjJWGbsyTh0XETc0bgPzEBmPXM23id+X/wMy421h/Wc7cyuYE9xHDjlnIkEh4TyhMlEh8RdiVNJTkmVSdNcN24192Wyd3Jt8lxKYMrhlIXUiNTWNFxaXNopngwvhdeTrpKekz6YYZBRlDGy2m717tUzfD9+YyaUuTKzU0AV/Uz1CXWFm4WjWY5ZNVlvs8OzT+ZI5/By+nL1c7flTuR55n27BrWGtaY7Xy1/Y/7oWpe1deugdfHrutdrrC9cP77Ba8ORjYSNKRt/KjAtKC94vSliU1ehcuGGwrHNXpubiySK+EXDW+y31G5FbeVu7d9msW3vtk/F7OJrJaYllSUfSlml174x+6bqm4XtCdv7y6zLDuzA7ODtuLPTaeeRcunyvPKxXQG72ivoFcUVr3fH7r5aaVlZu4ewR7hnpMq/qnOv5t4dez9UJ1XfrnGtad2ntG/bvrn97P1DB5wPtNQq15bUvj/IPXi3zquuvV67vvIQ5lDWoacN4Q293zK+bWpUbCxp/HiYd3jkSMiRniabpqajSkfLmuFmYfPUsZhjN75z/66zxailrpXWWnIcHBcef/Z93Pd3Tvid6D7JONnyg9YP+9oobcXtUHtu+0xHUsdIZ1Tn4CnfU91d9l1tPxr/ePi02umaM7Jnys4SzhaeXTiXd272fMb56QuJF8a6Y7sfXIy8eKsnuKf/kt+lK5c9L1/sdek9d8XhyumrdldPXWNc67hufb29z6qv7Sern9r6rfvbB2wGOm/Y3ugaXDp4dshp6MJN95uXb/ncun572e3BO8vv3B2OGR65y747eS/13sv7WffnH2x4iH5Y/EjqUeVjpcf1P+v93DpiPXJm1H2070nokwdjrLHnv2T+8mG88Cn5aeWE6kTTpPnk6SnPqRvPVjwbf57xfH666FfpX/e90H3xw2/Ov/XNRM6Mv+S/XPi99JXCq8OvLV93zwbNPn6T9mZ+rvitwtsj7xjvet9HvJ+Yz/6A/VD1Ue9j1ye/Tw8X0hYW/gUDmPP8uaxzGQAAAIxJREFUeJxjYKAnePhk/f8vXx/9RxZjIkYhiE/Q9EMnomeCMC6bcBpyCEkjLtcQtB0dHDoRPQuEkcWwuQoEWNA1gmg7i6VpSGI4XUcSeIjkFWTXsCDbjA2AXAPSIC8TyEhWeNAs8BjwBdIhJIMIGsCAZBC6YmRDCBqAbhu6y2CGEO0iZJchG0ayAYQAAJNHnjS3JAz1AAAAAElFTkSuQmCC",
            name: "Holy Orb Barrage",
            description: "Casts a barrage of 7 holy orbs. Also has some magical properties...",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Holy_Orb_Barrage"
        },
        {
            id: "APOTHEOSIS_ELECTROSPHERE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEklEQVR4nGNgoBAwogtk7vn+H0RPX3AZVTxBF0xPd+FE0cOIrhmkUUHbFMwvtwebxdB5EKLswdXTYIOQDWHEphmmEQRUJf8zbLvzl0GVmwVsEDZDGMDOjjn1X6H9///px/6B8e8///8X7f4FpkEYJg5SA1IL8yoTzBBkm0G2goCXCjPckhQziIUgNTAvwg2YDg2w21//gBXayzIxHHz8D0wjA5DBMMNhephgkiCTQf6EAWTNIMNgYrefMzLMiYDwUQzABmAa0QHIEAwDOqFRBQPl+3+DbYTRyABZLRNyIgGBOadQA7DTkRVDDlkPE0wAFL8wk0EKYQGJrhmWFohOSAxoTkdPSNRLysiGgGhiMxPFAADHDLK9wz+6igAAAABJRU5ErkJggg==",
            name: "Bolt Orb",
            description: "Cast a slow orb which zaps nearby creatures periodically",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Bolt_Orb"
        },
        {
            id: "APOTHEOSIS_STAR_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3UlEQVR4nJ1RsRHCMAx0PEHKrOA9VMEGsAAdA6TIMQY9Y/yFARggRcrkLgUNE9g55excCDYofCNZZ0n/L6UiAGCUENo35Kt6KR0wA8Au5MMwOPUvAFTOOcdxa6Phpq7rnjyAI7+DvIjMCZk3rNRaH40xqiiKtw9939u2bbW19kRE15/0AdyZQV3Xk4zgDYCbVErFJq498LU8esYliOjSNA2nj1DjYV7aWUkAv50jS1kbu/ybJQaw7oPA2H2KQS4xVgwkjJU0zkz89nDSbQwCi9jwjzN+wXxWBhG9OBkBbYy6eqGj4HEAAAAASUVORK5CYII=",
            name: "Star Shot",
            description: "Fire two starry projectiles with a bright light",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Star_Shot"
        },
        {
            id: "APOTHEOSIS_ORB_KNOWLEDGE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJklEQVR4nGNgoDZouPL/P80MbCDW8AYsCnFpZiJkCIjGZzMLjGFrZflfVFQYLqHLz8Dw6jdE4+EXDAyXP0IMu1Tty/D69VuGw8eOM4LkGEFEkL/P/46J8xhu3nzOcFZaD6wZpOHIzgsM3CrcDIbKqnAx46eXGNTVJRkq8pMY1m3cwgj3gqq8KIOPmx7ENRKoms/fvQ0WAwGQGpBaDC+gg9/vHjN8vSPLcJ7hNsPXO18ZcAEmbIIgPztG+kIN+cpg424AFsMGWNAF6rUZGBqvQgIxq8EXbiDI/yA5nAZs2QUJHJD/YIaANCEbDAK3H74GBzYMMIII5ChMzGqFGwRSDAIwNkjj/GnVYDFYVIINgAFkg2DRCgKwaEPWiOICdICeqLBppBoAAJX2mW4VTG9yAAAAAElFTkSuQmCC",
            name: "Learning Orb",
            description: "Sui generis. Casts an orb that grows alongside your knowledge, even tainted...",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Learning_Orb"
        },
        {
            id: "APOTHEOSIS_SPELL_WORM",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFElEQVR4nGNgoDVQyO36j0+eCV2xwZS5cA0g9vszj+FsZMPwGmwwZe5/fsvc/zAAYmPTAFLHhC4AUnh/6QUGxWgDuLigiSyDgLowA8ggZNs/3HyL8AJIs7yWIgPIyR+OTWIAsQWs8hgMp85jeDC5jBGkGKYOZgjIUCYY50JOMuPF9WcYPh6fzAgCD6/dB7NhGkGGgFwC4oM0ggDIEkYGEgHIMv1AEwaQBSCvMjFQCJiQAwU5pJH9imw7iAbZDvKKQ2sgxACQ/0AaQE6DRR/IfyA2zL8gzaAABvFh4QIyiAlmOigQQQLgKLPKg9hybBLD+ewkeIjD1MEshRnEgA5gzicmIaEIYEvKsMRDUlJGN5QoheQCADr0wnyBeWp2AAAAAElFTkSuQmCC",
            name: "Ethereal Wyrm",
            description: "Summons the ghostly visage of a wyrm containing great power",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Ethereal_Wyrm"
        },
        {
            id: "ROCKET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAf0lEQVR4nGNgGArgrYPoWwdRotQxwMDXbpev3S7fz8cTpe0rTCmI8bz9////yAoYsWr72u3C5CLNIKHxb8lephhnDokKkFJGmOKv3S5w98CN//68HW7DdzCJZhVCG0QPpur/YA1kOQkZQIz//rwdl6cZIAAt4JG1EQbERtygAQBhiGuZtdrI5gAAAABJRU5ErkJggg==",
            name: "Magic missile",
            description: "A fiery, explosive projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Magic_Missile"
        },
        {
            id: "ROCKET_TIER_2",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAe0lEQVR4nGNgGAiQfEXrP4rA8ffJ/0nRDAIYhqADjRLP/yBMlAtgAF2D7jST/yBM0DZsBiFrBLFB3gQBBlKALtQQkGZkQzAM0p1mguJfZNvRNeM0BN0gmCG4NBPlHV1ivYBPI9GBqIElztENIglo4ElIFAOcBpOc4qgBANgttjemkAduAAAAAElFTkSuQmCC",
            name: "Large magic missile",
            description: "A more powerful version of Magic missile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Large_Magic_Missile"
        },
        {
            id: "ROCKET_TIER_3",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR4nGNgoBbY3PD/PzY2NvDuEJr85ob//0GChDTCNIMAVkMYkEBvzP//IEyUC2AAXQPIUBC+NIWwyzAMQtYI8yIIoKpkYGBkwANAGuVFGBhk9BgYju5jYLB2YmAQtIVqZGRkRFHYi+R8ZNthgYsceDCA4YLNDf//37rDwFC8hJERZvvDNwib3x9GuADmCkaqeAEdwLwAiy58gUgwGpENIgn04klIWMVJTiy4AL78QExeIRkAABi8wswOQid6AAAAAElFTkSuQmCC",
            name: "Giant magic missile",
            description: "The most powerful version of Magic missile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Giant_Magic_Missile"
        },
        {
            id: "GRENADE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAcUlEQVR4nGNgGK7grYPo124XrFIsWEW5+r0YJDS+MjBwl+4hYPbXbpfvz9v/g8H35+0kqIaA7+fj3zqIIqthQub82HqR4cUNFDMkNDi89QnYg+wkTK+zYGr4t2TvjxgGhhc3OA0XEjCbAckzaE4fVgAAJVpBTS5spjsAAAAASUVORK5CYII=",
            name: "Firebolt",
            description: "A bouncy, explosive bolt",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Firebolt"
        },
        {
            id: "GRENADE_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAArklEQVR4nGNgoAR8nixOUA0ThPp+v5qBgYHFwALOxgUY4azvh/0ZZHQYnlzhtN1IQMPnyeIgs2V0oGJPrvy5cII39yV1bIACiLtBegj5AXsovXUQ/drtwkA8+H4+/vvzdqL0fO12+f68/T8YfH/eToJqCPh+Pv6tgyiyGmjEQcCPrRcZXtxAMUNCg8Nbn5AHkJyE6Q0WTA3/luz9EcPA8OIGp+FCAmYjewbN6eQDABUjZTtnwicYAAAAAElFTkSuQmCC",
            name: "Firebolt with trigger",
            description: "A bouncy, explosive bolt that that casts another spell upon collision",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Firebolt_With_Trigger"
        },
        {
            id: "GRENADE_TIER_2",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAg0lEQVR4nGNgGFQg+YrWf4o0gwDFhjAgAY0Sz/+600xQxND5jLgMA2lmVXrNYGb3jeHUIS6Gy1lncKrFACBbYF6CeQtkIAM5mmEAJI7NECZ0gd/3RMFORgcgr4C8RBTQKPHE8AJ64MEAIz6vwAIQ5KobPdsZSY5GXRz+HjigMahcAwMAoZtrs8gSQnoAAAAASUVORK5CYII=",
            name: "Large firebolt",
            description: "A more powerful version of Firebolt",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Large_Firebolt"
        },
        {
            id: "GRENADE_TIER_3",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzElEQVR4nGNgoBZ4d+j/f4o0gwA2Q3pjsBuMIf4OhwsuTcHvMiYYQ8iOkRHdhs0NEM3ItqEbyIjLeWoqDAzyIgwMMnoMDE8uMTDsPsHAULwE1RIGXJovTYGEBwyA2CDXYAsPFmSNrhYQNshWQVuEIhBb/hJ2CxnRBUA2gZyum40q/v4wxCsggOwdFnQDbt2BuuIwwhUwzdjCgRFXOIC8AwvAh28gBmMLRCZkTTA2SCHINlyacSUuBnRAKBGhuAAbALkCGcASFkU2Uh0AAHQliL7BKDO6AAAAAElFTkSuQmCC",
            name: "Giant firebolt",
            description: "The most powerful version of Firebolt",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Giant_Firebolt"
        },
        {
            id: "GRENADE_ANTI",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoElEQVR4nL2RzQ2AIAyFq3EF9/HgHiYwDAdngJUcg5NH02NNjZKKP6AmvlMhr19fAeCjilyjUoq22jmX3ReapSSsgoTYbK0FrXW44zMAECepUoA17mKWkx9LiTUkqDwzT31LY1OfTuNVbh9x6ltCbwiH7gDIWgG9CVG5ZqBc4RIyNvUyNVYMSUaPxdCr90hC0Jt334ZDt4v+WBz5dfPvmgF8q7dsZLgsyQAAAABJRU5ErkJggg==",
            name: "Odd Firebolt",
            description: "A somewhat peculiar bouncy, explosive bolt",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Odd_Firebolt"
        },
        {
            id: "GRENADE_LARGE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAs0lEQVR4nGNgoBX4VKj+/7auEBiD2CRp/rze+D8xYrQFnwbMC5/xKMQmx4hLMczZL/e8ZlC9/A6nOkZcmhnteBhYDDzA/D8XdjD8P/SFga//JoZ6FqymQjVzKLSA+T9AhjDsYPjEoP4fmyEoABTq3+9X/0cHIDFsscGELiDuIsqAC4DCg6ABDFA//3hQA+eD2CAxbIGJEQYgP4L8CvIzyO8wA0GBiA3gDRBQeMC8RDDwyAUAKb51e/q8pEgAAAAASUVORK5CYII=",
            name: "Dropper bolt",
            description: "A very heavy explosive bolt",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Dropper_Bolt"
        },
        {
            id: "APOTHEOSIS_AQUA_MINE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABoUlEQVR4nLWTzysEYRjHvzM7zO5q/ShaJEVEClEOy+bHQe7+AdbRXSh74sBJ+QPsOjo6Sg60u5SilJKf4bCWg62pXWNn5tXz6p1mdiUp33rrmff5PN/3eX8M8J8anEux8aUj9hOjiIBAvWDicC0siTnt7gBaUcHwfIKpZR7srYQ4J4sEFWuZa/RNx5gwVAL1oDER/eqCcsQQKyQ53UUxyVfXgVz6HGb+DY1do3h5urS5s3hE+tbAacIMHd6aZuhahseKrxqW8Y7T2LSrRnJ+UNs53YD5kQcsA+vHG9h+uMXJ1KbNKB4ZB6tD7g7GFpMsm77iE4b2jMrWMLp3oqgycnzOtBj2R2d5js6EVNvUyQ9SFq5O5V5vcF/u5/EFAKugw1/X5mIM0yrdwshCkokEaWBrBnKZD6nJVUBW4Cn3wa8q9hWWGJD6I3EmK14Y+SwkRYUaCOL97ZHHxTdAkotvgDEGs5BHsKWX75mK/Q09LuZbg+H5hJ0Qq9CB0coVquRa2cnaBvQ8A8F2G9xdDknUAQ2xZ8oRQ+yvRO+Cfqjf0X/UJzx/tsKjsl35AAAAAElFTkSuQmCC",
            name: "Aqua Mine",
            description: "Creates an explosive Aquamine with subtle homing properties.",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Aqua_Mine"
        },
        {
            id: "MINE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2ElEQVR4nGNgGHTg//sP/0lRz0SpIUwoGktr/hMyBF2cCUNFWw+Y+rdoDVEuY0LmfLp6HYwJaUZ2KROyolcvLqJo+jtxDlwh3FCoC7EaoHruDiOI/rJzO1aDXvmHM7w6eZrhzt4V2A3A5oqXdu7/meJC4HwOHh64RSDAgm7Tm7WrIYbshIiJbVwJpkGGiDAwMNxb2IFiARMyB6QZBJTiK8CGgDDM7yDng4DK3jO4DRA/tBPsNJBBIENgAKYZZDvIQJC3UExB9i8yG+Sl20Yq/0FsEI2uZnAAADKZgASP3FmhAAAAAElFTkSuQmCC",
            name: "Unstable crystal",
            description: "A crystal that explodes when someone comes nearby",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Unstable_Crystal"
        },
        {
            id: "MINE_DEATH_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMklEQVR4nGNgoCf4PFn8P7oYEzLn//sPGApA4Pv9arA4i4EFCh8EGLEZwCgogCIO1nTY/z+DjA4Dw5MrDJy2GxkxXPC/tOY/NpeAnA3XDAIyOmDDYN5hQrGmrQdM/Vu0Bi7Em/uSEWzjkysQAagLQOIoBny6eh2MkTUjhwGHzkKwZo5NuihhwARjvHpxEUXT34lz4IrYNimC6T8XToBpTsVWzDBQPXcHLPhl53asBr3yD2f4ttqA4c7eFSjyTMgcdFe8tHP/zxQXAudz8PDALYIBFmSb3qxdDTFkJ0RMbONKiC1xIQwiDAwM9xZ2YIQPE4wB0gwCSvEVYENAGBagIOeDgMreM7gNED+0E+w0kEEgQ+DegmoG2Q4yEOQtDFNg/kVmg7x020jlP4gNotHVDB4AAJrwn3A501/kAAAAAElFTkSuQmCC",
            name: "Unstable crystal with trigger",
            description: "A crystal that explodes and casts another spell when someone comes nearby",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Unstable_Crystal_With_Trigger"
        },
        {
            id: "PIPE_BOMB",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAaUlEQVR4nGNgoAp4U3L9////WKWYsKqGMLDqYcKlGpceJjyqsephQeY8efAEwlCwUvnY/+DPsx9E+QE/YBoGGliQOceunoAzrLQtCNuQdb0WU4XBGld8TkLTg6YaJ5im2XwhZDdRSgkCAMjWK4+3Po2KAAAAAElFTkSuQmCC",
            name: "Dormant crystal",
            description: "A crystal that explodes when caught in an explosion",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Dormant_Crystal"
        },
        {
            id: "PIPE_BOMB_DEATH_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAyElEQVR4nGNgoAR8niyOJvKm5Pr///+RRZgg1Pf71QwMDCwGFnA2RDWE8R9JDyOc9f2wP4OMDsOTK5y2G5FVC3drQJUyghSzQFwCMltGByQso/P9MMOfCyd+PkR38P///xkhmjBtuBCyGyKoYKXCwMDw59kPCFekRxPhB5BLwKrhfsAKmCAUp2IryKQLJ+BsAhoggDf3JQMhwERQBaUaWLCKHrsK8gyEYaUNik0CNmRdr8UUNFjjis9JaHogqgmDaZrN8EgkEwAAOkRLzkdLF4YAAAAASUVORK5CYII=",
            name: "Dormant crystal with trigger",
            description: "A crystal that explodes and casts another spell when caught in an explosion",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Dormant_Crystal_With_Trigger"
        },
        {
            id: "FISH",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaElEQVR4nGP8//8/AyWAiSLdowbQwQD78s7/CfMu4Y/n////Y+D4uRf/w9h2ZR3/kfnomBFXQgLZLvCEB0Vsmv0eBtcZHxmundvHSJQXbl9fC8YwgK6ZKC/8h3qDZC8wEAkGeTogBgAA4cB9lnC02kIAAAAASUVORK5CYII=",
            name: "Summon fish",
            description: "FISH!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Fish"
        },
        {
            id: "EXPLODING_DEER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAnElEQVR4nGNgGDCwtzYIjQEBLAw4gHGx115s4ky4NAgIpDAwMGStvs3AwKCuoYuu4cOHOVi1TQtVZWBgCNBSKg/yR2j48GHO2d5tuKxiYGBw02Z202ZG9wOa55CBc/M6FCdBnAsHxsVeeGxjwlSK5rxdV//i1IDpEzTVDGgadl39u+vqX+fmdRBHQ8jOdRuxa8AqTcAPxACSNZAMAEljL9o0O3OlAAAAAElFTkSuQmCC",
            name: "Summon deercoy",
            description: "Summons a seemingly-innocuous deer",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Deercoy"
        },
        {
            id: "EXPLODING_DUCKS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVR4nGNgGBkguMLxPwhjk2PCJtid4QFXDNK4Z/o5nIYz4ZJANsQl0whMP9mQ9B+GYXKM2DTHuOr/11eWBLNPCPwE068evGPo0v0MZltW32PE6oJ5E2vBJi/ZfRGuwOIDO5gWUxBiKLvMi6IZBFjQbQcZ8vb6aYaLd58zwFyBDzAhc0AaQUBY05TByccPbAjMFTCX4DWgdMYORpghIIDugsMrEF7DG4jdGR7/Qa5wk3/KsHzHM7DBDKSA461K8GhCjjKCXkDXDAIyAfNIs53uAADpwFKjP62eCgAAAABJRU5ErkJggg==",
            name: "Flock of Ducks",
            description: "Summons a chaotic flock of spicy ducks",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Flock_of_Ducks"
        },
        {
            id: "WORM_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsElEQVR4nGNgGAVEAU0t3/+4+EzIEk4xs8ASFi6l/5EVG8aWwuVAfEkjXzifEabw/////x+fbmao2OvA8OLqDQYJbQ0w/fzcZgaQBlx8RpgBMFsTzNYyWJvIMhw985jhEO8CuGH39m4Gq+OSUEXhM8FsP767i+HjsxtgzfnrosE0TNHSClsGJWdfsGZ0PiOyC0AG5AdcJckFjJSGAQMxsQDiI8cCiA3jMxAD8KWDYQAAfaSLdqFVp4oAAAAASUVORK5CYII=",
            name: "Worm Launcher",
            description: "Summons a giant worm to cause havoc for a moment!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Worm_Launcher"
        },
        {
            id: "BOMB_DETONATOR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA0UlEQVR4nGNgIBu8KbmOzP7//z+c+x+JzQShpmk2P3nwBFMnnPsfpocFQmVdr2UAK7sQshsiwsjIiOaE////M6KJTtNsZmBgsNK2MFjjimmJSI8mlH8hZDeyKzENZkACID8cu3oC0wFw8Lb0BnYJZHvw2MkCZx27ekKmVAaTzQDzg3C3BhaHwEMJGbwpuQ5B2N2GJnEBbAS6hmmazXA+JHAxwwcCoDHNwMCwausaCAMUiWAjcYYPsj0Q46dpNl8I2Q1xDMRydA+guQeiAX9IEAsAobN5PMNPx44AAAAASUVORK5CYII=",
            name: "Explosive Detonator",
            description: "All nearby explosive spells cast by you instantly detonate",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Explosive_Detonator"
        },
        {
            id: "LASER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiklEQVR4nGNgoBb4DwWb73v/J1szOYYwYRPkV/BkwGdI92o7uBwjiAAp9lHYAhY4zDAVRfHHB9sZfBW3gtVhA4wwBi4bQa7BZhjIFaWhhxhxmoxuKC6DGPEZgMtQmGF2jDn4XYBLI0ku2IxDI1E2Hvo/BYzRAxgjGmluIwMWAHMF2HSQJpJtHDQAAOGLfBiav5dZAAAAAElFTkSuQmCC",
            name: "Concentrated light",
            description: "A pinpointed beam of light",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Concentrated_Light"
        },
        {
            id: "MEGALASER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2UlEQVR4nKWTMQ7CMAxFnYpDoB6JGyDBwliGXgUG2GBhZC4rp6HiFh99N4nSNmkDWHLqNPGzEzsGgPwjiy/2DiMZDkVq40P2VOcUSxMesD0av+HammGUqTNCAbcahhH543kXEwBnL6gIJy76uq6ynDVFdGXQVG0WKis5KXBXznAAqF5eggYVeaBNzRBxgJGj+xKagKmvcHCRYxBrS0oldoQwgzmQWKesu4iBpEGlxubQX0g4jkAso+8BlizsxKCEanBtWWqPaJlZ/h5gSgjj23i3Z507kAf8Kh96cnGVd0S55AAAAABJRU5ErkJggg==",
            name: "Intense concentrated light",
            description: "A spectral wand is summoned that casts a huge beam of light",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Intense_Concentrated_Light"
        },
        {
            id: "APOTHEOSIS_MUSICAL_STRIKE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXElEQVR4nGNgGAWMuCSuZN77j01cZ7oSTj0o4P2Jz/+JEWNioBAwDbgBLOT6HasB7098/r+yeQ2YbSNnj1MMGTAiR9uRRwfhCkHRhU0Mr3+uZN77j+5cbGLDDAAAgDo6b2Cr1X4AAAAASUVORK5CYII=",
            name: "Musical Strike",
            description: "Fires a powerful musical attack, careful not to lose your creativity",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Musical_Strike"
        },
        {
            id: "APOTHEOSIS_MUSICAL_STRIKE_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsUlEQVR4nGNgoDb4PFn8PynqmWCM7/erwRpZDCxQ+IQAIzLn+2H//wwyOgwMT64wcNpuZCTagM+Txf+DbQZphoEnVxj+XDjB8PDacRQNOtOVcBv8/bD/f5DTQfT7E58xvIBNDA5gfgZ7A0cY4DUAPRaIdQETugBv7kuiAg8GWIixBZ/TWdAVrmxeA2bbyNnjFEMGjDDGlcx7/488OghXCIoubGJ4/XMl8x5G9GETG2YAABMmcxkED+erAAAAAElFTkSuQmCC",
            name: "Musical Strike with trigger",
            description: "Fires a powerful musical attack, casts another spell upon collision",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Musical_Strike_With_Trigger"
        },
        {
            id: "APOTHEOSIS_REVERBERATION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABB0lEQVR4nGNkQANW/W7/GbCAY4W7GBmIAe3nJv4nRgwGmBgoBEyUGsCIzbku8y5jVWw6ZQ6GekZkjTB26m8TBhFza0ZsYugGsMA0z+uZDRYQNZViSLUywSqG1QtW/W7/X59+BlcIiq43J4/+t5yYDhebdWsGg0TCc4YXCyRRNOtMV4K4CGQIsnNBBiCLvT/x+T9IDFkzSAwjEN8gKYL5F5sYzABBC15GcBjAFB6vKQezJdQ1cIphhAEDAwPD6ZyU/y9u3oArBEUXNjF0L4BcwAADIA3o/oSJwfwL0wjDGGGAbsPK5jVgto2cPTjEsYlhNeBK5r3/Rx4dRFGITQyX5XBDkJ2OSwwA+6O9TxJaVBoAAAAASUVORK5CYII=",
            name: "Reverberation",
            description: "Creates a reverberating sound in the air, slicing anything nearby to pieces.",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Reverberation"
        },
        {
            id: "LIGHTNING",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAUElEQVR4nGNgGCGg/donEqTbwdz///9hUYom2n7tk92mq9hN/f//H5pJ7dc+/f//Dy7OgGwzmqjdpqsQpRApOzCXNF+2g20joAe/9xhGFgAAsN1H0LR7o34AAAAASUVORK5CYII=",
            name: "Lightning bolt",
            description: "The primordial force of nature",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Lightning_Bolt"
        },
        {
            id: "BALL_LIGHTNING",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAUlEQVR4nKVTQQ6CMBBsiUd8CE/AB3j0aky86g9MuMEN4g/Qowfj1Zsf4AnwD/DcNbt0aUkFNDRZWra7ndnpVgKAmDO8qYCsasYRAOAnS8saABS0s/GL8UQFdrKxHw5IyxrRdPKfDFKT1POvzzfyh3EOYZyTz3MFo2uRWdU4er1Oe6mXPIuFHRAFvsiqd7fJY5Vc6NAiORJIkRwwrj0I3JqJoqlVabpcf19Mj6lHwVJGgY9IhPZ83CWX07K4SozRyMxAMDoxYGFw1qjaXEHZJH4swYiJ1WadZrYOE52okAmxsa/T/Pd74SstFs2+86FuHHxMKBrz32x3VJojIG7Ofc4fUp7ER0koGBkAAAAASUVORK5CYII=",
            name: "Ball Lightning",
            description: "Summons three short range electrical orbs",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Ball_Lightning"
        },
        {
            id: "LASER_EMITTER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAe0lEQVR4nGNgGAUoQCZu6XYQZiABMCFrFlM28ABhUgxhgWnOTIryqLKHCLYd1PKYzsBA0JAni6I9wQyjxqv/0cGuDwgM46PLwV2ADbjyI9i7PyL4IDayPAuIeHX3wg6QsxFeYGCYPm/ZDgYiACN6IMIMhPuP1tE4ChgYALNJX+3IP6QfAAAAAElFTkSuQmCC",
            name: "Plasma beam",
            description: "An instantaneous, dangerous beam of light",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Plasma_Beam"
        },
        {
            id: "LASER_EMITTER_FOUR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVR4nGNgwAN2ffj/H4QZyAGtB/7DAYiNSx0TLom1B6+B6d0fEWySDHh198IOEO3Kj2CTZAADA4MJyHYYmxwDiAIsIAIUSCB/IjnVJDMpSgTkfBAAsaczMGyHaRJTNvAIttdiqHZgZGQERRNIIci5MA3YAJJ3wOpgfEZYPCMLwvj4DIOpZ8TnhSp7CKftIAPD9HnLdmDzAgMuIBO3dDsoEYFcCGLTLBaYCCnAFxZ4DQD5ExaoIDbJTiM2M+EFxGRnAPy5fTa1ZlpSAAAAAElFTkSuQmCC",
            name: "Plasma Beam Cross",
            description: "Four deadly plasma beams in a cross-shape. Look out, they can hurt you as well!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Plasma_Beam_Cross"
        },
        {
            id: "LASER_EMITTER_CUTTER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAn0lEQVR4nGNgGPKAEZnj2qz4H5m/u/Y+I9EGuDYr/lcxkGHQM9IB8y+du8Jw58ITnBphhjMia07zSWQwYEgEK7jAMB+rxhPPTsMtmO57mJEFJgGyGaYZBJDZyMBAKhHJ8MMMTCAKZLuFlCmKQpAiGMbnIhZcfkR2AUgzLq8xgQhQYMH8RsgwdK+xwBigQLkghdsmbIFIvWiEAXIS0jAAAAV2SGlataw5AAAAAElFTkSuQmCC",
            name: "Plasma Cutter",
            description: "A plasma beam specialized in cutting materials!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Plasma_Cutter"
        },
        {
            id: "DIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAc0lEQVR4nGNgGE5g89yIwiTjzXMj8CtjhLN8nJTSo80YGBj2Hb3tZK3KwMDgm7wCu4bCJGOICmTVyIz+eWfRbYDombn0FJolmNqY4FrhqmcuPYWmeiZMBJ+TkPVv2XcPeyj5OCltnhsBZxAbSr7YAmdYAQBqvEey9s6rSwAAAABJRU5ErkJggg==",
            name: "Digging bolt",
            description: "A bolt that is ideal for mining operations",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Digging_Bolt"
        },
        {
            id: "POWERDIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAyklEQVR4nGNgGGrg+25nnHKbk8ObXaw3J4fj18wE5y88ed5AXoaBgQGiDVnn9+ftcDYLRAVEKQMDw4WHTyDsCw+fQPRcePiEU7ISpmcvyIbaPUcvPHyCbAmyNgN5mc3J4T2xWyAmojgp3twQU9uFh08WnjwPV8YIcRIDAwOa2QtPnteXEGVgYLj44vWaK7cgTuKUrARpgIBmF+uLL17DFelLiNbuOQr3NKdk5ffdzpyue0GehgC4aoi6NVduwaU4JSvxxhZG2A9yAAAXb2UY5QEK0gAAAABJRU5ErkJggg==",
            name: "Digging blast",
            description: "More powerful digging",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Digging_Blast"
        },
        {
            id: "CHAINSAW",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAg0lEQVR4nGNgGNHg0KxZh2bNYmBgWD9nDlYSAhgZGBgWp6fLGxtD+FJWVgzYwOUTJwJTUhgYGJgYGBhiZ858ePYsROL7169o6N61azuWL9e1sIDYA9KAH9y6eFFNX5+BgQFhw+L0dLg0Jzc3GvKIjFTS0lLR0ZlSXY3F0xBRXCTDCAUAEH5DTEloKaEAAAAASUVORK5CYII=",
            name: "Chainsaw",
            description: "A good tool for cutting meat. Also has some magical properties...",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Chainsaw"
        },
        {
            id: "LUMINOUS_DRILL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA10lEQVR4nGNgoBAwggimWoYkZEE+IQZ5GPtDIUM9QQNgAGYQzAB1aQYxmNzJMIZMBkIGgIBAP0MjumZnMTEBGLvN4VUkAxJgYsACcGlWltGTn3vH5RhBA3BphrGRDWFiwGE7Ls0gYKUcLQszhAXdAGTN2DTC2L7KbToMDHswDSCkWZhBm1+UwZQXJs6CrKjqgNhydM3YNM6763o8deEeSwwDlInU+K+ZwQrD33PvuBwD4ev/5z8G4Vf/T336DwUgcaZahv8M+MB1cjXCNJOlEdkAsjRSAwAAmgF9OKQFIzQAAAAASUVORK5CYII=",
            name: "Luminous drill",
            description: "A pinpointed, short-ranged beam of concentrated light",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Luminous_Drill"
        },
        {
            id: "LASER_LUMINOUS_DRILL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOUlEQVR4nGNgoBAwggimWoYkzWvT5wpImMAlPrw4w/DUJrPpQyFDPUEDtIOn/wdp7sjRYXhyYQODjEEAQ8WUK2BDeMIzZ4DUnAxjyMRmAAuIgGnWEPnCoOHiwmDgU8CwYsEEhoopDAx/GBgYnMXEBJwPMCwHqW1zeBWJbAATjAGyGQQMfGoYLmxpgfNBmmFqlGX05OfecTmG1QAZgwAwDdKMzEfWDGMjG8IECzCQn2+84WHYs2cPmIaFAbpmELBSjpaFGcIIE4QFJAyANBd1rj2OrhHGFmbQ5hdjNOODGwADVQfEluOyFaZRlMGUF2w7IyMjCyHN2DTOu+t6PHXhHksQmwVXQOHT+K+ZwQrd5QygQAHh6//nPwbhV/9PffoPBSBxplqG/wz4wHVyNcI0k6UR2QCyNFIDAAB8u7aD/DPT/QAAAABJRU5ErkJggg==",
            name: "Luminous drill with timer",
            description: "A pinpointed, short-ranged beam of concentrated light that casts another spell after a timer runs out",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Luminous_Drill_With_Timer"
        },
        {
            id: "APOTHEOSIS_TARGETTER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuElEQVR4nKVTQQrEIAxUWRAPPQj7gP1kX9EP+Lw+YMFDi+IpSxZcRq2VdueiYyaJMVGIAYiIzuxqFCDGeGp/1NmklJL367LQc5q+57tz9N428ZpnWesahBCInZHnPZ8jP8TuXCHy3lMveIMVjOhYc9QpFOWaGdbaokbkqJP5UfC1U0pNgHwLrfWPG2Pa+rv1dXQKDdwqzFZnP9I1qFt1qQt/zwHB3LM4zwSvGHT0PwoMJ2+ES9nu4APQbq7yqIktKQAAAABJRU5ErkJggg==",
            name: "Targetter",
            description: "Fire a projectile which causes irresistible hatred towards anything it hits",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Targetter"
        },
        {
            id: "TENTACLE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAtklEQVR4nGNgIBEwovEz09shjOkzKwloyIQphQOsepiQVcvISj18dFNGVkpGVgqrEQwQG+CqGRgYqmviIRKtLQufPH6GaQ8ThJKRlTp6dD9cNUQnmj2ZYAbUBjTjkUErqlUsENGjR/dbWztiDZZqVFOgTsKlGifITG/38kxobVlIUCUTnAWxxMszAb8GRmRLIF7H5Xt0G6bPrHzy+NnRo/shIUNYA0SPvJw6JNCI0gAHJAcaHgAARJ5BpYYFs40AAAAASUVORK5CYII=",
            name: "Summon Tentacle",
            description: "Calls a terrifying appendage from another dimension",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Tentacle"
        },
        {
            id: "TENTACLE_TIMER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAABMElEQVR4nGNgIBEwovEz09shjOkzKwloyIQphQOsepiQVcvISj18dFNGVkpGVgqrEQwQG+CqGRgYqmviIRKtLQufPH6GaQ8ThJKRlTp6dD9cNUQnmj2ZYAbUBjTjkUErqlUsENGjR/dbWztiDZZqVFOgGrCq1g6eLiBhAmF/eHHm6tpMhFxmeruXZ0Jry0Jk1dbZpw9f/758+fLD179bZ5/WDp6O8DTcEi/PBAhXQMKkI0dHQ+SLi4tLREJBR44OxDaohukzKyE+s7Z2hNvz5MIGBgYGA5+aC1taIGwUGyB6jh7dDwkZUFgbBDAwMFzY0gJno2iA6JGXU4cE2ocXZyqmXLnxhmfPnj033vBUTLny4cUZRCihAWtrx2018drB0yumMDAwqDAcAalGCSXiAQAOeoGBLE0qcAAAAABJRU5ErkJggg==",
            name: "Summon Tentacle with timer",
            description: "Calls a terrifying appendage from another dimension! Comes with a timer",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Tentacle_With_Timer"
        },
        {
            id: "APOTHEOSIS_JUMPER_CABLES",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFklEQVR4nM1RO2rDQBCdNStDQEaIgMvU6hUQuLTOEMgVcohcJzdIkyJNIJ16ncGNWSxIYcOEN2Qm41VCUqTIK1ZPbz4785bo32AbIz893PDL4z2D5/GmaSSGHHDVFzhui0KEi6qhtzSS14Cu64QjhhyvLXDsmGkdgiWAQ1OklKiqKrsAHJo1eD6dQj6BasA4jiGfQDWD3/s7D77iUQnGvlsuJbB34yswdt/3EpimiWYm1uFzIvDcxLIsLQ6uJkYtwK2vx6MkbIpCNF+AW4dhkP+2bUWzBntmc3398SoeKJaXWK0oHQ72ArbCjvnMdfD8Gb3r4L4JAVdEfE3E+M4cVMdj5Mu6ZnxnwZ+K8yZnK/wZfruCF98Bb6qbDPVwB2QAAAAASUVORK5CYII=",
            name: "Summon Jumper Cables",
            description: "Summon a pair of electrifying vices to shock your victims",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Summon_Jumper_Cables"
        },
        {
            id: "HEAL_BULLET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAh0lEQVR4nGNgoDVgxBTafN8bzvZV3Iomy4TVGB+FLT4KW7BKMWEKaSgYoDEI24AHsCC7G9PI2/+rGRgYbjy4gO6fzfe9/+MFm2EhQa6TGBgYtjzwgTtJhaGFgYHhDkMNhHsD7CSc4Pb/aogzIB5gQAUkOwmLBrgDsLoE4QdksOWBD6k2Uw8AABgxSK9I3LmSAAAAAElFTkSuQmCC",
            name: "Healing bolt",
            description: "A magical bolt with rejuvenative powers",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Healing_Bolt"
        },
        {
            id: "ANTIHEAL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDklEQVR4nGNgoBV44+v7v0FN7f+HoqL/IDYudYzYBEEajXeqooiddb/N0HDrFoZ6Jnyu8FHYAsYgkKOujlUNCzZBkOL3CnpwvoaCAQOL6nesBjAhOxvmb1wuAsmjq2GESRyf9A9uGwyoMLSA6TsMNXCxGw8ugGlfxa2I8GhQU/u/+b73f2IBSC0sZpjwBRA+wKKqighEFjDnJsOWBz5Ee+HP7dsIAwT6+hg/MBT9BwlOubmaocDHh+F1LyeKjaLFkFgQvA0J9yk3b6LGwp/btxlENm9mBCUWmOnoAKYGHG7QRMWEy48wp8LYENdBbEUGcAOQJWFsUJiAMAjAbCYawKIJlnjAzsaTyAgahAsAAJPWq5XbS63wAAAAAElFTkSuQmCC",
            name: "Deadly heal",
            description: "A projectile that at first deals damage, then heals over time",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Deadly_Heal"
        },
        {
            id: "APOTHEOSIS_SUPPORT_BULLET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3klEQVR4nGNgoBAwogtYTTz130nSBKvifc/PMBzLN0PRw4hNY3MohrlgULv6P4ZBjCCiZtW//5YKvxm8TNnACrad/sVw/AErimZs8i1hTIwsMBMZGEwYjj+A2NASxo7VCSCLICxWqB4CAOQtEManhgndBpgGWJiAMLIYwhVYnLf11E+4AhAbBkBsbGowXEAOYIExQCEKMhkWOK3HLzIcfwCJ1n3PLzIgBzZILVGmWxERiIzYUh8uG5D9DktMLCAOSDNyQrE89fM/9oQEMReUkEBeOUa1pIzub1IyE8UAAH0mo/qeCKZMAAAAAElFTkSuQmCC",
            name: "Cleansing Bolt",
            description: "Cures most negative status effects from it's target",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Cleansing_Bolt"
        },
        {
            id: "SPIRAL_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAiUlEQVR4nJVR2w2AIAwsBmfQLqULsISTMAtOwDboL7+a1A/UoJaHFz6a5tpydwA/IdguEc3LDgAjtv/2KesLDNRreOUZZX3Mu2uMmrWnMZqRAGDcVi+uSW36gogeVYqNV9+47bwgBJ9GgJu65JcyUNYzOlkrUa+5KGLeK8HyDAtGbnBj6GXejFocOSQ/+d0M+aUAAAAASUVORK5CYII=",
            name: "Spiral shot",
            description: "A mystical whirlwind of magic sparks",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Spiral_Shot"
        },
        {
            id: "MAGIC_SHIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8klEQVR4nGNgGGjAiEtCN2H3ZG5NXuWv1z/fvbzANZdoAyw6T2wTFBH1BLHfv3m9/US5hZfn3Lv/vY0FGbaefc+wPVkZRQ8TMgekMMZdDawZBEC2g2iQ5mx9QTANsgBZDwsyB6YQBJbsvLUd5nSQzTAa5jqsLth69j3D1IvvwTTI6TBxkLNBBiKHD9ZAYyAAQGpAXkD3BhjAJIg1CCMMvl7/fFfGVilH0FaUgVvzhDKyF0AAX0ygKALhKRfegWmYOMhlIDEQANE4Y+H9m9fbQdEIi4n3nSe2gVwGCnnkmEAGjCg8LE7FlrDwGoAMiE3OAwsAupadEVDLbxEAAAAASUVORK5CYII=",
            name: "Magic guard",
            description: "Four guarding lights rotate around you for a time",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Magic_Guard"
        },
        {
            id: "BIG_MAGIC_SHIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAv0lEQVR4nGNgoAXQTdg92aLzxDYQDeJ7zr17GUSDxJD5cOCJpMBz7t3/IAxTDANTLrwDi4NoZHEmELE9WVkXJCEoIurpbSwIlvh6/fNdmCKQYVvPvmfYlqTEAKLRDWeA2QwC2GxHdwGIxvD3FBxOxOVFWPgwEBVIWAIYmytJAigu0EXmkAiYQAS3Jq8ycrxjA3i9qZuwezJ6/GMLB3wBzYAcRdgUEIxqCzwKYC7E6wJ8TsSWxPHmB2Q+esaiOgAAAJnzmrtSGbAAAAAASUVORK5CYII=",
            name: "Big magic guard",
            description: "Eight guarding lights rotate around you for a time",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Big_Magic_Guard"
        },
        {
            id: "CHAIN_BOLT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiklEQVR4nGNgoAZ42PbkPwj/3f//P7IYLrU4DVoTuAFsCLJBZIE1SAZ9+wcxDK/N+AwCYZAhIEyWISAAM4QBCZBk2Ld//8EuYSAH/N1Pb80PoX6jyOZv/wZC88O2J/D4BmGyUiPM/7AEBEuNMIzNZYwwjfJVMmA2NgDTGJjnD+Y/Of4UTOPTQzQAAOFWqTR97vjCAAAAAElFTkSuQmCC",
            name: "Chain bolt",
            description: "Fires a mysterious bolt that jumps from enemy to enemy",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Chain_Bolt"
        },
        {
            id: "FIREBALL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAX0lEQVR4nGNgGAWEASMeuY89UWzeghD2r63v+UuWMTAwsED4rwMM2Ww0+YqXfuqNZmBggKvj0JgCYzB89xbk1JwKVQ3X9rEn6j8O8P16Nk4nfeyJQraHAclJo4CBCAAAGxszHvq7QS8AAAAASUVORK5CYII=",
            name: "Fireball",
            description: "A powerful exploding spell",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Fireball"
        },
        {
            id: "METEOR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA/UlEQVR4nJ2SMQ6CMBSGf0ljXIjOTt1lMIEQRiZ3Fk/A4BU4gVdwYHB24QqMxsCmiSNHkLAQQ8CUh1VRG+Mbmv+178/3Xlvgj8gD67yYAqD1V08eWCTUlZpUw+UsDyzNbtSegVRFZDJuVNmR1vowGK8TFaE+CDPjBoCR62t2U0SmioA7hHGnyvaMOwDKOOyhHgQAupded6eWIzyEGi5nz6gXg8jtpiudb2mHcYdxQ3pYz6B7aRG1irfHkxVpxp08EL31CTQ9DdBVoxOa3XxoCcB4nZRx+L7/eQYZVbavLptOt4Lu/eVan6OIzJHry7SMQ91LVQb6V9T3t1f/KW50YF7b+TD3SAAAAABJRU5ErkJggg==",
            name: "Meteor",
            description: "A destructive projectile from the skies!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Meteor"
        },
        {
            id: "FLAMETHROWER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAi0lEQVR4nGNgGMrguhkfUdLX8avDBF9b9Umw/boZH5pVLMjqvl/PhjD+rTvy1Z/h0cb7cv6K3NUXr5vxaZ76JOevyHDqIsLe79ez/4MBhA0X+QrjIjwDVwoBWLnXYapRnAQBHBpTftzIgZAQ531jMNA89Qk9KOAGw90DcQZasDJi9TSn5lTCQTloAABOG3kcV9gDHwAAAABJRU5ErkJggg==",
            name: "Flamethrower",
            description: "A stream of fire!!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Flamethrower"
        },
        {
            id: "ICEBALL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYUlEQVR4nGNgGAUDDxiJURQ77fd/zzAWOH/7qj8Mi7NYGVEMsA79/F/JkYNhUSYLQ9z0P2AxZE2RwqiGLn/LwBAlwsgI14xsEMhGQmDZm///CXohdtrv/+guQffCKBgMAAAj3EJl51mLGwAAAABJRU5ErkJggg==",
            name: "Iceball",
            description: "A magical ball of frozen fire",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Iceball"
        },
        {
            id: "SLIMEBALL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAfklEQVR4nGNgGAWEASMav2hyUF/uOgiDgYFBSPYHAwODhBRPitkqLBogiuDq3j3m0DJnMZDlufD4CwMDA0QPE7KGvtx1EOMlpHjePeZAlnrxDKSHgYGBBdklRZODwGb/uHYSZDYDA8O1k38YGKBK0Z0Edz2EDXEVmgcYRigAAGgnK0ZoPP5rAAAAAElFTkSuQmCC",
            name: "Slimeball",
            description: "A dripping ball of poisonous slime",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Slimeball"
        },
        {
            id: "DARKFLAME",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAkklEQVR4nGNgoATMduwnQwqL9GzHfiMNWxRBZA6yNFx8NozBBOFMf74OriJ1f2GmZBCyDQwMDKn7C1H4aCbBLUF3CQPYBrgBcKumP1+HZgMDzCxGNCGsSjMlg+BOYiKoGg2wMGADcE9jGsGERzVWwARnwUMTbipWF2J3ErJSZB+jhxI87OAa0FRj0YCsDUsEkwEAXRVOEf7oUR0AAAAASUVORK5CYII=",
            name: "Path of dark flame",
            description: "A trail of dark, deadly flames",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Path_of_Dark_Flame"
        },
        {
            id: "MISSILE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAbklEQVR4nGNgGIGAEUKdNzZmYGDg1NLSWLwYvwYmZM73a9duxMYSZQMDA0N7ezucraCgAGFo9PTcKCmJjIzE7iSIq857ecGlDbdtg3DheligEmfPImx48ABuw/dr1xi8vAjYgN/fTMgcYkJpOAAA0iAizyeO5e0AAAAASUVORK5CYII=",
            name: "Summon missile",
            description: "A missile!!!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Missile"
        },
        {
            id: "FUNKY_SPELL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAOElEQVR4nGNgGAXDADDCGJ/buf+z2LhAOCoWmCrvnIAz/xzZw8Bb+RWslwmrsUiK4QCboaNguAAALCILBC70EUIAAAAASUVORK5CYII=",
            name: "???",
            description: "???",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/???"
        },
        {
            id: "PEBBLE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA40lEQVR4nGNgoBZIrZyAVZwJl2oR55dY9TBhCgXEF71Q3humyyTi/BJTlhGrS14/e/TX9rbEXWcGBobZ7QU4bajcUwlRLSolx3xYFatnmJBdEqbL9EJ5L4SrGcsO0Szi/DIgvgi7DXWbL0EMFnF+CdGsGcsepouiBoUDcTRcUZOv3pUHV/CFEsT1yIqYD6vWbb6EUwMDA8OJvRvgiiDkg1mfkRWwIHPuXj+nrGmkGct+fbFqHQPIPxCRDQv7sNgAEYV7AKIaYgpyKCFAQHyRrpkDhAEXgTAg4ugALoosjV0pSQAAgwNfpE0WeMQAAAAASUVORK5CYII=",
            name: "Summon rock spirit",
            description: "Summons an autonomous rock ally",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Rock_Spirit"
        },
        {
            id: "DYNAMITE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAW0lEQVR4nGNgGDDQlOo5pyqCWNVzYEox9TBh1fDs9Uc0Bj6w18ICgrBawoRL27F37yCMlLYVRGmwEhLCKs5E0AaiNBx79440G6yEhEi2gQEHwKIBj2p8nh44AACS+iJ+1ThKcwAAAABJRU5ErkJggg==",
            name: "Dynamite",
            description: "Summons a small explosive",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Dynamite"
        },
        {
            id: "GLITTER_BOMB",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEUAAACCX1OceljQNdL/ydfgvFeGNGhkjiHHAAAAAXRSTlMAQObYZgAAAEJJREFUeJxjYMAKGBWgDAUmqIAAI4TBbMAAkUtLgwiwGRsngBnJyS5mYIaZMYyRbAxhpKWZQRjMackQxQzJEAF0AADjLAhjOtkK1gAAAABJRU5ErkJggg==",
            name: "Glitter bomb",
            description: "Summons a bomb that explodes into volatile fragments",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Glitter_Bomb"
        },
        {
            id: "BUCKSHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAKMGlDQ1BJQ0MgUHJvZmlsZQAAeJydlndUVNcWh8+9d3qhzTAUKUPvvQ0gvTep0kRhmBlgKAMOMzSxIaICEUVEBBVBgiIGjIYisSKKhYBgwR6QIKDEYBRRUXkzslZ05eW9l5ffH2d9a5+99z1n733WugCQvP25vHRYCoA0noAf4uVKj4yKpmP7AQzwAAPMAGCyMjMCQj3DgEg+Hm70TJET+CIIgDd3xCsAN428g+h08P9JmpXBF4jSBInYgs3JZIm4UMSp2YIMsX1GxNT4FDHDKDHzRQcUsbyYExfZ8LPPIjuLmZ3GY4tYfOYMdhpbzD0i3pol5IgY8RdxURaXky3iWyLWTBWmcUX8VhybxmFmAoAiie0CDitJxKYiJvHDQtxEvBQAHCnxK47/igWcHIH4Um7pGbl8bmKSgK7L0qOb2doy6N6c7FSOQGAUxGSlMPlsult6WgaTlwvA4p0/S0ZcW7qoyNZmttbWRubGZl8V6r9u/k2Je7tIr4I/9wyi9X2x/ZVfej0AjFlRbXZ8scXvBaBjMwDy97/YNA8CICnqW/vAV/ehieclSSDIsDMxyc7ONuZyWMbigv6h/+nwN/TV94zF6f4oD92dk8AUpgro4rqx0lPThXx6ZgaTxaEb/XmI/3HgX5/DMISTwOFzeKKIcNGUcXmJonbz2FwBN51H5/L+UxP/YdiftDjXIlEaPgFqrDGQGqAC5Nc+gKIQARJzQLQD/dE3f3w4EL+8CNWJxbn/LOjfs8Jl4iWTm/g5zi0kjM4S8rMW98TPEqABAUgCKlAAKkAD6AIjYA5sgD1wBh7AFwSCMBAFVgEWSAJpgA+yQT7YCIpACdgBdoNqUAsaQBNoASdABzgNLoDL4Dq4AW6DB2AEjIPnYAa8AfMQBGEhMkSBFCBVSAsygMwhBuQIeUD+UAgUBcVBiRAPEkL50CaoBCqHqqE6qAn6HjoFXYCuQoPQPWgUmoJ+h97DCEyCqbAyrA2bwAzYBfaDw+CVcCK8Gs6DC+HtcBVcDx+D2+EL8HX4NjwCP4dnEYAQERqihhghDMQNCUSikQSEj6xDipFKpB5pQbqQXuQmMoJMI+9QGBQFRUcZoexR3qjlKBZqNWodqhRVjTqCakf1oG6iRlEzqE9oMloJbYC2Q/ugI9GJ6Gx0EboS3YhuQ19C30aPo99gMBgaRgdjg/HGRGGSMWswpZj9mFbMecwgZgwzi8ViFbAGWAdsIJaJFWCLsHuxx7DnsEPYcexbHBGnijPHeeKicTxcAa4SdxR3FjeEm8DN46XwWng7fCCejc/Fl+Eb8F34Afw4fp4gTdAhOBDCCMmEjYQqQgvhEuEh4RWRSFQn2hKDiVziBmIV8TjxCnGU+I4kQ9InuZFiSELSdtJh0nnSPdIrMpmsTXYmR5MF5O3kJvJF8mPyWwmKhLGEjwRbYr1EjUS7xJDEC0m8pJaki+QqyTzJSsmTkgOS01J4KW0pNymm1DqpGqlTUsNSs9IUaTPpQOk06VLpo9JXpSdlsDLaMh4ybJlCmUMyF2XGKAhFg+JGYVE2URoolyjjVAxVh+pDTaaWUL+j9lNnZGVkLWXDZXNka2TPyI7QEJo2zYeWSiujnaDdob2XU5ZzkePIbZNrkRuSm5NfIu8sz5Evlm+Vvy3/XoGu4KGQorBToUPhkSJKUV8xWDFb8YDiJcXpJdQl9ktYS4qXnFhyXwlW0lcKUVqjdEipT2lWWUXZSzlDea/yReVpFZqKs0qySoXKWZUpVYqqoypXtUL1nOozuizdhZ5Kr6L30GfUlNS81YRqdWr9avPqOurL1QvUW9UfaRA0GBoJGhUa3RozmqqaAZr5ms2a97XwWgytJK09Wr1ac9o62hHaW7Q7tCd15HV8dPJ0mnUe6pJ1nXRX69br3tLD6DH0UvT2693Qh/Wt9JP0a/QHDGADawOuwX6DQUO0oa0hz7DecNiIZORilGXUbDRqTDP2Ny4w7jB+YaJpEm2y06TX5JOplWmqaYPpAzMZM1+zArMus9/N9c1Z5jXmtyzIFp4W6y06LV5aGlhyLA9Y3rWiWAVYbbHqtvpobWPNt26xnrLRtImz2WczzKAyghiljCu2aFtX2/W2p23f2VnbCexO2P1mb2SfYn/UfnKpzlLO0oalYw7qDkyHOocRR7pjnONBxxEnNSemU73TE2cNZ7Zzo/OEi55Lsssxlxeupq581zbXOTc7t7Vu590Rdy/3Yvd+DxmP5R7VHo891T0TPZs9Z7ysvNZ4nfdGe/t57/Qe9lH2Yfk0+cz42viu9e3xI/mF+lX7PfHX9+f7dwXAAb4BuwIeLtNaxlvWEQgCfQJ3BT4K0glaHfRjMCY4KLgm+GmIWUh+SG8oJTQ29GjomzDXsLKwB8t1lwuXd4dLhseEN4XPRbhHlEeMRJpEro28HqUYxY3qjMZGh0c3Rs+u8Fixe8V4jFVMUcydlTorc1ZeXaW4KnXVmVjJWGbsyTh0XETc0bgPzEBmPXM23id+X/wMy421h/Wc7cyuYE9xHDjlnIkEh4TyhMlEh8RdiVNJTkmVSdNcN24192Wyd3Jt8lxKYMrhlIXUiNTWNFxaXNopngwvhdeTrpKekz6YYZBRlDGy2m717tUzfD9+YyaUuTKzU0AV/Uz1CXWFm4WjWY5ZNVlvs8OzT+ZI5/By+nL1c7flTuR55n27BrWGtaY7Xy1/Y/7oWpe1deugdfHrutdrrC9cP77Ba8ORjYSNKRt/KjAtKC94vSliU1ehcuGGwrHNXpubiySK+EXDW+y31G5FbeVu7d9msW3vtk/F7OJrJaYllSUfSlml174x+6bqm4XtCdv7y6zLDuzA7ODtuLPTaeeRcunyvPKxXQG72ivoFcUVr3fH7r5aaVlZu4ewR7hnpMq/qnOv5t4dez9UJ1XfrnGtad2ntG/bvrn97P1DB5wPtNQq15bUvj/IPXi3zquuvV67vvIQ5lDWoacN4Q293zK+bWpUbCxp/HiYd3jkSMiRniabpqajSkfLmuFmYfPUsZhjN75z/66zxailrpXWWnIcHBcef/Z93Pd3Tvid6D7JONnyg9YP+9oobcXtUHtu+0xHUsdIZ1Tn4CnfU91d9l1tPxr/ePi02umaM7Jnys4SzhaeXTiXd272fMb56QuJF8a6Y7sfXIy8eKsnuKf/kt+lK5c9L1/sdek9d8XhyumrdldPXWNc67hufb29z6qv7Sern9r6rfvbB2wGOm/Y3ugaXDp4dshp6MJN95uXb/ncun572e3BO8vv3B2OGR65y747eS/13sv7WffnH2x4iH5Y/EjqUeVjpcf1P+v93DpiPXJm1H2070nokwdjrLHnv2T+8mG88Cn5aeWE6kTTpPnk6SnPqRvPVjwbf57xfH666FfpX/e90H3xw2/Ov/XNRM6Mv+S/XPi99JXCq8OvLV93zwbNPn6T9mZ+rvitwtsj7xjvet9HvJ+Yz/6A/VD1Ue9j1ye/Tw8X0hYW/gUDmPP8uaxzGQAAAJJJREFUeJxj/P//PwNF4D+JBmy+7/3/9v/q/zC9TKRoxGrxfxJcADIEpB4ZMxAyAN1mZBfgNKB1vtcsECbkIpBeFnSNILo6cVsaET5CmEIMQPYKLCbgLmjF41yQa0AafBW3MmINj/9kJiRYIDKRGngwjYyMjLhd0EpCLDDg8wLMEHxpgeRYIDsvgGIBmzgjpdkZANmHlbDeFSZoAAAAAElFTkSuQmCC",
            name: "Triplicate bolt",
            description: "A formation of three small, fast bolts",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Triplicate_Bolt"
        },
        {
            id: "FREEZING_GAZE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0klEQVR4nGNgoCUw6fkfT0gNEz7N/JwMC9ANAfGRxRhxaVbhZVhw5zNDwpkSxoVorlkApcFyjIQ0wzSCXAOiP35nSADRMIMZ0TVbmzIsOHoaoggEQIaBaJCByBoxvGDS8z8+LphhwaK1EIUgg17ewK0RxQATJM0g+u4jBgZkV2ADKF6YdP//f3QFIENAAOQKEHj9ByH38TtaIJpQ6gJcYQCiYQbhDQN8sQDiX7mCGX0wwIjMgRlCdjrAZQhMDCqNkhKx6Ycb4jz1/39CeQEvIEYhAN2HncjPiMt1AAAAAElFTkSuQmCC",
            name: "Freezing gaze",
            description: "A heart-freezingly sinister aura",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Freezing_Gaze"
        },
        {
            id: "GLOWING_BOLT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBUlEQVR4nGNkwAMyMjKmGhoafpWTkzNHl3v06NHJ9PT0MhZ0iY6Ojg0VFRUBILaCgoJ0WlqaIgMDgx4W8wVABAu6KEwzEsCmGSwuJyf3gQnZuTD2q1evlsLYr1+/xuNJBga4ATNmzMiGscXExKJB9IMHD54yMDAsY6AEZGRkTH316tV/bGD79u0H4S7ABfz9/bPweYUJn+bt27f/NzY2Zjh79ixDXV3dtNevXy9DMugSKCpZiNHs6enJCBWeqqCgsBGm5sGDB9xYNYIwyN8gmpAXGZE1wthYbGZAjmJYLKHYCgMgm4mxHZRi4Zz/aABkACGnwwDWWAA5nxBATrkoriAm4KgKALDWsvmduZbOAAAAAElFTkSuQmCC",
            name: "Pinpoint of light",
            description: "An extremely concentrated point of light that explodes after a moment",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Pinpoint_of_Light"
        },
        {
            id: "SPORE_POD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7ElEQVR4nGNgGGjAiEui/Na7/yA6SICFYd2HPwydakJY1TLi0nx7w0kUMdUAc6yGMOHSXJ5gjSIOEjv56tN/vC4oR7L5x61zYDqxPIJhfucKBg41I6wuYYIxQKajawYBkGaYGMhVYNdBwwfugnI0m2G2YgPoLmFCloTZDNMMMggZoPNRwuDkq0//OxccBRvyM9oXq+3sSzeDXQCy3YTxPUOoqjJqrIC84rz/EiT+u7b/N3Zu+A+iYfIgOWT/4wXO+y+BDYAZiAsw4dL8oWUdA6+APEGLMAxA1sycY8yw11EPZ3LHCUD+JuR0qgEARDiJlLRRlNcAAAAASUVORK5CYII=",
            name: "Prickly Spore Pod",
            description: "Summons a spore pod that attaches to a surface and then grows and explodes into spikes",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Prickly_Spore_Pod"
        },
        {
            id: "GLUE_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA70lEQVR4nKVSuw2DMBC1TcUOTIAQ1NkkkWgoMgdiDgoaJJAyCFWKfOQJ2IEKXXSEs+zkTBLlScg+jvd472wJAOIfKNo0bQnn2wmmeTQP1dx7/B550nbQtCUukGaJuF7uSz/NElj3Yn84ijCIJOsAUeQVLpIIKBbHOyQuJK0H8QolPEAXSCSS5cqB5IY4zePy976rTQQSKPLKH4HIfVcbuxiBkGaJQ2YF+q62S+BybwoQ0C5OnYbI5WdnMD0jAJKZGDIMos8CwmN9FXJEFOvLJWxCbTW5k/hWQNokFMJa6+HtGH0zINhNQ7ZnwN7EX/AAE9ifThxERMcAAAAASUVORK5CYII=",
            name: "Glue Ball",
            description: "A projectile that explodes into a sticky mess",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Glue_Ball"
        },
        {
            id: "BOMB_HOLY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsElEQVR4nGNgwAP+n4j8///5zP/41DAxUAgYcdmMIiDvAFEsmY6hngWbAZeXHwDTupEQjQwPIXySwaV8yf8YriHGC5fyJf/r+imgumrTAwa9ic8Je+ESFs0MWgkMuloMDJcYGv6jG8KETTPINmTNMKBb0QBWg9MAXahmDBegqcFpAFZwbQF2Nr5oxABYNOJ1wWXkMCAAmHBpRDcExkcXx4hX9FCGAVgAo0cjxQmJYgAAkuFPknnZywQAAAAASUVORK5CYII=",
            name: "Holy Bomb",
            description: "Summons a bomb that... well...",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Holy_Bomb"
        },
        {
            id: "BOMB_HOLY_GIGA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVR4nGNgwAE+P6kt+n8i8v//5zP/g9i41DH9/7LsEDbNhMRgfEZkAV6Z5j4QzfPkTi+KbnkHMPXl75NiuBoBzYAvH65vYIGpAUnA2JeXHwDTupEQjQwPIXwGGRW42s9PahF6PmNxHghfypf8DwoHGB93YH1ZdgimAK5xryUKBonhNYQBj2ZQTIAwQUMuQTWjGALVjMsQJmRDdP0UGC5vegCmcQF0OSYGQuDaAuxsKGAhaAAOjXhdcHnTA6LMxTDgMpJGdENgfGRxUGDCkzJM4H73HNRkDAWwAFYsTQEnZxRJ5GghNSGhuACbgcgAZjMo5TLyRNmBBAGuQ/BGzlHC8gAAAABJRU5ErkJggg==",
            name: "Giga Holy Bomb",
            description: "Bigger and therefore holier",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Giga_Holy_Bomb"
        },
        {
            id: "PROPANE_TANK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6klEQVR4nGP8//8/AyWABZnDyMgIZ7eXr4ObXNkZBJdAt5AJm6kJIVX/P75/D2aDaBAflwuYGCgELNgE9eWPMTj4fAWzD2y5yCDOi9sAJnQBkHMdfPThmkEAxMflDRZ0zQvWtDEyMFT9lxBSZuAXtAeHwcSpdxlA4lBDGKkaBkzInM8/XuFVjE2eETleQekg2CflPy+HGAPEC4JgL7x4dxesee2WOSjqsXph7ZY5KH4kJM6Ez8mwxIQPMGETBKWD8MhLDOK8i8E0iI8LYIQBCMDiHBQOIP+DACR6icwLsNCGacYXOxihSioAAIKAbd/Y8owYAAAAAElFTkSuQmCC",
            name: "Propane tank",
            description: "Summons a propane tank. Be careful what you wish for.",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Propane_Tank"
        },
        {
            id: "BOMB_CART",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVR4nGP8//8/AyWAiSLdg8IAFhBRUjsbHhAf3r9mEBAUxakBWb6nOZUR7IIb18+DJUAAXTNMHAZA8iAxkB64C7i4eBlevHjC8OjBbQY2Dk6GXz++o2gCiYMATA5Eg/TADfj27TPjrx/f/wsIiTF8ePcKrAAbAGmGqZGQkGFEdsF/DU1DDA3fvn0G0zDbQLScvAoYP3p4BxRujIyhsWX/oQJgRchsmCEwA7CpY4IxQDTYv0hsZIBNM4hmggcUmkaQP0EY5G8Qjc0gcBg8gmoE0cjsXVvmgwMJBsLiyrF6lRGUmWCSMJesWtSJohndEGR1YAMoARTnBQBQ1psERAiJrwAAAABJRU5ErkJggg==",
            name: "Bomb cart",
            description: "Summons a self-propeled mine cart loaded with explosives",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Bomb_Cart"
        },
        {
            id: "CURSED_ORB",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABG0lEQVR4nMVTMY7CQAz0RvQ0QIor0kBFS0Pyg6TOD07wAx7BDxD8gBp+cEdDmwoaCgokissHzmjM2kQRBVKQsLRZx96xnZmNY2ZqYkEj9NsLlElG9fdpGHKZZLLg1ws4cDANQ5r3RxJY77acj1Pn8wJY77byko9T2ds/G81TC495f8T+EBIGRizuRAY8Hwr6vZ4oTzLWIoFOUgHS7LiXzgB/DYboKAs+YjD7HGaWtXRERTfiohvRX5zy0hFjh2Gv+pUcBUrW978UtCleNr53Z50C/qTXkw6YSDtrd43hDDAt5WAVWHPnFWEQFsPz8hqJgyEtLhdnMq4eYDAu7Hspn8oIHEi1AmXtAlUNiugdmR33kNzAVqCJff5nugFubLKxzmL7DgAAAABJRU5ErkJggg==",
            name: "Cursed sphere",
            description: "A projectile that brings bad luck to anyone it hits",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Cursed_Sphere"
        },
        {
            id: "EXPANDING_ORB",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA60lEQVR4nGP8//8/AyWAiSLdg9uAo0nS/0GYgYGL4fdSHhD9H0T/XsrDABKDYAYGRuRA3GwmD+YI6fwBy5k5f/zPGv0Pw/DfS8H2MrJGf0G4AKqZEaT53RUWsBg2zejiTDDN+2/9YQBhKADbjqLrZS+6Of/Rw4ARJohhO0izeDGKITB5JjQTGWFhAPUnBMA0g2jUcGAAk/tv/WF0VIP4GwTeXWH5v2OiMNgwFENQASPcAEc1Fpgh/0EBCHKB76mHqK5AAsjijLBo3GwmD6ZhsSCk8wcsYeb8ERw2ID/Dog8RDl9Q0wE5YODzAgD4nWcfoQ/TIQAAAABJRU5ErkJggg==",
            name: "Expanding Sphere",
            description: "A slow projectile that increases its damage over time",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Expanding_Sphere"
        },
        {
            id: "CRUMBLING_EARTH",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArUlEQVR4nGOc7m38f8eZBwzkgI0v3zIyZW49y+hhooAhiU0MHfiLC/9nAjFghsA0gWiQq4gxhAXGABkCokFegrE9GBT+EzKACaYJ3SBivcOErgndMELeYULmwGIEmyG4ApsJmYOsGF0crxfwKQa5BtlFBL3AgMVLMG9h8wYTPtuJAYzYBJHTAsxVID62ZM+ETTNyTIA0kuwyfIEGkgPlARgmy0BkQ0hyGboBID4AL6t5hofAGIkAAAAASUVORK5CYII=",
            name: "Earthquake",
            description: "Calls the anger of the earth",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Earthquake"
        },
        {
            id: "SUMMON_ROCK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVR4nGNgoDf4fyHoPwjgVFBQ0fMfhHFphrOhhjCia0bXNKGjhBFZEyMjIyPMMEaDdRAOCHgGJPzn5uFmkJFRBPOfPLkPpr9++cqgrqEDNwhs88VgBpBmEJ8FZgBIMwh8//6RgZOTH64RBG7euAJ3HcwFMMAEY4A0gMDbt+/AhoA0gzSCXAIzHJs3mbAFFrIhIC+BMMgwGEjPr/2P1YCvUFcgGwIDIMNAfBAGycEAC7IBcvKyYP/DAhGkUFiYASwGC1R0i5jQnQ4LSOQwQde8fcMCeEAyIhsAi0qYQuTAgxmIrBnDAAYsBuHTjOEFGAAphGnCp3lwAACFvKH6gW61RwAAAABJRU5ErkJggg==",
            name: "Rock",
            description: "Create a mighty rock out of thin air",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Rock"
        },
        {
            id: "SUMMON_EGG",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzklEQVR4nGNgoDf4fyHoPwgQpXjN/ef/QRhZM5wNNYQJn2YpLmYGEIYbor8WoeBiMANOA9ZANT/79hfMhxnCyMjICHb/haD/jAbrGEFyLNgMAGlApkEGwdggQ5DVMqFrnnD6HEYAwTRjk2NCFzCTkwHTt99/h4vB2DA5vAY8g/pbVZATrhHERpbDa8CTN8+xGgISA8kRNAAGkA3BZjNOA66fOgW3CaQRphkkBpIjaMDM7AxGZEOQNYPk0NVjCMBA+tQZ/zXNzOCuwqZ5cAAAhU6BrH5+VhYAAAAASUVORK5CYII=",
            name: "Summon egg",
            description: "Summons an egg that houses a friendly creature",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Egg"
        },
        {
            id: "SUMMON_HOLLOW_EGG",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABD0lEQVR4nGNgoDb4PFn8Pz75/xeC/oMAhsT3+9Vgwe+H/SH0/er/d29fBGNkzXA2VkMO+/8HaQTRII0/f3wFY5ghyJpghjHCnM1iYMHAIKODMO3JFYY/F04wsKXeg3Af32FQVtVnBBtyMZiB0WAdI14X/ITavmL5Irhr8Abed6QwACkG8ZENgdHo+phgDE7FVrCTQM5ubChnePYnDK7o0sVTKDRecOLoLrBtVRU5YKeDaBgfJEfQgBVIfoYZAosJbF5gwWbI61cvwbSevhmDjKwKOAZgYgQNuAT2pxmYbWqiz7B+/VoGBTkJhgePXmANA0ZspoKcDrIdpBEEYJrbOqZgqMdqALIhMFdh0zw4AAASHPG3w4OVQAAAAABJRU5ErkJggg==",
            name: "Summon hollow egg",
            description: "Summons an otherwise empty egg that casts a spell upon cracking open",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Hollow_Egg"
        },
        {
            id: "TNTBOX",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVR4nGNgoDf4fyHoPwiQrZkBxoYawgITOF5QABY49egRg5mcHAM2NoP+WobjBYX/LSdMYGS4GAwWZ4IZ8OjZMzD98P17nOxV4eEMFv39YJcwGqxjBIkzwgwIc7f+LyUhRpRXJixcD9fHgizx4dMngpoF+PhQ+EwwhjW3OIMnqzDDr0cfGAwZ+XGyLb+zYjdAgoWFQU5KikGCj48gG6sBL/78YSCFDQOMgycQg/ml4YEFonGxcQYiyH+wwCLEHlwAAJbFd/3FAj17AAAAAElFTkSuQmCC",
            name: "Summon Explosive Box",
            description: "Summons a box of explosive matter",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Explosive_Box"
        },
        {
            id: "TNTBOX_BIG",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5UlEQVR4nGNgoBAwgojjBQX/QfSpR48YzOTkGPCxLRIeMTDor2U4UVjIYDlhAiMTSPDRs2dgyYfv3+NlgzQXF75nWBUezmDR349wQZi79X8pCTGCzu1fsI6hMCEIwi5kZGA0WMfIApP88OkTQQMSg1wY5q/bw8BwMZihsB/sawawF6y5xRk8WYUZfj36wGDIyI+XHW1iwjCpiYHB8jsrwgAJFhYGOSkpBgk+PpLYcAMoAUyDw4AXf/7ABUhlM5KSDtDBhIXrSUsHyECAjw/hhWB+aXh8g2hi2CjpAOQnWByTwqYKAACdwoE3KqF0wwAAAABJRU5ErkJggg==",
            name: "Summon Large Explosive Box",
            description: "Summons a large box of explosive matter",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Large_Explosive_Box"
        },
        {
            id: "SWARM_FLY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4klEQVR4nGNgoDbwjMj4j028buH9/27527HKMeDSgE0M3QJGdMVN8YooYjC+kYPff3EJKYbtK2aA+TDAAmME2ctBGFCNJ87dQLH93IFNKBphgAlmy7qDj+AGwQ3D4RUMA5ANgRlkYaQBpk9v78QasLgCmwHkV5AkjN537BycxqaeEZupL188A/NBgYYM0AMQxQvhBV1wG2AaYRqwacSIBRDgk1BiuH3hCAMygLkGRhMERg5+YP/D2MhyFx78/Y8eM0zoBuCKbxAAxRDIEKwxg24bPheCNOOMRpwSSAYQaxlRAACW5YKU2oScPwAAAABJRU5ErkJggg==",
            name: "Summon fly swarm",
            description: "Summons five flies to aid you in battle",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Fly_Swarm"
        },
        {
            id: "SWARM_FIREBUG",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9klEQVR4nGNgoBc4GD/9f5tJ8n+SNDBgEWt0t8Q05GD89P8wDBMD2YbMv/bOCqtmFhhDMcwCYhgDRNPRq2fAGAa0hI4xYnMpE4iwX5jJeH/VCbhBMMNweQXDAGRDYAZZa5uA6QMvFjGgOx2Zz8iABvSsPf4H83xkuP/uI4OiED9D6HJGhtWR/8E0Nm8wYjMZpBkEQAYgg/qdxxlxeqERyVkwjTAN2DRiGBC6HKIGZDvMBciuQRbDCa69s/qfYKoFxiA+jIaBR1vP/0ePGSZkBaBAWnD6Gk7ngmIIZAi2mAEDdBuxAZAakGYMA7CaiAXAvEmMWqIAAGJyiZn8plXKAAAAAElFTkSuQmCC",
            name: "Summon Firebug swarm",
            description: "Summons four fire bugs to aid you in battle",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Firebug_Swarm"
        },
        {
            id: "SWARM_WASP",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA60lEQVR4nGNgoBeoW3j/v1v+9v8kaWDAIvZwVwmKOCO64qZ4RRQxGH9Dj9f/xXvfMqzdfhLMhwEWGCPIXg7CgGo8ce4Giu0BJdtQNIJcIu/WwwgXBNkIN4SBgaGsfxeYtjDSgLsCG2BCdvq6g48YQBimEQQ2d9oy/Hx/C+x3Qy2Z/yA2Az6gZ+0BVwyj0dkYgQgDsICKdRYG8w31tBjQAcjfDNhAsKc52BYQBrGRbQMZjEwjA0ZkA0A0zHZsIY8XPMRjMwxcePD3P65ExoAMcDkZpBFkCMy7WMOBkEthmjHUYjURh+vQo5IiAADN96NAd0i+KAAAAABJRU5ErkJggg==",
            name: "Summon Wasp swarm",
            description: "Summon six wasps to aid you in battle",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Wasp_Swarm"
        },
        {
            id: "FRIEND_FLY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLUlEQVR4nGNgoCf4snDvf2QaBJhgjFUOqbkgjKwBmb/KIfX/t02nwJphNEicBabwSmLVJDAbyQCQGIgfdmD25LADsxlBhjhsgsjxxDszorgABILs5cCaYIadOHcDYgjUJSBDDry9xyC2thKsGe4CdENAYB1D1SSGczfAhuggyYMMQVbPAhWcvAqqCWYAiAZpRvYKTC2yAYzIHOSwABmw7uAjsCHMLzfC1SS++JuHbggDuiF61h7/PSMy/sPofcfOgWkYGzl2GNE1z5dgBrvg6eMHYDFpWQVUG9BcwYRNM7JGkGJ0GtkLTDDNaw1U4ZpBtsNcgOwaZDGc0fgUSVENq2xey+/Hk0A0OKYcUjFiAewCkGDwhdt5fBJKDJqmTmCNGFZhiUIMgJwf0GmaAQAHrrn/BjcrxAAAAABJRU5ErkJggg==",
            name: "Summon Friendly fly",
            description: "Summons a friendly fly that attacks your enemies!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Friendly_Fly"
        },
        {
            id: "ACIDSHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyElEQVR4nGNgoBAwYhOMrff5D6LVDf/BxWoCtmFVy4hNM0yjh7kEXHzHyRdYDWHCpRkdgAxr2eD1H68BMHDzPBPcVkKACZtmkCtgzocZAqJBcuiuYELmfHz9Bc6eOOMViktgbORwwTCAX5QHbAhMMbqXQC4DGUzQBR+hNEgDsmEgNrIrQYARPQz8shz+I7sI3YJN0w4w4g1EfiRNyC4CYXQDsRrwEckWEA0zBMTGlkaY0AVgms3cuDDE0AMXK4DlA1x8+gNCLgAAsjJv8KXT3p0AAAAASUVORK5CYII=",
            name: "Acid ball",
            description: "A terrifying acidic projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Acid_Ball"
        },
        {
            id: "THUNDERBALL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAqUlEQVR4nGNgIA94TH2Lh4sd9J7+iofrATOCBYd2dLOKTbkhbCY0YyAGIzupF0k1ig3FptwQ1WiOQQOMaHyI6iITrr4z3yAixUjGQ50EdwkEFJlwwcndp37gtMFj6ltXMw64UgYGBjRLPKa+3ZEtjN1JcFdBlPaCBSFsFA1wS5BBMVY/QIxxNeOAS0MYmH5AdwmEDY+H3tNf8YcyumaC0YJdBb60SDCdAgCX71wjtlKxMQAAAABJRU5ErkJggg==",
            name: "Thunder charge",
            description: "A projectile with immense stored electricity",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Thunder_Charge"
        },
        {
            id: "FIREBOMB",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAARUlEQVR4nGNgGAVQcFtX6FOhOgOR4PN64/9g8Hm9MWHVnwrV/yOB27pCaAqY0Pgv97xG5oq7iFLbSRDwqVAd0zEMIxcAAM4vKiv66I8jAAAAAElFTkSuQmCC",
            name: "Firebomb",
            description: "Slow, fiery bolt",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Firebomb"
        },
        {
            id: "APOTHEOSIS_TOILET_PAPER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAs0lEQVR4nGNgGJTg1oNX/2EAxAZhkjWiA4KGbN55EUMTMYYwwjSrq0vCBVXlRXFaxMjIyIhhwC0sJuMyBN0AJmROQ14UQ0akF5h9++FrDM3YxJhAxM2bz+ECEqICWDWCMEgdeqwwYgsDbACkGaYG5L0tuy4x+LrrI/yDyxCY60ByyOECcpGaghgjC0wAZBrIEJhimGYfNz2cLiI5Mf2HAphFOAFIATaDQGIENaMbRJZGUgAAIn3rXFwIcm4AAAAASUVORK5CYII=",
            name: "Conjure Roll of Divine Purification",
            description: "Summons a roll of toilet paper",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Conjure_Roll_of_Divine_Purification"
        },
        {
            id: "SOILBALL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAABQklEQVR4nK2SsWqDQBzG/21K4TCEE+TgQCiIwS4ZbOiUKUv7CI6u2fMceYiOfYR26QME7OBSQQRBODgKikQOAkKxf7naVGiH/ocP7u73fd+JB/AvEwb+ZrMePTo7WW+39++FtGym9eHxddyAKDEpAKiyQpqY1DAuh7bOEAa+ZbM4yhc3V0PIshkADAt3u6cLABBSpWnmutOfEDGpZbOmOQqpiHkEgM7Q1K0xmwipmrrFXoRQ4yjnjHBGVFn1BmM20bY0PXwuu+w4ynGfeDRLBMadYyTSqACQpgfM0zsAsLi1v11JK3YKqTgjxKOqrOJ94brTLBF9g+ZwMNLxuJAqSwQxqetOhVSOx3sDZg+v1NRtlgjH403dxvuCmFR/9NePWy3nug0Vg/H0+eVt/GmslvMhzRk5eRrjc7e+DgP/d+4v8wHJW8bio3BgvwAAAABJRU5ErkJggg==",
            name: "Chunk of soil",
            description: "Don't soil yourself",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Chunk_of_Soil"
        },
        {
            id: "DEATH_CROSS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyklEQVR4nGNgGDTAsusLGCODhM2f6xM2f/bCp44JxjhexgPGWIApMgddDRMhlwnwvm5AF8NhESZY+vD7fxBgIAckbP5cD9I89963vyA2LnWM6JpgztaVk3iTpMgpAuLPu//9X5IiJ1Pili8g75xe4Mu7DcOABEhom4I0mypKMkTJcaDYBDLk8qMXTB8+i3qD+MiG4PUCKBzweQEvAGkuOHAPbyAy4ZM8ff85iNqBLo41IVmipUIQ+PBZtOHDZ9HJZLsAPcRxWTSwAADI9GeCmh5EPAAAAABJRU5ErkJggg==",
            name: "Death cross",
            description: "A deadly energy cross that explodes after a short time",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Death_Cross"
        },
        {
            id: "DEATH_CROSS_BIG",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAUlEQVR4nKWTPQrCQBCFn4uIhXUq7SwsbC28QNhcImiREwgeQswJLIyeQUgI1lrZWImtqawtJM3KCCO7SxLFfEUGZufN326AmjToM148DOdx3nnbIJI+2dUk2XIcnzFNO6Me0PVaIwBDAFs+42IcJ3ShnZ0YOO6zrICRoIiB4/Z7eErbrycRtkOHxDe0E/xDEElfKaUOaql4maW3EETS73qtKc1LVceY4YgQZD9tI3xb6uhyT9tZnK/pdpockMX5GV4q4LgJEEpbzKPsN7vrzyMc1JKmqByhEt5BVYwoeolFrduwRtgOnW9iI0ERtDDaeJmYMP4F+50DOGVxfqrqsjYvT+Z1/umlafYAAAAASUVORK5CYII=",
            name: "Giga death cross",
            description: "A giant, deadly energy cross that explodes after a short time",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Giga_Death_Cross"
        },
        {
            id: "APOTHEOSIS_DEATH_CROSS_OMEGA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABjklEQVR4nJVSy0rDQBSdTJJJ+tDWCkpT6wMrLkRXQncutCAu7MKVf+EniJ/hH7gScVNwIbgU3IoWI25siwVbGknSZJpU7tiRVjKVHgh3cufMzZlzIiEBrnYez/P7qZKalAm8b51k81E8jMbArvuo1w1VWcNtEUcRbWyf5nbbz66h6DKeWiZfIh4WbcQNUoA6vUrYFSYaUClXL6FmNmJ6bJ6M9P4dUPkhFmENhyX8q6YYNUQCt/mduWwmfUVj1Xrz2Boqh1P3zYez2i2sFYgK3LYbNIsQonGDqPwAVD6Iw21Sz27QXGYzVkoYBCmQc3JRUxt3VjhXTKqB1x9RwFV4rR7yOwF6v+lo1A7s6YKeUHRMWYxaSmkWjmeHo2JXGVZhIYSCbmguHaYZofPiuYEXzkQmUClXa60np9/rBn2o8EAvykT8t3FwvX6EELrnCsAfMA16g73RFJAA8FWn7lM5jtXACc2FvfRaFE/4J8JXzYtP33r1XBFn7ADIGRPpw675Fhg28QAAy1nHNNLtAb4BiBy2tFVSDJwAAAAASUVORK5CYII=",
            name: "Omega Death Cross",
            description: "A violent, giant, deadly energy cross that explodes after a short time",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Omega_Death_Cross"
        },
        {
            id: "INFESTATION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAATElEQVR4nGNgoAW4MuPmWkJq/v///x+/ABmGYgWEDKY/uELIK1ewKCCo6T8Of9LM//8JGfwfiwKyo5FocIWcwKME/CcngInWRNfkCwBMGD9pDffMLwAAAABJRU5ErkJggg==",
            name: "Infestation",
            description: "A bunch of magical sparks that fly in every direction",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Infestation"
        },
        {
            id: "APOTHEOSIS_LIQUIDSPHERE_ACID",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBklEQVR4nGNgoBAwggjv3Ur/YQI6kvZgulNnPlgOJr/V9R6cX34l8T9MngVEfLz1E27iFYaDcEUwg5A1g9U8h6gBASYQYW3vBhcAGQYzEKQQZhAu1zCCCP0yUbgiXnk2MM2vxg42CESDvIXsJWTAhC7w+eEvMEZ2ETaXYBgg48oLpj3ifOAaYQZhMwQW8IzIXgAZ8mT3Z7hXQAaAxGBhgs07jCDCZqr0f2RnwzQjA+SwQTaECSYIU4BNMz7ABCJAzgZpwqcZJg6yHTk8mNCdiMyGBSxMDOTSowd3YbqAF81mmGvQAxTGh8UK3ACYZphGZDFkAHMRcsrF8AKyIeiuA7kAmzcoAgD0aaT4oJAqqwAAAABJRU5ErkJggg==",
            name: "Sphere of Acid",
            description: "Cast a powerful sphere of acid, melting everything in its path",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Sphere_of_Acid"
        },
        {
            id: "APOTHEOSIS_LIQUIDSPHERE_WATER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDUlEQVR4nKWSMQrCQBREN4uFF7BUxEIELextBImVCN4jChbqHbQQ1Bt4AMFSEWzsLRTEQkQvYReZhVm+myWNA9lN/ua/zHyi1J8KsISLU8xCWC2YfdzKmzOp6eEdu/UMltv9oXwvSxA+gnsXorH0e03bCBiB++vLgvaDRkBIIkKuM7ERssWa2SvlkgFhRyxfJOuAGg0j9XlezEUBIp1QnJtmod7uqtl8ZSBsJMgHQaQfwHm3tRApREhzEmDJR+tY2sYc5DNrBMqZaBb5gq85TZr20SSbEUeKdXxdRtGuRd5zJrIGp8vNMekg69imG0DkOZ7x03GgFsBmNsqaFBzBgfxzExEkxHUHB74Yf+kLKzevQBMepjIAAAAASUVORK5CYII=",
            name: "Sphere of Water",
            description: "Cast an enduring sphere of water, soaking everything in its path",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Sphere_of_Water"
        },
        {
            id: "APOTHEOSIS_LIQUIDSPHERE_TELEPORTATIUM",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABG0lEQVR4nGNgoAZYefPDfxg+/Po/GCPLoasF0ZVHn4JpFhBx4c1XDENhhtiKMjKC6Pht9/8v9FJklBLiB8u3W0uDxZlAhJeaFFwjyDCYgc/efYQbJMXPxoBsIAwwwRQ++/gLxSCQGMggmCEwG9G9wgQitt19j9D48RcYI7sI2SUwAPMKE0zAS1mQYc7pBwwppgoIjVCDsBkC4qMYsO3ue7ghyMBAhBurIeHqAohAlIIGENx5/Gwo3sDnEiaYLSBNIFfANMO8ghw+2AATsi3INsP8iO4KUOAhu4IJZguyN2CuAYUJshgsPDBcIIXFzyDNMOfD5GF8WFjADYA7G+oNmCJ0ADb01jOUBAcPA5hG9LBAZoNcAPIGyBCqAQC3Zd9ZVwEFDwAAAABJRU5ErkJggg==",
            name: "Sphere of Teleportatium",
            description: "Cast a malicious sphere of teleportatium, relocating everything in its path",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Sphere_of_Teleportatium"
        },
        {
            id: "APOTHEOSIS_FIRE_WALL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB3ElEQVR4nIWSwWvUUBDGv3nJJnE3abIrCa6g1qugvQuCeCiI9Ga96bWg4B/hSbz7D6gg7III7cUKvRSk4kUrelZ7UDay1Ka7m6zJG3mRhEQbnVPy3sxvvvfNEBri1R3/zIXT5z+p790v7xcvPgw/H5UnmgBERE13/wRMn1yl8eNrYvGEt6L+teVTONvvrhw8vU7/BXx7dJPIsEXLdgxomqGKs809QAidPFvM1m9RI4AHqyQsR+B40MKC1xGG2S4UkN4y0fYs9BxtNLhNDQpWAR8a2o5FTs/rpL17eXcANvv3dWfBgfBb8IOaalGpJwSBBsu1tI7bVZ1V6P1LuQqYrgvPNRH4gnlADSb6BMsyso0Xbwr5ZeimC1iWOlZDapxCUag6VyN7/uy1whQ1zL8hopaFkBHHDOPclfTrdgkpn4G41r0OGIIxAiNO0mwymVeTFCyP/R8pRiEfDcAQCEcZpmHCs/FhTf7mHtKD7hJklOQ5wyETgWsAujFkGUcS02hOOx/fFvJV93wXdnbfYRzG0o2yKlyZUoac7UsW6bzqfmnm8jb4Q5TIyU9Ja+vlM2qA/uQ7pnM7+3NfCw84ibKTay9l9e6v3T58cJnAQhajVMXKg+wYhHt3q2agKvgFHF2q1QODhgYAAAAASUVORK5CYII=",
            name: "Wall of Fire",
            description: "Summons a wall of fire to ward off foes",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Wall_of_Fire"
        },
        {
            id: "WALL_HORIZONTAL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaklEQVR4nGNgGAUDDxiFJrrIgxh80sI+MMECK0MmbIonHDv/D8b+9PTtFhDNwict/EBWgZkhWEqPwVnUg2Hv6x1gGiuwYoCrWfvs0pTHD/4ysIDEQYy1DJdQ1KIbBONDNYP1UMULo2AwAACaDjJlLEt6EQAAAABJRU5ErkJggg==",
            name: "Horizontal barrier",
            description: "A thin, horizontal barrier that harms passing creatures, including you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Horizontal_Barrier"
        },
        {
            id: "WALL_VERTICAL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAp0lEQVR4nGNkwAGEJrrI80kLPwCxPz19q/Auf89DbOqYGAgAWQVmvPJMuCT4pIV9QJqDpfTAbJINAAGQZmdRDwZ8gAmvLAMDw97XO/DKs+CSKLAyZILbbsXAVMCwknQX7CVgO0EDnAn4n6ABxAAmmhqwl5IwmHDs/D9QGIAMAbHJdoEzgYDEmQ5AYO2zS3g143XBp6dvtzx+8BdsCIhNsgEwADIEHwAArY8znEXDAMUAAAAASUVORK5CYII=",
            name: "Vertical barrier",
            description: "A thin, vertical barrier that harms passing creatures, including you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Vertical_Barrier"
        },
        {
            id: "WALL_SQUARE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOUlEQVR4nGNgoBAwwhgKa8K93FXlE3befvjfXVWeEUZj07Tz9sMFD0JWboMboLAm3MuLhXermpkKWIGzqAeKhr2vd4DFQDQI3Dp1h2Hbn8/eIEOYQAIgm0GaYRphCmEA2UAQG6RWUJhpK4jPgiwB1biGgYHhEIg94dh5G5BAgZXhEagyOwYGhhCQ2uuv360+DzNg5+2H/3O04JYcKpCqmAxlg+kChpVgzoRnHSBLwAZoigodBokxofuTEEBXwwRzIjGaYV5CZjMxUAiY0E0mBiDHEhMuCWwAFhsg78LYLEITXeRhmqFRaQcKbRzADqYO6urJLO/y9zyse9YBMi0MKhkCimtczkZOkchhcBeUPJFjAltqhGkGqWVgYFgIIlAyEwMDQzyMj56RQIlNS0wYLHbt1Vt4ZqIYAADZMpWDyV7eOwAAAABJRU5ErkJggg==",
            name: "Square barrier",
            description: "A thin, square-shaped barrier that harms passing creatures, including you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Square_Barrier"
        },
        {
            id: "TEMPORARY_WALL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAz0lEQVR4nGNgoBAwwhiBQquXm4sqqYHYJ1/fu7X+XWgkNg3/////z8jICNfHAmOANLvIKBnB+OvfEdaMYoCLjJKRsdEfKE/JiOEmYc0oBsiJ8TEwKHyBsJ/wEKUZxQBRmXcMDBrcEPaDd0RpBgEmXBLEaMZrwP////8zEAFYcEnAbIYZhMslTIRsYIQCXC5iIsaZMIOwGcICY7x+IsQgeuMLnI3LEJwGPHr1iUH0ASQhgdi4AHqYwA3Y8+TeOXAKhLOJA3ADQBkIG5sYb1AEAEmRWs4cipSvAAAAAElFTkSuQmCC",
            name: "Summon Wall",
            description: "Summons a shortlived obstacle",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Wall"
        },
        {
            id: "TEMPORARY_PLATFORM",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAl0lEQVR4nGNgGHLgPxTA+Ey4JCiygYEEcQZiFJPlsv9QTYQ0M5FsMjmuoKkLGEFEoNDq5eaiSmouMkpGcmJ8DKIy77Aqfv1EiOHRq08Me57cO3fy9b1b69+FRrKAJGCajY3+MDAofGFg0ODGaoDojS8Mog/+MDAwKBmB+OvfUcELYBeAnAPhKhnJPeFhEH1AnBcotZw6AACIk1mhuqVYngAAAABJRU5ErkJggg==",
            name: "Summon Platform",
            description: "Summons a shortlived bit of ground",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Platform"
        },
        {
            id: "PURPLE_EXPLOSION_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAX0lEQVR4nGNgoAe4HrpvBUWa/////59oQz5NffCfqi6gumGfsLiQKNNBciDNIACisar9hM90fGqu4zEdXQPeMPiEphjZUEIuw2k60ZqpDq7j8StBV8ECleI8QLZmUgAAc6hsC4jDNJAAAAAASUVORK5CYII=",
            name: "Glittering field",
            description: "Small explosions appear randomly over a large area",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Glittering_Field"
        },
        {
            id: "DELAYED_SPELL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAc0lEQVR4nGNgoDf4////f9ppPvJl2Uaq2HzkyzJrsjWjA6I1H/myLA9Ed12t+g/CDOSArqtV/0HOBxmGbAhI7D8WAJJjwmKOMQMDw1lkARueqKOMWABOV3Qh2U5KGGzEJUdWLBwhNyqPQGODai6hiSFUBQBCDWg4nGlXuQAAAABJRU5ErkJggg==",
            name: "Delayed spellcast",
            description: "A static, magical phenomenon that casts 3 extra spells after a short while",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Delayed_Spellcast"
        },
        {
            id: "LONG_DISTANCE_CAST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAVklEQVR4nGNgoDf4svX/fxCG8VlI1Tyrfw6czePNyMhEA0eS5gWiwf//ZGiiCvhPis3/yXAmE6WGMWLTwMjIyEiSC/6j2UaKV5iw2UiyC8jRiNWAAQEABVs0Dma/VyEAAAAASUVORK5CYII=",
            name: "Long-distance cast",
            description: "Casts a spell some distance away from the caster",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Long-Distance_Cast"
        },
        {
            id: "TELEPORT_CAST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWElEQVR4nGNgoBX4svX/fxAmpI4Fl+ZZ/XPgbB5vRkZcBjAxDLQXiAL//1PJIPq55D8JTmaiukv+IwFiNDLhUwDjw2hGRswExYjPFmwa8LqAFI14DaArAAAhg0f0N3WNqQAAAABJRU5ErkJggg==",
            name: "Teleporting cast",
            description: "Casts a spell from the closest enemy",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Teleporting_Cast"
        },
        {
            id: "SUPER_TELEPORT_CAST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAW0lEQVR4nGNgoCb4////f1L1MFFqKRO67aS6ggmbJlIMYQIRjIyMjMiC6HyCBmDTuNPzDGkB+h9LGJBsCDbwZev/QWLI//+DxRAQoMhLIM19LrP/U2wI2ZrRAQCCgkHj7GgR9QAAAABJRU5ErkJggg==",
            name: "Warp cast",
            description: "Makes a spell immediately jump a long distance, stopped by walls",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Warp_Cast"
        },
        {
            id: "CASTER_CAST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZklEQVR4nGNgoCX4DwX41DAiK4YLMjIy4jIQp5r/BGzCpZaJgULAiEviy1ZUF/F4Y/cWCy7Ns/rnYIhhM4SJVP/DAEwPE6kasbqAEUe04QMwPYyUBuLApwMWbCYTk5SJAsRkJooBAA36SV6MyZsKAAAAAElFTkSuQmCC",
            name: "Inner spell",
            description: "Causes a projectile to be cast from where the caster is standing",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Inner_Spell"
        },
        {
            id: "MIST_RADIOACTIVE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArklEQVR4nGNgoBaYdSr2/+YHFf9J1ccE03zn5GeG56+ewg1joBdgJKQA5hpJMWkGX4UORqxewBUWZZMD4JpBAFsYMaFrRlf84ck/eNjA1CDrYUGWAAUkg/lTuI0q5rwMYDEGbgYGBoghIAORASOKZigQkeZmEJCBOA5ZHBmADE8zW8yIESjohmHThOECfIZg00TV1MpEimaQq66fe4wSnSQ5DWYILJBRvEbX9I8MAJHhbnCVKXyQAAAAAElFTkSuQmCC",
            name: "Toxic mist",
            description: "A cloud of toxic mist",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Toxic_Mist"
        },
        {
            id: "MIST_ALCOHOL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVR4nGNgoBbY3+r9//Kk4P+k6mMCEQuK3f+fvPeF4c3nH3DDGOgFGAkpgLlGhJeDQTdvLSNWL+AKi45ke7hmEMAWRozommGKQWDrxTcMEgIcDPJCLHBDQOHkWL2VEcMF+1u9UQISBMyVeBhefPjB8PDdH7A4CIPYGC7YD9UMAzBbQQBZHBmADAe5hBFdAhSlIFuxAZDBCb07GQnGwgIkQ7BpompqZSRWM8xVIBcZy/PA0wRJTkM2BBTIyNFJ3/SPDABv+2xG+UbwDwAAAABJRU5ErkJggg==",
            name: "mist of spirits",
            description: "A cloud of potent alcohol",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mist_of_Spirits"
        },
        {
            id: "MIST_SLIME",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwUlEQVR4nGNgoBaYErPy/7LMvf9J1ccEIpq8Z/x/9Owhw7vPb+CGMdALMBJSAHONEK8IQ9R0Z0asXsAVFmVOXXDNIIAtjBjRNcMUg8CFm2cZeDj5GIQEBeGGgMIpZ0k4XB8LsmZQQDJIIWyUk5JnAIshgXfv32O6YApMMxTAbAUBdANgAGQ4yCWM6BKgKP3y/RNWTSCD67ZmMBKMhSYkQ7BpompqZSRWM8xVIBepyKnC0wRJTkM2BBTIyNFJ3/SPDAB06GHc4xxQyAAAAABJRU5ErkJggg==",
            name: "Slime mist",
            description: "A cloud of slimy mist",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Slime_Mist"
        },
        {
            id: "MIST_BLOOD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAu0lEQVR4nGNgoBbY4u39/3JY2H9S9TGBiIk2Nv8PPn7M8PDrV7hhDPQCjIQUwFwjz83NoLtqFSNWL+AKi1I9PbhmEMAWRkzomtEV3/34ER42MDVYDdji7Y0SkCBgLyvL8OTTJ7ghIAxiIwNGZM0wIMPHx6DMzw9mI4sjA5DhPlu3MmIECihKQbZiAyCD848cYSQYCxORDMGmiaqplZFYzTBXgVzkJCUFTxMkOQ3ZEFAggwIRxXmkGEY1AAA8/muSfFQpMAAAAABJRU5ErkJggg==",
            name: "Blood mist",
            description: "A cloud of blood mist",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Blood_Mist"
        },
        {
            id: "APOTHEOSIS_MIST_ATTUNIUM",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzUlEQVR4nGNgoBZ4tH/B/zfHlvwnRc+30+sYmECM69tn/3//4SPDt59/4IYRYwCXaRADxYCRkAKYa7jYWRhErGIw1DPhC4uL6yfCNYMAtjBiRNcMUwwCT1++ZWDj4GLg5mCFGwIKJznHBLg+FmTNoIBkEOCHKxYU4GcAizFwwQ39+uM3pgsewTRDAcxWEEAWRwYgw0EuYUSXAEXprx/fsGoCGazpmcpIMBauIxmCTRNVUysTsZphqfX1x+8o0UmS02BegwUycnQSnf6pDgAvQnIDE3htywAAAABJRU5ErkJggg==",
            name: "Attunium Mist",
            description: "A cloud of attunium mist",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Attunium_Mist"
        },
        {
            id: "CIRCLE_FIRE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABgElEQVR4nGNgoAXYYi79///jmSgYJIZNLRMyp8XXAazYe00dA8PZnRBBKA0SA8mB1GC1tQWq+f+GoP9X0zXAGMQGu2ZDEFwO3RBGGAMkAbPx2vZrDPcvfGa4IKYKFjJ4dZtB0YAXzNby1GJgMHZnYJRNZ4R7YQvMf0iaQRpuM3KBNfucfMoIEkMPJxDNAvMfhs0XbjMsPLmNkcHP6z8Dw1O4GAPDNQYtmB7ZdNRABAGQQpDNIFuToyL+L9y0jTHez+s/zBtglxi7Y4kFY3ewJEhz6MuLDCDNc5etABvCwsPHsFpcn2H9MwlIWMBiCMWAszvBkqr/v4EVgzSDbAZJBd49DBYHuQIciEiABURsDWkC+wksBQ0HkN9BLvHZ9JSxKF3jP8j/YNuhzgfpgbvA5+RTeHSCAEhhmeQ9ePqAxQpywoLpYYFpas1azlA9LRLiCpAtYIXXGBQZXjAwSPEinG7sDlaLkZBgtoEMgdsENwhqKNSims0HUPRhAFIyE8UAAAaS8JYWNCeVAAAAAElFTkSuQmCC",
            name: "Circle of fire",
            description: "An expanding circle of burning air",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Fire"
        },
        {
            id: "CIRCLE_ACID",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABbUlEQVR4nKVTPUvDUBQ9KQFDq538AxFc3qK7QwWHDnFQih9LdSj4A5xEHRX6G4QO2kURsYMdBR0CujllEcwfcCpVOghPzk3eMybikrvk5b57zr335AQoGc5fyZ07XzeC7q/c4/AAF6txod7JvrRPVvTy0Z6cQwywhDX7NPFweob+8b3FuXkwAeMoSkgU8DV8QhjAkqUNtCFxDEFPX2nTmQRePIJ+mUvGXHzDxK/LeVopIes4W4KtmJ3zYAI+Xz0Bc3fm8jpZgkbQLXTm8+Z86HxcKwGYHGtYa0Su5FVlITuza7uzrUnS2g20WYMkWVEr5sAkLwmubUQguN+7FJKqOwNOMnU7KyScoEAQYiCX1fmJFBPMziLi+rPkOQVFzIZrTCI6KGCMCLV4hBYCzUm4yub+gvaQrNBMxyem8BnDjAcYRtD/PqObdZgYSf2YhtPAfwdQt6PzjrUFJ6bOslZmNNWhFcwon7dy6Z+pdHwDTjvJwCU31ccAAAAASUVORK5CYII=",
            name: "Circle of acid",
            description: "An expanding circle of dripping acid",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Acid"
        },
        {
            id: "CIRCLE_OIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABcklEQVR4nKVTwUoCURS9b1BBZhHS+CRXShsXIi3aRZgRbvqEfqWlH9BPuG7VZggtwp2LGggCiVoVPpUoGAJdvDhX70NHF4EXhvvmzjnnnrlzh2jLUJuKl+cFW2rUV2rv3Xtq3QzX8Gr55qJZs41mhc/GjEnrwGWJbvhC7TByvFSSDIL5GDuCGUw4i9iigRWRlACls4tY0fPjQmgwWREFth1GfPbknZFf34ZzYKyIfEufcYbyvqKr6yfFtcScnECpUWd7v99fTB7FlnOn11eRSTNBamgArAw5lZwqgOjcDvvq7OTY3t49qNOjQ5v3Z+wKIstD9eTAxVgxuaZnJGRkL50lOBkZYhE4WPsKBkXf0p4/pchkqNObd8azau6HnWEeuri74tiTJYGD7E6O8prYAcjIcAFhkJGBwwWOE2glN8y3VCtP3X7IV3FOlziecLBh++UCu6geVEgXAybBEXcuBvNLB4yV+NcquyFvWOWtf6at4w8cC8OUkc27AAAAAABJRU5ErkJggg==",
            name: "Circle of oil",
            description: "An expanding circle of slick oil",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Oil"
        },
        {
            id: "CIRCLE_WATER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABX0lEQVR4nGP8//8/AyWABZugUfOZ/9WBWihireuvMZyrNWFEV8uI7ALZ5MX/JxQGg9lv/3AxCLN8g9MwUNC/luHx3Fi4QUzomkEa1p97zXDo0kMwe8bmM2AaZihIDUgthgvWXvn2H6YIpPnaw9cMrx9cB8uJKmgyaMmLgtl2evJgFwXrcDHCXWDUfAZDM0iD+d+VYM0gv4PE0MMJHojVgVoYNl9jYGA4t2ALY0iCz38Ghi1wMZgrYIHMhB6qIIUgm0G2xqVE/l8DNQTmDZAFyIHKBGOABEGSIM33lBsYQJoXzVkONoSLhZdB6W4Dw8GDh8CGwAIVxYC3f7jAkieZw8GKQZohzmdguCJfDBYHuQLkfGTABEskIBeAJO3t7cAuAGkG0SCDQAbDvABSB8IgPRjR+BYakDAAC1B80cgIMwA5IcFSILJhMKeD5JBTI1FJGaYRW1JGMQA5kZCVmcgBANea7mTYwDw4AAAAAElFTkSuQmCC",
            name: "Circle of water",
            description: "An expanding circle of water",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Water"
        },
        {
            id: "MATERIAL_WATER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAk0lEQVR4nGNgGBggk/dSJu8lVikWTKVfHh6FsGPWfGZgYFgSwousgAlTNY+8NQMDg4MdF7I2LBqQVaMBGSTnITTAXQIBBw59Q2OgaMDqxQOHvkFUO9hxwRWg+AEXOIBkCVTDk0niWB0GF3wCU4CwAe5dND1fUEOCEVkOORKQDYIbj+6HJ5PE0YIVTTVOgCdp0B4AADm3RF/f5/+SAAAAAElFTkSuQmCC",
            name: "Water",
            description: "Transmute drops of water from nothing",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Water"
        },
        {
            id: "MATERIAL_OIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAmklEQVR4nGNgGBgQF2cWF2eGVYoRU+mLF58kJPgYGBgUFIQYGBiamnYgK2DCr5qBgaGuzgO7BmTVmNYyYGp48eITsqIHD96hMVA0YPXigwfvIKoVFITgClD8gAs8QLIEEUpubhoQBqY3Xrz4tGvXDXQb4OrQPPMCNSRQ4gESUGjGS0jwLVp0Cs5F8cOiRafQ3IOmGifAkzRoDwDbmz08jj62RgAAAABJRU5ErkJggg==",
            name: "Oil",
            description: "Transmute drops of oil from nothing",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Oil"
        },
        {
            id: "MATERIAL_BLOOD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9ElEQVR4nMWTQQ6CMBBFh6Kyd0NiwhUMV3DpCdjB2ejOExhWXoF4BRKTunBnIhpSMyS/DgXdsHAS0mk77/OZlsBaS3NCzaKJaIHkWBSjzZs59fbW8S7w9/ZlORTwwZdp+ryriUyq7TJOJoWUv2DO2j6qDxymRAxD+KeAOWvLUEeRg2WwK19Eycmzjno4pNaJAOSHndyr67SDRh/sKm3dBnKI8Mgwr0sXSqqhGDm7cHM4EzUDgSTP+g7zGwBKFwyjJ/I01MCB+G4HpuMefW1ikmcBCjAyJOdwOilAogCWcSI8+jDH5E1E4UVryyKb7RhEBH//G995D3s/mj5m1AAAAABJRU5ErkJggg==",
            name: "Blood",
            description: "Blood blood blood",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Blood"
        },
        {
            id: "MATERIAL_ACID",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmElEQVR4nGNgGNTAfb3JfxDGp4YFl8Yrpz/C+bO/xoANSeVewoiulgmXZh1TfjA/xE0DwyCcBrijacblOpwGXEFyNgys2XUDKxvDAHc8gQXSCNMM8hKyWiacbsVjGDJgROZIV6nCTcYVDiBvPm27zYjVBTpImrCFB7YAZiSUBtAt2Bl4BkUPE7oikAJszsemmSAgJikPPAAAYRhNAkSCrO0AAAAASUVORK5CYII=",
            name: "Acid",
            description: "Transmute drops of acid from nothing",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Acid"
        },
        {
            id: "MATERIAL_CEMENT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1klEQVR4nKWT3Q2EIBCEgfBsD3YgDVmcDQkV2IJYAHsZcuPtId7DuYnhb2f4FtCKiHkS7pHaGOPZWZblsrhtW8Ubx9G2a/M8fxu0wuM4ah8lppRkGIaukWsnkJxzPsXWWgMxjX8apJQEIn4Q6wBVa+L1oJRSWwh5O+izHJDs+94nWNdVnPsAsU8jtBBjXlM47abfBMvQY012MQgh1IKxA5M0BcQ8E30b/o6gtyvPqEtACl2zFnFM0tt3EN4JRCYB2laM6L5EJsYYBcJpmi5Cxon8bzz+G1+ZL435SztEzgAAAABJRU5ErkJggg==",
            name: "Cement",
            description: "Transmute drops of wet cement from nothing",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Cement"
        },
        {
            id: "APOTHEOSIS_MATERIAL_SLIME",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2ElEQVR4nGNgGNTgkEPbfxDGp4YRl8Y33z6C2Xe+PGdQ4ZFkEOHiZ7A7UIWhngldYJ1Z+f8Tr25gaIYZjNeAdWbl/0Ga/jL+h2tGBiBXoRvChMy5+fUZWDPzf0a4ITCNIAxyydHX17G7oF079r86txRcAsaGGQKiQZpB4siuYEI2DaYYxga5AgZgLkNWg2JA5dXF4BAG2QDTiOwKkGZYmCDHBhOyacj+hmlEDkhYGCEDRhQeNCxgbFhgwmhkl2J1AQOSApiTkQ1B10wQdGnF/QelDZI00R0AAL96hHkP2PIwAAAAAElFTkSuQmCC",
            name: "Slime",
            description: "Transmute globs of slime out of nothing!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Slime"
        },
        {
            id: "APOTHEOSIS_MATERIAL_ALCOHOL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAk0lEQVR4nGNgGNTgZr7ifxDGp4YRl8brr38yaIqyg/kCZkFgWjy6F0M9E7GaQeDl0uL/eA24iaYZl+twGnD99U8MDR9OrcPKhgFGdNtBAJ8LQF4CGaQ+8T4j1jAgBNBdwQRjwEzE5RVkOWS1TMiSyE7HZgi2AGZEV4QcFugApBnZdgwXMEC9gi0QsWkmCIhJygMPAJxaTtV4nrNnAAAAAElFTkSuQmCC",
            name: "Whiskey",
            description: "Transmute drops of whiskey out of nothing!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Whiskey"
        },
        {
            id: "TELEPORT_PROJECTILE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoUlEQVR4nL2PuxECMQxELVXgwC5BrZDTBVQEXVxOKy7BDtyBGXGnYeHM8fEMm61Gb7Vy7p9qra1mPBpKv14monWDlNIefc75pLAta5bBFspvK97h7px6l733O/QhhEMn4MaywiIyIRxjPCJsywi35QdGWFVrvaAvpZxfvDA3cPMLNp/QYxOEUKzLIvIwfPZb4m+WN5WW2vDOZw1GDw8HDOsKh084nvVQ3+sAAAAASUVORK5CYII=",
            name: "Teleport bolt",
            description: "A magical bolt that moves you wherever it ends up flying",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Teleport_Bolt"
        },
        {
            id: "TELEPORT_PROJECTILE_SHORT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAa0lEQVR4nO2QwQ2AIAxFf5mgB1YxYSmXcb2OwBA1VTDRtBjuvMsPIeW/AixcRKRY1lp3VYXeXHc9O8kZxggiep/hNDPzZplzPpwH6FdbRIo5txUe2go6MgCA0CJsj0wso+bwE2dJ0xMLfDkBoXBLUDnLAhMAAAAASUVORK5CYII=",
            name: "Small Teleport Bolt",
            description: "A shortlived magical bolt that moves you wherever it ends up flying",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Small_Teleport_Bolt"
        },
        {
            id: "TELEPORT_PROJECTILE_STATIC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjUlEQVR4nK2Siw3AIAhEhV0YqJN2IIehIfEswV+NvcRgCfcqYkp/K+d8xZyqqo9ePIPBQERUUhRBNPuziNzF0MDBZJhR7M2AWnFc9XRp0H8EjsTOjO0dvhv5O2AUi0jsH8U1mtGiXSry7It7egfQz9OyycH8MVr+YnbvoJoB5RUgmrdPkBawLUBPx4BjPby8U6sPjKmbAAAAAElFTkSuQmCC",
            name: "Return",
            description: "After a period of time, you'll be returned to where you cast this spell",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Return"
        },
        {
            id: "SWAPPER_PROJECTILE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAr0lEQVR4nKVTOw7DIAz1Q9l6oR6osw/D3Nyn6lVgTVdXTkJlCJ9KeIix33vGOAARoRlzU2oiWsrE87VpSyCipv+8VzBzswP86ZsFZNC1dAs87rdshxG+lATv/e7TGVv4pQPgKMzMYuMhLuYe6FoOy3I93OknhLADZkAZKwlrOE4vAGBFJi7vwo+isdNVjLE6eS1iyFWK64iy4bXwy2+0lk6UNHZ4KdctUO5e5cw+5y/i92kqAvAVQQAAAABJRU5ErkJggg==",
            name: "Swapper",
            description: "It was theorized that the source of qualia would be transferred \u2026But it turns out it was the whole body all along.",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Swapper"
        },
        {
            id: "TELEPORT_PROJECTILE_CLOSER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR4nK2S0Q3CMAxE46jfTJEsgLILg8AYZQ/YpWIBewF+WcDIUSysKo1B5aTW8il9dk4N4Z9iZnmKVO09xZ5JRLNUAHABk5leVtsUAFh6m1gw2MOIWCdb5Zwv4Rsh4iygVllhPeimuAEUIt79OU5y6pkppRsRCbB+fPrkIC+QDKSXGrfIj0M6jyZrkHFl1tSJaDm+6ApNbRO9irT+D6LSw2xk/Rgc1QsP/OgBPNhPgJ52A3brDaUae0/UXPPbAAAAAElFTkSuQmCC",
            name: "Homebringer Teleport Bolt",
            description: "Brings the target hit closer to you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Homebringer_Teleport_Bolt"
        },
        {
            id: "NUKE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA20lEQVR4nGP8//8/AyWAiSLdDAwMLCDi9FTG/zKSwmAByaA3jKQYwAjzArIhpBjEiBwGIENgbJBhxBjCCDOgo6MDzFBQUMBQdOjQIYZal1UMzXvCGOzs7MBiERERjCiBWFFRgdM2mGYQDQMrVqz4jxGI8WqoGg/+mgKmYZohLkBVwwJjPHn+FtNqYUwXHPxlh2mAafZ/RuRwQA8LkOZE7ekMzXsy4S548OAB9kDEBpx5Kxn6jkQwFNmsYNj7uR0lzBhxRSOyy/ABJko0gwA8FkjVCAMoXiAHUJwbAR0Eaam85KCdAAAAAElFTkSuQmCC",
            name: "Nuke",
            description: "Take cover!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Nuke"
        },
        {
            id: "NUKE_GIGA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVR4nGOsv1pRxAAFjdodfQwkAsZTUxj+y0gKgzkzNVKLQXSDVjvcIEZGRob////jNqH+akURyJBna4XhGCQG0gTTCGNjw4wgouFaZZH3/o5emKEgF8FcgwuAvAs2oP5qRRHHJn6wZgUFBZwa7NlyGJr3hDHUuqxiOPhrCsMNvYvFIEMYYS4AGYLPgEOHDoE1gwyxs7MDi4EMYSTXBVhjARkgK8LlAhBgARFPnr9lwABoZsI0Q1yAMIAR2QswgM0rIBckak9nmH81E+6CBw8eMDCCGNgMQQfOvJVgzSBD7govB2v+4fcRNRDxgUePHsFdICcnB9aMEo3eSAkJBLY6VuBNSPDkDkvKyJikpAzSgG4rKZkJHAYwDjnZGQDeE+mv+zKpewAAAABJRU5ErkJggg==",
            name: "Giga Nuke",
            description: "What do you expect?",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Giga_Nuke"
        },
        {
            id: "FIREWORK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApUlEQVR4nGNgoAXIOK3wn1i1TNg06Zv44jTsf+Yr3IZP/5/7HwZAbGwu+b/8E24D/qMBdJtBmsEARKO7JOO0wn90F2C1BJ8LQACmEVdA4g2DDDRNpMQGXoBs0P///wuxKgpZBgk0GI1L8f///5Nx2nT8EWrIoxuCzUAmZBdYyjEyIrsACj7hYOMH/1FtBjsbr/PxGYJkgBZOL+AAO6H0cZJsJgUAAHAwnJ6QjcurAAAAAElFTkSuQmCC",
            name: "Fireworks!",
            description: "A fiery, explosive projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Fireworks!"
        },
        {
            id: "SUMMON_WANDGHOST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmUlEQVR4nGNgoDX4///ff7I16xdKkaa54NKhbYQ0EzS0AGpI/Xbx/8gaQHTfkS//QV7CaUjBpUPbDn9/dwmmGUTDMEwzDGMYUgDVTLYLDn9/d4kYv2IVL4DaTnKAMTAwMMEYa29feYIuebH/GSPI2UQZEKyqI4NNQZENDyMDqWmAFMCEzMEWDugAr0XoUUkRgBkCcxVVDMUGAFoSiTrh8ELJAAAAAElFTkSuQmCC",
            name: "Summon Taikasauva",
            description: "Summons a possessed wand to aid you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Taikasauva"
        },
        {
            id: "TOUCH_GOLD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYElEQVR4nGNgoBAw4pL4fyflMopClTm6RJn4/07KZXTN+MRRAEEF+NT8J0IzNrVMxGoiy1n/8fgbJs5EjKH4vMdEsnOJNYARKd6JSgP/BzQWYICihISsgJSkTP3MRCoAAMxuTXXhVgklAAAAAElFTkSuQmCC",
            name: "Touch of Gold",
            description: "Transmutes everything in a short radius into gold, including walls, creatures... and you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Touch_of_Gold"
        },
        {
            id: "TOUCH_WATER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbUlEQVR4nGNgoBAw4pIwq3n2GJl/qkVKligTzWqePUbXjE8cBRBUgE+NGRGasallIdUgrGFhhqQJnwE41ZmhacIViNj4TAzUAGYEbCTGRQz4vIFPjgVfaMMUkpQKGdD4xAQwhiGkJGXqZyZSAQA0vGDyKi55pAAAAABJRU5ErkJggg==",
            name: "Touch of Water",
            description: "Transmutes everything in a short radius into water, including walls, creatures... and you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Touch_of_Water"
        },
        {
            id: "TOUCH_OIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAb0lEQVR4nGNgoBAw4pKYUBjwGJlf0L9BligTJxQGPEbXjE8cBaArwKYJpyET8CjEJ8fEQA0wAYez8PkbJs6Cz2BiQp6JKrEwASqBK+CwsWE0E8ypBOMYzUIM701AMpmQF4hOCwzkqCE1EKmfmUgFAMFGZZFHQxB2AAAAAElFTkSuQmCC",
            name: "Touch of Oil",
            description: "Transmutes everything in a short radius into oil, including walls, creatures... and you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Touch_of_Oil"
        },
        {
            id: "TOUCH_ALCOHOL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAcUlEQVR4nGNgoBAw4pK4MtHrMTJfJ3+bLFEmXpno9RhdMz5xFEBQAT41V4jQjE0tE1W8cAUqgayAEBtGMzFQCFjQowqXM2Hi6NHJhK4QWQG6v/GmhStoNuMKA3Q+EwM1wRUsNuGzHachpKQD6mcmUgEAHT9lK1Pyr5gAAAAASUVORK5CYII=",
            name: "Touch of Spirits",
            description: "Transmutes everything in a short radius into alcohol, including walls, creatures... and you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Touch_of_Spirits"
        },
        {
            id: "TOUCH_PISS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaElEQVR4nGNgoBAw4pL4fyflMopClTm6RJn4/07KZXTN+MRRAEEF+NT8J8FWZDEmBmqA/3hsJ+QKJkotZyLFRUQbQApggiUSYqIQBkBqYQmLCZsCbKmOqJT4n5KEhKyAlERF/cxEKgAAqDdbm82231AAAAAASUVORK5CYII=",
            name: "Touch of Gold?",
            description: "Transmutes everything in a short radius into urine, including walls, creatures... and you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Touch_of_Gold?"
        },
        {
            id: "TOUCH_GRASS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhklEQVR4nKVTWwqAMAyzo+fzQzym+OEFKyqMLUvcYPsQ6fJqRIuIZeb489iund2hsiHgXI9PQBBtZO4E1DgBscKkQTIK5fWcAHqt0hUCLlSSsoeXk3oRgdwIu3DAd5aACphwlAWnTmx1sqD/gEpR+XmTIAy5swToip00adgKZXFsXg9nf+cbnx4jMqXD8W8AAAAASUVORK5CYII=",
            name: "Touch of Grass",
            description: "Transmutes everything in a short radius into Earth, including walls, creatures... and you. Unless\u2026",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Touch_of_Grass"
        },
        {
            id: "TOUCH_BLOOD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaklEQVR4nGNgoBAw4pLYaGp6A5nvf/q0BlEmbjQ1vYGuGZ84CiCoAJ+ajURoxqaWiRxNZNu+EUkdjM1CqkEgNRgxspECFzAR0gBTiNVmQq7YiCdNwNgs+FxAdOpjwOMKktWQmpSpn5lIBQAdkkiwhs41iQAAAABJRU5ErkJggg==",
            name: "Touch of Blood",
            description: "Transmutes everything in a short radius into blood, including walls, creatures... and you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Touch_of_Blood"
        },
        {
            id: "TOUCH_SMOKE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaUlEQVR4nGNgoBAw4pLIrFz2GJk/vT1KligTMyuXPUbXjE8cBRBUgE9NJhGasalloooXMqESyAoIsWE0EwM1QCaaDcR4Aa8LpmOJc4LpIBOHnwnJs+ByAVkpMZOShISsgJR0QP3MRCoAAOxvYwJ4fgwaAAAAAElFTkSuQmCC",
            name: "Touch of Smoke",
            description: "Transmutes everything in a short radius into smoke, including walls, creatures... and you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Touch_of_Smoke"
        },
        {
            id: "DESTRUCTION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVR4nI1S2w3CMAy8IrZoBUPwxR+zIJaAAZgCdZXyxxdDVCpj8JCrHnUPJ/SkqHbic+5SAwPac/c22Jd7+83hG7OGi4AWpJookTnmkg3PJiAqmYeRfL3AsGTwuvrtkYQE7IL6fikmxSbRK2Hu5RuR6lQl9KE8IpuGwpL1qeql+INqW2KxG+11t0cfr47lJIfvmoJv/DMHrXiP3oD+I7vQrrk5yP0VaOHcOQDx7za1GpJ9oT5cOP8RWQujhiFyHnP+P6xQ3Zlf56jrAAAAAElFTkSuQmCC",
            name: "Destruction",
            description: "Instantly decimates foes around you, at the cost of your HP",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Destruction"
        },
        {
            id: "MASS_POLYMORPH",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAv0lEQVR4nGNgGDDw//+/////YYozYVV0+/ZtuAgDfiP///93+/ZtOBsZMYABI2GTkAAjIxMLAxHgw5JMAQEehB/gLsYF5sw5wsDA0NOzA+okiAYVFeU7d+5CGLhsYPTtBdmgqqrKwMCApvrOnbsQkTtg8sOHL1BvQKj3i9PfWJTAjYTbBgeqYEMZGBgQnhY50SMYOxPivDt37oqc6GFgYBCMnTnd2xhZJ1QDPBD2FEQwMDBkbj37f3MxMQE4GAAAJzhsXQgsQD0AAAAASUVORK5CYII=",
            name: "Muodonmuutos",
            description: "Baa",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Muodonmuutos"
        },
        {
            id: "BURST_2",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAjUlEQVR4nMWR3Q3DIAyEU3ZgD4bwbYTEDMxkhmAPL1G1Voljk8eo92R+7O84juPPYma387ILEck5b28D0CKtqyKixR2qtfYhMHMpxZ4pJJrBF5IAzDmdsUgYY1wsOSndqvd+NkRIrXWNdNoTnPCL6GyIECLaQtJ2pG12bZePW1EC0HcTkfXjFbOPcT2vN9kxQWeD3Bd5AAAAAElFTkSuQmCC",
            name: "Double spell",
            description: "Simultaneously casts 2 spells",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvpgvShGggSZL12GcRk3Dt7BtGmOadm/KdPGGIDdv1TGXCBQ4XZpBt4CIcmfICJZB2jBqKDUQMpByzInN9auo2s1y7/d07NINWcRgwDWa9dBpcav7V0STIJpI/12mVwSQMCjIO+xAYAngku8jFGEvoAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Double_Spell"
        },
        {
            id: "BURST_3",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoUlEQVR4nGNgGFJg+vTp/9HFGNEFXr9+/V9UVJTx9OnTGIrXrFnDoKCgAGZnZmaC9TIhawRhGBukmBjXMME0kOkrBrABFy5cwJAoKSkBO5koA8gBe/bsQRjg6urKSKor1q5dixqI5NiOYoArDle4uLhguAJmO4oB2AA2A5FtBwEWZA7IFbt374ZHKUwxyBUwgGw7VoBsADoIDg4mO73QDgAACkZPbuC8IFkAAAAASUVORK5CYII=",
            name: "Triple spell",
            description: "Simultaneously casts 3 spells",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvpgvShGggSZL12GcRk3Dt7BtGmOadm/KdPGGIDdv1TGXCBQ4XZpBt4CIcmfICJZB2jBqKDUQMpByzInN9auo2s1y7/d07NINWcRgwDWa9dBpcav7V0STIJpI/12mVwSQMCjIO+xAYAngku8jFGEvoAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Triple_Spell"
        },
        {
            id: "BURST_4",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVR4nNWRwQ2EIBBFR7KFcKAEOlAr0Ca8c6AED5YiFUARFkAHXuzAzZCAo6Jm97T7ExIyzMx/wwD8vYpjYJ7ndRgGaNs2xfq+h6qqwt05B8aYVMdoIR68K6VgHMes47IsUJbl2jRNyH3F4k+wpZSwI5im6ZR0R0HF4Et577cGdV0XOYoorXX4PCSi+I8E6mIMdI+bYDH4RHEldveIDeP+c+5pjUAorLVppTg36tiEateAuqA459B1HbqtQoiT+2/oDRHBWRNcFlcHAAAAAElFTkSuQmCC",
            name: "Quadruple spell",
            description: "Simultaneously casts 4 spells",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvpgvShGggSZL12GcRk3Dt7BtGmOadm/KdPGGIDdv1TGXCBQ4XZpBt4CIcmfICJZB2jBqKDUQMpByzInN9auo2s1y7/d07NINWcRgwDWa9dBpcav7V0STIJpI/12mVwSQMCjIO+xAYAngku8jFGEvoAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Quadruple_Spell"
        },
        {
            id: "BURST_8",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABN0lEQVR4nK1TMaqEMBCdyCIIFna2FltYWuwVPIGX2Zt4CT2B9lvsIlaLhYiVTRa1yCLY5DPhJ5io1f8DyYxO5r3MGwX4o5GzxPP55DJumoaM4wjTNMH3+4Wu6yDPc5GzzEJKKS4eBAHger1eEIYhH4aB+77Pq6ri8zzzJEkEweWAXDGjXa/X3YHb7aZiy0zWda09R1EkfNu2h61a5os4jokJMs8z3O93KMtSsUvAy5lwWZYdXl8WO45DFAClFJ1WjEzoUUhkNsGWZdFa4NukeRhbkP736kQbY30inGl4q3VdtW+H4PZ4PIAxxreFCOp5nmhj23ue5xqAhRtj7JBRFpnC7QAAAFzX1ZJHc5fCbU1MIY5jKIpC06LveyWmKdxOg62laSomwhgjn89HxO/3m9i2rX6gf7UfQ7Oiq1F5zB8AAAAASUVORK5CYII=",
            name: "Octuple spell",
            description: "Simultaneously cast 8 spells",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvpgvShGggSZL12GcRk3Dt7BtGmOadm/KdPGGIDdv1TGXCBQ4XZpBt4CIcmfICJZB2jBqKDUQMpByzInN9auo2s1y7/d07NINWcRgwDWa9dBpcav7V0STIJpI/12mVwSQMCjIO+xAYAngku8jFGEvoAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Octuple_Spell"
        },
        {
            id: "BURST_X",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzklEQVR4nGNgGPRg9+7d//HJM6ILvH79+r+oqCgjNs2urq4Y6pmQNYIwjI3LNeXl5ShyTCBBbBrQFYLAnj17GDo7O1FcwQRy1oULFzBsKykpAWuAARcXF4bY+xD+/1n5/0EAxQv4AMigq+EmDNorz4A1M6ROAPNRwG6oV9AxyCswv18JMwbbDKJh+piIdQHI+SAXMMwuANPIhhDlCmSbSQqDC9AAZmRkZNRZdRYcA4xpE0FcCJsBDcASDywGQKGPLQHBAAs2QTQNeJPywAMAD2qpZAOMbzgAAAAASUVORK5CYII=",
            name: "Myriad Spell",
            description: "Simultaneously casts as many spells as you have left uncast in your wand",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvpgvShGggSZL12GcRk3Dt7BtGmOadm/KdPGGIDdv1TGXCBQ4XZpBt4CIcmfICJZB2jBqKDUQMpByzInN9auo2s1y7/d07NINWcRgwDWa9dBpcav7V0STIJpI/12mVwSQMCjIO+xAYAngku8jFGEvoAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Myriad_Spell"
        },
        {
            id: "SCATTER_2",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAALElEQVR4nGNgGDng/////78f9v9PlkYQGAIaQYAsP1LVBYPfoO/UCCOG4QcAYX5A4SjqDcYAAAAASUVORK5CYII=",
            name: "Double scatter spell",
            description: "Simultaneously casts 2 spells with low accuracy",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvpgvShGggSZL12GcRk3Dt7BtGmOadm/KdPGGIDdv1TGXCBQ4XZpBt4CIcmfICJZB2jBqKDUQMpByzInN9auo2s1y7/d07NINWcRgwDWa9dBpcav7V0STIJpI/12mVwSQMCjIO+xAYAngku8jFGEvoAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Double_Scatter_Spell"
        },
        {
            id: "SCATTER_3",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVR4nGNgoAf4ftj/P9ma////P6qZktD+ftj/PzogGCP/KXEBDIwaggkoygs0BwB4JUbx2avDTQAAAABJRU5ErkJggg==",
            name: "Triple scatter spell",
            description: "Simultaneously casts 3 spells with low accuracy",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvpgvShGggSZL12GcRk3Dt7BtGmOadm/KdPGGIDdv1TGXCBQ4XZpBt4CIcmfICJZB2jBqKDUQMpByzInN9auo2s1y7/d07NINWcRgwDWa9dBpcav7V0STIJpI/12mVwSQMCjIO+xAYAngku8jFGEvoAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Triple_Scatter_Spell"
        },
        {
            id: "SCATTER_4",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAASElEQVR4nGNgoDX4ftj/P9ma////P8g0/////z9BL/3HohkkRpSLvqOZTrRGbAaRrZGBUhf8pyQMqBILVEkHDNQ0hKK8QBcAAHjvYO0LFR0rAAAAAElFTkSuQmCC",
            name: "Quadruple scatter spell",
            description: "Simultaneously casts 4 spells with low accuracy",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvpgvShGggSZL12GcRk3Dt7BtGmOadm/KdPGGIDdv1TGXCBQ4XZpBt4CIcmfICJZB2jBqKDUQMpByzInN9auo2s1y7/d07NINWcRgwDWa9dBpcav7V0STIJpI/12mVwSQMCjIO+xAYAngku8jFGEvoAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Quadruple_Scatter_Spell"
        },
        {
            id: "I_SHAPE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAI0lEQVR4nGNgGAU0Av/BAJmLJsuApIYJU46RkRErdxTQEAAA0PAX8Vot/CUAAAAASUVORK5CYII=",
            name: "Formation - behind your back",
            description: "Casts two spells: one ahead of and one behind the caster",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvpgvShGggSZL12GcRk3Dt7BtGmOadm/KdPGGIDdv1TGXCBQ4XZpBt4CIcmfICJZB2jBqKDUQMpByzInN9auo2s1y7/d07NINWcRgwDWa9dBpcav7V0STIJpI/12mVwSQMCjIO+xAYAngku8jFGEvoAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Formation_-_Behind_Your_Back"
        },
        {
            id: "Y_SHAPE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAALklEQVR4nGNgoAX4DwYQNhNBpQzEmzpklNIL/CfPSf+Hjrb/xKclRkZGcuxBBgAVfCneG7++pAAAAABJRU5ErkJggg==",
            name: "Formation - bifurcated",
            description: "Casts 2 spells in a bifurcated pattern",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvpgvShGggSZL12GcRk3Dt7BtGmOadm/KdPGGIDdv1TGXCBQ4XZpBt4CIcmfICJZB2jBqKDUQMpByzInN9auo2s1y7/d07NINWcRgwDWa9dBpcav7V0STIJpI/12mVwSQMCjIO+xAYAngku8jFGEvoAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Formation_-_Bifurcated"
        },
        {
            id: "T_SHAPE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAMUlEQVR4nGNgIA/8BwNiVDIx0An8J849AwX+IzkPzv6PNRixKiU13KkF/tPcusGUlgCSOCnbJqqplwAAAABJRU5ErkJggg==",
            name: "Formation - above and below",
            description: "Casts 3 spells - ahead, above and below the caster",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvpgvShGggSZL12GcRk3Dt7BtGmOadm/KdPGGIDdv1TGXCBQ4XZpBt4CIcmfICJZB2jBqKDUQMpByzInN9auo2s1y7/d07NINWcRgwDWa9dBpcav7V0STIJpI/12mVwSQMCjIO+xAYAngku8jFGEvoAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Formation_-_Above_And_Below"
        },
        {
            id: "W_SHAPE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOElEQVR4nGNgoAX4DwYQNhNBpQzEmzpklOLRicb+j2YoHqUMmBrIdNL/oaPtP/FpiZGRkRx7kAEAPIdEw1dkU4QAAAAASUVORK5CYII=",
            name: "Formation - trifurcated",
            description: "Casts 3 spells in a trifurcated pattern",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvpgvShGggSZL12GcRk3Dt7BtGmOadm/KdPGGIDdv1TGXCBQ4XZpBt4CIcmfICJZB2jBqKDUQMpByzInN9auo2s1y7/d07NINWcRgwDWa9dBpcav7V0STIJpI/12mVwSQMCjIO+xAYAngku8jFGEvoAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Formation_-_Trifurcated"
        },
        {
            id: "CIRCLE_SHAPE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOUlEQVR4nGNgoAT8BwP8IkwMAwD+w9yA5hh6gv+woMDqhv8wKQgDJZQYGRkxNTBiExxGwfp/UKQlAHgyNdf5ud2ZAAAAAElFTkSuQmCC",
            name: "Formation - hexagon",
            description: "Casts 6 spells in a hexagonal pattern",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvpgvShGggSZL12GcRk3Dt7BtGmOadm/KdPGGIDdv1TGXCBQ4XZpBt4CIcmfICJZB2jBqKDUQMpByzInN9auo2s1y7/d07NINWcRgwDWa9dBpcav7V0STIJpI/12mVwSQMCjIO+xAYAngku8jFGEvoAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Formation_-_Hexagon"
        },
        {
            id: "PENTAGRAM_SHAPE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOElEQVR4nGNgoAr4DwZYpZgYBgb8x+Eewi7GVMPEQAn4j82e/4QsH3TgP6qLqecB/FGBLEv7tAQA3OEs2lL6CqUAAAAASUVORK5CYII=",
            name: "Formation - pentagon",
            description: "Casts 5 spells in a pentagonal pattern",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvpgvShGggSZL12GcRk3Dt7BtGmOadm/KdPGGIDdv1TGXCBQ4XZpBt4CIcmfICJZB2jBqKDUQMpByzInN9auo2s1y7/d07NINWcRgwDWa9dBpcav7V0STIJpI/12mVwSQMCjIO+xAYAngku8jFGEvoAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Formation_-_Pentagon"
        },
        {
            id: "APOTHEOSIS_SHAPE_WALL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAVUlEQVR4nL2TwQoAIAhDtf//53UxECtcIr2b4pwiivwGxorHi7DsKF1CWC6uQQt9vNWBENLg4JhOwAqfVigB18g7xprUENUzCtGoxM2d/gVV1ZZJIhPg3pN1jM/+YQAAAABJRU5ErkJggg==",
            name: "Formation - Wall",
            description: "Casts 5 spells in a wall-shaped pattern",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvpgvShGggSZL12GcRk3Dt7BtGmOadm/KdPGGIDdv1TGXCBQ4XZpBt4CIcmfICJZB2jBqKDUQMpByzInN9auo2s1y7/d07NINWcRgwDWa9dBpcav7V0STIJpI/12mVwSQMCjIO+xAYAngku8jFGEvoAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Formation_-_Wall"
        },
        {
            id: "I_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAV0lEQVR4nGNgGAWDBOx33v8fhMlSv995/38YgAner77/H4SbhJpQDP5/4f9/MEZSz4JsskOvA8N/hv//GQ0YGWGGHz5/GGwgiA8SB4k57HGgohdGwSAAAEowUc2R+CyPAAAAAElFTkSuQmCC",
            name: "Iplicate Spell",
            description: "Casts a copy of a projectile behind you, but the copy still cost mana",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Iplicate_Spell"
        },
        {
            id: "Y_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhElEQVR4nGNgIBHsd97/H4RJ1QcGII0wADOEhYFI8P/Cf6y2shDSeL/6PlgjowEjI8wVINpxryOYT32/rpNb9x+EiVXPAmM0CTWBNQU9CsLvtMELmoSa/sO8QRFYR2Ig0ibJMiABUEKCJSaKDAYlZTBGywtMxBoASsoHig+QbDEGQPcCAKJ7YNHh6kq7AAAAAElFTkSuQmCC",
            name: "Yplicate Spell",
            description: "Casts a copy of a projectile in a bifurcated pattern, but the copy still cost mana",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Yplicate_Spell"
        },
        {
            id: "T_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdklEQVR4nGNggIL9zvv/gzADOWC/8/7/MECqIUwM1AL/L5BuO4YBDJSC+9X3STaEiRyLsMbYfuf9/5uEmsCC6+TW/QdhZJfBXIceYyzopoMMCXoUxAhTDKIVWxUZiQqn+0SGAc5Ed5+MQKQ4GpmQOUM8L5CbnQHo6nQszp1WVAAAAABJRU5ErkJggg==",
            name: "Tiplicate Spell",
            description: "Casts copies of a projectile above and below you, but the copies still cost mana",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Tiplicate_Spell"
        },
        {
            id: "W_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAm0lEQVR4nGNgIBHsd97/H4RJ1QcGII0wADOEhYFI8P/Cf6y2shDSeL/6PlgjowEjI8wVINpxryOYT32/rpNb9x+EiVXPAmM0CTWBNQU9CsLvNGK8sQ7NFaBwgIUFekywIGtEdwXMJsVWRUZ8MQHXDDOAEMAbwOtIDETaJFkGJIAcgBQZDApAMEbLC0zEGgBKygeKD5BsMQZA9wIAqAKOINGeLUYAAAAASUVORK5CYII=",
            name: "Wuplicate Spell",
            description: "Casts copies of a projectile in a trifurcated pattern, but the copies still cost mana",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Wuplicate_Spell"
        },
        {
            id: "QUAD_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkUlEQVR4nGNgwAP2O+//D8L41OAEII0wgM8QJgZagv8X8NtOlAsOnz9MvguahJr+36++TzgQ9+MIbZBmbOIo6vejhTbMVhgbRIP4IDYoTMAYST0LsskOvQ4MINjs1MwQmxmLEgYgPkjc1tCWwWGPA3Fe2A+1nVgvYwCY0xnIBU1Qf5OdDmwNbcm2fJDkBWJCGwDM5p6Ok5/qXQAAAABJRU5ErkJggg==",
            name: "Quplicate Spell",
            description: "Casts copies of a projectile in a tetragonal pattern, but the copies still cost mana",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Quplicate_Spell"
        },
        {
            id: "PENTA_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArElEQVR4nGNgwAP2O+//D8L41OAEII0wgM8QJgZagv8X8NtO0K//L/z/T1D9fgJ+vV99H0UMXT0LsqRDrwPDf4b//xkNGBlB/HVy6/4TchEjzFQQ7bjXkRHZ1gcnHoAVKVgogGnFVkUM9Yy4wgVku6CqIJj9/vZ7hqBHQTjV4gQgl6CHAdHgPpJGkg35jyWwcEUpAwzA4hafQljCwohuYtM9NnXUywvEZl10dQA6PrQMnXthAAAAAABJRU5ErkJggg==",
            name: "Peplicate Spell",
            description: "Casts 5 copies of a projectile in a pentagonal pattern, but the copies still cost mana",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Peplicate_Spell"
        },
        {
            id: "APOTHEOSIS_SHOT_WALL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA30lEQVR4nGNgIBHsd97/H4RJ1QcGII0wADOEhYFI8P/Cf6y2shDSeL/6PlgjowEjI8wVRBmwH6pQsVWREcMV+lA1Lvv/YxiwTm4dWJHjXkdGbK4AGeywxwGunhHGaBJqAiuqe1fHuE5uHVhMUFUQwzBk16GLo7gC5hKYC2CuQI8JFoQ2hCuCHgUxYgsHXDEB1wwzAN0F+BITI7okTCPIFTBFChYKDDCXIAfiAZcDmAYg24IeUOjRiNcABiiABR4sHJATEs5YwAZAtoMxWl5gItYAUCI6UHyAaAtxAvTsDAD/FKpPunvCsQAAAABJRU5ErkJggg==",
            name: "Wallplicate",
            description: "Casts 5 copies of a projectile in a wall-shaped pattern, but the copies still cost mana",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Wallplicate"
        },
        {
            id: "HEXA_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR4nGNgQAP7nff/B2FixVEASAEMICvGJQ4CTAzUBvtBtl34j+FUkBhR3gABXAYwkALuV9//j42NDlhABMxZjnsdGZEl18mt+3/lyxUMTcjqGUEchz0OEJmLEIrRgJERpFlQVRDMf3/7PUPQoyBGuDf0IeoOuBxAjYUDxQfAmkFONow1hIuD2CAxkBxIDVYn7UcLXZCGJqGm/yCXoIcBUbFxn8hApDgamdAF8DltCOUFUrIzAJiDvmnoKj4mAAAAAElFTkSuQmCC",
            name: "Heplicate Spell",
            description: "Casts 6 copies of a projectile in a hexagonal pattern, but the copies still cost mana",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Heplicate_Spell"
        },
        {
            id: "SPREAD_REDUCE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAQklEQVR4nGNgGBTg//9/////g7CZqGkqA4zECb4f9iesCFkpMiBKGzF6mBjIA9/Jc9J34j3NgAGIClY8mmkQ01QDAOnTLvczj15JAAAAAElFTkSuQmCC",
            name: "Reduce spread",
            description: "Reduces the spread of a spell",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Reduce_Spread"
        },
        {
            id: "HEAVY_SPREAD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWUlEQVR4nGNgGCjw//////gFqAX+oxm8e/fuXXg17MajgKBmbAphbKI1k6XxP9SfIMUk20QsQDacYIztpsQlu/EEIF6D/xOIb7JjgQEHICvlEq2JZvkCGwAAwmlkD0qHolkAAAAASUVORK5CYII=",
            name: "Heavy spread",
            description: "Gives a projectile a much lower cast delay, but no respect to your aim",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Heavy_Spread"
        },
        {
            id: "RECHARGE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVR4nLVSwQ2DMAw0naCFH+oKmYsFOpMXuhUqfoFukOoQQcYkaovUezl2fInvLPIvzDGmDManGj1KRI1vvratvKZJnuMoAJZ8CEHufS+5duu6pvryHGMCkIZheOQaY+bsnQNBWuGbayS7IoCNudTsSQ6/QClZgapuovJ8kZOgmBsBgCVBlUsj2J/REYIufa0DVvGYr46qqjubLIklz04V51JDYl+ywn1yarns/bYEfoTjShoiChZCaBh7EbnaxZX+FW9mI0dfGdfvcwAAAABJRU5ErkJggg==",
            name: "Reduce recharge time",
            description: "Reduces the time between spellcasts",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Reduce_Recharge_Time"
        },
        {
            id: "LIFETIME",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMElEQVR4nGNgoBAwogtYZ5/+/+HFGQYBCRMGGH10qilc3eHr3//banLC+UzoBjw4MwcnH6RZQ+QLmCboNO3g6SiKwjregvmvX7/+j8xnxKYR5GwYAHnj6tpMnF7A8P/y5cv/gxRJm6eDaRAfJA5TA7MZIwyss0//z7G5A2aD/IlMg8IBZsiqCmFGDAO0g6fDNbu4uKC4qmTCATANkkcPFxBgAREgP8sY6MBthAEDnxowvWLBBDAtcOQKA1YDQODJhQ0MT5BcICalwPDq2QOwZpAcBKgw4DRAxiAAxQWT2grANEhMw8WF4cYbHgYGXC748OIMw5MLd1BcgGzYnj17wPSHFx8wDGACEaB4nnIE4jyYYnQaJI+cHlAMAAFQeocZAnYuEg0SR84PyIDklEh1AABIJ6OSqCkh4wAAAABJRU5ErkJggg==",
            name: "Increase lifetime",
            description: "Increases the lifetime of a spell",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Increase_Lifetime"
        },
        {
            id: "LIFETIME_DOWN",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJ0lEQVR4nGNgoBAwoguctg75f/T3RwZrVn4GGG16dA1c3ZOgnP8y66bA+UzoBkx7cRMvXzotkjinTTBz/Y/MB9kMol+/fv0fmc+ITSPI2TAA8kbBqd1gdf93HP3/xliNQeTsLQZGD2sMvQwg/19eufI/SGGisi6YBvFB4jA1IDFkPUzImjnyQsFskC3INCgcYIag28wEczZMs4STE4qr+qpawDRIHj1cQIAFRID8rMMvA7cRBsosIIbNmzoDTP9AChsML1z5+IThxb59cAklAWG4ZpAcCGMDLDAGugtqWlvh4SDBAAn5M7gMOPr7IwMHyIZ9T+BhgGwYyGUvoOqweqHg1G7GH5NWwxVjo0HysPSANQxA6R1mCMi5yDRIHDk/IAOSUiJNAAByup+LG+C95AAAAABJRU5ErkJggg==",
            name: "Reduce lifetime",
            description: "Reduces the lifetime of a spell",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Reduce_Lifetime"
        },
        {
            id: "NOLLA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAr0lEQVR4nK2T3Q2DMAyEnU6TFdo3NmEEBsoD06Qv7HSVISluek6D1JMQOD9f7IsR+YcATACyiSOAhFP6HXuAXBbqewaw4Vs6No9AqjReymPnOATHye/NZH51IThqrmnnAcj24QlOw/ZNPyB1LtnBqoUZ2wDUk10a3zxTQwgPEXmKyJ1l0qaV2GksE6+EaExcexBqIrnGHmS8F8AbiZbaQtxW7l2xhXR/pgKZXMAVvQB90ND6PnW/fAAAAABJRU5ErkJggg==",
            name: "Nolla",
            description: "The duration of a projectile is set to zero",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Nolla"
        },
        {
            id: "SLOW_BUT_STEADY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEElEQVR4nKVTuw2EMAz1nY6WAaBBiIoBmABRUtKzAQNAgbwFDYsgBmAAKhRRMQBKz8nWBQUOxH3cOP69PDsOwJ9yOwsg4iKEANd1QemiKN7y72cAVKRL27a/UUzTdPmphfRVSNQVo7quP2sBEZcoiiDLMi6M4xjIJv8lACIunueB7/tsj+MIlmWtc9iD3Pe09WIqdByHz1VV8Zni+lweOgD1GwQBmKYJ0zStDJIk4eI8z9k3DAMcAgghoOs6PodhyNq2bTAMg+ehYro8zhgoKcuStZSSQed5/o6BlJJnQaBN08DlKwwvdJXc9/3Gpri+pRsAWhQKKhCiq2vy7//DpgUllERPpYD2tx5t5Edy9C+em0uS2FA4CesAAAAASUVORK5CYII=",
            name: "Slow But Steady",
            description: "The reload time of the wand is set to exactly 1.5 seconds",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Slow_But_Steady"
        },
        {
            id: "EXPLOSION_REMOVE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8ElEQVR4nGNgGDTgv4bG/4lqav/Rxb8f9oeLfW7nBqsBqYWJMcEYk/79Y8hjYmJANgSkAZmeN18arAakFgZYYIz8W7cYGdTU/oMUgOikxKcoLgEZDNMMVosLTIQ6EUSDnP/9eTvc2SAa5BqQOMxVjOgGgCTQnQpjpx1MZGC4c4Lhz5E9DLyVXxlRDPgMNRHsLxsXhlnJ18EaYeGDTTNKIPIiCeIDIMORY4YJmyKY7SCbYbEzy34+2HYQ4LTdSH4gMkDTBrKXsWt+3g4J8eftWA0haPNnqA1gA6B+xmsILgm4QWiGYHUFsgZsfKz+phQAAFjf1H2c9m1OAAAAAElFTkSuQmCC",
            name: "Remove Explosion",
            description: "Makes a projectile no longer explode",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Remove_Explosion"
        },
        {
            id: "EXPLOSION_TINY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnUlEQVR4nGNgGAhwclLwf6IV9yboVoM0/H9x7j/ZhsAAuiFkgf+kGPL9sD9Y8ed27v+4DGHCphFZA8gQFhsXuGEgcGpVK1wtCzYDeCu/MoIZKhYIwTsn4Mwj527VYHVBb4JuNbrzsYHiBZdbsRpgY6TWglXHnRMMnLYbIa4iJYS/H/b/DwsPfC4a4LhmgAL0pAkyBCSGHLAkG0IXAAAV4Fs0JkYkIAAAAABJRU5ErkJggg==",
            name: "Concentrated Explosion",
            description: "Limits the radius of a projectile's explosion heavily",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Concentrated_Explosion"
        },
        {
            id: "LASER_EMITTER_WIDER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAc0lEQVR4nGNgoCdoPfD/P7oYI7Ga//9HaGZkZGQky+b/UEOwuQQMjBqv/gdhBhwAp0YQQNaIzxB0wAjTcK5eG8VfILFgey2cGtcevMYA19OKz2kEABMDhYAF5hx0QJIXKAlE6kUjAx6ALyHRJymju4SqAADMiVXZaOMmYwAAAABJRU5ErkJggg==",
            name: "Plasma Beam Enhancer",
            description: "Makes plasma beam spell's beam wider",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Plasma_Beam_Enhancer"
        },
        {
            id: "MANA_REDUCE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAmElEQVR4nK1SbQqAIAyVqEPsFp1JKFgHKjDoTN6iQxgYuVxSWhm9P+rb9vbhhPgFIDVI/eyHyqAy98wBNoDU5MdJ8BrDFLlah1Ae/aU8hfXNwfi7GdqKyYKOoa1uugSpw5jtTfI2AXT1kNue4QvADScqD0G1ewZUZp7qlNY81fEpuc42A82nGxdPxpD3cWzIWI3TAF4t3xusjs+LJ2C0FaMAAAAASUVORK5CYII=",
            name: "Add mana",
            description: "Adds 30 mana to the wand",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Add_Mana"
        },
        {
            id: "APOTHEOSIS_WATER_POWER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxUlEQVR4nGNgoCUwbDr9H4TxqWHBJ6klLwqmz5NrO6dRERjjcwUTPtt/vb0BxjCXEA2iFz4A28ws7wXGIDZIjOgwuPbwNdjmiKZpYP6KuiywGEm2Ry988H/m+f9gjCxGVMAZQmmYAchi6AHKgswBBdaltzcYLs2tB/MPXXoIpn8hiYHUnCcmFogFLMgcUECxCWuAbYTxkQFIDl2MEd1EUECtmzgJbgiy5qD8PIal8QooejAMAAFQQKEnHpDN5+tMsaofWAAArQ2CCtVdPs4AAAAASUVORK5CYII=",
            name: "Hydromancy",
            description: "Reduce mana cost by 30 and increase fire rate when wet",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Hydromancy"
        },
        {
            id: "APOTHEOSIS_BLOOD_POWER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyklEQVR4nGNgoCWYwMDwH4TxqWHBJ6lhoA9hXLiIUw0jPtvPQNkmDAwMBTjUMuGz/SkDAxjDXUIs2GGg/z+GgeG/IxSD2CAxog2YANUI0gTCjngCkwmb7SC/lxvoM7g7O4MxiA0Sw+YKJnSbl1y4yBBjoM8AomEAWQzdJSzoJoICrROqeefevRhiJoS8QAigxwgTuqQ0Ev/GhYtgDAPIcji9YAKlQc7eiCQO0ozufAwAC2VQQMGiEMaGBR7evIEuCeOTlIiIMRgZAADP2Vs/hlTfIQAAAABJRU5ErkJggg==",
            name: "Hemomancy",
            description: "Projectiles will pierce 5 times when bloody",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Hemomancy"
        },
        {
            id: "APOTHEOSIS_FIRE_POWER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA70lEQVR4nGNgoCW4bsb3n5AaJnyScv6KDF9b9f+TZevXVv3/1RIMYAwzBJuLGNE1g2x9tPE+w5JHnxgufYCI6wkwMMTI8THA5DRPfWLE6gU5f0UwjawZBEBskBiyGgwDrpvx/W+bfBGuAQRW1OqDMbIYSA3WwP3aqv/flwPiZxAN4n+/ng3G2OSwegFmU5ceH9gmGACxQWLI3oIBFhgDFDigwAIpKrsE8e+/dUfghpZ9gIiB1IDUYrhA89QnxqpciH/xAZAa5FhgQZZEdgWMjwzQbccKvkITECiwkDFygkIGKAkJBmAJCt11yE4fPAAACMWPb5Q/VM4AAAAASUVORK5CYII=",
            name: "Pyromancy",
            description: "Amplify and convert all damage to fire damage when burning",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Pyromancy"
        },
        {
            id: "BLOOD_MAGIC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5klEQVR4nGNgGPKAEZvg1ba2/7JJSXD+43nzwLR2VRVW9RiaP714Acau2tFwNgiD5A5GRf0nWvO7e78xDAFhZEOYcDkbBOY17MCw5P2sWQyXLl7EtH2ytjbYZGSb0G0HyYNwokPtUpg+RmRDQBIJUnejQGwFDQ0GwbQ0eCDy/PnD0LDvN4PR63UMuVevwvWxIBsw/0BzNINDLUhR1IJnygxGK50ZzokGgeVAGhlEg5YxMDCALcAIA2RD9PT1Qcxlx96+hYufEw1ahiSHHyxyc8MZVaCwImjAZGIUQQGGF0AA2emDHwAAYIijJsjLwNAAAAAASUVORK5CYII=",
            name: "Blood magic",
            description: "Reduces a spell's mana cost and recharge time greatly, at the costs of four health points",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Blood_Magic"
        },
        {
            id: "MONEY_MAGIC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAv0lEQVR4nGNggIL/zyb8ZyAX/H824f//38//U2wIAzaDofjjBmu4PDKbkZCBn06thovxBxzFUM8IUwxTCFKEbAMM3Fp+mUEtUhfONl35CayXEeYkkKBJfxPcRj6zUBQDQOLIYiA+yDIWmGI1JMXomvEBFphpYBfg0Qj2AhIb5gUWbC5AByALQN6DAbDalUfBbCZkF5ADWIhxAS7nY7jgEzRkkeMe5nxYwMKikmBCOh3O9x9ZMbrNWAGxeWFwZTwA0yaVJwuXs24AAAAASUVORK5CYII=",
            name: "Gold to Power",
            description: "Spends 5% of your current gold and adds damage to a projectile proportional to the amount spent",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Gold_To_Power"
        },
        {
            id: "BLOOD_TO_POWER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0UlEQVR4nGNgGGjAiE/ydlr0fxj70ovXDMGbdmGoZyGkGaSRoAtup0X/hykE2bLWzw1uMwxcfv6CQVdSAs5uOH0JrJcJZgtIUE9ClAGmGcSGARAbpBkmFm2oC1fHgq4Ym2ZccnADLkFdAAMgPrpCZHlk77AgmwqikQMNJg4SAzkb2WCYgSzYXIALILsKFogs2FxAyPkwzRixcAmaWJC9AXM+zFCY31EMCN60ixFdYun5y/DwANEgPraUiAJgcdtgqgemQXwYG+53ND4KIEkxtQAAsPeEljP9yw0AAAAASUVORK5CYII=",
            name: "Blood to Power",
            description: "A projectile gains additional damage at the cost of 20% of your health",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Blood_To_Power"
        },
        {
            id: "DUPLICATE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZUlEQVR4nGNgGFTgy73/cHBh9qv/ZGsmy5ALSIpBbBhgIBf8J9IAJmK9B3MhiAbxSXLBBaiXkGmCNoIAtnAhWvMXJGcS7YIvWDQTHQZfcGgmORa4FREBSExCghtwZ+9rUiweRAAAHj/L08Vpst0AAAAASUVORK5CYII=",
            name: "Spell duplication",
            description: "Duplicates every spell cast before it",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Spell_Duplication"
        },
        {
            id: "QUANTUM_SPLIT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABCklEQVR4nKVSwW3DMBC7E/zIAEo7UdElgjy7hAcx8u0UBbpBO0kiDZCXr+BJdKU0RtPmANuEJZ5IntTM5J4aCFT1181HEZ6mjyKCw8OtJ1Wy1seO9X/4CzmkZDZNbORqlBlcs8C1k+rSgBbm7dYezLRTcBkom4aUfJkWQK5YlhCvVSonOglNKhEN0WQ9gwSvRU3nC5Lpn3YCXjlnA4nfhkhPFmP0fdXOUgPtXubXjMzXc86yG6Ovvb+Kzmf1zIYV+60Cx7sxOhH4aY8mbke6MQLjmxqZlN7OHhgN3w7Sj3HtOlfpXh+f37hoNPsxf/6HEj7PL4aAFxw2hbd6D1o12OyyJTpgFl0G/60vdnCo9Co3UfYAAAAASUVORK5CYII=",
            name: "Quantum Split",
            description: "Makes a projectile split into three projectiles whose existences are entangled",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Quantum_Split"
        },
        {
            id: "GRAVITY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAN0lEQVR4nGNgGGjACGP8////P4oEIyNcjizwHwooMgQERoAhTBSbSqkrmBiGHPiPlsCGoBfQAQBG8ifkzPws2wAAAABJRU5ErkJggg==",
            name: "Gravity",
            description: "Increases the effect gravity has on a projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Gravity"
        },
        {
            id: "GRAVITY_ANTI",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAN0lEQVR4nGNgGHLgPxTA+EwMQw78R3I+/b3wH812+rrgPxbbB7nm/2gpDhdgxGUTIyMjXG5wAwADOyfkqfyMigAAAABJRU5ErkJggg==",
            name: "Anti-gravity",
            description: "Applies a lifting force to a projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Anti-Gravity"
        },
        {
            id: "SINEWAVE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJklEQVR4nGNgGAWDCPyHAmLFMRQxkMiG8Zmo5AHivYMuNgoGAwAAGhgzz6s7elwAAAAASUVORK5CYII=",
            name: "Slithering path",
            description: "Makes a projectile move rapidly in a slithering manner, like a snake",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Slithering_Path"
        },
        {
            id: "CHAOTIC_ARC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAUElEQVR4nMWQQQoAIAgE1f//eSNIiJA0jZpTh93RJPoBBv0tzydTJoBp5RWJ2pmZ3cnYSNz1lbIETih9yKsSVL6C6DHJCB+VrVJKoMV02aMBHgRnof/LnuUAAAAASUVORK5CYII=",
            name: "Chaotic path",
            description: "Causes a projectile to chaotically fly wherever it wishes",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Chaotic_Path"
        },
        {
            id: "PINGPONG_PATH",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAT0lEQVR4nO2RwQoAIAhDVfr/X150MDQIml57JwNnm4o0US8A4FmkunUl4mcmTfQ2mY4AYgcRq4iSGym4+FfI2PGmoSIs697jMcbZ0HVEMwF1tCgGjQmc0gAAAABJRU5ErkJggg==",
            name: "Ping-pong path",
            description: "Makes a projectile fly back and forth",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Ping-Pong_Path"
        },
        {
            id: "AVOIDING_ARC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZElEQVR4nGNgIBFM9zb+7y8uDMYgPhMDBQBkCBMlBhDtgv9QQLYB+AALAxGAkZGRkWIvMFBiAD7ARIztFHsBH2CixHacsfAfGmiENKMY8B8ppInRiGEAKZqQAX3yAi6w8eVbRgBTCSUnn3uSPwAAAABJRU5ErkJggg==",
            name: "Avoiding arc",
            description: "Makes a projectile shy away from obstacles",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Avoiding_Arc"
        },
        {
            id: "FLOATING_ARC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeUlEQVR4nGNgGAWMuCT+////H66IkRGnOoKasfHxgv84FOMSZyLaZHJsn+5tjNUrIBpF7X90Aahmf3Hh/+iGoKtnISeUkdUzYVMAsnXHmQdgNojG5gq4YdOxSMI0IwMPEwXsBoD8SbTbsQCKo5Fp48u3pCVTJADSCwCn21AoCc7nTgAAAABJRU5ErkJggg==",
            name: "Floating arc",
            description: "Makes a projectile float above the ground",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Floating_Arc"
        },
        {
            id: "FLY_DOWNWARDS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXklEQVR4nGNgoDWQSV78Hx+fKGA97fz/+qMf/4NoBlKATPLi/yAA0gyjYeIENf////8/xS5Atg1mIEHb/yPZTFXwnxiD/9PKdpobTpQNtHcBAwEATopYXME0MM5BAgDoQlPlG413TAAAAABJRU5ErkJggg==",
            name: "Fly downwards",
            description: "Causes a projectile to aim straight downwards a short time after casting",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Fly_Downwards"
        },
        {
            id: "FLY_UPWARDS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAVklEQVR4nGNgoBf4DwXo4kwMgwb8x+I8UuRpD/4T44L/tHTmf2IN/09tV8gkL/6PbDCMT5JLrKed/19/9ON/EE2y7f///wdrhtEkuYJiF2CzjWTbCQEAlMJT5fhnhIUAAAAASUVORK5CYII=",
            name: "Fly upwards",
            description: "Causes a projectile to aim straight upwards a short time after casting",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Fly_Upwards"
        },
        {
            id: "HORIZONTAL_ARC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiElEQVR4nGNgGAUYgC9+aQk5cmCgUH3qPwMBgK6GBcbI2Pr9/8qtBxpAbE7vVitWEQUrZm4hbhD/79d3X3+/eXDs+9bqYx/fv20AqZ3hzckINyVj6/f/ImWnVoMNuf4fjNEBTBxZLUgvI7oL3k/zbMTnAsGs7fXh3g4NKC6gJAyoGwujgIEsAAD02G7elDDrRgAAAABJRU5ErkJggg==",
            name: "Horizontal path",
            description: "Forces a projectile on a horizontal path, but increases its damage",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Horizontal_Path"
        },
        {
            id: "LINE_ARC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaElEQVR4nGNgGGjAiE+y9fT//yC6yoSBgZGREa9aDGA87T5YMwj8/w8xiCzNJBsglrMWQzE+A1hABJdfI1gBj5wOw6spwaT5lRiA7gIQHybGxEAP8B9PGDBRyyC8ANnPZIH/lGge/AAAwlM7WhlWvhAAAAAASUVORK5CYII=",
            name: "Linear arc",
            description: "Makes a projectile fly only in cardinal or diagonal lines",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Linear_Arc"
        },
        {
            id: "ORBIT_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAcElEQVR4nGNgGLTg6LP//zM2v/5vMeHyf5jYfyjAq/H/////QZqxiSMDmDgLuiJGRkZGUlzKRKxCZIOxWvKfkN8odQEyQA5YJgYygIGyBANFXjiKJZaINgSnZmINICoh/ceiCJc4zkSDrpjUBEY/AAB4Nl8cmsKfJAAAAABJRU5ErkJggg==",
            name: "Orbiting Arc",
            description: "A projectile orbits the point of its origin",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Orbiting_Arc"
        },
        {
            id: "SPIRALING_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdUlEQVR4nGNgGGjAiE/y/////1EUMzLiVY+iEV0zPnEUQFABPjX/idCMrpaJGMVHn/3/n7H5NXlOP/oMIY5sCIb6/1gMQNZsMeEyijxRBvzH4SpSwooBXTFG2mBAk8CWWJA1ocszYjWV2BRHbDQSBYhKprQAAEBib1v9kR9pAAAAAElFTkSuQmCC",
            name: "Spiral Arc",
            description: "A projectile flies in a spiralling pattern",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Spiral_Arc"
        },
        {
            id: "PHASING_ARC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdUlEQVR4nL2QiwmAQAxDk06iIzmAoziNAziKI1VOLBxyPS4IBgr98EIo8Lf8Ucymwu/eBHhq7U1JAGCOhiRFFneKLElT7r6XQkeWHWqwZ2IJPBzTOrctGpLrqOGnhy2lIMoCro0kAylmlgDAGQuSh+wiP6zSBU+/SkPaQT0sAAAAAElFTkSuQmCC",
            name: "Phasing Arc",
            description: "Makes a projectile fly much slower, but teleport short distances over its flight",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Phasing_Arc"
        },
        {
            id: "TRUE_ORBIT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnElEQVR4nGNgoBAwYhM8+uz//8Vn3zBcuPuCwUBZAkyDwIkCXazq4eD/////QZoZcACLCZdxyjHg04jNIqIE/0MBNjEU8f/YTMRhALp6JmKciW4IIyMjPDBZiPEKsjiyZqwGMEIV4LMVGTAxUAiY8EmCbMVlM4oBjIyMjLj8TjT4T4IBOFMkrniHAVBqzdj8mrBFyKkNBkhJ6iQBAB8qi6NfRmNgAAAAAElFTkSuQmCC",
            name: "True Orbit",
            description: "Makes a projectile rotate around the caster like an orbiting planet",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/True_Orbit"
        },
        {
            id: "BOUNCE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAS0lEQVR4nGNgGAUkg/9QAOMz4ZIgG/zHYQhJhv9HU0yWy/5DNRHSzESyyeS4gqYuYCwvL6co6ljOnDlDkQso9gLT3r17GcnVDNILAMXaNRwTMnRdAAAAAElFTkSuQmCC",
            name: "Bounce",
            description: "Makes a projectile bounce on impact",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Bounce"
        },
        {
            id: "REMOVE_BOUNCE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAV0lEQVR4nGNgoAX4Hxn5Bh+fJEP+k6MZBqii+T8lzsfG/w8FcEmCEqSq+49DkhjDcSomSTO6JkKamRhoCf4T4XQmSi1hLC8vJz2AkADLmTNnKHIBxYEIAEarUCWHXRGAAAAAAElFTkSuQmCC",
            name: "Remove Bounce",
            description: "A normally bouncy projectile stops doing so",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Remove_Bounce"
        },
        {
            id: "HOMING",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmUlEQVR4nGP8//8/AyWACZ/kjcJCgqYzYnPBGVdXsCCPjg7DlytXwGImu3czkuQCE6gGXBpxuuAGkrM1+vsZ0fkYJvz//x8Dn3Zx+Q+irxcU/EfmY8NMuJwGCwcYDbOOKBf8h2KYCzDxP7g4I03TAX4AsZkJmUMaYGREMoCRkTSDEOoYaRAG+EzElMNiADbvwNgwOSTVlHoBAH1mnG6Sf1bBAAAAAElFTkSuQmCC",
            name: "Homing",
            description: "Makes a projectile accelerate towards your foes",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Homing"
        },
        {
            id: "ANTI_HOMING",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9klEQVR4nGP4//8/AwxfLyj4j8wnBjOCiDOurv8ZGBgYeHR0GL5cuQJiMpjs3s3IQARggjFgGojVCAOMIGfDOBr9/Yw3CgtR+ARN+P//P8NpF5f/yGEA4xODmWAGwcIBRhMN/lMjFrADkAQjShjEW0vAFS88+gIi959Im+KsxP/ff3EAjI9fn/QfxCfgAoQrQDY3rlvJgAxevL/EMD25FRGI2AGqF0AgISUWrLmitBvMZ8JvAKbzFsxZzLBs9UKGju5SYgxgBLsAFGD1QeFgm0HAyFIBrgLJAHTbUPkgQ0B+Bhmyv/4IsjL0EP+HNy3AQp/IWCAMAJYqPGsZEfCLAAAAAElFTkSuQmCC",
            name: "Anti Homing",
            description: "Makes a projectile accelerate away from your foes",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Anti_Homing"
        },
        {
            id: "HOMING_WAND",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoUlEQVR4nGP4//8/AzLWL5T6jy6GDzOACSiAaP73H0TDxIg2QB+qGYZhhpDkgr4jX8CaQTSxLmCB62ZgYFi4Vo2BgeEWlCYS/EdyAQjUbxdHESDkAiZkxTB/IwciunVYXaCPpAHZBbijFBTQWGKhHqoZRJMUC/9hHJLCAOIKRvRAJBUwERVQeNQw0sAF+FyBKY7DAEZGVA0wGiaOpJJSLwAAvjxEuowNijEAAAAASUVORK5CYII=",
            name: "Wand Homing",
            description: "Makes a projectile accelerate towards wands",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Wand_Homing"
        },
        {
            id: "HOMING_SHORT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbElEQVR4nGNgGAUUA0YQ8f//v/8MDIyMeBXikGaCSUPo//+xaQTh6wUF//EYAAPYrTnt4vIfmcZjAKYrQDbz6OgwaPT3M4JodJcwQrRgcx1IkBEEwDaDNH+5coXBdM8evGGFE+AKg1HAQDkAANJwJZqt4zVfAAAAAElFTkSuQmCC",
            name: "Short-range Homing",
            description: "A projectile flies towards targets when near them",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Short-Range_Homing"
        },
        {
            id: "HOMING_ROTATE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApUlEQVR4nKWSsQ2EMAxF49QMcgUlI8A+MAkDMQKUkY5B6P8JhJEhdkJ0lizLH/z1YpkAuH/Cpz6uw5B1J41g6bpDrOrabSEcWjNNVETQnAPWoEmwCuzPONKzjxwARDm3Lfb67XvIXktvofEeuJoBw1kSiOS4NCq8g/1nen0HSkRL9GdljOKz9MI5wisxcMqwRXPTUztgqufwTU8ZaE/i/tJzBNn4AXTNj4GwJYihAAAAAElFTkSuQmCC",
            name: "Rotate towards foes",
            description: "Makes a projectile turn towards your foes",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Rotate_Towards_Foes"
        },
        {
            id: "HOMING_SHOOTER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjUlEQVR4nGNgoBVoDFn6nxh1TLg0H729mShDmLAJvvx6n+Hao7NgmiwDxLkVGfws4sE0yQZkebaAnQ3TDOMTBbKgintrbf7DMLL4////MAxjxGYQLPBAYTBtew2GGpBBjIxMYHEWbAYQCjyYZrxhAAO4wgDDO/+x+I8s8J8Ig6hmGQOpNpBsM0wDTZ0MAMiQWSOQB/4AAAAAAElFTkSuQmCC",
            name: "Boomerang",
            description: "Gives a projectile a path that curves towards you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Boomerang"
        },
        {
            id: "AUTOAIM",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsElEQVR4nGP8//8/AyWAiZACRkZGOL5RWPgfmQ8CLMTYctrF5T8623TPHkaiXAADMA0wGgZYGAiA6wUFYBuv6+j815wwgRGZD/IhAygQ8WFkZ8M0w/ggeSYGIgFME3J4gMF/Ai74jxTPMBcg62WkZTr4T6kBjOQa8J+BBMBCrM1rLC0h8c7A8D/k+HG4GmQDYAoYFi1aBGbHxcXB2VxQzegWIHsBWQIbG+4CFOdSGo0A1Rt7EmUovPsAAAAASUVORK5CYII=",
            name: "Auto-Aim",
            description: "Makes a projectile turns towards the nearest visible enemy",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Auto-Aim"
        },
        {
            id: "HOMING_ACCELERATING",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApUlEQVR4nGNgoDX4//8/HF8vKPiPzAcBRmIMOOPqClbNo6PD8OXKFbC4ye7djIyMjAxMxLoEpAGZhgFGQhpBzoaxNfr7GW8UFsL5mhMmENQP9sJpF5f/yGEA44MAE7FegIUDjAb5Hydw3v/q/5IX/+EYWywQ4fR//0EYZgAuwIRLgpGRiXAA4XM6A5IYSYb8hzqbZNsZ0FxCsgZ8thIV6iTbSi0AAK0pkGq0ZgwQAAAAAElFTkSuQmCC",
            name: "Accelerative Homing",
            description: "A projectile homes towards enemies at an increasing pace",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Accelerative_Homing"
        },
        {
            id: "HOMING_CURSOR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvUlEQVR4nL1SWwrCMBDM9tuDKPRTb9Depz1Je5/2BvpZ0IP47coERteQTYuIA2EfYZfJTEL4BVQ1HpvjXLtObZ2DcCgWIjG/tG1s7Oo63Jcl3h2nSXCfovJYYcBGD5IyAG1e7odBbn3/qg/jKJs0ODeNWg1Y51B51KgD439cKCHnQPEJHqzIZoGuUqCYyBnNApG1RbATHwtWIpKJcPsWwBH+ztM8v0WxSqs+PpRP+6kGBQZo4mmMZshx5Cs8AeOfvfuGeIBbAAAAAElFTkSuQmCC",
            name: "Aiming Arc",
            description: "A projectile rotates towards the direction you're aiming",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Aiming_Arc"
        },
        {
            id: "HOMING_AREA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvklEQVR4nGNgIBL8//8fjK8XFPyHsUGYEZeGuRf/T4Wxk/QYss+4uv4HsXl0dBi+XLkCFjfZvZsRq0ZkzTDbT7u4/Ed2AYzPiK45WZ8xG91QkCYYW6O/n/FGYeF/vE5GB/hcwMRAAoCFA4wmynYQQA51mAuwGvAfTQbEx1SNqocJRCTpMWSBaEZGRkYcBqFgZMAEIuZdYpiGLAgzCErjTCtYnUSqWiYGaoK5RLiCoBpsSRmfOFGZCQSwJXGqAADMfq5j7SeTKgAAAABJRU5ErkJggg==",
            name: "Projectile Area Teleport",
            description: "If a valid target appears somewhere in the proximity of a projectile, the projectile will teleport right on top of the target",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Projectile_Area_Teleport"
        },
        {
            id: "APOTHEOSIS_HOMING_DELAYED",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiklEQVR4nGNgoBAw4pI47eLyn0dHh+HLlSsMpnv24FSHUzOIvl5Q8B+ZTxQ4jaQYZgA+QxjRBabp68MVOjo6oshpTphA2CunkWxCNowsb0yDGgDj////7z9JsXD69WsGU1FRjFgAGcTIyERazFAd/MfiHQasgnQH/4lwBVEupZp3kA36//8/9cMIAPZ+Ub94c5nEAAAAAElFTkSuQmCC",
            name: "Delayed Homing",
            description: "Makes a projectile accelerate towards your foes after a short delay",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Delayed_Homing"
        },
        {
            id: "PIERCING_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0klEQVR4nKVTMQ7CMAy0Iz7A1hE+wAATGx9BYujKiMTMysaLurGzMHbNxhOMnNSRm9SkEielSuK780VpAP4E8oeIADFMf4J5IzEiOJnkxclusQkTE9npomVCA3Tq2TEZY32ErBdGTOh9Fxj+8+I9HEy4SLwWnssNtJjRLDfwfD+CSM6u0zjZkKFxao8hwfVyTwH1zZnofUcyzrcdcQJ99iJBjnVzQO7M2O5XRd38Zyi6J3vprBNUQVN3phpUxVAhSq3gWF0tE6HXX5CRIIhnPMAqvkqNmTraEC9iAAAAAElFTkSuQmCC",
            name: "Penetrating Shot",
            description: "Makes a projectile penetrate 5 times",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Penetrating_Shot"
        },
        {
            id: "CLIPPING_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAVUlEQVR4nGNkwAOmexv/33HmAU75jS/fMjIxUAD8xYX/U2QACDCNGsBAlgEbXrwBY7gB/////4+NzthyBq4BmUYGjJQkJLK9gAyYGCgETCPcAFB2BgA1yieDTmP9mAAAAABJRU5ErkJggg==",
            name: "Drilling shot",
            description: "Gives a projectile the power to go through the ground",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Drilling_Shot"
        },
        {
            id: "DAMAGE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAdklEQVR4nGNgoDq4Gxl5NzISzmUiVT8jfrPRRJSXLyfZBnL9MMHGfIKNOVYGGmBB5gQoyKExIO5mwNRw4MlzNAYuwAKxHVkIvx4m/OZht4EB1WAHGUk8lqB42kFGkqAeaExjDUEGBoaCIyfRRKB+wJTAJUgyAAAsoSqailzTEQAAAABJRU5ErkJggg==",
            name: "Damage Plus",
            description: "Increases the damage done by a projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Damage_Plus"
        },
        {
            id: "DAMAGE_RANDOM",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8klEQVR4nGNgoBAwEquwftmJDWCG0luGRgvvAJJs6ao/seE/Eqg/0QYxjBhwAKp554n6DdOhGNkQJkIGcDBcg7MzLRrhTtdm+Em8F3aeqIc7uf7EHLALTuxDiIHBBBvz/yCMj12/7wSGZiYGNBCgIPcfGxukucHR3P/k/IYXFk4Ir7DAGAeePGfAxoaDcwzmDI4MDAwPGU4iC7PAnImuHt2QxhILSfXPJzZENSJsx+oFXGBZ/YkNkQ3m/ifq56EEHgsuWx1kJFH4UY0WAQwMIBckBeA0gAGqEb8hqACeF7CFAzIoOHISa76BhwEuBYTkKAYAszGKf50qIKgAAAAASUVORK5CYII=",
            name: "Random damage",
            description: "Randomly increases or lowers the damage done by projectiles",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Random_Damage"
        },
        {
            id: "BLOODLUST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLElEQVR4nGNgoCb4r2XzH4ZB/NMGBtdgbJg4SAynZgYkgKwQXW66llYzjM0CY5xh+3IdRB91gSg23XOEEcZmhLJvfPvOkHzsLKMJG1swAwNDLUiOCW7Ar19rYWyQwgA5GbAGEACxQbQGFyeYb/KLRxPFBacNDK6ZXrigBWKvffYa7tSrH76AMT7AgmwizMkQIMqAbiA2wITsf3QA8sK9L1/hbPTwgrvgDJL/kW0FaS5VU2DovvUAxWBk9UxgL0BCFcWWYClRsGYQANGbn7yEGwxTjzDgFyQMQFEEMgSkGR2ADNEW4MGIBSaYn2CJBWYItvAAyWELKwZQykJOwvgAcvIGAXhKZLx2hBFdEuQyUICB/Ax39i/csQZP4yCDkPMCjA2jkfMCToBNETaNAIvvteckj54PAAAAAElFTkSuQmCC",
            name: "Bloodlust",
            description: "A projectile gains a hefty damage boost, but is also able to hurt you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Bloodlust"
        },
        {
            id: "DAMAGE_FOREVER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7klEQVR4nKVRMQrCMBR9ldxBSCc38Q4qVIQuju6OnkD0BtLFK7iKY5aCGFBHD9DRKQVPEfmlkVgT2+KD8F9+/vv/kR/AATWbDQ0PhbjV5T9ARTrLNJ37bqeNiCLdzZvJs6qYJ8k1X61SAHsO9PIouipgRJFLucmlfABYUB3lGdzYh0IciqbAuBSnoRDbchCF+MuBhUVZRA5iLmXhQAFrAIUD+KBa/kFghMfpWFOcny6Bj7u2wKoOloO+dnFbZIMZclZPuHgdmG3fRtMmncajfjlwTZ2E3UYuWDVBwjZNvtboA63RlX//ga+g7u1vvAAgXZsGKXuyNwAAAABJRU5ErkJggg==",
            name: "Mana To Damage",
            description: "If the wand has more than 50 mana, all mana over that is converted into additional damage",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mana_To_Damage"
        },
        {
            id: "CRITICAL_HIT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwklEQVR4nGNgGLTg4sWL/0GYkDpGfJKLFy8GG/D06VOG44cPMijLSjP0zZiDoocJnwGxsbGMMM0gIKagguJCgi4AAX9vT7BCS1t7hqBv38BiJ1VVGcxv32ZQa2pixOuCoowUuGZpaWkMzSA+Ez7Ndx8/Zdi4dTtjRUUFI7Lm0ydPwtUxYdN8YkM7XDOyuJ6eHopmnDb7Q/2NHGC36ur+L3V3B4vDaKw2+6NpRgY4NeKymWgDijJS/sNCnKYArxcGDAAAoCZmghRVpm0AAAAASUVORK5CYII=",
            name: "Critical Plus",
            description: "Gives a projectile +15% chance of a critical hit",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Critical_Plus"
        },
        {
            id: "AREA_DAMAGE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeElEQVR4nGNgGAWMxCh6M+//f2S+SBIjXB8LMZpPbD8bgS4GM4SJVM0gABKDuYoJRPz/j+pEdD4IeK8yXgHC6OJMIIKREeIcmEYQH8bGpgkZsCBzYAbB2CBnbg2DeAFGY3UBLgAKKAtPTBeAxGCByMhAYTQyjAIGAH9KP5cryxq4AAAAAElFTkSuQmCC",
            name: "Damage field",
            description: "Gives a projectile an energy field that constantly deals 3.5 damage to nearby creatures",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Damage_Field"
        },
        {
            id: "SPELLS_TO_POWER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsElEQVR4nGNgIAH8t3H5T5HClSLSJ4g2bCWSYhiYKqtUgE+eAZ8GZD66OF6ATTFJBqBrJEvzVFmlAlCg/U+ZDMZYDbkqKAkOVZAkiA3WYOPyH0UzDCAZwgQLUe33zxlBgg5fvveD2NeuXgUbnCWv1I/PdYyEnA4yUEtbGyKg4Q+hb2xkYDyyh5GgAcgA2d/Zj+9NYKBLNE5FUoiLjROgJ1V0TXiTMnpGwaaY6JxJSDEAentr4WwmRoMAAAAASUVORK5CYII=",
            name: "Spells to Power",
            description: "Converts any nearby projectiles cast by you into extra damage",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Spells_To_Power"
        },
        {
            id: "ESSENCE_TO_POWER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABfElEQVR4nGNkQAPbdh38D2N7udkzMhAALOiaK5smMrjYmTLsOXQazEc3BN0CFmTJvQeOMbTX5TOADAHRID4ykDeYnAsSAxkOsgTEZ0JWsGYbTx7MEBC9dJvZRnQng8RAmrHJgUFxVft/kMkwmgELkDDYu4GBWCCPZAiIDcNEGwACIA1+k3/+n/vuPxhrZxyGByQcKPncPAuite235hrHPD1rXn71P0gTSDOIDdIIAyA2zBVMMD/d26JuDNLMIWuQcHaJtPGfpwLnXj65w6CfnDZJXEaFARdgJOR0EZ2gBBbpD0YgQ/yj2cDiG5f+YtiUyw7Wy4Ku4SeDljM7w7W9Dy/kTgaJgVwDk7t5Rm4SiH1zoT/cYkaY5PQuPbAkCGSWXcoDGfTignMAssHzulj8YWpgKZQJJgBKfTAa5gpk14E0I6uBJWm4AaDUhUzDvAADuJI5OAxAitcwgNQfmwRKzuwM11ACEybv7MAwCWZBb1slwZyKAUDJG5kGCQIA/dPRq4hUeP8AAAAASUVORK5CYII=",
            name: "Essence to Power",
            description: "Increases a projectile's damage based on the number of creatures nearby",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Essence_To_Power"
        },
        {
            id: "APOTHEOSIS_KINDNESS_TO_POWER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABa0lEQVR4nGNgIBH8T039j0wzIks+cXUFC8rs3s0IYksrKDAwzp4NV7NLReW/lqIiA0gcBpiQJUE0SBJkOkwRzCYQuMn8O+/a/fsMTx88APOnHNqVBzcABmCSuPgsDF82ggzZv3/zRgwv7II6EeYSkGaQd9At2aciscHpzosAFC+AgNudO4wg00Fg9/79YM2T1eVzwQIMDAwgNghfZWbfy4AP7IKGB7LGn/75///NuwnGh7U9UOTB4JaS2lkQvdVUO/eJicXZq+ah/0GawDaah4I1wgCIDXMZC8xPanduGYM06//nTZA5c8L4iQnD2TsvGIzSNAImMeABjPgkQbYE8komfGSWNVKRkGJg9c8Ci//eOI2BfeNERqwa9qlIbIA5Dz0AN6o7/gdhrBr/IyVRmEHoBmNzJROIUP/LOgkU5zBDcuzcJqFHFSzesRqAnkRBqSz35sPJyAphUYuctDG8AVIESyy45LFqpgQAAMGHyrKLGMtnAAAAAElFTkSuQmCC",
            name: "Kindness to Power",
            description: "Increase critical hit chance proportional to how many charmed creatures are nearby",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Kindness_To_Power"
        },
        {
            id: "ZERO_DAMAGE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzElEQVR4nGNgoAa4Gxn5P0BB7j+x6kFqQXowBAKIMASn2gAiDCGoJkBB7v8JR8f/E2zMwQpANDIbJIeumQmZs+HBI8YTv78xWLBygQ1DNhgkBpIDqUHWw4LuigNPnjMcYGBgqFBUZui4fxcsBmKDNGMDLMgcmHNBAKQBpBEEQAY5yEhiNYCJgULAhE0Q5A2Qn0E2I7uEaAMqoH6GORsWsCCD8RpwAGoztgADifVaWqPEDooBAQpy/0EKYCGPDRQfP4rVEMqTMsWZiRIAAA2/iEYUOikhAAAAAElFTkSuQmCC",
            name: "Null shot",
            description: "Increases a projectile's duration dramatically but removes all damage & explosion from it",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Null_Shot"
        },
        {
            id: "HEAVY_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAeklEQVR4nGNgoAW4WVZGmoYPJ0/C9TDiMVU8OBhZ5OXatepdXSTbQBS4ial6jovmHBdNrAw0wITM8VIQRmNgAhYIte7OKzQGPg1zUK3Gr4cJv3k4ncSAZHCQihgeSxAaIEoJ6oHGNNYQZGBgSNlzHU0E6gdMCVyCJAMAJm8xtGV/N2oAAAAASUVORK5CYII=",
            name: "Heavy Shot",
            description: "Greatly increases the damage done by a projectile, at the cost of its speed",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Heavy_Shot"
        },
        {
            id: "LIGHT_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAfklEQVR4nGNgoBfInn3zPzJNMph9/P9/sgzJnn3zP0gzDJPtktmUaAYBgpo1Y+b8B2F8bGyACV2AXyfgPzY2LsACYzy7sIUBG5soAzSxOJFYQ5iItgqfC7DZKmXgQ5QrWNAFQBpJMYQRxsAXVSBwfUkKXC0ygIcBLgWE5CgGACBEWnS4qPcGAAAAAElFTkSuQmCC",
            name: "Light shot",
            description: "Makes a projectile move considerably faster, but deal less damage",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Light_Shot"
        },
        {
            id: "KNOCKBACK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAs0lEQVR4nK2Quw3DMAxEySCAkUJ1eneZw95G0DRBtvAI3kMzqE6hxgADkYZMfQyk8FWUfdS9E8DlIiJ9vP1j0kJoRESIWK0hf+kkaHc2gVruJLQm4ITiiuht9LbrprLPXdzDOPEAj9fnDIx4rjt8309dse2GGSn/29bFuBC9lTQocxKSSKiS5sQ2jJMQUvlcaUEwtLZ1gXnvU+GlDsaFasG4kHkq7Uhy5TFzq7Odo3HLdoF+sc5hVvDLNAMAAAAASUVORK5CYII=",
            name: "Knockback",
            description: "Gives a projectile the power to knock back the foes it hits",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Knockback"
        },
        {
            id: "RECOIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAXklEQVR4nKWPsQ3AMAgEgSUyJONkD6/DICmQG3+k2FKiNM47VyLuH0T+AGC6Y2yoveKnJfb9mFsAoKpjwMiCC8LBYzvDiR5Z5ti3FS3DCZN4ptOzM7zVQmitFk5Y5wQ9TTmSuYLkZgAAAABJRU5ErkJggg==",
            name: "Recoil",
            description: "Increases the recoil when casting spells",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Recoil"
        },
        {
            id: "RECOIL_DAMPER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAi0lEQVR4nGNgGFTg82Rxexj7+/n4+WQb8J0EzUzImnlzXx5Elvz///9/kmxGt51oA3BpBoEjm+f+J1szDCzrLv5PtAH/oc6+f34n6YagA5BGkEEwNrYYYmIgABQN3RlBhjAyMjIykAvuQ12BLX0wEWMAyBXIfORoZyHGAJjNnIYLE4lRjxcg204VAAD1OXZoX+QqsAAAAABJRU5ErkJggg==",
            name: "Recoil Damper",
            description: "Reduces the recoil when casting spells",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Recoil_Damper"
        },
        {
            id: "SPEED",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAQ0lEQVR4nGNgGKygZ/9PIgWh4P///5jSWAWh4D8YoEljFUSRQ5PGKoguhyyNVZCJgTzwnzwn9ZDk6R6SgpXkiBtMAAAA1YhrMG72ygAAAABJRU5ErkJggg==",
            name: "Speed Up",
            description: "Increases the speed at which a projectile flies through the air",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Speed_Up"
        },
        {
            id: "ACCELERATING_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYElEQVR4nGNgGDlgxc+e/6Qo3oMu9v////84DVnxs6cSTfESdENABuA05P///8XIhoAMQDcEZgBWQ/7//1+MbAjMAGRDkA1ANoSJgRrgP6VeWEFpIFIcjQxEAIo0D24AADB2rFWe6EcVAAAAAElFTkSuQmCC",
            name: "Accelerating shot",
            description: "Causes a projectile to accelerate as it flies",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Accelerating_Shot"
        },
        {
            id: "DECELERATING_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXklEQVR4nGNgGLngVaDVd2IVnsCm+f////+xKZ6Mrvn///9LsGnGMOBVoNXk////F6NrRjYAWTOKAa+gmmEGIGuGGYCuGWYAEwO1wCtKvECVQKRKNDKQAIhOSIMfAAClEp3LCm7+tAAAAABJRU5ErkJggg==",
            name: "Decelerating shot",
            description: "Makes a projectile decelerate as it flies",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Decelerating_Shot"
        },
        {
            id: "EXPLOSIVE_PROJECTILE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzUlEQVR4nGNkwAOmexv/33HmAU75jS/fMjIxUAD8xYX/U2QACDAhcz63c/+nyADeyq+MMPb3w/5gwzxMFMD8JQU/sBrAiM90kCGcthsZQYEJ4mMLUBZ8GpFdAgYdmIYw4nXB83aE5jsn4Mw/R/YwxEzgQLjg/////xkZGRmR6R9HArAauqDjCcOOMxDN8EBkZGRkxEYj2w7SCMIJFTLEeeE7kt9hGiNCjmCoY8KmGZQeYIEIcfIDsGZsUcmIywUgQCgv4HQBKWBgDQBlZwCV+F9ocyn0FQAAAABJRU5ErkJggg==",
            name: "Explosive projectile",
            description: "Makes a projectile more destructive to the environment",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Explosive_Projectile"
        },
        {
            id: "CLUSTERMOD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEklEQVR4nGNkwAI+t3PXg2jeyq+NMLHp3sb/d5x5gKJu48u3jCzYNLPYuDQwqFgwfGZoQTEEHfiLC/9nwiqjYsHAcOcEAzGABZuzQTajewGvAZ8hmhtYbFwYPrfvQdH4uZ37P2/lV0YQ28NEgQE9HJjgJtm4MPw5sgfDBpjmhAoZsGaQISAMA4zYvIDNqd8P+/+HsRd0PIG7hJGQH+GaQQELA3dOMESEHEF44f/////x0fgAE9gZjIyM+GgUcOcE2AsoBmADoNBHEQClC6hm5JhggiquhwUiTCMs9EF8TtuNYDa6ZhBgwZIG0GOmAZdmsAFgAksaQM8TSyCBjmkAOOm2QzRjpAEi8gTedICcuHBlZwBP754gjca0cgAAAABJRU5ErkJggg==",
            name: "Clusterbolt",
            description: "Makes a projectile release a cluster of explosive bolts upon hitting a wall",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Clusterbolt"
        },
        {
            id: "WATER_TO_POISON",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAr0lEQVR4nGNgQAIySYv+M5AImJA5ogqaDBQZoCUvSr4Bhk2n/yPTZLmAHFcwwWyFabTTkyfJFUzIHJBmmCv+//+P1ZB0k7XYDTdsOv0/euEDMIaJwQz58LANLtbujpAnCvwHgW8H4Jo2RKIawIRPM9jm7wcZGDjtUWxHdgULPgME5KsYsYlrChHpAmQAshWmUV5TCu4KJhRVRACQZhCAGYbVibgAsisCliuQpJd2AAAaIUhNAl/NgQAAAABJRU5ErkJggg==",
            name: "Water to poison",
            description: "Makes any water within a projectile's range turns into poison",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Water_To_Poison"
        },
        {
            id: "BLOOD_TO_ACID",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR4nGNgQALlQkL/GUgETMgcUw4OBooM0FJVJd+ANVJS/5FpslxAjiuYYLbCNCqFhZHkCiZkDkgzzBX////HaohtnxZ2w9dISf2/Zm8PxjAxmCEfHrbBxVL36ZMW1f9B4NsBuKZJDyL/4w1EZAC2+ftBBgZOexTbkV3BwoAHCMhXMWIT11XSYmBguEjYBcgAZCtEIwODvUwS3BVMKKqIACDNIAAzDKsTcQFkV+QpLCdJL+0AAMcbRGtRlPKBAAAAAElFTkSuQmCC",
            name: "Blood to acid",
            description: "Makes any blood within a projectile's range turns into acid",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Blood_To_Acid"
        },
        {
            id: "LAVA_TO_BLOOD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvklEQVR4nGNgQAKnPfn+M5AImJA5EhoiDBQZIOWtRb4BjwuV/jPpuYFpsgyQgtpOqiuYkG0HC5DoCiYY49+lXXBBkCv+//+P1ZByISHshj8uVPr/d48PGMPEYIZ8eNgGF1sjJUVaVP8HgW8H4Jqu2dv/xxmN6ABs8/eDDAyc9ii2I7uChQEPEJCvYsQmrqWqysDw7BlhFyADkK1gjQwMDEphYXBXMKGoIgKANIMAzDCsTsQFkF2hdfAgSXppBwBr00oQBfEOhQAAAABJRU5ErkJggg==",
            name: "Lava to blood",
            description: "Makes any lava within a projectile's range turn into blood",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Lava_To_Blood"
        },
        {
            id: "LIQUID_TO_EXPLOSION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVR4nGNgQALKxln/GUgETMgccRldBooMkFU0IN8AK//p/5FpslxAjiuYYLbCNOrp62G44nM793+iXKCnrwd3xf///+GaeCu/MhJ0ipX/9P/hBcfBGCYGM+TDwzaiXYQBQIb8/3bgPy7NjAx4AMhmflErBgZOewZGRkbG74f94Zo5bTeC9TIyEAm+P29H2HznBJzJgksDyKksNi54DQW5gpEo20FOV7GA2w5zPrKXUGzGZgAM49SIC8AMRNdEUlTiAwAE32GAL0gBrgAAAABJRU5ErkJggg==",
            name: "Liquid Detonation",
            description: "Converts nearby nonmagical liquids into explosive gunpowder",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Liquid_Detonation"
        },
        {
            id: "TOXIC_TO_ACID",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR4nGNgQAKpfVr/GUgETMgcLQNWBooMMFDSIt+A/n36/5FpslxAjiuYYLbCNGrJJJHkCiZkDkgzOa4AA5Ct+x9EgjGI////f6yuMCpXIj6M/kMN+fCwDa4pfKnGf7yBiAwYGRkZQYbwi1rBxTRl1RmINuADyObvBxkYOO1RbEd2BQs+AwTkqxixiUNccYOwCxiQAMhWmPNFRVXgriDaABgAaUa4goEBqxOJcUWD3UaS9OIEAJL7QXfjUHlmAAAAAElFTkSuQmCC",
            name: "Toxic sludge to acid",
            description: "Makes any toxic sludge within a projectile's range turn into acid",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Toxic_Sludge_To_Acid"
        },
        {
            id: "STATIC_TO_SAND",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlklEQVR4nGNgoAb4//9/339U0EeqAf/x8fEBJpJsooUBLFC6H83Z/QwDDv6TEJAEDfnwsI18w/6DwLcD5Bnw4WEbWDOyd2Z3pZPvmtld6f9rMvz/IxvEQqzmrcva/yuoCTIwMJwH81PLZjKCaKISEkzzsX3nGaRkFBhgriDKgCRf+//PnjwAa3547wUDyCBLOwsUQygCAJklYlxZ/OJhAAAAAElFTkSuQmCC",
            name: "Ground to sand",
            description: "Makes any hard, solid materials within a projectile's range turn into sand",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Ground_To_Sand"
        },
        {
            id: "TRANSMUTATION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAATElEQVR4nGNgoBa4vOU/HJClmQEPn2jw/////2RrBgGKNKMDssLiP5omGP/DwzbyXfYfBL4dIM+ADw/bwJrJ8g42MJpWqASoFiMwAADCHWEXKQ7oCAAAAABJRU5ErkJggg==",
            name: "Chaotic transmutation",
            description: "Transmutes various liquids and powdery substances within a projectile's range into something else",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Chaotic_Transmutation"
        },
        {
            id: "APOTHEOSIS_LUA_SHARING",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABWUlEQVR4nKWRPUsDQRCGFysLW1ut7P0L+VNiN3sIzlkr2siBIgdKhBM0kOaKgLKEVGpxCTEYEzCFH4XFHNeczO7d5b6UoA9ccbPzvrPvrBAJ4CtP/BXwlRfHcVxnAmq3UlPgVIdBjfhIgTa+UODlxVyrNakD1M1iN/gXb0gS6UCC+/Mi63ahIZxKHJLkXEhN2S7lNeJjk9ufn2Ug9Y3YnZsUXiaZPLnfCUaEkvuKN+ihdME0M/SBWUM6kdDR5szjrBvgYc7EBeVFnSjeb02CpEdyLK5r8RRTsUyf8GXWDQhHRROh41xlk6L3Tnxy12NTXaOxuRnvSEdtlqKknKHeRWbE+HuDLz5Dus7qhGPJ31KmTFht2JvhrS0GdmjZn6HlP5/2G1sbK8qB13XxoHvs8NJa3l4DIZ6K4vR6+adkFJh/JFdSy+wE2yQJh9UYZXGZcyRtwga/9S3MN6KCTBxq9XLWAAAAAElFTkSuQmCC",
            name: "Magic Inebriation",
            description: "Wildly diffuses the magical properties of different projectiles amongst each other",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Magic_Inebriation"
        },
        {
            id: "RANDOM_EXPLOSION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7klEQVR4nGNggIL6fSc2MJAL6ved2PD/////MEPql53YAMYntmI19ET9PEzxeqjmrnqIYTBQf6JtA7pmkDhWQw5ANe88Ub9hOhTjMgTGZkKW4GC4BmdnWjQGwNjaDD9RLLJoTILLYQCQ7TB2/Yk5EOfuQ4iRHLAnKNI8r/45IbVMIGJZPVoaOMdgDqYfMpx8NFf9P7qm1xcT/sPFl0FDHt0QZD5Iw+VE4f8YmrEpRjYUFl0gDSCN/3/eg2uGGYgTnKg/AtcMUgzSDMIgg3DrYkCNRhhAdwFOQ0CaYSkRWRymAVuAEuUCZJcQNIBUAABUlOZ8N/rzNgAAAABJRU5ErkJggg==",
            name: "Chaos magic",
            description: "Makes a projectile launch a random spell (out of a limited selection) when it hits something",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Chaos_Magic"
        },
        {
            id: "NECROMANCY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkklEQVR4nM2S0QnAIAxEoziDixTcoeC4QncQuohLtNxHJA2J9NNAIK135pFItGVcrT1jjE/in6UN2niUsrz87p3OWqcvcIEufwlzztMX9QGn7IjUpFwnKdSoCIlrUUb5oQXS7EWUYnTlqXsGTequELVeo7XO5K3RopDDNWewwsTF3mMiGSzS6J7eJGAKIPNw940XnwWFTM3Dnt4AAAAASUVORK5CYII=",
            name: "Necromancy",
            description: "Makes corpses of creatures killed by a projectile rise to your aid",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Necromancy"
        },
        {
            id: "LIGHT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAt0lEQVR4nJVSsQ3DIBC8OC5SeZFsgCImoHHW8DxegzRMEFnegEWoaJCi8PA4YFnxNcBxB88fwElcWmpSkuezeR8ZJiWf9ysAoQYAq3EAtA1bW1+pSUrIcwdI9vSt+vZ4sccvYySLp6ONXTUvhRqo1GTgV1bqipyiLN2wLX0XIguS4X90NFAHD7BmwdfALfPL2Ep9Jn+6pG2gMyoPLVfjtA3ElKTb4LiYbdgl6UjJmNHR1zj9+U7jA/mKVZWejtwqAAAAAElFTkSuQmCC",
            name: "Light",
            description: "Makes a projectile illuminate its surroundings",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Light"
        },
        {
            id: "APOTHEOSIS_HITFX_AFFLUENCE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvklEQVR4nGNgGHTg/////0lRz4Qh8mY6SRYywhi3Vob+F1NTg0vwy0gzMIpmMX44X/1fwLAVro4guLUyFKcXQIYRNOBYgRZY0f/X0/6TGy4oAGQQyGZk22GWYA9ENM0fnzwFh8erW7fgLrGacA0eJowMOAAsUPkNWhg+XqjBCFy8LjhWoAWPkdurwsCaYK4AuQg5oBnxueDN8asMWvGBYI0gAOJbVueguIABG8AVXSBxkMHIgUgQwBTjSx8DCwCa8GqyOZRRYwAAAABJRU5ErkJggg==",
            name: "Affluence",
            description: "Creatures hit by your projectiles drop extra gold",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Affluence"
        },
        {
            id: "APOTHEOSIS_HITFX_HEX_WATER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7UlEQVR4nGNgoBAw4pJYf//Vf2R+oKIYTrUYGtE14xNHAQQVYFHDiCwBc2b6jDNgRa764iiaQyxlGdHVMsEk1z14wwDTfPb8RYaNM2rhGnMy0xg6FuxiWHP88X9ktXADYvdf+7/YUQvumicn12A4HSS2++JLMBukFqQHxGbB5k8Z8xAGY0N9sM0g4J/RzAByFTbAgi4AUgjSDDMIBkBi2AxhQhc4MzMZ7JWZGSaMIE0gDGIjy2EYsBjJTzBXwGhkNgyghxkY6MzYSDANEFSrQ4QhBNWAFMhlVmMoAolh04wzg6Ab8mh6K3GZiVQAAIQUgr29mxxaAAAAAElFTkSuQmCC",
            name: "Vulnerability Hex - Water",
            description: "Creatures hit by your projectiles take damage from water and other wet substances",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Vulnerability_Hex_-_Water"
        },
        {
            id: "APOTHEOSIS_HITFX_HEX_OIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7UlEQVR4nGNgoBAw4pJ4cP3Ef2S+gqYFTrUYGtE14xNHAQQVYFHDiCwBc+ammXlgRUr6TiiadSwCGNHVMsEkn94+yQDTfPbCVYaemZvgGrOyChhWL5zMcOXEhv/IauEGHN008b+1Xz7cNftP3sVwOkjs3sV9YDZILUgPiM2CzZ+O5soMxgbaYJtBoCTdjwHkKmyABV0ApBCkGWYQDIDEsBnChC7QOH0v2Ct+6ZMYQZpAGMRGlsMwwBrJTzBXwGhkNgyghxkYrOqNIpgGCKpdRYQhBNWAFJQn22MoAolh04wzg6Ab0jn3IHGZiVQAAHK+hBNOn0HiAAAAAElFTkSuQmCC",
            name: "Vulnerability Hex - Oil",
            description: "Creatures hit by your projectiles take damage from oil and other oily substances",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Vulnerability_Hex_-_Oil"
        },
        {
            id: "APOTHEOSIS_HITFX_HEX_BLOOD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA70lEQVR4nGNgoBAw4pJ4uW/ff2S+uJMTTrUYGtE14xNHAQQVYFHDiCwBc+bx8HCwIkkfHxTNCrGxjOhqmWCSrw8eZIBpPn7jBkPV/v1wjYnFxQzrenoYHixe/B9ZLdyAK/X1/3UaG+Gu2fz8OYbTQWLPt2wBs0FqQXpAbBZs/vSVlGSw1NAA2wwCbY6ODCBXYQMs6AIghSDNMINgACSGzRAmdIGiixfBXrFcuZIRpAmMV65kRJbDCq5A/QQCffr6/2E0MhubWjg44OhIMA0QVHuACEMIqgEpaNXRwVAEEsOmGWegoBtSfeUKcZmJVAAAyVJ814YzyBwAAAAASUVORK5CYII=",
            name: "Vulnerability Hex - Blood",
            description: "Creatures hit by your projectiles take damage from blood and other bloody substances",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Vulnerability_Hex_-_Blood"
        },
        {
            id: "EXPLOSION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAd0lEQVR4nGNgGADwuZ2bOuo+41Lw/bA/pqLvSII49WA1kgmX8d8P+7PYuGAazIjdhuftUNadExD6z5E9vJVfGRgYWJCdy2LjglU/p+1GAh74/rwdhJCcx4AM0DwH0gBGhAOHAaYZa8hSG+ByDHo8wMGfI3uoYzUAcpk9g8rx6iwAAAAASUVORK5CYII=",
            name: "Explosion",
            description: "A powerful explosion",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Explosion"
        },
        {
            id: "EXPLOSION_LIGHT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1ElEQVR4nGNgGPTg+2H//zD253ZuOBsGmJA5yApAbBgfRvNWfmUEG/q8/T9WA3ihCrDZBBMDaeaUrGTEagA6YLFxYWBQsYCzQZr/LGgBewtmIBO6JpgEWDMOg/4c2QN3LSO6RhQNd07ANYLBnRMomlFcwIskCAcwzSCDkAxHjhkmDE1ItqEYBLUdBDhtN2IPRN7Kr4xwv8O8gARAciDNOAPx+2H//2DToU6H2YjuJZAaDC9/RgpEZBtAUQfzM4hGTkREAbhBSAFHlAZsfHRXkuQSXAAA/CGGwoqpr+kAAAAASUVORK5CYII=",
            name: "Magical Explosion",
            description: "A large explosion that doesn't damage the ground",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Magical_Explosion"
        },
        {
            id: "FIRE_BLAST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAsElEQVR4nJ1SsRGDMAxUcMkQzELl8xS0rEWTFXyuMgtD+C6NDs4RKG85TayG11n/rzcm6qu8TJ1MrLxMKJQ/+IG984GIOMVx201Ldw1m+pgL0Ba1K4LzgVMsjq8i5nw45t+pBvnItJSOCnA+4EpVBjnWUXGjW05ol4P2rQODeUXQoCqseagl6D2YZcw+hA5yUUa+DX0Rxm3nFNWdUxRhDPD9G4rwLQh+P1cM8Ef1v84TpHJlj5+UodYAAAAASUVORK5CYII=",
            name: "Explosion of brimstone",
            description: "A fiery explosion",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Explosion_of_Brimstone"
        },
        {
            id: "POISON_BLAST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA0klEQVR4nKVSMQrCQBCciM84sD3wymssBSGWfiJFKgvLFJIib0iRT1gaECxtUiZwD8hDhIxslrMyTnHcTnZ2d/YCLEOxveJ/1GlTp42E580FQKKbHE5HAKHr8zaTEMC+2knaSrKNMaHrAVjvGOpWiATymRqGvIfpFCTatK6qkbdZLIgWxekftzurWO/ExmckANVQRuOZCdY7AM/iRXKtO0ROxnGMGHx7YD1ZV+h6ysTGPJLMzSTKrHc6exZUQykWmc2TZLwVvjkpYXnXT/Yblv+dbzqXY5UdAAhyAAAAAElFTkSuQmCC",
            name: "Explosion of poison",
            description: "An alchemical explosion",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Explosion_of_Poison"
        },
        {
            id: "ALCOHOL_BLAST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8ElEQVR4nGNgoBYo8ZH6z0ArsCJX/j8IE7SwxEfq/93pNv//X0iEawCJgfggDJJD18OErNlEkZXh9LXHYL6plixc7N7x22AxJUtVsGuQDWCBMUAKYWDl3H1gA2BiMENhNDJgRPcTskHYQMTkh4xYvdCz5RlY4sz933AcnuwExjA+CIDCAqsByIaAALLfQWwQBnkL3RBGBiQACzR0ALId2QBQWMC8woSsGcYGKQQ5HQa6W9zB9PSt91A0oxgAApneSnCFoJiA+RvEBhkIcgXeQJy+9R6YDVII0wyjS2t2IutDTYnIHBAbGx89AVEEqJrxAFTwkHKrAmz9AAAAAElFTkSuQmCC",
            name: "Explosion of spirits",
            description: "An inebriating explosion",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Explosion_of_Spirits"
        },
        {
            id: "THUNDER_BLAST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAxUlEQVR4nJ1SWw6DMAxzdqJKzY3ox7hTOdGCxIEmZRKGUB5j0vyVOg87bYE/8Hy9L5kzv8DdAeScD4yvwBzv+s/DWMeUrzEAibSI5JxLKQDMrNYqsmRbPNrqlJKZAai1llK6rou6vBreFDibmKYpjn3ftwqbqLurakqJR1WlNwDDMOwstRXTDDKsJmLvTYEbm5mqmhldHfygbWBPWOLqvIxxHINcLPESODgsiYi7h7H2NY6v02reZHc/4jL1tefmR/6iTvgAct6ZgLdcUP0AAAAASUVORK5CYII=",
            name: "Explosion of thunder",
            description: "An electric explosion",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Explosion_of_Thunder"
        },
        {
            id: "BERSERK_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA30lEQVR4nKVTMQ6DMAw0EcpUqQMT6geY+FcXJgaewMDE0n8x8YGKiaESE+pQXYirYBwWLCFjO2efHYfooiSxwDJNr9C+5flTO5fGgEPXqn6ZKJGHhq5dicgG7p1d1s0uiZHge5FVHuTAwnbMwvaM6MB+xrlnEDRswYgOLSxb9dC/ysSxVlIlKdN2ko4DzfToM3pX0JKN0cCgjQ/gb1ESwAh6vWNntBn4KhYVmQGCGoOEf7Q5cOVQkKSsG8tXaZQZ/NmIyucMSGfhmIS3IBfp8BZiqwwg5HSVtUQsscd0WX7Le3zzT8ldCgAAAABJRU5ErkJggg==",
            name: "Circle of fervour",
            description: "A field of berserk magic",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Fervour"
        },
        {
            id: "POLYMORPH_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/UlEQVR4nGNgoBAw4pL4+OT3dGQ+vwxrJlEGfIRqvHf2PYq4krEgVoMY0TWja0QHIIOQDWHEofkXFr1s2AxhwaLwl4GfSB6IcWHTm0nIbHSD4C74iLAdrvnOnbsMKirKGKZDDWKDuYIJ2WYerY9gzSCArvnDkkwGhi2lDAZMnXnIXmRiIBLMmXMETPf07EARZ0Jis325xj8J5HQQhgEYOyXFhuHDhy8MJSUemAbwy7BmwuJZ5EQPA7JBID7I3ytWnGF4wNc86cK/8klKxoJssFhgQneqgAAPmN5TEAE2CMZHdimhhPQLqggrjTMhIRsCoslKytgMggFcmYliAAB5Vn4KhKmVnAAAAABJRU5ErkJggg==",
            name: "Circle of transmogrification",
            description: "A field of sheep-like magic",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Transmogrification"
        },
        {
            id: "CHAOS_POLYMORPH_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlElEQVR4nGNgoBAw4pL4+OT3dGQ+vwxrJlEGfIRqvHf2PYq4krEgVoMY0TWja0QHIIOQDWHEpjkpNzYDm+Z5kxfPQDeECV0RLs245FhwOR1mGzbNILUgPSBXsOByJjEuwuoFfJrRDQcBFgYiADaNeGOBEMAbC+heIDoM+GVYM2GpDR/AmZBggKKkjM0gZBcSdB45AACQTFJx5mR+YgAAAABJRU5ErkJggg==",
            name: "Circle of unstable metamorphosis",
            description: "A field of transformative magic",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Unstable_Metamorphosis"
        },
        {
            id: "ELECTROCUTION_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwElEQVR4nGNgoBAw4pK4//HfdGS+Ij9TJjZ1LLg0TtvwE6s4ukGM6IrQNXqZMWdsO/V3BoyfFcCOYggTPs2pPmwZ0mLMKGIgNcjeY8LmL5jNDEQAJmy2gzTDbH766i+GJmRXsGCzGdnZIHaqD8I1s7f8gocHVi9Io/kZGWBzDQu6ALIN6F5Bjg0UFyjyM2WCogeXa9A1I0clEwMRAJvNKC5gwOEKkM3ogYaekDDyAq6kDDMcb1LGZhCyC3GppQgAAJmyZvQsLzZAAAAAAElFTkSuQmCC",
            name: "Circle of thunder",
            description: "A field of electrifying magic",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Thunder"
        },
        {
            id: "FREEZE_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyUlEQVR4nGNgoBAw4pK4dP/1dGS+nqJoJlEGXIJq3HH4Ioq4h60+VoMY0TWja0QHIIOQDWFE1yyiZ5ax8toXhnAtHhSNMLE3l07NQDaECd0GAyU2sEIQja4ZWQzFBZfQnO4SYJNx4d4vsAZkGmQ7uleYsPkTpBgGYJoS9XmxhgkLNkGYUw152Rn2QOnuxXvhtiMDJmyCezYcwaoYpwF6iqKZsHhGBrhsxRsLMAByNiGDUAzQw+EKdIAzIcEARUkZm0HILiToPHIAAAVYX0oLMOlCAAAAAElFTkSuQmCC",
            name: "Circle of stillness",
            description: "A field of freezing magic",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Stillness"
        },
        {
            id: "REGENERATION_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzElEQVR4nGNgoBAw4pK49HPLdGS+HrtPJjZ1LLg0Hj1SjVUc3SBGdEUwjTJKMhnIck/uPZkBoq1tWlEMYcKmGQZ8FLaAMTIAqUH2HhMDDqChYICVjQ4YkW2HORumQYWhBUzfYagB0zceXIB7B+YVFnQT0Z2MbJCKAgPDlgc+KHJMDBQCFnQBkA2EvIA1Gi+hxYKLk08GsgF79m0BRyN6VDLhchqybdhshgEmGANkIshkdO+gBxp6QsLIC7iSMsxwvEkZm0HILsTpD0oAAE2EZQOnUwF0AAAAAElFTkSuQmCC",
            name: "Circle of vigour",
            description: "A field of regenerative magic",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Vigour"
        },
        {
            id: "APOTHEOSIS_FIELD_SUPPORT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBUlEQVR4nGNgoBAw4pLYeurnVWS+txm7NjZ1LMgc4+ZD/wssjcDsup0nGdj5OMDsn59+MCze8+U/iD3h+DmGs7V2cIsZ0TWDFMA0ogOQQTA1MEMYYZIgG2CanSRNsBqw7/kZuCGxLjyMGF7wVLdhaA7FGSwMzQymDLWrQT75BhdjhAVY3c6TWjCn43MBzCtN7ubXQAHLBJNE1gxzBYhGZsMMRg4jJgYKAQuMAXIWyGSwM1dDbIL4lwHORvYCBli858v/mlX//hMCIDWwNIHiAhDYfvMIw75JhKNRHZrYUAyYcPwcPJHsY4A4FR0gJyQYQIl05KSMnCJhGmHiWJMyOiA2M1EMAMizqfaRoW/6AAAAAElFTkSuQmCC",
            name: "Circle of Trueform",
            description: "Cures most negative status effects from targets within it's radius",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Circle_of_Trueform"
        },
        {
            id: "TELEPORTATION_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkklEQVR4nGNgoBAw4pJY9vjrdGR+lCx3JlEGLINqXHjyJ4p4vDk7VoMY0TWja0QHIIOQDWFC17wjWDADhHEZAFKD7D0mBgoBIy6nx5uzZyw8+XMGIa8w4XHqDJAhMMNwqWPC5zxkQ8gyIJ6AZpRoXEYgCmEx47H2/QzkqGQiZAPRLmAgMyFRNyljMwgGcGUmigEArRZSFxs+ZvsAAAAASUVORK5CYII=",
            name: "Circle of displacement",
            description: "A field of teleportative magic",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Displacement"
        },
        {
            id: "LEVITATION_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA10lEQVR4nGNgoBAw4pL4fj5+OjKf03BhJlEGfIdq/Lh8M4o4f6QvVoMY0TWja0QHIIOQDWHEpXkqR0WGlpYaw7VrtxhAtOO5pBnYDGHCZgtMMwjA6P1G8zKwqWXCZvvDh/fBNsMAMhsEQGphYcWEzVR5eUWwzTCNyGysLkB2OrILkDWCxAgakP2jAxxQXeIrwTRIM8wwmBg6YCQlCmGurAq8OgNnLJS9DAd7Y0ngqQzxzrdgDGKjuxLDBQyUJiRkQ0A0yCCYzTHrzWYQlZSxGQQDuDITxQAACbaDqSx0DT4AAAAASUVORK5CYII=",
            name: "Circle of buoyancy",
            description: "A field of levitative magic",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Buoyancy"
        },
        {
            id: "SHIELD_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwElEQVR4nGNgoBAw4pK4/fz3dGS+qiRrJlEG3IZq3HPhC8OVB3/AYjoKLAwuBjxYDWJE14ysER3ADEI2hBGX5oIAAQdkzRM2fDiAzRAmZEXImi88+MGAjGEGoruOCdl2ZM1vPvxhOHDhBxiD2MiGgNTCwooJ3XZsfHxyTAwUAiYYAxQ4yACZj0+OEcYA+WnChg8o4YAMDBQ44DFRECCAPRZ0oCaDFII0IGPkaKRNQmJAMgREk5WUsRkEA7gyE8UAAMCjj+1mxMqsAAAAAElFTkSuQmCC",
            name: "Circle of shielding",
            description: "A field of protective magic",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Shielding"
        },
        {
            id: "PROJECTILE_TRANSMUTATION_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9ElEQVR4nGNgoAb4/////8FlEMWuAAFi1bPgk3zR9X8LNnGJMkYfnAYwMjIywjTfPP30MUz8weurKAbDDGHCZTO65k0WHRkgDOLv3LbrMcx1TLicD7MRpnnP9HNgvnPBygwQJhgGfwOPZDxYzzADxnfJNGJ49eAdw94TFTMURLUZ1E0ZZPEaAAKvNPozhDVNGSyuszOcEPjJIKYgxMDwggEFMDHgAG+vn2YAad63ZROYz3n2HYPFB3YMdUy4DBC7UTgDZAgIXLz7nEFfWRIsBnI+coyAowwbAIUyKLSRxUCaQUDdVFoWFo04DYAZgk0cOSFRDADbWnPkvS9YuQAAAABJRU5ErkJggg==",
            name: "Projectile transmutation field",
            description: "Projectiles caught within the field transform into harmless critters",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Projectile_Transmutation_Field"
        },
        {
            id: "PROJECTILE_THUNDER_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5ElEQVR4nGNgoAb4/////8FlEMWuAAFi1bPgk+w68X8LNvEyC0YfnAYwMjIywjSf3vv0Mbr868dXwXIwQ5hw2QzTbBTIl4Gsef9014xtC3Y9hrmOCZ8XQBrOrf80A8b+5yWTEdb2bIaorDZcDRMuzauqpDKQFbrnWWYc9NVEcRFO0H7t03+HjJ3TYfT////+gzCIbbfpKpiN1wvMn3i3gmwHOR/k547rXxhgTmfa9mQGiE/QCwxQANIICwcQABmyc9JxOB+rAaAoMnWWlkUXf6n7Eex/rwQ3WVg0guMcFyAmIVEMAG9Yhr5TVwWIAAAAAElFTkSuQmCC",
            name: "Projectile thunder field",
            description: "Projectiles caught within the field transform into blasts of lightning",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Projectile_Thunder_Field"
        },
        {
            id: "PROJECTILE_GRAVITY_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAo0lEQVR4nGNgoAb4/////8FlEMWuAAFi1bPgk3zR9X8LsyCDLLLY3/cMjyXKGH1gfEZ8mm+efvoYxn/w+iqYVhDVZlA3lZaFGcJESDNII0wzDIDkQGpwGsAMdTZM488/P+6DMLIYTA0TvjCAacbGhgEmBgoBEyEF7CwcitjYeA34+54BHICgEIdphGkGiYHCAaaG6GhEBsjRiNMAmCGEEhLFAAC/mWIGqaJhmgAAAABJRU5ErkJggg==",
            name: "Projectile gravity field",
            description: "Projectiles caught within the field are attracted towards its center",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Projectile_Gravity_Field"
        },
        {
            id: "VACUUM_POWDER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABD0lEQVR4nGNgoAXoiZ3//+vt///RaWxqGdEFQAqry2pnYFMsw6OcUbI4EUUPE7rNuDSDwJMvd2egu4QJ2WaQAnRNN59eeYLMB1kAsgjFgB4cNoM0B4WIt4BoZIOQXcIEIjLrEhhwaX547wWYDzMIJj+9aQHCBdOhHGTNOQXmLVZOhgzyShJgsXVrXtaoS+vIwNTALGVCdwFMs4KaIMOxfecZpGQUGIyN/reguxCrC24+vfJEUvx9y7MnD8CaQc4HGWRpZwE2BNkLMEsZYTEAC0T0UEcGyF6ApQlGmAAoJrBFIzbQ2tWcwa0K0csEEwSZBpIgpBlkM0wzigEgAJIAKcBnM3pSxgqwZSTk1EdVAAC4o7tcB/HchAAAAABJRU5ErkJggg==",
            name: "Powder Vacuum Field",
            description: "Sucks powder-like materials nearby and releases them upon expiring",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Powder_Vacuum_Field"
        },
        {
            id: "VACUUM_LIQUID",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGUlEQVR4nGNgoBAwYhOcnyB/z8tWj2Hb4UsMyLR48mYlgga8nOt7b9bqvaexGSwjIWqauOAhiiFM6Daja7784u9OGPvJi9enfx9ovIfVgJdzfe+BFKBrvqExaS6yIR0dnadBFqEYMB+HzSDNYhJSGF5BdgkTiIhJSMLmZQaQZlUtA6xySxbMQ7hgCZSDbPs7hzVzQZqttYUYQGxkbyBbyoTuApjTYZpBAMRGDwu8LhCTkIJrBoHiABmwGFEugIGjV9+BaQtVLobeDU8Y0AHMUkaYACgmYNGIHAYgcPvaBQahAyHJuhLM7iB+RUW5KatDvRJGSvx9oPEeKJ5hhiDLwTSjp0aMpIzsEnSAbDNeAHIJyCB0mqBGcgAAN1+sWi4GJxUAAAAASUVORK5CYII=",
            name: "Liquid Vacuum Field",
            description: "Sucks liquid materials nearby and releases them upon expiring",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Liquid_Vacuum_Field"
        },
        {
            id: "VACUUM_ENTITIES",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABE0lEQVR4nGNgoBAwYhOMzZ//X9XCi+H2iW0MyHRdpDiGekZ0gablL/+f3zt5BjaDebiVMxZPTETRw4RuMy7NIPDl690ZIAuwuqAJzeZI7hu6MPbyrxqXcbmEEWYzyHRkzaaVOdYg9ov3lxgezzh0FN0QQ+fcDFCYMIE4oADCphkEJAT1GGQz7KyRXQQCoICFh8FtKAcdJKTEgl1QUdqNIQezlAndBchgwZzFDMtWL2To6C7FkMPpguVfNS6fbp9yFGQzCBhZKmA1HK8Lln/VuAwKOJAh3FsYj2IzAGYpI0wAPSZAABRwIMNgNHoMoBjAQCAVwgB6akRJiSBTQQpwaQbZjJ6UsWYmkEvQMxKIRtdMFQAA9zGXamytQO8AAAAASUVORK5CYII=",
            name: "Vacuum Field",
            description: "Sucks nearby projectiles and creatures into the middle of the field instantaneously",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Vacuum_Field"
        },
        {
            id: "SEA_LAVA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAj0lEQVR4nN1SsQ2AMAwrUT8CMXAJJ3IJA4KXABkpxYS0HdjwAHXsuIkghH9gHfujxEsewaMdJBXwZu7VlANRTZch3IJyPXueRwDAgse9mjDZ5v3VUNOFRaSzCWfm3kTCooZwoA3NBuRusLBhkhP1Zm8q9kUOqH0Fu2aawNsxtzdPAzQq8N9VA5q7aUm9n3ACSF1hgFTUd4UAAAAASUVORK5CYII=",
            name: "Sea of lava",
            description: "Summons a large body of lava below the caster",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Sea_of_Lava"
        },
        {
            id: "SEA_ALCOHOL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsElEQVR4nK1TyQ2DQAzEFuSRH32kitRAP1H6oYZUQR/88kgeG80io8GyxWMzn93xMR6LRUopXQu0qfsfAh1WeNyvhz08j2Lg6FWQ2/jdC3Ayj2LGAYHKPF1qYlmHKmYAtwEcMz7NH+nZFhdGPIopE5uYIcqrt8ZFuDOPHCkneT+7e9FUIJvg4cU0S9rkyBXX9Sxw9hX8mruDaMdsb3YD1IckIofXdQY0P1/vrbf1d/4Bk9l3meTH8P4AAAAASUVORK5CYII=",
            name: "Sea of alcohol",
            description: "Summons a large body of tasty alcohol below the caster",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Sea_of_Alcohol"
        },
        {
            id: "SEA_OIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlklEQVR4nN1RsQ2AMAxrow4VNzFzQkeOY+QEZm5C3UCuFBQht4UVD6UOsRODc/9ASuPZ4q0ewRHjcBfwtJzVlAMexzxP5UXORzFTgOsAW1O+LJsPdi3byDirCfsmOvkNhIkxxZrgXjMVtqLNqfenaTNCJNlrCL0GO5kZS01o19UIDMWAZevFUE0xWNfdf/l16IXmtaCFC/fWTrr3ktU/AAAAAElFTkSuQmCC",
            name: "Sea of oil",
            description: "Summons a large body of oil below the caster",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Sea_of_Oil"
        },
        {
            id: "SEA_WATER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApUlEQVR4nGNgGB7A3CnnPz4+PjVMIIJfWBkuAKKR+djEYHwQYAQRbqH9YImPb++CDYMBEB9mAbIYjL9rdSEjC7KzkBVi42MTY0KRVDXAEkL45ZmQJT/evoCiCMRG5oPkcRrwEaoZpgjGRjcUpwG4bEAH6IYx4ZKE2YzNVcjqWJANQHcBNj6ygXAXwOIbn1PRDYXpASckEEBOXYQASPPJfVPgeikCAMioXCIc298hAAAAAElFTkSuQmCC",
            name: "Sea of water",
            description: "Summons a large body of water below the caster",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Sea_of_Water"
        },
        {
            id: "SEA_SWAMP",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0ElEQVR4nGP8//8/AyWAiSLd1DCAAeSFxFobFH+g87GJgfhg7////59BXZ39P0wBiEbmYxMD0fr6XGADGEGEhgYHWMIqzJTh3KZzcFuM/IzA9LFVp8E0BwczWAzEB7EvXPjKiGIASBAX+PHjL1geRMPAjRs/GDECEaQAWRGMj2w4MpsJp5VQzdj4yOIs2JyJzSZcgAmbYmw24TKUCV9gIQcaNsPgBnBgcSpMDD3k0dXDwwCmCN0wXAGJ4oKLF78xYtOIz+abN38ygmhwQqIEAAAB54pINiBpGwAAAABJRU5ErkJggg==",
            name: "Summon Swamp",
            description: "Summons a large swamp below the caster",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Swamp"
        },
        {
            id: "SEA_ACID",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnklEQVR4nGNgGB4gcp7nf3x8fGqYQASvBhtcAEQj87GJwfggwAgi0o75gyU+3/gFNgwGQHyYBchiMP4sq42MLMjOQlaIjY9NjAmZA7MRF8Amz4TuNGRFIDYyH5uLmJAlkf0HY6MbitMAXDagA3TDmHBJwmzG5ipkdSzIBhCKBXRvwl2AzY+4/I3sGhAAJyQQQE5dhABI8/Kk7XC9FAEAiRFkQOvZ+/gAAAAASUVORK5CYII=",
            name: "Sea of acid",
            description: "Summons a large body of acid below the caster",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Sea_of_Acid"
        },
        {
            id: "SEA_ACID_GAS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAm0lEQVR4nGNgoBaIa/L+T4wYQVC0KAyrJrIMI9mgOCyS2FyEy5XkOzsOTSExAQrjM4EIEQVuuACIRuZjE4PxQYAR2U9vHnwFGwYDID7MAmQxGL8vbhUjC7KzkBVi42MTY0K3DRsfXQ6rASJYnInuBRgf2UAmbLbCNOMyFFkcbAC2wMIWHsiaYXrAsQACyFFDCIA0L6rbCtdLEQAAreRo6NJbs70AAAAASUVORK5CYII=",
            name: "Sea of flammable gas",
            description: "Summons a large body of flammable gas below the caster",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Sea_of_Flammable_Gas"
        },
        {
            id: "APOTHEOSIS_SEA_BERSERK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqUlEQVR4nK1SwQ2DQAw7Ij598u0uzMESjMMSzMEu/fbJE+RKjkyUg1bFDzjHji8RlHIX3tO0fVOLsF/D09DXMGxnHE2sMYDc8Hj0vRfwVg6sy+KebhwbeoCWpo+hFBfIec48hwBAhYxnNVOCUc+Q6aYi0tWEs/JsIlORIRoYQ6sBtRsiYpjVRN6cTaW+VgOuvkJc0yfIdqztrdMADQX9u66A5uc8e+9f2AEI+Hd+VZhDagAAAABJRU5ErkJggg==",
            name: "Sea of Berserkium",
            description: "Summons a large body of Berserkium below the caster",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Sea_of_Berserkium"
        },
        {
            id: "SEA_MIMIC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA50lEQVR4nGNgoCf4/3rafxggSzMDMg01hBFZUXl5OVhQTk6OQU9PDy5ua2vL+OF8NYqt/DLSDIyiWYxMyIKdnZ2Mjx8/Znj06BHDli1bwBikGST36tYtBgHDVkYYDdPDgu5UWVlZuAsuXboEF1cLX814a2Xo/zfHrzKAaJDtWA1ABsjegBkCZky4BhdjIkYjPsCEzImKivoPcj4ymDp16n+iDIiKivoP8j821+AzhAmmGZ8t+AxhwiaIHPrY+MiABZkDSgMgAAoHdE2gtIENwBMEsjewhQUokeE1AN0QZLBs2TKsmqkCALiBZ5fLWAB3AAAAAElFTkSuQmCC",
            name: "Potion to Sea",
            description: "The first flask in your inventory is shattered and converted into a sea of the same material",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAmElEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnU+kD5UA0GCv25+AjEZL2w/SbRpBp7m/+kXhujArMCVARc4NWE36QaewqEJH2AiWceogehg1EDKAQsyh02dr/HXzU//DTzNSTWnEcPAXzc/gUsNNnU+kkwC6ft18xO4pAEBxkFfYgMA53MrpPpsACcAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Potion_To_Sea"
        },
        {
            id: "CLOUD_WATER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAk0lEQVR4nNWRSw6AIAxEKeG+nKUnrhmlMBSj7IyzQFKc119KX0twmNnyoKo9WGsVVcV3GEVWgJLJ35osQhyQQ0ZEBT/DxLD2boCwcjA7zCtA5t6GgxmSY+/cZzOcMZhidqjcmRlyI29PpiHqPMBHoTIfYgk9b2mZQb1K5gp27gPwMMT0poyD19bivC5e57TaDvi3Do8UUrQFLC07AAAAAElFTkSuQmCC",
            name: "Rain cloud",
            description: "Creates a watery weather phenomenon",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Rain_Cloud"
        },
        {
            id: "CLOUD_OIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAs0lEQVR4nGNgGGjACCL+//+PIdGSFwwXrJm0lnHixIkM+fn5CI2MjJgGtCBp4lW2g6hgYGD4fPfQf3RDMAxoyQv+D9MEUoTMhxkCMxgkj2JAc24QimJ8NsMMLigoAPOZ0DUh+xOkGSYGMgSE0QELNs3IhqADkO1Q7zBihAEDkQDkMpQwmDBhAgOpACUM8vPz4aEMAsSwUcB/LAkJFwC5FtnFjMheQI42EBsWtejiyGEwDAAAQyp9VcgBKecAAAAASUVORK5CYII=",
            name: "Oil cloud",
            description: "Creates a rain of oil",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Oil_Cloud"
        },
        {
            id: "CLOUD_BLOOD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3UlEQVR4nNVSuxGDMAyVcjBDZsAFXiFjpHaT0owCC9AmY2QEXGUGZnCh3HPsi/nl0yXvTqAPejzpRPQTEJGFDVUlsHNdC+K2bSf1VYIha0IeTbA1koQiOU4puZ5ODN9aS6S1jEQhHo3hi9Zy8J46Ig71nMBlzUDXdUTG8L7v5egcI8Y7FJUSkKRvd/N95OypCTmQBOIZCjxuZTlpzknmgFIoo6iC0xIxY+U9vQN+BmXMjyk4bftbNE3z3IG1lqKsgE/8l0us4ii5D2yO2MaDwRGlg4G/lc8PaaHg/3AHa12p0LW/7e4AAAAASUVORK5CYII=",
            name: "Blood cloud",
            description: "Creates a rain of blood",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Blood_Cloud"
        },
        {
            id: "CLOUD_ACID",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9UlEQVR4nGNgGBTg////GNj3FP//mtuS/2f/SvoP4k+YMAFFHgYYYQaAgN9pgf/6glwM8vKeDF+n6YHlQIA769L/FNa5jBMnTmTIz8+HaGSESDPBFIE0Ox9rZBTZWs4IUgzSBJMDGQaSB4mBDEEGjCAC5FyQZnSvYbN5zu/k/yADCwoKUF0AAzCFIADSDBMDGQLCmy6sZUAGLCDiwJ3fDM5ImpENQQcgl4K9VwBxPSMsEPmWc8P97KDCCjYURGMDm0w/MMICkRFEgKKIGADzN0g9Shjk5+cz7LWqh7sAmV0rVgVngwKbWMvIB7zLuFBsxMYeZgAAThiHVPJrtIIAAAAASUVORK5CYII=",
            name: "Acid cloud",
            description: "Creates an rain of acid",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Acid_Cloud"
        },
        {
            id: "APOTHEOSIS_CLOUD_VOLCANIC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABVElEQVR4nGNgGBTg////GPh7r8v/H7Oj///a2fsfxJ8wYQKKPAwwwgwAge9dDv+ZRJUYmOQMGKZd+Q+WA4FsK4n/LKbhjBMnTmTIz8+HaGRkRDXge5fD/1nsgWA+SNGf0yv/Tz32Am5IBvfp/0zyJgzTrjEyguRRDPjWaPh/Fn88XDE+m3/vnfQf5LqCggIwnwlMsnLANcEUggBIM0wMZAgI/zm3AcUSFrDfH1xkYNAKh2tGNgQdzGLzZ8xU+/G/AOp6RlgYvEzh+s/KzMjw8ed/BglNE4YPt88wCGpYwmOJ4d8fBoY/vxgYWNgYOMsPMcLCgAVEgJzGoNuOGga6wRi2w/w9gWMiXIwJ5uS093P/I4c4jB1yqRLO/lav+x+UHmgDniRxgm1anm7EcCsOwr7QH8YASo0g9tlJYQzfOmwRSZDqAOQ/dNeAAMw1YDVNxtR3AQCr26jexZ9uhAAAAABJRU5ErkJggg==",
            name: "Volcanic Cloud",
            description: "Creates a volcanic rain of lava and ash",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Volcanic_Cloud"
        },
        {
            id: "CLOUD_THUNDER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1klEQVR4nK1QwQ2DMAy0q07TRyUeDAC8y4dBsgcfkkF4QN+kIyA+XaCDuDLCyNBUbaqeFEhs39lngH+AiF6Ov+Qkh9/W2k0+KOAVSedDIi8CfiFJEb/5rkUkpgWO/LmVBeVXjxJ0zgEUJZ6HnjsjvzNjEBHBA5ADWGsP+30YY9Z71g8oMRbRE23glefQQveedT0KiW1I8JQkwUb3cZz/2u5bpE1b8wKqbuohFlU3zdtjkWgyLRCRKLJ9bEcWGxz/SE6btt77lUk495VIaCLdIJr80xJj8QTubNfkC/5AlAAAAABJRU5ErkJggg==",
            name: "Thundercloud",
            description: "Creates a stormy cloud",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Thundercloud"
        },
        {
            id: "ELECTRIC_CHARGE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAcUlEQVR4nGNgoBYIb3+OVZwFq+jq458ZGBhWYpNiIt5snBpCHHgYGBjWHPhClIZwmPErKyWJ0hACNh4PYMFqPNzfEBBqyYvdBqzGr0H1DCMuq+E2hCIZjz2U8BjPgEsDnrDCrgFPVOBzEq6owOckKgAA2kMjeanOYyMAAAAASUVORK5CYII=",
            name: "Electric charge",
            description: "Gives a projectile an electric charge, that it will release on impact",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Electric_Charge"
        },
        {
            id: "MATTER_EATER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjklEQVR4nGNkwAOmexv/33HmAT4lDEwMFAImdAF/ceH/FBmw8eVbRmS+h4kCXgMYkW1G14wcFiAaW3gwYlOcufUsToPQDWHE6z4iDGEiRtN/KACxQa5DDhcmmAJ8ND7AyEAGQI5qJlyKYCGPLoYuzkgo9JE1EBWN/kjpgay8gCsxEWUAqfkAwwBSbQdpAgCHgFgyY4tR9wAAAABJRU5ErkJggg==",
            name: "Matter eater",
            description: "Makes a projectile eat the environment as it flies",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Matter_Eater"
        },
        {
            id: "FREEZE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAs0lEQVR4nLWPMRKCMBBFfyiAAlJ4BEqqwDno6b2Mt7DPZTAVJYeIFEgTZ1wnLoky44xuk2Tnvb8b4MsSdJyN1eMMoK8LAKpKzbR6SI9zXxdHJQEk1FJV6lHP0V0/aN9/Cq3MyTHTqqq0lbnXTt2BgI3AI/mdZMX6L4EvzSMBNGUWfppqsAunB7s0ZSbEhtmsFOTFNAKBjwZwud7iuIQ/grzA/7hSvAZ2yjm3D7yZ8GPh/3UHHIUoWNivnUAAAAAASUVORK5CYII=",
            name: "Freeze charge",
            description: "Gives a projectile a frozen charge, that it will release on impact",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Freeze_Charge"
        },
        {
            id: "APOTHEOSIS_FIRE_CHARGE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApklEQVR4nGNgGNTgS6fTf0JqmPBpZnaTJWgQEy4JZM0wNlEGfEGyjUXSFm4Q0QYwu8liOBlkEC5vMCFzvp+P/49uK4iP7CWcBnzpdAJr/rlwGYpGEICJYXMFEzIHpBBkE0zzn+eH4bb/3fUYqyuY0P2PrBnGRvYWuiuYsHoMzQv4ABNRqqAA5A2e8n2MWA0ASYAUwPyNDEBi2DSDAIYArvjGppkqAAC5QErUbmXNMAAAAABJRU5ErkJggg==",
            name: "Fire Charge",
            description: "Imbues a projectile with a fiery charge, that it will release on impact",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Fire_Charge"
        },
        {
            id: "APOTHEOSIS_GLUE_CHARGE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAq0lEQVR4nGNgGLTgzKVV/2HseYvrsLJRwLc/j1EUgQxAFsNmMFZD5iHZAFIM48MMJcnZ3/48BmN8LsIAMFtBikFsmEZkl2DqYkCVgGkixhBGdEP09HUYtLQsGa5dO45iAUwMRl+6eIUhKbaJkQlZEUgAJIGuEQZAclwssowmemGMILUY3vgGdTK2MEAOYJyxcQZPLKCHD95AnAeNNpgY0VFIyIk4o5BkRdQEAIE05YXJkY6qAAAAAElFTkSuQmCC",
            name: "Glue Charge",
            description: "Imbues a projectile with a sticky charge, that it will release on impact",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Glue_Charge"
        },
        {
            id: "HITFX_BURNING_CRITICAL_HIT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABM0lEQVR4nGP4//8/Awh/jZf/D2OTgpkYoIDZ3ZOBHMCEzPm5PPM/iGZkZGS4dOnSfxAGsXFhsNr///+jaAYBjqgZYNnFixeDxZ4+fcpw/PBBBmVZaYa+GXMgOhkYEF74uTzz/39HeQYQRgaxsbGMMM0gIKagApe7ePEi2HAWQn6Eaba0tWcI+vaNIaiu7v9JVVUGzrVrGRj09FDDAB0UZaT8h2mWlpYGi4E0m9++zaDW1MSINQzYI6czggIIpPnu46cMG7duRwkPkObTJ08yRO/cCdbLBAt1UMCBMIh9YkM7imYY0NPTA2tGAf+hLkB2tr+3J4ogKMBu1dX9X+ruDhaH0WC9/5EMANmMrhkZwDSiWP4fagA2m4k2oCgj5T8sxEkBGF4gBLC5AB6N5AK8CYkYAAAnD9m7qNzYHwAAAABJRU5ErkJggg==",
            name: "Critical on burning",
            description: "Makes a projectile always do a critical hit on burning enemies",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Critical_On_Burning"
        },
        {
            id: "HITFX_CRITICAL_WATER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABS0lEQVR4nGP4//8/AwzLJC36j8wnBjMxIAFRBU0GUgELMkdLXhTOvnTp0n8Qra+vz4hLM8gFjCACBIyaz/wHGXDt4WuGc7UmjIyMjAyLFy8GSz59+pTh+OGDDMqy0gx9M+bADcTwArorYmNjGWGaQUBMQQUud/Hixf9wLxhBbQcBOz15MJ+BgQFsE0yzpa09Q9C3bwxBdXX/T6qqMnCuXcvAoKeH6gKQZmRXFGWk/IdplpaWBouBNJvfvs2g1tQEtoARPQxAYEmcPGNxZur/u4+fMmzcuh2sEBYeIM2nT55kiN65E6yXBWwKI8Sw81CX5PK3o2iGAT09PYbTS5YgCzGAQxIZgJzt7+2JIggKsFt1df+XuruDxWE0WO9/JANObGjH0IwMYBpRLP8PNQCbzUQbUJSR8h8W4qQADC8QAthcAI9GcgFGUiYVAABq/tiHA+wVgAAAAABJRU5ErkJggg==",
            name: "Critical on wet (water) enemies",
            description: "Makes a projectile always do a critical hit on wet (water) enemies",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Critical_On_Wet_(Water)_Enemies"
        },
        {
            id: "HITFX_CRITICAL_OIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKUlEQVR4nGP8//8/AyWACZnTUeRLsmksyBwZKVEGRkZGBpCrLl26BDZMX1+fEZdmkDpGmBdAtoMMePLsNYjLWNm/hWHx4sVgyadPnzIcP3yQQVlWmqFvxhy4gSC9TOimggyBgdjYWEaYZhAQU1CBy128eBFsOBOy7SCgLAem4WEB02xpa88Q9O0bw626uv8gl3GuXQsWZ0K2HaoZ7oqijJT/MM3S0tJgsZOqqgzmt28zqDU1MSIHIuOTZ6/htsaWzmcEab77+CnDxq3bGTdu3Q4OD5jm0ydPooYkOjixof2/v7cnigTIAJC/l7q7gzFc7380A0A2o2sGaQT5HaYRpwEnsNiMDGAaYQDFgCIsNhNtQFFGyn9YiJMCsIYBqS6AJ2VyAUZSJhUAAJ63uPYvne6cAAAAAElFTkSuQmCC",
            name: "Critical on oiled enemies",
            description: "Makes a projectile always do a critical hit on oiled enemies",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Critical_On_Oiled_Enemies"
        },
        {
            id: "HITFX_CRITICAL_BLOOD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPElEQVR4nGP8//8/AyWACZlzwN39/wF3d/INUBEUhLMvXbr0H4QZGRkZcGEQYIR5AWQ7yIA779+DxR137WJYvHgxWPLp06cMxw8fZFCWlWbomzEHopOBgQGklwndSciuiI2NZYRpBgExBRW43MWLF8GGMyHbDgJ8YWFgw2EKYZotbe0Zgr59Y7hVV/cf5DLOtWsxw4APohnuiqKMlP8wzdLS0mCxk6qqDOa3bzOoNTUxwsPgACTk4a6QXbmSEaT57uOnDBu3bgcrhIUHSPPpkycZonfuBOtlAQmCAgxkGMwlJza0/2+ffQiuGQb09PQYTi9Zghpo/9ESEshmf29PFEFQgIH8vtTdHSwOo8F6/yMZALIZXTMygGlEsfw/1ABsNhNtQFFGyn9YiJMCMLxACGBzATwpkwswkjKpAADTRbEz6V250gAAAABJRU5ErkJggg==",
            name: "Critical on bloody enemies",
            description: "Makes a projectile always do a critical hit on bloody enemies",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Critical_On_Bloody_Enemies"
        },
        {
            id: "APOTHEOSIS_HITFX_CRITICAL_DRUNK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJklEQVR4nGNgQAIlPlL/GUgETMgcE0VWBooMMNWShbMvXrz4H4QJGcCI7HyQC8KTnRgYDeaDxRcvXgw24OnTpwzHDx9kUJaVZuibMYcRpwtA4N7x2wwwEBsbywjTDAJiCipwOZjrWGACJ+WVGW5I8DNsZOFlQAYwzZa29gxB374xBNXV/T+pqsrAuXYtqgvMH95liHlxmaHlz2O45qKMlP8wzdLS0hCLVFUZzG/fZlBramLE8MKZ+78ZTl97DNd89/FTho1btzNWVFQwIms+ffIkXA8LjNGz5Rk8cE5saP/fPvsQWDOyBXp6egynlyxhwAuKMlL++3t7okQfKMBu1dX9X+ruDhaH0RjgxIZ2DM3IAKdGXDYTbUBRRsp/WIjTFOD1woABALH/gDzkAmUhAAAAAElFTkSuQmCC",
            name: "Critical on Drunk",
            description: "Make a projectile always do a critical hit on drunk enemies",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Critical_On_Drunk"
        },
        {
            id: "HITFX_TOXIC_CHARM",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5klEQVR4nGNgoCZI7dP6j8z/n5r6H5nGBpiQOVoGrHD2LhWV/08fPCBoCBMyx0BJC852u3OH8dr9+wwgQ0CAcfZsRrzO79+n/3//g8j/IBpZHOQSfPqY0AWQXQFzCTIf3UuMMNthGrVkkhiWHSphKHS6iOFkkGu0FBUZpBUUsLtASyYJqyuICpd+aBiA8BNX1/+94uJgJ4LY6DGAHC6M2Jx5+fNnhiI/PwwXYIsJJnQBkOZwPT24M2EAnY/TBciBBQKgAANpltm9G3c62AX1E7JfQWIg/xNKBxiG4BPDZhHJgGgXEQsAMh2BEDjAXjYAAAAASUVORK5CYII=",
            name: "Charm on toxic sludge",
            description: "Makes a projectile charm creatures covered in toxic sludge",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Charm_On_Toxic_Sludge"
        },
        {
            id: "HITFX_EXPLOSION_SLIME",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1ElEQVR4nGNgQAITdBr+M5AImEDE////wViYVwjOJskAGFAWUYSzP7dz/yfJgCVWk/8j07yVXxnxaYRZwIQuAXPF98P+KC5AdhFIDsWCxZaT/h/z3QzGPyY8/w/iIxuCzzssyBwjZxMUVyAb8v0ww39O240Y3mIEEaBQB/kdptFykw/jlw6e/ywJNQiVd07AmX+O7IGHESO6P1lsXBACKhYYBmBzBVYAcvr35+0QjBSg6IHLgCuQwAZAMYzPQCz4DDUQX1TSD3wn4HSMlIgOQFFGUwAA8GyBxq3svgYAAAAASUVORK5CYII=",
            name: "Explosion on slimy enemies",
            description: "Makes a projectile explode upon collision with creatures covered in slime",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Explosion_On_Slimy_Enemies"
        },
        {
            id: "HITFX_EXPLOSION_SLIME_GIGA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABN0lEQVR4nIVSsU4DMQy1I5YKdSksHREdWagYKgQTzMDXIN3GgHQrEisDAx8AzGxl6EcUMbKwIXRLpaCX5kVOmhOWLvHF8fPzi0WM3R3ceCmsm19unNmYg+O9D9/OcJT8Pvtptz2TV+9vEgBo+7t71cvY6Q+bXw3BySz4SgZPx/ceAB/fn3J10YQ7Wyfn4aIsF4JqBOi+Ws8zV1Iki5BMA0g8Q/Lq8TaFHBZWh03PjuT5tc0SMzbRR3WwcbY6kmtaZGCROrXQUgPY4fVDVj3ZchG2wenLWkiwEaCoQmlDcy1cFWQyk24u6Z0VC58oCVdLNCwsA4eF/fCpSLWvBTudauMpEN/e0mZLg3GjdhLVJoNaGBIINW4UrWXzEMEIkowaEMj+c4zJDjuL/JtcFrG9ZyA1sD6QsuAfynTGN3BrUicAAAAASUVORK5CYII=",
            name: "Giant explosion on slimy enemies",
            description: "Makes a projectile explode powerfully upon collision with creatures covered in slime",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Giant_Explosion_On_Slimy_Enemies"
        },
        {
            id: "HITFX_EXPLOSION_ALCOHOL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzklEQVR4nGNggIK56Sr/GcgATDCGsjgjA0UGyEqKo0h8buf+T7QBc9NV/j9+/pLh7nQbuCbeyq94nQSzgAlELGCRZOhhV2eoYZGFK/h+2P8/LheB5FAsmJuu8v9Anep/ZBcgG4LPO0wwxt2X/xlA3kC3HcRmsXHBcBEMMOLzI0tCDULgzgk488+RPfAwYoIJ9sTr/ofRMFuxAU7bjYyEAhgMQIZ8f94OwWheYkAHn7EEEtgAKMapERf4DDUQX1TSD3wn4HR4LOACoCijKQAAd6p4Dq7GhCIAAAAASUVORK5CYII=",
            name: "Explosion on drunk enemies",
            description: "Makes a projectile explode upon collision with creatures covered in alcohol",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Explosion_On_Drunk_Enemies"
        },
        {
            id: "HITFX_EXPLOSION_ALCOHOL_GIGA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLUlEQVR4nI1SsYrCQBCdlQURCZYhhVXyESm8zt5fuO7wE9If+BUHdlfb22nhR2ids5YjHAQib81bJrLLOcXuzu68N29mR6S3r4+ik4A1h1Xwnm8jOnlq5BW7baYdwe1xL55gnqXRYOw8J9XvI1NRurOhfCgASb4+GgbbxdIFyvkkyEaCpt50vLO43NpMZuOZJDbx2R2YBhIEL5bS1GXXbj/9u8Xy3taS//3IvE3lW4MB1IS9jzOyQ41lwOUK1dd490jWS2cvTPTbVHZv55PbJm87j7O641qmCw6RFKU0B/GzYQgeNC4EVCq0ghEW1sOvotRYCXo6TbR+TUK/KGWSVUZPotFgSHNDgkZllRuowTz0ZCTxxh6QSPscY6rDziT/gp+T6NoHJCGyGMlzwjt/kLpJTMDSlgAAAABJRU5ErkJggg==",
            name: "Giant explosion on drunk enemies",
            description: "Makes a projectile explode powerfully upon collision with creatures covered in alcohol",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Giant_Explosion_On_Drunk_Enemies"
        },
        {
            id: "APOTHEOSIS_HITFX_MUDMAN_SLIMY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABj0lEQVR4nKWSOyxDURzGf+e21fbWK1UqWASpwSRdGL3C4LUgWCzCYJAYJCIxMEqlHYTEJDFJvBKDCEaDyWQwiEiaVEio3rapOtJ65F4tCb7k5Jz/4/vO9z85oMNS3Zzkl1D0QVGek38JVLkq/y6w3uCX+j2FiTakb8guR5qQj6FCudhHxojmrwm9C6HauH6I4nHB5ECETPq7g9StH8T6Zu+nC/92TDxq8JQAt1th7Rjxo4P6Zq/BxVSvRSoWlWDYjoM4pJcRQv8GH8TGvU7hG7RIT0WCzTMbZc4Y4TjcR+ysH0UNLgTfIDCMPL8BNb+AwmQYc4Gb2Y2gmOgukYGdkPhRYH8GeXIBLxoEw+BQzawePH/2dnmRu2dvXJFNYLRDlaaEhtVhI3Qf4+UZqkthfiuzX/maGGvPldGIlj7fPsQozgdLDoTitqyjCn2wMFQkr4J3adWVI2NtvAWJYmL5IGnIGxw4rXdgsmaQU1g+RJTnJJluNX4ng8DpJdS64sz1ZPtzcKMp1FSCrz97/U94BXoZgf8qwpIgAAAAAElFTkSuQmCC",
            name: "Transmute into Mutamies on Slimy Enemies",
            description: "Make a projectile transmute a creature into Mutamies upon collision if it's covered in slime",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Transmute_Into_Mutamies_On_Slimy_Enemies"
        },
        {
            id: "HITFX_PETRIFY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABjklEQVR4nGP8//8/AyWABV3AKzDxv7qGDpjd317MiE0TIyNEGGQ5I8wFyBqRwffvH8F6ZkxowjAEpJcJxABhdM0gjSDMycnP8Ojh4/+Flb3/0W0H8xkYGBgKKnrgAQHSZMb/Em7Q5V9qYPrmjStwSyZ0lDDCveAZkPCfm4ebQUZGEa7ZKSsKrPDF+0sM15ZfgRvy5Ml9sDqYIWAvcPNww21D1gwCEoJ6DFqROgy6bLfA/K9fvsLl0vNrwa5mQhZEBgkpsWAXVJR2w8VAlsHC5u3bd2AxJqy6GRgYFsxZzLBs9UKGju5SFOeDNIIwzGImmNNACkB+3TdtGdhmEDCyVADTHz68hfsdpn77hgWM8IQkJy8Lji6QIQwyagwMy68wMEQyMPw7LAymBQSEGR7/gsQECMA0ww14+/Ydg4wMP4OwsBBEkYYOw+WFvxiePGEFGwaLBXTNYC9s37CAEeYFWMCA2DA/o6UDjKQNFwDFKSg5I0crsjpYGPS3F2M3AAZgCQsWyuhORs+98MxELgAA42DTI77lR/oAAAAASUVORK5CYII=",
            name: "Petrify",
            description: "Turns a wounded enemy into stone",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Petrify"
        },
        {
            id: "ROCKET_DOWNWARDS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuklEQVR4nGNgoAWo92uaS4wYCDARYwguzVhBb9SEozBNMI0wGiaHDFjQBaTZZK1ANB8PnwZMDMaGyeEEKxLW/kdng2zFJo4VnK68AJbEpgFGw9Tg1IysGDnwkA1FVssEYyjYyMOYDMqSymBaU0g7CV0MXS0TiHi99f1/ES8BBnQQsSCYEZef/////x+F83rre7AAjMbmXJgcsnoMgCyBHmA4NTEgKUB2GroGvDZjU4DOR7eAICBZAzkAAPM6nv85Pa0EAAAAAElFTkSuQmCC",
            name: "Downwards bolt bundle",
            description: "Makes a projectile separate into a bundle of 5 explosive bolts as soon as it moves downwards",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Downwards_Bolt_Bundle"
        },
        {
            id: "ROCKET_OCTAGON",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApUlEQVR4nGNgoCV4vfX9fxAg24D/////BxmCTw0TPhsZGRkZSXLRfyw2nq688J8UF6FoQtaMzCYKrEhYewOEYWy8YfAa6jcQDbMpYkGwxvV3V1/V+zUdQncBcliwgAgRLwGGN9s+MIh6CzLCFN99fvcmyACYYTBxBRt5uHqCXmBA8wrR4DSWwCMqEF+jxTO6JoLR+B9NAbpikpM20QkHF6A4MxEDACXlu03sX4pQAAAAAElFTkSuQmCC",
            name: "Octagonal bolt bundle",
            description: "Makes a projectile launch 8 magical bolts if it moves slowly enough",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Octagonal_Bolt_Bundle"
        },
        {
            id: "FIZZLE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAq0lEQVR4nGNgoBX4////DbI1H9u8+Q7Zmqd3dOwnRT0TFrHjuLwyvaMjFK8Fx9CcDuODNIE0I4tjhNExJM0gSZhNII0EA/T///83oLgZ2YnItqJ7BwZYkNirZ3R2XsooLwdpAmvMrKhYDfOCvra2LCMjowpB/09HcwHR6WE6kkb0QJre0dGGS44BmyJsACSPLQoZ0RSBFIDTQWZFRRU+AwkCipIzDFCUoYgFAMdKgJDrkqPKAAAAAElFTkSuQmCC",
            name: "Fizzle",
            description: "Gives a spell a small probability of short-circuiting",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Fizzle"
        },
        {
            id: "BOUNCE_EXPLOSION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsklEQVR4nGNgGHLgPxTA+Ey4JCiygYEEcQZiFJPlsv9QTYQ0MyFzPrdzUx4GyABm+/fD/qQZ/B2qAd352AxixKWZQcUCIXjnBJjitN2IoZ6xvLwcw9QGnxsYBjRs0cDqWpYzZ85gCDYwmDA0+JxANYSBgQGbWpRYQHYB2EaQ06HOB4ENLgg2TgNAinwavqAauEUDbHvAHlQXgQA4UJydnbFGk4mJCUONwBSsGkFg7969jABCF2fQ0RlIdQAAAABJRU5ErkJggg==",
            name: "Explosive bounce",
            description: "Makes a projectile explode as it bounces",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Explosive_Bounce"
        },
        {
            id: "BOUNCE_SPARK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAz0lEQVR4nGNgGAUkg/9QAOMz4ZIgG/zHYQjRhnP6zgG7BESTpTlp/zcwhhkCArINn1AMRAYsyBwR4zAGH3kUITCYGMfBsMU+imE5A8P/75tTGJHlmJA5b86uYtjy8A+YzeU3F2wgiA5UZAUbDOIT5Q1OqFfW3fsFpmF8bN5gLC8vxxBcxlkNdjbI5vX3fzPkL/rBEPW9FauFLGfOnMEQfMO1CuxnEAB5CeS1M98w1YFd4OzsjDV0j3FFgv0M0mz1bTlOL4NDFJchhMDevXsZAdhRguSJ3lryAAAAAElFTkSuQmCC",
            name: "Bubbly bounce",
            description: "Makes a projectile shoot bubble sparks as it bounces",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Bubbly_Bounce"
        },
        {
            id: "BOUNCE_LASER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8klEQVR4nGNgoCX4////f0JqmPBJHvo1B6uhyAYz4ZIAgWOXdxN0JROMwQgFyIbcuHwbxWZkdTi9wIhmCEwzsiasLsBlCC7NMHkmZA4IxM83JBjyB3/OxjT04M/Z/4mJxvYzYbgtaEeThBkAcxUxrmNAVgwykJBmxvLycgwJgdD7DFa6rgx2bCngxARKDx9WK2K1kOXMmTNwjkzMO4YnS4QYTBhMGOyMU8BiIEMYdBkYtq2+w4CsFgZQohGkGQRACisqKuDi85ZNg1uA4QLcoYHICxI33CC2n4FYgBIGIMLZ2RklHOBeMTHB6mwY2Lt3LyMAjGaSBjWr7asAAAAASUVORK5CYII=",
            name: "Concentrated light bounce",
            description: "Makes a projectile release a bundle of concentrated light as it bounces",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Concentrated_Light_Bounce"
        },
        {
            id: "BOUNCE_LASER_EMITTER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7ElEQVR4nGNgwAN2ffj/n4FcsOvDfzAgZAgLLonTFxgYGAygNB7ARKrLIO5CuIoJlwQIuPITNpAJxmCEAnRDkC1AVofTC4xYDAHxkTURBf5DYwCXi3ACo8ar/5HDhGQDYKD1AEQziGYgNRpl4pa+xsdHBizl5eUYNvB5RjGYGkDYYDopSuST5CWsLmE5c+YMnPPebhKD4KE8BhOGCgYGgw6wGDgtGDAw7N3OwICsFqsXQJpBAKRwb3sFXDwpb9kbmAUYLsDlNxDY/RFCR0teEgEZKsiA6QJw4nB2dkbxH9wrJiZYnQ0De/fuZQQAOKGH7YcGWaQAAAAASUVORK5CYII=",
            name: "Plasma Beam Bounce",
            description: "A projectile launches a plasma beam upon bouncing",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Plasma_Beam_Bounce"
        },
        {
            id: "BOUNCE_LARPA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0klEQVR4nGNgoCX4////f0JqmCi1hAmf5Puz2F2F7DImXBIgsGPuUeJdwAgFyIZcvHMaxWZkdTi9wIhmCEwzsiasLsBlCD7NWA0od+3HGXX45KifDpZlHvkPo/HZzFheXo4h2dnZyfjuzP//gsaQtACKzot8m7EawHLmzBk4x4TJh+HMvy1gW0GaQQBEezBYM1xcvZkBWS1WL4A0g8DcW/UoqbCzcgLcAgwX4PJb5+oKhnKGDgjH6AVW20EAHL/Ozs4o4QDziomJCU6NILB3715GAKg+doIMduJJAAAAAElFTkSuQmCC",
            name: "Larpa Bounce",
            description: "A projectile will launch a copy of itself when it bounces",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Larpa_Bounce"
        },
        {
            id: "BOUNCE_SMALL_EXPLOSION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVR4nGNgGNTgix/Df3Sx/1DAQLQEqer+45AkxnCcipH5n9u5/yPTcIAuANOEzebvz9sxNX9/3v4f2RBcBhDtAmTN3w/7/ycpqj63c/8HiYMAsjy6QSA5RmyaWWxcIBwVCwaGOycY/hzZw8B4/CsDzyYGDPWM5eXlGC5o8LkB0QwDd04wNGzRwOoDljNnzmAINjCYMDT4nEBxAQODBgM2tYzOzs5YA8jExASFj00z2AVYRfFoQAdMRKnCAfbu3csIACJVlQuhgt0HAAAAAElFTkSuQmCC",
            name: "Sparkly bounce",
            description: "Makes a projectile release damaging sparks as it bounces",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Sparkly_Bounce"
        },
        {
            id: "BOUNCE_LIGHTNING",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVR4nGNgGHLgPxTA+Ey4JCiygYEEcTBov/bpPz7F2Ph2m65iGmiHJAjThK4Z3TIGXCbjMgBdHdxUXArRxUAaUcTt0JyN7ESYQpgamEUwNVjD4T8UHHqPoJHF0S1mLC8vxzDFu6KDwVYAwe+4/pnhw8JWBmyA5cyZMxiCAs8/M9gK8ML51pK8DFsZGBiwqYWnRGQAsg1kKwwcfY5gE2UAyCaQIYc/MIAxiI3NdhBgBBHOzs5YE4eJiQlOjSCwd+9eRgACQ8aicZT0aQAAAABJRU5ErkJggg==",
            name: "Lightning bounce",
            description: "Makes a projectile release powerful lightning as it bounces",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Lightning_Bounce"
        },
        {
            id: "BOUNCE_HOLE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbUlEQVR4nGNgGHLgPxTA+Ey4JCiygYEEcQZiFJPlsv9QTYQ0M5FsMjmuoKkLmCg1gLG8vBzDmZ2dnYzoYtjUgQDLmTNnUARMTExw2oauFgSoHwYgW9CdC+Jjsx0EGJ2dnbH6DdkruDTv3buXEQBZQUg/3fpOFQAAAABJRU5ErkJggg==",
            name: "Vacuum bounce",
            description: "Makes a projectile remove earth as it bounces",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Vacuum_Bounce"
        },
        {
            id: "FIREBALL_RAY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzUlEQVR4nGNgoDW40WbynyKF/5+s/U9Q3Y02k/9ggKYYKpePbBgI3HaVhKtjAhHM+58yMDxdx8AgHYTTJWBx6SCwOtXdzxmxu+IJxAY0LxSD6f///xMVHjeg3oE5H2QAyGCiAxMGwK6BaAa7AMWVSAYyMuAA75cULhFwsDkPF5AO6kFR8HQdw53EHAgbFKogE9FjA+YFWEzA1KF46TaSIHpAQRWCDCHs/9tQg5DFkGOE6FhggALk2EDmEx0j2BTCvEmUIdgUgLxJVprABwAnV+s4nX7kAwAAAABJRU5ErkJggg==",
            name: "Fireball thrower",
            description: "Makes a projectile cast fireballs in random directions",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Fireball_Thrower"
        },
        {
            id: "LIGHTNING_RAY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyElEQVR4nJVTyQ3CMBBcSzyhBH580gS86SgdQD2kFkgf8M+gjRmfa0dYsuw9PDt7WAAIsMCf9b693l2bRCcLJNelYLxLrqhBVH9+PFEz8b7Si6hbH7fSCikgMTCiRdvr8yCyVTyClilQditKc6VG53K9l3cU7vMH47CXyzTL9XRc3VTmUjvv43BwQYdf8WyKS9i0sz6sh4spRFplxDSqkSVMBmX7WhMpffo1UCmL3cbYa6v3KcjmHPBx/Q/MUW6Pbwv0r+9r+XwBpYipSt6okhcAAAAASUVORK5CYII=",
            name: "Lightning thrower",
            description: "Makes a projectile cast lightning in random directions",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Lightning_Thrower"
        },
        {
            id: "TENTACLE_RAY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAv0lEQVR4nJ1SQQrCQAzclH2F6Ne8VvsC0au1vkC86tcUvxFJIWVMZ3E1sJSkk8lkdpOqpl9Of7wp5jl9iW5z1uVqMeXPx+vjf65pxqbLdSfVBKUmjCb9EaZsRtBBsUaR48WctCTKjObtD+vZGoaRbTuMQAec+ntRCZIYzszNWLCvO47T45qoVnwFNjGSRHLLxQhYxFXiA3IlmRnImkqYBq+ETfdGrCF+8oC9d5walXo+3gJTwSSzKy6ayAKH+IA3AUG295u+Vl0AAAAASUVORK5CYII=",
            name: "Tentacler",
            description: "Makes a projectile cast tentacles in random directions",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Tentacler"
        },
        {
            id: "LASER_EMITTER_RAY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+UlEQVR4nGNgIBLs+vD/PwijizOhC7QewFQE0ujKT6xVDAwMRo1X/6MbCgLYDCdoAIiNTTOKd3ZB/YesSCZu6WtkA2CGgtTAXATSw4jux7aDDAxrD15jeHX3whsxZQORs3VaDMZN1+CWgfggsPsjA4ObACMjiitgJsNshNkOcg2yON6wMIJqRDYMxAYZgh64IMCIzIH5GwQeL4wSQZaTjV/2BsYGee1cvTZCb+sBRCDBnAuzFdkLyBbg9IoRkr+RYwBmCDZvwAFMAzofpglXmmAAAVigIduATQyrIaAoxGUytmSMnJDgmrHlNGTD0eXhuRNXNkVXjEsSAAH2ZjTfn7o7AAAAAElFTkSuQmCC",
            name: "Plasma Beam Thrower",
            description: "A projectile fires plasma beams in all directions!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Plasma_Beam_Thrower"
        },
        {
            id: "APOTHEOSIS_SAWBLADE_BIG_RAY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAp0lEQVR4nJWSwQ3DMAhFUXfouVUnyS5eJAPkkk187BQ9cMkAGeRXWI5k2YAJkoWcwOP/BCIn+DhBk3hYL/L3hzbfAvBx4vN60r6tJDmiZAiZLI2agjCQlUIPPASAtb1Lo5yUUslTJQCWHmgqYIUG4F3P0sKG2qxQa1MBuDJZ8XV5v6ZWWHmm+s6Gr/4buH+AO3KrxFJq2srGpNAOzCaFtvDWtnlKIoV/c/oCyAFYKqIAAAAASUVORK5CYII=",
            name: "Giga Disc Projectile Thrower",
            description: "Makes a projectile cast Giga Disc Projectiles in random directions",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Giga_Disc_Projectile_Thrower"
        },
        {
            id: "APOTHEOSIS_CURSED_ORB_RAY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6UlEQVR4nLVSQQ6CMBDcEn5AijEeSuKRD8BNf+bPxBMv6JFEDoYg+ANjzWLXLJU2xsQ5MLTb3ezsDsA/oaUyY1EY5J8KjEVhEMi+NzF+jsnGpFEM18cd9reLoGDfdABl+WIPIkpebdeAjGcK5kMr+qarkL0FUpuc1PW7iINTSGaMbQNrdTrPUYUKiKUZaKl2Nn62UiYm4FZIlghV11Jl9jfLh7aiZJSK3X7MRtt9a6kO1AVjvDN8tTN/aI9pmBz/Ox2ojPPBM18vjwt+6WrjHqENcaMtDc1t36/ZYuYad6pfeCS8Ri7D1/4TyYO8DfegLNsAAAAASUVORK5CYII=",
            name: "Cursed Orb Thrower",
            description: "Makes a projectile cast Cursed Orbs in random directions",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Cursed_Orb_Thrower"
        },
        {
            id: "APOTHEOSIS_ICEBALL_RAY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6klEQVR4nGNgoDWoPHPmP0UK73/69J+gusozZ/7/+fv3P7piqFw+smEgdS5bt8LVMYGI0y9fMjz++pVBlpsbp0tA4iB5kLo93t6MWBXch9qA5oViEA0SJyo8KqHegTkfZADIYKIDEwZAmqCawS5AdiWygYwMOMD8W7eWOEhInIfxZbm5e5DlQWGRevgwJBBBoQoyETk2EtXUYmbduvUHJA+iWZiZGT127GCoPX8erHnWrVuQwHSBaoYFILJfoU4FhQNh/7tADUIWQ44RomOBASnAkA1A9h5RBmFTCPMmUYZgUwDyJllpAh8AAOx9A0K63dYaAAAAAElFTkSuQmCC",
            name: "Ice Ball Thrower",
            description: "Makes a projectile cast Ice Balls in random directions",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Ice_Ball_Thrower"
        },
        {
            id: "APOTHEOSIS_NUKE_RAY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7ElEQVR4nGNgoCVob2//v3z58v/41DDhk3TmrWQ4dOgQA9kG3BVezmBnZ0eeAc/WCv/HxgaBU1MY4F5jwmXAk+dvGbxPNbhGRkYygtgwg0Aa51/NRFW8HEdAfSpUD0S3Fd01DKCQBuHMzExMSYghmjDDQIagyzPCTAcFGAgov41kMMthYIRp5Ou/eR3EBtG4vMsA8xuys2EGoLsEmysY0CVgbHRng/jo4cDIgAWAFBz8NQXMtmfLYZAKfsuIzZs4o1Eq+C3cYBgbpAFkGChl7v3cDg58bHrBABQjIBt3zA3GqohQ/gArIKiIWgAA7f+V5f9jRlcAAAAASUVORK5CYII=",
            name: "Nuke Thrower",
            description: "Are you sure?",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Nuke_Thrower"
        },
        {
            id: "FIREBALL_RAY_LINE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAfUlEQVR4nGNgoBa40WbyHwRANFkG3HaV/P//yVrKDLkBcgXUELIMQDeIgVJwA2JQMQiTZcD7JYVL/sMAuYb8h4IbbSb52OSZCBnAyMjIeLPdtICBgWECyTYzoIs9WUt+FCMnNrwG/SeQBmDphOxovg1NsRguICX1URQOVAcATaN9Qb4BMsQAAAAASUVORK5CYII=",
            name: "Two-way fireball thrower",
            description: "Makes a projectile fire small fireballs perpendicular to its trajectory",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Two-Way_Fireball_Thrower"
        },
        {
            id: "FIREBALL_RAY_ENEMY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABA0lEQVR4nGNgIAButJn8Jyh+A4ciEPj/ZO1/bGIgcNtV8j9YMxggKUQ2EN1wDPW3XSXBHBDA5hKwLWi2o4sxgE0FGYLm3BttJvkwDNOMz7sMMINgmu+/OPAfhI9fn/QfZghR4AaSZkKGMBEyLCElluHF+0sMFaXdKK6EeYWJkAEL5ixmWLZ6IUNHdymYr155moFBOohBPa4SHMAsIEEQ46+jNERBXCUDo0ww4w2GEob3gXETJAT1GIwsFeAG3nGTYoCp1dj9nBGsGR4L//9jxALM7wQD8jbUIFzyJMUCAxSgpwtsyRongCVZdFfCkjHeBAWzDSPJImUkolIlNnFY3oHJAwDTDQAxORylygAAAABJRU5ErkJggg==",
            name: "Personal fireball thrower",
            description: "Makes a projectile turn the creatures it hits into living fireball throwers",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Personal_Fireball_Thrower"
        },
        {
            id: "LIGHTNING_RAY_ENEMY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABbklEQVR4nI2TvUsDQRDFZ6+2ui6ksdOglcTCxsqz08Lej0JsY2Eg+gfkAqnUTlQMgo0EwcZWbWysJMZIAhZGSCdcZ5ORN96ce8kaHDjY3bn5zb63u0RExNxn+iPCZuTMtcp5P8mFzYhdEKxxt+4PwrCGcTvI+CARM6cgoNtF89fPrMXIMbOfNGwHGRAF4toFilO7irsr3MRUmljbpUoUSOKm8073y1OmVc4XtHBy73EfsLulHBnjSZ3LGMJu4nHhrXfL+B5eDtiGjTJ3qNgFsaV6OlETBzVvbK5S7/OJSsXqb+ePK8iTsQc9CsEY2m3A2fE5XVzWqFItkvpD2RXamq5xKTdGHhY7i1mDiXoAw75Od7bRGTEzN54ATw4XzGs4S0eNdSNmtnGM3JdzxlFqQAo0q3aXkRIcFwOEHdh+KEiNtecjg+NiyEGBPf83RCXZp/QjN33tnSFdu3XxZwgq114emfsyWY/GCQcU/2j+Gy6UW3jblvcaAAAAAElFTkSuQmCC",
            name: "Personal lightning caster",
            description: "Makes a projectile turn the creatures it hits into living thunderstorms",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Personal_Lightning_Caster"
        },
        {
            id: "TENTACLE_RAY_ENEMY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABcElEQVR4nGNgIAButJmg8FtbFv5HFmeEcTSqzmA1IDO9/b+MrBSc/+TxM4ZptWqMDNJBDHfcpBiYQJrVK08z/H+yFsNWmGaQJhjOl18L1szwdB2D6u7nDAy3XSXBmv///4/hXJABMCfDAEgtSA+GP/+DDEFyBVQ8H4ZhmkFqQQZj9esNqEEwzfdfHPgPwsevT/oPMwRZPXYOA6pmQoYwoYcyup8TUmIZXry/xFBR2o3iXZg6JmSNIAwKaWSwYM5ihmWrFzJ0dJeC+RMfBv8HxwIUsEyfWcmI7AVQHDPKnGG4wVDC8D4wboKEoB6DkaUCiqFtrYsQrrztKomIhf+ogQvyM8zvyGEAshBuaSaUATMI2UswOWgMoQQgDDDBvABKVbDkjB6QILD2X+4EWBQjexmcF7Cld3B4zKhgZGQEKwGrKbo3iVFl1zNwMs5qvvUfZDlEFktaAAXmncQcSHrHYQkoX8ANQAfYciiyJSDNIHkALk4OMhtEbfwAAAAASUVORK5CYII=",
            name: "Personal tentacler",
            description: "Makes creatures hit by a projectile grow tentacles in a chaotic manner",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Personal_Tentacler"
        },
        {
            id: "APOTHEOSIS_SAWBLADE_BIG_RAY_ENEMY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1ElEQVR4nGNgwAMuXX/8n4EAYMIlsWHHuf/INEkGXLr++L+SvCjDxJ4GBhBNjEswAMhmkEZsLiDawEtYFOIzGAP8//+/AZkP0gjCycnJYBqvS+6/OPAfhI9fn/Qf2UCcLriEZBpMM7Ih////d8CmFgzQTYVptPeRBWsG0Qy4wCUs/kK2PbfJGOaCBmy2M+lpyjLee/iaIb+kgQFEg/iKEg6ML95fAiswslQA04yMjGD/w1yM1SUMaHxYAIJokmJgA46QJioNELKJqFRIUmrD5xJiFAIAi2UZi/pekDEAAAAASUVORK5CYII=",
            name: "Personal Giga Disc Projectile Thrower",
            description: "Makes a projectile turn the creatures it hits into living Sawblade throwers",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Personal_Giga_Disc_Projectile_Thrower"
        },
        {
            id: "APOTHEOSIS_CURSED_ORB_RAY_ENEMY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGklEQVR4nLVTy0rDQBQ9E/IDpbRWRGrpSgoudJOstHt/Rb8h+An+UNNV9kJwVUoXpekj+APiyBnnlmnoVRE8MDncmZybO+feAP+JstO3uySx5D8l2CWJJcjaOzEfk/aZ7UYxNh/vGNdLI4fr2QpI0y9WEIn4ZHgKMmM5HG0XZj1b5WQ1QdeL20WxT9LA9LtrxiwbQakuBjCvcldJ9fYCXD5magXjemkoEjFjERO91hWK1+cDE3/syrzKLdft/bmlmPyr1pZ+UxJwPTzduCRlp5+JWFrLOArFNJE86N0Zd3cA1+mF49F2kfmuoPZ+7btTHsnMfX6ZbRU+5oFpVhBmDmckNFk1r2mMVlmIg6lpTpw2IyH0cjy0/0TwCf0z6GncWtSqAAAAAElFTkSuQmCC",
            name: "Personal Cursed Orb Thrower",
            description: "Makes a projectile turn the creatures it hits into living Cursed Orb throwers",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Personal_Cursed_Orb_Thrower"
        },
        {
            id: "APOTHEOSIS_ICEBALL_RAY_ENEMY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6UlEQVR4nGNgoDWoPHPmP0UK73/69J+gusozZ/7/+fv3P7piqFw+smEgdS5bt8LVMYGI0y9fMjz++pVBlpsbp0tA4iB5kLo93t6MWBXch9qA5oViEA0SJyo8KmHeeXEAjI9fnwQ2GJdmRmyCII3I/BfvLzFYauYxggxJU1MDi826dYuh3cQEq36wASBs7yMLdgGIBrkKGYNcBQ9Ml61bwU5Edz4I5zYZgw1BVofiJRckQeSAAvv9xYH/83cHww3AC1ygBiGLwTSCaKJjgQEKYN5B5+OLEdSAxKIQ5k2iDMGmAORNol1ALAAAPW8jzfkPnYUAAAAASUVORK5CYII=",
            name: "Personal Ice Ball Thrower",
            description: "Makes a projectile turn the creatures it hits into living Ice Ball throwers",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Personal_Ice_Ball_Thrower"
        },
        {
            id: "APOTHEOSIS_NUKE_RAY_ENEMY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNklEQVR4nGNgoCVob2//v3z58v/41DDhk3TmrWQ4dOgQA9kG3BVezmBnZ0eeAc/WCv/HxgaBU1MY4F5jwmXAk+dvGbxPNbhGRkYygtgwg0Aa51/NRFW8HEtA3X9x4D8IH78+6T+yreiuYQSFNIjx6NEjhlqXVQxSwW8ZQRqRFb14f4lBe9bUoBvKN9eZ5TAwYjj3FNR0EAaxYbbb+8iCXQCicXmVCUTISAqDOSD/atxVD4JJLpizmGHZ6oUMHd2lDJ8K1TVhlmEYIBX8llH5bSRYgK//5vrXaxzAzgYBI0sFmPj1T4XqgaCoRQ4HJhgD2W8gFz24IAo2xP3TAbg3t5o1rIPFEDwQGXAAWMyAvAUTA9ncvCeMQU5ODsyvrKzErj8zMxMcmDvmBmMNPEL5A6yAoCJqAQBRTazdf0pP0wAAAABJRU5ErkJggg==",
            name: "Personal Nuke Thrower",
            description: "Makes a projectile turn the creatures it hits into living... Nuke throwers?!?!!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Personal_Nuke_Thrower"
        },
        {
            id: "GRAVITY_FIELD_ENEMY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/0lEQVR4nGNgoBAw4pJ4O+HndGS+cAF7JlEGvIVq3H/3AYq4o7ICVoNY0DXDNJ69eeY+mtmKMDXIhrCga4ZpfPj28V0U7TcRBiEbwoLNXyDNrVst1oDYL95fYmj0fWAEYssLyyqjq2VCtx1ZMwhICOox1G9WOPfu46t7IDmQGpBaWFgxMeABCSmxYBdUlHbjVMOEz4AFcxYzLFu9kKGju5Q0AzJtNhmBbAYBI0tI9OE1QLiAPRMUz8bqJoqggBLiF1MCBRzIkJWZ8uAABImB5EBqQGrxxoI8NLQnx3wLAWkE0dhiACMlvsWTkEA2g2hk2zEMgBkCoolNyhRnJooBAGdPjAXG+YWeAAAAAElFTkSuQmCC",
            name: "Personal gravity field",
            description: "Makes creatures hit by a projectile gain a temporary gravity well that draws projectiles in",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Personal_Gravity_Field"
        },
        {
            id: "CURSE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABA0lEQVR4nGNgoBAwYhNsDgzebSZv/A7GP/XwrFDt+rWuRBnQHBi828DLrRZd/MK2Xc3YDGEiRjMIgMRB8jgNaEbSrCXLcRxZEYyPzRAmGAPZz9ce/7CEaQLRID42dRheQAYwTciasQEm5JDGpxCXOkZkDnI4qL6ebQ4Tvy2aehJfTKCAzbNnWtxoM8m//+LAfxA+fn3SfxAfJM6ABTChC4BsZk/qmQDjSwjqMbwPjJuA7CK8BiCDhJRYhhfvLzFUlHYz4AJMOGUYGBgWzFnMsGz1QoaO7lLiDdCoOjPx57ySApDNIGBkqYDPDuwuABkiuH4R2BDL0w8L8JqAD4BCH5nGBgD1EXn3BVwFkgAAAABJRU5ErkJggg==",
            name: "Venomous Curse",
            description: "Imbues a projectile with a curse that makes the target hit by the projectile to waste away",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Venomous_Curse"
        },
        {
            id: "CURSE_WITHER_PROJECTILE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABVElEQVR4nGNgoBAwYhMMzG3eLa9j9g7Gf3jllND6ybWuRBkQmNu828PKoBZdfMexC83YDGEiRjMIgMRB8ujiLPg0f5MpOe5jE8KgwtDCcIehhoGBwcKSgaF5N7JLWGAMkJ+/yeQdV5FRYbjz5A4DiNZQgGgGATAdUXP8+ie7VVhdAAJcT3osnz1hYGCQKTkOMgQEbjD4MGgoGDDceHCB4dmJDEsGBoZCBmwGPLxySkjTygBuEIgGGwaiT4BIC7g6nLEQiBQO9vcbzWHiBxXrT+KLCRQwc/lmixttJvn3Xxz4D8LHr0/6D+KDxBmwACZ0AZDN7Ek9E2B8CUE9hveBcROQXYTXAGSQkBLL8OL9JYaK0m4GXIAJpwwDA8OCOYsZlq1eyNDRXUq8ARpVZyb+nFdSALIZBIwsFfDZgd0FIEME1y8CG2J5+mEBXhPwAVDoI9PYAADTcI6eZ9PTpQAAAABJRU5ErkJggg==",
            name: "Weakening Curse - Projectiles",
            description: "Target hit by a projectile takes 25% extra projectile damage for a time",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Weakening_Curse_-_Projectiles"
        },
        {
            id: "CURSE_WITHER_EXPLOSION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABcElEQVR4nGNgoBAwYhMMzG3eLa9j9g7Gf3jllNBEgyUucsk3MdSzIHMezVX/n38hZo+HlUEtA8MvuHh1yt3jaXNi9jAw1GJYxoTMgWkO0lp73GpXwnGQGIj9/cxxBpA4yGU4/RKY27x75vLNFpcThf+DXPL6YsL//z/vgdkwcRCNbggTjAHz8zG3BZYfj7xhENGoA4tzmlgywMSR1WH1AgxIFPgyvLnRBGaDnA/yBgMOwIIc0ppWBgzmL5uOr2OoA9vmecbz+HauHkuGawgNIHVYXbB+cq3rjmMXmk+KQzTb3280B3kFRMPUgORB6hjwgZnLN1vcaDPJv//iwH8QPn590n8QHySOTT0TugDIRvakngnw8BDUY3gfGDcB2SV4DUAGCSmxDC/eX2KoKO1mwAWYcMowMDAsmLOYYdnqhQwd3aXEG6BRdWbiz3klBSCbQcDIUgGfHdhdADJEcP0isCGWpx8W4DUBHwCFPjKNDQAAvhCq0xmd5XMAAAAASUVORK5CYII=",
            name: "Weakening Curse - Explosives",
            description: "Target hit by a projectile takes 25% extra explosion damage for a time",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Weakening_Curse_-_Explosives"
        },
        {
            id: "CURSE_WITHER_MELEE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGUlEQVR4nGNgoBAwYhMMzG3eLa9j9g7Gf3jllND6ybWuRBkQmNu828PKoBZdfMexC83YDGEhRnNahM9xBgYGSwaG5t3ohjAS0swX5nP806otlrhcwgRjIPuZ/8Ha49g0o6tDMQAZfFQItoxT3oWhGRtgQg5pGPvTuZXHF911s4S5BBkgq8OIhUCkcLC/32gOEz+oWH8SX0yggJnLN1vcaDPJv//iwH8QPn590n8QHyTOgAUwoQuAbGZP6pkA40sI6jG8D4ybgOwivAYgg4SUWIYX7y8xVJR2M+ACTDhlGBgYFsxZzLBs9UKGju5S4g3QqDoz8ee8kgKQzSBgZKmAzw7sLgAZIrh+EdgQy9MPC/CagA+AQh+ZxgYAR7OGDzDrWcMAAAAASUVORK5CYII=",
            name: "Weakening Curse - Melee",
            description: "Target hit by a projectile takes 25% extra melee damage for a time",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Weakening_Curse_-_Melee"
        },
        {
            id: "CURSE_WITHER_ELECTRICITY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSklEQVR4nGNgoBAwYhMMzG3eLa9j9g7Gf3jllND6ybWuRBkQmNu828PKoBbE3vNb7LgL6ytLEHvHsQvN2AxhQtfMYurmAuMHRZuB6bQIn+MgcZA8ThcEItnMF+Zz/NOqLZYwzbNWQNjYXMICY0D8/AvMXrf0FENQtM/xCCYGhhX/UG1EDhsML8D8DXI6TDPIJSAXMeAATMghDaJBmkGaQJpBLgEBGI2sDmssBCKFg/39RnP1ytMTbrabFhxUrD8Jctmf07v24IpOOJi5fLPFjTaT/PsvDvwH4ePXJ/0H8UHiDFgAE7oAyGb2pJ4JML6EoB7D+8C4CSBxogxABgkpsQwv3l9iqCjtZsAFmHDKMDAwLJizmGHZ6oUMHd2lxBugUXVm4s95JQUgm0HAyFIBnx3YXQAyRHD9IrAhlqcfFuA1AR8AhT4yjQ0AAEK2mkhtBlhXAAAAAElFTkSuQmCC",
            name: "Weakening Curse - Electricity",
            description: "Target hit by a projectile takes 25% extra electricity damage for a time",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Weakening_Curse_-_Electricity"
        },
        {
            id: "ORBIT_DISCS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtUlEQVR4nGNgwAMuXX/8n4EAYMIlsWHHuf/INEkGXLr++L+SvCjDxJ4GBhBNjEswAMhmkEZkF7x+/XoKAz5w+vRpB2Q+NptPnz49hagwAAE9TVlGBkxwhyjb8YHTp08XYHOB7P///1GcDOKji0HBWxQD/kMVMTIygp2MQxNWwISkURgmCDMIRMPYaOAxQb/hAuhhxYQmr4KugeRE9BopsWBLTEQDkEYQTk5OBtNUS85kuQSfAgAMq3rQKQNpRgAAAABJRU5ErkJggg==",
            name: "Sawblade Orbit",
            description: "Makes four sawblades rotate around a projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Sawblade_Orbit"
        },
        {
            id: "ORBIT_FIREBALLS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlklEQVR4nGNgoCW4rSv0/1Oh+n+yNH8qVP///03FfxAAGUSW7WDwpgLuik+F6lMI2WqN7gp029ENYcFnIF//TUYswveIsh0f+FSoXgRjMyGJi4G8jKwQEgioYlBwH8WA/1BFjIyMYCfj0IQVMCFpVIQJwgwC0TA2GnhF0G+4AHpYMaHJK1GcEj9B45kmKZFkgC0lUh0AAHhfaq0fjXleAAAAAElFTkSuQmCC",
            name: "Fireball Orbit",
            description: "Makes four fireballs rotate around a projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Fireball_Orbit"
        },
        {
            id: "ORBIT_NUKES",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSklEQVR4nJVTPUvEQBB9exwWKQ0rHGrhKaS8zkaIjSfYik2a+wVpcr2oVf5A/kPAj8JWELmU11lZqSnUg8Q0ObC4ZmViVpJNctEHm9nM176dmWVQ4Ps+4jgGkjtAP8TJ+oV4myWZbdcGU/07qsKyLHDOxVO0KUhOFh6edR8zdlQJJnRrGAiSpweXmCxMbCeWNJG+nUEURSwMQ4yvhiB5P3ezRfRTx/CwDKlj7AkhUFwfN7qYeshW7uMtvQJjFZaq4qXxdPwRqWOM62qwJohzAfSv6nK8lhKI3Inl/BuCatEpBG5JpUxEUu4VRK13a4Jaq65i79NHtmyjp+P6/YzJseacA9PzUgCrOcF72OnbX6uj3zoEQQDTNGnMW3ucQTIg0DvYX7FBb4KgJqkMEoHG1nXdnyTzELePQwwGITRN+x8DqkHv+LPkozblG03ijRXzOGyqAAAAAElFTkSuQmCC",
            name: "Nuke Orbit",
            description: "Makes four\u2026 nukes(?!) rotate around a projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Nuke_Orbit"
        },
        {
            id: "ORBIT_LASERS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4ElEQVR4nGNgwAFk4pZu/w8FIDYudUwMBMDuj/jlmRhoAWTilm5vPQDzwP//IDZUrJ4Yza+NGq/+RwcgMZAcuiFMyJzWA/8NnyyKFn1198KOtoMIcRAbJAaSY2BgeITV5tYD/w3RvQGyFWozSiy0HvifCGOzIImLgZzKyMjICOI8WRTt+fj///8gNiOjtieafc9QvPAfrhCiGcYnBjAhaZSCCYL4IGcbN11jAGEsCekVrnBIxBeN2MIKBYCiiFA0MhACrRBDcLqAaADLTLs+UJCZQBnJlR+/RXgNIKQZpAgAmjDNWLdg6O4AAAAASUVORK5CYII=",
            name: "Plasma Beam Orbit",
            description: "Makes four plasma beams rotate around a projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Plasma_Beam_Orbit"
        },
        {
            id: "ORBIT_LARPA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhUlEQVR4nGNgoCX4/////4+7/v8n24CPu0BGQAz4cfX/FIpd9GktAUM+rf2vQ6ohTGQ45ArZtsPAp7X/M7C5QBwWYDAACUKssXAbxYD/UEWMjIyMyHxiABOSRlWYIMwgEA1jo4GXBP2GC6CHFROaPNEBic+GKRQbAku2yEmZLEBxZiIGAAB6jlRf+GygzwAAAABJRU5ErkJggg==",
            name: "Orbit Larpa",
            description: "Makes four copies of a projectile rotate around it",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Orbit_Larpa"
        },
        {
            id: "CHAIN_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAS0lEQVR4nGNgGLTgPxQQUsfEMOjA/xuFcGf/T1b8T5rmqUEoGnAZgDV8/mNRjG4gTgP+43EqLkPIChNsfNIClVLX0CRFMpFn7GACALLnQp3H/hooAAAAAElFTkSuQmCC",
            name: "Chain Spell",
            description: "Causes a projectile to cast a copy of itself upon expiring, up to 5 times",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Chain_Spell"
        },
        {
            id: "APOTHEOSIS_SPLIT_SPELL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzklEQVR4nGNgGGjASKzCxy9WJMDYshIRC2BsJmI1P313ej4DA8N8EI1sGAuxLpAWMmWQFgvBEGfBp+nU1UgzBgYGoedvN8r/Y5QCiz19dxpsGEYYnLhWLM/AwMDF9P8ZL0jTP0YpCagUSLwBxGD6/yxRUtgfJQwYoTaBNTMwMIA0n0R2BcxmkGYGBoZrZtrLTyHLM+JxAUhYgigXEAoDBgYG83+MUg0gv0PDIBFmCAtO3QwMDDDnPn6xAhweJMcCMgDZjDcWGAgAXClxGAAAGkRPPKOvMXcAAAAASUVORK5CYII=",
            name: "Split Shot",
            description: "50% chance to duplicate the next cast",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Split_Shot"
        },
        {
            id: "ARC_ELECTRIC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAeUlEQVR4nLWSUQqAIBBEpwi65f53Iv/dbtEB+rXjCEqBCxLSShv0PgR1dmYQgQ+cheaQQ3oUDzIAYD0ygG3PfpkNaRyS5q1CLuqXmJq92HtYYFMlLupmhjolq/RVDt2cyEUOSVa8txARudh/OrUngNEwZ6L+t98SKhcL6UU0HuOoewAAAABJRU5ErkJggg==",
            name: "Electric Arc",
            description: "Creates arcs of lightning between projectiles (requires 2 projectile spells)",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Electric_Arc"
        },
        {
            id: "ARC_FIRE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAoElEQVR4nGNgIAP8BwMGBoZzBvIEFTPBWecM5OXCJAlqY2JgYGBkZDxvqKC53AciZHThIVEOe9Nm8f169ps2izdtFnARfE56tOo5AwMDd6AxXESk6gRhe84ZyH+/ng3xBjFhgNADd9s5YrSdM5CHeAmfH5ABPKAglrzB5nssAGLJOVQnYbcBAiDhprnchzR7IP4hNsTgeuDpjVhAsgY4AADrrE+qssRDEAAAAABJRU5ErkJggg==",
            name: "Fire Arc",
            description: "Creates arcs of fire between projectiles (requires 2 projectile spells)",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Fire_Arc"
        },
        {
            id: "ARC_GUNPOWDER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAyUlEQVR4nGNgIAP8BwMI+0OlCX7FTHDW9/PxHypN2MO08WtjYmBgYGRk/FhlyqJgAVct0H4GruIDLs2/30///X46RPr7+XgC3vgOds/38/G/30+HqIaIYFf9ASaBrA1N9QdMzcjakJ33odIEWTUilOAe/bnq6p8HJxgYGNjDtCHOYwcHBj63QdgQ/3yHBQCBKIIohYfBB5hqhJMwAafhwj8PTrAoWMAjFLsGiGGchgvh/mEP0/656io+96A5+kOlCXJ6IwqQrAEOAFMthj+5cFp7AAAAAElFTkSuQmCC",
            name: "Gunpowder Arc",
            description: "Creates arcs of gunpowder between projectiles (requires 2 projectile spells)",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Gunpowder_Arc"
        },
        {
            id: "ARC_POISON",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAp0lEQVR4nGNgIAP8BwMiFTPBWdXa9cRqYGRkrNFpkJGRIUYPE4S68+DGkydPiNHDBKFWfl3JwMBApB4oCOcOh5DT3WdD2AQ8vRJsiYqCxoEjexxsXHDZw4QptPLrSjxuY8RldbV2vYyMzJMnT1qvNuKzAdn1B47skZGRQfMPugaITyABDXGbg40Lsh6cToJbqKKggdVtWJTC00u1dj1J6Q2kmTQNyAAANQNS4CZQOMgAAAAASUVORK5CYII=",
            name: "Poison Arc",
            description: "Creates arcs of poison between projectiles (requires 2 projectile spells)",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Poison_Arc"
        },
        {
            id: "CRUMBLING_EARTH_PROJECTILE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoElEQVR4nGNgoBAw4pKY7m38H5t45tazjHgNmA7VuOPMA6wGe5gooBjChK4ZpBGfZpAcsuuY0DXjAjDN6IYwMZAANr58ywhyPrI3mAhpAilGBzjDAJ+zkTVhDQN0ANOETTN6QMIBSNBfXBiMcaUDmDpccgwwQ2CKQDReDdgAsmZcLsIajdOhgujJFRvAUIPudGRxZDGC/senEJclJAF0zQAesHwhpNFQhQAAAABJRU5ErkJggg==",
            name: "Earthquake shot",
            description: "Makes a projectile crumble the earth it hits",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Earthquake_Shot"
        },
        {
            id: "X_RAY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA90lEQVR4nGNkwAD7q4/D2Y6tlmiyLJiqJ+5pQeY6ouphxFRtzeBi4mLBwMBwZs+Jowx78l1qMO2Bqu42799fffz37f/////7///f79v/4YIMyDZA+DYJIFNZVP6jGfTnDkjNkQUnIF5COGl/9fEze0CiEPdAAFzEEeYqFE8fZdjD+uo/wx6EyKlXu3+LMZowIIxA0fDyw2txMdGjyDrEGF9+eE0glND8kI8aSkxo0mjmoXGxgP3Vxy3VzeAIOUAZwADdBgYGBnEBUTQGMoD6AW5S1Zp8ZHUvP7xuC5kIYUN8Ao04NHWYAKITFHHEqEbWA9JAUCkyAADVV3sK7YLSvwAAAABJRU5ErkJggg==",
            name: "All-seeing eye",
            description: "See into the unexplored. But not everywhere...",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/All-Seeing_Eye"
        },
        {
            id: "APOTHEOSIS_MIND_VISION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoElEQVR4nGNgoDbYX338P0UG/L79/z/ZNv++/f//////wDTZLvlNoguY0AWOLDhBkoWM2ARxOd+x1RJDPQs2jRP3tDC8/PCagYONHSz+49dPBnEBUbg8skGMyJphGmHg0JaTYNrOxxwuBjIo36UGbggTNs0gm0GaWVT+gzGIDXMNSA1ILcw1TAwUAkZKvcBISiCCNOIMRGwGoQNs0TjwAADHv3J4QSU9EAAAAABJRU5ErkJggg==",
            name: "Mind Vision",
            description: "Creatures hit by a projectile are temporarily revealed through fog of war",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Mind_Vision"
        },
        {
            id: "UNSTABLE_GUNPOWDER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA90lEQVR4nGNkwAI+t3P/5638yjjd2/j/jjMPGHCBjS/fMjLikvz+vP0/iF6QsoYBnyFMOGXunGAgBjBi2HzY/z+n7UawOCEvYHUBJ1QzDHiYKIDpJQU/iHMBciCCOQRcwoRNEKQZ5BUQG0QnVMjAXYIOGBnwALAhKhYQzp0TDAs6nmDECBOI+P///39sNFwzFIBcgh4WLGBnMELSAzoNjkqQISi2cxAOA5QYgWqOsbnBgA0wwUIdWRCZD7M5ZgKqzVgD8fvz9v+ckpVERR+KC2CakZMvzBW4og+rC9ATEMzQP0f24PQCSiAiawYDqOYlRzSwagZlZwD1TYokO7wj5AAAAABJRU5ErkJggg==",
            name: "Firecrackers",
            description: "Makes a projectile release firecrackers when it disappears",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Firecrackers"
        },
        {
            id: "ACID_TRAIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkUlEQVR4nGNgGAW0BfnT5f77ZYmCMYgNEwMBnBoYkGiQRmSDYJph4gRtZ0AyhCjF6GySQT61NOejhQU+wEisBdO9jf9nbj3LCKJxGpA/Xe7/xMxHGIaCNO0484DBw0SBAUQjAyZkE2GakZ0O0wwC6JrBBoAEYYbAaJhByJpxAbBCf3Hh/zDngWgYIKR548u3jACee2YPLafjPwAAAABJRU5ErkJggg==",
            name: "Acid trail",
            description: "Gives a projectile a trail of acid",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Acid_Trail"
        },
        {
            id: "POISON_TRAIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAWklEQVR4nGNgGIGAEavorYwNJ2/dZGBgMFdTV5sRcCtjg+p0f0ZGVMW3MjbAycVOnRD2YqfOWxkb/v//DxHBDpD14FPBgF8RHm2kqb6F5BNqg1vkmUqav2kCAJr4Kfmxk8KSAAAAAElFTkSuQmCC",
            name: "Poison trail",
            description: "Gives a projectile a trail of poison",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Poison_Trail"
        },
        {
            id: "OIL_TRAIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlElEQVR4nGNgGAUUA0YQ8f//f6yS4eG2/zk4uMBsFRUxhtraxSD1/5csKWaIje0D62VC1wCi4+PdwTRI88KFOxl//PjGcOfOK4bm5liw5piYXlSb/v//j4Hj4tz+g+iwMBswjY5RQBiSIphGQhirC8Jw2EaUAXFINsMMwucaomIBH2BkBGtlwBoLJANcMUB0GAwoAACNqdnYsdX6ogAAAABJRU5ErkJggg==",
            name: "Oil trail",
            description: "Gives a projectile a trail of oil",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Oil_Trail"
        },
        {
            id: "WATER_TRAIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkUlEQVR4nGP8//8/AyWAiSLdw8MAFnySjP6T/zNwCkE48lYM/zsVGRkYGP6LT2ZgeJnLwIjhAkaQBhAdsRQSNZxCDP9XRDMyfH/HwPDwGANj+X2YZgT4//8/VswQvuQ/mPabBKZxqvuPpgimkVjMgMIhYBteAxiQbIYZRIxrGKmalBmhsUASwBcDxGDqeoEcAAC4ZwVmnoEB/wAAAABJRU5ErkJggg==",
            name: "Water trail",
            description: "Gives a projectile a trail of water",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Water_Trail"
        },
        {
            id: "GUNPOWDER_TRAIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABH0lEQVR4nN1Sr2rDYBD/Xb/JqkBNIURWpLJPMBFT2cHEnmGvMLE3mYjIYDAzU7EniFsqKkcgJjBVG278LrnACFVxO5F8fLn7/buIqmJOLWZN/w+AGz4+nw44njpkacDPd4fNPsb5o+YnSzhK+vsoCbLarrWtGtw+v8mo4HjqsFuCTcrmvKjtzdrsY3FQAhJ4tV2PCoRr/Hp9NEY2EZ1FpryoJUuDOttVC23VKJkIUl6guyUEaGRQdXV4oiBKgnKgvMAsuQ23kBe13bPuXt4xZtBWjTE7G2UThDaG8Kzn4T4eQb0WzpClwZiHUOmdjHbH7wyOIDxPMigpuQfh2oRnNrpcsnrIQB/yHwVkGyTbymiHHjnIIc/AFUzWOKdm/8q/y8qpr9H7tqwAAAAASUVORK5CYII=",
            name: "Gunpowder trail",
            description: "Gives a projectile a trail of gunpowder",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Gunpowder_Trail"
        },
        {
            id: "FIRE_TRAIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAPElEQVR4nGNgGH7g+27nwWD214kuaNq+368mXzNRqiGM7/erIYyvE13+//+PUxvcPXBt////p2XoDX4AAFxkJY4qlL0mAAAAAElFTkSuQmCC",
            name: "Fire trail",
            description: "Gives a projectile a trail of fiery particles",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Fire_Trail"
        },
        {
            id: "APOTHEOSIS_TRAIL_LARGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAl0lEQVR4nGNgGDTgPxT4Tzj+n2wD/MnVDAIwzaYlK8k3BAZIMYSRkAJln/z/LFx8YDafnA7D6Z5wRpB3AyaeYNhYYMnIhE0DiFYPqwXTIM03VzUz/vn2ieHToytg14E0b8i3IOw8daghMEMJOpUBTSNZQBmHbUQFrDqSzehhgWwIxenl////uA3AF2AwzXgNgAGKApIUAAB9KWASOEx4OQAAAABJRU5ErkJggg==",
            name: "Trail Enhancer",
            description: "Significantly increase the amount of material produced by other trail spells in the wand",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Trail_Enhancer"
        },
        {
            id: "BURN_TRAIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAi0lEQVR4nGNgoAr4Gi+PS4qJoIqvuKUQ4MeyDAI2YDUSq9lMWJUiW/IVVRsWG5jdPTG1EeVppg4sPmGBUNwLHyIb+d+RULAiOwaumnE/yBRmd09k+7H4AQ383bkdbj+6hr87t8PZEOMxAYoGiEkQpXCHIRuPxUlwSyDakO2EimNa+jVeHuJ7NNeTCQAcRDhxWDsZagAAAABJRU5ErkJggg==",
            name: "Burning trail",
            description: "Gives a projectile a tail of fire",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Burning_Trail"
        },
        {
            id: "TORCH",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAkUlEQVR4nGNgoAq4bsZHHYMI2IDVHhasGuT8Fa8z3McqxYTbGpA2omy4bsbHFGQjB2NrnvpE2IZ/645wVV0AacOwBIsGOX9FpiAbBgYGDo0pRPmBKcgGq1KcGv6tO8KAGzBhFf1xIwdCcldfRJNiROMfnu7DwMBg4iDPwMDAqTkVj1UgML8hqCDKkoAiMlUTDwAw8yNBwClZ7AAAAABJRU5ErkJggg==",
            name: "Torch",
            description: "Lights your wand right up!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx0ieVMuyet6mBgYGhngxzGu9duAnSy8AI87KkkgzZhnHycdffu3CTEcWFIMHvn76CLfEriCTatE0Tlv+nTxhiA7vnbWLABVyT/Eg30BWHJnyAiWQdowaig1EDKQcsyBxOPu7G75++/t80YTmp5jRiGPj901dwqcHJx02SSSB93z99BRddIAAvvqgFqB6GAKInM2ZGCqHPAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Torch"
        },
        {
            id: "TORCH_ELECTRIC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjUlEQVR4nGNgoAWoeff/PzLfcvHz//QxtAZNETr4/x8ij1fdf6gibDaA5ECaCXrpP9QQdNdhE8cAINNhAJ2PbDNWb9S8gzgRxkYGBJ1tiaYAxEc2hCi/IwNkpyMDBlLAfyTbkfkwC/BqPjzd539BlCXWwIN5j6BmBiRNyPJ4Nc9vCELRDANEBSAuzTQFAGsN19u3PNHPAAAAAElFTkSuQmCC",
            name: "Electric Torch",
            description: "Gives your wand a bright but very dangerous light!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx0ieVMuyet6mBgYGhngxzGu9duAnSy8AI87KkkgzZhnHycdffu3CTEcWFIMHvn76CLfEriCTatE0Tlv+nTxhiA7vnbWLABVyT/Eg30BWHJnyAiWQdowaig1EDKQcsyBxOPu7G75++/t80YTmp5jRiGPj901dwqcHJx02SSSB93z99BRddIAAvvqgFqB6GAKInM2ZGCqHPAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Electric_Torch"
        },
        {
            id: "ENERGY_SHIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApUlEQVR4nKVTwQnDMAyUhUboBiHQUfzIEBotQ+SRUQKhG3QE0xRBFYwiuw6+j5F1dxKyDNCJUEqsr3TkcRzI5VJJuOzJvbdGZEkq3N6fFQDmX4oBUlRObhKs2Agt+PnAOI10doIOqSR2c+hUr0I4wtWZ4I3qLgehE2hibtDwxSAOFGSyMuF/6pZX4NbqgpAHtUXS7vLqFwM1kdOusggFdpW7P1M3vnCWWxD7VC2hAAAAAElFTkSuQmCC",
            name: "Energy shield",
            description: "Deflects incoming projectiles",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx0ieVMuyet6mBgYGhngxzGu9duAnSy8AI87KkkgzZhnHycdffu3CTEcWFIMHvn76CLfEriCTatE0Tlv+nTxhiA7vnbWLABVyT/Eg30BWHJnyAiWQdowaig1EDKQcsyBxOPu7G75++/t80YTmp5jRiGPj901dwqcHJx02SSSB93z99BRddIAAvvqgFqB6GAKInM2ZGCqHPAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Energy_Shield"
        },
        {
            id: "ENERGY_SHIELD_SECTOR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAj0lEQVR4nGNgoBAwogu4LPkWriHCtMJHlQXM91BmYSTJACRDEkD6CRnEiE0QZgiIBrkGRIMMwmYIIy4DkA1hYGBI0BBh8sBmCBMDcWABLgkmfLr2xHCthLFvvPm3Y8vtPww77v75T44LcLqCiYFCwESC2gSSDXBBxAIDpbGQgEuCkZDtZCUkipIyqZmJYgAA/l8tFridbvMAAAAASUVORK5CYII=",
            name: "Energy shield sector",
            description: "Deflects incoming projectiles",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx0ieVMuyet6mBgYGhngxzGu9duAnSy8AI87KkkgzZhnHycdffu3CTEcWFIMHvn76CLfEriCTatE0Tlv+nTxhiA7vnbWLABVyT/Eg30BWHJnyAiWQdowaig1EDKQcsyBxOPu7G75++/t80YTmp5jRiGPj901dwqcHJx02SSSB93z99BRddIAAvvqgFqB6GAKInM2ZGCqHPAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Energy_Shield_Sector"
        },
        {
            id: "ENERGY_SHIELD_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5klEQVR4nGP8//8/AyWAiSLdDAwMLCCCkZERzNlx9w+Y3nIbQsPAjTf/GEos2f57KLNAFDIwMMBczgITAGmGaQRpQANJILkdd/+gGAL3wg6oZpBGLJpnMTAwfL3x5t8OmCEYBhAAe6H0AmySTCACZjsOsBLGwOYKFhAx2Z0dl2awQtel30H+Doe6wgPDBQxQhVhogoAFROTu/MkI9QIshNFpkO0gkIBuABOI8FFlYdAQwRmeMM0gNR4gtchRyUSEK4Nw2Q524v///8EpkVBC0hBhmotsOywlwg0AAXKSMtgASgDFuREA2yp5UXSeGjQAAAAASUVORK5CYII=",
            name: "Projectile energy shield",
            description: "Gives a projectile a shield that deflects other projectiles",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Projectile_Energy_Shield"
        },
        {
            id: "TINY_GHOST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApElEQVR4nGP8//8/AyWAiSLd1DCABZfEss1nkf3GGOVrTLwLlqFqBoH/WMSwG7AMh0JcckxoCuDsHZuWg+k7Ny+j8Am6gIGBgRFEePhFogii87EaEIUloFTUdRlIioUoX2O4V5CdjcsFLLhMBmlG1oTOhwFG5KQMDWVQGMAFQYGI7I0oX2NwGOELxP/IHGTNOzYtR9GMzQAMBchyBL1ADqA4MwEAtao/KasI11EAAAAASUVORK5CYII=",
            name: "Summon Tiny Ghost",
            description: "Summons a tiny ethereal being to your help. It may cast stronger spells depending on how much damage you have suffered.",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx0ieVMuyet6mBgYGhngxzGu9duAnSy8AI87KkkgzZhnHycdffu3CTEcWFIMHvn76CLfEriCTatE0Tlv+nTxhiA7vnbWLABVyT/Eg30BWHJnyAiWQdowaig1EDKQcsyBxOPu7G75++/t80YTmp5jRiGPj901dwqcHJx02SSSB93z99BRddIAAvvqgFqB6GAKInM2ZGCqHPAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Tiny_Ghost"
        },
        {
            id: "APOTHEOSIS_AUTOFIRE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA50lEQVR4nGNgoBAw4pKYe/H/VBg7WZ8xG0Tff3HgP4h+8f4Sg6VmHiNWA+ZCNcI0wQBMMwwgG4LVVnQAMgCE7X1k/x+/PglME60Z2QAQzm0yBhsCEmdiIBIoSjgwgpwNAkaWCgx4bbfuOvYfhFc++v7fZNeb/////4M7F2YzjMbpfGnPHLBGEAYZxEAskPbMAdsOwiDbQZr////PgIyRLWVB1qjgGAVmP9i/jOHp9imMIEPCXC1xphWwAdJYNCIrYGTE1A+yHSWdSHvmEO9HfFE+l0BaIEoNSAE2RbjEicpMIICeN6gGAIMwsq5YWpfqAAAAAElFTkSuQmCC",
            name: "Auto-Fire",
            description: "Causes the wand to automatically shoot if there's nearby enemies",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx0ieVMuyet6mBgYGhngxzGu9duAnSy8AI87KkkgzZhnHycdffu3CTEcWFIMHvn76CLfEriCTatE0Tlv+nTxhiA7vnbWLABVyT/Eg30BWHJnyAiWQdowaig1EDKQcsyBxOPu7G75++/t80YTmp5jRiGPj901dwqcHJx02SSSB93z99BRddIAAvvqgFqB6GAKInM2ZGCqHPAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Auto-Fire"
        },
        {
            id: "OCARINA_A",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAVklEQVR4nGNgGLRg2bJl/yky4P///0QZwESRLaQasIwUb/3H4gVivYVVMYyPLs7EQAIg2wX/cbgGBFiIsWH58uV4+Vg1kxTiy9AUk5UKQZpggGTNAwoAvlFNYx6iJgkAAAAASUVORK5CYII=",
            name: "Ocarina - note A",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Ocarina_-_Note_A"
        },
        {
            id: "OCARINA_B",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXUlEQVR4nM1SQQrAMAiLpa/0gfaZGTtsiDBQO9hyUjAxEYHfwsy4JUAyJTC2tgCYnTiqKqUIDHF8P7NWPUlE3nMw0MBa667lSdlbTR2RgVx6JAvDrS88SRfK5E9xAPArSJDIO56KAAAAAElFTkSuQmCC",
            name: "Ocarina - note B",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Ocarina_-_Note_B"
        },
        {
            id: "OCARINA_C",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAVklEQVR4nM2SwQoAIAxCZf//He4zjQ5BRIS1S563N5UB34qkSgBJFiBKV24AJLsp2dE0RViXLIgmwKmPQFHhDGUmrAhadFWiNguOO+yGn75wWHQ/8B81NHNZFpWskv0AAAAASUVORK5CYII=",
            name: "Ocarina - note C",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Ocarina_-_Note_C"
        },
        {
            id: "OCARINA_D",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXUlEQVR4nM2SQQpAIQhEVbr/McZjTrToI0Efy02zSnKeaYo8KwAsAUimAFaqkgUA4FSazJAcz+nZcANYY5Oi7NQwWlBVnXHbPS3K3b+7aJY/M04WCUvy1RZe/fUT6oJpTV4dWJPJAAAAAElFTkSuQmCC",
            name: "Ocarina - note D",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Ocarina_-_Note_D"
        },
        {
            id: "OCARINA_E",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWklEQVR4nM1SQQ7AMAhS0/8/A5/JrqRJN1sPKzeNIqhm1wIAWwQkSwTRmlIlAEBFyR7FwpudqEpdTR5VAnf3loIVQgNdlOYz0z6XyKlp65EwFR99od56u/lXPBOOXEGnPbFWAAAAAElFTkSuQmCC",
            name: "Ocarina - note E",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Ocarina_-_Note_E"
        },
        {
            id: "OCARINA_F",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWElEQVR4nM2SQQoAMQgDa+n/nxGfmb3KQkpaD7u5CWY06Bi/FQC2ACQtwGxNcQEAWGXFY4mwizPdVdXk5QIiIlobKK1aqKyZKQHSfPRIeDVffWG99bH5Uz2wDkVmwAtPBgAAAABJRU5ErkJggg==",
            name: "Ocarina - note F",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Ocarina_-_Note_F"
        },
        {
            id: "OCARINA_GSHARP",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaUlEQVR4nM1SSQoAMQgzpV/q2/ojP+OjMvQgDNLS7TCTiwsmUVDkt1BVXgmQXBJIVy6rAmZG3yjGPCO3QQBoea2VLviuu4hOo36SjROuNuAgokdy+O3uWErB1PHokTQMH31hIzm2yZ/iAQmpdY1l/Hr6AAAAAElFTkSuQmCC",
            name: "Ocarina - note G#",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Ocarina_-_Note_G#"
        },
        {
            id: "OCARINA_A2",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZUlEQVR4nM2SUQrAMAhDtfT+x9BjZhQqDNdtafux5ccPzZOgIr+VmWELAIAClK0tLMBSHCoeeoRcw/waETeA3C9MhJFZVZUGaB/O5qb6tKnJ3S815s4gyeapR7KVM40goWnzpzoA8gJhQBLIGEwAAAAASUVORK5CYII=",
            name: "Ocarina - note A2",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Ocarina_-_Note_A2"
        },
        {
            id: "KANTELE_A",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYElEQVR4nGNgGLRgZ2vcf2LUMeGSMHcyY6DIAGIBE6XeYiLFAGK9BQYfjk/5j42PLs7EQAJA10y04g84XAMCLMTYcHLfKbx8rJqJTUgM2BSTopkRWRMsmgQsc+Digx8AANJtNLHoKQUEAAAAAElFTkSuQmCC",
            name: "Kantele - note A",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Kantele_-_Note_A"
        },
        {
            id: "KANTELE_D",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbElEQVR4nGNgGLRgZ2vcf2LUMeGSMHcyY6DIAGIBC7HegblIwDKHkSiTPxyf8h8bGz1smBhIBO7VixiRDWRioBAwkaoB5AXkcGBBlkR2GjI4ue8UXA5nIH5A00xsQmLAppgUzXDnkBXXgwIAACi1MUMzPLEjAAAAAElFTkSuQmCC",
            name: "Kantele - note D",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Kantele_-_Note_D"
        },
        {
            id: "KANTELE_DIS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhUlEQVR4nGNgGLRgZ2vcf2LUMeGSMHcyY6DIAGIBEyEF+yfk/f9wfArcOzA2jGYhZIChuRqDgGUOI0jDhlW7UMJnQaHff5K8kNC/iRFEu1cvYoTxmUgxAGQj1V3AiKwAObBAAOR3UCDCwgGv6R/QNBObkBiwKSZFM9xZIE2w1EfQuYMKAAAb/kNWozUdlgAAAABJRU5ErkJggg==",
            name: "Kantele - note D#",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Kantele_-_Note_D#"
        },
        {
            id: "KANTELE_E",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAa0lEQVR4nGNgGLRgZ2vcf2LUMeGSMHcyY6DIAGIBC7HeQXbRyX2nGNyrFzESbYC5kxmDgGUOWAPZXvhwfMp/bAHLQqwBFLsAF2BBdyY2RaBAQ5ZDDkScmolNSAzYFJOiGe4M5LjGFWCDEwAAANUuGpXtn5AAAAAASUVORK5CYII=",
            name: "Kantele - note E",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Kantele_-_Note_E"
        },
        {
            id: "KANTELE_G",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbElEQVR4nGNgGLRgZ2vcf2LUMeGSMHcyY6DIAGIBEyle+nB8yn9ivcYAUoysGd0wkgz4gMRGByxEOQfJZljgCljmMBIdBif3nQLT7tWLGGEaYYARl7ORbcFlOwM+zTuJDW0GckMZCoh34qAFAJ/GOnQB9+1KAAAAAElFTkSuQmCC",
            name: "Kantele - note G",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Kantele_-_Note_G"
        },
        {
            id: "RANDOM_SPELL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA50lEQVR4nJ2SMQ6CQBBFJ8bCS3gCDwC3kNrWylMMNBbG3sZQYmK1FBZYEAqL4QKewStYjRnCwoK7BPjJZmez+W9mdhbAEOakYK4wJ8XMrCEnJIVJvejRARPG9kRomLknDRGznJ2QwmJuIccGMsp8IVSybBCtpXlYwRsAvCp+lmF68KNA4g+tVejttxJv4Dv8mISxygibLEjXTgV34270ZLQod5gT/J//JDMzcx+C5xZAsbvsxS7yg1tYprKPbq03CaekKsJudjFLVU5IVr+ybq1qwQJxmsUgO+HLADh+3lAFIoFMMs/RD2ItHyhmhpnsAAAAAElFTkSuQmCC",
            name: "Random spell",
            description: "Casts a spell, any spell, at random!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Random_Spell"
        },
        {
            id: "RANDOM_PROJECTILE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8ElEQVR4nGNggIL6fSc2MJAL6ved2PD/////MEPql53YAMYntmI19ET9PEzxeqjmrnqIYTBQf6JtA7pmkDhWQw5ANe88Ub9hOhTjMgTGZkKW4GC4BmdnWjQGwNjaDD9RLLJoTILLYQCQ7TB2/Yk5EOfuQ4iRHLAnKNI8r/45IbVMIGJZPVoaOMdgDqYfMpwkaNsyaMijG4JhKCFDGLAYihxdm+97g9PF7f/V/4ky9ET9kQ39h9X/wzQiA2RDmNA1wqLxuEuyv4qMCoOGggHDHYYaMAYBEH3jwQXstoI0w1IisjjMJSCbQTRep6NrpjkAAJ0b1H+w6TYAAAAAAElFTkSuQmCC",
            name: "Random projectile spell",
            description: "Casts one random projectile spell",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Random_Projectile_Spell"
        },
        {
            id: "RANDOM_MODIFIER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVR4nGNggIL6fSc2MJAL6ved2PD/////MEPql53YAMYntmI19ET9PEzxeqjmrnqIYTBQf6JtA7pmkDhWQw5ANe88Ub9hOhTjMgTGZkKW4GC4BmdnWjQGwNjaDD9RLLJoTILLYQCQ7TB2/Yk5EOfuQ4iRHLAnKNHc0dHxf/Hixf9h4kUZKXA2Shgsq0dLA+cYzEGUw/fvG58+fcoAMsjf2/P/3cdP4UouXrwIMWwZNOTRDUHmg2wGGXCrrg6MQa4C0VgVIxsKii6YZpgmdM2MDDjAifojG1a9XOAPcvbGrdsZYWFhfvs2w9PLlxkc169nxEgHDEjRiKwZJqenpwfWjBOANIOcDnM2TBzm7P2BgRixgNUQXHJEGUAqAADfLvYdUolNsQAAAABJRU5ErkJggg==",
            name: "Random modifier spell",
            description: "Casts one random modifier spell",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Random_Modifier_Spell"
        },
        {
            id: "RANDOM_STATIC_PROJECTILE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABE0lEQVR4nGNggIL6fSc2MJAL6ved2PD/////MEPql53YAMYntmI19ET9PEzxeqjmrnqIYTBQf6JtA7pmkDhWQw5ANe88Ub9hOhTjMgTGZkKW4GC4BmdnWjQGwNjaDD9RLLJoTILLYQCQ7TB2/Yk5EOfuQ4iRHLAnKNI8r/45iJ+w+/t/ZIyslgVELKs/sSGq0QLhr3MM5gyODAwMDxlOgjQcTbBDsQAktsCVk5EBpvn/////QTSyIhAfpFBV2hSM69OXwNkgjOKSZVg0gwxFNgAZw+Tg0RiF7Hwo/2TD0Y1gtk8+QhzKVpMxYyAqGhPQvABOVFCvoAcmXDMsJeIyBF0zJCTRDHFHSoUwQ5D58BigBgAApBL9eAiZpjcAAAAASUVORK5CYII=",
            name: "Random static projectile spell",
            description: "Casts one random static projectile spell",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Random_Static_Projectile_Spell"
        },
        {
            id: "APOTHEOSIS_RANDOM_HOMING",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3klEQVR4nGNggIL6fSc2MJAL6ved2PD/////MEPql53YAMYntmI19ET9PEzxeqjmrnqIYTBQf6JtA7pmkDhWQw5ANe88Ub9hOhTjMgTGZkKW4GC4BmdnWjQGwNjaDD9RLLJoTILLYQCQ7TB2/Yk5EOfuQ4iRHLAnKNI8r/45IbVMIGJZPVoaOMdgDqYfMpxE13C9oOA/isAyaMhD6H9wSQxDGRgYTru4/AcZAKIxDGHAYihydIE0wmxHZmMAmCtO1B8h3gUMSAA5GtENBQGcNsM0w1IiukaiATYX0BQAAAR0y/D2tEnyAAAAAElFTkSuQmCC",
            name: "Random Homing",
            description: "Cast one random homing spell",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Random_Homing"
        },
        {
            id: "APOTHEOSIS_RANDOM_BURST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVR4nGNgoBAwInPql53YAGYovWVotPAOIMmkrvoTG/4jgfoTbRDDiAEHoJp3nqjfMB2KCRlyon4eWI4JRHAwXINLZFo0wp2uzfATp2bzhkR/mCFgALIdwmJgqD8xB+yCE/sQYq9fv/7PgARQNCOD+n0nsGpGxigasGqeV/8cWRzdABDevXv3f3gYwME5BnMw/ZDhJEwIm40XLlxgcHV1RUkCcLCsHpoWGBgYysvL/+OzHUPTMmh0ggKIJM3/////DzPkRP0RME20AQxozoYBkEJ8mkEBjmEQcloAKUY3BGYALLZQDAFphiVndJfAMLI4QRdg8xI2CQBI7UXSuquJQgAAAABJRU5ErkJggg==",
            name: "Random Cast",
            description: "Multicasts an unknown amount of spells",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvpgvShGggSZL12GcRk3Dt7BtGmOadm/KdPGGIDdv1TGXCBQ4XZpBt4CIcmfICJZB2jBqKDUQMpByzInN9auo2s1y7/d07NINWcRgwDWa9dBpcav7V0STIJpI/12mVwSQMCjIO+xAYAngku8jFGEvoAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Random_Cast"
        },
        {
            id: "DRAW_RANDOM",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1ElEQVR4nGNggIL6fSc2MJAL6ved2PD/////MEPql53YAMYntmI19ET9PEzxeqjmrnqIYTBQf6JtA7pmkDhWQw5ANe88Ub9hOhTjMgTGZkKW4GC4BmdnWjQGwNjaDD9RLLJoTILLYQCQ7TB2/Yk5EOfuQ4iRHLAnKNI8r/45utzvK7n/kflMIGJZPVoaOMdgDqYfMpxE18yiPQnVxGXQkEc3BJ0P0gwDGE5ehkUztrjGaQA2cKL+CEbgEWXATqRoJNkAkGZYSiTLAHwuQA5E9KikCAAASJ3dxIeiifgAAAAASUVORK5CYII=",
            name: "Copy random spell",
            description: "Casts a random spell among the spells in your wand",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Copy_Random_Spell"
        },
        {
            id: "DRAW_RANDOM_X3",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5UlEQVR4nKWSMQ7CMAxFDRN34QD0GByhYmPsCawuDAxZWVDHzlkYKqSKgcEsjEiMTJyByahtHNIklSh8Kapr5/1YTgCMsCYNvwpr0szMYoIl6XbRIWpKWIR5NPAWOzMR0kb7cJOPmpwMXBHqnVlDJhJP3cIMbjZeJ/lS4jm8egcl+crWAjWnS4y079qtP7nRg6W/4AKfbt5OVinuzaBE7w1cYdF+H3CxsFI8MYIsa/9BYGZm3yQw9TtxuoAY7G5qwkF4SIRn7cNfmVTONQrsm8gso7C8RL92T9Pj6A6C1pUKrvFvvQHPRvCF6G2rowAAAABJRU5ErkJggg==",
            name: "Copy random spell thrice",
            description: "Casts a random spell among the spells in your wand three times!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Copy_Random_Spell_Thrice"
        },
        {
            id: "DRAW_3_RANDOM",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3ElEQVR4nGNggIL6fSc2MJAL6ved2PD/////MEPql53YAMYntmI19ET9PEzxeqjmrnqIYTBQf6JtA7pmkDhWQw5ANe88Ub9hOhTjMgTGZkKW4GC4BmdnWjQGwNjaDD9RLLJoTILLYQCQ7TB2/Yk5EOfuQ4iRHLAnKNI8r/45svjvK7nggAXRKGGwrB4tDZxjMAfTDxlOImtm1ZnMCAIs2pPAfAaY5v////9HNwTDUCSA7goGbJpxxTWGZlzgRP0R4l3AgASQoxGfASCAVTMsJaLLIdtItguwRSPFAACS+uH/POzTkQAAAABJRU5ErkJggg==",
            name: "Copy three random spells",
            description: "Casts three random spells among the spells in your wand",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Copy_Three_Random_Spells"
        },
        {
            id: "ALL_NUKES",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3klEQVR4nGNgoBAwgohTUxj+g2gZSWGGNU/rGRne7mJgEHZjEBUVZYiMjMRrAAuIeM7oyfhNKO7/3V8MDKKiDP8PXZdlsNMAa2YkyQUgcFd4OYM9Ww7DwV9TwHxChrCACLMcBsb29naIIZ8fMGy86Mqgr/+AgYuLi5HkMJAMeoOi6fRURrzhw0jIho1TPRlA4QPjHzp0iMHOzg7uNUZCBhAKHxZCBhAKH0ZiXYAtfBgZGSGxgK4QObDMcvKgmt5itY8FxsCVmAi5khHdBSBASmKCu4DcxIThAlyBRTMAALbkb/1OWDpaAAAAAElFTkSuQmCC",
            name: "Spells to nukes",
            description: "Transforms every projectile currently in the air into a nuke, not a good idea",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Spells_To_Nukes"
        },
        {
            id: "ALL_DISCS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0klEQVR4nJ1TMQ7CMAy0K97QCcTCwtKJCfED3sDOk7L3Df0BYmLKwsKCYOongi7gyAoRMfXQRI7P5zu5RETk+iH46yOoO/0drh9C3siCYxRuNx2dL57uz5GW8zY+INetF1xr0BwPexbweDvFE2EBxwb+MzKY29UunmDPJcAXyQGT3l2WLGn/VcO6CHJQBEm4K/aYQ4hP4htbdAqB+CRSQTKzgsFIhCneYJmMqiZZdsUZjSwtGddM0maWosFHlkYvkwWcGohJepm+TLLE1B8qgacAX/Bh6TbeDy01AAAAAElFTkSuQmCC",
            name: "Spells to giga sawblades",
            description: "Transforms every projectile currently in the air into a giant sawblade",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Spells_To_Giga_Sawblades"
        },
        {
            id: "ALL_ROCKETS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXElEQVR4nGNgoAb42u3y/62DKAMIkwqYQMSPrRcZWQxkGDi89f//uNDF8P//f6INYHnrIPqfRVWckS1eD6zr7+5d/3+I/wUZwsjIyEjYAOEDrxnfMjD8Z9nzFCzAVbIbJgcyEG6C7jST/wdWPQTzhQ+8RvUCh7c+I5OLNAOjsTzjjxcdDP9+PQIpRLEepBnkTYcweRRvMoEI7tI9DN8KtzH8e/QGxGVkZpdnQHa+RoknyJsMRSk//5vZfWMwPbbq/4kPKf9BhjASG1ggQ1iVIE6/lHka1QuENILos+K/GUG2n9TQZzzxIQWrN8Fgc8N/nGkCZNiXBf4M35+3M+AEbx1EGT4WGIINAgUWIcCIzOmN+f8/hVOX8aH+ZbCzH75hYLB2YmAQtAWFKfbgYkQXABmipgJh+9QjKcRhAjwQQRpBdIa+K6O8CAODs10K4/vDDLgDCx8AGUYwsKgFAPv1kLFnLVltAAAAAElFTkSuQmCC",
            name: "Spells to magic missiles",
            description: "Transforms every projectile currently in the air into a magic missile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Spells_To_Magic_Missiles"
        },
        {
            id: "ALL_DEATHCROSSES",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABE0lEQVR4nGOw7PrCAAIJmz+DsBeIDRMjCZQf+sJQcODef1L1MYJsZmX5yfD7D3u9rTZz3eVHL5g+fBZlXODLS5QBTAwMDF7cnJ/+z/fhaUhS5GTSlZP4J8D7+j/MOyCA7M3UBR4TkcXgYO69b39BGJ83QN5c+X/KdmQxJphJJ25+YwY5f4KDEiO6RrDN298wGNku2C7L8MPj2P8ekAsxbUhAcjYyADkbZDNIIwyA+DDvEA1ghqB7gyCAeRPkDbyaLbEkKnRAlLPLSUhUjMgcWKICpQtQejh89W8TAwNDI75ExYTGBycqkGZQogKlTPRERRQAOR8EQAmLkFoUF8AC8et3PsbCg/cZkpW4mEmyGRkQ62wAHt6pu3NFHJ4AAAAASUVORK5CYII=",
            name: "Spells to death crosses",
            description: "Transforms every projectile currently in the air into a death cross",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Spells_To_Death_Crosses"
        },
        {
            id: "ALL_BLACKHOLES",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0UlEQVR4nGNgoBAwgoiQ2hkg6imPXbwUiPHl0MJna5ozpIk2JaR2xlNVadP/IAwCIBokRoxeJhABsznKJ59BTcaMAVmMKANgmpdtmQhnEwtYYH5etmWu1K0np8AuABmkL/blGUwRUWEUUjvjacLu7/9BGN3/IH59+hJw2MAwsWEEBiBD0QMZJIYSBsQCkBeRw4iFGH+C2AwMDOAwashYihFGKGkB5kR0f+ILIzAASaAHFMyf+AATMgc5HYCcSwyAGwD1JzxBgQILJkY0IOhPWgAAdKOpNb5Di2gAAAAASUVORK5CYII=",
            name: "Spells to black holes",
            description: "Transforms every projectile currently in the air into a black hole",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Spells_To_Black_Holes"
        },
        {
            id: "ALL_ACID",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAp0lEQVR4nGNgQAK2fVr/GUgETMgcDQNWBooM0FXSIt+A1H36/5FpXADdm0zoCgi5At2bTDBbYRrtZZLwugLdAiZkDkgzPldg8yYLiJjtdJExdR/DfwaGeWDBPIXljPi8AbHgIgNBYIsUYCBbJz2IBOOLf3b/h7mCCZ8B2NIFujdZiHUqqd5kgDmZULpgwmsKEekCqwGkpAu8LiCULkAAZ0AguwJfgAEAa71IkiDHKJQAAAAASUVORK5CYII=",
            name: "Spells to acid",
            description: "Transforms every projectile currently in the air into a pool of acid",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Spells_To_Acid"
        },
        {
            id: "APOTHEOSIS_SPELLS_TO_CATS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABB0lEQVR4nGNgIAE82svwH0SfWgmhQYCJgUTw9ff5/xIiEBrEZ8Sl8MsZhv/vPjIwCPEzMIBobEDOmYGRBZdT0TUhGwTSiNcLQvwIRegGbTuEymfCZgCyJpAGkGE8Jri9ixVsn+YPDqQlbW7wEMcGmPBJgkJaWIATHuLYACOIODs//P+r7z8YxDg5GEA0NuCZtRGrF1hATkXXhGwQLo1wL4hxcsAVoRt07MJzDA12dnZg75ibm4NpJmRNIA0gw4wTV+K1FRQm7OzsYJoRn0JXV9f/P3/+ZAApBtHYANaUCHMquiZkgw4dOgS2HGc0ghTDFKEb9ObNG8IuQNYE0nDt2jWwYbBAhAEA4kaAexgYFr0AAAAASUVORK5CYII=",
            name: "Spells to Cats",
            description: "Transforms every projectile currently in the air into Cats; a cute idea",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Spells_To_Cats"
        },
        {
            id: "APOTHEOSIS_SPELLS_TO_CURSOR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAcUlEQVR4nGNgoCZ4GRf3H4RJ0cOCLsAdGMjwkoEBbIj4okWMJBkgvmgRI0gzyBCwi4gwiAmf6TCDSAYv4+L+f1m/nqjwYMIl8XX9eoiXSAxUrABmyP///yg3jCrgP9Vd8p8ME2kTHv+pZSqyQcSwKQIAzAZGi6z0d9AAAAAASUVORK5CYII=",
            name: "Redirect",
            description: "Redirects all airborne projectiles towards your mouse cursor at a high speed",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Redirect"
        },
        {
            id: "ALL_SPELLS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoklEQVR4nK1TiQ2AMAiExiFcwCl0GCdwGRdwGJ3CBdziTI0PRbAxStKk5Qp3hcJkGOYGlp+rkS1/EiiDMTSIy8OjFRLMMRz47S4MyQmz2OuYQF8NGfacivBVQGEy1b4ybtNCBy/zVuWeKK7H7kD1/fChE/7u6r/+F4H+MERGlflk3pXcfuh+5hOcRMbSYVrEvla18QbIU+w/5SGRhZvteTPOK9VvjxeityNcAAAAAElFTkSuQmCC",
            name: "The end of everything",
            description: "You're heavily advised not to cast this spell.",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/The_End_of_Everything"
        },
        {
            id: "SUMMON_PORTAL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABjElEQVR4nJ1TMU5CQRB9iz/WNsaeUHAAEjdqCAUnsCOh8Aj0EKtfqMHkcwMLEzpsLH8C+VFZEg9gAvlnsBbMmLewsItg4SS7s7OzszPv7awSEeySUcdQSS3WCn9IYZ+jFuu9QYsZNllF5Ne4adzKsD2W+VSsps19roftMebTzdnIu1ElzQSVuhaTZzjID3FxpfGeGhhkGHWq9sw+CIoTgxlwjjrX1kFNm/ssmFNU2sHB/fWd9NLYrluPLRsQlcRq2hT6J3kWsB65G0+LVVs2MxLKK1IMyn2cHB0DzWUlSIFKMSRXkRguiHd9a0lwVta4PGpg8NnH24fBYraE//Jg/JdSrEDxyUYdY/EzEzUzM5i6q3vrfWoGrvoEBffekzyzZTvMJI6ZqR0n9PNcAEG8TnRVOPYJiyX7e700Vk/mOXyFrk6kqxPr5CFXCcVldsHbfRD5fbC6WU3yqpBtZmfgd/61zsymW8ygXC8Ef4EQSI7JM+WykTDaPuygBP8PsM85PNv+Ad/e/gsBif+RH8uaGz0JvGR2AAAAAElFTkSuQmCC",
            name: "Summon portal",
            description: "Summons a strange portal",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Portal"
        },
        {
            id: "ADD_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyUlEQVR4nGNgGNTg82Tx/4TUMOGTZDGwYCDJgM9INl7P5p6FTBPrIobvh/3/gzSBFH+/X/0fRIP4IHGCmkEArPh+9X+QBmQa2SU4vXA9m3uWjAZPKsOTKwwMMjoMHOJ6YBrEB4ljM4QRRICcCQ8wkAYGBohmKPjx8hKEATKYgYHhz4UTDLy5L8F6GbG5AGwY1AVgzU+ugDU9ufFltubUr2k4vaA59WsaSBHM2TDNID42zdSPhc9o6QBmGDZ5ogAxtuJNyqCAozkAAPL8jV9Ba5JmAAAAAElFTkSuQmCC",
            name: "Add trigger",
            description: "Makes a projectile cast another spell upon collision",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Add_Trigger"
        },
        {
            id: "ADD_TIMER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwUlEQVR4nGNgoBAwInOkzdP/C8gYgNkCEiZw8Q8vzkDoJxcYnp6ciaKHCZmDTTMyHyaPEyxfvvw/qfJMyJzTp08zkAoY0QWKior+m6h/ZzDUU0cRv/BAnCEyMhJDPSM2U5ENOX/pJgMjnx1WzTgNQDYEn2YGYgLs9evX/8nWDAMkGbIcR1QSZchyNM3Xj08g6BImXIYtm5kJVoxsyJ49ezDUoYSudvB0sGL0pAwCsPxwdW0m7rwAyizIitE1w+SpCgCsJl9cS/ZqowAAAABJRU5ErkJggg==",
            name: "Add timer",
            description: "Makes a projectile cast another spell after a short time",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Add_Timer"
        },
        {
            id: "ADD_DEATH_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhklEQVR4nGNgGGjAiE3wxr1X/9HFNJTEsKplIkYzPnEmYhThk2fCpvDImRtgjM7GBljQBUIiE+Bsm+ULGCb0doDZExgYGNYsX4DfCxSDOasO/Qf5U8fcC0xj4xNtyJxVh/7be8XDDSFJ8417r8CakWlchjBSPSExoGnApRGvAchpAJkenAAAJ557Akr3ORAAAAAASUVORK5CYII=",
            name: "Add expiration trigger",
            description: "Makes a projectile cast another spell upon expiring",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Add_Expiration_Trigger"
        },
        {
            id: "LARPA_CHAOS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdElEQVR4nGNgoBX4////f5Lk/qMJvjuD3QBc4lgll2UewcvHCpYhKSp37cfKJgjKSVFMNfAOzf8wPihwYQEMchlGOLzDoREGkA1AVoMvmqkDyomMARZsgiB/Rk23YSTb9ndYUhtRiQgEcAUO3iRMLKBJyAMAaMts48axQJsAAAAASUVORK5CYII=",
            name: "Chaos larpa",
            description: "Makes a projectile cast copies of itself in random directions",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Chaos_Larpa"
        },
        {
            id: "LARPA_DOWNWARDS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeElEQVR4nGNgGFRgWeaR//j47878B/P/QwFcoty1nyiNMIBhAD6AbDi6RSSDZWguAwEmcjRhNaAch/Mu3jkNZ3skWxPjUAYUw5BdQHTALUPShB4DJHtB0Bi/ZUzYBJH9ysjIyEiUAfoqpkTbihUQ8itBQHQIUxsAAHhXTaXNRNTaAAAAAElFTkSuQmCC",
            name: "Downwards larpa",
            description: "Makes a projectile cast copies of itself with a downwards trajectory",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Downwards_Larpa"
        },
        {
            id: "LARPA_UPWARDS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeElEQVR4nGNgoBb4////f3L0McEY78+SZzETjLFj7lGyXMMEY1y8c5qBHNcwYRMk1zVwsCzzCFzTuzP4DWDCJojsHaJdU+7a/5+QOCHXEPQOMpsssAyLAUyENCF7ATlsiLJhGRofFgagwEQJUPQAxKURBjAMGFAAAMOLXOHEnmLmAAAAAElFTkSuQmCC",
            name: "Upwards larpa",
            description: "Makes a projectile cast copies of itself with an upwards trajectory",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Upwards_Larpa"
        },
        {
            id: "LARPA_CHAOS_2",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAgklEQVR4nGNgoCcod+3//+7MfzAmWzMMwAxhYqAHWJZ5BGwjshdAbJAcIzEGgDQIGjMwLM86ynDxzmmwWOfuQsJ6y137/4NsR3YB0c4uh2qGBRjJmt+d+U+5zcsyj5Bv8zJSNYMAOX5mhDFAmmHsqOk2REUvHJAd2sgGkK0ZBsjVDABosqjB0kvxHgAAAABJRU5ErkJggg==",
            name: "Copy trail",
            description: "Makes a projectile leave a trail of copies of itself",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Copy_Trail"
        },
        {
            id: "LARPA_DEATH",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyElEQVR4nGNkIAJM9zb+v+PMAwzxjS/fMjLh0vT/////hAz2Fxf+z4RLw/uzxLiNgQFuACMjI+O7MwhDhEwYGZdlHiHoCiZkDrqmi3dOE+8CGIiabsNY7toPNqRzdyEjAwHAyEAkwBUTTDAGsv+R+f+hIHPrWUYPEwVMA95BFYL8j6wRxqefF5ABLBAJacZqwLLMI/9hoY9uEDbAgswB+R/Z7/oqpgwMu4k0ABTSoNSIyzBcACUpI0sIGhPSimYAOkA3EBsAZWcAZQpkbwFC20MAAAAASUVORK5CYII=",
            name: "Larpa Explosion",
            description: "A projectile will shoot out 8 copies of itself when it expires or hits the ground",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Larpa_Explosion"
        },
        {
            id: "APOTHEOSIS_LARPA_DELAYED",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAKMGlDQ1BJQ0MgUHJvZmlsZQAAeJydlndUVNcWh8+9d3qhzTAUKUPvvQ0gvTep0kRhmBlgKAMOMzSxIaICEUVEBBVBgiIGjIYisSKKhYBgwR6QIKDEYBRRUXkzslZ05eW9l5ffH2d9a5+99z1n733WugCQvP25vHRYCoA0noAf4uVKj4yKpmP7AQzwAAPMAGCyMjMCQj3DgEg+Hm70TJET+CIIgDd3xCsAN428g+h08P9JmpXBF4jSBInYgs3JZIm4UMSp2YIMsX1GxNT4FDHDKDHzRQcUsbyYExfZ8LPPIjuLmZ3GY4tYfOYMdhpbzD0i3pol5IgY8RdxURaXky3iWyLWTBWmcUX8VhybxmFmAoAiie0CDitJxKYiJvHDQtxEvBQAHCnxK47/igWcHIH4Um7pGbl8bmKSgK7L0qOb2doy6N6c7FSOQGAUxGSlMPlsult6WgaTlwvA4p0/S0ZcW7qoyNZmttbWRubGZl8V6r9u/k2Je7tIr4I/9wyi9X2x/ZVfej0AjFlRbXZ8scXvBaBjMwDy97/YNA8CICnqW/vAV/ehieclSSDIsDMxyc7ONuZyWMbigv6h/+nwN/TV94zF6f4oD92dk8AUpgro4rqx0lPThXx6ZgaTxaEb/XmI/3HgX5/DMISTwOFzeKKIcNGUcXmJonbz2FwBN51H5/L+UxP/YdiftDjXIlEaPgFqrDGQGqAC5Nc+gKIQARJzQLQD/dE3f3w4EL+8CNWJxbn/LOjfs8Jl4iWTm/g5zi0kjM4S8rMW98TPEqABAUgCKlAAKkAD6AIjYA5sgD1wBh7AFwSCMBAFVgEWSAJpgA+yQT7YCIpACdgBdoNqUAsaQBNoASdABzgNLoDL4Dq4AW6DB2AEjIPnYAa8AfMQBGEhMkSBFCBVSAsygMwhBuQIeUD+UAgUBcVBiRAPEkL50CaoBCqHqqE6qAn6HjoFXYCuQoPQPWgUmoJ+h97DCEyCqbAyrA2bwAzYBfaDw+CVcCK8Gs6DC+HtcBVcDx+D2+EL8HX4NjwCP4dnEYAQERqihhghDMQNCUSikQSEj6xDipFKpB5pQbqQXuQmMoJMI+9QGBQFRUcZoexR3qjlKBZqNWodqhRVjTqCakf1oG6iRlEzqE9oMloJbYC2Q/ugI9GJ6Gx0EboS3YhuQ19C30aPo99gMBgaRgdjg/HGRGGSMWswpZj9mFbMecwgZgwzi8ViFbAGWAdsIJaJFWCLsHuxx7DnsEPYcexbHBGnijPHeeKicTxcAa4SdxR3FjeEm8DN46XwWng7fCCejc/Fl+Eb8F34Afw4fp4gTdAhOBDCCMmEjYQqQgvhEuEh4RWRSFQn2hKDiVziBmIV8TjxCnGU+I4kQ9InuZFiSELSdtJh0nnSPdIrMpmsTXYmR5MF5O3kJvJF8mPyWwmKhLGEjwRbYr1EjUS7xJDEC0m8pJaki+QqyTzJSsmTkgOS01J4KW0pNymm1DqpGqlTUsNSs9IUaTPpQOk06VLpo9JXpSdlsDLaMh4ybJlCmUMyF2XGKAhFg+JGYVE2URoolyjjVAxVh+pDTaaWUL+j9lNnZGVkLWXDZXNka2TPyI7QEJo2zYeWSiujnaDdob2XU5ZzkePIbZNrkRuSm5NfIu8sz5Evlm+Vvy3/XoGu4KGQorBToUPhkSJKUV8xWDFb8YDiJcXpJdQl9ktYS4qXnFhyXwlW0lcKUVqjdEipT2lWWUXZSzlDea/yReVpFZqKs0qySoXKWZUpVYqqoypXtUL1nOozuizdhZ5Kr6L30GfUlNS81YRqdWr9avPqOurL1QvUW9UfaRA0GBoJGhUa3RozmqqaAZr5ms2a97XwWgytJK09Wr1ac9o62hHaW7Q7tCd15HV8dPJ0mnUe6pJ1nXRX69br3tLD6DH0UvT2693Qh/Wt9JP0a/QHDGADawOuwX6DQUO0oa0hz7DecNiIZORilGXUbDRqTDP2Ny4w7jB+YaJpEm2y06TX5JOplWmqaYPpAzMZM1+zArMus9/N9c1Z5jXmtyzIFp4W6y06LV5aGlhyLA9Y3rWiWAVYbbHqtvpobWPNt26xnrLRtImz2WczzKAyghiljCu2aFtX2/W2p23f2VnbCexO2P1mb2SfYn/UfnKpzlLO0oalYw7qDkyHOocRR7pjnONBxxEnNSemU73TE2cNZ7Zzo/OEi55Lsssxlxeupq581zbXOTc7t7Vu590Rdy/3Yvd+DxmP5R7VHo891T0TPZs9Z7ysvNZ4nfdGe/t57/Qe9lH2Yfk0+cz42viu9e3xI/mF+lX7PfHX9+f7dwXAAb4BuwIeLtNaxlvWEQgCfQJ3BT4K0glaHfRjMCY4KLgm+GmIWUh+SG8oJTQ29GjomzDXsLKwB8t1lwuXd4dLhseEN4XPRbhHlEeMRJpEro28HqUYxY3qjMZGh0c3Rs+u8Fixe8V4jFVMUcydlTorc1ZeXaW4KnXVmVjJWGbsyTh0XETc0bgPzEBmPXM23id+X/wMy421h/Wc7cyuYE9xHDjlnIkEh4TyhMlEh8RdiVNJTkmVSdNcN24192Wyd3Jt8lxKYMrhlIXUiNTWNFxaXNopngwvhdeTrpKekz6YYZBRlDGy2m717tUzfD9+YyaUuTKzU0AV/Uz1CXWFm4WjWY5ZNVlvs8OzT+ZI5/By+nL1c7flTuR55n27BrWGtaY7Xy1/Y/7oWpe1deugdfHrutdrrC9cP77Ba8ORjYSNKRt/KjAtKC94vSliU1ehcuGGwrHNXpubiySK+EXDW+y31G5FbeVu7d9msW3vtk/F7OJrJaYllSUfSlml174x+6bqm4XtCdv7y6zLDuzA7ODtuLPTaeeRcunyvPKxXQG72ivoFcUVr3fH7r5aaVlZu4ewR7hnpMq/qnOv5t4dez9UJ1XfrnGtad2ntG/bvrn97P1DB5wPtNQq15bUvj/IPXi3zquuvV67vvIQ5lDWoacN4Q293zK+bWpUbCxp/HiYd3jkSMiRniabpqajSkfLmuFmYfPUsZhjN75z/66zxailrpXWWnIcHBcef/Z93Pd3Tvid6D7JONnyg9YP+9oobcXtUHtu+0xHUsdIZ1Tn4CnfU91d9l1tPxr/ePi02umaM7Jnys4SzhaeXTiXd272fMb56QuJF8a6Y7sfXIy8eKsnuKf/kt+lK5c9L1/sdek9d8XhyumrdldPXWNc67hufb29z6qv7Sern9r6rfvbB2wGOm/Y3ugaXDp4dshp6MJN95uXb/ncun572e3BO8vv3B2OGR65y747eS/13sv7WffnH2x4iH5Y/EjqUeVjpcf1P+v93DpiPXJm1H2070nokwdjrLHnv2T+8mG88Cn5aeWE6kTTpPnk6SnPqRvPVjwbf57xfH666FfpX/e90H3xw2/Ov/XNRM6Mv+S/XPi99JXCq8OvLV93zwbNPn6T9mZ+rvitwtsj7xjvet9HvJ+Yz/6A/VD1Ue9j1ye/Tw8X0hYW/gUDmPP8uaxzGQAAAHtJREFUeJxjYKA3eHfmPxjA+EykaKSK7QykgmWZR0jXdDT9RwNMI7qf0QEjukYQbT2TowHZyYLGDAyMjIwoaikC75BcxYJsMzYAcg3IO1HTbRhBtEeyNY0D7yiSa0CGgJxLKCAJGkSyAQxIBoFosryDDohNFwQBxQagAwANrnWYVdeT6AAAAABJRU5ErkJggg==",
            name: "Burst Larpa",
            description: "Make a projectile cast a burst of copies after a short delay",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Burst_Larpa"
        },
        {
            id: "ALPHA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkUlEQVR4nGNgoCX4eaUgn5AaJgLykT+vFJzAp4CFgAHmZLvgJ8TmaUhs0gxggNh+iJBLmPDYHsGuM2EliCbkCgzw80rBf3Q+uhhOF/yE2o4mjNMVjIRsRwfsOhMw9MAByIafVwrCcciFQ72COyx+ErAdW1gwIduOxe/oAHeMELIdlyvALoCZSCiukeVJShf4AABkjV9dwDRtSAAAAABJRU5ErkJggg==",
            name: "Alpha",
            description: "Casts a copy of the first spell in your wand",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Alpha"
        },
        {
            id: "GAMMA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYElEQVR4nGNgoBAwInN+Xik4wcDAYE5Az0l2nQkWMA4LmmQ/AwPDChCDXWcCiuFQC8Jh8jjBzysF/0EYjzzIlXDAxEAiQHY+WQagAyYGCgHTqAEMw82An0jJFD3J0gwAABqEGtWIJPCeAAAAAElFTkSuQmCC",
            name: "Gamma",
            description: "Casts a copy of the last spell in your wand",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Gamma"
        },
        {
            id: "TAU",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAa0lEQVR4nGNgoBAwgoifVwr+k6OZXWcCIxMS/yQDA0MESBCEQWwkOXRxkFoE+Hml4MTPKwXh6DaAXIbNdSC1MHEmJOesJMHpKzFcgQ3gcgEyYGKgEDCNGsAwiA34iZQysaVSYlxQiINNXQAA2s0sHgnoeyoAAAAASUVORK5CYII=",
            name: "Tau",
            description: "Copies the two following spells in the wand when cast",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Tau"
        },
        {
            id: "OMEGA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR4nLVRMQ7DIAw0VSU+wxu609cwlhekI6+Jd9aufIYpFa2JiMESUdWTIhk4n88XgB+hpIec3AoAlo6oTbhPCeRjI0cndBGaEQC8NkGVr9R0Z4nTC+TkHs3kqE141jeqIx0tcTsHt8bm3sxEkHGhFZD2HsGOBPCEAI4E4oSTPaNOQH93fJWaJ83uDhmpAXGj0lcipb7QICX9xq028qSb2jMuXIXpEpac3MdJ56DuP4kz3D/jDYj+SidNfvdeAAAAAElFTkSuQmCC",
            name: "Omega",
            description: "Casts copies of every spell in your wand",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Omega"
        },
        {
            id: "MU",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArElEQVR4nKWTQRKCMAxFP93kMt3jTcwx8CY9ht5E91yGlQ6dUiPmR2foAloa3n9hKHBwDOtlmac7gBHAQ3I5seJlns4Arm1Zawez+WxTlVxuBLDVQHKp7yan7hKkf43kPFtbAQHrL4AGaS442YXp/aONDeh9m0R0x3/0GUBtaqTvAmTXRqTPDPapVD8CqEmn+hQgb9362zL9yKBbRPod0A5Tv9tUm2737fzQeAE6hkFfoQdh0gAAAABJRU5ErkJggg==",
            name: "Mu",
            description: "Every modifier-type spell in the current wand is applied to a projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Mu"
        },
        {
            id: "PHI",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvklEQVR4nK1SwRECIQzc40Mz/M8OLMErg6vAsQIo4yzBDuRPM7x00OBFDYyoO8NMyLIhCwF+xFAjUrRnACNtgzZ+0109RXvJq6uDFO0OwMxuLwgAnDb+yJNKEC851sY/irN4oTPvBdIqFv1SLrwWUSTeUtsZ+4blws2kAbdw86yNP9XUjBvFN/gGisWB2RHBuPBUQN9bc5Q7NC4snCt2VGHof6fsj6awNpkTn4VBONg1SE18MsrVX+A2JEt/wxX5XFYQoBE5fAAAAABJRU5ErkJggg==",
            name: "Phi",
            description: "Casts a copy of every projectile-type spell in the current wand",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Phi"
        },
        {
            id: "SIGMA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsklEQVR4nKVTwQ3DIAy8RJVYhn+6SbpF6SSlWzSbhD/L+NUKBSqgNgLlPsiyfb7EZ+Akpjwgb3YAS0+j0rboLUjImw95swr5NeRTPDM1z/g+OAKl7QbApXgSpqRPcUrbK1fTJAjIZN7iVBazlABg4vtu1EAkUNq+Wo09ChJ+P2yIgLy5V1sZAx1eCNvAsAI6Gp00PSe+MMngwOABdn21Q/98kJuooXxJt1AoqI6p66hO4wv/XkOcKhnxQAAAAABJRU5ErkJggg==",
            name: "Sigma",
            description: "Copies every static projectile -type spell in the wand when cast",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Sigma"
        },
        {
            id: "APOTHEOSIS_CHI",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAv0lEQVR4nKWTwRHCIBBFNxlnaIY7diJlkEqkDNKJuacZTjowC/5sQBn9pwDL+5sPEP2pCQdxdzel/SrniGghIsNTFmsmKHxwke1AAhFtSvsrrs3lAxaSm1QQNWcAyHA36J60UUNzY84KSNc96YIDpX3OJO4ubwRI0/10Cp3gKnj0F7LwJCCHcUA8th96kLkHKBeHw6uQuLvnV0B8u1sJGe3A8MaaA0A+A6S70F3UHAEcVHk0iwyOO0pvpXmpftILd6NZnywMc+UAAAAASUVORK5CYII=",
            name: "Chi",
            description: "Copies every utility-type spell in the wand when cast",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Chi"
        },
        {
            id: "APOTHEOSIS_KAPPA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAm0lEQVR4nK2TyxGAIAxEVy824x070S6kEylDO9E7zXDSUdGJETL42VMIzNvlB3xURgfO6hGA8sOpKE0l9VflDNgdBV0Uq2+AojQDj+isrp3Vs3e+JA4lCKkPOUuAibrzXgog2V0EuH3fq5rYGhGQqjw2QU68fwWg8f1DSgaowLtQTwBgElPwv2AAtN6dz223wvs8wXnf1DFW/6IF3rs8q3gq5vkAAAAASUVORK5CYII=",
            name: "Kappa",
            description: "Copies every alt fire-type spell in the wand when cast",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Kappa"
        },
        {
            id: "ZETA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApUlEQVR4nKVTwQ3DIAy8oEosw7/dpNmidJIyRrJJ+2cZv1qlATUiZ6DKfWwwvjPYAAcxbBcS/bsz72VduCzOiQRH68Jcbkr0VwDTNnmBIcy75IR7sg/1Chok+ieAc6neRSC/0mFd2J03LYKcDMCz4HBEvaeCKdlRO2Aq6rfsVzqDWgWhpa4SyNq21lxwAlkfjvacCNAK6MQRgS/Kz5QnrgmtrX/jA75jN8QYQBLSAAAAAElFTkSuQmCC",
            name: "Zeta",
            description: "Copies a random spell in another wand you're holding",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Zeta"
        },
        {
            id: "DIVIDE_2",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAOUlEQVR4nGNgGAjw+vXr/yAMYjMxDCnwGursIaD5NVIoE9LMgq5IVFSUEVkBOp++fh+mhoDA4MoLACn6OMlrdP0AAAAAAElFTkSuQmCC",
            name: "Divide by 2",
            description: "Casts the next spell twice, but with reduced damage",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Divide_By_2"
        },
        {
            id: "DIVIDE_3",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAP0lEQVR4nGNgGAjw+vXr/yAMYjMxDCnwGursIaD5NVIoY9OMLM+CrkhUVJQRWTGMD1ODLk9bvw9TQ0BgcOUFABrXREmxPrLOAAAAAElFTkSuQmCC",
            name: "Divide by 3",
            description: "Casts the next spell 3 times, but with reduced damage",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Divide_By_3"
        },
        {
            id: "DIVIDE_4",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAASUlEQVR4nGNgGFLg9evX/0EYWYyJbjYzUFPzaySvMBEyQFRUlBFdE1G2voYqJqSRBd2ZMBupDl6T4CqSApH20ciAZtDApESaAgBnsVbLxrs76QAAAABJRU5ErkJggg==",
            name: "Divide by 4",
            description: "Casts the next spell 4 times, but with reduced damage",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Divide_By_4"
        },
        {
            id: "DIVIDE_10",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXUlEQVR4nGNgoAZ4/fr1fxDGx8YFmMi1iGKXYoDXSM5GptHZeMFrNP/j0kyWV16TErivSVDMgu5MUVFRRgZagNfEuOo1JYH4mhrRyECCN2AAnJQpyQvgWCAW0CSGAJ4Gv82XkofkAAAAAElFTkSuQmCC",
            name: "Divide by 10",
            description: "Casts the next spell 10 times, but with reduced damage",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Divide_By_10"
        },
        {
            id: "METEOR_RAIN",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAr0lEQVR4nGNggIKPPVH/XwcY/mfAA0BqQOD79Wy4WiYGEgCbtyCY5tCYwsDTboWQeB1gCDYZ3RXoLvqPBuAuYLPRRLEBBkQ3nGckymnfr2fDTQWxcbkAlzoGbE6DGYDNEJBXYXwWfC4Dee3XkesoYpyaU1G8xQQiftzIgQsgs0kC39Gchitm0AELLqchx8yvI2S6CGuIowFGXBIgjSgKGRmxqmUiw3HEGUCTmKEJAADoL6hohgO/qwAAAABJRU5ErkJggg==",
            name: "Meteorisade",
            description: "Alea iacta est",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Meteorisade"
        },
        {
            id: "WORM_RAIN",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABZUlEQVR4nJ1SMUjDQBR9l1FQ1yrUQRCq3cSCIFZIXbM4ZNAOnTo46CRU0U2wax3rkqF16FDETg4WKbiIuEirIDgoaFYtuJ68K1fSI5HgX97dJ/+9919OAICdr8of/wVjiTloZIX1dH0+tBRaHE6kU+qiMXg2kWQ8Ty06eOq1hNWuFYXffcZszkG9tDpU0r1y7kYh7+5MGWfbd8j2C0NCMb/gSB7IaNoze43jb+w2t1DZqCukG6EzIOPrdWuoFpYBHawsJXF7/47OuIfz/ayw9H60pe1FZdB4K8E9nEDlIq1Wo7C1vL4nqUhm2iLy42Au2hWd9LqXmJxOIZk5AvMTZN886Ugqa3tUiMqFBEIM5lSIdr4qvR0f7kEfXx+D3a+8DAqnCZi5UHHkMfAdtGtFQTuaXdszcwm+kciSUqpfylzo7LG5NoLsmzMiiszMRf+2WAT2H7mE5RC5Di0HMdZgGNG/BuPWLw+j5l4vt0UOAAAAAElFTkSuQmCC",
            name: "Matosade",
            description: "Alea iacta est",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Matosade"
        },
        {
            id: "APOTHEOSIS_MASS_BURROW",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABh0lEQVR4nGNgoBAw4pI4e/bsf2S+sbExVrWMuDSW9p9lkNDWYFhWaceILI5uEBO6ZpBGmGYQiGo/BNbYu+srWDO6yxiRNcfENjAYxpaC+S+u3gDTMINgLoGphbmECSZ47tw5sOZ7ezeDNYfJdTBMDFrKYPc5AcyHuQREg9SieGH27Nn/lx/8D1b48dkNhm8vbjNYm8gy5K+LBtPPz0EMBWkGuSQ1NZURpAfFBc/PbQbTkka+YEOOnnkMdgGI5pfSQDEEOQxYkDkgm7kkVMGGTNzAwLDqkS9Y7PjuLobHp5sZZE1TGbS0/RhwxgIIgDTAALJmA495DMLCigzXrm5iQAaMMAbIT339EEmQk0EuATl75wJTsGYYuLAjiWHnRUkGUDigeOHq1asM169tBgtqMjDA/SlrWsvAwAAx4O3b+2AvuLspM2AFBQUF/zW1fMGaQTQMg8CjU01gNkgNVi8gG3L//n2GjRs3guVgof71RC+DoqIiw4QJE1D04MxM/v7+KDbBDKQ6AAC1qNGwHkO8MQAAAABJRU5ErkJggg==",
            name: "Kaivossade",
            description: "Rapidly excavate a large amount of terrain",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Kaivossade"
        },
        {
            id: "RESET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAe0lEQVR4nGNgoBAwYhP8/+aRPgMDw2o04VBGEbmLeE37/+aR/v83j279f/OoBYtcC1ROH69mBgIApyH/idCMTS0TzHYGBoZVxBoAUoviiv8k2I6uh4mBQsA0aAwIxRb3uABUbSj1ohEKQK4gKiFh2I4kSXJSpm5mIgcAAKwoa5++zTIjAAAAAElFTkSuQmCC",
            name: "Wand Refresh",
            description: "Reloads the wand immediately",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Wand_Refresh"
        },
        {
            id: "IF_ENEMY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOklEQVR4nGNggAKTrTfyGXAAbHLKzXM9UBTMfPn/PzaF2ORAmqO3X/wPN8QEhwFEaQYBkIL//1EVYhPDqhmbBmQ2siEgjSAXIRvABNMMok233Sw47aU+AcSe9QqiAEaDNFmYmGzvmjXP825t8g6YASwgzakmEE1pYgwYYPaZmwUg+dkMDAV2RuoMJ86cQZFnOeOtMZFh6w2IYjSNYDkQ2HqD4f25ozcZTNQZ8AKTrTfy77848B+Ej1+fhBGA6P6HhwEIgBSvNn4B9goISAjqMUxW2jUBXwJDMQAZJKTEMrx4f4mhorQbRfzQuUsMRBmwYM5ihmWrFzJ0dJfCxUAhf+LMGc+ytKTtGNHIwMDAAAqw0LMSBSCbQcDIUgGb2VhdgQJAfoYFIHpAggDe1IhsCDKNDogyhBCAaQYAhaXrnCWM/iEAAAAASUVORK5CYII=",
            name: "Requirement - Enemies",
            description: "The next spell is skipped if there are less than 15 enemies nearby",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Requirement_-_Enemies"
        },
        {
            id: "IF_PROJECTILE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABX0lEQVR4nGNggAKTrTfyGXAAbHLKzXM9UBTMfPn/PzaF2ORAmqO3X/wPN8QEhwFEaQYBkIL//1EVYhPDqhmbBmQ2siEgjSAXIRvABNMMok233Sw47aU+AcSe9QqiAEaDNFmYmGzvmjXP825t8g6YASwgzakmEE1pYgwYYPaZmwUg+dkMDAV2RuoMJ86cQZFnOeOtMZFh6w2IYqggTAxMg8DWGwzvzx29yWCijmEBE1wDGkAWwyYPdwEDNAym3dcAe0NGUpjBD+oiECj+dH5iZGQkA14DznhrTMzaegOkeMLdXwwMxb/OTzh06BCDnZ0dQy+fIUgJ2AWHzl3CborJ1hv5p6Yw/Ifh5cuX/3+2VhhMgzC+aGRBdkHwpfVgbzB8fsCw8aIrg77+A4a1eoEFyGGA7gpGrGHAcbQApuC0l/pERkawMjCApYcTZ86A0wNcBjnJ4gt1dEPwqcMLYOEAANlf+8JBsu7TAAAAAElFTkSuQmCC",
            name: "Requirement - Projectile Spells",
            description: "The next spell is skipped if there are less than 20 projectiles nearby",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Requirement_-_Projectile_Spells"
        },
        {
            id: "IF_HP",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABA0lEQVR4nGNggAKTrTfyGXAAbHLKzXM9UBTMfPn/PzaF2ORAmqO3X/wPN8QEhwFEaQYBkIL//1EVYhPDqhmbBmQ2siEgjSAXIRvABNMMok233Sw47aU+AcSe9QqiAEaDNFmYmGzvmjXP825t8g6YASwgzakmEE1pYgwYYPaZmwUg+dkMDAV2RuoMJ86cQZFnOeOtMZFh6w2IYqggTAxMg8DWGwzvzx29yWCizkAQmEDDAF0cm//BLmBA07zcazHYO5HILsADmJA1g2gVhhYwRhaDgUPnLuF29u3/1f/RAUgMPR1gjUYGEgBeV8ASDnKCQldHMDWCnI3udJINwacZ2RAQGwD9Y/01cp51GgAAAABJRU5ErkJggg==",
            name: "Requirement - Low Health",
            description: "The next spell is skipped if you have more than 25% health left",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Requirement_-_Low_Health"
        },
        {
            id: "IF_HALF",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABF0lEQVR4nGNggAKTrTfyGXAAbHLKzXM9UBTMfPn/PzaF2ORAmqO3X/wPN8QEhwFEaQYBkIL//1EVYhPDqhmbBmQ2siEgjSAXIRvABNMMok233Sw47aU+AcSe9QqiAEaDNFmYmGzvmjXP825t8g6YASwgzakmEE1pYgwYYPaZmwUg+dkMDAV2RuoMJ86cQZFnOeOtMZFh6w2IYjSNYDkQ2HqD4f25ozcZTNQZ8AITaKiDALbQR/c/PAxAAOYVkB8tJqwAewfEx5fAQIAFXTOyJDhMQOED9cKhc5cwDGBCUYwFwMRBIX/izBnPsrSk7RjRyIAUXegAXRybK8AAFoAg0837l2MNSBAgmBpxxQJJhsAwdrciDAGxADb0BNu8kz0bAAAAAElFTkSuQmCC",
            name: "Requirement - Every Other",
            description: "The next spell is skipped every other time this spell is cast",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Requirement_-_Every_Other"
        },
        {
            id: "IF_END",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVR4nGNgYGBgUG6e68FAAJhsvZGPVUK5ea5H9PaL//EZAtI88+X//2QZYoKkmWRDTLbeyP//H6EJnQ8CTMiG2BnpMVAElHG4gigvgABII0gReljg08yCLoCsCZk/+8zNAnTxM94aE7EaIGhkrX7aS30CspjptpsFqSYQsTQxqNjWG7hdANMEomGGwVwxG0mMCV3ToXOXMAya9QrhZBAmGIAmeEIePS0wEbId5GyYrSBNoHCAeQ3FduT4x2UzTAzFFbjyAbY4RzcQxQVYA4YIAADEVdVpZwOMywAAAABJRU5ErkJggg==",
            name: "Requirement - Endpoint",
            description: "Any Requirement spells before this will skip all spells between them and this spell",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Requirement_-_Endpoint"
        },
        {
            id: "IF_ELSE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFElEQVR4nGNgYGBgUG6e68GABkBiM1/+/w/CuOThjOjtF1EUmWy9kQ/SCKKR2ciaUfQo4zDkPxTg08wEIu7WJu84ceaMp4WJyXZkQ0y33SwAYWTNIDUgtSA9IDEWZH/ZGekxnDhzBmx7qon6hDQxiPisVwwMDFtvMLw/d/QmTA0MMKIHDMwGQSNrdZAYyKDZZ24WgDSj2w73AjIA2QACZ7w1JoJokGaQISADYXLIgIkBBwB547SX+gSYISAXYFPHxIAHgAIQZgguwIJNEORc5EAEhwMDQwFRBhw6d4nh/bkzN0EaZqMF4iGmn7idogxNurB0gCsFoidtFnTbYQAcC1tvYFiErAbFdnKTMvUyE64wIZSdATyPA3DHfdXHAAAAAElFTkSuQmCC",
            name: "Requirement - Otherwise",
            description: "If a Requirement spell before this succeeds, the next spell is skipped",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Requirement_-_Otherwise"
        },
        {
            id: "COLOUR_RED",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlUlEQVR4nGNgoDU4zsX1n2jFH2Vl/4MwKWqYkCWvvX0LV4SsARsbBhixOVlLWBjM5n/8mBFdE8wSy2/fGDFcgCwBAri8g6yGkZBidAByFTKfCVkC5jx8AGQRcsww4gsDYlzAiMsWfK5ANoQJl2Z078D4eL35Eeo/mCHofLyp8iNS4CAbQIyXMAC6Qeg2E50/SMpI5AIA+MhmQeeOS1wAAAAASUVORK5CYII=",
            name: "Red Glimmer",
            description: "Gives a projectile a red sparkly trail",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Red_Glimmer"
        },
        {
            id: "COLOUR_ORANGE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkUlEQVR4nGNgoDV4mKP8n2jF/9c4/wdhUtQwIUs+OvAArghZAzY2VgPkp9xlxGUIMh+mBgQYcTkTlxdAmkEWYRjwn4Df4RpC9qJYyoge4nIOCgQNQXYFI7okIUPwuoBY7yAbwoRLM3JII/PRxZnQNcMUwPyIzEePAQybH0KTLcwV6DTRAN0g9PxAdP4gKSORCwCwTnc7JDwQegAAAABJRU5ErkJggg==",
            name: "Orange Glimmer",
            description: "Gives a projectile a orange sparkly trail",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Orange_Glimmer"
        },
        {
            id: "COLOUR_GREEN",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAm0lEQVR4nGNgoDXwnqr3n2jFtZej/oMwKWqYkCXPHboCV4SsARsbBhixOdnITgfMbtZdxohNE8iirdmXGLEaAAL4vIGsGQRYYAxCfocBZM0gwIjL+fgAXi94EzAEFC7IfCZCTkQH6F5lwqUAFqXIzsYmzoSuGaYA5hJkPnoMoBhQC9WMrgCZT8h7cABL/zDvoOcHovMHSRmJXAAAqtJsobyimQQAAAAASUVORK5CYII=",
            name: "Green Glimmer",
            description: "Gives a projectile a green sparkly trail",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Green_Glimmer"
        },
        {
            id: "COLOUR_YELLOW",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlklEQVR4nGNgoDVY3q/xn2jF/x/G/wdhUtQwIUuuWHcSrghZAzY2VgMiC28w4jIEmQ9TAwKMuJyJywsgzSCLMAz4T8DvcA3yCxmxeoFRfiHc+fgAyCLkmGFEVwCSjAgyJ9oFjLhswecKZEOYcGlG9w6Mj9eb/6H+gxmCzsebKv8jBQ6yAcR4CQOgG4RuM9H5g6SMRC4AAGF5gAOsRFc0AAAAAElFTkSuQmCC",
            name: "Yellow Glimmer",
            description: "Gives a projectile a yellow sparkly trail",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Yellow_Glimmer"
        },
        {
            id: "COLOUR_PURPLE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlklEQVR4nGNgoDXoltj5n2jFB9X+/wdhUtQwIUue+rQLrghZAzY2VgNKX7gz4jIEmQ9TAwKMuJyJywsgzSCLMAw4SMDvMGB/i5ERqxfsbzHCnY8PgCxCjhlGdAUgSTM+N6JdwIjLFnyuQDaECZdmdO/A+Hi9eRDqP5gh6Hy8qfIgUuAgG0CMlzAAukHoNhOdP0jKSOQCAJsTe16UTnJQAAAAAElFTkSuQmCC",
            name: "Purple Glimmer",
            description: "Gives a projectile a purple sparkly trail",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Purple_Glimmer"
        },
        {
            id: "COLOUR_BLUE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkklEQVR4nGNgoDWQKT7/n2jFDnP//wdhUtQwIUveuXYBrghZAzY2VgOe9Boy4jIEmQ9TAwKMuJyJywsgzSCLMAxwIOB3GDiQzIhiKSN6iKtoGRA0BNkVjOiShAzB6wJivYNsCBMuzcghjcxHF2dC1wxTAPMjMh89BjBsloEmW5gr0GmiAbpB6PmB6PxBUkYiFwAAwgp15YkL85YAAAAASUVORK5CYII=",
            name: "Blue Glimmer",
            description: "Gives a projectile a blue sparkly trail",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Blue_Glimmer"
        },
        {
            id: "COLOUR_RAINBOW",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA80lEQVR4nGNgoDXwnqr3n2jFH2Vl//9f44xXw0G1//9BGMZnQpa89vYtmEY2pPZyFJztMBehEasBlt++MT468ABiyMN4FEOQNZ/6tAu7ASAgP+UuI5iBZgiy5tIX7nA1LMj+B9F8/WoM+ACyZhQX8D9+zAgLA3wAFIDdEjv/Y7gAFgYPDzz4L+egwIAL2N9ixO4CbGGADSBHIVYD/kOjcMW6kyjid65dwIgBDAM+ysr+h0VjZOENsEvOHboC5j/pNWQEGYIeiAzImo9zcYFth7kCFo3IiQkdoMQCKBBBbJgrYADmChhAjgW8YHm/BvEZiVwAAFTzffJed8W3AAAAAElFTkSuQmCC",
            name: "Rainbow Glimmer",
            description: "Gives a projectile a randomly colored sparkly trail",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Rainbow_Glimmer"
        },
        {
            id: "COLOUR_INVIS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZ0lEQVR4nLVR0Q6AQAjS/v+faW51c0ycdeXTKRw4NPu7AOAROeo1BxeQCdW7NQGRbkclWlbnxDOXgPvCMqea23i1SdBowInBvghEgGruSj3CqnoO8eDPTMh9dYElEGB7IrHpN8SdOgFNY5eXPjinxwAAAABJRU5ErkJggg==",
            name: "Invisible Spell",
            description: "Turns a projectile invisible",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Invisible_Spell"
        },
        {
            id: "RAINBOW_TRAIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnElEQVR4nGP8//8/AyWAiSLdI8AAl8tM/5n32fxn3LD2P2PNfVho/5djnPIfqwG/3TTAEv8u88IV/HU6wghjM1pt+8/FMZ3h0f8chKb///9jxUffgqj/DEx7rcE0LswAIu4yMyMU9avg1YDVgP9Q/MtVnSTNKAa8khaGa/57iQfMdr7ESNBARqom5d/QWCAJYHMWzAvEYOp6gRwAAKkYDNs6fZwgAAAAAElFTkSuQmCC",
            name: "Rainbow trail",
            description: "Gives a projectile a trail of rainbow",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnElEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCiB9qAaCBD+/fwBiMl48uZxo0/TNI//TJwyxARuPSgZc4MiOdtINPIJDEz7ARLKOUQPRwaiBlAMWZA6voELj5/cP/uubR5JqTiOGgZ/fPwCXGryCCiSZBNL3+f0DcEkDAoyDvsQGAAOILrAE7wxtAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Rainbow_Trail"
        },
        {
            id: "CESSATION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjUlEQVR4nGP8//8/AyWABcbo799OkkmFhZ6MIJoR5AKQ5suXL5Fks66uHtgQFmTBe/euEaVZSUkLzmZBl3z27C5ezVJSyih8FmyK3r9/hlWzoKAUhhgLLpt+/PiMwufg4MWqjomBQsA04Aaw4JLA5WeiDBDEEtpEGyCFFs8kGYCcwogF4LwAAhRlJkoAADXCKEFx0SmjAAAAAElFTkSuQmCC",
            name: "Cessation",
            description: "The caster enters the realm of no realm",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Cessation"
        },
        {
            id: "APOTHEOSIS_TERMINUS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4ElEQVR4nGNgoDU48+7df3zyTIQ0z7x3j4EsA84g2YzPFUy4JJBtxucKJmyCk2/fBtt4/O1bDDGsBky+ffs/zJkg9tILFzAUwsRA6pANY4IxQLaBJLFphgGQPLKr4AbkqqoyXvr4EWzIFGdnrJpB4iB5kDqQegwX3P78mQGbIelKSnAXguRB6jBcAAI/3rxBMQQELIWF4YYga7ZYvRozDE6EhjIiGwLSBIs+EA3TDFIDUgvTxwJjwAwBM/bvx5oCDzg6wjXCAIYADKSeOYMS77NNTHCqxQkc9u//j24Q1QEAsBae7p+lVC4AAAAASUVORK5CYII=",
            name: "Sealed Magic",
            description: "This spell appears to have been sealed within crytallized barriers of protective magic. However barriers can only handle so much before breaking...",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Sealed_Magic"
        },
        {
            id: "APOTHEOSIS_UPGRADE_ALWAYSCAST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAcUlEQVR4nGNgGPTg/72Z/8Hg3sz/YP7///9J0syAhU+0If/RFML4yOIspBqCDpiIcgrZBtyfhZ9P81igGDybHvOfaob8x+F0RmSFD+4/YFh+4j5DpIUinAYBQ/dcuAZO53C4HpJc8DrFlHTvUCUMCAEA6t5adfauJysAAAAASUVORK5CYII=",
            name: "Spell Infusion",
            description: "The first spell slotted in your wand will be applied to the wand as an always cast. Spell is voided upon use!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Spell_Infusion"
        },
        {
            id: "APOTHEOSIS_MASS_MATERIA_CONVERSION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB6UlEQVR4nGNgoAWI26L4f+7/lWD86uMVMN52Lvc/NrVMyJzYFmewJnvvDoajDBvAYp+/PwfTJsrpDCCDZm63RTGIEVmzQ3UaWOOXa9fAYjxaWgwh50UY1KX8GHg5JcGGgej1xzIZ0j0Pg/WywAwAaUYGHPc/Mfxe/4rhsfETMF+QWxEuF2g1nSGdQQfhhbgtimBnwWwHaf6hyMfw7TYHg6y4AYOX0WTG91/vo1gACxMWEAHzM0zz/wtKDBwM9xgWLdzKKK6gBVb4+OUFBgZxhAGgMGFgmIwaiCAA0gyyeZHPfcbY5Ij/0xqvMWbVa/0HuQTkDZBLQOGAEohXPn4E29Jz8ybDmd27GUxcXRnOHznCcLGoiHGzqw1Y7tufPwyK6hoM4s5uDDxKKgzsIqIMPPKKjHAXPPn2jUGFh4eBT0sLbAhIs05rK1izqo8/WDOfpjZYMzJggdlcoq4OEVFXZ7gjLQ32DcglvtXVjA/TssAGcUpJg20GW7hhDWo6uPLx43+QK868fw83/c6XLwxZ86aBbQZpBqcNJOejpIO0ffsYZjk5gdkyXFxgL4EAyM8wjSAA0nytvRE97CHAav36/yCXgPCO58/B9Nuzp8D4y8P7YHwqIwFrnkABCadOwQ2CabwxsZuwRnIAAGHe7DxQxaQPAAAAAElFTkSuQmCC",
            name: "Mass Materia Conversion",
            description: "Cave quid volunt",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Mass_Materia_Conversion"
        },
        {
            id: "APOTHEOSIS_BUNGAL_SHIFT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9klEQVR4nGNgoBAwYhN8P/fNf3QxDjlWBk5Xfgz1jNg03tp7E8NQcR4+Bn5zSQyDGEHEg7TLYI0vv3yCa1BzVocbhMxGN4gJphEkCAPvvjxnOLHxAFgxCIDYIDGQQTBLfjz6DaZZQMSVl+cY3m18Djfg2Vco+wUqH2QQhH7OoCmhjhoGc50nwwPu6vsbDNYFnAxKymoMKprWDLu2zGc4OuE7g7agBtyS5L25WCMABZw/Ouv/53dXMWIEGTDhkwTZfuf6UQayDbhz/SjYELINIAYw4ZMkZDtBA+4Q8D8IgNMBLnDv7i3yXbB2Ucl/WDoARSdBk8gFADFoYonNshq3AAAAAElFTkSuQmCC",
            name: "Fungal Shift",
            description: "Cave quid volunt",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Fungal_Shift"
        },
        {
            id: "APOTHEOSIS_BUNGAL_SHIFT_SPAM",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABH0lEQVR4nGNgoAY403jhP7rYz4b//38v+/8fRuNTCwYwRegaYACXOApAVnDfvvQ/CK/XCPtfIW35H9kgZD2MyJpZoxgZQZpgYhdePmQ4+fkxgzmvLJgPYnc8Pc4IUwsSY4L5C6YZpAmmGQRAmkEaYQDkGpBaWFgwgYiHLyCKZ945gmIzzFYYDXMJsh4mEBE83Z9xbebG/yDnwRQz6ysynFFiYdCP9wSzQXIwL4DUgvSA1LLATJSXkEfxJ8PT4wyn5y37L6amzKCiosLQum0ZA15wpvHCf+Q4Bml+eOTk/+VVTWAxmBzOdLA2cyNcASyqQAaADIJFH07NyACW+mB8mAHICY0BF/gJlYQpRrYdWSNWl6ALwgyB0UQ5H5eLaAoALCz2gVj9BYkAAAAASUVORK5CYII=",
            name: "Hyper Fungal Shift",
            description: "Insane....",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAm0lEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3N5A+VANBgie+coGYjKtO3yXatDBT5f/0C0N00OcgyYALFB14TrqBRTg04QNMJOsYNRAdjBpIOWBB5lhwf2s88ZXrf5ipMqnmNGIYeOIrF7jUsOD+RpJJIH0nvnKBSxoQYBz0JTYAt4grrszh+54AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Hyper_Fungal_Shift"
        },
        {
            id: "APOTHEOSIS_RAT_BITE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAmElEQVR4nGNgGAW0BUX+zv8DzPX+g9gwmmjQkBnzH4RBAGQQCGBTx4isAcb+9Ow5A5+UJJwNAidv3mcwV1dk6Nu4F64HBFhgTkXWDKNBmo5cv8tgo6kMp0EuYWRkhBvCCNIMsw3dRnRw9MY9FNtBgAlZI8zpMANBtiLT2MKBEdn5MAAyAOYSZIDufzCw1lCCG4DMJoY/OAAAIhVa9tf/hhoAAAAASUVORK5CYII=",
            name: "Bite",
            description: "...Magic?",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Bite"
        },
        {
            id: "APOTHEOSIS_RAT_BITE_CRIT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTklEQVR4nGNggIIAc73/IAzjExKHARaYIpjA////weziABe4ot4Ne8BSjIyMjOgGMMEYShKiYAwDfFKSYIwMivydMVzCCBMEKf707DmKASD+yZv3wXxzdUW4XN/GvYwoLuCD2gSjX73/yOBx9xVDr6ohw5Hrdxl65VTA3gAZFvadGe5NeBjAAMwFldMXMqQF+zIwPLrDcAQUHiC6tBQsZ7FrF+P/0lK4AYwNmTH/YRpBNudwCDGY79zJYKOpzIAOjt64hz0Q+aQkwZrvv3oHto0BahsxgAVmO0gzDNhsWUeU7WAXvHr/kWjbsBrAAPU7cjSRZICYID8DsiFHfILgkshsnAa8gnoBZBCIXXz7PDjewZq7u+EGWWsogaPuf0kJSmpkjLEzgQvAXIMMktsmMWhpaYGjFWQwKIqR8wSKAciGIAcustiSQ2ewxgbZAADzxpI5fs7UxAAAAABJRU5ErkJggg==",
            name: "Bloody Bite",
            description: "Magic...............................?",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApElEQVR4nGP8//8/AzUBE1VNY2BgYIEx7q1YwVBbU9PAwMBQT4Y5jUvv3AHpZWCEedlJSopswyS5uOqX3rnDiOJCkODzb9/Alszp6yPatJSiov/0CUNsoLamhgEXaG5pId3AZhya8AEmknWMGogORg2kHLAgcyS5uBqff/v2P6WoiFRzGjEMfP7tG7jUkOTiIskkkL7n376Biy4QgBdf1AJUD0MAVnQzULxAI00AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Bloody_Bite"
        },
        {
            id: "APOTHEOSIS_MASS_STATUS_DRUNK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsklEQVR4nGNgoBAw4pL4fyHxP4pCg/k41WJoRNeMTxwFEFSAT81/LBIlPlL/QRifWhYY497x2xiGmiiyYrUMQ+3d6TZYnQUSxycHopmwWgF1/ulrjxmULFXxhg0LLgmcziXWgJPyygw3JPgZNrLwMhAF7qL5FeSFFbny4DBAl0Pms8AYIP+igzP3fzMwMGCKY1PLAAIgGwm5lKAakAJsiQfmJXRxnBkE3ZCeLc+Iy0ykAgAb42aEob73sAAAAABJRU5ErkJggg==",
            name: "Mass Drunk",
            description: "Affects every creature in a large radius with a drunken curse",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Mass_Drunk"
        },
        {
            id: "APOTHEOSIS_MASS_STATUS_WET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyElEQVR4nGNgoBAw4pJYf//Vf2R+oKIYTrUYGtE14xNHAQQV4FOzHouEe/mO/yCMTy0LjLHuwRsMQ1nVRbFahqyWCUTE7r/2f7GjFkogIdvsM+8siitAakF64AYQAvrqKjjlmLAJgmyHOR+mufroR6yBx0TI9os376DQWA1YjOQnGPh98zWcfWbTcRQ+cpgxwQTP37wNV7Cz0wMsCdIE0wgTQ1fLgAx0ZmwkmJAIqgEpkMusxlAEEsOmGWcGQTfk0fRW4jITqQAACAdyKrmUvXkAAAAASUVORK5CYII=",
            name: "Mass Wet",
            description: "Soaks every creature in a large radius with a magical wetness",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Mass_Wet"
        },
        {
            id: "APOTHEOSIS_MASS_STATUS_FIRE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA40lEQVR4nGNgoBAw4pL4d3XNf2Q+k3YITrUYGtE14xNHAbgU/PeWhovjNOQfFomfXZb/0Q1AV8sEF72+AcNQ9rLjYH//spdDlUBX+29NDIoNMBs/HchCobHpYcLmHZCNYEMUpSACilIY3sD0AhL4aWYIZ8M0YngDnwEg8HlaJgOnnD7Dny0zMAzFMIApZAkjejjgAyC1ID0gNgtMkPHWZrgC3u6NDJ9L/Rm+wwTuP2NgP3WeAZtaBmTwv40f7gpQGgCFPggjByCyGpyGvKgWxFAEEsOmGWcGQTdEovU9cZmJVAAAwPR+cRx0qcQAAAAASUVORK5CYII=",
            name: "Mass Fire",
            description: "Burns every creature in a large radius with a magical fire",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Mass_Fire"
        },
        {
            id: "APOTHEOSIS_MASS_STATUS_URINE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxklEQVR4nGNgoBAw4pJ4/abgPzJfVGQCTrUYGtE14xNHAQQV4FPzGovEzQdi/0EYn1oWGOPnr3MYhgq+4YOyXqGIY6h98swOq+2vzqjAMbo8TA8TVv+gu0TaHqccEzZBkO0w58M0/36ejDXwmAjZ/v7pQRQaqwEyUocY0cPhvcgnOPvez80ofJBakB4UFzAynYIrUFd4BZYEaYJphImhq2VABk9fcBBMSATV3LzN9f/CJV4MRSAxbJpxZhB0Qwz0PhOXmUgFAE/hdMmWByqdAAAAAElFTkSuQmCC",
            name: "Mass Jarate",
            description: "Douses every creature in a large radius with a magical jarate.",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Mass_Jarate"
        },
        {
            id: "APOTHEOSIS_MASS_STATUS_POLYMORPH",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+0lEQVR4nGNgoBAw4pL4cPLtf2S+gLkwTrUYGtE14xNHAQQV4FPzAUni3++//0EYmf3l6LP/2NQywRifz76Ha4aJIWviMhOH82Fq4eDxtDsotmHDL1pP/3877xoYI+thQjbo26mXOP1+cOZWML2nYRWKOBMy5/P2h3BDkA0Dse3TvcFsl4YwFANYkDmSLZaMLzhP/wcZxOspj2IIj4M0w5cDT3G6kAHmJ5BfQfTzmuPgkAfxQexdij3/0dWieOHTuQ9gmlWSG0xfXnqUgcdaihHEB7kM2TKYWgxwNeUMwYREUA1IwQnTPRiKQGLYNOPMIOiGWJx2IS4zkQoAWC/JXy0j86UAAAAASUVORK5CYII=",
            name: "Mass Polymorph",
            description: "Afflicts every creature in a large radius with a magical polymorphine",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Mass_Polymorph"
        },
        {
            id: "APOTHEOSIS_MASS_STATUS_POLYMORPH_INTENSE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwUlEQVR4nGNgoBAw4pK4v/L2f2S+YrgqTrUYGtE14xNHAQQVYFHDiCwBc2ad42GsBjXtt2VEV8sCk/x07T2YLrTc8P/zj7cM7388Q9EsyCEFNhhkCEwtHFysPwW3McFw2n8QRrcdZDAIo+thQVe44HwWSmgja0J3FVYDsGmGaUQ3nKAB7/FoxAAXkcKBFLVMMMbHq2ghiyXg8KllAIFDITtRFGOLEXQ1WA1Zbj0PQxFIDJtmnIGDbkjk0STiMhOpAACzA4CoLu5fMQAAAABJRU5ErkJggg==",
            name: "Mass Chaotic Polymorph",
            description: "Afflicts every creature in a large radius with a magical chaotic polymorphine",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Mass_Chaotic_Polymorph"
        },
        {
            id: "APOTHEOSIS_MASS_DRY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6klEQVR4nGNgoBAw4pK4c+fOf2S+iooKTrUYGtE14xNnRFcEsmnO8g1ghSmRAWB5GB8EHEx1UFzDiEszLgAyFKYWxYAdO3b8v3DvBYOIoACKhjfvP2CIyQhyMHh4eID1MsE0wwRAGkAY2QswPgyA1IL0wA2AgYqsBLiLQJpA3oHZjm4oDDAhc7AZBOODMLpLMAzomLYAbCPIZpgGmCaYa9ADmRE9EEEA5myQc0GGIothDUQQePToEdzpMJthmmFiMENBarGCWbNmYaQBkCEwjEsNhiFNTU0YikBi2DTjzCDohtTV1RGXmUgFAKfNpHSI6rXkAAAAAElFTkSuQmCC",
            name: "Mass Infiltration",
            description: "Freezes the stains on every creature in a large radius with a magical spell",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Mass_Infiltration"
        },
        {
            id: "APOTHEOSIS_ALT_FIRE_TELEPORT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzklEQVR4nGNgoBbYvPPi/+7J6/8Xi+v+J0UfC0yzurokWECT8y8Dg7ju/96XlxmJNkBdXZJBVeI7AwODJAOr3E8GhkfsDL1EuoAJRNy8+Zzh9gtOsMDvRccZ/s9cDma/fv16OrLi/////yfgAhiAeIdoF2ADMNtBNMhmmO3IbBBgun37diCyF0A0iA8DIiIiGYyMjCgBCuLDDGGECcJiAqTZ112fEdn/oqKimci2IhvIBGNoKHEFqSmIMYJoZI3oNhMdBsQCJqJVjgIGXAAA2pde1oK8dz8AAAAASUVORK5CYII=",
            name: "Alt Fire Teleport Bolt",
            description: "Right Click to fire a magical bolt that moves you wherever it ends up flying",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx0ieVMuyet6mBgYGhngxzGu9duAnSy8AI87KkkgzZhnHycdffu3CTEcWFIMHvn76CLfEriCTatE0Tlv+nTxhiA7vnbWLABVyT/Eg30BWHJnyAiWQdowaig1EDKQcsyBxOPu7G75++/t80YTmp5jRiGPj901dwqcHJx02SSSB93z99BRddIAAvvqgFqB6GAKInM2ZGCqHPAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Alt_Fire_Teleport_Bolt"
        },
        {
            id: "APOTHEOSIS_ALT_FIRE_TELEPORT_SHORT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyklEQVR4nGNgoBbYvPPi/+7J6/8Xi+v+J0UfC0yzurokWECT8y8Dg7ju/96XlxmJNkBdXZJBVeI7AwODJAOr3E8GhkfsDL1EuoAJRNy8+Zzh9gtOsMDvRccZ/s9cDma/fv06F0T/////P5EugAGId4h2ATYAsl1ERGQSzHYQjc0lTOheANEgPkjzmzdv8pAVMzIyMqIbwgIifN31GUExAXI6SLOGEpflmzdvTLG5DGQIAz5w+/ZtC5gXYE5HprF6gRLARJHuUcAAAgDpb19Jf4BZRAAAAABJRU5ErkJggg==",
            name: "Alt Fire Small Teleport Bolt",
            description: "Right Click to fire a shortlived magical bolt that moves you wherever it ends up flying",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx0ieVMuyet6mBgYGhngxzGu9duAnSy8AI87KkkgzZhnHycdffu3CTEcWFIMHvn76CLfEriCTatE0Tlv+nTxhiA7vnbWLABVyT/Eg30BWHJnyAiWQdowaig1EDKQcsyBxOPu7G75++/t80YTmp5jRiGPj901dwqcHJx02SSSB93z99BRddIAAvvqgFqB6GAKInM2ZGCqHPAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Alt_Fire_Small_Teleport_Bolt"
        },
        {
            id: "APOTHEOSIS_ALT_FIRE_SWAPPER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArElEQVR4nGNgoBbYvPPi/+7J6/8Xi+v+J0UfE0yzurokg4aaEoMj518GkCGzj38BG4SLRgG3Hrz6///Hw/8g+r6d8v8tClr/SXLBzZvPGW6/4AQL/F50nOH/zOU4NeB1wX8oBvFJcgElgAndCyAaxMcF/v//j911m3deBDsdROOzEd0ARnwmMzIyEpRngkkiK4ZJwjThk2dCtwmbC/DJM+FzNj5DYYA60TigAAAWHn2swUOpMwAAAABJRU5ErkJggg==",
            name: "Alt Fire Swapper Bolt",
            description: "Right Click to fire a projectile that swaps your position with the target's",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx0ieVMuyet6mBgYGhngxzGu9duAnSy8AI87KkkgzZhnHycdffu3CTEcWFIMHvn76CLfEriCTatE0Tlv+nTxhiA7vnbWLABVyT/Eg30BWHJnyAiWQdowaig1EDKQcsyBxOPu7G75++/t80YTmp5jRiGPj901dwqcHJx02SSSB93z99BRddIAAvvqgFqB6GAKInM2ZGCqHPAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Alt_Fire_Swapper_Bolt"
        },
        {
            id: "APOTHEOSIS_ALT_FIRE_COV",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQ0lEQVR4nGNgoBAwwhibd178f+PWPYYXLXUMvS8vM176uWU6skI9dp9MbAawwDSrq0uCBTQ5/zIwiOv+P3qkegayQpiB6AYxgohbD179V5X4znD7BScDa5wlw9VH7Az/9yui2PTk3hOwgdY2rSiGMIGImzefgzWDwO9Fxxn+z1wOZvsobAFjZHD0SDXcNXAvqKtLMoBcgACSDIzyBnCehoIByAVYA5GJgUjg4uSTIaMkA8bIrmBC9wKIBvFVGFrgmkFsEEb3DtwAeYfHM2CGgGgfNz1iHcYADgMQeMISN4Phv0wGgxoDwx0GiP9hrrjDUAOmbzy4gDshXfq5ZTrIb8h+RjZgz74t8HSBHJVMuJyGbBs2m2GACcYAmQgyGRlseeADxsgAPSHBvYDsFRCN7B2YRphFyOIYBqAbhOxCnP6gBAAAJDyLXAXgF0IAAAAASUVORK5CYII=",
            name: "Alt Fire Circle of Vigour",
            description: "Right Click to cast a field of regenerative magic",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx0ieVMuyet6mBgYGhngxzGu9duAnSy8AI87KkkgzZhnHycdffu3CTEcWFIMHvn76CLfEriCTatE0Tlv+nTxhiA7vnbWLABVyT/Eg30BWHJnyAiWQdowaig1EDKQcsyBxOPu7G75++/t80YTmp5jRiGPj901dwqcHJx02SSSB93z99BRddIAAvvqgFqB6GAKInM2ZGCqHPAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Alt_Fire_Circle_of_Vigour"
        },
        {
            id: "APOTHEOSIS_ALT_FIRE_COT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABWklEQVR4nGNgoBAwwhibd178f+PWPYYXLXUMvS8vM2499fMqskJvM3ZtbAawwDSrq0uCBTQ5/zIwiOv+r9t5koGdjwMs9vPTD4bFe778B7EnHD/HcLbWDm4xE4gAaVaV+A6mteV+Mjhy/oVrBgEQe/rVa2DNBZZGDMbNh/6jeGEzkgtA4ObN5wwnP+piOHff8zNg14AMiXXhYYR7QR3qAgSQZPCRh7sSDpoZTBlqV4Ms/4YaBtgARCGmC0Bg+80fDKBABgUsE8zJt19wgiVBNIgPAs2hjGAMYztJmoDZyOHDBCYENa7BDAHRPm56DMQCFhij4dRHBvYbP8Hskx//Y3gDxIZ5ARSQGGDxni//a1b9+08IgNTA0gSKC0Bg+80jDPsmccD9iisa1S2NGDAMmABNJCB6HwPEqegAlgZAamAAJbJBKQykAGYgclJGFkdOypipBQqIzUwUAwDgzsaGwKM2gwAAAABJRU5ErkJggg==",
            name: "Alt Fire Circle of Trueform",
            description: "Right Click to summon a circle capable of curing most negative status effects from targets within it's radius",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx0ieVMuyet6mBgYGhngxzGu9duAnSy8AI87KkkgzZhnHycdffu3CTEcWFIMHvn76CLfEriCTatE0Tlv+nTxhiA7vnbWLABVyT/Eg30BWHJnyAiWQdowaig1EDKQcsyBxOPu7G75++/t80YTmp5jRiGPj901dwqcHJx02SSSB93z99BRddIAAvvqgFqB6GAKInM2ZGCqHPAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Alt_Fire_Circle_of_Trueform"
        },
        {
            id: "APOTHEOSIS_ALT_FIRE_TARGETTER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFUlEQVR4nGNgIAD+////H588E4yxeefF/92T1/8vFtdF0fD9+3e8FrDANKurS4IFNDn/MjCI6/7PLYljEOHlBYt9mTHj/5vPnxkUSksZYa5iZGQEs8Hg1oNX////ePgfRN+3U/6/RUEL7opv377B2Q+6u/8j8+EuuHnzOQMDA8QFvxcdZ/gP4rvrg/k/f/6EKxbLzmZ4NXUqsn5UF8AwiP/+/XsUm5D5IJdgBCI6EBQUZMTFh4UN3ICbN58z3H7BCRYA0RAvYQKQK0BhwBQXBw4blCjevPMi2OkgmoEAAMUKVokHSH4jNgwwAHpUIWsEiePVjE0RoXTAgAyQAwWkGORXkAYQjWwoofyBAvDaSAwgyTZyAABQot4hPXaYvwAAAABJRU5ErkJggg==",
            name: "Alt Fire Targetter",
            description: "Right Click to fire a projectile which causes irresistible hatred towards anything it hits",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx0ieVMuyet6mBgYGhngxzGu9duAnSy8AI87KkkgzZhnHycdffu3CTEcWFIMHvn76CLfEriCTatE0Tlv+nTxhiA7vnbWLABVyT/Eg30BWHJnyAiWQdowaig1EDKQcsyBxOPu7G75++/t80YTmp5jRiGPj901dwqcHJx02SSSB93z99BRddIAAvvqgFqB6GAKInM2ZGCqHPAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Alt_Fire_Targetter"
        },
        {
            id: "APOTHEOSIS_PORTAL_LUKKI_RED_PORTAL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABO0lEQVR4nLWSMW7CQBBFxygVBU0aVxS0sVakSLRcAI6QHsERUiNqjoBE7yO4TAVSCohlWgqqNGko3Dp6lr5l40RJw0jWrHfn//n7Z81uFe+z2UfsffFXXed6Y+XcHuApy9zDZGJv43HBns6u64P6T7ZYlB2/tlv7vFws7PXsfjSyY5LYOc8P/W53CGm0XAYtBSvn9hQCBgSYGMzn5Rqw9upKOlq8pukjXegMydNmU+6f1usySw1nkP2ooF/rAhAACsgQ6moymXwngucwHAoAmNyYynTaUHJMElcRxN4XksenEEk9Q07Ny24XVASDKErFSAfk6u7KIucKeNUaY+x9UTeK0BpCriAwhrdMPOf5QQAZJemANVqM/nWMZlZ1IUu+RgsJD6muoPESNU4KyJoMD0wh8/4deKOZ3yS+AWyaxvkeWczYAAAAAElFTkSuQmCC",
            name: "Summon Red Portal",
            description: "Summons a red tinted portal to where it is focused, Right Click to mark a location for the portal to focus on.",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Summon_Red_Portal"
        },
        {
            id: "APOTHEOSIS_PORTAL_LUKKI_GREEN_PORTAL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRklEQVR4nLVSMW7CQBBcIwo3yBVFUiWKi0Q6kFO64APwAMQbQs0jXJtH8AD7A/SBBAQUoFAldUTj7qI5NNaCI0HDStae73Zm52ZP5FYxWA0+TGbspbra+UY4DmcALr4W7e5zV+L32GKPZ+f1nv4Z7Uau4/R3KoefgzTuGtIJOpJvcin2xdx/8COQJk+JV1EQjsMZCgEGCGDE8H7o1gBzTyupcbF9276iCzqDZPIycfvpd+oy1eAMZP8q8FUXAAGAAmQQ8mo0GblOgmbcjAgAGFlHf90/UZJv8nZJYDJjKQ8fgyQ6gxw1y97SKwlaj61PMqID5PLuzCTHFeBVZYwmM1YbheAahLgCwTC8YmKxL+YE0ChKB5ijhdF6jHU9RtmJVRKjNDjKd6OV4/uQQCTpJaWCk5fIcYIMmZPBA2PQvKsD3nDmN4k/uZ7CjP2e8NQAAAAASUVORK5CYII=",
            name: "Summon Green Portal",
            description: "Summons a green tinted portal to where it is focused, Right Click to mark a location for the portal to focus on.",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Summon_Green_Portal"
        },
        {
            id: "APOTHEOSIS_PORTAL_LUKKI_BLUE_PORTAL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRklEQVR4nGNgoBWImnH1om7hlv+E1DGhC6jGTjkP0nj55n09T0tNBquWs/9BYjA5dPWMyJyyVXfBNh659YHh89vnDLzCkgw2agIM249fZ/jx5sEFDhEFA5ChXWHKjBguUI2dch6kEKQZpAmkGQRynKXAbJBmmBiyS5hgjNuLcwxBtoBsBhmyIlMLLD5l7zMwDXMNSA5kGFYXcCDZAtII0gByAYgGGQjzGiyQQTQLzABRdUsDmAaQZhCNDCKmX0Nxyfbj1/XgBugWbvkPcx4IwwDMEGQaZDhIzeV+H0aEAeqKl2AmgmwAORfmdxgNMxzkBVBYYUSjbuGW/8gBBQIwNshAkBdgmkEBjhGIP948uADTAAsomNNBmmFRCwpo5GhkRE9I6IkGPVGBANaEBJOAORFEwxIVCIAMARmOrJkoAAobWJzTBAAAv4XMfMQipAEAAAAASUVORK5CYII=",
            name: "Summon Blue Portal",
            description: "Summons a blue tinted portal to where it is focused, Right Click to mark a location for the portal to focus on.",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Summon_Blue_Portal"
        },
        {
            id: "APOTHEOSIS_KNOWLEDGE_OF_KINGS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqElEQVR4nGNgoBAw4pL4/+PUfxSFHGY41WJoRNeMTxwFEFSAT81/IjRjU8sEF/1zCCL5pQcuCWKj85HVIkz8gqYJagOyv8FsLIYxYbjv1jUMZ8LZUDlkwILVkzAnstih8rEAJnSBA/vvoxqEpBlFDtkFjDwljCA/gWhcTkUGKGph4P+5JOKjEZfa/0QYQlANSMH+XkcMRSAxbJpxZhB0QxyL9xOXmUgFAM9IjbHRQyiWAAAAAElFTkSuQmCC",
            name: "The Knowledge of Kings",
            description: "Casting this spell causes something irreversibly permanent to occur",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAl0lEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhArSB+qgSDBG+9+g5iM245dJNo0Lyv9//QLQ3RQ5GPCgAv0bTlDuoF9ODThA0wk6xg1EB2MGkg5YEHmaAixNt549/u/l5U+qeY0Yhh4491vcKmhIcRKkkkgfTfe/QaXNCDAOOhLbADzbCujVFbv3wAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/The_Knowledge_of_Kings",
        }
    ],
    pseuds: [
        {
            id: "$item_essence_air",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyElEQVR4nGNgGGjAiC4wa9as/33tExnYWNgYckozwWJTuqeD6V9/foHpG/evMmI1QENR+z9IIwiANDs6OoLZ+/fvBxsCMxBkAcwQFlxOg2lGZiOLpaWlMWAYwIZkOww8ePAAQzMyYEHmIDsbpllBQQGDjQyYkDkgf4L8CwPYNMDCA2sg6qka/sfmGpAmZJeB+GlpafgDcQqSLegA2TAWZAlQPBdV5sM1oxuC7CKC6QDmDWRDsKUDRrgsFIAMAdHIBsEAtpQ4DAAAaSZa1nUHOEIAAAAASUVORK5CYII=",
            name: "Essence of Air",
            description: "Your being controls the air around you!",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Essence_of_Air"
        },
        {
            id: "$item_essence_fire",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxUlEQVR4nGNgGGjAiC6goaj9H0SzsbCB+cet3jFYHhMCs3/9+cVw1u4LA/fCh3B9TOiaQQpgmkGA2d0TzgaJgwyDWYJhAAjAbIPZjo2NDJiQOcjORganGs1RDEJ2IRMDHoDsfHSDsBpwHMlmmOL/jvIQhR0ZhL1gCfU/zGaYZhDNuP8hVlcxMZAI/u7cjtuAX39+gWmz+pNgGmYruith6vC64C+STTCD0G0HyzGgAeSUCApUmJ9Bmo0P8YDZN+5fxdA3hAEAgIhHkkU+TTQAAAAASUVORK5CYII=",
            name: "Essence of Fire",
            description: "Your entire being is fluctuating!",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Essence_of_Fire"
        },
        {
            id: "$item_essence_laser",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsklEQVR4nGNgGGjAiC6goaj9H0SzsbBhKP715xeYvnH/KiNWAzQUtf9j04jNIJghTAwUAiZkDjbbE+d9Y2jdJcVw8dY5hrW3vDDUsWAzFaRJRUaF4c6TOww+NiEMKgwtYHEQvfYWA0Ow2jbsLoBpBgGQZpAhYDZDDZy+8eACAzJgQeExMDDMT+KCsxPn3UFIKEA0V7s9w28ApmEwDagasXrhFzSeCQFkdUwMA50SGYY+AADLOUE+GHcq8wAAAABJRU5ErkJggg==",
            name: "Essence of Earth",
            description: "Your being releases damaging light!",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Essence_of_Earth"
        },
        {
            id: "$item_essence_alcohol",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABC0lEQVR4nGNgGGjAiC5Q4iP1f8tVQQY2FjYMxb/+/ALTN+5fZcRqgIai9n90jVUe78B02w4huJib+kuGni3PwHqZsDkLpGB9ETdY85n7vxnCk53AfBgAuRAGmJA1gmwHaTZRZAXzQRphQMlSFe4aZFcyIhugp2r4H2QADIAMMtWSZZi+9R6YDTLw3vHbDIF9Xxku3T6P3Qu7boqjaD597TFDprcSmA3SDOIjAxZs/gcBkAaQs2HOL63ZCTUcEZg4A9EEGgYgG0HOB9EgV8DCAKcLfv35BbUF5IrH4BgAAVgYwKIS5MpLt7G4wEf7PTwcYJphLkJOB8jRyIjuJFBiAtG4UiLIElgiGiYAAA0tayZcPI3UAAAAAElFTkSuQmCC",
            name: "Essence of Spirits",
            description: "That was not the best of ideas",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Essence_of_Spirits"
        },
        {
            id: "$item_essence_water",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFUlEQVR4nGNgGGjAiMz5//8/g6aSzn8Qm42FjYE5dhZDdaAWQ+v6awx/F6cx/PrzC6zu+r0rjIyMjJgGaChq/wdpfGdbyDChMBgs9vYPF4Mwyzcwu6B/LYPQ4X6wQTfuXwXrZUJ3EkwzSOP6c68ZDl16CDcIJA6SRwZMyByQ7TCbYeDaw9dwg2CGgNRhNYA5dhbcNpAGkGYteVEwjU0dRhisufz1P7Lm1w+uM4gqaMJpkGF2evLgMAnR5cYMg9b118CSIEUgxSBNSncb4JoDjUTB8iB1WL3wd3EailNBmjicpoJpmNfQ1TEhawBFDyiqYK4A2QgCIDbM6SB5WHrAMAAEQPEMMwQEYBphmkHyVE2JDEMfAABlTZMt/g5WBQAAAABJRU5ErkJggg==",
            name: "Essence of Water",
            description: "The earth flows around you!",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Essence_of_Water"
        },
        {
            id: "missingPerk",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnElEQVR4nGNgGGjAiC5gKCv7n42LHaviX99+gunzjx8zYjXAEE2zlp4ZigHXLp2CGwQzhAVZAbrmt2/eohgAEgMZgqyOCZffYJpfPrsLxshiyIAFlwEwTYQAEzGKYGGBzVAmYjSDnI7LRUyEDMDmb5xh8OvbT5QQBgFsNsPSA9Fe0EJLD8iACZkDShwg05FtAHkB5g2YHHJKHAYAAPU6UTp6qMAWAAAAAElFTkSuQmCC",
            name: "No perk found",
            description: "Either this perk is missing from onlywands or it is modded and onlywands doesn't support this mod yet",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Perks"
        },
        {
            id: "missingSpell",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAKMGlDQ1BJQ0MgUHJvZmlsZQAAeJydlndUVNcWh8+9d3qhzTAUKUPvvQ0gvTep0kRhmBlgKAMOMzSxIaICEUVEBBVBgiIGjIYisSKKhYBgwR6QIKDEYBRRUXkzslZ05eW9l5ffH2d9a5+99z1n733WugCQvP25vHRYCoA0noAf4uVKj4yKpmP7AQzwAAPMAGCyMjMCQj3DgEg+Hm70TJET+CIIgDd3xCsAN428g+h08P9JmpXBF4jSBInYgs3JZIm4UMSp2YIMsX1GxNT4FDHDKDHzRQcUsbyYExfZ8LPPIjuLmZ3GY4tYfOYMdhpbzD0i3pol5IgY8RdxURaXky3iWyLWTBWmcUX8VhybxmFmAoAiie0CDitJxKYiJvHDQtxEvBQAHCnxK47/igWcHIH4Um7pGbl8bmKSgK7L0qOb2doy6N6c7FSOQGAUxGSlMPlsult6WgaTlwvA4p0/S0ZcW7qoyNZmttbWRubGZl8V6r9u/k2Je7tIr4I/9wyi9X2x/ZVfej0AjFlRbXZ8scXvBaBjMwDy97/YNA8CICnqW/vAV/ehieclSSDIsDMxyc7ONuZyWMbigv6h/+nwN/TV94zF6f4oD92dk8AUpgro4rqx0lPThXx6ZgaTxaEb/XmI/3HgX5/DMISTwOFzeKKIcNGUcXmJonbz2FwBN51H5/L+UxP/YdiftDjXIlEaPgFqrDGQGqAC5Nc+gKIQARJzQLQD/dE3f3w4EL+8CNWJxbn/LOjfs8Jl4iWTm/g5zi0kjM4S8rMW98TPEqABAUgCKlAAKkAD6AIjYA5sgD1wBh7AFwSCMBAFVgEWSAJpgA+yQT7YCIpACdgBdoNqUAsaQBNoASdABzgNLoDL4Dq4AW6DB2AEjIPnYAa8AfMQBGEhMkSBFCBVSAsygMwhBuQIeUD+UAgUBcVBiRAPEkL50CaoBCqHqqE6qAn6HjoFXYCuQoPQPWgUmoJ+h97DCEyCqbAyrA2bwAzYBfaDw+CVcCK8Gs6DC+HtcBVcDx+D2+EL8HX4NjwCP4dnEYAQERqihhghDMQNCUSikQSEj6xDipFKpB5pQbqQXuQmMoJMI+9QGBQFRUcZoexR3qjlKBZqNWodqhRVjTqCakf1oG6iRlEzqE9oMloJbYC2Q/ugI9GJ6Gx0EboS3YhuQ19C30aPo99gMBgaRgdjg/HGRGGSMWswpZj9mFbMecwgZgwzi8ViFbAGWAdsIJaJFWCLsHuxx7DnsEPYcexbHBGnijPHeeKicTxcAa4SdxR3FjeEm8DN46XwWng7fCCejc/Fl+Eb8F34Afw4fp4gTdAhOBDCCMmEjYQqQgvhEuEh4RWRSFQn2hKDiVziBmIV8TjxCnGU+I4kQ9InuZFiSELSdtJh0nnSPdIrMpmsTXYmR5MF5O3kJvJF8mPyWwmKhLGEjwRbYr1EjUS7xJDEC0m8pJaki+QqyTzJSsmTkgOS01J4KW0pNymm1DqpGqlTUsNSs9IUaTPpQOk06VLpo9JXpSdlsDLaMh4ybJlCmUMyF2XGKAhFg+JGYVE2URoolyjjVAxVh+pDTaaWUL+j9lNnZGVkLWXDZXNka2TPyI7QEJo2zYeWSiujnaDdob2XU5ZzkePIbZNrkRuSm5NfIu8sz5Evlm+Vvy3/XoGu4KGQorBToUPhkSJKUV8xWDFb8YDiJcXpJdQl9ktYS4qXnFhyXwlW0lcKUVqjdEipT2lWWUXZSzlDea/yReVpFZqKs0qySoXKWZUpVYqqoypXtUL1nOozuizdhZ5Kr6L30GfUlNS81YRqdWr9avPqOurL1QvUW9UfaRA0GBoJGhUa3RozmqqaAZr5ms2a97XwWgytJK09Wr1ac9o62hHaW7Q7tCd15HV8dPJ0mnUe6pJ1nXRX69br3tLD6DH0UvT2693Qh/Wt9JP0a/QHDGADawOuwX6DQUO0oa0hz7DecNiIZORilGXUbDRqTDP2Ny4w7jB+YaJpEm2y06TX5JOplWmqaYPpAzMZM1+zArMus9/N9c1Z5jXmtyzIFp4W6y06LV5aGlhyLA9Y3rWiWAVYbbHqtvpobWPNt26xnrLRtImz2WczzKAyghiljCu2aFtX2/W2p23f2VnbCexO2P1mb2SfYn/UfnKpzlLO0oalYw7qDkyHOocRR7pjnONBxxEnNSemU73TE2cNZ7Zzo/OEi55Lsssxlxeupq581zbXOTc7t7Vu590Rdy/3Yvd+DxmP5R7VHo891T0TPZs9Z7ysvNZ4nfdGe/t57/Qe9lH2Yfk0+cz42viu9e3xI/mF+lX7PfHX9+f7dwXAAb4BuwIeLtNaxlvWEQgCfQJ3BT4K0glaHfRjMCY4KLgm+GmIWUh+SG8oJTQ29GjomzDXsLKwB8t1lwuXd4dLhseEN4XPRbhHlEeMRJpEro28HqUYxY3qjMZGh0c3Rs+u8Fixe8V4jFVMUcydlTorc1ZeXaW4KnXVmVjJWGbsyTh0XETc0bgPzEBmPXM23id+X/wMy421h/Wc7cyuYE9xHDjlnIkEh4TyhMlEh8RdiVNJTkmVSdNcN24192Wyd3Jt8lxKYMrhlIXUiNTWNFxaXNopngwvhdeTrpKekz6YYZBRlDGy2m717tUzfD9+YyaUuTKzU0AV/Uz1CXWFm4WjWY5ZNVlvs8OzT+ZI5/By+nL1c7flTuR55n27BrWGtaY7Xy1/Y/7oWpe1deugdfHrutdrrC9cP77Ba8ORjYSNKRt/KjAtKC94vSliU1ehcuGGwrHNXpubiySK+EXDW+y31G5FbeVu7d9msW3vtk/F7OJrJaYllSUfSlml174x+6bqm4XtCdv7y6zLDuzA7ODtuLPTaeeRcunyvPKxXQG72ivoFcUVr3fH7r5aaVlZu4ewR7hnpMq/qnOv5t4dez9UJ1XfrnGtad2ntG/bvrn97P1DB5wPtNQq15bUvj/IPXi3zquuvV67vvIQ5lDWoacN4Q293zK+bWpUbCxp/HiYd3jkSMiRniabpqajSkfLmuFmYfPUsZhjN75z/66zxailrpXWWnIcHBcef/Z93Pd3Tvid6D7JONnyg9YP+9oobcXtUHtu+0xHUsdIZ1Tn4CnfU91d9l1tPxr/ePi02umaM7Jnys4SzhaeXTiXd272fMb56QuJF8a6Y7sfXIy8eKsnuKf/kt+lK5c9L1/sdek9d8XhyumrdldPXWNc67hufb29z6qv7Sern9r6rfvbB2wGOm/Y3ugaXDp4dshp6MJN95uXb/ncun572e3BO8vv3B2OGR65y747eS/13sv7WffnH2x4iH5Y/EjqUeVjpcf1P+v93DpiPXJm1H2070nokwdjrLHnv2T+8mG88Cn5aeWE6kTTpPnk6SnPqRvPVjwbf57xfH666FfpX/e90H3xw2/Ov/XNRM6Mv+S/XPi99JXCq8OvLV93zwbNPn6T9mZ+rvitwtsj7xjvet9HvJ+Yz/6A/VD1Ue9j1ye/Tw8X0hYW/gUDmPP8uaxzGQAAAJVJREFUeJxj/P//PwMlgIki3dQwgAWbICMjI0N2YoYvstjU+TM2Y/MuCzYDQJpfPn+JLubHwMCwiSgvvIRqXrNj/WYQRhYjygVroJqoEojZ0LBYs2M9hvPB4P///xgYSbNfiEegLz61TPhsh/qbEZ8aRmxRA4pGXK5FB0z4TM9OzPAHYXxqWPBJ4oo6ZIDVC6SAgc9MAOoIVKrpe39zAAAAAElFTkSuQmCC",
            name: "No spell found",
            description: "Either this spell is missing from onlywands or it is modded and onlywands doesn't support this mod yet",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAk0lEQVR4nO2UQQqEMAxFf8XTNNCLFHobd4IWuvM2ghcptNeJxJU6OEwdERe+VRL4b5HFV8yMK6kutQGo10tLTQ+gO+HxIQ39RujInpYZaMlthXKMyDKqMU0/2xxZvu+He1pqcERIQ7kwHIS+URUnXuGeV/g/9Xox0D4isyNb6vEfwoi8tIaBLjJJLiIvTSOoxzf2DL5QJpt3Q1Y+AAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Spells"
        },
        {
            id: "$perk_respawn_spent",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA50lEQVR4nGP8//8/AyWAiSLdDAwMLMicexoa/0O+fQOz2bjYMRT/+vYTTK/h4mJQunGDEcMFl8XFwZLYNMMMBcmD1GH1QuP9+2DJZQzMWA0AiYPkQeqwGsDGxc7Q/vIZVkNgmkHyyC5kwmbTPIGPKIbANKtu8sIfiCCQPsGYwdzSEMy+7LeNYdnLl3Cb5zFgAiZ0gZkFZxkq45aD2bpQzSAaF2DCJvjy5lcGDvP5cJvxBSwTtnhGDjAQgBkCMhTkRZg6rC5YhqYZBmCG2BdcwO2CNdBEghzPyACWTkDqYIBxwDMTxQYAANJ0ZOB4bQX8AAAAAElFTkSuQmCC",
            name: "Extra Life (One-Off)",
            description: "Upon death you respawn with 100 health.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Extra_Life",
            ui_name: "$perk_respawn_spent",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA50lEQVR4nGP8//8/AyWAiSLdDAwMLMicexoa/0O+fQOz2bjYMRT/+vYTTK/h4mJQunGDEcMFl8XFwZLYNMMMBcmD1GH1QuP9+2DJZQzMWA0AiYPkQeqwGsDGxc7Q/vIZVkNgmkHyyC5kwmbTPIGPKIbANKtu8sIfiCCQPsGYwdzSEMy+7LeNYdnLl3Cb5zFgAiZ0gZkFZxkq45aD2bpQzSAaF2DCJvjy5lcGDvP5cJvxBSwTtnhGDjAQgBkCMhTkRZg6rC5YhqYZBmCG2BdcwO2CNdBEghzPyACWTkDqYIBxwDMTxQYAANJ0ZOB4bQX8AAAAAElFTkSuQmCC"
        },
        {
            id: "$log_curse",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA10lEQVR4nGNgGPKAEZ9k39z1/0G0kb4WXMzBRB1FDxM+zecvXGKYM2MSmJ+VmcEwd+EKhgNnbv4nygAQOHviAAM6/9zFayhiLAx4gLGFA4OhgR7Y9pSMPAaQi9ABEzaNvx7VgZ0P0gwzCARAfGyGoIDbHfL/QQaAACwQ0WmcLlibIfifU1ea4dXlPQy/H9eDbQMZBLMVm+2M6AYwizExmJirM4jpuoDFbuxczqCXehtndLMgc/Y8kWQQfg9y5U0GhpM3GZRkhfBqxgoyfbT+14RrYvh1GAMACBpgtVde9cQAAAAASUVORK5CYII=",
            name: "Curse of greed!",
            description: "You gain more gold but a curse will haunt you",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Curse_of_Greed",
            ui_name: "greed_curse",
            ui_img: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA50lEQVR4nGP8//8/AyWAiSLdDAwMLMicexoa/0O+fQOz2bjYMRT/+vYTTK/h4mJQunGDEcMFl8XFwZLYNMMMBcmD1GH1QuP9+2DJZQzMWA0AiYPkQeqwGsDGxc7Q/vIZVkNgmkHyyC5kwmbTPIGPKIbANKtu8sIfiCCQPsGYwdzSEMy+7LeNYdnLl3Cb5zFgAiZ0gZkFZxkq45aD2bpQzSAaF2DCJvjy5lcGDvP5cJvxBSwTtnhGDjAQgBkCMhTkRZg6rC5YhqYZBmCG2BdcwO2CNdBEghzPyACWTkDqYIBxwDMTxQYAANJ0ZOB4bQX8AAAAAElFTkSuQmCC"
        },
        {
            id: "creature_shift_ui",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2klEQVR4nGNgoCZ4dSXnP4hem2YPptEBTBymDgRYkDWL6UxhfL41+D+zvCRDlJEwhiG2NlIMz/1FwOpg6hmRFcA0H550mWHxoZcMLz5/gstJ8PIxxNqJM9jm6TL8fficQdJ7LVgvE7LzYJq7t95G0QwCID5IHCQPUgfzDiOyoqgZQf+/TbiGoRkZgFzCVaDFsCxjHaoLYACfZmzyTAwUAiaqGyDBy4dXA7o8E4wBCtUJNlLgqMIHQPIgdVhj4TkZ6YARpgA9JRYceYZhO8hmmGaYehQF5OSFgQcASUCDgaNaiP0AAAAASUVORK5CYII=",
            name: "The evolution has shifted",
            description: "You sense life is no longer what it used to be.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Creature_Shift"
        },
        {
            id: "$status_apotheosis_creature_shifted_name_creature_shift_ui_backup",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABM0lEQVR4nGNgoCZ4dSXnP4hem2YPptEBTBymDgRYkDWL6UxhfL41+D+zvCRDlJEwhiG2NlIMz/1FwOpg6hmRFcA0H550mWHxoZcMLz5/gstJ8PIxxNqJM9jm6TL8fficQdJ7LVgvE7LzYJq7t95G0QwCID5IHCQPUgfzDiOyoqgZQf+/TbgG13z82TMGSykpFINALuEq0GJYlrEO1QUwANfs6gzWDDIEGaC7jIkBCwDbvHsvg9VTiAtAhuECTBiaoTYLPoXYfBxkyO69OA1hQhcIPHEaTGsyMDBcZ2BgKGZgYGiAGpL35zM4DLAasDbN/v8EGylwVIFsv45kyC4GBrDYJBZesDxIHdZYeI6WDn7euAGXY9fQwJoOGGEK0FNiwRHU0AcBkM0wzTD1KArIyQsDDwDXPaxocVEeZAAAAABJRU5ErkJggg==",
            name: "The evolution has shifted",
            description: "You sense life is no longer what it used to be.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mod:Apotheosis/Creature_Shift"
        },
        {
            id: "$item_apotheosis_polymorphine_name",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFUlEQVR4nNVSsWpCQRCck4eprQy8RiVoJKmsQn4hXyBC2vSitVhH7G2FkC9IYWcVrKwiRhGT5kGsUvs4OJmFfRzxSiE4cNzt7szscnfAf8P4gXMO9cqt4zkf5TGM+2h07jAfzNBOekhtKrzl9sMYY44Nrss3jsKnqIXm86PkLn4j7AtWzq/dMUb2RYw+vxaizf0dScUUJm/f2L5vMiPmWfeR8wN2186K3fInM1IT8oIGw7ifdaOA4mL9UvYQj4j8Ai/MF692a8nrTlTur4SHacBgPphJkSQFxbViVSaJH0rYwwovOEE76WGKSRZTxKXQFyEveAepTeWpSOIU7KhjczHPuv6HIwOC76wmhApVzPpJfyLOHwe6hZJe1GCXxAAAAABJRU5ErkJggg==",
            name: "",
            description: "",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/"
        },
        {
            id: "$item_apotheosis_skill_angler_name",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAn0lEQVR4nGNgGGjAiC6goaj9H0SzsbBhKP715xeYvnH/KiNWAzQUtf9j04jNIJghTAwUAiZkDrrtAoHhDIYVCzA0IatjwmYqTNOH9SsZ7t/cjtUQrGGgp2r4H9l2gSc8KIqn2e9hcJ3xkYH1yweGS7fPEw6D29fXgjEMwDQjAxZcXjjfkcDACuV/kPkC9g4rIS9oDEQ0MqILkJoShwEAAH0BQEU0TW6oAAAAAElFTkSuQmCC",
            name: "Angler Skill",
            description: "Increase your fishing skill level by 1.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Angler_Skill"
        },
        {
            id: "$item_apotheosis_essence_fungus_name",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2UlEQVR4nGNgGGjAiC6goaj9H0SzsbBhKP715xeYvnH/KiNWAzQUtf8ja/TcuhfO3u7tjGIQzBAWXE4Dab694SQKH9kQGGBB5sBsh2n+cescXO72BoQhyK5kQjdx9tGDGJo51IzAfJA4srewGtC54CiYTiyPgIuhuuQkbi+AQHmCNdiQGU++MjBE+zIgA47TTxlUA8wZ7szGY0CqtT3cryqpbQwPd55k+P1oI1jOBEtAMmGLZ5Ai0VkLwZp5BeTh8jDNMHUYBiCDDy3rwJqZc4wZaJoSGYY+AAAEh2bSlBB9EwAAAABJRU5ErkJggg==",
            name: "Essence of Fungus",
            description: "Your very being is infecting the environment around it!",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Essence_of_Fungus"
        },
        {
            id: "$curse_apotheosis_alchemistdream_name",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXElEQVR4nGNgoCZ4vn37fxC9wsICTKMDmDhMHQiwIGuW9PRkvD158n8eFRUGq+ZmDEPsa2sZbt+5A1YHU8+IrACm+WBjI8O8+/cZ4ttCweLvPvxg2Ny1mSFJUZHBvr6e4cudOwyqublgvUzIzoNpbrt+neHFjx9wg4UEOBh8y3zB4iB5kDqYdxiRXWBlZfWf5+5duObyvliw7UsWHwHzTfTUGG7vPMnwRVmZ4dixY6gugAFkzSAA0qyUHARmvzPVQXEZVgPQAcjWe3PXgdkf1u7GkGfBEIHafvvuKwZVZTEGDX0IBoHZTasJG1AOdTpIM8gQEHj89B3D6Q2nwWwJDg6GL0jqmWAMUKiura1lYJ59BhxwMENA2EBPgSEo2x0sBopKkDpYLDDBDIg4cYIRFL+geBZdfQXDqSBXVGlqwtMBSD1KND5HS4nBzc0YhoBshiUimHoUBeTkhYEHABO6ssgZ6x5yAAAAAElFTkSuQmCC",
            name: "Alchemist's Dream",
            description: "All potions are replaced with Large Potions.\\nAll liquid bubbles are blessed with glass cannon.\\nAlchemists & Liquid bubble appear much more frequently.\\nNew Liquid Bubbles appear.",
            bgImage: null,
            wiki_url: null
        },
        {
            id: "$curse_apotheosis_hardcore_name",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABVElEQVR4nGNgoCZ4vn37fxC9wsICTKMDmDhMHQiwIGuW9PRkvD158n8eFRUGq+ZmDEPsa2sZbt+5A1YHU8+IrACm+WBjI8O8+/cZXvz4AZeT4OBgSFJUZLCvr2f4cucOg2puLlgvE7LzYJq1fv9m2Ojri2J7j4wMg7+ODlgepA7mHUZkRVZWVv9n/PwJ56saGjKYr17NUKKiwmCAJOZ87RrDsWPHUF2ADdw+f57BUlQUrhkmhgyY0DVdQONn8/Mz7Pn/H6c8E7oBPXfuoCia+vEjgwtSWIPkkQELugGg0IbZdPTjR7AL0OW/YHPBCguL/2tra8FR9YCZGWyTNZLzY6AuA8mD1MFigQlmQMSJE4yg+AXFsxoTE9gmkCEijIxgzSA+GysrPB2A1KMY8Hz79v+gxAGSvPXvH8MXZWUGHm1thhns7GAaxEdORMjJGQ7IyQsDDwDcIaI0KpT1TgAAAABJRU5ErkJggg==",
            name: "Hardcore",
            description: "Healing Spells are uncopyable.\\nMost enemies have additional health depending on the biome.\\nSome creatures from late game biomes may have additional attack speed.\\nMost bosses have significantly increased health.\\nEnemies drop 50% less gold.\\nAlt-Fire teleport bolt replaces normal teleport bolt.\\nEnemies spawn 1 NG+ level earlier.",
            bgImage: null,
            wiki_url: null
        },
        {
            id: "$curse_apotheosis_everything_name",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIElEQVR4nGNgoCb48HjbfxB9bqUWmEYHMHGYOhBgQdYsIOvF+OLqpP8cfCoM3t5TMQxRsspmeHH1DlgdTD0jsgKY5nvHShjmbXjD8PLtb7icuDArQ1KACIOSVQ/Dj093GCS088B6mZCdB9PcPvc5XLOriBKYBvFB4iB5kDqYd5hgBhiFX2OMzpjKYKhqAbcVpFnVmA9uCAiA5EHqQOpRDEAGqzoC4ZodHBXhhoDE0QELAw4A08ygpsXgABa5j1UdE1ZRkCao5gde01H4xBkAAoZzwZqldZ7DDcELzq3U+g+KWxD9/1zS//9fev6DwBYFLTAN5p9L+o+sDqSPkWrp4MPjbf9BgiBJkKL7n0wZvrFawTGIj6wZOTnDATl5YeABALU4uYsSWzDMAAAAAElFTkSuQmCC",
            name: "Tuonela",
            description: "All seeds are applied at once.\\nEnemies drop significantly less gold.\\nThe world is upsidedown.\\nHardcore changes apply.\\nNightcore damage increases apply.\\nYou are blessed with additional health.\\nYou can only win by Ascension, but are allowed to visit parallel worlds.\\n\\nThere is no escape.\\nThere is no freedom.\\nThis is your purgatory now.",
            bgImage: null,
            wiki_url: null
        },
        {
            id: "$curse_apotheosis_downunder_name",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJklEQVR4nGNgoCZ4vn37fxC9wsICTKMDmDhMHQiwIGuW9PRkvD158n8eFRUGq+ZmDEPsa2sZbt+5A1YHU8+IrACm+WBjI8MqKSmGhw8fMmhrazN8+fIFjJM+fWKwr69n+HLnDoNqbi5YLxOy85A18/DwMHBxcTFc2LgRzAYBkDhIHqQO5h1GZBdYWVn957l7l0HC3R2sUcLcnOHFyZNgORVnZ7BBL168ALvm2LFjqC6AAR5ra7BmMBtqM4yN7BoYYELhYdEEA9gMxeqFL1evMhACPNrauL0gwcGBVzO6PBOMAQrVtbW1DEmKingNAMmD1MFigQkmEXHiBCMofkHxXKWpiWETiA8Sh6UDkHqUMHiOlhKDm5sxbAfZDEtEMPUoCsjJCwMPAIGclQvEkRf5AAAAAElFTkSuQmCC",
            name: "Down Under",
            description: "The world is flipped upsidedown.\\nBest of luck!",
            bgImage: null,
            wiki_url: null
        },
        {
            id: "$curse_apotheosis_nightcore_name",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXElEQVR4nGNgoCY4sv35fxAdarECTKMDmDhMHQiwIGu28ZRkXDb59n85FR6Gp81WGIbk19ozBN65DVYHU8+IrACmeWLjQYbz9+czfP7xAi7HyyHBYKiYyJBfb8/w6M4XhqhcVbBeJmTnwTRz/NFiSPfbgGK7pWw3g5muP1gepA7mHUZkRVZWVv+Vf82A8/UMVRl6VlkwWKqUMPAy6sPF1l91Zjh27BiqC7CBS+dvM8iLWsI1w8SQARO6ps//L6Lw1QWyGN7+24NTngndgON3elAU3fwwjUGYyQVFHhmwoBsACm2YTc8+HgW7AFP+M6YLQi1W/O+qXQuOql/M98E2SfFbw52/63Ys2FCQPEgdLBaYYAasPhHBCIpfUDxzM6mBbQIZwsYoCtYM4rOyssLTAUg9igFHtj//D0ocIMmv/24xiCl/ZlDW5mZ4xT4dTIP4yIkIOTnDATl5YeABAJVvrGLlfkjyAAAAAElFTkSuQmCC",
            name: "Nightcore",
            description: "Healing Spells are uncopyable.\\nMost enemies have additional health depending on the biome.\\nSome creatures from late game biomes may have additional attack speed.\\nMost bosses have significantly increased health.\\nEnemies drop 50% less gold.\\nAlt-Fire teleport bolt replaces normal teleport bolt.\\nEnemies spawn 1 NG+ level earlier.\\nPlayer suffers from nightmare damage increases.",
            bgImage: null,
            wiki_url: null
        },
        {
            id: "$curse_apotheosis_missingspells_name",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXElEQVR4nGNgoCZ4vn37fxC9wsICTKMDmDhMHQiwIGuW9PRkvD158n8eFRUGq+ZmDEPsa2sZbt+5A1YHU8+IrACm+WBjI8N0VnWG95c2wOXkrZIYot8fZ7Cvr2f4cucOg2puLlgvE7LzYJrbrl9n+PbtI4rtv37/BIuD5EHqYN5hRFZkZWX1n+fuXYbXEsYMfHyiDBzs3AxsrOxwA0Dsn+eWMXxRVmY4duwYqgtg4MWPH2Aa5IIfP78yXLy8G6wZXR4GmBjwgPv3zzL8+vOD4fqNQ2A+skEEDfj2HTUMQADmHWTAgi4gwcHB8J6FjYGFhQ3M//zpNYOmhh3cBSD5L9hcsMLC4v/a2lqGJEVFhj9/foExSDOyF0AAJA9ShzUWbiOlg97fEmBvcHHyMwgJSoHlE7+cw50Onm/f/h8kCJIEKWJlf8XAL/ATTH/+dgGMkTUjJ2c4ICcvDDwAAPV7wUSnYp5HAAAAAElFTkSuQmCC",
            name: "Missing Spells",
            description: "Half of all spells are removed from reality.",
            bgImage: null,
            wiki_url: null
        },
        {
            id: "$curse_apotheosis_poverty_name",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOElEQVR4nGNgoCZ4vn37fxC9wsICTKMDmDhMHQiwIGuW9PRkvD158n8eFRUGq+ZmDEPsa2sZbt+5A1YHU8+ADECaQRIgm9zExf9/OF/9X4+fH4xBfJA4SB6kDqvznkM1wzQhY5hhyOowDLGysgLb9P/1NLhGEEA2CCQPUgfTw4RuyIsfPxj0VSrB7It32hk+XqhhOHQgBy7fECmMop4JW2jDNT95ysAvI83w6tYthosfPoDFM+Y/JWzAmlluEM0GLWBaTE0N7BKQoeiACV1gRqI0WAMI3F4VBnYBzBUgw0CGYzVghYXF/7W1tQyPTvCBFV9buB5s0O19+8H4zfGrYIPO9T9mAKnDGgu3kdIBKNpAsXFrZSiYBvGxpQNGGAM9JQY3N2NYALL5y507DKq5udhTIjl5YeABAHjl6mwpWpwKAAAAAElFTkSuQmCC",
            name: "Poverty",
            description: "You're Affluen't\\nMost enemies drop no gold.",
            bgImage: null,
            wiki_url: null
        },
        {
            id: "$curse_apotheosis_towerclimb_name",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8ElEQVR4nGNgoCZ4vn37fxC9wsICTKMDmDhMHQiwIGuW9PRkvD158n8eFRUGq+ZmDEPsa2sZbt+5A1YHU8+IrACm+WBjI8O8+/cZXvz4AZeT4OBgSFJUZLCvr2f4cucOg2puLiOG855v3/4fROvx8+PEyOow/GhlZfXfTVwcrDA3NxcrDZIHqYPpYUI3BNnZ9nFxYFrdzQ2rPFYDSAUsuCRevHiBl4/TBRIcHBBaQgJOwzCyPIYBKyws/q+trQVHFT4Akgepg8UCI650sFZWFkNz8OPHGOmAESaJnhKDm5sxDADZDNMMU4+igJy8MPAAAB27mRtFk1UZAAAAAElFTkSuQmCC",
            name: "Towerclimb",
            description: "All biomes can spawn any creature.",
            bgImage: null,
            wiki_url: null
        },
        {
            id: "$curse_apotheosis_addict_name",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABT0lEQVR4nGNgoCZ4vn37fxC9wsICTKMDmDhMHQiwIGuW9PRkvD158n8eFRUGq+ZmDEPsa2sZbt+5A1YHU8+IrACm+WBjI4OiUi+KZnEePoYTl1IZ7OvrGb7cucOgmpsL1suE7DxkzWrO6nDNIPbLL5/A4iB5kDqYdxiRbbGysvrfr9DN8O7LczBfUwKiEca38HdguLX3JkPhg1KGY8eOMaKEAQyAFD/7CtHA8AJCwfgnNh5gQAcs6AIgxVff32CwLuBkkFBmZ1DRtGbYteUEw9EJ3xmwASasogwMKBqQ2RPP1OB3wcorLQwvfvwAsxs1sxjuXD/KsOfuEjB/DwMDgwQHB8MXbDausLD4D4pbEK3Hz////NFZYPz53VUwH4aR1WEYcnvyZLikm7g4igEgPkwzSB1MDyOMgZ4Sg5ubMSxYW1sLT0Qw9SgKyMkLAw8AbjfMmFHYYJUAAAAASUVORK5CYII=",
            name: "Addict",
            description: "20 Fungal & Creature shifts occur at the start of the run.",
            bgImage: null,
            wiki_url: null
        },
        {
            id: "$perk_apotheosis_infinite_flight",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2ElEQVR4nGNgGGjAiC5gKCv7H0SzcbFjKP717SeYPv/4MSNWAwxlZf9j04jNIJghLIQU7zlzHkPMTksLuxfM1VX+wzR9+fIFLPbzJ8TZyEBYWJiBl5eXEcOAz58//wdpxKbpyZMnDDIyMhgGMCErevv2LYpmkCZ0zTB1MMCCy++vX78Ga0LWvGXLFgx1LOiaREVF4TQIsLOzwzUvnjwBwwAmZE5aUBCK5uPHj4PZIBpZMyw9YBgAAjDNyM6d0FDLgAuwIHNAiSPQ1hYlJb7NLYDLY0uJwwAAAGb7ZZv0rh/sAAAAAElFTkSuQmCC",
            name: "Our Gift",
            description: "A divine blessing grants you infinite flight.\\nSo long, and thanks for all the fish!",
            bgImage: null,
            wiki_url: null
        },
        {
            id: "$perk_apotheosis_copy_spells",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5UlEQVR4nGNgGGjAiC5gKCv7H0Sf2B6ModjCcy2YPv/4MSNWAwxlZf9PaLVlsDASYzhx7hXDxWtvGZauv8sQHajMoK8lDBcvqD4MN4QJwxYjMTAN0wwCIBrER5aHASZkDszZIFtgmmEAxAeJo3uPCVvAaCjzMxArzoTMmbnkOpgW4GfHagBMHKYOw4Cl6+8yXL/zAczuqjZD0Qzjo3uPCd2W9PIj8MAChT4IgGhY4JW1nsLthV/ffqI4ERR1yDRMHKYOBFjQXXBorQ9W/4NdF6MJxrAEhWHA+cePGS0815KUEocBAADuJ2K963l2uwAAAABJRU5ErkJggg==",
            name: "Copy Spells",
            description: "Copy the Uncopyable.",
            bgImage: null,
            wiki_url: null,
        }
    ]
}