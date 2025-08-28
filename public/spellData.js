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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAiElEQVR4nGNgGDCQ7mRZl+hLgmoGMKhL9CVKG1wDJmBE42toW0pKK0HYz5/eu3H1OJoCFlyqNXUsNHUsGBgY0PQwoal+/vQeRDVE0Mk9SkPbErsGiGq4DcjiDFg1IIPrV06gMbD7AeJRiJGYShnAAGEDxPWYDDgXAlCCFc1/EF+hhRLJ8UB7AAAdgDrjCXh2MgAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAARUlEQVR4nGNgGAXkgrWFn/BwGbDKPVv289mynxDGz9d/IWzs6tYWfoJIQ9T9hKlG14MsBFEH0fkMLIjPVciaCatjGAkAAClgP0vd8vekAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAiElEQVR4nGNgoAR8nixOUA0ThPp+v5qBgYHFwALOxgUY4azvh/0ZZHQYnlzhtN1IQMPnyeIgs2V0oGJPrvy5cII39yV1bIACiLtBegj5geRQohJYW/gJD5cBq9yzZT+fLfsJYfx8/RfCxq5ubeEniDREHVw1uh5kIYg6iE6IID5XIWsmrI76AAD6KWBDXTJ/GgAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAl0lEQVR4nGNgoDb4PFn8PynyTDDG9/vVYAkWAwsUPiF5RhRFh/3/M8joMDA8ucLAabsRRQ6XPCPMWWCTQZIw8OQKw58LJxh4c18y4pNnpNQFcADzE1gRnjDAJU92LNAWOPZd/k+MGAM+RaWn/v8HYRj75+u/cD5eTY59l+EKYZqQNWM1hAFNAqYJZhhMjihvoBtIkia6AgDX8qZYZf/4/gAAAABJRU5ErkJggg=="
    },
    LIGHT_BULLET_TIMER: {
        name: "Spark bolt with timer",
        description: "A spark bolt that casts another spell after a timer runs out",
        meta: {
            action_type: 0,
            action_mana_drain: 10,
            fire_rate_wait: 3,
            action_speed: 800,
            action_projectile: 0.12,
            damage_critical_chance: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAtUlEQVR4nGNgIBEwQijt4OkCEiYQ9ocXZ66uzcSnSTt4unX26cPXvy9fvvzw9e/W2ae1g6fj02ANVv0aDKTN0yF6cClmglBPLmxgYGAw8Km5sKUFwiagQcYggIGB4cKWFjgbn4YPL85UTLly4w3Pnj17brzhqZhy5cOLM1QNJSqAtYWf8HAZsMo9W/bz2bKfEMbP138hbOzq1hZ+gkhD1MFVo+tBFoKog+iECOJzFbJmwuqoDwDgj3+ZIvLZ8wAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAALElEQVR4nGNgGAXUAPnLuamhJ3859/H3yf///4eQmOD4+2SauSqfDD8MNwAAJOEj2VH12V0AAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAcUlEQVR4nGNgoAR8nixOUA0ThPp+v5qBgYHFwALOxgUY4azvh/0ZZHQYnlzhtN1IQMPnyeIgs2V0oGJPrvy5cII39yV1bIACiLtBegj5geRQogHIX85NDT35y7mPv0/+//8/hMQEx98n08xV5PiBIgAAuRBE0WWSk08AAAAASUVORK5CYII="
    },
    BULLET_TIMER: {
        name: "Magic arrow with timer",
        description: "A magical arrow that casts another spell after a timer runs out",
        meta: {
            action_type: 0,
            action_mana_drain: 35,
            fire_rate_wait: 4,
            action_speed: 625,
            action_projectile: 0.4,
            spread_degrees: 2.0,
            damage_critical_chance: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAnklEQVR4nGNgIBEwQijt4OkCEiYQ9ocXZ66uzcSnSTt4unX26cPXvy9fvvzw9e/W2ae1g6fj02ANVv0aDKTN0yF6cClmglBPLmxgYGAw8Km5sKUFwiagQcYggIGB4cKWFjgbn4YPL85UTLly4w3Pnj17brzhqZhy5cOLM1QNJSqD/OXc1NCTv5z7+Pvk////Q0hMcPx9Ms1cRY4fKAIAn3ZkJ7sHXLAAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAZ0lEQVR4nGNgGAWEASNW0f7D6ioyKhoKBgwMDCoMLXcYahgYGFQZW1E0QBTdeXIHolSFoQXNlDsMNaqMrSAN/YfV4aJwgxEiDFAbbjy44Ku4Fd1JEM0qMioQLkTzDbBSIjw4ChggAACIpRsFoZGYTgAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAqUlEQVR4nGNgoAR8nixOUA0ThPp+v5qBgYHFwALOxgUY4azvh/0ZZHQYnlzhtN1IQMPnyeIgs2V0oGJPrvy5cII39yV1bIACiLtBegj5geRQoj1gxCraf1hdRUZFQ8GAgYFBhaHlDkMNAwODKmMrigaIojtP7kCUqjC0oJlyh6FGlbEVpKH/sDpcFG4wQgRmw40HF3wVt6I7CaJZRUYFwoVohiil2PtEAgAC2zv9OCN5LwAAAABJRU5ErkJggg=="
    },
    HEAVY_BULLET_TIMER: {
        name: "Magic bolt with timer",
        description: "A powerful magical bolt that casts another spell after a timer runs out",
        meta: {
            action_type: 0,
            action_mana_drain: 40,
            fire_rate_wait: 7,
            action_speed: 675,
            action_projectile: 0.51,
            spread_degrees: 5.0,
            damage_critical_chance: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA10lEQVR4nGNgIBEwQijt4OkCEiYQ9ocXZ66uzcSnSTt4unX26cPXvy9fvvzw9e/W2ae1g6fj02ANVv0aDKTN0yF6cClmglBPLmxgYGAw8Km5sKUFwiagQcYggIGB4cKWFjgbn4YPL85UTLly4w3Pnj17brzhqZhy5cOLM1QNJdoCRqyi/YfVVWRUNBQMGBgYVBha7jDUMDAwqDK2omiAKLrz5A5EqQoDKMSQwR2GGlXGVpCG/sPqcFG4wQgRmA03HlzwVdyK7iSIZhUZFQgXohmilGLvEwkA6TJbU8oULG0AAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAYklEQVR4nLWRXQrAMAiDdexo3jrezUJlIvRHymieUsgXlRLdELrcP1daawGwLmdQwp4OxhL8jt0i4l5ViSiekwVWxZYmFFgA2N8w1tvH8IZxI+kG5mV+Pq3IZX/wicf6290AKaCknJ9I+IwAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAxklEQVR4nKVROw7CMAwNFUOlTpyDPSNBPQZrJRYukUt0ido1x0BuR/aeIxOKtyAR5OYDEYinDPazn+wXM/YnnHM5OYBN85T6jC1jTAGej7XPm7bfH05UXmZ9v158zKW5yV2kbtqeSzOAdU8MYLk0Tdu/nxV2FzQbirg0tBihE/U4oQKkZaqyxXHChIkEnXhN6ETtX0iuv0QYJ0zK+ZCKomXWCtCXwyYFuMya0tU0HSG07rvpFKmgfLgf4M8SeeDSlDX5/36LByHodMkdDOP4AAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAy0lEQVR4nGNgoAR8nixOUA0ThPp+v5qBgYHFwALORgZzDnyHsxnhrO+H/RlkdBieXOG03UjAhs+TxaGqGRgYZHS+H/bH6jazhvfYbbDfuwAueKpBELtFEHd/P+xv1vD++/3q/2Aw58B3iKk4wefJ4nMOfIcoxaWHEc4ya3if5sCBZkSyPcfcgz9mHfgBdxs0WHGBuQd/oImgaEi2h9qQbM8BQciCDGDAgmYemjRWSxDArOE9CZ6G60H2OrJ3UTSYNbyHSyAbiTPiiAcAN1J3PR0o6KMAAAAASUVORK5CYII="
    },
    SLOW_BULLET_TIMER: {
        name: "Energy orb with a timer",
        description: "A slow but powerful orb of energy that casts another spell after a timer runs out",
        meta: {
            action_type: 0,
            action_mana_drain: 50,
            fire_rate_wait: 6,
            action_speed: 210,
            action_projectile: 0.45,
            action_explosion: 0.18,
            explosion_radius: 15.0,
            spread_degrees: 3.6
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA+UlEQVR4nGNgIBEwQijt4OkCEiYQ9ocXZ66uzYSrMGt4f6pBEEWTdvB06+zTh69/X758+eHr362zT2sHT8dnizVY9WswkDZPh+hhYGCYc+A7pmImCPXkwgYGBgYDn5oLW1ogbAYGhhQHTri6OQe+////H6FBxiCAgYHhwpYWONus4b1Zw3tks+ce/IHPD////59z4DuaHgZcoVSYm5BszwExddaBH8ihBNUAcUOaA0gRMki250DTA/UDLoBwNwygaIA4A8KAIGRBBjBgQebMPfgDTRqrJQhg1vAeEt4QEmtAITwN14PsdbQggmqYc+A7cqQiG4me7MgAAPKLjryGq6RbAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAUUlEQVR4nGNgGDIgfzn3/+Pvk8GYLM0MSOD///+kG4IMyHIFVTT/J9fpx98n/yeoOR8ayiAAo/EB6ruAGEAVQ45TEgsM5BpClZSIHEska8YHADovbGlhy/c5AAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAp0lEQVR4nGNgGDQgpHbGLGzshN3f/4MwyZoToBpVpU3BmCiDAibs3g7TDNOIjtENYULWvKHA1ROk4GiCHVgsyicfwxKQHLIhTLhcA9LcMCMaqyGYYTD/4hFsTq9PX4LhhZnVx1C8woTP4GVbJmKI9SxAdRETiFiTqG8DCoMFrpyM1gsOYfU/Mh+kBqQWrwuWIdlOdHgE4IlGWHhgTQsh1EhIFCXlAQUAthidjF6jfKMAAAAASUVORK5CYII="
    },
    BLACK_HOLE_DEATH_TRIGGER: {
        name: "Black Hole with Death Trigger",
        description: "A slow orb of void that eats through all obstacles and casts another spell as it expires",
        meta: {
            action_type: 0,
            action_max_uses: 3,
            action_mana_drain: 200,
            fire_rate_wait: 90,
            action_speed: 40
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGUlEQVR4nGNgoBAwwhjawdP/C0iYwCU+vDjDcHVtJlweL9AOnv7fOvv0/8PXv/9fvnw5mAbxQeJEGWAN1fz69WswljZPhxuSsPs7GOPSywRjPLmwAUwb+NQwXNjSAucfTbADY1wGMcEYMgYBYBqkGZkPA8gGYRjw4cUZhoopVxhuvOFh2LNnD5gG8UHi6ADdEEZ8sXBlTQZDQ8ZShmVbJqKG2YJDDAtcORExFDL/4hEQDTJZVdoUjuvTl6DwQXhm9TEwDXMFEwMegG4zCPQsyMcMxDWJ+jYBE3ZvBzkL5DwQiPJBVYjMR/YCEzG2gzQ3zIjGMBQDBEzYvR1bWCCHB9ZEFVI7YxY6G5ZwYAYQSpFYDUE2CL/bKQAAWpbM/UPAAiwAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAr0lEQVR4nGNgGDTAJ3F2PDa2qKLTfxAmWbMoVKO/TT4Y4zKIEc2guVvmpyaDFFpJ62K17NjTywyv7++D62PCp9lA2xTDAJAcskuYcHkLpLlhRjRWQzC84JM4e9eW+alu6E4Hab5w9TSKBi/7cIZtB1fCvcKEz3R0zSAA0owMmEAEyHZQGIBMBJkMsx3dS9gCkokY2/GFByOx0QgLD/RoZIBqJDsh4TUE2SCcGgccAAA3JHR3cqZtiAAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA2UlEQVR4nGNkQAUJu7+jiSxw5UTmMqIr3XHr6IoUuKB1xBwGDzVkbSxw1UcT7NDMZmBgkP9yeVkCSH/C7u8QPUzIqqN88tE0LNsyEcI4mmAHcQJIAwRE+eQ3zIjG1IMGWED6dtyCGpaBMBIL2HErYfd3kA1HV6RADEZWjWzV8kkrIMpAoYTLu1iB9YJDCD8QCZjQ+BDbCWiwjpgD50fmReB0TwRIGRMoOsBxiQsgfO+htsCVk4AfMCMHmpaQwyrKJx8tfJdtmWi94BAkaZCc+BAaULQhAbTkDQCIkWBj5lys8AAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAy0lEQVR4nGNkwAJEFZ3+YxN/fX8fI7oYCzaN6ny6DMK8qArffmZgYFBk+I9uECOyZitpXTDbQNuU4cLV0wy4wLGnl+GGMKFrBgFcmkEGgwBILcy1TDitwaK5YUY03BC4F0QVnf5j8zMuQ2CuA4XJzU+XIS6Aaa4tzMPqZHSvgcRhehjR/U8KAAUmEwOFgIlYhejeIysQkQE8EF/f38cIYuAKOFwApAeklwlZEFdc4wMYSRlbMkYXQ07KKLmLUGaCeRVrZsJmEDrAlp0BC2xhgKc/+3YAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtUlEQVR4nGNgoBAw+k09/B+bxKZsW0aiDFCVNkUxwMgjB0x/N1IiyiBGkAHLJ61giMyLwJAEGUbIIEZ0F0T55DMs2zIRq0HYDGFENwAXwGUIEwOR4NyOKQyc5+4xoAc6Ey4NoHDBZgg6YEL2OzLAFqgggO4KJhgDPeBwAXRXMBGlC48rmIjRgO49gi6IQtOA7j1kb2AYANLcMCMar60oLsBmW0PGUqyBii1qiU6J6ECzqg+cKgF2Yk2a5/QwDgAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuklEQVR4nGNgoBAwiio6/ccm8fr+PkZiDGCxktZFEXj7GcpQZPhPjEFMIKK2MA8uIMwLwSCD1fl0GUAuxOVKsBf8bfJRJA20TRkuXD2N4aqbny5jdQ0TugC6ZpirYK4haAAugMsQJlwakMMF2RB0wITsd2TQ3D8Jq8HormDC53dsAN0VTETpwuMKJmI0oHuPoAsM0DSgew/ZGxgGgDQ3zIjGayuKC7DZ1pCxFGugYotajKRMLDj2FJK0AdtzQYdAWkWOAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABWUlEQVR4nLWTvUoDQRSFd0N6fxpFiWJh0MJ1DQga8AXs7ewsFXwBsQh5AUFLe0HQyrzAwpoqbmKhrFUMStJEfQEj38hZJrtb6i32zs7cc+6ZMzOO81/Rqsftq/27UXouXVdIT5ztXj4AjJ9fvOpW1QkOOyPmWAvC4Pv1/GOMtKiBvdB96jlvXz2TF1dLjH1IZqZn/VwFrXrcvm3cRGEzTEDzEyVTMLc3acaANSdFCUHlpLx+3DjYGAz7kTpvn66ZgvfrT5MBQ8yaraRg793uAhAACsgQamu2oUURVJY2fQEAk+24rz2OKQmboce/ywfXcZwOCpEpREqmbufCcxMF5ZXljhjpgFztXRlQt/a7BbzKmOhY8pALQN2kRGAMz5g4GPYjuSyjBIRQR4vRGC4TXdsoLhN3ATIK5QuEUqdYOJoy2MxVlkSyLpXkQw5Q4NxIPxhOKO8R/Vn8AD2r4ZMVJ4A5AAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAo0lEQVR4nGNgoDf4HD7rPwjD+CxIEhMZGBjyoNxJvCvT8rFpZgswgLAZZv3nXZnGyISsGSQJVZAHFSPeWT+Xn/oPAyA2sjOJ8gKxAORsZD4LlJ70a8MFmP8Zfm24ABYjxkBGfIFITMAy4jIZOWCRXYXNEKyacQUsUbHzGU0zvthhYqAQMOEQB8UKw68Vp+ECIDa22KE4EHEagGwIzFVExQCpAAAuLpqu0fiQzwAAAABJRU5ErkJggg=="
    },
    SPITTER_TIMER: {
        name: "Spitter bolt with timer",
        description: "A short-lived magical bolt that casts another spell after a timer runs out",
        meta: {
            action_type: 0,
            action_mana_drain: 10,
            fire_rate_wait: -1,
            action_speed: 500,
            action_projectile: 0.3,
            spread_degrees: 6.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABA0lEQVR4nGNgoBAwwhjawdP/C0iYwCU+vDjDcHVtJlweBj6Hz/oPonlXpoHlmJA1d+ToMOTY3AHTID5IHF0zW4ABAwjDDGICETDNGiJfGFxcXBgiEgrghhACTDDGkwsbwLSBTw3DhS0tcD4yADn714YLDCAM8wIYWGef/n/4+vf/r1+/hmMQHyTOQIwLPrw4w1Ax5QrDjTc8DHv27AHTID5InKJYOMHCPImBgSEPKjSJd2VaPk4D0MHn8FkTQZpBIQ4CIH/jMgSrZlA0/Vx+6j8MgNggMajB+MFnNM3ohmCNRnIBEw7xSeD4XnEaLgBiw8IBWSHFgYjTAGRDYK4iKgZIBQDUpbSqEvpc9AAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsUlEQVR4nGNgoDcIepZ7BIRhfBYYw/pkaKO4rIQziP3y8Yu9R81X12PTHCspbA3mPMs9sk5qsg0LsmaY5GKIGAM2Q3A6a/3/hv8wAGIjO5MoLxALQM5G5rPA/AxyNoNkI8QLz98eBYkRYyAjvkAkJmAZcZmMEbBQVxEVsNYnQxtxBSxIjqABQWia8cUOEwOFgAmbIDhWnr89uoEB4VoQG1vsUByIOA1ANgTmKqKTNikAABtFsejKswnfAAAAAElFTkSuQmCC"
    },
    SPITTER_TIER_2_TIMER: {
        name: "Large spitter bolt with timer",
        description: "A more powerful version of Spitter Bolt that casts another spell after a timer runs out",
        meta: {
            action_type: 0,
            action_mana_drain: 30,
            fire_rate_wait: -2,
            action_speed: 700,
            action_projectile: 0.5,
            spread_degrees: 7.5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABCUlEQVR4nGNgoBAwwhjawdP/C0iYwCU+vDjDcHVtJlweBoKe5R4B0eukJtuAaCZkzR05Ogw5NnfANIgPEkfXHCspbA3CMIOYQARMs4bIFwYXFxeGiIQCuCGEABOM8eTCBjBt4FPDcGFLC5yPDEDOXvz87VEQhnkBDKyzT/8/fP37/9evX8MxiA8SZyDGBR9enGGomHKF4cYbHoY9e/aAaRAfJE5RLAiU7WsSl5VwBvFfPn6x96j56nqcBqAD65OhjSDNoBAH8UH+xmUIVs2gaFr/v+E/DIDYIDGQHAMhEISmGd0QrNFILmDCJgjyK8jPGxgQrgWxYeGArJbiQMRpALIhMFcRFQOkAgBO3MZmsXaCfwAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApklEQVR4nGNgoDfY2fN+PwhjSHTE386GSYLYuDS/OPj/PwjDDGGBaTbUFQnRNxVwQDKQoWKh6lSinfXi4H84QLaBkBdYGEgE7iWCjsh8FhBx/vKbNSBanwHihYunPxyAiRECjDAGLBxgBoL8j02MaKd2QGMFOdRxxQ5ezegBS5QhO9E044sdJgYKAQs2QeRYEbeDiL08RFrsEB2I8GjEZQjZ0UgsAADegckOZDymmgAAAABJRU5ErkJggg=="
    },
    SPITTER_TIER_3_TIMER: {
        name: "Giant spitter bolt with timer",
        description: "The most powerful version of Spitter Bolt that casts another spell after a timer runs out",
        meta: {
            action_type: 0,
            action_mana_drain: 45,
            fire_rate_wait: -4,
            action_speed: 900,
            action_projectile: 0.6,
            spread_degrees: 9.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+0lEQVR4nGNgoBAwwhjawdP/C0iYwCU+vDjDcHVtJlweBnb2vN8Pot1LBB0ZkDVbZ5/+f/j69//Lly8H0yA+SBxd84uD//+DMMwgJhABsrkjR4dBQ+QLg4uLC0NEQgGYj+wiXIAJxnhyYQOYNvCpYbiwpQXORwYgZ188/eEACKN4wRrq/NevX8MxzBtEueDDizMMFVOuMNx4w8OwZ88eMA3ig8QpioVYHpccQ12REBD//OU3ayoWqk5lIBZ0xN/ORg91kBjJmmGAJEN2omlGNwRrNJILWLAJggIMROszCDiI20HEXh5iYADFP0yOICA2EDEyC7ohZEcjsQAAQkTiFyX0YEQAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAr0lEQVR4nGNgIBEwovE5feeIGIcxMDC8Obvq++YUAro5feck7f+27t6vdfd+Je3/xuk7h4AG2YZP6+79+g8G6+79km34hKmGiVQ/sCBz3pxdtcU+CsLe8vDPm7OrqO1pYgAjfmmcFnL6zpFt+CTb8Ak5KHGGMicOCayhzMTAwCBiHOYjzxKoyBqoyOojzwJxAy6AEqxoAGsogzTgCv7vm1OWMzDsRvU0NJSoH/xwAACVOYAVDfD++wAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+UlEQVR4nGNgoBAwogt8niz+X2xXK4OIcRiY/+bsKobvm1Mw1GGA7/er/4Ppw/7/k/Z/+w/ir7v3C8zm9J0DliNsyGF/sEYQDQMgQ2QbPuE0gAnmbJAmBhkdiKiMDsOPIwEMX6ZIELSUBUTw5r5kZGDYyPD9MAPEkCdXGLZLr2ZgkGZg2PLwDzgcSAoDTt85YK+AnE60/2EA5B0GEgAjsQpBLsEbtZy+c8BOxuZsEB8UnaAYwRq1nAQUgAwFiWOLWiYQAXKajzwLQ6AiKxiD2DDnEhWNDAQAyM9b7KPgfOSoBRuATwEIgAJsOQPD/91YAhEekgRDmVYAAOzAyrxtxQwFAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2klEQVR4nGNgGHQgOTl5B4iesXjrNBB96frj/zBMtqEzFm/9D8IwQ5ANY4LaWozN1g07zoE1whQfO3MJbBiy4Yz4bMUlJyEqyRDgYcSI7IIdUE1H0Z0IAg+fvAJjGHjx+jkDTB0LyPlz5871ADk/I9bbGiQIciqy5ld3jkB5NgzyMmIoLmRioBAwYRPMiPWGhw3IRjEVGzCG2Q4CViZ6DHqasow4AxEUAzC/4rOECSaAFJXggFSSF8UZAyDbYQHNgkXNRWRbkAMV2WswgNMLyAA5WkH+JkYP/QAAQneBW0Hdl3oAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1klEQVR4nGNgoBAwElKwYfPe/yD67PmrDM11eRjqmXBpgLFBGnFpxnDBBqiGFy9eMEhISMDFQfzZ09oYYYYH+Doz4jWAEDA21IYbwgQiapsmYZiMC4Bcg6yOBWYiyBCQJLpikFeQvYTsNbgLYADd3/fuvmA4dvQChibkgGYCESAngVyBzzBkAAonmCFMMEF0/4M0WVkbMCgpS+A1jAVdE7pf0Z0Pik7kgGekJAoxvGBsqA1WAEp12GIEG0DxArLJMKcj2whyJXpYYU04IP/BYoWYxEURAACQdX4nrhO7lwAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlElEQVR4nI1TPUsDQRCdPSNIUNSocIUSFCwSFKz9gpBgEE8QUvgvBAtLLbRLJf4SwTRCJBBjCkEMRHOFoMTz40BB0cYievKGTFgvF/AVt7c3++bevJlVFIBSdt+LFvNqLJfj/eHRiSextdWk0s+qIPK980QLdzVVX0wx8fjL4NjezoZyLIskMRDSyZXNLa/7vEzVcIROx+Oe3SQCruuykrpdJYeopU75/2x+vlNhYoo6IXF7RZHBfhq6sTmJIfW9xqbJHhltHQpC7OWB11pDkZSnkODi8polmqbJhySRnwx1bt8AFb5DlOhqUHgpTQrSxSQhY8UhJJT6QdATw1BW4FgWy5EkOspnFV5n52balHxk1rmlBozofX7sWLcfUIEyBAoPqOC2aRLFE/+7jnTPT7uJ/4F4Eg95ZKAOZOpEltbpWFlO8qS2JjFazKvMZMxDf4Na6MewXW2Oc06x9dhgsiAJaiBRAMdhsHxDHD+UeNtlArZ3D3jKMm8O75EcJmNw/Lfxz2UCZLQhU+YdKGVTNO8jI/AL8NLXdQlXVPgAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA10lEQVR4nLVROw6CQBQcqFnsbE2oKSyw80KcYS2h8gCchdjSQWFBTWJrpSz9mmd2k5cVUIxOs7xhZvI+wC+RVn2Nf+N405rX3kw3GQBpyrzYh4cxnTc3ShSLhN6uVQ29xT7cvQ1Iq74OhEjWG2C7Gp7c+R7gegEGpRo3xB9pG9xMoG/iuGY0AICktrmZh5iR5FzAYvhOndPCaGYXxJll5pMBhTkVLYyH2CVyzcsV0qrP7M8lZ/StOYqFtBs2wrJrFZmJKrnZvcQ0OQLSnbTSn+onQ742u3gAFaduU3v0D14AAAAASUVORK5CYII="
    },
    BOUNCY_ORB_TIMER: {
        name: "Energy sphere with timer",
        description: "A fast, arcing projectile that casts another spell after a timer runs out",
        meta: {
            action_type: 0,
            action_mana_drain: 50,
            fire_rate_wait: 10,
            action_speed: 450,
            action_projectile: 0.2,
            action_slice: 0.2
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKUlEQVR4nGNgoBAwwhjawdP/C0iYwCU+vDjDcHVtJlweL9AOnv7fOvv0/8PXv/9fvnw5mAbxQeJEGWAN1fz69WswljZPhxuCrrb7w38UMSYY48mFDWDawKeG4cKWFjg/88in/5lHPrXA1JUKMDJiNUDGIABMgzQj85V0eEGUe+aRT6exuZ4JFmAVU64w3HjDw7Bnzx4wDeKDxA34v4AMMeHh5TXBZggjvliYsCYGzr/wkYfh3pXPZxgYGHZOt+GrwTAA5l+Qk0G2YgNQQxim2/AxYoQBuYAJjd8KcibIJnSA5IVWnAZMh/rt1UOIBmTNIDFkNRgGZELjeroNn+mXz5/PwFwCsxkkBpJDVgsHIAFQCkOWALGhiQhDfPf/zyhiKC4gBpCiliAAALOuxMAAfAy3AAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdElEQVR4nGNgGAWMuCRM29T/SxgKg9kvzr9lOF11E6taJmQN2DSDAIiNLo9igGmb+n+YDciaPcxkwRjdEJBaGJsJJolsG0wzDCAbgq6OiYFCwAQLJBiAsXecegwXg7GxqWOECeAKB2QNyPIwNiOl0cgwChgAM3RE+mfgzWAAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAR0lEQVR4nGNgGAXEgalGRidiYqimZ/H8vnt3r8O5jHBWqr8esjpTLYnT116YakkwMDBwqnkwMDBY23kqKWuSbAO5fmAYUQAAgXIYqsD5/fIAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABCUlEQVR4nGNgoBAwYhPctX+6OwMDgwaS0A03x8ydRBmwa//0AAYGBhs+PgERmNinTx/eMDAwHHFzzNyA14BdEJtdlZW0lNAV3r137R4DA8NudJcwoanTQLaZgYFBDMaAiiN7C6sByECMm0tMBNkQbIAJj9wrNJooA25AAwwDQMVv4DXADRJAR0AB9vrNs08gMRANDcCH2KKSCV0AGlW7P336cB5q83lo6E/G5xUGaBSigBevr2M4edf+6bl3Hx5cB6LhLti1f7q7no7DRHRDTpw4iWGRspKWIzeXmBaIhhvg5pi5c/asebAwwAvu3ru2H2QwiCaklqG5tRTDCyCwYfMCuDi+dEAfAABinm2y4BrcQgAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAN0lEQVR4nGNgGAUUAIu2N7OufZh17cP///8t2t6QoO0/GMy69gG7YRASK5iFrIc0G6jpB4ZhCQBl61A65uoJcAAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAPklEQVR4nGNgGAXUB/8PeP0HARQxEHjb8p80g95CNIAMRBcjyxAUgG7Q/7ctcAlSAPVcQNUw+E+tWGAYOQAA9d2TDbCpla4AAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAf0lEQVR4nGNgGArgrYPoWwdRotQxwMDXbpev3S7fz8cTpe0rTCmI8bz9////yAoYsWr72u3C5CLNIKHxb8lephhnDokKkFJGmOKv3S5w98CN//68HW7DdzCJZhVCG0QPpur/YA1kOQkZQIz//rwdl6cZIAAt4JG1EQbERtygAQBhiGuZtdrI5gAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAe0lEQVR4nGNgGAiQfEXrP4rA8ffJ/0nRDAIYhqADjRLP/yBMlAtgAF2D7jST/yBM0DZsBiFrBLFB3gQBBlKALtQQkGZkQzAM0p1mguJfZNvRNeM0BN0gmCG4NBPlHV1ivYBPI9GBqIElztENIglo4ElIFAOcBpOc4qgBANgttjemkAduAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR4nGNgoBbY3PD/PzY2NvDuEJr85ob//0GChDTCNIMAVkMYkEBvzP//IEyUC2AAXQPIUBC+NIWwyzAMQtYI8yIIoKpkYGBkwANAGuVFGBhk9BgYju5jYLB2YmAQtIVqZGRkRFHYi+R8ZNthgYsceDCA4YLNDf//37rDwFC8hJERZvvDNwib3x9GuADmCkaqeAEdwLwAiy58gUgwGpENIgn04klIWMVJTiy4AL78QExeIRkAABi8wswOQid6AAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAcUlEQVR4nGNgGK7grYPo124XrFIsWEW5+r0YJDS+MjBwl+4hYPbXbpfvz9v/g8H35+0kqIaA7+fj3zqIIqthQub82HqR4cUNFDMkNDi89QnYg+wkTK+zYGr4t2TvjxgGhhc3OA0XEjCbAckzaE4fVgAAJVpBTS5spjsAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAArklEQVR4nGNgoAR8nixOUA0ThPp+v5qBgYHFwALOxgUY4azvh/0ZZHQYnlzhtN1IQMPnyeIgs2V0oGJPrvy5cII39yV1bIACiLtBegj5AXsovXUQ/drtwkA8+H4+/vvzdqL0fO12+f68/T8YfH/eToJqCPh+Pv6tgyiyGmjEQcCPrRcZXtxAMUNCg8Nbn5AHkJyE6Q0WTA3/luz9EcPA8OIGp+FCAmYjewbN6eQDABUjZTtnwicYAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAg0lEQVR4nGNgGFQg+YrWf4o0gwDFhjAgAY0Sz/+600xQxND5jLgMA2lmVXrNYGb3jeHUIS6Gy1lncKrFACBbYF6CeQtkIAM5mmEAJI7NECZ0gd/3RMFORgcgr4C8RBTQKPHE8AJ64MEAIz6vwAIQ5KobPdsZSY5GXRz+HjigMahcAwMAoZtrs8gSQnoAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzElEQVR4nGNgoBZ4d+j/f4o0gwA2Q3pjsBuMIf4OhwsuTcHvMiYYQ8iOkRHdhs0NEM3ItqEbyIjLeWoqDAzyIgwMMnoMDE8uMTDsPsHAULwE1RIGXJovTYGEBwyA2CDXYAsPFmSNrhYQNshWQVuEIhBb/hJ2CxnRBUA2gZyum40q/v4wxCsggOwdFnQDbt2BuuIwwhUwzdjCgRFXOIC8AwvAh28gBmMLRCZkTTA2SCHINlyacSUuBnRAKBGhuAAbALkCGcASFkU2Uh0AAHQliL7BKDO6AAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoElEQVR4nL2RzQ2AIAyFq3EF9/HgHiYwDAdngJUcg5NH02NNjZKKP6AmvlMhr19fAeCjilyjUoq22jmX3ReapSSsgoTYbK0FrXW44zMAECepUoA17mKWkx9LiTUkqDwzT31LY1OfTuNVbh9x6ltCbwiH7gDIWgG9CVG5ZqBc4RIyNvUyNVYMSUaPxdCr90hC0Jt334ZDt4v+WBz5dfPvmgF8q7dsZLgsyQAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAs0lEQVR4nGNgoBX4VKj+/7auEBiD2CRp/rze+D8xYrQFnwbMC5/xKMQmx4hLMczZL/e8ZlC9/A6nOkZcmhnteBhYDDzA/D8XdjD8P/SFga//JoZ6FqymQjVzKLSA+T9AhjDsYPjEoP4fmyEoABTq3+9X/0cHIDFsscGELiDuIsqAC4DCg6ABDFA//3hQA+eD2CAxbIGJEQYgP4L8CvIzyO8wA0GBiA3gDRBQeMC8RDDwyAUAKb51e/q8pEgAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2ElEQVR4nGNgGHTg//sP/0lRz0SpIUwoGktr/hMyBF2cCUNFWw+Y+rdoDVEuY0LmfLp6HYwJaUZ2KROyolcvLqJo+jtxDlwh3FCoC7EaoHruDiOI/rJzO1aDXvmHM7w6eZrhzt4V2A3A5oqXdu7/meJC4HwOHh64RSDAgm7Tm7WrIYbshIiJbVwJpkGGiDAwMNxb2IFiARMyB6QZBJTiK8CGgDDM7yDng4DK3jO4DRA/tBPsNJBBIENgAKYZZDvIQJC3UExB9i8yG+Sl20Yq/0FsEI2uZnAAADKZgASP3FmhAAAAAElFTkSuQmCC"
    },
    MINE_DEATH_TRIGGER: {
        name: "Unstable crystal with trigger",
        description: "A crystal that explodes and casts another spell when someone comes nearby",
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMklEQVR4nGNgoCf4PFn8P7oYEzLn//sPGApA4Pv9arA4i4EFCh8EGLEZwCgogCIO1nTY/z+DjA4Dw5MrDJy2GxkxXPC/tOY/NpeAnA3XDAIyOmDDYN5hQrGmrQdM/Vu0Bi7Em/uSEWzjkysQAagLQOIoBny6eh2MkTUjhwGHzkKwZo5NuihhwARjvHpxEUXT34lz4IrYNimC6T8XToBpTsVWzDBQPXcHLPhl53asBr3yD2f4ttqA4c7eFSjyTMgcdFe8tHP/zxQXAudz8PDALYIBFmSb3qxdDTFkJ0RMbONKiC1xIQwiDAwM9xZ2YIQPE4wB0gwCSvEVYENAGBagIOeDgMreM7gNED+0E+w0kEEgQ+DegmoG2Q4yEOQtDFNg/kVmg7x020jlP4gNotHVDB4AAJrwn3A501/kAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAaUlEQVR4nGNgoAp4U3L9////WKWYsKqGMLDqYcKlGpceJjyqsephQeY8efAEwlCwUvnY/+DPsx9E+QE/YBoGGliQOceunoAzrLQtCNuQdb0WU4XBGld8TkLTg6YaJ5im2XwhZDdRSgkCAMjWK4+3Po2KAAAAAElFTkSuQmCC"
    },
    PIPE_BOMB_DEATH_TRIGGER: {
        name: "Dormant crystal with trigger",
        description: "A crystal that explodes and casts another spell when caught in an explosion",
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAyElEQVR4nGNgoAR8niyOJvKm5Pr///+RRZgg1Pf71QwMDCwGFnA2RDWE8R9JDyOc9f2wP4OMDsOTK5y2G5FVC3drQJUyghSzQFwCMltGByQso/P9MMOfCyd+PkR38P///xkhmjBtuBCyGyKoYKXCwMDw59kPCFekRxPhB5BLwKrhfsAKmCAUp2IryKQLJ+BsAhoggDf3JQMhwERQBaUaWLCKHrsK8gyEYaUNik0CNmRdr8UUNFjjis9JaHogqgmDaZrN8EgkEwAAOkRLzkdLF4YAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaElEQVR4nGP8//8/AyWAiSLdowbQwQD78s7/CfMu4Y/n////Y+D4uRf/w9h2ZR3/kfnomBFXQgLZLvCEB0Vsmv0eBtcZHxmundvHSJQXbl9fC8YwgK6ZKC/8h3qDZC8wEAkGeTogBgAA4cB9lnC02kIAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAnElEQVR4nGNgGDCwtzYIjQEBLAw4gHGx115s4ky4NAgIpDAwMGStvs3AwKCuoYuu4cOHOVi1TQtVZWBgCNBSKg/yR2j48GHO2d5tuKxiYGBw02Z202ZG9wOa55CBc/M6FCdBnAsHxsVeeGxjwlSK5rxdV//i1IDpEzTVDGgadl39u+vqX+fmdRBHQ8jOdRuxa8AqTcAPxACSNZAMAEljL9o0O3OlAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVR4nGNgGBkguMLxPwhjk2PCJtid4QFXDNK4Z/o5nIYz4ZJANsQl0whMP9mQ9B+GYXKM2DTHuOr/11eWBLNPCPwE068evGPo0v0MZltW32PE6oJ5E2vBJi/ZfRGuwOIDO5gWUxBiKLvMi6IZBFjQbQcZ8vb6aYaLd58zwFyBDzAhc0AaQUBY05TByccPbAjMFTCX4DWgdMYORpghIIDugsMrEF7DG4jdGR7/Qa5wk3/KsHzHM7DBDKSA461K8GhCjjKCXkDXDAIyAfNIs53uAADpwFKjP62eCgAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsElEQVR4nGNgGAVEAU0t3/+4+EzIEk4xs8ASFi6l/5EVG8aWwuVAfEkjXzifEabw/////x+fbmao2OvA8OLqDQYJbQ0w/fzcZgaQBlx8RpgBMFsTzNYyWJvIMhw985jhEO8CuGH39m4Gq+OSUEXhM8FsP767i+HjsxtgzfnrosE0TNHSClsGJWdfsGZ0PiOyC0AG5AdcJckFjJSGAQMxsQDiI8cCiA3jMxAD8KWDYQAAfaSLdqFVp4oAAAAASUVORK5CYII="
    },
    BOMB_DETONATOR: {
        name: "Explosive Detonator",
        description: "All nearby explosive spells cast by you instantly detonate",
        meta: {
            action_type: 1,
            action_mana_drain: 50,
            action_speed: 26
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA0UlEQVR4nGNgIBu8KbmOzP7//z+c+x+JzQShpmk2P3nwBFMnnPsfpocFQmVdr2UAK7sQshsiwsjIiOaE////M6KJTtNsZmBgsNK2MFjjimmJSI8mlH8hZDeyKzENZkACID8cu3oC0wFw8Lb0BnYJZHvw2MkCZx27ekKmVAaTzQDzg3C3BhaHwEMJGbwpuQ5B2N2GJnEBbAS6hmmazXA+JHAxwwcCoDHNwMCwausaCAMUiWAjcYYPsj0Q46dpNl8I2Q1xDMRydA+guQeiAX9IEAsAobN5PMNPx44AAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiklEQVR4nGNgoBb4DwWb73v/J1szOYYwYRPkV/BkwGdI92o7uBwjiAAp9lHYAhY4zDAVRfHHB9sZfBW3gtVhA4wwBi4bQa7BZhjIFaWhhxhxmoxuKC6DGPEZgMtQmGF2jDn4XYBLI0ku2IxDI1E2Hvo/BYzRAxgjGmluIwMWAHMF2HSQJpJtHDQAAOGLfBiav5dZAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2UlEQVR4nKWTMQ7CMAxFnYpDoB6JGyDBwliGXgUG2GBhZC4rp6HiFh99N4nSNmkDWHLqNPGzEzsGgPwjiy/2DiMZDkVq40P2VOcUSxMesD0av+HammGUqTNCAbcahhH543kXEwBnL6gIJy76uq6ynDVFdGXQVG0WKis5KXBXznAAqF5eggYVeaBNzRBxgJGj+xKagKmvcHCRYxBrS0oldoQwgzmQWKesu4iBpEGlxubQX0g4jkAso+8BlizsxKCEanBtWWqPaJlZ/h5gSgjj23i3Z507kAf8Kh96cnGVd0S55AAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAUElEQVR4nGNgGCGg/donEqTbwdz///9hUYom2n7tk92mq9hN/f//H5pJ7dc+/f//Dy7OgGwzmqjdpqsQpRApOzCXNF+2g20joAe/9xhGFgAAsN1H0LR7o34AAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAUlEQVR4nKVTQQ6CMBBsiUd8CE/AB3j0aky86g9MuMEN4g/Qowfj1Zsf4AnwD/DcNbt0aUkFNDRZWra7ndnpVgKAmDO8qYCsasYRAOAnS8saABS0s/GL8UQFdrKxHw5IyxrRdPKfDFKT1POvzzfyh3EOYZyTz3MFo2uRWdU4er1Oe6mXPIuFHRAFvsiqd7fJY5Vc6NAiORJIkRwwrj0I3JqJoqlVabpcf19Mj6lHwVJGgY9IhPZ83CWX07K4SozRyMxAMDoxYGFw1qjaXEHZJH4swYiJ1WadZrYOE52okAmxsa/T/Pd74SstFs2+86FuHHxMKBrz32x3VJojIG7Ofc4fUp7ER0koGBkAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAe0lEQVR4nGNgGAUoQCZu6XYQZiABMCFrFlM28ABhUgxhgWnOTIryqLKHCLYd1PKYzsBA0JAni6I9wQyjxqv/0cGuDwgM46PLwV2ADbjyI9i7PyL4IDayPAuIeHX3wg6QsxFeYGCYPm/ZDgYiACN6IMIMhPuP1tE4ChgYALNJX+3IP6QfAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVR4nGNgwAN2ffj/H4QZyAGtB/7DAYiNSx0TLom1B6+B6d0fEWySDHh198IOEO3Kj2CTZAADA4MJyHYYmxwDiAIsIAIUSCB/IjnVJDMpSgTkfBAAsaczMGyHaRJTNvAIttdiqHZgZGQERRNIIci5MA3YAJJ3wOpgfEZYPCMLwvj4DIOpZ8TnhSp7CKftIAPD9HnLdmDzAgMuIBO3dDsoEYFcCGLTLBaYCCnAFxZ4DQD5ExaoIDbJTiM2M+EFxGRnAPy5fTa1ZlpSAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAn0lEQVR4nGNgGPKAEZnj2qz4H5m/u/Y+I9EGuDYr/lcxkGHQM9IB8y+du8Jw58ITnBphhjMia07zSWQwYEgEK7jAMB+rxhPPTsMtmO57mJEFJgGyGaYZBJDZyMBAKhHJ8MMMTCAKZLuFlCmKQpAiGMbnIhZcfkR2AUgzLq8xgQhQYMH8RsgwdK+xwBigQLkghdsmbIFIvWiEAXIS0jAAAAV2SGlataw5AAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAc0lEQVR4nGNgGE5g89yIwiTjzXMj8CtjhLN8nJTSo80YGBj2Hb3tZK3KwMDgm7wCu4bCJGOICmTVyIz+eWfRbYDombn0FJolmNqY4FrhqmcuPYWmeiZMBJ+TkPVv2XcPeyj5OCltnhsBZxAbSr7YAmdYAQBqvEey9s6rSwAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAyklEQVR4nGNgGGrg+25nnHKbk8ObXaw3J4fj18wE5y88ed5AXoaBgQGiDVnn9+ftcDYLRAVEKQMDw4WHTyDsCw+fQPRcePiEU7ISpmcvyIbaPUcvPHyCbAmyNgN5mc3J4T2xWyAmojgp3twQU9uFh08WnjwPV8YIcRIDAwOa2QtPnteXEGVgYLj44vWaK7cgTuKUrARpgIBmF+uLL17DFelLiNbuOQr3NKdk5ffdzpyue0GehgC4aoi6NVduwaU4JSvxxhZG2A9yAAAXb2UY5QEK0gAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAg0lEQVR4nGNgGNHg0KxZh2bNYmBgWD9nDlYSAhgZGBgWp6fLGxtD+FJWVgzYwOUTJwJTUhgYGJgYGBhiZ858ePYsROL7169o6N61azuWL9e1sIDYA9KAH9y6eFFNX5+BgQFhw+L0dLg0Jzc3GvKIjFTS0lLR0ZlSXY3F0xBRXCTDCAUAEH5DTEloKaEAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA10lEQVR4nGNgoBAwggimWoYkZEE+IQZ5GPtDIUM9QQNgAGYQzAB1aQYxmNzJMIZMBkIGgIBAP0MjumZnMTEBGLvN4VUkAxJgYsACcGlWltGTn3vH5RhBA3BphrGRDWFiwGE7Ls0gYKUcLQszhAXdAGTN2DTC2L7KbToMDHswDSCkWZhBm1+UwZQXJs6CrKjqgNhydM3YNM6763o8deEeSwwDlInU+K+ZwQrD33PvuBwD4ev/5z8G4Vf/T336DwUgcaZahv8M+MB1cjXCNJOlEdkAsjRSAwAAmgF9OKQFIzQAAAAASUVORK5CYII="
    },
    LASER_LUMINOUS_DRILL: {
        name: "Luminous drill with timer",
        description: "A pinpointed, short-ranged beam of concentrated light that casts another spell after a timer runs out",
        meta: {
            action_type: 0,
            action_mana_drain: 30,
            fire_rate_wait: -35,
            reload_time: -10,
            action_speed: 1400,
            action_projectile: 0.4
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOUlEQVR4nGNgoBAwggimWoYkzWvT5wpImMAlPrw4w/DUJrPpQyFDPUEDtIOn/wdp7sjRYXhyYQODjEEAQ8WUK2BDeMIzZ4DUnAxjyMRmAAuIgGnWEPnCoOHiwmDgU8CwYsEEhoopDAx/GBgYnMXEBJwPMCwHqW1zeBWJbAATjAGyGQQMfGoYLmxpgfNBmmFqlGX05OfecTmG1QAZgwAwDdKMzEfWDGMjG8IECzCQn2+84WHYs2cPmIaFAbpmELBSjpaFGcIIE4QFJAyANBd1rj2OrhHGFmbQ5hdjNOODGwADVQfEluOyFaZRlMGUF2w7IyMjCyHN2DTOu+t6PHXhHksQmwVXQOHT+K+ZwQrd5QygQAHh6//nPwbhV/9PffoPBSBxplqG/wz4wHVyNcI0k6UR2QCyNFIDAAB8u7aD/DPT/QAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAtklEQVR4nGNgIBEwovEz09shjOkzKwloyIQphQOsepiQVcvISj18dFNGVkpGVgqrEQwQG+CqGRgYqmviIRKtLQufPH6GaQ8ThJKRlTp6dD9cNUQnmj2ZYAbUBjTjkUErqlUsENGjR/dbWztiDZZqVFOgTsKlGifITG/38kxobVlIUCUTnAWxxMszAb8GRmRLIF7H5Xt0G6bPrHzy+NnRo/shIUNYA0SPvJw6JNCI0gAHJAcaHgAARJ5BpYYFs40AAAAASUVORK5CYII="
    },
    TENTACLE_TIMER: {
        name: "Summon Tentacle with timer",
        description: "Calls a terrifying appendage from another dimension! Comes with a timer",
        meta: {
            action_type: 0,
            action_mana_drain: 20,
            fire_rate_wait: 40,
            action_speed: 8,
            action_melee: 0.8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAABMElEQVR4nGNgIBEwovEz09shjOkzKwloyIQphQOsepiQVcvISj18dFNGVkpGVgqrEQwQG+CqGRgYqmviIRKtLQufPH6GaQ8ThJKRlTp6dD9cNUQnmj2ZYAbUBjTjkUErqlUsENGjR/dbWztiDZZqVFOgGrCq1g6eLiBhAmF/eHHm6tpMhFxmeruXZ0Jry0Jk1dbZpw9f/758+fLD179bZ5/WDp6O8DTcEi/PBAhXQMKkI0dHQ+SLi4tLREJBR44OxDaohukzKyE+s7Z2hNvz5MIGBgYGA5+aC1taIGwUGyB6jh7dDwkZUFgbBDAwMFzY0gJno2iA6JGXU4cE2ocXZyqmXLnxhmfPnj033vBUTLny4cUZRCihAWtrx2018drB0yumMDAwqDAcAalGCSXiAQAOeoGBLE0qcAAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAh0lEQVR4nGNgoDVgxBTafN8bzvZV3Iomy4TVGB+FLT4KW7BKMWEKaSgYoDEI24AHsCC7G9PI2/+rGRgYbjy4gO6fzfe9/+MFm2EhQa6TGBgYtjzwgTtJhaGFgYHhDkMNhHsD7CSc4Pb/aogzIB5gQAUkOwmLBrgDsLoE4QdksOWBD6k2Uw8AABgxSK9I3LmSAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDklEQVR4nGNgoBV44+v7v0FN7f+HoqL/IDYudYzYBEEajXeqooiddb/N0HDrFoZ6Jnyu8FHYAsYgkKOujlUNCzZBkOL3CnpwvoaCAQOL6nesBjAhOxvmb1wuAsmjq2GESRyf9A9uGwyoMLSA6TsMNXCxGw8ugGlfxa2I8GhQU/u/+b73f2IBSC0sZpjwBRA+wKKqighEFjDnJsOWBz5Ee+HP7dsIAwT6+hg/MBT9BwlOubmaocDHh+F1LyeKjaLFkFgQvA0J9yk3b6LGwp/btxlENm9mBCUWmOnoAKYGHG7QRMWEy48wp8LYENdBbEUGcAOQJWFsUJiAMAjAbCYawKIJlnjAzsaTyAgahAsAAJPWq5XbS63wAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAiUlEQVR4nJVR2w2AIAwsBmfQLqULsISTMAtOwDboL7+a1A/UoJaHFz6a5tpydwA/IdguEc3LDgAjtv/2KesLDNRreOUZZX3Mu2uMmrWnMZqRAGDcVi+uSW36gogeVYqNV9+47bwgBJ9GgJu65JcyUNYzOlkrUa+5KGLeK8HyDAtGbnBj6GXejFocOSQ/+d0M+aUAAAAASUVORK5CYII="
    },
    MAGIC_SHIELD: {
        name: "Magic guard",
        description: "Four guarding lights rotate around you for a time",
        meta: {
            action_type: 0,
            action_mana_drain: 40,
            fire_rate_wait: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8klEQVR4nGNgGGjAiEtCN2H3ZG5NXuWv1z/fvbzANZdoAyw6T2wTFBH1BLHfv3m9/US5hZfn3Lv/vY0FGbaefc+wPVkZRQ8TMgekMMZdDawZBEC2g2iQ5mx9QTANsgBZDwsyB6YQBJbsvLUd5nSQzTAa5jqsLth69j3D1IvvwTTI6TBxkLNBBiKHD9ZAYyAAQGpAXkD3BhjAJIg1CCMMvl7/fFfGVilH0FaUgVvzhDKyF0AAX0ygKALhKRfegWmYOMhlIDEQANE4Y+H9m9fbQdEIi4n3nSe2gVwGCnnkmEAGjCg8LE7FlrDwGoAMiE3OAwsAupadEVDLbxEAAAAASUVORK5CYII="
    },
    BIG_MAGIC_SHIELD: {
        name: "Big magic guard",
        description: "Eight guarding lights rotate around you for a time",
        meta: {
            action_type: 0,
            action_mana_drain: 60,
            fire_rate_wait: 30
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAv0lEQVR4nGNgoAXQTdg92aLzxDYQDeJ7zr17GUSDxJD5cOCJpMBz7t3/IAxTDANTLrwDi4NoZHEmELE9WVkXJCEoIurpbSwIlvh6/fNdmCKQYVvPvmfYlqTEAKLRDWeA2QwC2GxHdwGIxvD3FBxOxOVFWPgwEBVIWAIYmytJAigu0EXmkAiYQAS3Jq8ycrxjA3i9qZuwezJ6/GMLB3wBzYAcRdgUEIxqCzwKYC7E6wJ8TsSWxPHmB2Q+esaiOgAAAJnzmrtSGbAAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiklEQVR4nGNgoAZ42PbkPwj/3f//P7IYLrU4DVoTuAFsCLJBZIE1SAZ9+wcxDK/N+AwCYZAhIEyWISAAM4QBCZBk2Ld//8EuYSAH/N1Pb80PoX6jyOZv/wZC88O2J/D4BmGyUiPM/7AEBEuNMIzNZYwwjfJVMmA2NgDTGJjnD+Y/Of4UTOPTQzQAAOFWqTR97vjCAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAX0lEQVR4nGNgGAWEASMeuY89UWzeghD2r63v+UuWMTAwsED4rwMM2Ww0+YqXfuqNZmBggKvj0JgCYzB89xbk1JwKVQ3X9rEn6j8O8P16Nk4nfeyJQraHAclJo4CBCAAAGxszHvq7QS8AAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA/UlEQVR4nJ2SMQ6CMBSGf0ljXIjOTt1lMIEQRiZ3Fk/A4BU4gVdwYHB24QqMxsCmiSNHkLAQQ8CUh1VRG+Mbmv+178/3Xlvgj8gD67yYAqD1V08eWCTUlZpUw+UsDyzNbtSegVRFZDJuVNmR1vowGK8TFaE+CDPjBoCR62t2U0SmioA7hHGnyvaMOwDKOOyhHgQAupded6eWIzyEGi5nz6gXg8jtpiudb2mHcYdxQ3pYz6B7aRG1irfHkxVpxp08EL31CTQ9DdBVoxOa3XxoCcB4nZRx+L7/eQYZVbavLptOt4Lu/eVan6OIzJHry7SMQ91LVQb6V9T3t1f/KW50YF7b+TD3SAAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAi0lEQVR4nGNgGMrguhkfUdLX8avDBF9b9Umw/boZH5pVLMjqvl/PhjD+rTvy1Z/h0cb7cv6K3NUXr5vxaZ76JOevyHDqIsLe79ez/4MBhA0X+QrjIjwDVwoBWLnXYapRnAQBHBpTftzIgZAQ531jMNA89Qk9KOAGw90DcQZasDJi9TSn5lTCQTloAABOG3kcV9gDHwAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYUlEQVR4nGNgGAUDDxiJURQ77fd/zzAWOH/7qj8Mi7NYGVEMsA79/F/JkYNhUSYLQ9z0P2AxZE2RwqiGLn/LwBAlwsgI14xsEMhGQmDZm///CXohdtrv/+guQffCKBgMAAAj3EJl51mLGwAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAfklEQVR4nGNgGAWEASMav2hyUF/uOgiDgYFBSPYHAwODhBRPitkqLBogiuDq3j3m0DJnMZDlufD4CwMDA0QPE7KGvtx1EOMlpHjePeZAlnrxDKSHgYGBBdklRZODwGb/uHYSZDYDA8O1k38YGKBK0Z0Edz2EDXEVmgcYRigAAGgnK0ZoPP5rAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAkklEQVR4nGNgoATMduwnQwqL9GzHfiMNWxRBZA6yNFx8NozBBOFMf74OriJ1f2GmZBCyDQwMDKn7C1H4aCbBLUF3CQPYBrgBcKumP1+HZgMDzCxGNCGsSjMlg+BOYiKoGg2wMGADcE9jGsGERzVWwARnwUMTbipWF2J3ErJSZB+jhxI87OAa0FRj0YCsDUsEkwEAXRVOEf7oUR0AAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAbklEQVR4nGNgGIGAEUKdNzZmYGDg1NLSWLwYvwYmZM73a9duxMYSZQMDA0N7ezucraCgAGFo9PTcKCmJjIzE7iSIq857ecGlDbdtg3DheligEmfPImx48ABuw/dr1xi8vAjYgN/fTMgcYkJpOAAA0iAizyeO5e0AAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAOElEQVR4nGNgGAXDADDCGJ/buf+z2LhAOCoWmCrvnIAz/xzZw8Bb+RWslwmrsUiK4QCboaNguAAALCILBC70EUIAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA40lEQVR4nGNgoBZIrZyAVZwJl2oR55dY9TBhCgXEF71Q3humyyTi/BJTlhGrS14/e/TX9rbEXWcGBobZ7QU4bajcUwlRLSolx3xYFatnmJBdEqbL9EJ5L4SrGcsO0Szi/DIgvgi7DXWbL0EMFnF+CdGsGcsepouiBoUDcTRcUZOv3pUHV/CFEsT1yIqYD6vWbb6EUwMDA8OJvRvgiiDkg1mfkRWwIHPuXj+nrGmkGct+fbFqHQPIPxCRDQv7sNgAEYV7AKIaYgpyKCFAQHyRrpkDhAEXgTAg4ugALoosjV0pSQAAgwNfpE0WeMQAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAW0lEQVR4nGNgGDDQlOo5pyqCWNVzYEox9TBh1fDs9Uc0Bj6w18ICgrBawoRL27F37yCMlLYVRGmwEhLCKs5E0AaiNBx79440G6yEhEi2gQEHwKIBj2p8nh44AACS+iJ+1ThKcwAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEUAAACCX1OceljQNdL/ydfgvFeGNGhkjiHHAAAAAXRSTlMAQObYZgAAAEJJREFUeJxjYMAKGBWgDAUmqIAAI4TBbMAAkUtLgwiwGRsngBnJyS5mYIaZMYyRbAxhpKWZQRjMackQxQzJEAF0AADjLAhjOtkK1gAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAKMGlDQ1BJQ0MgUHJvZmlsZQAAeJydlndUVNcWh8+9d3qhzTAUKUPvvQ0gvTep0kRhmBlgKAMOMzSxIaICEUVEBBVBgiIGjIYisSKKhYBgwR6QIKDEYBRRUXkzslZ05eW9l5ffH2d9a5+99z1n733WugCQvP25vHRYCoA0noAf4uVKj4yKpmP7AQzwAAPMAGCyMjMCQj3DgEg+Hm70TJET+CIIgDd3xCsAN428g+h08P9JmpXBF4jSBInYgs3JZIm4UMSp2YIMsX1GxNT4FDHDKDHzRQcUsbyYExfZ8LPPIjuLmZ3GY4tYfOYMdhpbzD0i3pol5IgY8RdxURaXky3iWyLWTBWmcUX8VhybxmFmAoAiie0CDitJxKYiJvHDQtxEvBQAHCnxK47/igWcHIH4Um7pGbl8bmKSgK7L0qOb2doy6N6c7FSOQGAUxGSlMPlsult6WgaTlwvA4p0/S0ZcW7qoyNZmttbWRubGZl8V6r9u/k2Je7tIr4I/9wyi9X2x/ZVfej0AjFlRbXZ8scXvBaBjMwDy97/YNA8CICnqW/vAV/ehieclSSDIsDMxyc7ONuZyWMbigv6h/+nwN/TV94zF6f4oD92dk8AUpgro4rqx0lPThXx6ZgaTxaEb/XmI/3HgX5/DMISTwOFzeKKIcNGUcXmJonbz2FwBN51H5/L+UxP/YdiftDjXIlEaPgFqrDGQGqAC5Nc+gKIQARJzQLQD/dE3f3w4EL+8CNWJxbn/LOjfs8Jl4iWTm/g5zi0kjM4S8rMW98TPEqABAUgCKlAAKkAD6AIjYA5sgD1wBh7AFwSCMBAFVgEWSAJpgA+yQT7YCIpACdgBdoNqUAsaQBNoASdABzgNLoDL4Dq4AW6DB2AEjIPnYAa8AfMQBGEhMkSBFCBVSAsygMwhBuQIeUD+UAgUBcVBiRAPEkL50CaoBCqHqqE6qAn6HjoFXYCuQoPQPWgUmoJ+h97DCEyCqbAyrA2bwAzYBfaDw+CVcCK8Gs6DC+HtcBVcDx+D2+EL8HX4NjwCP4dnEYAQERqihhghDMQNCUSikQSEj6xDipFKpB5pQbqQXuQmMoJMI+9QGBQFRUcZoexR3qjlKBZqNWodqhRVjTqCakf1oG6iRlEzqE9oMloJbYC2Q/ugI9GJ6Gx0EboS3YhuQ19C30aPo99gMBgaRgdjg/HGRGGSMWswpZj9mFbMecwgZgwzi8ViFbAGWAdsIJaJFWCLsHuxx7DnsEPYcexbHBGnijPHeeKicTxcAa4SdxR3FjeEm8DN46XwWng7fCCejc/Fl+Eb8F34Afw4fp4gTdAhOBDCCMmEjYQqQgvhEuEh4RWRSFQn2hKDiVziBmIV8TjxCnGU+I4kQ9InuZFiSELSdtJh0nnSPdIrMpmsTXYmR5MF5O3kJvJF8mPyWwmKhLGEjwRbYr1EjUS7xJDEC0m8pJaki+QqyTzJSsmTkgOS01J4KW0pNymm1DqpGqlTUsNSs9IUaTPpQOk06VLpo9JXpSdlsDLaMh4ybJlCmUMyF2XGKAhFg+JGYVE2URoolyjjVAxVh+pDTaaWUL+j9lNnZGVkLWXDZXNka2TPyI7QEJo2zYeWSiujnaDdob2XU5ZzkePIbZNrkRuSm5NfIu8sz5Evlm+Vvy3/XoGu4KGQorBToUPhkSJKUV8xWDFb8YDiJcXpJdQl9ktYS4qXnFhyXwlW0lcKUVqjdEipT2lWWUXZSzlDea/yReVpFZqKs0qySoXKWZUpVYqqoypXtUL1nOozuizdhZ5Kr6L30GfUlNS81YRqdWr9avPqOurL1QvUW9UfaRA0GBoJGhUa3RozmqqaAZr5ms2a97XwWgytJK09Wr1ac9o62hHaW7Q7tCd15HV8dPJ0mnUe6pJ1nXRX69br3tLD6DH0UvT2693Qh/Wt9JP0a/QHDGADawOuwX6DQUO0oa0hz7DecNiIZORilGXUbDRqTDP2Ny4w7jB+YaJpEm2y06TX5JOplWmqaYPpAzMZM1+zArMus9/N9c1Z5jXmtyzIFp4W6y06LV5aGlhyLA9Y3rWiWAVYbbHqtvpobWPNt26xnrLRtImz2WczzKAyghiljCu2aFtX2/W2p23f2VnbCexO2P1mb2SfYn/UfnKpzlLO0oalYw7qDkyHOocRR7pjnONBxxEnNSemU73TE2cNZ7Zzo/OEi55Lsssxlxeupq581zbXOTc7t7Vu590Rdy/3Yvd+DxmP5R7VHo891T0TPZs9Z7ysvNZ4nfdGe/t57/Qe9lH2Yfk0+cz42viu9e3xI/mF+lX7PfHX9+f7dwXAAb4BuwIeLtNaxlvWEQgCfQJ3BT4K0glaHfRjMCY4KLgm+GmIWUh+SG8oJTQ29GjomzDXsLKwB8t1lwuXd4dLhseEN4XPRbhHlEeMRJpEro28HqUYxY3qjMZGh0c3Rs+u8Fixe8V4jFVMUcydlTorc1ZeXaW4KnXVmVjJWGbsyTh0XETc0bgPzEBmPXM23id+X/wMy421h/Wc7cyuYE9xHDjlnIkEh4TyhMlEh8RdiVNJTkmVSdNcN24192Wyd3Jt8lxKYMrhlIXUiNTWNFxaXNopngwvhdeTrpKekz6YYZBRlDGy2m717tUzfD9+YyaUuTKzU0AV/Uz1CXWFm4WjWY5ZNVlvs8OzT+ZI5/By+nL1c7flTuR55n27BrWGtaY7Xy1/Y/7oWpe1deugdfHrutdrrC9cP77Ba8ORjYSNKRt/KjAtKC94vSliU1ehcuGGwrHNXpubiySK+EXDW+y31G5FbeVu7d9msW3vtk/F7OJrJaYllSUfSlml174x+6bqm4XtCdv7y6zLDuzA7ODtuLPTaeeRcunyvPKxXQG72ivoFcUVr3fH7r5aaVlZu4ewR7hnpMq/qnOv5t4dez9UJ1XfrnGtad2ntG/bvrn97P1DB5wPtNQq15bUvj/IPXi3zquuvV67vvIQ5lDWoacN4Q293zK+bWpUbCxp/HiYd3jkSMiRniabpqajSkfLmuFmYfPUsZhjN75z/66zxailrpXWWnIcHBcef/Z93Pd3Tvid6D7JONnyg9YP+9oobcXtUHtu+0xHUsdIZ1Tn4CnfU91d9l1tPxr/ePi02umaM7Jnys4SzhaeXTiXd272fMb56QuJF8a6Y7sfXIy8eKsnuKf/kt+lK5c9L1/sdek9d8XhyumrdldPXWNc67hufb29z6qv7Sern9r6rfvbB2wGOm/Y3ugaXDp4dshp6MJN95uXb/ncun572e3BO8vv3B2OGR65y747eS/13sv7WffnH2x4iH5Y/EjqUeVjpcf1P+v93DpiPXJm1H2070nokwdjrLHnv2T+8mG88Cn5aeWE6kTTpPnk6SnPqRvPVjwbf57xfH666FfpX/e90H3xw2/Ov/XNRM6Mv+S/XPi99JXCq8OvLV93zwbNPn6T9mZ+rvitwtsj7xjvet9HvJ+Yz/6A/VD1Ue9j1ye/Tw8X0hYW/gUDmPP8uaxzGQAAAJJJREFUeJxj/P//PwNF4D+JBmy+7/3/9v/q/zC9TKRoxGrxfxJcADIEpB4ZMxAyAN1mZBfgNKB1vtcsECbkIpBeFnSNILo6cVsaET5CmEIMQPYKLCbgLmjF41yQa0AafBW3MmINj/9kJiRYIDKRGngwjYyMjLhd0EpCLDDg8wLMEHxpgeRYIDsvgGIBmzgjpdkZANmHlbDeFSZoAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0klEQVR4nGNgoCUw6fkfT0gNEz7N/JwMC9ANAfGRxRhxaVbhZVhw5zNDwpkSxoVorlkApcFyjIQ0wzSCXAOiP35nSADRMIMZ0TVbmzIsOHoaoggEQIaBaJCByBoxvGDS8z8+LphhwaK1EIUgg17ewK0RxQATJM0g+u4jBgZkV2ADKF6YdP//f3QFIENAAOQKEHj9ByH38TtaIJpQ6gJcYQCiYQbhDQN8sQDiX7mCGX0wwIjMgRlCdjrAZQhMDCqNkhKx6Ycb4jz1/39CeQEvIEYhAN2HncjPiMt1AAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBUlEQVR4nGNkwAMyMjKmGhoafpWTkzNHl3v06NHJ9PT0MhZ0iY6Ojg0VFRUBILaCgoJ0WlqaIgMDgx4W8wVABAu6KEwzEsCmGSwuJyf3gQnZuTD2q1evlsLYr1+/xuNJBga4ATNmzMiGscXExKJB9IMHD54yMDAsY6AEZGRkTH316tV/bGD79u0H4S7ABfz9/bPweYUJn+bt27f/NzY2Zjh79ixDXV3dtNevXy9DMugSKCpZiNHs6enJCBWeqqCgsBGm5sGDB9xYNYIwyN8gmpAXGZE1wthYbGZAjmJYLKHYCgMgm4mxHZRi4Zz/aABkACGnwwDWWAA5nxBATrkoriAm4KgKALDWsvmduZbOAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7ElEQVR4nGNgGGjAiEui/Na7/yA6SICFYd2HPwydakJY1TLi0nx7w0kUMdUAc6yGMOHSXJ5gjSIOEjv56tN/vC4oR7L5x61zYDqxPIJhfucKBg41I6wuYYIxQKajawYBkGaYGMhVYNdBwwfugnI0m2G2YgPoLmFCloTZDNMMMggZoPNRwuDkq0//OxccBRvyM9oXq+3sSzeDXQCy3YTxPUOoqjJqrIC84rz/EiT+u7b/N3Zu+A+iYfIgOWT/4wXO+y+BDYAZiAsw4dL8oWUdA6+APEGLMAxA1sycY8yw11EPZ3LHCUD+JuR0qgEARDiJlLRRlNcAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA70lEQVR4nKVSuw2DMBC1TcUOTIAQ1NkkkWgoMgdiDgoaJJAyCFWKfOQJ2IEKXXSEs+zkTBLlScg+jvd472wJAOIfKNo0bQnn2wmmeTQP1dx7/B550nbQtCUukGaJuF7uSz/NElj3Yn84ijCIJOsAUeQVLpIIKBbHOyQuJK0H8QolPEAXSCSS5cqB5IY4zePy976rTQQSKPLKH4HIfVcbuxiBkGaJQ2YF+q62S+BybwoQ0C5OnYbI5WdnMD0jAJKZGDIMos8CwmN9FXJEFOvLJWxCbTW5k/hWQNokFMJa6+HtGH0zINhNQ7ZnwN7EX/AAE9ifThxERMcAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsElEQVR4nGNgwAP+n4j8///5zP/41DAxUAgYcdmMIiDvAFEsmY6hngWbAZeXHwDTupEQjQwPIXySwaV8yf8YriHGC5fyJf/r+imgumrTAwa9ic8Je+ESFs0MWgkMuloMDJcYGv6jG8KETTPINmTNMKBb0QBWg9MAXahmDBegqcFpAFZwbQF2Nr5oxABYNOJ1wWXkMCAAmHBpRDcExkcXx4hX9FCGAVgAo0cjxQmJYgAAkuFPknnZywQAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVR4nGNgwAE+P6kt+n8i8v//5zP/g9i41DH9/7LsEDbNhMRgfEZkAV6Z5j4QzfPkTi+KbnkHMPXl75NiuBoBzYAvH65vYIGpAUnA2JeXHwDTupEQjQwPIXwGGRW42s9PahF6PmNxHghfypf8DwoHGB93YH1ZdgimAK5xryUKBonhNYQBj2ZQTIAwQUMuQTWjGALVjMsQJmRDdP0UGC5vegCmcQF0OSYGQuDaAuxsKGAhaAAOjXhdcHnTA6LMxTDgMpJGdENgfGRxUGDCkzJM4H73HNRkDAWwAFYsTQEnZxRJ5GghNSGhuACbgcgAZjMo5TLyRNmBBAGuQ/BGzlHC8gAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6klEQVR4nGP8//8/AyWABZnDyMgIZ7eXr4ObXNkZBJdAt5AJm6kJIVX/P75/D2aDaBAflwuYGCgELNgE9eWPMTj4fAWzD2y5yCDOi9sAJnQBkHMdfPThmkEAxMflDRZ0zQvWtDEyMFT9lxBSZuAXtAeHwcSpdxlA4lBDGKkaBkzInM8/XuFVjE2eETleQekg2CflPy+HGAPEC4JgL7x4dxesee2WOSjqsXph7ZY5KH4kJM6Ez8mwxIQPMGETBKWD8MhLDOK8i8E0iI8LYIQBCMDiHBQOIP+DACR6icwLsNCGacYXOxihSioAAIKAbd/Y8owYAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVR4nGP8//8/AyWAiSLdg8IAFhBRUjsbHhAf3r9mEBAUxakBWb6nOZUR7IIb18+DJUAAXTNMHAZA8iAxkB64C7i4eBlevHjC8OjBbQY2Dk6GXz++o2gCiYMATA5Eg/TADfj27TPjrx/f/wsIiTF8ePcKrAAbAGmGqZGQkGFEdsF/DU1DDA3fvn0G0zDbQLScvAoYP3p4BxRujIyhsWX/oQJgRchsmCEwA7CpY4IxQDTYv0hsZIBNM4hmggcUmkaQP0EY5G8Qjc0gcBg8gmoE0cjsXVvmgwMJBsLiyrF6lRGUmWCSMJesWtSJohndEGR1YAMoARTnBQBQ1psERAiJrwAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABG0lEQVR4nMVTMY7CQAz0RvQ0QIor0kBFS0Pyg6TOD07wAx7BDxD8gBp+cEdDmwoaCgokissHzmjM2kQRBVKQsLRZx96xnZmNY2ZqYkEj9NsLlElG9fdpGHKZZLLg1ws4cDANQ5r3RxJY77acj1Pn8wJY77byko9T2ds/G81TC495f8T+EBIGRizuRAY8Hwr6vZ4oTzLWIoFOUgHS7LiXzgB/DYboKAs+YjD7HGaWtXRERTfiohvRX5zy0hFjh2Gv+pUcBUrW978UtCleNr53Z50C/qTXkw6YSDtrd43hDDAt5WAVWHPnFWEQFsPz8hqJgyEtLhdnMq4eYDAu7Hspn8oIHEi1AmXtAlUNiugdmR33kNzAVqCJff5nugFubLKxzmL7DgAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA60lEQVR4nGP8//8/AyWAiSLdg9uAo0nS/0GYgYGL4fdSHhD9H0T/XsrDABKDYAYGRuRA3GwmD+YI6fwBy5k5f/zPGv0Pw/DfS8H2MrJGf0G4AKqZEaT53RUWsBg2zejiTDDN+2/9YQBhKADbjqLrZS+6Of/Rw4ARJohhO0izeDGKITB5JjQTGWFhAPUnBMA0g2jUcGAAk/tv/WF0VIP4GwTeXWH5v2OiMNgwFENQASPcAEc1Fpgh/0EBCHKB76mHqK5AAsjijLBo3GwmD6ZhsSCk8wcsYeb8ERw2ID/Dog8RDl9Q0wE5YODzAgD4nWcfoQ/TIQAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArUlEQVR4nGOc7m38f8eZBwzkgI0v3zIyZW49y+hhooAhiU0MHfiLC/9nAjFghsA0gWiQq4gxhAXGABkCokFegrE9GBT+EzKACaYJ3SBivcOErgndMELeYULmwGIEmyG4ApsJmYOsGF0crxfwKQa5BtlFBL3AgMVLMG9h8wYTPtuJAYzYBJHTAsxVID62ZM+ETTNyTIA0kuwyfIEGkgPlARgmy0BkQ0hyGboBID4AL6t5hofAGIkAAAAASUVORK5CYII="
    },
    SUMMON_ROCK: {
        name: "Rock",
        description: "Create a mighty rock out of thin air",
        meta: {
            action_type: 0,
            action_max_uses: 3,
            action_mana_drain: 100
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVR4nGNgoDf4fyHoPwjgVFBQ0fMfhHFphrOhhjCia0bXNKGjhBFZEyMjIyPMMEaDdRAOCHgGJPzn5uFmkJFRBPOfPLkPpr9++cqgrqEDNwhs88VgBpBmEJ8FZgBIMwh8//6RgZOTH64RBG7euAJ3HcwFMMAEY4A0gMDbt+/AhoA0gzSCXAIzHJs3mbAFFrIhIC+BMMgwGEjPr/2P1YCvUFcgGwIDIMNAfBAGycEAC7IBcvKyYP/DAhGkUFiYASwGC1R0i5jQnQ4LSOQwQde8fcMCeEAyIhsAi0qYQuTAgxmIrBnDAAYsBuHTjOEFGAAphGnCp3lwAACFvKH6gW61RwAAAABJRU5ErkJggg=="
    },
    SUMMON_EGG: {
        name: "Summon egg",
        description: "Summons an egg that houses a friendly creature",
        meta: {
            action_type: 0,
            action_max_uses: 2,
            action_mana_drain: 100
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzklEQVR4nGNgoDf4fyHoPwgQpXjN/ef/QRhZM5wNNYQJn2YpLmYGEIYbor8WoeBiMANOA9ZANT/79hfMhxnCyMjICHb/haD/jAbrGEFyLNgMAGlApkEGwdggQ5DVMqFrnnD6HEYAwTRjk2NCFzCTkwHTt99/h4vB2DA5vAY8g/pbVZATrhHERpbDa8CTN8+xGgISA8kRNAAGkA3BZjNOA66fOgW3CaQRphkkBpIjaMDM7AxGZEOQNYPk0NVjCMBA+tQZ/zXNzOCuwqZ5cAAAhU6BrH5+VhYAAAAASUVORK5CYII="
    },
    SUMMON_HOLLOW_EGG: {
        name: "Summon hollow egg",
        description: "Summons an otherwise empty egg that casts a spell upon cracking open",
        meta: {
            action_type: 0,
            action_mana_drain: 30,
            fire_rate_wait: -12
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABD0lEQVR4nGNgoDb4PFn8Pz75/xeC/oMAhsT3+9Vgwe+H/SH0/er/d29fBGNkzXA2VkMO+/8HaQTRII0/f3wFY5ghyJpghjHCnM1iYMHAIKODMO3JFYY/F04wsKXeg3Af32FQVtVnBBtyMZiB0WAdI14X/ITavmL5Irhr8Abed6QwACkG8ZENgdHo+phgDE7FVrCTQM5ubChnePYnDK7o0sVTKDRecOLoLrBtVRU5YKeDaBgfJEfQgBVIfoYZAosJbF5gwWbI61cvwbSevhmDjKwKOAZgYgQNuAT2pxmYbWqiz7B+/VoGBTkJhgePXmANA0ZspoKcDrIdpBEEYJrbOqZgqMdqALIhMFdh0zw4AAASHPG3w4OVQAAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVR4nGNgoDf4fyHoPwiQrZkBxoYawgITOF5QABY49egRg5mcHAM2NoP+WobjBYX/LSdMYGS4GAwWZ4IZ8OjZMzD98P17nOxV4eEMFv39YJcwGqxjBIkzwgwIc7f+LyUhRpRXJixcD9fHgizx4dMngpoF+PhQ+EwwhjW3OIMnqzDDr0cfGAwZ+XGyLb+zYjdAgoWFQU5KikGCj48gG6sBL/78YSCFDQOMgycQg/ml4YEFonGxcQYiyH+wwCLEHlwAAJbFd/3FAj17AAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5UlEQVR4nGNgoBAwgojjBQX/QfSpR48YzOTkGPCxLRIeMTDor2U4UVjIYDlhAiMTSPDRs2dgyYfv3+NlgzQXF75nWBUezmDR349wQZi79X8pCTGCzu1fsI6hMCEIwi5kZGA0WMfIApP88OkTQQMSg1wY5q/bw8BwMZihsB/sawawF6y5xRk8WYUZfj36wGDIyI+XHW1iwjCpiYHB8jsrwgAJFhYGOSkpBgk+PpLYcAMoAUyDw4AXf/7ABUhlM5KSDtDBhIXrSUsHyECAjw/hhWB+aXh8g2hi2CjpAOQnWByTwqYKAACdwoE3KqF0wwAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4klEQVR4nGNgoDbwjMj4j028buH9/27527HKMeDSgE0M3QJGdMVN8YooYjC+kYPff3EJKYbtK2aA+TDAAmME2ctBGFCNJ87dQLH93IFNKBphgAlmy7qDj+AGwQ3D4RUMA5ANgRlkYaQBpk9v78QasLgCmwHkV5AkjN537BycxqaeEZupL188A/NBgYYM0AMQxQvhBV1wG2AaYRqwacSIBRDgk1BiuH3hCAMygLkGRhMERg5+YP/D2MhyFx78/Y8eM0zoBuCKbxAAxRDIEKwxg24bPheCNOOMRpwSSAYQaxlRAACW5YKU2oScPwAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9klEQVR4nGNgoBc4GD/9f5tJ8n+SNDBgEWt0t8Q05GD89P8wDBMD2YbMv/bOCqtmFhhDMcwCYhgDRNPRq2fAGAa0hI4xYnMpE4iwX5jJeH/VCbhBMMNweQXDAGRDYAZZa5uA6QMvFjGgOx2Zz8iABvSsPf4H83xkuP/uI4OiED9D6HJGhtWR/8E0Nm8wYjMZpBkEQAYgg/qdxxlxeqERyVkwjTAN2DRiGBC6HKIGZDvMBciuQRbDCa69s/qfYKoFxiA+jIaBR1vP/0ePGSZkBaBAWnD6Gk7ngmIIZAi2mAEDdBuxAZAakGYMA7CaiAXAvEmMWqIAAGJyiZn8plXKAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA60lEQVR4nGNgoBeoW3j/v1v+9v8kaWDAIvZwVwmKOCO64qZ4RRQxGH9Dj9f/xXvfMqzdfhLMhwEWGCPIXg7CgGo8ce4Giu0BJdtQNIJcIu/WwwgXBNkIN4SBgaGsfxeYtjDSgLsCG2BCdvq6g48YQBimEQQ2d9oy/Hx/C+x3Qy2Z/yA2Az6gZ+0BVwyj0dkYgQgDsICKdRYG8w31tBjQAcjfDNhAsKc52BYQBrGRbQMZjEwjA0ZkA0A0zHZsIY8XPMRjMwxcePD3P65ExoAMcDkZpBFkCMy7WMOBkEthmjHUYjURh+vQo5IiAADN96NAd0i+KAAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLUlEQVR4nGNgoCf4snDvf2QaBJhgjFUOqbkgjKwBmb/KIfX/t02nwJphNEicBabwSmLVJDAbyQCQGIgfdmD25LADsxlBhjhsgsjxxDszorgABILs5cCaYIadOHcDYgjUJSBDDry9xyC2thKsGe4CdENAYB1D1SSGczfAhuggyYMMQVbPAhWcvAqqCWYAiAZpRvYKTC2yAYzIHOSwABmw7uAjsCHMLzfC1SS++JuHbggDuiF61h7/PSMy/sPofcfOgWkYGzl2GNE1z5dgBrvg6eMHYDFpWQVUG9BcwYRNM7JGkGJ0GtkLTDDNaw1U4ZpBtsNcgOwaZDGc0fgUSVENq2xey+/Hk0A0OKYcUjFiAewCkGDwhdt5fBJKDJqmTmCNGFZhiUIMgJwf0GmaAQAHrrn/BjcrxAAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyElEQVR4nGNgoBAwYhOMrff5D6LVDf/BxWoCtmFVy4hNM0yjh7kEXHzHyRdYDWHCpRkdgAxr2eD1H68BMHDzPBPcVkKACZtmkCtgzocZAqJBcuiuYELmfHz9Bc6eOOMViktgbORwwTCAX5QHbAhMMbqXQC4DGUzQBR+hNEgDsmEgNrIrQYARPQz8shz+I7sI3YJN0w4w4g1EfiRNyC4CYXQDsRrwEckWEA0zBMTGlkaY0AVgms3cuDDE0AMXK4DlA1x8+gNCLgAAsjJv8KXT3p0AAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAqUlEQVR4nGNgIA94TH2Lh4sd9J7+iofrATOCBYd2dLOKTbkhbCY0YyAGIzupF0k1ig3FptwQ1WiOQQOMaHyI6iITrr4z3yAixUjGQ50EdwkEFJlwwcndp37gtMFj6ltXMw64UgYGBjRLPKa+3ZEtjN1JcFdBlPaCBSFsFA1wS5BBMVY/QIxxNeOAS0MYmH5AdwmEDY+H3tNf8YcyumaC0YJdBb60SDCdAgCX71wjtlKxMQAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAARUlEQVR4nGNgGAVQcFtX6FOhOgOR4PN64/9g8Hm9MWHVnwrV/yOB27pCaAqY0Pgv97xG5oq7iFLbSRDwqVAd0zEMIxcAAM4vKiv66I8jAAAAAElFTkSuQmCC"
    },
    SOILBALL: {
        name: "Chunk of soil",
        description: "Don't soil yourself",
        meta: {
            action_type: 4,
            action_mana_drain: 5,
            action_speed: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAABQklEQVR4nK2SsWqDQBzG/21K4TCEE+TgQCiIwS4ZbOiUKUv7CI6u2fMceYiOfYR26QME7OBSQQRBODgKikQOAkKxf7naVGiH/ocP7u73fd+JB/AvEwb+ZrMePTo7WW+39++FtGym9eHxddyAKDEpAKiyQpqY1DAuh7bOEAa+ZbM4yhc3V0PIshkADAt3u6cLABBSpWnmutOfEDGpZbOmOQqpiHkEgM7Q1K0xmwipmrrFXoRQ4yjnjHBGVFn1BmM20bY0PXwuu+w4ynGfeDRLBMadYyTSqACQpgfM0zsAsLi1v11JK3YKqTgjxKOqrOJ94brTLBF9g+ZwMNLxuJAqSwQxqetOhVSOx3sDZg+v1NRtlgjH403dxvuCmFR/9NePWy3nug0Vg/H0+eVt/GmslvMhzRk5eRrjc7e+DgP/d+4v8wHJW8bio3BgvwAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyklEQVR4nGNgGDTAsusLGCODhM2f6xM2f/bCp44JxjhexgPGWIApMgddDRMhlwnwvm5AF8NhESZY+vD7fxBgIAckbP5cD9I89963vyA2LnWM6JpgztaVk3iTpMgpAuLPu//9X5IiJ1Pili8g75xe4Mu7DcOABEhom4I0mypKMkTJcaDYBDLk8qMXTB8+i3qD+MiG4PUCKBzweQEvAGkuOHAPbyAy4ZM8ff85iNqBLo41IVmipUIQ+PBZtOHDZ9HJZLsAPcRxWTSwAADI9GeCmh5EPAAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAUlEQVR4nKWTPQrCQBCFn4uIhXUq7SwsbC28QNhcImiREwgeQswJLIyeQUgI1lrZWImtqawtJM3KCCO7SxLFfEUGZufN326AmjToM148DOdx3nnbIJI+2dUk2XIcnzFNO6Me0PVaIwBDAFs+42IcJ3ShnZ0YOO6zrICRoIiB4/Z7eErbrycRtkOHxDe0E/xDEElfKaUOaql4maW3EETS73qtKc1LVceY4YgQZD9tI3xb6uhyT9tZnK/pdpockMX5GV4q4LgJEEpbzKPsN7vrzyMc1JKmqByhEt5BVYwoeolFrduwRtgOnW9iI0ERtDDaeJmYMP4F+50DOGVxfqrqsjYvT+Z1/umlafYAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAATElEQVR4nGNgoAW4MuPmWkJq/v///x+/ABmGYgWEDKY/uELIK1ewKCCo6T8Of9LM//8JGfwfiwKyo5FocIWcwKME/CcngInWRNfkCwBMGD9pDffMLwAAAABJRU5ErkJggg=="
    },
    WALL_HORIZONTAL: {
        name: "Horizontal barrier",
        description: "A thin, horizontal barrier that harms passing creatures, including you",
        meta: {
            action_type: 1,
            action_mana_drain: 70,
            fire_rate_wait: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaklEQVR4nGNgGAUDDxiFJrrIgxh80sI+MMECK0MmbIonHDv/D8b+9PTtFhDNwict/EBWgZkhWEqPwVnUg2Hv6x1gGiuwYoCrWfvs0pTHD/4ysIDEQYy1DJdQ1KIbBONDNYP1UMULo2AwAACaDjJlLEt6EQAAAABJRU5ErkJggg=="
    },
    WALL_VERTICAL: {
        name: "Vertical barrier",
        description: "A thin, vertical barrier that harms passing creatures, including you",
        meta: {
            action_type: 1,
            action_mana_drain: 70,
            fire_rate_wait: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAp0lEQVR4nGNkwAGEJrrI80kLPwCxPz19q/Auf89DbOqYGAgAWQVmvPJMuCT4pIV9QJqDpfTAbJINAAGQZmdRDwZ8gAmvLAMDw97XO/DKs+CSKLAyZILbbsXAVMCwknQX7CVgO0EDnAn4n6ABxAAmmhqwl5IwmHDs/D9QGIAMAbHJdoEzgYDEmQ5AYO2zS3g143XBp6dvtzx+8BdsCIhNsgEwADIEHwAArY8znEXDAMUAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOUlEQVR4nGNgoBAwwhgKa8K93FXlE3befvjfXVWeEUZj07Tz9sMFD0JWboMboLAm3MuLhXermpkKWIGzqAeKhr2vd4DFQDQI3Dp1h2Hbn8/eIEOYQAIgm0GaYRphCmEA2UAQG6RWUJhpK4jPgiwB1biGgYHhEIg94dh5G5BAgZXhEagyOwYGhhCQ2uuv360+DzNg5+2H/3O04JYcKpCqmAxlg+kChpVgzoRnHSBLwAZoigodBokxofuTEEBXwwRzIjGaYV5CZjMxUAiY0E0mBiDHEhMuCWwAFhsg78LYLEITXeRhmqFRaQcKbRzADqYO6urJLO/y9zyse9YBMi0MKhkCimtczkZOkchhcBeUPJFjAltqhGkGqWVgYFgIIlAyEwMDQzyMj56RQIlNS0wYLHbt1Vt4ZqIYAADZMpWDyV7eOwAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAz0lEQVR4nGNgoBAwwhiBQquXm4sqqYHYJ1/fu7X+XWgkNg3/////z8jICNfHAmOANLvIKBnB+OvfEdaMYoCLjJKRsdEfKE/JiOEmYc0oBsiJ8TEwKHyBsJ/wEKUZxQBRmXcMDBrcEPaDd0RpBgEmXBLEaMZrwP////8zEAFYcEnAbIYZhMslTIRsYIQCXC5iIsaZMIOwGcICY7x+IsQgeuMLnI3LEJwGPHr1iUH0ASQhgdi4AHqYwA3Y8+TeOXAKhLOJA3ADQBkIG5sYb1AEAEmRWs4cipSvAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAl0lEQVR4nGNgGHLgPxTA+Ey4JCiygYEEcQZiFJPlsv9QTYQ0M5FsMjmuoKkLGEFEoNDq5eaiSmouMkpGcmJ8DKIy77Aqfv1EiOHRq08Me57cO3fy9b1b69+FRrKAJGCajY3+MDAofGFg0ODGaoDojS8Mog/+MDAwKBmB+OvfUcELYBeAnAPhKhnJPeFhEH1AnBcotZw6AACIk1mhuqVYngAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAX0lEQVR4nGNgoAe4HrpvBUWa/////59oQz5NffCfqi6gumGfsLiQKNNBciDNIACisar9hM90fGqu4zEdXQPeMPiEphjZUEIuw2k60ZqpDq7j8StBV8ECleI8QLZmUgAAc6hsC4jDNJAAAAAASUVORK5CYII="
    },
    DELAYED_SPELL: {
        name: "Delayed spellcast",
        description: "A static, magical phenomenon that casts 3 extra spells after a short while",
        meta: {
            action_type: 1,
            action_mana_drain: 20,
            fire_rate_wait: 10,
            action_speed: 26
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAc0lEQVR4nGNgoDf4////f9ppPvJl2Uaq2HzkyzJrsjWjA6I1H/myLA9Ed12t+g/CDOSArqtV/0HOBxmGbAhI7D8WAJJjwmKOMQMDw1lkARueqKOMWABOV3Qh2U5KGGzEJUdWLBwhNyqPQGODai6hiSFUBQBCDWg4nGlXuQAAAABJRU5ErkJggg=="
    },
    LONG_DISTANCE_CAST: {
        name: "Long-distance cast",
        description: "Casts a spell some distance away from the caster",
        meta: {
            action_type: 6,
            action_mana_drain: 0,
            fire_rate_wait: -5,
            action_speed: 1800
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAVklEQVR4nGNgoDf4svX/fxCG8VlI1Tyrfw6czePNyMhEA0eS5gWiwf//ZGiiCvhPis3/yXAmE6WGMWLTwMjIyEiSC/6j2UaKV5iw2UiyC8jRiNWAAQEABVs0Dma/VyEAAAAASUVORK5CYII="
    },
    TELEPORT_CAST: {
        name: "Teleporting cast",
        description: "Casts a spell from the closest enemy",
        meta: {
            action_type: 6,
            action_mana_drain: 100,
            fire_rate_wait: 20,
            action_speed: 26,
            spread_degrees: 24
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWElEQVR4nGNgoBX4svX/fxAmpI4Fl+ZZ/XPgbB5vRkZcBjAxDLQXiAL//1PJIPq55D8JTmaiukv+IwFiNDLhUwDjw2hGRswExYjPFmwa8LqAFI14DaArAAAhg0f0N3WNqQAAAABJRU5ErkJggg=="
    },
    SUPER_TELEPORT_CAST: {
        name: "Warp cast",
        description: "Makes a spell immediately jump a long distance, stopped by walls",
        meta: {
            action_type: 6,
            action_mana_drain: 20,
            fire_rate_wait: 10,
            action_speed: 100,
            spread_degrees: -6
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAW0lEQVR4nGNgoCb4////f1L1MFFqKRO67aS6ggmbJlIMYQIRjIyMjMiC6HyCBmDTuNPzDGkB+h9LGJBsCDbwZev/QWLI//+DxRAQoMhLIM19LrP/U2wI2ZrRAQCCgkHj7GgR9QAAAABJRU5ErkJggg=="
    },
    CASTER_CAST: {
        name: "Inner spell",
        description: "Causes a projectile to be cast from where the caster is standing",
        meta: {
            action_type: 6,
            action_mana_drain: 10,
            spread_degrees: -24
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZklEQVR4nGNgoCX4DwX41DAiK4YLMjIy4jIQp5r/BGzCpZaJgULAiEviy1ZUF/F4Y/cWCy7Ns/rnYIhhM4SJVP/DAEwPE6kasbqAEUe04QMwPYyUBuLApwMWbCYTk5SJAsRkJooBAA36SV6MyZsKAAAAAElFTkSuQmCC"
    },
    MIST_RADIOACTIVE: {
        name: "Toxic mist",
        description: "A cloud of toxic mist",
        meta: {
            action_type: 0,
            action_mana_drain: 40,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArklEQVR4nGNgoBaYdSr2/+YHFf9J1ccE03zn5GeG56+ewg1joBdgJKQA5hpJMWkGX4UORqxewBUWZZMD4JpBAFsYMaFrRlf84ck/eNjA1CDrYUGWAAUkg/lTuI0q5rwMYDEGbgYGBoghIAORASOKZigQkeZmEJCBOA5ZHBmADE8zW8yIESjohmHThOECfIZg00TV1MpEimaQq66fe4wSnSQ5DWYILJBRvEbX9I8MAJHhbnCVKXyQAAAAAElFTkSuQmCC"
    },
    MIST_ALCOHOL: {
        name: "mist of spirits",
        description: "A cloud of potent alcohol",
        meta: {
            action_type: 0,
            action_mana_drain: 40,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVR4nGNgoBbY3+r9//Kk4P+k6mMCEQuK3f+fvPeF4c3nH3DDGOgFGAkpgLlGhJeDQTdvLSNWL+AKi45ke7hmEMAWRozommGKQWDrxTcMEgIcDPJCLHBDQOHkWL2VEcMF+1u9UQISBMyVeBhefPjB8PDdH7A4CIPYGC7YD9UMAzBbQQBZHBmADAe5hBFdAhSlIFuxAZDBCb07GQnGwgIkQ7BpompqZSRWM8xVIBcZy/PA0wRJTkM2BBTIyNFJ3/SPDABv+2xG+UbwDwAAAABJRU5ErkJggg=="
    },
    MIST_SLIME: {
        name: "Slime mist",
        description: "A cloud of slimy mist",
        meta: {
            action_type: 0,
            action_mana_drain: 40,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwUlEQVR4nGNgoBaYErPy/7LMvf9J1ccEIpq8Z/x/9Owhw7vPb+CGMdALMBJSAHONEK8IQ9R0Z0asXsAVFmVOXXDNIIAtjBjRNcMUg8CFm2cZeDj5GIQEBeGGgMIpZ0k4XB8LsmZQQDJIIWyUk5JnAIshgXfv32O6YApMMxTAbAUBdANgAGQ4yCWM6BKgKP3y/RNWTSCD67ZmMBKMhSYkQ7BpompqZSRWM8xVIBepyKnC0wRJTkM2BBTIyNFJ3/SPDAB06GHc4xxQyAAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAu0lEQVR4nGNgoBbY4u39/3JY2H9S9TGBiIk2Nv8PPn7M8PDrV7hhDPQCjIQUwFwjz83NoLtqFSNWL+AKi1I9PbhmEMAWRkzomtEV3/34ER42MDVYDdji7Y0SkCBgLyvL8OTTJ7ghIAxiIwNGZM0wIMPHx6DMzw9mI4sjA5DhPlu3MmIECihKQbZiAyCD848cYSQYCxORDMGmiaqplZFYzTBXgVzkJCUFTxMkOQ3ZEFAggwIRxXmkGEY1AAA8/muSfFQpMAAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABgElEQVR4nGNgoAXYYi79///jmSgYJIZNLRMyp8XXAazYe00dA8PZnRBBKA0SA8mB1GC1tQWq+f+GoP9X0zXAGMQGu2ZDEFwO3RBGGAMkAbPx2vZrDPcvfGa4IKYKFjJ4dZtB0YAXzNby1GJgMHZnYJRNZ4R7YQvMf0iaQRpuM3KBNfucfMoIEkMPJxDNAvMfhs0XbjMsPLmNkcHP6z8Dw1O4GAPDNQYtmB7ZdNRABAGQQpDNIFuToyL+L9y0jTHez+s/zBtglxi7Y4kFY3ewJEhz6MuLDCDNc5etABvCwsPHsFpcn2H9MwlIWMBiCMWAszvBkqr/v4EVgzSDbAZJBd49DBYHuQIciEiABURsDWkC+wksBQ0HkN9BLvHZ9JSxKF3jP8j/YNuhzgfpgbvA5+RTeHSCAEhhmeQ9ePqAxQpywoLpYYFpas1azlA9LRLiCpAtYIXXGBQZXjAwSPEinG7sDlaLkZBgtoEMgdsENwhqKNSims0HUPRhAFIyE8UAAAaS8JYWNCeVAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABbUlEQVR4nKVTPUvDUBQ9KQFDq538AxFc3qK7QwWHDnFQih9LdSj4A5xEHRX6G4QO2kURsYMdBR0CujllEcwfcCpVOghPzk3eMybikrvk5b57zr335AQoGc5fyZ07XzeC7q/c4/AAF6txod7JvrRPVvTy0Z6cQwywhDX7NPFweob+8b3FuXkwAeMoSkgU8DV8QhjAkqUNtCFxDEFPX2nTmQRePIJ+mUvGXHzDxK/LeVopIes4W4KtmJ3zYAI+Xz0Bc3fm8jpZgkbQLXTm8+Z86HxcKwGYHGtYa0Su5FVlITuza7uzrUnS2g20WYMkWVEr5sAkLwmubUQguN+7FJKqOwNOMnU7KyScoEAQYiCX1fmJFBPMziLi+rPkOQVFzIZrTCI6KGCMCLV4hBYCzUm4yub+gvaQrNBMxyem8BnDjAcYRtD/PqObdZgYSf2YhtPAfwdQt6PzjrUFJ6bOslZmNNWhFcwon7dy6Z+pdHwDTjvJwCU31ccAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABcklEQVR4nKVTwUoCURS9b1BBZhHS+CRXShsXIi3aRZgRbvqEfqWlH9BPuG7VZggtwp2LGggCiVoVPpUoGAJdvDhX70NHF4EXhvvmzjnnnrlzh2jLUJuKl+cFW2rUV2rv3Xtq3QzX8Gr55qJZs41mhc/GjEnrwGWJbvhC7TByvFSSDIL5GDuCGUw4i9iigRWRlACls4tY0fPjQmgwWREFth1GfPbknZFf34ZzYKyIfEufcYbyvqKr6yfFtcScnECpUWd7v99fTB7FlnOn11eRSTNBamgArAw5lZwqgOjcDvvq7OTY3t49qNOjQ5v3Z+wKIstD9eTAxVgxuaZnJGRkL50lOBkZYhE4WPsKBkXf0p4/pchkqNObd8azau6HnWEeuri74tiTJYGD7E6O8prYAcjIcAFhkJGBwwWOE2glN8y3VCtP3X7IV3FOlziecLBh++UCu6geVEgXAybBEXcuBvNLB4yV+NcquyFvWOWtf6at4w8cC8OUkc27AAAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABX0lEQVR4nGP8//8/AyWABZugUfOZ/9WBWihireuvMZyrNWFEV8uI7ALZ5MX/JxQGg9lv/3AxCLN8g9MwUNC/luHx3Fi4QUzomkEa1p97zXDo0kMwe8bmM2AaZihIDUgthgvWXvn2H6YIpPnaw9cMrx9cB8uJKmgyaMmLgtl2evJgFwXrcDHCXWDUfAZDM0iD+d+VYM0gv4PE0MMJHojVgVoYNl9jYGA4t2ALY0iCz38Ghi1wMZgrYIHMhB6qIIUgm0G2xqVE/l8DNQTmDZAFyIHKBGOABEGSIM33lBsYQJoXzVkONoSLhZdB6W4Dw8GDh8CGwAIVxYC3f7jAkieZw8GKQZohzmdguCJfDBYHuQLkfGTABEskIBeAJO3t7cAuAGkG0SCDQAbDvABSB8IgPRjR+BYakDAAC1B80cgIMwA5IcFSILJhMKeD5JBTI1FJGaYRW1JGMQA5kZCVmcgBANea7mTYwDw4AAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAk0lEQVR4nGNgGBggk/dSJu8lVikWTKVfHh6FsGPWfGZgYFgSwousgAlTNY+8NQMDg4MdF7I2LBqQVaMBGSTnITTAXQIBBw59Q2OgaMDqxQOHvkFUO9hxwRWg+AEXOIBkCVTDk0niWB0GF3wCU4CwAe5dND1fUEOCEVkOORKQDYIbj+6HJ5PE0YIVTTVOgCdp0B4AADm3RF/f5/+SAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAmklEQVR4nGNgGBgQF2cWF2eGVYoRU+mLF58kJPgYGBgUFIQYGBiamnYgK2DCr5qBgaGuzgO7BmTVmNYyYGp48eITsqIHD96hMVA0YPXigwfvIKoVFITgClD8gAs8QLIEEUpubhoQBqY3Xrz4tGvXDXQb4OrQPPMCNSRQ4gESUGjGS0jwLVp0Cs5F8cOiRafQ3IOmGifAkzRoDwDbmz08jj62RgAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9ElEQVR4nMWTQQ6CMBBFh6Kyd0NiwhUMV3DpCdjB2ejOExhWXoF4BRKTunBnIhpSMyS/DgXdsHAS0mk77/OZlsBaS3NCzaKJaIHkWBSjzZs59fbW8S7w9/ZlORTwwZdp+ryriUyq7TJOJoWUv2DO2j6qDxymRAxD+KeAOWvLUEeRg2WwK19Eycmzjno4pNaJAOSHndyr67SDRh/sKm3dBnKI8Mgwr0sXSqqhGDm7cHM4EzUDgSTP+g7zGwBKFwyjJ/I01MCB+G4HpuMefW1ikmcBCjAyJOdwOilAogCWcSI8+jDH5E1E4UVryyKb7RhEBH//G995D3s/mj5m1AAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmElEQVR4nGNgGNTAfb3JfxDGp4YFl8Yrpz/C+bO/xoANSeVewoiulgmXZh1TfjA/xE0DwyCcBrijacblOpwGXEFyNgys2XUDKxvDAHc8gQXSCNMM8hKyWiacbsVjGDJgROZIV6nCTcYVDiBvPm27zYjVBTpImrCFB7YAZiSUBtAt2Bl4BkUPE7oikAJszsemmSAgJikPPAAAYRhNAkSCrO0AAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1klEQVR4nKWT3Q2EIBCEgfBsD3YgDVmcDQkV2IJYAHsZcuPtId7DuYnhb2f4FtCKiHkS7pHaGOPZWZblsrhtW8Ubx9G2a/M8fxu0wuM4ah8lppRkGIaukWsnkJxzPsXWWgMxjX8apJQEIn4Q6wBVa+L1oJRSWwh5O+izHJDs+94nWNdVnPsAsU8jtBBjXlM47abfBMvQY012MQgh1IKxA5M0BcQ8E30b/o6gtyvPqEtACl2zFnFM0tt3EN4JRCYB2laM6L5EJsYYBcJpmi5Cxon8bzz+G1+ZL435SztEzgAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoUlEQVR4nL2PuxECMQxELVXgwC5BrZDTBVQEXVxOKy7BDtyBGXGnYeHM8fEMm61Gb7Vy7p9qra1mPBpKv14monWDlNIefc75pLAta5bBFspvK97h7px6l733O/QhhEMn4MaywiIyIRxjPCJsywi35QdGWFVrvaAvpZxfvDA3cPMLNp/QYxOEUKzLIvIwfPZb4m+WN5WW2vDOZw1GDw8HDOsKh084nvVQ3+sAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAa0lEQVR4nO2QwQ2AIAxFf5mgB1YxYSmXcb2OwBA1VTDRtBjuvMsPIeW/AixcRKRY1lp3VYXeXHc9O8kZxggiep/hNDPzZplzPpwH6FdbRIo5txUe2go6MgCA0CJsj0wso+bwE2dJ0xMLfDkBoXBLUDnLAhMAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjUlEQVR4nK2Siw3AIAhEhV0YqJN2IIehIfEswV+NvcRgCfcqYkp/K+d8xZyqqo9ePIPBQERUUhRBNPuziNzF0MDBZJhR7M2AWnFc9XRp0H8EjsTOjO0dvhv5O2AUi0jsH8U1mtGiXSry7It7egfQz9OyycH8MVr+YnbvoJoB5RUgmrdPkBawLUBPx4BjPby8U6sPjKmbAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAr0lEQVR4nKVTOw7DIAz1Q9l6oR6osw/D3Nyn6lVgTVdXTkJlCJ9KeIix33vGOAARoRlzU2oiWsrE87VpSyCipv+8VzBzswP86ZsFZNC1dAs87rdshxG+lATv/e7TGVv4pQPgKMzMYuMhLuYe6FoOy3I93OknhLADZkAZKwlrOE4vAGBFJi7vwo+isdNVjLE6eS1iyFWK64iy4bXwy2+0lk6UNHZ4KdctUO5e5cw+5y/i92kqAvAVQQAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR4nK2S0Q3CMAxE46jfTJEsgLILg8AYZQ/YpWIBewF+WcDIUSysKo1B5aTW8il9dk4N4Z9iZnmKVO09xZ5JRLNUAHABk5leVtsUAFh6m1gw2MOIWCdb5Zwv4Rsh4iygVllhPeimuAEUIt79OU5y6pkppRsRCbB+fPrkIC+QDKSXGrfIj0M6jyZrkHFl1tSJaDm+6ApNbRO9irT+D6LSw2xk/Rgc1QsP/OgBPNhPgJ52A3brDaUae0/UXPPbAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA20lEQVR4nGP8//8/AyWAiSLdDAwMLCDi9FTG/zKSwmAByaA3jKQYwAjzArIhpBjEiBwGIENgbJBhxBjCCDOgo6MDzFBQUMBQdOjQIYZal1UMzXvCGOzs7MBiERERjCiBWFFRgdM2mGYQDQMrVqz4jxGI8WqoGg/+mgKmYZohLkBVwwJjPHn+FtNqYUwXHPxlh2mAafZ/RuRwQA8LkOZE7ekMzXsy4S548OAB9kDEBpx5Kxn6jkQwFNmsYNj7uR0lzBhxRSOyy/ABJko0gwA8FkjVCAMoXiAHUJwbAR0Eaam85KCdAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVR4nGOsv1pRxAAFjdodfQwkAsZTUxj+y0gKgzkzNVKLQXSDVjvcIEZGRob////jNqH+akURyJBna4XhGCQG0gTTCGNjw4wgouFaZZH3/o5emKEgF8FcgwuAvAs2oP5qRRHHJn6wZgUFBZwa7NlyGJr3hDHUuqxiOPhrCsMNvYvFIEMYYS4AGYLPgEOHDoE1gwyxs7MDi4EMYSTXBVhjARkgK8LlAhBgARFPnr9lwABoZsI0Q1yAMIAR2QswgM0rIBckak9nmH81E+6CBw8eMDCCGNgMQQfOvJVgzSBD7govB2v+4fcRNRDxgUePHsFdICcnB9aMEo3eSAkJBLY6VuBNSPDkDkvKyJikpAzSgG4rKZkJHAYwDjnZGQDeE+mv+zKpewAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApUlEQVR4nGNgoAXIOK3wn1i1TNg06Zv44jTsf+Yr3IZP/5/7HwZAbGwu+b/8E24D/qMBdJtBmsEARKO7JOO0wn90F2C1BJ8LQACmEVdA4g2DDDRNpMQGXoBs0P///wuxKgpZBgk0GI1L8f///5Nx2nT8EWrIoxuCzUAmZBdYyjEyIrsACj7hYOMH/1FtBjsbr/PxGYJkgBZOL+AAO6H0cZJsJgUAAHAwnJ6QjcurAAAAAElFTkSuQmCC"
    },
    SUMMON_WANDGHOST: {
        name: "Summon Taikasauva",
        description: "Summons a possessed wand to aid you",
        meta: {
            action_type: 6,
            action_max_uses: 1,
            action_mana_drain: 300
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmUlEQVR4nGNgoDX4///ff7I16xdKkaa54NKhbYQ0EzS0AGpI/Xbx/8gaQHTfkS//QV7CaUjBpUPbDn9/dwmmGUTDMEwzDGMYUgDVTLYLDn9/d4kYv2IVL4DaTnKAMTAwMMEYa29feYIuebH/GSPI2UQZEKyqI4NNQZENDyMDqWmAFMCEzMEWDugAr0XoUUkRgBkCcxVVDMUGAFoSiTrh8ELJAAAAAElFTkSuQmCC"
    },
    TOUCH_GOLD: {
        name: "Touch of Gold",
        description: "Transmutes everything in a short radius into gold, including walls, creatures... and you",
        meta: {
            action_type: 4,
            action_max_uses: 1,
            action_mana_drain: 300
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYElEQVR4nGNgoBAw4pL4fyflMopClTm6RJn4/07KZXTN+MRRAEEF+NT8J0IzNrVMxGoiy1n/8fgbJs5EjKH4vMdEsnOJNYARKd6JSgP/BzQWYICihISsgJSkTP3MRCoAAMxuTXXhVgklAAAAAElFTkSuQmCC"
    },
    TOUCH_WATER: {
        name: "Touch of Water",
        description: "Transmutes everything in a short radius into water, including walls, creatures... and you",
        meta: {
            action_type: 4,
            action_max_uses: 5,
            action_mana_drain: 280
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbUlEQVR4nGNgoBAw4pIwq3n2GJl/qkVKligTzWqePUbXjE8cBRBUgE+NGRGasallIdUgrGFhhqQJnwE41ZmhacIViNj4TAzUAGYEbCTGRQz4vIFPjgVfaMMUkpQKGdD4xAQwhiGkJGXqZyZSAQA0vGDyKi55pAAAAABJRU5ErkJggg=="
    },
    TOUCH_OIL: {
        name: "Touch of Oil",
        description: "Transmutes everything in a short radius into oil, including walls, creatures... and you",
        meta: {
            action_type: 4,
            action_max_uses: 5,
            action_mana_drain: 260
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAb0lEQVR4nGNgoBAw4pKYUBjwGJlf0L9BligTJxQGPEbXjE8cBaArwKYJpyET8CjEJ8fEQA0wAYez8PkbJs6Cz2BiQp6JKrEwASqBK+CwsWE0E8ypBOMYzUIM701AMpmQF4hOCwzkqCE1EKmfmUgFAMFGZZFHQxB2AAAAAElFTkSuQmCC"
    },
    TOUCH_ALCOHOL: {
        name: "Touch of Spirits",
        description: "Transmutes everything in a short radius into alcohol, including walls, creatures... and you",
        meta: {
            action_type: 4,
            action_max_uses: 5,
            action_mana_drain: 240
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAcUlEQVR4nGNgoBAw4pK4MtHrMTJfJ3+bLFEmXpno9RhdMz5xFEBQAT41V4jQjE0tE1W8cAUqgayAEBtGMzFQCFjQowqXM2Hi6NHJhK4QWQG6v/GmhStoNuMKA3Q+EwM1wRUsNuGzHachpKQD6mcmUgEAHT9lK1Pyr5gAAAAASUVORK5CYII="
    },
    TOUCH_PISS: {
        name: "Touch of Gold?",
        description: "Transmutes everything in a short radius into urine, including walls, creatures... and you",
        meta: {
            action_type: 4,
            action_max_uses: 4,
            action_mana_drain: 190
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaElEQVR4nGNgoBAw4pL4fyflMopClTm6RJn4/07KZXTN+MRRAEEF+NT8J8FWZDEmBmqA/3hsJ+QKJkotZyLFRUQbQApggiUSYqIQBkBqYQmLCZsCbKmOqJT4n5KEhKyAlERF/cxEKgAAqDdbm82231AAAAAASUVORK5CYII="
    },
    TOUCH_GRASS: {
        name: "Touch of Grass",
        description: "Transmutes everything in a short radius into Earth, including walls, creatures... and you. Unless\u2026",
        meta: {
            action_type: 4,
            action_max_uses: 4,
            action_mana_drain: 190
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhklEQVR4nKVTWwqAMAyzo+fzQzym+OEFKyqMLUvcYPsQ6fJqRIuIZeb489iund2hsiHgXI9PQBBtZO4E1DgBscKkQTIK5fWcAHqt0hUCLlSSsoeXk3oRgdwIu3DAd5aACphwlAWnTmx1sqD/gEpR+XmTIAy5swToip00adgKZXFsXg9nf+cbnx4jMqXD8W8AAAAASUVORK5CYII="
    },
    TOUCH_BLOOD: {
        name: "Touch of Blood",
        description: "Transmutes everything in a short radius into blood, including walls, creatures... and you",
        meta: {
            action_type: 4,
            action_max_uses: 3,
            action_mana_drain: 270
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaklEQVR4nGNgoBAw4pLYaGp6A5nvf/q0BlEmbjQ1vYGuGZ84CiCoAJ+ajURoxqaWiRxNZNu+EUkdjM1CqkEgNRgxspECFzAR0gBTiNVmQq7YiCdNwNgs+FxAdOpjwOMKktWQmpSpn5lIBQAdkkiwhs41iQAAAABJRU5ErkJggg=="
    },
    TOUCH_SMOKE: {
        name: "Touch of Smoke",
        description: "Transmutes everything in a short radius into smoke, including walls, creatures... and you",
        meta: {
            action_type: 4,
            action_max_uses: 5,
            action_mana_drain: 230
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaUlEQVR4nGNgoBAw4pLIrFz2GJk/vT1KligTMyuXPUbXjE8cBRBUgE9NJhGasalloooXMqESyAoIsWE0EwM1QCaaDcR4Aa8LpmOJc4LpIBOHnwnJs+ByAVkpMZOShISsgJR0QP3MRCoAAOxvYwJ4fgwaAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVR4nI1S2w3CMAy8IrZoBUPwxR+zIJaAAZgCdZXyxxdDVCpj8JCrHnUPJ/SkqHbic+5SAwPac/c22Jd7+83hG7OGi4AWpJookTnmkg3PJiAqmYeRfL3AsGTwuvrtkYQE7IL6fikmxSbRK2Hu5RuR6lQl9KE8IpuGwpL1qeql+INqW2KxG+11t0cfr47lJIfvmoJv/DMHrXiP3oD+I7vQrrk5yP0VaOHcOQDx7za1GpJ9oT5cOP8RWQujhiFyHnP+P6xQ3Zlf56jrAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAv0lEQVR4nGNgGDDw//+/////YYozYVV0+/ZtuAgDfiP///93+/ZtOBsZMYABI2GTkAAjIxMLAxHgw5JMAQEehB/gLsYF5sw5wsDA0NOzA+okiAYVFeU7d+5CGLhsYPTtBdmgqqrKwMCApvrOnbsQkTtg8sOHL1BvQKj3i9PfWJTAjYTbBgeqYEMZGBgQnhY50SMYOxPivDt37oqc6GFgYBCMnTnd2xhZJ1QDPBD2FEQwMDBkbj37f3MxMQE4GAAAJzhsXQgsQD0AAAAASUVORK5CYII="
    },
    BURST_2: {
        name: "Double spell",
        description: "Simultaneously casts 2 spells",
        meta: {
            action_type: 3,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAjUlEQVR4nMWR3Q3DIAyEU3ZgD4bwbYTEDMxkhmAPL1G1Voljk8eo92R+7O84juPPYma387ILEck5b28D0CKtqyKixR2qtfYhMHMpxZ4pJJrBF5IAzDmdsUgYY1wsOSndqvd+NkRIrXWNdNoTnPCL6GyIECLaQtJ2pG12bZePW1EC0HcTkfXjFbOPcT2vN9kxQWeD3Bd5AAAAAElFTkSuQmCC"
    },
    BURST_3: {
        name: "Triple spell",
        description: "Simultaneously casts 3 spells",
        meta: {
            action_type: 3,
            action_mana_drain: 2
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoUlEQVR4nGNgGFJg+vTp/9HFGNEFXr9+/V9UVJTx9OnTGIrXrFnDoKCgAGZnZmaC9TIhawRhGBukmBjXMME0kOkrBrABFy5cwJAoKSkBO5koA8gBe/bsQRjg6urKSKor1q5dixqI5NiOYoArDle4uLhguAJmO4oB2AA2A5FtBwEWZA7IFbt374ZHKUwxyBUwgGw7VoBsADoIDg4mO73QDgAACkZPbuC8IFkAAAAASUVORK5CYII="
    },
    BURST_4: {
        name: "Quadruple spell",
        description: "Simultaneously casts 4 spells",
        meta: {
            action_type: 3,
            action_mana_drain: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVR4nNWRwQ2EIBBFR7KFcKAEOlAr0Ca8c6AED5YiFUARFkAHXuzAzZCAo6Jm97T7ExIyzMx/wwD8vYpjYJ7ndRgGaNs2xfq+h6qqwt05B8aYVMdoIR68K6VgHMes47IsUJbl2jRNyH3F4k+wpZSwI5im6ZR0R0HF4Et577cGdV0XOYoorXX4PCSi+I8E6mIMdI+bYDH4RHEldveIDeP+c+5pjUAorLVppTg36tiEateAuqA459B1HbqtQoiT+2/oDRHBWRNcFlcHAAAAAElFTkSuQmCC"
    },
    BURST_8: {
        name: "Octuple spell",
        description: "Simultaneously cast 8 spells",
        meta: {
            action_type: 3,
            action_mana_drain: 30
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABN0lEQVR4nK1TMaqEMBCdyCIIFna2FltYWuwVPIGX2Zt4CT2B9lvsIlaLhYiVTRa1yCLY5DPhJ5io1f8DyYxO5r3MGwX4o5GzxPP55DJumoaM4wjTNMH3+4Wu6yDPc5GzzEJKKS4eBAHger1eEIYhH4aB+77Pq6ri8zzzJEkEweWAXDGjXa/X3YHb7aZiy0zWda09R1EkfNu2h61a5os4jokJMs8z3O93KMtSsUvAy5lwWZYdXl8WO45DFAClFJ1WjEzoUUhkNsGWZdFa4NukeRhbkP736kQbY30inGl4q3VdtW+H4PZ4PIAxxreFCOp5nmhj23ue5xqAhRtj7JBRFpnC7QAAAFzX1ZJHc5fCbU1MIY5jKIpC06LveyWmKdxOg62laSomwhgjn89HxO/3m9i2rX6gf7UfQ7Oiq1F5zB8AAAAASUVORK5CYII="
    },
    BURST_X: {
        name: "Myriad Spell",
        description: "Simultaneously casts as many spells as you have left uncast in your wand",
        meta: {
            action_type: 3,
            action_max_uses: 30,
            action_mana_drain: 50
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzklEQVR4nGNgGPRg9+7d//HJM6ILvH79+r+oqCgjNs2urq4Y6pmQNYIwjI3LNeXl5ShyTCBBbBrQFYLAnj17GDo7O1FcwQRy1oULFzBsKykpAWuAARcXF4bY+xD+/1n5/0EAxQv4AMigq+EmDNorz4A1M6ROAPNRwG6oV9AxyCswv18JMwbbDKJh+piIdQHI+SAXMMwuANPIhhDlCmSbSQqDC9AAZmRkZNRZdRYcA4xpE0FcCJsBDcASDywGQKGPLQHBAAs2QTQNeJPywAMAD2qpZAOMbzgAAAAASUVORK5CYII="
    },
    SCATTER_2: {
        name: "Double scatter spell",
        description: "Simultaneously casts 2 spells with low accuracy",
        meta: {
            action_type: 3,
            action_mana_drain: 0,
            spread_degrees: 10.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAALElEQVR4nGNgGDng/////78f9v9PlkYQGAIaQYAsP1LVBYPfoO/UCCOG4QcAYX5A4SjqDcYAAAAASUVORK5CYII="
    },
    SCATTER_3: {
        name: "Triple scatter spell",
        description: "Simultaneously casts 3 spells with low accuracy",
        meta: {
            action_type: 3,
            action_mana_drain: 1,
            spread_degrees: 20.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVR4nGNgoAf4ftj/P9ma////P6qZktD+ftj/PzogGCP/KXEBDIwaggkoygs0BwB4JUbx2avDTQAAAABJRU5ErkJggg=="
    },
    SCATTER_4: {
        name: "Quadruple scatter spell",
        description: "Simultaneously casts 4 spells with low accuracy",
        meta: {
            action_type: 3,
            action_mana_drain: 2,
            spread_degrees: 40.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAASElEQVR4nGNgoDX4ftj/P9ma////P8g0/////z9BL/3HohkkRpSLvqOZTrRGbAaRrZGBUhf8pyQMqBILVEkHDNQ0hKK8QBcAAHjvYO0LFR0rAAAAAElFTkSuQmCC"
    },
    I_SHAPE: {
        name: "Formation - behind your back",
        description: "Casts two spells: one ahead of and one behind the caster",
        meta: {
            action_type: 3,
            action_mana_drain: 0,
            spread_degrees: -5.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAI0lEQVR4nGNgGAU0Av/BAJmLJsuApIYJU46RkRErdxTQEAAA0PAX8Vot/CUAAAAASUVORK5CYII="
    },
    Y_SHAPE: {
        name: "Formation - bifurcated",
        description: "Casts 2 spells in a bifurcated pattern",
        meta: {
            action_type: 3,
            action_mana_drain: 2,
            spread_degrees: -8.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAALklEQVR4nGNgoAX4DwYQNhNBpQzEmzpklNIL/CfPSf+Hjrb/xKclRkZGcuxBBgAVfCneG7++pAAAAABJRU5ErkJggg=="
    },
    T_SHAPE: {
        name: "Formation - above and below",
        description: "Casts 3 spells - ahead, above and below the caster",
        meta: {
            action_type: 3,
            action_mana_drain: 3,
            spread_degrees: -8.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAMUlEQVR4nGNgIA/8BwNiVDIx0An8J849AwX+IzkPzv6PNRixKiU13KkF/tPcusGUlgCSOCnbJqqplwAAAABJRU5ErkJggg=="
    },
    W_SHAPE: {
        name: "Formation - trifurcated",
        description: "Casts 3 spells in a trifurcated pattern",
        meta: {
            action_type: 3,
            action_mana_drain: 3,
            spread_degrees: -5.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOElEQVR4nGNgoAX4DwYQNhNBpQzEmzpklOLRicb+j2YoHqUMmBrIdNL/oaPtP/FpiZGRkRx7kAEAPIdEw1dkU4QAAAAASUVORK5CYII="
    },
    CIRCLE_SHAPE: {
        name: "Formation - hexagon",
        description: "Casts 6 spells in a hexagonal pattern",
        meta: {
            action_type: 3,
            action_mana_drain: 6,
            spread_degrees: -15.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOUlEQVR4nGNgoAT8BwP8IkwMAwD+w9yA5hh6gv+woMDqhv8wKQgDJZQYGRkxNTBiExxGwfp/UKQlAHgyNdf5ud2ZAAAAAElFTkSuQmCC"
    },
    PENTAGRAM_SHAPE: {
        name: "Formation - pentagon",
        description: "Casts 5 spells in a pentagonal pattern",
        meta: {
            action_type: 3,
            action_mana_drain: 5,
            spread_degrees: -12.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOElEQVR4nGNgoAr4DwZYpZgYBgb8x+Eewi7GVMPEQAn4j82e/4QsH3TgP6qLqecB/FGBLEv7tAQA3OEs2lL6CqUAAAAASUVORK5CYII="
    },
    I_SHOT: {
        name: "Iplicate Spell",
        description: "Casts a copy of a projectile behind you, but the copy still cost mana",
        meta: {
            action_type: 6,
            action_max_uses: 30,
            action_mana_drain: 40
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAV0lEQVR4nGNgGAWDBOx33v8fhMlSv995/38YgAner77/H4SbhJpQDP5/4f9/MEZSz4JsskOvA8N/hv//GQ0YGWGGHz5/GGwgiA8SB4k57HGgohdGwSAAAEowUc2R+CyPAAAAAElFTkSuQmCC"
    },
    Y_SHOT: {
        name: "Yplicate Spell",
        description: "Casts a copy of a projectile in a bifurcated pattern, but the copy still cost mana",
        meta: {
            action_type: 6,
            action_max_uses: 30,
            action_mana_drain: 40
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhElEQVR4nGNgIBHsd97/H4RJ1QcGII0wADOEhYFI8P/Cf6y2shDSeL/6PlgjowEjI8wVINpxryOYT32/rpNb9x+EiVXPAmM0CTWBNQU9CsLvtMELmoSa/sO8QRFYR2Ig0ibJMiABUEKCJSaKDAYlZTBGywtMxBoASsoHig+QbDEGQPcCAKJ7YNHh6kq7AAAAAElFTkSuQmCC"
    },
    T_SHOT: {
        name: "Tiplicate Spell",
        description: "Casts copies of a projectile above and below you, but the copies still cost mana",
        meta: {
            action_type: 6,
            action_max_uses: 25,
            action_mana_drain: 60
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdklEQVR4nGNggIL9zvv/gzADOWC/8/7/MECqIUwM1AL/L5BuO4YBDJSC+9X3STaEiRyLsMbYfuf9/5uEmsCC6+TW/QdhZJfBXIceYyzopoMMCXoUxAhTDKIVWxUZiQqn+0SGAc5Ed5+MQKQ4GpmQOUM8L5CbnQHo6nQszp1WVAAAAABJRU5ErkJggg=="
    },
    W_SHOT: {
        name: "Wuplicate Spell",
        description: "Casts copies of a projectile in a trifurcated pattern, but the copies still cost mana",
        meta: {
            action_type: 6,
            action_max_uses: 20,
            action_mana_drain: 70
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAm0lEQVR4nGNgIBHsd97/H4RJ1QcGII0wADOEhYFI8P/Cf6y2shDSeL/6PlgjowEjI8wVINpxryOYT32/rpNb9x+EiVXPAmM0CTWBNQU9CsLvNGK8sQ7NFaBwgIUFekywIGtEdwXMJsVWRUZ8MQHXDDOAEMAbwOtIDETaJFkGJIAcgBQZDApAMEbLC0zEGgBKygeKD5BsMQZA9wIAqAKOINGeLUYAAAAASUVORK5CYII="
    },
    QUAD_SHOT: {
        name: "Quplicate Spell",
        description: "Casts copies of a projectile in a tetragonal pattern, but the copies still cost mana",
        meta: {
            action_type: 6,
            action_max_uses: 20,
            action_mana_drain: 90
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkUlEQVR4nGNgwAP2O+//D8L41OAEII0wgM8QJgZagv8X8NtOlAsOnz9MvguahJr+36++TzgQ9+MIbZBmbOIo6vejhTbMVhgbRIP4IDYoTMAYST0LsskOvQ4MINjs1MwQmxmLEgYgPkjc1tCWwWGPA3Fe2A+1nVgvYwCY0xnIBU1Qf5OdDmwNbcm2fJDkBWJCGwDM5p6Ok5/qXQAAAABJRU5ErkJggg=="
    },
    PENTA_SHOT: {
        name: "Peplicate Spell",
        description: "Casts 5 copies of a projectile in a pentagonal pattern, but the copies still cost mana",
        meta: {
            action_type: 6,
            action_max_uses: 20,
            action_mana_drain: 110
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArElEQVR4nGNgwAP2O+//D8L41OAEII0wgM8QJgZagv8X8NtO0K//L/z/T1D9fgJ+vV99H0UMXT0LsqRDrwPDf4b//xkNGBlB/HVy6/4TchEjzFQQ7bjXkRHZ1gcnHoAVKVgogGnFVkUM9Yy4wgVku6CqIJj9/vZ7hqBHQTjV4gQgl6CHAdHgPpJGkg35jyWwcEUpAwzA4hafQljCwohuYtM9NnXUywvEZl10dQA6PrQMnXthAAAAAABJRU5ErkJggg=="
    },
    HEXA_SHOT: {
        name: "Heplicate Spell",
        description: "Casts 6 copies of a projectile in a hexagonal pattern, but the copies still cost mana",
        meta: {
            action_type: 6,
            action_max_uses: 20,
            action_mana_drain: 130
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR4nGNgQAP7nff/B2FixVEASAEMICvGJQ4CTAzUBvtBtl34j+FUkBhR3gABXAYwkALuV9//j42NDlhABMxZjnsdGZEl18mt+3/lyxUMTcjqGUEchz0OEJmLEIrRgJERpFlQVRDMf3/7PUPQoyBGuDf0IeoOuBxAjYUDxQfAmkFONow1hIuD2CAxkBxIDVYn7UcLXZCGJqGm/yCXoIcBUbFxn8hApDgamdAF8DltCOUFUrIzAJiDvmnoKj4mAAAAAElFTkSuQmCC"
    },
    SPREAD_REDUCE: {
        name: "Reduce spread",
        description: "Reduces the spread of a spell",
        meta: {
            action_type: 2,
            action_mana_drain: 1,
            spread_degrees: -60.0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAQklEQVR4nGNgGBTg//9/////g7CZqGkqA4zECb4f9iesCFkpMiBKGzF6mBjIA9/Jc9J34j3NgAGIClY8mmkQ01QDAOnTLvczj15JAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWUlEQVR4nGNgGCjw//////gFqAX+oxm8e/fuXXg17MajgKBmbAphbKI1k6XxP9SfIMUk20QsQDacYIztpsQlu/EEIF6D/xOIb7JjgQEHICvlEq2JZvkCGwAAwmlkD0qHolkAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVR4nLVSwQ2DMAw0naCFH+oKmYsFOpMXuhUqfoFukOoQQcYkaovUezl2fInvLPIvzDGmDManGj1KRI1vvratvKZJnuMoAJZ8CEHufS+5duu6pvryHGMCkIZheOQaY+bsnQNBWuGbayS7IoCNudTsSQ6/QClZgapuovJ8kZOgmBsBgCVBlUsj2J/REYIufa0DVvGYr46qqjubLIklz04V51JDYl+ywn1yarns/bYEfoTjShoiChZCaBh7EbnaxZX+FW9mI0dfGdfvcwAAAABJRU5ErkJggg=="
    },
    LIFETIME: {
        name: "Increase lifetime",
        description: "Increases the lifetime of a spell",
        meta: {
            action_type: 2,
            action_mana_drain: 40,
            fire_rate_wait: 13
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMElEQVR4nGNgoBAwogtYZ5/+/+HFGQYBCRMGGH10qilc3eHr3//banLC+UzoBjw4MwcnH6RZQ+QLmCboNO3g6SiKwjregvmvX7/+j8xnxKYR5GwYAHnj6tpMnF7A8P/y5cv/gxRJm6eDaRAfJA5TA7MZIwyss0//z7G5A2aD/IlMg8IBZsiqCmFGDAO0g6fDNbu4uKC4qmTCATANkkcPFxBgAREgP8sY6MBthAEDnxowvWLBBDAtcOQKA1YDQODJhQ0MT5BcICalwPDq2QOwZpAcBKgw4DRAxiAAxQWT2grANEhMw8WF4cYbHgYGXC748OIMw5MLd1BcgGzYnj17wPSHFx8wDGACEaB4nnIE4jyYYnQaJI+cHlAMAAFQeocZAnYuEg0SR84PyIDklEh1AABIJ6OSqCkh4wAAAABJRU5ErkJggg=="
    },
    LIFETIME_DOWN: {
        name: "Reduce lifetime",
        description: "Reduces the lifetime of a spell",
        meta: {
            action_type: 2,
            action_mana_drain: 10,
            fire_rate_wait: -15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJ0lEQVR4nGNgoBAwoguctg75f/T3RwZrVn4GGG16dA1c3ZOgnP8y66bA+UzoBkx7cRMvXzotkjinTTBz/Y/MB9kMol+/fv0fmc+ITSPI2TAA8kbBqd1gdf93HP3/xliNQeTsLQZGD2sMvQwg/19eufI/SGGisi6YBvFB4jA1IDFkPUzImjnyQsFskC3INCgcYIag28wEczZMs4STE4qr+qpawDRIHj1cQIAFRID8rMMvA7cRBsosIIbNmzoDTP9AChsML1z5+IThxb59cAklAWG4ZpAcCGMDLDAGugtqWlvh4SDBAAn5M7gMOPr7IwMHyIZ9T+BhgGwYyGUvoOqweqHg1G7GH5NWwxVjo0HysPSANQxA6R1mCMi5yDRIHDk/IAOSUiJNAAByup+LG+C95AAAAABJRU5ErkJggg=="
    },
    NOLLA: {
        name: "Nolla",
        description: "The duration of a projectile is set to zero",
        meta: {
            action_type: 2,
            action_mana_drain: 1,
            fire_rate_wait: -15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAr0lEQVR4nK2T3Q2DMAyEnU6TFdo3NmEEBsoD06Qv7HSVISluek6D1JMQOD9f7IsR+YcATACyiSOAhFP6HXuAXBbqewaw4Vs6No9AqjReymPnOATHye/NZH51IThqrmnnAcj24QlOw/ZNPyB1LtnBqoUZ2wDUk10a3zxTQwgPEXmKyJ1l0qaV2GksE6+EaExcexBqIrnGHmS8F8AbiZbaQtxW7l2xhXR/pgKZXMAVvQB90ND6PnW/fAAAAABJRU5ErkJggg=="
    },
    SLOW_BUT_STEADY: {
        name: "Slow But Steady",
        description: "The reload time of the wand is set to exactly 1.5 seconds",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            reload_time: 90
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEElEQVR4nKVTuw2EMAz1nY6WAaBBiIoBmABRUtKzAQNAgbwFDYsgBmAAKhRRMQBKz8nWBQUOxH3cOP69PDsOwJ9yOwsg4iKEANd1QemiKN7y72cAVKRL27a/UUzTdPmphfRVSNQVo7quP2sBEZcoiiDLMi6M4xjIJv8lACIunueB7/tsj+MIlmWtc9iD3Pe09WIqdByHz1VV8Zni+lweOgD1GwQBmKYJ0zStDJIk4eI8z9k3DAMcAgghoOs6PodhyNq2bTAMg+ehYro8zhgoKcuStZSSQed5/o6BlJJnQaBN08DlKwwvdJXc9/3Gpri+pRsAWhQKKhCiq2vy7//DpgUllERPpYD2tx5t5Edy9C+em0uS2FA4CesAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8ElEQVR4nGNgGDTgv4bG/4lqav/Rxb8f9oeLfW7nBqsBqYWJMcEYk/79Y8hjYmJANgSkAZmeN18arAakFgZYYIz8W7cYGdTU/oMUgOikxKcoLgEZDNMMVosLTIQ6EUSDnP/9eTvc2SAa5BqQOMxVjOgGgCTQnQpjpx1MZGC4c4Lhz5E9DLyVXxlRDPgMNRHsLxsXhlnJ18EaYeGDTTNKIPIiCeIDIMORY4YJmyKY7SCbYbEzy34+2HYQ4LTdSH4gMkDTBrKXsWt+3g4J8eftWA0haPNnqA1gA6B+xmsILgm4QWiGYHUFsgZsfKz+phQAAFjf1H2c9m1OAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnUlEQVR4nGNgGAhwclLwf6IV9yboVoM0/H9x7j/ZhsAAuiFkgf+kGPL9sD9Y8ed27v+4DGHCphFZA8gQFhsXuGEgcGpVK1wtCzYDeCu/MoIZKhYIwTsn4Mwj527VYHVBb4JuNbrzsYHiBZdbsRpgY6TWglXHnRMMnLYbIa4iJYS/H/b/DwsPfC4a4LhmgAL0pAkyBCSGHLAkG0IXAAAV4Fs0JkYkIAAAAABJRU5ErkJggg=="
    },
    LASER_EMITTER_WIDER: {
        name: "Plasma Beam Enhancer",
        description: "Makes plasma beam spell's beam wider",
        meta: {
            action_type: 2,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAc0lEQVR4nGNgoCdoPfD/P7oYI7Ga//9HaGZkZGQky+b/UEOwuQQMjBqv/gdhBhwAp0YQQNaIzxB0wAjTcK5eG8VfILFgey2cGtcevMYA19OKz2kEABMDhYAF5hx0QJIXKAlE6kUjAx6ALyHRJymju4SqAADMiVXZaOMmYwAAAABJRU5ErkJggg=="
    },
    MANA_REDUCE: {
        name: "Add mana",
        description: "Adds 30 mana to the wand",
        meta: {
            action_type: 2,
            action_mana_drain: -30,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAmElEQVR4nK1SbQqAIAyVqEPsFp1JKFgHKjDoTN6iQxgYuVxSWhm9P+rb9vbhhPgFIDVI/eyHyqAy98wBNoDU5MdJ8BrDFLlah1Ae/aU8hfXNwfi7GdqKyYKOoa1uugSpw5jtTfI2AXT1kNue4QvADScqD0G1ewZUZp7qlNY81fEpuc42A82nGxdPxpD3cWzIWI3TAF4t3xusjs+LJ2C0FaMAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5klEQVR4nGNgGPKAEZvg1ba2/7JJSXD+43nzwLR2VRVW9RiaP714Acau2tFwNgiD5A5GRf0nWvO7e78xDAFhZEOYcDkbBOY17MCw5P2sWQyXLl7EtH2ytjbYZGSb0G0HyYNwokPtUpg+RmRDQBIJUnejQGwFDQ0GwbQ0eCDy/PnD0LDvN4PR63UMuVevwvWxIBsw/0BzNINDLUhR1IJnygxGK50ZzokGgeVAGhlEg5YxMDCALcAIA2RD9PT1Qcxlx96+hYufEw1ahiSHHyxyc8MZVaCwImjAZGIUQQGGF0AA2emDHwAAYIijJsjLwNAAAAAASUVORK5CYII="
    },
    MONEY_MAGIC: {
        name: "Gold to Power",
        description: "Spends 5% of your current gold and adds damage to a projectile proportional to the amount spent",
        meta: {
            action_type: 6,
            action_mana_drain: 30
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAv0lEQVR4nGNggIL/zyb8ZyAX/H824f//38//U2wIAzaDofjjBmu4PDKbkZCBn06thovxBxzFUM8IUwxTCFKEbAMM3Fp+mUEtUhfONl35CayXEeYkkKBJfxPcRj6zUBQDQOLIYiA+yDIWmGI1JMXomvEBFphpYBfg0Qj2AhIb5gUWbC5AByALQN6DAbDalUfBbCZkF5ADWIhxAS7nY7jgEzRkkeMe5nxYwMKikmBCOh3O9x9ZMbrNWAGxeWFwZTwA0yaVJwuXs24AAAAASUVORK5CYII="
    },
    BLOOD_TO_POWER: {
        name: "Blood to Power",
        description: "A projectile gains additional damage at the cost of 20% of your health",
        meta: {
            action_type: 6,
            action_mana_drain: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0UlEQVR4nGNgGGjAiE/ydlr0fxj70ovXDMGbdmGoZyGkGaSRoAtup0X/hykE2bLWzw1uMwxcfv6CQVdSAs5uOH0JrJcJZgtIUE9ClAGmGcSGARAbpBkmFm2oC1fHgq4Ym2ZccnADLkFdAAMgPrpCZHlk77AgmwqikQMNJg4SAzkb2WCYgSzYXIALILsKFogs2FxAyPkwzRixcAmaWJC9AXM+zFCY31EMCN60ixFdYun5y/DwANEgPraUiAJgcdtgqgemQXwYG+53ND4KIEkxtQAAsPeEljP9yw0AAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZUlEQVR4nGNgGFTgy73/cHBh9qv/ZGsmy5ALSIpBbBhgIBf8J9IAJmK9B3MhiAbxSXLBBaiXkGmCNoIAtnAhWvMXJGcS7YIvWDQTHQZfcGgmORa4FREBSExCghtwZ+9rUiweRAAAHj/L08Vpst0AAAAASUVORK5CYII="
    },
    QUANTUM_SPLIT: {
        name: "Quantum Split",
        description: "Makes a projectile split into three projectiles whose existences are entangled",
        meta: {
            action_type: 2,
            action_mana_drain: 10,
            fire_rate_wait: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABCklEQVR4nKVSwW3DMBC7E/zIAEo7UdElgjy7hAcx8u0UBbpBO0kiDZCXr+BJdKU0RtPmANuEJZ5IntTM5J4aCFT1181HEZ6mjyKCw8OtJ1Wy1seO9X/4CzmkZDZNbORqlBlcs8C1k+rSgBbm7dYezLRTcBkom4aUfJkWQK5YlhCvVSonOglNKhEN0WQ9gwSvRU3nC5Lpn3YCXjlnA4nfhkhPFmP0fdXOUgPtXubXjMzXc86yG6Ovvb+Kzmf1zIYV+60Cx7sxOhH4aY8mbke6MQLjmxqZlN7OHhgN3w7Sj3HtOlfpXh+f37hoNPsxf/6HEj7PL4aAFxw2hbd6D1o12OyyJTpgFl0G/60vdnCo9Co3UfYAAAAASUVORK5CYII="
    },
    GRAVITY: {
        name: "Gravity",
        description: "Increases the effect gravity has on a projectile",
        meta: {
            action_type: 2,
            action_mana_drain: 1
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAN0lEQVR4nGNgGGjACGP8////P4oEIyNcjizwHwooMgQERoAhTBSbSqkrmBiGHPiPlsCGoBfQAQBG8ifkzPws2wAAAABJRU5ErkJggg=="
    },
    GRAVITY_ANTI: {
        name: "Anti-gravity",
        description: "Applies a lifting force to a projectile",
        meta: {
            action_type: 2,
            action_mana_drain: 1
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAN0lEQVR4nGNgGHLgPxTA+EwMQw78R3I+/b3wH812+rrgPxbbB7nm/2gpDhdgxGUTIyMjXG5wAwADOyfkqfyMigAAAABJRU5ErkJggg=="
    },
    SINEWAVE: {
        name: "Slithering path",
        description: "Makes a projectile move rapidly in a slithering manner, like a snake",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            speed_multiplier: 2
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJklEQVR4nGNgGAWDCPyHAmLFMRQxkMiG8Zmo5AHivYMuNgoGAwAAGhgzz6s7elwAAAAASUVORK5CYII="
    },
    CHAOTIC_ARC: {
        name: "Chaotic path",
        description: "Causes a projectile to chaotically fly wherever it wishes",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            speed_multiplier: 2
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAUElEQVR4nMWQQQoAIAgE1f//eSNIiJA0jZpTh93RJPoBBv0tzydTJoBp5RWJ2pmZ3cnYSNz1lbIETih9yKsSVL6C6DHJCB+VrVJKoMV02aMBHgRnof/LnuUAAAAASUVORK5CYII="
    },
    PINGPONG_PATH: {
        name: "Ping-pong path",
        description: "Makes a projectile fly back and forth",
        meta: {
            action_type: 2,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAT0lEQVR4nO2RwQoAIAhDVfr/X150MDQIml57JwNnm4o0US8A4FmkunUl4mcmTfQ2mY4AYgcRq4iSGym4+FfI2PGmoSIs697jMcbZ0HVEMwF1tCgGjQmc0gAAAABJRU5ErkJggg=="
    },
    AVOIDING_ARC: {
        name: "Avoiding arc",
        description: "Makes a projectile shy away from obstacles",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZElEQVR4nGNgIBFM9zb+7y8uDMYgPhMDBQBkCBMlBhDtgv9QQLYB+AALAxGAkZGRkWIvMFBiAD7ARIztFHsBH2CixHacsfAfGmiENKMY8B8ppInRiGEAKZqQAX3yAi6w8eVbRgBTCSUnn3uSPwAAAABJRU5ErkJggg=="
    },
    FLOATING_ARC: {
        name: "Floating arc",
        description: "Makes a projectile float above the ground",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeUlEQVR4nGNgGAWMuCT+////H66IkRGnOoKasfHxgv84FOMSZyLaZHJsn+5tjNUrIBpF7X90Aahmf3Hh/+iGoKtnISeUkdUzYVMAsnXHmQdgNojG5gq4YdOxSMI0IwMPEwXsBoD8SbTbsQCKo5Fp48u3pCVTJADSCwCn21AoCc7nTgAAAABJRU5ErkJggg=="
    },
    FLY_DOWNWARDS: {
        name: "Fly downwards",
        description: "Causes a projectile to aim straight downwards a short time after casting",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -8,
            speed_multiplier: 1.2
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXklEQVR4nGNgoDWQSV78Hx+fKGA97fz/+qMf/4NoBlKATPLi/yAA0gyjYeIENf////8/xS5Atg1mIEHb/yPZTFXwnxiD/9PKdpobTpQNtHcBAwEATopYXME0MM5BAgDoQlPlG413TAAAAABJRU5ErkJggg=="
    },
    FLY_UPWARDS: {
        name: "Fly upwards",
        description: "Causes a projectile to aim straight upwards a short time after casting",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -8,
            speed_multiplier: 1.2
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAVklEQVR4nGNgoBf4DwXo4kwMgwb8x+I8UuRpD/4T44L/tHTmf2IN/09tV8gkL/6PbDCMT5JLrKed/19/9ON/EE2y7f///wdrhtEkuYJiF2CzjWTbCQEAlMJT5fhnhIUAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiElEQVR4nGNgGAUYgC9+aQk5cmCgUH3qPwMBgK6GBcbI2Pr9/8qtBxpAbE7vVitWEQUrZm4hbhD/79d3X3+/eXDs+9bqYx/fv20AqZ3hzckINyVj6/f/ImWnVoMNuf4fjNEBTBxZLUgvI7oL3k/zbMTnAsGs7fXh3g4NKC6gJAyoGwujgIEsAAD02G7elDDrRgAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaElEQVR4nGNgGGjAiE+y9fT//yC6yoSBgZGREa9aDGA87T5YMwj8/w8xiCzNJBsglrMWQzE+A1hABJdfI1gBj5wOw6spwaT5lRiA7gIQHybGxEAP8B9PGDBRyyC8ANnPZIH/lGge/AAAwlM7WhlWvhAAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAcElEQVR4nGNgGLTg6LP//zM2v/5vMeHyf5jYfyjAq/H/////QZqxiSMDmDgLuiJGRkZGUlzKRKxCZIOxWvKfkN8odQEyQA5YJgYygIGyBANFXjiKJZaINgSnZmINICoh/ceiCJc4zkSDrpjUBEY/AAB4Nl8cmsKfJAAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdUlEQVR4nGNgGGjAiE/y/////1EUMzLiVY+iEV0zPnEUQFABPjX/idCMrpaJGMVHn/3/n7H5NXlOP/oMIY5sCIb6/1gMQNZsMeEyijxRBvzH4SpSwooBXTFG2mBAk8CWWJA1ocszYjWV2BRHbDQSBYhKprQAAEBib1v9kR9pAAAAAElFTkSuQmCC"
    },
    PHASING_ARC: {
        name: "Phasing Arc",
        description: "Makes a projectile fly much slower, but teleport short distances over its flight",
        meta: {
            action_type: 2,
            action_mana_drain: 2,
            fire_rate_wait: -12,
            speed_multiplier: 0.33
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdUlEQVR4nL2QiwmAQAxDk06iIzmAoziNAziKI1VOLBxyPS4IBgr98EIo8Lf8Ucymwu/eBHhq7U1JAGCOhiRFFneKLElT7r6XQkeWHWqwZ2IJPBzTOrctGpLrqOGnhy2lIMoCro0kAylmlgDAGQuSh+wiP6zSBU+/SkPaQT0sAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnElEQVR4nGNgoBAwYhM8+uz//8Vn3zBcuPuCwUBZAkyDwIkCXazq4eD/////QZoZcACLCZdxyjHg04jNIqIE/0MBNjEU8f/YTMRhALp6JmKciW4IIyMjPDBZiPEKsjiyZqwGMEIV4LMVGTAxUAiY8EmCbMVlM4oBjIyMjLj8TjT4T4IBOFMkrniHAVBqzdj8mrBFyKkNBkhJ6iQBAB8qi6NfRmNgAAAAAElFTkSuQmCC"
    },
    BOUNCE: {
        name: "Bounce",
        description: "Makes a projectile bounce on impact",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            bounces: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAS0lEQVR4nGNgGAUkg/9QAOMz4ZIgG/zHYQhJhv9HU0yWy/5DNRHSzESyyeS4gqYuYCwvL6co6ljOnDlDkQso9gLT3r17GcnVDNILAMXaNRwTMnRdAAAAAElFTkSuQmCC"
    },
    REMOVE_BOUNCE: {
        name: "Remove Bounce",
        description: "A normally bouncy projectile stops doing so",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            bounces: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAV0lEQVR4nGNgoAX4Hxn5Bh+fJEP+k6MZBqii+T8lzsfG/w8FcEmCEqSq+49DkhjDcSomSTO6JkKamRhoCf4T4XQmSi1hLC8vJz2AkADLmTNnKHIBxYEIAEarUCWHXRGAAAAAAElFTkSuQmCC"
    },
    HOMING: {
        name: "Homing",
        description: "Makes a projectile accelerate towards your foes",
        meta: {
            action_type: 2,
            action_mana_drain: 70
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmUlEQVR4nGP8//8/AyWACZ/kjcJCgqYzYnPBGVdXsCCPjg7DlytXwGImu3czkuQCE6gGXBpxuuAGkrM1+vsZ0fkYJvz//x8Dn3Zx+Q+irxcU/EfmY8NMuJwGCwcYDbOOKBf8h2KYCzDxP7g4I03TAX4AsZkJmUMaYGREMoCRkTSDEOoYaRAG+EzElMNiADbvwNgwOSTVlHoBAH1mnG6Sf1bBAAAAAElFTkSuQmCC"
    },
    ANTI_HOMING: {
        name: "Anti Homing",
        description: "Makes a projectile accelerate away from your foes",
        meta: {
            action_type: 2,
            action_mana_drain: 1,
            fire_rate_wait: -20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9klEQVR4nGP4//8/AwxfLyj4j8wnBjOCiDOurv8ZGBgYeHR0GL5cuQJiMpjs3s3IQARggjFgGojVCAOMIGfDOBr9/Yw3CgtR+ARN+P//P8NpF5f/yGEA4xODmWAGwcIBRhMN/lMjFrADkAQjShjEW0vAFS88+gIi959Im+KsxP/ff3EAjI9fn/QfxCfgAoQrQDY3rlvJgAxevL/EMD25FRGI2AGqF0AgISUWrLmitBvMZ8JvAKbzFsxZzLBs9UKGju5SYgxgBLsAFGD1QeFgm0HAyFIBrgLJAHTbUPkgQ0B+Bhmyv/4IsjL0EP+HNy3AQp/IWCAMAJYqPGsZEfCLAAAAAElFTkSuQmCC"
    },
    HOMING_WAND: {
        name: "Wand Homing",
        description: "Makes a projectile accelerate towards wands",
        meta: {
            action_type: 2,
            action_mana_drain: 200
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoUlEQVR4nGP4//8/AzLWL5T6jy6GDzOACSiAaP73H0TDxIg2QB+qGYZhhpDkgr4jX8CaQTSxLmCB62ZgYFi4Vo2BgeEWlCYS/EdyAQjUbxdHESDkAiZkxTB/IwciunVYXaCPpAHZBbijFBTQWGKhHqoZRJMUC/9hHJLCAOIKRvRAJBUwERVQeNQw0sAF+FyBKY7DAEZGVA0wGiaOpJJSLwAAvjxEuowNijEAAAAASUVORK5CYII="
    },
    HOMING_SHORT: {
        name: "Short-range Homing",
        description: "A projectile flies towards targets when near them",
        meta: {
            action_type: 2,
            action_mana_drain: 40
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbElEQVR4nGNgGAUUA0YQ8f//v/8MDIyMeBXikGaCSUPo//+xaQTh6wUF//EYAAPYrTnt4vIfmcZjAKYrQDbz6OgwaPT3M4JodJcwQrRgcx1IkBEEwDaDNH+5coXBdM8evGGFE+AKg1HAQDkAANJwJZqt4zVfAAAAAElFTkSuQmCC"
    },
    HOMING_ROTATE: {
        name: "Rotate towards foes",
        description: "Makes a projectile turn towards your foes",
        meta: {
            action_type: 2,
            action_mana_drain: 40
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApUlEQVR4nKWSsQ2EMAxF49QMcgUlI8A+MAkDMQKUkY5B6P8JhJEhdkJ0lizLH/z1YpkAuH/Cpz6uw5B1J41g6bpDrOrabSEcWjNNVETQnAPWoEmwCuzPONKzjxwARDm3Lfb67XvIXktvofEeuJoBw1kSiOS4NCq8g/1nen0HSkRL9GdljOKz9MI5wisxcMqwRXPTUztgqufwTU8ZaE/i/tJzBNn4AXTNj4GwJYihAAAAAElFTkSuQmCC"
    },
    HOMING_SHOOTER: {
        name: "Boomerang",
        description: "Gives a projectile a path that curves towards you",
        meta: {
            action_type: 2,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjUlEQVR4nGNgoBVoDFn6nxh1TLg0H729mShDmLAJvvx6n+Hao7NgmiwDxLkVGfws4sE0yQZkebaAnQ3TDOMTBbKgintrbf7DMLL4////MAxjxGYQLPBAYTBtew2GGpBBjIxMYHEWbAYQCjyYZrxhAAO4wgDDO/+x+I8s8J8Ig6hmGQOpNpBsM0wDTZ0MAMiQWSOQB/4AAAAAAElFTkSuQmCC"
    },
    AUTOAIM: {
        name: "Auto-Aim",
        description: "Makes a projectile turns towards the nearest visible enemy",
        meta: {
            action_type: 2,
            action_mana_drain: 25
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsElEQVR4nGP8//8/AyWAiZACRkZGOL5RWPgfmQ8CLMTYctrF5T8623TPHkaiXAADMA0wGgZYGAiA6wUFYBuv6+j815wwgRGZD/IhAygQ8WFkZ8M0w/ggeSYGIgFME3J4gMF/Ai74jxTPMBcg62WkZTr4T6kBjOQa8J+BBMBCrM1rLC0h8c7A8D/k+HG4GmQDYAoYFi1aBGbHxcXB2VxQzegWIHsBWQIbG+4CFOdSGo0A1Rt7EmUovPsAAAAASUVORK5CYII="
    },
    HOMING_ACCELERATING: {
        name: "Accelerative Homing",
        description: "A projectile homes towards enemies at an increasing pace",
        meta: {
            action_type: 2,
            action_mana_drain: 60
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApUlEQVR4nGNgoDX4//8/HF8vKPiPzAcBRmIMOOPqClbNo6PD8OXKFbC4ye7djIyMjAxMxLoEpAGZhgFGQhpBzoaxNfr7GW8UFsL5mhMmENQP9sJpF5f/yGEA44MAE7FegIUDjAb5Hydw3v/q/5IX/+EYWywQ4fR//0EYZgAuwIRLgpGRiXAA4XM6A5IYSYb8hzqbZNsZ0FxCsgZ8thIV6iTbSi0AAK0pkGq0ZgwQAAAAAElFTkSuQmCC"
    },
    HOMING_CURSOR: {
        name: "Aiming Arc",
        description: "A projectile rotates towards the direction you're aiming",
        meta: {
            action_type: 2,
            action_mana_drain: 30
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvUlEQVR4nL1SWwrCMBDM9tuDKPRTb9Depz1Je5/2BvpZ0IP47coERteQTYuIA2EfYZfJTEL4BVQ1HpvjXLtObZ2DcCgWIjG/tG1s7Oo63Jcl3h2nSXCfovJYYcBGD5IyAG1e7odBbn3/qg/jKJs0ODeNWg1Y51B51KgD439cKCHnQPEJHqzIZoGuUqCYyBnNApG1RbATHwtWIpKJcPsWwBH+ztM8v0WxSqs+PpRP+6kGBQZo4mmMZshx5Cs8AeOfvfuGeIBbAAAAAElFTkSuQmCC"
    },
    HOMING_AREA: {
        name: "Projectile Area Teleport",
        description: "If a valid target appears somewhere in the proximity of a projectile, the projectile will teleport right on top of the target",
        meta: {
            action_type: 2,
            action_mana_drain: 60,
            fire_rate_wait: 8,
            speed_multiplier: 0.75,
            spread_degrees: 6
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvklEQVR4nGNgIBL8//8fjK8XFPyHsUGYEZeGuRf/T4Wxk/QYss+4uv4HsXl0dBi+XLkCFjfZvZsRq0ZkzTDbT7u4/Ed2AYzPiK45WZ8xG91QkCYYW6O/n/FGYeF/vE5GB/hcwMRAAoCFA4wmynYQQA51mAuwGvAfTQbEx1SNqocJRCTpMWSBaEZGRkYcBqFgZMAEIuZdYpiGLAgzCErjTCtYnUSqWiYGaoK5RLiCoBpsSRmfOFGZCQSwJXGqAADMfq5j7SeTKgAAAABJRU5ErkJggg=="
    },
    PIERCING_SHOT: {
        name: "Piercing shot",
        description: "Makes a projectile fly through enemies, but harmful to the caster",
        meta: {
            action_type: 2,
            action_mana_drain: 140,
            damage_projectile_add: -0.6
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdElEQVR4nGNgoAb4/////xFsCCMuifsvDoANevH+EoOlZh5OdUz4NIOAhKAew/Hrk/6TZAAMJKTEgl1QUdrNQBK4/+LAfxjObTL+T7ILFCUcGEE2g4CRpQID2eA41GZ8Lhi4dPKfEsNAmmEG4I1GfC6gGgAAuYRVHjoX1wMAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAVUlEQVR4nGNkwAOmexv/33HmAU75jS/fMjIxUAD8xYX/U2QACDCNGsBAlgEbXrwBY7gB/////4+NzthyBq4BmUYGjJQkJLK9gAyYGCgETCPcAFB2BgA1yieDTmP9mAAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAdklEQVR4nGNgoDq4Gxl5NzISzmUiVT8jfrPRRJSXLyfZBnL9MMHGfIKNOVYGGmBB5gQoyKExIO5mwNRw4MlzNAYuwAKxHVkIvx4m/OZht4EB1WAHGUk8lqB42kFGkqAeaExjDUEGBoaCIyfRRKB+wJTAJUgyAAAsoSqailzTEQAAAABJRU5ErkJggg=="
    },
    DAMAGE_RANDOM: {
        name: "Random damage",
        description: "Randomly increases or lowers the damage done by projectiles",
        meta: {
            action_type: 2,
            action_mana_drain: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8klEQVR4nGNgoBAwEquwftmJDWCG0luGRgvvAJJs6ao/seE/Eqg/0QYxjBhwAKp554n6DdOhGNkQJkIGcDBcg7MzLRrhTtdm+Em8F3aeqIc7uf7EHLALTuxDiIHBBBvz/yCMj12/7wSGZiYGNBCgIPcfGxukucHR3P/k/IYXFk4Ir7DAGAeePGfAxoaDcwzmDI4MDAwPGU4iC7PAnImuHt2QxhILSfXPJzZENSJsx+oFXGBZ/YkNkQ3m/ifq56EEHgsuWx1kJFH4UY0WAQwMIBckBeA0gAGqEb8hqACeF7CFAzIoOHISa76BhwEuBYTkKAYAszGKf50qIKgAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLElEQVR4nGNgoCb4r2XzH4ZB/NMGBtdgbJg4SAynZgYkgKwQXW66llYzjM0CY5xh+3IdRB91gSg23XOEEcZmhLJvfPvOkHzsLKMJG1swAwNDLUiOCW7Ar19rYWyQwgA5GbAGEACxQbQGFyeYb/KLRxPFBacNDK6ZXrigBWKvffYa7tSrH76AMT7AgmwizMkQIMqAbiA2wITsf3QA8sK9L1/hbPTwgrvgDJL/kW0FaS5VU2DovvUAxWBk9UxgL0BCFcWWYClRsGYQANGbn7yEGwxTjzDgFyQMQFEEMgSkGR2ADNEW4MGIBSaYn2CJBWYItvAAyWELKwZQykJOwvgAcvIGAXhKZLx2hBFdEuQyUICB/Ax39i/csQZP4yCDkPMCjA2jkfMCToBNETaNAIvvteckj54PAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7klEQVR4nKVRMQrCMBR9ldxBSCc38Q4qVIQuju6OnkD0BtLFK7iKY5aCGFBHD9DRKQVPEfmlkVgT2+KD8F9+/vv/kR/AATWbDQ0PhbjV5T9ARTrLNJ37bqeNiCLdzZvJs6qYJ8k1X61SAHsO9PIouipgRJFLucmlfABYUB3lGdzYh0IciqbAuBSnoRDbchCF+MuBhUVZRA5iLmXhQAFrAIUD+KBa/kFghMfpWFOcny6Bj7u2wKoOloO+dnFbZIMZclZPuHgdmG3fRtMmncajfjlwTZ2E3UYuWDVBwjZNvtboA63RlX//ga+g7u1vvAAgXZsGKXuyNwAAAABJRU5ErkJggg=="
    },
    CRITICAL_HIT: {
        name: "Critical Plus",
        description: "Gives a projectile +15% chance of a critical hit",
        meta: {
            action_type: 2,
            action_mana_drain: 5,
            damage_critical_chance: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwklEQVR4nGNgGLTg4sWL/0GYkDpGfJKLFy8GG/D06VOG44cPMijLSjP0zZiDoocJnwGxsbGMMM0gIKagguJCgi4AAX9vT7BCS1t7hqBv38BiJ1VVGcxv32ZQa2pixOuCoowUuGZpaWkMzSA+Ez7Ndx8/Zdi4dTtjRUUFI7Lm0ydPwtUxYdN8YkM7XDOyuJ6eHopmnDb7Q/2NHGC36ur+L3V3B4vDaKw2+6NpRgY4NeKymWgDijJS/sNCnKYArxcGDAAAoCZmghRVpm0AAAAASUVORK5CYII="
    },
    AREA_DAMAGE: {
        name: "Damage field",
        description: "Gives a projectile an energy field that constantly deals 3.5 damage to nearby creatures",
        meta: {
            action_type: 2,
            action_mana_drain: 30
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeElEQVR4nGNgGAWMxCh6M+//f2S+SBIjXB8LMZpPbD8bgS4GM4SJVM0gABKDuYoJRPz/j+pEdD4IeK8yXgHC6OJMIIKREeIcmEYQH8bGpgkZsCBzYAbB2CBnbg2DeAFGY3UBLgAKKAtPTBeAxGCByMhAYTQyjAIGAH9KP5cryxq4AAAAAElFTkSuQmCC"
    },
    SPELLS_TO_POWER: {
        name: "Spells to Power",
        description: "Converts any nearby projectiles cast by you into extra damage",
        meta: {
            action_type: 2,
            action_mana_drain: 110,
            fire_rate_wait: 40
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsElEQVR4nGNgIAH8t3H5T5HClSLSJ4g2bCWSYhiYKqtUgE+eAZ8GZD66OF6ATTFJBqBrJEvzVFmlAlCg/U+ZDMZYDbkqKAkOVZAkiA3WYOPyH0UzDCAZwgQLUe33zxlBgg5fvveD2NeuXgUbnCWv1I/PdYyEnA4yUEtbGyKg4Q+hb2xkYDyyh5GgAcgA2d/Zj+9NYKBLNE5FUoiLjROgJ1V0TXiTMnpGwaaY6JxJSDEAentr4WwmRoMAAAAASUVORK5CYII="
    },
    ESSENCE_TO_POWER: {
        name: "Essence to Power",
        description: "Increases a projectile's damage based on the number of creatures nearby",
        meta: {
            action_type: 2,
            action_mana_drain: 110,
            fire_rate_wait: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABfElEQVR4nGNkQAPbdh38D2N7udkzMhAALOiaK5smMrjYmTLsOXQazEc3BN0CFmTJvQeOMbTX5TOADAHRID4ykDeYnAsSAxkOsgTEZ0JWsGYbTx7MEBC9dJvZRnQng8RAmrHJgUFxVft/kMkwmgELkDDYu4GBWCCPZAiIDcNEGwACIA1+k3/+n/vuPxhrZxyGByQcKPncPAuite235hrHPD1rXn71P0gTSDOIDdIIAyA2zBVMMD/d26JuDNLMIWuQcHaJtPGfpwLnXj65w6CfnDZJXEaFARdgJOR0EZ2gBBbpD0YgQ/yj2cDiG5f+YtiUyw7Wy4Ku4SeDljM7w7W9Dy/kTgaJgVwDk7t5Rm4SiH1zoT/cYkaY5PQuPbAkCGSWXcoDGfTignMAssHzulj8YWpgKZQJJgBKfTAa5gpk14E0I6uBJWm4AaDUhUzDvAADuJI5OAxAitcwgNQfmwRKzuwM11ACEybv7MAwCWZBb1slwZyKAUDJG5kGCQIA/dPRq4hUeP8AAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzElEQVR4nGNgoAa4Gxn5P0BB7j+x6kFqQXowBAKIMASn2gAiDCGoJkBB7v8JR8f/E2zMwQpANDIbJIeumQmZs+HBI8YTv78xWLBygQ1DNhgkBpIDqUHWw4LuigNPnjMcYGBgqFBUZui4fxcsBmKDNGMDLMgcmHNBAKQBpBEEQAY5yEhiNYCJgULAhE0Q5A2Qn0E2I7uEaAMqoH6GORsWsCCD8RpwAGoztgADifVaWqPEDooBAQpy/0EKYCGPDRQfP4rVEMqTMsWZiRIAAA2/iEYUOikhAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAeklEQVR4nGNgoAW4WVZGmoYPJ0/C9TDiMVU8OBhZ5OXatepdXSTbQBS4ial6jovmHBdNrAw0wITM8VIQRmNgAhYIte7OKzQGPg1zUK3Gr4cJv3k4ncSAZHCQihgeSxAaIEoJ6oHGNNYQZGBgSNlzHU0E6gdMCVyCJAMAJm8xtGV/N2oAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAfklEQVR4nGNgoBfInn3zPzJNMph9/P9/sgzJnn3zP0gzDJPtktmUaAYBgpo1Y+b8B2F8bGyACV2AXyfgPzY2LsACYzy7sIUBG5soAzSxOJFYQ5iItgqfC7DZKmXgQ5QrWNAFQBpJMYQRxsAXVSBwfUkKXC0ygIcBLgWE5CgGACBEWnS4qPcGAAAAAElFTkSuQmCC"
    },
    KNOCKBACK: {
        name: "Knockback",
        description: "Gives a projectile the power to knock back the foes it hits",
        meta: {
            action_type: 2,
            action_mana_drain: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAs0lEQVR4nK2Quw3DMAxEySCAkUJ1eneZw95G0DRBtvAI3kMzqE6hxgADkYZMfQyk8FWUfdS9E8DlIiJ9vP1j0kJoRESIWK0hf+kkaHc2gVruJLQm4ITiiuht9LbrprLPXdzDOPEAj9fnDIx4rjt8309dse2GGSn/29bFuBC9lTQocxKSSKiS5sQ2jJMQUvlcaUEwtLZ1gXnvU+GlDsaFasG4kHkq7Uhy5TFzq7Odo3HLdoF+sc5hVvDLNAMAAAAASUVORK5CYII="
    },
    RECOIL: {
        name: "Recoil",
        description: "Increases the recoil when casting spells",
        meta: {
            action_type: 2,
            action_mana_drain: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAXklEQVR4nKWPsQ3AMAgEgSUyJONkD6/DICmQG3+k2FKiNM47VyLuH0T+AGC6Y2yoveKnJfb9mFsAoKpjwMiCC8LBYzvDiR5Z5ti3FS3DCZN4ptOzM7zVQmitFk5Y5wQ9TTmSuYLkZgAAAABJRU5ErkJggg=="
    },
    RECOIL_DAMPER: {
        name: "Recoil Damper",
        description: "Reduces the recoil when casting spells",
        meta: {
            action_type: 2,
            action_mana_drain: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAi0lEQVR4nGNgGFTg82Rxexj7+/n4+WQb8J0EzUzImnlzXx5Elvz///9/kmxGt51oA3BpBoEjm+f+J1szDCzrLv5PtAH/oc6+f34n6YagA5BGkEEwNrYYYmIgABQN3RlBhjAyMjIykAvuQ12BLX0wEWMAyBXIfORoZyHGAJjNnIYLE4lRjxcg204VAAD1OXZoX+QqsAAAAABJRU5ErkJggg=="
    },
    SPEED: {
        name: "Speed Up",
        description: "Increases the speed at which a projectile flies through the air",
        meta: {
            action_type: 2,
            action_mana_drain: 3,
            speed_multiplier: 2.5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAQ0lEQVR4nGNgGKygZ/9PIgWh4P///5jSWAWh4D8YoEljFUSRQ5PGKoguhyyNVZCJgTzwnzwn9ZDk6R6SgpXkiBtMAAAA1YhrMG72ygAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYElEQVR4nGNgGDlgxc+e/6Qo3oMu9v////84DVnxs6cSTfESdENABuA05P///8XIhoAMQDcEZgBWQ/7//1+MbAjMAGRDkA1ANoSJgRrgP6VeWEFpIFIcjQxEAIo0D24AADB2rFWe6EcVAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXklEQVR4nGNgGLngVaDVd2IVnsCm+f////+xKZ6Mrvn///9LsGnGMOBVoNXk////F6NrRjYAWTOKAa+gmmEGIGuGGYCuGWYAEwO1wCtKvECVQKRKNDKQAIhOSIMfAAClEp3LCm7+tAAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzUlEQVR4nGNkwAOmexv/33HmAU75jS/fMjIxUAD8xYX/U2QACDAhcz63c/+nyADeyq+MMPb3w/5gwzxMFMD8JQU/sBrAiM90kCGcthsZQYEJ4mMLUBZ8GpFdAgYdmIYw4nXB83aE5jsn4Mw/R/YwxEzgQLjg/////xkZGRmR6R9HArAauqDjCcOOMxDN8EBkZGRkxEYj2w7SCMIJFTLEeeE7kt9hGiNCjmCoY8KmGZQeYIEIcfIDsGZsUcmIywUgQCgv4HQBKWBgDQBlZwCV+F9ocyn0FQAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEklEQVR4nGNkwAI+t3PXg2jeyq+NMLHp3sb/d5x5gKJu48u3jCzYNLPYuDQwqFgwfGZoQTEEHfiLC/9nwiqjYsHAcOcEAzGABZuzQTajewGvAZ8hmhtYbFwYPrfvQdH4uZ37P2/lV0YQ28NEgQE9HJjgJtm4MPw5sgfDBpjmhAoZsGaQISAMA4zYvIDNqd8P+/+HsRd0PIG7hJGQH+GaQQELA3dOMESEHEF44f/////x0fgAE9gZjIyM+GgUcOcE2AsoBmADoNBHEQClC6hm5JhggiquhwUiTCMs9EF8TtuNYDa6ZhBgwZIG0GOmAZdmsAFgAksaQM8TSyCBjmkAOOm2QzRjpAEi8gTedICcuHBlZwBP754gjca0cgAAAABJRU5ErkJggg=="
    },
    WATER_TO_POISON: {
        name: "Water to poison",
        description: "Makes any water within a projectile's range turns into poison",
        meta: {
            action_type: 2,
            action_mana_drain: 30,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAr0lEQVR4nGNgQAIySYv+M5AImJA5ogqaDBQZoCUvSr4Bhk2n/yPTZLmAHFcwwWyFabTTkyfJFUzIHJBmmCv+//+P1ZB0k7XYDTdsOv0/euEDMIaJwQz58LANLtbujpAnCvwHgW8H4Jo2RKIawIRPM9jm7wcZGDjtUWxHdgULPgME5KsYsYlrChHpAmQAshWmUV5TCu4KJhRVRACQZhCAGYbVibgAsisCliuQpJd2AAAaIUhNAl/NgQAAAABJRU5ErkJggg=="
    },
    BLOOD_TO_ACID: {
        name: "Blood to acid",
        description: "Makes any blood within a projectile's range turns into acid",
        meta: {
            action_type: 2,
            action_mana_drain: 30,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR4nGNgQALlQkL/GUgETMgcUw4OBooM0FJVJd+ANVJS/5FpslxAjiuYYLbCNCqFhZHkCiZkDkgzzBX////HaohtnxZ2w9dISf2/Zm8PxjAxmCEfHrbBxVL36ZMW1f9B4NsBuKZJDyL/4w1EZAC2+ftBBgZOexTbkV3BwoAHCMhXMWIT11XSYmBguEjYBcgAZCtEIwODvUwS3BVMKKqIACDNIAAzDKsTcQFkV+QpLCdJL+0AAMcbRGtRlPKBAAAAAElFTkSuQmCC"
    },
    LAVA_TO_BLOOD: {
        name: "Lava to blood",
        description: "Makes any lava within a projectile's range turn into blood",
        meta: {
            action_type: 2,
            action_mana_drain: 30,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvklEQVR4nGNgQAKnPfn+M5AImJA5EhoiDBQZIOWtRb4BjwuV/jPpuYFpsgyQgtpOqiuYkG0HC5DoCiYY49+lXXBBkCv+//+P1ZByISHshj8uVPr/d48PGMPEYIZ8eNgGF1sjJUVaVP8HgW8H4Jqu2dv/xxmN6ABs8/eDDAyc9ii2I7uChQEPEJCvYsQmrqWqysDw7BlhFyADkK1gjQwMDEphYXBXMKGoIgKANIMAzDCsTsQFkF2hdfAgSXppBwBr00oQBfEOhQAAAABJRU5ErkJggg=="
    },
    LIQUID_TO_EXPLOSION: {
        name: "Liquid Detonation",
        description: "Converts nearby nonmagical liquids into explosive gunpowder",
        meta: {
            action_type: 2,
            action_mana_drain: 40,
            fire_rate_wait: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVR4nGNgQALKxln/GUgETMgccRldBooMkFU0IN8AK//p/5FpslxAjiuYYLbCNOrp62G44nM793+iXKCnrwd3xf///+GaeCu/MhJ0ipX/9P/hBcfBGCYGM+TDwzaiXYQBQIb8/3bgPy7NjAx4AMhmflErBgZOewZGRkbG74f94Zo5bTeC9TIyEAm+P29H2HznBJzJgksDyKksNi54DQW5gpEo20FOV7GA2w5zPrKXUGzGZgAM49SIC8AMRNdEUlTiAwAE32GAL0gBrgAAAABJRU5ErkJggg=="
    },
    TOXIC_TO_ACID: {
        name: "Toxic sludge to acid",
        description: "Makes any toxic sludge within a projectile's range turn into acid",
        meta: {
            action_type: 2,
            action_mana_drain: 50,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR4nGNgQAKpfVr/GUgETMgcLQNWBooMMFDSIt+A/n36/5FpslxAjiuYYLbCNGrJJJHkCiZkDkgzOa4AA5Ct+x9EgjGI////f6yuMCpXIj6M/kMN+fCwDa4pfKnGf7yBiAwYGRkZQYbwi1rBxTRl1RmINuADyObvBxkYOO1RbEd2BQs+AwTkqxixiUNccYOwCxiQAMhWmPNFRVXgriDaABgAaUa4goEBqxOJcUWD3UaS9OIEAJL7QXfjUHlmAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlklEQVR4nGNgoAb4//9/339U0EeqAf/x8fEBJpJsooUBLFC6H83Z/QwDDv6TEJAEDfnwsI18w/6DwLcD5Bnw4WEbWDOyd2Z3pZPvmtld6f9rMvz/IxvEQqzmrcva/yuoCTIwMJwH81PLZjKCaKISEkzzsX3nGaRkFBhgriDKgCRf+//PnjwAa3547wUDyCBLOwsUQygCAJklYlxZ/OJhAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAATElEQVR4nGNgoBa4vOU/HJClmQEPn2jw/////2RrBgGKNKMDssLiP5omGP/DwzbyXfYfBL4dIM+ADw/bwJrJ8g42MJpWqASoFiMwAADCHWEXKQ7oCAAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7klEQVR4nGNggIL6fSc2MJAL6ved2PD/////MEPql53YAMYntmI19ET9PEzxeqjmrnqIYTBQf6JtA7pmkDhWQw5ANe88Ub9hOhTjMgTGZkKW4GC4BmdnWjQGwNjaDD9RLLJoTILLYQCQ7TB2/Yk5EOfuQ4iRHLAnKNI8r/45IbVMIGJZPVoaOMdgDqYfMpx8NFf9P7qm1xcT/sPFl0FDHt0QZD5Iw+VE4f8YmrEpRjYUFl0gDSCN/3/eg2uGGYgTnKg/AtcMUgzSDMIgg3DrYkCNRhhAdwFOQ0CaYSkRWRymAVuAEuUCZJcQNIBUAABUlOZ8N/rzNgAAAABJRU5ErkJggg=="
    },
    NECROMANCY: {
        name: "Necromancy",
        description: "Makes corpses of creatures killed by a projectile rise to your aid",
        meta: {
            action_type: 2,
            action_mana_drain: 20,
            fire_rate_wait: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkklEQVR4nM2S0QnAIAxEoziDixTcoeC4QncQuohLtNxHJA2J9NNAIK135pFItGVcrT1jjE/in6UN2niUsrz87p3OWqcvcIEufwlzztMX9QGn7IjUpFwnKdSoCIlrUUb5oQXS7EWUYnTlqXsGTequELVeo7XO5K3RopDDNWewwsTF3mMiGSzS6J7eJGAKIPNw940XnwWFTM3Dnt4AAAAASUVORK5CYII="
    },
    LIGHT: {
        name: "Light",
        description: "Makes a projectile illuminate its surroundings",
        meta: {
            action_type: 2,
            action_mana_drain: 1
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAt0lEQVR4nJVSsQ3DIBC8OC5SeZFsgCImoHHW8DxegzRMEFnegEWoaJCi8PA4YFnxNcBxB88fwElcWmpSkuezeR8ZJiWf9ysAoQYAq3EAtA1bW1+pSUrIcwdI9vSt+vZ4sccvYySLp6ONXTUvhRqo1GTgV1bqipyiLN2wLX0XIguS4X90NFAHD7BmwdfALfPL2Ep9Jn+6pG2gMyoPLVfjtA3ElKTb4LiYbdgl6UjJmNHR1zj9+U7jA/mKVZWejtwqAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAd0lEQVR4nGNgGADwuZ2bOuo+41Lw/bA/pqLvSII49WA1kgmX8d8P+7PYuGAazIjdhuftUNadExD6z5E9vJVfGRgYWJCdy2LjglU/p+1GAh74/rwdhJCcx4AM0DwH0gBGhAOHAaYZa8hSG+ByDHo8wMGfI3uoYzUAcpk9g8rx6iwAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1ElEQVR4nGNgGPTg+2H//zD253ZuOBsGmJA5yApAbBgfRvNWfmUEG/q8/T9WA3ihCrDZBBMDaeaUrGTEagA6YLFxYWBQsYCzQZr/LGgBewtmIBO6JpgEWDMOg/4c2QN3LSO6RhQNd07ANYLBnRMomlFcwIskCAcwzSCDkAxHjhkmDE1ItqEYBLUdBDhtN2IPRN7Kr4xwv8O8gARAciDNOAPx+2H//2DToU6H2YjuJZAaDC9/RgpEZBtAUQfzM4hGTkREAbhBSAFHlAZsfHRXkuQSXAAA/CGGwoqpr+kAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAsElEQVR4nJ1SsRGDMAxUcMkQzELl8xS0rEWTFXyuMgtD+C6NDs4RKG85TayG11n/rzcm6qu8TJ1MrLxMKJQ/+IG984GIOMVx201Ldw1m+pgL0Ba1K4LzgVMsjq8i5nw45t+pBvnItJSOCnA+4EpVBjnWUXGjW05ol4P2rQODeUXQoCqseagl6D2YZcw+hA5yUUa+DX0Rxm3nFNWdUxRhDPD9G4rwLQh+P1cM8Ef1v84TpHJlj5+UodYAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA0klEQVR4nKVSMQrCQBCciM84sD3wymssBSGWfiJFKgvLFJIib0iRT1gaECxtUiZwD8hDhIxslrMyTnHcTnZ2d/YCLEOxveJ/1GlTp42E580FQKKbHE5HAKHr8zaTEMC+2knaSrKNMaHrAVjvGOpWiATymRqGvIfpFCTatK6qkbdZLIgWxekftzurWO/ExmckANVQRuOZCdY7AM/iRXKtO0ROxnGMGHx7YD1ZV+h6ysTGPJLMzSTKrHc6exZUQykWmc2TZLwVvjkpYXnXT/Yblv+dbzqXY5UdAAhyAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8ElEQVR4nGNgoBYo8ZH6z0ArsCJX/j8IE7SwxEfq/93pNv//X0iEawCJgfggDJJD18OErNlEkZXh9LXHYL6plixc7N7x22AxJUtVsGuQDWCBMUAKYWDl3H1gA2BiMENhNDJgRPcTskHYQMTkh4xYvdCz5RlY4sz933AcnuwExjA+CIDCAqsByIaAALLfQWwQBnkL3RBGBiQACzR0ALId2QBQWMC8woSsGcYGKQQ5HQa6W9zB9PSt91A0oxgAApneSnCFoJiA+RvEBhkIcgXeQJy+9R6YDVII0wyjS2t2IutDTYnIHBAbGx89AVEEqJrxAFTwkHKrAmz9AAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAxUlEQVR4nJ1SWw6DMAxzdqJKzY3ox7hTOdGCxIEmZRKGUB5j0vyVOg87bYE/8Hy9L5kzv8DdAeScD4yvwBzv+s/DWMeUrzEAibSI5JxLKQDMrNYqsmRbPNrqlJKZAai1llK6rou6vBreFDibmKYpjn3ftwqbqLurakqJR1WlNwDDMOwstRXTDDKsJmLvTYEbm5mqmhldHfygbWBPWOLqvIxxHINcLPESODgsiYi7h7H2NY6v02reZHc/4jL1tefmR/6iTvgAct6ZgLdcUP0AAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA30lEQVR4nKVTMQ6DMAw0EcpUqQMT6geY+FcXJgaewMDE0n8x8YGKiaESE+pQXYirYBwWLCFjO2efHYfooiSxwDJNr9C+5flTO5fGgEPXqn6ZKJGHhq5dicgG7p1d1s0uiZHge5FVHuTAwnbMwvaM6MB+xrlnEDRswYgOLSxb9dC/ysSxVlIlKdN2ko4DzfToM3pX0JKN0cCgjQ/gb1ESwAh6vWNntBn4KhYVmQGCGoOEf7Q5cOVQkKSsG8tXaZQZ/NmIyucMSGfhmIS3IBfp8BZiqwwg5HSVtUQsscd0WX7Le3zzT8ldCgAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/UlEQVR4nGNgoBAw4pL4+OT3dGQ+vwxrJlEGfIRqvHf2PYq4krEgVoMY0TWja0QHIIOQDWHEofkXFr1s2AxhwaLwl4GfSB6IcWHTm0nIbHSD4C74iLAdrvnOnbsMKirKGKZDDWKDuYIJ2WYerY9gzSCArvnDkkwGhi2lDAZMnXnIXmRiIBLMmXMETPf07EARZ0Jis325xj8J5HQQhgEYOyXFhuHDhy8MJSUemAbwy7BmwuJZ5EQPA7JBID7I3ytWnGF4wNc86cK/8klKxoJssFhgQneqgAAPmN5TEAE2CMZHdimhhPQLqggrjTMhIRsCoslKytgMggFcmYliAAB5Vn4KhKmVnAAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlElEQVR4nGNgoBAw4pL4+OT3dGQ+vwxrJlEGfIRqvHf2PYq4krEgVoMY0TWja0QHIIOQDWHEpjkpNzYDm+Z5kxfPQDeECV0RLs245FhwOR1mGzbNILUgPSBXsOByJjEuwuoFfJrRDQcBFgYiADaNeGOBEMAbC+heIDoM+GVYM2GpDR/AmZBggKKkjM0gZBcSdB45AACQTFJx5mR+YgAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwElEQVR4nGNgoBAw4pK4//HfdGS+Ij9TJjZ1LLg0TtvwE6s4ukGM6IrQNXqZMWdsO/V3BoyfFcCOYggTPs2pPmwZ0mLMKGIgNcjeY8LmL5jNDEQAJmy2gzTDbH766i+GJmRXsGCzGdnZIHaqD8I1s7f8gocHVi9Io/kZGWBzDQu6ALIN6F5Bjg0UFyjyM2WCogeXa9A1I0clEwMRAJvNKC5gwOEKkM3ogYaekDDyAq6kDDMcb1LGZhCyC3GppQgAAJmyZvQsLzZAAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyUlEQVR4nGNgoBAw4pK4dP/1dGS+nqJoJlEGXIJq3HH4Ioq4h60+VoMY0TWja0QHIIOQDWFE1yyiZ5ax8toXhnAtHhSNMLE3l07NQDaECd0GAyU2sEIQja4ZWQzFBZfQnO4SYJNx4d4vsAZkGmQ7uleYsPkTpBgGYJoS9XmxhgkLNkGYUw152Rn2QOnuxXvhtiMDJmyCezYcwaoYpwF6iqKZsHhGBrhsxRsLMAByNiGDUAzQw+EKdIAzIcEARUkZm0HILiToPHIAAAVYX0oLMOlCAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzElEQVR4nGNgoBAw4pK49HPLdGS+HrtPJjZ1LLg0Hj1SjVUc3SBGdEUwjTJKMhnIck/uPZkBoq1tWlEMYcKmGQZ8FLaAMTIAqUH2HhMDDqChYICVjQ4YkW2HORumQYWhBUzfYagB0zceXIB7B+YVFnQT0Z2MbJCKAgPDlgc+KHJMDBQCFnQBkA2EvIA1Gi+hxYKLk08GsgF79m0BRyN6VDLhchqybdhshgEmGANkIshkdO+gBxp6QsLIC7iSMsxwvEkZm0HILsTpD0oAAE2EZQOnUwF0AAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkklEQVR4nGNgoBAw4pJY9vjrdGR+lCx3JlEGLINqXHjyJ4p4vDk7VoMY0TWja0QHIIOQDWFC17wjWDADhHEZAFKD7D0mBgoBIy6nx5uzZyw8+XMGIa8w4XHqDJAhMMNwqWPC5zxkQ8gyIJ6AZpRoXEYgCmEx47H2/QzkqGQiZAPRLmAgMyFRNyljMwgGcGUmigEArRZSFxs+ZvsAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA10lEQVR4nGNgoBAw4pL4fj5+OjKf03BhJlEGfIdq/Lh8M4o4f6QvVoMY0TWja0QHIIOQDWHEpXkqR0WGlpYaw7VrtxhAtOO5pBnYDGHCZgtMMwjA6P1G8zKwqWXCZvvDh/fBNsMAMhsEQGphYcWEzVR5eUWwzTCNyGysLkB2OrILkDWCxAgakP2jAxxQXeIrwTRIM8wwmBg6YCQlCmGurAq8OgNnLJS9DAd7Y0ngqQzxzrdgDGKjuxLDBQyUJiRkQ0A0yCCYzTHrzWYQlZSxGQQDuDITxQAACbaDqSx0DT4AAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwElEQVR4nGNgoBAw4pK4/fz3dGS+qiRrJlEG3IZq3HPhC8OVB3/AYjoKLAwuBjxYDWJE14ysER3ADEI2hBGX5oIAAQdkzRM2fDiAzRAmZEXImi88+MGAjGEGoruOCdl2ZM1vPvxhOHDhBxiD2MiGgNTCwooJ3XZsfHxyTAwUAiYYAxQ4yACZj0+OEcYA+WnChg8o4YAMDBQ44DFRECCAPRZ0oCaDFII0IGPkaKRNQmJAMgREk5WUsRkEA7gyE8UAAMCjj+1mxMqsAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9ElEQVR4nGNgoAb4/////8FlEMWuAAFi1bPgk3zR9X8LNnGJMkYfnAYwMjIywjTfPP30MUz8weurKAbDDGHCZTO65k0WHRkgDOLv3LbrMcx1TLicD7MRpnnP9HNgvnPBygwQJhgGfwOPZDxYzzADxnfJNGJ49eAdw94TFTMURLUZ1E0ZZPEaAAKvNPozhDVNGSyuszOcEPjJIKYgxMDwggEFMDHgAG+vn2YAad63ZROYz3n2HYPFB3YMdUy4DBC7UTgDZAgIXLz7nEFfWRIsBnI+coyAowwbAIUyKLSRxUCaQUDdVFoWFo04DYAZgk0cOSFRDADbWnPkvS9YuQAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5ElEQVR4nGNgoAb4/////8FlEMWuAAFi1bPgk+w68X8LNvEyC0YfnAYwMjIywjSf3vv0Mbr868dXwXIwQ5hw2QzTbBTIl4Gsef9014xtC3Y9hrmOCZ8XQBrOrf80A8b+5yWTEdb2bIaorDZcDRMuzauqpDKQFbrnWWYc9NVEcRFO0H7t03+HjJ3TYfT////+gzCIbbfpKpiN1wvMn3i3gmwHOR/k547rXxhgTmfa9mQGiE/QCwxQANIICwcQABmyc9JxOB+rAaAoMnWWlkUXf6n7Eex/rwQ3WVg0guMcFyAmIVEMAG9Yhr5TVwWIAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAo0lEQVR4nGNgoAb4/////8FlEMWuAAFi1bPgk3zR9X8LsyCDLLLY3/cMjyXKGH1gfEZ8mm+efvoYxn/w+iqYVhDVZlA3lZaFGcJESDNII0wzDIDkQGpwGsAMdTZM488/P+6DMLIYTA0TvjCAacbGhgEmBgoBEyEF7CwcitjYeA34+54BHICgEIdphGkGiYHCAaaG6GhEBsjRiNMAmCGEEhLFAAC/mWIGqaJhmgAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABD0lEQVR4nGNgoAXoiZ3//+vt///RaWxqGdEFQAqry2pnYFMsw6OcUbI4EUUPE7rNuDSDwJMvd2egu4QJ2WaQAnRNN59eeYLMB1kAsgjFgB4cNoM0B4WIt4BoZIOQXcIEIjLrEhhwaX547wWYDzMIJj+9aQHCBdOhHGTNOQXmLVZOhgzyShJgsXVrXtaoS+vIwNTALGVCdwFMs4KaIMOxfecZpGQUGIyN/reguxCrC24+vfJEUvx9y7MnD8CaQc4HGWRpZwE2BNkLMEsZYTEAC0T0UEcGyF6ApQlGmAAoJrBFIzbQ2tWcwa0K0csEEwSZBpIgpBlkM0wzigEgAJIAKcBnM3pSxgqwZSTk1EdVAAC4o7tcB/HchAAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGUlEQVR4nGNgoBAwYhOcnyB/z8tWj2Hb4UsMyLR48mYlgga8nOt7b9bqvaexGSwjIWqauOAhiiFM6Daja7784u9OGPvJi9enfx9ovIfVgJdzfe+BFKBrvqExaS6yIR0dnadBFqEYMB+HzSDNYhJSGF5BdgkTiIhJSMLmZQaQZlUtA6xySxbMQ7hgCZSDbPs7hzVzQZqttYUYQGxkbyBbyoTuApjTYZpBAMRGDwu8LhCTkIJrBoHiABmwGFEugIGjV9+BaQtVLobeDU8Y0AHMUkaYACgmYNGIHAYgcPvaBQahAyHJuhLM7iB+RUW5KatDvRJGSvx9oPEeKJ5hhiDLwTSjp0aMpIzsEnSAbDNeAHIJyCB0mqBGcgAAN1+sWi4GJxUAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABE0lEQVR4nGNgoBAwYhOMzZ//X9XCi+H2iW0MyHRdpDiGekZ0gablL/+f3zt5BjaDebiVMxZPTETRw4RuMy7NIPDl690ZIAuwuqAJzeZI7hu6MPbyrxqXcbmEEWYzyHRkzaaVOdYg9ov3lxgezzh0FN0QQ+fcDFCYMIE4oADCphkEJAT1GGQz7KyRXQQCoICFh8FtKAcdJKTEgl1QUdqNIQezlAndBchgwZzFDMtWL2To6C7FkMPpguVfNS6fbp9yFGQzCBhZKmA1HK8Lln/VuAwKOJAh3FsYj2IzAGYpI0wAPSZAABRwIMNgNHoMoBjAQCAVwgB6akRJiSBTQQpwaQbZjJ6UsWYmkEvQMxKIRtdMFQAA9zGXamytQO8AAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAj0lEQVR4nN1SsQ2AMAwrUT8CMXAJJ3IJA4KXABkpxYS0HdjwAHXsuIkghH9gHfujxEsewaMdJBXwZu7VlANRTZch3IJyPXueRwDAgse9mjDZ5v3VUNOFRaSzCWfm3kTCooZwoA3NBuRusLBhkhP1Zm8q9kUOqH0Fu2aawNsxtzdPAzQq8N9VA5q7aUm9n3ACSF1hgFTUd4UAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsElEQVR4nK1TyQ2DQAzEFuSRH32kitRAP1H6oYZUQR/88kgeG80io8GyxWMzn93xMR6LRUopXQu0qfsfAh1WeNyvhz08j2Lg6FWQ2/jdC3Ayj2LGAYHKPF1qYlmHKmYAtwEcMz7NH+nZFhdGPIopE5uYIcqrt8ZFuDOPHCkneT+7e9FUIJvg4cU0S9rkyBXX9Sxw9hX8mruDaMdsb3YD1IckIofXdQY0P1/vrbf1d/4Bk9l3meTH8P4AAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlklEQVR4nN1RsQ2AMAxrow4VNzFzQkeOY+QEZm5C3UCuFBQht4UVD6UOsRODc/9ASuPZ4q0ewRHjcBfwtJzVlAMexzxP5UXORzFTgOsAW1O+LJsPdi3byDirCfsmOvkNhIkxxZrgXjMVtqLNqfenaTNCJNlrCL0GO5kZS01o19UIDMWAZevFUE0xWNfdf/l16IXmtaCFC/fWTrr3ktU/AAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApUlEQVR4nGNgGB7A3CnnPz4+PjVMIIJfWBkuAKKR+djEYHwQYAQRbqH9YImPb++CDYMBEB9mAbIYjL9rdSEjC7KzkBVi42MTY0KRVDXAEkL45ZmQJT/evoCiCMRG5oPkcRrwEaoZpgjGRjcUpwG4bEAH6IYx4ZKE2YzNVcjqWJANQHcBNj6ygXAXwOIbn1PRDYXpASckEEBOXYQASPPJfVPgeikCAMioXCIc298hAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0ElEQVR4nGP8//8/AyWAiSLd1DCAAeSFxFobFH+g87GJgfhg7////59BXZ39P0wBiEbmYxMD0fr6XGADGEGEhgYHWMIqzJTh3KZzcFuM/IzA9LFVp8E0BwczWAzEB7EvXPjKiGIASBAX+PHjL1geRMPAjRs/GDECEaQAWRGMj2w4MpsJp5VQzdj4yOIs2JyJzSZcgAmbYmw24TKUCV9gIQcaNsPgBnBgcSpMDD3k0dXDwwCmCN0wXAGJ4oKLF78xYtOIz+abN38ygmhwQqIEAAAB54pINiBpGwAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnklEQVR4nGNgGB4gcp7nf3x8fGqYQASvBhtcAEQj87GJwfggwAgi0o75gyU+3/gFNgwGQHyYBchiMP4sq42MLMjOQlaIjY9NjAmZA7MRF8Amz4TuNGRFIDYyH5uLmJAlkf0HY6MbitMAXDagA3TDmHBJwmzG5ipkdSzIBhCKBXRvwl2AzY+4/I3sGhAAJyQQQE5dhABI8/Kk7XC9FAEAiRFkQOvZ+/gAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAm0lEQVR4nGNgoBaIa/L+T4wYQVC0KAyrJrIMI9mgOCyS2FyEy5XkOzsOTSExAQrjM4EIEQVuuACIRuZjE4PxQYAR2U9vHnwFGwYDID7MAmQxGL8vbhUjC7KzkBVi42MTY0K3DRsfXQ6rASJYnInuBRgf2UAmbLbCNOMyFFkcbAC2wMIWHsiaYXrAsQACyFFDCIA0L6rbCtdLEQAAreRo6NJbs70AAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABv0lEQVR4nK1SS0sCURT+xpyeFGUgkUlSps30wKKsiNIsKqJFiW0qaFVt/VmtgqBFEEERRQ+hBzqgU6GFtjBc9CatG/dKtybb2Qf3cM/H+b4558wVCCHIB7q81P9mMDPlJTNTXk4uLI8SQRA0hX5Pn4ZbGh9is+tpMPRMInW4TguE6WkvGfB7KM1yuiP/rJP4Oto4tzjmJmPDTnCDLxOfnhCXqx9pvMExlzXxzzrhG5GAEODrkPFcWMzFGgMKl2sAP2Ga78SEeqvhfopzDKyShIgaRlz3NWsVzqqze35si0Nu6AUOoxoDHQ3l6VcM2s04jcZgaW7FUwbsyAYZot3Ni5WrA2RsAj/cgOIkqEJutEK5vGB5t1GGklKQDm9rTH5DT4P1LcWSo8gNgCKY7z5QXfIBU6YQ14k6OMoEJJPdrMbkMCKaOIeYzuQ+pHZrA7+HbhTYjXY4mppwqqqMa5FsTGypbcfLQ+l3B3rjC0t2ArQDERXFlSwPHscg7r2jhu6p6x53iQBscicugkH+IdbB1s5xzmxd9aY/Z76KZsVrm1kN62BldZOulBicEi8MxOJ/GqQKROxu7NMr+w3sqeaDT3N8lBtPg8moAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAk0lEQVR4nNWRSw6AIAxEKeG+nKUnrhmlMBSj7IyzQFKc119KX0twmNnyoKo9WGsVVcV3GEVWgJLJ35osQhyQQ0ZEBT/DxLD2boCwcjA7zCtA5t6GgxmSY+/cZzOcMZhidqjcmRlyI29PpiHqPMBHoTIfYgk9b2mZQb1K5gp27gPwMMT0poyD19bivC5e57TaDvi3Do8UUrQFLC07AAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAs0lEQVR4nGNgGGjACCL+//+PIdGSFwwXrJm0lnHixIkM+fn5CI2MjJgGtCBp4lW2g6hgYGD4fPfQf3RDMAxoyQv+D9MEUoTMhxkCMxgkj2JAc24QimJ8NsMMLigoAPOZ0DUh+xOkGSYGMgSE0QELNs3IhqADkO1Q7zBihAEDkQDkMpQwmDBhAgOpACUM8vPz4aEMAsSwUcB/LAkJFwC5FtnFjMheQI42EBsWtejiyGEwDAAAQyp9VcgBKecAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3UlEQVR4nNVSuxGDMAyVcjBDZsAFXiFjpHaT0owCC9AmY2QEXGUGZnCh3HPsi/nl0yXvTqAPejzpRPQTEJGFDVUlsHNdC+K2bSf1VYIha0IeTbA1koQiOU4puZ5ODN9aS6S1jEQhHo3hi9Zy8J46Ig71nMBlzUDXdUTG8L7v5egcI8Y7FJUSkKRvd/N95OypCTmQBOIZCjxuZTlpzknmgFIoo6iC0xIxY+U9vQN+BmXMjyk4bftbNE3z3IG1lqKsgE/8l0us4ii5D2yO2MaDwRGlg4G/lc8PaaHg/3AHa12p0LW/7e4AAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9UlEQVR4nGNgGBTg////GNj3FP//mtuS/2f/SvoP4k+YMAFFHgYYYQaAgN9pgf/6glwM8vKeDF+n6YHlQIA769L/FNa5jBMnTmTIz8+HaGSESDPBFIE0Ox9rZBTZWs4IUgzSBJMDGQaSB4mBDEEGjCAC5FyQZnSvYbN5zu/k/yADCwoKUF0AAzCFIADSDBMDGQLCmy6sZUAGLCDiwJ3fDM5ImpENQQcgl4K9VwBxPSMsEPmWc8P97KDCCjYURGMDm0w/MMICkRFEgKKIGADzN0g9Shjk5+cz7LWqh7sAmV0rVgVngwKbWMvIB7zLuFBsxMYeZgAAThiHVPJrtIIAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1klEQVR4nK1QwQ2DMAy0q07TRyUeDAC8y4dBsgcfkkF4QN+kIyA+XaCDuDLCyNBUbaqeFEhs39lngH+AiF6Ov+Qkh9/W2k0+KOAVSedDIi8CfiFJEb/5rkUkpgWO/LmVBeVXjxJ0zgEUJZ6HnjsjvzNjEBHBA5ADWGsP+30YY9Z71g8oMRbRE23glefQQveedT0KiW1I8JQkwUb3cZz/2u5bpE1b8wKqbuohFlU3zdtjkWgyLRCRKLJ9bEcWGxz/SE6btt77lUk495VIaCLdIJr80xJj8QTubNfkC/5AlAAAAABJRU5ErkJggg=="
    },
    ELECTRIC_CHARGE: {
        name: "Electric charge",
        description: "Gives a projectile an electric charge, that it will release on impact",
        meta: {
            action_type: 2,
            action_mana_drain: 8,
            damage_electricity_add: 0.1
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAcUlEQVR4nGNgoBYIb3+OVZwFq+jq458ZGBhWYpNiIt5snBpCHHgYGBjWHPhClIZwmPErKyWJ0hACNh4PYMFqPNzfEBBqyYvdBqzGr0H1DCMuq+E2hCIZjz2U8BjPgEsDnrDCrgFPVOBzEq6owOckKgAA2kMjeanOYyMAAAAASUVORK5CYII="
    },
    MATTER_EATER: {
        name: "Matter eater",
        description: "Makes a projectile eat the environment as it flies",
        meta: {
            action_type: 2,
            action_max_uses: 10,
            action_mana_drain: 120
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjklEQVR4nGNkwAOmexv/33HmAT4lDEwMFAImdAF/ceH/FBmw8eVbRmS+h4kCXgMYkW1G14wcFiAaW3gwYlOcufUsToPQDWHE6z4iDGEiRtN/KACxQa5DDhcmmAJ8ND7AyEAGQI5qJlyKYCGPLoYuzkgo9JE1EBWN/kjpgay8gCsxEWUAqfkAwwBSbQdpAgCHgFgyY4tR9wAAAABJRU5ErkJggg=="
    },
    FREEZE: {
        name: "Freeze charge",
        description: "Gives a projectile a frozen charge, that it will release on impact",
        meta: {
            action_type: 2,
            action_mana_drain: 10,
            damage_ice_add: 0.2
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAs0lEQVR4nLWPMRKCMBBFfyiAAlJ4BEqqwDno6b2Mt7DPZTAVJYeIFEgTZ1wnLoky44xuk2Tnvb8b4MsSdJyN1eMMoK8LAKpKzbR6SI9zXxdHJQEk1FJV6lHP0V0/aN9/Cq3MyTHTqqq0lbnXTt2BgI3AI/mdZMX6L4EvzSMBNGUWfppqsAunB7s0ZSbEhtmsFOTFNAKBjwZwud7iuIQ/grzA/7hSvAZ2yjm3D7yZ8GPh/3UHHIUoWNivnUAAAAAASUVORK5CYII="
    },
    HITFX_BURNING_CRITICAL_HIT: {
        name: "Critical on burning",
        description: "Makes a projectile always do a critical hit on burning enemies",
        meta: {
            action_type: 2,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABM0lEQVR4nGP4//8/Awh/jZf/D2OTgpkYoIDZ3ZOBHMCEzPm5PPM/iGZkZGS4dOnSfxAGsXFhsNr///+jaAYBjqgZYNnFixeDxZ4+fcpw/PBBBmVZaYa+GXMgOhkYEF74uTzz/39HeQYQRgaxsbGMMM0gIKagApe7ePEi2HAWQn6Eaba0tWcI+vaNIaiu7v9JVVUGzrVrGRj09FDDAB0UZaT8h2mWlpYGi4E0m9++zaDW1MSINQzYI6czggIIpPnu46cMG7duRwkPkObTJ08yRO/cCdbLBAt1UMCBMIh9YkM7imYY0NPTA2tGAf+hLkB2tr+3J4ogKMBu1dX9X+ruDhaH0WC9/5EMANmMrhkZwDSiWP4fagA2m4k2oCgj5T8sxEkBGF4gBLC5AB6N5AK8CYkYAAAnD9m7qNzYHwAAAABJRU5ErkJggg=="
    },
    HITFX_CRITICAL_WATER: {
        name: "Critical on wet (water) enemies",
        description: "Makes a projectile always do a critical hit on wet (water) enemies",
        meta: {
            action_type: 2,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABS0lEQVR4nGP4//8/AwzLJC36j8wnBjMxIAFRBU0GUgELMkdLXhTOvnTp0n8Qra+vz4hLM8gFjCACBIyaz/wHGXDt4WuGc7UmjIyMjAyLFy8GSz59+pTh+OGDDMqy0gx9M+bADcTwArorYmNjGWGaQUBMQQUud/Hixf9wLxhBbQcBOz15MJ+BgQFsE0yzpa09Q9C3bwxBdXX/T6qqMnCuXcvAoKeH6gKQZmRXFGWk/IdplpaWBouBNJvfvs2g1tQEtoARPQxAYEmcPGNxZur/u4+fMmzcuh2sEBYeIM2nT55kiN65E6yXBWwKI8Sw81CX5PK3o2iGAT09PYbTS5YgCzGAQxIZgJzt7+2JIggKsFt1df+XuruDxWE0WO9/JANObGjH0IwMYBpRLP8PNQCbzUQbUJSR8h8W4qQADC8QAthcAI9GcgFGUiYVAABq/tiHA+wVgAAAAABJRU5ErkJggg=="
    },
    HITFX_CRITICAL_OIL: {
        name: "Critical on oiled enemies",
        description: "Makes a projectile always do a critical hit on oiled enemies",
        meta: {
            action_type: 2,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKUlEQVR4nGP8//8/AyWACZnTUeRLsmksyBwZKVEGRkZGBpCrLl26BDZMX1+fEZdmkDpGmBdAtoMMePLsNYjLWNm/hWHx4sVgyadPnzIcP3yQQVlWmqFvxhy4gSC9TOimggyBgdjYWEaYZhAQU1CBy128eBFsOBOy7SCgLAem4WEB02xpa88Q9O0bw626uv8gl3GuXQsWZ0K2HaoZ7oqijJT/MM3S0tJgsZOqqgzmt28zqDU1MSIHIuOTZ6/htsaWzmcEab77+CnDxq3bGTdu3Q4OD5jm0ydPooYkOjixof2/v7cnigTIAJC/l7q7gzFc7380A0A2o2sGaQT5HaYRpwEnsNiMDGAaYQDFgCIsNhNtQFFGyn9YiJMCsIYBqS6AJ2VyAUZSJhUAAJ63uPYvne6cAAAAAElFTkSuQmCC"
    },
    HITFX_CRITICAL_BLOOD: {
        name: "Critical on bloody enemies",
        description: "Makes a projectile always do a critical hit on bloody enemies",
        meta: {
            action_type: 2,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPElEQVR4nGP8//8/AyWACZlzwN39/wF3d/INUBEUhLMvXbr0H4QZGRkZcGEQYIR5AWQ7yIA779+DxR137WJYvHgxWPLp06cMxw8fZFCWlWbomzEHopOBgQGklwndSciuiI2NZYRpBgExBRW43MWLF8GGMyHbDgJ8YWFgw2EKYZotbe0Zgr59Y7hVV/cf5DLOtWsxw4APohnuiqKMlP8wzdLS0mCxk6qqDOa3bzOoNTUxwsPgACTk4a6QXbmSEaT57uOnDBu3bgcrhIUHSPPpkycZonfuBOtlAQmCAgxkGMwlJza0/2+ffQiuGQb09PQYTi9Zghpo/9ESEshmf29PFEFQgIH8vtTdHSwOo8F6/yMZALIZXTMygGlEsfw/1ABsNhNtQFFGyn9YiJMCMLxACGBzATwpkwswkjKpAADTRbEz6V250gAAAABJRU5ErkJggg=="
    },
    HITFX_TOXIC_CHARM: {
        name: "Charm on toxic sludge",
        description: "Makes a projectile charm creatures covered in toxic sludge",
        meta: {
            action_type: 2,
            action_mana_drain: 70
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5klEQVR4nGNgoCZI7dP6j8z/n5r6H5nGBpiQOVoGrHD2LhWV/08fPCBoCBMyx0BJC852u3OH8dr9+wwgQ0CAcfZsRrzO79+n/3//g8j/IBpZHOQSfPqY0AWQXQFzCTIf3UuMMNthGrVkkhiWHSphKHS6iOFkkGu0FBUZpBUUsLtASyYJqyuICpd+aBiA8BNX1/+94uJgJ4LY6DGAHC6M2Jx5+fNnhiI/PwwXYIsJJnQBkOZwPT24M2EAnY/TBciBBQKgAANpltm9G3c62AX1E7JfQWIg/xNKBxiG4BPDZhHJgGgXEQsAMh2BEDjAXjYAAAAASUVORK5CYII="
    },
    HITFX_EXPLOSION_SLIME: {
        name: "Explosion on slimy enemies",
        description: "Makes a projectile explode upon collision with creatures covered in slime",
        meta: {
            action_type: 2,
            action_mana_drain: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1ElEQVR4nGNgQAITdBr+M5AImEDE////wViYVwjOJskAGFAWUYSzP7dz/yfJgCVWk/8j07yVXxnxaYRZwIQuAXPF98P+KC5AdhFIDsWCxZaT/h/z3QzGPyY8/w/iIxuCzzssyBwjZxMUVyAb8v0ww39O240Y3mIEEaBQB/kdptFykw/jlw6e/ywJNQiVd07AmX+O7IGHESO6P1lsXBACKhYYBmBzBVYAcvr35+0QjBSg6IHLgCuQwAZAMYzPQCz4DDUQX1TSD3wn4HSMlIgOQFFGUwAA8GyBxq3svgYAAAAASUVORK5CYII="
    },
    HITFX_EXPLOSION_SLIME_GIGA: {
        name: "Giant explosion on slimy enemies",
        description: "Makes a projectile explode powerfully upon collision with creatures covered in slime",
        meta: {
            action_type: 2,
            action_max_uses: 20,
            action_mana_drain: 200
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABN0lEQVR4nIVSsU4DMQy1I5YKdSksHREdWagYKgQTzMDXIN3GgHQrEisDAx8AzGxl6EcUMbKwIXRLpaCX5kVOmhOWLvHF8fPzi0WM3R3ceCmsm19unNmYg+O9D9/OcJT8Pvtptz2TV+9vEgBo+7t71cvY6Q+bXw3BySz4SgZPx/ceAB/fn3J10YQ7Wyfn4aIsF4JqBOi+Ws8zV1Iki5BMA0g8Q/Lq8TaFHBZWh03PjuT5tc0SMzbRR3WwcbY6kmtaZGCROrXQUgPY4fVDVj3ZchG2wenLWkiwEaCoQmlDcy1cFWQyk24u6Z0VC58oCVdLNCwsA4eF/fCpSLWvBTudauMpEN/e0mZLg3GjdhLVJoNaGBIINW4UrWXzEMEIkowaEMj+c4zJDjuL/JtcFrG9ZyA1sD6QsuAfynTGN3BrUicAAAAASUVORK5CYII="
    },
    HITFX_EXPLOSION_ALCOHOL: {
        name: "Explosion on drunk enemies",
        description: "Makes a projectile explode upon collision with creatures covered in alcohol",
        meta: {
            action_type: 2,
            action_mana_drain: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzklEQVR4nGNggIK56Sr/GcgATDCGsjgjA0UGyEqKo0h8buf+T7QBc9NV/j9+/pLh7nQbuCbeyq94nQSzgAlELGCRZOhhV2eoYZGFK/h+2P8/LheB5FAsmJuu8v9Anep/ZBcgG4LPO0wwxt2X/xlA3kC3HcRmsXHBcBEMMOLzI0tCDULgzgk488+RPfAwYoIJ9sTr/ofRMFuxAU7bjYyEAhgMQIZ8f94OwWheYkAHn7EEEtgAKMapERf4DDUQX1TSD3wn4HR4LOACoCijKQAAd6p4Dq7GhCIAAAAASUVORK5CYII="
    },
    HITFX_EXPLOSION_ALCOHOL_GIGA: {
        name: "Giant explosion on drunk enemies",
        description: "Makes a projectile explode powerfully upon collision with creatures covered in alcohol",
        meta: {
            action_type: 2,
            action_max_uses: 20,
            action_mana_drain: 200
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLUlEQVR4nI1SsYrCQBCdlQURCZYhhVXyESm8zt5fuO7wE9If+BUHdlfb22nhR2ids5YjHAQib81bJrLLOcXuzu68N29mR6S3r4+ik4A1h1Xwnm8jOnlq5BW7baYdwe1xL55gnqXRYOw8J9XvI1NRurOhfCgASb4+GgbbxdIFyvkkyEaCpt50vLO43NpMZuOZJDbx2R2YBhIEL5bS1GXXbj/9u8Xy3taS//3IvE3lW4MB1IS9jzOyQ41lwOUK1dd490jWS2cvTPTbVHZv55PbJm87j7O641qmCw6RFKU0B/GzYQgeNC4EVCq0ghEW1sOvotRYCXo6TbR+TUK/KGWSVUZPotFgSHNDgkZllRuowTz0ZCTxxh6QSPscY6rDziT/gp+T6NoHJCGyGMlzwjt/kLpJTMDSlgAAAABJRU5ErkJggg=="
    },
    HITFX_PETRIFY: {
        name: "Petrify",
        description: "Turns a wounded enemy into stone",
        meta: {
            action_type: 2,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABjklEQVR4nGP8//8/AyWABV3AKzDxv7qGDpjd317MiE0TIyNEGGQ5I8wFyBqRwffvH8F6ZkxowjAEpJcJxABhdM0gjSDMycnP8Ojh4/+Flb3/0W0H8xkYGBgKKnrgAQHSZMb/Em7Q5V9qYPrmjStwSyZ0lDDCveAZkPCfm4ebQUZGEa7ZKSsKrPDF+0sM15ZfgRvy5Ml9sDqYIWAvcPNww21D1gwCEoJ6DFqROgy6bLfA/K9fvsLl0vNrwa5mQhZEBgkpsWAXVJR2w8VAlsHC5u3bd2AxJqy6GRgYFsxZzLBs9UKGju5SFOeDNIIwzGImmNNACkB+3TdtGdhmEDCyVADTHz68hfsdpn77hgWM8IQkJy8Lji6QIQwyagwMy68wMEQyMPw7LAymBQSEGR7/gsQECMA0ww14+/Ydg4wMP4OwsBBEkYYOw+WFvxiePGEFGwaLBXTNYC9s37CAEeYFWMCA2DA/o6UDjKQNFwDFKSg5I0crsjpYGPS3F2M3AAZgCQsWyuhORs+98MxELgAA42DTI77lR/oAAAAASUVORK5CYII="
    },
    ROCKET_DOWNWARDS: {
        name: "Downwards bolt bundle",
        description: "Makes a projectile separate into a bundle of 5 explosive bolts as soon as it moves downwards",
        meta: {
            action_type: 2,
            action_mana_drain: 90,
            fire_rate_wait: 25
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuklEQVR4nGNgoAWo92uaS4wYCDARYwguzVhBb9SEozBNMI0wGiaHDFjQBaTZZK1ANB8PnwZMDMaGyeEEKxLW/kdng2zFJo4VnK68AJbEpgFGw9Tg1IysGDnwkA1FVssEYyjYyMOYDMqSymBaU0g7CV0MXS0TiHi99f1/ES8BBnQQsSCYEZef/////x+F83rre7AAjMbmXJgcsnoMgCyBHmA4NTEgKUB2GroGvDZjU4DOR7eAICBZAzkAAPM6nv85Pa0EAAAAAElFTkSuQmCC"
    },
    ROCKET_OCTAGON: {
        name: "Octagonal bolt bundle",
        description: "Makes a projectile launch 8 magical bolts if it moves slowly enough",
        meta: {
            action_type: 2,
            action_mana_drain: 100,
            fire_rate_wait: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApUlEQVR4nGNgoCV4vfX9fxAg24D/////BxmCTw0TPhsZGRkZSXLRfyw2nq688J8UF6FoQtaMzCYKrEhYewOEYWy8YfAa6jcQDbMpYkGwxvV3V1/V+zUdQncBcliwgAgRLwGGN9s+MIh6CzLCFN99fvcmyACYYTBxBRt5uHqCXmBA8wrR4DSWwCMqEF+jxTO6JoLR+B9NAbpikpM20QkHF6A4MxEDACXlu03sX4pQAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAq0lEQVR4nGNgoBX4////DbI1H9u8+Q7Zmqd3dOwnRT0TFrHjuLwyvaMjFK8Fx9CcDuODNIE0I4tjhNExJM0gSZhNII0EA/T///83oLgZ2YnItqJ7BwZYkNirZ3R2XsooLwdpAmvMrKhYDfOCvra2LCMjowpB/09HcwHR6WE6kkb0QJre0dGGS44BmyJsACSPLQoZ0RSBFIDTQWZFRRU+AwkCipIzDFCUoYgFAMdKgJDrkqPKAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsklEQVR4nGNgGHLgPxTA+Ey4JCiygYEEcQZiFJPlsv9QTYQ0MyFzPrdzUx4GyABm+/fD/qQZ/B2qAd352AxixKWZQcUCIXjnBJjitN2IoZ6xvLwcw9QGnxsYBjRs0cDqWpYzZ85gCDYwmDA0+JxANYSBgQGbWpRYQHYB2EaQ06HOB4ENLgg2TgNAinwavqAauEUDbHvAHlQXgQA4UJydnbFGk4mJCUONwBSsGkFg7969jABCF2fQ0RlIdQAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAz0lEQVR4nGNgGAUkg/9QAOMz4ZIgG/zHYQjRhnP6zgG7BESTpTlp/zcwhhkCArINn1AMRAYsyBwR4zAGH3kUITCYGMfBsMU+imE5A8P/75tTGJHlmJA5b86uYtjy8A+YzeU3F2wgiA5UZAUbDOIT5Q1OqFfW3fsFpmF8bN5gLC8vxxBcxlkNdjbI5vX3fzPkL/rBEPW9FauFLGfOnMEQfMO1CuxnEAB5CeS1M98w1YFd4OzsjDV0j3FFgv0M0mz1bTlOL4NDFJchhMDevXsZAdhRguSJ3lryAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8klEQVR4nGNgoCX4////f0JqmPBJHvo1B6uhyAYz4ZIAgWOXdxN0JROMwQgFyIbcuHwbxWZkdTi9wIhmCEwzsiasLsBlCC7NMHkmZA4IxM83JBjyB3/OxjT04M/Z/4mJxvYzYbgtaEeThBkAcxUxrmNAVgwykJBmxvLycgwJgdD7DFa6rgx2bCngxARKDx9WK2K1kOXMmTNwjkzMO4YnS4QYTBhMGOyMU8BiIEMYdBkYtq2+w4CsFgZQohGkGQRACisqKuDi85ZNg1uA4QLcoYHICxI33CC2n4FYgBIGIMLZ2RklHOBeMTHB6mwY2Lt3LyMAjGaSBjWr7asAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7ElEQVR4nGNgwAN2ffj/n4FcsOvDfzAgZAgLLonTFxgYGAygNB7ARKrLIO5CuIoJlwQIuPITNpAJxmCEAnRDkC1AVofTC4xYDAHxkTURBf5DYwCXi3ACo8ar/5HDhGQDYKD1AEQziGYgNRpl4pa+xsdHBizl5eUYNvB5RjGYGkDYYDopSuST5CWsLmE5c+YMnPPebhKD4KE8BhOGCgYGgw6wGDgtGDAw7N3OwICsFqsXQJpBAKRwb3sFXDwpb9kbmAUYLsDlNxDY/RFCR0teEgEZKsiA6QJw4nB2dkbxH9wrJiZYnQ0De/fuZQQAOKGH7YcGWaQAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0klEQVR4nGNgoCX4////f0JqmCi1hAmf5Puz2F2F7DImXBIgsGPuUeJdwAgFyIZcvHMaxWZkdTi9wIhmCEwzsiasLsBlCD7NWA0od+3HGXX45KifDpZlHvkPo/HZzFheXo4h2dnZyfjuzP//gsaQtACKzot8m7EawHLmzBk4x4TJh+HMvy1gW0GaQQBEezBYM1xcvZkBWS1WL4A0g8DcW/UoqbCzcgLcAgwX4PJb5+oKhnKGDgjH6AVW20EAHL/Ozs4o4QDziomJCU6NILB3715GAKg+doIMduJJAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVR4nGNgGNTgix/Df3Sx/1DAQLQEqer+45AkxnCcipH5n9u5/yPTcIAuANOEzebvz9sxNX9/3v4f2RBcBhDtAmTN3w/7/ycpqj63c/8HiYMAsjy6QSA5RmyaWWxcIBwVCwaGOycY/hzZw8B4/CsDzyYGDPWM5eXlGC5o8LkB0QwDd04wNGzRwOoDljNnzmAINjCYMDT4nEBxAQODBgM2tYzOzs5YA8jExASFj00z2AVYRfFoQAdMRKnCAfbu3csIACJVlQuhgt0HAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVR4nGNgGHLgPxTA+Ey4JCiygYEEcTBov/bpPz7F2Ph2m65iGmiHJAjThK4Z3TIGXCbjMgBdHdxUXArRxUAaUcTt0JyN7ESYQpgamEUwNVjD4T8UHHqPoJHF0S1mLC8vxzDFu6KDwVYAwe+4/pnhw8JWBmyA5cyZMxiCAs8/M9gK8ML51pK8DFsZGBiwqYWnRGQAsg1kKwwcfY5gE2UAyCaQIYc/MIAxiI3NdhBgBBHOzs5YE4eJiQlOjSCwd+9eRgACQ8aicZT0aQAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbUlEQVR4nGNgGHLgPxTA+Ey4JCiygYEEcQZiFJPlsv9QTYQ0M5FsMjmuoKkLmCg1gLG8vBzDmZ2dnYzoYtjUgQDLmTNnUARMTExw2oauFgSoHwYgW9CdC+Jjsx0EGJ2dnbH6DdkruDTv3buXEQBZQUg/3fpOFQAAAABJRU5ErkJggg=="
    },
    FIREBALL_RAY: {
        name: "Fireball thrower",
        description: "Makes a projectile cast fireballs in random directions",
        meta: {
            action_type: 2,
            action_max_uses: 16,
            action_mana_drain: 110
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzUlEQVR4nGNgoDW40WbynyKF/5+s/U9Q3Y02k/9ggKYYKpePbBgI3HaVhKtjAhHM+58yMDxdx8AgHYTTJWBx6SCwOtXdzxmxu+IJxAY0LxSD6f///xMVHjeg3oE5H2QAyGCiAxMGwK6BaAa7AMWVSAYyMuAA75cULhFwsDkPF5AO6kFR8HQdw53EHAgbFKogE9FjA+YFWEzA1KF46TaSIHpAQRWCDCHs/9tQg5DFkGOE6FhggALk2EDmEx0j2BTCvEmUIdgUgLxJVprABwAnV+s4nX7kAwAAAABJRU5ErkJggg=="
    },
    LIGHTNING_RAY: {
        name: "Lightning thrower",
        description: "Makes a projectile cast lightning in random directions",
        meta: {
            action_type: 2,
            action_max_uses: 16,
            action_mana_drain: 110
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyElEQVR4nJVTyQ3CMBBcSzyhBH580gS86SgdQD2kFkgf8M+gjRmfa0dYsuw9PDt7WAAIsMCf9b693l2bRCcLJNelYLxLrqhBVH9+PFEz8b7Si6hbH7fSCikgMTCiRdvr8yCyVTyClilQditKc6VG53K9l3cU7vMH47CXyzTL9XRc3VTmUjvv43BwQYdf8WyKS9i0sz6sh4spRFplxDSqkSVMBmX7WhMpffo1UCmL3cbYa6v3KcjmHPBx/Q/MUW6Pbwv0r+9r+XwBpYipSt6okhcAAAAASUVORK5CYII="
    },
    TENTACLE_RAY: {
        name: "Tentacler",
        description: "Makes a projectile cast tentacles in random directions",
        meta: {
            action_type: 2,
            action_max_uses: 16,
            action_mana_drain: 110
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAv0lEQVR4nJ1SQQrCQAzclH2F6Ne8VvsC0au1vkC86tcUvxFJIWVMZ3E1sJSkk8lkdpOqpl9Of7wp5jl9iW5z1uVqMeXPx+vjf65pxqbLdSfVBKUmjCb9EaZsRtBBsUaR48WctCTKjObtD+vZGoaRbTuMQAec+ntRCZIYzszNWLCvO47T45qoVnwFNjGSRHLLxQhYxFXiA3IlmRnImkqYBq+ETfdGrCF+8oC9d5walXo+3gJTwSSzKy6ayAKH+IA3AUG295u+Vl0AAAAASUVORK5CYII="
    },
    LASER_EMITTER_RAY: {
        name: "Plasma Beam Thrower",
        description: "A projectile fires plasma beams in all directions!",
        meta: {
            action_type: 2,
            action_max_uses: 16,
            action_mana_drain: 110
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+UlEQVR4nGNgIBLs+vD/PwijizOhC7QewFQE0ujKT6xVDAwMRo1X/6MbCgLYDCdoAIiNTTOKd3ZB/YesSCZu6WtkA2CGgtTAXATSw4jux7aDDAxrD15jeHX3whsxZQORs3VaDMZN1+CWgfggsPsjA4ObACMjiitgJsNshNkOcg2yON6wMIJqRDYMxAYZgh64IMCIzIH5GwQeL4wSQZaTjV/2BsYGee1cvTZCb+sBRCDBnAuzFdkLyBbg9IoRkr+RYwBmCDZvwAFMAzofpglXmmAAAVigIduATQyrIaAoxGUytmSMnJDgmrHlNGTD0eXhuRNXNkVXjEsSAAH2ZjTfn7o7AAAAAElFTkSuQmCC"
    },
    FIREBALL_RAY_LINE: {
        name: "Two-way fireball thrower",
        description: "Makes a projectile fire small fireballs perpendicular to its trajectory",
        meta: {
            action_type: 2,
            action_max_uses: 20,
            action_mana_drain: 130
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAfUlEQVR4nGNgoBa40WbyHwRANFkG3HaV/P//yVrKDLkBcgXUELIMQDeIgVJwA2JQMQiTZcD7JYVL/sMAuYb8h4IbbSb52OSZCBnAyMjIeLPdtICBgWECyTYzoIs9WUt+FCMnNrwG/SeQBmDphOxovg1NsRguICX1URQOVAcATaN9Qb4BMsQAAAAASUVORK5CYII="
    },
    FIREBALL_RAY_ENEMY: {
        name: "Personal fireball thrower",
        description: "Makes a projectile turn the creatures it hits into living fireball throwers",
        meta: {
            action_type: 2,
            action_max_uses: 20,
            action_mana_drain: 90
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABA0lEQVR4nGNgIAButJn8Jyh+A4ciEPj/ZO1/bGIgcNtV8j9YMxggKUQ2EN1wDPW3XSXBHBDA5hKwLWi2o4sxgE0FGYLm3BttJvkwDNOMz7sMMINgmu+/OPAfhI9fn/QfZghR4AaSZkKGMBEyLCElluHF+0sMFaXdKK6EeYWJkAEL5ixmWLZ6IUNHdymYr155moFBOohBPa4SHMAsIEEQ46+jNERBXCUDo0ww4w2GEob3gXETJAT1GIwsFeAG3nGTYoCp1dj9nBGsGR4L//9jxALM7wQD8jbUIFzyJMUCAxSgpwtsyRongCVZdFfCkjHeBAWzDSPJImUkolIlNnFY3oHJAwDTDQAxORylygAAAABJRU5ErkJggg=="
    },
    LIGHTNING_RAY_ENEMY: {
        name: "Personal lightning caster",
        description: "Makes a projectile turn the creatures it hits into living thunderstorms",
        meta: {
            action_type: 2,
            action_max_uses: 20,
            action_mana_drain: 90
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABbklEQVR4nI2TvUsDQRDFZ6+2ui6ksdOglcTCxsqz08Lej0JsY2Eg+gfkAqnUTlQMgo0EwcZWbWysJMZIAhZGSCdcZ5ORN96ce8kaHDjY3bn5zb63u0RExNxn+iPCZuTMtcp5P8mFzYhdEKxxt+4PwrCGcTvI+CARM6cgoNtF89fPrMXIMbOfNGwHGRAF4toFilO7irsr3MRUmljbpUoUSOKm8073y1OmVc4XtHBy73EfsLulHBnjSZ3LGMJu4nHhrXfL+B5eDtiGjTJ3qNgFsaV6OlETBzVvbK5S7/OJSsXqb+ePK8iTsQc9CsEY2m3A2fE5XVzWqFItkvpD2RXamq5xKTdGHhY7i1mDiXoAw75Od7bRGTEzN54ATw4XzGs4S0eNdSNmtnGM3JdzxlFqQAo0q3aXkRIcFwOEHdh+KEiNtecjg+NiyEGBPf83RCXZp/QjN33tnSFdu3XxZwgq114emfsyWY/GCQcU/2j+Gy6UW3jblvcaAAAAAElFTkSuQmCC"
    },
    TENTACLE_RAY_ENEMY: {
        name: "Personal tentacler",
        description: "Makes creatures hit by a projectile grow tentacles in a chaotic manner",
        meta: {
            action_type: 2,
            action_max_uses: 20,
            action_mana_drain: 90
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABcElEQVR4nGNgIAButJmg8FtbFv5HFmeEcTSqzmA1IDO9/b+MrBSc/+TxM4ZptWqMDNJBDHfcpBiYQJrVK08z/H+yFsNWmGaQJhjOl18L1szwdB2D6u7nDAy3XSXBmv///4/hXJABMCfDAEgtSA+GP/+DDEFyBVQ8H4ZhmkFqQQZj9esNqEEwzfdfHPgPwsevT/oPMwRZPXYOA6pmQoYwoYcyup8TUmIZXry/xFBR2o3iXZg6JmSNIAwKaWSwYM5ihmWrFzJ0dJeC+RMfBv8HxwIUsEyfWcmI7AVQHDPKnGG4wVDC8D4wboKEoB6DkaUCiqFtrYsQrrztKomIhf+ogQvyM8zvyGEAshBuaSaUATMI2UswOWgMoQQgDDDBvABKVbDkjB6QILD2X+4EWBQjexmcF7Cld3B4zKhgZGQEKwGrKbo3iVFl1zNwMs5qvvUfZDlEFktaAAXmncQcSHrHYQkoX8ANQAfYciiyJSDNIHkALk4OMhtEbfwAAAAASUVORK5CYII="
    },
    GRAVITY_FIELD_ENEMY: {
        name: "Personal gravity field",
        description: "Makes creatures hit by a projectile gain a temporary gravity well that draws projectiles in",
        meta: {
            action_type: 2,
            action_max_uses: 20,
            action_mana_drain: 110
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/0lEQVR4nGNgoBAw4pJ4O+HndGS+cAF7JlEGvIVq3H/3AYq4o7ICVoNY0DXDNJ69eeY+mtmKMDXIhrCga4ZpfPj28V0U7TcRBiEbwoLNXyDNrVst1oDYL95fYmj0fWAEYssLyyqjq2VCtx1ZMwhICOox1G9WOPfu46t7IDmQGpBaWFgxMeABCSmxYBdUlHbjVMOEz4AFcxYzLFu9kKGju5Q0AzJtNhmBbAYBI0tI9OE1QLiAPRMUz8bqJoqggBLiF1MCBRzIkJWZ8uAABImB5EBqQGrxxoI8NLQnx3wLAWkE0dhiACMlvsWTkEA2g2hk2zEMgBkCoolNyhRnJooBAGdPjAXG+YWeAAAAAElFTkSuQmCC"
    },
    CURSE: {
        name: "Venomous Curse",
        description: "Imbues a projectile with a curse that makes the target hit by the projectile to waste away",
        meta: {
            action_type: 2,
            action_mana_drain: 30
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABA0lEQVR4nGNgoBAwYhNsDgzebSZv/A7GP/XwrFDt+rWuRBnQHBi828DLrRZd/MK2Xc3YDGEiRjMIgMRB8jgNaEbSrCXLcRxZEYyPzRAmGAPZz9ce/7CEaQLRID42dRheQAYwTciasQEm5JDGpxCXOkZkDnI4qL6ebQ4Tvy2aehJfTKCAzbNnWtxoM8m//+LAfxA+fn3SfxAfJM6ABTChC4BsZk/qmQDjSwjqMbwPjJuA7CK8BiCDhJRYhhfvLzFUlHYz4AJMOGUYGBgWzFnMsGz1QoaO7lLiDdCoOjPx57ySApDNIGBkqYDPDuwuABkiuH4R2BDL0w8L8JqAD4BCH5nGBgD1EXn3BVwFkgAAAABJRU5ErkJggg=="
    },
    CURSE_WITHER_PROJECTILE: {
        name: "Weakening Curse - Projectiles",
        description: "Target hit by a projectile takes 25% extra projectile damage for a time",
        meta: {
            action_type: 2,
            action_mana_drain: 50
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABVElEQVR4nGNgoBAwYhMMzG3eLa9j9g7Gf3jllND6ybWuRBkQmNu828PKoBZdfMexC83YDGEiRjMIgMRB8ujiLPg0f5MpOe5jE8KgwtDCcIehhoGBwcKSgaF5N7JLWGAMkJ+/yeQdV5FRYbjz5A4DiNZQgGgGATAdUXP8+ie7VVhdAAJcT3osnz1hYGCQKTkOMgQEbjD4MGgoGDDceHCB4dmJDEsGBoZCBmwGPLxySkjTygBuEIgGGwaiT4BIC7g6nLEQiBQO9vcbzWHiBxXrT+KLCRQwc/lmixttJvn3Xxz4D8LHr0/6D+KDxBmwACZ0AZDN7Ek9E2B8CUE9hveBcROQXYTXAGSQkBLL8OL9JYaK0m4GXIAJpwwDA8OCOYsZlq1eyNDRXUq8ARpVZyb+nFdSALIZBIwsFfDZgd0FIEME1y8CG2J5+mEBXhPwAVDoI9PYAADTcI6eZ9PTpQAAAABJRU5ErkJggg=="
    },
    CURSE_WITHER_EXPLOSION: {
        name: "Weakening Curse - Explosives",
        description: "Target hit by a projectile takes 25% extra explosion damage for a time",
        meta: {
            action_type: 2,
            action_mana_drain: 50
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABcElEQVR4nGNgoBAwYhMMzG3eLa9j9g7Gf3jllNBEgyUucsk3MdSzIHMezVX/n38hZo+HlUEtA8MvuHh1yt3jaXNi9jAw1GJYxoTMgWkO0lp73GpXwnGQGIj9/cxxBpA4yGU4/RKY27x75vLNFpcThf+DXPL6YsL//z/vgdkwcRCNbggTjAHz8zG3BZYfj7xhENGoA4tzmlgywMSR1WH1AgxIFPgyvLnRBGaDnA/yBgMOwIIc0ppWBgzmL5uOr2OoA9vmecbz+HauHkuGawgNIHVYXbB+cq3rjmMXmk+KQzTb3280B3kFRMPUgORB6hjwgZnLN1vcaDPJv//iwH8QPn590n8QHySOTT0TugDIRvakngnw8BDUY3gfGDcB2SV4DUAGCSmxDC/eX2KoKO1mwAWYcMowMDAsmLOYYdnqhQwd3aXEG6BRdWbiz3klBSCbQcDIUgGfHdhdADJEcP0isCGWpx8W4DUBHwCFPjKNDQAAvhCq0xmd5XMAAAAASUVORK5CYII="
    },
    CURSE_WITHER_MELEE: {
        name: "Weakening Curse - Melee",
        description: "Target hit by a projectile takes 25% extra melee damage for a time",
        meta: {
            action_type: 2,
            action_mana_drain: 50
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGUlEQVR4nGNgoBAwYhMMzG3eLa9j9g7Gf3jllND6ybWuRBkQmNu828PKoBZdfMexC83YDGEhRnNahM9xBgYGSwaG5t3ohjAS0swX5nP806otlrhcwgRjIPuZ/8Ha49g0o6tDMQAZfFQItoxT3oWhGRtgQg5pGPvTuZXHF911s4S5BBkgq8OIhUCkcLC/32gOEz+oWH8SX0yggJnLN1vcaDPJv//iwH8QPn590n8QHyTOgAUwoQuAbGZP6pkA40sI6jG8D4ybgOwivAYgg4SUWIYX7y8xVJR2M+ACTDhlGBgYFsxZzLBs9UKGju5S4g3QqDoz8ee8kgKQzSBgZKmAzw7sLgAZIrh+EdgQy9MPC/CagA+AQh+ZxgYAR7OGDzDrWcMAAAAASUVORK5CYII="
    },
    CURSE_WITHER_ELECTRICITY: {
        name: "Weakening Curse - Electricity",
        description: "Target hit by a projectile takes 25% extra electricity damage for a time",
        meta: {
            action_type: 2,
            action_mana_drain: 50
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSklEQVR4nGNgoBAwYhMMzG3eLa9j9g7Gf3jllND6ybWuRBkQmNu828PKoBbE3vNb7LgL6ytLEHvHsQvN2AxhQtfMYurmAuMHRZuB6bQIn+MgcZA8ThcEItnMF+Zz/NOqLZYwzbNWQNjYXMICY0D8/AvMXrf0FENQtM/xCCYGhhX/UG1EDhsML8D8DXI6TDPIJSAXMeAATMghDaJBmkGaQJpBLgEBGI2sDmssBCKFg/39RnP1ytMTbrabFhxUrD8Jctmf07v24IpOOJi5fLPFjTaT/PsvDvwH4ePXJ/0H8UHiDFgAE7oAyGb2pJ4JML6EoB7D+8C4CSBxogxABgkpsQwv3l9iqCjtZsAFmHDKMDAwLJizmGHZ6oUMHd2lxBugUXVm4s95JQUgm0HAyFIBnx3YXQAyRHD9IrAhlqcfFuA1AR8AhT4yjQ0AAEK2mkhtBlhXAAAAAElFTkSuQmCC"
    },
    ORBIT_DISCS: {
        name: "Sawblade Orbit",
        description: "Makes four sawblades rotate around a projectile",
        meta: {
            action_type: 2,
            action_mana_drain: 70
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtUlEQVR4nGNgwAMuXX/8n4EAYMIlsWHHuf/INEkGXLr++L+SvCjDxJ4GBhBNjEswAMhmkEZkF7x+/XoKAz5w+vRpB2Q+NptPnz49hagwAAE9TVlGBkxwhyjb8YHTp08XYHOB7P///1GcDOKji0HBWxQD/kMVMTIygp2MQxNWwISkURgmCDMIRMPYaOAxQb/hAuhhxYQmr4KugeRE9BopsWBLTEQDkEYQTk5OBtNUS85kuQSfAgAMq3rQKQNpRgAAAABJRU5ErkJggg=="
    },
    ORBIT_FIREBALLS: {
        name: "Fireball Orbit",
        description: "Makes four fireballs rotate around a projectile",
        meta: {
            action_type: 2,
            action_mana_drain: 40
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlklEQVR4nGNgoCW4rSv0/1Oh+n+yNH8qVP///03FfxAAGUSW7WDwpgLuik+F6lMI2WqN7gp029ENYcFnIF//TUYswveIsh0f+FSoXgRjMyGJi4G8jKwQEgioYlBwH8WA/1BFjIyMYCfj0IQVMCFpVIQJwgwC0TA2GnhF0G+4AHpYMaHJK1GcEj9B45kmKZFkgC0lUh0AAHhfaq0fjXleAAAAAElFTkSuQmCC"
    },
    ORBIT_NUKES: {
        name: "Nuke Orbit",
        description: "Makes four\u2026 nukes(?!) rotate around a projectile",
        meta: {
            action_type: 2,
            action_max_uses: 3,
            action_mana_drain: 250
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSklEQVR4nJVTPUvEQBB9exwWKQ0rHGrhKaS8zkaIjSfYik2a+wVpcr2oVf5A/kPAj8JWELmU11lZqSnUg8Q0ObC4ZmViVpJNctEHm9nM176dmWVQ4Ps+4jgGkjtAP8TJ+oV4myWZbdcGU/07qsKyLHDOxVO0KUhOFh6edR8zdlQJJnRrGAiSpweXmCxMbCeWNJG+nUEURSwMQ4yvhiB5P3ezRfRTx/CwDKlj7AkhUFwfN7qYeshW7uMtvQJjFZaq4qXxdPwRqWOM62qwJohzAfSv6nK8lhKI3Inl/BuCatEpBG5JpUxEUu4VRK13a4Jaq65i79NHtmyjp+P6/YzJseacA9PzUgCrOcF72OnbX6uj3zoEQQDTNGnMW3ucQTIg0DvYX7FBb4KgJqkMEoHG1nXdnyTzELePQwwGITRN+x8DqkHv+LPkozblG03ijRXzOGyqAAAAAElFTkSuQmCC"
    },
    ORBIT_LASERS: {
        name: "Plasma Beam Orbit",
        description: "Makes four plasma beams rotate around a projectile",
        meta: {
            action_type: 2,
            action_mana_drain: 100
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4ElEQVR4nGNgwAFk4pZu/w8FIDYudUwMBMDuj/jlmRhoAWTilm5vPQDzwP//IDZUrJ4Yza+NGq/+RwcgMZAcuiFMyJzWA/8NnyyKFn1198KOtoMIcRAbJAaSY2BgeITV5tYD/w3RvQGyFWozSiy0HvifCGOzIImLgZzKyMjICOI8WRTt+fj///8gNiOjtieafc9QvPAfrhCiGcYnBjAhaZSCCYL4IGcbN11jAGEsCekVrnBIxBeN2MIKBYCiiFA0MhACrRBDcLqAaADLTLs+UJCZQBnJlR+/RXgNIKQZpAgAmjDNWLdg6O4AAAAASUVORK5CYII="
    },
    ORBIT_LARPA: {
        name: "Orbit Larpa",
        description: "Makes four copies of a projectile rotate around it",
        meta: {
            action_type: 2,
            action_mana_drain: 90
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhUlEQVR4nGNgoCX4/////4+7/v8n24CPu0BGQAz4cfX/FIpd9GktAUM+rf2vQ6ohTGQ45ArZtsPAp7X/M7C5QBwWYDAACUKssXAbxYD/UEWMjIyMyHxiABOSRlWYIMwgEA1jo4GXBP2GC6CHFROaPNEBic+GKRQbAku2yEmZLEBxZiIGAAB6jlRf+GygzwAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAS0lEQVR4nGNgGLTgPxQQUsfEMOjA/xuFcGf/T1b8T5rmqUEoGnAZgDV8/mNRjG4gTgP+43EqLkPIChNsfNIClVLX0CRFMpFn7GACALLnQp3H/hooAAAAAElFTkSuQmCC"
    },
    ARC_ELECTRIC: {
        name: "Electric Arc",
        description: "Creates arcs of lightning between projectiles (requires 2 projectile spells)",
        meta: {
            action_type: 2,
            action_mana_drain: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAeUlEQVR4nLWSUQqAIBBEpwi65f53Iv/dbtEB+rXjCEqBCxLSShv0PgR1dmYQgQ+cheaQQ3oUDzIAYD0ygG3PfpkNaRyS5q1CLuqXmJq92HtYYFMlLupmhjolq/RVDt2cyEUOSVa8txARudh/OrUngNEwZ6L+t98SKhcL6UU0HuOoewAAAABJRU5ErkJggg=="
    },
    ARC_FIRE: {
        name: "Fire Arc",
        description: "Creates arcs of fire between projectiles (requires 2 projectile spells)",
        meta: {
            action_type: 2,
            action_mana_drain: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAoElEQVR4nGNgIAP8BwMGBoZzBvIEFTPBWecM5OXCJAlqY2JgYGBkZDxvqKC53AciZHThIVEOe9Nm8f169ps2izdtFnARfE56tOo5AwMDd6AxXESk6gRhe84ZyH+/ng3xBjFhgNADd9s5YrSdM5CHeAmfH5ABPKAglrzB5nssAGLJOVQnYbcBAiDhprnchzR7IP4hNsTgeuDpjVhAsgY4AADrrE+qssRDEAAAAABJRU5ErkJggg=="
    },
    ARC_GUNPOWDER: {
        name: "Gunpowder Arc",
        description: "Creates arcs of gunpowder between projectiles (requires 2 projectile spells)",
        meta: {
            action_type: 2,
            action_mana_drain: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAyUlEQVR4nGNgIAP8BwMI+0OlCX7FTHDW9/PxHypN2MO08WtjYmBgYGRk/FhlyqJgAVct0H4GruIDLs2/30///X46RPr7+XgC3vgOds/38/G/30+HqIaIYFf9ASaBrA1N9QdMzcjakJ33odIEWTUilOAe/bnq6p8HJxgYGNjDtCHOYwcHBj63QdgQ/3yHBQCBKIIohYfBB5hqhJMwAafhwj8PTrAoWMAjFLsGiGGchgvh/mEP0/656io+96A5+kOlCXJ6IwqQrAEOAFMthj+5cFp7AAAAAElFTkSuQmCC"
    },
    ARC_POISON: {
        name: "Poison Arc",
        description: "Creates arcs of poison between projectiles (requires 2 projectile spells)",
        meta: {
            action_type: 2,
            action_mana_drain: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAp0lEQVR4nGNgIAP8BwMiFTPBWdXa9cRqYGRkrNFpkJGRIUYPE4S68+DGkydPiNHDBKFWfl3JwMBApB4oCOcOh5DT3WdD2AQ8vRJsiYqCxoEjexxsXHDZw4QptPLrSjxuY8RldbV2vYyMzJMnT1qvNuKzAdn1B47skZGRQfMPugaITyABDXGbg40Lsh6cToJbqKKggdVtWJTC00u1dj1J6Q2kmTQNyAAANQNS4CZQOMgAAAAASUVORK5CYII="
    },
    CRUMBLING_EARTH_PROJECTILE: {
        name: "Earthquake shot",
        description: "Makes a projectile crumble the earth it hits",
        meta: {
            action_type: 2,
            action_max_uses: 15,
            action_mana_drain: 45
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoElEQVR4nGNgoBAw4pKY7m38H5t45tazjHgNmA7VuOPMA6wGe5gooBjChK4ZpBGfZpAcsuuY0DXjAjDN6IYwMZAANr58ywhyPrI3mAhpAilGBzjDAJ+zkTVhDQN0ANOETTN6QMIBSNBfXBiMcaUDmDpccgwwQ2CKQDReDdgAsmZcLsIajdOhgujJFRvAUIPudGRxZDGC/senEJclJAF0zQAesHwhpNFQhQAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA90lEQVR4nGNkwAD7q4/D2Y6tlmiyLJiqJ+5pQeY6ouphxFRtzeBi4mLBwMBwZs+Jowx78l1qMO2Bqu42799fffz37f/////7///f79v/4YIMyDZA+DYJIFNZVP6jGfTnDkjNkQUnIF5COGl/9fEze0CiEPdAAFzEEeYqFE8fZdjD+uo/wx6EyKlXu3+LMZowIIxA0fDyw2txMdGjyDrEGF9+eE0glND8kI8aSkxo0mjmoXGxgP3Vxy3VzeAIOUAZwADdBgYGBnEBUTQGMoD6AW5S1Zp8ZHUvP7xuC5kIYUN8Ao04NHWYAKITFHHEqEbWA9JAUCkyAADVV3sK7YLSvwAAAABJRU5ErkJggg=="
    },
    UNSTABLE_GUNPOWDER: {
        name: "Firecrackers",
        description: "Makes a projectile release firecrackers when it disappears",
        meta: {
            action_type: 2,
            action_mana_drain: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA90lEQVR4nGNkwAI+t3P/5638yjjd2/j/jjMPGHCBjS/fMjLikvz+vP0/iF6QsoYBnyFMOGXunGAgBjBi2HzY/z+n7UawOCEvYHUBJ1QzDHiYKIDpJQU/iHMBciCCOQRcwoRNEKQZ5BUQG0QnVMjAXYIOGBnwALAhKhYQzp0TDAs6nmDECBOI+P///39sNFwzFIBcgh4WLGBnMELSAzoNjkqQISi2cxAOA5QYgWqOsbnBgA0wwUIdWRCZD7M5ZgKqzVgD8fvz9v+ckpVERR+KC2CakZMvzBW4og+rC9ATEMzQP0f24PQCSiAiawYDqOYlRzSwagZlZwD1TYokO7wj5AAAAABJRU5ErkJggg=="
    },
    ACID_TRAIL: {
        name: "Acid trail",
        description: "Gives a projectile a trail of acid",
        meta: {
            action_type: 2,
            action_mana_drain: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkUlEQVR4nGNgGAW0BfnT5f77ZYmCMYgNEwMBnBoYkGiQRmSDYJph4gRtZ0AyhCjF6GySQT61NOejhQU+wEisBdO9jf9nbj3LCKJxGpA/Xe7/xMxHGIaCNO0484DBw0SBAUQjAyZkE2GakZ0O0wwC6JrBBoAEYYbAaJhByJpxAbBCf3Hh/zDngWgYIKR548u3jACee2YPLafjPwAAAABJRU5ErkJggg=="
    },
    POISON_TRAIL: {
        name: "Poison trail",
        description: "Gives a projectile a trail of poison",
        meta: {
            action_type: 2,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAWklEQVR4nGNgGIGAEavorYwNJ2/dZGBgMFdTV5sRcCtjg+p0f0ZGVMW3MjbAycVOnRD2YqfOWxkb/v//DxHBDpD14FPBgF8RHm2kqb6F5BNqg1vkmUqav2kCAJr4Kfmxk8KSAAAAAElFTkSuQmCC"
    },
    OIL_TRAIL: {
        name: "Oil trail",
        description: "Gives a projectile a trail of oil",
        meta: {
            action_type: 2,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlElEQVR4nGNgGAUUA0YQ8f//f6yS4eG2/zk4uMBsFRUxhtraxSD1/5csKWaIje0D62VC1wCi4+PdwTRI88KFOxl//PjGcOfOK4bm5liw5piYXlSb/v//j4Hj4tz+g+iwMBswjY5RQBiSIphGQhirC8Jw2EaUAXFINsMMwucaomIBH2BkBGtlwBoLJANcMUB0GAwoAACNqdnYsdX6ogAAAABJRU5ErkJggg=="
    },
    WATER_TRAIL: {
        name: "Water trail",
        description: "Gives a projectile a trail of water",
        meta: {
            action_type: 2,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkUlEQVR4nGP8//8/AyWAiSLdw8MAFnySjP6T/zNwCkE48lYM/zsVGRkYGP6LT2ZgeJnLwIjhAkaQBhAdsRQSNZxCDP9XRDMyfH/HwPDwGANj+X2YZgT4//8/VswQvuQ/mPabBKZxqvuPpgimkVjMgMIhYBteAxiQbIYZRIxrGKmalBmhsUASwBcDxGDqeoEcAAC4ZwVmnoEB/wAAAABJRU5ErkJggg=="
    },
    GUNPOWDER_TRAIL: {
        name: "Gunpowder trail",
        description: "Gives a projectile a trail of gunpowder",
        meta: {
            action_type: 2,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABH0lEQVR4nN1Sr2rDYBD/Xb/JqkBNIURWpLJPMBFT2cHEnmGvMLE3mYjIYDAzU7EniFsqKkcgJjBVG278LrnACFVxO5F8fLn7/buIqmJOLWZN/w+AGz4+nw44njpkacDPd4fNPsb5o+YnSzhK+vsoCbLarrWtGtw+v8mo4HjqsFuCTcrmvKjtzdrsY3FQAhJ4tV2PCoRr/Hp9NEY2EZ1FpryoJUuDOttVC23VKJkIUl6guyUEaGRQdXV4oiBKgnKgvMAsuQ23kBe13bPuXt4xZtBWjTE7G2UThDaG8Kzn4T4eQb0WzpClwZiHUOmdjHbH7wyOIDxPMigpuQfh2oRnNrpcsnrIQB/yHwVkGyTbymiHHjnIIc/AFUzWOKdm/8q/y8qpr9H7tqwAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAi0lEQVR4nGNgoAr4Gi+PS4qJoIqvuKUQ4MeyDAI2YDUSq9lMWJUiW/IVVRsWG5jdPTG1EeVppg4sPmGBUNwLHyIb+d+RULAiOwaumnE/yBRmd09k+7H4AQ383bkdbj+6hr87t8PZEOMxAYoGiEkQpXCHIRuPxUlwSyDakO2EimNa+jVeHuJ7NNeTCQAcRDhxWDsZagAAAABJRU5ErkJggg=="
    },
    TORCH: {
        name: "Torch",
        description: "Lights your wand right up!",
        meta: {
            action_type: 7,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAkUlEQVR4nGNgoAq4bsZHHYMI2IDVHhasGuT8Fa8z3McqxYTbGpA2omy4bsbHFGQjB2NrnvpE2IZ/645wVV0AacOwBIsGOX9FpiAbBgYGDo0pRPmBKcgGq1KcGv6tO8KAGzBhFf1xIwdCcldfRJNiROMfnu7DwMBg4iDPwMDAqTkVj1UgML8hqCDKkoAiMlUTDwAw8yNBwClZ7AAAAABJRU5ErkJggg=="
    },
    TORCH_ELECTRIC: {
        name: "Electric Torch",
        description: "Gives your wand a bright but very dangerous light!",
        meta: {
            action_type: 7,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjUlEQVR4nGNgoAWoeff/PzLfcvHz//QxtAZNETr4/x8ij1fdf6gibDaA5ECaCXrpP9QQdNdhE8cAINNhAJ2PbDNWb9S8gzgRxkYGBJ1tiaYAxEc2hCi/IwNkpyMDBlLAfyTbkfkwC/BqPjzd539BlCXWwIN5j6BmBiRNyPJ4Nc9vCELRDANEBSAuzTQFAGsN19u3PNHPAAAAAElFTkSuQmCC"
    },
    ENERGY_SHIELD: {
        name: "Energy shield",
        description: "Deflects incoming projectiles",
        meta: {
            action_type: 7
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApUlEQVR4nKVTwQnDMAyUhUboBiHQUfzIEBotQ+SRUQKhG3QE0xRBFYwiuw6+j5F1dxKyDNCJUEqsr3TkcRzI5VJJuOzJvbdGZEkq3N6fFQDmX4oBUlRObhKs2Agt+PnAOI10doIOqSR2c+hUr0I4wtWZ4I3qLgehE2hibtDwxSAOFGSyMuF/6pZX4NbqgpAHtUXS7vLqFwM1kdOusggFdpW7P1M3vnCWWxD7VC2hAAAAAElFTkSuQmCC"
    },
    ENERGY_SHIELD_SECTOR: {
        name: "Energy shield sector",
        description: "Deflects incoming projectiles",
        meta: {
            action_type: 7
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAj0lEQVR4nGNgoBAwogu4LPkWriHCtMJHlQXM91BmYSTJACRDEkD6CRnEiE0QZgiIBrkGRIMMwmYIIy4DkA1hYGBI0BBh8sBmCBMDcWABLgkmfLr2xHCthLFvvPm3Y8vtPww77v75T44LcLqCiYFCwESC2gSSDXBBxAIDpbGQgEuCkZDtZCUkipIyqZmJYgAA/l8tFridbvMAAAAASUVORK5CYII="
    },
    ENERGY_SHIELD_SHOT: {
        name: "Projectile energy shield",
        description: "Gives a projectile a shield that deflects other projectiles",
        meta: {
            action_type: 2,
            action_mana_drain: 5,
            speed_multiplier: 0.4
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5klEQVR4nGP8//8/AyWAiSLdDAwMLCCCkZERzNlx9w+Y3nIbQsPAjTf/GEos2f57KLNAFDIwMMBczgITAGmGaQRpQANJILkdd/+gGAL3wg6oZpBGLJpnMTAwfL3x5t8OmCEYBhAAe6H0AmySTCACZjsOsBLGwOYKFhAx2Z0dl2awQtel30H+Doe6wgPDBQxQhVhogoAFROTu/MkI9QIshNFpkO0gkIBuABOI8FFlYdAQwRmeMM0gNR4gtchRyUSEK4Nw2Q524v///8EpkVBC0hBhmotsOywlwg0AAXKSMtgASgDFuREA2yp5UXSeGjQAAAAASUVORK5CYII="
    },
    TINY_GHOST: {
        name: "Summon Tiny Ghost",
        description: "Summons a tiny ethereal being to your help. It may cast stronger spells depending on how much damage you have suffered.",
        meta: {
            action_type: 7,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApElEQVR4nGP8//8/AyWAiSLd1DCABZfEss1nkf3GGOVrTLwLlqFqBoH/WMSwG7AMh0JcckxoCuDsHZuWg+k7Ny+j8Am6gIGBgRFEePhFogii87EaEIUloFTUdRlIioUoX2O4V5CdjcsFLLhMBmlG1oTOhwFG5KQMDWVQGMAFQYGI7I0oX2NwGOELxP/IHGTNOzYtR9GMzQAMBchyBL1ADqA4MwEAtao/KasI11EAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAVklEQVR4nGNgGLRg2bJl/yky4P///0QZwESRLaQasIwUb/3H4gVivYVVMYyPLs7EQAIg2wX/cbgGBFiIsWH58uV4+Vg1kxTiy9AUk5UKQZpggGTNAwoAvlFNYx6iJgkAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXUlEQVR4nM1SQQrAMAiLpa/0gfaZGTtsiDBQO9hyUjAxEYHfwsy4JUAyJTC2tgCYnTiqKqUIDHF8P7NWPUlE3nMw0MBa667lSdlbTR2RgVx6JAvDrS88SRfK5E9xAPArSJDIO56KAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAVklEQVR4nM2SwQoAIAxCZf//He4zjQ5BRIS1S563N5UB34qkSgBJFiBKV24AJLsp2dE0RViXLIgmwKmPQFHhDGUmrAhadFWiNguOO+yGn75wWHQ/8B81NHNZFpWskv0AAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXUlEQVR4nM2SQQpAIQhEVbr/McZjTrToI0Efy02zSnKeaYo8KwAsAUimAFaqkgUA4FSazJAcz+nZcANYY5Oi7NQwWlBVnXHbPS3K3b+7aJY/M04WCUvy1RZe/fUT6oJpTV4dWJPJAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWklEQVR4nM1SQQ7AMAhS0/8/A5/JrqRJN1sPKzeNIqhm1wIAWwQkSwTRmlIlAEBFyR7FwpudqEpdTR5VAnf3loIVQgNdlOYz0z6XyKlp65EwFR99od56u/lXPBOOXEGnPbFWAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWElEQVR4nM2SQQoAMQgDa+n/nxGfmb3KQkpaD7u5CWY06Bi/FQC2ACQtwGxNcQEAWGXFY4mwizPdVdXk5QIiIlobKK1aqKyZKQHSfPRIeDVffWG99bH5Uz2wDkVmwAtPBgAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaUlEQVR4nM1SSQoAMQgzpV/q2/ojP+OjMvQgDNLS7TCTiwsmUVDkt1BVXgmQXBJIVy6rAmZG3yjGPCO3QQBoea2VLviuu4hOo36SjROuNuAgokdy+O3uWErB1PHokTQMH31hIzm2yZ/iAQmpdY1l/Hr6AAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZUlEQVR4nM2SUQrAMAhDtfT+x9BjZhQqDNdtafux5ccPzZOgIr+VmWELAIAClK0tLMBSHCoeeoRcw/waETeA3C9MhJFZVZUGaB/O5qb6tKnJ3S815s4gyeapR7KVM40goWnzpzoA8gJhQBLIGEwAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYElEQVR4nGNgGLRgZ2vcf2LUMeGSMHcyY6DIAGIBE6XeYiLFAGK9BQYfjk/5j42PLs7EQAJA10y04g84XAMCLMTYcHLfKbx8rJqJTUgM2BSTopkRWRMsmgQsc+Digx8AANJtNLHoKQUEAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbElEQVR4nGNgGLRgZ2vcf2LUMeGSMHcyY6DIAGIBC7HegblIwDKHkSiTPxyf8h8bGz1smBhIBO7VixiRDWRioBAwkaoB5AXkcGBBlkR2GjI4ue8UXA5nIH5A00xsQmLAppgUzXDnkBXXgwIAACi1MUMzPLEjAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhUlEQVR4nGNgGLRgZ2vcf2LUMeGSMHcyY6DIAGIBEyEF+yfk/f9wfArcOzA2jGYhZIChuRqDgGUOI0jDhlW7UMJnQaHff5K8kNC/iRFEu1cvYoTxmUgxAGQj1V3AiKwAObBAAOR3UCDCwgGv6R/QNBObkBiwKSZFM9xZIE2w1EfQuYMKAAAb/kNWozUdlgAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAa0lEQVR4nGNgGLRgZ2vcf2LUMeGSMHcyY6DIAGIBC7HeQXbRyX2nGNyrFzESbYC5kxmDgGUOWAPZXvhwfMp/bAHLQqwBFLsAF2BBdyY2RaBAQ5ZDDkScmolNSAzYFJOiGe4M5LjGFWCDEwAAANUuGpXtn5AAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbElEQVR4nGNgGLRgZ2vcf2LUMeGSMHcyY6DIAGIBEyle+nB8yn9ivcYAUoysGd0wkgz4gMRGByxEOQfJZljgCljmMBIdBif3nQLT7tWLGGEaYYARl7ORbcFlOwM+zTuJDW0GckMZCoh34qAFAJ/GOnQB9+1KAAAAAElFTkSuQmCC"
    },
    RANDOM_SPELL: {
        name: "Random spell",
        description: "Casts a spell, any spell, at random!",
        meta: {
            action_type: 5,
            action_mana_drain: 5
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA50lEQVR4nJ2SMQ6CQBBFJ8bCS3gCDwC3kNrWylMMNBbG3sZQYmK1FBZYEAqL4QKewStYjRnCwoK7BPjJZmez+W9mdhbAEOakYK4wJ8XMrCEnJIVJvejRARPG9kRomLknDRGznJ2QwmJuIccGMsp8IVSybBCtpXlYwRsAvCp+lmF68KNA4g+tVejttxJv4Dv8mISxygibLEjXTgV34270ZLQod5gT/J//JDMzcx+C5xZAsbvsxS7yg1tYprKPbq03CaekKsJudjFLVU5IVr+ybq1qwQJxmsUgO+HLADh+3lAFIoFMMs/RD2ItHyhmhpnsAAAAAElFTkSuQmCC"
    },
    RANDOM_PROJECTILE: {
        name: "Random projectile spell",
        description: "Casts one random projectile spell",
        meta: {
            action_type: 0,
            action_mana_drain: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8ElEQVR4nGNggIL6fSc2MJAL6ved2PD/////MEPql53YAMYntmI19ET9PEzxeqjmrnqIYTBQf6JtA7pmkDhWQw5ANe88Ub9hOhTjMgTGZkKW4GC4BmdnWjQGwNjaDD9RLLJoTILLYQCQ7TB2/Yk5EOfuQ4iRHLAnKNI8r/45IbVMIGJZPVoaOMdgDqYfMpwkaNsyaMijG4JhKCFDGLAYihxdm+97g9PF7f/V/4ky9ET9kQ39h9X/wzQiA2RDmNA1wqLxuEuyv4qMCoOGggHDHYYaMAYBEH3jwQXstoI0w1IisjjMJSCbQTRep6NrpjkAAJ0b1H+w6TYAAAAAAElFTkSuQmCC"
    },
    RANDOM_MODIFIER: {
        name: "Random modifier spell",
        description: "Casts one random modifier spell",
        meta: {
            action_type: 2,
            action_mana_drain: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVR4nGNggIL6fSc2MJAL6ved2PD/////MEPql53YAMYntmI19ET9PEzxeqjmrnqIYTBQf6JtA7pmkDhWQw5ANe88Ub9hOhTjMgTGZkKW4GC4BmdnWjQGwNjaDD9RLLJoTILLYQCQ7TB2/Yk5EOfuQ4iRHLAnKNHc0dHxf/Hixf9h4kUZKXA2Shgsq0dLA+cYzEGUw/fvG58+fcoAMsjf2/P/3cdP4UouXrwIMWwZNOTRDUHmg2wGGXCrrg6MQa4C0VgVIxsKii6YZpgmdM2MDDjAifojG1a9XOAPcvbGrdsZYWFhfvs2w9PLlxkc169nxEgHDEjRiKwZJqenpwfWjBOANIOcDnM2TBzm7P2BgRixgNUQXHJEGUAqAADfLvYdUolNsQAAAABJRU5ErkJggg=="
    },
    RANDOM_STATIC_PROJECTILE: {
        name: "Random static projectile spell",
        description: "Casts one random static projectile spell",
        meta: {
            action_type: 1,
            action_mana_drain: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABE0lEQVR4nGNggIL6fSc2MJAL6ved2PD/////MEPql53YAMYntmI19ET9PEzxeqjmrnqIYTBQf6JtA7pmkDhWQw5ANe88Ub9hOhTjMgTGZkKW4GC4BmdnWjQGwNjaDD9RLLJoTILLYQCQ7TB2/Yk5EOfuQ4iRHLAnKNI8r/45iJ+w+/t/ZIyslgVELKs/sSGq0QLhr3MM5gyODAwMDxlOgjQcTbBDsQAktsCVk5EBpvn/////QTSyIhAfpFBV2hSM69OXwNkgjOKSZVg0gwxFNgAZw+Tg0RiF7Hwo/2TD0Y1gtk8+QhzKVpMxYyAqGhPQvABOVFCvoAcmXDMsJeIyBF0zJCTRDHFHSoUwQ5D58BigBgAApBL9eAiZpjcAAAAASUVORK5CYII="
    },
    DRAW_RANDOM: {
        name: "Copy random spell",
        description: "Casts a random spell among the spells in your wand",
        meta: {
            action_type: 5,
            action_mana_drain: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1ElEQVR4nGNggIL6fSc2MJAL6ved2PD/////MEPql53YAMYntmI19ET9PEzxeqjmrnqIYTBQf6JtA7pmkDhWQw5ANe88Ub9hOhTjMgTGZkKW4GC4BmdnWjQGwNjaDD9RLLJoTILLYQCQ7TB2/Yk5EOfuQ4iRHLAnKNI8r/45utzvK7n/kflMIGJZPVoaOMdgDqYfMpxE18yiPQnVxGXQkEc3BJ0P0gwDGE5ehkUztrjGaQA2cKL+CEbgEWXATqRoJNkAkGZYSiTLAHwuQA5E9KikCAAASJ3dxIeiifgAAAAASUVORK5CYII="
    },
    DRAW_RANDOM_X3: {
        name: "Copy random spell thrice",
        description: "Casts a random spell among the spells in your wand three times!",
        meta: {
            action_type: 5,
            action_mana_drain: 50
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5UlEQVR4nKWSMQ7CMAxFDRN34QD0GByhYmPsCawuDAxZWVDHzlkYKqSKgcEsjEiMTJyByahtHNIklSh8Kapr5/1YTgCMsCYNvwpr0szMYoIl6XbRIWpKWIR5NPAWOzMR0kb7cJOPmpwMXBHqnVlDJhJP3cIMbjZeJ/lS4jm8egcl+crWAjWnS4y079qtP7nRg6W/4AKfbt5OVinuzaBE7w1cYdF+H3CxsFI8MYIsa/9BYGZm3yQw9TtxuoAY7G5qwkF4SIRn7cNfmVTONQrsm8gso7C8RL92T9Pj6A6C1pUKrvFvvQHPRvCF6G2rowAAAABJRU5ErkJggg=="
    },
    DRAW_3_RANDOM: {
        name: "Copy three random spells",
        description: "Casts three random spells among the spells in your wand",
        meta: {
            action_type: 5,
            action_mana_drain: 40
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3ElEQVR4nGNggIL6fSc2MJAL6ved2PD/////MEPql53YAMYntmI19ET9PEzxeqjmrnqIYTBQf6JtA7pmkDhWQw5ANe88Ub9hOhTjMgTGZkKW4GC4BmdnWjQGwNjaDD9RLLJoTILLYQCQ7TB2/Yk5EOfuQ4iRHLAnKNI8r/45svjvK7nggAXRKGGwrB4tDZxjMAfTDxlOImtm1ZnMCAIs2pPAfAaY5v////9HNwTDUCSA7goGbJpxxTWGZlzgRP0R4l3AgASQoxGfASCAVTMsJaLLIdtItguwRSPFAACS+uH/POzTkQAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3klEQVR4nGNgoBAwgohTUxj+g2gZSWGGNU/rGRne7mJgEHZjEBUVZYiMjMRrAAuIeM7oyfhNKO7/3V8MDKKiDP8PXZdlsNMAa2YkyQUgcFd4OYM9Ww7DwV9TwHxChrCACLMcBsb29naIIZ8fMGy86Mqgr/+AgYuLi5HkMJAMeoOi6fRURrzhw0jIho1TPRlA4QPjHzp0iMHOzg7uNUZCBhAKHxZCBhAKH0ZiXYAtfBgZGSGxgK4QObDMcvKgmt5itY8FxsCVmAi5khHdBSBASmKCu4DcxIThAlyBRTMAALbkb/1OWDpaAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0klEQVR4nJ1TMQ7CMAy0K97QCcTCwtKJCfED3sDOk7L3Df0BYmLKwsKCYOongi7gyAoRMfXQRI7P5zu5RETk+iH46yOoO/0drh9C3siCYxRuNx2dL57uz5GW8zY+INetF1xr0BwPexbweDvFE2EBxwb+MzKY29UunmDPJcAXyQGT3l2WLGn/VcO6CHJQBEm4K/aYQ4hP4htbdAqB+CRSQTKzgsFIhCneYJmMqiZZdsUZjSwtGddM0maWosFHlkYvkwWcGohJepm+TLLE1B8qgacAX/Bh6TbeDy01AAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXElEQVR4nGNgoAb42u3y/62DKAMIkwqYQMSPrRcZWQxkGDi89f//uNDF8P//f6INYHnrIPqfRVWckS1eD6zr7+5d/3+I/wUZwsjIyEjYAOEDrxnfMjD8Z9nzFCzAVbIbJgcyEG6C7jST/wdWPQTzhQ+8RvUCh7c+I5OLNAOjsTzjjxcdDP9+PQIpRLEepBnkTYcweRRvMoEI7tI9DN8KtzH8e/QGxGVkZpdnQHa+RoknyJsMRSk//5vZfWMwPbbq/4kPKf9BhjASG1ggQ1iVIE6/lHka1QuENILos+K/GUG2n9TQZzzxIQWrN8Fgc8N/nGkCZNiXBf4M35+3M+AEbx1EGT4WGIINAgUWIcCIzOmN+f8/hVOX8aH+ZbCzH75hYLB2YmAQtAWFKfbgYkQXABmipgJh+9QjKcRhAjwQQRpBdIa+K6O8CAODs10K4/vDDLgDCx8AGUYwsKgFAPv1kLFnLVltAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABE0lEQVR4nGOw7PrCAAIJmz+DsBeIDRMjCZQf+sJQcODef1L1MYJsZmX5yfD7D3u9rTZz3eVHL5g+fBZlXODLS5QBTAwMDF7cnJ/+z/fhaUhS5GTSlZP4J8D7+j/MOyCA7M3UBR4TkcXgYO69b39BGJ83QN5c+X/KdmQxJphJJ25+YwY5f4KDEiO6RrDN298wGNku2C7L8MPj2P8ekAsxbUhAcjYyADkbZDNIIwyA+DDvEA1ghqB7gyCAeRPkDbyaLbEkKnRAlLPLSUhUjMgcWKICpQtQejh89W8TAwNDI75ExYTGBycqkGZQogKlTPRERRQAOR8EQAmLkFoUF8AC8et3PsbCg/cZkpW4mEmyGRkQ62wAHt6pu3NFHJ4AAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0UlEQVR4nGNgoBAwgoiQ2hkg6imPXbwUiPHl0MJna5ozpIk2JaR2xlNVadP/IAwCIBokRoxeJhABsznKJ59BTcaMAVmMKANgmpdtmQhnEwtYYH5etmWu1K0np8AuABmkL/blGUwRUWEUUjvjacLu7/9BGN3/IH59+hJw2MAwsWEEBiBD0QMZJIYSBsQCkBeRw4iFGH+C2AwMDOAwashYihFGKGkB5kR0f+ILIzAASaAHFMyf+AATMgc5HYCcSwyAGwD1JzxBgQILJkY0IOhPWgAAdKOpNb5Di2gAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAp0lEQVR4nGNgQAK2fVr/GUgETMgcDQNWBooM0FXSIt+A1H36/5FpXADdm0zoCgi5At2bTDBbYRrtZZLwugLdAiZkDkgzPldg8yYLiJjtdJExdR/DfwaGeWDBPIXljPi8AbHgIgNBYIsUYCBbJz2IBOOLf3b/h7mCCZ8B2NIFujdZiHUqqd5kgDmZULpgwmsKEekCqwGkpAu8LiCULkAAZ0AguwJfgAEAa71IkiDHKJQAAAAASUVORK5CYII="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoklEQVR4nK1TiQ2AMAiExiFcwCl0GCdwGRdwGJ3CBdziTI0PRbAxStKk5Qp3hcJkGOYGlp+rkS1/EiiDMTSIy8OjFRLMMRz47S4MyQmz2OuYQF8NGfacivBVQGEy1b4ybtNCBy/zVuWeKK7H7kD1/fChE/7u6r/+F4H+MERGlflk3pXcfuh+5hOcRMbSYVrEvla18QbIU+w/5SGRhZvteTPOK9VvjxeityNcAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABjElEQVR4nJ1TMU5CQRB9iz/WNsaeUHAAEjdqCAUnsCOh8Aj0EKtfqMHkcwMLEzpsLH8C+VFZEg9gAvlnsBbMmLewsItg4SS7s7OzszPv7awSEeySUcdQSS3WCn9IYZ+jFuu9QYsZNllF5Ne4adzKsD2W+VSsps19roftMebTzdnIu1ElzQSVuhaTZzjID3FxpfGeGhhkGHWq9sw+CIoTgxlwjjrX1kFNm/ssmFNU2sHB/fWd9NLYrluPLRsQlcRq2hT6J3kWsB65G0+LVVs2MxLKK1IMyn2cHB0DzWUlSIFKMSRXkRguiHd9a0lwVta4PGpg8NnH24fBYraE//Jg/JdSrEDxyUYdY/EzEzUzM5i6q3vrfWoGrvoEBffekzyzZTvMJI6ZqR0n9PNcAEG8TnRVOPYJiyX7e700Vk/mOXyFrk6kqxPr5CFXCcVldsHbfRD5fbC6WU3yqpBtZmfgd/61zsymW8ygXC8Ef4EQSI7JM+WykTDaPuygBP8PsM85PNv+Ad/e/gsBif+RH8uaGz0JvGR2AAAAAElFTkSuQmCC"
    },
    ADD_TRIGGER: {
        name: "Add trigger",
        description: "Makes a projectile cast another spell upon collision",
        meta: {
            action_type: 5,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyUlEQVR4nGNgGNTg82Tx/4TUMOGTZDGwYCDJgM9INl7P5p6FTBPrIobvh/3/gzSBFH+/X/0fRIP4IHGCmkEArPh+9X+QBmQa2SU4vXA9m3uWjAZPKsOTKwwMMjoMHOJ6YBrEB4ljM4QRRICcCQ8wkAYGBohmKPjx8hKEATKYgYHhz4UTDLy5L8F6GbG5AGwY1AVgzU+ugDU9ufFltubUr2k4vaA59WsaSBHM2TDNID42zdSPhc9o6QBmGDZ5ogAxtuJNyqCAozkAAPL8jV9Ba5JmAAAAAElFTkSuQmCC"
    },
    ADD_TIMER: {
        name: "Add timer",
        description: "Makes a projectile cast another spell after a short time",
        meta: {
            action_type: 5,
            action_mana_drain: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwUlEQVR4nGNgoBAwInOkzdP/C8gYgNkCEiZw8Q8vzkDoJxcYnp6ciaKHCZmDTTMyHyaPEyxfvvw/qfJMyJzTp08zkAoY0QWKior+m6h/ZzDUU0cRv/BAnCEyMhJDPSM2U5ENOX/pJgMjnx1WzTgNQDYEn2YGYgLs9evX/8nWDAMkGbIcR1QSZchyNM3Xj08g6BImXIYtm5kJVoxsyJ49ezDUoYSudvB0sGL0pAwCsPxwdW0m7rwAyizIitE1w+SpCgCsJl9cS/ZqowAAAABJRU5ErkJggg=="
    },
    ADD_DEATH_TRIGGER: {
        name: "Add expiration trigger",
        description: "Makes a projectile cast another spell upon expiring",
        meta: {
            action_type: 5,
            action_mana_drain: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhklEQVR4nGNgGGjAiE3wxr1X/9HFNJTEsKplIkYzPnEmYhThk2fCpvDImRtgjM7GBljQBUIiE+Bsm+ULGCb0doDZExgYGNYsX4DfCxSDOasO/Qf5U8fcC0xj4xNtyJxVh/7be8XDDSFJ8417r8CakWlchjBSPSExoGnApRGvAchpAJkenAAAJ557Akr3ORAAAAAASUVORK5CYII="
    },
    LARPA_CHAOS: {
        name: "Chaos larpa",
        description: "Makes a projectile cast copies of itself in random directions",
        meta: {
            action_type: 2,
            action_mana_drain: 100,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdElEQVR4nGNgoBX4////f5Lk/qMJvjuD3QBc4lgll2UewcvHCpYhKSp37cfKJgjKSVFMNfAOzf8wPihwYQEMchlGOLzDoREGkA1AVoMvmqkDyomMARZsgiB/Rk23YSTb9ndYUhtRiQgEcAUO3iRMLKBJyAMAaMts48axQJsAAAAASUVORK5CYII="
    },
    LARPA_DOWNWARDS: {
        name: "Downwards larpa",
        description: "Makes a projectile cast copies of itself with a downwards trajectory",
        meta: {
            action_type: 2,
            action_mana_drain: 120,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeElEQVR4nGNgGFRgWeaR//j47878B/P/QwFcoty1nyiNMIBhAD6AbDi6RSSDZWguAwEmcjRhNaAch/Mu3jkNZ3skWxPjUAYUw5BdQHTALUPShB4DJHtB0Bi/ZUzYBJH9ysjIyEiUAfoqpkTbihUQ8itBQHQIUxsAAHhXTaXNRNTaAAAAAElFTkSuQmCC"
    },
    LARPA_UPWARDS: {
        name: "Upwards larpa",
        description: "Makes a projectile cast copies of itself with an upwards trajectory",
        meta: {
            action_type: 2,
            action_mana_drain: 120,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeElEQVR4nGNgoBb4////f3L0McEY78+SZzETjLFj7lGyXMMEY1y8c5qBHNcwYRMk1zVwsCzzCFzTuzP4DWDCJojsHaJdU+7a/5+QOCHXEPQOMpsssAyLAUyENCF7ATlsiLJhGRofFgagwEQJUPQAxKURBjAMGFAAAMOLXOHEnmLmAAAAAElFTkSuQmCC"
    },
    LARPA_CHAOS_2: {
        name: "Copy trail",
        description: "Makes a projectile leave a trail of copies of itself",
        meta: {
            action_type: 2,
            action_mana_drain: 150,
            fire_rate_wait: 20
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAgklEQVR4nGNgoCcod+3//+7MfzAmWzMMwAxhYqAHWJZ5BGwjshdAbJAcIzEGgDQIGjMwLM86ynDxzmmwWOfuQsJ6y137/4NsR3YB0c4uh2qGBRjJmt+d+U+5zcsyj5Bv8zJSNYMAOX5mhDFAmmHsqOk2REUvHJAd2sgGkK0ZBsjVDABosqjB0kvxHgAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyElEQVR4nGNkIAJM9zb+v+PMAwzxjS/fMjLh0vT/////hAz2Fxf+z4RLw/uzxLiNgQFuACMjI+O7MwhDhEwYGZdlHiHoCiZkDrqmi3dOE+8CGIiabsNY7toPNqRzdyEjAwHAyEAkwBUTTDAGsv+R+f+hIHPrWUYPEwVMA95BFYL8j6wRxqefF5ABLBAJacZqwLLMI/9hoY9uEDbAgswB+R/Z7/oqpgwMu4k0ABTSoNSIyzBcACUpI0sIGhPSimYAOkA3EBsAZWcAZQpkbwFC20MAAAAASUVORK5CYII="
    },
    ALPHA: {
        name: "Alpha",
        description: "Casts a copy of the first spell in your wand",
        meta: {
            action_type: 5,
            action_mana_drain: 40,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkUlEQVR4nGNgoCX4eaUgn5AaJgLykT+vFJzAp4CFgAHmZLvgJ8TmaUhs0gxggNh+iJBLmPDYHsGuM2EliCbkCgzw80rBf3Q+uhhOF/yE2o4mjNMVjIRsRwfsOhMw9MAByIafVwrCcciFQ72COyx+ErAdW1gwIduOxe/oAHeMELIdlyvALoCZSCiukeVJShf4AABkjV9dwDRtSAAAAABJRU5ErkJggg=="
    },
    GAMMA: {
        name: "Gamma",
        description: "Casts a copy of the last spell in your wand",
        meta: {
            action_type: 5,
            action_mana_drain: 40,
            fire_rate_wait: 15
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYElEQVR4nGNgoBAwInN+Xik4wcDAYE5Az0l2nQkWMA4LmmQ/AwPDChCDXWcCiuFQC8Jh8jjBzysF/0EYjzzIlXDAxEAiQHY+WQagAyYGCgHTqAEMw82An0jJFD3J0gwAABqEGtWIJPCeAAAAAElFTkSuQmCC"
    },
    TAU: {
        name: "Tau",
        description: "Copies the two following spells in the wand when cast",
        meta: {
            action_type: 5,
            action_mana_drain: 90,
            fire_rate_wait: 35
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAa0lEQVR4nGNgoBAwgoifVwr+k6OZXWcCIxMS/yQDA0MESBCEQWwkOXRxkFoE+Hml4MTPKwXh6DaAXIbNdSC1MHEmJOesJMHpKzFcgQ3gcgEyYGKgEDCNGsAwiA34iZQysaVSYlxQiINNXQAA2s0sHgnoeyoAAAAASUVORK5CYII="
    },
    OMEGA: {
        name: "Omega",
        description: "Casts copies of every spell in your wand",
        meta: {
            action_type: 5,
            action_mana_drain: 320,
            fire_rate_wait: 50
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR4nLVRMQ7DIAw0VSU+wxu609cwlhekI6+Jd9aufIYpFa2JiMESUdWTIhk4n88XgB+hpIec3AoAlo6oTbhPCeRjI0cndBGaEQC8NkGVr9R0Z4nTC+TkHs3kqE141jeqIx0tcTsHt8bm3sxEkHGhFZD2HsGOBPCEAI4E4oSTPaNOQH93fJWaJ83uDhmpAXGj0lcipb7QICX9xq028qSb2jMuXIXpEpac3MdJ56DuP4kz3D/jDYj+SidNfvdeAAAAAElFTkSuQmCC"
    },
    MU: {
        name: "Mu",
        description: "Every modifier-type spell in the current wand is applied to a projectile",
        meta: {
            action_type: 5,
            action_mana_drain: 120,
            fire_rate_wait: 50
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArElEQVR4nKWTQRKCMAxFP93kMt3jTcwx8CY9ht5E91yGlQ6dUiPmR2foAloa3n9hKHBwDOtlmac7gBHAQ3I5seJlns4Arm1Zawez+WxTlVxuBLDVQHKp7yan7hKkf43kPFtbAQHrL4AGaS442YXp/aONDeh9m0R0x3/0GUBtaqTvAmTXRqTPDPapVD8CqEmn+hQgb9362zL9yKBbRPod0A5Tv9tUm2737fzQeAE6hkFfoQdh0gAAAABJRU5ErkJggg=="
    },
    PHI: {
        name: "Phi",
        description: "Casts a copy of every projectile-type spell in the current wand",
        meta: {
            action_type: 5,
            action_mana_drain: 120,
            fire_rate_wait: 50
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvklEQVR4nK1SwRECIQzc40Mz/M8OLMErg6vAsQIo4yzBDuRPM7x00OBFDYyoO8NMyLIhCwF+xFAjUrRnACNtgzZ+0109RXvJq6uDFO0OwMxuLwgAnDb+yJNKEC851sY/irN4oTPvBdIqFv1SLrwWUSTeUtsZ+4blws2kAbdw86yNP9XUjBvFN/gGisWB2RHBuPBUQN9bc5Q7NC4snCt2VGHof6fsj6awNpkTn4VBONg1SE18MsrVX+A2JEt/wxX5XFYQoBE5fAAAAABJRU5ErkJggg=="
    },
    SIGMA: {
        name: "Sigma",
        description: "Copies every static projectile -type spell in the wand when cast",
        meta: {
            action_type: 5,
            action_mana_drain: 120,
            fire_rate_wait: 30
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsklEQVR4nKVTwQ3DIAy8RJVYhn+6SbpF6SSlWzSbhD/L+NUKBSqgNgLlPsiyfb7EZ+Akpjwgb3YAS0+j0rboLUjImw95swr5NeRTPDM1z/g+OAKl7QbApXgSpqRPcUrbK1fTJAjIZN7iVBazlABg4vtu1EAkUNq+Wo09ChJ+P2yIgLy5V1sZAx1eCNvAsAI6Gp00PSe+MMngwOABdn21Q/98kJuooXxJt1AoqI6p66hO4wv/XkOcKhnxQAAAAABJRU5ErkJggg=="
    },
    ZETA: {
        name: "Zeta",
        description: "Copies a random spell in another wand you're holding",
        meta: {
            action_type: 5,
            action_mana_drain: 10
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApUlEQVR4nKVTwQ3DIAy8oEosw7/dpNmidJIyRrJJ+2cZv1qlATUiZ6DKfWwwvjPYAAcxbBcS/bsz72VduCzOiQRH68Jcbkr0VwDTNnmBIcy75IR7sg/1Chok+ieAc6neRSC/0mFd2J03LYKcDMCz4HBEvaeCKdlRO2Aq6rfsVzqDWgWhpa4SyNq21lxwAlkfjvacCNAK6MQRgS/Kz5QnrgmtrX/jA75jN8QYQBLSAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAOUlEQVR4nGNgGAjw+vXr/yAMYjMxDCnwGursIaD5NVIoE9LMgq5IVFSUEVkBOp++fh+mhoDA4MoLACn6OMlrdP0AAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAP0lEQVR4nGNgGAjw+vXr/yAMYjMxDCnwGursIaD5NVIoY9OMLM+CrkhUVJQRWTGMD1ODLk9bvw9TQ0BgcOUFABrXREmxPrLOAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAASUlEQVR4nGNgGFLg9evX/0EYWYyJbjYzUFPzaySvMBEyQFRUlBFdE1G2voYqJqSRBd2ZMBupDl6T4CqSApH20ciAZtDApESaAgBnsVbLxrs76QAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXUlEQVR4nGNgoAZ4/fr1fxDGx8YFmMi1iGKXYoDXSM5GptHZeMFrNP/j0kyWV16TErivSVDMgu5MUVFRRgZagNfEuOo1JYH4mhrRyECCN2AAnJQpyQvgWCAW0CSGAJ4Gv82XkofkAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAr0lEQVR4nGNggIKPPVH/XwcY/mfAA0BqQOD79Wy4WiYGEgCbtyCY5tCYwsDTboWQeB1gCDYZ3RXoLvqPBuAuYLPRRLEBBkQ3nGckymnfr2fDTQWxcbkAlzoGbE6DGYDNEJBXYXwWfC4Dee3XkesoYpyaU1G8xQQiftzIgQsgs0kC39Gchitm0AELLqchx8yvI2S6CGuIowFGXBIgjSgKGRmxqmUiw3HEGUCTmKEJAADoL6hohgO/qwAAAABJRU5ErkJggg=="
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABZUlEQVR4nJ1SMUjDQBR9l1FQ1yrUQRCq3cSCIFZIXbM4ZNAOnTo46CRU0U2wax3rkqF16FDETg4WKbiIuEirIDgoaFYtuJ68K1fSI5HgX97dJ/+9919OAICdr8of/wVjiTloZIX1dH0+tBRaHE6kU+qiMXg2kWQ8Ty06eOq1hNWuFYXffcZszkG9tDpU0r1y7kYh7+5MGWfbd8j2C0NCMb/gSB7IaNoze43jb+w2t1DZqCukG6EzIOPrdWuoFpYBHawsJXF7/47OuIfz/ayw9H60pe1FZdB4K8E9nEDlIq1Wo7C1vL4nqUhm2iLy42Au2hWd9LqXmJxOIZk5AvMTZN886Ugqa3tUiMqFBEIM5lSIdr4qvR0f7kEfXx+D3a+8DAqnCZi5UHHkMfAdtGtFQTuaXdszcwm+kciSUqpfylzo7LG5NoLsmzMiiszMRf+2WAT2H7mE5RC5Di0HMdZgGNG/BuPWLw+j5l4vt0UOAAAAAElFTkSuQmCC"
    },
    RESET: {
        name: "Wand Refresh",
        description: "Reloads the wand immediately",
        meta: {
            action_type: 6,
            action_mana_drain: 20,
            reload_time: -25
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAe0lEQVR4nGNgoBAwYhP8/+aRPgMDw2o04VBGEbmLeE37/+aR/v83j279f/OoBYtcC1ROH69mBgIApyH/idCMTS0TzHYGBoZVxBoAUoviiv8k2I6uh4mBQsA0aAwIxRb3uABUbSj1ohEKQK4gKiFh2I4kSXJSpm5mIgcAAKwoa5++zTIjAAAAAElFTkSuQmCC"
    },
    IF_ENEMY: {
        name: "Requirement - Enemies",
        description: "The next spell is skipped if there are less than 15 enemies nearby",
        meta: {
            action_type: 5,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOklEQVR4nGNggAKTrTfyGXAAbHLKzXM9UBTMfPn/PzaF2ORAmqO3X/wPN8QEhwFEaQYBkIL//1EVYhPDqhmbBmQ2siEgjSAXIRvABNMMok233Sw47aU+AcSe9QqiAEaDNFmYmGzvmjXP825t8g6YASwgzakmEE1pYgwYYPaZmwUg+dkMDAV2RuoMJ86cQZFnOeOtMZFh6w2IYjSNYDkQ2HqD4f25ozcZTNQZ8AKTrTfy77848B+Ej1+fhBGA6P6HhwEIgBSvNn4B9goISAjqMUxW2jUBXwJDMQAZJKTEMrx4f4mhorQbRfzQuUsMRBmwYM5ihmWrFzJ0dJfCxUAhf+LMGc+ytKTtGNHIwMDAAAqw0LMSBSCbQcDIUgGb2VhdgQJAfoYFIHpAggDe1IhsCDKNDogyhBCAaQYAhaXrnCWM/iEAAAAASUVORK5CYII="
    },
    IF_PROJECTILE: {
        name: "Requirement - Projectile Spells",
        description: "The next spell is skipped if there are less than 20 projectiles nearby",
        meta: {
            action_type: 5,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABX0lEQVR4nGNggAKTrTfyGXAAbHLKzXM9UBTMfPn/PzaF2ORAmqO3X/wPN8QEhwFEaQYBkIL//1EVYhPDqhmbBmQ2siEgjSAXIRvABNMMok233Sw47aU+AcSe9QqiAEaDNFmYmGzvmjXP825t8g6YASwgzakmEE1pYgwYYPaZmwUg+dkMDAV2RuoMJ86cQZFnOeOtMZFh6w2IYqggTAxMg8DWGwzvzx29yWCijmEBE1wDGkAWwyYPdwEDNAym3dcAe0NGUpjBD+oiECj+dH5iZGQkA14DznhrTMzaegOkeMLdXwwMxb/OTzh06BCDnZ0dQy+fIUgJ2AWHzl3CborJ1hv5p6Yw/Ifh5cuX/3+2VhhMgzC+aGRBdkHwpfVgbzB8fsCw8aIrg77+A4a1eoEFyGGA7gpGrGHAcbQApuC0l/pERkawMjCApYcTZ86A0wNcBjnJ4gt1dEPwqcMLYOEAANlf+8JBsu7TAAAAAElFTkSuQmCC"
    },
    IF_HP: {
        name: "Requirement - Low Health",
        description: "The next spell is skipped if you have more than 25% health left",
        meta: {
            action_type: 5,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABA0lEQVR4nGNggAKTrTfyGXAAbHLKzXM9UBTMfPn/PzaF2ORAmqO3X/wPN8QEhwFEaQYBkIL//1EVYhPDqhmbBmQ2siEgjSAXIRvABNMMok233Sw47aU+AcSe9QqiAEaDNFmYmGzvmjXP825t8g6YASwgzakmEE1pYgwYYPaZmwUg+dkMDAV2RuoMJ86cQZFnOeOtMZFh6w2IYqggTAxMg8DWGwzvzx29yWCizkAQmEDDAF0cm//BLmBA07zcazHYO5HILsADmJA1g2gVhhYwRhaDgUPnLuF29u3/1f/RAUgMPR1gjUYGEgBeV8ASDnKCQldHMDWCnI3udJINwacZ2RAQGwD9Y/01cp51GgAAAABJRU5ErkJggg=="
    },
    IF_HALF: {
        name: "Requirement - Every Other",
        description: "The next spell is skipped every other time this spell is cast",
        meta: {
            action_type: 5,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABF0lEQVR4nGNggAKTrTfyGXAAbHLKzXM9UBTMfPn/PzaF2ORAmqO3X/wPN8QEhwFEaQYBkIL//1EVYhPDqhmbBmQ2siEgjSAXIRvABNMMok233Sw47aU+AcSe9QqiAEaDNFmYmGzvmjXP825t8g6YASwgzakmEE1pYgwYYPaZmwUg+dkMDAV2RuoMJ86cQZFnOeOtMZFh6w2IYjSNYDkQ2HqD4f25ozcZTNQZ8AITaKiDALbQR/c/PAxAAOYVkB8tJqwAewfEx5fAQIAFXTOyJDhMQOED9cKhc5cwDGBCUYwFwMRBIX/izBnPsrSk7RjRyIAUXegAXRybK8AAFoAg0837l2MNSBAgmBpxxQJJhsAwdrciDAGxADb0BNu8kz0bAAAAAElFTkSuQmCC"
    },
    IF_END: {
        name: "Requirement - Endpoint",
        description: "Any Requirement spells before this will skip all spells between them and this spell",
        meta: {
            action_type: 5,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVR4nGNgYGBgUG6e68FAAJhsvZGPVUK5ea5H9PaL//EZAtI88+X//2QZYoKkmWRDTLbeyP//H6EJnQ8CTMiG2BnpMVAElHG4gigvgABII0gReljg08yCLoCsCZk/+8zNAnTxM94aE7EaIGhkrX7aS30CspjptpsFqSYQsTQxqNjWG7hdANMEomGGwVwxG0mMCV3ToXOXMAya9QrhZBAmGIAmeEIePS0wEbId5GyYrSBNoHCAeQ3FduT4x2UzTAzFFbjyAbY4RzcQxQVYA4YIAADEVdVpZwOMywAAAABJRU5ErkJggg=="
    },
    IF_ELSE: {
        name: "Requirement - Otherwise",
        description: "If a Requirement spell before this succeeds, the next spell is skipped",
        meta: {
            action_type: 5,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFElEQVR4nGNgYGBgUG6e68GABkBiM1/+/w/CuOThjOjtF1EUmWy9kQ/SCKKR2ciaUfQo4zDkPxTg08wEIu7WJu84ceaMp4WJyXZkQ0y33SwAYWTNIDUgtSA9IDEWZH/ZGekxnDhzBmx7qon6hDQxiPisVwwMDFtvMLw/d/QmTA0MMKIHDMwGQSNrdZAYyKDZZ24WgDSj2w73AjIA2QACZ7w1JoJokGaQISADYXLIgIkBBwB547SX+gSYISAXYFPHxIAHgAIQZgguwIJNEORc5EAEhwMDQwFRBhw6d4nh/bkzN0EaZqMF4iGmn7idogxNurB0gCsFoidtFnTbYQAcC1tvYFiErAbFdnKTMvUyE64wIZSdATyPA3DHfdXHAAAAAElFTkSuQmCC"
    },
    COLOUR_RED: {
        name: "Red Glimmer",
        description: "Gives a projectile a red sparkly trail",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlUlEQVR4nGNgoDU4zsX1n2jFH2Vl/4MwKWqYkCWvvX0LV4SsARsbBhixOVlLWBjM5n/8mBFdE8wSy2/fGDFcgCwBAri8g6yGkZBidAByFTKfCVkC5jx8AGQRcsww4gsDYlzAiMsWfK5ANoQJl2Z078D4eL35Eeo/mCHofLyp8iNS4CAbQIyXMAC6Qeg2E50/SMpI5AIA+MhmQeeOS1wAAAAASUVORK5CYII="
    },
    COLOUR_ORANGE: {
        name: "Orange Glimmer",
        description: "Gives a projectile a orange sparkly trail",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkUlEQVR4nGNgoDV4mKP8n2jF/9c4/wdhUtQwIUs+OvAArghZAzY2VgPkp9xlxGUIMh+mBgQYcTkTlxdAmkEWYRjwn4Df4RpC9qJYyoge4nIOCgQNQXYFI7okIUPwuoBY7yAbwoRLM3JII/PRxZnQNcMUwPyIzEePAQybH0KTLcwV6DTRAN0g9PxAdP4gKSORCwCwTnc7JDwQegAAAABJRU5ErkJggg=="
    },
    COLOUR_GREEN: {
        name: "Green Glimmer",
        description: "Gives a projectile a green sparkly trail",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAm0lEQVR4nGNgoDXwnqr3n2jFtZej/oMwKWqYkCXPHboCV4SsARsbBhixOdnITgfMbtZdxohNE8iirdmXGLEaAAL4vIGsGQRYYAxCfocBZM0gwIjL+fgAXi94EzAEFC7IfCZCTkQH6F5lwqUAFqXIzsYmzoSuGaYA5hJkPnoMoBhQC9WMrgCZT8h7cABL/zDvoOcHovMHSRmJXAAAqtJsobyimQQAAAAASUVORK5CYII="
    },
    COLOUR_YELLOW: {
        name: "Yellow Glimmer",
        description: "Gives a projectile a yellow sparkly trail",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlklEQVR4nGNgoDVY3q/xn2jF/x/G/wdhUtQwIUuuWHcSrghZAzY2VgMiC28w4jIEmQ9TAwKMuJyJywsgzSCLMAz4T8DvcA3yCxmxeoFRfiHc+fgAyCLkmGFEVwCSjAgyJ9oFjLhswecKZEOYcGlG9w6Mj9eb/6H+gxmCzsebKv8jBQ6yAcR4CQOgG4RuM9H5g6SMRC4AAGF5gAOsRFc0AAAAAElFTkSuQmCC"
    },
    COLOUR_PURPLE: {
        name: "Purple Glimmer",
        description: "Gives a projectile a purple sparkly trail",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlklEQVR4nGNgoDXoltj5n2jFB9X+/wdhUtQwIUue+rQLrghZAzY2VgNKX7gz4jIEmQ9TAwKMuJyJywsgzSCLMAw4SMDvMGB/i5ERqxfsbzHCnY8PgCxCjhlGdAUgSTM+N6JdwIjLFnyuQDaECZdmdO/A+Hi9eRDqP5gh6Hy8qfIgUuAgG0CMlzAAukHoNhOdP0jKSOQCAJsTe16UTnJQAAAAAElFTkSuQmCC"
    },
    COLOUR_BLUE: {
        name: "Blue Glimmer",
        description: "Gives a projectile a blue sparkly trail",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkklEQVR4nGNgoDWQKT7/n2jFDnP//wdhUtQwIUveuXYBrghZAzY2VgOe9Boy4jIEmQ9TAwKMuJyJywsgzSCLMAxwIOB3GDiQzIhiKSN6iKtoGRA0BNkVjOiShAzB6wJivYNsCBMuzcghjcxHF2dC1wxTAPMjMh89BjBsloEmW5gr0GmiAbpB6PmB6PxBUkYiFwAAwgp15YkL85YAAAAASUVORK5CYII="
    },
    COLOUR_RAINBOW: {
        name: "Rainbow Glimmer",
        description: "Gives a projectile a randomly colored sparkly trail",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA80lEQVR4nGNgoDXwnqr3n2jFH2Vl//9f44xXw0G1//9BGMZnQpa89vYtmEY2pPZyFJztMBehEasBlt++MT468ABiyMN4FEOQNZ/6tAu7ASAgP+UuI5iBZgiy5tIX7nA1LMj+B9F8/WoM+ACyZhQX8D9+zAgLA3wAFIDdEjv/Y7gAFgYPDzz4L+egwIAL2N9ixO4CbGGADSBHIVYD/kOjcMW6kyjid65dwIgBDAM+ysr+h0VjZOENsEvOHboC5j/pNWQEGYIeiAzImo9zcYFth7kCFo3IiQkdoMQCKBBBbJgrYADmChhAjgW8YHm/BvEZiVwAAFTzffJed8W3AAAAAElFTkSuQmCC"
    },
    COLOUR_INVIS: {
        name: "Invisible Spell",
        description: "Turns a projectile invisible",
        meta: {
            action_type: 2,
            action_mana_drain: 0,
            fire_rate_wait: -8
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZ0lEQVR4nLVR0Q6AQAjS/v+faW51c0ycdeXTKRw4NPu7AOAROeo1BxeQCdW7NQGRbkclWlbnxDOXgPvCMqea23i1SdBowInBvghEgGruSj3CqnoO8eDPTMh9dYElEGB7IrHpN8SdOgFNY5eXPjinxwAAAABJRU5ErkJggg=="
    },
    RAINBOW_TRAIL: {
        name: "Rainbow trail",
        description: "Gives a projectile a trail of rainbow",
        meta: {
            action_type: 2,
            action_mana_drain: 0
        },
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnElEQVR4nGP8//8/AyWAiSLdI8AAl8tM/5n32fxn3LD2P2PNfVho/5djnPIfqwG/3TTAEv8u88IV/HU6wghjM1pt+8/FMZ3h0f8chKb///9jxUffgqj/DEx7rcE0LswAIu4yMyMU9avg1YDVgP9Q/MtVnSTNKAa8khaGa/57iQfMdr7ESNBARqom5d/QWCAJYHMWzAvEYOp6gRwAAKkYDNs6fZwgAAAAAElFTkSuQmCC"
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
        sprite: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjUlEQVR4nGP8//8/AyWABcbo799OkkmFhZ6MIJoR5AKQ5suXL5Fks66uHtgQFmTBe/euEaVZSUkLzmZBl3z27C5ezVJSyih8FmyK3r9/hlWzoKAUhhgLLpt+/PiMwufg4MWqjomBQsA04Aaw4JLA5WeiDBDEEtpEGyCFFs8kGYCcwogF4LwAAhRlJkoAADXCKEFx0SmjAAAAAElFTkSuQmCC"
    }
}