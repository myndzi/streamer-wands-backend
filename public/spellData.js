const spellData = {
    BOMB: {
        name: "Bomb",
        description: "Summons a bomb that destroys ground very efficiently",
        meta: {
            action_type: 0,
            action_max_uses: 3,
            action_mana_drain: 25,
            fire_rate_wait: 100,
            action_explosion: 5.0,
            explosion_radius: 60.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAhElEQVR4nGNgGDCQ7mRZl+hLgmoIoy7RlyhtcA2YgBGNr6FtKSmtBGE/f3rvxtXjaApYcKnW1LHQ1LFgYGBA08OEpvr503sQ1RBBJ/coDW1L7BogquE2IItj14AMrl85gcbA7gcGBga4JZhK0W2AuB6TAedCAEqwovkP4iu0UCI5HmgPAB2AOuMbGMUUAAAAAElFTkSuQmCC"
    },
    LIGHT_BULLET: {
        name: "Spark bolt",
        description: "A weak but enchanting sparkling projectile",
        meta: {
            action_type: 0,
            action_mana_drain: 5,
            fire_rate_wait: 3,
            action_speed: 800,
            action_projectile: 0.12,
            spread_degrees: -1.0,
            damage_critical_chance: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAQUlEQVR4nGNgGAXkgrWFn/BwsSt9tuzns2U/IYyfr/9C2NjVrS38BJGGqIOrRteDLARRB9EJEcTnKmTNhNWNCAAAKWA/S/mQ4KkAAAAASUVORK5CYII="
    },
    LIGHT_BULLET_TRIGGER: {
        name: "Spark bolt with trigger",
        description: "A spark bolt that casts another spell upon collision",
        meta: {
            action_type: 0,
            action_mana_drain: 10,
            fire_rate_wait: 3,
            action_speed: 800,
            action_projectile: 0.12,
            damage_critical_chance: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAi0lEQVR4nGNgoAR8nixOUA0ThPp+v5qBgYHFwALOxgUY4azvh/0ZZHQYnlzhtN1IQMPnyeIsBhYMMjpQsSdX/lw4wZv7kjo2wFTfr4bqIeQHFEBMKFEJrC38hIeLXemzZT+fLfsJYfx8/RfCxq5ubeEniDREHVw1uh5kIYg6iE6IID5XIWsmrI76AAD6KWBDF25sYQAAAABJRU5ErkJggg=="
    },
    LIGHT_BULLET_TRIGGER_2: {
        name: "Spark bolt with double trigger",
        description: "A spark bolt that casts two new spells upon collision",
        meta: {
            action_type: 0,
            action_mana_drain: 15,
            fire_rate_wait: 4,
            action_speed: 700,
            action_projectile: 0.15,
            action_explosion: 0.1,
            explosion_radius: 12.0,
            damage_critical_chance: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoUlEQVR4nGNgoDb4PFn8PynyTDDG9/vV/xkYGBhYDCxQ+ITkGVEUHfb/zyCjw8Dw5AoDp+1GFDlc8owwZ7EYWDAwyOggVD+5wvDnwgkG3tyXjPjkKXYBhh+/H/b/jy8McMnDAamxQFvg2HcZwzZsYng1lp76/7/01P//MPbP13/hfLyaHPsuwxXCNCFrxmoIugRME8wwmBxR3kA3kCRNdAUA1/KmWKTR628AAAAASUVORK5CYII="
    },
    LIGHT_BULLET_TIMER: {
        name: "Spark bolt with timer",
        description: "A spark bolt that casts another spell after a timer runs out",
        meta: {
            action_type: 0,
            action_mana_drain: 10,
            fire_rate_wait: 3,
            damage_critical_chance: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAuklEQVR4nGNgIBEwQijt4OkCEiYQ9ocXZ66uzcSnSTt4unX26cPXvy9fvvzw9e/W2ae1g6fj0wBR/fr169evX0ubp0P04FLMBKGeXNjAwMBg4FNzYUsLhE1Ag4xBAAMDw4UtLXA2Pg0fXpypmHLlxhuePXv23HjDUzHlyocXZ3BpICuUqADWFn7Cw8Wu9Nmyn8+W/YQwfr7+C2FjV7e28BNEGqIOrhpdD7IQRB1EJ0QQn6uQNRNWR30AAOCPf5m6svOeAAAAAElFTkSuQmCC"
    },
    BULLET: {
        name: "Magic arrow",
        description: "A handy magical arrow",
        meta: {
            action_type: 0,
            action_mana_drain: 20,
            fire_rate_wait: 4,
            action_speed: 625,
            action_projectile: 0.4,
            spread_degrees: 2.0,
            damage_critical_chance: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAK0lEQVR4nGNgGAXUAPnLuamhJ3859/H3yf///4eQmOD4+2SauYocPww3AAAk4SPZa4mzvAAAAABJRU5ErkJggg=="
    },
    BULLET_TRIGGER: {
        name: "Magic arrow with trigger",
        description: "A magical arrow that casts another spell upon collision",
        meta: {
            action_type: 0,
            action_mana_drain: 35,
            fire_rate_wait: 4,
            action_speed: 625,
            action_projectile: 0.4,
            spread_degrees: 2.0,
            damage_critical_chance: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAdUlEQVR4nGNgoAR8nixOUA0ThPp+v5qBgYHFwALOxgUY4azvh/0ZZHQYnlzhtN1IQMPnyeIsBhYMMjpQsSdX/lw4wZv7kjo2wFTfr4bqIeQHFEBMKNEA5C/npoae/OXcx98n////H0JiguPvk2nmKnL8QBEAALkQRNFvH6gTAAAAAElFTkSuQmCC"
    },
    BULLET_TIMER: {
        name: "Magic arrow with timer",
        description: "A magical arrow that casts another spell after a timer runs out",
        meta: {
            action_type: 0,
            action_mana_drain: 35,
            fire_rate_wait: 4,
            spread_degrees: 2.0,
            damage_critical_chance: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAApElEQVR4nGNgIBEwQijt4OkCEiYQ9ocXZ66uzcSnSTt4unX26cPXvy9fvvzw9e/W2ae1g6fj0wBR/fr169evX0ubp0P04FLMBKGeXNjAwMBg4FNzYUsLhE1Ag4xBAAMDw4UtLXA2Pg0fXpypmHLlxhuePXv23HjDUzHlyocXZ3BpICuUqAzyl3NTQ0/+cu7j75P///8PITHB8ffJNHMVOX6gCAAAn3ZkJ5uCp1MAAAAASUVORK5CYII="
    },
    HEAVY_BULLET: {
        name: "Magic bolt",
        description: "A powerful magical bolt",
        meta: {
            action_type: 0,
            action_mana_drain: 30,
            fire_rate_wait: 7,
            action_speed: 675,
            action_projectile: 0.51,
            spread_degrees: 5.0,
            damage_critical_chance: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAYUlEQVR4nGNgGAWEASNW0f7D6ioyKhoKBgwMDCoMLXcYahgYGFQZW1E0QBTdeXIHolSFoQXNlDsMNaqMrYwQpXBRuMEIEZgNNx5c8FXciu4kiGYVGRUIF6IZopREz45oAACIpRsF/hEp8wAAAABJRU5ErkJggg=="
    },
    HEAVY_BULLET_TRIGGER: {
        name: "Magic bolt with trigger",
        description: "A powerful magical bolt that casts another spell upon collision",
        meta: {
            action_type: 0,
            action_mana_drain: 40,
            fire_rate_wait: 7,
            action_speed: 675,
            action_projectile: 0.51,
            spread_degrees: 5.0,
            damage_critical_chance: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAq0lEQVR4nGNgoAR8nixOUA0ThPp+v5qBgYHFwALOxgUY4azvh/0ZZHQYnlzhtN1IQMPnyeIsBhYMMjpQsSdX/lw4wZv7kjo2wFTfr4bqIeQHFEBMKNEeMGIV7T+sriKjoqFgwMDAoMLQcoehhoGBQZWxFUUDRNGdJ3cgSlUYWtBMucNQo8rYyghRCheFG4wQgdlw48EFX8Wt6E6CaFaRUYFwIZohSkn0LNkAAALbO/0E6mx5AAAAAElFTkSuQmCC"
    },
    HEAVY_BULLET_TIMER: {
        name: "Magic bolt with timer",
        description: "A powerful magical bolt that casts another spell after a timer runs out",
        meta: {
            action_type: 0,
            action_mana_drain: 40,
            fire_rate_wait: 7,
            spread_degrees: 5.0,
            damage_critical_chance: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA2klEQVR4nGNgIBEwQijt4OkCEiYQ9ocXZ66uzcSnSTt4unX26cPXvy9fvvzw9e/W2ae1g6fj0wBR/fr169evX0ubp0P04FLMBKGeXNjAwMBg4FNzYUsLhE1Ag4xBAAMDw4UtLXA2Pg0fXpypmHLlxhuePXv23HjDUzHlyocXZ3BpICuUaAsYsYr2H1ZXkVHRUDBgYGBQYWi5w1DDwMCgytiKogGi6M6TOxClKgwtaKbcYahRZWxlhCiFi8INRojAbLjx4IKv4lZ0J0E0q8ioQLgQzRClJHqWbAAA6TJbU2fOo4EAAAAASUVORK5CYII="
    },
    AIR_BULLET: {
        name: "Burst of air",
        description: "A brittle burst of air capable of greatly pushing objects",
        meta: {
            action_type: 0,
            action_mana_drain: 5,
            fire_rate_wait: 3,
            action_speed: 400,
            action_projectile: 0.23,
            spread_degrees: -2.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAYElEQVR4nLWRXQrAMAiDdexo3jq9W/YgiKw/rozmKYV8UanICQEA4P460vopTZKkMzXMpBd8991m5r61JiLxHCwwK84TCiyA4oa+PhhdMG7yDarT/Hhakct+4xO39bf7ASmgpJyxEBsjAAAAAElFTkSuQmCC"
    },
    SLOW_BULLET: {
        name: "Energy orb",
        description: "A slow but powerful orb of energy",
        meta: {
            action_type: 0,
            action_mana_drain: 30,
            fire_rate_wait: 6,
            action_speed: 210,
            action_projectile: 0.45,
            action_explosion: 0.18,
            explosion_radius: 15.0,
            spread_degrees: 3.6
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAxElEQVR4nKVRMQ7CMAxMUYdKmXgHe0aK+gzWSix8Ip/oErVrn4Hcjux5RyaUbGawZNIEIhCnDPbZF8c5If4EIubkCD7NU+ozaiGEgXA5NZTLbjgcz1y26/y4XSlW2t31fqOW3aC0G8EjIiKO4JV2shvez4q7C5qKI6UdP4zRt820BAOBH7MrrzgtIWE2gr5tOKATk4Q6uS8p50NeE+w6GwhUjpsMBLvOnFaxmkyIV6dutiIViKJxP4Bs2eygtCtr8v/9Fk8h6HTJMbvcFAAAAABJRU5ErkJggg=="
    },
    SLOW_BULLET_TRIGGER: {
        name: "Energy orb with a trigger",
        description: "A slow but powerful orb of energy that casts another spell upon collision",
        meta: {
            action_type: 0,
            action_mana_drain: 50,
            fire_rate_wait: 25,
            action_speed: 210,
            action_projectile: 0.45,
            action_explosion: 0.18,
            explosion_radius: 15.0,
            spread_degrees: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAzUlEQVR4nGNgoAR8nixOUA0ThPp+v5qBgYHFwALORgZzDnyHsxnhrO+H/RlkdBieXOG03UjAhs+TxaGqGRgYZHS+H/bH6jazhvfYbbDfuwAueKpBELtFEHd/P+xv1vD++/3q////////f86B7xBTcYLPk8XnHPgOUYpLD8JJZg3v0xw40IxItueYe/DHrAM/4G5jwmcjA8Pcgz/QRFA0JNtzwBkQhCwIASxo5qFJY7UEAcwa3pPgabgeZK8jexdFg1nDe7gEspE4I454AAA3Unc9ZBgluwAAAABJRU5ErkJggg=="
    },
    SLOW_BULLET_TIMER: {
        name: "Energy orb with a timer",
        description: "A slow but powerful orb of energy that casts another spell after a timer runs out",
        meta: {
            action_type: 0,
            action_mana_drain: 50,
            fire_rate_wait: 6,
            spread_degrees: 3.6
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA90lEQVR4nGNgIBEwQijt4OkCEiYQ9ocXZ66uzYSrMGt4f6pBEEWTdvB06+zTh69/X758+eHr362zT2sHT8dnC0T169evX79+LW2eDtHDwMAw58B3TMVMEOrJhQ0MDAwGPjUXtrRA2AwMDCkOnHB1cw58////P0KDjEEAAwPDhS0tcLZZw3uzhvfIZs89+AOfH/7//z/nwHc0PThDqTA3IdmeA2LqrAM/kEOJEc4ya3if5sCBZl6yPQeaHibMcMDubhhA0QBxBoQBQciCEMCCZh6aNFZLEMCs4T0kvCEk1oBixNSD7HW0IIJqmHPgO3KkIhuJnuzIAADyi468RWnmkAAAAABJRU5ErkJggg=="
    },
    HOOK: {
        name: "Hookbolt",
        description: "A glowing hook that pulls the caster towards itself upon collision",
        meta: {
            action_type: 0,
            action_mana_drain: 30,
            fire_rate_wait: 12,
            action_speed: 700,
            action_projectile: 0.3
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAUklEQVR4nGNgGDIgfzn3/+Pvk/8ff5/8nyzNyPz///+TbggyIMsVVNFMttOPv0/+T1AzLJT///8Pp/EB6ruAGEAVQyiKBbINoUpKRI4lkjXjAwA6L2xpdLVKyQAAAABJRU5ErkJggg=="
    },
    BLACK_HOLE: {
        name: "Black hole",
        description: "A slow orb of void that eats through all obstacles",
        meta: {
            action_type: 0,
            action_max_uses: 3,
            action_mana_drain: 180,
            fire_rate_wait: 80,
            action_speed: 40
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwklEQVR4nGNgGDQgpHbGLGzshN3f/yfs/v6fZM0wjarSpv9VpU3/E2VQwITd22GaYRrRMbohTMiaNxS4eibs/v7/aIIdAwMDA0OUTz6GJUcT7BiQDWHCUAEFUT75DA0zorEaggFC5l88gs3p9elLMLwws/oYildwuoCBgYFh2ZaJGGI9C1BdxMTAwMCwJlHfJmDC7u0LXDkZrRccgnsB3UswYL3gEMMCV05GvC5Atp3o8MAXjbDwwJoWqJKQKErKAwoAthidjDxI83MAAAAASUVORK5CYII="
    },
    BLACK_HOLE_DEATH_TRIGGER: {
        name: "Black Hole with Death Trigger",
        description: "A slow orb of void that eats through all obstacles and casts another spell as it expires",
        meta: {
            action_type: 0,
            action_max_uses: 3,
            action_mana_drain: 200,
            fire_rate_wait: 90
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABU0lEQVR4nKWSrU/DUBTFT+uWTCBJiq2qYIIGUTI3V9FkU8MUtZGJ2SVAmJhEjGRJB4YKYGYkiCYTndoHZhMjKdn+AESTTtRVXlRLPwfJTvKSe/Le+9377rvAnmL8QChrdHB4Emy49hJfb5dM6q24hLJGUmNB07VHg8GApmuPpMaChLJG/wL4lx3HIcdxiDutBRDV9Eg1vUwQ6wffq3cAQEG+xsroBH6uFjFXi8gCBYCjggIAWBmdiPcVBiUArr1Eq2dhs81jPB5js82j1bPg2stEyXHIzl+whnW06y94Ne4jEEmfQC/lfn+o8vQ5AwDV9IjnxGDd1p4jnudEerj6IJ4Tg36w2KF4ZgC405sRzwLA8OL4TOmaI72UYyR9AgCoytGDYR9+QmYF4exVuYl2/zwBTUjpmiMg2YtwP1KHqnLTf4zH/uD4gL8mMhUSBu2ufQ/9AFqWzP064kwcAAAAAElFTkSuQmCC"
    },
    WHITE_HOLE: {
        name: "White hole",
        description: "An orb of positive energy that destroys everything in its path",
        meta: {
            action_type: 0,
            action_max_uses: 3,
            action_mana_drain: 180,
            fire_rate_wait: 80,
            action_speed: 40
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzklEQVR4nGNgGDTAJ3F2PDa2qKLTf1FFp/8ka4Zp9LfJ/+9vk/8fl0GMaAbN3TI/NVlU0em/lbQuVsuOPb3M8Pr+Prg+JnyaDbRNMQywktZlQHYJE4YKKDDQNmVomBGN1RAML/gkzt61ZX6qG7rTDbRNGS5cPY2iwcs+nGHbwZVwr+B0AQMDA4ZmBgYGhm0HV6LwmRgYGBi2zE9180mcPff1/X2Mx55ehtuO7iUYQA5InC5Ath1feBAdjbDwQI9GmEayExJeQ5ANwqlxwAEANyR0d3fNi58AAAAASUVORK5CYII="
    },
    BLACK_HOLE_BIG: {
        name: "Giga black hole",
        description: "A growing orb of negative energy that destroys everything in its reach",
        meta: {
            action_type: 1,
            action_max_uses: 6,
            action_mana_drain: 240,
            fire_rate_wait: 80
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA20lEQVR4nJVSKw6DQBAdNhhOUcclNsGRIDjAlpoViKpyhV6BqgrEKsoBKkhwJHuCOs7RBFsxZBkGCOlTO7Pvzd+DJXQ3Mo+JA2p6nNoOtsmdU6oKkpDKfMe2OoIVTt9PrXMkoEZQdpYWTFC/S3xYHWEJwv1laXF/XtYaBl93I7TDFOw6h9xAO+huFABgmxwDUzZN9Xo0SAMAb6/dTUjTi2PWElyA2Q8EUlXOPt/Ubj2qAgBh4gB3uYe5+yQ0cXDQw3o50y3RWWVpweZbv0tpejyNv49vFixkBOy8f4iRYGPCvhx8AAAAAElFTkSuQmCC"
    },
    WHITE_HOLE_BIG: {
        name: "Giga white hole",
        description: "A growing orb of positive energy that destroys everything in its reach",
        meta: {
            action_type: 1,
            action_max_uses: 6,
            action_mana_drain: 240,
            fire_rate_wait: 80
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3klEQVR4nJVTIQ6DQBCcI7WtaVAoVMWFBINB8o3+oUkf0KTP6GuQmJomlwoUCkUw8AAqyG2O7V4LI/du5mb2dhUEhHExSfWuKRWv7STi6ZDguF9e7EcAMSYupFxyHiUAgFRneL2fkgkAQNUaEgk4GYCXnOoMAJBHCbkNvM8I5PvjTCIUIYyLScrsE7Hu+hGoBzM7sOTb9SJatrDkVGfEUTz/FlStWd8DH1YL8HgWm5rogprYNaWqB0MHvHE+1MM8TIsIvr/+ha9RlsaY19xRXmzXv2WyUcVlkoQ4pHX+AAtsYYDxUBkrAAAAAElFTkSuQmCC"
    },
    BLACK_HOLE_GIGA: {
        name: "Omega Black Hole",
        description: "Even light dies eventually...",
        meta: {
            action_type: 1,
            action_max_uses: 6,
            action_mana_drain: 500,
            action_speed: 120
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwklEQVR4nGNgoBAw+k09/B+bxKZsW0aiDFCVNkUxwMgjh4GBgYHhu5ESUQYxqkqb/l8+aQVDZF4EhqSRRw5BgzBcEOWTz7Bsy0SsBmEzBMMAXACXIUzEaGZgYGA4t2MKA+e5ewzogY7TgOWTVmA1BB3ADYjyyUeRwBaoDAwMGK6AG4AecLgAuiuIDgNcriDKAHTvEXQBugZ07yF7A8OAKJ98hoYZ0XhtRXEBNtsaMpZiDVRsUUt0SkQHmlV9DJuybRkBdmJNmltJEpYAAAAASUVORK5CYII="
    },
    WHITE_HOLE_GIGA: {
        name: "Omega white hole",
        description: "A massive orb of positive energy that destroys everything in its reach",
        meta: {
            action_type: 1,
            action_max_uses: 6,
            action_mana_drain: 500,
            action_speed: 120
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVR4nGNgoBAwiio6/ccm8fr+PkZiDGCxktZFEXj7GcpQZPhPjEFMDAwMDLWFeXABYV4ItpLWZVDn02UQVXT6j8uVDAwMDIz+NvkokgbapgwXrp7GcNXNT5exuoYJXQBdM8xVMNcQNAAXwGUITgOQwwXZEJwuMNA2RZFo7p+E1WB0V8ANwOZ3bADdFUSHAS5XEGUAuvcIugBdA7r3kL2BYYCBtilDw4xovLaiuACbbQ0ZS7EGKraoxUjKxIJjTyFJGwDbc0GHYj8GRQAAAABJRU5ErkJggg=="
    },
    TENTACLE_PORTAL: {
        name: "Eldritch portal",
        description: "Summons a one-way portal to a sinister realm",
        meta: {
            action_type: 0,
            action_max_uses: 5,
            action_mana_drain: 140,
            fire_rate_wait: 30
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlklEQVR4nLWTv2rCUBTGv5Tu2iwJSgwdKnXQRqGgQl8gu5ubYwVfoDgEXyBgR3dBaKf4AsI1k0YdUuwUL4ou/nmBpoOcS/wztmfJ5dz7nfM7X+4F/itGrfmkW3XC89z5uZvzhG12xt2qE86/vnPlYhmD12lom50xAAzY4GfR3p0UvaVFdCPwOZYHjsDn0DMalgdu2GZnrMiqcZVg1JpPPvsfHnOZECVjGgAgUYkjGdOgyKpBOSISBQpv6adGv5bfbNcedS41swCAVW8PAEjGNOgZDYHPESURHhAidVn19tAzGhKVOPSMhlIzK0aLGio8KNw/GyRY9fZIVOInsw6t2QkJc1kOACQA6FadsFwsI/C5EFAxCiq66u0R+Bwv7zlJEKQfH6ZUMRk74tLs9A18jsA6jrDZrr0LE6N4Q2uGwOeiG5GQuNGv5S9M3GzXHrlMRpFwaM3Er1Vk1bDNzphMlKJGLdq7kLkMm+3aU2TVIF+WBy7oKFL1O+mEIEpCd4IuFeEzlyFVv5NIfDXOH0y36oTXHtGfxS89q+GT9theCAAAAABJRU5ErkJggg=="
    },
    SPITTER: {
        name: "Spitter bolt",
        description: "A short-lived magical bolt",
        meta: {
            action_type: 0,
            action_mana_drain: 5,
            fire_rate_wait: -1,
            action_speed: 500,
            action_projectile: 0.3,
            spread_degrees: 6.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsUlEQVR4nL2RsQ3DIBBFP1bkjl08ijtvQOnMEkoWsOmYw27YxZVpSBHOIgjHF0XKr7iDe/r8A/6tbTBxG0yk+pZdPACMqdTSqnttuO271xkmSqtEkw+3fYf0YEw9vq19WiJpn5Y3m6wvcCWtEnlNAB2cp/8jOA8AmgM8aLUQOcGKslECKXVyVYNUh8+CZW2nHP60neaSdqEzgA7OI8zr0QjzWt3OzyGeAnIIuWJt4Fs9AS4umq4vlk7NAAAAAElFTkSuQmCC"
    },
    SPITTER_TIMER: {
        name: "Spitter bolt with timer",
        description: "A short-lived magical bolt that casts another spell after a timer runs out",
        meta: {
            action_type: 0,
            action_mana_drain: 10,
            fire_rate_wait: -1,
            spread_degrees: 6.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABN0lEQVR4nKWRsWrCUBSGv6QlkwGHDj5CQYcMbnZ07CA4pGOnQFFsR4eOHVwrgpAXUIdCho5uLsU4ZLDo0LGDoEMgBTHL7WIuaWoaiz9cOPfc83+ccw+cKCUKivW+yBfK8sFfzXh/uVOShsC0BYA+shQANW7uNEs0rz7oNEvkC2WK9b5ImrWagVYzJEgFiMyXF19Uq1Vubh8kJEtqFHx6DgDG9SPe65O8x6WPLCV0PELHkyMAUGm4YrLYivV6Lc9ksRWVhit+UQ514K9mtHtzlpsc4/GY5SZHuzfHX80yR/hzC2/nZ12gtU919ZF1nwpIKjDtZ6Cl1QwAQsdLhRw0B6YtdoOpiLQbTEVg2mIPzgT8MCch8Vo1DXKs0gDd0PEIh65MhENX/kO88ORPTAXEIVFXR23gv/oG1KW0qi5CJjcAAAAASUVORK5CYII="
    },
    SPITTER_TIER_2: {
        name: "Large spitter bolt",
        description: "A more powerful version of Spitter Bolt",
        meta: {
            action_type: 0,
            action_mana_drain: 25,
            fire_rate_wait: -2,
            action_speed: 700,
            action_projectile: 0.5,
            spread_degrees: 7.5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzklEQVR4nGNgoDcIepZ7JOhZ7hEYnwXGsD4Z2iguK+HMwMDA8PLxi71HzVfXY9McKylszcDAwMDwLPfIOqnJNizImmGSiyFiDNgMwems9f8b/sPA+v8N/5GdSZQXiAXrpCbbIPNZGBggfl7MwMDAINkI8cLzt0dfPn6xlxgDGWEMbIFITMAyogugGwgPWKiriApY65OhjbgC1vpkaCNBA9A144sdJoKmEQBYDXj5+MXexc/fHt3AgHDtBoZGrLFDcSDiNADZEJiriE7apAAAG0Wx6AFfFvEAAAAASUVORK5CYII="
    },
    SPITTER_TIER_2_TIMER: {
        name: "Large spitter bolt with timer",
        description: "A more powerful version of Spitter Bolt that casts another spell after a timer runs out",
        meta: {
            action_type: 0,
            action_mana_drain: 30,
            fire_rate_wait: -2,
            spread_degrees: 7.5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSElEQVR4nKWRvWvCUBTFj5kdAhZMBPeCDh2EDs/NjJ0iQhehazGBTsWhUFM6uCv4B2QsVYeO2kUziA4Oig7dLEkkBjIUHF+nl4Y0qRYPPLiXd8+P+wGcqAQLcuUO5YWC/+HZMyxfbxNhg2yqYwDoZlpFAOCC5qaSh1L8QFPJgxcKyJU7NGyuiilSFVOEgTgAYObzsy9IkoTrmzsfckgcCz7nfQDAxdUD5m/Pfh5UN9Mq6pZr6JZrsBEAAKQ2paPVnjqO47/Rak9JbUp/UaI68OwZ6u0F1rskBoMB1rsk6u0FPHt2cIQ/r8Dfvz+ls0IJALYbe2hcvjzGAsIik4qWzgqlqpgiAKBbrhEHiTTLpjru0QZl6tEGlU11TCYV7SAgbA5DgrVcHORYRQK2G3uoW67Rx0+3fWj+HoK1Jy8xFhCEsK6OusB/9Q1O3MZmuPyQiQAAAABJRU5ErkJggg=="
    },
    SPITTER_TIER_3: {
        name: "Giant spitter bolt",
        description: "The most powerful version of Spitter Bolt",
        meta: {
            action_type: 0,
            action_mana_drain: 40,
            fire_rate_wait: -4,
            action_speed: 900,
            action_projectile: 0.6,
            spread_degrees: 9.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtklEQVR4nGNgoDfY2fN+/86e9/sxJDrib2fDJDvib2fj0vzi4P//Lw7+/w8zhAWm2VBXJETfVMAByUCGioWqU4l21ouD/+EA2QZCXmAhygYk4F4i6IjMZ2FgYGA4f/nNGgYGBgZ9BogXLp7+cAAmRggwwhiwcIAZWLFQdSo2MaKdCosV5FDHFTt4NaMHLFGGoGvGFztMRPsJB8AajcixIm4HEXt5iLTYIToQGbFpRjaE7GgkFgAA3oHJDlAqqosAAAAASUVORK5CYII="
    },
    SPITTER_TIER_3_TIMER: {
        name: "Giant spitter bolt with timer",
        description: "The most powerful version of Spitter Bolt that casts another spell after a timer runs out",
        meta: {
            action_type: 0,
            action_mana_drain: 45,
            fire_rate_wait: -4,
            spread_degrees: 9.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABL0lEQVR4nGNgoBAwwhjawdP/C0iYwCU+vDjDcHVtJiO6hp097/czMDAwuJcIOjIga7bOPv3/8PXv/5cvX/7/8PXv/62zT//XDp7+H13zi4P//784+P8/zCAmBgYGBgEJE4aOHB0GDZEvDC4uLgwRCQUMHTk6DMguwgWYYIwnFzYwMDAwMBj41DBc2NIC5yMD9xJBx4unPxy4ePrDARQvwJz/+vVrOIZ5gygXfHhxhqFiyhWGG294GPbs2cNw4w0PQ8WUKwwfXpwh6AW8sRDL45JjqCsSwsDAwHD+8ps1FQtVpxI0EQY64m9no4d6R/ztbJI1wwBJhqBrRjcEWS0TLkOIBSzYBM9ffrOGgYGBQZ9BwEHcDiL28hADw8XTHw7A5AgCYgMRI7OgG0J2NBILAEJE4hcLdfE+AAAAAElFTkSuQmCC"
    },
    BUBBLESHOT: {
        name: "Bubble spark",
        description: "A bouncy, inaccurate spell",
        meta: {
            action_type: 0,
            action_mana_drain: 5,
            fire_rate_wait: -5,
            action_speed: 250,
            action_projectile: 0.2
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAtElEQVR4nGNgIBEwovE5feeIGIcxMDC8Obvq++YUAro5feck7f+27t6vdfd+Je3/xuk7h4AG2YZP6+79+v///////9fd+yXb8AlTDRPxrocAFmTOm7OrtthHQdhbHv55c3YVpgbKPE0MQLeBWAs5fefINnySbfiEHJQ4QxmXBNZQZmJgYBAxDvORZwlUZA1UZPWRZ4G4ARdgwSOHNZRZcEkwMDB835yynIFhN6qnGQmEBuUAAJU5gBVxKUWhAAAAAElFTkSuQmCC"
    },
    BUBBLESHOT_TRIGGER: {
        name: "Bubble spark with trigger",
        description: "A bouncy, inaccurate spell that casts another spell upon collision",
        meta: {
            action_type: 0,
            action_mana_drain: 16,
            fire_rate_wait: -5,
            action_speed: 250,
            action_projectile: 0.2
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJUlEQVR4nLWSsUrDUBiFv5Z0yOBWrNCG0r1bH8AXaIhdOjiGrj5Bliw+QR2zCxEC0oKgQ4a4ZnNOEFyETqn0Sij8DrWl2Ggi4rfdy7n/PfecC3+k9nVjOW3J8f0lzcEYgEXso2aTA90BKnUEQEWW2OFKVOpIkORihyvRTU8q2VGRJSp1REWWbAmSXAw3+3ZAfWtbRZbQ6W92O33eH894uzopvVQDOLp4rcEtKmIz5OWJu/YNtGH+vGYR+xXs72Wgm56o1BHDzaq/f8ty2vrVgfJ6PtFNT36sVjc9Mdys0LZuemKHKwmSvLjaMoHhZhIkeWG1dYDmYMywqzHqNRj1Ggy72u4nlqFVES1in/np+W69X61WJgBQs0ntGuShIMRdkqUp/xcf7MDKvN1aqBsAAAAASUVORK5CYII="
    },
    DISC_BULLET: {
        name: "Disc projectile",
        description: "Summons a sharp disc projectile",
        meta: {
            action_type: 0,
            action_mana_drain: 20,
            fire_rate_wait: 10,
            action_speed: 400,
            action_slice: 0.8,
            spread_degrees: 2.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/0lEQVR4nM2RP2oCQRTGfyteYRcFZSHY2GwRrIwHEGxyAatp7L2LTLPVXMBmYA8QrUTINjZpRCFhc4hJ40yeYVckRcgHUzzmvff9efDvoJQqALSxK4DycHL+/XqpNtZpY8MSuax1YV3Wsa6LvdPGhubtrkTWANEt1qa/TtzlefoYSQXe9+anRIDjueJ4rkL98fmO72srpZZ5nk+1savFfPZUHk5uuyuvhqu3l0s1Ie0lVwpbTTLvRe2CxXwWskl7CclgQjL4ZgcYjzKyYT9qDHFd7J33eoskKBCn3AA8pHHtYCfuMh5lIeh2Tc+rZJGhSmsejRYk5FmzYf+umb/DF0J3gVu+x/ujAAAAAElFTkSuQmCC"
    },
    DISC_BULLET_BIG: {
        name: "Giga disc projectile",
        description: "Summons a large, serrated disc with a curious flight pattern",
        meta: {
            action_type: 0,
            action_mana_drain: 38,
            fire_rate_wait: 20,
            action_speed: 250,
            action_slice: 2.5,
            spread_degrees: 3.4
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA50lEQVR4nKVSsQ2DMBA8I4ZwnZRugtwlZepImYQNoACJAShoWAKJmjLpEGkok/q3IJUdY5sQhass6/7+7v+BjWBrhKbtJgDohxF5Gjv8YKlAvfthXCx2HKgCIgLnXP8TEeqqYEr8ejmzrwJrkJHQIgEAJFnpKC+BiGa8UCkmWTkRkUPmnM8imdG0AwU79+tJuN8eTpE56EBZl5GYkWwxE/0wahHtwM5PRDieDtjt+Vex0JfZdGDbr6uCAZ/B667/rNCJICMBGQnkacx8G/FhFsFUVtbNjk3bTfasvIeTZOWktvLLcW3CG5B1fie6q6AjAAAAAElFTkSuQmCC"
    },
    DISC_BULLET_BIGGER: {
        name: "Summon Omega Sawblade",
        description: "That's a lot of sawblade",
        meta: {
            action_type: 0,
            action_mana_drain: 70,
            fire_rate_wait: 40,
            action_speed: 150,
            damage_projectile_add: 0.2,
            action_slice: 1.5,
            spread_degrees: 6.4
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABz0lEQVR4nI2TT2sTURTFfy8dIQSLtWlhFg2hgosJCq7VFkJCB3ECgSz8FgUXLu3C7rIKfpJAZiMkBNLYhSAtpM0sAi1xoj6IYDAbF2meC/Me4yQFz+r9uee+e+49T7AC3WpNZTtNkfF9AOqNltJ35VJBRGNFjEu3WlNfwm/sXffFcL+oAD78TgBwfHQoQs9DJwawouTz12/UnU+n9FKbnOzmVLAgAkgpqTdaahj0CMFUZyrQL9vTCe0Hj1YpAyB/dcHm/XukB4HI+D4Jre+H85hge8cErYIzHgHQnwm0PFFvtNTns0uklNi2jTMemURxsj2dINc3aN9Y5NdmpA5cRLdaU7pJmuyMR7RvLGzbNvrza7N/Eh8fHQoAEXoew/2iSRLF6cdzAJ4+e7JUya/KK8qlgkhkfJ+737/eqjuOYHsHub5h9gIg9Ly/Y4uUqHsSX0fhJufLTfwf6J7kLEWiXCoINzm/laxHF8XLFwX2rvsCFk7Mdpqi8tBR/ZlYOcI4toLews6+SABkfJ/0IBA5S+Em50gpTbA9nZC/ujBnbnJOttM0Dl76TABv371XAJWfIQDpQSBOdnMqdeAu/UYrTtbW3gp6xu8A3WqR5zEywB/w0td1wQy/igAAAABJRU5ErkJggg=="
    },
    BOUNCY_ORB: {
        name: "Energy sphere",
        description: "A fast, arcing projectile",
        meta: {
            action_type: 0,
            action_mana_drain: 20,
            fire_rate_wait: 10,
            action_speed: 450,
            action_projectile: 0.2,
            action_slice: 0.2
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4UlEQVR4nK2RrRKCQBSFP80sNqszZIIBmy/EM2CE5APwLI6VBoFAZoZKEtaOQdZZ1sW/8aS9u+d8c/de+KfCrM//CrTpeBkGvV686CYGorFM0r17sPmsAPUVzxcBQF3JAiDdu7u3gDDrc0eIYL2B7eoKQNk5tA1cpSxMyNLSNnoY7uf1ZuqxAoDI80Wgh3XI+KVIvzcBX8sEJHUli7Jznoxl56hhJrMAtaq2uQf0cNtMPUqPLYRZH6vHb9a4VGHPF5Ga8Gg81ZWkriTASQ+bm5i/tCjM+vg8yOFT/yzk57CpGxWnblP8HYZXAAAAAElFTkSuQmCC"
    },
    BOUNCY_ORB_TIMER: {
        name: "Energy sphere with timer",
        description: "A fast, arcing projectile that casts another spell after a timer runs out",
        meta: {
            action_type: 0,
            action_mana_drain: 50,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTklEQVR4nKWSoW/CQBTGv6LbglyyKSyICsgE9TMTS7DzS4NegkAWhZkguT8BsyUTmGU46jhR0QUUCckEoYjSa4J8E+wa2h7byD517/p9v3uvd8A/pclFrc2octFIP0Rrjo8XR1Om8qq1GbU6M5rO9zQajWg631OrM6Nam9GfADIchiGFYUiX1w8pJO8dRJTZK8nFp/8KALBue/DHblo7XkyOF7vS91jRNCXgyroDAPhjN1NX6wYA3DhePFN1XwIOP6w7DLDY6phMJlhsdXSHAaI1h1VOUK0bDd0wGirIj7fw9Hyf1v5OxzIQHMAbs81eASDnrdYNWOVE1a2EgNlmmispnWcoD+gvA8H9nX7qdA6gfxIgZ9usDoHj8GaV9RQA8q6ZbTYTIbjsRJ6cCMGZbTaPvTgODyLKPBjHi93vR1TYfydBSkhh8BM6x/urvgCzrsTA5ALn6gAAAABJRU5ErkJggg=="
    },
    RUBBER_BALL: {
        name: "Bouncing burst",
        description: "A very bouncy projectile",
        meta: {
            action_type: 0,
            action_mana_drain: 5,
            fire_rate_wait: -2,
            action_speed: 700,
            action_projectile: 0.12,
            spread_degrees: -1.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAgUlEQVR4nGNgGAWMuCRM29T/SxgKMzAwMDC8OP+W4XTVTaxqmZA1YNPMwMDAIGEojCGPYoBpm/p/mA3Imj3MZBk8zGQxDDlddZMRxmaCSSLbBtMMA8iGoKuDe4FcwMTAAAkkGICxd5x6DBeDsbGpg4csrnBA1oAsD2NTHI2jgIEBADN0RPocImTTAAAAAElFTkSuQmCC"
    },
    ARROW: {
        name: "Arrow",
        description: "Summons an arrow",
        meta: {
            action_type: 0,
            action_mana_drain: 15,
            fire_rate_wait: 10,
            action_speed: 600,
            action_slice: 0.2,
            spread_degrees: -20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAARklEQVR4nGNgGAXEgalGRidiYqimZ/H8vnt3r8O5jHBWqr8esjpTLYnT116YakkwMDBwqnkwMDBY23kqKWuSbAO5fhhZAACBchiqTvpNEwAAAABJRU5ErkJggg=="
    },
    POLLEN: {
        name: "Pollen",
        description: "A small, floating projectile that homes towards nearby creatures",
        meta: {
            action_type: 0,
            action_mana_drain: 10,
            fire_rate_wait: 2,
            action_speed: 200,
            action_projectile: 0.2,
            action_explosion: 0.2,
            explosion_radius: 7.0,
            spread_degrees: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGklEQVR4nL2SP2rDMBjFXzsmEDoEH8BejCk9QYdqiLPmGh4y9gSlBygdBA2UnqAEOkUZRCCDM2VzvUiQJZTaQ9AJOlQ2iuSqgULfIvH4+H1/gT/qrMtknI4BxIZVpiRbnARgnE4AXA8GF8PGU+pQA1inJJt7ATrzKAqT0A4UspAAlnYl51ZcbGYGEDQf7cdWvAMwFfR7wdCEdMkH+LTekwClHpgj7ZdegB7QWshCVvVeAUBV75Ue4K5rlU4LelVLpQ5bnXmL7+k/+lppVnikj+rdKZlxOhW71SvjdNpWwDgdX13ePNiQPN84iaIwIf1ekERhQlpASrLF7OkZP52rKSELnucbCFnw32Jxd3/rtAAA87eX1vfdwf/oC2KebbJdLI5KAAAAAElFTkSuQmCC"
    },
    LANCE: {
        name: "Glowing lance",
        description: "A magical lance that cuts through soft materials",
        meta: {
            action_type: 0,
            action_mana_drain: 30,
            fire_rate_wait: 20,
            action_speed: 350,
            action_projectile: 1.4,
            spread_degrees: -20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOUlEQVR4nGNgGAUUAIu2N7OufZh17cP///8t2t6QoO3///////+fde0DdsMgJFaAooc0G6jph+EJAGXrUDr+KU7XAAAAAElFTkSuQmCC"
    },
    LANCE_HOLY: {
        name: "Holy Lance",
        description: "A fast-flying, penetrating lance that glows with power",
        meta: {
            action_type: 0,
            action_mana_drain: 120,
            fire_rate_wait: 30,
            action_speed: 150,
            action_holy: 1.75,
            action_explosion: 1.2,
            explosion_radius: 30.0,
            spread_degrees: -10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAARUlEQVR4nGNgGAXUB/8PeP3/////fxSx/////3/b8h+XHuwGQTX8P+D1H12MLENQALpB/9+2wCVIAdRzAVXDgGqxMIIAAPXdkw2ZxefEAAAAAElFTkSuQmCC"
    },
    ROCKET: {
        name: "Magic missile",
        description: "A fiery, explosive projectile",
        meta: {
            action_type: 0,
            action_max_uses: 10,
            action_mana_drain: 70,
            fire_rate_wait: 60,
            action_speed: 85,
            action_projectile: 3.0,
            action_explosion: 4.2,
            explosion_radius: 15.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAfUlEQVR4nGNgGArgrYPoWwdRotTB2V+7Xb52u3w/H0+UNrjSr90u35+3////H1kBI1ZtX7tdmFykGSQ0/i3ZyxTjzCFRwcDAwMjIiJCGuwdu/Pfn7XAbICSaVQhtED2YqiEayHISmtLv5+O/P2/H5WlE4ODSRhgQG3GDBgAAYYhrmVipdvgAAAAASUVORK5CYII="
    },
    ROCKET_TIER_2: {
        name: "Large magic missile",
        description: "A more powerful version of Magic missile",
        meta: {
            action_type: 0,
            action_max_uses: 8,
            action_mana_drain: 90,
            fire_rate_wait: 90,
            action_speed: 85,
            action_projectile: 4.0,
            action_explosion: 4.7,
            explosion_radius: 32.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhElEQVR4nMWS2wnAIAxFHUcK/mUJ58gKzuJKLtA9HOH2S9BofNBC75+Sc0I0xvwRvi80FykzlNohDACdRMYGDxv8sEiFJeAiwUVadxuJatBFQsoMAGeiIkmZUUs6kYvUzFt3l7AqkaIi0eCtcbZHmIHlvHzE0Z9L0VFmi/Q6qvh4477IA9gttjfpBvGOAAAAAElFTkSuQmCC"
    },
    ROCKET_TIER_3: {
        name: "Giant magic missile",
        description: "The most powerful version of Magic missile",
        meta: {
            action_type: 0,
            action_max_uses: 6,
            action_mana_drain: 120,
            fire_rate_wait: 120,
            action_speed: 85,
            action_projectile: 5.0,
            action_explosion: 5.2,
            explosion_radius: 42.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvklEQVR4nK1Tuw3CMBS8NwISJRIbsACiYY5swQJeIF1GYAP3FEEskBLR0KMwwlGA5Zf4xcFSrrLsd/fufQwsBe9I62yhb0fv3pF9S84RA5n8xk86AIC6IuvKFkzImjQW9Y7smnlniZAmhhLJVEhyQt6R2zWw2QG3C7A/AqvDjygig0BtX2cPzdXNC0gceEfeH8DpLBKyP18x8/saHQQXy5RgEbsmzjrXxAGsMWqhIuQWybwvXpYp5P7DP3+lGB8YvMLM7z+mFQAAAABJRU5ErkJggg=="
    },
    GRENADE: {
        name: "Firebolt",
        description: "A bouncy, explosive bolt",
        meta: {
            action_type: 0,
            action_max_uses: 25,
            action_mana_drain: 50,
            fire_rate_wait: 30,
            action_speed: 265,
            action_projectile: 1.3,
            action_fire: 0.5,
            action_explosion: 1.9,
            explosion_radius: 7.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAc0lEQVR4nGNgGK7grYPo124XrFIsWEW5+r0YJDS+MjBwl+4hYPbXbpfvz9v/////////78/bSVAN1XM+/q2DKLIaJmTOj60XGV7cQDFDQoPDW5+APchOwvQ6Fk//W7L3RwwDw4sbnIYLCZiN7Bk0pw8rAAAlWkFNo2GmWQAAAABJRU5ErkJggg=="
    },
    GRENADE_TRIGGER: {
        name: "Firebolt with trigger",
        description: "A bouncy, explosive bolt that that casts another spell upon collision",
        meta: {
            action_type: 0,
            action_max_uses: 25,
            action_mana_drain: 50,
            fire_rate_wait: 30,
            action_speed: 265,
            action_projectile: 1.3,
            action_fire: 0.5,
            action_explosion: 1.9,
            explosion_radius: 7.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAt0lEQVR4nGNgoAR8nixOUA0ThPp+v5qBgYHFwALOxgUY4azvh/0ZZHQYnlzhtN1IQMPnyeIsBhYMMjpQsSdX/lw4wZv7kjo2wFTfr4bqIeQHFAAPpbcOol+7XYjVxsDA8P18/Pfn7UTp+drt8v15+//////////9eTsJqqF6zse/dRBFVsOEzPmx9SLDixsoZkhocHjrE/IAkpMwvcGCqeHfkr0/YhgYXtzgNFxIwGxkz6A5nXwAABUjZTuZSgdLAAAAAElFTkSuQmCC"
    },
    GRENADE_TIER_2: {
        name: "Large firebolt",
        description: "A more powerful version of Firebolt",
        meta: {
            action_type: 0,
            action_max_uses: 20,
            action_mana_drain: 90,
            fire_rate_wait: 50,
            action_speed: 265,
            action_projectile: 1.6,
            action_fire: 1.2,
            action_explosion: 2.4,
            explosion_radius: 25.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmElEQVR4nGNgGFQg+YrWf4o0/////z/FhiDzNUo8/+tOM0ERQ+cz4jJMo8TzP6vSawYzu28Mpw5xMVzOOoNTLQbQnWbyH+YlmLc0SjyJ8xq6ZhjQnWaC1RAmdIHf90QZTh3iwjDYzO4bA6vSa+K8oFHiieEF9MCDAZwBozvN5D8sAH/fE2W40bOdcCCiRyMufw8cGFyugQEAoZtrsxZlyIkAAAAASUVORK5CYII="
    },
    GRENADE_TIER_3: {
        name: "Giant firebolt",
        description: "The most powerful version of Firebolt",
        meta: {
            action_type: 0,
            action_max_uses: 20,
            action_mana_drain: 90,
            fire_rate_wait: 80,
            action_speed: 265,
            action_projectile: 2.0,
            action_fire: 1.8,
            action_explosion: 2.9,
            explosion_radius: 40.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA10lEQVR4nGNgoBZ4d+j/f4o0/////z82Q3pjsBuMIY7LBZem4HcZE4whZMfIiG7D5gaIZmTb0A1E0YSsWU2FgUFehIFBRo+B4cklBobdJxgYipcwYlWPofnSFEh4wMC7QxDXYAsPFmSNrhYQtoweA4OgLUKRoC0Dg/wl7BZiOGlzw///8iIMDLrZqOLvD0O8wsCA6h0WdANu3YG64jDCFTDN2MIBZyC6WiAC8OEbiMHYApEJWROMXbyEkXH3CdyacSUuDEAoEaG4ABvYfQKVD0tYFNlIdQAAdCWIvvp7J2EAAAAASUVORK5CYII="
    },
    GRENADE_ANTI: {
        name: "Odd Firebolt",
        description: "A somewhat peculiar bouncy, explosive bolt",
        meta: {
            action_type: 0,
            action_max_uses: 25,
            action_mana_drain: 50,
            fire_rate_wait: 30,
            action_speed: 265,
            action_projectile: 1.0,
            action_fire: 0.8,
            action_explosion: 1.9,
            explosion_radius: 7.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAo0lEQVR4nL2RvQ0DIQyFTZQV2Ifi9kDCw1AwA16JMagokUunSRC5n8DdSXkVQn6fn22Am1Kzhc45+byJaNrXzL162HPGHGMERGx/MUYAACEiNQS84woRqb7zafVj9KDHXnENixSjd7sh4u8l1rAIZy+c7AYwNQJn36Jy9lLDIv0Ih5BitHCystYaMoy+ASR7uI8hhLO/djZO9iv6aRWjr5v/rhd8q7dspbqcDgAAAABJRU5ErkJggg=="
    },
    GRENADE_LARGE: {
        name: "Dropper bolt",
        description: "A very heavy explosive bolt",
        meta: {
            action_type: 0,
            action_max_uses: 35,
            action_mana_drain: 80,
            fire_rate_wait: 40,
            action_speed: 65,
            action_projectile: 2.0,
            action_fire: 1.8,
            action_explosion: 3.9,
            explosion_radius: 16.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVR4nMVRPQvCMBS8SgcH6VAQVxfJFBDcnRz8O53b0b0/xbVDp/6CglPp0K6l4BALzRB4Dn6gTVpRKN6W9+6OdxdgLAiPUc5dyrlLwmP0lfhy3GgC02xc/C/CENG0s/rIj7OruMbqdO7lGRfCY2RtZ7DXewCASiNQ0sAJM41vG13v4unyAACQABQiCDAymbwh5y61hU9dtIVv/I1Jd7DYzXvNq7jWZpoBcMssy+D5lmUAlUbGMrUOnDCzBBgpRJAvhpQ0xqsGC8m5S49IH8v7FVcpvnV7msYJ3gAAAABJRU5ErkJggg=="
    },
    MINE: {
        name: "Unstable crystal",
        description: "A crystal that explodes when someone comes nearby",
        meta: {
            action_type: 0,
            action_max_uses: 15,
            action_mana_drain: 20,
            fire_rate_wait: 30,
            action_speed: 265,
            speed_multiplier: 0.75,
            action_explosion: 4.0,
            explosion_radius: 30.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/0lEQVR4nGNgGHTg//sP/0lRz0SpISgG/C+tgWvEZQi6OKYL2noYGBgYGP4tWkOUy1AM+HT1OsOnq9cJakZ2KYoBr15cRNH0d+IcuEK4oVAXYjVA9dwdRgYGBoYvO7djNeiVfzjDq5OnGe7sXYHdAGyueGnn/p8pLgTO5+DhgVvEwMDAwIJu05u1qyGG7ISIiW1cCbEpLoRBhIGB4d7CDtxeeLN2NQMDAwODUnwFw6sXFxlevbgI9/sr/3AGBgYGBpW9Z3AbIH5oJyPMIKX4CoS3oJrvLexg+LdoDcNLO3fsCQ1Z4qWd+/+/E+f8v22k8v+lnfv/20Yq/9HVDA4AADKZgASeFP+8AAAAAElFTkSuQmCC"
    },
    MINE_DEATH_TRIGGER: {
        name: "Unstable crystal with trigger",
        description: "A crystal that explodes and casts another spell when someone comes nearby",
        meta: {
            action_type: 0,
            action_max_uses: 15,
            action_mana_drain: 20,
            fire_rate_wait: 30,
            speed_multiplier: 0.75
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXUlEQVR4nM2SsUtCYRTFf08kFBQKIhcXxTYDcWrR9Y1vEdz0L3AMhFoLhxZxddGpUAddwsEll4aIBMVBscXB9xAKjVzKr0H98lNbo7vdc+8999zDhb+Mac4jNjHbeiJe37YaAGYv5wLAHjpVcgBtF4F2sK/gALOmIfAGYdjGGanKulQgzi4k67qSac4j5DCAN8isaYjVOcoJXF0DMC+WJeROmZozUtUYthfAUoE7ZWoKwaTTZdLpKsPrHjiCBRi2cdROFA8kgTVqKUNf2bxs2qv5APh8fgDA6bvc9uD4qa8BvNfvdhJZRpyPUoh+40apKx5sqjCjurAlYjJ3uFxy0Srs65vGldKCpL7Ajqq3iy2JGIfAoJBhM6SCcaUEgD+Zxhq1sEYtaahlxAEINB5/J/Dc17UVkT+Z/jlrOTwoZJgXy5hRfee3KgUzqouvbF70wgFhRnXRCwfEZs//iW+a8J9w6wO0tAAAAABJRU5ErkJggg=="
    },
    PIPE_BOMB: {
        name: "Dormant crystal",
        description: "A crystal that explodes when caught in an explosion",
        meta: {
            action_type: 0,
            action_max_uses: 20,
            action_mana_drain: 20,
            fire_rate_wait: 30,
            action_speed: 265,
            speed_multiplier: 0.75,
            action_explosion: 5.5,
            explosion_radius: 30.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAaklEQVR4nGNgoAp4U3L9////WKWYsKqGMLDqQdcAV41LD4oGNNVY9bAgc548eAJhKFipfOx/8OfZD8JOIgiGgwaUUDp29QScYaVtQdiGrOu1mCoM1rjicxKaHjTVOME0zeYLIbuJUkoQAADI1iuP6EAz8wAAAABJRU5ErkJggg=="
    },
    PIPE_BOMB_DEATH_TRIGGER: {
        name: "Dormant crystal with trigger",
        description: "A crystal that explodes and casts another spell when caught in an explosion",
        meta: {
            action_type: 0,
            action_max_uses: 20,
            action_mana_drain: 20,
            fire_rate_wait: 30,
            speed_multiplier: 0.75
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAzUlEQVR4nGNgoAR8niyOJvKm5Pr///+RRZgg1Pf71QwMDCwGFnA2RDWEgayHEc76ftifQUaH4ckVTtuNyKqFuzWgShkZGRgYWCAuYTGwYJDRYWBgYJDR+X6Y4c+FEz8fojv4////jBBNmDZcCNkNEVSwUmFgYPjz7AeEK9KjifADp+1GiGq4H7ACqAZOxVYGBoY/F07A2QQ0QABv7ks8SrFoIAaQrIEFq+ixqyfgDCttC8I2ZF2vxRQ0WOOKz0loeiCqCYNpms3wSCQTAAA6REvOXXHfGAAAAABJRU5ErkJggg=="
    },
    FISH: {
        name: "Summon fish",
        description: "FISH!",
        meta: {
            action_type: 0,
            action_max_uses: 20,
            action_mana_drain: 90,
            fire_rate_wait: 80,
            action_speed: 265
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAa0lEQVR4nGP8//8/AyWAiSLdowbQwQD78s7/CfMu4Y/n////Y+D4uRf/w9h2ZR3/kfnomBFXQrIv7/wv8IQHRWya/R4G1xkfGa6d28dIlBduX1/LcPv6WjgfXTNRXoB5g2QvEAsGeTogBgAA4cB9luVrxTAAAAAASUVORK5CYII="
    },
    EXPLODING_DEER: {
        name: "Summon deercoy",
        description: "Summons a seemingly-innocuous deer",
        meta: {
            action_type: 0,
            action_max_uses: 10,
            action_mana_drain: 120,
            fire_rate_wait: 80,
            action_speed: 265
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAnklEQVR4nGNgGDCwtzYIjQEBLLg0GBd77cUmzoRLg4BACgMDQ9bq2wwMDOoauugaPnyYg1XbtFBVBgaGAC2l8iB/hIYPH+ac7d2GyyoGBgY3bWY3bWYIG+EHNM8hA+fmdShOgjgXDoyLvfDYhuJpiFI05+26+henBkyfoKlG17Dr6t9dV/86N6+DOBpCdq7biF0DVmkCfiAGkKyBZAAASWMv2tHU6zsAAAAASUVORK5CYII="
    },
    EXPLODING_DUCKS: {
        name: "Flock of Ducks",
        description: "Summons a chaotic flock of spicy ducks",
        meta: {
            action_type: 0,
            action_max_uses: 20,
            action_mana_drain: 100,
            fire_rate_wait: 60,
            reload_time: 20,
            action_speed: 265,
            action_projectile: 1.6,
            action_fire: 1.2,
            action_explosion: 2.4,
            explosion_radius: 25.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABA0lEQVR4nGNgGBkguMLxf3CF439sckzYBLszPOCKgysc/++Zfg6n4VgNQDfEJdOIgYGBgeHJhqT/MAyTY8SmOcZV/7++siQDAwMDwwmBnwwMDAwMrx68Y+jS/czAwMDAYFl9D64PxQXzJtb+Z2BgYFiy+yJcgcUHdgYGBgYGMQUhhrLLvCiaGRgYGFjQbZ83sfb/2+unGS7efc4AcwU+gOKCt9dPMzAwMDAIa5oyOPn4MVy8+xzuCphL8BpQOmMHI8wQBgYGDBccXnERI8ywBmJ3hsd/YU1TBjf5pwzLdzxjKJ2xA6s6nOB4qxI8mpCjDBvASAfImhkYGBhkAuaRZjvdAQDpwFKjryjzcAAAAABJRU5ErkJggg=="
    },
    WORM_SHOT: {
        name: "Worm Launcher",
        description: "Summons a giant worm to cause havoc for a moment!",
        meta: {
            action_type: 0,
            action_max_uses: 10,
            action_mana_drain: 150,
            fire_rate_wait: 80,
            reload_time: 40,
            action_speed: 250,
            action_projectile: 0.1,
            spread_degrees: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyElEQVR4nGNgGAVEAU0t3/+4+EzIEk4xs/4zMDAwWLiU/kdWbBhbCpfT1PL9L2nkC+czwhT+/////+PTzQwVex0YXly9wSChrcHw4uoNhufnNjNIGvni5MMNgNmaYLaWwdpEluHomccMh3gXwA27t3czAwMDAwOXhCoKnwlm+/HdXQwfn91gsDaRZchfF81gbSILV7S0wpZBydmXgUtCFYOP4oKPz24w5AdcJckFFIcBCsAVCxYupf+RY8EpZhacTxTAlw6GAQAAfaSLdjofEVwAAAAASUVORK5CYII="
    },
    BOMB_DETONATOR: {
        name: "Explosive Detonator",
        description: "All nearby explosive spells cast by you instantly detonate",
        meta: {
            action_type: 1,
            action_mana_drain: 50,
            action_speed: 26
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAzUlEQVR4nJ1QIQ7DMAy8VP3BBvuARSOD0/h+0FcUt7AocMN5xFQ6VF4VllQpHCjs3pABT1bkdAM9RcpdIvvOBjZjKV3IvfcsQ57QZbWZX3NcyZJrUroKV8MBwJC39KKUEhG890q8Wm0AXI7nU3ONTfZ3/dVD3oYp48ahTAB0Yx8HYLyraf0j9PnjmTLrxj6rspjzDLvbYSUIbynEUjo669nEB7WQBVYb1rRcRPshJMwez4ZI4Wpq+XM/oQ+1t9oMeUthyFwOIPJQgRhjIz6hs3k8fbFe3AAAAABJRU5ErkJggg=="
    },
    LASER: {
        name: "Concentrated light",
        description: "A pinpointed beam of light",
        meta: {
            action_type: 0,
            action_mana_drain: 30,
            fire_rate_wait: -22,
            action_speed: 140,
            action_projectile: 0.39,
            action_explosion: 0.22,
            explosion_radius: 3.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmUlEQVR4nGNgoBb4DwWb73v/J1szOYYwYRPkV/BkwGdI92o7uBwjAwMDw+b73v99FLYwMDAwMBxmmIqi+OOD7Qy+ilsZcRkGl8BlI7+CJ1bDulfb/S8NPcSI02R0Q3EZhNcAXIbCDLNjzMHvAlwaSXIBLo1E2Xjo/5T/h/5PwUgXGNFIcxuxAZgrGBkYGBgO/Z/yn2QbBw0AAOGLfBiV+IvLAAAAAElFTkSuQmCC"
    },
    MEGALASER: {
        name: "Intense concentrated light",
        description: "A spectral wand is summoned that casts a huge beam of light",
        meta: {
            action_type: 0,
            action_mana_drain: 110,
            fire_rate_wait: 90,
            action_speed: 1,
            action_projectile: 5.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2UlEQVR4nKWTsQ3CMBBF30UMgTISGyBBQ+kUrAIFdKGhpE5apknEFp+C2HKCQwKcZNmyvt+/89kmiX9i8YV26GQA2ZiwpqCmULyX0mUA26MFwaW1ocunGpUBXPeymgJA9xsWAScvqFeCd1/v3azDAKZXGwxQlwUAK05cWmOXT3AkIYmyQZWcJKlsUNmgGREAbwf9XMmNwQgA75yCdGvGRrKEOIMpkHefdRcpEJUcktgceAOlyhqCTN1n8i2LX2LUQnnNMnehzYD1AJ9il4uaQo/2DBBAAfBrPAF6cnGV3jPb0gAAAABJRU5ErkJggg=="
    },
    LIGHTNING: {
        name: "Lightning bolt",
        description: "The primordial force of nature",
        meta: {
            action_type: 0,
            action_mana_drain: 70,
            fire_rate_wait: 50,
            action_electricity: 1.0,
            action_explosion: 5.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAATUlEQVR4nGNgGCGg/donEqQh3P///2FRiibafu2T3aar2E39//8fmknt1z79//8PLo5iM5qo3aarEKUQKQgXnx+weoOwHkw3k6ZhWAEAsN1H0BhtiugAAAAASUVORK5CYII="
    },
    BALL_LIGHTNING: {
        name: "Ball Lightning",
        description: "Summons three short range electrical orbs",
        meta: {
            action_type: 0,
            action_mana_drain: 70,
            fire_rate_wait: 50,
            action_speed: 800,
            action_electricity: 0.5,
            action_explosion: 0.25,
            explosion_radius: 15.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDUlEQVR4nKWTMW7DMAxFP4OO8UF0BOcAGbsWBbq2Nyigzd4s5AZuxg5F1269QI5g3cPO7N9BYiw1Tp0iBAjZgih+PlJCErfYaumA88PfGUhe5U3XkxwZ1ml/IXBkGjz5FRc0Xc+m66EZ/6UgCcr2t7t3kkRZtSyrFiRziAEYCUCcH854fb8+SfzUFXfpAWvWcP4o+GWb+o0A5FC/wPmBh/oZzh/DRTM1o6zapNYxytX6c5grlW5NIdasCYAA5OvzQ7ScoGIv1hQSM6sCaHY0XX8CU1YtYtbo50DVhSQSYLSmSBjoEErGYWESR2qb0nZO//kszMpSaGnPL03jxce0qfennt8/PHIWIBAY3GI/Up7ER5UeI/EAAAAASUVORK5CYII="
    },
    LASER_EMITTER: {
        name: "Plasma beam",
        description: "An instantaneous, dangerous beam of light",
        meta: {
            action_type: 0,
            action_mana_drain: 60,
            fire_rate_wait: 6,
            action_speed: 40,
            action_projectile: 0.8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAi0lEQVR4nGNgGAUoQCZu6XaZuKXbSdHDhKxZTNnAQ0zZwIMUQ1hgmjOTojyq7CGCbQe1PKYzMBA05MmiaE8GBgYGBqPGq//Rwa4PCAzjo8vBXYANuPIj2Ls/Ivi7P6LKszAwMDC8unthR9tBLSQvMDBMn7dsBzFhwAhjwAIRZiDcf6QAcqJxFDAwAACzSV/trHHrSQAAAABJRU5ErkJggg=="
    },
    LASER_EMITTER_FOUR: {
        name: "Plasma Beam Cross",
        description: "Four deadly plasma beams in a cross-shape. Look out, they can hurt you as well!",
        meta: {
            action_type: 0,
            action_mana_drain: 80,
            fire_rate_wait: 15,
            action_speed: 40,
            action_projectile: 0.8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3UlEQVR4nKVTIRKDMBDcdOoxDAqHq0LgqWEGX4dA4PhCq+kXcHXUoWHAwA+qcP1AFbzgKjKBiCaFdtVdcre528sBGjQjUTMS6WKUyDqakXVqkp3qouwHAEA7LfYmgtfzUQNAYCz2JgIAXjst9i8Eq7AHuGBlP8ilemkSmYHBnTSJzByoRJLluOHJP+ByZIw1I1FgcLFEwidI7UDEAwATc5YPha8jE/FM18LZ5861B/LbfZ6E3ILyFTsuKiL+E+24qFRxf0/hK4FOCy2B5bihENVy3HBbXVi/TFqsWec3/Ll9Nrv4hnMAAAAASUVORK5CYII="
    },
    LASER_EMITTER_CUTTER: {
        name: "Plasma Cutter",
        description: "A plasma beam specialized in cutting materials!",
        meta: {
            action_type: 0,
            action_mana_drain: 40,
            reload_time: 10,
            action_speed: 40,
            action_projectile: 0.8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtklEQVR4nN2RMQqDMBiFv4inEBfBUSQIhV7ArT2ES2/RyUN09CAdXQoFCeIouEivYSfDr8S6dGkfBPIn/3v/ewn8PJQs8jKaZH2/Dood2Ia8jKZYh6RZAkDbdPRm3CTO4kqSL6cCTQGAoXISH6+nHXA718qfL9IssWRgsZfQQSHEazyAWIccg8Oi0VDZ9cmR7zxdOTBUm9E8gN6MNtue2DqaddA2HSbYnjRDPiJ86xuliKvpz/EGBXZIaXwZ7dQAAAAASUVORK5CYII="
    },
    DIGGER: {
        name: "Digging bolt",
        description: "A bolt that is ideal for mining operations",
        meta: {
            action_type: 0,
            action_mana_drain: 0,
            fire_rate_wait: 1,
            reload_time: -10,
            action_drill: 0.3
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAcUlEQVR4nGNgGE5g89yIwiTjzXMj8CtjhLN8nJTSo80YGBj2Hb3tZK3KwMDgm7wCu4bCJGOICmTVyIz+eWfRbYDombn0FJolmNqY4FrhqmcuPYWmGi6Cz0nI+rfsu4c9lHyclDbPjYAziA0lrIEzrAAAarxHslTyBJcAAAAASUVORK5CYII="
    },
    POWERDIGGER: {
        name: "Digging blast",
        description: "More powerful digging",
        meta: {
            action_type: 0,
            action_mana_drain: 0,
            fire_rate_wait: 1,
            reload_time: -10,
            action_drill: 0.1
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAzElEQVR4nGNgGGrg+25nnHKbk8ObXaw3J4fj18wE5y88ed5AXoaBgQGiDVnn9+ftcDYLRAVEKQMDw4WHTyDsCw+fQPRcePiEU7ISpmcvEwMDQ+2eoxcePkG2BFmbgbzM5uTwntgtEBNRnBRvboip7cLDJwtPnocrY4Q4iYGBAc3shSfP60uIMjAwXHzxes2VWxAncUpWMsK1NrtYX3zxGq5IX0K0ds9RuKc5JSu/73bmdN3LAtcAVw1Rt+bKLbgUp2QlrrBGB/gibtAAABdvZRg5vhlIAAAAAElFTkSuQmCC"
    },
    CHAINSAW: {
        name: "Chainsaw",
        description: "A good tool for cutting meat. Also has some magical properties...",
        meta: {
            action_type: 0,
            action_mana_drain: 1,
            fire_rate_wait: 0,
            reload_time: -10,
            action_speed: 200,
            action_slice: 0.51,
            spread_degrees: 6.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAgklEQVR4nGNgGNHg0KxZh2bNYmBgWD9nDlYSAhgZGBgWp6fLGxtD+FJWVliNu3ziRGBKCgMDAxMDA0PszJkPz56FSHz/+hUN3bt2bcfy5boWFhB7mAg69dbFi2r6+gwMDAgbFqenw6U5ubnRkEdkpJKWloqOzpTqaiyehojiIkcqAAAQfkNMWU4fFAAAAABJRU5ErkJggg=="
    },
    LUMINOUS_DRILL: {
        name: "Luminous drill",
        description: "A pinpointed, short-ranged beam of concentrated light",
        meta: {
            action_type: 0,
            action_mana_drain: 10,
            fire_rate_wait: -35,
            reload_time: -10,
            action_speed: 1400,
            action_projectile: 0.4
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4ElEQVR4nGNgoBAwMjAwMDDVMiQhC/IJMcjD2B8KGeoJGgADMINgBqhLM4jB5E6GMWQSNICBgYFBoJ+hEV2zs5iYAIzd5vAqEsVSbKbi0qwsoyc/947LMYIG4NIMYyMbgmEAzHZcmhkYGBislKNlYYaw4LMZm0YY21e5TYeBYQ+mAYQ0CzNo84symPLCxFEMqDogthxdMzaN8+66Hk9duMcSwwBiNf5rZrDC8PfcOy7H5t5xOXb9//zH1//Pf/zq/6lP/6Fg7h2XY0y1DP8xNCEDsjXCNJOlEdkAsjRSAwAAmgF9OH4I2msAAAAASUVORK5CYII="
    },
    LASER_LUMINOUS_DRILL: {
        name: "Luminous drill with timer",
        description: "A pinpointed, short-ranged beam of concentrated light that casts another spell after a timer runs out",
        meta: {
            action_type: 0,
            action_mana_drain: 30,
            fire_rate_wait: -35,
            reload_time: -10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABW0lEQVR4nK2RMUgCURzGfyeOVkJ1OBgNLoYRDhYkDYHX5iAERbQFDUJDNUkkQUnU1iDYclmTLYGDo4PTSeFwg6SDTRqIOEg0RteQT67LEqxv+v7vvd/3Ht+DP0oCsMXZmnlMqU5XoLfRaZZ4Xooed/Y4GhjgW00ZTleAs51ZGnoWtz9CLFmm0yzhWI9eAtyvEe0XYAcQsHfiFa+i4A/vcnt9QSwJb0BIlp2hAhmA0+XWhjnAJkxDzwLgDx+i5xK9OSTLTnHG456bVmuK1jfA7Y8AoOcSX2YzLLw5xAafhcWSZaptB/l8nmrb0evACgMEPZtTIkQSi6JIoU6zxP75XdEKCj+Ob0yWFkYlLDooyJmfbhXgJPMjAJIkSfZBcD/w6mmluH2TX4TuN/Yr6jfw/YSg9eWoNUVTa4pWMdL1ipGut4yHF6MrtaZotjjGN8isoUEBDwWaA4YC/0MffLu2g87XZckAAAAASUVORK5CYII="
    },
    TENTACLE: {
        name: "Summon Tentacle",
        description: "Calls a terrifying appendage from another dimension",
        meta: {
            action_type: 0,
            action_mana_drain: 20,
            fire_rate_wait: 40,
            action_speed: 8,
            action_melee: 0.8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAuElEQVR4nGNgIBEwovEz09shjOkzKwlogCuFA6x6mJBVy8hKPXx0U0ZWSkZWCqsRUBvgqhkYGKpr4iESrS0Lnzx+hmkP1AYZWamjR/fDVUN0otkDYUBtQDMeGaBZxQIRPXp0v7W1I6ZqTFOgTsKlGifITG/38kxobVlIUCUTnAWxxMszAb8GlIiDeJ0Bh+/RbZg+s/LJ42dHj+5nYGDA4zYmZM70mZXycuoMDAwQbYQ1wAHJgYYHAABEnkGl41V75gAAAABJRU5ErkJggg=="
    },
    TENTACLE_TIMER: {
        name: "Summon Tentacle with timer",
        description: "Calls a terrifying appendage from another dimension! Comes with a timer",
        meta: {
            action_type: 0,
            action_mana_drain: 20,
            fire_rate_wait: 40
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAABK0lEQVR4nGNgIBEwovEz09shjOkzKwlogCuFA6x6mJBVy8hKPXx0U0ZWSkZWCqsRUBvgqhkYGKpr4iESrS0Lnzx+hmkP1AYZWamjR/fDVUN0otkDYUBtQDMeGaBZxQIRPXp0v7W1I6ZqTFOgGrCq1g6eLiBhAmF/eHHm6tpMhFxmeruXZ0Jry0Jk1dbZpw9f/758+fLD179bZ5/WDp6O8DTcEi/PBAhXQMKkI0dHQ+SLi4tLREJBR44OxDaohukzKyE+s7Z2hNvz5MIGBgYGA5+aC1taIGwUGyB6jh7dDwkZBgYGGYMABgaGC1ta4GwUDRA98nLqkED78OJMxZQrN97w7Nmz58YbnoopVz68OIMIJTRgbe24rSZeO3h6xRQGBgYVhiNX0EOJeAAADnqBgbXLOxAAAAAASUVORK5CYII="
    },
    HEAL_BULLET: {
        name: "Healing bolt",
        description: "A magical bolt with rejuvenative powers",
        meta: {
            action_type: 0,
            action_max_uses: 20,
            action_mana_drain: 15,
            fire_rate_wait: 4,
            action_speed: 625,
            action_healing: -0.35,
            spread_degrees: 2.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAh0lEQVR4nGNgoDVgxBTafN8bzvZV3Iomy4TVGB+FLT4KW7BKYdGgoWCAxiBsAx7AAqEg7sY08vb/agYGhhsPLjCg+Wfzfe//eAE8JMh1EgMDw5YHPnAnqTC0MDAw3GGogXAhTsIJbv+vhjgD4gE0QLKTsGiAOwCrS1gwhRgYGLY88CHVZuoBABgxSK9eHv3BAAAAAElFTkSuQmCC"
    },
    ANTIHEAL: {
        name: "Deadly heal",
        description: "A projectile that at first deals damage, then heals over time",
        meta: {
            action_type: 0,
            action_max_uses: 20,
            action_mana_drain: 20,
            fire_rate_wait: 8,
            action_speed: 625,
            action_projectile: 1.2,
            spread_degrees: 3.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHUlEQVR4nLVSsU7DMBQ8V1nYQII9SMRhQkh8BEPtP+mAwsrggZUOqH/BGDPwBUxIjDhGanYi0Y2l4jFYz2lJgtKBm+zn0717vgf8FxqtyUhJq6KgRmsa4om+opGSLp6yrdrLpYepqg5/8pcLlVqo1AIAZnney0n6irM8x2d6Fu+n6TmS7KtXIDowUhLPPeSo0brDEfzwfP8duzFOcAsAeMdNrL3VrwAAffzY/oeRksrllMaiXE5jMhOeeVckWUgpaS8OtlajR1h73wrsz+dihYLW3mPhHnClFD7u9rY6Hl2HFA58+PeFc4gjsOJhWQpTVYLVf4M5AOJSDS4SW+VzcOc6vCiw+chnWyvYWgFA7DwaHBMvDxDi3klkU2gIP5PWq5UQNkXbAAAAAElFTkSuQmCC"
    },
    SPIRAL_SHOT: {
        name: "Spiral shot",
        description: "A mystical whirlwind of magic sparks",
        meta: {
            action_type: 0,
            action_max_uses: 15,
            action_mana_drain: 50,
            fire_rate_wait: 20,
            action_speed: 110,
            action_projectile: 0.2
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAh0lEQVR4nGNgIBEwYhX9////phd/GBgY/CVZSTMv5sAnAiok+19CEGE9MQc+IauDs5EFibUaWQ8LAwPDxue/ifccEy6TMMH///9RWLhUw8U3Pv8NtYGREXtsQMDzQnGcTsIDYg58wuJPrEEp2f8SX1Qgq0OLQcJ6sAIs3oWEhp8EC/7AIBYAADkkP/muaDnBAAAAAElFTkSuQmCC"
    },
    MAGIC_SHIELD: {
        name: "Magic guard",
        description: "Four guarding lights rotate around you for a time",
        meta: {
            action_type: 0,
            action_mana_drain: 40,
            fire_rate_wait: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJUlEQVR4nMVSsWrDMBB9Kd1CB0G8daohkKF08KIlYwmKfyFDIWPbOd/gOe5o6JBfsEXoD2gxuHQwBPQFCdZgPF+HoCInTvGWt0h3ujvevSfg2hhcenh8+VoPJ3d+U9b65/P5vfcAHqmMjTwBAOawl2rF5yLRFAYMaW4gl36r58YNRKJpMRsLGzdlrQEgDBhenxjCgIFHKnN7bt3AFgLAZruTlnqaG9jTsutkkOYGH98GaW6gVnxu83LpDzbbnXT1OROjM9lRwyOVna4B4Cgej1TWd5C9/2nQlLW+nz68samH4UT57grAUeBLTrSKRKIpLioSiSaXXVxUREQUFxW5PS0XzGEvF7OxsE6YSGVNWWs28oTrhIszKqdUuz7WvwNc9P3O18UvupadEWfPFwMAAAAASUVORK5CYII="
    },
    BIG_MAGIC_SHIELD: {
        name: "Big magic guard",
        description: "Eight guarding lights rotate around you for a time",
        meta: {
            action_type: 0,
            action_mana_drain: 60,
            fire_rate_wait: 30
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA10lEQVR4nLVTsQ3CMBA8pUUUkWABUlG4oskKFktYME3qpPUYMUUWSBMpEgWVV0gKRP1UjhzzMYoE17198t/f+YF/QKimzIvWCNWUACC1vQNAXrTGryf4BKktSW3JkR2qfiCpLVX9QP55AgC3ayaqfqB0t5fnUwoAeD2e1pHyojV1N8JcDqi7EeHjU2ciYruHCqS2FN4vSlwa0fnzQWBN8uAM5lSuwkzBrFiJBAA2x23m584hOqZQTRnmz/kQMxp+RBzha9QxglMYVRCTyH3x6D74dbhYP8cbAJnzmpYUpdgAAAAASUVORK5CYII="
    },
    CHAIN_BOLT: {
        name: "Chain bolt",
        description: "Fires a mysterious bolt that jumps from enemy to enemy",
        meta: {
            action_type: 0,
            action_mana_drain: 80,
            fire_rate_wait: 45,
            action_speed: 40,
            action_projectile: 1.0,
            spread_degrees: 14.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlUlEQVR4nL2SwQkDIRREZ/sIpKRgIykgBViNBzvwmDoEtwVvOjksEzYQJfkbMuBFnPf/4AC/UPaF2Re2RO7vRm+HoOAiW+ILyKQ9qPYNNp08AwUXWfsGMkEE0ibSV7DayeCibXpL/zYr26HJhzKbzdmX53/Xbmyj8qtAaqPOu80WGc+30zICy+iuFwBAua8AgJnnYz0A4VapNMKa9uEAAAAASUVORK5CYII="
    },
    FIREBALL: {
        name: "Fireball",
        description: "A powerful exploding spell",
        meta: {
            action_type: 0,
            action_max_uses: 15,
            action_mana_drain: 70,
            fire_rate_wait: 50,
            action_speed: 165,
            action_fire: 0.25,
            action_explosion: 2.0,
            explosion_radius: 15.0,
            spread_degrees: 4.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAXUlEQVR4nGNgGAWEASMeuY89UWzeghD2r63v+UuWMTAwsED4rwMM2Ww0+YqXfuqNZmBggKvj0JgCYzB89xbk1JwKVQ3X9rEn6j8O8P16Nk4nfeyJQrYH2UmjgBgAABsbMx56SSayAAAAAElFTkSuQmCC"
    },
    METEOR: {
        name: "Meteor",
        description: "A destructive projectile from the skies!",
        meta: {
            action_type: 0,
            action_max_uses: 10,
            action_mana_drain: 150,
            action_speed: 350,
            action_fire: 2.25,
            action_explosion: 5.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAABAElEQVR4nJ2SMY6DMBBFv61RlAax9VbuQ7ESCFGm2p6GE6TYK3ACrpCCYus0XIEyiqBLpC05QhANihCkGGJlCbGiTDH6Hs3z99gG3og69v6+PwFwfpWpY4+FuVNqtYhWdexJfzAzQqsmc0k5XXXk3B+EnRQmh/4gAJByACzXG+kPTeaaHLQJqaCr9qQCAG2eTqzkPWCF5WV3AsAMWy2i1b3VPwCA9Iex9euXK6QCUo5maAJYYdlkAAAFAPTxw5pUUMfCToqpA0/PA4zdNyH9YeZIAOykaPP0sT4/g46u2nfn7ajPW9zuXTwDmsxdrjd62eapFZYmAAD/FN579tVfiit0YF7bAKZpjgAAAABJRU5ErkJggg=="
    },
    FLAMETHROWER: {
        name: "Flamethrower",
        description: "A stream of fire!!",
        meta: {
            action_type: 0,
            action_max_uses: 60,
            action_mana_drain: 20,
            action_speed: 165,
            action_fire: 0.45,
            action_explosion: 0.5,
            explosion_radius: 8.0,
            spread_degrees: 4.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAjElEQVR4nGNgGMrguhkfUdIE1GGCr636JNh+3YwPzSoWZHXfr2dDGP/WHfnqz/Bo4305f0Xu6ovXzfg0T32S81dkOHURYe/369n///////8/hA0XgXMRnoErhQCsXLhqFCdBAIfGlB83ciAkxHnfGAw0T31CDwq4wXD3QJyBFqyMWD3NqTmVcFAOGgAATht5HLAkL5EAAAAASUVORK5CYII="
    },
    ICEBALL: {
        name: "Iceball",
        description: "A magical ball of frozen fire",
        meta: {
            action_type: 0,
            action_max_uses: 15,
            action_mana_drain: 90,
            fire_rate_wait: 80,
            action_speed: 165,
            action_ice: 0.25,
            action_explosion: 2.0,
            explosion_radius: 15.0,
            spread_degrees: 8.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZklEQVR4nGNgGAUDDxiJURQ77fd/zzAWOH/7qj8Mi7NYGVEMsA79/F/JkYNhUSYLQ9z0PwwMDAwMyJoihVENXf6WgSFKhJERrhnZoNhpv/8TAsve/P9P0Aux037/R3cJuhdGwWAAACPcQmWjAJ7SAAAAAElFTkSuQmCC"
    },
    SLIMEBALL: {
        name: "Slimeball",
        description: "A dripping ball of poisonous slime",
        meta: {
            action_type: 0,
            action_mana_drain: 20,
            fire_rate_wait: 10,
            action_speed: 102,
            speed_multiplier: 1.1,
            action_projectile: 0.25,
            action_explosion: 0.3,
            explosion_radius: 9.0,
            spread_degrees: 4.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAf0lEQVR4nGNgGAWEASMav2hyUF/uOgiDgYFBSPYHAwODhBRPitkqLBogiuDq3j3m0DJnMZDlufD4CwMDA0QPE7KGvtx1EOMlpHjePeZAlnrx7AuEwYLskqLJQUKyPxgYflw7yaFlzsLAwHDt5B8Ghi/Y/QB3PYQNcRWaB0YqAABoJytGPJt3lQAAAABJRU5ErkJggg=="
    },
    DARKFLAME: {
        name: "Path of dark flame",
        description: "A trail of dark, deadly flames",
        meta: {
            action_type: 0,
            action_max_uses: 60,
            action_mana_drain: 90,
            fire_rate_wait: 20,
            action_speed: 250,
            action_projectile: 0.8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAjklEQVR4nGNgoATMduwnQwqL9GzHfiMNWxRBZA6yNFwczmCCcKY/XwdXkbq/MFMyCM3O1P2F2N0A1waxBN0lEBvgBsCtmv58HS6PMaIJYVWaKRkEdxITQdVogAWrKNzTmEYwYShmwAwi7BrgoQk3FasLsTsJWSmyjxnQQokBFnZwDWiqsWhA1saAGcFkAABdFU4Rm4HUkwAAAABJRU5ErkJggg=="
    },
    MISSILE: {
        name: "Summon missile",
        description: "A missile!!!",
        meta: {
            action_type: 0,
            action_max_uses: 20,
            action_mana_drain: 60,
            reload_time: 30,
            action_projectile: 2.0,
            action_explosion: 1.0,
            explosion_radius: 20.0,
            spread_degrees: 3.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAbklEQVR4nGNgGIGAEUKdNzZmYGDg1NLSWLwYvwYmZM73a9duxMYSZQMDA0N7ezucraCgAGFo9PTcKCmJjIzE7iSIq857ecGlDbdtg3DheligEmfPImx48ABuw/dr1xi8vAjYgN/fKJ4mJpSGAwAA0iAiz/Cf4F0AAAAASUVORK5CYII="
    },
    FUNKY_SPELL: {
        name: "???",
        description: "???",
        meta: {
            action_type: 0,
            action_mana_drain: 5,
            fire_rate_wait: -3,
            action_speed: 450,
            action_projectile: 0.15,
            action_explosion: 0.4,
            explosion_radius: 2.0,
            spread_degrees: 2.0,
            damage_critical_chance: 1
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAO0lEQVR4nGNgGAXDADDCGJ/buf+z2LhAOCoWmCrvnIAz/xzZw8Bb+ZWRgYGBgQmrsUiK4QCboaNguAAALCILBJxRKo4AAAAASUVORK5CYII="
    },
    PEBBLE: {
        name: "Summon rock spirit",
        description: "Summons an autonomous rock ally",
        meta: {
            action_type: 0,
            action_max_uses: 10,
            action_mana_drain: 120,
            fire_rate_wait: 80,
            action_speed: 230
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA6ElEQVR4nGNgoBZIrZyAVZwJl2oR55dY9WDREBBf9EJ5b5guk4jzS0xZRqwuef3s0V/b2xJ3nRkYGGa3F+C0oXJPJUS1qJQc82FVZCOwaAiILwrTZXqhvBfC1Yxlh2gWcX4ZEF+E3Ya6zZcgBos4v4Ro1oxlD9NFUYPCgTgarqjJV+/KgytonkTRAHE9siLmw6p1my/h1MDAwHBi7wa4Igj5YNZnZAUsyJy7188paxppxrJfX6xax3CJ+bAqRGTDwj4sNkBE4R6AqIaYghxKCBAQX6Rr5gBhwEUgDIg4OoCLIktjV0oSAACDA1+kzwO+oAAAAABJRU5ErkJggg=="
    },
    DYNAMITE: {
        name: "Dynamite",
        description: "Summons a small explosive",
        meta: {
            action_type: 0,
            action_max_uses: 16,
            action_mana_drain: 50,
            fire_rate_wait: 50,
            action_speed: 800,
            action_explosion: 2.5,
            explosion_radius: 28.0,
            spread_degrees: 6.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAWklEQVR4nGNgGDDQlOo5pyqCWNVwpZh6mLBqePb6IxoDH9hrYQFBWC3BbgMDA8Oxd+8gjJS2FURpsBISwipO2AaiNBx79440G6yEhEi2Aas4dg14VOO0YUABAJL6In7hL+/KAAAAAElFTkSuQmCC"
    },
    GLITTER_BOMB: {
        name: "Glitter bomb",
        description: "Summons a bomb that explodes into volatile fragments",
        meta: {
            action_type: 0,
            action_max_uses: 16,
            action_mana_drain: 70,
            fire_rate_wait: 50,
            action_speed: 800,
            action_explosion: 1.0,
            explosion_radius: 16.0,
            spread_degrees: 12.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEUAAACCX1OceljQNdL/ydfgvFeGNGhkjiHHAAAAAXRSTlMAQObYZgAAAEFJREFUeJxjYMAKGBWgDAUmqIAAI4TBbMAAkUtLgwiwGRsngBnJyS5mYIaZMYyRbGwGVWsGYTCnJUMUMySbYbUYAOMsCGMkjNThAAAAAElFTkSuQmCC"
    },
    BUCKSHOT: {
        name: "Triplicate bolt",
        description: "A formation of three small, fast bolts",
        meta: {
            action_type: 0,
            action_mana_drain: 25,
            fire_rate_wait: 8,
            action_speed: 550,
            action_projectile: 0.185,
            spread_degrees: 14.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAKMGlDQ1BJQ0MgUHJvZmlsZQAAeJydlndUVNcWh8+9d3qhzTAUKUPvvQ0gvTep0kRhmBlgKAMOMzSxIaICEUVEBBVBgiIGjIYisSKKhYBgwR6QIKDEYBRRUXkzslZ05eW9l5ffH2d9a5+99z1n733WugCQvP25vHRYCoA0noAf4uVKj4yKpmP7AQzwAAPMAGCyMjMCQj3DgEg+Hm70TJET+CIIgDd3xCsAN428g+h08P9JmpXBF4jSBInYgs3JZIm4UMSp2YIMsX1GxNT4FDHDKDHzRQcUsbyYExfZ8LPPIjuLmZ3GY4tYfOYMdhpbzD0i3pol5IgY8RdxURaXky3iWyLWTBWmcUX8VhybxmFmAoAiie0CDitJxKYiJvHDQtxEvBQAHCnxK47/igWcHIH4Um7pGbl8bmKSgK7L0qOb2doy6N6c7FSOQGAUxGSlMPlsult6WgaTlwvA4p0/S0ZcW7qoyNZmttbWRubGZl8V6r9u/k2Je7tIr4I/9wyi9X2x/ZVfej0AjFlRbXZ8scXvBaBjMwDy97/YNA8CICnqW/vAV/ehieclSSDIsDMxyc7ONuZyWMbigv6h/+nwN/TV94zF6f4oD92dk8AUpgro4rqx0lPThXx6ZgaTxaEb/XmI/3HgX5/DMISTwOFzeKKIcNGUcXmJonbz2FwBN51H5/L+UxP/YdiftDjXIlEaPgFqrDGQGqAC5Nc+gKIQARJzQLQD/dE3f3w4EL+8CNWJxbn/LOjfs8Jl4iWTm/g5zi0kjM4S8rMW98TPEqABAUgCKlAAKkAD6AIjYA5sgD1wBh7AFwSCMBAFVgEWSAJpgA+yQT7YCIpACdgBdoNqUAsaQBNoASdABzgNLoDL4Dq4AW6DB2AEjIPnYAa8AfMQBGEhMkSBFCBVSAsygMwhBuQIeUD+UAgUBcVBiRAPEkL50CaoBCqHqqE6qAn6HjoFXYCuQoPQPWgUmoJ+h97DCEyCqbAyrA2bwAzYBfaDw+CVcCK8Gs6DC+HtcBVcDx+D2+EL8HX4NjwCP4dnEYAQERqihhghDMQNCUSikQSEj6xDipFKpB5pQbqQXuQmMoJMI+9QGBQFRUcZoexR3qjlKBZqNWodqhRVjTqCakf1oG6iRlEzqE9oMloJbYC2Q/ugI9GJ6Gx0EboS3YhuQ19C30aPo99gMBgaRgdjg/HGRGGSMWswpZj9mFbMecwgZgwzi8ViFbAGWAdsIJaJFWCLsHuxx7DnsEPYcexbHBGnijPHeeKicTxcAa4SdxR3FjeEm8DN46XwWng7fCCejc/Fl+Eb8F34Afw4fp4gTdAhOBDCCMmEjYQqQgvhEuEh4RWRSFQn2hKDiVziBmIV8TjxCnGU+I4kQ9InuZFiSELSdtJh0nnSPdIrMpmsTXYmR5MF5O3kJvJF8mPyWwmKhLGEjwRbYr1EjUS7xJDEC0m8pJaki+QqyTzJSsmTkgOS01J4KW0pNymm1DqpGqlTUsNSs9IUaTPpQOk06VLpo9JXpSdlsDLaMh4ybJlCmUMyF2XGKAhFg+JGYVE2URoolyjjVAxVh+pDTaaWUL+j9lNnZGVkLWXDZXNka2TPyI7QEJo2zYeWSiujnaDdob2XU5ZzkePIbZNrkRuSm5NfIu8sz5Evlm+Vvy3/XoGu4KGQorBToUPhkSJKUV8xWDFb8YDiJcXpJdQl9ktYS4qXnFhyXwlW0lcKUVqjdEipT2lWWUXZSzlDea/yReVpFZqKs0qySoXKWZUpVYqqoypXtUL1nOozuizdhZ5Kr6L30GfUlNS81YRqdWr9avPqOurL1QvUW9UfaRA0GBoJGhUa3RozmqqaAZr5ms2a97XwWgytJK09Wr1ac9o62hHaW7Q7tCd15HV8dPJ0mnUe6pJ1nXRX69br3tLD6DH0UvT2693Qh/Wt9JP0a/QHDGADawOuwX6DQUO0oa0hz7DecNiIZORilGXUbDRqTDP2Ny4w7jB+YaJpEm2y06TX5JOplWmqaYPpAzMZM1+zArMus9/N9c1Z5jXmtyzIFp4W6y06LV5aGlhyLA9Y3rWiWAVYbbHqtvpobWPNt26xnrLRtImz2WczzKAyghiljCu2aFtX2/W2p23f2VnbCexO2P1mb2SfYn/UfnKpzlLO0oalYw7qDkyHOocRR7pjnONBxxEnNSemU73TE2cNZ7Zzo/OEi55Lsssxlxeupq581zbXOTc7t7Vu590Rdy/3Yvd+DxmP5R7VHo891T0TPZs9Z7ysvNZ4nfdGe/t57/Qe9lH2Yfk0+cz42viu9e3xI/mF+lX7PfHX9+f7dwXAAb4BuwIeLtNaxlvWEQgCfQJ3BT4K0glaHfRjMCY4KLgm+GmIWUh+SG8oJTQ29GjomzDXsLKwB8t1lwuXd4dLhseEN4XPRbhHlEeMRJpEro28HqUYxY3qjMZGh0c3Rs+u8Fixe8V4jFVMUcydlTorc1ZeXaW4KnXVmVjJWGbsyTh0XETc0bgPzEBmPXM23id+X/wMy421h/Wc7cyuYE9xHDjlnIkEh4TyhMlEh8RdiVNJTkmVSdNcN24192Wyd3Jt8lxKYMrhlIXUiNTWNFxaXNopngwvhdeTrpKekz6YYZBRlDGy2m717tUzfD9+YyaUuTKzU0AV/Uz1CXWFm4WjWY5ZNVlvs8OzT+ZI5/By+nL1c7flTuR55n27BrWGtaY7Xy1/Y/7oWpe1deugdfHrutdrrC9cP77Ba8ORjYSNKRt/KjAtKC94vSliU1ehcuGGwrHNXpubiySK+EXDW+y31G5FbeVu7d9msW3vtk/F7OJrJaYllSUfSlml174x+6bqm4XtCdv7y6zLDuzA7ODtuLPTaeeRcunyvPKxXQG72ivoFcUVr3fH7r5aaVlZu4ewR7hnpMq/qnOv5t4dez9UJ1XfrnGtad2ntG/bvrn97P1DB5wPtNQq15bUvj/IPXi3zquuvV67vvIQ5lDWoacN4Q293zK+bWpUbCxp/HiYd3jkSMiRniabpqajSkfLmuFmYfPUsZhjN75z/66zxailrpXWWnIcHBcef/Z93Pd3Tvid6D7JONnyg9YP+9oobcXtUHtu+0xHUsdIZ1Tn4CnfU91d9l1tPxr/ePi02umaM7Jnys4SzhaeXTiXd272fMb56QuJF8a6Y7sfXIy8eKsnuKf/kt+lK5c9L1/sdek9d8XhyumrdldPXWNc67hufb29z6qv7Sern9r6rfvbB2wGOm/Y3ugaXDp4dshp6MJN95uXb/ncun572e3BO8vv3B2OGR65y747eS/13sv7WffnH2x4iH5Y/EjqUeVjpcf1P+v93DpiPXJm1H2070nokwdjrLHnv2T+8mG88Cn5aeWE6kTTpPnk6SnPqRvPVjwbf57xfH666FfpX/e90H3xw2/Ov/XNRM6Mv+S/XPi99JXCq8OvLV93zwbNPn6T9mZ+rvitwtsj7xjvet9HvJ+Yz/6A/VD1Ue9j1ye/Tw8X0hYW/gUDmPP8uaxzGQAAAJhJREFUeJylU8ENgCAMbI2LuI7EIfi4BG+X8OMQBJfxwSjnqwYNgsUmfEjuer1eGQD9Ki2BjwYHHATbaYDZxhoFPhoAoPRVCZ6dUwWvBMs2rss2rjVFAKh/AomInN3nGvjG8qXSUWQTl4KSXGf32UeDaQic9aM1SGLiLQdfzBMgM78r0GyhOIKQlLKg3kLzLUxD4Nw//z3nE9mHlbAlnZsnAAAAAElFTkSuQmCC"
    },
    FREEZING_GAZE: {
        name: "Freezing gaze",
        description: "A heart-freezingly sinister aura",
        meta: {
            action_type: 0,
            action_max_uses: 20,
            action_mana_drain: 45,
            fire_rate_wait: 20,
            action_speed: 220,
            action_ice: 0.4
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4klEQVR4nLWTIQ6DQBBF/9YhCJfoEUAhewQ8cAiOgWpSP9T3GFVFIhCQJjhSRRCYJluxUJaFhaZNx0yyO+9lZhaAf4Yd82CrZrcGWwZIldgxD+QzpoP3JqhoEaYRS5RuqM9hGrFkJlDhAbQMATYdQgAYxEyFXQd0vYkiANibAizaKTgbwY554Hug80UUug6ozvXgRCDDvgcqK0DuYikmIxzvnKsFZSVynYv8eI53TQdAXuLPHeh2AIyi1R3IEvUVXAeUZfPnWxQMkq+/A51kOOuvqc+hbqy35HDifOtfWI1PCl/dh53Ix1XOZwAAAABJRU5ErkJggg=="
    },
    GLOWING_BOLT: {
        name: "Pinpoint of light",
        description: "An extremely concentrated point of light that explodes after a moment",
        meta: {
            action_type: 0,
            action_mana_drain: 65,
            fire_rate_wait: 40,
            action_speed: 850,
            action_projectile: 0.2,
            action_explosion: 0.4,
            explosion_radius: 20.0,
            spread_degrees: 6.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEUlEQVR4nK2Sr27DMBDGv1ZjI0MhkyzvBSpFAXuGoIyPJ9bGp6Bgv0CmvECLO3R4sMBkT2BZGjmTkeEMbI7S1E0K9kPnP993dz6vMINSqk3T9FsIcT89c84dqqp6uZoeaK33dV0/AICU8rYsyzsAm4j/DQCcGATxiJgYADZCiK/1uNwQM/M2xN77M/pfBoOu655DnCTJIwBYaz8B7GYdllBKtczcxyCi9/WSQVEUT8D5VmYNiKjPsgzGGDRN8+q9342MPpxzh5MpxMR5nq/+tlsp5Vu4Y629jgqJqGfmnoj62f4ABGeML0cyDzDzNkzpKGuAmS/KrrXeD4vpeJh5sfRAdArGmEXh+OceVXHJw/0rP7DWsvnhFgOpAAAAAElFTkSuQmCC"
    },
    SPORE_POD: {
        name: "Prickly Spore Pod",
        description: "Summons a spore pod that attaches to a surface and then grows and explodes into spikes",
        meta: {
            action_type: 0,
            action_mana_drain: 20,
            fire_rate_wait: 40,
            action_speed: 225,
            action_projectile: 0.1
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEUlEQVR4nGNgGGjAiEui/Na7/wwMDAxBAiwM6z78YehUE8KqFqtg+a13/29vOIkiphpgjtUQJlyayxOsUcRvbzjJcPLVp/94XYBs849b5xgYGBgYEssjGOZ3rmDgUDPC6hK4C06++oShmYGBgWF+5wq4WHmCNcPtDSfh4QN3AbrNMFuxAXSXoIQBzGaY5sTyCBTN6HyUMDj56tP/zgVHGX7cOsfwM9oXq+3sSzczcKgZMagGmDOYML5nCFVVRo2V8lvv/jvvvwSJ/67t/42dG/4HdW2H+9d5/6X/yP7HC5z3X/pv7NwANxAXwEgHMM0fWtYx8ArIE7QIwwBkzcw5xgx7HfVwJnecIKhrO0GnUw0AAEQ4iZRbzmA3AAAAAElFTkSuQmCC"
    },
    GLUE_SHOT: {
        name: "Glue Ball",
        description: "A projectile that explodes into a sticky mess",
        meta: {
            action_type: 0,
            action_mana_drain: 25,
            fire_rate_wait: 30,
            action_speed: 325,
            action_projectile: 0.1,
            spread_degrees: 5.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+UlEQVR4nKWSMY6DMBRE399UuUNOYCGouQlIaVL4HCjnoKBBAmkPQrVFspFPkDukin4ajBxiZ3e1IyH5G2Y8M0ZUlf/gwy+6vtGv70+93a/L4+fYftc3CiChg65vADQvMs6nC4DkRabzmqq2bDc7iToAOOyPAOIJgBpTUtVWAJyb0hHWyIuMqrbiSYGrJ0isxNv9CqDj0C4RvMBhf0xH8ORxaBe7xpShK1l//yIwDm04aiz3WwGP8+lCVVt8ibH8EOlgjqBVbWMxZLvZ/SyQsj4LPYkkI6xOTuKtQOwmfisgIcm5CWNKnJterjHVgUf4ciGHHUT/xL/gARPYn04F4/B4AAAAAElFTkSuQmCC"
    },
    BOMB_HOLY: {
        name: "Holy Bomb",
        description: "Summons a bomb that... well...",
        meta: {
            action_type: 0,
            action_max_uses: 2,
            action_mana_drain: 300,
            fire_rate_wait: 40,
            reload_time: 80,
            action_explosion: 8.0,
            explosion_radius: 180.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvElEQVR4nGNgwAP+n4j8///5zP/41DDhkyQGMOKyGUVA3gGiWDIdQz0LNgMuLz/AwMDAwKAbCdHI8PAAec67lC/5H8M1aACrFy7lS/7X9VNAddWmBwx6E58T9gI2zQxaCQy6WgwMlxga/qMbghILMM2XNz1A0QwDuhUNDJfyJVG8hGIATDOGC9DU4DQAK7i2ADsbCrBGI15D0ABWF6CEAQGAYgCyRnRDYHx0cYx4RQ9lGIAFMHo0UpyQKAYAkuFPkt3ULkEAAAAASUVORK5CYII="
    },
    BOMB_HOLY_GIGA: {
        name: "Giga Holy Bomb",
        description: "Bigger and therefore holier",
        meta: {
            action_type: 0,
            action_max_uses: 2,
            action_mana_drain: 600,
            fire_rate_wait: 120,
            reload_time: 160,
            action_explosion: 20.0,
            explosion_radius: 320.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVR4nJVSsUoDQRB9d6RMwDZwYAQbi/sAG/ELgu1Z2wc2WG6VUkx/YGF1tpJekKtS50AbwQgD1wq7rYxFbi57lz1OHyzMPN57swwDdMCQVrxOmMuUDWnVpQvZZrnP3MdJH7jEKFosDWk1pI/7hvv4EgBgf2hea47Oruz3+/NANKNosZS6eHoFAMTJzoivXY/otNYa0nuP73uGtNrMxszrhKX3LsGQVmyzXAS18eW88Tazcfcy+8xcpsxl2h8i5kZIZe4KCd2QeDpBsdoink68Q0TjIvTLHLw9+usKgwOmL6QF7w+K1fZPuQcBrrEdIr3LG9IqcEWGtPq8e2iecQVZ8Mntzdy92tro1v85pKBNtANdyGS2WR4Mry8A4BeuQ/BGLg/zXwAAAABJRU5ErkJggg=="
    },
    PROPANE_TANK: {
        name: "Propane tank",
        description: "Summons a propane tank. Be careful what you wish for.",
        meta: {
            action_type: 0,
            action_max_uses: 10,
            action_mana_drain: 75,
            fire_rate_wait: 100,
            action_explosion: 13.0,
            explosion_radius: 60.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEUlEQVR4nKWTMW7CQBBF30QUaawIikDnggPsEeIDuEosIToXuUMUH4AoJUU6CqS0kMoHSOU+9O4RBSsLRaLbFMQrg+1NEL/andn5O/P/rhhjuASd6kZE7Prl6cMyP7/e28TphVdNrHGUmEJrAAqtiaOktc1GgnPQaQoqPyMIvwH4TL/oe+0EtQ7iKDFBqGwxQBCq1jGOOoijxMwXE4HEDHpDbrp3FFozfcuZLybySyLVmos1OCLY7TfOw015qfoqIjyEj8a7vuUwQpdCa9bbnN1+wzKdyZ/vYJnO5DTmijs1KB+TC40Eys8YjVf0vXdG4xXKz1oJahoA1vNBb8h6mwNwsPeff6FUuyx2uVNT9Vz8AIKAbd8eDoc7AAAAAElFTkSuQmCC"
    },
    BOMB_CART: {
        name: "Bomb cart",
        description: "Summons a self-propeled mine cart loaded with explosives",
        meta: {
            action_type: 0,
            action_max_uses: 6,
            action_mana_drain: 75,
            fire_rate_wait: 60,
            action_explosion: 4.0,
            explosion_radius: 40.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGklEQVR4nM2TMUvDQBTHfxdKSAKFVKh0kGTJoKMfRjfd/Aaik1MnwW/gIDg6O/klOrbQDm1wKAkkB4UkZDkHveTaxqmDvuUe773fn/877oRSikPCOoj+FwI9gNuH5+YiZJ7iD4a/Amb/aXwjLIDZdILMU4A9WNd1+IMhMk+ZTSetA8/rs15/Ei/n2I5LXZVbULycAzQ923HxvH4rUBQbUVel8o+OkVmC7bid9uuqRM+MRifCdKBOz873gKLYoB3qMwgjgjAiXi0UIMTF1Z36KQBg5lpEC3TNWToJwuh7XyM3owsOwqh9B7ugzBJkllBXJTJLOoUAehqMVwvM/OP9RZgOLq/vO1cVSqmmqZ28vT5uwbsi5pz489/4BVDWmwR4xySuAAAAAElFTkSuQmCC"
    },
    CURSED_ORB: {
        name: "Cursed sphere",
        description: "A projectile that brings bad luck to anyone it hits",
        meta: {
            action_type: 0,
            action_mana_drain: 40,
            fire_rate_wait: 20,
            action_speed: 1,
            action_projectile: 0.6
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMklEQVR4nMWTPW7CQBCFv0Xp3YBdULiBipaG9Q3s2jeI4AYcghtE5AbU9g0MDa2r0FCkQKKwL5CXgvXKISkiESkjrbQ7s+/Nz9s1knjEBg+h/5ygTTLuz6soUptkapNMqyj61q+RxCqK2EzmAOwOpfJFalxczgdAvkgBCKqii/MEsJnM5S4ZtwC0O5TYYeyB7281++uZPMnUkXQt9IGsT0cB2GHMeDojqAqCqmA8nWGHMQC+HUlIYmugHsWqRzGNTbU1qLGpJKmx6Zd9L3aroE0ynj9Ev4pfm8uuroqtQcswVGNT1aPYZ+6yd75lGErSbYiAeR345MYpov31jAVw8vohTme8XC7Gy9gDky9S7Q4lTsofZQRMUBV4gvsH1Lf16ajujaxPRzaTuQd7gkfs/z/TJ25ssrGfIeRxAAAAAElFTkSuQmCC"
    },
    EXPANDING_ORB: {
        name: "Expanding Sphere",
        description: "A slow projectile that increases its damage over time",
        meta: {
            action_type: 0,
            action_mana_drain: 70,
            fire_rate_wait: 30,
            action_speed: 50,
            action_projectile: 3.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/ElEQVR4nM2TIY7DMBBFnyOHREFZUFBQVhRsXgXvCcJ6hZ6joIfICUqWBZUsDgorLIkUqSxWp6BxaqeLtmB3JJM/+i/fM44SEd6p6C33/wactks5bZcCCUOVCiQyVKkMVQok4wHlD/FoVgKQ5RZAmaKXuLy9wIcqAlBxeX0mGM0qyy1dowH4yTzXI2euW0vdWqcrU/Thfi/7OUfmM1BOfPn6ZQ+LXQBxfR8gI4Qst+6ej3LmxW6SXD8CqFurNms9NbtGy9fhQwWBPbOX+AHYrLWDSNdostzy+X0OU3jl69Maj2aFiz9CBMAUvQIkLm/T+p5zuIbv4Df19//CHfidZx8XwEJ7AAAAAElFTkSuQmCC"
    },
    CRUMBLING_EARTH: {
        name: "Earthquake",
        description: "Calls the anger of the earth",
        meta: {
            action_type: 0,
            action_max_uses: 3,
            action_mana_drain: 240,
            action_speed: 110
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAv0lEQVR4nJ2SvQ3EIAyFH+g2SJE2O5AhIlFkDiZijiuQGCLsQHvFzcBVjnwOkB9LSGDwx3sG5a0pcct4Eu/PV2kXklrm6bBZy8lYx6FoACAIFS3zhLjlS5AXTVxICgC8NYXmC6ZyBtBUJEE8ekp2C5SQsDM7mi/oRWqQVrP/APywzHct9A57awpXdGpBruOWQbZqNg4WWje1olrA/wKpciGp2rc/9EC+hAtJ3VbWa5q3pqzjsI9HQA65pUwCAOAHL6t5hoNL8GAAAAAASUVORK5CYII="
    },
    SUMMON_ROCK: {
        name: "Rock",
        description: "Create a mighty rock out of thin air",
        meta: {
            action_type: 0,
            action_max_uses: 3,
            action_mana_drain: 100
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABG0lEQVR4nM2RIW7DQBBF30YhliMZhLqtjGxgkGuUVekFygobUBBSXhCQI+QEUViukUoGNgoxtSVLsRZOQTUr23EDq3602pn/duYv/LXktBQRkV8bVuuNrNab0QY5Ld29QszQPDRtP99N12SMMQozi71xxcenF/FnPmEYAVCWZwDaS0ucpA4kIsLXM2axNwBTBfgzHwBrGzwvcEaAIs/cdDqBaqKH9tICUFU11jbESUqRZ5Tl2cHH1pwwoi4kDCPCMKLIM1d/ffuQUYBO0YWo4iTF2gZrG6qqdvfTLuD+4Q7PC4CfEKuqZj4HzwtcqMOHehMo2dqml8nQfDzsXJC9RPUrtbEbngK75ivAGOiW+WoF1fGwM2q6Zf4f+gaFvKH6Wh3+rwAAAABJRU5ErkJggg=="
    },
    SUMMON_EGG: {
        name: "Summon egg",
        description: "Summons an egg that houses a friendly creature",
        meta: {
            action_type: 0,
            action_max_uses: 2,
            action_mana_drain: 100
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA40lEQVR4nM2QMQ6CUAyG/4oLbKzEuDE46cRB8BCaeBkXE70DehBMDE4MDiyEt5C44UTq4isoT3QydnlN+/9f2wf8OjgJmZn5K3GUKY4yJWJOwiZ/QAZ9Zs+x4DkWBDLdN4LzHG8B2lxUNQAIhIiImZmTkGl2IAAYmgCeYz29RVVLTkTU1nY2WB9PnQ/SZlOvAwjGIwDA5XqTms51rxeg7/ZdW4y+az/1egF5qYyQoqqRl+ozwLSJafJbQBrHMqmoajHnpUIax58Bu9WS2pC2ebda0qu+U9Cx2Gx5EgSylcn8H3EHhU6BrGAGsdAAAAAASUVORK5CYII="
    },
    SUMMON_HOLLOW_EGG: {
        name: "Summon hollow egg",
        description: "Summons an otherwise empty egg that casts a spell upon cracking open",
        meta: {
            action_type: 0,
            action_mana_drain: 30,
            fire_rate_wait: -12
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNklEQVR4nM2Rv0rEQBDGv8gh+ARecR4naieXKzT4FgEF38AuvSFptFDs9QlstNHrrw0HwSoRu1yMeIf4p5SQBAKfxbFrYkJsLJxmZnbn++3MLPDX9nm+zKZ7erskWa1JIpsAkDg6RR4GPsPAZ1Es41qIozOJbCaOzjDwmaUxszSWkKJIwBTRdmuwA3Q2v2mzB+Sei8WDx3k6nWBtQ1VIEv4elMGt0tiBeP366lJ207Sb0g6yNGYS2SWI8D91CyJYWj1RACD3XBwfHeIl35dF9/5dyTeaOx4xS2NapsEw8GmZhszd8ah5DAAoziwg4ifqRmjVQT7e3wAAfVVDZ2Uds+lEnv0KmM+pAQC2t1QMhzfoddt4en6t3UH1LwFYpsG+qqHXbQOAFJ+eXVTqawFFiOiqTvw/7AsSHPG3MwAXfAAAAABJRU5ErkJggg=="
    },
    TNTBOX: {
        name: "Summon Explosive Box",
        description: "Summons a box of explosive matter",
        meta: {
            action_type: 0,
            action_max_uses: 15,
            action_mana_drain: 40,
            fire_rate_wait: 30,
            action_explosion: 5.0,
            explosion_radius: 40.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAz0lEQVR4nM2QMQrCUBBE35ekEqIgaIiQK6iNKB5AbBXMNeJJkivYCuoxBCs9ginETrERJLA25qOQELWQTPV2lxnYgX9LdmMREfnZrPkZYiSLje8LwDaK6LouaUxrycafST8MFfsJAKUkIDoeATicz5m88Dx6QYDsxqLaKwWgkoDpcCCOXf/olXC+1j7j9XC5XnPNVct6m/ULg3KDkVnjHl3oqEom929meoBtGLiOg21ZuZwacIpjvuFEBSpxUmnqskZmLZMzSzzFsS4rj4ulB5bFd/0HGGcsAAAAAElFTkSuQmCC"
    },
    TNTBOX_BIG: {
        name: "Summon Large Explosive Box",
        description: "Summons a large box of explosive matter",
        meta: {
            action_type: 0,
            action_max_uses: 15,
            action_mana_drain: 40,
            fire_rate_wait: 30,
            action_explosion: 8.0,
            explosion_radius: 60.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9ElEQVR4nM2SsUrDUBSGvxuSSUgLhRoi5BVqoUhKV0G6pmCHLvENevENfIEEX6B1FYwv4K64+QjeoWRLySJIIA5qajukXtqh3/RxD/ycy/lhRwTA83RaArwqxZnnUed+qKDzwIuU9ONYGABqsQDgPctq3Q8V1zLjfjzGj6LVBpcXg9J12lvXjeYJMgy+XQrEaSLM3+Eyz7cGXAXnzJIneBshoxIAA2BwdMzQavGplnRFo9YnvR63N9D/sFYBjmniuS6ObWt5FbALBxKQFkX1oOtaPdgkvnvU68FfmrYN/Hxh1Dip7j20Wv/ytR6kRVHdWMf3whedwoE3nnyTZgAAAABJRU5ErkJggg=="
    },
    SWARM_FLY: {
        name: "Summon fly swarm",
        description: "Summons five flies to aid you in battle",
        meta: {
            action_type: 1,
            action_mana_drain: 60,
            fire_rate_wait: 60,
            reload_time: 20,
            action_speed: 100,
            action_melee: 0.14,
            spread_degrees: 6.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBElEQVR4nGNgoDbwjMj4j028buH9/27527HKYQV1C+9jKK5beP8/ugWM6Iqb4hVRxGB8Iwe//+ISUgzbV8xgRDaABcYIspeDMKAaT5y7gWL7uQObUDTCABPMlnUHH8ENghuGwysYBiAbAjPIwkiDgYGBgeH09k6sAYsrsBmMHPz+e0Zk/IfR+46dg9PY1KP4C2bqyxfPGBgYGBjEJaRQFKMHIIoXwgu64DbANMI0YNMIAyzIHD4JJYbbF46gKIC5BkYTBEYOfv+NHPz+w9jIchce/P3PwIAaM0wMaABXfDMwMDCsO/iI4cKDv/+xxgy6bfhc6BmRgZGk4QCnBJIBxFpGFAAAluWClFOOSeYAAAAASUVORK5CYII="
    },
    SWARM_FIREBUG: {
        name: "Summon Firebug swarm",
        description: "Summons four fire bugs to aid you in battle",
        meta: {
            action_type: 1,
            action_mana_drain: 70,
            fire_rate_wait: 60,
            reload_time: 20,
            action_speed: 100,
            action_fire: 0.15,
            spread_degrees: 12.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFElEQVR4nL2SvWoCQRSFz4hlQNg3sB0h1S5ELSxNLxtI5YJVniLY+Aq2SZoFrS3sYuEPKFi57YBVqoF9gptiucuscxdMkwPLzFzu+fZcZoD/0mY8p1k4oT8ZpNp02PUhm/Gc+OPaLJxUzpntieYmb9ovTwUMhWl7OWF7OZWNOtgpKWkDAAafb8osDiWIYXWjeAAXwqB+JwQAfP984Ta6e/ZiPfafafSQw9gc7aCFOFVYvhLiVIljVApMNjYvxglaleb39d4DlCO4sdjIBsnoAeK06DE2LxO4adxarTLboyTSlESaAIBX1nV1JqB6Mw23QQc79XHMauOaxQHX1Zmkm4H0R0lJpGk67PqvUiQK4jHv6b1Lv2JyiZmwvmH8AAAAAElFTkSuQmCC"
    },
    SWARM_WASP: {
        name: "Summon Wasp swarm",
        description: "Summon six wasps to aid you in battle",
        meta: {
            action_type: 1,
            action_mana_drain: 80,
            fire_rate_wait: 60,
            reload_time: 20,
            action_speed: 100,
            action_melee: 0.28,
            spread_degrees: 24.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEklEQVR4nGNgoBeoW3j/v1v+9v8kacAm9nBXCYo4I7ripnhFFDEYf0OP1//Fe98yrN1+khHZABYYI8heDsKAajxx7gaK7QEl21A0PtxV8l/erYcRLli38P5/uCEMDAxl/bsYGBgYGCyMNOCuwAaYkJ2+7uAjhnUHH8E1MjAwMGzutGX4+f7W/4e7Sv4basn8//n+Fv6A1LP2gCuG0ehsZPUoToMFVKyzMAMDAwODoZ4WhgXybj3YvRPsaf7/4a6S/w93lfwP9jRHsW1DjxcKjdUFwZ7m/xkYGOC2MzBghjxegM9mGLjw4O9/BgbsiQwF4HJy3cL7/y88+Psf5l0MjTBv4AMwzRhqsZqIw3XoUUkRAADN96NAghWnQQAAAABJRU5ErkJggg=="
    },
    FRIEND_FLY: {
        name: "Summon Friendly fly",
        description: "Summons a friendly fly that attacks your enemies!",
        meta: {
            action_type: 1,
            action_mana_drain: 120,
            fire_rate_wait: 80,
            reload_time: 40,
            action_speed: 100,
            action_melee: 0.4,
            spread_degrees: 24.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABX0lEQVR4nL1TPUvDUBQ9SZNNHKUgCSI4CCIuTg4Jutg1QugmGQJdmt3Q0V+Qjhmk64MW7F55LhIcgkOGgCDFUqiDW3GREof2hZs8V73LeR/3nHduDgH+s5aDSUERAFSxYLbfZbbfpQS6Z7ZffI2fsRxMSgQATTRmXhgBACMCmRdGDIDL477LY4XZfmGP13db1xdKxQEAOJaJzAsjIZak+Vpk48TlscI/37AzvFEER6vP6VgmAGCEMEKaI0lzHJF7l8cK7dc2h322IQkBxzKRpHllFNFLBSpq9Fs4lonR4zuSNEfj477s8RaroC6Cusjx2WXRancKgQ9PadFqd8o1TUdycNdsRAAwn00BALvGnvQIdaH+RqZEb7EK6khHUAV5eHJQkuezaemAuqFnoqQYaVNPN4Lb71nU043A5XGf2b6Uggqso7l6eQ22m/s4PD1HTzcC6SnIEUpF/4c6/ln9AAeuuf98is8sAAAAAElFTkSuQmCC"
    },
    ACIDSHOT: {
        name: "Acid ball",
        description: "A terrifying acidic projectile",
        meta: {
            action_type: 0,
            action_max_uses: 20,
            action_mana_drain: 20,
            fire_rate_wait: 10,
            action_speed: 99,
            action_projectile: 0.24
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6klEQVR4nGNgoBAwYhOMrff5z8DAwKBu+A8uVhOwDataDMHYep//MI0e5hJw8R0nX2A1hAmXZnTgYS7B0LLB6z9eA2Dg5nkmuK2EAIYBN88zMagb/oM7H2bIjpMvGG6eZ8JwBYoBH19/gbMnzniF4hIYGzlcMAzgF+Vh+Pj6C1wxupfUDf8xTJzxCrcBMBfAaHXDfyiG3TzPhOJKBgYs0eiX5QD3I78oD4rcx9dfGDZNO4CiByMQkTUhu+jj6y8YBmI1ANmWTdMOMMIM2TTtACO2NIJhAEyzmRsXhhh64GIFsHyAi09/QMgFALIyb/C0UGW5AAAAAElFTkSuQmCC"
    },
    THUNDERBALL: {
        name: "Thunder charge",
        description: "A projectile with immense stored electricity",
        meta: {
            action_type: 0,
            action_max_uses: 3,
            action_mana_drain: 120,
            fire_rate_wait: 120,
            action_speed: 110,
            action_electricity: 1.5,
            action_explosion: 1.8,
            explosion_radius: 50.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAApUlEQVR4nGNgIA94TH2Lh4sd9J7+iocLN4KFGPt7T38tNuWGsJnQjIEYjOwkZNUoNhSbckNUozkGDTBi2s7AwFBkwtV35hvcIGQFTMgugYAiEy44ufvUD5w2eEx962rGAVfKwMCAZonH1Lc7soWxOwnuKohSiCCEjaIBbgkywO4HiDGuZhxwaQgD0w/oLoGw4fHQe/or/lBG14zJJayBAX9aJJhOAZfvXCOeYoPpAAAAAElFTkSuQmCC"
    },
    FIREBOMB: {
        name: "Firebomb",
        description: "Slow, fiery bolt",
        meta: {
            action_type: 0,
            action_mana_drain: 10,
            action_speed: 130,
            action_fire: 0.4
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAARUlEQVR4nGNgGAVQcFtX6FOhOrGqP683/v///////z+vNyas+lOh+n8kcFtXCE0BExr/5Z7XyFxxF1FqOwnuMEzHjGAAAM4vKis96tBtAAAAAElFTkSuQmCC"
    },
    SOILBALL: {
        name: "Chunk of soil",
        description: "Don't soil yourself",
        meta: {
            action_type: 4,
            action_mana_drain: 5,
            action_speed: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAABQklEQVR4nK1SvWrDMBC+NKFwOBgJjEBgKAQHd8mQhk6ZsrSPkDFr9jxHHqJjH6Fd+gABd/BSgzEEAgJRsDExgoChwxnFTQ3t0Bs+0N33c0IC+JdaLafr9aJz1Ls4bzaPnwft+cLi0/N7t4CoyBkAmLwgNnLmONdtWY8W8HwRR/vJ3U2b5PkCANqB2+3LAACUNmmaBcHwJwk583xRVSelDfITAAwAoCprx+0rbaqyplwiEcbRXgqUAk1eNALH7VtZmh4dtw+gkbM42lMfQ5YliuyuyJLYhACQpkfysx0AmNz731aySJlKGykQQ2byIt4dgmCYJapJsDwqshyFUmmTJQo5C4Kh0mYUykZA3u2VqrLOEjUKZVXW8e6AnNlLnx9uPhvbNEIypunr20f315jPxm22FHjxNbrrYXG7Wk5/5/2lvgDJW8biCZ9LKAAAAABJRU5ErkJggg=="
    },
    DEATH_CROSS: {
        name: "Death cross",
        description: "A deadly energy cross that explodes after a short time",
        meta: {
            action_type: 0,
            action_mana_drain: 80,
            fire_rate_wait: 40,
            action_explosion: 3.0,
            explosion_radius: 25.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7klEQVR4nGNgGDTAsusLg2XXFxSxhM2f6xM2f/bCp44JxjhexsNwvIwHm9mmyBx0NUwMBIAA7+sGdDEcFmGCpQ+///////9/4lSjgYTNn+v/////f+69b38TNn+ux6WOEV0TAwPE2bpyEm+SFDlFGBgYGObd//4vSZGTKXHLlwYGBobTC3x5t2EYAA1tUwHe1w2mipIMUXIcKDbNu//93+VHL5g+fBb1ZmBgYEA2BK8Xlj78/h+fF/CCpQ+//y84cA9vIOKNxtP3nzMwMDDsQBfHmpDQUyEDAwPDh8+iDR8+i04m2wUMaCGOy6KBBQDI9GeCaLfAfgAAAABJRU5ErkJggg=="
    },
    DEATH_CROSS_BIG: {
        name: "Giga death cross",
        description: "A giant, deadly energy cross that explodes after a short time",
        meta: {
            action_type: 0,
            action_max_uses: 8,
            action_mana_drain: 150,
            fire_rate_wait: 70,
            action_explosion: 4.0,
            explosion_radius: 35.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABC0lEQVR4nKWTPW7CQBCFPyyEXKR2hbsULtKm8AWs9SUQKTgBUg4R4RNQBHwGJK8saqhoUiFaXFGnsNxsqknsjb2JxFfuvvdmZn/gTkYA8dtnZ/H4+gDAYqNmAOu5zkUne8LYTmwLpunkGXgCctmTYqLz2kY7HSAKknqoQCegjyhIHkNq5erS60sVQmp1xdeuIoMsNmpmjDEHszJymH2MRDxNJy9RkNQhtYpZciQjZvnTNhkAV3x9vpV+VTTv67nOv2+hKpoP0tIjSDRkyjbLKPvt7vLvEQ5mZYwxzhGcyBm4NB78folCu3Ub8Xj2Qpu/zJ2APvbb3eV8K/0hM1h/wX7nwKkqmpOry7v5Ak/mdf4MmjGpAAAAAElFTkSuQmCC"
    },
    INFESTATION: {
        name: "Infestation",
        description: "A bunch of magical sparks that fly in every direction",
        meta: {
            action_type: 0,
            action_mana_drain: 40,
            fire_rate_wait: -2,
            action_speed: 550,
            action_projectile: 0.05,
            spread_degrees: 25
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAQklEQVR4nGNgoAW4MuPmWkJq/v///x+/ABmGEmfTgAOCXsGmgKAmXP6kmf8JGoxNAdnRSDQgK/AoAWQFMNGa6Jp8AUwYP2lDDJaCAAAAAElFTkSuQmCC"
    },
    WALL_HORIZONTAL: {
        name: "Horizontal barrier",
        description: "A thin, horizontal barrier that harms passing creatures, including you",
        meta: {
            action_type: 1,
            action_mana_drain: 70,
            fire_rate_wait: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeUlEQVR4nGNgGAUDDxiFJrrIMzAwMPBJC/vABAusDJmwKZ5w7Pw/GPvT07dbGBgYGFj4pIUfyCowMwRL6TE4i3ow7H29g8FZ1AO7dVYMcDVrn12a8vjBXwYWBgYGhscP/jKsZbiEohbdIBgfqpnh8YO/1PHCKBgMAACaDjJlRmedQAAAAABJRU5ErkJggg=="
    },
    WALL_VERTICAL: {
        name: "Vertical barrier",
        description: "A thin, vertical barrier that harms passing creatures, including you",
        meta: {
            action_type: 1,
            action_mana_drain: 70,
            fire_rate_wait: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuklEQVR4nGNkwAGEJrrI80kLP2BgYGD49PStwrv8PQ+xqWPCZQAMyCow45XHaQCftLCPrAIzQ7CUHgOftLAPyQYwMDAwBEvpMTiLepDnAhjY+3oHXnkWXBIFVoZMcNutGJgKGFaS7gJCthM0gJD/CRpADKCtARSFwYRj5/85i3ow7H29g2HCsfP/yHYBoYDEmQ4YGBgY1j67hFczXhd8evp2y+MHfxnWPrvE8Onp2y0kGwADjx/8xSsPAK2PM5zfeyc7AAAAAElFTkSuQmCC"
    },
    WALL_SQUARE: {
        name: "Square barrier",
        description: "A thin, square-shaped barrier that harms passing creatures, including you",
        meta: {
            action_type: 1,
            action_max_uses: 20,
            action_mana_drain: 70,
            fire_rate_wait: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABW0lEQVR4nKWTMWvCUBSFPx9ZO1RJhy5xUKFuXRxKcUnBYNdQx/oDCnXs1NkxxT/QjlJXJYFmseLg4taCUTCLQ0NduhbskhdiMFTwLO8+7jnn3ct9Fw5ERgb5XqNeK2pNx/M3taKWkecukeP5z0uzO4gM8r1Gva4c9UuVAgC6amwJ3MBGVw3cwAZgNpkz+P25XprdgQCoFbVmqVKIhJIoETfUVYNSpcBxTvQBlHgiFPaAoRvYWOPpJUDr4nwU0qqAqasGn8H6dSoNHM/f3JWjR4at04dOGHcAWnQBsFZt3MA2ddXgTM2+A4hkn/8hyRGyxH3EsqV4LNLp+0EknfdBfEoiLbELchq6akSxkn260qQ4HGXVWrXTPKqSF1bdUdb3b/7jqj0CbsKkCZhpZcd/ZNSCNZ4uZpP51oh2/UYpnk3mAC+QWCbgVt6Ti+R4/qZ8kssAfHx9R8t0MP4A2TKVg3yv8kYAAAAASUVORK5CYII="
    },
    TEMPORARY_WALL: {
        name: "Summon Wall",
        description: "Summons a shortlived obstacle",
        meta: {
            action_type: 6,
            action_max_uses: 20,
            action_mana_drain: 40,
            fire_rate_wait: 40
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2klEQVR4nKWSMQrCMBiF3y/dFIdCnIpIBnGOQy/QCzg4eEIHh17AC3Rx1g6lSCcLHaRjIQ410ZYmqfimF8L35U8I8GdIlZ1/OoaMrwEgKbM0rvaHIUBKKYlIc54qIePrKOBCrePKDXcEUcDFVjTvFRe4ueGOYLmYA6u67cVsFNwRsKACNtO255/5bTAATEwbY2CrQEopbaCKZ9pQJyuRaRLrFRRIRGSayCn4Fg1J9BXKwge71rqbJEbB/fEEyxvdTem/iRaci+wCtF+57eOiBUmZpUO9H9e/+DkvSZFazpPI9FkAAAAASUVORK5CYII="
    },
    TEMPORARY_PLATFORM: {
        name: "Summon Platform",
        description: "Summons a shortlived bit of ground",
        meta: {
            action_type: 6,
            action_max_uses: 20,
            action_mana_drain: 30,
            fire_rate_wait: 40
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoUlEQVR4nGNgGHLgPxTA+Ey4JCiygRRxogwhy2UwTYQ0M+GTpBgQ43SKXcDIwMDAECi0erm5qJKai4ySkZwYH4OozDusil8/EWJ49OoTw54n986dfH3v1vp3oZEsDAwMDDDNxkZ/GBgUvjAwaHBjNUD0xhcG0Qd/GBgYlIwYGBgY1r+jghdYGBgYGE6+vncLwlUyknvCwyD6gDgvUGo5dQAAiJNZoXSSBiIAAAAASUVORK5CYII="
    },
    PURPLE_EXPLOSION_FIELD: {
        name: "Glittering field",
        description: "Small explosions appear randomly over a large area",
        meta: {
            action_type: 1,
            action_max_uses: 20,
            action_mana_drain: 90,
            fire_rate_wait: 10,
            speed_multiplier: -2
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAY0lEQVR4nL2TwQ3AIAwDWZLRsgNTsAbfzJAFzKtShagJENVv++RYSkp/qOVarsIA4IaYKEIbhMNmDV30lmsxUQCAic43oXTmYfQxQDcYzW/oqtkn3R0OF7t12eoZ9foHjsM76nOobAu8ehHLAAAAAElFTkSuQmCC"
    },
    DELAYED_SPELL: {
        name: "Delayed spellcast",
        description: "A static, magical phenomenon that casts 3 extra spells after a short while",
        meta: {
            action_type: 1,
            action_mana_drain: 20,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAd0lEQVR4nL2RsQ2AMAwEH2q2oQyTMEQGyAgZxD07mJIym7g3FZKLUGA5fGnp719+4G+pqo4zs9ARksxCyW12J7NQBoDaitZWfIm1FWWhxELZQlgoaUcAMHc4K4DLHrZlP6eOXlvY9C8/iJnQAH1TPmuENRkCCdUNQg1oODqPo1MAAAAASUVORK5CYII="
    },
    LONG_DISTANCE_CAST: {
        name: "Long-distance cast",
        description: "Casts a spell some distance away from the caster",
        meta: {
            action_type: 6,
            action_mana_drain: 0,
            fire_rate_wait: -5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXElEQVR4nGNgoDf4svX//y9b//+H8VlI1Tyrfw6czePNyMhEZQcS5wpkLxAN/v8nQxNVAEk2k+NMnLFArGGM2DQwMjIyYleOwwXotpHiFSZsNpLsAnI0YjVgQAAABVs0DvgLrHgAAAAASUVORK5CYII="
    },
    TELEPORT_CAST: {
        name: "Teleporting cast",
        description: "Casts a spell from the closest enemy",
        meta: {
            action_type: 6,
            action_mana_drain: 100,
            fire_rate_wait: 20,
            spread_degrees: 24
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYUlEQVR4nGNgoBX4svX//y9b//8npI4Fl+ZZ/XPgbB5vRkZcBjCR7URCgFgvEAX+/6eSQRQDol1CipPJigW8FvxHAsRoZMKnAMaH0YyMmAkKQwDZEGwa8LqAFI14DaArAAAhg0f0Bl2F6wAAAABJRU5ErkJggg=="
    },
    SUPER_TELEPORT_CAST: {
        name: "Warp cast",
        description: "Makes a spell immediately jump a long distance, stopped by walls",
        meta: {
            action_type: 6,
            action_mana_drain: 20,
            fire_rate_wait: 10,
            spread_degrees: -6
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYklEQVR4nGNgoCb4////f1L1MFFqKdwAmO2kuoIJmyZSDGFiYGBgYGRkZEQWROcTNACbxp2eZ0gLUGxhQLIh2MCXraRHLW0MISeR0cYQBgYKvfRl6///fS6z/1NsCNma0QEAgoJB49VDvA4AAAAASUVORK5CYII="
    },
    CASTER_CAST: {
        name: "Inner spell",
        description: "Causes a projectile to be cast from where the caster is standing",
        meta: {
            action_type: 6,
            action_mana_drain: 10,
            spread_degrees: -24
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbElEQVR4nGNgoCX4DwX41DAiK4YLMjIyYlOMVw0hm3CpZSJWEy6A1akMDAwMX7aiuojHG7u3WHBpntU/B0MMmyFMDAyk+R8GYHooDgMmBgbc0YYPwPRQHIhwMGDpACUaYSYTk5SJAsRkJooBAA36SV5CILUfAAAAAElFTkSuQmCC"
    },
    MIST_RADIOACTIVE: {
        name: "Toxic mist",
        description: "A cloud of toxic mist",
        meta: {
            action_type: 0,
            action_mana_drain: 40,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwklEQVR4nGNgoBaYdSr2/+YHFf9J1ccE03zn5GeG56+ewg2jmssIAUZCCmCukRSTZvBV6MBQz4RNAywsyiYHwDUzMDAwYAsjJnTN6Io/PPkHDxtkF8EAC7LEnZOfGRjMn8JtVDHnZbhz8jMDAwM3AwMDxJAPT/6huIARRTMUiEhzMwjIQByHLI4MVMx5GdLMFjNiBAq6Ydg0YbgAnyHYNJENsKVWjGjEp/nOyc8M1889RolOkpwGMwQWyCheo2v6RwYAkeFucLajnE0AAAAASUVORK5CYII="
    },
    MIST_ALCOHOL: {
        name: "mist of spirits",
        description: "A cloud of potent alcohol",
        meta: {
            action_type: 0,
            action_mana_drain: 40,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5ElEQVR4nL2SIQvCQBiGnw3DwoQhhrWB3WRYFJPB6B8Q7BajWbBY/AX+AeOCyWwUu2BbOGQwwwVhBrnjdAdTEd90HN/z3st7H/xKu/mgOK6GxaecC7Ce9ov96YrIpTb7WbIqOVUDKk2z7tGebErzrg1QXSzGXQ0D2DpyXmE1DJAcBGHgETVq2kTkkt4s0ZxrwmaRAHHLJ80k58sNkUtE/jiXEihYSb0KYN6bils+vVnilEpZT/tFmkkbQxh4jJbbJ8b6C6aJDfpatm1921mlCgOPTuTrnfgommkSNWpP3/nf/Td1B2/7bEbn/9UaAAAAAElFTkSuQmCC"
    },
    MIST_SLIME: {
        name: "Slime mist",
        description: "A cloud of slimy mist",
        meta: {
            action_type: 0,
            action_mana_drain: 40,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3UlEQVR4nGNgoBaYErPy/7LMvf9J1cfEwMDA0OQ94/+jZw8Z3n1+AzeMai4jBBgJKYC5RohXhCFqujOGeiZsGmBhUebUBdfMwMDAgC2MGNE1wxQzMDAwXLh5loGHk49BSFAQbsi7z28YcpaEw/WxIGt+9OwhA4MUwkY5KXmGR88eotj47v17TBfANUMBzFYGBgYMA2BATkqeIWdJOCNGoDR5z/j/5fsnrJp4OPkY6rZmoOjBGgvIhmDTRDbAllqJNhnmKh5OPgYVOVV4miDJaciGCAkKokQnfdM/MgAAdOhh3OqFIskAAAAASUVORK5CYII="
    },
    MIST_BLOOD: {
        name: "Blood mist",
        description: "A cloud of blood mist",
        meta: {
            action_type: 0,
            action_max_uses: 10,
            action_mana_drain: 40,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAz0lEQVR4nL2SMQqDMBiFn65CsovSwbmeICB0jbPX6NSDeA1nc4CCN+jsIHqBCJnTKWnUgLVI3xj+7/F4ecBZajnXr6rSR7kQAGrG9HMcMShlzU5Ltqdg78CkuUQRrk2zuQ99gOnikecWBgBfR+EaXh/3Utpu3EQbg5bzRZEAUKQppnm2JoNS6KVcJAhc2CghBBmlAAD33VWRpiiFCDal1IzpaZ69UEII7l23YLy/4Jr4oJ/lW+vXziZVQghucWw3cSiaa5JRilKID//X/bt6Azz+a5L1AimqAAAAAElFTkSuQmCC"
    },
    CIRCLE_FIRE: {
        name: "Circle of fire",
        description: "An expanding circle of burning air",
        meta: {
            action_type: 4,
            action_max_uses: 15,
            action_mana_drain: 20,
            fire_rate_wait: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABuklEQVR4nLWTPWvbUBSGn1s8mahj0sZk0GAwXiLQ4NWbiL8gJgHHSwYPAo8duqR4CPZfCHjIkCUOxBCTOinZCp08BJQhXkTrwag0Xg1ZTwdLslR7KaUHhKSr+36c9+jC/6hhLiUy7cauYS4l6/a+ib60y3mRaVeK/RY8PiwW/Xux30KmXWmX82uJQrAMqvJsZ+TZzogMqjLMpUQG1fDbnyQqeJBpVwLF8ZcxE2eOs5kGwJi56IYGQHYvC6aF2rFV2ELYXwSsGxquSmLMXEojT02c+UpOAImgvxVlx+VidK+oFAS8cA3GZAPMjh0PEcDZTOOqJKWRpxr1mlzc3qvjSkGCNibOHExrzRRMi4kzx1VJDl+eaNRrcn55pRr1miQ23nK9tcvNz3eLLIIJxQgeH9ANjbS8cr21y/nllTquFARg//s30vKKMXMXIUYqAXB3cEqx3yIL4OdApSCHL0+Ubj31wc4Ijj8J3/7dwenSQWnkqSirbmh8fP8j/D+CqQROo5hEAOo0e5ycHS1cmJa/cYzOL9jWltZNi06zF4rFlNvlvJycHS2VQiJC651mj0+fv8ZwK/U3h+mf6zcGkvCWPxg0lwAAAABJRU5ErkJggg=="
    },
    CIRCLE_ACID: {
        name: "Circle of acid",
        description: "An expanding circle of dripping acid",
        meta: {
            action_type: 4,
            action_max_uses: 4,
            action_mana_drain: 40,
            fire_rate_wait: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABn0lEQVR4nKWTsWobQRRFzxiBB8nZyj+wBjfTRL0KGVK4WBUywo4axYXAH5DKxC4t0DcIVFhqHITJFt7SIBcLSedqGoHmB1ItK7FFYFLIO8lqQxq9ZuAx775779yBHUv8q/npybfNYFjovUTXTFqmdL/Q6N19sCc3VwDEhDRouzOv+WDE9PbZzVW2h2NCUq03IAp+Rd+JAxzY2wKbgziksf1q882p1kiTYF+PNjTrSzLfA+BAKRq06YuPAmAv17w9nPke64VE1JdMWkZIk5R8cgDNYFjaLE3C430kVjMF4Hqp1sSE5CbvbbtqX49YLySTlhG9ftc+3keicxnYXIY0ScFUB9CgjTQJ64Wkdq7p9bt2On4QvX7XVivvWM0U+98OyXyPmLAMEBOS+R7V44zVTDEdP4jOZWABxNkPqscZor7kQKkC4wpsQtIMhsQKUjQ1k9AhsLVzzaRlxMXn91aykXD6Rv8luqb0jH9nAHCG/u8ZXZDmgxEnN1fE6k9oUjT4PwHPUW/QZj4YFSUAeTxdlAFO1RdnWO78dpR3/kw7129OO8nACikODAAAAABJRU5ErkJggg=="
    },
    CIRCLE_OIL: {
        name: "Circle of oil",
        description: "An expanding circle of slick oil",
        meta: {
            action_type: 4,
            action_max_uses: 15,
            action_mana_drain: 20,
            fire_rate_wait: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlElEQVR4nKWTMUscQRiGn1m8g2MKObL7Sa5S0lwhSwo7ET2Ra/IT/Csp8wPyJ65OlWYRVxE7i2QhcCAhVorfrUgCg+AVk2Kd0fVSBO6DYYePed/3m3fehSXL/Kv58cOaXx/ttnpX5Smfvt4unG81Dse5H42HAKjWiKTxG6ospkyKKuJWXoNVa/S6jgC9vAOIZE8CPpBEgqAcyxl+fHsiurxrkY7GQyZFBUAS7gzw89dtc9AZsJ4b1yWzhs9fvhtc+/oBkwCsj3ZRrXn4fQ/OMHMenOH4/MJU2gGIPb2uUa0JJq/wqmauUZ4UF+Zgb8cfnZyZ/e0tn9k52IbkpalJ2Iik4Aw3rksucwL4YG/HJ50elXaYKWA9qs9+xAlUa7Cet/aRSrscnzfKAJv9P8ycJ7MGGbxpTZxAExKRlN5qn0wglzn721s+lzlHJ2cG24CxHpEUkZSr8vSZYCFh1pNvPAJNPsKrxElfYKIHZTHl3cYavdU+m++HyCAF68mkIZRB2ixJKYtp1PqvKEeTWYzy0j/T0vUXHAvDlL+ip60AAAAASUVORK5CYII="
    },
    CIRCLE_WATER: {
        name: "Circle of water",
        description: "An expanding circle of water",
        meta: {
            action_type: 4,
            action_max_uses: 15,
            action_mana_drain: 20,
            fire_rate_wait: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlklEQVR4nKWTMUsrQRSFv4lTLbxq2VImmCrLI4UE0sU/YCMRJMULgvkBL7xSAgGx1tJCQbSQgJJC/4DphLCFhLUyZHnlsu1WG8ZCZ8hm5fHQ0wxc7j1z5twzQmvNdyA/K24eTfThjp+rHY9Cgn5drPaKZQXrB9f6tNcCIMkcXJna0+D3yR1/L35ZotLqcJI5jIKY8XNEkjmc3U9IMseSnvZarB9c21utgrtpqk3T+DkijGLi+QsAXrmKrzwAmjWFK1NaPx1hFWweTQrDvvJoLIZ45SpBvy7CKC74ZE083PELN4dAcPkgdve3NTzYmlFhTC6xgnj+QmMxJOjXRafb1rcfJOYZYRTnTLUErkwJo5jGYsisMqDTbeur8xvR6ba1I3+w8Trg8XGMrzxrao4gyRx85fG0tsfG64Cr85sP+TBVf3ha28MrV2nWVE5xCd5D4sqUZk2xtdVkVhmwu7+tZ5V3Il95dhOuTHFlyvEoLK7RGGlgDP3XGi3BcpBMApfJjHRXprk0/leUzSAUoyw++41f/kxfwRvXmu5kk5VKlAAAAABJRU5ErkJggg=="
    },
    MATERIAL_WATER: {
        name: "Water",
        description: "Transmute drops of water from nothing",
        meta: {
            action_type: 4,
            action_mana_drain: 0,
            fire_rate_wait: -15,
            reload_time: -10,
            action_speed: 129
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAjElEQVR4nGNgGBggk/dSJu8lVikWTKVfHh6FsGPWfGZgYFgSwousgAlTNY+8NQMDg4MdF7I2LBqQVWNai0UD3CUQcODQNzQGigasXjxw6BtEtYMdF1wBE6Y6rDrRbXgySRyrw+CCcAUIG+DeRdODFhKMyHLIkYBsENx4dD88mSSOFqxoqnECPEmD9gAAObdEXw8Y4PIAAAAASUVORK5CYII="
    },
    MATERIAL_OIL: {
        name: "Oil",
        description: "Transmute drops of oil from nothing",
        meta: {
            action_type: 4,
            action_mana_drain: 0,
            fire_rate_wait: -15,
            reload_time: -10,
            action_speed: 129
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAmElEQVR4nGNgGBgQF2cWF2eGVYoRU+mLF58kJPgYGBgUFIQYGBiamnYgK2DCr5qBgaGuzgO7BmTVmNZi0fDixSdkRQ8evENjoGjA6sUHD95BVCsoCMEVMGGqw6oTzkaEkpubBoSB6Y0XLz7t2nUD3Qa4OjTPoIUESjxAAgrNeAkJvkWLTsG5KH5YtOgUmnvQVOMEeJIG7QEA25s9PFunoVEAAAAASUVORK5CYII="
    },
    MATERIAL_BLOOD: {
        name: "Blood",
        description: "Blood blood blood",
        meta: {
            action_type: 4,
            action_max_uses: 250,
            action_mana_drain: 0,
            fire_rate_wait: -15,
            reload_time: -10,
            action_speed: 129
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+0lEQVR4nMWTvW3DMBBGn8LI6t0ICKAVAq6QMhOki2czu0wQqMoKhFcQEIAu3BkILRB0dRRpypWLXKM73H2fHv+aGCOPxNNDauBZku/drmqe3E8E2PZvzW3vfb8vDW6Fs5sACBacNrHth1WjagnuYOLfuIiVhrYfCqK7Bu5gYrAQ6JI4j9lNlUlhcLEdgQ6FTyYinN1E2w+cx+M6wWS+4kb71JBcTIKF83hko31BURDIsOSBbqmFzFJEMhg+Pxr5swhzCoVPe5KfRkmQrTsJ9VLLHq0SCIUMyPdiy1pIVw3yAUGWE1H4Sgx3bqIM/hoTlYaX11oo0fz7a7wCeQ97P/FZ8pcAAAAASUVORK5CYII="
    },
    MATERIAL_ACID: {
        name: "Acid",
        description: "Transmute drops of acid from nothing",
        meta: {
            action_type: 4,
            action_mana_drain: 0,
            fire_rate_wait: -15,
            reload_time: -10,
            action_speed: 129
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAo0lEQVR4nGNgGNTAfb3Jf/f1Jv/xqWHBpfHK6Y9w/uyvMf8ZGBgYUrmXMKKrZcKlWceUn4GBgYEhxE0DwyCcBqBrxuU6nAYgOxsG1uy6gZWNYQC+wFqz6wZcc4ibBopajDAgBNBdgRKq0lWqcJNxhcOV0x8ZnrbdhutDcQGyJmzhgS2AMeIVPQ2gW7Az8AyKHoww2Bl4hhGb87FpJgiIScoDDwBhGE0CgShL3gAAAABJRU5ErkJggg=="
    },
    MATERIAL_CEMENT: {
        name: "Cement",
        description: "Transmute drops of wet cement from nothing",
        meta: {
            action_type: 4,
            action_mana_drain: 0,
            fire_rate_wait: -15,
            reload_time: -10,
            action_speed: 129
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA10lEQVR4nMWTza2EMBCD7WjP0wMdQEMUR0MwFdBCSAH4nWZfftjTHjZSpESJPZ8nQEn4ZqSv1ABesdi2bTg8z1MAME0T+7N1XVuDXlhKAQBIgrvLzB6Nhgjuruu63mKSMLOG6KOBu0sSYpJtwVLKYNJEuO8bAEAS8TokEXHMDDnnZ4J935XSP1Csw0gScs5IKTUUTYT6m4gY9b4mGwyWZWFUjks1Bcl3T+rXaHrQu/dVo0ePBEFRZ65FsQ/SR4P6QiAHAclBPEToTY7jEEnM8zwIY/Dnf+MfmS+N+fqSSHwAAAAASUVORK5CYII="
    },
    TELEPORT_PROJECTILE: {
        name: "Teleport bolt",
        description: "A magical bolt that moves you wherever it ends up flying",
        meta: {
            action_type: 0,
            action_mana_drain: 40,
            fire_rate_wait: 3,
            action_speed: 800,
            spread_degrees: -2.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoklEQVR4nL1PuxXCMBDTeQIX9ghehT5bwESwRXpWuRHswhscBTFPJCZ8/B7qpHfSScA/YWYbzY2Gyq+fRWTbQFUn5jnns5k9jgFYM7fQtxPI3NWl99l7f2AeQjh2AgQAnKpOKaWZzTHGE5tlVUNExJYNjs0AUGu9Mi+lXF5MuDdYJjR9Zs5N2MRwqoqU0pO45ntw3xzvotWmOZ81GH08HDCMG4dPOJ4Zl8MrAAAAAElFTkSuQmCC"
    },
    TELEPORT_PROJECTILE_SHORT: {
        name: "Small Teleport Bolt",
        description: "A shortlived magical bolt that moves you wherever it ends up flying",
        meta: {
            action_type: 0,
            action_mana_drain: 20,
            action_speed: 1350,
            spread_degrees: -2.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbklEQVR4nO2QzQ2AIAxGX52AA6uYsJTLuF5HYIh6UIxAMTFeeRfSJnw/hYmLqiaAnPNmZtgJAOUtLM7nV3ERqWfPOYSwAsQYd0dA2l0XW1WTmdlV4eaqUHVoEwAMUwzdR0mejq1zoTviV34LTOAAoXBLULXcrRkAAAAASUVORK5CYII="
    },
    TELEPORT_PROJECTILE_STATIC: {
        name: "Return",
        description: "After a period of time, you'll be returned to where you cast this spell",
        meta: {
            action_type: 0,
            action_mana_drain: 40,
            fire_rate_wait: 3,
            spread_degrees: -2.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkklEQVR4nK2R0RGEIAxEs/SSgq5SC0ox8UOWiyHiOd7OOEDIPhcQ+bfM7JNr7u5xjGorGA0A0EvIIG6Uf1bVrRsmOJmNZjZHM6EApm+ki6aYIgOvNO7AzDjd0npSvAMeQVT11MQ1e91d/JAAAOstNlf6PkBdr3cXkQMAI8GdGSlGP4L/BMjmxwnuYI8AlV4DXmsHvLxTq4tK+ssAAAAASUVORK5CYII="
    },
    SWAPPER_PROJECTILE: {
        name: "Swapper",
        description: "It was theorized that the source of qualia would be transferred \u2026But it turns out it was the whole body all along.",
        meta: {
            action_type: 0,
            action_mana_drain: 5,
            fire_rate_wait: 3,
            action_speed: 800,
            spread_degrees: -2.0,
            damage_critical_chance: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArklEQVR4nKWTOxICIRBEX1NmXsgDGXMYYr2P5VWWVNMxcBGW31q1k0zRPT1AD8jMOBLukBo41cDt8TJAwDC/n3d574cn0J952GDPlA3fNLhezqqxGd94EEIAIN1xxDcnkJSEVq53+fIdmBn2jQ024x3AsiysqOXaXJWEPV5rNkkqRcW6fgu/EsAcQIyx67yyEaPJqBmjKvc6Zs7HWEa6UdKU5iVs2qDevVtz9Dt/AOL3aSqI3k4qAAAAAElFTkSuQmCC"
    },
    TELEPORT_PROJECTILE_CLOSER: {
        name: "Homebringer Teleport Bolt",
        description: "Brings the target hit closer to you",
        meta: {
            action_type: 0,
            action_mana_drain: 20,
            action_speed: 800,
            spread_degrees: -2.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuklEQVR4nK2S0Q3CMAxE76p+M0W6AMouDAJjlD1gl4oF4gX4ZYHjp66iym1AcD9RTtbz2QnwT0mCpCxpubfURaaZjQBAsgnoq+55lSaTnKIkNZh1cSllXHcYhuHSjAEApZRRUp5POSyCbsoBDgGA+3N/k31kppRuZgaHnLDsQQBIEpJAMn4FAHgc0nmvsy+yW5kTAJjZdHzZlbPmJD6K9MkHcXmxKtX+5ghVqvA3ud8EtGBfASL9DPhZb6Uae0/DOapYAAAAAElFTkSuQmCC"
    },
    NUKE: {
        name: "Nuke",
        description: "Take cover!",
        meta: {
            action_type: 0,
            action_max_uses: 1,
            action_mana_drain: 200,
            fire_rate_wait: 20,
            reload_time: 600,
            action_speed: 300,
            speed_multiplier: 0.75,
            action_projectile: 3.0,
            action_explosion: 10.0,
            explosion_radius: 250.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA80lEQVR4nMWToY7CQBRFz9vUoqqaIKowaByp2X4BgtQRJMGtKgJVsVWrIPxCwzcUQYPjJypIMKBwmFlBOky3QLYguGrm5d377tyXEaUUr+DjJTZgAWznopqODYDTO0gdASmeYIrUERIzg+1c9KXp2P8S0QJxHCsA13UrTVmWMfWXRGkfz/MACIJAwAgxDMO70wry1F/qWpIkCv6EOGiVievzDECTLw7KPVZx2O2P1dF21cH6XFawADpjJXDNAcpZRGmfYXtBlI60gzzPgRsh3sJnY8LPJuCrm7A6fQPXzO6u0XT2CHoLz5DB2EJdYgF5+2/8BR0Eaal/TDYyAAAAAElFTkSuQmCC"
    },
    NUKE_GIGA: {
        name: "Giga Nuke",
        description: "What do you expect?",
        meta: {
            action_type: 0,
            action_max_uses: 1,
            action_mana_drain: 500,
            fire_rate_wait: 50,
            reload_time: 800,
            action_speed: 900,
            speed_multiplier: 0.5,
            action_projectile: 10.0,
            action_explosion: 20.0,
            explosion_radius: 400.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABR0lEQVR4nKWTsWvCQBTGfweluBSHTIKIY2nAP8FS6lZwdHfoIHRKljhIFIdm0SkgnRwLQhehm1Ca0c0hxaUQpNipg5t0uQ72rtEmgu0HD264993vcd8TbuhYfKtjen0OlJj6yHzOAODu9NoGaJ/daiMhBFLKdAc3dKypj1w+GLrc0LGklLpRnZNKSClpvzStqyevp0zzOUPTpKljen0pJcINHSszzvYAisViasP58Q3dSY1WZcTzp8+8NLM7ptfXBJlxtrfPIAgCWpUR3UmNcrkMwLw0s/9MoLT1C3HFL6URABwBvL1//H5yx1M1bwh+DLZGUEoaJQgC6uaAYdjQBFEUIWCThV2TXV2eNBmGDermgFfjniiKWFdXdiJBkhaLhSYoFAqsq6vtb4wHCeDxwtkbJB13FeV4HRTlqY/eFPXqIcsk/rvOX94T6a8Lmo43AAAAAElFTkSuQmCC"
    },
    FIREWORK: {
        name: "Fireworks!",
        description: "A fiery, explosive projectile",
        meta: {
            action_type: 0,
            action_max_uses: 25,
            action_mana_drain: 70,
            fire_rate_wait: 60
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArklEQVR4nGNgoAXIOK3wn1i1TNg06Zv44jTsf+Yr3IZP/5/7Hwam/8/9j80l/5d/wm3AfzSAbvP/5Z8gEss//cdwScZphf/oLsBqCT4XwLwBMxCrAfjCAF0TKbGBFyAb9P///0KsikKWQQINRuNS/P///2ScNh1/9B8z2pAMwWYgPCGFLPv/31KOkRHZBVDwCQcbP0CzORmZJtkQJAO00NUwoQuggZ1Q+jhJNpMCAHAwnJ7GRlAeAAAAAElFTkSuQmCC"
    },
    SUMMON_WANDGHOST: {
        name: "Summon Taikasauva",
        description: "Summons a possessed wand to aid you",
        meta: {
            action_type: 6,
            action_max_uses: 1,
            action_mana_drain: 300
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoklEQVR4nGNgoDX4///ff7I16xdKkaa54NKhbYQ0EzQUZkj9dvH/yBr0C6X+9x358v///3//cRpScOnQtsPf312Caa7fLv4fhmGaYRjDEJhmsl1w+Pu7S8T4Fas4zHaiFKMBJhhj7e0rT9AlL/Y/Y+w78gWvIXADglV1ZLApKLLhYSTkCgYGBtQ0QApgQuZgCweSLEKPSooAzBCYq6hiKDYAAFoSiTpKJy1YAAAAAElFTkSuQmCC"
    },
    TOUCH_GOLD: {
        name: "Touch of Gold",
        description: "Transmutes everything in a short radius into gold, including walls, creatures... and you",
        meta: {
            action_type: 4,
            action_max_uses: 1,
            action_mana_drain: 300
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWUlEQVR4nGNgoBAw4pL4fyflMopClTm6RJn4/07KZXTN+MTx2kqSGmI0Y1PLRKwmok1EF8cnh9cFyBrxeY9iL+A0ADneiUoDAxsLpLiCqNRISlKmfmYiFQAAzG5NdeF9B+EAAAAASUVORK5CYII="
    },
    TOUCH_WATER: {
        name: "Touch of Water",
        description: "Transmutes everything in a short radius into water, including walls, creatures... and you",
        meta: {
            action_type: 4,
            action_max_uses: 5,
            action_mana_drain: 280
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbElEQVR4nGNgoBAw4pIwq3n2GJl/qkVKligTzWqePUbXjE8cr60kqSFGMza1LKQahDUskDXhMwCnOnRNuAIRG58Jn3OJBoRsJMZFeL2BTw4jFmDgVIuULEwhSakQnU9MAGMYQkpSpn5mIhUAADS8YPI3TybMAAAAAElFTkSuQmCC"
    },
    TOUCH_OIL: {
        name: "Touch of Oil",
        description: "Transmutes everything in a short radius into oil, including walls, creatures... and you",
        meta: {
            action_type: 4,
            action_max_uses: 5,
            action_mana_drain: 260
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAa0lEQVR4nGNgoBAw4pKYUBjwGJlf0L9BligTJxQGPEbXjE8cr63YNOE0BJ9CfHJMeJ1ELMDlLHz+homz4DOYmJDH8AJZsQCTwBVw2NgwmgnmVIJxjGYhhveQTSbkBaLTAllqSA1E6mcmUgEAwUZlkQVrHyMAAAAASUVORK5CYII="
    },
    TOUCH_ALCOHOL: {
        name: "Touch of Spirits",
        description: "Transmutes everything in a short radius into alcohol, including walls, creatures... and you",
        meta: {
            action_type: 4,
            action_max_uses: 5,
            action_mana_drain: 240
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAb0lEQVR4nGNgoBAw4pK4MtHrMTJfJ3+bLFEmXpno9RhdMz5xvLaSpIYYzdjUMmGTJNkLMAlkBYTYMBrDBaQCFmSOTv42WVzOhImjRyeGC5AVoPsbb1pAtxlXGKDzKQ4Dgq7AZztOQ0hJB9TPTKQCAB0/ZSu2mwv/AAAAAElFTkSuQmCC"
    },
    TOUCH_PISS: {
        name: "Touch of Gold?",
        description: "Transmutes everything in a short radius into urine, including walls, creatures... and you",
        meta: {
            action_type: 4,
            action_max_uses: 4,
            action_mana_drain: 190
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZElEQVR4nGNgoBAw4pL4fyflMopClTm6RJn4/07KZXTN+MTx2kqSGlJsRRZjImQjUQCf7YRcQbELsBpAyN8EDSDZBYwqc3SJiUJk18ASFlYXYEt1RKVEihISsgJSEhX1MxOpAACoN1ubM1SBAQAAAABJRU5ErkJggg=="
    },
    TOUCH_GRASS: {
        name: "Touch of Grass",
        description: "Transmutes everything in a short radius into Earth, including walls, creatures... and you. Unless\u2026",
        meta: {
            action_type: 4,
            action_max_uses: 4,
            action_mana_drain: 190
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjUlEQVR4nKVTyw6AIAwrxu/zYPxM48EfnAcD2UpHNOxExvpY0WJmmKkVAPb7UHfMXHjg2s6XIAEyQPaZwJQSAcPM8hHMRG290QojglaVgNUzJz4HA1AWMRQsErgjViGqs3IgCbyCV0wDritktrNqhOoVvJvso+oc/HER1lEZeFXOpHOjVvDBqX5szv7OD58eIzJC5vy6AAAAAElFTkSuQmCC"
    },
    TOUCH_BLOOD: {
        name: "Touch of Blood",
        description: "Transmutes everything in a short radius into blood, including walls, creatures... and you",
        meta: {
            action_type: 4,
            action_max_uses: 3,
            action_mana_drain: 270
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZ0lEQVR4nGNgoBAw4pLYaGp6A5nvf/q0BlEmbjQ1vYGuGZ84XltJUkOMZmxqmcjRRLbtyOpgbBZSDdpoanoDI0YocQHeMECOOqw2E3IFvjQBY7OgSyIDolMfPleQrIbUpEz9zEQqAAAdkkiwRccTIQAAAABJRU5ErkJggg=="
    },
    TOUCH_SMOKE: {
        name: "Touch of Smoke",
        description: "Transmutes everything in a short radius into smoke, including walls, creatures... and you",
        meta: {
            action_type: 4,
            action_max_uses: 5,
            action_mana_drain: 230
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAY0lEQVR4nGNgoBAw4pLIrFz2GJk/vT1KligTMyuXPUbXjE8cr60kqSFGMza1TNgkSfYCTAJZASE2jMZwAVkA3QZivIDXBdjinGA6wOVnQvIsuFxAVkqkKCEhKyAlHVA/M5EKAOxvYwKy9d05AAAAAElFTkSuQmCC"
    },
    DESTRUCTION: {
        name: "Destruction",
        description: "Instantly decimates foes around you, at the cost of your HP",
        meta: {
            action_type: 1,
            action_max_uses: 5,
            action_mana_drain: 240,
            fire_rate_wait: 150,
            reload_time: 240
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyElEQVR4nJVS2w3CMAy8IrZoBUPkiz9mqboEDNApEKuUP74YolIYoxw/uHUc98FJleLkzva5Bn7o20iS7NtIuatDM56FI58AljCXxAol3iwmyaFzhFYsj177tgAA7OXweSBDVkmhDg3vr1uRkIcu9Sexbr8ODaU722U2KA3PJgAUfRt5vFaFbbk6ldidJ3vx+QYAHC5lEkNnnYNOnO2B9e7NQPx7drOsS3uw9FdgiVv3YMRaNWvVFWuiHZy7/57YEr2Eq/7/efsCrFDdmR4A/38AAAAASUVORK5CYII="
    },
    MASS_POLYMORPH: {
        name: "Muodonmuutos",
        description: "Baa",
        meta: {
            action_type: 1,
            action_max_uses: 3,
            action_mana_drain: 220,
            fire_rate_wait: 140,
            reload_time: 240
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAvUlEQVR4nGNgGDDw//+/////YYozYVV0+/ZtuAgBI////3f79m04GxlBlDESNgkJMDIysRCj7sOSTAEBHoQf4C7GBebMOcLAwNDTswPqJIgGFRXlO3fuQhi4bGD07WViYGBQVVVlYGBAU33nzl2ICIT88OEL1BsQ6v3i9DcWJXAj4bbBAcRQBgYGhKdFTvQIxs6EOO/OnbsiJ3oYGBgEY2dO9zZG1gnVAA+EPQURDAwMmVvP/t9cjD8kBg8AACc4bF0ZSmwtAAAAAElFTkSuQmCC"
    },
    BURST_2: {
        name: "Double spell",
        description: "Simultaneously casts 2 spells",
        meta: {
            action_type: 3,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAiklEQVR4nMWR0Q0EIQhE2e3BPiyC6cjEGqwJi7APmrgPEpcF7/Ny84UKvnEk+rNEJOxcfqGqpZRjNwAr7t2qqlZ8Q/XeiegSkVqrPzNINmOQG8BaKxjLhDnny1KQ0b3GGM9AhrTW9pVBZ0LQjugZyBBmPkLOBD8cxl4ft6MEYO9mZu8nKmef4/q9PtkxQWerYM6bAAAAAElFTkSuQmCC"
    },
    BURST_3: {
        name: "Triple spell",
        description: "Simultaneously casts 3 spells",
        meta: {
            action_type: 3,
            action_mana_drain: 2
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoUlEQVR4nNWSzRFDERSFD5MW7BVDBaqw14smqIAObPShCFlJ/GVenpksclZc957zMYC/krW2zjUyF0oplTFGUkpLs3MOnHMAgNaaAADtB0spta2dc1/R0DZw4yaDKADknJcDYwyuKF4GJ4oxvg2klOQuhfd+fMST9MHgE4UQYqFo6ZcEO8M+HQAe/UZKSUIIdW4WQmzTt+oNZimljv/L7/QECkZPbhfQi2EAAAAASUVORK5CYII="
    },
    BURST_4: {
        name: "Quadruple spell",
        description: "Simultaneously casts 4 spells",
        meta: {
            action_type: 3,
            action_mana_drain: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVR4nNWRsRGDMAxFHxyDUDACGwATwBL0FIxAwShmAjSEB/AGbtjAaYLjBAOXLnmVT2dJz/7w9ySfBWutm+eZrut8bZom6roGQERYlsX3pWGjtdYBDMOAUiq6cds2qqpybds6gGxv/ka7LEt/TgG01odLVxYh6e2NE4wxrwFN0yQxi51xHBERlFJv+rcGZ88wxvgk/IA7izMuDbTWPv/YdnjGGFqs6+ojFRGAw5CQLFbcfzjPc/q+TwBXFMVh+2/wABHBWRNgwQkyAAAAAElFTkSuQmCC"
    },
    BURST_8: {
        name: "Octuple spell",
        description: "Simultaneously cast 8 spells",
        meta: {
            action_type: 3,
            action_mana_drain: 30
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPUlEQVR4nKWSMa7CMBBEnxFCQqKgo3VBkZLCV8gJuAw34RLOCUhPAYpSoRQRoqIxAhdGSDSm+Y7iJPyGadar9c7ujA0/QnwrHA4HH85VVYn7/c7j8eD5fHI+n8myDIBRt9EYgzHGSymRUnI8HkmSxF+vV79YLHxRFN5a69frtQcYDwz37WS5XPYuKKWac2+DsiyjfLVaAVDX9aDUHkGapqJLYq1ls9mQ53kzPRBGEtrGaa0H1w/N0+lUNATGGGhp11qjlEJrjZSSPM97ZK/XK5Lwr3HW2ib+rS6iZ/xmXBdKKd7vd/R3BMB+v8c559uNZVkyn8/RWkfasyyLCEYAzrnBiaEpxGBcjwBgNptFxaF3D8a1MQZI05Tdbhd5cblcGjO7xrXRW2m73XoA55y43W4e4HQ6iclkwhDBz/gAQ7Oiq3grWd4AAAAASUVORK5CYII="
    },
    BURST_X: {
        name: "Myriad Spell",
        description: "Simultaneously casts as many spells as you have left uncast in your wand",
        meta: {
            action_type: 3,
            action_max_uses: 30,
            action_mana_drain: 50
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4klEQVR4nM1Su63CQBCctV4LrsJkUIKvBYgIIYXA0tXg7L0UKjAt3JZgJAcmpoArYgisQ/7csyCClU7a7+3MaIGvN+cc5+oyTnjvmaapxIaNMZP+pD/ovWfw/0NjrR3UEuccYwPjRgBQVZRlOUCRGGOkaZrJtqIooKrPOM9zbO9dzNOBJDmgMGeqittmhayqwdOB2P3itllN+QUd+s9ay8C9XS9Jku16+aT3MoLtXZFVNXA+Iqtq9D95CUV/81saBIFFRBaXqwCA7P9ERDo/hiLABjr1YwcU7CeWHA3MnvLn7QEPaqlk9HMFBAAAAABJRU5ErkJggg=="
    },
    SCATTER_2: {
        name: "Double scatter spell",
        description: "Simultaneously casts 2 spells with low accuracy",
        meta: {
            action_type: 3,
            action_mana_drain: 0,
            spread_degrees: 10.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAL0lEQVR4nGNgGDng/////78f9v9Plsb///8PBY0MDAwMZPmRqi4Y/AZRJYyGIQAAYX5A4Zvotb4AAAAASUVORK5CYII="
    },
    SCATTER_3: {
        name: "Triple scatter spell",
        description: "Simultaneously casts 3 spells with low accuracy",
        meta: {
            action_type: 3,
            action_mana_drain: 1,
            spread_degrees: 20.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMElEQVR4nGNgoAf4ftj/P9ma////P6qZFIAe2t8P+/9HBwRjhCIXjBqCG1CUF2gOAHglRvF5kmLzAAAAAElFTkSuQmCC"
    },
    SCATTER_4: {
        name: "Quadruple scatter spell",
        description: "Simultaneously casts 4 spells with low accuracy",
        meta: {
            action_type: 3,
            action_mana_drain: 2,
            spread_degrees: 40.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVR4nGNgoDX4ftj/P9ma////P8g0/////z9BL2HT/B8KCNqMbjrRGrEZRLZGil1AURjgMwQmTnTCoigdUNUQivICXQAAeO9g7RgpgWcAAAAASUVORK5CYII="
    },
    I_SHAPE: {
        name: "Formation - behind your back",
        description: "Casts two spells: one ahead of and one behind the caster",
        meta: {
            action_type: 3,
            action_mana_drain: 0,
            spread_degrees: -5.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAJklEQVR4nGNgGAU0Av///////z8yF00WWQ0TphwjIyNW7iigIQAA0PAX8QO5QrQAAAAASUVORK5CYII="
    },
    Y_SHAPE: {
        name: "Formation - bifurcated",
        description: "Casts 2 spells in a bifurcated pattern",
        meta: {
            action_type: 3,
            action_mana_drain: 2,
            spread_degrees: -8.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAALklEQVR4nGNgoAX4////////IWwmgkpJMHXIKKUXINNJQ0gbCWmJkZGRHHuQAQAVfCnegqjAUwAAAABJRU5ErkJggg=="
    },
    T_SHAPE: {
        name: "Formation - above and below",
        description: "Casts 3 spells - ahead, above and below the caster",
        meta: {
            action_type: 3,
            action_mana_drain: 3,
            spread_degrees: -8.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAMklEQVR4nGNgIA/8////////xKhkItMGkgGR7hkogOw8OBt7MGJVik8DLQHtrRtMaQkAkjgp25WMEB8AAAAASUVORK5CYII="
    },
    W_SHAPE: {
        name: "Formation - trifurcated",
        description: "Casts 3 spells in a trifurcated pattern",
        meta: {
            action_type: 3,
            action_mana_drain: 3,
            spread_degrees: -5.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAN0lEQVR4nGNgoAX4////////IWwmgkpJMHXIKMWjE42NbigepVg0kOmkIaSNhLTEyMhIjj3IAAA8h0TDze9gDQAAAABJRU5ErkJggg=="
    },
    CIRCLE_SHAPE: {
        name: "Formation - hexagon",
        description: "Casts 6 spells in a hexagonal pattern",
        meta: {
            action_type: 3,
            action_mana_drain: 6,
            spread_degrees: -15.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAO0lEQVR4nGNgoAT8////////+EWYKLKBTAB3A5pj6OwGiO1Y3QCXgjBQQomRkRFTA1ZBOgNaBuvgSEsAeDI11yS8AH8AAAAASUVORK5CYII="
    },
    PENTAGRAM_SHAPE: {
        name: "Formation - pentagon",
        description: "Casts 5 spells in a pentagonal pattern",
        meta: {
            action_type: 3,
            action_mana_drain: 5,
            spread_degrees: -12.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOUlEQVR4nGNgoAr4////////sUoxUccGkgEu9yCkCahAUkOZH7DaQ9DyQQfQXEw9D+CPCmRZ2qclANzhLNpMXg2HAAAAAElFTkSuQmCC"
    },
    I_SHOT: {
        name: "Iplicate Spell",
        description: "Casts a copy of a projectile behind you, but the copy still cost mana",
        meta: {
            action_type: 6,
            action_max_uses: 30,
            action_mana_drain: 40
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYklEQVR4nO3PsQnAMAxE0RNkgkziEQQey537bBS4wgMkG2iUS2WI25DChV8pjg8ClkkwU8zUpz0z1fVjlFCUUN3rENYt6daw395lPxyCZMmsx9vVECUEAJbMmCk//ccXlgk8SjBRzWsUTCQAAAAASUVORK5CYII="
    },
    Y_SHOT: {
        name: "Yplicate Spell",
        description: "Casts a copy of a projectile in a bifurcated pattern, but the copy still cost mana",
        meta: {
            action_type: 6,
            action_max_uses: 30,
            action_mana_drain: 40
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjklEQVR4nM2Tyw2AMAxDHcQEDMAMrIDYgFU4cutA3QCVEbpBJRYxpyDEt6UX3t2OHSVAIq5zdJ1jqm4TK2pSxorpeTn11SCMgQAgjYimAIB2auU17qeutra0tY0WbhVMZQgA/dI/R/svpjLUGlmkLvGWrJPdE8ZAPaYsY3qSnqdfKGINpBGZhzl58IljhRWie2DRyD/JGgAAAABJRU5ErkJggg=="
    },
    T_SHOT: {
        name: "Tiplicate Spell",
        description: "Casts copies of a projectile above and below you, but the copies still cost mana",
        meta: {
            action_type: 6,
            action_max_uses: 25,
            action_mana_drain: 60
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhUlEQVR4nNWTywnAMAxDldIJOkAhs2SDrJNboOtkBa/QDQJdRL00gf4gcU99ZyMZyQYOxAnFCaFBnLDQKzKoHJ/g2u9+E/i8RQ65W0SVwWNj4oRxigSANCemOdWBHDLLdtfGxqt6nCL95k0ZBgC7WAM05NSawevRaUKsaGs8tfDzX9C+8w7o6nQsYzrS1wAAAABJRU5ErkJggg=="
    },
    W_SHOT: {
        name: "Wuplicate Spell",
        description: "Casts copies of a projectile in a trifurcated pattern, but the copies still cost mana",
        meta: {
            action_type: 6,
            action_max_uses: 20,
            action_mana_drain: 70
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAo0lEQVR4nKVTyw2DMAx9rjpBB0BiA1ZAbMAqPXJD6jrZoAojZINIXeT15KgNBWz67u9rGXAiDpFxiPTyClmhIlcrmYk/XQ8F8pQJANKJaAoA6J+9HMY91TU0gaEJZmKpMN9mAsD4GvejwVCjTpGnTN2ivsTXiHUKdWofrQDblyhkFbBU2BzYO+I5Fw8+B/xLmIlk4uoXLlYB6USW++I2XqGu8AaoAo4gYeWo7AAAAABJRU5ErkJggg=="
    },
    QUAD_SHOT: {
        name: "Quplicate Spell",
        description: "Casts copies of a projectile in a tetragonal pattern, but the copies still cost mana",
        meta: {
            action_type: 6,
            action_max_uses: 20,
            action_mana_drain: 90
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAo0lEQVR4nM1TywnDMAx9lE6QTTKAQcRzeIDM4Jt97kYBHTJAs4FGUQ9FNP1EMT71gcGYZ70PNuCAIytHVo/jXjZ4Qy5d01uhm6/e5GC9r/0OylBUspyXeNS2ZPl5/sb/bNtUbc+RVbJoGYrqps+141/3k+lGIBDqVJHmBODVQZoT6lQRxgBaqC2CqbdG/oJZPyUewXJ7HPcdhDF0i//JX2hp+wHM5p6O1zw0JAAAAABJRU5ErkJggg=="
    },
    PENTA_SHOT: {
        name: "Peplicate Spell",
        description: "Casts 5 copies of a projectile in a pentagonal pattern, but the copies still cost mana",
        meta: {
            action_type: 6,
            action_max_uses: 20,
            action_mana_drain: 110
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR4nK2TvQ3CMBBGnxELZAGUFPSUlImyQdZJnZJVsgFyS5mewhELZISjcuQ4tjGIr7Lk9935fgwJ6VaLbrWkmKTZKhXk8FP0XMmUzr4qVqtMEjRv+E+1mt6Ib3b5o3tZ32oEEXVRCmA8jRtz6EXKRgVo7o1ys86PGYDyWgJQDdWOV6EabfbiXACwPBe6VxdlozK9Eb8HX5lD5yyFmhUb6So72xRoF2s37ty9D3H/+wu5X9fn3jo+tAxWmDfKAAAAAElFTkSuQmCC"
    },
    HEXA_SHOT: {
        name: "Heplicate Spell",
        description: "Casts 6 copies of a projectile in a hexagonal pattern, but the copies still cost mana",
        meta: {
            action_type: 6,
            action_max_uses: 20,
            action_mana_drain: 130
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0ElEQVR4nNVTsQ2DMBC8j7IAGYAudfAGIGcCeqagdMdAniCRPQKR6FJYygI06T+FBSKYEJMu19i6P9v/935gBiMNG2k4lg9EA6biTzwA7FZv/AVGGuaWg1S59a9/LWMQx3CrcMrx0n6OPeDTBoDiWtA0qFPN3bMLDk31ZKTh/JL7yM0vlBHpVHNyTAAA/b1H+ShpLOPkdfZs37tgawvKiJxyLCox8qIScMoxZUS2tmEdS+465bg5NKxTzXMPoroRa+IitrQx+Ilrqf3RLGwZ5xeYg75p6oZRDQAAAABJRU5ErkJggg=="
    },
    SPREAD_REDUCE: {
        name: "Reduce spread",
        description: "Reduces the spread of a spell",
        meta: {
            action_type: 2,
            action_mana_drain: 1,
            spread_degrees: -60.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAPUlEQVR4nGNgGBTg//9/////g7CZqGkqnMQJvh/2J6wIWSmmDeS4Cg2Q62kynUSCpzEBUcGKRzMNYppqAADp0y73/ZvW5QAAAABJRU5ErkJggg=="
    },
    HEAVY_SPREAD: {
        name: "Heavy spread",
        description: "Gives a projectile a much lower cast delay, but no respect to your aim",
        meta: {
            action_type: 2,
            action_mana_drain: 2,
            fire_rate_wait: -7,
            reload_time: -15,
            spread_degrees: 720
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAUklEQVR4nGNgGCjw//////gFaGXT7t27d+HVgE8BQc3YFMLYRGsmSyPMn7t3795Fsk2kuAhmOMEYo8gl+AIQr8GE4pvsWMAFyEq5RGuiWb7ABgDCaWQPPRUilwAAAABJRU5ErkJggg=="
    },
    RECHARGE: {
        name: "Reduce recharge time",
        description: "Reduces the time between spellcasts",
        meta: {
            action_type: 2,
            action_mana_drain: 12,
            fire_rate_wait: -10,
            reload_time: -20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAz0lEQVR4nLWSyxHDIAxE16nAITePW1BdasA1qSG14OEGdgfkBCPziSeZyR4R+5BWAP/SEULKOkJIPxlr9UBTbZ6dwxkjdu+hqgAAIsK6LMi15+s11aDy8hFCUtXEzFuuMfOmqsneaQC5zdo8glyKqlrIPXMNabroHg4kIiVUAHjcGUY6Y0QBqCrOGDE7h94ItjMiAgDs3l8vfcohh8fM23BUEbmsyUIsPG+qO5eF2JdscHebgoiket8WUI/QfkkDIiIQ0SQiTYjrsvS/9Ld6A2YjR18MRTfgAAAAAElFTkSuQmCC"
    },
    LIFETIME: {
        name: "Increase lifetime",
        description: "Increases the lifetime of a spell",
        meta: {
            action_type: 2,
            action_mana_drain: 40,
            fire_rate_wait: 13
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABYklEQVR4nK2TMWvCUBSFP8Wl4CBUirQdOmSw2MFB6aDdMnYoCP0LRXTo0KFD59JRiuLi4BYpCP4Ah0LiZAaHShwcHEKRaiGDkPF1sAl5hlBKe5b77uO8c8+93Ad/RGz3olQbC2dpksoU8OKoVfR5uuWKi9M9P4/vCizMTmSuW67Ipjfolit+tJartCXS9dOnAFitViKYh1rIVdoilSn4ubM0mfarkS1IKNXGQtM0oVuuODq/EbrlCk3TRKk29t14lT3Eg4/r5TkA2fRGiguzgyfycr8fCwnkKm3/saqqkqu7xisA9fI8NBeABEAqU+A4f+ZX9JC/fACg120AkDLeQm0nvIM9GWAHHBwcnvDxvqDXbWBPBt8sJVrgOH8lOXh+vAW2c8iqKrN1EqIcOEsTezKXHATFhsMhW54TEogDTPvVWNNQJPJubBqKtA+SAMCoVfRFZuukFJuGIv2HIH69if+OL0gno5JugeVrAAAAAElFTkSuQmCC"
    },
    LIFETIME_DOWN: {
        name: "Reduce lifetime",
        description: "Reduces the lifetime of a spell",
        meta: {
            action_type: 2,
            action_mana_drain: 10,
            fire_rate_wait: -15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABU0lEQVR4nLWTMUgCYRiGHyXB7YIchJwKnGoSJbhNEJpFh8aWJhGnhmjMNURKmtoPpVkQbvsXzUkXnW840OW2A4evwe7nzrMoom/5eP/73vd/v5f/4I+V2D2YmDVRGw8zZRD0ohroOafakNzbk8bJXYGeu/gWH99c/cxap1SRMHaqDQFYrVYSxrEVOqWKmClDY7XxaI1HCQAZKlkX8mSmSxKXZozLxKzJzLJEhkquT89FhkpmliUTs6bdyFBFnCXD5HSzDsC6kI/0nrsgENm9ORnYDsjZcjni6vHuAYB0sx7LBeAAwEwZnBk5fWNQtxdbsdfnFwD8UDaxFeaeg2vb+sPJ4ZEmzz2HuefEyNoBEHNw324D2xyybJN//0pAbTzSngO2ozMIi7m2jfs5t3eF1niU8Lt9Pbyv+92+fg97MyiqgRbJTJeR7nf7kf8hXL96if9SH3K6n4uu2rv8AAAAAElFTkSuQmCC"
    },
    NOLLA: {
        name: "Nolla",
        description: "The duration of a projectile is set to zero",
        meta: {
            action_type: 2,
            action_mana_drain: 1,
            fire_rate_wait: -15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArElEQVR4nK2TwRHDIAwEj1TjFpKfO3EJFMTD1ZCPe9p8REKwxDgzuRkegFikE0j/ELACtZsvQOGjAiwzQLXACmzAwVkHsF2BNFUg2+j3fIjd/D7s7O8hxGpuadcLkOPLk86wOnoyKbX0i03ZM3YA5BYsSTfXEEkppYekp6S7l8mYVvFu8zKJSuhN3GcQ10QL6ts4g5zbGECih+SWOkLCpxx1Z4RMP5NB1hDwi1590ND6cZMpMAAAAABJRU5ErkJggg=="
    },
    SLOW_BUT_STEADY: {
        name: "Slow But Steady",
        description: "The reload time of the wand is set to exactly 1.5 seconds",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            reload_time: 90
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKUlEQVR4nKWTMY6DMBBFX1ablgOYxrKoOEBOgChTpvcNOAAUkW9Bw0WiHCAHSGWNqDgAomeLlVEcwiq7+5uRNePnP2Mb/qndVsI5N4sIxhhCbJpmVf+xBRCRaH29Xv9m0Vo7/5TfbCFsNMYsjrque68F59xcliVVVSEiHI9HyrLEObdyswI45+Ysy8jzHIC+71FKAd9zeIZEAGtttFkphdYagLZt0VqTZVk0l89HgDGGw+FAkiQMw7A4OJ1OaK2p6xoA7z0vASLC7XYDoCgKANI0Zb/fU1XVknvUpoOg8/kMwDRNFEXBOI6/czBNE0opkiThcrmsHKxuIdBD8f1+j9be++iVRoCu63YiskDGcYyi9371H6IWgpqm2Vlr5wB6PvXVi3xLr/7FF5tLktg75xAeAAAAAElFTkSuQmCC"
    },
    EXPLOSION_REMOVE: {
        name: "Remove Explosion",
        description: "Makes a projectile no longer explode",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -15,
            damage_explosion_add: -0.8,
            explosion_radius: -30.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABCElEQVR4nM1SMW7DMAy8EF4Koy/oTvgRKbJk9xuSAh3duS/QbI8Zkjd0z1I4Q34QIOha+AFGoSUQO7gUZEdOgGYJF1FH8UgeBdyNSZZJySxD3Na5x1qTSskskmUeI3Uq51AQISRpTSrhud48oSBC5ZwvkKjzdjxOwCwFEcAsy8V3r5PyL1Y5170dM22xZBZb52IbIyHWmlRsnYt2dcbUmlSGrar/+rkAvvY47bZ4fP+Z9AiUEQCS6RyrlwMKIq9PLLknYghesmQ6722GYo+0euWc385qtsFptwUAPDx//F9EoPsb4cjx5MZ0ijcmSnK1slawjRGd+SLJWMATDUhGNRjOFt6jc99qv1jf1H3+uiFYAAAAAElFTkSuQmCC"
    },
    EXPLOSION_TINY: {
        name: "Concentrated Explosion",
        description: "Limits the radius of a projectile's explosion heavily",
        meta: {
            action_type: 2,
            action_mana_drain: 40,
            fire_rate_wait: 15,
            damage_explosion_add: 0.8,
            explosion_radius: -30.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtUlEQVR4nGNgGAhwclLwf6IV9yboVp+cFPz//4tzKJpIMgQG0A0hC5BkyPfD/v8ZGBgYPrdzo2hCNoQJm0ZkDd8P+/9nsXGBG8bAwMBwalUrXC0LNgN4K78yMjAwMDCoWCAE75yAM4+cu1WD1QW9CbrV6M7HBooXXIY7AcUAGyO1Fqw67pxg4LTdyIjLQDhAD+Hvh/3/w8IDn4vwGkIWIMsQ9KT5/8W5/ycnBf9HDliSDaELAAAV4Fs0MhK7XQAAAABJRU5ErkJggg=="
    },
    LASER_EMITTER_WIDER: {
        name: "Plasma Beam Enhancer",
        description: "Makes plasma beam spell's beam wider",
        meta: {
            action_type: 2,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeklEQVR4nGNgoCdoPfD/P7oYI7Ga//9HaGZkZCRaH4rNMEOwuYSBgYGBwajx6n+jxqvYJfFphGnGxiYEGGEaztVro/jLqPHq/2B7LZwa1x68xgDXg9dpBAATuRphgAXmHHRAkhdgGrCxSQIURSM+gC8h0Scpo7uEqgAAzIlV2ZRfiMoAAAAASUVORK5CYII="
    },
    MANA_REDUCE: {
        name: "Add mana",
        description: "Adds 30 mana to the wand",
        meta: {
            action_type: 2,
            action_mana_drain: -30,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAlElEQVR4nK1SUQqAIAwdkofwFp5JSKgDJRh0Jm/RIQzWx3BZmSX0fhxvb89tCvALlAnKhHfd4OPgY5055diedHxJoYYpkiIiIub2HHSXsqk/mBRHZyWTgg5nZWVKZUJeAyTlTu6gfkgmnlzfQcsp2ufdCh53XfST17ro8paclQAR0n7GeUtkCW0Px4mGr5Hj6+f7gh2Oz4snNWkVfAAAAABJRU5ErkJggg=="
    },
    BLOOD_MAGIC: {
        name: "Blood magic",
        description: "Reduces a spell's mana cost and recharge time greatly, at the costs of four health points",
        meta: {
            action_type: 6,
            action_mana_drain: -100,
            fire_rate_wait: -20,
            reload_time: -20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEklEQVR4nNWRsUrDUBSGP4uji0MWQRBcChcs5AkCYh8g481iO3TzBQqBQiEv0K1DKkIDLpmdpFkcCxUy6iLIhVCFrC3cDmpIehvRTf/pnHPP///nngP/Hnu7imkQ6ONut8hfwhAA0e/v7DfIuVI6V0pfCK+Ic6V0GgQ6kVL/mPz2vDJEcqUqIo26sQHCwZ1h8j4e87hYmO4jIXQiZcVp2z2RUidS6o7jT794laV0HH96efQkAU6aTQ57PeBjiQfrNYP7FXYWc5WmBW+/LDCZDT0cHzuL5fXrKfbtOXPLBcDOYrDcCJBlToMtTGZD76zVAogelsuiPrfcqPT2PW7a7dpTjYSoP+Ovmj5hfAGgPPrfxwZgiKMmJl0ekQAAAABJRU5ErkJggg=="
    },
    MONEY_MAGIC: {
        name: "Gold to Power",
        description: "Spends 5% of your current gold and adds damage to a projectile proportional to the amount spent",
        meta: {
            action_type: 6,
            action_mana_drain: 30
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0klEQVR4nM1Tuw3DIBQ8Itf2Fu7SOWm8hJsoyjpewN4CWTRegoaUdAzg1KZNQRo/hL+xnCYnIcHj3r3jAcAA19UOR+G62rn3y/0ssig8jL7N/X44Z98ErRI+lhRyxmdEJmJSSBZWIBiukT7Ofn5pLPMCfZs7wzWyqvQV4+ttJGCVGMWsEkgKySIipwF5mryFiNQM18g2Eg3Xvkh4hEUHU1glkFWlX6cA0EgAwCl0cAS7HKzZnzmgzoZ3T/apsXSVhNWH9LzHLiRPKy9i71/4r4/3AdMmlScweJLGAAAAAElFTkSuQmCC"
    },
    BLOOD_TO_POWER: {
        name: "Blood to Power",
        description: "A projectile gains additional damage at the cost of 20% of your health",
        meta: {
            action_type: 6,
            action_mana_drain: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2UlEQVR4nMVSsQ3DIBB8Iq+AhIcAKUVWSJnGJb3n8DIu07j0CiksQekBjMQQpDoEGNtNpHz1/N099w9E/w52Bq69DsiN89RN847fXImN89cO1l4HELtpZu/XM5REuzmSrYj58DGMiOiGW+zmSAlOECvBo1gJTrIVsabvMvKaklwTH2GxARwgjPM7Yoqn42QOlODZ0lA3zpO+y6wxGlYdHEXqCkusOriyDzFR8Qr4LOkYsI+mmD1r0E0zK4FxsXEfxnkaF1v9iVngbYeHCjgjj7MXZzoDT8m/ii+w94SWpTGZ1QAAAABJRU5ErkJggg=="
    },
    DUPLICATE: {
        name: "Spell duplication",
        description: "Duplicates every spell cast before it",
        meta: {
            action_type: 5,
            action_mana_drain: 250,
            fire_rate_wait: 20,
            reload_time: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAa0lEQVR4nGNgGFTgy73/cHBh9qv/ZGsmyxBkxRdmv4IbQpIrkAGxBjARY9iXewjvXJj96v+Xe0S4DNkFMC8h0wRtRFdIsmZkZxLtAmyaYeIEwwCXZkIAIxa4FREBSExCghtwZ+9rUiweRAAAHj/L0/XJ7JMAAAAASUVORK5CYII="
    },
    QUANTUM_SPLIT: {
        name: "Quantum Split",
        description: "Makes a projectile split into three projectiles whose existences are entangled",
        meta: {
            action_type: 2,
            action_mana_drain: 10,
            fire_rate_wait: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABC0lEQVR4nKWSzU3DQBCFv1lxSAHrUBGiCYsjTbiQiKurQEoHUEmYLYCTHwfvOOsQQwQjrTxa+828H5sk/lN30ZjZrx+fILbZPSCJdOumCrZ6dKr3Nw0IcHKXDocYJAALD65JiHcfZsuAkDB1nfaSpWuAqBia3KGRMHVd9GcTr5XPG61upwJJ7jZ13Tx8C1jZrHTtpcXEkJMASilyd8WzAYYm5ZwppajKWSokXDrYRgZgpRT6IQPoOGLTpyFp04OWgQH0Q9ZxnPuHJ3QcZXARoyTMDG9oBnWa7AHrh6zXF9Yxbv3OlToAb+95/VLSt/zj3t2X8/gstX3a6UcPVmzSbo60JwsgvFh58Nf6AnZwqPTgGGM3AAAAAElFTkSuQmCC"
    },
    GRAVITY: {
        name: "Gravity",
        description: "Increases the effect gravity has on a projectile",
        meta: {
            action_type: 2,
            action_mana_drain: 1
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAOElEQVR4nGNgGGjACGP8////P4oEIyMjpnISwH8ooMgQmEHD3BAmik2l1BX0dwHFAD2BDUEvoAMARvIn5CU4VusAAAAASUVORK5CYII="
    },
    GRAVITY_ANTI: {
        name: "Anti-gravity",
        description: "Applies a lifting force to a projectile",
        meta: {
            action_type: 2,
            action_mana_drain: 1
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAN0lEQVR4nGNgGHLgPxTA+EwD6RjyALLzGRjo7QV02+nrAmy2D3LN6CkOF2DEZRMjIyMjpvLBCAADOyfk1BFJQwAAAABJRU5ErkJggg=="
    },
    SINEWAVE: {
        name: "Slithering path",
        description: "Makes a projectile move rapidly in a slithering manner, like a snake",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            speed_multiplier: 2
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJ0lEQVR4nGNgGAWDCPyHAmLFMRSRyobxmSh0OG4X4fIOTSwcBRQCABoYM88k3grkAAAAAElFTkSuQmCC"
    },
    CHAOTIC_ARC: {
        name: "Chaotic path",
        description: "Causes a projectile to chaotically fly wherever it wishes",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            speed_multiplier: 2
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAATklEQVR4nMWQSQ4AIAgDW/7/Z71oQgwBRKM9T4cF+JE2AgDyfHIJ0CuvEQ15cpIMJ3uScP0MmJJEUPmRVyVHp6SfacFbZatUEsxiuRylAx4EZ6GIhsrWAAAAAElFTkSuQmCC"
    },
    PINGPONG_PATH: {
        name: "Ping-pong path",
        description: "Makes a projectile fly back and forth",
        meta: {
            action_type: 2,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAATUlEQVR4nGNgoBAwwhj/////T7QmRkZGwqrwAGTLmCgyiQHJC+gm49WEzQukhAEyGEReIAWMxgKaa0hxBSMjIyNMDcwbLOgKKHURyQAAdbQoBsO9ID0AAAAASUVORK5CYII="
    },
    AVOIDING_ARC: {
        name: "Avoiding arc",
        description: "Makes a projectile shy away from obstacles",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAcElEQVR4nGNgIBFM9zb+7y8u/N9fXPg/AwMDAxOpBiADf3Hh/xQZQLQL/kMB2QbgAyzEKGJkZGTEJUe0FygyAB8gaMD/////U+wFsl1AyHYGBhyxAAs0QppRDEAOaWI0YhhAiiZkQJ+8gAtsfPmWEQBTCSUn4f9IVAAAAABJRU5ErkJggg=="
    },
    FLOATING_ARC: {
        name: "Floating arc",
        description: "Makes a projectile float above the ground",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAf0lEQVR4nGNgGAWMuCT+////H66IkRGnOoKasfFJ0kxInIkkp5Fq+3RvY6xe+Q8FKBLYNPuLC/9HNwRdPQsDA+mhjKweaxhM9zb+v+PMAwYGBgaGHWceYHgFxTBskjDNyMDDRAG7Af7iwsTHMRZAcTQybXz5lrRkigQ2vnzLCACn21Aot96OGQAAAABJRU5ErkJggg=="
    },
    FLY_DOWNWARDS: {
        name: "Fly downwards",
        description: "Causes a projectile to aim straight downwards a short time after casting",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXklEQVR4nGNgoDWQSV78Hx+fKGA97fz/+qMf/1tPO0+aZpnkxf//////v/7oRzhNtCv+//8PV0S2C5BtgxlI0HZkm6kKiDKYZrbT3HCibKC9CwiB/1CALs40EI5BAQDoQlPlDTC58AAAAABJRU5ErkJggg=="
    },
    FLY_UPWARDS: {
        name: "Fly upwards",
        description: "Causes a projectile to aim straight upwards a short time after casting",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWklEQVR4nGNgoBf4DwXo4kx0cwFBgM15pMjTHhDlApo6k2jDqe4KmeTF/5ENhvFJcon1tPP/649+/G897TxprpNJXvz//////+uPfoTTJLmCYhdgs41k2wkBAJTCU+XAcVmPAAAAAElFTkSuQmCC"
    },
    HORIZONTAL_ARC: {
        name: "Horizontal path",
        description: "Forces a projectile on a horizontal path, but increases its damage",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -6,
            damage_projectile_add: 0.3
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAl0lEQVR4nGNgGAUYgC9+aQk5cgwMDAwMCtWn/hOyAF0NC4yRsfX7/5VbDzQwMDAwcHq3WrGKKFgxcwtxMzAwMPz9+u7r7zcPjn3fWn3s4/u3DRlbv/+f4c3JyICsWaTs1OqMrd//r7z+///K6/8xAEwcWS0DAwMDI7oL3k/zbMTnAsGs7fXh3g4NKC6gJAwwAEWxMArIAwD02G7eAnCXMwAAAABJRU5ErkJggg=="
    },
    LINE_ARC: {
        name: "Linear arc",
        description: "Makes a projectile fly only in cardinal or diagonal lines",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -4,
            damage_projectile_add: 0.2
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdElEQVR4nGNgGGjAiE+y9fT//wwMDAxVJgwMjIyMeNViAONp9//D2P////+PTy1ezSQbIJazFkMxPgNYGBgYGLj8Gv8zMDAw8MjpMLyaEkyaX4kB6C74DwUMDAwMTFS3jRgXIAOSXEBydCJrJFszRTYPDQAAwlM7WicIWzYAAAAASUVORK5CYII="
    },
    ORBIT_SHOT: {
        name: "Orbiting Arc",
        description: "A projectile orbits the point of its origin",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -6,
            damage_projectile_add: 0.1
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbUlEQVR4nGNgGLTg6LP//zM2v/5vMeHyf5jYfyjAq/H/////jz7DVPQfDcDEWdAVMTIyMpLiUiZiFSIbjNUSgn6j1AXIADlgyTLAQFkCU5AUL2CLJaINwamZWAOISkjYFOESx5lo0BWTmsDoBwB4Nl8cpS5YrwAAAABJRU5ErkJggg=="
    },
    SPIRALING_SHOT: {
        name: "Spiral Arc",
        description: "A projectile flies in a spiralling pattern",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -6,
            damage_projectile_add: 0.1
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAcElEQVR4nGNgGGjAiE/y/////1EUMzLiVY+iEV0zPnG8tpKkhhjN6GqZiFF89Nn//xmbX5Pn9KPPEOLIhmCox2YAsmaLCZf/41WPK9RJcS1WgK4YI22gS2BLLMia0OUZsZpKbIpjIDIaiQJEJVNaAABAYm9bC5CgpgAAAABJRU5ErkJggg=="
    },
    PHASING_ARC: {
        name: "Phasing Arc",
        description: "Makes a projectile fly much slower, but teleport short distances over its flight",
        meta: {
            action_type: 2,
            action_mana_drain: 2,
            fire_rate_wait: -12
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAd0lEQVR4nL2QwRGAIAwE76hES6IAS7EaCrAUSzofmhl0gOE+5hUy3LIE+Lv0VJyTG/720wBJS2tuGQBYoyFJM3tb9Ex6gSKpjO50v1AHR5AmwNEcLXGPhuQ2C3xZuAvLkrL7UIpwDbIAlmbPAMAZA5KHTbEXVtUFT79KQ+fhS/wAAAAASUVORK5CYII="
    },
    TRUE_ORBIT: {
        name: "True Orbit",
        description: "Makes a projectile rotate around the caster like an orbiting planet",
        meta: {
            action_type: 2,
            action_mana_drain: 2,
            fire_rate_wait: -20,
            damage_projectile_add: 0.1
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnklEQVR4nKWSsQ3CQAxF/0cMQU+NRMlIlIzCDozADCfRIEWiTnuKBDt8miQ6IvviE6/8tr/tOwN/QktMWbo9P+j6Acf9Dl0/AAAel4OZPyNJKUte/HR9uTHUCq1GIVEjlvajm46OwTJ/ExlzaUJyfsxtZJVSL4tNgymh1rXEXSFK1YAjqwYk6e0epsXAvUjv3ydSls7393ojGbScehNfHyqLo+5hIjMAAAAASUVORK5CYII="
    },
    BOUNCE: {
        name: "Bounce",
        description: "Makes a projectile bounce on impact",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            bounces: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAASklEQVR4nGNgGAUkg/9QAOMz4ZKgyAZSxIkyhCyXwTQR0syET5JiQIzTKXYBY3l5OUVRx3LmzBmKXECxF5j27t3LSK7mvXv3MgIAxdo1HJOkQw0AAAAASUVORK5CYII="
    },
    REMOVE_BOUNCE: {
        name: "Remove Bounce",
        description: "A normally bouncy projectile stops doing so",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            bounces: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAUElEQVR4nGNgoAX4Hxn5Bh+fJEPI0kyRzVRxAb4w+A8FmJpwSZCqDpckMYbjVEySZnRNhDQzkWwyOa6gqQsYy8vLSQ8gJMBy5swZilxAsRcARqtQJbamrkgAAAAASUVORK5CYII="
    },
    HOMING: {
        name: "Homing",
        description: "Makes a projectile accelerate towards your foes",
        meta: {
            action_type: 2,
            action_mana_drain: 70
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnUlEQVR4nLVSwQ3CMAy867uD8OiTEdp92kk6UEeAZyUYhHePBzJE2EmJKiydEifx+eyYknDEmtLlfZp22RkpuA6DAKDtOjzWFQBwXhZWKbCAXGBWQSr7NM/89h2DJIdL30sSbuOo1I+QLcH6YKul+0mBwRR4bO/z8BdqrDgHZXtlblKnzsiEgKwj+rz7Rw9KjP4uIIjKsT3dJB4u4Ql9Zpxuw3F/UgAAAABJRU5ErkJggg=="
    },
    ANTI_HOMING: {
        name: "Anti Homing",
        description: "Makes a projectile accelerate away from your foes",
        meta: {
            action_type: 2,
            action_mana_drain: 1,
            fire_rate_wait: -20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEklEQVR4nK1SMWvCYBS817m7jh07OEmX6qp/oEunqqA/IA5CN3EQCg5CF5cODYVCKfgHHHRocGinIKSb69uydO45lBcT05pv6MHjy5H3Lpd7H0jCKvI8prlLCUl8NJsEgNNKBV+bDQDgYrEQOODEHmzAddAgkefRyPl0Kp/9foYXKpDEe6PBdAbGXSr5BcvBTmf8yxb+kgYkk0G7Xk6a/UAl5+BYtWolbnXFra64ju7ZqpVY4GDvol0vczR/ybzROMSsO96H+Dskt8ZO7wYah7gdTACgSCBv7/HhCc+vPu4mAxeBHwd+oDK8uobGIQCgenmWdKQEDr+W5X6gMuuOoXGI5fAt3XaY+PfRu2DpO26hGDuWKjxr9YoNfwAAAABJRU5ErkJggg=="
    },
    HOMING_WAND: {
        name: "Wand Homing",
        description: "Makes a projectile accelerate towards wands",
        meta: {
            action_type: 2,
            action_mana_drain: 200
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApUlEQVR4nLVRwQ3DIAw8ou4QiQHyZTYmyAbZoQP0nQUyRebIm+uDOHUhQaAolozF4TNnGySh3XnLFCt5PHaL5EDn7QFWFxCyuBRpUjAtG8nAadmqFbyg7P0ZAKx7rDStAADGuWf6XvJOJ0vfeojpd6cKNEEruF5pYDZE5y2FPM592xaOS9MMogqTDrHVuhyqqfjLeUJBSUWOXxQw5p8gUXCVebeFL748RLoQNfOiAAAAAElFTkSuQmCC"
    },
    HOMING_SHORT: {
        name: "Short-range Homing",
        description: "A projectile flies towards targets when near them",
        meta: {
            action_type: 2,
            action_mana_drain: 40
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdUlEQVR4nO2Quw2AMBBDbeoMQnEtG2SgbJKF2CBtJBahxhSAQMqngZLXuLDvZBn4eQ0BQNoEkN1gwx4u+1CpdkgSSwiF93hwx2uh5L2e2nlQtlhCkDPDGCOdWdHk3KDWTgJIkkjey5lhzRnTPHe3atLa4OcDdtJwJZo0dM+QAAAAAElFTkSuQmCC"
    },
    HOMING_ROTATE: {
        name: "Rotate towards foes",
        description: "Makes a projectile turn towards your foes",
        meta: {
            action_type: 2,
            action_mana_drain: 40
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApElEQVR4nKWSwQ3CMAxFvzkzCIceGaHdp52kA3UEOFaCQbh/TkZOYjut+JJlxZF/XpwISfyjS7b5Xpauu3gEz2kiAFyHAZ99BwDct01OEWhD1BgSWOzbukq9bhxINvEYR5LEa55p116EV9A5aA4VOVsCE6pfzX2F7DwAxRzSf+CoGaIasMqHpQYCB++MgZpYRTRFPZuBUtXNRT0z8K4kVe4SdPUFdM2PgSiSAoQAAAAASUVORK5CYII="
    },
    HOMING_SHOOTER: {
        name: "Boomerang",
        description: "Gives a projectile a path that curves towards you",
        meta: {
            action_type: 2,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAk0lEQVR4nGNgoBVoDFn6nxh1TLg0H729mShDsBrw8ut9hmuPzjK8/HqfPBeIcysy+FnEM4hzK5JuQJZny3+YIch8ogBMcW+tzX8YRhb///8fhmGM2AyCBd7Lr/cZpm2vwVDz//+//4yMTIwMDAwMLNgMIBR4MM0MDHjCABcf2RX4BcgFxBhENctItoFkm2EaaOpkAMiQWSNWFsAzAAAAAElFTkSuQmCC"
    },
    AUTOAIM: {
        name: "Auto-Aim",
        description: "Makes a projectile turns towards the nearest visible enemy",
        meta: {
            action_type: 2,
            action_mana_drain: 25
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAr0lEQVR4nLVSsQ3DMAwji079pEDWDtlzQmffkHySGzznhOwZekD6DbtEhhoEtougAgRLkEhRtikJZ+xSaiCZ/D0M8jkAXGumvLpO+/gxz6xSYGYAO82KCta+FwCsTaP7ONLnAAhJWfeyDWy5pPoVDOTvA8ZS8AQwBR7Lf/6DKuYcATO1LMFPOx39g8PJU9tqq+m5LKnHE1gDYowCwBBCim8beD/Ar8BCnBR8yT37jB/VG3sSAo6v3gAAAABJRU5ErkJggg=="
    },
    HOMING_ACCELERATING: {
        name: "Accelerative Homing",
        description: "A projectile homes towards enemies at an increasing pace",
        meta: {
            action_type: 2,
            action_mana_drain: 60
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqElEQVR4nLVRwQ3CMAy865tBQOqzG9Duk07SDsEWeTAAPCuVERBv3j1ejqKKpokEJ1m2I9l3vgD/hqQQs3OKewBgzoJ71wkADnWN9zQBABrvSRJVrpLGe8bZsKtgdk5WH4eBj74P/Wkcd+chCbe2VeyB9QDyTzAfLJMJ8vP1pctTIb79Qob0RdISFmxh8wSy2jcoJT1+K1pisovZ10qKB1KsWa4Xs/4KH60pkGr1PxcuAAAAAElFTkSuQmCC"
    },
    HOMING_CURSOR: {
        name: "Aiming Arc",
        description: "A projectile rotates towards the direction you're aiming",
        meta: {
            action_type: 2,
            action_mana_drain: 30
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxklEQVR4nK2SwQ2DMBAE9/KmkCD5STqAfuxKoB/TQfJEgkLyzuaB7BxgO1HEfs5nyau9OQNniCRIbs4kMVtL3ack4REAiAhI4tF1BIDKGDynCQDQeC8icjC45FI13ouuOR0SzNbGrNe+l8W52NfDkDbbM7i3LTWD0KeUHSFwCLWo07ZQUmoDQGGEnDRkZfA9QoAJIFZlEPLljRbnWBmDehikMiYm+ZkBsG4k/M7bOH6gaNLki9t+e79nUEhArqOFqh5lNvKX3uOfvfup5sEGAAAAAElFTkSuQmCC"
    },
    HOMING_AREA: {
        name: "Projectile Area Teleport",
        description: "If a valid target appears somewhere in the proximity of a projectile, the projectile will teleport right on top of the target",
        meta: {
            action_type: 2,
            action_mana_drain: 60,
            fire_rate_wait: 8,
            spread_degrees: 6
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxUlEQVR4nK2TQQ6CMBBFX1l7EBcGNx4BLoI72cBJWOEOL8IRdKMhwYO4/26YBGtRSPhJ02k7/89PO4WZkIQk+qKQxZJwU4TmrtriLCa/pakANrsdr64D4NC23/zmrnpMturXJNHYga2dTz7uXe6L9kUhi7dV5Z5lKT8Hv+pcB9EUKQS7B5tnVTcH/isEBfwTDQiJGicCyGJOAM45NyH0McaIAC4PzuNNExrmyV4JWlqau+gVVnHxNyfUyr/2Z30mgFCLr4I3zH6uY584tfgAAAAASUVORK5CYII="
    },
    PIERCING_SHOT: {
        name: "Piercing shot",
        description: "Makes a projectile fly through enemies, but harmful to the caster",
        meta: {
            action_type: 2,
            action_mana_drain: 140,
            damage_projectile_add: -0.6
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAgUlEQVR4nGNgoAb4/////xFsCCMuifsvDvxnYGBgePH+EoOlZh5OdUz4NDMwMDBICOoxHL8+CaersBoAAwkpsQwv3l9iqCjtxqcMuwtgOLfJ+D/JLlCUcGB88f4SAwMDA4ORpQJptiMDmM34XEASoGo6ociw/1DAwEAgGvG5gGoAALmEVR6d5Le7AAAAAElFTkSuQmCC"
    },
    CLIPPING_SHOT: {
        name: "Drilling shot",
        description: "Gives a projectile the power to go through the ground",
        meta: {
            action_type: 2,
            action_mana_drain: 160,
            fire_rate_wait: 50,
            reload_time: 40
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWklEQVR4nGNkwAOmexv/33HmAU75jS/fMjLhM4AQ8BcX/k+RAQwMDAyjBpBpwIYXbxg2vHiDMOD/////sdEZW87ANSDTyIARn02EEhLcBZSAUQMoNGDjy7eMADXKJ4OdKDduAAAAAElFTkSuQmCC"
    },
    DAMAGE: {
        name: "Damage Plus",
        description: "Increases the damage done by a projectile",
        meta: {
            action_type: 2,
            action_mana_drain: 5,
            fire_rate_wait: 5,
            damage_projectile_add: 0.4
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAd0lEQVR4nGNgoDq4Gxl5NzISzmUiVT8jfrPRRJSXLyfZBsIAux8m2JhPsDHHykADLMicAAU5NAYDA4Py8uVYNBx48hyNgQuwQGxHFsKvh+RQQvgBbrCDjCQeS1A87SAjSVAPNKaxhiADA0PBkZNoIky4JHAJkgwALKEqmtSVVqcAAAAASUVORK5CYII="
    },
    DAMAGE_RANDOM: {
        name: "Random damage",
        description: "Randomly increases or lowers the damage done by projectiles",
        meta: {
            action_type: 2,
            action_mana_drain: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAUlEQVR4nGNgoBAwEquwftmJDQwMDAwMSm8ZGi28A0iypav+xIb/SKD+RNsGojUfgGreeaJ+w3QoRjaEiZABHAzX4OxMi0a407UZfhLvhZ0n6uFOrj8xZ8P/////n9iHEGNgYGBgmGBj/n+Cjfl/fOz6fScwNGN4IUBB7j82dv2+ExsaHM39T85veGHhhPAKC4xx4MlzBmxsODjHYM7gyMDA8JDhJLIwC8yZ6OrRDWkssZBU/3xiQ1QjwnasXsAFltWf2BDZYO5/on7eBgwXYLPVQUYShR/VaBHAwHBiQ1RjEooLUAyAacRvCCqA5wVs4YAMCo6cxJpvmAgpICRHMQAAszGKf7M0LtwAAAAASUVORK5CYII="
    },
    BLOODLUST: {
        name: "Bloodlust",
        description: "A projectile gains a hefty damage boost, but is also able to hurt you",
        meta: {
            action_type: 2,
            action_mana_drain: 2,
            fire_rate_wait: 8,
            damage_projectile_add: 1.3,
            spread_degrees: 6
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTklEQVR4nK2TsWrCUBSGvysSaHHo4iIimUKbLnfQrWMfQMgj+AwZO3XsA/gUTl07WpcouBhDB+lQCqWLQ0wgSzroSW9i0qk/hPy557//PefkXPhP5O5dLg9AoHUoXNYDrcPGzea3KazGpq77KLwtZGnFW4DX+6N49DJXwtWJR0nKZLFSQ8vygAeAVmGQZTPhUZIyHvTzKEkBGA/6OcD15QUAw6xzU8og0DocrdcuwOzzu0h1s4/Z7OOGjhkG4igpH9GlaliHlll/FVGSsosPBReY+jaU6zdP3cUHfMfm6e29ZGzqWwCnrpZO8XpdfMcGwHdsnj++CmPR/xqcejBZrFSUpHi97lk5vmNze9XB1Jd6IMMiJnX9mCxW6iwAx8kyR/gvmOMNxiSqcK6qwaUVb5dZNhtalleknTX/tWLGA61D8y4Il7d5FxpRJ6pb+wGL77XnVdGirgAAAABJRU5ErkJggg=="
    },
    DAMAGE_FOREVER: {
        name: "Mana To Damage",
        description: "If the wand has more than 50 mana, all mana over that is converted into additional damage",
        meta: {
            action_type: 2,
            action_max_uses: 20,
            action_mana_drain: 0,
            fire_rate_wait: 15,
            reload_time: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVR4nKWRMWrDQBBFn4zuYFhV7kzuYBnWGNyodK/SJzDJDYIaXcFtSLmNwWTBSukDqHS1CznFptEGkV1FMvnVZ2b+zJ+ZhAhMUaw8z5T6HIsHYte2zrWtu9W18yJTFKtbXTuf8/H0t1hUVWOPxzNwErCwUjYGcitlI7R+sVrfgVJUVWMgT0MPAJwypd4ADKw78TlT6rUbBLALHPRQdkULK+VOaJ13Tp6BO1AO6B6/QeKF79u1A9hfrskQj30hWOHwtHQx3hf18dPgw3wR42NI+/b7mNpkNnnUXw5iUzfZfJKL4IibbP5Qk+CNQ9hfrkksPhsrGMv9G98gXZsGUdV17gAAAABJRU5ErkJggg=="
    },
    CRITICAL_HIT: {
        name: "Critical Plus",
        description: "Gives a projectile +15% chance of a critical hit",
        meta: {
            action_type: 2,
            action_mana_drain: 5,
            damage_critical_chance: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2ElEQVR4nGNgGLTg4sWL/y9evPifkDpGfJKLFy/+z8DAwPD06VOG44cPMijLSjP0zZiDoocJnwGxsbGMMM0MDAwMYgoqKC4k6AIGBgYGf2/P/wwMDAyWtvYMQd++MTAwMDCcVFVlML99m0GtqYkRrwuKMlLgmqWlpTE04/VCUUbK/7uPnzJs3LqdsaKighFZ8+mTJ+HqsBpwYkM7XDOyuJ6eHopmnDbD/A0DFy9e/H+rru7/Unf3/wwMDAwwGqvN6JqRAU6NuGwm2oCijJT/sBCnKcDrhQEDAKAmZoLP5Pb0AAAAAElFTkSuQmCC"
    },
    AREA_DAMAGE: {
        name: "Damage field",
        description: "Gives a projectile an energy field that constantly deals 3.5 damage to nearby creatures",
        meta: {
            action_type: 2,
            action_mana_drain: 30
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiklEQVR4nO2RsQ2EMAxF348YgU3SsAKiR9QMRh3Rn1iBhk3YwVcgnyDHSaBr+U1sy996seGRrjStg9k+L3t9fMUV8zwtXV7zIeGuGWCels6pAoDZETHPAZoxpmaMKa8HAGnDcaMkeXxm2uuwAx/k8TqYvdrtC/6eEvxS2UtV/U1Q1TH5Ev8+4yN4A39KP5cOaCgvAAAAAElFTkSuQmCC"
    },
    SPELLS_TO_POWER: {
        name: "Spells to Power",
        description: "Converts any nearby projectiles cast by you into extra damage",
        meta: {
            action_type: 2,
            action_mana_drain: 110,
            fire_rate_wait: 40
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVR4nGNgIAH8t3H5T5HClSLSJ4g2DFkxDEyVVSrAJ48BkDUg89HFSTKEZAPQNZKleaqsUsF/G5f//1Mm//+fMvk/VkOuCkr+hym+Kij5/7+Ny///Ni7/UTTDAJIhTAwMkBDVfv+ccaqsUoHDl+/92u+fM167epWBgYGBIUteqR+f6xgJOd3hy/d+LW1tiICGP4S+sZGB8cgeRoIGoBsGY2c/vjeBWH2URSOyQlxsnAA9qaJrwpuU0TMKNsVE50xCigF6e2vhS81WqwAAAABJRU5ErkJggg=="
    },
    ESSENCE_TO_POWER: {
        name: "Essence to Power",
        description: "Increases a projectile's damage based on the number of creatures nearby",
        meta: {
            action_type: 2,
            action_mana_drain: 110,
            fire_rate_wait: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABu0lEQVR4nI1TPUhCURT+jEc2ODQEBVYPIggy6pJYmwZKQ0RGaw1BEDVcHYREhwaHBKHBd4cmgyA3h4x6Q/TACt5SRgQFQgRBQS3SagS36TyeL/v54HEu73znO+dcvuuCA/rJmaTzzHTI5cw7oTiLU5k8IsEATs8voZ+cSaeIs0GTgFExkd2MI5XJI7sZh1Exm7qpTHCjYuL0/BKRYAAqE7zNTijpnhiJGBUTRX2i7By5qE+UI8FAyxwAIJHOSpUJTrEVp4cZBy2LW8EuojLB6fu3ABXOiYYs1KUs1KX0rV3Ib6SB2VoVAHyhY+5feqlOJu/knGhIlQk+mbyThbq0UKhLa7022unxaMjvCx3zjj62XN33+j9fOq/fnh8wtrKqdfcO/jjdr0ZRmeBdIwvLivd9vLt3ENHFdgBAufiBQ+52AQ4jqUzwBobDbtwbTzdcAEB13+unXO2qXwOA2l7Uauyi5E5uVKOf6xu3sQaGw6834Xm78G5OiRKHHGoZKZXJW5GmsE+3m1Oidg5Z2hKIBANNkVYg/GRzhcglCACmVtI9MTfumy6T8uEpaNRgeyv150v9hkQ6K+0RAL4A/dPRqz6VUtwAAAAASUVORK5CYII="
    },
    ZERO_DAMAGE: {
        name: "Null shot",
        description: "Increases a projectile's duration dramatically but removes all damage & explosion from it",
        meta: {
            action_type: 2,
            action_mana_drain: 5,
            fire_rate_wait: -5,
            damage_projectile_add: 0,
            damage_ice_add: 0,
            damage_electricity_add: 0,
            damage_explosion_add: 0,
            damage_critical_chance: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5ElEQVR4nK2TQQ6CMBBFP0Y23MDENCUeQgws5Abdcg43HIGNiUfxCGyMvUQDISTcoJsuxo01IEUxOKvp5M/r77QF/hEqy0hwRnP1gjNSWUajwhzIpHYO5KtGcEYyTemS7AkALsl+kMs0HTWv+otr3XjSaER+gL5QcEaRH0AajWvdeP2e9buLsu1QAsjDHYpKAc9cGu10PQBYuwAgjUYe7gAARaVw3G6cgJWz+kM4AWXbIfIDFJUaOJkNsGe2tu1gy7b7DLA7uwYmjcb5EGPyGgVndD7Er8m74nS/OSHLn/Liz7QkHg2/iEbtwWA0AAAAAElFTkSuQmCC"
    },
    HEAVY_SHOT: {
        name: "Heavy Shot",
        description: "Greatly increases the damage done by a projectile, at the cost of its speed",
        meta: {
            action_type: 2,
            action_mana_drain: 7,
            fire_rate_wait: 10,
            speed_multiplier: 0.3,
            damage_projectile_add: 1.75
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAeElEQVR4nGNgoAW4WVZGmoYPJ0/C9TDiMVU8OBhZ5OXatepdXSTbQBTAonqOi+YcF02sDDTAhMzxUhBGY2ACFgi17s4rNAY+DWhW49fDhEcOn5OQDQ5SEcNjCQsyJ0hFjKAeaExjDUEGBoaUPdfRRJhwSeASJBkAACZvMbRjCr/QAAAAAElFTkSuQmCC"
    },
    LIGHT_SHOT: {
        name: "Light shot",
        description: "Makes a projectile move considerably faster, but deal less damage",
        meta: {
            action_type: 2,
            action_mana_drain: 5,
            fire_rate_wait: -3,
            speed_multiplier: 7.5,
            damage_projectile_add: -1.0,
            explosion_radius: -10.0,
            spread_degrees: -6
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhElEQVR4nGNgoBfInn3zPzJNMph9/P9/sgzJnn3z/+zj/+GYbJdQpBlZE07NmjFz/mvGzPmPj40NMKEL8OsE/MfGxgVYYIxnF7YwYGMTZQA2JxJrCIYXSAUsyBxkW6UMfIhyBQu6gJSBD0mGMMIY+KKKgYGB4fqSFEZs4kyEFBCSoxgAACBEWnTZTZzeAAAAAElFTkSuQmCC"
    },
    KNOCKBACK: {
        name: "Knockback",
        description: "Gives a projectile the power to knock back the foes it hits",
        meta: {
            action_type: 2,
            action_mana_drain: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAArElEQVR4nK2QsQ3DMAwEn4YAI4Xq9O4yh72NoGmCbOERvIdmUJ1CjQGlYMAwNAOk8FeU9CTvBZyu3rs+Dv+YtMh1E5Fp4xtng3aLSTc7G1wwIvoa0UpqJblukyewe5xmAK3gcnv8AuPaZnjerzriMRsJkrzt2xpzbSXxNrMniI+pAGBBKxinmQnNdwXB0Nq3Fcs7j8EbAMRcTUPMVXiMgh75qQGdwUoSH9lO0AuxzmFW+esolwAAAABJRU5ErkJggg=="
    },
    RECOIL: {
        name: "Recoil",
        description: "Increases the recoil when casting spells",
        meta: {
            action_type: 2,
            action_mana_drain: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAYElEQVR4nKWPsRHAMAgDjZfIkIyTPbwOg6Tg3FgpKHxJCiPnCypeglL+AGC5U9nQKUT8sqTmj5kCABF5VaUAkDzskR3TTYme7OqX6zx2NDclTOKZILLddPRGaKM3TtjnBj1NOZLTRzo9AAAAAElFTkSuQmCC"
    },
    RECOIL_DAMPER: {
        name: "Recoil Damper",
        description: "Reduces the recoil when casting spells",
        meta: {
            action_type: 2,
            action_mana_drain: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlklEQVR4nGNgGFTg82Rxexj7+/n4+WQbQIpmJmTNvLkvDyJL/v///z9JNqPbTrQBuDT//////5HNc4kzBJtmGFjWXUzYEJgBMGffP7+TdEPQwf/////fP7/zP7LB6DHEhE0jMlA0dGe8f37nf0ZGRkaSXQADMFdgSx8EXQBzBTIfOdpZiDEAZjOn4cJEYtTjBci2UwUAAPU5dmgu81MIAAAAAElFTkSuQmCC"
    },
    SPEED: {
        name: "Speed Up",
        description: "Increases the speed at which a projectile flies through the air",
        meta: {
            action_type: 2,
            action_mana_drain: 3,
            speed_multiplier: 2.5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAP0lEQVR4nGNgGKygZ/9PIgWh4P///5jSWAURcpjSWAVR5NCksQqiyyFLYxVkwukt/IBMJ5HmadKCleSIG0wAAADViGvFLudeAAAAAElFTkSuQmCC"
    },
    ACCELERATING_SHOT: {
        name: "Accelerating shot",
        description: "Causes a projectile to accelerate as it flies",
        meta: {
            action_type: 2,
            action_mana_drain: 20,
            fire_rate_wait: 8,
            speed_multiplier: 0.32
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAX0lEQVR4nOXRsQnAIBBGYcnKVtnBMSwcIotZvTQRjt+IyjWBvFLODzxD+E+lJnaGLz0DGCKlplOGsyI8vSJAtAiQFcHUIUC0SAMsgtSQY7qQldxPcC9R2/7GlVyXv90NMHasVaVW8tEAAAAASUVORK5CYII="
    },
    DECELERATING_SHOT: {
        name: "Decelerating shot",
        description: "Makes a projectile decelerate as it flies",
        meta: {
            action_type: 2,
            action_mana_drain: 10,
            fire_rate_wait: -8,
            speed_multiplier: 1.68
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYklEQVR4nGNgGLngVaDVd2IVnsCm+f////+xKZ6Mrvn///9LsGnGMOBVoNXk////F6NrRjYAWTOKATDNMAOQNcMMQNcMM4CJqIAgBlDkBWRD0PjEByIelxEfjaQAohPS4AcApRKdy14xpqIAAAAASUVORK5CYII="
    },
    EXPLOSIVE_PROJECTILE: {
        name: "Explosive projectile",
        description: "Makes a projectile more destructive to the environment",
        meta: {
            action_type: 2,
            action_mana_drain: 30,
            fire_rate_wait: 40,
            speed_multiplier: 0.75,
            damage_explosion_add: 0.2,
            explosion_radius: 15.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5klEQVR4nGNkwAOmexv/33HmAU75jS/fMjLhM4AQ8BcX/k+RAQwMDAwoBnxu5/5PkQG8lV8ZYezvh/3/MzAwMHiYKDAwMDAwLCn4gdUARqyiSIZw2m5knO5t/J+BgYEBW4Cy4NOI7BIGBgYGhg5MQ/C74Hk7QvOdE3DmnyN7GGImcCBc8P////+MjIyMyPSPIwFYDV3Q8YRhxxkOOJ+JgYGBgZGRkREbjWz7go4nDAs6njAkVMgQ5wVkv8M0RoQcwVCHNSF9bueGByLEyQ8YIkKOYI1KvIFIKC/gdAEpYGAN2PjyLSMAlfhfaC5oxj0AAAAASUVORK5CYII="
    },
    CLUSTERMOD: {
        name: "Clusterbolt",
        description: "Makes a projectile release a cluster of explosive bolts upon hitting a wall",
        meta: {
            action_type: 2,
            action_mana_drain: 30,
            fire_rate_wait: 20,
            damage_explosion_add: 0.2,
            explosion_radius: 4.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJ0lEQVR4nI1ToW7DMBB9jkymKGhgZCAgf7CAgIwFRBooGRjcZyyoqVTJ/YPRgv1AWUHZAgL6CQEFJQNDVjQyyQOL3di5WH3Eln3vfO/8joGAFOESAKKqX+mz96cHtT+erLjd1zfjFJnnRY0kg8TaSuJicXerAvImyYCuneNZMBWMy5ZYw5XgTTCQa54XkOJgEaUIVVT1DADKNIbbByOB5wV+m8PkBU1+fbvH/nhCmcYo09jcM0oCVerP50Lp/XZzNpUwKpgkJ9nloGvx8txcJCillG/1IQAAxhjzrRa6FtvN2U5AQYrQfr1rDXn8E8EQvNRN1ETdfSlCdfO4YwAmZADghAfcn6nnyMBgJMoD7kx8NLRUHlX9Sop/8sQDV8yE1wdjc82N8x9P754g54uGbQAAAABJRU5ErkJggg=="
    },
    WATER_TO_POISON: {
        name: "Water to poison",
        description: "Makes any water within a projectile's range turns into poison",
        meta: {
            action_type: 2,
            action_mana_drain: 30,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuklEQVR4nGNgQAIySYv+M5AImJA5ogqapOpHNUBLXpR8AwybTv9HpslyATmuYILZCtNopydPkitQXGCnJw93xf///7Eakm6yFrvhhk2n/0cvfPA/euEDuAKYIR8etsHF2t0fkBbV////////2wG4pg2RqAZgBCIy+PCw7T/D94MMDJz2KLYju4IFnwEC8lWM2MQ1hYh0ATJod3/wH6ZRXlMK7gqiDYABeU0pFFdgdSIxrghYrkCSXtoBABohSE1ed+KFAAAAAElFTkSuQmCC"
    },
    BLOOD_TO_ACID: {
        name: "Blood to acid",
        description: "Makes any blood within a projectile's range turns into acid",
        meta: {
            action_type: 2,
            action_mana_drain: 30,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVR4nGNgQALlQkL/GUgETMgcUw4OUvWjGqClqkq+AWukpP4j02S5gBxXMMFshWlUCgsjyRUoLlAKC4O74v///1gNse3Twm74Gimp/9fs7f9fs7eHK4AZ8uFhG1wsdZ8+aVH9//////+/HYBrmvQgEsUAjEBEBh8etv1n+H6QgYHTHsV2ZFew4DNAQL6KEZu4rpIWAwPDRcIuQAap+/T/QzQyMNjLJMFdQbQBMGAvk4TkCgYGrE4kxhV5CstJ0ks7AADHG0RrtpN/2wAAAABJRU5ErkJggg=="
    },
    LAVA_TO_BLOOD: {
        name: "Lava to blood",
        description: "Makes any lava within a projectile's range turn into blood",
        meta: {
            action_type: 2,
            action_mana_drain: 30,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0klEQVR4nLWRsQrCMBRFr8HFRaQ4SBYhEJAM/kI3Qdo5/9FJ8AP6Nf0C6WBnNwf3UujcSaf6nJqmGLQRvFseueedEMDKZT8neIbZh9Vm6dsfAnikfgdUiSC23aFKhNczDKDb7mvB7O0A4GthDJ7XkxnySIGInJBDELjhVSKozWNq89hc6CBNmZpZxrnfVxMR0f1sSrcwHADYe6VPU6aERwHMwsF222L6CbBYHyeuuZISqOvvBnYyzklJCQAQWhuL0YAuQuveAoBTcYyFKgqv7v/yAmvTShDfOIZuAAAAAElFTkSuQmCC"
    },
    LIQUID_TO_EXPLOSION: {
        name: "Liquid Detonation",
        description: "Converts nearby nonmagical liquids into explosive gunpowder",
        meta: {
            action_type: 2,
            action_mana_drain: 40,
            fire_rate_wait: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVR4nGNgQALKxln/GUgETMgccRldUvWjGiCraEC+AVb+0/8j02S5gBxXMMFshWnU09fDcMXndm6crkJxgZ6+HtwV////h2virfzKSNApVv7T/4cXHP8fXnAcrhFmyIeHbUS7CAP8//////9vB+Aa0DXjddqHh23/+UWtGBg47RkYGRkZvx/2h2vmtN3ISNAAZPD9eTvC5jsn4EwWXBo+t3P/Z7FxwWsop+1GRqJc8P2w/38GFQu47TDnI3sJxWZsBsAwTo24AMxAdE0kRSU+AAAE32GAu/RfsAAAAABJRU5ErkJggg=="
    },
    TOXIC_TO_ACID: {
        name: "Toxic sludge to acid",
        description: "Makes any toxic sludge within a projectile's range turn into acid",
        meta: {
            action_type: 2,
            action_mana_drain: 50,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxklEQVR4nGNgQAKpfVr/GUgETMgcLQNWUvWjGmCgpEW+Af379P8j02S5gBxXMMFshWnUkkkiyRWogSiTRJYrGGCu2P8g8v/+B5H/GRgYGP7//4/VFUblSsSHEcyQDw/b4JrCl2qgGIARiMiAkZGR8f/////5Ra3gYpqy6ihq8Brw4WHbf4bvBxkYOO1RbEd2BQs+AwTkqxixiUNccYOwC5BB+FKN/zDni4qqwF1BtAEwICqqguQKBgasTiTGFQ12G0nSixMAAJL7QXcgZBGsAAAAAElFTkSuQmCC"
    },
    STATIC_TO_SAND: {
        name: "Ground to sand",
        description: "Makes any hard, solid materials within a projectile's range turn into sand",
        meta: {
            action_type: 2,
            action_max_uses: 8,
            action_mana_drain: 70,
            fire_rate_wait: 60
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAp0lEQVR4nGNgoAb4//9/339U0EeqAf/x8fEBJpJsooUBLFC6H83Z/ZQaTDkgJSAJGvLhYRv5hv3//////28HyDPgw8O2//+/HfiP7J3ZXenku2Z2V/r/mgz//8gGseDXggBbl7X/V1ATZGBgOM/AwMDAkFo2k5GBgciEBNN8bN95BikZBQaYK4gyIMnX/v+zJw8Yju07z/Dw3gsGBTVBBks7CxRDKAIAmSViXIpfmJEAAAAASUVORK5CYII="
    },
    TRANSMUTATION: {
        name: "Chaotic transmutation",
        description: "Transmutes various liquids and powdery substances within a projectile's range into something else",
        meta: {
            action_type: 2,
            action_max_uses: 8,
            action_mana_drain: 80,
            fire_rate_wait: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAATElEQVR4nGNgoBa4vOU/HJClGR+faPD/////ZGumyGZcrqFYE4z/4WEb+S77///////fDpBnwIeHbf//fztAXtRiA6NphUqAajECAwDCHWEX6uB62QAAAABJRU5ErkJggg=="
    },
    RANDOM_EXPLOSION: {
        name: "Chaos magic",
        description: "Makes a projectile launch a random spell (out of a limited selection) when it hits something",
        meta: {
            action_type: 2,
            action_max_uses: 30,
            action_mana_drain: 120,
            fire_rate_wait: 40
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/ElEQVR4nKWSPW7CQBCFn6joOQRFDgDH4AgmXU4xokmRC9AEStfbpHBjUVAMDZKFlNJSaCh8AlcvBTubzWLzkzzJ0ni83+fR7gI+UqrDXyOlOpI0ieTqJFcn+tEpVVlf9g1+k7PMIvrqUpgkOyUbDxcqbumfPonVg/jDEJ+hfpkuZlY/of31o+nieYa+FCrBLvp+Hrf86d0d29j/wWs53Vo7AIBckjuwxwQA8IXdcTVmCjVVxtDP/c6nkvi9qTIe5iNewF2LY6kd13E1ZlNlZFsH2IS9UdkG+DAfkW1NtjWbKrsOxsdoSSfolRT+5qUSA7o29K4J4kluCh7NN1SU5nzpERjpAAAAAElFTkSuQmCC"
    },
    NECROMANCY: {
        name: "Necromancy",
        description: "Makes corpses of creatures killed by a projectile rise to your aid",
        meta: {
            action_type: 2,
            action_mana_drain: 20,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVR4nM2S0QkAIQiG7WgGFwnaIWjcoB2EFnGJuyfDzO5e74cgyF8/NYBfqrd2M/Nyemu3FxusMeX8mnwQQal1+uaFmd0KnhBx+i77IEdXHERLAt1O1IEWFQAWXI9yIbAB2nzSTFBqDYMIZOongyXdJCsUIr1Gb53RmmWNHoUe7tbCF2bKGU6faWtB4+uWPLkEQoGIQYb7Xz2fBYVM4x/0igAAAABJRU5ErkJggg=="
    },
    LIGHT: {
        name: "Light",
        description: "Makes a projectile illuminate its surroundings",
        meta: {
            action_type: 2,
            action_mana_drain: 1
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAs0lEQVR4nJWSsQ3DIBBFf7CLVCziDVDEBDTOGp7Ha5CGCSzLG7AIlRukFOecMcRI/Oo43kcHH6BRj7I1Gc317JaaYTL6PXQAlJEANhcAWB9TW5/RhJJ+dQA0e/qSfr4+7NnXURmZegRt/KV5qYykUQ8D3zKjsyZh4jrurRgQda7UYaAXrIgBgSSdfR1LlJuXV7I+0hmZh5abC9ZH6pxJl8HxMGnYZ9KzWwANBFS/RvPna9YX+YpVlS9kuLgAAAAASUVORK5CYII="
    },
    EXPLOSION: {
        name: "Explosion",
        description: "A powerful explosion",
        meta: {
            action_type: 1,
            action_mana_drain: 80,
            fire_rate_wait: 3,
            action_explosion: 2.75,
            explosion_radius: 15.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAeElEQVR4nGNgGADwuZ2bOupwKvh+2B9TEbIgTj1YjWTCZfz3w/4sNi6YBjNit+F5O5R15wSE/nNkD2/lVwYGBhZk57LYuGDVz2m7kYAHvj9v//68Hdl5KCrQPPf9sD8EYVGKCSCasYYstQEux6DHAxz8ObKHOjYDAHKZPYN9uCtQAAAAAElFTkSuQmCC"
    },
    EXPLOSION_LIGHT: {
        name: "Magical Explosion",
        description: "A large explosion that doesn't damage the ground",
        meta: {
            action_type: 1,
            action_mana_drain: 80,
            fire_rate_wait: 3,
            action_explosion: 3.75,
            explosion_radius: 35.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3klEQVR4nM1SsQ2DMBA8RzQWygDpM0QK3NEzD30kr5EV3NOZgiHoGQAhN0if6q23MRLpco39tu/+7gH4ewTfEe9XW1N+f5OFfLDamrjm9d5vCgDCYqkowA9KnfgsLJb0o1dFgRxV0wLPV9yHxdL+eSP4Lro7CPBF1bSnQvs4RLcqJyaEeYpEAMA8JeTEgTyMYPI8JW7klzmfgSCxm30cAADauPIQ7/2mYnaOIFA1LbRx6nSIwXekjVNsnTvmkbRx6hBZDlF2CIslzhx8R/InuoQoJAZ3iVCqc5c/OTnDF/whhsK7Cjy4AAAAAElFTkSuQmCC"
    },
    FIRE_BLAST: {
        name: "Explosion of brimstone",
        description: "A fiery explosion",
        meta: {
            action_type: 1,
            action_mana_drain: 10,
            fire_rate_wait: 3,
            action_explosion: 0.3,
            explosion_radius: 30.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAApklEQVR4nJ1Suw3DIBB9hjJDeBZXiCncZq00WQFRZRYPEckNcopnvRxnV1x1J97nHgCM1XedB5lOxQqxn+wcUwbQanm8NjcKFhz6WOaYssbrwichptxqATB9No7Hcp/qJBDNEpRNTNmu1GXgsaB0kxxpQQTJOAdr3hEUVMLKc0PQPbhl3D6dAy/KyV9DBwVotci91UJhG+D/GursX2C/v58Yq/Hf+QOkcmWPrQfcCQAAAABJRU5ErkJggg=="
    },
    POISON_BLAST: {
        name: "Explosion of poison",
        description: "An alchemical explosion",
        meta: {
            action_type: 1,
            action_mana_drain: 30,
            fire_rate_wait: 3,
            action_explosion: 0.3,
            explosion_radius: 9.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA0ElEQVR4nJ1SMQrCQBCcBJ9xYBswZRpLQYiln0iRysIyhaTIG1LkE5YGBEubKxPIA/IQi4HJudiYLY7buZnbnb0D1kW1u61UhtHmXZt3Si/bK4AoLHI8nwBMfij7QimAQ7MXLRbbOTf5AUCSpUzDUlagY2qYcs9VEalCKDNR9oUV4HtQ7P55f/CWJEtlIxapGWvTnnOObACv6k1wE1YwTuZ5NsgPD7xP45r8QJlsLC2pb5IoS7I0ZC+CZqxlkWyuBO1U+OaEhHIfPtl/sf53fgA6l2OVm6lagAAAAABJRU5ErkJggg=="
    },
    ALCOHOL_BLAST: {
        name: "Explosion of spirits",
        description: "An inebriating explosion",
        meta: {
            action_type: 1,
            action_mana_drain: 30,
            fire_rate_wait: 3,
            action_explosion: 0.3,
            explosion_radius: 12.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGklEQVR4nK1TLW/DMBB9meo/ESmqXGkk2AGTikIKGp7RKGigLGODYxsbCApveAtKQgtaEFQyNdVUaX+i4IZ8sp1opHmS5buT3/M9fwBjoUh8Gk3MxXo1pfVqam0wuGGR+HQu50RtxoQi8YnajKjN6FzOe6QHk6ykwOF0BQBEYcC1bv8NAJg9PcLtZKIDJQUX66pBFAZc06J6NuG5nkyhITx//XhmzhY+N78eABwvNx5pHiPNY84BgNqMBgVMEd2J9q6kgJICURj0RKx29KG5OF5ulsDhdGUr1i3oOAoDpHnMAh/vCwBAue0scs/Cy3LGC+uqYd911SDNYygp/j/EctuxZ03W8+vbzrJlvUQzKRKfhnL3Ad2FUT/eH1TwkHJrRADwAAAAAElFTkSuQmCC"
    },
    THUNDER_BLAST: {
        name: "Explosion of thunder",
        description: "An electric explosion",
        meta: {
            action_type: 1,
            action_mana_drain: 110,
            fire_rate_wait: 15,
            action_explosion: 1.8,
            explosion_radius: 28.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAwklEQVR4nJ1SWw7DMAgzO1GkcKPmY71TeqJRiQNNYh9sNI92k8ZXYgw2JMAfcX88T5EZf4eZAcg5D4h9ws9d/dzMeZ6KMwCKNBHlnEspAESk1kpEs51by04piQiAWmspZVmW4IXhQ8F7e6hqXNd1bRUOUTNj5pSSX5nZvQHYtq2z1DJUVVUdcfawg0PBJxYRZhYRdzX46Qq8Jiz56L6Mfd9HS74EbxyWiMjMwlj7GuPrtJpfst2POE1d1uD6R/6CpngBct6ZgLNABqIAAAAASUVORK5CYII="
    },
    BERSERK_FIELD: {
        name: "Circle of fervour",
        description: "A field of berserk magic",
        meta: {
            action_type: 1,
            action_max_uses: 15,
            action_mana_drain: 30,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA50lEQVR4nKWTIQ7DMAxFX6cqaNJA0dQLFPVeI0UFPUJBUcjuFZQLVEMBlYaqgZGlS9xkA/0ksmN/fzsOHESRu3g+HvfQPl+vt1RcmUs005j0S6JCBplpXAEVuCO77YeI5CSTL03VfZIApI2Zxqi9jeADtVinfdKlqbrFOi0URSiC6qF/FXEq18puiIFsAEprcNS6Yu4c9U6NbGGTvVinS2t4NS0Vcwf4c/1FoIKelaPWXgFASsH2jKk5+MohHLVu+0H5p5QKIjWi8m8FGRXwnf4KKLlIu7+QW+W2H4A/q5wi8sh9psN4A8t7fPNPR0XfAAAAAElFTkSuQmCC"
    },
    POLYMORPH_FIELD: {
        name: "Circle of transmogrification",
        description: "A field of sheep-like magic",
        meta: {
            action_type: 1,
            action_max_uses: 5,
            action_mana_drain: 50,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFUlEQVR4nGNgoBAw4pL4+OT3dGQ+vwxrJlEGwDTeO/seRVzJWBCrQSgGfHzyezq6RnSgZCyIYgjcADTNv7DoZcNmCAsWhb8M/ETyGBgYGC5sejMJmY1uENwFSLbDNd+5c5dBRUUZw3SoQWwwVzAh28yj9TEPxkHX/GFJJgPDllIGA6bOPGQvMjEQCebMOcLAwMDA0NOzA0Uc2QC2L9f4J925c5fhzp27cEEYOyXFhuHDhy8MJSUemAbwy7BmwuJZ5EQPA7JBIid6GC5sejNpxYozDA/4midd+Fc+SclYkA0WCxheEBDgYWBgYGDYUxDB8OUa/yQYH9mlyBxsCekXVBFWGmdCQjaEgYHMpIzNIBjAlZkoBgB5Vn4K5XOn2AAAAABJRU5ErkJggg=="
    },
    CHAOS_POLYMORPH_FIELD: {
        name: "Circle of unstable metamorphosis",
        description: "A field of transformative magic",
        meta: {
            action_type: 1,
            action_max_uses: 10,
            action_mana_drain: 20,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApUlEQVR4nGNgoBAw4pL4+OT3dGQ+vwxrJlEGwDTeO/seRVzJWBCrQSgGfHzyezq6RnSgZCyIYgjcAGTNSbmxGdg0z5u8eAa6IUzoinBpxiXHgsvpMNuwab539j3Dxye/p/PLsGay4HImMS5iYMDiBXya0Q1nYIB6gRDAphEGsMYCIYA3FpBBUm5sBtFhwC/DmglLbcTazsBA7aSMzSBkFxJ0HjkAAJBMUnGiU8FnAAAAAElFTkSuQmCC"
    },
    ELECTROCUTION_FIELD: {
        name: "Circle of thunder",
        description: "A field of electrifying magic",
        meta: {
            action_type: 1,
            action_max_uses: 15,
            action_mana_drain: 60,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyklEQVR4nGNgoBAw4pK4//HfdGS+Ij9TJjZ1LLg0TtvwE6s4ukGM6IrQNXqZMWdsO/V3BoyfFcCOYggTPs2pPmwZ0mLMKGLTNvxE8R4TAw7gZcacgUsOGTBhs93LjBlu89NXfzE0IbsCIxCRNTMwMDBIizEzpPogXDN7y68ZyOoxvIDuZ2SAzTUYLkC2Ad0ryLGB4gJFfqbMrAB2DNNxaUaOSpyxgAyw2YziAlyuePrqL0agoSckjLyAKynDDMeblLEZhOxCXGopAgCZsmb029FmzwAAAABJRU5ErkJggg=="
    },
    FREEZE_FIELD: {
        name: "Circle of stillness",
        description: "A field of freezing magic",
        meta: {
            action_type: 1,
            action_max_uses: 15,
            action_mana_drain: 50,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2ElEQVR4nGNgoBAw4pK4dP/1dGS+nqJoJlEGwDTuOHwRRdzDVh+rQSgGXLr/ejq6RnTgYauPYgjcAJhmET2zjJXXvjCEa/GgaISJvbl0agayIUzoNhgosTGEa/EwGCixYWhGFkNxAbrTXQJsMi7c+8VgoMTGgEy/uXRqBrpXMFzAwMDAcOHeLzgbpilRnxdrmLBgE4Q51ZCXnWEPlO5evHcGNrVYXbBnwxGsinEaoKcomgmLZ2SAy1a8sQADhrzsBA1CMQCXK/DZzsBA7aSMzSBkFxJ0HjkAAAVYX0pMI11FAAAAAElFTkSuQmCC"
    },
    REGENERATION_FIELD: {
        name: "Circle of vigour",
        description: "A field of regenerative magic",
        meta: {
            action_type: 1,
            action_max_uses: 2,
            action_mana_drain: 80,
            fire_rate_wait: 15,
            action_healing: -0.05
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2ElEQVR4nKVTOw6CQBB9EBMuQbExFFbEHipjuQeBM2ApZ5CDbGmsoDdUFsZQcAk7qyGzn1ETXrU7nzfzdmaBlYgkx/g2F37PE12H4jZS4tA3QbtLFLlBlJhu04r75tfcAUBRthZJHEomaGWglbFsQ99Y8mII2Kl98Owi4tWpbUrIcAYAPHECADym+yKHpHiP6LbMiTIFmElbPlHCv/A6MJP+KYFjGaM7heNBV5zgejMd+fgoRQm8WqgyYSHIE10XZevJcR/NXSTvL0irTORfVzlExDuUYlfhA02EZQMiH5PjAAAAAElFTkSuQmCC"
    },
    TELEPORTATION_FIELD: {
        name: "Circle of displacement",
        description: "A field of teleportative magic",
        meta: {
            action_type: 1,
            action_max_uses: 15,
            action_mana_drain: 30,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAn0lEQVR4nGNgoBAw4pJY9vjrdGR+lCx3JlEGwDQuPPkTRTzenB2rQSgGLHv8dTq6RnQQb86OYggTuuYdwYIZO4IFM3AZsPDkTxTvMeFSSCxgRLYdzakZC0/+nIFLI8wrOF2w8OTPGfHm7Bkww3Cpw+sFZEPIMoCQZgYGpGgkFIWwmPFY+34GclRSJxaIdQUDA2ZCom5SxmYQDODKTBQDAK0WUhfuIlwBAAAAAElFTkSuQmCC"
    },
    LEVITATION_FIELD: {
        name: "Circle of buoyancy",
        description: "A field of levitative magic",
        meta: {
            action_type: 1,
            action_max_uses: 15,
            action_mana_drain: 10,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA90lEQVR4nGNgoBAw4pL4fj5+OjKf03BhJlEGwDR+XL4ZRZw/0herQSgGfD8fPx1dIzrgj/RFMQRuALrmqRwVGVpaagzXrt1i0NJSY3A8lzQDmyFM2GyBaWZgYGCA0fuN5mVgU8uEzfaHD+8zXLt2C85HZjMwQMIHFlZYXSAvr8gAcz7MFeiGoLgA2enILkDW+PDhfcIGZP/omMHAwMDQJb5yBszpMMNgYugAZyzgAlM5KjKqAq/OwBkLZS/DMxgYGBiWBJ7KEO98myHe+TZjSeApeAzAXInhAmJdgTMhIRvCwACJKpjNMevNZhCVlLEZBAO4MhPFAAAJtoOptmm41wAAAABJRU5ErkJggg=="
    },
    SHIELD_FIELD: {
        name: "Circle of shielding",
        description: "A field of protective magic",
        meta: {
            action_type: 1,
            action_max_uses: 10,
            action_mana_drain: 20,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzElEQVR4nGNgoBAw4pK4/fz3dGS+qiRrJlEGwDTuufCF4cqDPwwMDAwMOgosDC4GPFgNYkTXjKwRHcAMQjaEEZfmggABB2TNEzZ8OIDNECZkRciaLzz4wYCMYQaiu44J2XZkzW8+/GE4cOEHw4ELEDayIXsufIGHFdwF6CYj8/HJoXiBHAA3QEeBBUUCmY9PDiUWJmz4wMDAgAgHZGCgwAGPiYIAAeyxADN5woYPBwwUOBiQMXI0IgPqJSRkQxgYyEzK2AyCAVyZiWIAAMCjj+0xWu3wAAAAAElFTkSuQmCC"
    },
    PROJECTILE_TRANSMUTATION_FIELD: {
        name: "Projectile transmutation field",
        description: "Projectiles caught within the field transform into harmless critters",
        meta: {
            action_type: 1,
            action_max_uses: 6,
            action_mana_drain: 120,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFElEQVR4nGNgoAb4/////8FlEMWuIMUlLPgkX3T934JNXKKM0QenAYyMjIwwzTdPP30ME3/w+iqKwTBDmHDZjK55k0VHxiaLjgwGBgaGndt2PYa5DqsByDbCNO+Zfo6BgYGBwblgZYZzwcoMnF6Agb+BRzIerGeYAeO7ZBoxvHrwjmHviYoZCqLaDOqmDLJ4DWBgYGB4pdGfIaxpymBxnZ3hhMBPBjEFIQaGF6hqcHrh7fXTDMKapgz7tmxiYGBgYOA8+47B4gM7hjqcBojdKJzx9vppBgYGBoaLd58z6CtLMojdKJyhIKqNEiOMuAx40fV/y85tux4jiymIajMwMDAwqJtKy8KiEacBMEOwiSMnJIoBANtac+S8bWZUAAAAAElFTkSuQmCC"
    },
    PROJECTILE_THUNDER_FIELD: {
        name: "Projectile thunder field",
        description: "Projectiles caught within the field transform into blasts of lightning",
        meta: {
            action_type: 1,
            action_max_uses: 6,
            action_mana_drain: 140,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/0lEQVR4nGNgoAb4/////8FlEMWuIMUlLPgku07834JNvMyC0QenAYyMjIwwzaf3Pn2MLv/68VWGrhP/t8AMYcJlM0yzUSBfBrLm/dNdM7Yt2PUY5jqsBiBrOLf+0wwY+5+XTEZY27MZorLacDU4DVhVJZWBrNA9zzLjoK8miotwgvZrn/47ZOycDqP////3////f/8dMnZOt9t09f/////+4/UC8yferaKy2gzn1n+asX+6a0bH9S8MMKczbXsyo+P6F8JegIGwtmczYOHAwMDAICqrzbBz0nE4H6sBZRaMPqbO0rLo4i91P2YwMDAweCW4ycKikRGf7cQkJIoBAG9Yhr4Lr9mIAAAAAElFTkSuQmCC"
    },
    PROJECTILE_GRAVITY_FIELD: {
        name: "Projectile gravity field",
        description: "Projectiles caught within the field are attracted towards its center",
        meta: {
            action_type: 1,
            action_max_uses: 6,
            action_mana_drain: 120,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsUlEQVR4nGNgoAb4/////8FlEMWuIMUlLPgkX3T938IsyCCLLPb3PcNjiTJGHxifEZ/mm6efPobxH7y+ysDAwMCgIKrNoG4qLQszhImQ5gevr8I1w8DN008fv+j6vwWnATBnwzT+/PPj/s8/P+4ji8HUYDUAGcA0orNhgKABhABBA9hZOBSxsfEa8Pc9w2MGBkiIwzTCNCuIajM8eH0VroboaEQGyNGI0wCYIYQSEsUAAL+ZYgaez+zaAAAAAElFTkSuQmCC"
    },
    VACUUM_POWDER: {
        name: "Powder Vacuum Field",
        description: "Sucks powder-like materials nearby and releases them upon expiring",
        meta: {
            action_type: 1,
            action_max_uses: 20,
            action_mana_drain: 40,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABP0lEQVR4nGNgoAXoiZ3//+vt///RaWxqGdEFvt7+/7+6rHYGNsUyPMoZJYsTUfQwoduMSzMDAwPDky93Z6C7BG7A19v//z/5chdD882nV54g86vLamf0xM6HG8KEz+abT688CQoRb7n59MoTZIOQXcLEwMDAkFmXgOFcmOaH914wMDAwMMAMgslPb1qAcAGMg6w5p8C8xcrJkEFeSYKBgYGBYd2alzXq0joyMDUwSzFcANOsoCbIcGzfeQYpGQUGY6P/LeguxOqCm0+vPJEUf9/y7MkDhmP7zjM8vPeCQUFNkMHSzoLB2Og/ihdgljIyMKDGPXqoIwNkL8DSBDxR9MTOxxqN2EBrV3MGtypELzwdlCxOZGztas4gpFmGRxmuGcUABgYGBm5VRkYZHmWchrR2NWMkZawAW0ZCTn1UBQC4o7tcewUWkwAAAABJRU5ErkJggg=="
    },
    VACUUM_LIQUID: {
        name: "Liquid Vacuum Field",
        description: "Sucks liquid materials nearby and releases them upon expiring",
        meta: {
            action_type: 1,
            action_max_uses: 20,
            action_mana_drain: 40,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABO0lEQVR4nGNgoBAwYhOcnyB/z8tWj2Hb4UsMyLR48mYlgga8nOt7b9bqvaexGSwjIWqauOAhiiFM6Daja7784u9OGPvJi9enfx9ovIfVgJdzfe89efEaQ/MNjUlzkQ3p6Og8PT9B/h6KAbhsvqExaa6YhBSGV5BdwsTAwMAQk5CEzcsMYhJSDKpaBljlliyYh3ABjINs+zuHNXNVtQwYrLWFGN45rEHxBrKlGC6AOR2mmYGBgUFVy4ABPSzwukBMQgqumYGBgaE4QIYBPSxwugAGjl59x8DAwMBgocrF0LvhCc4wgCek+Qny8GhEDgMGBgaG29cuMAgdCEnWlWB2Z2BgYKioKDdldahXQjGAgYGB4feBxnsdHZ1wQ5DlYJrRUyNGUkZ2CTpAthkv+H2g8d78BPl76DRBjeQAADdfrFpkxKu7AAAAAElFTkSuQmCC"
    },
    VACUUM_ENTITIES: {
        name: "Vacuum Field",
        description: "Sucks nearby projectiles and creatures into the middle of the field instantaneously",
        meta: {
            action_type: 1,
            action_max_uses: 20,
            action_mana_drain: 50,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPUlEQVR4nGNgoBAwYhOMzZ//X9XCi+H2iW0MyHRdpDiGegyBpuUv/5/fO3kGNoN5uJUzFk9MRNHDhG4zLs0MDAwMX77endG0/OV/rC5AtzmS+4YujL38q8ZlXC5hhNn85etdFM2mlTnWDAwMDC/eX2J4POPQUXRDDJ1zM+oixRmZGBgYGFQtvBiwaWZgYGCQENRjkM2ws0Z2EQMDA8PtE9sQYQDjoIOElFiGF+8vMVSUdmPIwSzFcAEyWDBnMcOy1QsZOrpLMeRwumD5V43Lp9unHH3x/hIDAwMDg5GlAlbD8bpg+VeNy49nHDr64v0lBu4tjEexGQCzFB6N6DHBwAAJ0OVfNS7DaJg4LAZQDGBgwJ8KYQA9NaKkxLpIcUYebuUMXJoNnXMxkjLWzNS0/OV/9Ix0+8Q2BnTNVAEA9zGXaqyPjngAAAAASUVORK5CYII="
    },
    SEA_LAVA: {
        name: "Sea of lava",
        description: "Summons a large body of lava below the caster",
        meta: {
            action_type: 4,
            action_max_uses: 3,
            action_mana_drain: 140,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlElEQVR4nN2SsRXDIAxEv/WyEXkumMQjZhKKPFgJp5IjHMkkbVRxuuPQAfAfVbd1v8JXGgFIWY5G3dbdYq+nGOCmopSFyptQrGtPMxhYYYS93oBa6R8bZrxYMmUZRK30AXsTiSXVxBqeTUOD6IRZjPAO9GRvKqv76RXOMY8JvIxRbjsNwKKE/V2zaqVzfzyXufKLegFIXWGAYG8M0QAAAABJRU5ErkJggg=="
    },
    SEA_ALCOHOL: {
        name: "Sea of alcohol",
        description: "Summons a large body of tasty alcohol below the caster",
        meta: {
            action_type: 4,
            action_max_uses: 3,
            action_mana_drain: 140,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtElEQVR4nK1TwQ3DIAw8UOmDX/bIFMyQfVD3yQydgj349dE8ro/UkUFGUZX6xdnGvjPGkcQV85du/6MASCKn2OjoseXLKZLkzmCetiMhp0iNLZ9gAHAksS53AkCpARIQLA20T/Cyvt1N09KJFrZ8zRCl48isuNfBedqapFJDgy1GXge1Pjn3RYcFRh3OZAxnIJ0tVjrvp1foZR4MLI0j3ZoN8F0k51yzXWdWasDj+drvXv3OH5PZd5nkRu1OAAAAAElFTkSuQmCC"
    },
    SEA_OIL: {
        name: "Sea of oil",
        description: "Summons a large body of oil below the caster",
        meta: {
            action_type: 4,
            action_max_uses: 3,
            action_mana_drain: 140,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAm0lEQVR4nN2RMRLDIBADF8aFJ29y7SdQ+nEueUJqv8lzHamUuRhMSBtVlqzTCYD/QEpL6fGeJwLM8+MtpLQUz1uaOEAA2La1AJid6Ie4FnhNfN+fYfK1vLHFW1qsHG7zCKoAVfQhZudtaBWgYVXV9zX0NkAho5i+GfzmVnCzAXxepI7QQrya/VAPmokAOR/hl6czO8n5CMMDPbwA99ZOuiUdqI8AAAAASUVORK5CYII="
    },
    SEA_WATER: {
        name: "Sea of water",
        description: "Summons a large body of water below the caster",
        meta: {
            action_type: 4,
            action_max_uses: 3,
            action_mana_drain: 140,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsUlEQVR4nN1SoRHDMBCTfeUBHaEXHhYe0A26RUgnKekW3SCgvCw8lxECPIGLlHt/33ZwH1kvvV5nG/iP6ocxlnBJ4wGgOV/2Rj+MUWKrRwwADgCut0cEgLCtIEHMBbJHPL3u7iRjSaGFrZ5PyLb7GajxXpJhmRNR03YJDsucN+AwRTxr06xBboMubZa9A262Ukld8go6gYWl4Z6A712Kqk0540jI31WrsK34vJ+urjxQX8ioXCIOJgFiAAAAAElFTkSuQmCC"
    },
    SEA_SWAMP: {
        name: "Summon Swamp",
        description: "Summons a large swamp below the caster",
        meta: {
            action_type: 4,
            action_max_uses: 3,
            action_mana_drain: 140,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA30lEQVR4nK2SMQ6CQBBF/4qJEy+iHQmJjeEMlvZ7EC5k6SFsSAh0cBDNWpBvYXaz4CwNTrXz8/fN7AdDEmtqs+r2PwAgCVuVk3fMe02zVUmSX8DhsKM32Kpk3GuarUrm+Z4kYUjieBQCwPl6QnNvwpTiUgAAHrcaACCSobgUeNxqiGRo26eZAESy5FOdGyGSwbkxaH3vzE+Izo0Tk+9jeHxe/AoxKO5jfautqU1KVdggNmuTUlA1Ax9WHJoGCwBtVa/Nk5/7QwbeNIelgpxs0HUvo11cmjwMbwPg+yeuqQ8B54pIYqB+QwAAAABJRU5ErkJggg=="
    },
    SEA_ACID: {
        name: "Sea of acid",
        description: "Summons a large body of acid below the caster",
        meta: {
            action_type: 4,
            action_max_uses: 3,
            action_mana_drain: 140,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqUlEQVR4nN2SoRHDMAxFn325sOyRGbpBUHBoQYcqCA0u6gadwXuYmbikysk5OW5phfylf/7/24L/qGWd8hk+43iAYez3xrJOWWOrJxjAAdxecwaIISEDwSKge4Lvl4frtC1NtLDV8xqIYq2sudfDYewLUgypwJYjr4c6n5yPl1YvqCm0YlTfQJQtV5r30y8cY+4OrIy13NoNfBYJyu1qVQyJ7fp0beYX9QaJEWRAjG9NSAAAAABJRU5ErkJggg=="
    },
    SEA_ACID_GAS: {
        name: "Sea of flammable gas",
        description: "Summons a large body of flammable gas below the caster",
        meta: {
            action_type: 4,
            action_max_uses: 3,
            action_mana_drain: 140,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnklEQVR4nK1RsRHCMBCTfXS0DMA+6Sk9BANQZACGSEnPPhkgbepQKaf7k7HD8Z2kl/7fBv5VZRy2Hq5Z9+lmTT+FHQ5yotuotuWxad8aex6UOAPA5XreiTIOm2LHEQNA0puWeQUFYg5QjvhZXumka2mjw47LcZrDUbMBbs14ArEG7gEq0FwLVT5HY+3WaKYnsUG/plXLvGJ6vFO7s6M+reRo6MXUChMAAAAASUVORK5CYII="
    },
    SEA_MIMIC: {
        name: "Sea of Mimicium",
        description: "Summons a large body of mimicium under the caster",
        meta: {
            action_type: 4,
            action_max_uses: 2,
            action_mana_drain: 140,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABwUlEQVR4nK2T0UtTYRjGf6/tmBVGTRjREkXn1jmlTNFlhM5MUqILHfNGg66q2/1ZXQVBF4EESRTZBqnMA3pMzhpbF8ouKlPcyc+L4WeneTc/+ODj4X1+PO8DnyilaOQ0NeQ+M8DsdErNTqe0+PTFQyUivsHM+F2f9nzqvgIIAATvPKay9EaJiMzMpNRIZhxAiYgopcjMJVS6v1drzybH1OSDBBpwDEkHlEom71HlgPh8DZKZS5CeMGEN0v0Wf5pbtNkHAEgmR3yxw08GeOT88Gn/musAEdNkw1mn1HS861VW2mo9/+4tYXUNw5JbX2JrdZ/RWDvLboHOm7fZ9WDXAytoYcTG9LC99RkvKvpqAMDXvIPVHcH+tgnAUMjCrthU19/7IP+fAEDkoALAl40icJ72nUPaLhwS9pr5Xr5B/JKwvT1U6yUewi2vYlQ9fwKAvkiXfq8VbWKhGPGeHpYdB4BbZhS3vErn9T72fl08SRAI7QGwmCsCBpdbrgCQzxYwPv7lGtA6+JOdco6oNcBmPu8v8d1itm63wY7wqTtvuTXz64XsSYKXrxYEUMGEqQdzhdKpgMo5gw9vPwEIgDT6nY8Ac3yUG6mNWXcAAAAASUVORK5CYII="
    },
    CLOUD_WATER: {
        name: "Rain cloud",
        description: "Creates a watery weather phenomenon",
        meta: {
            action_type: 1,
            action_max_uses: 10,
            action_mana_drain: 30,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlklEQVR4nNWRSw7EMAhDH1Xv67NwYroJ+ZDMqLvReEWCbIyBX8MAImJruHv/lGTujqRBNNsFZlL2GqKKpMBVJhpgkgxYxFo/3H1xehVyiqWDyImSuvAsclEw79kISMLdqdMB7hN5Fjkg17N8EBE1wK+QZBniDcvOr7Bl0CzPDt7UQ6DYO9afkGeEEU6vD+dcTnt08H94AI8UUrRDAfJXAAAAAElFTkSuQmCC"
    },
    CLOUD_OIL: {
        name: "Oil cloud",
        description: "Creates a rain of oil",
        meta: {
            action_type: 1,
            action_max_uses: 15,
            action_mana_drain: 20,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR4nN2SwRGDIBBF/2ZytQr7sAitIy4FcIsFsPRBE/ZhFRZALoGwoBlvmck/wcJ/sB+AX4sAIMbYLCzzlIvWBxIRMPPHSNQCSlPXD5TG+7bGGtIAlnmKycTMap4gCczMGvB8jGrzt5MT2BgDALjVprJP60O+kYhARJqs7kfmElKr6wd6t0NNBqeuStYHUhk45656s1QGzJxTBnBprHT0kc7knFM3Vi2Uz7Zva37aul5m8Ad6AUMqfVVUU9KQAAAAAElFTkSuQmCC"
    },
    CLOUD_BLOOD: {
        name: "Blood cloud",
        description: "Creates a rain of blood",
        meta: {
            action_type: 1,
            action_max_uses: 3,
            action_mana_drain: 60,
            fire_rate_wait: 30
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7ElEQVR4nNWSsY3DMAxFHw/xDJlBLqIVMoZrNy7pUaQF3F7GyAhWlRkygwteYSuQHRu46y4PEECI+B/kB+FfYGZvb3TORufs+3IxMyOEsOrvGpQigBACIQT2TDKnXKS6tnvXCYCqgvf2BAF4tq3cvLfrNBFBVHVtUIoBYozQtnIeBmtSkhgjTUpzv64tLsYAX9s8SvcsUlVijLPxhhPAo6pW4tJky73r5DwMxjKF5BBv3pubpkNh5lFVNCmJyLyFwJz2X+n7HlgyUFWWsQB+VWd2Q8yrlDXA4Yr5YEbnXgczOmdH/+UhvU3wefwAa12p0PRg7sEAAAAASUVORK5CYII="
    },
    CLOUD_ACID: {
        name: "Acid cloud",
        description: "Creates an rain of acid",
        meta: {
            action_type: 1,
            action_max_uses: 8,
            action_mana_drain: 90,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHUlEQVR4nN2QsUrEQBCG/xHTXNBEEMHqmqtjZWN1kMoieQhNlSbpBFEkb7DTpNG0WtkcWApXpUgaSes9hE0ar5grwobsGUGsxA8Whp1/5p8Z4E8gIl9eUDly834s958XIiJQShl5DekGABDWrpwcTDCdnqPNPdIiO24ksgpiZiRJ0hVSl97RorB2xS8zOny5osgqyI6b3qbNPQprV+y4EWY2picACCpH/DIjbDHm/LC+lDb3KE1TcwKNFgJAZBWk/5gZzIzF27Oh3wWA5WoNf1A8bLKNX2bdemk3fX/E/Se733k+s7BcrTGfWaNNFqcfpI9IAKCU+tZxiN5bKQXjBkmS4PXsrp9gGN8eXfdxUDnyU7Pfs/c4MRzH4n/GBk4Yh1ThTiYFAAAAAElFTkSuQmCC"
    },
    CLOUD_THUNDER: {
        name: "Thundercloud",
        description: "Creates a stormy cloud",
        meta: {
            action_type: 1,
            action_max_uses: 5,
            action_mana_drain: 90,
            fire_rate_wait: 30
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3ElEQVR4nK1QsQ3CQAw8I6ahQKL4AZLUpGGQ3yNN3oOkSKgJIyAaFmCQo8HRJ3lEgjjppdfZd/YZ+AdIzl5/zGmPJEIIo3rSIBbF9ZTJzMBE1tQfc4YQRibGxQZbALiWBfNzL0aqKlCUsr90JCmqisx7ERH0ABUYejfTe3jvh3/WXcQ4VUW80Qhx5tRBp5njfjHRtSwGcnc4JAc9bjcAQBz3I1zdVCR5au/d1+YpTu29I0lXN9VqMd8wk1Xi8ByvbDHCc4GRq5tqmtc2cXVTLTJJbRQPWC3+6Yhr8QLubNfkT7T0cQAAAABJRU5ErkJggg=="
    },
    ELECTRIC_CHARGE: {
        name: "Electric charge",
        description: "Gives a projectile an electric charge, that it will release on impact",
        meta: {
            action_type: 2,
            action_mana_drain: 8,
            damage_electricity_add: 0.1
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAbUlEQVR4nGNgoBYIb3+OVZwFq+jq458ZGBhWYpNiIt5snBpCHHgYGBjWHPhClAa48SsrJYnSADEeD0DxNLLrIf6GgFBLXuw2YDUezTOMuKyG24BsPLoNBI3HqQFPWGHXgCcq8DkJV1TgcxIVAADaQyN51kYVCQAAAABJRU5ErkJggg=="
    },
    MATTER_EATER: {
        name: "Matter eater",
        description: "Makes a projectile eat the environment as it flies",
        meta: {
            action_type: 2,
            action_max_uses: 10,
            action_mana_drain: 120
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoUlEQVR4nGNkwAOmexv/33HmAT4lDEx4ZYkAGAb4iwv/p8iAjS/fMiLzPUwU8BoAV+wvLvwfXTMMTPc2/s/AwMCALTwwNEz3Nv6fufUsToPQDcGqEB9AN4SoWPgPBQwMDAyZW88yIocLE0wBPhofINkLDAyoUY3TC7CQRxdDF2dElsQW+sgaiIpG5PRAVl7AlZiIMoDUfIBhAKm2MzAwMAAAh4BYMkRfuNoAAAAASUVORK5CYII="
    },
    FREEZE: {
        name: "Freeze charge",
        description: "Gives a projectile a frozen charge, that it will release on impact",
        meta: {
            action_type: 2,
            action_mana_drain: 10,
            damage_ice_add: 0.2
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAr0lEQVR4nLWPMRKCMBBFfywCBaTwCCmpAuegp/cy3sKeyyAVJYeIFEgTi3XiJlFmnNFtsrPz3t8N8GUJei6j7acFQFcVAIyW47x5qJ+WripORgE40Mho6VHPUU+0nz+FRuXkjPNmtGxU7rVzeyQgEHgk70nm85fAj+aRAOoyiz9NNdiV04Nd6zITImCCk6K8lI4FvhrA9XZP4wIhyov8jyelZ+yVc24feLPhx8L/6wEchShYugcbZQAAAABJRU5ErkJggg=="
    },
    HITFX_BURNING_CRITICAL_HIT: {
        name: "Critical on burning",
        description: "Makes a projectile always do a critical hit on burning enemies",
        meta: {
            action_type: 2,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRUlEQVR4nJ2SsUrDUBSGv1MF6wu4BKmgccxaHEQ6leIgdLNSXDq0ax8gQ5durmZwK9KpUAeRjuJgQ6dkNDhJHsFCp+PiLb022tYPLjfJvf85//kJqoqq8nldUPO8ycrxzVa5wn/ILb7M+i0FEBHiONY4jlVE+G0BiKpaYoB8LRCAXq+nAGma8vryzOG+w01wJ+befIRZv6VaKqClgmWvXq+LEQPsHRzNz6IoUoDtVTMa8cnpGdXplKrva+i67A4G4Hl2Bj9pNxtqxI7jABC6LsUk4bjTkcwMdi5vRURoNxv6/pHy8Phk5VFMEiZhyNVoJPMMRIR8LZB8LRARYTzsWmKD53lMwtC2aRws2r44r1gfoyjSN9/X+3JZAcyuqnaB8bC7JF7ECK3mpkBW57ULtJsNNYlvwtIIq8hyIJsUyOLPH2kdvgAnD9m7Ea4i2QAAAABJRU5ErkJggg=="
    },
    HITFX_CRITICAL_WATER: {
        name: "Critical on wet (water) enemies",
        description: "Makes a projectile always do a critical hit on wet (water) enemies",
        meta: {
            action_type: 2,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABVklEQVR4nJWSMUjDQBSGvysuTk51iZKCRrBDCkUoDtaxiIPQVeogFergUmc7tEM3ZwcnW8eCDiIdxUFDi5IODgYHkUzuXZ9DvZCYiuaDI3cX/v/97yWICHot7F9I+PyflSJEOrNKUmbCh6yZDvaj0UgAcrmc+k0sIigRASDfGkrWTPPy/snTyZpSStHpdATA930e7u9YWjQ4PTtXYYPUT9dwikqlorQYYD6zHLxzXVeCFnR1gKJtkm8NBVBAIF7f2KQ8HlNuNMSxLGZ7PbDtaIKibUZS1GtV0WLDMABwLIuC57HSbCogPgOA7p6pjg8P5O3D5/rmVgHBPAqex8Bx2O33lYhMWlBqYvb8neRorh0Ra2zbZtDtxj9FmHqtKjvbW5FL13XltdGQy1JJAPRTRKIGj1ftmDiMFkaKa4Nplf9tUK9VRU88CbEW/mJaApXEYBqxXzkpX2r+2Icy8dCzAAAAAElFTkSuQmCC"
    },
    HITFX_CRITICAL_OIL: {
        name: "Critical on oiled enemies",
        description: "Makes a projectile always do a critical hit on oiled enemies",
        meta: {
            action_type: 2,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOElEQVR4nK2TsUvDQBjF31dc/APi0FQRal07ioM4BpEiuGfLkDnQwSVDFzvp6iA4HB0LFiydxUGD02VscbLp0r3rc+kdaU3BqG+64+P33ncPTkjiL6rkL92oVdptK3+pVR2ICEgiTVMCQLPZlE0wSYh5QjdqsVZ1MJ3NAUCubp+glCIAZFmG15dn1Hdd3NzdS96gsu5aqzr27Pu+GBgAdvYP7ExrTWDZgUkHgPqeAwC2CwMfn5zicrHAOI6plOJ2vw9rYLSE7RZRGNDArusCAJJGA0eTCQ47HcmXKNPZ3Kb67QeJwoAfnxkGw5EMhiMopWjg9yRZbXJdb4/XvDg/Wxkopai1Zs/z2PM8WnbdIAqDb7DWmuM4tuBGg6LkvAy4sr0xKEr+sUEUBjSNl1FhB2U3kH/9jb/RF563uPbOtOroAAAAAElFTkSuQmCC"
    },
    HITFX_CRITICAL_BLOOD: {
        name: "Critical on bloody enemies",
        description: "Makes a projectile always do a critical hit on bloody enemies",
        meta: {
            action_type: 2,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABR0lEQVR4nK2Tr0/DQBzFP0cwGJIaTLOEhA05uyAImboQBAlihsxVVO8PqJiZQ5OA6xATS4YgZFUDBFumWrmCItVzs1/M7rJuI8DgJZf7lfe+7/typ0SEv2BrcTPQWgZaby5QdBy7TpJEkiQRpRRfDQBlWhhoLUXH4W06BVDVKCIMQwHIsozXlycOCi5X17fKFBGRvINlF/V6XRkywN5+0d7FcSy2BVMdYLdWA7DJGvLR8QkXsxmTIJAwDGWn213NYE62Lhq+J4bsui4Ao1KJSppy2Gwqm8E8eeui0Omohu/J+0fG/cOjAmwelTRlPBpx2e8rEWEboBpFADacYa8lrZtnSzYol8uM2+18aMsPqeF7cn52mjuM41gmQSB3WguAmUUkLzDstVbIizDEXHEjsK7yjwUavicm8d9gpYXvsM6B+tffuAk+AdNFsTOA4wqaAAAAAElFTkSuQmCC"
    },
    HITFX_TOXIC_CHARM: {
        name: "Charm on toxic sludge",
        description: "Makes a projectile charm creatures covered in toxic sludge",
        meta: {
            action_type: 2,
            action_mana_drain: 70
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/ElEQVR4nK2SMQrCMBSG/wqeoYMdWsmUwfYMQhy7iqvQAyheQ3uA7h6ihQreQASnghnaE/QAzyklNqlW8F/y/kDe+97LA/6p5MRJ95QkpJ82TXTDo2kX54xRI+XXJG8Jojnv4lVVOY/nE42UAAAny5yP+GkZ0kVuKC3Dt0o5Y4P4BkGfQpHovt+So6qrh9zb4nw9YLe8Gcg5Y8SDADPftxNwb2ul0GkG56JmcJEbqoWgo+sSANRCUP8H9LlYMe9ti30cGwS2nzCGeG9brBeLDlOp7wcJFAUPAgDAzPfRSAmvKIb3QPWk95ozRrUQ9G0PjCSf7myFftZoorF6ATIdgRAvJerfAAAAAElFTkSuQmCC"
    },
    HITFX_EXPLOSION_SLIME: {
        name: "Explosion on slimy enemies",
        description: "Makes a projectile explode upon collision with creatures covered in slime",
        meta: {
            action_type: 2,
            action_mana_drain: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA50lEQVR4nGNgQAITdBr+M5AImBgYGBj+///P8P//fwZhXiE4myQDYEBZRBHO/tzOTZQpcAOWWE3+j0zzVn5lxKcRZgETugTMFd8P+//HpgEmh2LBYstJ/4/5bv5/zHfz/x8Tnv9fbDnpP7Ih+LzDgswxcjZBcQWyId8PM/zntN2I4S1GBgZILCyxmvwfptFykw/jlw6e/ywJNQiVd07AmX+O7IGHEYqJn9u5/7PYuCAEVCwwDMDmCqzg+2H//9+ft0MwUoCiBy7cZqwGQDFOjbgAzEB8UUk/QMjpGCkRHfw5sod6rsEGAPBsgcb/bsP+AAAAAElFTkSuQmCC"
    },
    HITFX_EXPLOSION_SLIME_GIGA: {
        name: "Giant explosion on slimy enemies",
        description: "Makes a projectile explode powerfully upon collision with creatures covered in slime",
        meta: {
            action_type: 2,
            action_max_uses: 20,
            action_mana_drain: 200
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABS0lEQVR4nIWSoW7DMBCGP0clURSylRRWDRxZVRBNLWrxuqeZFDYwyXTS6MDAHmAdDktAH6LTYMlYVIVE8kBzjt2m2iH7zvff57sDx15ungwnVhfrM58bCwCMMRhjuI6v7PmSVToyktyUOYEbnAzHvY8rHRk5x9lBAZCkxNlBKSH4uHs1k+GY798fHu4zAAbzFSQp7LY0ZY4I1HttxOcRuBSD+apzJqn11XttmvdnGwoAWx1gupzx+aW9RI+mPTdlTpwdlEcwXc56e+GJtejSi7MeANw+vnnVre22AISLjbJkAEopKh05mMfG9YokKXWBnbOCbly2cX2JDoVLEEA3WxmVoF76grudyo3bQDt7F1u+FI4yJW+bMu8E6mJtwsXmuCRAOMpUpSPj7UMrJiLWpAci5N5ljYWuLtZGivybfFrE/bsn0id2SeS04B/KdMY33K74bgAAAABJRU5ErkJggg=="
    },
    HITFX_EXPLOSION_ALCOHOL: {
        name: "Explosion on drunk enemies",
        description: "Makes a projectile explode upon collision with creatures covered in alcohol",
        meta: {
            action_type: 2,
            action_mana_drain: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0UlEQVR4nGNggIK56Sr/GcgATDCGsjgjOfoRBshKiqNIfG7nJspFTAwMEOc/fv6S4e50G7gm3sqveJ0Es4CJgYGBYQGLJEMPuzpDDYssXMH3w/7/sWmAyaFYMDdd5f+BOtX/yC5ANgSfd+BhcPflf4bHz19i2P79sP9/FhsXDBfBAE5/fm7n/s+SUIMQuHMCzvxzZA88jOAu6InX/Q+jYbZiA5y2GxkJBTDc6d+ft0MwmpewOherAVCMUyMuADMQX1TSDxByOhM+SQYGSJTRFAAAd6p4DogBbywAAAAASUVORK5CYII="
    },
    HITFX_EXPLOSION_ALCOHOL_GIGA: {
        name: "Giant explosion on drunk enemies",
        description: "Makes a projectile explode powerfully upon collision with creatures covered in alcohol",
        meta: {
            action_type: 2,
            action_max_uses: 20,
            action_mana_drain: 200
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRUlEQVR4nIWSsWrDMBCGPxVBMcFkNB4yWQ+hwdm85xW6lT6C94KfopCtc3Zv9pCHSOc0cwimIFCH5BQ5telNOunu///7dXCLj1fjmYih20zey9uTJEWm5upGcW4WXppd3xIAVnk2W3xuFl7OaX25MhlLWl+UEvlFpljlGcVbr6RYlxUYC4c9rm8RgOHYeLnTAFuds3xekuo0sOuyuksxFvoWXVYMR+vd9j28a4AXd6T4+WblMj7jZmPHgLdclxWub0nri9JS8HXywGnePQG7SRcv/lgfvi1iD3HYA5Csd6EvKDg3Cx/L5LCfBjGWoSPshpLmMOcce6QiVvAE97+VrxKpcyPE2znyYDR/DCK5sSR5raTW9e0dYOg2PlnvrksCJHmtgi8PHghICPFAgOJc1ljUDd3GC8m/zY8k8ewjkCmwOZBHwl9/kLpJil/qZgAAAABJRU5ErkJggg=="
    },
    HITFX_PETRIFY: {
        name: "Petrify",
        description: "Turns a wounded enemy into stone",
        meta: {
            action_type: 2,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABpUlEQVR4nKWTv0tbURTHP+dRhfACsc3i8GzrEqWkDg6Ca7c66ZhCQaFQ6NIWK+jQpYuCLTqJg0OkoEMXNzcX/4MkiO0SWu+QDjcxUHmQocch3sv1mc0zfu/5fs/3/LiiqtwnHmSBuYUlnZgsA7C1viyDSCJ9WFUR5yAkhpGmXQDZ3f5yR0RViUQEESFLTtMuadollyvw5/eFflz7ptnqAALwYfWrhsSZwl8vVO+VAPh53vBFtjc+iW/h5fyixvmYJBn35BfvXgHQ6tQ4O2x4EWOaJMm4F1FVojgf+2ohGWD04RTPKmWeD/8C4OrflX97+/6zAkQhGMbim9e0OjVWVzY9FudjPxtr2wBEA9lAde87Bz/22dhcuWXf2jbWtr2byFkzpkm9V+Jk54BWpwbA9OxTAC4vre/d5R8fVQVuDunxkzFyuQLGNCEpwWEDKvD/tAgVGBkpctHrbwLwZC9gbZskKVAsPuonTZap7/cwZgiCLWTJANHxUVVcC24wxjR9z5k7uHPaHlBV5haWNFxrmOdmsLW+PFjAhTssN+Ws5ezvlft+52vjYNMjUYXrhAAAAABJRU5ErkJggg=="
    },
    ROCKET_DOWNWARDS: {
        name: "Downwards bolt bundle",
        description: "Makes a projectile separate into a bundle of 5 explosive bolts as soon as it moves downwards",
        meta: {
            action_type: 2,
            action_mana_drain: 90,
            fire_rate_wait: 25
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVR4nGNgoAWo92uaS4wYAwMDAxMxhuDSjBX0Rk04CtME0wijYXLIgAVdQJpN1oqBgYGBj4dPAyYGY8PkcIIVCWv/o7N7oyYcxSaOFZyuvPAfl0EwGqYGp2ZkxciBh2woslp4LCjYyMMNU5ZUZmBgYGDQFNJOQhdDV8vEwMDA8Hrr+/8iXgIYropYEMyIy8//////j8J5vfX9f5hhuLwGk0NWjwGQJdADDKcmZAXITkPXgNdmbArQ+egWEAQkayAHAADzOp7/J0XF5gAAAABJRU5ErkJggg=="
    },
    ROCKET_OCTAGON: {
        name: "Octagonal bolt bundle",
        description: "Makes a projectile launch 8 magical bolts if it moves slowly enough",
        meta: {
            action_type: 2,
            action_mana_drain: 100,
            fire_rate_wait: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsUlEQVR4nGNgoCV4vfX9//////8n24D/////f731PV4DmPDZyMjIyEiSi7DZeLrywn988lgBTBOyZmQ2UWBFwtobKxLW3oCxcaljYmBA+O311vf/YTZFLAjWuP7u6qt6v6ZD6C5ADgsWBgYGBhEvAYY32z4wiHoLMsIU331+9+b1d1dfwQyDiSvYyMPVE/QCuleIBtgCj6hARI9ndE0EoxFdAbpikpM20QkHF6A4MxEDACXlu03ly+rvAAAAAElFTkSuQmCC"
    },
    FIZZLE: {
        name: "Fizzle",
        description: "Gives a spell a small probability of short-circuiting",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -10,
            speed_multiplier: 1.2
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR4nLVTsQ3CMBA8I9ago0vBNN6BTBCLFim6TGB2SJkB0pGeygW7PA2WXo4NIREnWfK//3T3bxv4F0QkrCbfh+G5muzJ8Zf6XSY36UC34kn7USC1HmNPjp60Oj+bkSaLSIhKnrRfByoi4b2u2qJWTduJ2Kt9f+u6x7lpLAALALVzfWzhVFUHY8yx6EL3qx0sfg+amA7Jk23pDLmigkCbu0KTcTEBQO3cZZH1EjY954hNH2opXsdKgJBd6dDCAAAAAElFTkSuQmCC"
    },
    BOUNCE_EXPLOSION: {
        name: "Explosive bounce",
        description: "Makes a projectile explode as it bounces",
        meta: {
            action_type: 2,
            action_mana_drain: 20,
            fire_rate_wait: 25,
            bounces: 1
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvUlEQVR4nGNgGHLgPxTA+Ey4JCiygRRxogwhy2UwTYQ0MyFzPrdzUx4G2Fzx/bA/aQbDNKA7H5tBjLg0M6hYIATvnGBgYGBg4LTdiKGesby8HMPUBp8bGAY0bNHA6lqWM2fOYAg2MJgwNPicQDWEgYEBm1omDBGoCxq2aECcDnU+AwMDwwaXExhqMQzY4HKCwafhC6qBWzQYzpw5wxCwxwJdOSQQnZ2dsUaTiYkJQ43AFKwaGRgYGPbu3csIAEIXZ9DnibVeAAAAAElFTkSuQmCC"
    },
    BOUNCE_SPARK: {
        name: "Bubbly bounce",
        description: "Makes a projectile shoot bubble sparks as it bounces",
        meta: {
            action_type: 2,
            action_mana_drain: 20,
            fire_rate_wait: 8,
            bounces: 1
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+ElEQVR4nO2QrU7DYBSGn2/pkrW6liy7hjrMRO22ZKYJFRMNHlmBwXAB85tBbEkFCGqbOlR7C5D5KkRHYMnBsKbL1wYa7B73vucv74EznZEfjrrXVvjXhS6+hjldiYiIOV1VA52Gg7SUIC2rJSIiF3fvJwvrGHVhOx6ToaE1LRcD4rHPFmT/fK3qtV5dFHlEvDsAYM3W2I6HNVszH/WZDA1sx/tbjGOUx9dPCdKy0k0xVBiGmrkxb1kuBsxHfZ7evrh5+MDf3zceNLIs08zCiojHPgDx7kCRR2Sl3gegXNdt/O6LdYXteBR5xGW5bY2sANqW/EaSJOob2FGC5KgF73kAAAAASUVORK5CYII="
    },
    BOUNCE_LASER: {
        name: "Concentrated light bounce",
        description: "Makes a projectile release a bundle of concentrated light as it bounces",
        meta: {
            action_type: 2,
            action_mana_drain: 30,
            fire_rate_wait: 12,
            bounces: 1
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBUlEQVR4nLWTr04DMRzHP3dZpskpxAwPMEE4hThzgTdgigRz73D3BnsDzBYwC2Yes5zYxNTPnVnCkplpgt1MEaxNb205DD/Xfv+2TeE/Rymlujjxb+DqOPWa2sZxCABYN4vOlsYgOo1tsmk+Wsk2L3iEcxMttkXeBiGTkFjjsb0AeHq97rz55WHimi4PE0foe8axjMIB56A20K3+0q5FHstIdYmjsiwd4OJhx+3wjqxfsDpOWTcLvuZX3sCeiJjF4PGT/SwhJSW7KQDI+gUM4X2+xebqaT3jfpYAICJUVWX2X96eTYDTwNvrNPovXG7uf9IlcTgRQJ7nrXswR0lTb209dV1H34xmkgZj3MJKAAAAAElFTkSuQmCC"
    },
    BOUNCE_LASER_EMITTER: {
        name: "Plasma Beam Bounce",
        description: "A projectile launches a plasma beam upon bouncing",
        meta: {
            action_type: 2,
            action_mana_drain: 40,
            fire_rate_wait: 12,
            bounces: 1
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/UlEQVR4nJWSPWoCQRTHfytbJyzYCDnEENbWZrHwCgopPMC2a5tCkjp30CsEDANi6xQieIoEYnKBl2I/mOzMjvpv5uO9+b3/mxkIaHMWCcWD2pxFREQuQeKuwP4AqGoMqHerM6nkANoBgPH9ZWADiCq1IXYBO88B2KA2RETEPnSV6hfoctSpx+eT1ADfvVyt5bY8vNyGAd5nfHhafYbWtuKiKJwKd5MpQ1XOhwqYT/u/g6PXSWyMaRbfozeSXU7KAtQrUP0FBfod7FxvC8kuB8pE/bJo9uf5+qsu4Djo6g3g46ccZ4Nj3xhDgusgAsiy7F9/TStp6rVdS2sd/QE4oYftutUacgAAAABJRU5ErkJggg=="
    },
    BOUNCE_LARPA: {
        name: "Larpa Bounce",
        description: "A projectile will launch a copy of itself when it bounces",
        meta: {
            action_type: 2,
            action_mana_drain: 80,
            fire_rate_wait: 32,
            bounces: 1
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4klEQVR4nLWSIQ7CQBBF3xI0Sa9C65ANCYKLcIIFhWUVXKAWgwSBqQPFImoJB0DBDRhEKWnpbiEhfLPZmfn/z+wO/BMiIp9qWr+aNArcjvWYPFETeE8AbJP99x2oJ8oi2flQcS7XeUd4FynIZZKzA59IE9kpoPtz79c15Zz4aQ+Wo50UZ5Oz0lrXksYYdbUiQZjvwjbZk3XWToG2tfZ1iVpD7H3DcrSTIMxjQQgDemSrNeVa5wj2vgEgOU0rW2gmi5dBrQPfbGY1RjPLL92L0x1AAcRxXHmHYpQoirxEgDRN1QOoPnaC7luqsgAAAABJRU5ErkJggg=="
    },
    BOUNCE_SMALL_EXPLOSION: {
        name: "Sparkly bounce",
        description: "Makes a projectile release damaging sparks as it bounces",
        meta: {
            action_type: 2,
            action_mana_drain: 10,
            fire_rate_wait: 9,
            bounces: 1
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAx0lEQVR4nM1RLQ7CMBT+SubGMRA7QAUCV+RSjjNb1/sQJFOQMLEDIOZ3gJXMkDzEIOnaVzIcn2ne+376Xgv8NZwGhT16IxIniV91KXJJeFLs14PNyT8REqGJu3nsbWwee0t+SCpg8QS+ebwc0vtzXzXYnJyeHtznwyCnQYIzZ7v9VGy2QNfgeT1D3B5YHxHpRVVV0QSmvE/mD7oG5lSwG2Rt20ZNAwlTNrMJgAKcViil2AeSUs5qzgwAGdv9YgixWqRKoK5r8QIiVZULmtp8hQAAAABJRU5ErkJggg=="
    },
    BOUNCE_LIGHTNING: {
        name: "Lightning bounce",
        description: "Makes a projectile release powerful lightning as it bounces",
        meta: {
            action_type: 2,
            action_mana_drain: 40,
            fire_rate_wait: 25,
            bounces: 1
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0UlEQVR4nNWSPQ6CQBCFP4wtCa33oDPQUHogvACBa3AFEksaid22wBEs3cABtNDlZ3cojJXbbN6bN+9NZhf+7jw/x+DdVuGnhG94APJuWBVtsYTjqnUNl6RpspvtMGdMY7JlIE6Qd4O4QImLq3attcdejmiERmOCjEbcg3nO62O+l7wd7KVp6riczgVRMOOiH9Fl5oQB7JVSDhncR6LAn/Dx4HMBJO3OYQBdZhT9OOHbfZRk2wZKKXSZ0Who9NtQSgfwAJIkET9HGIabjQB1XXsvAkPGotU7qrIAAAAASUVORK5CYII="
    },
    BOUNCE_HOLE: {
        name: "Vacuum bounce",
        description: "Makes a projectile remove earth as it bounces",
        meta: {
            action_type: 2,
            action_max_uses: 20,
            action_mana_drain: 60,
            fire_rate_wait: 40,
            bounces: 1
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAcElEQVR4nNVQwRHAIAgLXkdyA4diBodyA3ayn3pXFVpbro/mRyAkAPwO9UCrg9VwOTzhl5a8StZEd+Jw1XRjJbo7gXsBMfMUM+dMI6fNAcAmIh0RYzTdxlngix+IyBSXmavmDgCUUlJvO59iiUsptANZQUg/6N1axQAAAABJRU5ErkJggg=="
    },
    FIREBALL_RAY: {
        name: "Fireball thrower",
        description: "Makes a projectile cast fireballs in random directions",
        meta: {
            action_type: 2,
            action_max_uses: 16,
            action_mana_drain: 110
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1klEQVR4nLVRsQ3CMBA8YAHaKDUbuKSgyQLZgB4pQtnBFWOkTRagYARaS6GMlZIRjgJ/5DhGWEJcZb/P/3d/wL9htOJPRA4tv/KMViTJkOzeKr8ZSfZFNvHWALC5WcB2QF5+VGK0IvISsB1213EVV+EmBBZqACDJpH2IHZHPoa05tGmfg8l0n+uFSq/h0ovDszk328P+PhXy8jIj2A6P4+l97ouMRiuGaYgFSUJ4M0t+MVyUI1axeBeQRrM9eIkkpyDw0/DvyYnEiGIzqUmM0BdZuoJUvAAnV+s4ixXfhgAAAABJRU5ErkJggg=="
    },
    LIGHTNING_RAY: {
        name: "Lightning thrower",
        description: "Makes a projectile cast lightning in random directions",
        meta: {
            action_type: 2,
            action_max_uses: 16,
            action_mana_drain: 110
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxklEQVR4nJVTyw3DIAw1Uo/pCL31whLpuRuxQTJPOkvCHsmd1wMyMWA3aiQr4AfPzx8IAAEJ+d/btO0/MXFII6l9kozXDdiTTNuOcVnRK0k1gZXKuKwqaZWCBDiiJjv76yBqcdoobBruAJD9SdC52p/3N97M8UDwA70+kd7PBxERBT+UK3M8Clnwd1d8XDxdYirGONeH6yFSOGW1EWVUJUtdQds+ayIv5PdE7d5o49lrrfeS5HIO+HL/DtRRtsfXIv3r+WpnvqWIqUogPwLZAAAAAElFTkSuQmCC"
    },
    TENTACLE_RAY: {
        name: "Tentacler",
        description: "Makes a projectile cast tentacles in random directions",
        meta: {
            action_type: 2,
            action_max_uses: 16,
            action_mana_drain: 110
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVR4nJVSyw3CMAxNqk5RtatxJWQCBFdaMgHiSldLlDUeB+RgXAeCpR6c+n38EgPA/PPNlwd435sf5V3AOA2lTzF//P9KQGAOut2PtpmgBuLVtRBozjYE/LDFEc1bAMa7AGlThnc67zZreBdgD/srxmkoA8u8Vp1wkmVekWJ+h0hASpyryzW527KCpihJJHmK+UWglVxFPiBy0msBaqDaTMevRFMnID/j8yUD7b1zVemU+p4GpQvNsnbF1RC14iIk8AQBQbb3Q0JE2QAAAABJRU5ErkJggg=="
    },
    LASER_EMITTER_RAY: {
        name: "Plasma Beam Thrower",
        description: "A projectile fires plasma beams in all directions!",
        meta: {
            action_type: 2,
            action_max_uses: 16,
            action_mana_drain: 110
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAUlEQVR4nI1TMRKCQAxc/IAWjBVWdNow+gZ9hAX+BEdnzn9YaOcHsDkegGOjnZWdWOALYsEEwnmnUt0l2d3bkAB/fmlJlJZEZrxjBpT+LEpLomn3XykA49WlRaI0ERGRjfwnwXh1sYJbdtifLAriXSEJmFTpqo6ownimx00GHLIrHrfzsx9Gfp4MMVlfa7E8GQIAji9g1vO81iuYmRVZPYh3hYx/7QUDJZnSFYnZXADw5IV9A8B9O/dlbrDYP/ncDyP/tBw1WKWbJvFzWVVakAJOK9K3/ANMYrPxATbvDHLNRG3DVLDFrCRp6R5V2xjLQarBtk2T5Ga+3k7XmprFrtwbAfZmNE+VkkkAAAAASUVORK5CYII="
    },
    FIREBALL_RAY_LINE: {
        name: "Two-way fireball thrower",
        description: "Makes a projectile fire small fireballs perpendicular to its trajectory",
        meta: {
            action_type: 2,
            action_max_uses: 20,
            action_mana_drain: 130
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAgUlEQVR4nK3SsQ2AIBAF0MMt3ANHcB417ICtQ9Cyzxlbekf4VqgRI+HwlxAehPtEf4WtBgCw1RABW98CwdchbPWJiIAnVIXcIIPgjQjY3eQQI0XiebZ6eNtvcoBSSq1zNxLRUnxzsha8fMREV9k+oVwHYk/EY46NTV5Q0r6qf/g9B02jfUGz38rsAAAAAElFTkSuQmCC"
    },
    FIREBALL_RAY_ENEMY: {
        name: "Personal fireball thrower",
        description: "Makes a projectile turn the creatures it hits into living fireball throwers",
        meta: {
            action_type: 2,
            action_max_uses: 20,
            action_mana_drain: 90
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGklEQVR4nJWTr04DQRDGvyO8QB3bIuqKQpAzlYitp9W9IPAYmnAvcCGpaaoREJIack+Aqauoq+GSJam5hHN9AvIhLnNc9+66ZZI18+e3MzvfAg5LIp9Of1MSADCNKzGmMUnSaEUkkU+SLCeWgTa8km+0ohDrOjFa7fmYxrR9OTWNabebRP69HCk+NG4BkuJttuQ2W3L1OadAjrJysQty4oLd3o2R7TZ4nEz3upRRnICX5zcs3l/xNJ0AAHrhGugM0QtCGK14CuQv/XPdyROCEN75yEvwgN1NMDtrXeKq3y2AX4M2JPfi49uD0YrFFsjKFmR250MKqCn+ry2I2bqok3WjiWTtLkXGBwUlt1Uki7+PdJQq6/zydyT+C9MNADGdj42HAAAAAElFTkSuQmCC"
    },
    LIGHTNING_RAY_ENEMY: {
        name: "Personal lightning caster",
        description: "Makes a projectile turn the creatures it hits into living thunderstorms",
        meta: {
            action_type: 2,
            action_max_uses: 20,
            action_mana_drain: 90
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABkUlEQVR4nI2TvU/cQBDF37i+yt2Jhg5OpIo2BY0rnA6K9PkoorRHAdKFP2CNRAXpEERBkdJEViQ3aQlNGiqEzUaHRBEjXXeSO5p7FMcY+1gQW3k9er/Z93YHAEBOiEdWUlTemrMmrGtJUdEHISdkmYazMJZpmBQVh3E3hLMGJFsQZ01LFGU5VeysCUmGdcNh3AXLFCS9VqIsb/3T7gqXOyoW3n3GdhUTAH5f/sfJ2pI4a/oqXNw63Y2ynH9WexAJxBuYswYsU/3uX42OeTU65t+LPTZhT4X7QOyDNK0GutEQZz1/+PgWo/EZBps7952vf4mzBklRMRAJRCEigZysLbX8fTv4jh8/j7C9swnNB3Nv8OnFEQe9DgIAuHw9J4Nep85gcet09+brxvpofAYAeLk8XwMPv6zIv+QV9s/fi0gg02vkhFML96ePspzOmr569wUJDeTuVcFZU/tUW5qJimcz8i4Vs0wRZTmb+2dD1FLzlqZ2+ejstPyzTDGMuw+hZapD5n9MjaHxwodxF0lRUeu3LpRbeLd32I4AAAAASUVORK5CYII="
    },
    TENTACLE_RAY_ENEMY: {
        name: "Personal tentacler",
        description: "Makes creatures hit by a projectile grow tentacles in a chaotic manner",
        meta: {
            action_type: 2,
            action_max_uses: 20,
            action_mana_drain: 90
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABkklEQVR4nIVTPU/CYBB+XuIfcJMPg4Mik4Pp4g/AXZw1mpg0NZomRhIgYRJaExZkKJI4iCYupvwAWdgcZHKxESIxlI+Nf+A5yJW2YLjkTXp37/PcPfdegQVmaZLHL+Rr5I4LduLZ1lwCRdYpshpyfLs3gJGLCYST6OyGELA0CZuZN5BtzlRlsN0bOEeNmgLhJNCvY6MxBNqJIMg2QUQz7SqyTtwyG9km2ongrE6yTU8Xk7jKh8GWJkGRdYLfFFknJmJwd9Sk7qhJrx9lYhL3/fmOD7yIJOCfsl/z0ckBRuN3pFNFj1y+F3ADC/ka2b2BR9r93SOenmu4LqYAADff+4Rw0skvVaoZ4ZZg5GJCRFqwcInx3mFpZXkL2ztrHlKt8DDtsp0ITl+BvMO1NEll7e4ZKLJOTlH+YCK3JM5NXsgzQLYAS9hoDJ119g8SAMyf8xI/sVuy4IB/3wHAuE0LIYQDuvgqi/WXAdCv4/TqkyrVzCSL2V0wcjHROT772/d/iqhRc0rgt3l/qLuIGjVFPNvCLy5ODjK89QjgAAAAAElFTkSuQmCC"
    },
    GRAVITY_FIELD_ENEMY: {
        name: "Personal gravity field",
        description: "Makes creatures hit by a projectile gain a temporary gravity well that draws projectiles in",
        meta: {
            action_type: 2,
            action_max_uses: 20,
            action_mana_drain: 110
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLUlEQVR4nGNgoBAw4pJ4O+HndGS+cAF7JlEGwDTuv/sARdxRWQGrQSzommEaz948cx/NbEWYGmRDWNA1wzQ+fPv4Lor2mwiDkA1BcQEMPHz7+G7rVos1DAwMDC/eX2Jo9H1gxMDAwCAvLKuMrpYJ3XZkzQwMDAwSgnoM9ZsVzr37+Orew7eP7569eeb+/rsP4GHFhM0FMJCQEsvw4v0lhorSbpxq8BqwYM5ihmWrFzJ0dJeSZkCmzSajF+8vMTAwMDAYWSrgswNigHABe6ajsgKDsbqJorywrLIQv5hSo+8DoxfvLzGszJQ3YmBgYBDiF1OSF5ZVNlY3UXRUVmDAGwuw0J4c8y1EiF9MaXLMtxBsMcDAgJYS8SUkY3UTRQYGSIpETkgUJ2WKMxPFAABnT4wF4y41dgAAAABJRU5ErkJggg=="
    },
    CURSE: {
        name: "Venomous Curse",
        description: "Imbues a projectile with a curse that makes the target hit by the projectile to waste away",
        meta: {
            action_type: 2,
            action_mana_drain: 30
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIklEQVR4nGNgoBAwYhNsDgzebSZv/A7GP/XwrFDt+rWuRBnQHBi828DLrRZd/MK2Xc3YDGEiRjMDAwODgZdbbXNg8G6cBiBr1pLlOI6sCMbHZgjcAGQ/X3v8wxKmSUuW4/i1xz8ssanD8AIygGlC1owNwA049fCsED6FuNShxAJyOKi+nm0OE78tmnqSgQF3TKCAzbNnWtxoM8m//+LA//svDvw/fn3S/xttJvmbZ8+0wOsFGFB9PducPalnAowvIajH8D4wbgKyi/AagAwSUmIZXry/xFBR2o1TDV4DFsxZzLBs9UKGju5S4g3QqDoz8ee8koIX7y8xMDAwMBhZKuCzA7sLNKrOTBRcv6jgxftLDJanHxbgNQEfuNFmko9MYwMA9RF590azvpQAAAAASUVORK5CYII="
    },
    CURSE_WITHER_PROJECTILE: {
        name: "Weakening Curse - Projectiles",
        description: "Target hit by a projectile takes 25% extra projectile damage for a time",
        meta: {
            action_type: 2,
            action_mana_drain: 50
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABfUlEQVR4nKWRP0gCYRjGnyII2nRqONDgBgOJI0TvJHIKHFwOGlqKiIYW00AhRAm5kEAHrUmI6A8k1ODgEtxiS2fmICJ4w8ElHMdNHjQITTaIcsp5CD3Ly/d87/v7Hr4X+KcWzEw2zPEOt7c3OnfbdXv5JrUzF4ANc3zQT6Wm/bePJmcGWZxnGACCfirFhjl+2l+yGu4TMSG0tQsSl5CQBEAzAMcbk4wBDre31ydOBZIgISkSSIKEyzkcBjCse0mh87P9YpoAAFaUHKMqAIiYICkSAEBECC4nBfG7CbV2wgA4MwV023X7up8agwBAVYZ3ag0A6HGfETCxBeM/BOS0b+S/r118ArM3MaFiqUKLGU9E1qoDWasOhM71QMx4IsVShTbrX5w2AnLat3yUy4/Oq7YN6OxB3pjIEmDU4fE+NL2F83h2Zo8l4P72Cc+vD7jKxucHuBKNwu9dLKrpLQDAJuO0esM8gSvRKNjKj1FNb4H56kYtCVYSM56IsZrpD9Nwjp4aUJciAAAAAElFTkSuQmCC"
    },
    CURSE_WITHER_EXPLOSION: {
        name: "Weakening Curse - Explosives",
        description: "Target hit by a projectile takes 25% extra explosion damage for a time",
        meta: {
            action_type: 2,
            action_mana_drain: 50
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABq0lEQVR4nKVQP0gCYRx9RRC1ZUFN1aZJhISk5+JSYUODzhVW0iY6JERxgR1IkEPWJGj0jxzCHByKbGgQP7IbzKRsqEOniyRpilq+hjg78jyC3vLxHu/3fu/3Af9Ek5Jod3OpvsGRV4mXCllNyHA42jv/UOdvkZNyVEs9uakLm8XAAp81fcX1SBYiUxcAW7esWU6kYYc+TiznTgIADn2cvPMENouBtbu5VMNb7G4uFY4lzbeznbQc1dKXGyelH0+0HNVSSQ/HkubfIbUG0s2Z8V3mLV1Bl24VANBmZCDpcp/iCRJ6vJOoFNcAAO88gUMfJ42a1z6xVMhqBiwGmJ7XyAlWGQCY4CfIaXuQwd3PQKmQ1Sg2SGyzY2eZHHfV/T1sFfymt3QFVsFvkjxnmRyX2GbHGrUBAIRjSXMxYPQI4iUVxEtK7rdoMWD0hGNJs5K/7g+sgt/UOhfclHhPxxCq9plNeRPVADmcrmmI1TyWfBsNPaoBu5EDHB3vYX3D9/cA3TIf+thZ9IrVPABgmOlX26HcQLfMhzoS+16xmgdzXfKqJqihGDB65K8SvgC+EKrTTqJBCwAAAABJRU5ErkJggg=="
    },
    CURSE_WITHER_MELEE: {
        name: "Weakening Curse - Melee",
        description: "Target hit by a projectile takes 25% extra melee damage for a time",
        meta: {
            action_type: 2,
            action_mana_drain: 50
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABL0lEQVR4nGNgoBAwYhMMzG3eLa9j9g7Gf3jllND6ybWuRBkQmNu828PKoBZdfMexC83YDGEhRnNahM9xBgYGSwaG5t3ohjAS0swX5nP806otlrhcwgRjIPuZ/8Ha49g0o6tDMQAZfFQItoxT3oWhGRuAG/DwyikhGPvTuZXHF911s4S5BBkgq2NgQIsF5HCwv99oDhM/qFh/koEBd0yggJnLN1vcaDPJv//iwP/7Lw78P3590v8bbSb5M5dvtsDrBRiwv99ozp7UMwHGlxDUY3gfGDcB2UV4DUAGCSmxDC/eX2KoKO3GqQavAQvmLGZYtnohQ0d3KfEGaFSdmfhzXknBi/eXGBgYGBiMLBXw2YHdBRpVZyYKrl9U8OL9JQbL0w8L8JqAD9xoM8lHprEBAEezhg8XCwYCAAAAAElFTkSuQmCC"
    },
    CURSE_WITHER_ELECTRICITY: {
        name: "Weakening Curse - Electricity",
        description: "Target hit by a projectile takes 25% extra electricity damage for a time",
        meta: {
            action_type: 2,
            action_mana_drain: 50
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABdElEQVR4nGNgoBAwYhMMzG3eLa9j9g7Gf3jllND6ybWuRBkQmNu828PKoJaBgYFhz2+x4y6srywZGBgYdhy70IzNECZ0zSymbi4wflC0GQMDAwNDWoTPcRZTN5fA3ObdOF2AbDNfmM/xT6u2WMI0z1oBYWNzCQuMAfHzLwYGBgaGdUtPMQRF+xyPYGJgWPEP1UbksMHwAszfQdFmDDDNn1ZtseQL8zmOrg7DgIdXTgnB/P1p1RbLFf8gLoG5CF0dRhigh4P9/UZz9crTE262mxYcVKw/uee32PE/p3ftwRWdcDBz+WaLG20m+fdfHPh//8WB/8evT/p/o80kf+byzRZ4vQAD9vcbzdmTeibA+BKCegzvA+Mm2N9vNCfKAGSQkBLL8OL9JYaK0m6cavAasGDOYoZlqxcydHSXEm+ARtWZiT/nlRS8eH+JgYGBgcHIUgGfHdhdoFF1ZqLg+kUFL95fYrA8/bAArwn4wI02k3xkGhsAAEK2mkgStz11AAAAAElFTkSuQmCC"
    },
    ORBIT_DISCS: {
        name: "Sawblade Orbit",
        description: "Makes four sawblades rotate around a projectile",
        meta: {
            action_type: 2,
            action_mana_drain: 70
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvklEQVR4nKVSsQ0DIQy0f4Xoy9dLrzRpMkN2YYGMkAG+iZRBUmYHSyloaNK5RJnBaR7JIIN45RrA9h2HMUADPrC08gAAQy3xfL1Fr7sEfGBZ5hHu6w2WeexyYjrwgUU7iDE+miQiupROjJpMpNoDAIDzaUIj/Om6vQUiuloOJhHJLMsGQ+ObCaQiRER97sGgiIcUTEK4weCxqabfVkPZq/IXjiVh9xDpYbGGqRs+sPjA4pyTtN8t8pcD7aSV/wEMq3rQX8Qy7AAAAABJRU5ErkJggg=="
    },
    ORBIT_FIREBALLS: {
        name: "Fireball Orbit",
        description: "Makes four fireballs rotate around a projectile",
        meta: {
            action_type: 2,
            action_mana_drain: 40
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoElEQVR4nLWSPQ7DIAyFY9S5A0P3dmHiBDkVnXKLLr1chJTsVSYu8LLElWO5+VPzTfiBnw24qs4kR4+SAg4llxSAoQEA5Oj3m+ToAQAYmm8XJYX3WtVad6Gra5PLkuH11ZIhd5uqL1FSePLaCf0GYNYuJgyPfmbAh4iIZLwFJxLvLLIRTRh5H9NN3u0X+q2c2n/I4NAk8j+fMom7sSbx74x4X2qt7vydggAAAABJRU5ErkJggg=="
    },
    ORBIT_NUKES: {
        name: "Nuke Orbit",
        description: "Makes four\u2026 nukes(?!) rotate around a projectile",
        meta: {
            action_type: 2,
            action_max_uses: 3,
            action_mana_drain: 250
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABV0lEQVR4nJWTP0vDUBTFf6+IQ0fDE4p1sAodu3UR4mIFV3HJ4ifI0u6iTvkC+Q4B/wyuQpF27ObkVM2gFlK7tODQ5To0KclL6p8DgXBzznnn3XujMBAEAePxGCYPYB1xunUlb6MJAE0XZfJLZsFxHLTW8hxti9ZaenOfoRUwUsc5McBaQQIBOD+8pje32Z04ySeBPySIokiFYUjnpkUYhnRnHt2ZR9NFTdt1vyjFEtN2fV9ESD8fd5YMfGTgIzEnY5K7glK5lGbhZeXpP8bLcjvJe7oHmyIiaaLEKPB4zRgkJBXnXyEqRCkl3EmKiZGKUaCLCt3Sd1sFs1fmFGoAyciqFYvb9wuVrLXWGgaXGUEu3rRd9x/3au7XxtmyD/1+H9u2cRzn1xmTTgAwtAIO1l1688X+mCa5RYLFX+d53sJkFnL/1KLRCCmXy/9LUK1YVE4+MxxzKN9N4o0VTniiRAAAAABJRU5ErkJggg=="
    },
    ORBIT_LASERS: {
        name: "Plasma Beam Orbit",
        description: "Makes four plasma beams rotate around a projectile",
        meta: {
            action_type: 2,
            action_mana_drain: 100
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+UlEQVR4nKVTO47CMBB9g7anYgvkG1AlnGELzhDJ0p4kCpI5SCSfwQgac4M0oaNhoy2SBk4wFMR8rDiJdl9lz8x746fxAAEIqQ23EFKbUN0klHDYX/vzgwJ/gpDaKMsPKHu3oSynY8hNnJXsI85KFlI3vsibBWU5qvJkVp+K7ebwjG8OQH0qtlWezACcOzsry5FvI85K19l4td/u/PES/2RmJiICgCpPVj/MDABEi5XX7/fNAj8K72R3H4PJC3HugkREQmqzXB+xXB/R8ZHqTjXnLTTGtibqJLfJdGiMg55akeALRsMt0+7yj2XaX4GvaX+jXoEhMgDcAJowzVgFnm+5AAAAAElFTkSuQmCC"
    },
    ORBIT_LARPA: {
        name: "Orbit Larpa",
        description: "Makes four copies of a projectile rotate around it",
        meta: {
            action_type: 2,
            action_mana_drain: 90
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhUlEQVR4nGNgoCX4/////4+7/v8n24CPu/7///8fYsCPq/+nUOyiT2sJGPJp7X8dUg1hIsMhV8i2HUltBjYXiMMCDAb+/0cEIhq4jWIATBEjIyMjMp8YwISkURUmCDOIEQqw6HuJ1TRkv+EC6GGFHgtEByQ+GyhPcbBki5yUyQIUZyZiAAB6jlRfSG8pNgAAAABJRU5ErkJggg=="
    },
    CHAIN_SHOT: {
        name: "Chain Spell",
        description: "Causes a projectile to cast a copy of itself upon expiring, up to 5 times",
        meta: {
            action_type: 2,
            action_mana_drain: 70,
            damage_projectile_add: -0.2,
            explosion_radius: -5.0,
            spread_degrees: 10.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAATklEQVR4nGNgGLTgPxQQUsdED8eQBv7fKIQ7+3+yIkEvoGqeGoSiAZcBWMMHm2J0A3EagM+puAwhGiCHCTY+SQZQ7BqyAKEUOQhTIqkAALLnQp2FSzEMAAAAAElFTkSuQmCC"
    },
    ARC_ELECTRIC: {
        name: "Electric Arc",
        description: "Creates arcs of lightning between projectiles (requires 2 projectile spells)",
        meta: {
            action_type: 2,
            action_mana_drain: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAd0lEQVR4nLVSOwqAMAx9iuAtu3ui7q238ACu9TiFlDgEilQbjOAbMiTvRynwAczMzM0yJnokDyIAsB4FwLaXsMyGtJio592F81m5TvcEAMGUYKsk7EajlazUVzlXJ+dzTCTTYCEk57P+dN2eAEaDzoT6335LqDgBC+lFNFlDYioAAAAASUVORK5CYII="
    },
    ARC_FIRE: {
        name: "Fire Arc",
        description: "Creates arcs of fire between projectiles (requires 2 projectile spells)",
        meta: {
            action_type: 2,
            action_mana_drain: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAoklEQVR4nGNgIAP8////////DAwM5wzkCSpmgrPOGcjLhUkS1MbEwMDAyMh43lBBc7kPRMjowkOiHPamzeL79ew3bRZv2izgIvic9GjVcwYGBu5AY7iISNUJwvacM5D/fj0b4g1iwgChB+42orSdM5CHeAlTiglTiAEpoCCWYPU9FgCxBM1J2G2AAEi4aS73Ic0eiH+IDTG4Hnh6IxaQrAEOAOusT6on2KrLAAAAAElFTkSuQmCC"
    },
    ARC_GUNPOWDER: {
        name: "Gunpowder Arc",
        description: "Creates arcs of gunpowder between projectiles (requires 2 projectile spells)",
        meta: {
            action_type: 2,
            action_mana_drain: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAxUlEQVR4nGNgIAP8////////EPaHShP8ipngrO/n4z9UmrCHaePXxsTAwMDIyPixypRFwQKuWqD9DFwFTs2/30///X46RPr7+XgC3oC45/v5+N/vp0NUQ0Swq4ZLIGtDU41FM7I2ZOd9qDRBVo0IJbhHf666+ufBCQYGBvYwbYjzIIGBz20QNsQ/8AAgEEUQpfAwgKtmwqOH03DhnwcnWBQs4BGKXQPEME7DhXD/sIdp/1x1FZ970Bz9odIEOb0RBUjWAAcAUy2GP5JQHTMAAAAASUVORK5CYII="
    },
    ARC_POISON: {
        name: "Poison Arc",
        description: "Creates arcs of poison between projectiles (requires 2 projectile spells)",
        meta: {
            action_type: 2,
            action_mana_drain: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAsElEQVR4nGNgIAP8////////RCpmgrOqteuJ1cDIyFij0yAjI0OMHqgNdx7cePLkCTF6oBpWfl3JwMBApB4oCOcOh5DT3WdD2PhsgFuioqBx4MgeBxsXXPYwYQqt/LoSj9sYcVldrV0vIyPz5MmT1quN+GxAdv2BI3tkZGTQ/IOuAeITBgaGOw9uQNzmYOOCrAenk+AWqihoYHUbFqUMsPRSrV1PUnpjCOcOJ00DMgAANQNS4IXldP0AAAAASUVORK5CYII="
    },
    CRUMBLING_EARTH_PROJECTILE: {
        name: "Earthquake shot",
        description: "Makes a projectile crumble the earth it hits",
        meta: {
            action_type: 2,
            action_max_uses: 15,
            action_mana_drain: 45
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAp0lEQVR4nGNgoBAw4pKY7m38H5t45tazKHowDIBp3HHmAVaDPUwUUAxhQte848wDvJp3nHmA4jomdM24AEwzuiFMOHVgARtfvmXM3HqWEdkbBA3wMFHAEMMZBvicjawJaxhg04zuXJhm9IBkQJb0Fxf+7y8u/B9XOkB3AU5DYIqmexvjNQyvDfhchDUaYYLoyRUbwFCD7nRkcWQxgv7HpxCXJSQBdM0AHrB8Ia2hIdUAAAAASUVORK5CYII="
    },
    X_RAY: {
        name: "All-seeing eye",
        description: "See into the unexplored. But not everywhere...",
        meta: {
            action_type: 6,
            action_max_uses: 10,
            action_mana_drain: 100,
            action_drill: 0.01
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA8klEQVR4nI1RsQ3CMBC8R9DTEBZAYgEERNAgZQQGYAN6Qgk0FIgNGIANsJSGKBHKBmGBkCZ9EKYwMs4bAScX/++7f9+bYCHwIx1P1i67rdvsvViZKdOQzR7B63lDAImIQ4i5t7TnvNjbwS7wozKVUj6kfJSp1MXKBJWPZ0MA9Y5kje5XAnA+xMoSmRMSEQNQ71HQFf2qiukQonGTEO/K5XYqHerh3aIiyIq87bRCU+FQVuQ/tsQ8sC3V2DXrx9IPCPzI7fb1MRf6eQKAdrPFAhOkG6tgcZybvKzIN9O9ipWT18cxng2lnKxd+odtasi29R1P1Vd7Cm4Tm4YAAAAASUVORK5CYII="
    },
    UNSTABLE_GUNPOWDER: {
        name: "Firecrackers",
        description: "Makes a projectile release firecrackers when it disappears",
        meta: {
            action_type: 2,
            action_mana_drain: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGklEQVR4nI2SoU4DQRCGv70geiF9AJIKBAIPooJ6EsS9QEUFD4DsPcEhcdiKSsw5BO4qTvAAiBMIkktFFWkWQTKIZcv2drfcbzazs//sP/+MIoDP4liG+VY93lzI8+t76AkA5XqjVCyp20IAFrdPHCqSRDNNHU258BToKpN0UiqA/1oIKrBki+vLUwCWd1/9FMCfiTY+pCTowTDfKl1lAqal2Xy0U9JLgYWuMuFsbIKmZnH/4U0kARARCZ078i9m85HnxRGAUmYfuidNbYrs/T7wFcSQTkplydOrt+CbBIzr7qUb25+nD4MuF+iYqNtC0pO81/i8FnRbiLu+VkVsfEEF3QWyRb9XL9EW9kx0yQCWvFydB8nleqN+APVNiiQSfNisAAAAAElFTkSuQmCC"
    },
    ACID_TRAIL: {
        name: "Acid trail",
        description: "Gives a projectile a trail of acid",
        meta: {
            action_type: 2,
            action_mana_drain: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqUlEQVR4nO2QsQ3CMBBFv7MCsuis7OAMEcmSmSNpPAuV56BAyhBmB4uOghk+1UVOopAgQcdvzjr7vTsZ+Oe3CdHQ95q+1wzRUHokuQqU1feapUhg6W9OLyW7Hs/PH+dr8Pwv3kXtHRCdZXe9qejsRDoRhGh47u4LaXSWQ8pomxpDypO7qjQKXK4uMIAFDADVkDJEIlVEJbwWBQCn44GyXtvU4+UWfHk81Quee2YPnRAtbQAAAABJRU5ErkJggg=="
    },
    POISON_TRAIL: {
        name: "Poison trail",
        description: "Gives a projectile a trail of poison",
        meta: {
            action_type: 2,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAVUlEQVR4nGNgGIGAEavorYwNJ2/dZGBgMFdTV5sRcCtjg+p0f0ZGRnRFcHKxUyeEvdip81bGhv///0NEsANkPfhUEFCERxtpqpF9Qm1Apqmk+ZsmAACa+Cn54+lYFQAAAABJRU5ErkJggg=="
    },
    OIL_TRAIL: {
        name: "Oil trail",
        description: "Gives a projectile a trail of oil",
        meta: {
            action_type: 2,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnklEQVR4nO2RvQ2CUBSFv2v1wgBOwBja6gbQ8DMENRW17kB8S7gLEziAoTtWJKA8xFjY+CW3uj/n5B748zUGIGm2maZ7ORcBEMdb6vpigLyvyPOzAWyeFwDK8igA5yLa9mp9f6frbjRNLu8rsuw0VZL0UkVxkCSSZKe5/oTx0LD4rmYdhNRWHRgrD4eW3KxKYQkzI5jCx4QSWP2Dn/IAjanZ2ORNifQAAAAASUVORK5CYII="
    },
    WATER_TRAIL: {
        name: "Water trail",
        description: "Gives a projectile a trail of water",
        meta: {
            action_type: 2,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVR4nGP8//8/AyWAiSLdw8MAFnySjP6T/zNwCkE48lYM/zsVGRkYGP6LT2ZgeJnLwIjhAkb/yf8ZGBgYGCOWQqKGU4jh/4poRobv7xgYHh5jYCy/D9OMAP///8eKGcKX/P///z8Dg9+k/7jU/P//H2IAsiKYRmIxKoeAbXgNQLYZZhAxrmGkalKGxQJJAF8MEIOp6wVyAAC4ZwVmCuDexgAAAABJRU5ErkJggg=="
    },
    GUNPOWDER_TRAIL: {
        name: "Gunpowder trail",
        description: "Gives a projectile a trail of gunpowder",
        meta: {
            action_type: 2,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPUlEQVR4nN2SoW6EQBCGv72tRJFgSAgSAZInqMAge0lFn6GvUNE3OXGCJk3OYE70CdaVE0hCgiFBrd1MBQeGnMJ15Gzmn+//Z5WIsKcOu6b/h8ATwM/HC9ebo0g1U+dIyoi27gEEwI/nvh9rFWShjM3A8+e3WgmuN0fuwdQ58WPNuerFjzUASRmpRRSQtu4JsnAlUCLC79c7bd2TlBFjMwAQZKGcq14VqZZl20MLYzNIUkaqrXuMRXIPBYO6Uz0c3hD4sZapc8pYyL3ZO7Dmcq56cm8ePJ4urBmMzYCxyLKtSLUYO9u4h8fYDLy9RqvoUodlQ5FqZezcvN6cKlLNueqVsfN7kIWMzcDUuW0GxkI+iwig8s4xdW7F9WO9hgzDlqBINXdkNXUOY5Hj6YIfa5IyWjNYCDZn3FO7v/Ify8qpr050n6gAAAAASUVORK5CYII="
    },
    FIRE_TRAIL: {
        name: "Fire trail",
        description: "Gives a projectile a trail of fiery particles",
        meta: {
            action_type: 2,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAPElEQVR4nGNgGH7g+27nwWD214kuaNq+368mXzNRqiGM7/erIYyvE13+//+PUxvcPXBt////p2XoDX4AAFxkJY4qlL0mAAAAAElFTkSuQmCC"
    },
    BURN_TRAIL: {
        name: "Burning trail",
        description: "Gives a projectile a tail of fire",
        meta: {
            action_type: 2,
            action_mana_drain: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAhklEQVR4nGNgoAr4Gi+PS4qJoAo8UgjwY1kGARuwGonVbCasSpEtQdOGxQZmd088bsPnaaYOLD5hgVDcCx8iG/nfkVCwIjsGrppx/0OIILL9WPyABv7u3A63H13D353b4WyI8QScBDEJohTuMGTjsTgJbglEG7KdUHFMS7/Gy0N8j+Z6MgEAHEQ4ceIXKn8AAAAASUVORK5CYII="
    },
    TORCH: {
        name: "Torch",
        description: "Lights your wand right up!",
        meta: {
            action_type: 7,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAmUlEQVR4nGNgoAq4bsZHHYMI2IDVHhasGuT8Fa8z3McqxYTHHjl/RaJsuG7GxxRkIwdja576RNiGf+uOcFVdYAqywbQEiwY5f0WmIBsGBgYOjSmYslg0MAXZYFWKU8O/dUdwqcaugYGB4ceNHAjJXX0RTYoRjX94ug8DA4OJgzwDAwOn5lQ8VjEwMDDMbwgqiLIkoIhM1cQDADDzI0HuVTeIAAAAAElFTkSuQmCC"
    },
    TORCH_ELECTRIC: {
        name: "Electric Torch",
        description: "Gives your wand a bright but very dangerous light!",
        meta: {
            action_type: 7,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjElEQVR4nLVQsRGAIAzMWuxgZekUDkDhFpYWjOIwdKzwFlzuYkiAQr97+M/nQ/QHYgEkDynD0347VIs0gPrf1bHISgCAWIBhJR6it7PeG4SUwdBcJps1YqkrykTL7CZrLodMdfeqSEwPIKrH5HTJrY0b3OeCfQvm8bje0CxN8r9rvo71ZWZMHdAz/4oHaw3X2ycbymAAAAAASUVORK5CYII="
    },
    ENERGY_SHIELD: {
        name: "Energy shield",
        description: "Deflects incoming projectiles",
        meta: {
            action_type: 7
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAq0lEQVR4nKVTwQ3DIAy8WB4hG1RIGYUHQzBah8iDUSJF3SAjoLSPlIgYQ1NxP/Dd2cABdGKoFcIrvvO1fbDK5ZpwXqO6L41YkpJw2fYA4PkteSDaxMlNBikWQgk/jWSd4XMSUkg1sVojpXsTy7aHeY3nncgJWt1VjnaEvyAN/A3NhUPA8bbOMKaR7C/1nVdoTVHULqlqBSlNl3cvDJIJUEbZmSO0Msrdn6kbH3CWWxALCFpfAAAAAElFTkSuQmCC"
    },
    ENERGY_SHIELD_SECTOR: {
        name: "Energy shield sector",
        description: "Deflects incoming projectiles",
        meta: {
            action_type: 7
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVR4nGNgoBAwogu4LPkWriHCtMJHlYWBgYGBwUOZBUMNXgOQDElgYGDwIGQQTtNdlnwLZ2BgYNAQYVrBwMDA4KPKgtUQvM6DGcLAwJCgIcLkgc0QJnwGIIEFuCTwGrAnhmsljH3jzb8dW27/Ydhx989/clyA0xWkGIAVkGJAAskGIMUCA6WxgNV2BgZaJSSKkjKpmYliAAD+Xy0WhOiveQAAAABJRU5ErkJggg=="
    },
    ENERGY_SHIELD_SHOT: {
        name: "Projectile energy shield",
        description: "Gives a projectile a shield that deflects other projectiles",
        meta: {
            action_type: 2,
            action_mana_drain: 5,
            speed_multiplier: 0.4
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6ElEQVR4nMWTPQrCQBCFv1kWvUBuIEKu4AHEFFY2tmJv503sBMHGwt4iFt4jEHKDtCLCkrXJBI0JES2cZpbZfe/N34r3nl/M/IQGLICIABBnDoBT6l4eJXnBetTz0cCKxjRzq4E4cxUwyYu60PKUOuLMvZBUJSg4yYsm8Ba4JnkRK8kbQYddSr9vujRApd5iRz00ZWEBNpN+G9gDjA83AeZlFtFbBvqwwXeaBVid71KWoB2u+3npF3UCAzAdWsKgtZ8KJgxMNB1ankf5yRRmbeoA4r1HRDoXKQzM7lldN7EigO9WWf7+Gx/bKnlRewUGIQAAAABJRU5ErkJggg=="
    },
    TINY_GHOST: {
        name: "Summon Tiny Ghost",
        description: "Summons a tiny ethereal being to your help. It may cast stronger spells depending on how much damage you have suffered.",
        meta: {
            action_type: 7,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqUlEQVR4nK1TOw7CMAx9rjgKEhNTLtEl7OSAZA9LLtGpU6XeJSw0clxbrQhviu33nvxpqZSCHgxd6n8YXKzC6z3x2Sh4d74DIQaAouR0A4to1QZBqO+cIgBgXeYmPuwAAAHA+Hg2SRmrBtqirre7Ktywu0Lwro7C27Y6MM+YU2xEMt5A/FP+bpkA1OS6zM0YwTviBtoSm1NxcU6RJFka7Ai8djjCL+j+mT61qj8p0iQScgAAAABJRU5ErkJggg=="
    },
    OCARINA_A: {
        name: "Ocarina - note A",
        description: "Music for your ears!",
        meta: {
            action_type: 5,
            action_mana_drain: 1,
            fire_rate_wait: 15,
            action_speed: 350
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAVElEQVR4nM1SQQ7AMAgiS///DHwmPfXSuEXqoeOGERQj8FuQVMtAUsngaU1xDaxYWYRqrLR58b1uRTje4G0bABiVCRHxyVOxdfG9+egLSWrBFl/FBL5RTWNEgzIOAAAAAElFTkSuQmCC"
    },
    OCARINA_B: {
        name: "Ocarina - note B",
        description: "Music for your ears!",
        meta: {
            action_type: 5,
            action_mana_drain: 1,
            fire_rate_wait: 15,
            action_speed: 350
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAX0lEQVR4nM1SQQ7AMAjSZa/0gfhMeurScZltl2ycNAEFo9lvAYBbA0iWBhxbW8zsrJA0TkT4o2iMoHHGvuRARe7+noOlI2bmVd+s6KZutXREFU89kpKXvhAAO6bFn6IB8CtIkFvVtPkAAAAASUVORK5CYII="
    },
    OCARINA_C: {
        name: "Ocarina - note C",
        description: "Music for your ears!",
        meta: {
            action_type: 5,
            action_mana_drain: 1,
            fire_rate_wait: 15,
            action_speed: 350
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAV0lEQVR4nM2SQQoAIQwDZf//jvSZsyfBLa5EBTG3ghmb0FKulSS2AIAFeLZ+mQFIAsCO1kbIJgvSAkZ9nOkgIj7zbwSSsmlYYs/gbNd9vHSFdUX3Au/RCzRzWRbD3sJJAAAAAElFTkSuQmCC"
    },
    OCARINA_D: {
        name: "Ocarina - note D",
        description: "Music for your ears!",
        meta: {
            action_type: 5,
            action_mana_drain: 1,
            fire_rate_wait: 15,
            action_speed: 350
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAW0lEQVR4nM2SUQrAMAhD6+j9jxGPmX21ZELBWhjNl6I+IdratQLAIwDJFOA52pIFAOBQmqzNGqe9WQFi/o8HKgA0Mxt51+LKJHefNR3+KA5vPVJsLn1h6dZX6AWCaU1eXKx8IwAAAABJRU5ErkJggg=="
    },
    OCARINA_E: {
        name: "Ocarina - note E",
        description: "Music for your ears!",
        meta: {
            action_type: 5,
            action_mana_drain: 1,
            fire_rate_wait: 15,
            action_speed: 350
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWUlEQVR4nM2SQQ6AQAgDwfj/Z5Rn1mvdZLW7HLRHAgMFIn4rAGwBSFqAo9XFBQCgyrKnFp7s2BZmnU8XkJnZmmCmG0AXpfGqitcljkVLjzQmb32h3nq5+FNdE45cQWWOao4AAAAASUVORK5CYII="
    },
    OCARINA_F: {
        name: "Ocarina - note F",
        description: "Music for your ears!",
        meta: {
            action_type: 5,
            action_mana_drain: 1,
            fire_rate_wait: 15,
            action_speed: 350
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAVklEQVR4nM2SQQ7AIAgExfT/z1ieuV6pCXWVg90zDEygtd8GAEsAkhKgl6aoAACMkfSiwpeOrJBNflSAmVlpgyyvDTJXd1+T5uatR5qLj74w3nq7+WoGsA5FZjhk+UkAAAAASUVORK5CYII="
    },
    OCARINA_GSHARP: {
        name: "Ocarina - note G#",
        description: "Music for your ears!",
        meta: {
            action_type: 5,
            action_mana_drain: 1,
            fire_rate_wait: 15,
            action_speed: 350
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaUlEQVR4nM1SQQrAMAjTsS/1bf1RPtNHZadAV1pW52HLJSgmUdDstwDAlAHJLYMjlbJr0FqjNhr5fBKTpLu7mVmtlTLs66Ww51U/dEJqgxX7TCTodiWWUm7z00Qh9Ejj8KsvBEAhLP4UFwmpdY2eDIHzAAAAAElFTkSuQmCC"
    },
    OCARINA_A2: {
        name: "Ocarina - note A2",
        description: "Music for your ears!",
        meta: {
            action_type: 5,
            action_mana_drain: 1,
            fire_rate_wait: 15,
            action_speed: 350
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYUlEQVR4nM2SMQ7AMAgDTdX/PwOeSSdLEUlbpxlSLwzgQxYAv5W75xIgMyXAsbRFBdQ4UjxGqJXm14h3gNqXIozMZmYygMPVDADn0yYAiIiucq4FdeapR/p0phGEmjZv1QXyAmFA2yvrQQAAAABJRU5ErkJggg=="
    },
    KANTELE_A: {
        name: "Kantele - note A",
        description: "Music for your ears!",
        meta: {
            action_type: 5,
            action_mana_drain: 1,
            fire_rate_wait: 15,
            action_speed: 350
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZUlEQVR4nGNgGLRgZ2vcf2LUMeGSMHcyI8oinAYQC0gyAJu3SDKAWG8xMDAwMHw4PuU/Nj66OEkuQNdMtGJcrmFgYGBgIcaGk/tO4eVj1UxsQsKqmBTNjMiaYNEkYJnDiFPHoAMA0m00scdNpZQAAAAASUVORK5CYII="
    },
    KANTELE_D: {
        name: "Kantele - note D",
        description: "Music for your ears!",
        meta: {
            action_type: 5,
            action_mana_drain: 1,
            fire_rate_wait: 15,
            action_speed: 350
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbUlEQVR4nGNgGLRgZ2vcf2LUMeGSMHcyI8oinAYQC1iIUbSzNe4/zEUCljmMRJn84fiU/9jY6GFDshfcqxcxIhtIcRiQbMDO1rj/yOGAEojITkMGJ/edgsvhDER0zcQmJKyKSdEMdw5ZcT0oAAAotTFDkgDApAAAAABJRU5ErkJggg=="
    },
    KANTELE_DIS: {
        name: "Kantele - note D#",
        description: "Music for your ears!",
        meta: {
            action_type: 5,
            action_mana_drain: 1,
            fire_rate_wait: 15,
            action_speed: 350
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlElEQVR4nGNgGLRgZ2vcf2LUMeGSMHcyI8oinAYQCwgasH9C3v8Px6fAvQNjw2gWQgYYmqsxCFjmMH44PuX/hlW7GBgYEOGzoNDvP0leSOjfxMjAwMDgXr2IEcYnyYAFhX7/qe4CRmQFyIHFwMDAIGCZw7h/Qt5/WDjgNR1dM7EJCatiUjTDnbWzNe4/LPURdO6gAgAb/kNWumUvSQAAAABJRU5ErkJggg=="
    },
    KANTELE_E: {
        name: "Kantele - note E",
        description: "Music for your ears!",
        meta: {
            action_type: 5,
            action_mana_drain: 1,
            fire_rate_wait: 15,
            action_speed: 350
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdklEQVR4nGNgGLRgZ2vcf2LUMeGSMHcyI8oinAYQC1iIUbSzNe4/sotO7jvF4F69iJFoA8ydzBgELHMYsckR7YUPx6f8xxawRLmAgYGBchfgAigu+HB8Cta4P7nvFIocciDi1ExsQsKqmBTNcGcgxzWuABucAAAA1S4aax8+1AAAAABJRU5ErkJggg=="
    },
    KANTELE_G: {
        name: "Kantele - note G",
        description: "Music for your ears!",
        meta: {
            action_type: 5,
            action_mana_drain: 1,
            fire_rate_wait: 15,
            action_speed: 350
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeElEQVR4nGNgGLRgZ2vcf2LUMeGSMHcyI8oinAYQC4g2YGdr3P8Px6f8J9ZrDB+OT4ErRNdElCHIBiCz0QELUc5BshkWuAKWOYwMDESGwcl9pxgYGBgY3KsXMcI0wgAKB92pyIqx2Y4C0DUTHdrYFJOimXgnDloAAJ/GOnSuZotLAAAAAElFTkSuQmCC"
    },
    RANDOM_SPELL: {
        name: "Random spell",
        description: "Casts a spell, any spell, at random!",
        meta: {
            action_type: 5,
            action_mana_drain: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7klEQVR4nJ2SMW7CQBRER1GKXCInyAHwLeKaNlVOMXZDEdHTRC6NlOpTpCCFRUExXIAz5ApUn4Y1a2eXAE9yYVnz/l/PAhHsZLgXdjJ39yD5oIzt6dH3QCw26UFx2EcEidiYu3tWskmEz5JZL7kqvBBtIVpKEniMX56wBzABAPzsqtV7UZcA8KtnqyZvrwDwgkNy+OAHrcV+CvU52OAr+vYvoZmAuky45d/+bwq7u48lnJ8FavJrP0zrolxWu9W0LsqrjzZqIktLmTicTs0sVWdPaKCN7kRKkg27u69FE7eRIHPzLm0AAOLWbgrfwxFiLR8oPxbwLAAAAABJRU5ErkJggg=="
    },
    RANDOM_PROJECTILE: {
        name: "Random projectile spell",
        description: "Casts one random projectile spell",
        meta: {
            action_type: 0,
            action_mana_drain: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABB0lEQVR4nLWSsUoDQRCGf67yISwsAgZs7MwD2KUwz5BUPkMOhjQWNiltJOXVC8HimiMQwbERKxFyEK18hlS/RXaSzeaSC0p+WBh29/9md2YALynU4a+SQh1JGkQydZKpE32qhKqMtvfNfC9LmEn0zsVmkqyETLw5V3EPfu2CWJyEByf4WMW3rUHH4gssNhK1Bt0OdilXWdFFH5fPLdZ7B8sK+z/zSH7q7iYAkEk0A2+4AgB847U2W+YrH0O2oHWQKmjYrvG8TZKcsc+DoCrPbjg9pxlDhZAkNlobX657N43TBppnlyiRokQKACiR4vPrvTpr7icvnAUAsJfM2Od43t7/hdh8dP0CnRvUfzuFLeIAAAAASUVORK5CYII="
    },
    RANDOM_MODIFIER: {
        name: "Random modifier spell",
        description: "Casts one random modifier spell",
        meta: {
            action_type: 2,
            action_mana_drain: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMklEQVR4nKWSsUoDQRCG51L5LkLapNQypLjkFSRFbPMAO6SRxRewkSAsXGGTTREkzWlhsZVwHFhcSBW28AmC1W9xN+d5uYOoPxzMzsz/7TB7RIU4dpb+Ko6dBQCBcOQsR86yWzdCHS+O82K+5RwmYndj62YAaIS8FOaNY3tXfG0QiTvVwhm9l/F1fz6S+Jw+f1zUn1+NqE0bxyWd3X0+bvydO1my2H+ZtdYwxkDys+kE9d4OEVHEtX/gjXpERBeHw8p7T1prhMMBdntftiRJksOiYvN1SPU8m04QDgfIlEKmFIwxyJRCY3MV6nhhxSymujlo24PjV/v48RDu9p5W66dAdtHbbsmnKV0ul0G5g6rkGatmqXW7XfJp2nZnbgYAGVvyMvbzeHz0Co2QttpJgN/qC98u9h29XyEbAAAAAElFTkSuQmCC"
    },
    RANDOM_STATIC_PROJECTILE: {
        name: "Random static projectile spell",
        description: "Casts one random static projectile spell",
        meta: {
            action_type: 1,
            action_mana_drain: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIUlEQVR4nK1SoU7EQBB9RxDwDcUWgy5UkSAIBlF9aoMhKD5hqEHcD2DIBUGqF4G4NGkwl8wZJB7FJzSoh7jdvW1pEwK8ZJKZ2X1vZ2cGcJBGLX4LadSSpBeRSq1UakWfB0VV5t/znjyTtZiH6K3tk0lyUOTFkRcq9s7ZmIj3t+KDHbwF/yovC+8f4LPzUF5eFBjDQiWoi96vy202uR/DN/Zv5Ll8AICpW8YW390GgErUTsu8CNlXHOEEwDtWpm65NMedB0zd8uF0dwJPJslKuotUiVpTt0yTjGmSUS4fg58mWbeSITJJxgKx+TPAjbFTvotXN8snAJieX2/yzt/fOxxvYDzG/hdIhq/0mxnIfhPHRPrkyZDIWbSFXiSOwwT+A1+kEv14F+43zgAAAABJRU5ErkJggg=="
    },
    DRAW_RANDOM: {
        name: "Copy random spell",
        description: "Casts a random spell among the spells in your wand",
        meta: {
            action_type: 5,
            action_mana_drain: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2klEQVR4nKWSoQ7CMBCG/ywI3mUPAI+xZ8Ah9gyXGQQSgyGT1TWImQWBOAxqwaN4BjJxiLWj69pksD9pcnfN//VyV8CIatb4V1SzFhGxEFKsSbEmPgehTOW4bs176mBWxDvtm0VEgpCLMVdM+mhODGLjxL1Y4tHH23WR2TjFe/DQuthkiKli6unEp67d+lubLDvYeeaSXv5d2+Ti5gkAKPL+wB0rAMATN9+8SA9DojKT9yF+3jZ5v9pRyyFzaNdRQEhMV+3XJgHcNf4MqMzPi0FmdeAO0V/lLH0ASJ3dxHP9DwkAAAAASUVORK5CYII="
    },
    DRAW_RANDOM_X3: {
        name: "Copy random spell thrice",
        description: "Casts a random spell among the spells in your wand three times!",
        meta: {
            action_type: 5,
            action_mana_drain: 50
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5klEQVR4nKWSLQ4CMRCFH6u4Cwdgj7FHIDgkJ5hgEIhaDFlZXYPYkGwQiMEgSZAozoAaBJ2ytNuEn5c0mUz7vr5MC3hRyw6/ilp2IiIKIcuOLDvibS+UqU77al7RE6YiXrrYLCLSC9l7c8Pk1n7lIFoX3Y0hzqGelYtK6xHubxeVi2mFnBqmQCfePOO2r97H0sH+Z67p1u2HyRoj2isAwFL0B04YAwCuOAazMTLwwnyOALF+8jEkgcZJOimSwwrVQyIiWXNOTAcXmz+CdJ9RzTFEZ9lr1p8Y710mk93XCZLoxiTP+Lcez0bwhTDFCbAAAAAASUVORK5CYII="
    },
    DRAW_3_RANDOM: {
        name: "Copy three random spells",
        description: "Casts three random spells among the spells in your wand",
        meta: {
            action_type: 5,
            action_mana_drain: 40
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5UlEQVR4nKWSIQ4CMRBFfwkk3AU8HIMz4BCcYbIGgQSBIcjVNYg1GwRiMCiCR3EGgvgI2qVsu4TAT5pMpv1vJjMFnKRUi18lpVqS9BDJ1UquVnSbhKps4rw3z+UJ8xKd2bqZJJOQnTMXKnblThPEx63wootzFU+G2cjHPdzeCg2z8QhNKlQquuj62W75yn0tP9j/zBu5hvn7aUqSvJ+m9LkWAORS+wNHDAAAFxxCc6e/NMYY0+4tUEFyN/k6JIIGqncRPfbQ1K4jc5NU9t93ECpc4ycAyRhQuJ+XgoQVf+4gtca/9QCS+uH/ckGWuAAAAABJRU5ErkJggg=="
    },
    ALL_NUKES: {
        name: "Spells to nukes",
        description: "Transforms every projectile currently in the air into a nuke, not a good idea",
        meta: {
            action_type: 6,
            action_max_uses: 2,
            action_mana_drain: 600,
            fire_rate_wait: 100,
            reload_time: 100
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA30lEQVR4nLWSLQ7CQBBG3yQNopJmRRPwOByyKEiwuDU9QcMVkL0AnAGDweKoBIVCkdQQDCiSCkwRkA2EluUnjN2db968DPxYArAckQPUfI/pbigc5+B1UUqhtX4Z4ADspSdZNcy3Z1CKPNnUCRoKrbV8RACw9Sa0KxGL8wjAGuIAtCIkjuNryClltu7QbKa4rvsZQc338PuHh6bVWF76sU6YjXtk1dCsmCQJQRCY1awBNj+OLcDm522CIj8iglP08V5WKxrcmo6F80xA2THZKM3jt8dkCL49pieCMll/qwu25G/9AZYOIQAAAABJRU5ErkJggg=="
    },
    ALL_DISCS: {
        name: "Spells to giga sawblades",
        description: "Transforms every projectile currently in the air into a giant sawblade",
        meta: {
            action_type: 6,
            action_mana_drain: 100,
            fire_rate_wait: 50,
            reload_time: 50
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4ElEQVR4nJ2TIRKDMBBFX5ieAUUHU1MThWJ6A86A50h4zsANOihUDKaGAcUlUrVpBihNWZXZzd9kX34AqJvWmmGy3pq/o25au24UolN109o803S9YZwX0iQGIM80+n5VvxpEVVkoES+vJ+O8AASJASK5cprExLcHaRKTZ3ozghkmlzPDZF19ndyb/WiP8jdVZaHMMNmuN1Rl4WqSAxwn4RY0pxwgnGTUqizUJVScZxowwMO9lPA7hrRqtOuVUJB7JlMi/AbJh7kXEXxM45spROwaCCTfTBtIIXH2QznxGeEb8GHpNiCxiUIAAAAASUVORK5CYII="
    },
    ALL_ROCKETS: {
        name: "Spells to magic missiles",
        description: "Transforms every projectile currently in the air into a magic missile",
        meta: {
            action_type: 6,
            action_max_uses: 10,
            action_mana_drain: 100,
            fire_rate_wait: 50,
            reload_time: 50
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABa0lEQVR4nK2SzytEURzFP9/x/F6JaRbUlNBseOTHRqYXYyHKzmrK5i3YobFmRzRba+vZTiywmFIiqcFfMEoULxTjIb4WE83E8yhndbv3nnPPOfcL/4GH1Zg6VhDHCv6ZGwBwN47F6GyiatRUN7uCqv5awHCsoBqtIamY7FCA1+0tdUOvqKqIiL9AfeZKHFBj5xyAmsT2x5kCnwrtaz2aSeUEoD5zVRqhatSUQKwR6Q6Le7nM2/OZFJMBMqmcGJ1NWBPhkpgBgNr5HfKzm7ydXQNIWWWYYvuRxIgarSHm7Cfti+bp3Uvp/q2tqop/yCKR8uaC9ZPpw9IIfkSAo9CL9EXzHERM2b+1v40JQHpRPWcikhjR+/VxHi+WvF90rCB3M12kF1Xd7IpvtBILybiqXd0uOfNUAXLX0D8IdQN4zsSX3WRcta2lsB5bKLroofBZYjJe+Ngpc1jCDTAUteVmF++yfkIyrv5l/RfeAfv1kLFHZka+AAAAAElFTkSuQmCC"
    },
    ALL_DEATHCROSSES: {
        name: "Spells to death crosses",
        description: "Transforms every projectile currently in the air into a death cross",
        meta: {
            action_type: 6,
            action_max_uses: 15,
            action_mana_drain: 80,
            fire_rate_wait: 40,
            reload_time: 40
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPElEQVR4nJWSvUvDUBTFTxJFYq24CF0stGvp4uYQcAxF/4dQyV6nbvVjlA4WsgazZs7w1lqhuBcHlxQ6FewgfTEqml6np0kqbfLb3uN+nHM5OLoJAACGx2F4vAEA4i8X7UGAVt+nvH2S4XFsbnzi63vrQqspndFkKr/yfck5LWYaIANoFNQ53Z3sXDYrqlwvlxZ7xRcSdoA/S4bHYTp6L/73i+2Hke2H0Sob7UEAlyyWUCAmPT6HymgylW+Pq1K60fA4TDbDoeawA3zoQ+qS4fHlDXHZcUxH77lksSF1SeCSxYSdzIghaRtrETZNNlu6wb+F8VClySQ7T6gSFxehKqhzqpdLi4en6BrA1apQyal3QzQ3K6qs1ZROOlSZaPV9IiKy/TBaV5tQII749r4rnd+PcVbdVnJtjpNV9g8e3qm7Lc66WgAAAABJRU5ErkJggg=="
    },
    ALL_BLACKHOLES: {
        name: "Spells to black holes",
        description: "Transforms every projectile currently in the air into a black hole",
        meta: {
            action_type: 6,
            action_max_uses: 10,
            action_mana_drain: 200,
            fire_rate_wait: 100,
            reload_time: 100
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA80lEQVR4nLWSoU7EQBCGP8hJNKKtbS2qlTwBchWGOs7xBBtIeIJzaxCXHFXIurqTfYTqbp+gSeUgYDdtLzmWEH61mezM7vdl4I+5AFDaANir24cIYDzuh4/XbRw8RWlj0ziXNM5FRCSNc1Ha2JDeSwD38v3dE1lSMK8FDXDNVb3z59Bs4Iu5qt+irm/JkoKq3nFzPQ7uUpAjpY0tm0nKZjrhV9rY58eDOE+/cQRA2Uyyllw2kywchCZLioWjTQjneNwPQNT1LS/b9xNHnnP+xTXnOUeecy3KcZ7LwsF8D7q+DTAyG/DN6RcqSwpfC86PnP+RT3SjqTUfm23DAAAAAElFTkSuQmCC"
    },
    ALL_ACID: {
        name: "Spells to acid",
        description: "Transforms every projectile currently in the air into a pool of acid",
        meta: {
            action_type: 6,
            action_mana_drain: 200,
            fire_rate_wait: 100,
            reload_time: 100
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtUlEQVR4nGNgQAK2fVr/GUgETMgcDQNWUvWjGqCrpEW+Aan79P8j07gAujeZ0BUQcgW6N5lgtsI02ssk4XUFugUoLrCXScLrCmzeZGFgYGCY7XSRMXUfw38GhnkMDAwMDHkKyxnxeQNiwUV8SiAAOcBS9+n/n/Qg8v+kB5H/L/7Z/R/mCoxARAbY0gW6N1mIdSqp3oQ7mVC6wOsFZKeSZAAp6QKvCwilCwYGBgacAYHsCnwBBgBrvUiSiufs+QAAAABJRU5ErkJggg=="
    },
    ALL_SPELLS: {
        name: "The end of everything",
        description: "You're heavily advised not to cast this spell.",
        meta: {
            action_type: 5,
            action_max_uses: 1,
            action_mana_drain: 600,
            fire_rate_wait: 100,
            reload_time: 100
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApklEQVR4nKVTURXEIAxL703EDKBiiJkCzMwAYjgVZ+Bc9H4GK107bm98QUKbQIBgDP5EtnAKhSy8K5TFnCNzFmvFA8AkyZFC5U97Lcudcjb4veZ1eaZ/xkh95OKxg0kDnCNj8Z3R2l+064BCIWwAtkH+OveKcRJ4OvLX7+J5Ck1RdW7K6XAlndZ1e1l4i46zo/QV80XdjfeBPMf+US4aWbwZz53v/APVb48XE3493QAAAABJRU5ErkJggg=="
    },
    SUMMON_PORTAL: {
        name: "Summon portal",
        description: "Summons a strange portal",
        meta: {
            action_type: 5,
            action_max_uses: 7,
            action_mana_drain: 50,
            fire_rate_wait: 80
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABvElEQVR4nI2TvWrjQBDHf5uI1G5CeuMiD7Bwy9kYF/sE1xlc+BHcy1ylIjl8IL9BikA6X3PlgoyIozXoAQIxeobUFx9zhSxbim24ARXa2Z3/x8woEeFULKceQAaRUScv7OLiXGIQmbOPthsOqCJy9N0N7yUJM/l4E0nCTO6G9yIiJGEmSZjx8Xa4G9QqqngUo60RX6RcFlf0xobceTwpy2lfgCM5lQQFoK2R3Hm6WLQtJWhr6GLJXekJQNA54cHP7z9k7iIAJo8TcucJOkLuPJPHCQBzF7Eu0obrQVXxS7vPZXGFtoZ4FLPCsbh94qZ1DaOSCQ50u2muSsJMAHrjQyLoCF9vDd9aQxbvT7y8erabUv7zg693SgWAGkSG5dRL7jzalsbdtK5ZvJcMZma+P9fWMIiM2s0JF1W/10XKCrfX3MXy8loaWnmywrEu0qaE+iRWLCr3e2PD84OnfjZ3kfrlfze7MDOxzEzM3EVKW7NnAuyRq8d8iqBiArCrrNZFX3S7RNfW8Lf4s0febpDtBlXNQmMXllMvy6nHF6mq0AaRUb5I68hNFvUdSMKMJMzq//Ipf7QL6tw6/2/8A8uaGz31JfN4AAAAAElFTkSuQmCC"
    },
    ADD_TRIGGER: {
        name: "Add trigger",
        description: "Makes a projectile cast another spell upon collision",
        meta: {
            action_type: 5,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5klEQVR4nM1SPQ6CMBT+MAwmxblLD6AJMYzeglPg0ngCj0Fc4DgsjMSQ4MbShRlMHUjqgCVoiqAufstr8vr9vPYBf406pGrqzuJd0/Z2kyZPAkPHgpNoWOcmgkx8VXAS1SFVsjyqOqSq4CSSiT9N1o6yPCqZ+GpYh0lGRyg4idjaCSBygLlY0i3AXEDkYGsnMIlYerb+wZgLAB35gVt17g4iBwC0WYrVobJ6gdcEtrfrE9yqMyBytFkKcWnizem6Hx1hc7ruxaWJdWxNBnONZCN++oXXPdBipv4szHF9u8ptln5k+BXu8vyNX/l1gUsAAAAASUVORK5CYII="
    },
    ADD_TIMER: {
        name: "Add timer",
        description: "Makes a projectile cast another spell after a short time",
        meta: {
            action_type: 5,
            action_mana_drain: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxklEQVR4nGNgoBAwInOkzdP/C8gYMDAwMDAISJjAxT+8OAOhn1xgeHpyJooeJmQONs3IfJg8TrB8+fL/pMqjuOD06dP4bcACGNEFioqK/puof2cw1FNHEb/wQJwhMjISQz2GALoh5y/dZGDks8OqGacByIbg04wXwALs9evXeAMWr2YYIMkQXFFJlCHomq8fn0DQJUzoAjCwbGbmf3RD9uzZg6EOJXS1g6f/Z2DATMoMDIj8cHVtJu688OHJBRTF6Jph8lQFAKwmX1yYkcCvAAAAAElFTkSuQmCC"
    },
    ADD_DEATH_TRIGGER: {
        name: "Add expiration trigger",
        description: "Makes a projectile cast another spell upon expiring",
        meta: {
            action_type: 5,
            action_mana_drain: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmUlEQVR4nGNgGGjAiE3wxr1X/9HFNJTEsKplIkYzPnEmYhThk8dwAQMDA8ORMzcYjpy5gcHGBljQBUIiE+Bsm+ULGCb0djAwMDAwTGBgYFizfAGGAVhdQDaYs+rQ/xv3Xv3XMff6f+Peq//Y+EQbMmfVof/2XvH/kflEa75x79V/e694FBqXIdRPSOgacGnEawByGkCmBycAACeeewJ/bZRZAAAAAElFTkSuQmCC"
    },
    LARPA_CHAOS: {
        name: "Chaos larpa",
        description: "Makes a projectile cast copies of itself in random directions",
        meta: {
            action_type: 2,
            action_mana_drain: 100,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbUlEQVR4nGNgoBX4////f5Lk0AXfncFuAC5xrJLLMo/g5WMFyIrKXfuxsgkCkhRTDaD7H8b/DwUwl2GEAy6NMIBsALIafNFMHUBsDLBgE1yWeeR/1HQbRrJtx5baiEpEDAy48wDeJEwsoEnIAwBoy2zj6rAosgAAAABJRU5ErkJggg=="
    },
    LARPA_DOWNWARDS: {
        name: "Downwards larpa",
        description: "Makes a projectile cast copies of itself with a downwards trajectory",
        meta: {
            action_type: 2,
            action_mana_drain: 120,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeklEQVR4nGNgGFRgWeaR//j47878/8/AwMDwHwrgEuWu/URphAEMA/ABZMPRLSIZoLuMgYGBgYkcTVgNwOW8i3dOw9keydaE7MM0DNkFRAccsib0GEAHBL0gaIzfMqyBiOxXRkZGRqIM0FcxJdpWrICQXwkCokOY2gAAeFdNpZNpKOwAAAAASUVORK5CYII="
    },
    LARPA_UPWARDS: {
        name: "Upwards larpa",
        description: "Makes a projectile cast copies of itself with an upwards trajectory",
        meta: {
            action_type: 2,
            action_mana_drain: 120,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdklEQVR4nGNgoBb4////f3L0McEY78+SZzHcgB1zj5LlGrgBF++chguS4hombILkugYOlmUegWt6dwa/AVhdgOwdol1T7tqPVRJZnJBrsAJk7yCzyQLYDMAaBsgA2QvIYUOUDeh8WBj8hwKstuDTCAMYBgwoAADDi1zhRI5VUgAAAABJRU5ErkJggg=="
    },
    LARPA_CHAOS_2: {
        name: "Copy trail",
        description: "Makes a projectile leave a trail of copies of itself",
        meta: {
            action_type: 2,
            action_mana_drain: 150,
            fire_rate_wait: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlUlEQVR4nL2RsQ3CMBREL2yQWdLSeolsYDoqz0Dlkg2cIWhNxW/omeGvcBToR5ESCdtBXP/u7v8D/qngIlVIFbIZNpnJ4ec1t5R8pgq5PCG4SADoSgxUyH4AptMdz9cDAHC5nb+zwUUmn7lsUFzbYHtYNazC/cnJ5/bkahj4zFV78zxF8nkGxuuxaN5dySuDZtjUCr8BaLKowbE9LfsAAAAASUVORK5CYII="
    },
    LARPA_DEATH: {
        name: "Larpa Explosion",
        description: "A projectile will shoot out 8 copies of itself when it expires or hits the ground",
        meta: {
            action_type: 2,
            action_max_uses: 30,
            action_mana_drain: 90,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0klEQVR4nL2SoQ7CMBRF3yX8AENgEXjEhsOSkCDw/MEkim9AIfcH8wgSktk5NoFHYCc2PuFi6NZ1W1rFca/tPXmvLcSBaOfznr0769eixGgoRJI28X42ZS0wA5/cpTeRWgAAVdZIvACIw9TaRWsEM/R8Pdw7UByiNU6bC0VEzskRNoH1gGLoJeoO9Pn1mj/CW45tMO8K1EEvAPSgqv83go66RFu4VxCHKdXtm6I+xnpRZaQ++3KxEkkcBSQJNGFTNkTrK+sbE98WNQQmprCPa1HiC2UKZG9bgNLQAAAAAElFTkSuQmCC"
    },
    ALPHA: {
        name: "Alpha",
        description: "Casts a copy of the first spell in your wand",
        meta: {
            action_type: 5,
            action_mana_drain: 40,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAi0lEQVR4nGNgoCX4eaUgn5AaJgLykT+vFJzAp4CFgAHmZLsAavM0JDZpBkBtP0TIJVgNgNoYwa4zYSUDA0MEIVdgM+A/Oh9dDKcLYLajCeN0BSMh29EBu84EDD0otv+8UhCOQy4c6hXcYUHIdmxhwYQkic3v6AB3jBCyHZcrmJBNJBTXyPIkpQt8AABkjV9dSbhMGAAAAABJRU5ErkJggg=="
    },
    GAMMA: {
        name: "Gamma",
        description: "Casts a copy of the last spell in your wand",
        meta: {
            action_type: 5,
            action_mana_drain: 40,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAY0lEQVR4nGNgoBAwInN+Xik4wcDAYE5Az0l2nQkWMA4LmmQ/AwPDCgYGBgZ2nQmMaHIMP68UhMPkcYKfVwr+/7xS8B+P/AlkPhMB52IAZOeTZQA6GDVg1AAMA5CTKXqSpRkAABqEGtVz+UqNAAAAAElFTkSuQmCC"
    },
    TAU: {
        name: "Tau",
        description: "Copies the two following spells in the wand when cast",
        meta: {
            action_type: 5,
            action_mana_drain: 90,
            fire_rate_wait: 35
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAd0lEQVR4nO2SuxWAIAxFHzQswz4wRtyENdhE+iyTCis9iODBT2HhrUhy8rhFgIcoABCmfGfZ2KB0UScA3tigjA0KgC9mdT/tkoRpFiZX/yBMuWUnTG7tbwbGhnhBPR4sWvQMSvTZcIQ/4NMB5WW2rnTEYOq832UB2s0sHupMyA8AAAAASUVORK5CYII="
    },
    OMEGA: {
        name: "Omega",
        description: "Casts copies of every spell in your wand",
        meta: {
            action_type: 5,
            action_mana_drain: 320,
            fire_rate_wait: 50
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuklEQVR4nLWSsQ3DIBBFv61ILMMM9GQal2ECXDKN6d2m9TKukuZDDgwSUZTfAMe7f3fYwI+aehfnsWwALI9R6XAfMqgSa12M5k5yBOCUDpPSYQLgGLNkrgbnsTxE5V3psKY77nceLdlLB0a0uaISY7FiC4Pe3C1lVhrEBthTZqVBnnGgcmI/BpzxCeSvUUjEijdq/Qcvbl0C+eqehYqcuZXI1QjOyDvB4tap3pM/j8U3OwDnH9Q37J/1Boj+SieuO83PAAAAAElFTkSuQmCC"
    },
    MU: {
        name: "Mu",
        description: "Every modifier-type spell in the current wand is applied to a projectile",
        meta: {
            action_type: 5,
            action_mana_drain: 120,
            fire_rate_wait: 50
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqElEQVR4nKWTwQ3DIAxFH72wDPdkkzJGugljpJs09yyTU3shyCG2Gym+YGTr/f+RgJsVALZ1+gADsMRURmt5W6cnMNfrElMZgxh+a5tjKm8DsO8QUwkAD2Xv5aifSgMM2mIF53+A7Kip4ANAZD/E2IHa22gRNDXVvgXQYljvcgb0MTz7loNe1bTvAWQM074JEHbn7n7ZQXOBY78B6mdqp1SV6nIu+1v1AzqGQV9HNU5kAAAAAElFTkSuQmCC"
    },
    PHI: {
        name: "Phi",
        description: "Casts a copy of every projectile-type spell in the current wand",
        meta: {
            action_type: 5,
            action_mana_drain: 120,
            fire_rate_wait: 50
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvklEQVR4nK2SsRWDMAxEf2hYxj3ZgBHCGGaCvEwAY5ARskHcexlXpJH9BNg8eOQqo7NOOnxwEbcSEbz9Ao18utqM99Pqwds5eDuf2iB4+wB6NT3CAUNtxrcuVpnmCaA2YxJX50nubAVUc9av1NxapJLmVtYGeG6dJkSul56FhUYmfUrdikv/pyrcPQwt4CDZyUJxbiEgqw1Se+0MjNwQ7aQN5H07oJEUrqfHZHY6C5eDtIsjUS6+graRs/Q3/AD5XFYQTtyfUAAAAABJRU5ErkJggg=="
    },
    SIGMA: {
        name: "Sigma",
        description: "Copies every static projectile -type spell in the wand when cast",
        meta: {
            action_type: 5,
            action_mana_drain: 120,
            fire_rate_wait: 30
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAr0lEQVR4nKVTwQ3DMAgkVSUv43+6SbpF6SRxt2g3sf8swyt9FCQ3BWop97ERcJzlA+Agpj5gwgoA80hjymUyE0xYmXBjwsXJL0y4aXwyalY5787kFwA0jU0Z3VNayuViSo0IhERlXmWqCesJCpTzGSlwCVIuj6hxRIGiRUmXgAlvcl29mhDihfqvzlQgjc2b3hOfjeQCHw+Y37d36I8PehMFymfdhS8Fu2UaWqrDeAP/XkOcSm9IYgAAAABJRU5ErkJggg=="
    },
    ZETA: {
        name: "Zeta",
        description: "Copies a random spell in another wand you're holding",
        meta: {
            action_type: 5,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApklEQVR4nKWTyw3DIBBEnyNLNMM96STuIqSSUIbTiXOnGU7OBUsIBkyUufDZ3ZmBBfgTU76Iwe2DdR9j/Q1gFsHFWP8uN2Nwd2DNiwEugrkqTnim8ZVvTiKxQgxuA66l+hBBZh1jfZVfHkFhTaNTwa6DM/URB4f60kpoEsTgHse805muA3+m3iRIbYP+u9AE6eJkz4WAdCBfnBAA6s+05cEeWm39GV++YzfEnK1IEgAAAABJRU5ErkJggg=="
    },
    DIVIDE_2: {
        name: "Divide by 2",
        description: "Casts the next spell twice, but with reduced damage",
        meta: {
            action_type: 5,
            action_mana_drain: 35,
            fire_rate_wait: 20,
            damage_projectile_add: -0.2,
            explosion_radius: -5.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAQElEQVR4nGNgGAjw+vXr/69fv/7PwMDAwDQgLiAbwJw9BDQjhzIhzSzoikRFRRmRFaDzSQYU+X2YGgIzaPDkBQAp+jjJ5AwcowAAAABJRU5ErkJggg=="
    },
    DIVIDE_3: {
        name: "Divide by 3",
        description: "Casts the next spell 3 times, but with reduced damage",
        meta: {
            action_type: 5,
            action_mana_drain: 50,
            fire_rate_wait: 35,
            damage_projectile_add: -0.4,
            explosion_radius: -10.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAARElEQVR4nGNgGAjw+vXr/69fv/7PwMDAwDQgLiAbwJw9BDQjhzI2zcjyLOiKREVFGZEVw/gwNejy1Hf+CDAEZtDgyQsAGtdEScuZdmkAAAAASUVORK5CYII="
    },
    DIVIDE_4: {
        name: "Divide by 4",
        description: "Casts the next spell 4 times, but with reduced damage",
        meta: {
            action_type: 5,
            action_mana_drain: 70,
            fire_rate_wait: 50,
            damage_projectile_add: -0.6,
            explosion_radius: -20.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVR4nGNgGFLg9evX/1+/fv0fWYyJbjZTVTOyVwh6QVRUlBFdE1G2whQT0siC7kyYjVQHpLgKQyM+w8g2hCwwcCmRpgAAZ7FWyxItWXMAAAAASUVORK5CYII="
    },
    DIVIDE_10: {
        name: "Divide by 10",
        description: "Casts the next spell 10 times, but with reduced damage",
        meta: {
            action_type: 5,
            action_max_uses: 5,
            action_mana_drain: 200,
            fire_rate_wait: 80,
            reload_time: 20,
            damage_projectile_add: -1.5,
            explosion_radius: -40.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWElEQVR4nGNgoAZ4/fr1/9evX//Hx8YFmMi1iGKXYpXERqOzibYBm0FEuYRYw/EaQIpiFnRnioqKMpLkNGIBUa6iKBCpEo2keAMGmLA5nZS8wEKKC2gSQwCeBr/N/m0magAAAABJRU5ErkJggg=="
    },
    METEOR_RAIN: {
        name: "Meteorisade",
        description: "Alea iacta est",
        meta: {
            action_type: 1,
            action_max_uses: 2,
            action_mana_drain: 225,
            fire_rate_wait: 100,
            reload_time: 60
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwUlEQVR4nLWSMQ6CQBBF/xJDNLGx8A5S0hpuYEPNFfAeNlvqPTwEveV6ByoqDM23kZWd7G7EhFeR2WH2DR/gQ6crtmVOROh0RZLsTW17k9gLkvS0AwCsD1dsL8fvQVvmJElpIY0osAZpkTk3jOzvD/WTWm9qO7U3ddAg1OdVGwf4hnS6srVVzCwtMgyNcWqb7OaslQDA63m2henzLKRaKBmJXUGqTZMZmj+NvF9cEMx5mgYAKKW8vbN+5VkDFklmEd7oL6ho/Ap6IQAAAABJRU5ErkJggg=="
    },
    WORM_RAIN: {
        name: "Matosade",
        description: "Alea iacta est",
        meta: {
            action_type: 1,
            action_max_uses: 2,
            action_mana_drain: 225,
            fire_rate_wait: 100,
            reload_time: 60
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABi0lEQVR4nJ2SMUjDQBSGv8soqGsU4iAI0WzSQqFYIe2axaGDzdCpg4OdCiq6CXatY1w6VAeHInZysBTBRcRFUgsFBwXNqoWu5yAXakyl+Jb/ePC/+993JwBs15PDoM+UvoRSgLieqveHFgCa7XpSt0wAlI6eozoM+uiWydyqw1O3JbR2oyQCv8di1uF0Zy28SfWq2Q6LWYfA75FfqHKydUdmUAwHiuUVRwLMrTq/4kV754eflJsFahunlJsFhkEfoRjolsnzdSu8LY5BfqFKOmFwe//KzXSds92M0NR+mUExjDeOwfnLDvn9GWoXFtVsB9v1pJbKVWTg90gnDMrNAumEgW6ZjHJRqYZBn65/yey8iZE8oN0oCQGweXQjM4NiGK92YcUyAOj6lwjx7QMQtuvJ+nZAfm/Ax9v37lf1JMVjnSiXdqMUGlVp7UZJGMmDcLqKF+Uy+kfGlpRSAqRyFWm7nnxsrv/QVK4io55fkVRFuahnm2jAX1ziOIxdJ5WryFGdyBg36F/GSesLD6PmXpTZRc0AAAAASUVORK5CYII="
    },
    RESET: {
        name: "Wand Refresh",
        description: "Reloads the wand immediately",
        meta: {
            action_type: 6,
            action_mana_drain: 20,
            reload_time: -25
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAe0lEQVR4nGNgoBAwYhP8/+aRPgMDw2o04VBGEbmLeE37/+aR/v83j279f/OoBYtcC1ROH69mQk7GaQgxmrGpZYLZzsDAsIpYAxgYGFahuIIU29H1MJGqER0MHgNCscU9LgBVG4ouSH40IrmCqISEYTuSJMlJmbqZiRwAAKwoa59yb/64AAAAAElFTkSuQmCC"
    },
    IF_ENEMY: {
        name: "Requirement - Enemies",
        description: "The next spell is skipped if there are less than 15 enemies nearby",
        meta: {
            action_type: 5,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABT0lEQVR4nGNggAKTrTfyGXAAbHLKzXM9UBTMfPn/PzaF2OSUm+d6RG+/+B9uCC4DiNIMU/j/P6pCbGJYNWPTgMxGNkS5ea7HzJf/UQxgQg4k0203C057qU9gYGBgmPUKogBGKzfP9bAwMdneNWue593a5B0wA1hMtt7ITzWBaEoTw3AYw+wzNwtSTdQnzGZgKLAzUmc4ceYMijzLGW+NiQxbb0AUo2k8460xkYGBgYFh6w2G9+eO3mQwUce0AT0c7r848P/+iwP/j1+fhBGA6P6HhwFM82rjFxNgfAlBPYbJSrsm4EtgKAYgg4SUWIYX7y8xVJR2o4gfOneJOAMWzFnMsGz1QoaO7lK42N3a5B0nzpzxLEtL2o4RjQwMDAxnvDUmhp6VKHjxHmKLkaUCVidjcwUKMNl6Ix8WgOgBycBAIDUiG4JMowOiDCEEYJoBhaXrnDo+u/wAAAAASUVORK5CYII="
    },
    IF_PROJECTILE: {
        name: "Requirement - Projectile Spells",
        description: "The next spell is skipped if there are less than 20 projectiles nearby",
        meta: {
            action_type: 5,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABcklEQVR4nI1SPWjCQBh9KQ6dugiFQrcMyVRpSaFTtkJUKJRO0lHs0MWAs1O2QiGBUlBJ15ukdEh1DghSD0WnOEidCnYp2M3lOsQLiZ6hH4Qc3/vJ4+WA9WheUMWOEWGy5RoJQmPBmIgowmTLNW47YxaZ7DL4l5gTGUsSRTuhWCSIn+MmsuUajQVLGOzFSzp/n5qDgmIDQPM7JPC3bLnGhaZ1Hpov+Vm93OUGGc0LqhUtFN0dbgVDi07NiqbYLcDUzxT0KU3gGVpUHXhBSF4v+Y4WVQcA4AX4Gfam0JStD+xFgo2J70R4lIB38Pyp2gBwfJTF1ToRANSWI6dUKu3Shwa0qDr3XoDacmTPVkBtNbJ934eu63g8OAUABwD84UTsonlB9eMJjD+EEPbVzjJCCCOEpP7GRIKbyasNAPid4218iVxujvbJtRnvYDOFJOxgv2dywqCgOJIkRQJ+H/qU5mf1cjdC4lc2rfVNkzRe6vAe/gDZX/vCAcbL6wAAAABJRU5ErkJggg=="
    },
    IF_HP: {
        name: "Requirement - Low Health",
        description: "The next spell is skipped if you have more than 25% health left",
        meta: {
            action_type: 5,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGUlEQVR4nJWSMU7DMBiFP1U5AxdIpXRGRmJiDu0JECMqa7NHTOnElI5tFRYGThDKjISEhFUJpkQRBygLRzBDamQnTqBvsfX/7z0/2z/sIfJiRgdcPT/JQouw3CnlIrp6fpKFl5t39WvSZfAvsSYqZRNdNafYJTD3pomfZOFypyyDgflIJ49l9DYOUoDVV03Qq59k4akQm9vV3fnnzdWTNvBEXsymohZdH7WCsZZlNBVBuobo7DjgVUqr78nJaEFe1OR9UdfkZLQAIC/43r6UiKB9gustuv69eX8Aryl+GN+nABdmgh4MTDHAkDlD5lZN43n70R27UrFqolJxaw6c33gIelPowTEHqsn7cxorFbeiH2zSJzZNAH4A/WP9NcXqQjMAAAAASUVORK5CYII="
    },
    IF_HALF: {
        name: "Requirement - Every Other",
        description: "The next spell is skipped every other time this spell is cast",
        meta: {
            action_type: 5,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMUlEQVR4nJVSMW6DQBAcWbyBD1Cc6+iiuEoN9hPSxYLWVOlc0bnJuQQLt8kHCK4jRbKUk6WkgsIPIE2esCnI2dxxRM5Kp0O7M8Pu7AG/wYtqgYGw1bwk9zVA2hDZgLaal+T+XflBJ5EhgYvICkikA205K9lG6H53Rbwk99OGNIFR16Trlzp+nzIBANlXC1C3l+T+hPNylW2D43K+UwIOL6pFyFtS5PYaw0bWcciZ2ADx7RXDXkqt7sjZeI2iasEGUc7GawBAUeH78FaDs/4fTB/ShoiIyOa+Of/JA0UOOROrbBtMxDMiFwg5E389MABwTHK3GLkAOBNqhNfDZ09gpIEtofLH5Xy3lzJ4iO7L3hqB87rMMPO2LqDGUCbdPD5ZjQQueI1DW/iXiDr2Xs8iAPADNvQE24jKzjIAAAAASUVORK5CYII="
    },
    IF_END: {
        name: "Requirement - Endpoint",
        description: "Any Requirement spells before this will skip all spells between them and this spell",
        meta: {
            action_type: 5,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA40lEQVR4nGNgYGBgUG6e68FAAJhsvZGPVUK5ea5H9PaL//EZYrL1Rv7Ml///k2UIsmaSDTHZeiP//3+EJnQ+AwMDAxOyIXZGerh8QRzA5QqivAAzYObL/xhhgU8zCy7D0BXPPnOzAF38jLfGRKwGCBpZq5/2Up+ALGa67WZBqglELE0MKrb1Bm4XwDQxMDAwwAyDuWI2khgTuqZD5y5hGDTrFcLJZ7w1JmK1DTkA8YU8elpAcQE222efuVkAs9Vk6438VBP1CTCvodiOHP+4bIaJobgCVz7AFufoBqK4AGvAEAEAxFXVaSOOg6AAAAAASUVORK5CYII="
    },
    IF_ELSE: {
        name: "Requirement - Otherwise",
        description: "If a Requirement spell before this succeeds, the next spell is skipped",
        meta: {
            action_type: 5,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNUlEQVR4nK1TMWrDQBCcGH9ATT7g4lylEGswGFLb8RNSGqXVfcCVPyCXsvAzZLkWCAQ5DuJKV/gBSqM61aVwTpxkXxJCplpud2d3hzkAwGizn6OH0WY/j2ut41prV74NnrO3ThGlVRjXWlNahXZsN3d6XCT6C981DwDgvF4dSyEWU6LMJpkcFJ8cFLebp0RZKcTivF4dAWBo3/XoP6AUApRWYUAserm/vO/eAaQVGlkoU2Nw1xfGTPD8GQOAgFiUCMUbWaj+9PaE/hYAIJbjLQAkQvGAWOT5M2ZyNq4IbBFfn1hkSBpZqFt1TgLgIqIhcWF469HzZ8wWMSAWJQD/FUEuT2ikUAnAE3RFzAcf7lWMdY0PXA7sW7uzQS5PbSyW4y3S6mqQXdOZ/lcr/99ncmny03f+BDyPA3DxV2nUAAAAAElFTkSuQmCC"
    },
    COLOUR_RED: {
        name: "Red Glimmer",
        description: "Gives a projectile a red sparkly trail",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAl0lEQVR4nLVTsRHAIAhESxsLaxbIBtm/yAZZwNrCxtZU5AgaQnKXr+R4ngcV4G9sIXQzuSL2iqgWSI7nyb2Uk8QLZmeCm1leUgIAgJizk0XUZG3NDQ544q6j5DySJWLOF9eeJ8iehorY+c2oO7A4GASoi+aCiwxLpGI5DsXqmDQfichYfZV8OVzAMtIAKSQ7m//Hq4/0FQf4yGZB3vE9fgAAAABJRU5ErkJggg=="
    },
    COLOUR_ORANGE: {
        name: "Orange Glimmer",
        description: "Gives a projectile a orange sparkly trail",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoUlEQVR4nLVT2w2AIAysDKImLGLCCo7BOIzBCiYsQqIuUr9KSpWHJvYHCndHDyjA33FYjd1g9AbRmypBYhTfPMOeQJzwNH8UmFwcSiI8JwwAwFAqs2ThDDtMLiZemrS8J8K6ZYdmyWE1jsvcFOFV3Cy0RKoVULTscBElN4nMb5rncj0TQG+QAOSR5/IFbifTt6Uq5NgdUkj2Q3d/vGqkr3EBsE53O2DL+U8AAAAASUVORK5CYII="
    },
    COLOUR_GREEN: {
        name: "Green Glimmer",
        description: "Gives a projectile a green sparkly trail",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqElEQVR4nGNgoDXwnqr3n2jFtZej/tdejsKrAV0NE7LkuUNX4IqQNWBjwwAjNicb2ekwMDAwMDTrLmPEpuncoSsMW7MvMWI1AJdN2DQzMDAwsBCjCRkga8ZwAbLz8QG8XiBkSLPuMhQ9TOgK0J2IDtC9imEATAEsSpGdjU0cxYDay1H/YQpgLkHmo8cAigEwzegKkPmEvAcHsPQP8w56fiA6f5CUkcgFAKrSbKFckChnAAAAAElFTkSuQmCC"
    },
    COLOUR_YELLOW: {
        name: "Yellow Glimmer",
        description: "Gives a projectile a yellow sparkly trail",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnklEQVR4nLVTsRGAIAyMLGLLBu5hJRUzMIkzWGHFHm5AyySxChcjIHpnquSS/+QDAfjb/KqxuxiTRUy2CZA1iif3cOQiDij5RQLj4lAj4THVAAAMtTFrEvZwgHEx47LzpD0Dxu3SVPEEH61mmCzyl7lJ8KvGZZ66J3i9A0miZJLAUg7FTZmkj0hk3PyVfDmcoEfSzSSR7Nx9H68O6audYXmAA0BucikAAAAASUVORK5CYII="
    },
    COLOUR_PURPLE: {
        name: "Purple Glimmer",
        description: "Gives a projectile a purple sparkly trail",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAn0lEQVR4nGNgoDXoltj5n2jFB9X+/z+o9h+vBnQ1TMiSpz7tgitC1oCNjdWA0hfujLgMQebD1DAwMDAw4nImLi+c+rSLofSFO1wfnEHI7zBgf4sRxVImZAlkp+ECB9X+/0eOGQwvdEvs/G/G50a0C0gOA3RDmNAlYZrRvQPj4/UmzH8wQ9D5eFMlcuAgG0CMlzAAukHoNhOdP0jKSOQCAJsTe14g4EL/AAAAAElFTkSuQmCC"
    },
    COLOUR_BLUE: {
        name: "Blue Glimmer",
        description: "Gives a projectile a blue sparkly trail",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoklEQVR4nLVTuxWAIAwMzGFpZSUbsIsjMIcjsIsbaGVFyR6xCi9E+eh7XgOBy5EDAvA3BrdjN9l6ROuxmiA5mm+G80gknvA0fxSIq1ElER4TBwBAlcosWQjnAXE1KS9NWt4J26KyQ7NgcDuO09wU4VXcLLREqhUQWna4iJablMxvmsdyPROwHpEI5JHH8gVuJ9O3pSrk2A0pJPuhuz9eNdJXXMIKdeUku7lSAAAAAElFTkSuQmCC"
    },
    COLOUR_RAINBOW: {
        name: "Rainbow Glimmer",
        description: "Gives a projectile a randomly colored sparkly trail",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABE0lEQVR4nGNgoDXwnqr3n2jFH2Vl//9f44xXw0G1//8Pqv2Hq2FClrz29i0DAwMDA7IhtZej4GyHuf8xDEcxwPLbN8ZHBx5ADHkYj2IIsuZTn3ZhN4CBgYFBfspdRhgb2RBkzaUv3OFqWGCMj7Ky/xkYGBj4+tXQ9aAAZM0oLuB//JgRFgb4wEG1//+7JXbCXcaCLGn57RvjwwMP/ss5KOA0wP4WI3YXwAByGOByAV4DYFG4Yt1JFPE71y4wMDCgxgCGAR9lZf/DojGy8AYjAwMDw7lDVxgYGBgYnvQaMt65dgEjEFE0H+fi+o/sClg0IicmdIASC5bfvjEyMDAwwFwBAzBXwAByLOAFy/s1iM9I5AIAVPN98l+DudoAAAAASUVORK5CYII="
    },
    COLOUR_INVIS: {
        name: "Invisible Spell",
        description: "Turns a projectile invisible",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZklEQVR4nLWR2w7AIAhDwf//5/qwLCFNy9ycfVI4XFIiTgsAXsFPBS1zJyqg3u0QhlCkmi5v4orTJjIzSACg4ra7Y5Y8+Dpgv4kz0MVTQRGXierPJg4uZqD+1QVGTbYnMpv+A+5oAk1jl5cCtgUNAAAAAElFTkSuQmCC"
    },
    RAINBOW_TRAIL: {
        name: "Rainbow trail",
        description: "Gives a projectile a trail of rainbow",
        meta: {
            action_type: 2,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAp0lEQVR4nGP8//8/AyWAiSLdI8AAl8tM/5n32fxn3LD2P2PNfVho/5djnAIPeRQDfrtp/GdgYGD4d5kXruCv0xFGGJvRatt/Lo7pDI/+5yA0/f//Hys++pbh/////xmY9lr/x6Xm////EAPuMjMjFPWr4NWA1QAY/uWqTpJmFANeSQvDNf+9xPP/////DM6XGAkayEjVpAyLBZIANmfBvEAMpq4XyAEAqRgM235KtSEAAAAASUVORK5CYII="
    },
    CESSATION: {
        name: "Cessation",
        description: "The caster enters the realm of no realm",
        meta: {
            action_type: 5,
            action_max_uses: 25,
            action_mana_drain: 0,
            fire_rate_wait: 600,
            reload_time: 600
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVR4nGP8//8/AyWABcbo799OkkmFhZ6MDAwMDIz///9n6O/f/v/y5Usk2ayrq8dQWOjJyIIseO/eNaI0Kylpwdks6JLPnt3Fq1lKShmFj2EAAwMDw/v3z7BqFhSUwhDDagADAwPDjx+fUfgcHLxY1THhMoBYMPAG4AwDXH4mygBsoU20AejxTJIByCmMWMAIy40UZSZKAAA1wihBM86yagAAAABJRU5ErkJggg=="
    }
}