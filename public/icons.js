const icons = {
    enemies: [
        {
            id: "player",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAn0lEQVR4nGNkIABm58/6D2OnTkxjRJfHEMCmuWdTN8PN+7exqmUi5IKeTd145fEa8OTpHULmE3ZBhHEgQ4RxIHkGyEirMMhIq5DnAlgAEvIGVgNm58/6D4symAsinUP+Y1NLMAwIAYoNwJo4vt6b+J9bKZ/x4mxbuLO5VLUYVB1mkpcSnzy9w9C4pou8lEgIEIxGsg2gyAXE2s7AwMAAALwqMdGEJvzYAAAAAElFTkSuQmCC",
            name: "Min\u00e4",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Min\u00e4",
            beta: false
        },
        {
            id: "sheep",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVR4nO2SMU7EMBBFn6O9QWyJgsJ32OQuSBwDcYftQEJ7Eij2ABRIDsI3WBfb2em23qFYnDhOh0THb8aa8fszGhv+9TdyzgmAyEVELqtzKVWD1lq0bklpJISAtXaqa91eIdVM3KaG68s5lsqTKNUoVcJ1x9IgpXE28/up3pSXaziDGU5pBL9ndzgDsDucrzuIMUoIYWFSTqN1yzB80nVbeHuE27lR45wT7/2UyEb1ueu2AAw3d3D6yZ/C/ArlHvIk9RQpjQAYY5S8PqyeFOecxBgl/4MyyteLxBjl+HS/ABdL7DYfGGOUfn8GoO97VUZjzOLfrAx+o28ItI3tf2jXSwAAAABJRU5ErkJggg==",
            name: "Lammas",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Lammas",
            beta: false
        },
        {
            id: "sheep_bat",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABbElEQVR4nI2SMUtCYRSGnyvOItwrNhhYU9Dolf5D0GKL0NIQuDgU0RaUTm4NYtDmUL+gAn9CcAwdnczBJb4rSDh7GuS73Ly38l2+y7nned/zHT5IUKPW1Uatq0n/1uWsg/b75uHUibfHlY6Cbj7D7PMLN5/ZhAUg1ah1NQpYk40NNk1TXarqMraX1G9Ao9ZVCxljNAhmodEPg3qz4th715sVB2A8HQEQBDOCYIbnuXiemzhNygL1ZsURET042g4b769fQ9BOAMCwA8MOOmhrCmC3sIeIaLFYBKB+e8x4OuLwbD+EPc9dmQw7tHoLAFq9xeodWHgymWBPAGvoeS79/ju+X4KXKygUk5doAXtG5fslAPpbVZiuAphOVhMYY3Q9NWkKu4dcLufo86UCOCKi8/mcbDYbmyR6JT/9RlCosng8Z+fiKf7MRUSNMSoiKiJqa9EeHbQV4OPuJKyHOyiXy45NjNZiSX8pKeE/fQMRi8eM+7IqZwAAAABJRU5ErkJggg==",
            name: "Lentolammas",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Lentolammas",
            beta: false
        },
        {
            id: "sheep_fly",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLklEQVR4nKWST0rDQBTGfxUPEGgKLroYz2APU/ASiniHLgoupDfQE+giRxDeFIur7hywi8JMoWA23eS5CBPHNLRQPwgzebzvz3sJAKqVqlbKKVCt9OPr+zRyin+JRPJJInH2aeEakbQW6wfd201tkWh0cNHtMaKIaqXee/Xe61GRaeFUtVIRaQgpsf0A9NIEu/WS0egKgBA2OOf+vOd5v25ezBrTs3jZrZcYY7B2jrXz3+aEHMIGFjMmRQnApCjrBCKixhicc8QTwBgDQJ73sXZep3m9h6HZT5AS4pkijmIvxrCqDVi5OoH3XtuuXSlC2AAwGAx6+nJXL1FEdLvdkmXZXpJ0pNH5G2E4pny64fL2uVl+g/jpRERFRGMt7dH3RwX4fLju/hdSkc6GDvwAR6UXB9LQdC0AAAAASUVORK5CYII=",
            name: "Suhiseva lammas",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Suhiseva lammas",
            beta: false
        },
        {
            id: "scorpion",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAW0lEQVR4nGNgGAWjYHiCi+vt/l84NOc/WZonVLuQrJEFmeNo8gvuivkbvzMk+nMyMDAwMOgHHmLEZQCGBLLm+Ru/w8UT/TnxGgQHRyPt/iPTF9fb/b+43g6n1wBBKyTdI6TpKgAAAABJRU5ErkJggg==",
            name: "Skorpioni",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Skorpioni",
            beta: false
        },
        {
            id: "fish",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbElEQVR4nGNgGAXUB////2f4//8/g11Zx//4uRf/w/gwTBAga8JmCDpgxOYC+/LO/wJPeFDEp9nvYXCd8ZHh+vn9KHqYcLnk9vW1DLevr4XzXWd8ZLh2bh+GhXi9APMGyV7ABxgZCTtiFJAIAD6AXKLmUQ6vAAAAAElFTkSuQmCC",
            name: "Ev\u00e4k\u00e4s",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Ev\u00e4k\u00e4s",
            beta: false
        },
        {
            id: "fish_large",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAp0lEQVR4nGNgGAUUA0Z0gf///zMwMDAwHJ7v/l/bxZ6BgYGBQUi2ipGRkRFFHgaY0A1497jtPwMDA4Nt4k7Gq3sOwsX+//8P18zIyIjA2FxweL77f+WtX1HEpdYcgauFuQarC2Bg7uWHDHMvP0Rx2bMQm//o6jBc8PZR638h2Sq4OLprpNYcYUR2AQaA+fX///8Mh+a5wf3+NNj6/9Ng6//ogTgKqAAAZftRQliRjRIAAAAASUVORK5CYII=",
            name: "Suurev\u00e4k\u00e4s",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Suurev\u00e4k\u00e4s",
            beta: false
        },
        {
            id: "duck",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA20lEQVR4nGNgGAW0B8EVjv+DKxz/45JnIqR5z/RzeC1gIeQCl0wjBgYGBoYnG5LgrpAJmMdItAEMDAwMrx68Y3jM+5CBgYGBwbL6HiOyHNwL8ybWYvhzbcd+RgYGBgYxBSGGssu8GJoxXDBvYu3/t9dPMwhrmjK8vX6agYGBgeEEw0+8roO7AKZBWNOUYd+WTXAFnGffMVh8YCdsQOmMHYwwQxgYGBgu3n3OcPHucwZ9ZUkGBgYGhsMrLmI4n4GBgQFDsDvD4z+yF0pn7MCqES9AjjJCAGdCItYQACBtRklnMKDCAAAAAElFTkSuQmCC",
            name: "Ankka",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Ankka",
            beta: false
        },
        {
            id: "wolf",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApklEQVR4nGNgGAXUAwE+1v9hWF1D9z9MDFkemz5GXBLX73xi0FThY7h+5xPDzRuXGdU1dP9rqvAxbNhylBFZHQsuF2mq8MFpTRXsljAwMDAw4fUXFCxdPwXO/vr7PIphOL2AC1y/84mBgYGB4eaNy4xEuwAZQLzEBw9UFpiJMD+j2wazCRdggjkHOXQ3bDnKCDOYEGDCZQM2FxEFiEk8KC4gzxoEAAD0gUJhNLgKzQAAAABJRU5ErkJggg==",
            name: "Susi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Susi",
            beta: false
        },
        {
            id: "deer",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsElEQVR4nGNgGPRgb23Qf2xsGGAkZMCHD3P+n+3dhiLm3LwOro+JkAECAimMDAwMDFmrb8PF1DV04S4haAAMTAtVhbMDtJQYyoP8/5NkADJw02ZmcNNmZmBgICIM0AMO2f8EXUBIMwMDAwMLtqghBcBdYFzsRZkByHFNimFM2BSjJxwGBgaGXVf/YjcAm2JiNTMwQL2w6+pfOEYOaefmdYzYQh7FAGQFnes2EkwX6AAAbsI80IAAdiYAAAAASUVORK5CYII=",
            name: "Nelikoipi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Nelikoipi",
            beta: false
        },
        {
            id: "elk",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA10lEQVR4nGNkQAMfPsz5D2MLCKQwIss9PVv/n4GBgUHauJERXR+GZnQ+TDM6Gy/AZQAyYMKlEd01JNlMsQvQNQ+MCyYU2f9HZnMry2JVhz0+obYvaFqMIlbQdxBDPU4XwBLR9G3v4GLqGroY3sBpAAxkegnB2ZoqfAwBPtYohuA0YPEMSwzbHNRYGBzUWIh3gbDaL4Yb35gYbnxjwup/BgYcgQiz/egFDrjYjBn7sapFcQ+ys49e4GCwNviBYghWAyYU2f8XVvuFIoisecaM/YwZGY44UyAAcQxwONAzHLAAAAAASUVORK5CYII=",
            name: "Poro",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Poro",
            beta: false
        },
        {
            id: "eel",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNElEQVR4nGNgIAJ8zXD9j0uOiRgDTjw+wvC1UxurIQQN2OvN+d/CTgniEqghyC4iygXoBjIoPiPOBXu9Of9byNrA+ScO3WNAdw1OA14cd0D4+b4URDOSYTBDGPFpPH/tGwMDAwMD27rLKJr7OB4ypIZLMZy/9o2BEZtGdHD+2jcGQy0uFHrGsgcMM1u0IAYga5698hnDmcsfGGa2aKEYcObyB4bUcCkMMabtc83+owua6ArAnQ+jcQGWM5c/wDmGWlwMGVEKcGcia4YZjA4YGRgYGJoL1P7DJGGakTWeufyBIY/jM8OvIF0UMRNdAQaUWGguUMMISJhmC1kbhhOPj8DFj6nKIlyAD8AS04nHRyBRCU2F3OVXGYkyAN0QBgYGBuet3+H6iDIAbgg0GcNsZ2BgYAAAAcaeNJhUf40AAAAASUVORK5CYII=",
            name: "Nahkiainen",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Nahkiainen",
            beta: false
        },
        {
            id: "zombie_weak",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8ElEQVR4nGNgGAUUA0ZiFV48ueU/AwMDw8fXdxjsfArg+phI0czAwMDAL6rCcGjLBDgfrwErpsf+L82wgSsuLsln+Pj6DkNT52S4GqwGrJge+3/F9Nj/6OK9PRMZNm9Zw1BXnovbAGSNZy/eZ4hJrGBYMr+D4ePrOwwMDAwMxvqKKOqZ8GmGgZjECobNW9YwfHx9hyEiczFKwGO4AKaxe8YRuMIl8zsYGBgY4KGPNRZWTI/9r2kUzmCsr4hhCLJh6ADDBZpG4QzdM44wwkIf5ne8YMX02P/IcY0cdQwMDPB4RxdnQFcEM6Q0w+Y/sYYAAMnvcJmjs/BCAAAAAElFTkSuQmCC",
            name: "Heikkohurtta",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Heikkohurtta",
            beta: false
        },
        {
            id: "zombie",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4ElEQVR4nGNgGAUUA0ZiFd5/ceA/AwMDw4v3lxgsNfPg+phI0czAwMAgIajHcPz6JDgfrwHzdwf/z20yhitOSIllePH+EkNFaTdcDVYD5u8O/j9/d/B/dPEFcxYzLFu9kKGjuxS3Acgazx1/wFCU1svQN6uY4cX7SwwMDAwMRpYKKOqZ8GmGgaK0XoZlqxcyvHh/iSHRdS1KwGO4AKZxct1ZuMK+WcUMDAwM8NBHjgUU2++/OPAfPeBgMYAshtcFDrq5DJPrzjLCNMD8jhfAbIfx0W2DxTsuV8AVITuXWEMAolV4SnOSOSUAAAAASUVORK5CYII=",
            name: "Hurtta",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Hurtta",
            beta: false
        },
        {
            id: "miner_weak",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXUlEQVR4nKWSP0hCURjFfy8aWh1CfIiGoImDEqEJQUsSTsFbmoNwiqYGIWiL2kWXDBc3G4KmeAj9gaCCCIUaFF4SpIhDQkOC0G3y9Z7Pp0FnuudyvvN957sX/glpkiB3mBKD8/ZefqLeBCUZE0oyJnqdjOh1MkJJxsSwZnqcQWIlYuIe96xFM9bAmwgCUH7tAxDemIOTPxgYcwMc7OYJRTwsr/st2im74prWpN3V9PuXyhtbaznLEk0GxuKAT6ZaatDuaqT2VwlFPKOGtU4AEPDJ1LSmzqulBoWsqnc3vobJwJsI6osL+GQAbs/rfM70MRafXTxIIw0AU+4B/GGZo+NNUYxGRfz9a3KE4ukV5ZsK9481CllVqld/43zvLNobDLrfPdUlAJfTAUAhq0ru/DOXSw5LM8s/yKfVUUMBMH/dIm1YpglKMibiC35hx+2gR2i1P3A5HfoTDXM7/AAHDXv5frIUXAAAAABJRU5ErkJggg==",
            name: "Tappurahiisil\u00e4inen",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Tappurahiisil\u00e4inen",
            beta: false
        },
        {
            id: "miner",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABW0lEQVR4nKWSv0sCARTHPxcZLQ1CZkogBJZTEv7IpiAkWvsPgmhsdmusyU2HslxsiYYWh5CobMmEiIQWpYPAu0NPUGhICLoGuUO7Ow36bo/3vt/33vc9+CeEUQX5clJrdEQAdjbSpvqhAvlyUquXugBIikpTbXF0cjbAGf/LmDfFB97Ed8vc2DDi6f45AOtrq4RDQcKhoKnGcoL0wa4G4IsHqJe6SIrKjGuaptoaLaCTq6LMZGcCSXEYuXa7YxIYMKSfvDDvpSrKzEZd1CoyANlUwWS6pQc6WcdU1zFA3tqMapYCvngAXzxgiADUKjIfk1/0ky+vyoKlAID+NP3wL3k5PN7WcpGIFpM+R6+Qu7jj+v6Fx6cq2VRB0D0A+N4L2Qvo3UvPNQHA43YCPfPmMq/crjhNzUxnzCQKVkMBsFhUSFhcAuiZE1v2a3axHYwVlEYbj9tpnOh3bIcfTtaH4AHuZNwAAAAASUVORK5CYII=",
            name: "Tappurahiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Tappurahiisi",
            beta: false
        },
        {
            id: "miner_fire",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABpElEQVR4nI2SP0hbURTGfzcYJyffFgqloE9toINbaxwEM1io6SIIdTOzpdSUIB2kiIOJZBYqnQQJqGTRQSgOT+n0oA+kUpDH88WGDFcdSoe+4TpIrl5fiJ7l3HPu+T6+80fQwQqFgrIsC4BisSja1SQeA27F7eq6OikAqNVqBkmpVDKUPEiQy+X0W0oZ+2/bwtzMlHIcB9d1AbQPguBhgrmZKTVhpxh99ZwwDJFSal+tVmODNBJ7X94rAM+v8+LZEzy/Tnd6gEajycrqeuctVMoLqn/6LYAGn0cJMpk01sWVAVr8/FoZBJXygnozmeXy4g+eXwfgPLrhPj1t8HT8pQFeXNrVaroAMpk0AN/XtnXhhJ3C8+u47i+Gh4fY3Cirf39/xlow1vjDbxgeYOfblvj0cVYBDNpw8rubzY2ymn43L3QLjnNMnz2mZe0cHAkreTuzldV1MWj/13ELrAk+zC/rRAv4df9QWElBPjuiAM5CyVkoY9swWrCSAhndnryMlCa8O7i2BPnsiAqakn3vJKamk+k7CJqSnt5eLbmVk5EycvftGqZtqes3wJYHAAAAAElFTkSuQmCC",
            name: "Tulihiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Tulihiisi",
            beta: false
        },
        {
            id: "miner_santa",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABZklEQVR4nKWRP0gCcRzFPxeNt4RBIk2BigkOxvVvaFNCWoK2FmmoxeYCl7YGcWuQAkFcDRe1CCJsERRaQsPFLTuHwuGgJfq2eEd6dzb0tu/393vv9977wT+huB10EgmZ3C3Xarb7M27klq6P7Vq6TiEatYnOTi5ERBRFUQAK0ahoXi+TYlMFTDKAJ7dPD/CM5sGwB/EnV7GxCJ1EQirNrJh4b7dFRP6OYJbX0nW+hj0ANrZCAFRz19Mj/CZrXi+t0wZ5UjQeX/jodBzdOv6CW3GecFgB2N1etaKM/WulmRWApbN7TCf1zXkA8hd3Frl827R4NgeDYY+FTIZQtcpOsQiAP+Lj/DIpRU2T9ddP9w5MHMViBFWVrmFQ6veVg1Rc/BEfAN/HK3D47NzBYNR6qd9XAIKqatlfvGrzsDZne8zm4CZZdjIFQLD+xsmoCxvSgYDs+XziNrvBitA1DIKqSjoQEKfZDT9FIJhWu3hN7wAAAABJRU5ErkJggg==",
            name: "Jouluhiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Jouluhiisi",
            beta: false
        },
        {
            id: "miner_chef",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOElEQVR4nLWSMUvDUBSFv6iraKolZFc7OAm2FsGpWIoUpL9B7B/IUESc1NHBwclF/AFKSxEdOhWltC5BEIuSwQ4lUG3EyaXPQRqT5kUL4pneu7xzzzn3XfgjFFmxWimKwdpN7RaAwvaujzMyjEqfLIO0wUpqXepsUB1gLKzz2/iTe55fncR2rOEdeLFnHHN2euXeTcMQ+9msOyNpg2qlKLyK9+YzG+kjaSxfhHL9QEy8zwDQaUQgbrG5kwKgln6QOlS8ZADbsZgbTQPf05+Ov9JpROhFW6w1p7iIvbCVP1ECEWzH8lldTi4CcF16pBdtAXD4cRceISxnTF+ikP/6QtMwRLnUDEbwIpdJBDYR4Pyy/vMeJBdmha6pAUIukxBtuyvr6Z+Brqn0H3rV2nYXXVNDnf1q/V/xCWMvaqyMTShzAAAAAElFTkSuQmCC",
            name: "Kokkihiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kokkihiisi",
            beta: false
        },
        {
            id: "goblin_bomb",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPUlEQVR4nGNgGPKAkViFTfHB/6WkWRkYGBgYUtpW4NanpGDy3zvH+7+RjeV/7xzv/wwMDAxzqiL+41LPhE1wS2wPg6SBEMOW2B4GBgYGhmdPf+O0EMMpSgom/wVkWBkkDYQYnl94x/DhyW+Gew/OMF4wvfRffworw8Wc3wwGp/Xg+lBc4Kth/F+b4z9cs6SBEEOggghDm0nGf/0pEP/rT2FlaDPJ+I/VgKs/GBn+uUgwMO15wSD95hcD054XcLmLOb9RaLxe0PQRh/O5efUYqvZEMmz7Pw0u5sWYBfcGigG+Gsb/YS5BBiaRrgxVeyLhfOQwQAG+Gsb/ix084P4rdvD4DzMUF2BB5jwVYWN4+ucjnL//z0cGBhE2fPoRAN02bHxs+uB+8dUw/q8mIQqXuPXiNYrCzTfOEp3sSQIAP6prelRSjb8AAAAASUVORK5CYII=",
            name: "S\u00e4hik\u00e4ismennink\u00e4inen",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/S\u00e4hik\u00e4ismennink\u00e4inen",
            beta: false
        },
        {
            id: "shotgunner_weak",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNklEQVR4nKWSv0sCYRjHPyduQXRgmMdBJIfbDbe0iSFICQ4FjdHmIIFrU1PgHxA4Bu3J5XBgLkE0KC4tTXY4iSIcXEtr1xDvcXryctJ3et6H9/vh+QX/lLKa+BjagYh9b0qx1oz9iSq1mvC9KfcPjwCoGZ035y6IuWQAAMs0Qpia0WX+OKBYayoH+7sA2M4A35tKAenoo92qBwCdbp/z02Ms08B2BskAwgxQyGt0un2pUShsoVSuUipXARhPZhTyWiJAuCKxvt71DfreDgBfRxcYxt9AXdcNY4BKpaIsAWQQgK2fGQDfKY1GoxH6lgDtVj0Qbby+9BhPZqTS21imweXV7dqDWkqenRwGAPOFTy6rMl/4DN8/N7vEqCmXVWXe9QChp+eREq1qY0C0osQA0fvqLGRV/ALnbGpHyQjfaQAAAABJRU5ErkJggg==",
            name: "Heikko haulikkohiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Heikko haulikkohiisi",
            beta: false
        },
        {
            id: "shotgunner",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNElEQVR4nKWSPUvDUBSGn/gBggjpYmwQKiEtnTLq6tAWVxcnt1KhODv4B7o5ZlTEsYNCcVBxLWgXoYvShFCXlkwNOIrEQW7IR7mk+E7nHu778J57LvxTSrpxP7gIRe0HHs2GnbkT11K64QcetzePAGiqweXTaZhxyQAAZUuPYJpqyPxZQLNhK5s76wD0ew5+4EkBK/GD3WmFAMPuGOvoL0m/5+QDCDNAxdAZdscAbLCab4RSrUqpVgVg5E2oGLrUKBStSKzv/eyK7S0VgGD/GNM0AXBdN6oB6vW6kgDIIADB8isA6s8e7XY78iUAdqcVijE+nz8YeRO+1r4pWzrnJ9dzP1SieXiwGwJM/RlFrcDUn/Hy5iz2E+OmolaQeecDhO4eBko81cKAeKLcADF7+i1kKX4BdZVsL5dJLY0AAAAASUVORK5CYII=",
            name: "Haulikkohiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Haulikkohiisi",
            beta: false
        },
        {
            id: "scavenger_smg",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABUUlEQVR4nI2SsUsCYRjGfxfpIBJJEk2JdfcPBEXSIkI0RYNSU1vqbqNLS2O1tFjR0pS0RA2WIFKU4r9wV3mUudgi4ZDBNZgffuqpz/J+33vv83w/jlfBRgd3Kat93l2LK3ZzY8PMz9kn6T5SQFt7qaxURw74KH+2jPFVqfbTeHfjcH/V0iYr5Mq9gQMDwuGwBaCpHnTDJKT+f1h0AhWORiGo/H4BHjTVh26Y5IozfU0np1dWLBpRAJTO11sBsO3+AcARTNiiA8SiEUUiCDRqFFxeLr6dBBo1QhMZMo+z3D+k8c/P8fbyypTfS/E6L/ZCEKws1HnPVwEouLwAbC45AHBPxwE4vz2WzNI/0FSfaIY6zgDVeqt2mwUBwM3ljtg23TCloUQya7vKgkA3TEGhdREMkghIl5ok1d7X06Xm8IDljaAFsL51JqG2+0M1aHBYyB8tS3PjSdCE2wAAAABJRU5ErkJggg==",
            name: "Rynkkyhiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Rynkkyhiisi",
            beta: false
        },
        {
            id: "scavenger_grenade",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOElEQVR4nGNkwAF6d878D2MXu6cz4lLHREjzsd1HUfhEGQADDTN3o9BEG/DkwTOIxnRXFBobYEEX6Gt1/a8q8JRh3wNMA/EaEBwc/J+BgYFBVUWQ4fadhwxOKlAJUzYGBoanDP3EeMHa6BMDxBB5htt3HsIxOlhcEQ0PVEZk242YPjMwMDAwyCmLwhU/uvsawwA5ZVGG2I6ljCgugGnGpvHgHw4UGhnAw+Dm608MyOzQTB2G/M5TDCryCgx3Hj5gYIDSu85dQklUGNFo4MrLEJqpw8DAwMAwsdwMLv7p3ycGMVkhDBfATdu8MgUeMOgBt+rUb4YTGw9gTc5wL9y+85BBVUWegYGBAU7DwInqOTjzAtyAVad+M1SrYLcdH2BhYGBgsPB3+M/AwMDgG45qE0ycIMCnkJAhAPcodMGpF5O+AAAAAElFTkSuQmCC",
            name: "Kranuhiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kranuhiisi",
            beta: false
        },
        {
            id: "scavenger_mine",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTUlEQVR4nI2SP0vDQBiHn8gNguBYdHGRljZIumToksF2cenUj+EHqFBxEDuLk0vxCxQczGCXUEqWgh3kCEXp1kH6BVokBOLihV57hPyW+/e+z93vfc8iR4vFIlXzcrlsmWIOiiQPBgNtXQig5LquNhYGzGYz47grYdq8b7fTkyhiO6UQoNPppABetUooJd7//pUQEEVGwJ6FehwzShI8xyGUklBKPkvnnA6HfFUq6ePTS2oEqNvXtp0deo6jrZW63W4GMdYAIJSSyWbDRemQFfB+fQPA6ueb32VEq9VKgyCwNEA9jvGEYJQkrG2bWyF4mE5xz2D8+pzFrcUxQRBYezVQvo/mcwBGSZL1v9Zo8jb5sGqNZpYMoH3Pca+XeQul1Czd+b7xK2sWQinxHCd7jSbfN+XrAFXx3dtNndgDqNZc9vvaU7dblqu8wLyzP5jChh/LYMrfAAAAAElFTkSuQmCC",
            name: "Miinankylv\u00e4j\u00e4",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Miinankylv\u00e4j\u00e4",
            beta: false
        },
        {
            id: "scavenger_heal",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQklEQVR4nI2RsUvDQBTGfy0FB6GzWBCKCYRD0qVQKEZwK0in7k4O7lI6dBM6+S9kcnZwcRKiWOnUKYSAJlAo6OQkZMlgHDRHzxwxHxzf3bv3vvfuuxoliKIoy/emadZ0OfUqxa7rKudKAjm63a7ClQWWy6WW/6KhC14Oh9lOELBZUklgNBplAI5lMfd9nN/4oNGAINAKFJ7QSVMAHNtm7vty5Ti9Gytmyq/JuxuGwXYYEp9bAATuMwdnh5LX4Yo90eb65KqmnQAgEYJ1uAKg2W8pXPqETppy//pEHMf0PvZlN0Dy5+JNEVBMdGyb29Bj9fUOMfQwGCx+Ui5Cj2a/Rbu+K8dXPAB4mE6lQZvGAXhHWwA8jm+UGmWCue/j2LacRhHgRWeBKpAIoe2eCFHoXBCYTCYZwPFspiTm8X9Rllh29w17L34UVTFjLwAAAABJRU5ErkJggg==",
            name: "Parantajahiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Parantajahiisi",
            beta: false
        },
        {
            id: "scavenger_glue",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABsklEQVR4nKWTwUsbURCHv5d6qtcSSkhYREMPRXNQD4LQU7XrpRAIRTw0QVFBD4YWAlVakfRQikjBgwhFb6UUCkXc2J6FCrqHdY8awrIhYP4GYXoIb+tLVATn+JuZ7838ZleJCPeJLgClVEcivPCkHjYAGBmyFcB1jykR6QD8PanIh/Uvhvbn24G6M2Bs8oUsf31jaM8ePr8d8PrtR2kGZwBsbxaZXioZhQ8uHxO30mTHbX7+rlCcmSLzxFIRwM7lBeB96RWe75LpH4yaR4ZspfM64laa3c/vVOyquL1ZBCDTP4jnu6x9+g7A1k5ZKj92lW4EyI7b5grhhSf7zp7xsg7Pd5nLL6t681SyhQWOncPoKjFoub7v7FELqni+SzKVAIgmmC+sqCP3QGYXN3jU3WfAYwDJVIJfzjk9Vi8A9bBBMpWIVtI+xK10tIIByBYWOsauhw1mFzcMrRmcoS+lowvg2DlUdq5PAGpBlVpQBWDgaev7uHoBbaYB0ImXE2XRa2gzPd+NitvHNwCl1YJAyzCtbe2URcPtXF7axwf+/yC6uD1u0qNeDRieGL228CZdA/4BRZ3D1oxguw4AAAAASUVORK5CYII=",
            name: "Liimahiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Liimahiisi",
            beta: false
        },
        {
            id: "scavenger_invis",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABYUlEQVR4nI2RsUsCYRjGf4YEDnGDcEG3eHRHUEq0uPQXOOTiJDQlNEWrNISI/0FgSJxbIDhJW/+AY1hOcoogXJDZIBEIDV+DfMedd5698PF933vP87zP91yMiLJtW8izaZqxMExoU5ItywLgezZz+/fNpo+ztU7AsiwajQbPL790JwrKyRXdifJ/B61WS/R6vY0OQgUq55bQdJWdwx9fv1gsBvBx76VQKAgATVdxxlM01HUG3QpkkE7k8IrIJavWFsKLdwXk9IVm44ynfGTOiOdLdLazxPMl6k6KWluIweg92oEUkcCMmfTt0sXxxZuAlQzSiRydzyzGvIph3DEYXXOwvwfg7n37i8cbzQ3TJ6DpKjgwVCowXIrs9k8BqDspMmYSY17l1cPx/ZaH2yc3IG9wAKOjZbje6YEMvCRNV31rlRj6hIVmA2pg+rIfnO4TKJfLAuCylveBZH9jRQGjvv0BDWmKyx9cvkYAAAAASUVORK5CYII=",
            name: "H\u00e4ivehiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/H\u00e4ivehiisi",
            beta: false
        },
        {
            id: "scavenger_shield",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABgUlEQVR4nI1RMUgCYRh9lyEEDmVSEnSHtHjLQUqji1PDQaCDtpRLU9AUKDUnKU0HTi3VcujaDdFQQ+AmwUEonA7X4HCogwhHNHwNcT93dl19y8+9e9/7eO8BAWMYBhmGQdtnXQri/bqsqirxJY0Uy/6fiGLZjJSTZeJLGhXbI1IsmxTLJr6kBYu4CaqqUr1Wo6jcoGJ7RFG54bu84Acenl6Q+bmCTZ5HJTPDY7WJSmbme5Rzf+TzeQKAnb0jdPUORCntIddbA0RiAt5vZLa3OK8YSaQAAKKURlfvMFyU0hCkLF6roucos+Bcj4em6OodNHsC9HAO971l6OEc6q0BW3I34ptBPDTFePi9EIkJntcJ2mnMIxBJpHD9xqPf72N//QXj4QCrG1sAwF7H/8naEvdDwAnt+SPLRApJE4WkCVN/YlbdOXgCubx7YN7cAQLA7dU5F5UbFNiCu7r5CgFgoh1zkznMIxAPTX2vO7jfMIFyuUwAUDnY9dhy8D8niBj07wvkh6kfKuyHEwAAAABJRU5ErkJggg==",
            name: "Kilpihiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kilpihiisi",
            beta: false
        },
        {
            id: "scavenger_poison",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABb0lEQVR4nJVSv2vCUBD+Ig6tSGko6WKLlipugXR1VXFoKZh/wa24ZKnQrdDVRTo4OTg5Z5EaCh0KXUog4FCSihYcSkrtj0Bxug4xIbHPqh887o733b3v3R0wh1qrSbVWk4LxPCeIyH+Xq4BZ4FrtMf2VC5ydFJg+C9FFCmqtJpn9+/UVvL2/rKUgVKB+VaDTvVdfRdAuLaB2KpRJJ2Fao5CKZQo4WZYJAHJHX8ikk2iMh0zijaJxTAXfuU8MYm5SYzxENZFCNZFC6YcLnWI97y9U0I/a+gSCxKMLQlwU0TAMxEURztiNnVkMw0BZU8gxDP/1sqYQJ8syDWJDCBLvEmfwiLY+YX7J40cA4PJY+pMIABsP2xAkHvvTAwgS758g/EWy9Qls/Q6CxKN/fovsYRpPzxaycO3udAfO1gf09qPbzDZQ1kTi1E6FTGvkT6CaSMG0RqFXlIseV6zniTUJTu1UCICf1N0keI31LLB4jL9weqVGOc1slQAAAABJRU5ErkJggg==",
            name: "Myrkkyhiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Myrkkyhiisi",
            beta: false
        },
        {
            id: "scavenger_clusterbomb",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeUlEQVR4nJWRPUgDQRBG34YU2gQFL4pITrkLsbKwCIKNTezEIipCUATt1NoD64CVIGiRQgIGCxEL0UobFQSJjY2C5ALJVZETiyAoIqyF3JKfk5gPlpmFnTff7ECNrGxGWtmMrL3TQoFWD9oG7J1d+ub/BqxOJXzzvxT0c2BlM7LweNu+g9c3p20HCrCdTsjpgRfloja2BJwdrcioqVOwy3Uu/nKQs1JqvSKZTMrx0SpRUwegYJd56oirx0N39zy7VWJaSMWIoeEUXQCCS3PdFOyqKoiaOth5AD4eRMsRggC7Jy+Yeid2ucSy0UfECOMUXdUpMWbgFF1iWojN4wuRs1Jy8/hCAIj07KSMGJoietae3apfw6YRAo2FANffHcS0EJXuMDEtpI6fxOLEmPTI+8UKpj6IXS6p2NPfxfD7lyo4uLoTOSslF7YOBUDAo4/MRNjZiNfR15K95M9vRKMLr1h9IvyuL2rqrM+HgXAd6PTjE4D8+U3TWn4ASD6VFzRacecAAAAASUVORK5CYII=",
            name: "Isohiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Isohiisi",
            beta: false
        },
        {
            id: "scavenger_leader",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlElEQVR4nI2TP0jDUBDGf5Hgn8Fih3SzKTSlDg4iKIogLoqDTqFVEIuT4CAFFXQXwYIO4iLipAgOOggdxM2OGRw6VayQtovYrQ46CM/BvkdSU/Hg8XHHd999lyPa6Nyk6B+IAXBzcK7xR9hbGVEruTj5guLpTr6g9Q/ExOHqLIAIErK3MgLgcHWW9MaJT1QHqJVcNk/vkCQpVCu5SHey2TsdoAPAyRe0WskFaBVSGNQM4Ct4v4fXQevevxzIWBzvYmWk00f4qxlAs21byGQlHea5XCFhmT7S/MJZWwEdYGK40UzDJCyT53KlHb/9CgnL5PjqjWzOIWGZGO8RhQAXO0siUEBOz+YcVSxeV324l5oRXgx08N+QItKRJgvRuKFI1Zc6AE/1xm8FIGmEiMYNqi91vwPZCPDw1U3SCPEajpA0Quq1hi6nPNUbpNYGyeYcLDNGueJCE+8fi1pmakztH40bLO9fatA849B0r1I82h7l+OrNl+9e9IlkT3fgOnpqbVAl8v7riyYQ8RFvPz6Bn//Ge9JvxjOh/5gG0OoAAAAASUVORK5CYII=",
            name: "Toimari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Toimari",
            beta: false
        },
        {
            id: "alchemist",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABX0lEQVR4nI2SP0gCcRTHPycNTiXn4ZBIkOhSNOXeFi0NLRGBQwUN5dTSJA3RELQUQUEKqREFRRQEUaNLTRW0JEbhn+G4Oy6n265B7vD8afpdfvB97/ve973fk+iBs8y6DWCYFqmNE6k97utVwIEc8HOwt2K38wP9iA3TopAvArCWnLUPc7euk38dOPYL+SKjy3PNYolxT05fI0xOxPnKXANgXj16YsJSWruXyiqxaAjDtFy+fZEdCzjWAUplFYBKzSBz+iTkC0Trt8kBv8sbpoWuN9jaufRofN3Eut4QnFVqhsAJS3TEsWjIw3WDa6e1++v7N5Gw3LFzJCx7xnAPqZB/dpOGR4Y82w8GBwG4v3uj/vPb2UH2ImcDVNU62scniqIAoGkaiqI037E4AOnUpniJS/NJqarWPdXT27vS/lFW0jRNEHbFzFTCfrlZtHtxwggOVhem3cTj8wepG+fgD9N0l4rGwxGhAAAAAElFTkSuQmCC",
            name: "Puistokemisti",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Puistokemisti",
            beta: false
        },
        {
            id: "sniper",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQklEQVR4nJ2TMUgCURzGf3fYIiRCQ5qGDu8gaK+h5ZbHNQkNGYjQGBKtQVOTBA3t7RFkLYUNbS4OETUEgeBbJA6xIco5uJbeeWdqZ9/y//6P933ve4//A+Dg/sXjB0EeBTFNnELJE7bFU7U6jR4T4Gh12QBQjTbCtnAKpcgpzGAjbMs3+ZeBarRDdSoDYVsI22I2FWdGOpENDBi8fL9ZA6DXctnZ3Pq1WUppjEzQb9ZC4vmlDKeXFyilkFIauo5NsHty6AHkr6/IppIAfNhlhBAAKKV8rqGUolKpGLHg4vtxDfaLZFNJko0zFGUAbr/i1Ccl0CkSa0X0lXotl7e5PImFRep72yPFIQM9PF23QzqTo+t2eH5sjhVqhOYgKEpncn9pBwZOoeRFPXFsgmHx3c15JDMT4PP1gY31Ff8DDfeT8A156XnAUTVkzwAAAABJRU5ErkJggg==",
            name: "Snipuhiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Snipuhiisi",
            beta: false
        },
        {
            id: "shaman",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABP0lEQVR4nMVTPUsDQRB9ewiGYKV4h5wQQgRXC70qIEQP0gjnD7C0TmeRn5HCLk2sJX9ACDYaD4RUZ+UVUYhwkTsRrIIgYW2cZW83SSX4mmGGeW8+dhb4bzA9cHR6LFS/3+0ZOSqsReSdwy0jNleA1zyRJSmyJJVk1argNU+KWhSwXSeX9HQ/lFbtgshkcyPoIBEd38k7qOASAOnYriNHmIXA52LTmWJtdx0fn2Os+FwYHSwSeZkWYNU7rcuH1Ter3mld38XMEFDJ9IRZkoLXPBGHEQOAvZvnDcqxdBJB3X4cRozIxVK7erB8jmKpXZUC80R0IQCYjBqD8cUJJqPGAPhdYhxGjJ6FKgEwDijwuXi9OsP+dgGPt1/NwOfNXIJ6IIB5mQBQKbsi8LmolF0BKH+ByLbroN/tMd2fOd9f4AfouX0OfRuXXAAAAABJRU5ErkJggg==",
            name: "M\u00e4rki\u00e4inen",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/M\u00e4rki\u00e4inen",
            beta: false
        },
        {
            id: "coward",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABe0lEQVR4nKWTvUvDUBTFf0+kSzL0IyQOYttBqtSidGgH1+Iigouoi4v+Dw6Ki7vg4qSLi+4uCnWrULCI4tIgYtUuqaktNlmKUBeNbRK14IE3vMO9551777vwTwg3sby61nFzl6USQUUBoHSe78kZcAe33t6c042hcLg/B35O7ioVRmMxjg72PfEeB19Qo3GPCz8Mdl9m5uc7tmUxu7D4yUxyf3tD0zRp/VXCV7Iky0QiCmo0jqapGEYNgN2tDQGwtDLXOT48ER6B6VyuY1sW48kJAFKZLGVdJ/D+QFiTnBef9AYTySk217eFp4RuGEaNtqnTBqxmGwA5GEAOBngx6k6cp4mpTBYA27xiJBFykuRgAIDR5DC7O3viR4GyrqNG45R1m1fDRlLSSEoa2w5R1m2PU0fgIp8X18WiGEskaDQbDMViSEoaTVOpPT5wdLAvCmenom42egR8v3Iqk3W6D98T6AvuXfDbDd8S+gn2Q88Yn6tVCmenws39hg+sWoqqcof9UgAAAABJRU5ErkJggg==",
            name: "Raukka",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Raukka",
            beta: false
        },
        {
            id: "flamer",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABkUlEQVR4nI2Tv0tCURzFP7ccTJAgiuawEl40GAkp9MACEUIInFqqMchqqqE/oKGmMKMpkoZanMSIBguNGhSEfrywlKAaImiIhsbbEO/xnj6ls1zu4XvPPd/zvVdQh1g0JNOZcwGQ3FyVOr+4tiXqawFsyVg0JCfGRxt4O5E2O4F05lzkCiUAAmqEXKFEQI3YldoLAOgOrvOnlrUeDvMmH49L7fsbxe1GXdsS5gyawXCwkdiWl94BFlIpcexyEouGpN5GKxihbCS25dvrK0/aA9OqAkCuUEKfSEuBvbk5edPbA8BQt6BY1ixFB0fZpiIOAMXt5sZ0eDAYxuvpp1Kr4vX0MxgMS4D1pRWL4/WlFeEAUHd2RD4el7d04PcpfDW5LX2SNUKt1KqAKcRjl5Phlx/a7z94vDojc7hrKQTo63LyfnfR2IKO/c9n/D6FZXWW6/wpxaszI4P5mSnZ+fNGQI0wMjZptGIJJ7m5Ks0B+n1/02j2DxocFMuaccjMtYKjniiWNWNs8zNT/3+JOlrN3A6/Gv+P/RZ7D+EAAAAASUVORK5CYII=",
            name: "Liekkari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Liekkari",
            beta: false
        },
        {
            id: "icer",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABjklEQVR4nH2TMUjDUBRFT0QQBx1cOqggOFSFtBQXF0vAQRykCNri1nTqIEgXcXZRuohQwck4CNIqSOmgblVBMliLjWAF0Yg4OBddv4P8kDRpL4T/83n3ct99PIUuyBeKQt431lJKUE1P+8Picka4ycmEBoD9+S3aawECVaXIrDYPwG31illtPtCFzwFA5exQkWTpQJ7t6HX/HDQM8fz1wuRwmGwkpeQLRVEqVwGQZ0cHJeNIDNUU9hZ2lNapzeJyRtxWrwJJbjg9lYwj8fH2zsOTRWwuBfz3Xjk7DMzJI7B+sSlG7voAEKEp6jXTU3Ri7HYU6QWYHA7TwnbIS/EoE6pK07KYUFWW4tH/keppj+OknlZ6ALIRXRlYGQMgNj3T0W7jvibkJ9+cEFunNoPxX77G65zfPLK9fwxA07IcgcHQCJfmq78FievdBrHpGXJbGqVylfMb08lgVc8J+6efZEJjbDTktOIJJ18oCneAsp1Oe+BzUK+ZvgzaJ9JVQBLk2Fb1XOACueHbhW4zD8IfzgCY3SkZOHcAAAAASUVORK5CYII=",
            name: "J\u00e4\u00e4hdytyslaite",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/J\u00e4\u00e4hdytyslaite",
            beta: false
        },
        {
            id: "bigzombie",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABZklEQVR4nKWTv0vDQBTHP5FaBEH3DkLJcqkItQZvctBNnMR/QAcHBzcHN3Fz0EEdOjjo4OBSnKqbi1NCGoTQmiUEOvgnKE7nIDkvSS2Cb7mXvHx/HS/wz7LGDb0gVeazdOul7yf+Cga4vH4svRur7gWpqs7MqurMrO6LJL86APCjeGRvVi7Txe2DAgiTAUtz8wAsLwgAVtaanJ3fsb+znsNMmGApHKRwaNkNesN+Tun56QUo34MmkMKh2PeGffwopt3t4EdxSR2gYlo387bsxjdJ0kfUbD0rklSypt3tlHK3ux0NHqWei9CyG6hJpcF+FHNzdGABxG8JJ1f3I3dAOwiTgT6X5uZZXhB4QapMF6PKKubPSPY2tgDw4lfePz7JnGRkh7ubVi6CFA5hMiBMBoiajXTrlh/FSOEwXZnKgQEdyYKfvZdu3TKzri42kW7d8oJUmbNMXZcXpLkd3z4+VSZR8ccyZ18/0Ku5TR1cBwAAAABJRU5ErkJggg==",
            name: "M\u00e4t\u00e4nev\u00e4 ruumis",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/M\u00e4t\u00e4nev\u00e4 ruumis",
            beta: false
        },
        {
            id: "bigzombietorso",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABYElEQVR4nL1SMU/CQBT+jgAxMYGdgYR0uUJIFAg3u+pE3IiDC4OLCw4sxBgXBl1gcGDAgbgZJuE3tGm6NCldmm7sOmh0eQ7mjoOCMvkt13vvvvd9770C/4F0Jkvbcmw90B9PCQDc0MfT/S0A4OvtNfZOIrFOFtyE4CYqRhHNdvdPFysFBDdj3812F+lMlra5UEGpLmF7ASj1I+qGPnjOQKfViBVJ6peHl2dU8yUAQL3MVYznjE3i8RYqRhGUIkW2vQCP11cMAIJFiN5wEpvDigM39NVZzZdQL3NYTkS/uWCy//WEG/q4ODkFAFjBHO8fn5BOZLFOq8FiW3BDXw1N1ArM9gIIbmI/ubdCBoDecEKsP57S5dkxs5yIAEDUCkzv9ejwAKJWYJYTkZ6LbcRyIhqMZop4fnNHeiEpoKury2A0I/1BbzihTRPfhASw3LmOYBHuwl/+B7YXKJtyWLu4+AYIB6JOPiguSQAAAABJRU5ErkJggg==",
            name: "M\u00e4t\u00e4nev\u00e4 kroppa",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/M\u00e4t\u00e4nev\u00e4 kroppa",
            beta: false
        },
        {
            id: "bigzombiehead",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAp0lEQVR4nGNgGPKAEZfEyTP3/yPzzU0UsaplIkYzAwMDw+T52zHEcIKTZ+7/P3nm/n82Pv7/bHz8cDY2Q7C6AB2cunwDpxwLPg2H911gYGBgYLB1MmDonbiCITfREyMcsLrg7KOrKHyYQdi8gNUFC+pLGBkae/7DDDOW04bTRBnAwMDAYKSsxXD27lUGDSlluKELcCnGBzpmryc++qgGJi3ZNgC2kgsADLdCjrzZxtoAAAAASUVORK5CYII=",
            name: "M\u00e4t\u00e4nev\u00e4 p\u00e4\u00e4",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/M\u00e4t\u00e4nev\u00e4 p\u00e4\u00e4",
            beta: false
        },
        {
            id: "slimeshooter_weak",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyklEQVR4nGNgGGjAiEvi5K7a/zC2uVszTnVYJXonRv630VTBEMdmEBM2zTD2ket3cMphdQE2m49cv8OALHbk+h2G4vzlcH0syIphCmE222iqMCxce4aBIZiBYeHaMwzxwSYQPi4vIDu5tm49AwMDA8Odi49RaAYG1ADG6gIbTRWG/atLGRgYGOC0ir4sRD4Y1SKsLkBWAGPProlAsQSrAQwMmFGFHi4MDAwogYhhALpBR67fgYc8jI3XBegA2TZkNlEAlnCwJaDBAwCP2lyt3fP/ugAAAABJRU5ErkJggg==",
            name: "Heikko limanuljaska",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Heikko limanuljaska",
            beta: false
        },
        {
            id: "slimeshooter",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyUlEQVR4nGNgGGjAiEti1enY/zB2mOlinOqwSqRMdvjvZiGLIY7NICZsmmHsXSce45TD6gJsNu868ZgBWWzXiccMc3IPwPWxICuGKYTZ7GYhy7Bt9T0GBgYGhm2r7zF4hSrB+Vi9gOzkBbXHGRgYGBheXXqJQjMwoAYwVhe4WcgyuO2GsJftDoO4QO8ehgtxugBZAYw9odcexRKsBjAwYEYVNltxBiK6QatOx/6HaZyTe4CRAUs0YrgAHSDbhswmCsASDrYENHgAAIKtWlUOs6HSAAAAAElFTkSuQmCC",
            name: "Limanuljaska",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Limanuljaska",
            beta: false
        },
        {
            id: "acidshooter_weak",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFklEQVR4nKVTsYrCQBB9K/6BcD+gjYW1zV1rZ6GdYOcHRAiCjYhcI4igH2AnpDOFna1prAQt0qzdVYErD5uDXPWW2c0eCr5q8mbe25nZLPAilI88HSa5j2+2Pgv1BeI/MQAkqcZ7vWYZWQanwyRnEQU+SJMyyeW6lzNJYbc9AgDMVmNMh3MAwG6/KI7Atl0hMVuN0ahWDL/bL0wXJbc1V0xcb98m7rZH5jDLIEk1Mh0j07El/v25W98yrzi/nJ1LBIC3WqcgZF0YRMoskdtPUg15E5mOLWP3kBKd5B6kKTnyjJkzHcguWOAzc2EtMQwixRGkyBWHQaTOly/bgIQ7khRLfrs5et8R+oMP8xb4d0pOxg/xTPEfzseWEt1aZw8AAAAASUVORK5CYII=",
            name: "Heikko happonuljaska",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Heikko happonuljaska",
            beta: false
        },
        {
            id: "acidshooter",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA70lEQVR4nKVTOwrCUBCciKWXsJXcwMJCsE0d8A5CyqSOpZA7CKltAylS5AQ+bNPpBdLHQmbZ9wkKbpN9szOT3X084M+IQmDSZVMIv+0uHt8D5sQAMPYGq21sGVkGSZdNJFEQCm2yJLg/HyYWKayOJQDgdC2s3BuBbbtCBkXahF0s3NZccSiqYyk/swzG3qAYahRDbQle96d11vUI+MyvZ+cSAaBcp56QvDZvIjGgMGSiMZ3LDtq8keucExJnzppcIwWaEDJzw1pimzfR2Bshu1/N42LFQG9aj6TFGn/UJviOsEljeQtcrsZ0/jV+Ib8BWdWPZ22kcPcAAAAASUVORK5CYII=",
            name: "Happonuljaska",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Happonuljaska",
            beta: false
        },
        {
            id: "lasershooter",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA80lEQVR4nKWTMQ6CQBBF/xLjWajtSMxewAsYE49AYbS0pJRY0NqRGC/ABQiJVlQWdEYa70CzNg7OyKAk/gr+zH87ExbgTxnNXOeJ0/zYhp3+jkHhKj+rJ/o2ECABWOeJo+BuuVIBm3QvIB4VZtGiHbsvTDU+nfkc+1uY63C/ILah8bjp22BQmA4D2Arc1LRJ96rv/QqS+GpVXUoAQXwbiGKfCte063oAkG2PhherulRB3KepR6LhNUXhGkzNWIUUrhHvApBtjwYRHEE4GHh/pdiGZjIPnAA8rrc2ENvQ8Iul+eXprP5HIDLwvp3c488/NaT5Cayiel+2ayVRAAAAAElFTkSuQmCC",
            name: "Mulkkio",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mulkkio",
            beta: false
        },
        {
            id: "giantshooter_weak",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABpklEQVR4nHWToWvrYBTFfykRldVxFSEhMBOWv2ArFDYxmJ6ZG1RVjaqqUVUGK28wkYnqjscjDwLt1GRGTCAkRMRFR8ZlYtyPtOuuyj3cc8+55yMaBxW+z9tDDKCsG+6uF9ohroDfiHvLtzEAj4t/iqcDPG/uW1EZDvqUdUMepQBYnsNw0CfcxsymKwDGI7cdn801gN7z5r4dDvoA5FFKWTcE6x2z6YrZdKUwy3OOnqqF7/NWFGfTFQ/LiVKS2nz8IY9SxiNX5SEOe9IUWUWc+GqoW8fI4qgnyq8vbyqkOPEVufsdbmOC9U4ttTwH3fIc4sTHPbnF8hylIIFKkOE2psgqXl/e1FnqFcq6IVxOlFKRVYrUDU/I4gBAFyvjkYt7cqs2Sy7HKk58LM8hj1L0rlr3tjxKlWKc+JR1w8NyQpFVmLahlummbShSWTc/Ugd4egowbWOPLO60i6vTVkC5t+tCSvpDvNfdGKx3BOvdXnCiJGR5RpnRLq5O28ub8x8DYlmqe4Lgpm18O5Df9O56oV3enGPaBpbnYNoG0gtZ8P9/P7Uiq/gCt/oQwawScygAAAAASUVORK5CYII=",
            name: "Heikko \u00e4itinuljaska",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Heikko \u00e4itinuljaska",
            beta: false
        },
        {
            id: "giantshooter",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABpklEQVR4nHWTIW/bUBSFvxdFCg+zBmwQZmsg1FJbYKkoP6BoZFKj8JZMQQGTGtpEjeSBqmBSSYFVEOmBZpKpQWszAxtEZuZGHpjuk5N0F/mdd889554nK47q8X3eHmMAed2wuLhTx7gB/kfslo4SAJ5+vBpeH2D+dtuKymg4IK8bijgDwPFdRsMBOkpYTtcABJOw/fZ1oQB687fbdjQcAFDEGXndsNtoltM1y+naYI7vfrqqenyft6K4nK65eZgZJanVx4oizggmY5OHOOzJoUwrtvvQNHXrM7I46ony8/2LCWm7Dw25+62jhN1Gm6GO76Ikg8sv31l9rA4uJZuuy+f7F7OWeYW8btDRzCiVaYXju+goOQhPyCIC0Be1YDI+cVGm1UkespbjuxRxRr+rxiQ09os4M4rbfUheN9w8zCjTCtuzzLC+7VmGlNfNSeoAv36+YnvWAVncqbOrcSug7Nt1ISXnY7zXnbjbaHYbfRCcKAlZnlF61NnVuD2/Dk4axLJUdwXBbc/650B+08XFnTq/DrA9C8d3sT0LOQtZ8D+/E1WmFX8BfxkRO2FHNzQAAAAASUVORK5CYII=",
            name: "\u00c4itinuljaska",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/\u00c4itinuljaska",
            beta: false
        },
        {
            id: "miniblob",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAUElEQVR4nGNgGAWjYBQwMDAwMGITLG2J+I/M765ZgVUdAwMDAxMuzQlJPDgNxGvA04dvGJ4+fMPQWv+A4enDNygGYQMseGUZGBha6x/glQcA17wWJENICvsAAAAASUVORK5CYII=",
            name: "M\u00f6ykky",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/M\u00f6ykky",
            beta: false
        },
        {
            id: "blob",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAfklEQVR4nGNgGAUUA0Z8kqUtEf9h7O6aFVjVYhVE1ogMsBnCRKzmhCQerHIYBuACC+Z9wWoBigHYbEhI4sFrMIYLnj58g9VmmGHo8izYbEdXJC0vAjfszcuPuF3QXbOCEV0BzEAYZmBgYHDzM8UM6KhUFxRBbIpgarAaMGAAAGYPPbNHadFtAAAAAElFTkSuQmCC",
            name: "Kiukkum\u00f6ykky",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kiukkum\u00f6ykky",
            beta: false
        },
        {
            id: "ant",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVR4nKWTMW7CQBBF3yCXFFSmsUQXi5RQkSpFcJ0+FOEkcZE6uUAiN5zCB6AKlESbDsmKBJUL95OCrLW2bEOUL41WGs3M/393Fv4JUdWzRcswKosSkwqAiJwSqtoZj1dzbcpbeH+R6yoB5CILN8NrDQdBRb5roXcJc/F8y9f9sK7g/ADL/v3x2VrTaiGeLhQgzbZYCxaJSaXTgit1fdiJybNWBV69AWDU9wHYF0cAwkFAYlJZhpG6FwnQs1KbkJhU4umibKo3lxYso4VlBog3K+kiaVwkk2eVofUh8WZVKvEs46jvsy+OmDxjfdgJnF7CFrtN7/NX5XcTvTTblqwAUTBpZHYHVDDzxzrzx/o0eVBVxZ71eLt70abP9AOACbvhq/a0ngAAAABJRU5ErkJggg==",
            name: "Murkku",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Murkku",
            beta: false
        },
        {
            id: "rat",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnklEQVR4nGNgGAWjYDAARlwSDZkx/2HsT8+eM/Rt3ItVLRM2wSJ/ZxTNMLEAc73/DAwMDDAaqwFF/s7/+aQkMQzlk5JkWH/iIkORv/P/9ScuonphW2Ii3MQ97x4x8ElJwm1GNgwmdvLmfQZzdUWGvo17GVm2JSb+95o/H+6/In/n/zCFME3IBjIwMDCYqyti8zkEWGso/cfGRuYjiwMArkM/YMzrGnoAAAAASUVORK5CYII=",
            name: "Rotta",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Rotta",
            beta: false
        },
        {
            id: "bat",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6klEQVR4nM1SIQ7CQBCcazAEi6g4gYcnIBAkReD7gZLAGyApCN4ASV9wPygJAsEX6itWILDViyB79K4pgQTBmNvbm5nb3Tvgl4h7MX/LUf6BqYzNHaKMAUAPNACASsLlekadF4g47GvHyBdLPBlPHV7glxj2NeJezHITlWTPJK6bBG19C0mE8+MMyzxp8ALp53Ynu9bFAKywqxSWeQIicmdQH4qpjCIiEJFj0lUKX2E9TJmZ+RBlLDEz83qYOi133plsRltorW0M4LkvXpzGKwj2xc6pWYxWp4WTbzXw4Qs/NmgTfgT5jf+NB6xkbVWixA+CAAAAAElFTkSuQmCC",
            name: "Lepakko",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Lepakko",
            beta: false
        },
        {
            id: "bigbat",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABN0lEQVR4nIWTPU7DQBCF31gUQbQUFFPQmyNQUCCZG+QCiXDOYCRnJXwGI5kLRLSRcO6B+xRzBUQ5FGE2u+uVGMnyePz2m5/dpeXVUgFg970jBNZXgyJjm8M60pEBzB7uH73PtzwDyFEiSHFzfRb9t9jiYXVFbrFlkqNkIdkWUgAAiJwBzPOKNoc1EZAfmIjg9WsbxV7utmBm1OPqlJ1O69FXg/bVoGahr6q6AGb/FoBGMzDqJUW7lLV9PeLj+RMeICLY1yMA4Eez2x+3Fwy4CIP7evQge4dQi9Xjyg/Y19uUraaTTs+CZRURdJOjpmy1iAR/VJuHleofic9FNzm6aMpW7cP8t6f3mThNYlZ0k6NucpSKLMbM/hAxM1Ktb6EpW+0mR+lts4zd5Cj0rVoPSMlhPNeO6X8B+gHJwBHwRNkAAAAASUVORK5CYII=",
            name: "Suurlepakko",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Suurlepakko",
            beta: false
        },
        {
            id: "firebug",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5ElEQVR4nN2RMQ6CMBiFX40nUAZWBhZDwooujp6gJE7MnsJ4CmYnEjmBIwPKwEICLAysDMQLONSBtIFSiKOxy5++vvf6NQV+akWezyLPZ7I2l1nIguE6g6K4SGdLlirRcJ3udvgsLlLERfodwf56IvUtGRUB008hKpGbDddBfUsQFyne61Kcn+9PkVMWAAC1TWbpGvKmhaVroAFBeOwgaECwWT3IZMHlsGUAkDctAMDStZGHU4x+gYf7QW6W56igfO1EOG9aQdCn6WtKAtkUZhWhtsnCrCJ8r8oMKDgJtc3B/NP1AdXhadQe4t+nAAAAAElFTkSuQmCC",
            name: "Pikkutulik\u00e4rp\u00e4nen",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Pikkutulik\u00e4rp\u00e4nen",
            beta: false
        },
        {
            id: "bigfirebug",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABB0lEQVR4nLWRoQ6CUBSGz2E+gTNYCRRxoxBQA9EngGow+RTMYjS5mXVubPIENi1ilI1ZCFYC8xWuwR08XC9i8S9c7r3/d/5zLp4mawFM7maGIGlhT8XItJVnLQAA3XfKjRO8gKrLKmnuZob3/aXc0H0HdN8BOVktgKpxCIF+gWi0IIicpgny0Sc30Gx2wQpGpg3HfFu5GxxiRG7kw5RbWl2X0O92mlvg1QnIzV74Du2FWN+CXDHNC2UC5Vt7liFkMylKMpyPByI4xDgfD4RWZyYTN8vANC+gArg9hqWZJ4iSDKMkQ/5P348EvEqaFxAlGXqWIchAa1IF0GufkU9ZJZ7kq+RKf9MTH2OETGlUGT0AAAAASUVORK5CYII=",
            name: "Suurtulik\u00e4rp\u00e4nen",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Suurtulik\u00e4rp\u00e4nen",
            beta: false
        },
        {
            id: "bloom",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQElEQVR4nH1SoWrDUBQ9L1SEtozwfJmZ6OxEI0M7U18TP7EvKGFfEEq+oCK+eiquTCauqhRmZivWsiZhMOidCDfcpI8c8+5975xzzyUBBN6fnwgtHHyfujiWbE4X3SCYxKeLbgywtvPJzdT2lIPvkyldupiRxYVMIaef/45ov7GmLPJqhbLIkS5mNB5dG8Qucb0CF2WRAwDYxITx6Fq/M9+aJpkCgP5g2Gki75g3TTJ1k8AEuUpZ5OgPhnWvuDB9DSayuew5uZKC7XxC0t0k5Og3CbqSMKSQ0TORwtgzmyTV4b8+EgBs1nul2hdB5JKjbQDA+fsXX58/uH+4AwA42sYuO2Kz3tdJeixkI0fbtZCxWqYqiNxGKu6tIHKJGzZaLVMl+zD2iA05JfOUdHS0jbeXDyVXCmOPdln1H/Aqcsg/M1zCE65GuhQAAAAASUVORK5CYII=",
            name: "Puska",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Puska",
            beta: false
        },
        {
            id: "shooterflower",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABG0lEQVR4nI2SMYrCQBiFvwx6ga3Wfi1kZU9hY2Fn7xmCsuwBLDyBnewBPIAgeAOrhGQDkj6FJJ0QBpmtfplkxuDAwMx7873/BQKeVW7nJl+Ojdzz5diU27nxve2Eb9HO3KKd6QpRbVjOArbP7RD1zADQSYROIm9LbwOAKs8YLMIGqJOIwSKkyjMnTEmibfqm2lqVZ48WTgOA/ufXS5oTIC26GrQ/Q/nEVxoIowDSuPZO69KEUQCz4yWwQ67nkxNga2lcMzteAgC1OYxMOySN6wZwPZ+wPYE3h5FRZaGRkCTssZ/cGyE2vJ/cScIeApeFJpApElIW2qlvr7f3PgA/078Hy/fvh5ENsFoPnd9atPbbhmED9v2Zt1oPzT+hsdKg4IapCQAAAABJRU5ErkJggg==",
            name: "Plasmakukka",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Plasmakukka",
            beta: false
        },
        {
            id: "fly",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOklEQVR4nJWTP2vCUBTFzxOFgksd/FOog8UpS/slMiR7od8gZHDxg7h0SB26dy+8xbHQuS7BwRJKOqgVLIWAkOG6eF9fXl4lPcsLl3d+99z7CHBUKgNKZUAPt1cEAHxW1ix0iEFcMyFOr01Or10EpzIgNpsQHWAaCzAbhE+G6AD9uw4AfX8qGLR4fkEqA+r7UzELHXrf7gEAYVcA3Q4BQJLliI8AcWofT/ITAHBzfoZoTb8gANGaEK++RN00j4ctWrxubVyrCgnurzuUZDkGzYaqvX3vVQpdSZZjstyJmt4ZAAbNBpIsV5cA4M6/xGi+sY5bsxUZ4rkXePz4UcbRfCOSLFfdCwC9syk3igUvdrLcCTaXEjCEQbrRjWLrCKUl8ux6l1MqJPhrhH9pPGzRyvMq/4mlV+DoVSEHdY2q6vjWZ0wAAAAASUVORK5CYII=",
            name: "Amppari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Amppari",
            beta: false
        },
        {
            id: "frog",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAcUlEQVR4nGNgGAWjgB4gbor9f2QaHTAR0nxhASecxgYYCdmMDhblHETRg9UAdM3ROpIMDAwMDO4OKzDU4/XCmys/8UnjN+DNlZ8M+REKpBvglWHxn4GBgUFEh51h4ooHDNE6kgxLrzxncHdYwQiTQwYAzE0keCg90QMAAAAASUVORK5CYII=",
            name: "Konna",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Konna",
            beta: false
        },
        {
            id: "frog_big",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvklEQVR4nGNgGAXDHcRNsf8fN8X+PwMDA0NUvcv/qHqX/+hqmPBpZmBgYHhz5Sec/eHlFwx1LOgCUfUu/1lEf8P5IjrsEIWivxlERNkxDGDEpzlaRxJF8dIrzxn+vGZlWNa4B64PxQv4NMPEkNWgGIAcQNg045JDccGf16wMDAwMDBNXPGB49hQzwLABFAM+vPzC8Oc1K4OIDjvD6sNvsBqCLgY3YFnjHkYBcR68hjx7+oVh9eE3DF4ZFnDvAgDroE7dDPNHkgAAAABJRU5ErkJggg==",
            name: "J\u00e4ttikonna",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/J\u00e4ttikonna",
            beta: false
        },
        {
            id: "fungus",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2klEQVR4nGNgGPKAEZdE9dTD/2Hs1mxbnOqYCGnGxsfrgvykBf8ZGBgYeIyVsWpAdw2KC/KTFvznMVbGqfnL2bsYrsHwwpezd3G5Fi4fE9gON4SRgYEBLiAsKMnAY6zM8OXsXTgNA+j8t++fMyxZX8kI9w+yIcjg7fvnKGJv3z9nYGBgYFiyvpIR7gJkgOw8bACmEcUL2MCjO9cxDJJT0cRQjzUdMDAwMDy5dwOFjcxHBiy4bJdT0WQ8tms9Xu8wMGDxwqM71//jsk1GSQOrN1AAzFZk27GJwQAAitZif8m/SiQAAAAASUVORK5CYII=",
            name: "Laahustussieni",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Laahustussieni",
            beta: false
        },
        {
            id: "fungus_big",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1ElEQVR4nKWSQQqDMBBFx+IBKgqFFqErPUHP0It029t00714itwgWxFm3wpCgt4gXSUmcRJbOiAS89+fP4kAf1YS23y1rbLX4yy3DXyIKtvIGHwDUikSChxnCYd9vlpTI+woV6obpRF9B6ne0G/d2f9uQ9fH04yexrqGoNUIVIm+g6nKYKoyON9vIdmSwO/CWKPKsnbEiFwBANT1xeiCPxIiV0VxWhKJtwNuGkg5ONeb58ffzsAHdPyogS1irHEAe5xoIXKlYUSupBzME0oRNfNh3+QDe82QtIwR5UYAAAAASUVORK5CYII=",
            name: "Nuijamalikka",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Nuijamalikka",
            beta: false
        },
        {
            id: "fungus_giga",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHUlEQVR4nI2Sv0rDUBTGf6mFLEHwoiBSlwTSDi6Cm/QR6uIgOLjp3OcofYM+QWeHPoBT6QsYB6dLEJQbCFlDHMqNNzc3Nmc6nPN9v/Plj4dRd5tNNbk6A2AcCHNFUijGgSApFIvLG0/PB6YoEKJhTApV99ps18Ae6Ev2zJw/breVEzC6OGpdN426N3U1wKS6onbtGglkWvYyybSsD3qwf/t6GYhmRLtkWlKoP+AQIJM5J6NjAAqlkOyf2QTpdKY5kzn195yu1hVQg/6rTOYAvD0/eF6XaLpaVxqWyZy5v+P+adnSD7sAc3/3yjezMIr59D8Io9ip6wSEUTwDOD2fAHB9++JM2/oTdWmj3fcGHDIeBPx8vTv73oA+1wF+AUJibhpmCsTIAAAAAElFTkSuQmCC",
            name: "Huhtasieni",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Huhtasieni",
            beta: false
        },
        {
            id: "lurker",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArElEQVR4nGNkwAGiM6v6YOyl09uKcKljxKX5yvEdVjC+jqXHMZghMINhfAwD0DUjG8LAwMAAk4MZSrQB2ICOpccxJmIU4gMsyDYjOxEZiEjKMbx5/girAYwwzegaRSTlGBgYGHBqhIUBEyl+RteM4gV0gGwzPtdQHIjwMGBgwB6AuAA8DBgYIKlq6fS2IlhiIQVQ7AWCBuhYehxDdxlyLGBNysh89EyELEYVAABpsF5esMTr2QAAAABJRU5ErkJggg==",
            name: "Varjokupla",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Varjokupla",
            beta: false
        },
        {
            id: "maggot",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTElEQVR4nI2Tv0sCYRjHPx7OTUdgk0rDTQ6JILaFuNpRODS43dAgQS1trS3d0uBQS8sNUdiaQ1uBhCEO4oFot5wgR0P/wNuQ93Ker+UHXrj3ee/7fX68vIlaoymYM+y2Aei/tRKsSTIqNvIVAIx8RQDcXx//a6TFxVFqjaaIVqgikSuZQiUOjUNWtZVUBVVV6amseHm8WjLR1hHvZz7Qt7aVibR4+Srx02QHgL2DMwHg2JZwbEv82UIovn3dAEYy5tiWODq9ka0oDQJ/LshAMB1zfqjLs6gYYjMYdtvoqazcXz4EmIUZrjeQsYuT3YVr1WQ2BWZhRqfnA+B6A1xvIPcLFQT+iFVG9WqZTs+Xq14tLxuoCKZjmTkuWssAoPW+KU1C4kOUtxBmDL+/v6YA3D3/xj6HE/XDShtFOdVcyRS5kiniZ2mjKKL/RfkBaWqNUNIx+xIAAAAASUVORK5CYII=",
            name: "Toukka",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Toukka",
            beta: false
        },
        {
            id: "skullrat",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSUlEQVR4nO2SL1MCURTFf2/HT2Ci2fhbHXdnd6BpeziuVZKJGUmSxMha1ETgA0hVx6VJg1kHHCvDSoNE8itc01sXHG02b3nvhnPuOede+K+/LRGRXNGVdG/qV+Dz3bloV8tiNhQRkbYfSJogV3QTEpUGalcLgJ1xAJisxskfYO/og/2TGwAGvSYHtVulfgK37i8SYHB8xWQ1TvowClnGI3YKFWUZyWlwLSiTL3kA5EveGhlA1auyU6goAAug051jZ5xkytnpNfE0AiCeRizjEQCNevZbXpYJqBaUadSza1IHvWZCaGccXh+3adSzhFGICdEyQb2/PZHbPcRYWcYjOt15Mt2EakLMlzxERJR2tfRf+gqg7QdiFKQtbfZhFAKg1NcSaPuBmE0YW+nX3IN2tbT9QBazoQBspQMxSi4fWmv3sTnN9h0xW/gEonu2HXLylEkAAAAASUVORK5CYII=",
            name: "Kallorotta",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kallorotta",
            beta: false
        },
        {
            id: "skullfly",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABx0lEQVR4nHWTsW7iQBCGPyOe4CpaJJQOURgFlLQooiFSQnE0qaiClIZchV1FNh0VElSucoVTwElJQZSjvQifrIiIDiLRusor7BVmFptT/mbWuzPfzHh2DXZSSim32cea9HCbfQDsqWU4l64SH3tqGRwoIwu32SeIFtoCOJeusiY9ji8+CaIFAnu5v9VQQzIfX3ySL9Z4uHsDIIgWPP551Jl+//zBcLzm5vqIfLHGdjXn7GpgZM9PzwH4XuxQKNUJohFAKhggX6wBa/LFGoVSfbc7ICsO3c4IiIMruephqxRKdW6u54nguBXj5f5WDcdrHZQsvVwua+cwDAH4eH+m1bYB8D2HzHC81k7WpKfXyWDRx/tz6rvVtvdTkAlIJb7naEffc/7LLMomSw+ihQYUSnV8b99/siI5267m8aw3y5kSNU4aSimV2lNKKdM0U3aznMV3QRzlQABfgUQaYJqm2ixnyjTNFOQrkFhpJ+N7Dq22je85hGGo3wHEt0+0Xc0BeLh7S+1nup0RvufQ7Yz0mORHnl0NDAElx/3317c9oJKr7m5hnCWIFthTyxBIJVdNgWRi8rCyAE+vT0ZsoXHS0P0dSkDJJ/4Puq9HJTysezMAAAAASUVORK5CYII=",
            name: "Kallok\u00e4rp\u00e4nen",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kallok\u00e4rp\u00e4nen",
            beta: false
        },
        {
            id: "tentacler_small",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABE0lEQVR4nM2RvUrEQBSFvxirlLJg0gl5AdluWxtZfAKJEEgnWKW1TrvbCHaBhQ0pbZSQZtsUPkMgXQyElHYSC5lhJsnqgs2e5s7POR937sA/Zey7SKO8P784o6k6AG4frye9J7+FAUTdJe/9QQA1DDB31iwXG5qqm4SMAHXZ0lQdTdUxd9aYtoVpWxKSRrkGOVU3qyDpAZaLDVnh8/S80+DupU9dttqZBhDKCh+Ah/srTNuS568vY+/kEOuypS5bssLn6+MTQNahRl8jnqEquHsjK37aD2NPy2gdpFHeh7FnOO5MA8TbGxkeDlEDqAMSIMedoUKHQ5SAVZD0oj1hUs1iHcaeMfVMTapBtPxn6BDYceobvNWAHQlRe6wAAAAASUVORK5CYII=",
            name: "Pikkuturso",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Pikkuturso",
            beta: false
        },
        {
            id: "tentacler",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIklEQVR4nH2TMWvCQBiG3zvyCyQg2YT8ExcH/QPFQiHgUBAK4uYgHVyFgtAtk+IfaCkudezs1CkgLokQHLOFdJD3uLvc9V1y9933fN97HxcBj/arQ2PHHhYDYceMgAui8qxEFIetQpLgfnVour0Our0OAKgv4cn8iDwrW42kDVLX882AfVeUPsuEdemFeBa4uvogl4vABdqd/3MY2AFX97flBwBg+txv5akZMDiZHw3bhAFg8/6thsqcgHDy+Il0O0RdVAqoiwovryNjn25h5Ih1smuiOFQPhU64Zqc7PDRyZulYSDrgK4vi0Fjr3fS4dwYu1UWFr58nlZdnJWbpWACA1KvxUC9mg7YEAKyTnfcn0udBsbu6Al38Xk7OAj4YAP4AHpW1S3MX7cQAAAAASUVORK5CYII=",
            name: "Turso",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Turso",
            beta: false
        },
        {
            id: "ghoul",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzklEQVR4nKWRLw7CMBjFfyVI5NzETsENFiSaTBHCjoCbxO0ISwhq2SF2AhwCiZgYCckMCX6okm+03Z/wqabt+73XV/hzVN/h4bhpAeqqIc9K613rphbKcUFmQ+LtbgGAH3jcHnsDbACkI8D59O6sewHS3Q886qrherkDkCaF0qBRCTRETp6VKorDzjO+pcjGtVAWF8VhaytxbnO1RXV9Y+cJWqgTuETOBC73vjFK9APPKG8SAJiUwgCkSaFk85MAv87N8zU6ieG2Wi8H3QE+TnJcJLE79ZwAAAAASUVORK5CYII=",
            name: "Sylkyri",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Sylkyri",
            beta: false
        },
        {
            id: "giant",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABuUlEQVR4nH2TPWjbQBiGH8mFTB2FG0FEQXjQIA+aaoqnrDZk8hbapZ1LA4F0KfHgrpmyZMymLhkyFQQBUxIyaFFAgzkoEsgu5z1ksNyh3FVnh972Hff+3p3FxvpwcrZe+AnjYZc4q7n+cosfRKz6M1rTDo7rcfHtk6XO25tggNa0Q5zVLJM2fhDhuB7jYZdVf4asCkPQIFDLcT3yyydjL85qxsMuIk+1kEFw8O7zGkBWBbIqcFwPWRWIPAVgmbQBeP3xpeHCcCCrguBwB5GnGjyY9P7rQhOIPGXVnzEKbQaTHiJP8YOIUWhrxfzyiTirebN/sO3AD6Ln6tCdqFjLpP18BJUV0C4c1yPOaoOk2c9WB61pZ0v94deDMQeHO0a5miC7v7FUUcoFwCuxD6BBo9Bm1Z9tR1AxlklbkyibmzfSmna04IsmwaIUf0GJR8xvo5fBpMcotDk9fuTnj+96XxM4u3tr5QKAxMMPIj1/Dd9yevyoZ2d3by3npWUDxtPM7m+s5kPyg4jBpMf5mYPIU21d4YwIcl5ajUI1qbp7BZbz0lKO//2F90dNLhal0MXeJVdGbnVeVgV/AMCX+kcPkE0xAAAAAElFTkSuQmCC",
            name: "Hiidenkivi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Hiidenkivi",
            beta: false
        },
        {
            id: "pebble_physics",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEElEQVR4nN2QIWvDQBiGnzZizO/oiIgJERGpqJgbDKoDVXWjqn+g7hh0UDkx+gNmRt3UoLaBQdzEBm0hYhRGREhJ/0BFdxXlwkbSMDn2ubt73+d7OPjf0+kNVF+OVVWmXlUWpgWAnMmjkFKA/+ArYVpkSZzfva9vSiEFgJxJNfKbpHaANtgEDZ4WX3R6gwKkANBhI3QAOGuvAYgmW27vTqsN+nKssiQmmmzzcterk9oBQKlFwUBru9cndL3D88hvsrv8YBM0qg30pwnTYvm5LISzJGYVvR0HPD/e1zTECB2G0zkAw+kcI3QQpsXi9aX2vfPjoMe7uFK220KYFqkdcL5q59t/BdAQANttlRb/zuwBNjdp6aonziIAAAAASUVORK5CYII=",
            name: "Lohkare",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Lohkare",
            beta: false
        },
        {
            id: "longleg",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmElEQVR4nGNgGN7AxtDtv42h2398apjwaRZj0GQQY9BkwGcIVgNgmkv3fWFgYGDAawhOFzAwMDB0O/EwMDAwwA0iygAbQ7f/H199R9EIM4gkF7xiuA7X+IrhOsPHV9+xeoMFm+38YpwMDAwMDLdfnYOzSXYBsYAoA46c38XIL8aJ1RvUd4GlsQtWNjY+VoDsRHTnEkrWZAEAPZQ2YiagIZ8AAAAASUVORK5CYII=",
            name: "H\u00e4mis",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/H\u00e4mis",
            beta: false
        },
        {
            id: "lukki_tiny",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABB0lEQVR4nO2RoW7DMBCGP1eVwsOKGhCWasA0UkbG8gQGUeHeYKQamvIQxQV9gCksYK0UGpSwggSFjQ95yNElzaRJo/uJ7bv7P5/P8K8/S/2UeP14saHvcfv8IvQ99g9vi7WrpWCWp7arWgBC3xuBvwJkeWqDOCKII8r3eoyHvkeWp3eQtTTKRFe1IySIIy7HksfnJ6CYAJQz983AdrfBrUEc0VXt3dnpdCgUwNqZr+daASRG274ZAAjiiL4ZJjDZ8elQKJUYbZ153o2DXI4lALIuMdpudxtWS2YX65th0rac0/VcK9kRWZ7axGg730slRtv5sMdvlLQJWcjdKiEjwL1ZFi9SZvoGWHuNeQzRi1MAAAAASUVORK5CYII=",
            name: "Pikkuh\u00e4m\u00e4h\u00e4kki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Pikkuh\u00e4m\u00e4h\u00e4kki",
            beta: false
        },
        {
            id: "lukki",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABl0lEQVR4nKWTMUsjQRiGn5E9LOzsUm2KdAlypA2cKZYDienSKOSuu4A/wOKClcT/sIKVoE06SaFssStsGyx2u4C7TbazsxAWPgsz46zRyq+ZYZjnne/9eEeJCN8pB0ApVTk8CY+lsb0JwOLphSxOuRzP1EdYRFAiUhE4CY8FQAvo+kxIRNiwLw0nPcnilMgPWDy9GDC4mdPY3sTrtxlOehXPjg3XO03+uz8owwU9P4CRRxaneP22AVZ70Z04NpzFKeXjAqc7wF0+EPkBABfJjN2RZ2zVO02GEwRQSkT4c7Yv+hXtNU8KZr+fcboDynBK726L3ZGHns/fnVMlIm8d5ElBwJw8KXBbNeqdJueHP999rjoCiPyArFXTs1BmiDYMUIbTylrvNIn8ALdVw+u3zb0NgPvrudJwFqcAHC0blOEUpzvg39UDWZxye7ZHnhTGJvCeg18HbbFFbLHP9pfjmVoLkhbRlvTQ7NIDvr+eq7Ug2bDbqplX7VXDmqkIAGuZj/yAPClM2/oRU1/9RjuyH+Nrs+q73/kVGi/yFr19f1IAAAAASUVORK5CYII=",
            name: "H\u00e4m\u00e4h\u00e4kki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/H\u00e4m\u00e4h\u00e4kki",
            beta: false
        },
        {
            id: "lukki_longleg",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABj0lEQVR4nIVTPWvCUBQ9TwLZs2WKQzZDKVmF4iAWETeXDtKthf6ADhWnov0NDh1EaBe3EIqQIRayhiJmyxCXumVzCAjpkN7nTSz0Lu/l3XvO/ToRqNjYf8xNTZXfcZohCSIsRq6oxgJA6bEK5iSmpv5JptBlOOnlPJjs9cUtLvdtmJoKs28DQE4kNQLXm41SxjjN4DkhVtMu3M4B65kn/e2+LRPWCJwEEZIgAgB51psNHP0llNYAhqUjTjNJQgkFAMw345zKNSwd9WZDtuE5oQQkQXTmE8NJL28Xfckh8aDqMLn/9uJZ1HjP65mH3XYvg6tgACX/fDPOxdWNnRuWjt12D7dzgNIa4O7tS/ZIlVACMsPSy2s0LB1K6xJHfwnAhKmp8JwQCeufJ2j3bcRpVgyRb4IGxmfgOSF22z1W0y6O/hIP36YkVXhfnIQLitq5fvqAYZ3Ai5ErpCRpFty4uICTPijp53tYbIEPhaohABcXERIY+JUyGf9J6L7b7pEEkTwXI1dUKz0z0vl/bwDwA+jz7wdtLkruAAAAAElFTkSuQmCC",
            name: "Lukki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Lukki",
            beta: false
        },
        {
            id: "lukki_creepy_long",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/klEQVR4nJ1TwQmDQBCcU7EFORASyD8g9pAOAjYQnzaQR/BhA3nGBgQ7sAcR0kFAONJCIFwesuH01iiZ197tzBw7rgJ/oqliDQAeFYekFWuEtyIa8cW0oZ7A5dpZZnkWaRnYfYeK9NwJ9QRkAJyOe22K6cyZWy+djnsdShe9eqOs78I0K+u7xWfnNkUP9cJG+qz4p8FDvUZ3G+kjlC5kMJzT8zCKx70cSheADzIxxZRDU8X6kLSC/Qq9en9NaQQug6aKtaDC3AMuSPM8ymBJPL0HJnsw3UCalcgEMqMQWeRZpCmLOdyKSOfZDGdJzPEcs7HdOTabwSyP/sw1IO4Hmr+O6Stb5jUAAAAASUVORK5CYII=",
            name: "Kasvoton Lukki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kasvoton Lukki",
            beta: false
        },
        {
            id: "lukki_dark",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKElEQVR4nJWTu0oDURCGv13yCCGbhcUHENIIAfvYLLY2lmpnY2UlCxtkHyBNQgJhywVLm2OzlXYpBR9AArmQd1iLzZwc95LLVOcMM/98M8NYz/f97Of3m8VqTtHCICJ8fan1uY6HXco60WypHgZRmWBPdYDFap4TuI6nA0xbb5asN0t6Xb+eQJRMZUksij0+PVQLmMhVrSQq1m+hkbhGcfqfH1+1uLf+HYmKGQ6mmth6f0szqS7YErjPWs12LnDRucxMpKo+jxIASoOrawMgnSlcx9sJyHAOoQMMB1MAxpPRf4JjKQQftmsMg6hyfVXoZjKA7Tpevv/tWlrNtg42kRMVa79ZzLq+uskAfY29rk86UyWC4h3I3z4/6wC7e5DkQy2NJyNcx+MPQcuK6YcoCu8AAAAASUVORK5CYII=",
            name: "Kammolukki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kammolukki",
            beta: false
        },
        {
            id: "worm_tiny",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAUlEQVR4nO2RMUgDMRSGvzgWxPUqOBaK3YqUgnBI6VoRVzt00bVTwZt1u0kHh04OeoOgi+vVQRAOdD0IBFwKR9ZzyBoHzdGIis76LeHBn5fvvcA/Hr3h1AJ0+xO7WH+XFQDWWgswfzzicLaFziVBq4nOJUYrakGDu4sD0e1PbJbGwl02Wr01cK+WhWS8k7O5scbD05z75XOSKBS94dQarTyDspCsrDZ9g/XWNlfHL4xv9jjZvWT/rOOF3QlQCxpUIyzOPepcewbPs9sq7DBafW7w1Q4+GpSFpN4eYLRiCUC8MzoNSKJQGK1IolAAZGks6u0BQKXv6iyNBT/hN9/7F3kFvwqHGnJxRPcAAAAASUVORK5CYII=",
            name: "Pikkumato",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Pikkumato",
            beta: false
        },
        {
            id: "worm",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABcUlEQVR4nMWSMWjCQBSGv5ROQnFNBRdBCGYrKogIBZFOSunQpQguzt1ECp1SSrFTly4ugrgIXewk4lTEIUInJSC4BELWVHC9DvZCYoV281+Oe8f99997HxxaCoAQQu6FbRpc362ZjlqKLOZKDRFRkwCMu3UlWDsOmIlcqYHnWJyelbl5+hAA7twKmUlF1CSqroUMFEAs5gO2KZb+Qa7UEIliGYBes6AUq22h6lroC8I2DS5qJgDRmOZf9hwrVIuoSTbu0k9wJF+PZ+6VaExjMR/QfzzBcyw8x+L2ck7/4Yta9g3Psdi422SqrrEav/sGwjYN4TkWKb3iJwHIp+PUX7Pk0/FQos/uM8D+BMNO5lfDpKIxDc+x/FU2UdimgUwQ1GRm83LVYzKzAd03SRTLrMY7HORKDTEdtZAs/KeJe6ewOwmAv8YIQEqv+Bw0x+fAFiRJX1DSJETisJOhWG2zcddMR4WfS4W9KG/cJe6u60H0DXOXvEy7tGs6AAAAAElFTkSuQmCC",
            name: "Mato",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mato",
            beta: false
        },
        {
            id: "worm_big",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABpklEQVR4nJWTIW/bUBSFP1dFkdqAEi9SCipZymI2JSNhGxhKVaWSSQdKSgIaWkUtyaaoNAMDCwkpMaimDPUHhLhRmSNLZrHkmhS4kUxfQfTeXuIU5KCnq/OO7j3nXoM1fPn+RwBkSUjBtNDfm2qGEEJEjz84/2UC8Pz0j2Kpoog6siTM1XYAyvUbRpeJIqRxkCMPWndKdNj2KJgWR1+bGHOvJ5zugjQO+PCpSZaEpHGA+/MVAOd6n2KpooTWOzMAhBACQB/FObylUSvjXO8D0DnxadTKTKYRI+9UiRlzrye+nT8qRb0LCflZYjKNcOdXZEnIjtNdADDzxzyM6sqD9z4Dy84Ob5cmuv09AKr2MXonOvni92c692cAHNgWB7ZFo1YmjQN2ne6CmT9GeuB081FtilRi1+3vUbWPVzzQR4DVpcoJ6B4sU1glTKYRwzaAB8CLH6p6sXS62QM998Ffm8k0yom68yuAZQozf7ySQsG06Jz4apl0EbkH6hbW96BYqmy/iR+rTSE90MeQ5EHrTsWYJSHDtkfn/gzTrvy/RmlmGgdbXeMboFfmBnKfIJYAAAAASUVORK5CYII=",
            name: "J\u00e4ttimato",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/J\u00e4ttimato",
            beta: false
        },
        {
            id: "worm_skull",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4klEQVR4nK1TOw6CQBScZ+gsSAyRhMZQUGmsPIHVtlYegaxH4AAeQcIRrGipqOykIhJrSgwxobBeKxSQb3DKfTszO2/fI85MEcQR0ixBExRZ/akrsorr/UKka4YAALbeli4EcQQArcIAIOVk23MIADgzhRf6raQiiDNT2J5DnJmiWPBCH/vVDvx4+JzZ1gnnm1sWaHKtkutEFFn9ChSd+yBvLNW5P18PzKbzYRGq7rlIFya93tuC/0YAhjdRaiJ2fWOaJVBkFVLTIJ1DF7DQGiHNEpCuGWLUKI9dJhqzzpvFEm+BQpwX/nffLwAAAABJRU5ErkJggg==",
            name: "Kalmamato",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kalmamato",
            beta: false
        },
        {
            id: "worm_end",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABR0lEQVR4nKWTIXPCQBCFv2RQKET+QE1EI2pIZqqQyOpODKIaVwUSVB0agblBR55EZeYOgwgiJn8gIio2Fe3dHIR26PSZvbnbfW/vza7HN3aTcQcgm5bpaPhrTJMYoTT709nzDcHscPTMOQijXnRJhNJMR0N2k3E34E7E72/EQJXloLQlt6qvT4+dObtqQRjx8PJ8QVZlOXVZEIQR3m4y7tzkuiyQTQtAmsS9YoPVYgPAwCgGYYRQ+iLpp2JDXpcFvlEzxkxHQ5vgqhnFa3LfqKdJbI1xE1aLjSW+JgHwezd/hC+blrosEEpTl4V9qLIcgOV6jmxaZNOyXM97BJ6ZwFsm3ipwBeqy+PqC6SJNYmui28UtCKWRTfv/QbIm7k9nz6i7OyCUvuikynKEM8p374L+2NquAGu47cCY6T668XqdZdMyOxy9T0ciubzmUITGAAAAAElFTkSuQmCC",
            name: "Helvetinmato",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Helvetinmato",
            beta: false
        },
        {
            id: "drone_physics",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxklEQVR4nOWRyw3CQAxEnyMaQXIJKYEO9gAVICogQZwRCRUgKoBDOqCElLBSOllzQLuCKOFzQ2JOK8+Mx/bCz8AsmFmwb7USCwAimXwTCDCJBZFMiqKwqtqnd99U17WYBSvLDSKZmAWTftey3OC957TacrheEreezVked6gqMSSt8Ihud7Zz1o2OvghTpttF8j01cM6ZquK9ByDP88S1bQtA5JumGZ7AOff2J6IZHo4YoarA/WB9buiwg4Ix4Tv+ZdpHpj/FDUIBZCL9kpRzAAAAAElFTkSuQmCC",
            name: "Lennokki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Lennokki",
            beta: false
        },
        {
            id: "drone_lasership",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA20lEQVR4nMWTwY3EIAxFH9EUkgMluISkB0pJB6QU90ALLoEDnbCHXUchympnlMP6ALLl//VsROi98ySmR2ogXAs55y4imBkAIgKAmSEirOs6aG4JVBWAWitmhqoiIuz7Timl/2ng4nfidVeMMb5tNBCc8T4mKKV0n/1MEWM8Fnnu9WVOXjCzQeRxFV9pXy6utZJSotaKiKCqpJRQVVprzPMMMOSllD6d33Xf96HJTYDbW1WDLzE4dmvtwHSTbdsG/J88HIdHzrn/tn0fJ6XEsizf4hAI//6ZHht8AddRfpyd9GogAAAAAElFTkSuQmCC",
            name: "J\u00e4ttilaser-lennokki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/J\u00e4ttilaser-lennokki",
            beta: false
        },
        {
            id: "drone_shield",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJ0lEQVR4nGNgoDX43fj/P0kaYqu6/v//D9GETsdWdeE3LDCnGq7g/////5Fth7GR1TAwMDAwIXM+ff4CV8DIyMjIWs/ICJNjrWdkDMyp/v/p8xcUS+EK0CXfvX7JYKEhz8DAwMBw4sZDBiFRcbgcHy8Pw/oprYwMDAwMLDDBb4+uM/h6+8AVCQgIwtnm5hYMHz68hxj87h3DyePH4HJwA5RUVBlu3rzJYG5uwXDy5AmGSfwdDCx1ELk/TQwMeR8rGBgYGBjU1dUZlFRUMb3g7hf039Pbh+HmzZsM6urqDO/evUPxq5CQEIoLdm5ah+oFLjlNhs3HLjIwMDAw3Dp2EX8YyGkyYAXO8fn/0aMJGQTmVP93js/HnRbISQcYgKKUiA2QnBfoDgDs8Jt3R1MKMAAAAABJRU5ErkJggg==",
            name: "Turvalennokki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Turvalennokki",
            beta: false
        },
        {
            id: "basebot_sentry",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABY0lEQVR4nK2Sv0tCURTHP09qM1EpsBdZtNXiEiWSizi1+CTayyRqDJxyiPb+guiHu0S6NElTREVD7SFp+BKE9wzHwNugvro3jYLOdO7hfL/nnO/9wn9F8XZb9Mv/FKtbu6Jf/lNoaiFurEnAUiH3rWcgwUIyI5p6om/jUigovU82pzQA12/AAFePVemdOqwIgCGAcMwQbQXgNYuUTUuqVWtqV5fgK6ipJ7DuT2F+Hb8uN/t0GBnrnNJqVKGQ+yRwvT3h9njx1I4JjgO1Ywf48Nq51B5vYysbSCKGY4Zwe7ycTT6Tfo9wNHzNyss01YkNAELKBvlsVHM2GF1MCWt2nblQkB3AvtgjHYgApjSx1ZDFdEHnB3qFntrB5X3s+ic4pOiRz0Y16IpYNi1mdD9NZUqpkNMWkhnhNYtUvixyd37gnO4kPQf6Ajp23XQcGI4ZkjNvLguDnRk31oRq5R6JSvRv8QE9Bn9QqM3LYAAAAABJRU5ErkJggg==",
            name: "Tarkkailija",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Tarkkailija",
            beta: false
        },
        {
            id: "basebot_hidden",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOElEQVR4nL2SPUvDUBiFn4Q6GbUUoZRIbcHFEBc3CYUMgmDJHodurt30L7j4H0To4NKtOIggXcRNEKGroUZCoR+26lRqHEqv+WhFUTzLfe977znvuYcLf4GD0yt/Wv0jlHYsQbQM8/9EpGijXCj6bcfFVvXY5fzWJgBuv8PuyZEUE7AM08/J82wPkzMnRkUSUcvO+xvVJRmA59cXQVSaPQASjUFIUJ4Utet67Dnr2TWSygIAtqpjqzqHmgkg1kSQoDR72KpOXhvbPG7UyaTS48N+WNztd8IOyoWiSP3h5lZM8bqtWA5BCAdtx2U5twLD8ITPHBZD/ZjA2eOdVNKyfpUBmVQa7+meykVNgq//hBzcTAhetyVqmB5wzEFUJAjLMH1G33AwC/sjFYA5bZXK5Tl76ob4ib/GB5z2bnXQ1ReQAAAAAElFTkSuQmCC",
            name: "Vakoilija",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Vakoilija",
            beta: false
        },
        {
            id: "basebot_neutralizer",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABM0lEQVR4nNWSMUsDQRSEvztjJ1HkCkMwxCoYsVeCiCIGBLsrEiGdndjpDxAshGusrMTG5oo0YiFa2AV/gQdWpgjEgyC5kMqga/U2t+YUCxun2p3deTtv3sJf4Ob+QCWtf4MUwOlZqInjkycASpvb6r20C8DywpwhisIWF3tbFoAlZNmtqdv6pQUwu15V2dWKIfquiFGg3+tiO3kGhY1Eu0lFUrLp97oAfHSaTL7VDU5aEQS+R7FyCIAtZOPu2uILcoV5JtJTjDXOR8SB72FkAMPexWrge0xnMry22/qOvCzn2sHKzr4e38Pjs74s4mjRNV4OfI/sWnWYQfOlQ37GYRALKJ5D3IG0EYUts4WyW1OAti1jlT+RNAU7ToggLobkgMXhyMFPWDq6UkVnXO/lN/5zfAKI5oaO79kDcQAAAABJRU5ErkJggg==",
            name: "Pys\u00e4ytt\u00e4j\u00e4",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Pys\u00e4ytt\u00e4j\u00e4",
            beta: false
        },
        {
            id: "basebot_soldier",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABX0lEQVR4nGNgYGBg+N/x8D8DFCCzSQJJhXH/sbEJAUZkjm+kN4rGzcu3MjIQAHAFXqmu//ks2bAqUuBWYWBgYGAQkhKEi7179p6hI3wiIxM2zVc33UZhP/h6B8NQISlBhoqV+f+Z7L3sUJx9ddNtBm0/VQw2DByedprh8LTTcD4LjPHp+C+Gx68fEtRsm2UKZ2sHqEAM+Pr0JwMfPy+DAqcqw9fdUH9zomrGBeCBaO9l95+Pn5fhL88vBgkeSYYXX54zMH9hY+B2hRrIrcIgJCUId75tlinDu2fvGViQA9BI1RRh9DoGhtdf3qLY9u7Ze7gX3j17z8DAwMDAxGfJxvDp+C8GBgYGhnO3EYGjEaQEZ8OiEaYRprkjfCIjPBCxgb88vxg+HWdguMRwDS6GnlZYrm66zSArKs8Ao99xv8dnJgZgZGDAnYTR08jBbYdwJ23fSO//6AbBDEE3iKoAAKpmh+AxLqVZAAAAAElFTkSuQmCC",
            name: "Teloittaja",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Teloittaja",
            beta: false
        },
        {
            id: "healerdrone_physics",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAo0lEQVR4nGNgGAWMMMbm+94Mr48k/he1mQ8Xw8X3VdwKN4AJWRLZZBgflziGAW+/X2F48PApXOLBw6c4xZABC4yh4Xqa4cZuU4bZxQL/GRgYGGw93uMUw+oCcgHcBR8ueTF8fvWHIbX3AyMDAwPD6aWC/3GJMTBgCcTVC4+hmHzh3CmG25f/MFw4dwpFHF0d3IDU3g+MyIphfJjtMEOR+aMAAgAbR2wd6rAgWQAAAABJRU5ErkJggg==",
            name: "Korjauslennokki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Korjauslennokki",
            beta: false
        },
        {
            id: "roboguard",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1ElEQVR4nL2TwY3FIAxEhyiFcHAntEAHbiKpgDTBPUXEnfhAJ+wh8spEyiZfX9o5gv1mZAzwpQIzdyIaDlUVtdbwBjDdXTBzZ+b+ESDnjJwzlmUZQH8B5mv8bdsAAK21J/MTcD0wdwM9aQLOoR3HMbjWWkNr7THJBABEhBgj9n3HmyY/l1BK6ao6NIlIAICUUgeAGCNsVqoKIvp96tkS+AIPMsidZmvyCVJK3VKISCilDJB1XcMA8AmswEP8Zl73YvZE7yQiwYpfrfU15lvd/oV/A/wAjI51y5dbJUwAAAAASUVORK5CYII=",
            name: "Robottikytt\u00e4",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Robottikytt\u00e4",
            beta: false
        },
        {
            id: "roboguard_big",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEElEQVR4nJ2SMYrDMBBFn8LW2wtUG5cuFJ9gSyvHCDil+1Tbp7Qh17DLPYFR4dJsLUifC2iLRcaWbQj5INAgzZ//ZwaAyhjPm/gIl3tZeoDROVKlFp9G57i1rdgliBMAfkxNnkE/gGpOk8qY6LAnLc/g8/tCni0LxHYPAOemEbH8foDntaYf/j/+Ph7TmWMhJ/QhxujcIp7bWDXmXpZ+dG5RKZGSW9uKQmsP0FkrQrHNHqRKcToeSaSckufvlTH+ea2B2RhjybHXGP0AX3sEqVJTM+f+O2tFobVPlSJtL68rKLT2nbUikCRS+mDrpSmcm0YUWvtESmC9TJvJe2QxdjfxLbyjYqWgMsaHhdmKY/wB6A6CkcM4kYQAAAAASUVORK5CYII=",
            name: "Kyrmyniska",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kyrmyniska",
            beta: false
        },
        {
            id: "assassin",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1UlEQVR4nGNkwAMmNpf9h7Gv3LjNoKOhypBf28WIrIYJnwHImif1mDFcuXEbQ44Ri3qsrrhy4zbD7KXrMdTjdUFqdCDcCzoaqnDx7mdX4OI4DUD3Py6A1Qup0YH/YTaiO7372ZX/pVI6cD4LLs34bEUGKF5IjQ78D7NNR0MVjmFhgW47igHImpEBLN5TowP/qx08hdsFPj6+OJ05e+l6xtlL1zP6RyZhWIAisHH5vP9btmxmQA5AmAE4TUcHyHGPTwwGiErK+LyHATYun/cfH59+mokFANWnZ7d5qjI+AAAAAElFTkSuQmCC",
            name: "Salamurhaajarobotti",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Salamurhaajarobotti",
            beta: false
        },
        {
            id: "spearbot",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0ElEQVR4nK2QwRHEIAhFv5ktBUtJD95pIqnANGFHdiCHdOKecEiCmT0sJ0T+4wPwr2it9Vl99gcAiyYxxnBvtO83iOuktdaZuTNzVxceJMwgx3Fcatu2jTzGOHQLnDjP8yeXU0CtFSml8U4pPaAK+cymWEitFQCwrqu78msw8+v1p0Rm7kQEABARlFLcXvcGAEBEEJGRz5y41JzzaLYQz8kDoJNUYNfQsJDLCjnnTkQopQQVi8gAeXdYrBgA9n0Pdwf2HtblANzFNlcHOv3u4guAupdTghWDCQAAAABJRU5ErkJggg==",
            name: "Peitsivartija",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Peitsivartija",
            beta: false
        },
        {
            id: "tank",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA90lEQVR4nK2SOwrCQBRFz0i2kMZCEAsJaGMhdiouQHeghTY2fjpXYGvvJtyAGDtJYZOApJCAhY2LGBtnzAcTfw+G+d57D8ODf5SUUv5k0OvPvzbI/ZQMiNFiJSvlYuqjyaArwvvRYiXXy6kAMLLEANV6SwKUrFrkrGTVngSeHySEytzzA1TiS4Lb9UK73dTi3W4Pj7vDdqMT4wSG5weRpNv1gpkvREganR7r5VS4jq0JXMcWrmNjKOH5dMTMF7RY7TMJMn8QcB1bPOYEgXYLO6vxjnmEII6pE1JKd2K13pIK9ZN6qxNVxTsSQIS77Hw6krYejmcJkzvwan0Y5jQ6+QAAAABJRU5ErkJggg==",
            name: "KK-Tankki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/KK-Tankki",
            beta: false
        },
        {
            id: "tank_rocket",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA70lEQVR4nK2SsQqDMBCG/4i7a8DFpZDVQXFw7yZ06+Lk0hcodOgDFPsMfQahW3endugacOkiZPUJroMktFgarT04uIPcl/9PDvhHEBHNApR58jPAmXUzAFZtl+SL0HqwlXf4IkRcHNj1tCMAiIsDc8YMv0a1XRq7ZZ6Qq8mtvA8O2+C1VDAKGtXBF6HJRnVWNangMAqA3mejOiy4N8pOLRVcPVhLhQX3zHDfv9v6ZHPyN66OF6br8+3R11kUmJfNooB0jgG6r00WBZQKbvrz7WEFOPqmLArISJoQozcR6DdvANAKUsFRS4Vv9X6zHkCerj5i2cg9kb4AAAAASUVORK5CYII=",
            name: "IT-Tankki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/IT-Tankki",
            beta: false
        },
        {
            id: "tank_super",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABF0lEQVR4nK2SP2rDMBTGPwVfweDJYJLJxIMzdQjU6QWSpTeoCxlMmh4kGDL2CFl8giSFDJmcIUKTjcCTwYdQhyLVrpLYNH0gEOh9v+/9EfAfIYQQdwGe32d/BvTucgZAojgUrjO8mTSfLkgUh2L99kG0CtrEAOAHnmoxisNGuwbjFK4zBONUE0r4ePYA4PKsDJlUFhWeHifqYfu5g+t83w/JUUEkyLJNlEX1UwEAME5RFhUs22y4SHGW5rBsE5tVombRk8IszQFAibM0B+MUjFMckiMA4LQ/k7KoGvBOa6wL6+4q6lP2A0/I0wVu/AYNRv26cytAteAHnjjtz3p5LdHpJ8qYTxeaAZG9DkZ9tYlr99fliwb5Ap3Wc0sRmfZQAAAAAElFTkSuQmCC",
            name: "Laser-tankki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Laser-tankki",
            beta: false
        },
        {
            id: "turret_left",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6ElEQVR4nKVSMYrDMBCcFf6EtjGu1B3cK3Sgjxg3KvMGl2lCPhJwXmFwl8q4kZ+xKYKCojj2mUwzSGhGu7MLfAmqm1bSi/PpQHsMinEK3xYB/Pz+Scp7oABAs0HKe/CWwRLSXOqmlfPpQJGpbloZp4Cq5I8GMac53KDZPLkqGWpLvIZxCihy8dJUrpfjswXNRoa+I81GrpcjFfnjrWqiWWQClsc39B1Z5yX9fQlknZeq5JfS43lLDAAqFwOPHKqSYZ3/32LlLaSbuWWirPOSb6BmA+u8DH1Hc7itVqKAx4KkSM9D363mcAf5m290PJ+5VgAAAABJRU5ErkJggg==",
            name: "Torjuntalaite",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Torjuntalaite",
            beta: false
        },
        {
            id: "turret_right",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6ElEQVR4nKVSMYrDMBCcFf6EtjGu1B3cK3Sgjxg3KvMGl2lCPhJwXmFwl8q4kZ+xKYKCojj2mUwzSGhGu7MLfAmqm1bSi/PpQHsMinEK3xYB/Pz+Scp7oABAs0HKe/CWwRLSXOqmlfPpQJGpbloZp4Cq5I8GMac53KDZPLkqGWpLvIZxCihy8dJUrpfjswXNRoa+I81GrpcjFfnjrWqiWWQClsc39B1Z5yX9fQlknZeq5JfS43lLDAAqFwOPHKqSYZ3/32LlLaSbuWWirPOSb6BmA+u8DH1Hc7itVqKAx4KkSM9D363mcAf5m290PJ+5VgAAAABJRU5ErkJggg==",
            name: "Torjuntalaite",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Torjuntalaite",
            beta: false
        },
        {
            id: "monk",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABZklEQVR4nKWTsWobQRCGvwlSXJzBBBcuc4Z7gah25bs6TbBQr62vMDbIT+AFgcFye09wTV5ArqIiVfADLGLzACkMUmFS/C7OZ3xyMFgZGHYY9v//mZ9dk8T/RG8bkPdegIUQtiMAmM/nAuzDNuAQwnP9bgLvvbIsA6AoCr17hRACMcbnugfgnFOMkTRNARiNRgCkaYr3nslkQpZlBrSnAGKMDUFVVfZS5cmgtyawL/Of+rSNiVVVoa8/NGVlsGGic07OORVFYf+GN3FbPtg5u0xZgSTG47HyPJck2szz/FWvzePrjzpTgiRs8ykPhxdKkr1Ob72+B6CuLw0gn+0A6LZ8eO3B5/qmA2zBf46uGA4vXqoZbPyFfLaj/cUp0IDaSdbrewZln9+L5t6g7KslsDMl+jX7C2D7i9PO+K16kuyxXN7R+/YdwAZlH4Apq8YDs8b0k5NJx5CWbLm84+DgEMDq+rKz8iMlqawJsL427QAAAABJRU5ErkJggg==",
            name: "Munkki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Munkki",
            beta: false
        },
        {
            id: "missilecrab",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5ElEQVR4nO1SyQ3EIAycRCkkD5fgDkInNBEqSCv0AHRACX64E/axMoJsPqv97khI9viYAQH88TOWJ/K6rgYAIgIi6rzlIYQ+tz4NMzOYGUQEEek1y1NKzbjtvkBEwMwTl3Pu8b7vU+1jAREhxjhZd85NArXWnq+jnRHM3O3nnPsZkVJq27jNe9+sqdYKVYVzbnIz9tZasYkIvPcNAFQVAHCeJ2KMk+3xiiLSe1cigqpCVVFKWUx9VFVVWJ8tK6UsRPR+RBu02DnXLC6lGI/jONooBADraM8QQlie+LuYiHx+pG/xAkWTjpGk1/9KAAAAAElFTkSuQmCC",
            name: "Hein\u00e4sirkka",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Hein\u00e4sirkka",
            beta: false
        },
        {
            id: "necrobot",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA90lEQVR4nGNgwALy6nr/YxPHBpgIaSLFMAa/mIz/2Gh8gBGbjdrGVihiV88eY9A2tmJI97fEUM8I0/Tg3m0GBSVVBnTNc3rr4eyU4kYMQ1A4pnZuWJ18SlaUwezxawYGBgaG04d2oehhQeZYOrhjdQFMc0pxI8PpQ7swvYAMSA0DnMAvJuM/MbHAgktCQUmVKIvwegHm9KtnjzFMairG6nwmXJqRATYxDANgmq+ePQaXfHDvNtwleL0wc+Px/wwMDAzp/paMMzce/3/17DEGWMKCGQILE3SvMGHLLNrGVgzeofFwGtk16OqZsMU5On/TkhkotiIbAgBmW3eH2TqVyAAAAABJRU5ErkJggg==",
            name: "Tuonelankone",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Tuonelankone",
            beta: false
        },
        {
            id: "necrobot_super",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABI0lEQVR4nGNkwALy6nr/P7h3m0FBSZVhUlMxIzY1WEFeXe9/QmyCwC8m4z82GheAOy+vrvc/zLkTI0L+axgYoCi8ceECg4aBAYN7RQ0jVgNgNjn/ecOArhnZAAYGBhRDWGAMWIA9t3P7z/DsEIrmU7KiDG7M7AwMl68zmD1+jd0LMIDN+fhcwISuMH/FGsYbFy5gGAAD6GGAF/jFZPwnFAss6AITI0L+w1yioKSKVRxZPVbnIIcDzO83LlzA0MzAgCUMcAUiNjEMA/Lqev9zRBYzIAfi2UeP4S7BBuBO2tnR8p+BARLKOzta/t+4cIHh7KPHDMZysnBDjOVkGRgYUMOBCeZsbE6O9vOF08iuQVbPhM1/6M69ceECw6JjJ1ECEGYIAGSPibbaLaR8AAAAAElFTkSuQmCC",
            name: "Marraskone",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Marraskone",
            beta: false
        },
        {
            id: "fireskull",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBElEQVR4nGNgwAF+XI76j0uOvgDZJUS5CqaIWC8w4TLk67GLRNnOiM32r8cuwsW4rfRRNHDoLkPRg2Hz25na//++3fEfBv6+3fH/79sd/9/O1P7/43LUf7xe+3E5CkUzMkA2BGcYIDsdHTAJuTMIhPRiimNT/Gx/KkOCKjdDgio3w+UACYZ/73YyJKhyM1xNisdrCQMDAwMDzM9P96X8v+QvjkE/KlDCH71vZ2r/v+Qv/h/ZoP////9/ui/l/9+3O4gz4O/bHXBb41W44LZjiwGMOL3kL/5f2kuE4YeqJcPbiZsZhPN9Gd5O3Mwg7SXCwMDAwCCcfhV3OsDmEuR0QJRGUgEAog7ehb0VWQoAAAAASUVORK5CYII=",
            name: "Liekki\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Liekki\u00f6",
            beta: false
        },
        {
            id: "iceskull",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAElEQVR4nN2RIW+DUBSFvy0TM63At5mtqahAdOn+wxyprmwCf6F+ArIfULWmrVkq9gdYUoGABIGaIME/AU9zp3hZOgp22THv5Oaec8+9D/4slvvYX+5jv6/vtk0IYE8tAPws7zS6uxTbU4s3qQWAyRiAZGRhZzlRqtg5M68zgTsZuwCJ1iRam/rTyHKbVFcN8vdPw+eDIfPBkERrw6NUdRs0k3/i5eOrdUAr/Cz346qUuCpFpBaRWu7B8LgqpTfBerUNwkKZJOeqNPdYr7ZBp0GUKh6eFxw3pyAsFI/OaxAWypi24eay0HzlcXP61Xw+uF7vCjtn5jVJAPO2if8JvgGJmoLPhQJWoQAAAABJRU5ErkJggg==",
            name: "J\u00e4\u00e4ti\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/J\u00e4\u00e4ti\u00f6",
            beta: false
        },
        {
            id: "thunderskull",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDElEQVR4nI1TO1LDMBB964GKcYaCY3COTEo6cwD6FFyBlpl1YVOTA3AKUlGaO1hJCA2iMMz4pUjkkT+y8xppd7VPz28tAMAi2xMT6J7p9QyRhIiDFz5//PYKU7mLkGQAKGytN5eCRy9HkiIigw0kucj2LCvSxWVFktTC1kpy0iucGoIobK3++ahL8PXPdOyC26u2+gg4uuqMeVptm+JMIswkau0/PU8HR/n6/tPIjSGMISxs3eyT3CgwPB0AAEntfncMacXB5hMBl2/fQROdgp4HTpb5Ax7m1+lqbQEA9y+bFABcHIQvy838LtsxyY0muVGnbJzFQ1kdZ57kRt0a/JHOfQNj+RamnrdfPwDbAiHwYTD5ZwAAAABJRU5ErkJggg==",
            name: "S\u00e4hki\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/S\u00e4hki\u00f6",
            beta: false
        },
        {
            id: "firemage_weak",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEUlEQVR4nGNgwAG+dDr9xyWHDJgIKSBkEF4DiHEFVgO+dDr9Z3aTZWB2kyXd0O0hFf+/n4//b2xs/P/3izn/jY2N8WpghDGara3/MzAwMJhI2jK4TFGBK/jz/DADp+FCRix6Ub1Qe/QoXNGenDtwBeia0b2AEga1R48ynnl+GG7In+eHGbaHVJAWC8iGHGiVRJGDBS6yKzAMkJfV/s/AwMAAMwRGMzAwMPCU72OsqFFl4Cnfx4jTAELgxIsTKHwWdAUSYooMDAzvGRgYGBhmnF/NYCIhAXeVhJgiw8mzW1ACFcUF5sY+/9EVMDAwMDx8fJXx4eOrjNjkSPYCXgMOzBGGs5HTBdEGoCeajXfvEjQEADm7Z1sxdLepAAAAAElFTkSuQmCC",
            name: "Stendari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Stendari",
            beta: false
        },
        {
            id: "firemage",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEElEQVR4nJWSv0oDQRCHvxWfIZzFRQ4rsdyASJC8QMpc6RsItgFJ5RMELHyHVIGDVBZBDiNErIKFhFySItf5CGN1y+16f3LT7C7zm4/fzA6URG+3kbJcPk7qBHWgSsAxLgoBvd1GQj8l9NPm0NlgKM/yLlprSeQgWuvKApVdnrpdAeic3XI5eTCCiIR7daMKau0WRnFsRN/h2AjcYrcFawajOFbLw5uBRCTMBsNmv5CHXIRTK5cNN+/iH+DcvxKADJKdAPN2oH76r8zbgSoF1MUiXVjvU1fgtQLgF4CXrwkdzzOuvFbAx2dkDdVycK374goAtvuV2u5XqijXuIVKwN3y0dzze3E0wF2a6XpdC/kDv1Fp+h0E0QkAAAAASUVORK5CYII=",
            name: "Eldari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Eldari",
            beta: false
        },
        {
            id: "icemage",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5klEQVR4nGNgGPKAEZfE1TNP/iPztU1ksKplgjHMPAL/u8X0/oexGRgYGOLS/RmQaYIuMPMI/C8gYsNw8/wEhm0Lj6MohLlg4Y3//+M1GOH6mBiwAHXDAgaveEsGBgYGOE2UC5BdwcDAwHDz/AQGdcMChl1LiuG2w9TBXIHhgpePzzB8eHME7hJCgAWXxIc3RxgERGzghsFsldeW/f/w6mP8YYAO5LVl/+OSY0JXiGz6reOLGBgYGBgeXn3MKK8t+x9dHq8X0AG6RqwuQI97YgCKAcjJ9dSO9TiTOU4D0MGDuxcJGgIADKtOYVSqtUcAAAAASUVORK5CYII=",
            name: "Pakkasukko",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Pakkasukko",
            beta: false
        },
        {
            id: "thundermage",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGElEQVR4nGNgGDTg8eff/3HJTb30FaccVkOQDXv8+fd/fIZjNQSmYeqlrxiacbrGPmkiiq0wzUQ7n4GBgSFm9v7/MbP3/5966et/Y2Pj/48///5vbGyM1wAmFOcfv8TAwMDA4KfIxrDhwAkGBgYGhqT5h/BayoRNsHLFETg7W4+bEcUStDBBkWRggISFrKUeAwMDA4OluRnD8ZOnGJakOjIia5blZYXrw3DBg92z4F45fvIUitym+78YGBhQYwLDAAkxRYhToYY8Pn6JQV5W+z/MOyEOgSjeQjHA3Njn/8mzWzC89fDxVUZ5We3/2OSxBiIMXFq4GMUQbIazwBhTL33976fIxiDLy4rPTAwAd0G2HjcjcugSCwCeDY7TE46lwAAAAABJRU5ErkJggg==",
            name: "Ukko",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Ukko",
            beta: false
        },
        {
            id: "thundermage_big",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLElEQVR4nGNgoAWImb3/Pz75qZe+Yspj0xQze///qZe+/n/8+fd/mKbHn3+jqGMkZLKfIhsKf9P9XwzZetxwfYzoGmJm7/9vaW6GVTMDAwODLC8rih4MA2AuwaYZmwFMWFXhAY8//0YJExaYhGFI839tdxsGBgbsTmdgwPQ/igvOr6llvLrzCFxh5YojDJvu/0LRzMCAGVsYXrA0N2M4fvIUAwMDA8Pxk6dQDMnW42aEBTAMYASiYUjzfz4+PgZZSz0MLzw+fonh4Lx8xpjZ+/8vSXVkxGqAvKz2fwXXNDgfZtDVnUcY3p1cwfDw8VUUPSzomtENvLRwMYOgmj6Ga2AAHgbImj99+gRXIKimz/D+1kWclmAEIroTCQEmZFPxaebj44PLmxv7wF0BADM3gIyL+B74AAAAAElFTkSuQmCC",
            name: "Suur-Ukko",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Suur-Ukko",
            beta: false
        },
        {
            id: "barfer",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABh0lEQVR4nH2Sv0tCURTHP0pDLQ0OLoZjm6+xCERozCARsoRoi0SlGmzJh9MzAh0qVIKGIFp6D/oxuAaBCILTixaHhoc2+Be4vYZ4t/f06pnuuZzv937OPceHJM71J9s5X6R2fbIaJ/wA+6pq76uqPS6W5ePhcXdMwkpE3JV3UhQNfSqJ3508aprPEZd3UgAUDX0WgNcAoFlveIROvhKLSVvxYD3fJuxgSCFX/QAgEo0SViI06w3iuay0jTl3ovfnod+jXogBkKt+EFYixHNZLPNzdgt76p5ArHV61Dp/Rs16g82FL36sttTAQ5BfXWY4MAWNY3J8dsdN5RDAXts6Av73w+8WH13e0w2k6QbSDK2h9EUAy/wU+yEMhgOT7ZOqKMivL041eNQ08ZkTYwT4sdp0A2mp2EGfaCGZefW9XRdE4bf5MpXAHZ65bhxs2ADBcBCA1NII7arDTeWQktHi/eF99h44QrdYPV2lZLSmEgiD59uEDSOCIQVAjBMQH5pfT9jJzKuH4hc2W4/dRfV9DQAAAABJRU5ErkJggg==",
            name: "Turvonnu velho",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Turvonnu velho",
            beta: false
        },
        {
            id: "wizard_dark",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIElEQVR4nJXSsUrDUBTG8X+CY6GEUgmWoIMFpZkEQQmxi3sJigE7dixkkj5E19JHUFCovkAXlUzFRVIotIPSJSAOvoDXQQ1pcm+tZzzh+51zLgFJdY7OhawvK131IY14u64SlALTt3mC7G1UxetH/L8NqmULgOFspAwuBVYJKoGB1xa9VpBDVA+bA+554jq6pNcKADje3mezaK62QeAdJFN+keFsxMXpGS/6s3Sbtazo203iaCKd5tQssf65tdBbAHy7See2i1NyAWhkgZ++8oQ4muCU3OQ/yFb4/kijfkj34UqTAulK35wdojzh5K6vOTVLoEOFospWAwCV8nfQNAq5aeF4roXj/nLANAp/rq0EBl5bAJj2Ti7oG3VuiHLAF/aYXZKs7ZDWAAAAAElFTkSuQmCC",
            name: "Sokaisunmestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Sokaisunmestari",
            beta: false
        },
        {
            id: "wizard_tele",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKUlEQVR4nGNgwALK42z/YxPHBphwSSAbEuigidNAFmyCtx69YVCTEyHKJVhdoCYnwsDAwMDQsfAQCo0NMGITNNKQ/O9qpoIi1rnoMFa1GC5YNyPg/6TuVIbdp+7AxW49eoPTOxgGLL72nKF3904GdENwARQDAvPM4bYgG1JcHMpw8uc7uDpk12DEQrGrO8Orp5ew2qZtLftfjZUHRQzFgGJXd4b0jvkMPsoKDAwMDAy+oagGwMRxeuHV00sMPsoKDLcevcHqgi13HzD4hjqixAjOlIjsZ3RLkAGKF4IyNjBqW8v+Z2BgYBBl4MNlNm4DGBgYGERlIBoFxXkwbLt69DFj0NHH+A0QFOdBF8IZKxgGrJsR8J+BgYFBTFoPQ2OeoyrDgZVXMQwAAH1UZLpdmmkwAAAAAElFTkSuQmCC",
            name: "Siirt\u00e4j\u00e4mestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Siirt\u00e4j\u00e4mestari",
            beta: false
        },
        {
            id: "wizard_poly",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPElEQVR4nGNgwALyLQr+MzAwMCwOWfIfmY8NMGHTaCJjgqIInY/TAGSFMNthNC6XoBgQuyaGEVkDAwMDQ8zqaKJcggJclV3+Lw5Z8v////8oNDa1LOgC5yYc+i/rqMIQFRTHwBAKccGS0KU4LcMw4NSePoZTexgYlq1bBDfkzJMzOJ2PEgYzfALgzlxbncWwbN0ihkXnFzDUzCxjuPJ8FlwdsncwXBDcOo3h8f47WG0L0ND6Ly/ghtsLwa3TGFLDXRiCdaoYGBgYGGQdVVANh4rjNODx/jsMwTpVOP289kobw+yVexhE9aUYYWJMGKqgANnP6JbgdIFRgR1jgIbWfwYGBgZ1YRFcZuM2AFmjoqAQhm0bblxj3FBgh98ARUEhgs7GacC5CYf+MzAgQh9ZY3hoC0PnUVTbGRgYGADxCHk7y5RijwAAAABJRU5ErkJggg==",
            name: "Muodonmuutosmestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Muodonmuutosmestari",
            beta: false
        },
        {
            id: "wizard_swapper",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOUlEQVR4nKWRv0vDQBiGnxPB1UVDJIOLS3F1UcHFzbpJSyCBDhncVNoKHZwUA9pg3ToIHVRCoVvXDnZol66li9DRgi7+B+eUkB+XKPjBcQffvc/7fndCSsl/aimvaRdtaRftXIBIJrBaIwBVLPFyvpefQCVWiTIBgdO8Uw/FVmsUQKTVGhGsoJajSnv9G0AWej7lExOL+xAS6fP8uaoGjIf9cO9GIGLQRh6e/mmEcP6npku35zPv1Ll9uGHlram8F0sA4NQazCZTpdvd47XcWNuCSJoYwKk1qFhldNMDwE0AdNNL/W9shNlkim56iEFbmWDhV3GPDAChBEQrMXPMJDPBeNgXC7/Kx9d7FheA14v98Jx6xE1dB8DQtJTb5dmVSN5PAQxN+zV2JmD34FgCFHa2U8JSyVECfgB6F20/lGUUiwAAAABJRU5ErkJggg==",
            name: "Vaihdosmestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Vaihdosmestari",
            beta: false
        },
        {
            id: "wizard_neutral",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABWElEQVR4nI2Sv0sCYRzGP2eB64FBtNxSKBwhuAS2NEkUh1wgFARXEAgNQhhBiw4FIUhRtAUNtRgY1NBwDRE0FE1Cg6AV1A2lf4ASNLxNmvcr+07Hc9/neZ/neV/oM9MLKeH13RnJjzi3siQA2q2WDb8+O7dxAv0cAJilMmap7Plv0AkUMmnx/tmg8R9lp4NCJi02D48ks1p3WfcbW57VVFIEJ6cIKwrFfI5wdNxFcHbgKnE2uSgANEOnmM+hjI0C8NVq83hz69oPeJEBrk4v2djaxnp5Zd5YZuA72N3r3BB4lKgZOnXL8kgLETUm5BHZhtkENEPnIL+DGo8CEFYU23IH941QtyzUeJSPN28H1YcnEjMaF8cn3S58H1LzuemJO+PZIuxn16WIGhMAoaFhP21/gV6iLIdcp9WqFamWrfwtIMuhvrZ9Bdb2dgX8tt9LnNAT3N+ZLoEfFlVrlgi5kbQAAAAASUVORK5CYII=",
            name: "Maadoittajamestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Maadoittajamestari",
            beta: false
        },
        {
            id: "wizard_returner",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXUlEQVR4nKWSP0gCURzHPxdCQaDkn2u45IJKKBfB4ZobMpDChianxmoM3GqwrVloi5aWGnQR0qaWwEG4hgqEIKkbQlNyShBegyid986GfvDgve/7/T6/P+/BP01xu9i3hABIzfbP6x5F6uuRibFiS1xtHxLSIlSDOi8Pt5R7QsggUgBASIvgDep0UwYLY1qQAiYLFd6tGgDeAnSadQofcsCErPyTsw0AGlaNTrNOw6pxb7alAEdPq5sHAiCbz3G0dwNAN2VgJv2uA7cF/17lnhBTuirKPSGWjC0x8FvL7A73jhlk8zkyJXm5Pm1FBKJem2YDZPM5dvQo8bTRFxLnNueh7gbIlNrE0wav5jPzsWWHc/WywnX90fapHK8wsLe7T6k+2p6tAjPpV3zaigBQ51Q3tjugH7gIQEANO7J9WU+KmfSPBwTU8J9luwJixZb4Bk4TM47A6eMLGMkO8AN3nHRudKSpeAAAAABJRU5ErkJggg==",
            name: "Palauttajamestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Palauttajamestari",
            beta: false
        },
        {
            id: "wizard_hearty",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMklEQVR4nMWSsUoDQRCGvxNtNVktUlyTIq0cBMTmQoSUOQIW9kJaQULa+AIJ4gNYaZdCkGh3oOQg2AgWSZUiTQpBXBVrOatdbm83tk63M/N/88+w8N/h/VV8CMMUIIgiXkYjDpLE6ncClDCRUud60ymPtZoFsQD5qSoSKQmFIJGSs9lM69ZcDhIpDTFAKARBFBEKYeQtQHe+MN718diAZteyAB+Xh2n8dMrt+5du/Oz3V9qH3A16e/UUoDNs0ti/oLW9pWt5oeVAiQHOj+5QTk7uj1n8bGiBOrKK9eyjM2xCPHENolry06wjC6BsDyplAIKG2ajyK1cgnjColK0rq+jOFwTXLesjOf/B1du3E+JaT69QbN941ZKfAuwWdtwARxhHVEJ/s2BNe35desX20gL8AjtheJTd47yVAAAAAElFTkSuQmCC",
            name: "Haavoittajamestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Haavoittajamestari",
            beta: false
        },
        {
            id: "wizard_homing",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABh0lEQVR4nIWSvUtCURjGf1cCS1tKI80WISiJHMIgWjSjPUgIagzpC4f+AcPGcArsg3AsCgyhxihyiIJsEcIlqCEh6UabdSE4Ddblnuu1nuXCe97n9573ORdM2hqMiq3BqABY7xsViZ4xYXX2K5vZDLB8f6EAvNbqx0IIvV5+/8QIkQBmVTXBZuWKcPuADgEwQlqMBlWr4bY7SPSMiapW7/86f5K+VU3QbVdQtRoAinnqet+ocNsdAFy+fACwf3TA3Mws3XaFQEcrqlYj+XCjWALmc2ciFHSxMzLNQq9fhwBEPG2S2RIwvHoqAOJLPgkS8bTp4RplszID7G1XWLw9Zvf5kfHrDBtDU3qf8RWkEH8nF0tv5jIAXeEVkajcSTUJEF/ykYxnSanleiGflppTahl+ArZcoVh6I6WW9Scya80dQMmnpSya/kjGnc1Dmq6QjU0qJ+EVAeBsRjapIUSntx+ATq+/YdprIaNkC5m/AZ1e/7/XbgqYz50JgFDQ1WCciAXIHjYCvgEfJKMNMn7bagAAAABJRU5ErkJggg==",
            name: "Kohdennusmestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kohdennusmestari",
            beta: false
        },
        {
            id: "wizard_weaken",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIklEQVR4nGNkwAHU1FT/MzAwMKxbtpCBgYGBQcfEihGbOiZ8muvLCuFiV84c+0+0AfJKmgwmJqYMDAwMDEFR8Sg0OsDqLGQX6BsYwMWxeQPDBTDNZIOlc6b9v3Lm2H81NdX/amqq/5H5RBkQGZP4PzImEcUQmEHY1DOha4axWyfMhkdhfVkhw4I1O7BayIIuUF2QynDxwgUUMX0DAwaGNTsYjE0s/n/+9JaBgYGB4dat24wYBlQXpDLEZxQxwBTBXAADMHGcXrh44QJWRTDAyyfMsG7ZQrjtGAYQA9C9h2JAdEoWIy+fMAMvnzDRBmIEopCIGAMDAwODmoYmhm1nz5xgjE45gd8AERFM29ENwmkALLHA0j+yxoQQD4bdOzZhGAAA84hy/3PG50sAAAAASUVORK5CYII=",
            name: "Turvattomuusmestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Turvattomuusmestari",
            beta: false
        },
        {
            id: "wizard_twitchy",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABS0lEQVR4nGNkwAGqG7P/o4u11k9lxKUeQ3N1Y/b/I0eO/JdUkUOh0dViNfHIkSP/t+9dzjBv8WYMued3HqHoYcJmwNzFPUS5FKcBO/aeY2BgYGBYvWAZijg6n4GBgYEFXSBvVsx/T8tAhqTAQhSNoQlRDNv3LscwACMMNJxN/zMwMDD0T6hgSAosZEiK9WV49uwpg5SUNOFY0HA2/Y+Md1xe+19SRe7/9str/6uY68JjADmKMbzQP6GCYfvx9VgtkFSR++/hbIQihhKIMGfzPudn4H3Oj2FAUqwvg5SUNG4Dth9fD/czNjBv8WYGmyAnlLDAGo0MDAwMK7cdwiqO7j2UMJiUtoRRUkXuPwMDAwO3MKYXsAGMQIRpZOHhYNiGZtvzO48YJ6UtwW8ACw8HQWfjNCBvVsx/BgYGBk/LQAyNXsn6DJNOXsYwAAAGYHwzbEof+QAAAABJRU5ErkJggg==",
            name: "S\u00e4tkymestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/S\u00e4tkymestari",
            beta: false
        },
        {
            id: "enlightened_alchemist",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABI0lEQVR4nKWSsUvDQBSHv4SuHYQuRXEwQZAMxSWjS4fOQpbgJugqdMjSIVMnRXBVcJO4CW79FwSHDJIlWUJLliwKznGQOy6XpAb8wcG7d+/7vXvHwT9l6ImHq/tK3V/cXTZqOg1UuAuMlqvKX8zkmanDN6/XrDdpZ0d/MTOi5Uo2MnVYKPSCqkEruj1/qmo3UOHn95dOUO0OMFDnPrFOOdqfADC2RkTH09q8Ai6ykvnjmQFgCIO3j7QG6yqyUsYCBjDFg7mOTZLHjK2RLC6yUi6AJI9rMMBgb9cGYL1JcR2bIiuliV7cpoEIhFGSx8CEz6/4L/Z3BD3hOjbD4XcvuNVAlT/1Gn8h9IIq9IJKnJnbfp0A2uLDnQNAeYO+Jrq2jtBHP20geJrRVrrxAAAAAElFTkSuQmCC",
            name: "Valaistunut alkemisti",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Valaistunut alkemisti",
            beta: false
        },
        {
            id: "failed_alchemist",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABZUlEQVR4nKWTMWvCUBSFvwQ3f4KCi+BSXOwvaKHg4GBxsFlF1w6BilNxEm0dXFsyFZ5LyNBsBbt1KGSpuGjFEtCt4C+Q18UXkhhdeiEk5+ac++493Af/DC0MhGVKozHU4qTn2ycZxs1RK+CkTlVXwsfXh0j+vnYnAbr2QNPDP4zGUBOWKU+JVXTtgQagTz1HTj1HAqh3vOVw1EvVQAyQKp5fa0r8+fILFI6OFBfD3sT4ievNkmwmH2A1xvzn+8BgPUkc/66XqtRL1cSu9DB5vVlSKO8iBFVksV0dL7DeLFlsVxFSujgP5lX5m8vagbl6c9TSFtsVF2dXVIwcrvDJZvK4wg+8qRi5xNMBdGGZstM3eJ+9AdDpG6SL80BUKO9whR/geBcRV6eeI2dfH7jCB2A8sTVhmVLhipEjadUDsXrUNoYjKQd7E6eeI3ttAUCvLSIrHS8Szx/cRlf4jCd2YpthsRrlDzcXur62ZCxqAAAAAElFTkSuQmCC",
            name: "Kadotettu alkemisti",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kadotettu alkemisti",
            beta: false
        },
        {
            id: "failed_alchemist_b",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHUlEQVR4nGNgoBAw4pOcnT/rP4z95OkdhsY1XXjVY2iuDyn7r66o+l9dUfU/AwMDQ31I2X90dVhNhNncs6kbLnbz/m2saplwueDJ0ztEuRSnATLSKij8SOcQDOdjNQA54CKMA1Fool2A7Hx8mjEMmJ0/6/+Tp3cYZKRVGGA0AwPCO9i8gTMMnn1A0E+e3mFw0nEj7IInT+/ANcL4mnL6KGI4DZidP+t/45ouRk05fXgYPPvAwHD90UWG2XsgKXD53jWM6N5gQbaNgQGigYGBgUFTTh+FD5NfvncNSoKCuwA5ncM0SyqLwNmNa7oYkaMYwwC4V/Z0MV5/dJFBUlmE4fndNwySyiJwOWypE2cswDQ/v/uGYXnrzv/oroQBAIXdeuqS63wMAAAAAElFTkSuQmCC",
            name: "Ep\u00e4alkemisti",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Ep\u00e4alkemisti",
            beta: false
        },
        {
            id: "wraith",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQ0lEQVR4nKWTMWvCUBSFP6V/wEDxUQ2Z0qkouNil4NYp7gXXUCj4D5yKkx0LBXEV3BzSyS0ZOrgUwc1MDxMIdMxc0sH6aEyipT3bvfedc887jwf/ROnYcGRZyUWzSc0wAAilpDccpjjl35IBaobBdDBITjqY2XbyWa1SMwyep1Mu6/XUfBMEzD2vVChw02gkj/1+pr9wXW47ndRVMgIjy0pepeS8UlG9Yw7ODgV0IUBK+r1eoYMrKZl7HhmBmW2rgEIpczNYuC6bIFB1xgHAtaYxdhzuu92Mk1BK3tZrVatn/Lm9ZZpKJJQyRR47DrqmqV4JdsHpQuSZ4WW5TNUP7TYAd5NJfoh7bKOIjzhWhG0UsYpj3n2fJ9dVr1cooAvBKo7B93f2Acs01eaTAnwTtlGELgStgjPl/ba/ovAz5eHQPsAXat5+CBU2KkkAAAAASUVORK5CYII=",
            name: "Hyypi\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Hyypi\u00f6",
            beta: false
        },
        {
            id: "wraith_storm",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOklEQVR4nKWSPUvDUBSGnxYn1y5FkIijm8Gh0MEK0oJrJguhs9DuReggQtsfUHDqYiBbVkFwqEihQ63QwTGkfkCWOLrWKYd7m48OvtPlcN7nPfeeC/9UYVvD3fPbulQqARBFEVenx5onFxCbPddhtZhhmBVqjQsNkglQzVbTlrrnOhqkmGbeqzYSZs91ALCaNpPHB+lNAOqD8To+rxYzMa8WM4HE9VRA+eBQzoZZkVTDrMg0cT0BUNOjKMJq2tro6hvE2slKv73u0usPBaJuwe20pE+2UB+M1yrgaTQEoNcfov4Dt9PiZblMrnETsAmKdd7uAnB/eVZIXEFVGPj8fH+IIQx8vl6nvE8nzEc3+gRZ6XPPYbe8D8Bv+MmJZWvpuRMAYggDn6NqLbWnCPrrb5OaLoA8hYGfG/AHH+CFJSu2TpcAAAAASUVORK5CYII=",
            name: "Ukkoshyypi\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Ukkoshyypi\u00f6",
            beta: false
        },
        {
            id: "wraith_glowing",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA50lEQVR4nLWTPQ6CQBCFH8SKQ7A38AoGairkEMaSgngFGjqMN/ACJNhZUJiY2FDSzXaGgo6Eai0MG112ITHxdfvzvjczmwX+raTpRDkMohwGkTSdUM/tJbPHHLn2mAMVYgSoZhNEC1j7vtas0wRwyPNJn7oqjACXscXUK/V6wLEohO7SnIxDvOy2WsiVetyizRTwmb6LYy1kNFd1bY17FvAenKn3U5Z9rUf4PggsAFiZWuBEIM6lgRPh/nigqiqc01RWYAS4jEkDADzbFlEYyuRFAABEYQhONPu09pj2q2Y/kyq1fAB4AaaMZpbAI7TkAAAAAElFTkSuQmCC",
            name: "Hohtava hyypi\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Hohtava hyypi\u00f6",
            beta: false
        },
        {
            id: "statue",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmElEQVR4nM2RvQ1DIQyE70VZgg1oYAd2YSK2oWIH07DBjeEUEZGix09ElWso7Pt8NsBfS1VVRDTnrMfmGOPS/JgVaq1IKW0HTQGllK0ZAJ6ronPuPEEIAdbaM4CIKAC01s4TkPwkWP3EDSAi6r2/jDHb6UMAya93p2uWoN+hy3t/6x0m6I0kQRKllKl5COg6vgHwXoPkT5AXkGJJBjzEvCsAAAAASUVORK5CYII=",
            name: "Patsas",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Patsas",
            beta: false
        },
        {
            id: "statue_physics",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRUlEQVR4nHWSsUrEQBCG/4RUCbvVghwKcmlF7C3FRhDB2gfwmXwAsRRikSZ1mjQJIe3JwYVwsNWGu/YsdJbZ3ThNsjsz3z8zOxH+7Pnl9aSUoiO01vZfKQWtNcivtcbn+1sEAAkP8hM5bD+NNo4LxUuBFEwJ+2nEtNuibepAIKbyAaBtaky7rZPsG0EoJ+Y9knEIAJytzgMQwZPA84/6/cMThr4LfM4QVxeXi4q8Qt/nDNF3Dn2HqiwAALMxjjoBHQA5Z2NQlYWdRVUWEFIizUTQakI0Sk4zgXWe43iYkWbCfv0lo4oSfqmUwjrPbaCQEkJKm8wh1ddHZFsgmv+UbVMvLg+3mNMIQoMj4xBevgXwKvgac6OnnI1xBO0MjocZwO9T0vAA4Or6BkPf4XuzgZAyAEf8cHv3eEozYQP30+jshq8OAD/ZzbVvGKPmswAAAABJRU5ErkJggg==",
            name: "Hohtonaamio",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Hohtonaamio",
            beta: false
        },
        {
            id: "snowcrystal",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACJElEQVR4nMWTQWgTQRSGv116a7EBbQuhaTJZKE17aMOGIIFlLxXxKCQEBYuhILSQXAqCIjnUgycPbcGiVBQPxYNHT9JiQsGDWGwCbS6mu7ESsFUaYc3BVqanHVpLzr7Lm3lv/n9+3j8D/zu08fGkrFQ+alJKVVxeKspO52fy82iaBkC+uCL1QOCCD1LgeMImefkKgUCfyvGEDXCGuFp+jX66sLxUlBERwzSTdPf0Ek/Y7H//Rjp7m7/HR0RE7Jy6rlNrGU/YmGaSet3hxfNFACLhIA/ur5ObLnDxUpD+gUGeLCJnCw+1fwlwvuxw+HOfUmmdxtcmT5+9xLIsRmMG79feEBExWoc/cBtNhdE9r602wyMTCGMMQIE3NjbYqdUBEMYYwyMTRMJBADyvjS6iIUXQ3dOrZPtgy7LOWeErENEQurO7pxq/vV8YhsBtNBmNGQo8GjNwG00+fyqrCwCc3T30qblHivXo+A/Vyha56QLhoSDXrlrM3MkSHgqSmy74Vp5RoJlmSm5uftCklMpGfw4ATn0bYYxhGIK1d29xnRq+A6aZkrqIhrDtSQkwk5/XXKdGq3WAU98GoH9gkFbrgGpli1JpnUCgTwOw7UkpoiG6/Bn4zxPQ7s41JYDr1HAbTSLhoJ+1G7fy3Jwq4HltPK8N6UxWmmZKpjNZmS+udPoDKtKZrFxYLUvTTMmF1bLUreuziGgIX0k6k+1I4vdePb6Hb/8JA3Xh52P9ZBMAAAAASUVORK5CYII=",
            name: "Haamukivi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Haamukivi",
            beta: false
        },
        {
            id: "hpcrystal",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBUlEQVR4nJ2TMQ6CMBSGfxoSN1YnHGDU6Obg6GQcjJMHcGBm8wxegSM4qYnEE3gAgnEwdAAXVjYTQ12k0FKU+BIS2sf3v//1UaBFTE8Oc29rdnkemZzTvoHubc0CqmNovfjeylpi0llwTpeh/nbGuoMehtYLMqwKooK/xY7uUW2FC7SBGx3I8C/7VRcEAP6pvKN7AJ9DTMNYSAZoL6gDQBYRGHbON++HBww750JyKwEth0cAIPF85f9QOAuoLjzVHJ9CFpUTNexcWKuEr5uzJggknq/JUBaR2vkA4LAg0KYV+b0mUFRVrdMwFqwXoaxoOvParWtyJ8RoNOag6cyZSqj6DQC8AS83fOoc3j8fAAAAAElFTkSuQmCC",
            name: "Elvytyskristalli",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Elvytyskristalli",
            beta: false
        },
        {
            id: "ghost",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuklEQVR4nJ1TQQrDIBCclbwitxxy9Q1FKOyp3xBfJH4jJyEQ8oZ8yB7KFrEqsXNadWd2dlVa5jVhEKwNfAwEAGqUDADxOuDYJgCgfxzkTm47OLe9ut90IITH69kVHm6hFB4aYq2NrsC57VWSVGdtMI04qM1jYm0AfO72DqEESeDYpngd6AkK8hxVkuWJSqIk50QhV2dQcyKxj4HKYj+3kB/6GIi16bajyoo9tFr9/izHNi3zmlrrPFfwBp7bbvHGaLPbAAAAAElFTkSuQmCC",
            name: "Houre",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Houre",
            beta: false
        },
        {
            id: "wand_ghost",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoklEQVR4nGNgoDX4///ff7I16xdKkaa54NKhbYQ0EzQUZkj9dvH/yBr0C6X+9x358v///3//cRpScOnQtsPf312Caa7fLv4fhmGaYRjDEJhmsl1w+Pu7S8T4Fas4zHaiFKMBJhhj7e0rT9AlL/Y/Y+w78gWvIXADglV1ZLApKLLhYSTkCgYGBtQ0QApgQuZgCweSLEKPSooAzBCYq6hiKDYAAFoSiTpKJy1YAAAAAElFTkSuQmCC",
            name: "Taikasauva",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Taikasauva",
            beta: false
        },
        {
            id: "ethereal_being",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFUlEQVR4nIWSMW6DQBBF36J0kVKlosYdRbqIVJFCm204BUeAA8ARfAoaatIapaewBKVF4Us4hT3LAgv5DbvD/D8zf1YB+MEB4MYDdd3IEa1jAMIoochSAPLySNdWAKgl2QWbbEPrGOUHh1VlqerqaAnPlVTXDWGU7DU1F3AlF1lqRPPy6CRrHd8FXPMtsRSRu/KDw23LJNttu1M7Zkxcigh5y1jBkxy6tiIvpx92Fa1jwiiZxaSBf9/BBtEIeOPQA6itjK6tzOyubXmriJUoX/HGZfRKoK4biixdmSpiYur7x5cyAuPQ8/zyqmD70cDdTNnG7+mHcein2d8+v7lezmalMvuegePQTyNcL2d4mLlDmpEB/gC13XunpWkKbQAAAABJRU5ErkJggg==",
            name: "Olematon",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Olematon",
            beta: false
        },
        {
            id: "playerghost",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdUlEQVR4nGNgwAMyPdL/K0qpwnGmR/p/fOrJ0sxEjGEHNu3GKUeUAQ5+rpQZgA/QxoBMj/T/Oy7to64Ldlzax4AtJjAMgNnuoedEXRfQz4DpO2YyYnO+h54Tw/QdMxmJcgE2hSQBUjIR3jAgNiaw2o5M41MPAKgSOrVC7v3bAAAAAElFTkSuQmCC",
            name: "Kummitus",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kummitus",
            beta: false
        },
        {
            id: "phantom_a",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqklEQVR4nJVS2wnEMAxTQue5IfrVTY5OdNwa9xUohM6Qha5fCsrDaSMIicGWZMcOgn17/wHgE76OcUgR22sFAOibOV6LQ4oIKWYiRU3EnEWVewkWER04KisBEy1oG7nXuyKLaOkx3xGpA6/D46lx/o7i1pyiBeKJg+IbGcw4oGizMDP9Fw70C0fFtYDXQLetV0whqndbINGIxHQwsm6hIZjdxsdD5ADrnbkAkgCTsRkF+N4AAAAASUVORK5CYII=",
            name: "Spiraalikalma",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Spiraalikalma",
            beta: false
        },
        {
            id: "phantom_b",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnklEQVR4nL2STQoCMQyFvwbP0zNIQejKa4gnGuYargrC4BnmQrqZjHVqpmShbxNa8vJefgILrvnyxIGhjAEgKLnMk4dPjomhjEG0Wo6JHFOT+LjdP6Lm/ceBqtbv3zr4ht4MDj2l4/m0xpqoEK/l7b/AewZWGxYZQHpkgDJP5qV2W9gr3BTwrhJA9lZYu7DaWO/ALb2guYOtGx2wtYkXBZtkndlMAc4AAAAASUVORK5CYII=",
            name: "Kiukkukalma",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kiukkukalma",
            beta: false
        },
        {
            id: "confusespirit",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAj0lEQVR4nGNgoBAwogs8PtjBwMDA0IhDfb2sfQWKABOxmjfsOIZVjglTKUIDVBOK2OODHSiGoBuAy+k4AU4XBHhYESWG0wB0Ddg0EzQAPQywARY0fj0DNBxgmpENIdkLyJqQNNfjNACaSOAKCGnG6wIszq1HsoSwAdgAumYMA/AkZYw8AAPosYCuGauzqQoAqZstPvnz7XwAAAAASUVORK5CYII=",
            name: "Utu-Aave",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Utu-Aave",
            beta: true
        },
        {
            id: "berserkspirit",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmElEQVR4nK2SsQ2EMAxFH6dbBTECFSUz3DgR4zADJRUjnG4ZmgQZxzZC3O/i+L98J4GHanRhGXqAyelPAOO6HYXXDTPAJM0VQGr+/szaMvSnAzTgtCkhFhDg7SX4dG249hLcVgjwYkvpERL5HopZQqwxLkcoJmFOLiC/8dFwZQ4TGHGrXxgCLGlzBQi+crLMUL+CNpux/6ody3kvOG113TUAAAAASUVORK5CYII=",
            name: "Viha-Aave",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Viha-Aave",
            beta: true
        },
        {
            id: "weakspirit",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAj0lEQVR4nK2SuxGAIBAFV8d6bIPU1GoYqjE1tQ0b0gQU7wDx8yLm5vZxP/ioRgbMvAG4TL4FWIYTax/AAC6GlYHUukzqbebt8oE0cBII6s2oYgBd7vfejFWxYgs1qp5BTrIFi59DgGOTVy0EKIJt1sDv+Ei4g4sVJMpVV1g0SEnCyqBwyjYFg96ChJNl/6odS/Ut3FKqlkEAAAAASUVORK5CYII=",
            name: "Kaamo-Aave",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kaamo-Aave",
            beta: true
        },
        {
            id: "slimespirit",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAm0lEQVR4nK2SwQ2DMBAEJxGdUAlKE5RAA7wtv9NASqAJlErcCx+wnL3DgMj+ztpZn30HN/XQg7lPAHHHHwBeU5sPnhdggFjCJqDU5/t267lPPxdoQNzMQzdmSOvDDjbz0I1ufeoJavbgagDYf/DUSB0o/kFDLj1BoQIOuwHrjLPhCK524LRrtrAa4ElhE1BZ5eDBYKegsNv2X7UArpc7pG2CUjIAAAAASUVORK5CYII=",
            name: "Neva-Aave",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Neva-Aave",
            beta: true
        },
        {
            id: "necromancer",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlklEQVR4nI2Sv0sCYRjHP3dJcHAKZ8pJtxRqELjUlouDLhIuQQQNLS0OToFjBTW29hc0+A80tNQU6NgSOKjkYp1kCXokBHUN9r7ceUI923PP8/3xfN/j5ODc5Z9VLVUCu0q1VHE1w+Ts6lgB8BJOhn0ALq4vFS+B6CUBgGaYfzqYJQRQ/wMUNW83YLvdqsthKp0NANqtOlYsKV2EZodNu+sDpNJZJsM+mmHKuXfHR2DFklixJL1BR/aTYZ/eoIP124vvD09NAFQBFgGJO61YEs0w6Q06NO0uvUEHzTADZymn24fuh6pJ1Xl3z8uh1rhRANSx48hB0+5yfV/DilvTsOJWoBdOfQ7GjsNCJM7t4x0A64mVQJgAhUxeOvU5COs6X6NXCpk8ALnsLoVMnvJOFYDyTpX1xAqptU0ZpHSwv1V009FlAATZh6rN/WnEi3gdhBKLEbkQ1nWmmTgo3xNa788BksRiBPtzxP5W0a01bhRVKIuyP0fSTTq6jFdAzF/Gb7IPCeVZBQEM6zo4fvDG0ioAR7k99wdXL8AZm3kzJgAAAABJRU5ErkJggg==",
            name: "Hahmonvaihtaja",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Hahmonvaihtaja",
            beta: false
        },
        {
            id: "gazer",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTklEQVR4nH2TMW7CQBBFn5GlBG3BCrmyoxUlgY46HRfINVJTcYJU1NQ5QU6QK1DGvaWlonCKVbCERAo01uwaZSp79s/8P39nM4DX5fLqrKVpW5y1/BdN2wIg+EyKU4CAdP4UQtSsMIY8ZZDOAAfvKYwB4BQCGy4RdhcCuS6Q0EzyveHCunQx27FhlErVBZpxPo3lA6xLR67Z77IdG3bDSfvIU2NStvk0UHQl8HO3wUjLFcnbrsSfa/y5Zj9eALAfL/DnetAg+5w9XbU5X8eGDzPpfTl4D8CqqgB4+/2OR0jNmU8DdJO+WFTtvGdVVb0iuO1Gvu1K3qmpHp+jRk3bDs1UewG32xvp+fTMztrIzHXpomuV/cmFbW8XvezCmNtyPcSGyXhyc6cQyF5ms6uWJQeFMThrI9O2XTnAZPolSlLHvYcmuF6BACSZRprX/3/h/MDEybYPFQAAAABJRU5ErkJggg==",
            name: "Helvetinkatse",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Helvetinkatse",
            beta: false
        },
        {
            id: "skygazer",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABY0lEQVR4nH1ToY7CQBB9NHVVFSQsgpDmUKcu2AaFAXWGLyAgr7/ALxRZHBKFq0Gtv6Cq9kIuiF0SRBWqghO9GRY2MGq6++btezPTBgAMp9Mr/qPd6+FZaKUYQ7lHxa8KH8m1Upz79oUNAIDSGIRCMEFpjJP7tpxXQABIOomjihXYr9rg9Jjy92QWuwT263Yxg1c1SdRsOcUA4NsSKWxw1GwhrISDoWj0x+Or7S09pgiFwKL9BQDIgpy7Pr+M0P98u1fgeFsB62qDw/mEXXePQkoAdZ+yIMd8O7onePQWNVuArvNCylszZYr3wQBZkGP4+4Fddw+tFLyFXuJ7++N4W1cbbuZkFiPpJCik5GmRLZ98krQsyFlydLmpm8xitreuNjx6j9iyIMfhfGLPj8vF9lCPWyuF0ph6Cva6EiAUgjtPsdBLB+MRkA4B8P7bysiaXVwac1ukZz9OaQy0UIByz0Mh8AfL28zakAJ3xAAAAABJRU5ErkJggg==",
            name: "Taivaankatse",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Taivaankatse",
            beta: false
        },
        {
            id: "spitmonster",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXklEQVR4nI2SvWoCQRSFvx2MRhZjE1miRVCstk0h4huktREbkTR5Amtr+0AaERsRQlrfIIgvsJVELAws2uiyxLXIpggzjOtPPM3M3HPP2TN31mjapRCg50wMAHl2fQ/LTNGp7WgN4+iQvQBqI4Wd2g6A1jCuTKI4MNDFZrUMgP8+Vibt5Ip8Pcdz/weAm8Q1MqXQI59Cvp7DrJZ5bQgANsEW1/cYzR0jJoWWmaI1hA5jAGaDBe73LQCNbkCfMbPBArgDIBm7+rtC0y6Fukk0jWWmiPJysD1nYgg9aqe22xO3kyte3h7oPyX2jOVsmnYpNB7v7fDU3eUzNrrBXhIdZw0ugYgWpuvl0be3zJTidF4cE7q+p85y/fj6VCJ9L6Q4SkgjvV7JFg56BEAxnaGYzqim6XqpVlnTUUxnFCdGc8fQieikK9kCru8dcPKDxiW/8jmITbBlE2wPpvsfZPJfJ1O7qpc/fAcAAAAASUVORK5CYII=",
            name: "Helvetin sylkij\u00e4",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Helvetin sylkij\u00e4",
            beta: false
        },
        {
            id: "crystal_physics",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAp0lEQVR4nGNgIAAWudf+xyfPhE8y3zDsPyFDcBoA00zIJVgNQNa87cFxvIZgGICs+eW3dwQNwemFK2/vofDPvrqJVR1WA9A14zMEwwBcmnEZgjcaiQEYBtx6/wivBnQXYnUBLkOweQ+nF9ANwRU2GAY8/vyKEcY++uwSAwMDA8Pr7x/g8nsfnWFEVo/CQQayvGLwBKMmKIdVM1YXYHMJLs1EAWSXYAMAvt5Pw3RrZ2MAAAAASUVORK5CYII=",
            name: "Kirottu kristalli",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kirottu kristalli",
            beta: false
        },
        {
            id: "bloodcrystal_physics",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvUlEQVR4nIWSMQqDMBSGv+QIgiI4eAO34upaep1epgcpXV2lW27gIIiC9AZ2KJZnjC//lOF9H3n5A0qavFw/98eqzVgNrpKM5/uFJgkKNniLJjkIJOyWKSrZCXy4SjK6eVAlVoMB6rRQJVaDtxU0iYnBVZJRpwUA3Tz8zwC3y/Un8B9GRrbhxy0Tth17ownksGzFLRPt2BsLEJPIdSQMsAO1dUIweP/g7CZn8EEQkmhwUBCSnMHRNHm5xmr+Ar2Uj4dkKRRjAAAAAElFTkSuQmCC",
            name: "Verikristalli",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Verikristalli",
            beta: false
        },
        {
            id: "skycrystal_physics",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAp0lEQVR4nGNgIADiF7/6j0+eCZ+kZdn2/4QMwWkATDMhl2A1AFnzqd1r8RqCYQCy5g8vHhA0BKcXHl7Yh8K/dfksVnVYDUDXjM8QDANwacZlCN5oJAZgGPD9+VW8GtBdiNUFuAzB5j2cXkA3BFfYYBjw/vI2Rhj7xfnNDAwMDAwfX9yDyz/b1c2IrB6FgwwEdb3gCYZTUhurZqwuwOYSXJqJAsguwQYAzilRdmWsPU4AAAAASUVORK5CYII=",
            name: "Taivaskristalli",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Taivaskristalli",
            beta: false
        },
        {
            id: "chest_mimic",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA50lEQVR4nO2QsWvCUBCHv8hbRHB2KBRBKDoGQWc3x5K1m64BF6fgZB90FLJmzCod/CtcMnQoFAqlIOWRpSiIcdDrUEJVmraEjn7wuOF7x/3u4AxJHIqIkOclcSgKYNi7kTzDb++6KICXxVvuDdTW+FQvarmat8bHSuJQNnNN368QuAaAvl/5tuHQB66h2PKwlg8tGU9qeNcR+t7+0+T072jwjPU+qwtA4bLM/nV1VE859CkKwNElYAcc16m35stz4mHqrVGOLmE3rjLCRgCZ3tFPnytkHe03AtdgddpNyU7wM9HjPyT4AJKGhYZ/ZywTAAAAAElFTkSuQmCC",
            name: "Matkija",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Matkija",
            beta: false
        },
        {
            id: "chest_leggy",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABT0lEQVR4nK2Sv0tCURTHP0/eEj6armAQRCpEQYsE1phbY0hNbbkUCC1N0lQPGoMHtTg6KdLQHxEtDgpBWEkQ8bAHUSjpUKchn7/wVTz6wuVc7vd8z/meey/tRl5EBD+r3ciLDrC/vSX4wNHxGjpA/fHJjx4AvWNbzE7HfIk7toXWbuTl/cokbYXJZWwA0lZ4rGCQz2VsJhJZtNdKQg5PYmTXy5jn8T91dnMP9m7RXi7mBSAwM8nnw9tQHMUg70IHSJlB4AMYjqVsiz7PCA+lbAs9ZQaJL8x5mC0DePIp8+Z7BK9L+w25jI2WXF4Sbwc/o3z9Hw5E+r/YcZzevlYsiKEUU6tJTSlFtViQpuNgKMXixqbm5gXGVa4VCxKKRGkOFHTFg2fQfcbRroZSPN/fYSjV41xxKBLl8uxUAFZ2drWeg2pX7NWtXq0MFTa6Y30BMcDCjAVoGasAAAAASUVORK5CYII=",
            name: "Jalkamatkatavara",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Jalkamatkatavara",
            beta: false
        },
        {
            id: "miner_hell",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXElEQVR4nKWSvUtCURjGf5bRxxCJgSguWTnkVIK0Bg0uRf4RDkpDEBFBs3OLkzQ1RYNDRA0NoSAWqEXZYCEaei+CopR0t06DeOl6vdehdzm8H89znuc9B/4ZllED2WhEdKsVADavrnXzpgTZaEScPr6QVzoArE3PkcikNZixUQrySof9gyMANnYjur6pglAwID4aiqaWKzyPVhCPhUU8FhaHHj+AqqB/miqIx8ICoFSW2JJ/OG93TXdgNQJ7PS4ukfCN26HZ6w+CDS14PS5KZUnNZ1ZmNeBQMCCGEvhrVvw1q0oCUGy2+H795C84efOgkmksAHSrFXC7NTXfvJ2T7R1hl+tIdYXkKAtnF3fcpp64z5VIZNKWYrOl9iYXFjWzGoL+l80W3iwATocN6C3PLtdJTUzpLtNZOJbeh4kCYOmrw96QlwB6y1lfXRZGuVGoFuRGG6fDpj7RYG4Uv1Adie5aHOwVAAAAAElFTkSuQmCC",
            name: "Hornantappurahiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Hornantappurahiisi",
            beta: true
        },
        {
            id: "shotgunner_hell",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSUlEQVR4nKWSMUsCYRjHfycRBw6mEKYEohxGW1A0RbkIrq0RbQ5+Az+B9AUc2qKhtdWhIa9BiaQaVLoOpcXzMLoa4sTBa4g7NM83of/0vg/P//c+z/s88E9JfsHz3J4D0LdtitWGb85cwOnBtnPzZjMYDtmJR0kGRkJIwC+YiIQAuO+ZdMfLogJmAcVqQ0oGRqzKstDoamnyUi7lHQCt0yNDn+44xOv752IA1wyQTsXRABnYIEKl2fq7haDaJqi2cStIp+ILteD9rju6gW2xvrYCwEfmGEVRANB13TsDZLNZaQogggA8Xl4AsHV0QqFQ8HxTgHIp77htfO1vonV6PNe6JCIhzm5rvrswNYVr9QkAw7SIqSMM06LefBFu4sweGKZF/eHHFIuGRV5/gKuryp0EcJjbdeblCAGTFS0MMEyLWDTsvfr77qdv8sV2qFlLGOAAAAAASUVORK5CYII=",
            name: "Hornahiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Hornahiisi",
            beta: true
        },
        {
            id: "sniper_hell",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSUlEQVR4nJWTv0sCYRzGP+e5RA4uknKCDg4RQlurLYdNakgE4h5Xf0T/QDRG7RJEBV1bN0XgEOJgkNzwBokcZi0GQYvwtnTnpV1ez/J+3x+f533el/cFwCrkJd/y12EUBbDGqgdaY/U//ERWIS/7dlfurmRl3+6GTqH4Da7ePryJo+6z8isxpYhnMFapJGJhN/YUdYvPagUTeLUdso+t0AYKTG7eLFcBGNoOO1vbM4t1XZ85VsQF/fDSssbJ+RlCCHRdV9w2MMHe4b4EyJoXpJNxAEbrdXK5HABCCK92JYTAMAwl6h9cRaHzMiKdjBO/bSCoA/DUOMZodoITuCnK5iXukYa2w+L9HYnYAgcB8A+DYqkmAQZOj5SWYeD0eGg3576FiL/jh1JaZh47MSiWajLsjoEJpuGb69PwT/m932JzY837QNP9v/QFOryBwgL9IzIAAAAASUVORK5CYII=",
            name: "Hornasnipuhiisi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Hornasnipuhiisi",
            beta: true
        },
        {
            id: "dark_alchemist",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeklEQVR4nJ2SsUvDUBCHv4SCVOskTrGDINgKIiIKDiLiJlJESEUUHK1ODjq0oEiHOtTByfoPqNggOBYcipvgKJiIooNm1EEqRZCeQ0lomlKr3/S4e7+73717Ci1i5tYlMtULgFV8Jrp2qLSqBUCsrLhYWXHi6p+qNCAAkE7oUhvcOTKUetuNHAEE0gld9KFutL5XOsMTbn7nyFAiU73Qv+lX18QCjrhQDPJtXxHQOtjeGAMQv9KP8nEZk0IxyPCjoKkqwWgU4+uOwXAXAJ4RnM73+943+LY/0dQQAGXTRI8OcHp9w2i5nfLVOwDB3RFv58iWAqDajz0A2JWKmyybJnNfITT19yWpty9vLCYnMUovniL1WMXnqvX7/erZcQKQTy2IntpjL76EHgr7Ol+0lZhdVjk4b3NX7DoAiGfOFCOTJJk/9jlpJvaRTy2IlJ4kMzMuD/G4nKzMysdlTOo/WlPSCV3EykpmZvzvYofV+Wkxc+v/E9cWaeXeD0w4qGaXPbj7AAAAAElFTkSuQmCC",
            name: "Pahan muisto",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Pahan muisto",
            beta: false
        },
        {
            id: "shaman_wind",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQklEQVR4nGNgwAFi6tP/Z9xf+f/Vny//UxeV/8eljgWXZp4EJ4Zfdw8yTHrzmqE1qpaBgYHh/+y4TkaCBiBrllVnZ1DmZWaYdH4BTkOYcGkWEUCoU1NFGILuHSZcmjnF2VBchssQJmTNfw+fw6oZnyEsyJoFtb7g1IzNEAYGhv+MGfdX/senWZlXDatBt27/ZcgzTGBgXPDx7P9Dp+eiBBoywOWixzd/MrAp2zMwrSxuYbAzTWY4t/k+XqfDwPeXv+CavyzYx8C0fc56xqMbVzEsq11F0JDvL38xvPnwH655SeNMRhYGBgYGaOL4v6x2FUNUcxiDka8iUZoZGJBSIj5DcGlmYGBgwAi51EXl/1ujahniM2IZdDOkGBgYGHBqxglSF5X/X/Dx7H/PlMD/SXuy/mfcX/k/pj4dZ47EawghzQCXfM4x9orQcwAAAABJRU5ErkJggg==",
            name: "Valhe",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Valhe",
            beta: true
        },
        {
            id: "necromancer_shop",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABUUlEQVR4nK2SMUvDQBTHfwmKLupHiGuFEqxDBueiRZRuacFJMnbqUgvuccoXUBeXpIguHTrkE3SUCJ37ESwdHOTOQe+8ejEgmBtyx3v3/r//ewf//S3jnvxLvmseng4Caf4B0jSV4mulaWoVd6qUx7uHhJ0Q5zuNLMvodrvOz1xNsIx7UhEoZc/zpOd5el/pySRR+OZlIcXvBc7jPSsopL3M+Jp5mBcLvX8ILyRAY79BQ6zTHPbJ44TmsL8isDIFr76tVSezgvd2k8FgAEAeJ7RqdauBpQSRH3D7POWxEwHQqtUBmMwKhBTSdVx7Csq/atzJxlaJ+8+3YL4HbWFeLBBSyDxOiPyA8dsr06trIj/QIpEfkMeJJa4JVOUqAhVfIRBSSHMCruM6JsHdcZvIDyj1rnxVvYGbozOtblICuKNsRNgJub98sS6fbu7oHpSqAx8XPBIr+FX6/gAAAABJRU5ErkJggg==",
            name: "Stevari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Stevari",
            beta: false
        },
        {
            id: "necromancer_super",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABxElEQVR4nLWSP2gTURzHP2cjuSVnnFxaEkFoIUk5hAwRGwcX8W5zCW2F0KHBdikud6PgcmOWprRTwOp7e9MxYKHipBz0CikIvcHFxUCgkO05yHucySKCX3jwHr/3/fN7v2cppfgvEEKoLP6ZnN3/tYCagRYRQsyJ5PTm/elndT4843J0bYpSSsIwNOcwDHn1OlKPnz4BYMNrWJYm60vnwzOa9ZIhxXGMlJI0TSmXy5Qqz0yts9vGAoxqNkGjVsR1XVqtlnGPogjfdtjsHwFw8O4j1tZqXX1bfEhl5T6Xo2s6u20O9/sUhh8A2OwfGREtpOG6LrcAQwY43O/TqBUBqO7tEMcxAL7tAJB0eyTdnhGxsvGd22MAEzULHfu4vc1gOkFKyWn6lly290atSNLtIV2XwXQyOzGklAymE3zbYfLiDuN04XcCTdZ9Hbe358iAEX0ZVYhPbrj4lJLLkpNujyTzcL7tUN3bMTWA5sYS43SB0pefhGGIFQSB0s66x1lHjayzGWfzeUcFQaC2VuvKyxfMt/XyBbOEEGptfVFVH5VMTQihvHxBmTd48P0rP65Gc+6+7XD3zRLxyQ3eWuuPEd5bXuEXjtIZ7Yy9uZYAAAAASUVORK5CYII=",
            name: "Skoude",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Skoude",
            beta: false
        },
        {
            id: "boss_dragon",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABnElEQVR4nKWTsUvDQBjFf0mFQjKVILjEIcVBqCTS/eoiOAlSQQfXrsGlo7OCW/4GOwgVV0EHzeZQSNFFxIBOBZVOjXSQOOgdd4ouPjguuXzv3bt876yn7nrJFybpkMG0RrM6ZjCtAdCsjgFYvH60AI6iqNTXrZfebllkOTom6RBXhEpQhyS6IgTAPju8xIkCJumQh/hdFcrnZnWMWJ1XwxWhEneiAHsnyyyAwbTGUrpg7DbqN5R13d1D/I4rQoosR53r6vWVluchVudxogCAG3FPPako4qjfUO9OFFBkOTZA+zhBzun5EwBnh5eGo9l4g6V0AScK1AYAhr2O75cALc9DdyShE5+TU0b9himgi+jYP2gbpHpSUWL29+LfIMnw2SHZekOg4/tlctFDHgNgb3v5T2H77S4tAeR8shUDsNZdUSJFluOKkHpSUcPoQsf3y5OtmJbnKWKR5cYPlJA5uBH3AFgy22vdFX6L9Pc1PQ/WS2+3lDblx7nNWxVX4IeIFJqNN5iRZIl6UmGiFQ6mNfgKF5iXqchyrP9e5w/NHtgsrrhwsAAAAABJRU5ErkJggg==",
            name: "Suomuhauki",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Suomuhauki",
            beta: false
        },
        {
            id: "boss_limbs",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABZElEQVR4nJVTr2/CUBD+aEjqK0aWiVXUdRMgV0uCWBAzc3MTBGaZIAEBGQa7Egj8BTMsQZEgJtZJKlhRT3SCLJ2or2Jm97i+smT73N27++67Hy/3unnejWcTAIDp2AAAy9DBsZyvUK6WpC3iRMblbh4ud6ZjI/SCFImK0AtSb1Qk136535FjOV+lSCpHF7AKRZnkrt0sASngUBNVNEd1mI4Ny9Chcfl/SeYtiTiB9p/KhEFtKEk0y9ChqgAAEfkZm/tMx0a5WkJeZReRj1avCwDotztSEfcB+yFqKgGHVSji+u4q5Wv1uqk283QU9Nhvd2QVkiwiH0+PMxlH6wy9YH8H5Ph4/5QEXAnHYjtF5eR234Jl6KBhnp4dAwDovMezSWqAzVEdIk6w2E4Pz8B0bCy+3jLzICI6OhEncNfu4UvkLRGpav+6Bf4TTcfGoDZE6AXZO/kZvqay8600zhuZ9ngsAHwDxAukuccnclQAAAAASUVORK5CYII=",
            name: "Kolmisilm\u00e4n koipi",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kolmisilm\u00e4n koipi",
            beta: false
        },
        {
            id: "boss_meat",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQUlEQVR4nJ2TMW7CMBiFv0RWLpAMGRhgYLACnRgYu3CCihu04goMPQB7z9C1V2DhCEReKmVh8JBMDJEiS+kQbEyqUNS32PH/3svvX37B53LZcsFMSgCOSqGMAUAKwRCUMQTvi0XbL+iyBCBNEmeijEGX5c0ZgLCCNEmc0BfrsgSv5jhJghQCIYVwBF90KAqqpunIVeWM4ygC4Pt8hsnk2gFwKxpA1TTO5FAUCGVM53YpPgLfJFRaDxK3WcY2y+6ahVVdD4p3ec4uz++ahA90fBfBcxy7d9Cfgf3zLs9/Ce0MgpfRqLXXeHSIvsG/rmDFb9MpQqYpSmuquiaOoj+72GYZMyk5KsXX6dS9xPVqBVxDJIVwwbLnftD871AZw1EpR7bip80GwK39/cd+36XxdTxubQYA1vO5M7StAi7e/cD9AGICpY7y7AKiAAAAAElFTkSuQmCC",
            name: "Kolmisilm\u00e4n syd\u00e4n",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kolmisilm\u00e4n syd\u00e4n",
            beta: true
        },
        {
            id: "boss_alchemist",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVR4nGNgGDJgwop1/yesWPcfXZyRGI0MDAwM7z58YGBgYGAQEhBgKIgIguvDawCy5qaMJKxqmWKTyzCcRaxmBgYGBkZkAxbP7WJE1ywkIIChCcUL6C4wdrVggGl+8fQpg4S0NIpmmIEwQ5jwaWZgYIDTQgICDE0ZSYywwIQBJmTN7z58YJhUXQHXBAO/Xn9hePfhA8OEFev+o4cHC4zx7sMHhl+vvzAwMDAwXLt0EcUARRElhsW1XYywsEEOA7gL7p++wfD0wRMGdPDsyiUGaQUZDHEMA16/uIeiCZmGAWSbUQxA1hyWkINVM04XIGsmBzARVoIfAABkrHj57M2b7wAAAABJRU5ErkJggg==",
            name: "Ylialkemisti",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Ylialkemisti",
            beta: false
        },
        {
            id: "parallel_alchemist",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA90lEQVR4nNWQIW7DMBiFP0fjs4IqZWQ9wlivUGmoqCAHKBrZyIpKWhDeCxT4ALlDaadpUklVDSxSpmmRpcKCDP2R7XRpNbZHbP36v+fnB/9GeWbqPDN1OFeXgAC2sgDoWHP/NG64TgMXTheTk7vR8zhtxboUBlCuwdysVAjrWLcg7wthgsHdEIGLsiDpJR4shmISdcFAc+pYky4mSsoURS5sK8vjctpAosOxxFaWPDN12MeVXGxlORxLAF62r55B//aauZkp6cbtoEmwfV/zUewJtfl84ybpt+Ytg933lwe5p8h92TNw4YdRehL+NYEL/0XR+ZVu/QBUQnj3yQIITwAAAABJRU5ErkJggg==",
            name: "Alkemistin Varjo",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Alkemistin Varjo",
            beta: false
        },
        {
            id: "boss_ghost",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxklEQVR4nK1TwQ2DMAw8ou4QyBTAhu2301S8u0KSKRwyBX0gIyeYKqp6P5Lz+Xwx3fu1bFBAibDmDADorYUbnEbD7apwHqeiyMegCnXSASW67HTFMfKSLX9DzTkEKBHmcTp1o0TF2TxOxdkhUCtzFmvOJxHJLUb4BcbHAGB/Kgk3OPTWqskz18dQvoKP4ZRDjZpTjFC70FBzDKuybUp0fNed5Q4wp3veH5tmu2WV/5tBSzGwL5Ic0bDdlmIpwstlWn4gDRz4Bx0ohISfhEv4AAAAAElFTkSuQmCC",
            name: "Unohdettu",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Unohdettu",
            beta: false
        },
        {
            id: "boss_ghost_polyp",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/UlEQVR4nJVTsQ2DMBA8owxAgxRlCkxNhygRK0RpMgFSiggELdMgyogutc0eNNnAKSJb9mMQ+cqcubv/PwAO1DSMausuOPLSYVEfSLFpGJWNBfalmKVDmIZRiVmCPmdlwTTGQKpvO5XE3AjqSmIOMUtUTe1wVgJahKc5oigEACzLB/L9QhJzxx0AAt+MNhkAoigET3OnIyOQlQXr286IiFka8vPR4HI+GxFtYJsFAFA1NevbTvlSuF3vK9dpGFXfdiorC+bMozuhI9A92Mv8a4k0gU0Bmj/wixHAOoUtsu1WNTXLyoLRD21FtNOw8T3spA+0NV2+7H3Ybu39qV8wfqTKdnER0wAAAABJRU5ErkJggg==",
            name: "H\u00e4ive",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/H\u00e4ive",
            beta: false
        },
        {
            id: "islandspirit",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzklEQVR4nGNgoBAwInMK7/7/D2P3KzOiyKVv/vmfgYGBYaYvO4o4Vs3ofJhmdDZegMsAdMCETSO6a0iymWIXoGseGBd4TDr1H5nNpcWG0yKscVp49///61tPo4jtyDPDqharC2CJqCzWFC627z1muOB0AQMDqjcYGBgY7l25ysDAwMBwa1Yiih6sLshe9gLDNiUdbQYlHW0MtVgNYGBgYFAWkWN4/ewRw+tnj3D6n4GBgYEFl+0nLh1BEcdlCNwAZGefuHSEwULPBsMQbAAAztpq6N8k3GQAAAAASUVORK5CYII=",
            name: "Tapion vasalli",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Tapion vasalli",
            beta: true
        },
        {
            id: "boss_pit",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/ElEQVR4nJWTT0sDMRDFfxtiSciGQk4LPdirFz3bo2fPflyPvfsFpAhFLbii3XWLl3pYEpb80fogkJm89zLDJNX17d0RYKY0AN+HgffdMwDa1LQvW2JoO0ebmqHvEGeuYaY0n287Xp8eE3IOw/4j7GX1NQZD3wFw6PeBMCWWjKQv+1SRh29Nlggrt0xy63aT5ESuby++qa/CKpkKGPuO4UVxHJuIuOeVWybikmmoIDfr3zCtQvxLmUHW4L57yJJ9fjqNxMAfxiYl0+r84vKYO8iNLL49VOCaxZ/EdbtJcq5ZILWdA+MPi0eae3keXicBlLEoY4HT/oIXK2P5ATj8arzlUFUUAAAAAElFTkSuQmCC",
            name: "Sauvojen tuntija",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Sauvojen tuntija",
            beta: false
        },
        {
            id: "boss_robot",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABdklEQVR4nIWSMU/CQBTHf5wm2l7TEErqYCpbByYGN3aIcSUMTjr6FYybCV/BycTZ9AvA7mYMk4MbNpKAnCEGWhlIHZRaSqv/6d299//de3dXOD45i/jRMpwz9AcAWPYeOzu7ACwWnwCo8SjOAehFi+20eZU8pUzrbZU18Ey4tSGYz1HjEZa9RzBVFKKrm+joscvQH+C4VS7edWqzkDz1DY3zyUPciUibx4PnTKPerKM369RmIdflw3gkkTY3LCfTnIxXEE0aCE0aANRm4b/mNESXElHeP6A9LdBTfu7ceTqljABofeQXBd373L3WB9+A/5SEpIHbyUVP+TQsJx4neSdZncBPB565DsmKs+SZICavL9wVoz8L83TLBKFLCYBdcTcKsp511Vnf0AAQetFiGc7plIINSE/5G2P0lI9dcbkU/vdPBNjS5BokfXISZFdcOqUANR7huNXfV9jSJMFU0SkBJWibztr/8ExoFyMgwH9+wnGrAHwB7rqmtWVlWZwAAAAASUVORK5CYII=",
            name: "Kolmisilm\u00e4n silm\u00e4",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kolmisilm\u00e4n silm\u00e4",
            beta: false
        },
        {
            id: "fish_giga",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXUlEQVR4nGOUlFZgYGBg+M9AHmBkwqf52LxIhmPzIvEZ8J8Jn2ZsbHSA1QBsGnAZgtMFxAIMA/A5F5sc9V0wagADg1XScpyKscnRxgvYbMLlMpwuQNaAz1uMlGZnAMeEGj/pPLdvAAAAAElFTkSuQmCC",
            name: "Syv\u00e4olento",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Syv\u00e4olento",
            beta: false
        },
        {
            id: "maggot_tiny",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMUlEQVR4nJWTMW6DMBiFnxESCqWgSgxIqdQbsDGxdesJ6NJLwNJLwDmShUugTt26IFWKUqYyWIogDlUmOiBbBpygvMm/f33Pz79l8v781gNA2zHIMl7OeHDvsCRNBd8i7VrzQE/LBqrT64bensA2LdimJRrV5riY4kBPg4EM2qYFz3FnJlMjXuuX3D3HRd1QYfL0ej8zqTbHwaDtmEghz4SbyGmm0lUDU+2x8x8AwDJWowP00A/Exq7aj2AOqUAu8QoyLJtegvmraSo42WYk9ANYxkrAnuOOYC4CAGkU9x9fn8jLQtS7aj+bwxRuOzYkeFyvBcxrrrqhyqG2HUPd0Plf2MZpH2UJkcG8LAhftx3D9++P6GkAEGUJmRrxRHlZkDSKe37/uqEI/QChHyAvC/IPGKOguVDKN8cAAAAASUVORK5CYII=",
            name: "Limatoukka",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Limatoukka",
            beta: false
        },
        {
            id: "parallel_tentacles",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtklEQVR4nN2TywqCQBiFv0QQxkuD4FJy3XP0Dj1Cj9wq6IIEGSWaQ61qISNRKqPt+lazOOdwDsM/WS2WTwDXEQBUD8X+fAQgED7b7MAnoSsJhE+hSqz5dIbrCNLriXW6+RK3cany5m3v7hkAhSoByNWtEbwLu4JsXdvUpNHTLCN1D5bp7s4AqHePDjDd3Nug7a8HBfzc4A8CkigeZU6iGCt0JVBf2BC03gaQwkMKDzC7BW2WwuMFkpZCNdn94V8AAAAASUVORK5CYII=",
            name: "Kolmisilm\u00e4n K\u00e4tyri",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kolmisilm\u00e4n K\u00e4tyri",
            beta: false
        },
        {
            id: "minipit",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1UlEQVR4nKWSPQ6DMAyFH1mIkIjaoRUdGLgKt+AKHIgTVGLsDXIVBhbmICE2Ojnkx9CqfUskx++zExv4UwkXbOtmM1i9mIJEp/so3wu4xmEavcSqKFlQEprJaJYZKsvt6YJciKAL18zJLLPtzH2eoOqcmUyhhmlEWzeb18EnU3hPXUSAUxMDt4DH9fZ1F8A+JQuQqQQA78fPRAUFADsSmjWJg6ksR1WUuKcXvwMFeWjkQNEedLpPFOS+cSfV3WLRbtN8ucUKt5AFcCAFCYMVT/06zP9Zb0/zY4Dgg6c0AAAAAElFTkSuQmCC",
            name: "Pienk\u00e4tyri",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Pienk\u00e4tyri",
            beta: false
        },
        {
            id: "gate_monster_a",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/ElEQVR4nJWTwWrCQBRFT8SFMAS6kCKESpGCuBB3flLALyrkk9yJixIQCYaAiIvCEAy4mG6a6TjzprR3N5N7D3fIe4kxhl7v8/nP4XclAJuyZOiGi1H6p3TeadNDhm44e3kFYPz0TNtqAJRK2e239htAUVcWMvDpbhigbTVvswVNXYltHgB+2NVquRYhQYOYYmALWC3X1tScT6JZekrQoDmfyCbTABKDDnxTNpkGphg0ALhhKSDBLWC336JUGgTcVofjx8M8BA0k9WEfLgKunxfReLvfgmmMNvAhSqU0dSWGAbtMSd5pU3z/Y2ni3Lu80+AuE8CmLBP+uc4AX9eHdFzOroHwAAAAAElFTkSuQmCC",
            name: "Veska",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Veska",
            beta: false
        },
        {
            id: "gate_monster_b",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR4nGP8//8/AzFgurr6fwYGBobMmzcZkcVZiNV80tSZ4c2HVwwM6ur/kQ1hIsp6PICgATDbL14+RZ4BMCAtq0C6Aei2P338gHgDDPVNUGx/+vgBVldgxEJCTBYDAwMDQ9qPz3DbcTkfrwvQbWdgIMEL5qf3wm1Hdjo2l+B1AT6n4zQA2XaYIfi8gDMpI2tEcdHty7hdgB7vyH7H5R2cLkC2HZvTcRnAaH56739znMohapA5AIUkWsyTGwaTAAAAAElFTkSuQmCC",
            name: "Molari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Molari",
            beta: false
        },
        {
            id: "gate_monster_c",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwUlEQVR4nGP8//8/AzKYrq7+n4GBgSHz5k1GBiIAC7rmk6bODG8+vGJgUFf/T4whTMTYQrIBTx8/YNiqqgv3DskGSMsqkO+Ci5dPkeQKDAP0dc0Ynj5+gOIKQ30T4g1ABjBXpP34/D8hJoshISaLsAHIXiAmLLB6gYEBEpBPHz+Au8L89F6sYUEwHRByBVFewOcKnF6AaSQUFjgTEkwTuivQ0wULumaYF5BdgQ+gG8CY9uMz7pR3+zLDVlVdxkwkIQDOcl/PxPBVHwAAAABJRU5ErkJggg==",
            name: "Mokke",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mokke",
            beta: false
        },
        {
            id: "gate_monster_d",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABC0lEQVR4nJWTsW6DMBCGP1d9C4TEQphQVKlpHiAjGTt26Jo+ULp26Csw5gFCJuQJsSChLFWHvsF1OssBbLUnWWD77v8/HwYRITaOq5XE9u+JxHtRyHmzg6IQwBy6bpZzFxP4SwQF1L21DXVeAsi/BABa27Aun7iOQzDHiMyF1f3754vrOJCkGQBVbzl0nYkSPKwfnTvgipVC92cEry9vAGwvJ+euhSqiFOfNzgB8fB7DPZieO9SHGwHfPUkzV+RT1HnJ9nKSRYGpmxZN+7BIoO6hT3cdB7fuU8wIkjSjtY07gv/UdT+MiNzcOh/XT/bn+l71dv4z+eg+QagHRkTY75+pert412NR56X5BZnQzgAMrYIKAAAAAElFTkSuQmCC",
            name: "Seula",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Seula",
            beta: false
        },
        {
            id: "boss_wizard",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABUUlEQVR4nI2SvUvDUBTFf0+E1o8KtVRDnbQiAYeiUEEEFew/4J+g4OLgqkPHbuLgKA4VBKWTuDu4iFCqRaFQijWbhMYQSBR0ikNJSOyz5kzv3XvP4dwPiICT8rV7eHzuynIDUQT6QQQ/u3sHbmIs2VM0k1WxbRut3cA0dCqXZz4v5EBGDsI0dFJpJRQblBU6tvWv9b4C9fojuv7WE6/WaihKJhSLNMTcwjLT2XlpTiqwurZBMaf6/6f6PVq7AcD27FSoVtqCh1JqlOfCpr+FYu6Fh8RkNIGWmmcu4ACgOZ4hFqWF3+g3g5ADx7akt+A5+HBsYvHhvx2sVG9xbMu/g5aa73FgGrrcQWmn7GrA0HuHxdcr7pbWge51eg4ACnFBJSAgPHJQ1frsAKDGmtx8uaTSCqahU4gLmt/d9R5d7AsAISMnRyb8tycSJHv54umW+AEYcnb5pB3ZTAAAAABJRU5ErkJggg==",
            name: "Mestarien mestari",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mestarien mestari",
            beta: false
        },
        {
            id: "boss_centipede",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIElEQVR4nH2SvWrDMBSFj0UNdXFwpIArg4eM3ULWDB3yIH2EPmLH7h26hlICcTPYmJTIpEM6iKteS6rPJFk+3/1NHp+er/DU7d6hdO1/drreFe584z8m5x5K12ibPZSucRkMuuPBvcuyAgaDVOkQkJx7d87nC3x97oLoBJMAUqX/ANzMo5pTPwJks8KB7m+zsASK6htJ5tQ7yGUwFkDRecobtRwZX9uPKETEzOtUAgC2+QrbfBUFUhmCUiEypU5Gfo5BRNvs0R0P/9bsQwJAPl9MGqcky8qWENPL99vknRSMEbAd36hlYKJJ0ARGixSDALZxfIRklmUFABC009mscI8xkG8mnwCA8mE9+smH8Ts3A6wHBPlpGwB2Sfx0uZH0C+fQeh84PSp8AAAAAElFTkSuQmCC",
            name: "Kolmisilm\u00e4",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kolmisilm\u00e4",
            beta: false
        },
        {
            id: "ultimate_killer",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAUUlEQVR4nGNgGAWjgAAwn5L333xK3n98apjwacbGJsoAmIbfK04zwGhchuB0AQMDAwNrhCkKTbIBMNthLsEGGHFJoDv5ZM4knGoJGkByIJICAIdfIKg7DzwnAAAAAElFTkSuQmCC",
            name: "Kauhuhirvi\u00f6",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kauhuhirvi\u00f6",
            beta: false
        },
        {
            id: "friend",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkklEQVR4nGM0n5LHwMDA8J+BBPDv0TtGGJuJVM0MDAwMTHJCcD1MpGpGN4RsAxgYGBhOdy3BbsDvFacZfq84TVDcfEref4pcwMDAwMBoPiWP5EBEBhS7YOANYMEniRzirBGmpBuASxMMnMyZxEiRF0zrEsgPg3+vPjEyMEACkZGAWpyaGRiwhwEuAxE5UIwPLggAL/Ql+E3pk5sAAAAASUVORK5CYII=",
            name: "Toveri",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Toveri",
            beta: false
        },
        {
            id: "meatmaggot",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkklEQVR4nN1Syw1DIQyz3iwswA4MkwVYIowUdmAAhnFPoAh4KtfWF0hkW/kB/w1V5TWZJAFAROjFIwYAM+PpnWKSNDOaGT1UlYMzRCPeShYRrhiGq/GswLfhSSGESVzFJCkifLxBKQWttRn33uc/pXSc3eP7yTkjxoha60Y85bbygfctXM1ghb+Dqy18w+sd/DY+0AblDQLWuU4AAAAASUVORK5CYII=",
            name: "M\u00e4t\u00e4ry\u00f6mij\u00e4",
            description: null,
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/M\u00e4t\u00e4ry\u00f6mij\u00e4",
            beta: true
        }
    ],
    perks: [
        {
            id: "CRITICAL_HIT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABb0lEQVR4nKWTMUtCURiGnxtRlCgtZXAhgrwQQRINmYhkv6BSMAgaonCQfkBDUEFDjUE0SFBTkCAV2NCUEZEuEQoS3JriQi4NXrygiw3lSb03iXqnA995nvMdznfgn5Fqi2hgsqoVS7+CZIeNg1RaEoJoYLJ6/viE024HoKO70xKsGGUACrrO7NgwB6m01A6gFUs47XYBxuIJACLhUIOgVnd+MQBtVidFwiGy2Syr6xvMLa3Q71LwTQcsuxKC5rb3t7fQNI372xsA+gZdonacTIp1u6X2KzXY658iaBgE5xfIKApdiYS5g+bUWvb6p5BlGYCMouBRVRZPT1oLfNMBXl413p5Vzo4OG2Atl2vYaxLUw/Vxu90m2CTY2102wbF4Ao+q8r65yVreLJAAZsZHq0MTHgDurlNWt2JnZFQIKkaZgd4eLh5ykniF68urHyewVdrgc7YLuk7FKItxbc5aPifqBV1Hdti+rwB//0z/zgeeRYvEtdm/UQAAAABJRU5ErkJggg==",
            name: "Critical Hit +",
            description: "You get more critical hits",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Critical_Hit_+"
        },
        {
            id: "BREATH_UNDERWATER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJElEQVR4nK2TMUvDQBTHf5GiYEhAC2YInYriKIjQseCUzU+gSynYL9DNUDe/QAPi4jdwuynQsaOjEJykQxwM9GihXepg70iTiwj1TY+79/+9/3vcwZZhqaTXbq0m09mfRL5rMxyNLQ3otVurl9c3PMcBYHd/zyhczhcApFJydXbKcDS2agCT6QzPcbSw2Y206P3xVufq3ltrAHaKXZrdiCQWJLGgf32xATOFBphsd27ujaJ8bcnB18fnrx2LUSseZCKkHgw4bBwBPztQY+T3UQlQkGydq508Pd/xQFSClEYohhqpah+VAGU7EyH1k3OOLwPjCBqgHgnAQTAgicUGJC/O1xodqK6mjkYHvmuTSslyvtD0TISlYnWfSonv2sA/fKat4xvmWXRM+Z/WOQAAAABJRU5ErkJggg==",
            name: "Breathless",
            description: "You can no longer drown, and can move in liquids with ease.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Breathless"
        },
        {
            id: "EXTRA_MONEY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABc0lEQVR4nK2TsUsCURzHPxdxknK6aXC3BUdLkE0GDTWFSzWlS/+ATTZHQzTn5m4uGkQ1iYs6BB0EKUQid9CSByUtFhq62CBenndCYL/pPd77fn6/3/f9HswYwmiR2IwMzM/On0Sy30e6ogkWILEZGdzUGoQkCQDR63EV9rs9AN6/vthbXSZd0YQ5APOzQ0iSEL0eS1zMxRyA0XlIkhhVOzetzO143rbX7o5c71mAaWWPIrJxbqvEAXDLpDUMR+bJ1gSA3bWVwVvn2wFqN00Ciky7aTpaWvQtcPv4JLh6MClu6Tpaw3BtzQHInoaH4tUzSxxUVdq1Y1cjbYBUVCSoqgAYl/sEFJmgqhJQZFq6Trtpkj0NuwP63R7JQp+WrlPPXBNUVYxSmXrmGqNU5uP+mYAic3BStQYKYH6cVszFfs0qjJlWqFLMxTBKZVJRkcOrCYDs9/Hw8srWzgUwfOdUVCRZ6Fu+bMfztlFeX5KBf/hMM8cPq2GbQhbHBiIAAAAASUVORK5CYII=",
            name: "Greed",
            description: "You gain double the gold per nugget.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Greed"
        },
        {
            id: "EXTRA_MONEY_TRICK_KILL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXElEQVR4nK2Tv0sCYRjHP4YYJWebggZOSm65GQhnLeFmUy31B7jpKNHg0Jib/8AtNSkt0pSB0G22hHI3CZ6gtOih4C02lMfd6WFg3+X98Tzf5/088LywpTzLTT6TWmiT6Z9MkYCfalP2mAXymdSi/tElJAgA+PZ31xqN2RyAoa6TOz6i2pQ9XgBtMiUkCK7G+/obiWiYTm9AKScS+vUA7GzCrbVVEtEwAIlomFpbtcXNAm6vd3oDLpIx22rNdSWQW0UASjnRpKi1VUo5cT2B0zzua8hddYXCKa/zQionGfc1RooC3CK3iqTSoknjlI2gkvURjMc5OIwQjMcZKQrjvoZUTrp1aicoNAykE4WRovD1/glA7OyU86unzQWM2ZzX5xtb8svjJan0A5Wsj0LDwJqLf2+1BatZKifNs9Xs1A78zPZQ1zFmc3Ncr+/aK8nL+FDXiQT8wD98pq31DfD/kpoZfNz1AAAAAElFTkSuQmCC",
            name: "Trick Greed",
            description: "4x instead of 2x gold is dropped when death is an accident.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Trick_Greed"
        },
        {
            id: "GOLD_IS_FOREVER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABgUlEQVR4nK2TPUhCURiGH0NMCrNJB4MjRJdqMnCwraYIIpqqJWh2UmeNqPYaormfpYQoIpAWNRC6kKCLEQpxD3kDo0WjKAlsCKVL1wrqTOec73uf8/LxHvjjsjQ3wbFAQ689/Urk6elmK61aWoDgWKBxnL/G7XAAYOvqNBXWn18BqDw+MuMbZCutWqwAeu0Jt8NhKnzrHcbujyGEQErJS3YV912OptuOn+za/TE2FuH8MMbxshe7P2aotwDtbAsh8Hq9APimogghDL3WnxxIKdE0yJ+uoWkaoW1pqH8LUDMRTgo9hLZrCNFASnjJrhpEbQFqJkK1rDNUiZLZjBMYHDAVmA5xb2WEalnH6VvDpShU81HUTMT0oS+A9UkbLkUBoBSfxdnn4b5YpFrW2VsZaQ9ohiScqHNfLHK1c4RLUSglUzxcFHD2eVhYyhl6TWdwtj/HxPzBxyFx0LorJVOsT9oIJ+qGfit8ZPvy5hY3MD69+yUTTeDnKI/2e4B/+Ex/Xu/auY8AyQs1/AAAAABJRU5ErkJggg==",
            name: "Gold Is Forever",
            description: "Gold nuggets never disappear.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Gold_is_Forever"
        },
        {
            id: "TRICK_BLOOD_MONEY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABbklEQVR4nKWTzUoCURTHfxNSkCiMm/EjFAQXtmuV0EIfINTatfAFhh5AfICoTauYF2jRLs0nqCAoWthKBWHACb82Digj6Oa2UAe/pgLv5nLvOf//+R3uPZIQgm2WC0CSJNRUQrQG1r9EIa8b7fldEkJMDdRUQpS+6igeDwC7+3sbhZPRGIBP/Rs1lRCA5AJoDSwUj8dReFV6IR4JUmu2KWSTKDMNwM5fuMVKg3gkCEA8EqRYaSzFbQOn6rVmm7Oj2NK+mOtIUM5lAChkkzZFsdKgkE1uJlgVW3qX19ubNYrV5Vq90OQAlt7FrBrAI+VchvSs6mr1NYI73Yd8GMYd9SMfhjGrBpbeRZMDTp0uE1xG+2hVA7NqMKhP3/zg1M/F24ejgU0wGY15ODlGNTuoZoe80idyHiN9/8R1z7ckmn+otRYWK2lywD7nlf7vBCGvm95wyGQ0tt1Vs7OWPI/3hkNCXjcAkhBiq2GSth3nHxTOoPevPAMCAAAAAElFTkSuQmCC",
            name: "Trick Blood Money",
            description: "Blood money is dropped when death is an accident.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Trick_Blood_Money"
        },
        {
            id: "EXPLODING_GOLD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTElEQVR4nK2TMUvDQBTHfy2SQEqydugkRShOCg43OHR1M4EWOji5dbMfwEFw1UXqB3AoNNA6CG7aoeBtilMhlE4VCk4NLbRLHerFpElBqW+5d7x7///vHXewYaRUUi2KxXA8+VVTzspQ78hUIFAtisX9W4+saQLwcLqL0+jHGufTGQAj3+d4r0C9I1NpgOF4QtY00QwdzdBxGn2kawP8rN1aUM+aJop2KwlRujZsl5EuiFIbAHF4lThOWiWaodOq5ANH4FvEplXJR5o0Q48LADiNfuAIwKCJKLUj93F9pCUThOOj9Y44qCBK7Zj72eN8vYDCDzuqXPY8ZLcWM4sIhPHDzrLn/W2EVQoAPm95ubxZT6AeyaojgNcs4z09A8s7CJ9NfAeisBPZn5y/rgNdEuSsDCPfZz6dRdTvLvYjh1V95PvkrAzwD59p4/gCdaqBLY7rHLwAAAAASUVORK5CYII=",
            name: "Exploding Gold",
            description: "Gold dropped by enemies explodes when it disappears, is picked up or touched by other enemies!",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Exploding_Gold"
        },
        {
            id: "HOVER_BOOST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/ElEQVR4nK2TsYrCQBCGv0iI4BHbCJYiWF7ppfIRfIGUabTwWVJoY7kv4CNYBeGaK4WFa0SIrUHhrtHCZFndDSjxr4bZ+b+ZXWahppwymIyGl/3x9JSp2/5gsd44CjAZDS+rny2B7wPgtZpW4//5D4BDnjP+HLBYbxwXYH88Efi+YezMlgBkSXwHDgoPQKNqzM5sSZbEZEmsQDYpgN69NIdCEgppQPRat6pzKCTTQZEUkjTqqzNdBsAwwy0uIJVXKPVo1iGhkEbemCCN+qQPoPkWa3frBK9KAcoleUZ6be0JXLjt9vfvjqBIeq2megtb50Oe89XrAm/4TLV1BTOuYwSROqY7AAAAAElFTkSuQmCC",
            name: "Strong Levitation",
            description: "You can fly 100% longer.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Strong_Levitation"
        },
        {
            id: "FASTER_LEVITATION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEUlEQVR4nKWTMW7CQBBF30YWSERO64IyQvIN2HSms0/hjsIHoHbNAVLQ+QZ0blMuoklpCYkGUaQFESlpJoWxg80mIfKvVqN9b0baWSUidIkDoJQiCbTsD6eboOHDPc8vRolIKUgCLcvXAs91AegN+lbw8/0DgPV2RxJoAZQDsD+c8Fz3CowyDUAem4bYOzMAdz+NGWWaPDbksalFttSCy+4VHGW6cbbdddpGfzqqgdk4LYtZSh4b/OmIYrGxT1ClWGyaMDAbp0SZvoKtgjbclvwpyGPDxA+Zr74l81XKxA/r1/hV8N/UgmpJbsnl3c4TOFDu9nq7wzsXe4N+uUSE1s5vxyNPj0MAlIh0+kyq63f+AqZJc7yRH4kAAAAAAElFTkSuQmCC",
            name: "Faster Levitation",
            description: "You levitate 75% faster.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Faster_Levitation"
        },
        {
            id: "MOVEMENT_FASTER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+ElEQVR4nK2Toa7CQBBFT0kDCaTYCjRJJY6V2Lr3B3UIPgCN5gMQuP7Bc7XIxT3ZBI2oZUOT1oCAbdqy3TThXbXJ3HvnzmQWvoSjH5uVeFxv916i2XTC4SSdymCzEo/fvxTf8wAYjkdGYZkXAGRK8bMIOJyk4wJcb3d8z+sUaui6/9YADGyCMBYABOt5J6cyMHXfLneEsSA9XiqzNtc1dWybEO9IIkkYC5JINuruB9kAm4l1B33QSLA/NxPoRPtzzxHaxW1qF0NtBH0k7URJJAnW84a4zrXuQIvS46WTM4DXbWdKUeaFMUm9c5kXZEoxm06Af/hMX+MJXXtvEZ/sIlAAAAAASUVORK5CYII=",
            name: "Faster Movement",
            description: "Your movement speed is increased.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Faster_Movement"
        },
        {
            id: "STRONG_KICK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABhklEQVR4nK2Tv0tCURSAPzWKkoygqJ4gCQWJUYQh0pAuQTQFQUtb0JIQDS79BS0NERiN/QEFtkVTLSEuSkSI4Q8eJcWTsMQnT+jHIO+mvRcEduDCvZz7fedwLhfaDIu+2QwFPh/fqn+CnA47h5dxC4BVh18sXmSljKyUearWxBrp/t4fb2jISplYKs1mKPApBHrled86nT1dLdWSJTjftrLsBtv4LKveLtInS4Kx/mwv4FkztHx09kE44qfX5SIc8XOwey1yBkGzZGagUV2HAXpdLrZ25swFz68PLZJkCRb3P4juJajIMgAVWSa6lzAK8sUrQyduKQiAbUziPKEKOBzxizsdzUBDEhRnpZZiZUEiV+oDXni/vyOWh1g4wbC92yjQJW4piFJLMT4qkSvBW7XGabJILmmcl+kQ88Urhgb7gQaczRSAxpP+KqirGpNTEyKRzRRa4Oaoq5pRMO3zcnuTBhAiM9i0A6fDzsVlnLqq4fGMCZFZ5bqq8Vyp4HTYgX/4TG3HF2OEsPu6NhlxAAAAAElFTkSuQmCC",
            name: "Never Skip Leg Day",
            description: "Your kicks deal extra damage and knockback.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Never_Skip_Leg_Day"
        },
        {
            id: "TELEKINESIS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABVUlEQVR4nKWTsUsCURzHP0+kKLkDQzBwaAiHloJapMmtxpYgpFnhamqvP6Gt4FwLCVpcGy6aKohAMiiQWkJIOhTu0NDlNeg77uo0wS/8+MF77/v9fd/7/Z6QUjIJogBCCIxsRtad9liklB7j9OZeSCn7AkY2I8uVV5KaBsDU7HQosdfpAvDw/oGRzUhARAHqTpukpg0lKqj95IADEBnL8whE/eqFUg0AM5emUKph5tIUj/MBQv6gGHAqpJRsrS3Lz/Z3aIWd7XVe3urs7W4E1o8Ozyg/PonAFZQDlfcLm3w1XRJxnZPzK67vnr34cwVl3Z/tpoPdckjE9X7M6cPf4LcLM5f2qtsth6XFFHbTAeDi8pb52Ey4gKoOYFlVVlYXhlYPCPQ6Xa8Tqgt+Qcuq4j/Lfw78TkYhAv3ZbrguvU7XG9cwqP2G65LSY8BgDib5TGLS7/wDcKSWNVGr7qgAAAAASUVORK5CYII=",
            name: "Telekinetic Kick",
            description: "You gain new telekinetic powers.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Telekinetic_Kick"
        },
        {
            id: "REPELLING_CAPE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABO0lEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHTjDCDchysPi/4cINBnFeXgYGBgYGNi52uOIUjzI4e9q6ZgYGBgaGl58/MwQYaDBMO3CCkYWBgYHh6aevDOK8vCgakTX3bOpmEGD7D5cXh+phYGBgYCLk3J5N3Xjl4QbATLdILodLPnl6B0UxTA7ZpYwMDAwM/ka6/198/Y5huoduEJy94/I6FDkJbk6GjecuM6J4Adn2FI8yBhlpFQxDkdWgeIGBgYHhxNxODA3ohqCrwQhEdBvMdBYzBLkfZ1CSMcAwHKsBMBvm7Ohi8Mr+z3DqSizDup2WDE21wvgN+PXtJ4pEikcZw7ap8ITKEJO+lwGbWpyBiA1gk2diYICk7ZefPzMcmtyE4RJkAJN/+fkzgzQfNwMDAxUyE8UAAGAfZz331m8zAAAAAElFTkSuQmCC",
            name: "Repelling Cape",
            description: "Stains drop at a fast rate (when moving).",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Repelling_Cape"
        },
        {
            id: "EXPLODING_CORPSES",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSElEQVR4nK2TMWvCUBSFP0NJIBLHCjoUsUMn6ZjRzqVQAhbtUrq69i+0f8G17aKgaAqSWZeCk3TsUAlFLOhoUNChdgjv1WhSBHumC++ec8+57z3YEzFRlPPmajSd7URKJ+JUur2YFCjnzdXL2ztJwwCg7xQxC7YkXJwfyrrZGDL2PC5PT6h0ezEFYDSdkTQMVF1D1TVJbpWyAGSOUlKg7xRJGgbC7cFfVlNWjt7dPbh1IINZsGk7dqBHEYWqa3Li+nTfwhXVjiujqLq2LQBg1QaSnLJyv3tw66H72BIQh1ZtECBXOy7XZ5nQmMo6ue1MAoetUhazYON+fvHw9MptwqDtTAIupIAgr2cXkQQep160gyjS5oBIgeV8EdoQhmZjGO1A4Pn4eycxBfy3PfY8lvOFdHLz4WtvXttyvmDseaQTceAfPtPe+AF8hXZ5bwXTvgAAAABJRU5ErkJggg==",
            name: "Exploding Corpses",
            description: "Enemies explode upon death, but you gain immunity to explosive damage.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Exploding_Corpses"
        },
        {
            id: "SAVING_GRACE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTUlEQVR4nKWTMUvDUBSFv4goGlJcpELBqSVBKEiXZEuh4OBSf0PHjP0hGYODZPIH6A8oNFsmEVwC2aQFi4s0NDZdnot5TSBRsWe63HfOefce3oMdoeSF07fEfLn6k6jVUPGmoSINnL4lHp4jmpoGwMHxYaVwk2YALJKEm0sDbxoq+wDz5YqmptUKc+TnzW8NwF4dOZg4hFFMGMUEE6fWVBrc317Jpu/a2AMPy+hgGR3sgYfv2lRxpcHF9Z1sjsZBSeC7NqNxQBVXARj2uuJt9UkYxVhGp3ZcQHLO1CMen14UOUG+ZxjFP4qLXIlhrytMvS3WM1cUYeptYertUm89c4Wpt8Ww1xWlDADsgSfr4irFusgpGWzSTAZXlUPe811bPigohPj6/vHrQypedn56sg2x1VBZJAmbNCu5Vwk3acYiSWg11O0E8P/PtDO+AKTLoZQZVhiCAAAAAElFTkSuQmCC",
            name: "Saving Grace",
            description: "If you would die and have more than 1 HP, your HP is set to 1 instead.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Saving_Grace"
        },
        {
            id: "INVISIBILITY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA70lEQVR4nK2TMQrCQBBFX0QiGJI2RVpBCQRSWnoEEU8h6e09g3gADyAewdIyEAh6AIu0LgaSRhuzGtmNAf3Vwsx/+2fYhR9lVIfFZHy/XG+tTJ5jsTkcDQlYTMb3fXzCtW0AzH5PNg/mK3lOt0sAMiGYhiM2h6PRBbhcb7i2XTO+m9MkBojMfm8N4D49AJ1vcZ9mzPNurapLwOftTXrv1SYoh7MIwA9C/CDUwrQAPwiVkVsD2qoRUC0QXiO1BqRJXJtdN5IElHlRK3wuLk3iSNWrTKCK2/gOPMciE4IyLyjzQhu3qmdC4DkW8IfP9LMew4tW49BTt80AAAAASUVORK5CYII=",
            name: "Invisibility",
            description: "You're invisible. Stains, casting spells, kicking and taking damage makes you temporarily visible.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Invisibility"
        },
        {
            id: "GLOBAL_GORE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABN0lEQVR4nK2Tv2vCQBzFPxGpUkk2MZDFsXQquFgcmlmXIg7+Df5B/gmSQdJC0aVLOsS6WDqV0qlLINIth2JcdLA5ciaFUvvgyLvLvfd99wtOhJaQgd3cBdHqVyLLqDD05po0GNjN3f3rOzVdB+DsvJQr3K5jAJZCcHt1wdCba0WAIFpR03UpHJsWvTCQwk67QckoE0cbJtMFtW8NQCGvUi8MGJuW7JeMsvJNo5iQ49iKiffJyK7z/PSWmaskSFdN8wTXN5eZMcWgFwZ0+62MeGTXJe/2W/lLSH66jo/7QyoA1/Hp9lvMHl7UBJ12A9fxlcnHp5EHaTCZLjJVE7EIv2QDiKNN1iC5JGlhGo/eh+R341nW4K8owOFuL4Vgu46VJHDYWN2sAqCbVbbrmKUQWEYF+IfHdDL2sPp3cazfrMIAAAAASUVORK5CYII=",
            name: "More Blood",
            description: "Blood blood blood.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/More_Blood"
        },
        {
            id: "REMOVE_FOG_OF_WAR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABZ0lEQVR4nK2TMUvDQBiGn0hNsaGlS43Q1cHRoUPEDhX6AxyyFjo5dOlaqmMtGc3SudA1g5uDATsoBung6OBaMNWhNFTRCnGIF5Kmg1BfOLg77n1477vvYE1JYtKoaP54Nv+TqZhT6A0dKQQ0Kpp/+fiEms0CIGfSGPogZmpZNb7ePwFwPY/j/T16Q0dKAYxnc9RsFjmTBsDQB5h2JwYw9AEtqwaA+usBSC3HE+ZDqpSqGgAj28G0OzGIUAgQsUe2Q7N6Rrmukdr1ASjXNUp9jZHtJCASwM3pvS8OAqFxWd/PQc1v+w4AR+cHQQ0urk54mX9gECQAwvhC0f2WVWNH2VpdgztsNic+2PH9h8k1i22JEnFwAuBOX0GGxRLBld9gmrzWRnTRsmp0dTMERQdAVzcTrxACRJNEIWq+gJovJMzibCIBBH3QtpqhUYDaVjPRnSGgmFNwPW+leRXE9TyKOQX4h8+0tn4AsJGbWehkmp0AAAAASUVORK5CYII=",
            name: "All-Seeing Eye",
            description: "You can see everywhere.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/All-Seeing_Eye"
        },
        {
            id: "LEVITATION_TRAIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABG0lEQVR4nKWTIW/CUBSFv9cQSNo8LKJzVEygCRNLKvkTUyMTGBx/YI7MYDDb1HwzubnJhZklQyBgZqvA0tCkNXeiKaNZW0Y46r7ce7578pKrRIRjVAFQStF3O+KvN/8y2XWLycurEpEE0Hc78vg+p6E1AFWzth3udYcAfPsLTmyHiXfN2+cXfbcjgDIA/PWGhtZUzVrGDNBuPWTeVbNGQ2vStJWyqL3ukOksgbRbcHXj/ZkxdslF8p7PmM4uyJs18gyHqBRw9zTaCyj8g+ZgwXLs/EI+DkhwOU/MaV2mXMD9qZNblwLiMMpsaw6KN8dhlJ9gd9ty7OyNvwXYdYtVEBCHEXEYcX67yI2f9ldBgF23AFAictQxqWPP+QeE0m4axGNpZwAAAABJRU5ErkJggg==",
            name: "Levitation Trail",
            description: "When levitating, you leave a trail of magical sparks that harm passing creatures.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Levitation_Trail"
        },
        {
            id: "VAMPIRISM",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9ElEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHTjDCDchysPi/4cINBnFeXgYGBgYGNi52rBp/ffvJwMDAwPDy82eGAAMNhmkHTjAyMTAwMDz99JVBnJeXgY2LHUVzi7AYigEweXFeXgaYa5mIcjMeADcAl7PRXYGuFqcLYBqVVVWJcwE2ANOMzRV4DUDXoKyqitMQFkK2S+jpIQTfviLeAJhmzsBACJuBgYHhxFEMNXAvwBIJzHZkzegAWS1WF0SeOMqwHGYrFDjOmo7VMBYGBkjaPn3vMYM4VJCNi50h8sRRDCcjJ2VLZWkGBgYqZCaKAQBmKUR8AiS33AAAAABJRU5ErkJggg==",
            name: "Vampirism",
            description: "You lose 25% maximum health, but can replenish health by drinking blood.\\nBlood doesn't affect satiation level and you no longer suffer from food poisoning.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Vampirism"
        },
        {
            id: "EXTRA_HP",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABC0lEQVR4nK2TsWoCQRCGvxNRolxjc4s2gTRWdgFbn0AszSOY54mCD2ArttdYCQd2FpImkEa5a2wWL9wVMUXcY911JWB+WHaYmf/bKWbhTnkq6I+6p/3u+CdTs1VnMY68AtAfdU/r2TuB7wNQqVWvGvM0AyCRkueXNotx5JUB9rsjge87jUqqHpw9AGWz6e3xiYYQiE6H3nTizCkVgEqtetH4MBiwBLZhaOV60wnfZ1/JNe7XfA5AQwgrp8sCHOKYeLMBKG491nMW4PXzw4Lo2oYhw2h1ewIdYk6majcBJkSda+YLgFoSE2LGZq+1By6ISyX43e1ESvI0syYxX87TjERKmq068A+f6W79AFragt/QMxkJAAAAAElFTkSuQmCC",
            name: "Extra Health (One-off)",
            description: "You gain 50% extra maximum health.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Extra_Health"
        },
        {
            id: "HEARTS_MORE_EXTRA_HP",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABL0lEQVR4nKWTP0tCURjGfyfkSsZtcPGCg0UNTRK4ONp2B8Hu2Be4g+19CPcM7pe4DUIXHXIJXKRwiAbDHARdGhSLXE5L53L/eCW4z3JenvM+P14474GUEqpo1qpytlz/K1Q8PKDdHwgf0KxV5f3LGwVdB0DLZbcGN18/ACxWKy7Pz2j3ByIDMFuuKeh6YlBJ3Rf+MgCZaNPt0Ql5w8Aol7lw7hI9JR+g5bKhxn3L4hF47XZjXhCylzTut+sCkDeMmBdUDPA5nzMfjQD8M1gHvRjg+uM9BgF4XiwoNho89HpcDZ52TxCEqHBJSjTLoiQlN8enuwFRSN22qXgeABXPo27b2wFqSaKQjuMwNE0AhqZJx3FCvYmvoCCtyZipEGxcl6kQtCbjUE/qVU79mVLrF2lMjqWJkDpIAAAAAElFTkSuQmCC",
            name: "Stronger Hearts",
            description: "Hearts bestow more maximum health.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Stronger_Hearts"
        },
        {
            id: "GLASS_CANNON",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNUlEQVR4nKWTsWrCUBSGv2SIVElXC50DWQqlU6bgli3tK2T1CXwQcXDJ3M1marZsZipCl0A2QbS4iBJFl3Q6t7GJpeCBwLnnnvt/fy7nwpWhSdLvOeViW/zr0P1th1GSagC6HJ7MMubrDeOhy6o4NH7joct8vWEyy+j3nFIJLLYFXdPEaLfwg5go9ABIs5w0ywGIQg8/iDHaLbqmibjVxdb7q68s+kFcs12tVXv1aoOQhd6Ui5OaQJWSZjmDwFX1QeAqkd/ulIDQo9DDsS2S6VI1JdMljm2d9UhoAM9PD+WqONT+W6iObdX27jo3vH18ajUHTeu/9i46SLNckav5RQen/bFGaooo9Djtj2p9Ngdyw01CUvOD+GwONPgZ5a5pAmC0W410IX/tdrw82oySVLv6MV0d34QbpRCSzmchAAAAAElFTkSuQmCC",
            name: "Glass Cannon",
            description: "Your spells are 5 times as powerful, but your maximum health becomes 50 and cannot be increased by normal hearts.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Glass_Cannon"
        },
        {
            id: "LOW_HP_DAMAGE_BOOST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABL0lEQVR4nKWTsYrCQBCGv01EQYlYZUkO3yNlHuFKn8HmqrQp0qayuccQH+HKg2ssr7rmMCFWQVBRAnuFt0tiluPAqXZnZ77/H5gVSikeiQGAEIJlHKnd4fivpqfphNe3d6GUugGWcaQ220+k57Gqa5JQWhvzouJlNuPj65tlHClAOAC7wxHpeQzHI5JQkhcVAFm5Jyv3pjkJJcPxCOl5aLeOpq/q2ijZHLRz7VqnXaCVtbrtrJ30AG2VrNyzbhqTXzeNgdy7MwCtnhcVaeCznYemaDsPSQO/U2MdwaZgc2gdoU29v//11nOg4ywEaeCTBj5nIaxOOoDr6dJTskVeVFxPlz6gvYE2kM4loezswQBuu71wXeQv+X6cNPCNS4CF6/I8nQAglFIPfSbx6Hf+AfJ2kz4WqSFiAAAAAElFTkSuQmCC",
            name: "Living on the Edge",
            description: "Your spells deal 3x damage when you're under 25 HP or 25% of maximum health.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Living_on_the_Edge"
        },
        {
            id: "RESPAWN",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGklEQVR4nK2TsWvCQBjFf5GSQCRzIJkLDg5ZCoEMnQMHrqFrO7n1LzjyF2Rz0rXc0kEIdM4gCIJ0cOhsMdBZLLSLXZojsYpSfdP37u69e3f3HZwJoyp6/XBbrjYniTy/zXgwNbRBrx9uZ09vuI4DgGlbe4Xfn18AfKzX3Nx1GA+mRgugXG1wHQfTtg6KpRLMl0tM28J1HKq0rVMiSyWIg2zvnDao7yyVQCqh+a64vvZPgm7kEQcZcZDRjTwAws71wXQNA6kEw1Gh+XBUIJXQRkcN/oOrOkmTnOdorlM83N+ymJSnGwAsJiUvr4+6PgZ9hKpJqiRpkmtefxGpRGPtZe7A89vMinfc38HdbkyTnJS82cq+D1zgM52NH9T7XiG1KJBBAAAAAElFTkSuQmCC",
            name: "Extra Life (One-off)",
            description: "Upon death you respawn with 100 health.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Extra_Life"
        },
        {
            id: "WORM_ATTRACTOR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABnUlEQVR4nKWTP0gCURzHP1ehcHJB0wlxDVlgSCBiYUgURNASaWsQ0tDQkE3S0tTW1NTQEEfQEiRFDUIEFlQHRgRhHPRnSCojKFMMarHBvDxTiPou78F7nw/f34MH/4xQ2kz1+wp32fyvoOZGG0txTTAEU/2+wuaZjixJAFhEa1Xw4+0dgMdcjoDbyVJcE+oA7rJ5ZEnCIlpNsDa+aFpL57IkUWpbV6tmrG2SzNHFD0llDEFl7aGrZQAyRxcA+FZnqHa3ZoNySTlcs0F5bF0RAAQlaEiy9R2ms5oCTb9EnU7jCK0g2ttxhFYMyNYVwe5ymiQNlYKewQiv9zrhgIp/VOHwJMWBSwXA7nJys7cNgFStgaZfcry7AIDfqxCOjuH3Kga0NttL68Awor3dYASAEU9n4fYpg0W0IihBAELdG/i9Xw0klXRSNzWQn2NsnZ4LP0Y43l0glZhndk9lPVqE0kmdh9Mi2DowTDqpw3Ps+w2aG20kblLIgKelhaa+OfKJCQQlyHWiOBL1HbzszwNz6DsRAm7n9wjw98/073wCK7mQQM7FhxsAAAAASUVORK5CYII=",
            name: "Worm Attractor",
            description: "Worms find you attractive.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Worm_Attractor"
        },
        {
            id: "RADAR_ENEMY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABU0lEQVR4nK2TPWvCUBSGH4u0tBKHSLiDkM3SQaGL4CSubv0DWRwdxaV06iAWlODk1sm9dJHQLdjFbt3aWXAIYgaDinawQ3qDIZEW7Dudeznvx7kfcCQSsqhXSrvpYvknUjadom+PE4FAvVLaPb9/IhQFgNOLs1jidrUBwPE8bq6v6NvjRBJgulgiFCVEnDVcANYfX/TyNTKqytx1MTtDxA8HIBnnNGu4aKYarDNlv86oaqT3RBbSfZ88a7hMqg53twMAjFE3MmIgEEfWTBXdErTaBgCDcpNJ1YlPcEhIkiUG5ebvAhKtthHElzBG3ZBorIBmqpGohxC6Bc1UQ7PP8/4h2i9vQY9u+/uRBPKR7LubnSG6JQB4PH8NSA/3T/EJAhdLhEdYX/pClWjvCfhv2/E8tqtNkES3BLol6OVrFIo5AArFHNvVBsfzyKZTwD98pqPxDdpRhm/aKTrnAAAAAElFTkSuQmCC",
            name: "Enemy Radar",
            description: "You can sense nearby enemies.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Enemy_Radar"
        },
        {
            id: "FOOD_CLOCK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMklEQVR4nK2TsUsCYRjGfydyRxefuNhRQhDBIU5uXgTh4l5Da20NziH0F7g1OrSIaxI0tLW4BEqLNMkNCsUV9i2iWNSQDXKi53ch2DO98L3P8/5eeD9YUZpfFHLO2BuMljIlY+uU6w1tGlDIOePbVhtLCAB001Aavz++AOgNhxxmUpTrDS0C4A1GWEKgm4bSnD21p8G6aWAJgU8bWQa5WXU5uTxQvkX9ImxyLDGZ8fb6jqr3T4Jm1SV+d8Tm1gYD+UP+PBVOoNJx6oK1swc+r/bZBp6zN8sFFJ0KAJl8mta1TRd3ShTUwgpFp0LCSpDJp/GeJAA7cTuUUkkgexJ5L0NNSgL/SLr9Rcxu36XWLhHsnQvwVWuX5kKC5qCiMLntx84L1kyISrOnvLebBP7hM62sX78bakWjsANEAAAAAElFTkSuQmCC",
            name: "Eat Your Vegetables",
            description: "You inflict more damage the more satiated you are, but you start losing health if your stomach is empty.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Eat_Your_Vegetables"
        },
        {
            id: "IRON_STOMACH",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDUlEQVR4nKWTr47CQBCHvxICOZpiK3iBM21qkbzBvQIahz5Uz2DqEIdpggRzb4DENmA2QSNq2dCkNXvi6Kbl2kLSn5rZnW/+bHYMpRRt1M2N2WSsLtfbS9BoaLLaHwwAQynFbDJWP5HAtiwAeoN+JZglKQCxlHx476z2B6MLcLnesC2rFlyuNwAIcSYMfOw7UxqhTsv1ht12p/3pfMH316f2dYJi9bwiUIKrYv91UKzouN6zBuk8Hghx1vbpGOG4XmOip29wOkbadlyPMPCbO6hTFfxygjoYCiNkSUpv0CcMfKbzRSnoEc6SFMy3coImoEkd+PvbsZRkSaq/a5Xy+1hKRkMTuO8CtFymNvoFT2lvTDHrr+cAAAAASUVORK5CYII=",
            name: "Iron Stomach",
            description: "You no longer suffer from negative effects of eating.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Iron_Stomach"
        },
        {
            id: "WAND_RADAR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABZElEQVR4nK2TsUsCURzHP2elpZzQoTzqUoKCaom2bHN1a2p2E9zyX2i3KcHNualN2hyFlmipICK8LB7KBR5a2mCDvcvLKwL7Tu/B+35+3+97PJhSmlrk06lhs9P9k8mMRijV6poLyKdTw7PLG4SuAxAMhzwGS7Y5vnrmcHsJoetIx2F/Z5NSra4FAJqdLkLXCYZDrrlVsGlkJJZs03yxAVg+vUM6DkLXUWkDfhFbBZt40SBZFSREDHPRAODpYJ2EiHnOuoDxyfHiyKASGLkKRyfnGLkKlmx7KnoSjJtbBRutMoORq2CXswDY5awLUZr9rQICrE+zkl3Oemr43sG4vnfu7b559r6AeNGgkZG+wIWtuZ8B8aJBqzB6smRV0MhIblcfPYZkVfgDBr3+xPRkVbDxsDKRQp2FHy5RTQd4vX4nLOd967gAMxrh4t5ChQuGQ56oFl/PNuj1kY7D3poJ/MNnmlofGsKIpG2rkaAAAAAASUVORK5CYII=",
            name: "Wand Radar",
            description: "You can sense nearby wands.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Wand_Radar"
        },
        {
            id: "ITEM_RADAR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABL0lEQVR4nK2TPWvCUBiFn1RRUOIQGu4gvXOn0NHR1a1/oLPg6A/J6OzarWDQ1VHoUlzaqUOCQ1AcFC3awQ7te0n0Wgr2TC/hnuec+xG4UI4MnWbjMFtt/mSq16r0xhPHADrNxuHp5Q3lugCUKmWrcb/dAZCu19zf3dIbT5wiwGy1QbluzjjvLgH4eP3E6RfM9xt1jfrxAFzZkubdJX7o4YceeqQAeBwMrK0MQNLFLHPcSgGIoojjtScNjs3ZBlprAAO0AmygJF3w0G6bbWTP4yxAJGatNUEQGEiSLn4H+KF3UnU6nVpDcgA/9Mz1yd6TJCGO47OQogz77Y5SpWzSBSAQkcBOAFnpkSJupTj9AuPh0Fo9B6jXqjy/J0hmqVL+bqDyi7NPuV6rAv/wM12sLxLmgJHrk4xWAAAAAElFTkSuQmCC",
            name: "Item Radar",
            description: "You can sense nearby items.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Item_Radar"
        },
        {
            id: "MOON_RADAR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABrElEQVR4nK2TMUsjURSFv8QkZiZksgTHwShpbIKwYrcj6hi0GIKNgoW/wTI/JKW9yyILurjNEgSFiIIBmy2E3WqLqJExGnDCmEkmUQvN6GhWBL3V471zvncf9zx4Z/k6i+W0entqWm8yDUoRVgpFnwtYTqu3P3//RYlGAQiJvV2NzesGAEatxvxYipVC0RcAODUtlGjUY6xkqwDU/zgAJPOKe648eAAC3W6qZKvIubhnr5QxSOaVF1oX0KE/NVeyVdTtGQRRYMz001JvOCoeeDr1dPDcrO3pTOkastxHvWZjNxp8iknsb225Hv//nqBuzzCV1jArl4yOfqaHNiOpFJo2zaSuvw4AEEQBWe5jYWmRRGKAL+MTXBhlEgMJYpL0OkDOxQn0+AmHw1xf1QFQhvqZndOJRCKEgsHuADkXd8fXat9g2zaWZWGcnLsaMSbQdJyXgE5I5FycUsbgqHjA7k6Besum7W9jmibl8hmb3zfYXP3mArrmIJlXKGUM1vgKPyAmSYSCQZqOw6/1dY82APfZPvx3TCcmIbHXDc0+jyN7GuXx4UHgAz7Tu+sO6sWef5RDcTIAAAAASUVORK5CYII=",
            name: "Moon Radar",
            description: "You can sense lunar energy.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Moon_Radar"
        },
        {
            id: "MAP",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOUlEQVR4nK2Tv0sCYRjHP4YoKCdxcLyUcA4WNEVuNgSuksMN/RU6BEf9FcqBi39Fg4Ph6ijV0GZIJBoOIjgoFtVgS+/bHfdmgX2n5358Pu/zcM/BhonIolzIr8bz5Z+gdCpJo9ONKEG5kF817x8QhgFALBHXgu8vbwBMFgucowManW4kCjCeLxGGEQCn7gyA194HAHZbqOfiiwGI6k6aujMszwzcGxUn2G0RendLFtLuh6fujFFxojqQtb9TJdDBlmcGQH+tFfw0gg5cK9DlpnKnZL8KLM9UXwHgqnXNWemU84vL9R34QTmChAHqtSolx9EL5JJYnqnm9cMyrWaTHbGrrgN7YGcyHOZyZPf2OakUQrDMcDDAtra/BelUktunZ+j1eez1iSXi1GvVEOhf5eNsGviHn2njfAJgen1Uy3TSfAAAAABJRU5ErkJggg==",
            name: "Spatial Awareness",
            description: "If you stop for a moment, you can sense your location relative to the Mountain.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Spatial_Awareness"
        },
        {
            id: "PROTECTION_FIRE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSElEQVR4nK2TsUtCURTGf4YoKk9oEIUHbyiSJqlcbCkRRNxeNDS7+he0PZxqbHJ1bojcHhGENQlhRVMkOLyeoTgEikUtNr3LfS+1wM507znf953vXM6FBcPnHMrZzKQ7HP+JpEYjVBtNnxAoZzOT+sMTcUUBIBAOTiV+vX8C0B+N0DfWqTaaPj9Adzgmriis7B8TS2iCcF8rAbBZqoncoGfB2SGOW7/cIZbQaN2ci7tWrAC4cumdPToSRwh4bdfXLtGfp7+BjF2aDoHlrZQQmhf+ecXrgz6QgvZsjMvBoGe5iqFCjlAh53LhxbgEbNNAS6YBeLt7FHlnHC2ZxjaN2QJy6O08r0cnfFxcsXsa/30EZ0lkF3o7L8hydwcLMx7RNg20YkUs1aBn/bDuElCjEW47LzhGA+Egtmlge8DyKm+vqsA/fKaF4xt2yHEHZOtrzwAAAABJRU5ErkJggg==",
            name: "Fire Immunity",
            description: "You take no damage from fire.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Fire_Immunity"
        },
        {
            id: "PROTECTION_RADIOACTIVITY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABaElEQVR4nK2TP0gCcRzFP0YkWCctonB0QYVFQxQu1lCttlS0BNHgqBCtLXHc5h7U2BTYENWSa7QUxFE0ZEUEXicYEkGeQS22+Ptx/sEEe9P9vrz3fu8d3x90CI/4SM5HK/nPclsi1d/L7vmVRxok56OVk9sHgooCQI/P21T48/UNwFupxNLkGLvnV55ugPxnmaCiMLSSIhDSpOBmPw7AVHxfzooFC462EGm73TcEQhrmxbE8azEDoGYWmV3mxaWRBvWxE4bD+IjDxtpjQxU3t6tZ14ThcHn6ykT/CjsHo80orQ1y2Xes7Aeb2+vcP5vtGxQLFgBn6UGiiyrTiwMcpu5IGI5MIjgCNT/RzuhoMQPryeQsPVidzpDL5gATLTyHndH/riCwsJqTifb0vtYVxJLYGR0tHJFCAS0ckbcLbkOF+ipiqYoFqyF6jYHq7+X65ZVgddjj82JndOw6snuVp4dV4B8eU8f4BetKhArrzsghAAAAAElFTkSuQmCC",
            name: "Toxic Immunity",
            description: "You take no damage from toxic sludge and other toxic things.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Toxic_Immunity"
        },
        {
            id: "PROTECTION_EXPLOSION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABiElEQVR4nK2TsUtCURTGf4YYJdqSvAfCHQqksaihhqApsAiK9wdEjdHgWEsPC7J/IJei6A941KJvjRKUUmqMhojXC4pESDGppYa6F02LwM507rnf953vnnsvtBkemSxNjL7fl6t/IoWDfpLHOY8SWJoYfT+6vEILBADwdXe2JL69vALwWKkwOzhA8jjn8QLcl6togQB9xhYhXSjCxf4CAEML+6r29OCAtYJ0663vENIFhZNDtRbROICqWUaKTXa5qeN0yETatoyU2nSuCzjXBQDSiRKGNd10RCUgQ4LSiRJ72oHKa/lsy7k0CQDsaQfU8ln02Axnh8vU8lkMa1oJ/ijw9OAAsPg4z3OmSO/AGgBdI2OqLjEtBVzbRESGAdBjMxSv1gGo5bOkEyVEZBjXNhsEGm5Bxs7kKVOr4wBYRvRzLhaIyC8zkI/EtU02bmMK8JwpAjR0l9gfHbi2iYjGCemCbeYQPU6T9QaBcNDP+c0d2lfR192Ja5u438D1T3msPwz8w2dqOz4AwhuUNnrS1cQAAAAASUVORK5CYII=",
            name: "Explosion Immunity",
            description: "You take no direct damage from explosions.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Explosion_Immunity"
        },
        {
            id: "PROTECTION_MELEE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABR0lEQVR4nK2TMUgCYRTHfyemoJxDYArCDQUStBQHYUPiKhEUQburYy5t6tZio6t7EAURrmKLFEctQTg4XCdYBw2KQTXY0n183l0h2H963/ve///+7+N9MCcUJyjmMpP+cDwTKRWLUm91FCFQzGUmlw9PJFQVgFAk7Ev8fP8A4GU0Ym99lXqrowQB+sMxCVVl+eCEeFIThPtGAYCNQkPk7IEJ58c4boNyh3hSw2hfiLOWrwJM5fTsPj2JE3ACP9tm18DsGgDcXtfwqw14WD44uqqxuVPyvftVoLT9Jsinu/5kcL2BPTBFXLtZpF35IusiyzUeB1azjJbWAThceyVbWRBOALS0jtUszzbC2eOScPIXhICzJLILGXJ3pxZcbzA1Sr4qlsoemB7rUwKpWJS73jOJn2QoEsZqlrFcxfIqb62kgH/4THPjG7qHdAUW2cbeAAAAAElFTkSuQmCC",
            name: "Melee Immunity",
            description: "You take no damage from close-range enemy attacks.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Melee_Immunity"
        },
        {
            id: "PROTECTION_ELECTRICITY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABgklEQVR4nK2TPUiCQRjHf0ooKbqFgvEiFdJYCS+1iKuIUBYoSYOrY+/SJm4tr6NrU/Aa9AEirdUURtQYDSFmYbglCjpog93hVxLUs9zdw/3/93ueu4M/hklMUsH13ttn81cij9NO7urWJA1SwfXexeMTLocDAIvNOlHYabUB+Gg02FxZJnd1a5oBePts4nI4WNg+ZM6tSMHDURKA1eSRzNVrFTg9QNDODJ4w51a4vzmXayWUARjK+QNbvAxozGIisL3xGPsFHYDK8z07+i4ApaKONx4bK1EaiCgbebIRTZpkIxqloo4a1igb+bG+jBkI4dlxif2CTqmoY3SRdFMN6rUK2YiGNx4jmlCJm8HoIonKRr7fxJ8MqpdpFJ+faEIlG9Ewun0SQaT4/FQv09NLEHWL8WRPlb2ZFPIaO602Fpu1TxHKYF5bIppQUcN9s8HTO6022GeHDUZLmSfD9XsHf2CLeq0yhj5E4HHauXt5xfWdFCTVkc2DT3lj0QP8w2f6c3wBPEqW+fFlrCgAAAAASUVORK5CYII=",
            name: "Electricity Immunity",
            description: "You take no damage from electric shocks.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Electricity_Immunity"
        },
        {
            id: "TELEPORTITIS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABE0lEQVR4nGNgoBAwwhhZDhb/n376SpQmaT5uhmkHTjDCDchysPi/4cINBnFeXgYGBgYGNi52rBp/ffvJwMDAwPDy82eGAAMNhmkHTjCyMDAwMDz99JVBnJcXp0YYgMmLQ/UwMDAwMGFTGJWYhMI/ceM2TkPhBhCyHZtLGBigYeBvpPtf08aeQVJKCkVhXnklhmYLDVUGBgYGBgluToaN5y4zwl0gKSXFsGz+PBTNMMXImtG9Azfg+bNnKBKTOtuxOh/dUKyBiOwSbJoIGkAKgBvw48s3ojXBEhQDA1IsPHr9geio/PXtJ4OcqAAiFqT5uBlefv7M8OvbTxTTsWn89e0nw8vPnxmk+bgRLmBgID8zUQwAswZbuHiclkMAAAAASUVORK5CYII=",
            name: "Teleportitis",
            description: "You take 20% less damage. You teleport away every time you're hurt.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Teleportitis"
        },
        {
            id: "TELEPORTITIS_DODGE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLUlEQVR4nKWTv0rDUBSHv1uKgqXFoaZDIVuhUwe7ZOzcKd3ER+hziKubr2EmdREcC6KIU6Eg0hKxoVBoaCRZjkPNbVPbEMxZLuffd3/nco8SEfJYEUApRb9jibtYZmqqV0pcPw6UiKwA/Y4lzuuQWrnMy3iM1WzsbIyCEICn9wn9jiWAKgK4iyXufK4LB8MRwB/QwdEhALXfHoBCnDw1zUSx1WxoUJppgH1+lkh07d7eUWIlCcCtcwPA1eWF9rt2L7uCqmEkElXD0NBMgJnnAfBwf6f9bWgqANby43PmeQyGo9THLG4HYiW7bBNkt1sAKBHBbrfka/lN1TC09DRQFISYJ8c4z2+qsBn8jxVg9benvs/nx4QoCPfeHgUhURAy9X3qldJ6hDzLpPKu8w+vMomHZnWUaAAAAABJRU5ErkJggg==",
            name: "Teleportitis Dodge",
            description: "You teleport a short distance away when an enemy projectile is near.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Teleportitis_Dodge"
        },
        {
            id: "STAINLESS_ARMOUR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSklEQVR4nK2Tv0rDUBjFf5H+wYbUscYaBSeXgEiRgkM7uVZfwAfoUhBfwVVwKb6FdnVqwUIRUaGLa23a2DENrbQZ4lDvNWlTEOqZbvKd8+M74QZWlCIO5WLe7w1Hfwpl0yrVekuRgHIx79+/vZPRNAASqWRkcDqeADBwXU4P9qnWW0oMoDcckdG0pUEhMc/8ZABiQcPR+SW6oVPImVycnYTC13cPNJ7b2F2bx9sr+V4CEqkkluMBNo1AAKCQM2XYcrzQpgpA6dD0P0dfAGyVKmxvxAHQDR0Au2sDYDke/doNAJvqOrWXthKqAMwMpQoAzXYTgN0d43c2pwUAQOejGwqK53iENxJwbO7J9YP9n14XvWtRAMvxZO/gx4uSBIhLArOuAiLCwf5Bb2QFAekvG85vkE2rDFyX6XgSos9LzAeuSzatAv/wM62sb80Im22RLQZlAAAAAElFTkSuQmCC",
            name: "Stainless Armour",
            description: "You take 50% less damage as long as you have no active stain status effect.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Stainless_Armour"
        },
        {
            id: "EDIT_WANDS_EVERYWHERE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABB0lEQVR4nK2TMUvDQBiGn9OiaEjWCNmEgosgnTKFjm76H9wKLp0z9h8I/QGOTu3cpXTKVIQsxQwVtGDWHokkUOLihVaSeNA+yx3cve/3fsd3sCdCbXpdt1itEy2RYxkMp4EoDXpdtxi9LrBNE4CT89NKYZ5mAMRScn9zxXAaiBbAap1gm2atUKHO7V8NwJFW5gZKg/+qVyXRStAezPQS1BH5XmkSLN6aDdqDGa2HZz4vb3fW5fKd/iTk5SOjPwl3DATAXee6+Eq+G9uIfI/NU8DxowvAhXHGeB4KrTeIfA+gFFe2oIbkL0q8zfbdw8yBYxnEUpKnWW0SVTlPM2IpcSwDOMBn2psf7ApiO5lCyv8AAAAASUVORK5CYII=",
            name: "Tinker With Wands Everywhere",
            description: "A divine blessing allows you to tinker with wands everywhere.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Tinker_with_Wands_Everywhere"
        },
        {
            id: "NO_WAND_EDITING",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMUlEQVR4nKWTP0vDUBTFf0+KgiWdAm+Ik+Loni4hi+DWb+AH6KRCtyyCW8CAQze/gC66CS6iDkIXwaUQSIXYoeDUUqEiPAd9jzRpqpC7vH/nnHsu9z6hlKJK1ACEELR9Vw3H03+RnEad7t2TUEr9CLR9V10995GWBcDq+tpC4ufHDIBektL2XQWIGsBwPEVaVilRh36XvxxTQllEtjT7w/fRQowRyGePbDlHyp6z2JW/Mm+f3BsH2ftSgWymyJbEgWdEmo8PBZE5AQ1829yj0wqNyGDwytHtCxfpbLmDOPAA2Ehu+DrfN07C6w6nuzuE/eKcFErI19o9uDROzo5bhW4YAT0keZE48AxJr1ls6RzknSydA6dRp5ekaLjuc56kM48mE5pbDgBCKVXpM4mq3/kbjq2Hshr0fvcAAAAASUVORK5CYII=",
            name: "No Wand Tinkering",
            description: "Wands cannot be tinkered with, but enemies may drop blood money.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/No_Wand_Tinkering"
        },
        {
            id: "WAND_EXPERIMENTER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABK0lEQVR4nK2TMUvDUBSFv1RpoOWFbhm6uEQ6OkkGCVW3TtJF6E8ouDh0ypgpo0J/gjgVpy6ilk4hi4JLsYtLh2yljxYSkDrICykNWlrPdB/3nu8eHu/BjtJU0a7by8lsvpGpapTpDgItBbTr9vLhbYQpBADFkg5AxdeZduLUmCx+6khKLo5qdAeBVgCYzOaYQlAs6akZ4Kx+vrJZ9U0hUGkLeRErvk4zbHBpnNAMG1R8PW8MgP0sXWnaienRhxB6x/01U3Y2N4HS8+Dpt/bfgOwFbgW4fnzfHhCMPgD4ug22A9i1QwD2ruzNAOqRKFnekJv7VyxvuGbKzuYmsLwhY9fh8+WOsevkQlYAVaNMJCXJIiZZxIxdB4CD0xZAelb9SEqqRhn4h8+0s74BVL9lWskXXasAAAAASUVORK5CYII=",
            name: "Wand Experimenter",
            description: "Firing newly found and unmodified wands heals you.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Wand_Experimenter"
        },
        {
            id: "ADVENTURER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABW0lEQVR4nK2TMUsCYRjHfxeSlJy3SAYKp1QQTr246HbcEm0ODU0RFAR+gT5DX0AImpoaGtqioeNwye0iSNr0QCEzgjw0dbGlO7zTg8D+0/PyPP8f/+flfWFBSW5R1gqTdq//J1MqHqNi1iQPUNYKk9unV5KyDMDyanSucTwYAdBxHEo721TMmhQBaPf6JGU51OjK7Sd/PQBLYcNC09k/OfXq0tExQtNn5iJBelEoDJU8lmlgmQZC06nWP3Gqz+wdniE0sEzDA8wkGCp5Wi8P3lnNZHE+WgDcXZ2jZrK+eR9AaDqWadDtShSFAoDdbCAn0gDIiTR2szF/BYCNzS0v3qP1RVEoqNE65HKomTx2s+GLPwO4ubzwNdW1Fez3byzLwAruGnYHrg5217m+f/OShMkDuI9k2uwqCJmenZtg2jwNCU2QisfoOA7jwchHD8rtdxyHVDwG/MNnWlg/gzmGWpm/DXkAAAAASUVORK5CYII=",
            name: "Healthy Exploration",
            description: "Every time you visit a new area, you regain 60 health.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Healthy_Exploration"
        },
        {
            id: "ABILITY_ACTIONS_MATERIALIZED",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABWklEQVR4nK2TsUsCYRjGf4qonWghSKESoUtBkJNc2w0SuNXm0tQm+NcI/gMtbrkZ4WDQIEHQ0BCEh0QnSKDo1x2eiw1xp+edEdgzfe/3fO/7PO/L+8GG8FmHsiLPtYn+p6RULEKt3fHZBcqKPG88v7IbjQIQlEKeiTPDBGAgBOe5Q2rtji8AoE10Lk9zaMIgFZUwpiZSOPRr/D7+AiBgVb976XJ2nKWtftiKSibtGc8Mk/3EDgB+iwxKIYyp6bC8Ll5uMbD8QAoviHq5AIDeV7lqqC7eVUDJpNGEgZJJL5SP4Pp2Rj6ZsGdg8a4ZWL2+fQ4XyjWVerVAqdKyFS1+L7LlnMEqLNulSot6teDgLop57xmsQ6nSIi4XATjx97hpProdWEvihbhcJHmQBeBhtO14u7aFVfR7XcR45Lr3w89uD4RgZpieToadpp2sP90zEIJULAL8w2faGN89AaBN4Yhu4gAAAABJRU5ErkJggg==",
            name: "Bombs Materialized",
            description: "Bomb-like spells can be placed in the ITEMS space in inventory and used like throwable items.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Bombs_Materialized"
        },
        {
            id: "PROJECTILE_HOMING",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABB0lEQVR4nK2TsWqDUBSGP4skENHVQQqdSgaHjo5ZCxnyCM6hj1My+wgdBNeMjh0yhE6BkME1txF0SZacy9XcSCH9F8+F8//3O0eFB+VIsZwl58Px9CdTFHis1qWjA5az5Pz1vSX0fQBGkzHZ+5y0yDvGtm4AqJRi8TZltS4dF+BwPBH6PqPJmM/nF22Q+mO/08EA4dUD8GRDFIM8h+RKIdgAWRyTFvnN2ewVdQjSIud3s9Fm81xuf6wE1hFkdnMfyfQV4CbIpSeZO4tj6w4kyEpgpvdf4b2+TsA9zCEKHSAfiQ2zf7vZa13iEIV1B1HgUSlFWzc6vT+O3NzWDZVSRIEH/MPP9LAuNA98R594NKUAAAAASUVORK5CYII=",
            name: "Homing Shots",
            description: "Your spells home towards enemies very slightly.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Homing_Shots"
        },
        {
            id: "PROJECTILE_HOMING_SHOOTER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNElEQVR4nK2TMUvDUBSFvxZpMSFdU+jUQCGLIHQwY2cH6dTVrPYXdHXzF3TOqlNBcO4i1CHipIVCAoWAb+0zgWSpg75QmgQL9Uz3cd8995zDe3AkaqoYD5xttIkPGuq0dKbzRS0nGA+c7extiWkYADS0ZmHo8uyW2csEACElw3Ob6XxRqwNEmxjTMGhozcrh59Ujw4s7GloT0zBQauuHSBZxyPvaR8RhoZcTlG1WMPUuV841pt4t3K1UsFiuAOhbbk6ye1Y4KRt07B6O3aNvufiBx2jUzvtPD5/0LZdI3JcTOHYvr/3AA+Dr4wbgNwMPP/Bo66dFC0r2PkQclgZYINjdrrDvuTKDLEl5Xa8LJMrGLrIkhTILZQr+Qh1+3raQkixJK3NQm7MkRUhJp6UD//CZjsY35bxx+wIdxDQAAAAASUVORK5CYII=",
            name: "Boomerang Spells",
            description: "Your spells arc towards you, but gain extra speed and deal extra damage.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Boomerang_Spells"
        },
        {
            id: "UNLIMITED_SPELLS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFUlEQVR4nKWTv0vDQBTHP1dDCw3JmiGbEMnifpNkEfxbAi7Ojp0dFNzcHR0FF+kUcFBwCQZctEPXhgYSlOegCSG51kC/0/HufX+8454SEXaBBaCUIo60LFbrQSTftbl+TJSI/ArEkZa7lxTPcQAYTydGYlWUADy9fxBHWgBlASxWazzHYTydkKQZADoMGmK35v1xAEZthyTN0GGADoOGZKq10Qh0Y9eEdhJT76h320ljcm3DMrnW5021jQLdprOHVy6OD43EASO8AfB9lWwZYIuADg8A2DvVwwTqT1IjmM25vH0mmM17pHZv7w1qZOdHfO6f8HVz/38C37VZ5jlVUfaSdJ2romSZ5/iuDYASkZ2WSe26zj+2b3zB16RgtwAAAABJRU5ErkJggg==",
            name: "Unlimited Spells",
            description: "Most spells are now unlimited.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Unlimited_Spells"
        },
        {
            id: "FREEZE_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFElEQVR4nK2TsUrDUBSGv4gkYHozuHTIFhBKDZgKgYx9AAW3zh1T8Dl8AKHgI3QTfIGO3exicXLrkLW3DSRLnU5ITFIC9V/uudzzf/c/cC+cKUOK2Tg6bneHTibXsZkvV0YBmI2j4/v6m75SAJhXVqMxTzMAEq15CgbMlyvjEmC7O9BXiuePLxabPQCTYa8GWGz2TIY9Xh9vkbQX5Ya3yX3NGHhmxSx7UQGQ2IFnNja+PFwDEId+ZcRKAoD1T16Yy2sc+kzvVG2sGkA0UhZx6Bd1m2qAwDMrhpGyiAY33QFyq+hTZ0XdBGodQZpPxa8A5JF0Ubm3NcHfJCcTuI5NojV5mpGnWatJzhOtcR0b+IfPdLZ+AZiAV4qgYKt2AAAAAElFTkSuQmCC",
            name: "Freeze Field",
            description: "Liquids freeze in your presence.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Freeze_Field"
        },
        {
            id: "FIRE_GAS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEklEQVR4nK2TvWoCQRSFv1VRVllBmy22tLGSYBPt1Ebtgo/hI/gA1lY+hqRbu1gaAkGsrGzEwmYFxUgCizbOMLs7/oA51eXOPeeeO3cGnoQhgm6tclrvDg+RnGyG4WRqSIFurXJ6ny2wLQuAZDqlJf79/AKw2e95eykynEyNBMB6d8C2rACxnY8HyK7ny3P7wgFI6Dq183Fcz7+bA4iJQKiLwlHLjDgQrlSnMbVI7ZIrlwACQqqIViCMj96rFLqGmwJms4HZbETGeUhg+z2X8S0XgS2IGV3PpzM+MmJArlyi3v8E9JuQDsQjUS+qMz5qyaI24iDsJJy7OoKTzfC1XGFfksl0SktQn3K14AD/8Jmexhkyfm55+9BQQwAAAABJRU5ErkJggg==",
            name: "Gas fire",
            description: "Gases near you ignite automatically.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Gas_Fire"
        },
        {
            id: "DISSOLVE_POWDERS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABW0lEQVR4nK2TMUgCURjHf0ooeZy0KfcExeEQbqnNgkATIZqCpmjrnIS2ZqXmZidti9a2hojERbdchHAIB+/ITTwUdLHpjivvQrBvee/je///+/F978GGEbA35Vx2aUyma4lEVKLW7AQcg3Iuu3zqfhCTZQBCkbCncDGbAzCyLE53M9SanUAQwJhMickyoUjYU3z/cO0YhyJhYrKMTRtcB/ny4s635hh43VzSC565+6wvQaWq/8iLeY1649Wf4LfYHA5QEimKeQ2Al7ceAJoq/jYo5jXM4YCDoz3M4WBF1Osb/gaaKkim4wA81p9REimS6Thn58cOib3aseVOen0DRexgGmP2DzO0Wx1MY4wivjCNMZWqzu1Nw9tgMZtTvjpxGuVG7fUNSnqBdquDpgreu58gba8SuLusqcIx8ZuA0wMRlRhZFovZ3HmubgJ7AnZ9ZFmIqAT8w2faOL4BgGODwZKvlioAAAAASUVORK5CYII=",
            name: "Dissolve Powders",
            description: "Sand and other soft, powdery materials dissolve quickly in your presence.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Dissolve_Powders"
        },
        {
            id: "BLEED_SLIME",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABb0lEQVR4nK2Tv0tCURiGH0MyknPjQqFwh4hAoqWgwUKktsiGwsm5sa2tLfwL2oIW54KwGroRLUZY3kEogoiWcLiQFEgeFK+LDeXhXn9EUC8czgfnvM/3HvgO/FG+drG5NN+yq7VfmQwtyF6u4FOAzaX51sndEyEhABgcDvQ0NusOAGUpWZ+dYi9X8PkB7GqNkBB9jauJOQLaEE61wZlZJPTtARjoFzMTMVUd0IY8u1v+dtHZfeM5QSZiUtIFvMDDxDa3V49ddz0JLqL3ngSGbjBekYxXJLWPURYWp7sSeADL1gzLK2vsRK8p6QK7YgNwOLlPcOQdgGQq1h+QTMW4OD8lbcXVM0q68BiyB3kPRAFWE3NkD/LqIG3FyURM0lZcde8lBTgzi573txMAyNc3tQCcaqMb0B4St9Gty9yzqo+PbroBndpyzcFPGoCv2S5LSbPuqCS73ymSqRgiPAaACI/RrDuUpcTQgsA/fKY/6xPS0IVN+WQkawAAAABJRU5ErkJggg==",
            name: "Slime Blood",
            description: "You bleed slime, but slime no longer slows you down and you have higher projectile resistance.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Slime_Blood"
        },
        {
            id: "BLEED_OIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABgUlEQVR4nK2TMUtCURiGnxtRlChkmJVLiEFkQgSCbm4Nyq3JrT8g0SA4iFNDGAgNEW5NNjVEhQ7ScjcNIYIQJMRNzEIHLxq62FAevN6EwN7lfJxz3u99PjgHJpQ0KEI+T7/aav/JZDMZSCp5STQI+Tz92+cSVqMRgJn52V+NvU4XgLqqsr+9QVLJS9MA1VYbq9E41hiO+Fk0m2k0m5wlMlh/PABT4zDloCzqRbNZsw5LNBhNv7++Rw7KeH1uLq9yAFycp3V3NQTDqXJQxrG2imVphS3nJulsicOjgI5AAtjbcfXf2p8A2J0OrJYFACxLKwB8vNcI7G4IUyyaYtkwx93Ti6QhOIkfUCmWySkFMcbHe02TGIumOIkf6EcIR/zEoilxkFMKeH1uckpBkz6q6UFxlsiITbvToSFRso8aU6PZ1BMMHglApVjWJT0or6I+Pb7RNxiV3ekYiz2sKfh+23VVpdfpCpIBRTjix+VeB8DlXqfX6VJXVWwmA/APn2lifQHRlIQ+2Is3SwAAAABJRU5ErkJggg==",
            name: "Oil Blood",
            description: "You bleed flammable oil, but are immune to fire.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Oil_Blood"
        },
        {
            id: "BLEED_GAS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABc0lEQVR4nK2TsUsCURzHP0oUFDjcDXfgIERCIkIEoeEi5BI2RGMgQWNEg+AQTUFlIDiEOLq0N+UQJRxBpH+ACA0HBcLdcDd0KOlig91DOYTIPsv78vj9vu/7e7wHM+JzxVEqMex8dn/VFAwsUdEaPmFwlEoMv7bDyKoEgGXYGO8m0XhEaKuuM+j1ATAdh921VSpawzcH0Pns8lHWSF/siVPUkEKr2QbgYD2CnE5i2TalYg3lpwfAPx6t1WxjGTayKmG8m2JflqSJdRxhML+4gFXXR3ENm2g8IorOTm8BKN/ci1qPgYtV18VdqCEFNaQgby1Tenrh+GRnegKX6OEmz1c1LMMGEKPk0kkALgvZ6QaXhSyt6isAreqraFZDysQ44ybCIJfPiFnHx7HqOvvhFU90lzlXlIq1qUXaQ3PS2La9CdxHMo1H7U3o6/M7r8Ff8cPobZuOw6DX9yTJ5TPENsIAxDbCDHp9TMchGFgC/uEzzcw3HfCTR4juNlwAAAAASUVORK5CYII=",
            name: "Gas Blood",
            description: "You bleed flammable gas instead of blood.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Gas_Blood"
        },
        {
            id: "SHIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABCklEQVR4nM2Tv0rDUBjFf5H+wcZ0kwwZXQy5UJdAXErfID5Hlz5Llj6HfYPiFMhi4YY6uUgH19YGkg51qPdCcoModfBMl49zfvfA/S6cKUsdppPouNnufxTyhjbzZWppwHQSHR+fX3AdB4DeoN8arIoSgPfdjoe7W+bL1OoAbLZ7XMfRwTCRrYBsJgBwvzIAnaZJhXO5rs0D4RMmUkOUNKA36OuwTJ84rBY1o/yIEdHYgFw0G+RybYQBDquF0aoV8Fv9Q0AgfLqj2DB2RzGB8I25foWqKMlmgjCRiGhMfnVtgOG0C1VRgn1ZBygpSNttzR3QAG9ok72+4X5jVC3htMr3Nx7wB5/pbH0CwH1fso4XpAwAAAAASUVORK5CYII=",
            name: "Permanent Shield",
            description: "You gain a small, permanent shield.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Permanent_Shield"
        },
        {
            id: "REVENGE_EXPLOSION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABO0lEQVR4nK2TMWvCQBiGH6UoRCJ0yuAc6NguJTg5OCp0KZlKx4A/okN/hHBjcQpZCmZ0cApHlnQsZHZwEgwK7WKHeolnEijYm7673Pu873e5gwtHQxWTgXNYbXd/EvW6HaZL2cgBk4FzeP/4xDJNAFpGu1L4vf8CYJ1lPNzeMF3KRhNgtd1hmSa+e62JpRhqgJbRpmW0sUwTlbZ5uuFpvi+5zsZGLVADKGeZBMXXe68QJwGOtyi1qCUAcO4ekUmgOZ/WtQm0iLHAfn0DwB7187qU8BygIqZhVGojfXnOE9YClIM96lfGrWql8gzSMIJYFIuxqIXmAHVJpBgWvzMWEAvSMCINoxyi9gJcnUdU5+B4C6QY5nMA5gtmYwPXLwBN+L3b6yzD9TcaXRMfnV1/wzrL6HU7wD88povHDw3ie8Kdreh4AAAAAElFTkSuQmCC",
            name: "Revenge Explosion",
            description: "You release a magical explosion upon taking damage, and gain 25% resistance against explosions.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Revenge_Explosion"
        },
        {
            id: "REVENGE_TENTACLE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJElEQVR4nK2TsWrCUBSGP4MoNcQ1JSZ7x+IUcEnXDtIXcHLLOzj5Dm6Z8gIlL2CGBpxCx7oUtLXg0MWLgWSxQ73BJCoW+0/3cs7/nf/AvXClavLgOvZutdleZOq0VSbhrJYDXMfePb++oWsaAI1Wk64zzA1x6AGQJSkAayF4ur9jEs5qdYDVZouuaRWjVNcZEocejVYTAH3vAVDKjQCmZbBYzjEtA9MyCrWycoD96AKwWM4B+H5/IfDHBP64ApG9APVDmpwY+OPCFHnvD0awX+dWvakComhKr/dwNOoh6OgKQG7uD0YnIScBcejx+fGVJ7kUUkggIefWOAmQj0TqXIrDXqVc/GsKBX7f9loIsiQt0KNoWpmcJSlrIei0VeAfPtPV+gFoJnjpcW2rcAAAAABJRU5ErkJggg==",
            name: "Revenge Tentacle",
            description: "You summon a monstrous tentacle upon taking damage, and gain 25% resistance against projectiles.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Revenge_Tentacle"
        },
        {
            id: "REVENGE_RATS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNElEQVR4nK2TMUjDUBCGv0hRMCRQHEKbQrWKpuDQSSt16CBYnIqzbgWhjkI3F0d3OwkO7uIkdRCyWZw6ONgOnSyYRaGhwWSJiwlNSR9C/Zd79+7+/35472BGSMGhXi76g+HoTyRdlWmabSkUqJeL/n3nDU1RAJhfXIgleo4LgGXbVAsGTbMtJQAGwxGaokwlBgjq2i8HYE5EyC/rkRiHUGByesnIctMywxjnROhATac4q+4BsJtfpWRkxQ4m0e19o6ZTAGxvrPDx+RXbl5gmsJ7M0e31gST99860tniBWqURyUUCwlfI6GuiclQg+CTj2Nq85XD/mVymELkf7411cN265ODU5+X1mLvHHS7Ol8QOdFXGsm08x8VzXGqVBg9X4ZpwdPIUTvYcF8u20VUZ+Idlmhk/RQ9f8BlITbIAAAAASUVORK5CYII=",
            name: "Revenge Rats",
            description: "When you take damage, there's a chance that a helpful rat minion is summoned",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Revenge_Rats"
        },
        {
            id: "REVENGE_BULLET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLElEQVR4nK2TsUrDUBSGvxRJICWli2QouAWdikugGYRsHVzSJyhuJU+RV3DJWnyDLB0Eh062EASpCEo2oUJHe2kgWeogCY1NTKH+073c83/nP5d74UhJ2cK1e9vlenOQqdNq4k/nUg5w7d42eH5D1zQAZFUpNaZxAsBKCJzLC/zpXGoALNcbdE1j0BtVmmdhxNPrB7KqoGsaWdrGbtFkMcZ1vIPGyJQDss5+4HHn3u91t0wDyzT2RiwkyDT0+wS3jwVzbYIy1ZlrAZZpMAsjZmFUWXNSdfD1LnJIlmZ3/yfAdTyGfn8vzS5oYHeLgDROkFWF6+4NfuBVRrZMgzROODttA7/u4Lx9xWQxrjSXqQE/b3slBC+fD/lzLVMaJ6RxwkoIOq0m8A+f6Wh9A+YuajkZ5YqFAAAAAElFTkSuQmCC",
            name: "Revenge bullets",
            description: "You return fire when hit by projectiles, and you gain 20% resistance against explosions and projectiles.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Revenge_Bullets"
        },
        {
            id: "ATTACK_FOOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNklEQVR4nK2TPW+CUBSGH00DKQY6Org4stEw2QHjdhfSNP0LbP4gN/5DBxY3A4uTqRsjg5I4ChGji50u8apEE3umNzfnfc57v+DJakkxHg1O62L3kKlndZjM5q0aMB4NTj+/KV3TBEAz9JvGY3UAYFOWfL3bTGbzVhtgXezomiaaofMtxo2TNUNHM3S6polM2z5v8L2AKAmx+0NlzXUEriNuQl+kGHx8khcrANIsxvcC8mJFlIQ3k8hSEiyWUwBcRxAlIdV237idK4Bs9r2g1mkWPw6QzXmxUoyuI/C94D7gcro0L5ZToiRshCiA8+muIxRYE6QGnBukvjyDKAlxHVE/qKsEaRYrZrs/vLp/eVMKoGd1qLb72my8vWL3h6RZzGI5raMfqwPH6sCmLOlZHeAfPtPT9Qe/o5TEq0ZBBQAAAABJRU5ErkJggg==",
            name: "Lukki Mutation",
            description: "You grow curious additional limbs that fight for you.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Lukki_Mutation"
        },
        {
            id: "LEGGY_FEET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRklEQVR4nK2TPWvCUBSGH4soVGKy2USyCc5OOvpnXEKphNpJ6iJ2sgRLa4f8g/yKjp39Dyqii5+gy+libhNjS8EeuHDux/vc857LhQsjFSZOvSbj1fZPomI+x/DjU2lx6jWxDEMqti0V25ZquSSjIJBREEi1XFKjYtsyCgKxDEOcek0A0gDj1ZaCppG5zuJ3nwDYLOYAah7GZjGnoGmE1aajm33nVh1yB55a95quyqPrMcBL6x7dtBLic6LMdTYJ0E2L5XSCbpr43Z460Hhs81tcqUzkWP5CDQC/21PAKDhRAakU+o1JoxO/MfTvd3sKeh5wjLCRreEr8O3fa7qJXsQsLKeToxNJ9CEK+hFw13+m0Wnz8P4W839qBeCw2ycBp7dFIVHx2QqK+Ryz9ZrDbq/o7sCLPaE78NT+bL2mmM8B//WZLokvghigJtQOq9cAAAAASUVORK5CYII=",
            name: "Leggy Mutation",
            description: "You grow disturbing looking limbs that fight for you.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Leggy_Mutation"
        },
        {
            id: "PLAGUE_RATS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGklEQVR4nK2TsUrDUBSGv0hooZKsIcmQqIOJi90MRqFIF7c8R1dHB9+ia1/BsUiHLELFxSy1U1AkLS4OKZUqQh1sLg1GDbb/cg/n8v/n43AvrCgpK1oNb56k01ImU92kHfYlEdBqePPLuyGaogBQqVULje+vbwA8TyYEdYd22JdkgCSdoinKj8ZM2b228ABslGL+RSLgr+lFJOsl+K/koubpiSfqdDTmevhYnsB3rJw567m2CSDOwgDfsVAN/dsU1dDpdEN8x6LTDYsDLg6Pc5PT0RjV0EXgWdAE4MjdyVGKgPNeL4e9XC/3Dna3cgQyfL3t2/iJl9kH0SCmUqvi2ib3DwksFujaJtEgZn9vm6ubiKDuAGv4TCvrE1L2WKiTk3JOAAAAAElFTkSuQmCC",
            name: "Plague Rats",
            description: "Dying enemies release rats to serve your bidding! All rats become your friend.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Plague_Rats"
        },
        {
            id: "VOMIT_RATS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABWElEQVR4nK2TQUsCQRzFf4bUqu0elJR1Ca0UFQk6BEoGWgRd7TN0k259Fz9H126GBB4SugTGnkJUNnEPK24qgl3arc22BHuXefOf/3vzZpiBFeGxSKWUn3eM0VIiRQpQrTU8tkGllJ/fPLaIiCIA6/6NH4VTcwKANhxSPkhTrTU8XoCOMSIiiq5CC9Z65EMDsLZU5l9gG7jtnokrjvF7758J4rvbNFoqQcFLo6W6J7Bg+gSbF9IxAK7LZwAcZ/bs2oJB8vwQAP/b2CE2uj27OZfacU+g3j7YRcsMQIrK6OOZPf/KF45g+gRyV6cAvMa2kKIyAEHBiz6ecd96cU9gPRKAYFICoN5vAziETW3g6HUkOLk8QlcNAHrdHtliinq/jekTaGoD4POOHAaKFCB7UUBXDYJJCV01yBZTPN09I0dlwokQ4USIqTlhc19BGw5RpADwD59pZbwDqT5w+/zcLREAAAAASUVORK5CYII=",
            name: "Spontaneous Generation",
            description: "Vomit near you evolves into helpful rat minions",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Spontaneous_Generation"
        },
        {
            id: "CORDYCEPS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKUlEQVR4nK2TP2vCQBjGfxFpaUMEF4Ox1ElQ6FA3h4LSMVOcupXM7l38ALafwFn6BZLJWaGDWzoUWsjUwYCrh4Fk0aFNMG1ia+2zvC/cPX/u7j04EFLU9Dqt9Xy5+hWpUpAZTmZSLNDrtNb28xuqogBwdHqcSgz9AICFEBiXdYaTmZQHmC9XqIqSIGqmzsWVwsuTwBuNE8LqJwcgl+akmTrFcgmAYrmEZuqZx8lHzba7NxrjAebDI3f3t99I23tTE0Q4r5/tWv5Z4Ma4/rvAwJ5iOS4De7q/gOW4NKoaAI2qhuW4+wm8vnt0m7VEzUL8CqEfxLfbN9qxq+W4dJu1BCn0A5BPshN8TbELOfiY7YUQhH4Qj2vfaCdq5Bz6AQshqBRk4B8+08HYABk1a5hvNPD2AAAAAElFTkSuQmCC",
            name: "Cordyceps",
            description: "Fungal creatures spawn from the corpses of enemies killed by you.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Cordyceps"
        },
        {
            id: "MOLD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMklEQVR4nK2TsWvCQBhHX4q0WEmgS6WNSKGL4NKtjuLQoZOdsolDJ/eA/geB7E4dSjY3pw4diqNjRxcXMUpcBIMWXezSO87msIL9wZE77t677wsJHBlDTBrl0jZcLA+CbCtDu9c3pKBRLm27nwOypgnA6fkZAA8vDgDvzx0ANqs1AFEcU70r0O71jRRAuFiSNU0JqrBOlP1hAE4O7TUcpnekIlKg3l5s1ROwfftFOExTbNW5aTwlBSLX9UcJ6Z7z6YzJ65s8n9LB8+mMi6vLHUhEhRMCdXMC+F4AQP4+h1Ot/C5W34KafCG3b/tvgSrpdD/2C8RHIuJ7AU61wmgwlkNI1LPaCnwvwG3W5DsAcJs1RoOxvgLbyhDFMZvVOlGJ26ztrDerNVEcY1sZ4B9+pqPzDePGfNx6HVTuAAAAAElFTkSuQmCC",
            name: "Fungal Colony",
            description: "Slime near you spontaneously turns into fungal creatures.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Fungal_Colony"
        },
        {
            id: "WORM_SMALLER_HOLES",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB60lEQVR4nKWTP0gbURzHPxFNICFX2sXokaQ0/SMoHdIrXDmwQlPbpdCmOEihHA4t3NA6iegoQXCzg+DQEAQ79KgESulgAl2CAdMSJEKsUXJKSIpQJJIW6WAHvQtnMxT9woPH+32/3/f9/R4PzgmHudEG5KNKvfFfIlHwMPcl6wBoM8XJfJGdvX129vZJjirUGr9tKzmqNOv5ItqAfGQZVOoNOr1enG4XTrcLOZZCl0TrxuxkBDmWsuqdXi9m2rZWEXVJZChXQZdEdElEjqXITkZattNubpxul3VoiodyFVuCVlzL4DRME8AmPg1bC57bYwA4/E8sEzOFpg8zOB/l+vMbrQ2yxU0Sr2qE1Dhu3zVCatwiDc5HKf08ZCLYgVGoounD/xrcuT/GA3WV/gOV2egi/QcqITWOKyxQzqwD8OJdnrsvj4cpPA00DZJf11hZngFAkfy8XnqGIvnZTn8k2NfFXHeJcmadyKMwAG+nP9mH+PjWTX5cesiF7h4yuQ/MRhfJ5Ha5cm8KYy2NxlUuK70ATAQ7KPd1YRSqTQOAleUZdlenGE8neL9UxNfbw1ZiBADjhFMGUoBRqHJx40+zBVHwEA4EUN/42EqM8Ku2aYkBDr/VAfi+sIFRqFL6vI0oeI5fzCSd9TOdG38BZFq7xmbpgEcAAAAASUVORK5CYII=",
            name: "Feared by Worms",
            description: "Worms run away from you, and worm and lukki enemies no longer destroy terrain while burrowing.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Feared_by_Worms"
        },
        {
            id: "PROJECTILE_REPULSION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLklEQVR4nKWTMW7CMBSGvxQElCgMRFEGj5WgY0a6II7Qc8AdGHKHcI4eAWVC6pKxMHSpMlQoDKAgiIToQPyAEhAS/2T7+f/83rMND8rQg36vs4+X6V0m1TAZjSeGAPq9zv4j+sK1LAAq9SoAg+4QgCD0AcjWWwB+VyvevVdG44lRBoiXKa5lXRhn86QQ5OYegPL/9AbdoRincZSvehLTEC0BVOpVMWtjksY5SO/yLiBP1xqVpDGb3YLNbiGgIgng9HRt1tKQaRwxmyfSk5sZ3CsBBKFPy7FpKw/bVNRKTdlUKzWxTUVbebQc+6wHF7egZZuKJD2Or0kA2XpLEPp5fR5w7H5bHeb69Gy9BfO5OIMjBAG1HFtihRmohsnn9w/uCQRuP+W3l0NZD3+mh/UHjuKPDXu4qJEAAAAASUVORK5CYII=",
            name: "Projectile Repulsion Field",
            description: "Most projectiles are repulsed by your presence, but you take slightly more projectile damage.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Projectile_Repulsion_Field"
        },
        {
            id: "RISKY_CRITICAL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABfUlEQVR4nK2TMUsCYRjHf1opKjpFDjc0Cboc4dKFRBJ+AGtuaXU0qM9g0I19gqYgaWwSI6I3DiJuKTgcJByMpg4vvAgb9H27S4rAnumB9/n9/8/d/31hxorIplY2Rr3XwZ8gLZPiuC0iSqBWNkbn949k02kA7jY3ATDEdQj0vSEAfdelupLnuC0i8wC91wHZdJpYMo4wStj1OgDC/IINcU0sGQcgO2EAot/Xa1oWumli2zYnlQqNQoHqyzPCKKkZuSHAvGykunQTQKNQ4ObqEia9mJzb9Trs7oQFZB1++KqX8Nr6Btueh7O8zG0ux+rZmZqZ+gQAYZTYSywoWNM0gDHsOOS63Z8FJNx56nG+uMTBw8MUHEwn+hscHNR1nVy3S9OyQobRIHy7lVdw07JUpKuOg26aU/cCvv3E04uOct6fi43TmNyFoLPvDSGVCG9QbLU4entXgzKNpmWFnIMpKQEtk6LvuhRbrakVg6DvDfG9IX3XRcukgH94TDPXJ48nqykvPtCfAAAAAElFTkSuQmCC",
            name: "Close Call",
            description: "You gain additional chance to deal critical hits as long as there are enemies near you.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Close_Call"
        },
        {
            id: "FUNGAL_DISEASE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABgklEQVR4nK2TMUjDQBSGv7SioEYc1AiVzB0UrDgILt0EF92KoIviIgjund0F0aXUpULpIOhScMsiVCit4uImFgNN6SANjSQY61BzejaDUB8cvLt7//f+B3fQZyhBspdc6pit9p9EsbERTo2SIgB7yaXO5d0jmqoCMDg8FCr0HBcAy7ZZn49zapSUAQCz1UZTVUmop/Mirx1uSGDtSwMQCeukp/OsxCP49SZ+vSnBfocABHQ9ncevN7kulIlaNVaTUwDs5gr8ru1xEIgDEcB1odwFPn6EOpEAK/EIUatG0Wh096lF6S5sHAVgbWGuM3hwBveVng6JZY3qjYWv6eIsOj2Bd7TNVeVBEQ78erNHDFC9sboiqwYgjSeNYGb3JcuJZQ1f08UKIEWjQWLUFHUDQeI5LpmtFLGdYwAuTm6/i17O2c0VKBoNzOw+T46LPjkuA346AVBn0+Ls7QUyW6nQESPQfduWbeM5rniu9uuzKHqf2RS557hYtk1sbAT4h8/Ud3wCmwmaW2iK/+0AAAAASUVORK5CYII=",
            name: "Fungal Disease",
            description: "When near danger, you sprout fungal growths.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Fungal_Disease"
        },
        {
            id: "PROJECTILE_SLOW_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABV0lEQVR4nKWTwUoCURiFvynRMCYikSEG2gTqJhhaGYEIQdtq0wu402fIhT6D7nwBN9U2CEQIhCCENuqiRTGEyEgoIyaILXR+HRWpPKt77v3Puefe/15YE4ozSMajI7Nj/0qk72yTL1UUMUjGo6O7ag1NVQHw+n0ApGJpAHLlDACD3jcAzW6XSyNCvlRRPABmx0ZT1QVho2UtNdImGgDPfLxULC3CulmdzBqy5pg42HAGXr9PxHWzSjbSxLJNLNsU3mhZpGJpSeoymEXxbB8SCfrDNv1hW/gyiIGzezbSdBU/XZ0Lr5tVSbEywV8gBrlyhlAwwE1Ng0JBCk5vH4SHdYNQMOC6yIUuAFw/flKkwNbmnouPG+iGAnBxfDR6b325OgHTNoZ1A0B2H/S+OQjucv/yqiwkyJUzM5c0FTpr8/DA+G0/v31IQKdw1VM+OdSnR4D/f6a18QMH/pmG2zrZlQAAAABJRU5ErkJggg==",
            name: "Projectile Slower",
            description: "Projectiles near you slow down.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Projectile_Slower"
        },
        {
            id: "PROJECTILE_REPULSION_SECTOR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXElEQVR4nK3Tv0sCYRzH8bcaKh7n4BEOD4QOZg2CW0IgLu79BS1tSouzNIhb4KZbS2NTu4sIgaMggT8GpbhB4hw8TlQSm+6hwzME+04Hz/fzej7Dc3DkeOyPQi6z1efWQSERVmi0Oh4JFHKZ7Wu3T1RVAfCHAq7B9WIFwNQ0uUlf0Gh1PF4AfW4RVVX8oYBrOH9ZlLA/FCCqqthtvYdUHuhditkH1zMJ7Kt9Fr7GsHSGX4ZEfu9KIFFt74QVXwzD0tEUwUDv/t1gVM5KpNMfyoXlZoZh6QCOFjvAyd0z4/GEUrPHy+eKUrPHcjNzIG4tJPD9dEs8HqOWT/HYt6jlUwR9EQCCvgiaIkiK9H4gUW0zKmcB8N1n5IIdBjg/1ai3K+7Ae+lqR7c2EzRFYFi643b7QTmAffMxf0NThOvtEhBhhalpsl6sHLo9SZGm3q7I86lpIsIK8A8/09HzA7kkifNa42WxAAAAAElFTkSuQmCC",
            name: "Projectile Repulsion Sector",
            description: "Projectiles that fly into a small sector in front of you get blown away.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Projectile_Repulsion_Sector"
        },
        {
            id: "PROJECTILE_EATER_SECTOR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABa0lEQVR4nK2TMUgCYRiGn0uxKzkrogx0irSGhiAQW8QtaYhqaqhNCGy/qQiiKV1zaol2CYewIRCXxCmoobQxIWuIPJRTOq4h7vC4EwL7pp+P/32+54P/hwFLMA6peFSvN1t/CgV8XrLFsmACUvGofnX/hF+SAPCMDttCyYRsno8uZDaWFsgWy4IboN5s4ZckS7AUFolVVUs4k08z7tHxSxKG7ZCTYikscvD8Yell8mnHdUyAMb0UFqm8fVJTNWK6AsBr/cUS6jV1O1HzX9+ERBc1VYOR39728iYAhYecs0HvdICaqvEueEgmZIKBOUd9G8CYboR7qx/EBlgfcxMSXUzrXUs/snjJ1uods8Gl/oBYVSUyMwFgQs4Lp6zt61Qed8ndrHB8OOkM6LY7FouaqhESXSQTMtdn5oNlZ+/Wcte2gmEREl2UBMlxb5tBwOeloSh02x267Q6xqsrJ/FTfUENRCPi8wD98poHrB/Nxf2uOpNRXAAAAAElFTkSuQmCC",
            name: "Projectile Eater",
            description: "Projectiles that fly into a small sector behind of you disappear.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Projectile_Eater"
        },
        {
            id: "ORBIT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDUlEQVR4nK2TsWrDMBCGPweTQIq9eshYBB47qlumLF0KxlMHZ86T9Aky17MxdO6UUdClYyDQpWTo6pBCu6RDIiE7VzCkN0kn/d/9kk5wYQR2sJjqw7bZ9xJN4iuWKxM4wGKqD89va5IoAmA4HonCn69vAD53O+5vUpYrE4QA22ZPEkUtYZFnLXFZ1W49OWkAwm6Vl6cNsQadqla+yDPKqj5zNbADS481NObcflnVzpXvdOBvKvIMnSpmc+Xm/lF8iAiQLEuiXoC+8SfAVjbrDQ93j/0AXbtlVdOY48WC/BIOYJukC5nNFTpVLbHdC0IfSBCbkyKEY2+/vn+QnJLD8UgU+K18ez0B/uEzXRy/aT1qlpzgMt0AAAAASUVORK5CYII=",
            name: "Phasing",
            description: "Projectiles seemingly phase through you.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Phasing"
        },
        {
            id: "ANGRY_GHOST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVR4nK2TsQrCMBCGv0hRUOomRRyd+gAOHTsLPoGTq8/j6gu4iODs6NDFTScXERG3FgVd4qBX0tSiqP+US+7/8+fuAj9CAWitGYaB3sfnj0iteo3RYqmUUjgAwzDQ09UGz3UBKFcrjLu9lDCYzwC4Xa4ARNsdhIEGlAOwj894rku5WgHIkM1YhLwnB6Bk27PJ785SAbkdIFqv0/XpcMjtm7k5B4P5jI7vZ0SE3PH9Ygc2JLnRbGZiG06RgGn5KwHb8kdPMKssyVLEIgepgAyJ3SqpAeQHKudAEl6h6MyBx2xH2x0e0J9MMn02ITcfk4Sg3QL+8Jl+xh09mGWjdmx7oQAAAABJRU5ErkJggg==",
            name: "Angry ghost",
            description: "An angry spirit comes to your aid, copying nearby spells and projectiles.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Angry_Ghost"
        },
        {
            id: "HUNGRY_GHOST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIElEQVR4nKWTv0rDUBSHvyuhhUq6ZsjUuncPFDG1k28gOIiDS/sCncSpL9CuHSQQ3PoArUIoOHQRJ6d0KBlcWyroch3qDbn5U4X8tnPv+X3nHM69UFICQEpJz3VktNn9y2TXjxk/vwghBAZAz3Xk9PUdyzQBqNSqDEbtjPH+Zg7AMlyD60hAGADRZodlmlRqVQAGozaNpp0B3E3OGfYXWL8egKN0UpEZyD2PAaq6SvK9AICn2ZsWJ3NzO7i9eATg8upUO0/HhYC0Ot3WwftCgGr9L2mA5Oo63Ra+F+B7QQxbhVEGYCSDRtPWIEVz53bw/fkVQ/K0CiOG/YWWmxlBbeCQOS0D9m97Ga6xgOuzB23PSanKH9stzsm+09KfqbR+AIgJYbo5wtzDAAAAAElFTkSuQmCC",
            name: "Hungry Ghost",
            description: "Summons a happy minion who'll eat enemy projectile every now and then.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Hungry_Ghost"
        },
        {
            id: "DEATH_GHOST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABB0lEQVR4nK2TIW/CQBiGnyMNJCzFVqCAhP9Q2f9AJki24JalkuBAwRS6ArdMTCH2DyYnMEgyUQRBzEJYAuYQcE177TUQeM3lLu/7fN/lu4MbJQCklPieK9eb3UWhauWB4PtHCCGwAHzPlV/zBY5tA1Asl2j5g1Twc9wHYBauwHMlICyA9WaHY9sUyyUAWv6AWr2ZArR7I6bBEOecASjoJlMYyDyPAKq6Mn28TxLG+F55MzsYd58AeO68JM71vRFwrYwA1bK+5gKyRhfXMvzNB9TqzQii7qyvRsDhfx9BTNWnwTDhTXWgJpAX1mXB6W3PwhUO8Pb6mJhzXKry33aL26gCd/hMN+sIyqxdbO4jFo0AAAAASUVORK5CYII=",
            name: "Mournful Spirit",
            description: "Dying creatures leave behind a spirit that deals damage in a small area.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Mournful_Spirit"
        },
        {
            id: "HOMUNCULUS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIklEQVR4nK2TMWvCUBSFv4goNSRroBmEqtCx7eRgqdCha/0FJatz9pK9s2uof6D5CQoOTrZjQR3SYiGrDwPJYgebV00aEexZ7n3v3nPePY/34EgoSdJtN9eL5eogkqmr9AZjRQp028219/aOoWkAlCplAE4vO3y9vkhiHEYABEJwf3FObzBWigCL5QpD0yQxD0nd+OEAFPcRzqoad7eOXLtPj5meQlo9Ddd93onp3kKGkYJlPezE3An2Yfv0NHLvwLI33qezOa3rFtPZ/PAJLNuRhEa9BsDnh3+YgGU7f962PxlSvbrJ7EsLcRhRqpQluVGvZcb2J0PZi3qSbwE23kden5HXz2v5FTB1lUAI4jCSz3Xbc5In9UAITF0F/uEzHY1vh2duPOdBNCkAAAAASUVORK5CYII=",
            name: "Homunculus",
            description: "Every time you leave a Holy Mountain, a helpful homunculus is summoned.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Homunculus"
        },
        {
            id: "LUKKI_MINION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABUklEQVR4nK2TsUsCURzHP4aUJFfc5GC03JI8DloCb3M7GoKGOBpqaXTpX6ixodUxgtagSKjV7QQbiuO4hoQQJZxED0VdbOk9PPUgsO9y7919v5/f9z04WFIJuSgW8pNWr/+nUHYjTalSTShAsZCfPL59kNE0AFbX1xYGx4MRAO0w5HB3h1KlmkgCtHp9MpoWG5SS3zO/GYBknPni+BI9ZdAZ1tFTBue3Jwt9K7N0AFs4uJ4PgJ4yFHCRVwGmw5YpsEzBc+1JvddTBrZw4hvYwokYXM9XkM6wzvXDFZYp4gFBM1BPGXY9X+3P9o9wPX+uhbrERtej0fXY3jQVzDIFQTOIwGTb969yFCCV28opo5x883KvhsQeYTwYYQuHoBkoo6w/fU8An9+v80c42DtV4WnQ7FRbOJRrd1FAdiOtao8HI7WelZzcDkMsIwv8w8+0tH4A/wehIcCDjOEAAAAASUVORK5CYII=",
            name: "Lukki Minion",
            description: "Summons a lukki minion to your help.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Lukki_Minion"
        },
        {
            id: "ELECTRICITY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNklEQVR4nKWTvUrDUBiGnxRpJDFFRQw0m5NOihjo2MELEHoXnTO0V5AOnXsXBS+hY6GLgqCODi2klfQn9tSIUIeQQ9LEKvRdznfO+d7ne89wYEcpcVGvVtbDxfJfJquk0+n1FQmoVyvr+4cXTMMAoKipucYvEQLgBQF3V+d0en2lADBcLDENg6KmZswjuybr+N40DOK0hW1RR3aNZruVgmxKAvImN9stXKeRMSV797ZNBuTqOlAedDO9uYDyoIvrIAGu08g1p56Qp7/MvyZIpthmTgHOru3oQDtg/8Tk+OIyuri9AcB/fuTz3eNbfAAgXp/SgMlkEleovs907HF0agIwHXusZj5hMJeT9c0EQgg0TQMgDOaEwZzVzJf7pIQQaYBV0nmbCdmQBG0a49U6jBA7f6ad9QPEzH3RzwxOHgAAAABJRU5ErkJggg==",
            name: "Electricity",
            description: "You're immune to electric damage, but metal and liquids around you electrify constantly. Look out!",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Electricity"
        },
        {
            id: "ATTRACT_ITEMS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAElEQVR4nK2TL6vCUBjGf7uIF67MurB4g0ajNpvYbrL5AbR5P8BtZou472CyyYoaBA/coHFjYBGDYHIouKLFjU0944A+6YVznt/7vOcPvCgtLNrV8mV7OCqZzHyOwUxoEaBdLV9GKwdD1wHIfn0+NQanMwA73+enVGQwE1oGYHs4Yui61FgrtACwXQsA4+YB+FCJbLsWtmtFoLgigKz7PahWaCX2piYQjoeY/6ZCpQDheFHdq2cTKZQAAOwtFt2+eoL4IXnDBt5kCkBnHEgBGdlC82+Z2vkhQXA6S6/qXuGDSgBChRAVENxGMPM5/tcbjBgkrfPO96l8m8AbPtPLugIK21p6vfGXtgAAAABJRU5ErkJggg==",
            name: "Attract Gold",
            description: "Gold nuggets gravitate towards you.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Attract_Gold"
        },
        {
            id: "EXTRA_KNOCKBACK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABS0lEQVR4nK2TsWrCUBSGv0gx1BBXC4KDIGQpFKfQoQSUutUMHfIA0kEF36Nza1/BoYPtZlHIVDKVQpeA4CbU1WBKQsEOJSHXpLRgz3IvHL7v/AfuhT1Lii5dQ98u15s/QeWiwtB2pFjQNfTt+NWlpKoA5AtyCnLcOfVKBYCV52GeaAxtR8oBLNcbSqpKviDHsOPOU5KoX1JVorS5rIiOO0fXagw6bQaddizLkkoA7frx9n3z8ePOu6Cu1ThSDnl4eZOEBPa4lYJHo9sUnBQKAsOcpGDL6qFrtRhOnoIga3pyhSSUmSCabo9bTPseAJbV+1UmrDDte8jVBsrVnZAoAnZhQRD6AQfNy7ghVxtCmqQo9IPsBJ/Te4LFDIBgMcMwJzRv1Hi1rMrB99t+frrg7DrP6fljDCdBw5wQ+gGhH7DyPMpFBfiHz7R3fQEd7IghaEzs/wAAAABJRU5ErkJggg==",
            name: "Extra Knockback on Spells",
            description: "Your spells knock enemies around with more force.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Extra_Knockback_on_Spells"
        },
        {
            id: "LOWER_SPREAD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4UlEQVR4nK2TsQqCUBSGf0MKkuvqINQWQluTNNm7NPVATj1Ej+B4p2gJLm4FDq2Kgi42xLF7r90M7Fuucvw/zjkqMBKLLg5R2GZ5+VPIdx3ECbcAwKbw6SLgMQYAmM5nH4NNVeN8v71udts2TrhlA0CWl/AYMwYJuU7dToba5SJVzjBYYbNYdvVOQPbkuO4F5FPvpBNQMNpflQCJTHQCCuqEweqrZHAHQ/RG0OEiVeY3CmgE0xIHBU1VKyJ9ifIe6FlFYEJ/jVyk76+RBL7r4FEUaKpasevINd91APzhZxrNE6opYJxhtlL9AAAAAElFTkSuQmCC",
            name: "Concentrated Spells",
            description: "Your spells have lower spread and extra damage, but have increased cast delay.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Concentrated_Spells"
        },
        {
            id: "LOW_RECOIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJUlEQVR4nK2TIUzDQBiFvy6kDW06W1G9UElmWgPZMNhZEhIIsmaObAINFjO5zM3O4hpUzzTIJdMTs2u2pDVD3UG5MZqMX/25/71373+5gyPLkE3ciXbL9aYWyW86jJLUUAJxJ9rNPuZ4rgtA1L0kE0IjltsCgFWe0zsPGCWp0QBYrjd4rotpW5i2BUB/MNQE5NxzXaTbxk9QOwxVn84Xf66jBEzbUuSL7tVBknRZEWiHIZkQinxz/1DLxYlsMiHoD4a8vjzXsq45ABQ5vrutgA4JaiFGQYtMCKaTceXsNxFN4LsbgOlkTDpfEAUtktm1hlMZlNuikq68Gb4C7fTeFBbn9LCDfUKy3h/L6gp+02GV55TbQj3XfSXnZ08FftMB/uEzHV2fGX1thO6OOl8AAAAASUVORK5CYII=",
            name: "Low Recoil",
            description: "Recoil caused by your spells is greatly reduced, but your spells fly slightly slower.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Low_Recoil"
        },
        {
            id: "BOUNCE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4klEQVR4nKWTLQ+CUBSGH5jTTQaV4GZj3uLmSDdSLBb9Hfwgf4cWi8VIYM7NwkY2WGW6acEgF/EDRH3T3Tnnfc4bzoU/pamH78l0dzjWMnUsg+kq0HKA78l0tomwTROAZrv11ng5nQHYJwmTgWC6CrQGwO5wxDbNUqOS6tuZB6BRK3OmIIoBcLvdvKYX6Wrgk4pJ9WJDCqcSIoWDFM5DTX839Aypgr4AniFBFL9s/Qj4RqUAlaJq+wNAHUkdFWc1gLHbT8VwVBsAEC0XzNfb2yV2LIMwDL8C9CzjngB+/0x/6wryPklzJdXgMQAAAABJRU5ErkJggg==",
            name: "Bouncing Spells",
            description: "Almost all your spells bounce around and last longer.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Bouncing_Spells"
        },
        {
            id: "FAST_PROJECTILES",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVR4nK2TPQ6CQBSEPygggUBLwQVMbCwpOYIW3sFQ6jm0JN7BQo9ASWlj4gUoaCGQQIPVEn42BIJTbTIz33vFW1gpRTwC32uSrJhVcm2TMIqVFhD4XvN6f3EsCwDN0KXFuqwASPOc/W5DGMWKCpBkBednimbo0vLx/mnBmqHjWBZiW1WELr7WBoea8tS5wa7X3VKdCs7xRoClEClgiaSAa1TzOG2lhaE3AiwpjwBzy+KgeoClk3sA1za5HRzqsurRhbqT67IizXNc2wT+8JlW6wcjdmkaKxspzwAAAABJRU5ErkJggg==",
            name: "Faster Projectiles",
            description: "Your projectile spells fly faster than before.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Faster_Projectiles"
        },
        {
            id: "ALWAYS_CAST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABU0lEQVR4nKWTMWvCQBTHfxFJaCTQRQT9Ai5dLELGTgqF4t6lkwXdgyCOXcTdoZ1cuovg0E9wIGTpIriqIO1QCAaUgh3MnTnNIPW/3L3w3u/+7+UOLpQhN7Wmu1su1mcV5QsZhn1hKECt6e4m71NyjgOAaVuJhdtwA8AqCCg/Fhn2hZECWC7W5BwH07a0YjGuADDqZBXYtC1yjoN0mzo+RSYDuPcfADy8fJ1ApRRAniyThe8hpjOE79G4/Ub4noLGXaaTehW+h1vqAb0o7jKotxB+N/qe4ECzZz/rRBlHa7xNzYHsGUBMZ0nmDm0Wr04dxMnnSgOoaYevepaMozX+JxRAXhJgP6hY0aDe4untMMDS3UjlGgDl2s3u1//BtC3EuKLN4lijTpZqe066dM1k+Lm/iflChlUQsA03Gl3ORFrehhuq7TmrICBfyBwcwP8f08X6A3yWgDKR712LAAAAAElFTkSuQmCC",
            name: "Always Cast (One-off)",
            description: "A random Always Cast spell is added to the wand in your hand, up to a maximum of 4.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Always_Cast"
        },
        {
            id: "EXTRA_MANA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNUlEQVR4nKWTIWgCURjHf6dyBx4nwyLctYGwsjIQD4N5zb66JcFiMBlN1oFpaWFhzWwzyImwYpEZHGwKFhk+FO7YcEHe7ZzeNvVfvgcf3+/9/4/vwZFS5KFQtFeT8eJfQ6al02w4ig8oFO1V72FAyjAAUOPazkFv6QIwFYLM1RnNhqNEACbjBSnDQI1rqHENr97dCZD9lGEg3Ua2bql3SeSSoZCf8gHSdiKX5E5b1zAFI245mHdm3LjrupcDn17JMu/MUCvZwwASIpWutfcHBDWs5n2IM3j+HZCutYld3/N2erlRR6MXyq0+j68u5VZ/A6AAZArnq4+n99AFStfaDKt5Pm8doiUbb+kSuzih1+wrf0aQwwDRkr07gmnpTIXAW7r+ugbfQEr2p0JgWvp3BDj8Mx2tL1X2c6++wFGvAAAAAElFTkSuQmCC",
            name: "High Mana, Low Capacity (One-off)",
            description: "Your currently held wand loses half its capacity, but gains more mana.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/High_Mana,_Low_Capacity"
        },
        {
            id: "NO_MORE_SHUFFLE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4ElEQVR4nKWTMQqDQBBF3wZJSERbC2shR9jS83ignCNHSBlIk1IIpAkWthEFbSZFsqIykgQ/bDE78//MfHaNiLAEHoAxhiy1Ujzrn0hx6HM4nY2IvAWy1MrxmhMFAQDr3UYldk0LwOX+IEutAMYDKJ41URDMEh1cPvpwAFZzxef81h8Xa/Cm6q7Y7pNRrE2iTvCNPDuBw5CsxVPMevArVIGpgcP7vyaYeqGt03vQNe3IXbtPRh2H5K5pwd+OBbTO3wyEzwpx6FNWFV3T9s9Vg8uXVUUc+gAYEVn0mczS7/wCv7huyibsyuoAAAAASUVORK5CYII=",
            name: "No More Shuffle",
            description: "Most of the wands will be non shuffling. The wands you carry with you turn into non-shufflers too.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/No_More_Shuffle"
        },
        {
            id: "NO_MORE_KNOCKBACK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSElEQVR4nK2TMUgCURjHf1ooKudq4JiCYC61HITg0CRh0HRzNMg5NEpzU1CBQ9IgtDrqFuEQBOHoIgklhCAYQhzKKTpo03vd0ZmC/eHBe3zv//v+74MHa8olNnpKnXcH5kqmcDBA8anuAnALc6XRotM32Nn6omeOOd416Jlj2+r0DTp9g0qjhZ5S5xLQHZiEFIXM3ga1to98NkLx2furs8fvxeP3ElIURFq3KKYTMx5eN22Geutt6XMkoNb2AZDPRri8e//T5PH/pHNbC1az6H59db5aAiczwP7hCWenR8sBw2ZTmtVYlI/Go7xUKFUXQiRATF2NRQHQtByABBVKVQD05MQZsEialqNcvpVnJR53BkxHdrI1jZCYk/Xu0gQihVXpxMwOCAcDfA6HTEcTxyR6ckI+G+HipsnB9pj7F5NwMAD8w2daW982c4eRl1/ROwAAAABJRU5ErkJggg==",
            name: "No More Knockback",
            description: "Enemies can no longer knock you back.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/No_More_Knockback"
        },
        {
            id: "DUPLICATE_PROJECTILE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1UlEQVR4nK2TsQqCUBiFP0MKClsdHFsaG73g0AM49Bw+kM/R4AM4CAotjU0t4dCqFNRiQ16xvOYFO5P81+/858oRRsqQD8HWrfLipgU5ywVhnBmNQbB1q/3xhG1ZAEznMyX4vD8AuJYlu82aMM4MEyAvbtiW1QtKyXO7ZgAmWpmBKEmJkrQzbwyGtquSaCWQW31P4HuiP0EfrILaMlXbpIbgjsE3oJPg5xV8Tyi/vNJAlkRlItNIs/a72j3okwnvbh/OF+x6qOqE74mPKouVA/zhZxqtFzodS00C+y58AAAAAElFTkSuQmCC",
            name: "Projectile duplication",
            description: "Your projectile spells have a chance to duplicate, but you're more vulnerable to projectile damage",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Projectile_Duplication"
        },
        {
            id: "FASTER_WANDS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABUElEQVR4nKWTv0sCYRzGP6+IonKCP0DQuXK5NlH6C9qcXKIpanFriIYgKWjIdhehscXJrf6BOHG85cClRUFIBQ8NHbwGfY/Ou6PID7xwPN/nee7e9+5gR4S8KFdL1qA/+1Mom4vRbmjCLihXS1b3xSCjKACEomHP4HK+AGBomhRO8rQbmggCDPozMoriG5TIeWaTAQh4GS11zN3rBZrRs5fUtglut1vqmE5rRLGSoqY3HRpAjSahaJjVJud6gvuna4qVFEJPOjQ/BEChrFoB4wsAzehRyu/5BiSrfIRuWxeeZ+DH/rnb7lLePupY6thlnKYnHBYOfi+4vXqk0xo5SqbpCWcPRzzfvLsK7LewnC8IRcMIPUmxknId3OVpnfhnwvYGiTgLfiL0JLXjpkOLk/CyrreQzcUYmibL+cL+XL2Q86Fpks3F1jeTw//+TDvzDSY0fgs82ncFAAAAAElFTkSuQmCC",
            name: "Faster Wands (One-off)",
            description: "All wands you're currently carrying gain a bonus to their cast delay & reload time.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Faster_Wands"
        },
        {
            id: "EXTRA_SLOTS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABN0lEQVR4nKWTMUvDUBSFv8SiaEhxqJQ24CAEujiVQqbMbtld3QounTvmHwj9AQ4Obp27ZQoUpy7FDhU1NUUHaUhKChqHkpBAUgs5yzvvcs+5h8d9UBJCTIyuFi0cfy9RU5EYDmwhMTC6WjR+mFKXZQAOT45yhZsgBGDpeXSuWwwHtlABWDg+dVnm/OwUpSoB4Kz8Qh5rACrpCUpV4unjC4B2o1bIXz+/E40Yk6LYeUj3ZhI4K592o/YvTyNj4PprXH+duaumhdvXM/U0xNxqCrO+jmpaANjT590GqmlRubnn/eIqc87nL/RGEx7fQnqjScZAAOgYl5E4zY8YG8/6Oj93Nge3GgC/rWPGw4mQJIiXpEgMJOJ0715vsAsibHd76XlsgrAwSTx5E4QsPY+mst3M0p+pNP4AGc6QckrV3wQAAAAASUVORK5CYII=",
            name: "Extra Wand Capacity (One-off)",
            description: "The wands you're currently carrying gain 1-3 additional spell slots (to a maximum of 25).",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Extra_Wand_Capacity"
        },
        {
            id: "CONTACT_DAMAGE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRUlEQVR4nKWTsUsCYRiHnwupSM6gAgdrKqGhIRBSEcTtoEjycBCkf8Bc5aYc3MTGuH+gVY4QHNxEELWpoaG4nEpIaNIMarHpDs87NfA3fby8v+d7Po6DJSMYh0wsNO4NRv8q+Txu1HpbMAGZWGh8//iMVxQBWN1Ymwt4639ycXyIWm8LLoDeYMSed4egXyYvF83FgqbQ0TUbwCuKGLYuY1hVdFrdBmn13FzMSjnycpGzon+mjQmYLCYjcQA+vl5IqyWqim6BTD5xZZpolG8qJcrNigmvKrqjgQ1glKczC2IDvPdeHW8CaHUbBP3yYoNUIEEqkLDNb2sly1eyAZKROLu+g5kGTnE0WAT5/f6ZDzg5ukOWWmxtrlvmWSlHQVPsBj6PG4Bys8Lp1ZiHp0u0WpjC9bZlObwfpaNr9IdDs7P0z7R0/gAsgmb3G8DDJgAAAABJRU5ErkJggg==",
            name: "Contact Damage",
            description: "Enemies near you take damage; the damage is higher the lower your health gets.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Contact_Damage"
        },
        {
            id: "EXTRA_PERK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAElEQVR4nK2TsYqDQBRFj4soq2gliEyZxlJIk3T5BL8jH5Tv2E9Il0AQttwmKTaIyFosGSJoky2yI0pGCMRbzePOfe/y5g68CEMd1qvFLb9cnxIJ32Wz3Rtdg/Vqcfv4/CL0PAAsx9YK27oBoJSSNInZbPeGCZBfroSeh+XYzKOAMSciCsiKivBfA2D2L8yjAJ0TNflwOpMmMbtj3mm6BpZjD5z0oWo1uc+/6df0PB4ajC1wjJvegVqYDjpuOgdt3SB8l1JK2roZTFN1KSXCdwfcIAdZUZEm8WOQ3HcAljNBVlQDyoR7tg+nMyGwO+ajL/H98wvco7ycCWCCz/Qy/gBgimtG/sbkGAAAAABJRU5ErkJggg==",
            name: "Extra Perk",
            description: "From now on you will find an extra perk in every Holy Mountain.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Extra_Perk"
        },
        {
            id: "PERKS_LOTTERY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPUlEQVR4nK2TsUsCURzHPyfi0cm13uAUDRe0tCRGEO4NRUuT/QH+BxGEBNF/4K64uEQhjQciGnIuLZG3dJA4hJumoIsN9h7v2QmBfaffvff7ft73PX4Ha8oQRT6bmfeH4z+ZUptJivW2IQH5bGb+8NLFsW0AEpYZaZxNpgB8jkac7u1QrLeNGEB/OMaxbRKWqZlzNY/09Z38FvuObSPSxqNOytU8Wbv7adyaR9Dx8W8uf/VKQMIyNSPAfeEKgLPC7UqQliDo+PJUYVTVrJRWJxB6fXrU4qvGoNXAPTzS+mPLgN3jEy1Rs1IiaDUWwCVzJCBKwihAKwGD4E3W6lXUBIPehwaQbzCbTAmrZUJg6/xCu4owfj3XZS/JDR2gSgWpxijFYTHbnfcezs+imMawWtaa1VE+2E4B//Azra1vspKAizYatzEAAAAASUVORK5CYII=",
            name: "Perk Lottery",
            description: "When you pick a perk, there's a 50% chance the others won't disappear.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Perk_Lottery"
        },
        {
            id: "GAMBLE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPElEQVR4nGNgoBAwwhj+WRb/nz39SpQmKWluho3TTjDCDfDPsvh/etkNBnFeXgYGBgYGNi52rBp/ffvJwMDAwPDy82cG0ygNho3TTjCyMDAwMDx7+pVBnJcXp0YYgMmLQ/UwMDAwsMAkF6ydilWTuLgIg79bHE5DmZA5ehXlDHoV5Qzc9+7B2S9fvmHYuGsRVpeguAAZKM+aCWHsOsmg9/sFAwMDA8OJC9tQ1JhFBGO6AAXsOsnAANVs4xRBnBfupqUjOGiacRmCYsBXJSUUQ9A1YTMEwwtflZQYLnV0oohpaahgtZ2BAUcgwsDk/jqGAwdPMqzdsJMhOMCdwcHenLALkIGhvhbD2g07GRgYGBjWbtjJYKivhd0FUtLcDEsWr2eIiQ3EUHBk3woMsd6e2QxS0twMDAxUyEwUAwCf7F07QtNPGwAAAABJRU5ErkJggg==",
            name: "Gamble (One-off)",
            description: "You gain two random perks.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Gamble"
        },
        {
            id: "EXTRA_SHOP_ITEM",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABE0lEQVR4nK2TPW7CMBiGn0RVIhKZNZW4QMeIKepEt44cgI2NgYm9F+jUgY2tB+AGMCFPNGN7AIasWKRKFjoguzF1GyT6Lq8l28/3fv6BK+XpwWSQHXf7w0Wbet2Y+Vp6BjAZZMdl/k4iBABBFDo31mUFQKEUw/SO+Vp6PsBufyARgiAK2eZjAORm9AMQRCFBFJIIgU7rNxfI5xQ6D7a3yAC2+ZhslgNY3kyigc0WrQQuZfevf87fNBfqCk3PZvl3K48vSKYADJ8+bICJ/Hbmm5FJIZma9m7jzmUttMkAXNd2Ll3dCeinC/cZOA5RPygLYCp8rmxvkQ+nt10oRV1W9NPFCfZL5bqsKJSi142Bf/hMV+sLeft0+EOC5gUAAAAASUVORK5CYII=",
            name: "Extra Item In Holy Mountain",
            description: "There will be an additional item in every Holy Mountain you haven't discovered yet.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Extra_Item_in_Holy_Mountain"
        },
        {
            id: "GENOME_MORE_HATRED",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeElEQVR4nK2TMUvDQBTHfxFJaEJ0ESqW6uBQB6ViECIufgLrrJAPYJdiF1e3LopLHB0KOmtnBxchUCKKDu0i1GBR6FJLKrrUpXd4toKgb7m8d+//f787LvDH0MTH9prbe3qNfyVKjVkcXQaaNNhec3tnNzWStg2AbhpDhR/ddwBeOh02Fuc4ugy0EYCn15ikbaObhhQ74xMEnk/g+TjjE9JYNw2Sto2gHR02KfB8JfdzewC45fxArzQQkwPP5+riGIDpdBaAx+hW7rnlvHJEhUCgHj7fA1Do10W+2u8J2y2p0QBySwu95/iNwPOJ6iHpjANAVA8BlDydcXDLeSatBOfXd5pCIARi/V4ftqcYlGoVdufWeYxuJbaIwuQ80+kspVrlZ4Ow3ZLig+UtBX2nekKh3zPU4KP7jm4aFJsh+1PqHQiCYjOUvViJQQIRxWaIEzfYtGYAOI0bA5MVgtSYRfUhItkv6qZB2G4NiL4+5ZXZFPAPP9Of4xNby5wvi7GujQAAAABJRU5ErkJggg==",
            name: "More Hatred",
            description: "Creatures become more aggressive towards each other.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/More_Hatred"
        },
        {
            id: "GENOME_MORE_LOVE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABb0lEQVR4nKWTP0hCURTGf4YoJEoQ5mA45NJgIE02mEKbILU7BOKSW4u5NLVki5suJTS8vT/gJmhvSAjqQQ0tvuClQz6CUAxqscV38+UbJM907jnn+8537rkXZjSb4WTjkWGnN5gK5Pe4KNWbNkGQjUeGF8ozPrcbAMe80xL4/fkFwFu/z054lVK9abMDdHoDfG63CRgNJ8gk8wCcXh8jK1WR940wQsH2+tpQ0z9EwfnhjaWC3aNNoSTgXeDy/tE2ZyT/gotSgW5bp9vWKUoFU25cqSAwZAN02/pEdyNm1FgSZJJ5UbifOhBxw++2dXEvlgTjnafxJwiuHs4AkBoVVK0l4qrWQmpUTDWG2ccPslIltBgnFUsjNSrcvjRELhVLo2otZKVqIrBc497WCSuBIEvLXiFb1VqUaznAvEaTAsPKtRzRcIKQFgfg6b0+0dk0gt/j4k59xTcKOuadyEoVGTNo/ClvBP2/I8D/P9PM9gMwLqEdY2vhkgAAAABJRU5ErkJggg==",
            name: "More Love",
            description: "Creatures become more friendly towards each other.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/More_Love"
        },
        {
            id: "PEACE_WITH_GODS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTklEQVR4nKWTv0sCYRzGP2+IknYtDRe4JEHU0C8b0iVc29q8P6DJySG8SThwiCDCqb/B29xbosVAQmkSB08QwYYWzX4Ob4N3cuepBT7v8OV93+/n4Xl531dIKVlEAQAhBJlUQnb7w39B0dUIt/ePQko5MsikErJcb6AqCgDBcGgq+P3+BUC11SGTSkhABAC6/SGqoswEHTn7qs0ALE026StrnvqXxgbBcMgHzzJxJ/UkuHp7ZXKeNQpUGk0qjSZZozA7waSJA2uahrBHWkv7TISUkrOjPdkbfvjce58/WG2L2EYMAKttAZDc3mI9skz56Vn4ErjlwA4IYJbM+UeYZuKuRSM/3cB5JG6ZJZPz/eNxjR/GuTg48fTOTVA08pzu7HJ3eQOArutc1x88PQEYve1qq4NqL7rv2Q3UcjkAXgYDkptRwL6FRT6TWPQ7/wJX4YhRhOiGEAAAAABJRU5ErkJggg==",
            name: "Peace with Gods",
            description: "You make peace with your Gods.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Peace_with_Gods"
        },
        {
            id: "MANA_FROM_KILLS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7UlEQVR4nK2TPQ6CQBBGH4ZIooGChsLSxtLOn8ojeAgqDuAhPIAVh/AIVEZjY2llYyhsLDCaQIMFDgFciEa/ajPZ93ayOws/RpOFNxunYXT/COpZXVbBVssF3mycrg9HHNMEoN0xlGDyiAG43G7MhwNWwVbTAcLojmOab2Cy3GXCxagkdl4MQKuuzWS5w5raWFM7F6mSC4qnC+wb4Bu8SYp7lR0ILBFJYwfF+Io7VNVqBd9EKXDjz2q1gmhzLQFunNUaBTIkkL27SASWWajurb0DkVThanTIZnt/OuMI/HrnKlgc5Um/B/zhM/2cJ0xOXfx7LXFCAAAAAElFTkSuQmCC",
            name: "Kills to mana",
            description: "Every time an enemy near you dies, you release mana-recharging liquid.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Kills_To_Mana"
        },
        {
            id: "ANGRY_LEVITATION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLElEQVR4nK2TP2vCQBjGf4ZiaMK5ClpwqVDBoS5iJx0d4wfoJh38AA6uBYfS2albd+PYbrqJSwoVWkiXQiO4Ggwkix0koUdStdhnuXt53+fPHXdwJFLhptOobZzV+iBSPqMzGE9TkUCnUduMXt7JCgFAWlOj4XazC8CX88FZ/pzB8Jal62JcXjAYT1MKgLNakxWCtKZKZIBq+VGq05pKVgjCtCe7orabXWbzrUi1DDf3w9iM8lP5Nwyfr5jNr0maVZIIIR6e7na1gT1HkERek/uxBP3RBNOy6Y8me91jAqZlUyrkACgVcpiW/TeBt88FrUpRWvdBuoOeUY9cTcumVSkmkgLPB/1UThB4fizFIVBg+7aXrkvg+fSMepQmyTnwfJauSz6jA//wmY7GN92xa2YC6hfUAAAAAElFTkSuQmCC",
            name: "Rage-fueled Levitation",
            description: "Killing an enemy makes you replenish some of your levitation power.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Rage-fueled_Levitation"
        },
        {
            id: "LASER_AIM",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEUlEQVR4nK2TsUvDQBjFf9GixJBMgROy2EF0CYhTxi6d9e8ouHTsLBldhP4RTjoXpDhlEiEOxaWCBAw45UhDKhKXXrRQ60Hzpgffvfe97+472BCGIr1OUCVZriXyHIvhODJqg14nqG6fJgjbBmBnb3elcD4rAUil5PzkmOE4MloASZYjbPtPoYKqi4UGYEsr8xrUBv91X5Wk2QSHlw8ARJMXAEJXaBm0FJlOX+mPYm7eSvqjmEHXJ3QF90WBBxyZZs0T4JnPZYN2+4Crrs/XdcT2RUDoCgYf6U+rPFvqvG+ZwGIPzk796j0vtOdWBnePsVHfgVoSHfw+28wreI5FKiXzWbk2iaqnUuI5FtDAZ9oY36WtYR7LuEJHAAAAAElFTkSuQmCC",
            name: "Pinpointer",
            description: "Your spells fly faster and have lower spread, and you have a handy sightline for aiming!",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Pinpointer"
        },
        {
            id: "PERSONAL_LASER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQElEQVR4nK2TP0jDUBCHv4biv5AIFcyQTsXBwaFQkLrVKcFJnRwUl4BQ94KDi4vQdrVTF3GvUkHrIHazdnJwcBAnM2RtaKBZ6qAJrX2RSv1Nx919v3eP9w4mVCwI8rls3+50x4J0VabSbMVCg3wu2796fkVTFACm5qaFoO/1AHBcl830MpVmKxYHsDtdNEWJBAMFde2bAYiLGi2zEMbVRvFX09AgcA/gcr1EwlCR1udHoBmAth89QbleYv99C4A8RyP1Cqc8ZW7FBh/2GwDnqUsShso198LRF39eYVA7ma/TGw81IQyAPAuANJizzAJJfSkaEkgSJf9iEhoEnwRgdeWCbeORVDIthAZ7hyaoNopsHPZpv+xRu1vj5HhhvAl0VcZxXSyzwM1ZuB7sHgy/gO/18L0ejuuiqzLwD8s0sT4BiV1cYIkOg50AAAAASUVORK5CYII=",
            name: "Personal Plasma Beam",
            description: "You constantly fire a devastating plasma beam, but you fire spells much slower",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Personal_Plasma_Beam"
        },
        {
            id: "MEGA_BEAM_STONE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMUlEQVR4nK2TMUjDQBSGPyUoNhSyFVICBZeupQjBZnKTQgOODh0iOHQSHJzFycFV7FAHRwehWyfJUnApgiBkCRRCs7gIUtw8h/ZCrrHVUv/l7njv++/9Bwcrak1u3JYt4tH4T5BZ1OlePyUsbssWpmGIimWJimUJp1kVvugKKV90hdOsJnXTMITbsgWABhCPxhTyeTZymwtvlvXClAFYXyYvwHtNjanNuv8mo69DDr6m56UnmFVisH1rAXAZXPGmxXMB2SeVRAi9CICz8int4GYuLPsyE6Td+8PHDLx/7hB6UWYCxSD0Ihq9OncX9xmDWmlv8QSNXj1xb3d+jnC8e6L0QeoNXuMXZQWghBJJqaUNzKKOX38mf7AFwIBgAhxNgEEnUKCPh092DsvAf32mVfQNrHNxqg2ZTnoAAAAASUVORK5CYII=",
            name: "Summon S\u00e4dekivi (One-off)",
            description: "You gain an artefact that allows you to call the celestial rage.",
            bgImage: null,
            wiki_url: "https://noita.wiki.gg/wiki/Summon_S\u00e4dekivi"
        }
    ],
    spells: [
        {
            id: "BOMB",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAhElEQVR4nGNgGDCQ7mRZl+hLgmoIoy7RlyhtcA2YgBGNr6FtKSmtBGE/f3rvxtXjaApYcKnW1LHQ1LFgYGBA08OEpvr503sQ1RBBJ/coDW1L7BogquE2IItj14AMrl85gcbA7gcGBga4JZhK0W2AuB6TAedCAEqwovkP4iu0UCI5HmgPAB2AOuMbGMUUAAAAAElFTkSuQmCC",
            name: "Bomb",
            description: "Summons a bomb that destroys ground very efficiently",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Bomb"
        },
        {
            id: "LIGHT_BULLET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAQUlEQVR4nGNgGAXkgrWFn/BwsSt9tuzns2U/IYyfr/9C2NjVrS38BJGGqIOrRteDLARRB9EJEcTnKmTNhNWNCAAAKWA/S/mQ4KkAAAAASUVORK5CYII=",
            name: "Spark bolt",
            description: "A weak but enchanting sparkling projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Spark_Bolt"
        },
        {
            id: "LIGHT_BULLET_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAi0lEQVR4nGNgoAR8nixOUA0ThPp+v5qBgYHFwALOxgUY4azvh/0ZZHQYnlzhtN1IQMPnyeIsBhYMMjpQsSdX/lw4wZv7kjo2wFTfr4bqIeQHFEBMKFEJrC38hIeLXemzZT+fLfsJYfx8/RfCxq5ubeEniDREHVw1uh5kIYg6iE6IID5XIWsmrI76AAD6KWBDF25sYQAAAABJRU5ErkJggg==",
            name: "Spark bolt with trigger",
            description: "A spark bolt that casts another spell upon collision",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Spark_Bolt_With_Trigger"
        },
        {
            id: "LIGHT_BULLET_TRIGGER_2",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoUlEQVR4nGNgoDb4PFn8PynyTDDG9/vV/xkYGBhYDCxQ+ITkGVEUHfb/zyCjw8Dw5AoDp+1GFDlc8owwZ7EYWDAwyOggVD+5wvDnwgkG3tyXjPjkKXYBhh+/H/b/jy8McMnDAamxQFvg2HcZwzZsYng1lp76/7/01P//MPbP13/hfLyaHPsuwxXCNCFrxmoIugRME8wwmBxR3kA3kCRNdAUA1/KmWKTR628AAAAASUVORK5CYII=",
            name: "Spark bolt with double trigger",
            description: "A spark bolt that casts two new spells upon collision",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Spark_Bolt_With_Double_Trigger"
        },
        {
            id: "LIGHT_BULLET_TIMER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAuklEQVR4nGNgIBEwQijt4OkCEiYQ9ocXZ66uzcSnSTt4unX26cPXvy9fvvzw9e/W2ae1g6fj0wBR/fr169evX0ubp0P04FLMBKGeXNjAwMBg4FNzYUsLhE1Ag4xBAAMDw4UtLXA2Pg0fXpypmHLlxhuePXv23HjDUzHlyocXZ3BpICuUqADWFn7Cw8Wu9Nmyn8+W/YQwfr7+C2FjV7e28BNEGqIOrhpdD7IQRB1EJ0QQn6uQNRNWR30AAOCPf5m6svOeAAAAAElFTkSuQmCC",
            name: "Spark bolt with timer",
            description: "A spark bolt that casts another spell after a timer runs out",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Spark_Bolt_With_Timer"
        },
        {
            id: "BULLET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAK0lEQVR4nGNgGAXUAPnLuamhJ3859/H3yf///4eQmOD4+2SauYocPww3AAAk4SPZa4mzvAAAAABJRU5ErkJggg==",
            name: "Magic arrow",
            description: "A handy magical arrow",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Magic_Arrow"
        },
        {
            id: "BULLET_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAdUlEQVR4nGNgoAR8nixOUA0ThPp+v5qBgYHFwALOxgUY4azvh/0ZZHQYnlzhtN1IQMPnyeIsBhYMMjpQsSdX/lw4wZv7kjo2wFTfr4bqIeQHFEBMKNEA5C/npoae/OXcx98n////H0JiguPvk2nmKnL8QBEAALkQRNFvH6gTAAAAAElFTkSuQmCC",
            name: "Magic arrow with trigger",
            description: "A magical arrow that casts another spell upon collision",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Magic_Arrow_With_Trigger"
        },
        {
            id: "BULLET_TIMER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAApElEQVR4nGNgIBEwQijt4OkCEiYQ9ocXZ66uzcSnSTt4unX26cPXvy9fvvzw9e/W2ae1g6fj0wBR/fr169evX0ubp0P04FLMBKGeXNjAwMBg4FNzYUsLhE1Ag4xBAAMDw4UtLXA2Pg0fXpypmHLlxhuePXv23HjDUzHlyocXZ3BpICuUqAzyl3NTQ0/+cu7j75P///8PITHB8ffJNHMVOX6gCAAAn3ZkJ5uCp1MAAAAASUVORK5CYII=",
            name: "Magic arrow with timer",
            description: "A magical arrow that casts another spell after a timer runs out",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Magic_Arrow_With_Timer"
        },
        {
            id: "HEAVY_BULLET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAYUlEQVR4nGNgGAWEASNW0f7D6ioyKhoKBgwMDCoMLXcYahgYGFQZW1E0QBTdeXIHolSFoQXNlDsMNaqMrYwQpXBRuMEIEZgNNx5c8FXciu4kiGYVGRUIF6IZopREz45oAACIpRsF/hEp8wAAAABJRU5ErkJggg==",
            name: "Magic bolt",
            description: "A powerful magical bolt",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Magic_Bolt"
        },
        {
            id: "HEAVY_BULLET_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAq0lEQVR4nGNgoAR8nixOUA0ThPp+v5qBgYHFwALOxgUY4azvh/0ZZHQYnlzhtN1IQMPnyeIsBhYMMjpQsSdX/lw4wZv7kjo2wFTfr4bqIeQHFEBMKNEeMGIV7T+sriKjoqFgwMDAoMLQcoehhoGBQZWxFUUDRNGdJ3cgSlUYWtBMucNQo8rYyghRCheFG4wQgdlw48EFX8Wt6E6CaFaRUYFwIZohSkn0LNkAAALbO/0E6mx5AAAAAElFTkSuQmCC",
            name: "Magic bolt with trigger",
            description: "A powerful magical bolt that casts another spell upon collision",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Magic_Bolt_With_Trigger"
        },
        {
            id: "HEAVY_BULLET_TIMER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA2klEQVR4nGNgIBEwQijt4OkCEiYQ9ocXZ66uzcSnSTt4unX26cPXvy9fvvzw9e/W2ae1g6fj0wBR/fr169evX0ubp0P04FLMBKGeXNjAwMBg4FNzYUsLhE1Ag4xBAAMDw4UtLXA2Pg0fXpypmHLlxhuePXv23HjDUzHlyocXZ3BpICuUaAsYsYr2H1ZXkVHRUDBgYGBQYWi5w1DDwMCgytiKogGi6M6TOxClKgwtaKbcYahRZWxlhCiFi8INRojAbLjx4IKv4lZ0J0E0q8ioQLgQzRClJHqWbAAA6TJbU2fOo4EAAAAASUVORK5CYII=",
            name: "Magic bolt with timer",
            description: "A powerful magical bolt that casts another spell after a timer runs out",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Magic_Bolt_With_Timer"
        },
        {
            id: "AIR_BULLET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAYElEQVR4nLWRXQrAMAiDdexo3jq9W/YgiKw/rozmKYV8UanICQEA4P460vopTZKkMzXMpBd8991m5r61JiLxHCwwK84TCiyA4oa+PhhdMG7yDarT/Hhakct+4xO39bf7ASmgpJyxEBsjAAAAAElFTkSuQmCC",
            name: "Burst of air",
            description: "A brittle burst of air capable of greatly pushing objects",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Burst_of_Air"
        },
        {
            id: "SLOW_BULLET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAxElEQVR4nKVRMQ7CMAxMUYdKmXgHe0aK+gzWSix8Ip/oErVrn4Hcjux5RyaUbGawZNIEIhCnDPbZF8c5If4EIubkCD7NU+ozaiGEgXA5NZTLbjgcz1y26/y4XSlW2t31fqOW3aC0G8EjIiKO4JV2shvez4q7C5qKI6UdP4zRt820BAOBH7MrrzgtIWE2gr5tOKATk4Q6uS8p50NeE+w6GwhUjpsMBLvOnFaxmkyIV6dutiIViKJxP4Bs2eygtCtr8v/9Fk8h6HTJMbvcFAAAAABJRU5ErkJggg==",
            name: "Energy orb",
            description: "A slow but powerful orb of energy",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Energy_Orb"
        },
        {
            id: "SLOW_BULLET_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAzUlEQVR4nGNgoAR8nixOUA0ThPp+v5qBgYHFwALORgZzDnyHsxnhrO+H/RlkdBieXOG03UjAhs+TxaGqGRgYZHS+H/bH6jazhvfYbbDfuwAueKpBELtFEHd/P+xv1vD++/3q////////f86B7xBTcYLPk8XnHPgOUYpLD8JJZg3v0xw40IxItueYe/DHrAM/4G5jwmcjA8Pcgz/QRFA0JNtzwBkQhCwIASxo5qFJY7UEAcwa3pPgabgeZK8jexdFg1nDe7gEspE4I454AAA3Unc9ZBgluwAAAABJRU5ErkJggg==",
            name: "Energy orb with a trigger",
            description: "A slow but powerful orb of energy that casts another spell upon collision",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Energy_Orb_With_A_Trigger"
        },
        {
            id: "SLOW_BULLET_TIMER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA90lEQVR4nGNgIBEwQijt4OkCEiYQ9ocXZ66uzYSrMGt4f6pBEEWTdvB06+zTh69/X758+eHr362zT2sHT8dnC0T169evX79+LW2eDtHDwMAw58B3TMVMEOrJhQ0MDAwGPjUXtrRA2AwMDCkOnHB1cw58////P0KDjEEAAwPDhS0tcLZZw3uzhvfIZs89+AOfH/7//z/nwHc0PThDqTA3IdmeA2LqrAM/kEOJEc4ya3if5sCBZl6yPQeaHibMcMDubhhA0QBxBoQBQciCEMCCZh6aNFZLEMCs4T0kvCEk1oBixNSD7HW0IIJqmHPgO3KkIhuJnuzIAADyi468RWnmkAAAAABJRU5ErkJggg==",
            name: "Energy orb with a timer",
            description: "A slow but powerful orb of energy that casts another spell after a timer runs out",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Energy_Orb_With_A_Timer"
        },
        {
            id: "HOOK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAUklEQVR4nGNgGDIgfzn3/+Pvk/8ff5/8nyzNyPz///+TbggyIMsVVNFMttOPv0/+T1AzLJT///8Pp/EB6ruAGEAVQyiKBbINoUpKRI4lkjXjAwA6L2xpdLVKyQAAAABJRU5ErkJggg==",
            name: "Hookbolt",
            description: "A glowing hook that pulls the caster towards itself upon collision",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Hookbolt"
        },
        {
            id: "BLACK_HOLE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwklEQVR4nGNgGDQgpHbGLGzshN3f/yfs/v6fZM0wjarSpv9VpU3/E2VQwITd22GaYRrRMbohTMiaNxS4eibs/v7/aIIdAwMDA0OUTz6GJUcT7BiQDWHCUAEFUT75DA0zorEaggFC5l88gs3p9elLMLwws/oYildwuoCBgYFh2ZaJGGI9C1BdxMTAwMCwJlHfJmDC7u0LXDkZrRccgnsB3UswYL3gEMMCV05GvC5Atp3o8MAXjbDwwJoWqJKQKErKAwoAthidjDxI83MAAAAASUVORK5CYII=",
            name: "Black hole",
            description: "A slow orb of void that eats through all obstacles",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Black_Hole"
        },
        {
            id: "BLACK_HOLE_DEATH_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABU0lEQVR4nKWSrU/DUBTFT+uWTCBJiq2qYIIGUTI3V9FkU8MUtZGJ2SVAmJhEjGRJB4YKYGYkiCYTndoHZhMjKdn+AESTTtRVXlRLPwfJTvKSe/Le+9377rvAnmL8QChrdHB4Emy49hJfb5dM6q24hLJGUmNB07VHg8GApmuPpMaChLJG/wL4lx3HIcdxiDutBRDV9Eg1vUwQ6wffq3cAQEG+xsroBH6uFjFXi8gCBYCjggIAWBmdiPcVBiUArr1Eq2dhs81jPB5js82j1bPg2stEyXHIzl+whnW06y94Ne4jEEmfQC/lfn+o8vQ5AwDV9IjnxGDd1p4jnudEerj6IJ4Tg36w2KF4ZgC405sRzwLA8OL4TOmaI72UYyR9AgCoytGDYR9+QmYF4exVuYl2/zwBTUjpmiMg2YtwP1KHqnLTf4zH/uD4gL8mMhUSBu2ufQ/9AFqWzP064kwcAAAAAElFTkSuQmCC",
            name: "Black Hole with Death Trigger",
            description: "A slow orb of void that eats through all obstacles and casts another spell as it expires",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Black_Hole_With_Death_Trigger"
        },
        {
            id: "WHITE_HOLE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzklEQVR4nGNgGDTAJ3F2PDa2qKLTf1FFp/8ka4Zp9LfJ/+9vk/8fl0GMaAbN3TI/NVlU0em/lbQuVsuOPb3M8Pr+Prg+JnyaDbRNMQywktZlQHYJE4YKKDDQNmVomBGN1RAML/gkzt61ZX6qG7rTDbRNGS5cPY2iwcs+nGHbwZVwr+B0AQMDA4ZmBgYGhm0HV6LwmRgYGBi2zE9180mcPff1/X2Mx55ehtuO7iUYQA5InC5Ath1feBAdjbDwQI9GmEayExJeQ5ANwqlxwAEANyR0d3fNi58AAAAASUVORK5CYII=",
            name: "White hole",
            description: "An orb of positive energy that destroys everything in its path",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/White_Hole"
        },
        {
            id: "BLACK_HOLE_BIG",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA20lEQVR4nJVSKw6DQBAdNhhOUcclNsGRIDjAlpoViKpyhV6BqgrEKsoBKkhwJHuCOs7RBFsxZBkGCOlTO7Pvzd+DJXQ3Mo+JA2p6nNoOtsmdU6oKkpDKfMe2OoIVTt9PrXMkoEZQdpYWTFC/S3xYHWEJwv1laXF/XtYaBl93I7TDFOw6h9xAO+huFABgmxwDUzZN9Xo0SAMAb6/dTUjTi2PWElyA2Q8EUlXOPt/Ubj2qAgBh4gB3uYe5+yQ0cXDQw3o50y3RWWVpweZbv0tpejyNv49vFixkBOy8f4iRYGPCvhx8AAAAAElFTkSuQmCC",
            name: "Giga black hole",
            description: "A growing orb of negative energy that destroys everything in its reach",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Giga_Black_Hole"
        },
        {
            id: "WHITE_HOLE_BIG",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3klEQVR4nJVTIQ6DQBCcI7WtaVAoVMWFBINB8o3+oUkf0KTP6GuQmJomlwoUCkUw8AAqyG2O7V4LI/du5mb2dhUEhHExSfWuKRWv7STi6ZDguF9e7EcAMSYupFxyHiUAgFRneL2fkgkAQNUaEgk4GYCXnOoMAJBHCbkNvM8I5PvjTCIUIYyLScrsE7Hu+hGoBzM7sOTb9SJatrDkVGfEUTz/FlStWd8DH1YL8HgWm5rogprYNaWqB0MHvHE+1MM8TIsIvr/+ha9RlsaY19xRXmzXv2WyUcVlkoQ4pHX+AAtsYYDxUBkrAAAAAElFTkSuQmCC",
            name: "Giga white hole",
            description: "A growing orb of positive energy that destroys everything in its reach",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Giga_White_Hole"
        },
        {
            id: "BLACK_HOLE_GIGA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwklEQVR4nGNgoBAw+k09/B+bxKZsW0aiDFCVNkUxwMgjh4GBgYHhu5ESUQYxqkqb/l8+aQVDZF4EhqSRRw5BgzBcEOWTz7Bsy0SsBmEzBMMAXACXIUzEaGZgYGA4t2MKA+e5ewzogY7TgOWTVmA1BB3ADYjyyUeRwBaoDAwMGK6AG4AecLgAuiuIDgNcriDKAHTvEXQBugZ07yF7A8OAKJ98hoYZ0XhtRXEBNtsaMpZiDVRsUUt0SkQHmlV9DJuybRkBdmJNmltJEpYAAAAASUVORK5CYII=",
            name: "Omega Black Hole",
            description: "Even light dies eventually...",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Omega_Black_Hole"
        },
        {
            id: "WHITE_HOLE_GIGA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVR4nGNgoBAwiio6/ccm8fr+PkZiDGCxktZFEXj7GcpQZPhPjEFMDAwMDLWFeXABYV4ItpLWZVDn02UQVXT6j8uVDAwMDIz+NvkokgbapgwXrp7GcNXNT5exuoYJXQBdM8xVMNcQNAAXwGUITgOQwwXZEJwuMNA2RZFo7p+E1WB0V8ANwOZ3bADdFUSHAS5XEGUAuvcIugBdA7r3kL2BYYCBtilDw4xovLaiuACbbQ0ZS7EGKraoxUjKxIJjTyFJGwDbc0GHYj8GRQAAAABJRU5ErkJggg==",
            name: "Omega white hole",
            description: "A massive orb of positive energy that destroys everything in its reach",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Omega_White_Hole"
        },
        {
            id: "TENTACLE_PORTAL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlklEQVR4nLWTv2rCUBTGv5Tu2iwJSgwdKnXQRqGgQl8gu5ubYwVfoDgEXyBgR3dBaKf4AsI1k0YdUuwUL4ou/nmBpoOcS/wztmfJ5dz7nfM7X+4F/itGrfmkW3XC89z5uZvzhG12xt2qE86/vnPlYhmD12lom50xAAzY4GfR3p0UvaVFdCPwOZYHjsDn0DMalgdu2GZnrMiqcZVg1JpPPvsfHnOZECVjGgAgUYkjGdOgyKpBOSISBQpv6adGv5bfbNcedS41swCAVW8PAEjGNOgZDYHPESURHhAidVn19tAzGhKVOPSMhlIzK0aLGio8KNw/GyRY9fZIVOInsw6t2QkJc1kOACQA6FadsFwsI/C5EFAxCiq66u0R+Bwv7zlJEKQfH6ZUMRk74tLs9A18jsA6jrDZrr0LE6N4Q2uGwOeiG5GQuNGv5S9M3GzXHrlMRpFwaM3Er1Vk1bDNzphMlKJGLdq7kLkMm+3aU2TVIF+WBy7oKFL1O+mEIEpCd4IuFeEzlyFVv5NIfDXOH0y36oTXHtGfxS89q+GT9theCAAAAABJRU5ErkJggg==",
            name: "Eldritch portal",
            description: "Summons a one-way portal to a sinister realm",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Eldritch_Portal"
        },
        {
            id: "SPITTER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsUlEQVR4nL2RsQ3DIBBFP1bkjl08ijtvQOnMEkoWsOmYw27YxZVpSBHOIgjHF0XKr7iDe/r8A/6tbTBxG0yk+pZdPACMqdTSqnttuO271xkmSqtEkw+3fYf0YEw9vq19WiJpn5Y3m6wvcCWtEnlNAB2cp/8jOA8AmgM8aLUQOcGKslECKXVyVYNUh8+CZW2nHP60neaSdqEzgA7OI8zr0QjzWt3OzyGeAnIIuWJt4Fs9AS4umq4vlk7NAAAAAElFTkSuQmCC",
            name: "Spitter bolt",
            description: "A short-lived magical bolt",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Spitter_Bolt"
        },
        {
            id: "SPITTER_TIMER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABN0lEQVR4nKWRsWrCUBSGv6QlkwGHDj5CQYcMbnZ07CA4pGOnQFFsR4eOHVwrgpAXUIdCho5uLsU4ZLDo0LGDoEMgBTHL7WIuaWoaiz9cOPfc83+ccw+cKCUKivW+yBfK8sFfzXh/uVOShsC0BYA+shQANW7uNEs0rz7oNEvkC2WK9b5ImrWagVYzJEgFiMyXF19Uq1Vubh8kJEtqFHx6DgDG9SPe65O8x6WPLCV0PELHkyMAUGm4YrLYivV6Lc9ksRWVhit+UQ514K9mtHtzlpsc4/GY5SZHuzfHX80yR/hzC2/nZ12gtU919ZF1nwpIKjDtZ6Cl1QwAQsdLhRw0B6YtdoOpiLQbTEVg2mIPzgT8MCch8Vo1DXKs0gDd0PEIh65MhENX/kO88ORPTAXEIVFXR23gv/oG1KW0qi5CJjcAAAAASUVORK5CYII=",
            name: "Spitter bolt with timer",
            description: "A short-lived magical bolt that casts another spell after a timer runs out",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Spitter_Bolt_With_Timer"
        },
        {
            id: "SPITTER_TIER_2",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzklEQVR4nGNgoDcIepZ7JOhZ7hEYnwXGsD4Z2iguK+HMwMDA8PLxi71HzVfXY9McKylszcDAwMDwLPfIOqnJNizImmGSiyFiDNgMwems9f8b/sPA+v8N/5GdSZQXiAXrpCbbIPNZGBggfl7MwMDAINkI8cLzt0dfPn6xlxgDGWEMbIFITMAyogugGwgPWKiriApY65OhjbgC1vpkaCNBA9A144sdJoKmEQBYDXj5+MXexc/fHt3AgHDtBoZGrLFDcSDiNADZEJiriE7apAAAG0Wx6AFfFvEAAAAASUVORK5CYII=",
            name: "Large spitter bolt",
            description: "A more powerful version of Spitter Bolt",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Large_Spitter_Bolt"
        },
        {
            id: "SPITTER_TIER_2_TIMER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSElEQVR4nKWRvWvCUBTFj5kdAhZMBPeCDh2EDs/NjJ0iQhehazGBTsWhUFM6uCv4B2QsVYeO2kUziA4Oig7dLEkkBjIUHF+nl4Y0qRYPPLiXd8+P+wGcqAQLcuUO5YWC/+HZMyxfbxNhg2yqYwDoZlpFAOCC5qaSh1L8QFPJgxcKyJU7NGyuiilSFVOEgTgAYObzsy9IkoTrmzsfckgcCz7nfQDAxdUD5m/Pfh5UN9Mq6pZr6JZrsBEAAKQ2paPVnjqO47/Rak9JbUp/UaI68OwZ6u0F1rskBoMB1rsk6u0FPHt2cIQ/r8Dfvz+ls0IJALYbe2hcvjzGAsIik4qWzgqlqpgiAKBbrhEHiTTLpjru0QZl6tEGlU11TCYV7SAgbA5DgrVcHORYRQK2G3uoW67Rx0+3fWj+HoK1Jy8xFhCEsK6OusB/9Q1O3MZmuPyQiQAAAABJRU5ErkJggg==",
            name: "Large spitter bolt with timer",
            description: "A more powerful version of Spitter Bolt that casts another spell after a timer runs out",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Large_Spitter_Bolt_With_Timer"
        },
        {
            id: "SPITTER_TIER_3",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtklEQVR4nGNgoDfY2fN+/86e9/sxJDrib2fDJDvib2fj0vzi4P//Lw7+/w8zhAWm2VBXJETfVMAByUCGioWqU4l21ouD/+EA2QZCXmAhygYk4F4i6IjMZ2FgYGA4f/nNGgYGBgZ9BogXLp7+cAAmRggwwhiwcIAZWLFQdSo2MaKdCosV5FDHFTt4NaMHLFGGoGvGFztMRPsJB8AajcixIm4HEXt5iLTYIToQGbFpRjaE7GgkFgAA3oHJDlAqqosAAAAASUVORK5CYII=",
            name: "Giant spitter bolt",
            description: "The most powerful version of Spitter Bolt",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Giant_Spitter_Bolt"
        },
        {
            id: "SPITTER_TIER_3_TIMER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABL0lEQVR4nGNgoBAwwhjawdP/C0iYwCU+vDjDcHVtJiO6hp097/czMDAwuJcIOjIga7bOPv3/8PXv/5cvX/7/8PXv/62zT//XDp7+H13zi4P//784+P8/zCAmBgYGBgEJE4aOHB0GDZEvDC4uLgwRCQUMHTk6DMguwgWYYIwnFzYwMDAwMBj41DBc2NIC5yMD9xJBx4unPxy4ePrDARQvwJz/+vVrOIZ5gygXfHhxhqFiyhWGG294GPbs2cNw4w0PQ8WUKwwfXpwh6AW8sRDL45JjqCsSwsDAwHD+8ps1FQtVpxI0EQY64m9no4d6R/ztbJI1wwBJhqBrRjcEWS0TLkOIBSzYBM9ffrOGgYGBQZ9BwEHcDiL28hADw8XTHw7A5AgCYgMRI7OgG0J2NBILAEJE4hcLdfE+AAAAAElFTkSuQmCC",
            name: "Giant spitter bolt with timer",
            description: "The most powerful version of Spitter Bolt that casts another spell after a timer runs out",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Giant_Spitter_Bolt_With_Timer"
        },
        {
            id: "BUBBLESHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAtElEQVR4nGNgIBEwovE5feeIGIcxMDC8Obvq++YUAro5feck7f+27t6vdfd+Je3/xuk7h4AG2YZP6+79+v///////9fd+yXb8AlTDRPxrocAFmTOm7OrtthHQdhbHv55c3YVpgbKPE0MQLeBWAs5fefINnySbfiEHJQ4QxmXBNZQZmJgYBAxDvORZwlUZA1UZPWRZ4G4ARdgwSOHNZRZcEkwMDB835yynIFhN6qnGQmEBuUAAJU5gBVxKUWhAAAAAElFTkSuQmCC",
            name: "Bubble spark",
            description: "A bouncy, inaccurate spell",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Bubble_Spark"
        },
        {
            id: "BUBBLESHOT_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJUlEQVR4nLWSsUrDUBiFv5Z0yOBWrNCG0r1bH8AXaIhdOjiGrj5Bliw+QR2zCxEC0oKgQ4a4ZnNOEFyETqn0Sij8DrWl2Ggi4rfdy7n/PfecC3+k9nVjOW3J8f0lzcEYgEXso2aTA90BKnUEQEWW2OFKVOpIkORihyvRTU8q2VGRJSp1REWWbAmSXAw3+3ZAfWtbRZbQ6W92O33eH894uzopvVQDOLp4rcEtKmIz5OWJu/YNtGH+vGYR+xXs72Wgm56o1BHDzaq/f8ty2vrVgfJ6PtFNT36sVjc9Mdys0LZuemKHKwmSvLjaMoHhZhIkeWG1dYDmYMywqzHqNRj1Ggy72u4nlqFVES1in/np+W69X61WJgBQs0ntGuShIMRdkqUp/xcf7MDKvN1aqBsAAAAASUVORK5CYII=",
            name: "Bubble spark with trigger",
            description: "A bouncy, inaccurate spell that casts another spell upon collision",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Bubble_Spark_With_Trigger"
        },
        {
            id: "DISC_BULLET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/0lEQVR4nM2RP2oCQRTGfyteYRcFZSHY2GwRrIwHEGxyAatp7L2LTLPVXMBmYA8QrUTINjZpRCFhc4hJ40yeYVckRcgHUzzmvff9efDvoJQqALSxK4DycHL+/XqpNtZpY8MSuax1YV3Wsa6LvdPGhubtrkTWANEt1qa/TtzlefoYSQXe9+anRIDjueJ4rkL98fmO72srpZZ5nk+1savFfPZUHk5uuyuvhqu3l0s1Ie0lVwpbTTLvRe2CxXwWskl7CclgQjL4ZgcYjzKyYT9qDHFd7J33eoskKBCn3AA8pHHtYCfuMh5lIeh2Tc+rZJGhSmsejRYk5FmzYf+umb/DF0J3gVu+x/ujAAAAAElFTkSuQmCC",
            name: "Disc projectile",
            description: "Summons a sharp disc projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Disc_Projectile"
        },
        {
            id: "DISC_BULLET_BIG",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA50lEQVR4nKVSsQ2DMBA8I4ZwnZRugtwlZepImYQNoACJAShoWAKJmjLpEGkok/q3IJUdY5sQhass6/7+7v+BjWBrhKbtJgDohxF5Gjv8YKlAvfthXCx2HKgCIgLnXP8TEeqqYEr8ejmzrwJrkJHQIgEAJFnpKC+BiGa8UCkmWTkRkUPmnM8imdG0AwU79+tJuN8eTpE56EBZl5GYkWwxE/0wahHtwM5PRDieDtjt+Vex0JfZdGDbr6uCAZ/B667/rNCJICMBGQnkacx8G/FhFsFUVtbNjk3bTfasvIeTZOWktvLLcW3CG5B1fie6q6AjAAAAAElFTkSuQmCC",
            name: "Giga disc projectile",
            description: "Summons a large, serrated disc with a curious flight pattern",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Giga_Disc_Projectile"
        },
        {
            id: "DISC_BULLET_BIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABz0lEQVR4nI2TT2sTURTFfy8dIQSLtWlhFg2hgosJCq7VFkJCB3ECgSz8FgUXLu3C7rIKfpJAZiMkBNLYhSAtpM0sAi1xoj6IYDAbF2meC/Me4yQFz+r9uee+e+49T7AC3WpNZTtNkfF9AOqNltJ35VJBRGNFjEu3WlNfwm/sXffFcL+oAD78TgBwfHQoQs9DJwawouTz12/UnU+n9FKbnOzmVLAgAkgpqTdaahj0CMFUZyrQL9vTCe0Hj1YpAyB/dcHm/XukB4HI+D4Jre+H85hge8cErYIzHgHQnwm0PFFvtNTns0uklNi2jTMemURxsj2dINc3aN9Y5NdmpA5cRLdaU7pJmuyMR7RvLGzbNvrza7N/Eh8fHQoAEXoew/2iSRLF6cdzAJ4+e7JUya/KK8qlgkhkfJ+737/eqjuOYHsHub5h9gIg9Ly/Y4uUqHsSX0fhJufLTfwf6J7kLEWiXCoINzm/laxHF8XLFwX2rvsCFk7Mdpqi8tBR/ZlYOcI4toLews6+SABkfJ/0IBA5S+Em50gpTbA9nZC/ujBnbnJOttM0Dl76TABv371XAJWfIQDpQSBOdnMqdeAu/UYrTtbW3gp6xu8A3WqR5zEywB/w0td1wQy/igAAAABJRU5ErkJggg==",
            name: "Summon Omega Sawblade",
            description: "That's a lot of sawblade",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Omega_Sawblade"
        },
        {
            id: "BOUNCY_ORB",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4UlEQVR4nK2RrRKCQBSFP80sNqszZIIBmy/EM2CE5APwLI6VBoFAZoZKEtaOQdZZ1sW/8aS9u+d8c/de+KfCrM//CrTpeBkGvV686CYGorFM0r17sPmsAPUVzxcBQF3JAiDdu7u3gDDrc0eIYL2B7eoKQNk5tA1cpSxMyNLSNnoY7uf1ZuqxAoDI80Wgh3XI+KVIvzcBX8sEJHUli7Jznoxl56hhJrMAtaq2uQf0cNtMPUqPLYRZH6vHb9a4VGHPF5Ga8Gg81ZWkriTASQ+bm5i/tCjM+vg8yOFT/yzk57CpGxWnblP8HYZXAAAAAElFTkSuQmCC",
            name: "Energy sphere",
            description: "A fast, arcing projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Energy_Sphere"
        },
        {
            id: "BOUNCY_ORB_TIMER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTklEQVR4nKWSoW/CQBTGv6LbglyyKSyICsgE9TMTS7DzS4NegkAWhZkguT8BsyUTmGU46jhR0QUUCckEoYjSa4J8E+wa2h7byD517/p9v3uvd8A/pclFrc2octFIP0Rrjo8XR1Om8qq1GbU6M5rO9zQajWg631OrM6Nam9GfADIchiGFYUiX1w8pJO8dRJTZK8nFp/8KALBue/DHblo7XkyOF7vS91jRNCXgyroDAPhjN1NX6wYA3DhePFN1XwIOP6w7DLDY6phMJlhsdXSHAaI1h1VOUK0bDd0wGirIj7fw9Hyf1v5OxzIQHMAbs81eASDnrdYNWOVE1a2EgNlmmispnWcoD+gvA8H9nX7qdA6gfxIgZ9usDoHj8GaV9RQA8q6ZbTYTIbjsRJ6cCMGZbTaPvTgODyLKPBjHi93vR1TYfydBSkhh8BM6x/urvgCzrsTA5ALn6gAAAABJRU5ErkJggg==",
            name: "Energy sphere with timer",
            description: "A fast, arcing projectile that casts another spell after a timer runs out",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Energy_Sphere_With_Timer"
        },
        {
            id: "RUBBER_BALL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAgUlEQVR4nGNgGAWMuCRM29T/SxgKMzAwMDC8OP+W4XTVTaxqmZA1YNPMwMDAIGEojCGPYoBpm/p/mA3Imj3MZBk8zGQxDDlddZMRxmaCSSLbBtMMA8iGoKuDe4FcwMTAAAkkGICxd5x6DBeDsbGpg4csrnBA1oAsD2NTHI2jgIEBADN0RPocImTTAAAAAElFTkSuQmCC",
            name: "Bouncing burst",
            description: "A very bouncy projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Bouncing_Burst"
        },
        {
            id: "ARROW",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAARklEQVR4nGNgGAXEgalGRidiYqimZ/H8vnt3r8O5jHBWqr8esjpTLYnT116YakkwMDBwqnkwMDBY23kqKWuSbAO5fhhZAACBchiqTvpNEwAAAABJRU5ErkJggg==",
            name: "Arrow",
            description: "Summons an arrow",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Arrow"
        },
        {
            id: "POLLEN",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGklEQVR4nL2SP2rDMBjFXzsmEDoEH8BejCk9QYdqiLPmGh4y9gSlBygdBA2UnqAEOkUZRCCDM2VzvUiQJZTaQ9AJOlQ2iuSqgULfIvH4+H1/gT/qrMtknI4BxIZVpiRbnARgnE4AXA8GF8PGU+pQA1inJJt7ATrzKAqT0A4UspAAlnYl51ZcbGYGEDQf7cdWvAMwFfR7wdCEdMkH+LTekwClHpgj7ZdegB7QWshCVvVeAUBV75Ue4K5rlU4LelVLpQ5bnXmL7+k/+lppVnikj+rdKZlxOhW71SvjdNpWwDgdX13ePNiQPN84iaIwIf1ekERhQlpASrLF7OkZP52rKSELnucbCFnw32Jxd3/rtAAA87eX1vfdwf/oC2KebbJdLI5KAAAAAElFTkSuQmCC",
            name: "Pollen",
            description: "A small, floating projectile that homes towards nearby creatures",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Pollen"
        },
        {
            id: "LANCE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOUlEQVR4nGNgGAUUAIu2N7OufZh17cP///8t2t6QoO3///////+fde0DdsMgJFaAooc0G6jph+EJAGXrUDr+KU7XAAAAAElFTkSuQmCC",
            name: "Glowing lance",
            description: "A magical lance that cuts through soft materials",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Glowing_Lance"
        },
        {
            id: "LANCE_HOLY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAARUlEQVR4nGNgGAXUB/8PeP3/////fxSx/////3/b8h+XHuwGQTX8P+D1H12MLENQALpB/9+2wCVIAdRzAVXDgGqxMIIAAPXdkw2ZxefEAAAAAElFTkSuQmCC",
            name: "Holy Lance",
            description: "A fast-flying, penetrating lance that glows with power",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Holy_Lance"
        },
        {
            id: "ROCKET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAfUlEQVR4nGNgGArgrYPoWwdRotTB2V+7Xb52u3w/H0+UNrjSr90u35+3////H1kBI1ZtX7tdmFykGSQ0/i3ZyxTjzCFRwcDAwMjIiJCGuwdu/Pfn7XAbICSaVQhtED2YqiEayHISmtLv5+O/P2/H5WlE4ODSRhgQG3GDBgAAYYhrmVipdvgAAAAASUVORK5CYII=",
            name: "Magic missile",
            description: "A fiery, explosive projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Magic_Missile"
        },
        {
            id: "ROCKET_TIER_2",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhElEQVR4nMWS2wnAIAxFHUcK/mUJ58gKzuJKLtA9HOH2S9BofNBC75+Sc0I0xvwRvi80FykzlNohDACdRMYGDxv8sEiFJeAiwUVadxuJatBFQsoMAGeiIkmZUUs6kYvUzFt3l7AqkaIi0eCtcbZHmIHlvHzE0Z9L0VFmi/Q6qvh4477IA9gttjfpBvGOAAAAAElFTkSuQmCC",
            name: "Large magic missile",
            description: "A more powerful version of Magic missile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Large_Magic_Missile"
        },
        {
            id: "ROCKET_TIER_3",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvklEQVR4nK1Tuw3CMBS8NwISJRIbsACiYY5swQJeIF1GYAP3FEEskBLR0KMwwlGA5Zf4xcFSrrLsd/fufQwsBe9I62yhb0fv3pF9S84RA5n8xk86AIC6IuvKFkzImjQW9Y7smnlniZAmhhLJVEhyQt6R2zWw2QG3C7A/AqvDjygig0BtX2cPzdXNC0gceEfeH8DpLBKyP18x8/saHQQXy5RgEbsmzjrXxAGsMWqhIuQWybwvXpYp5P7DP3+lGB8YvMLM7z+mFQAAAABJRU5ErkJggg==",
            name: "Giant magic missile",
            description: "The most powerful version of Magic missile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Giant_Magic_Missile"
        },
        {
            id: "GRENADE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAc0lEQVR4nGNgGK7grYPo124XrFIsWEW5+r0YJDS+MjBwl+4hYPbXbpfvz9v/////////78/bSVAN1XM+/q2DKLIaJmTOj60XGV7cQDFDQoPDW5+APchOwvQ6Fk//W7L3RwwDw4sbnIYLCZiN7Bk0pw8rAAAlWkFNo2GmWQAAAABJRU5ErkJggg==",
            name: "Firebolt",
            description: "A bouncy, explosive bolt",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Firebolt"
        },
        {
            id: "GRENADE_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAt0lEQVR4nGNgoAR8nixOUA0ThPp+v5qBgYHFwALOxgUY4azvh/0ZZHQYnlzhtN1IQMPnyeIsBhYMMjpQsSdX/lw4wZv7kjo2wFTfr4bqIeQHFAAPpbcOol+7XYjVxsDA8P18/Pfn7UTp+drt8v15+//////////9eTsJqqF6zse/dRBFVsOEzPmx9SLDixsoZkhocHjrE/IAkpMwvcGCqeHfkr0/YhgYXtzgNFxIwGxkz6A5nXwAABUjZTuZSgdLAAAAAElFTkSuQmCC",
            name: "Firebolt with trigger",
            description: "A bouncy, explosive bolt that that casts another spell upon collision",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Firebolt_With_Trigger"
        },
        {
            id: "GRENADE_TIER_2",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmElEQVR4nGNgGFQg+YrWf4o0/////z/FhiDzNUo8/+tOM0ERQ+cz4jJMo8TzP6vSawYzu28Mpw5xMVzOOoNTLQbQnWbyH+YlmLc0SjyJ8xq6ZhjQnWaC1RAmdIHf90QZTh3iwjDYzO4bA6vSa+K8oFHiieEF9MCDAZwBozvN5D8sAH/fE2W40bOdcCCiRyMufw8cGFyugQEAoZtrsxZlyIkAAAAASUVORK5CYII=",
            name: "Large firebolt",
            description: "A more powerful version of Firebolt",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Large_Firebolt"
        },
        {
            id: "GRENADE_TIER_3",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA10lEQVR4nGNgoBZ4d+j/f4o0/////z82Q3pjsBuMIY7LBZem4HcZE4whZMfIiG7D5gaIZmTb0A1E0YSsWU2FgUFehIFBRo+B4cklBobdJxgYipcwYlWPofnSFEh4wMC7QxDXYAsPFmSNrhYQtoweA4OgLUKRoC0Dg/wl7BZiOGlzw///8iIMDLrZqOLvD0O8wsCA6h0WdANu3YG64jDCFTDN2MIBZyC6WiAC8OEbiMHYApEJWROMXbyEkXH3CdyacSUuDEAoEaG4ABvYfQKVD0tYFNlIdQAAdCWIvvp7J2EAAAAASUVORK5CYII=",
            name: "Giant firebolt",
            description: "The most powerful version of Firebolt",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Giant_Firebolt"
        },
        {
            id: "GRENADE_ANTI",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAo0lEQVR4nL2RvQ0DIQyFTZQV2Ifi9kDCw1AwA16JMagokUunSRC5n8DdSXkVQn6fn22Am1Kzhc45+byJaNrXzL162HPGHGMERGx/MUYAACEiNQS84woRqb7zafVj9KDHXnENixSjd7sh4u8l1rAIZy+c7AYwNQJn36Jy9lLDIv0Ih5BitHCystYaMoy+ASR7uI8hhLO/djZO9iv6aRWjr5v/rhd8q7dspbqcDgAAAABJRU5ErkJggg==",
            name: "Odd Firebolt",
            description: "A somewhat peculiar bouncy, explosive bolt",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Odd_Firebolt"
        },
        {
            id: "GRENADE_LARGE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVR4nMVRPQvCMBS8SgcH6VAQVxfJFBDcnRz8O53b0b0/xbVDp/6CglPp0K6l4BALzRB4Dn6gTVpRKN6W9+6OdxdgLAiPUc5dyrlLwmP0lfhy3GgC02xc/C/CENG0s/rIj7OruMbqdO7lGRfCY2RtZ7DXewCASiNQ0sAJM41vG13v4unyAACQABQiCDAymbwh5y61hU9dtIVv/I1Jd7DYzXvNq7jWZpoBcMssy+D5lmUAlUbGMrUOnDCzBBgpRJAvhpQ0xqsGC8m5S49IH8v7FVcpvnV7msYJ3gAAAABJRU5ErkJggg==",
            name: "Dropper bolt",
            description: "A very heavy explosive bolt",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Dropper_Bolt"
        },
        {
            id: "MINE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/0lEQVR4nGNgGHTg//sP/0lRz0SpISgG/C+tgWvEZQi6OKYL2noYGBgYGP4tWkOUy1AM+HT1OsOnq9cJakZ2KYoBr15cRNH0d+IcuEK4oVAXYjVA9dwdRgYGBoYvO7djNeiVfzjDq5OnGe7sXYHdAGyueGnn/p8pLgTO5+DhgVvEwMDAwIJu05u1qyGG7ISIiW1cCbEpLoRBhIGB4d7CDtxeeLN2NQMDAwODUnwFw6sXFxlevbgI9/sr/3AGBgYGBpW9Z3AbIH5oJyPMIKX4CoS3oJrvLexg+LdoDcNLO3fsCQ1Z4qWd+/+/E+f8v22k8v+lnfv/20Yq/9HVDA4AADKZgASeFP+8AAAAAElFTkSuQmCC",
            name: "Unstable crystal",
            description: "A crystal that explodes when someone comes nearby",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Unstable_Crystal"
        },
        {
            id: "MINE_DEATH_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXUlEQVR4nM2SsUtCYRTFf08kFBQKIhcXxTYDcWrR9Y1vEdz0L3AMhFoLhxZxddGpUAddwsEll4aIBMVBscXB9xAKjVzKr0H98lNbo7vdc+8999zDhb+Mac4jNjHbeiJe37YaAGYv5wLAHjpVcgBtF4F2sK/gALOmIfAGYdjGGanKulQgzi4k67qSac4j5DCAN8isaYjVOcoJXF0DMC+WJeROmZozUtUYthfAUoE7ZWoKwaTTZdLpKsPrHjiCBRi2cdROFA8kgTVqKUNf2bxs2qv5APh8fgDA6bvc9uD4qa8BvNfvdhJZRpyPUoh+40apKx5sqjCjurAlYjJ3uFxy0Srs65vGldKCpL7Ajqq3iy2JGIfAoJBhM6SCcaUEgD+Zxhq1sEYtaahlxAEINB5/J/Dc17UVkT+Z/jlrOTwoZJgXy5hRfee3KgUzqouvbF70wgFhRnXRCwfEZs//iW+a8J9w6wO0tAAAAABJRU5ErkJggg==",
            name: "Unstable crystal with trigger",
            description: "A crystal that explodes and casts another spell when someone comes nearby",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Unstable_Crystal_With_Trigger"
        },
        {
            id: "PIPE_BOMB",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAaklEQVR4nGNgoAp4U3L9////WKWYsKqGMLDqQdcAV41LD4oGNNVY9bAgc548eAJhKFipfOx/8OfZD8JOIgiGgwaUUDp29QScYaVtQdiGrOu1mCoM1rjicxKaHjTVOME0zeYLIbuJUkoQAADI1iuP6EAz8wAAAABJRU5ErkJggg==",
            name: "Dormant crystal",
            description: "A crystal that explodes when caught in an explosion",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Dormant_Crystal"
        },
        {
            id: "PIPE_BOMB_DEATH_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAzUlEQVR4nGNgoAR8niyOJvKm5Pr///+RRZgg1Pf71QwMDCwGFnA2RDWEgayHEc76ftifQUaH4ckVTtuNyKqFuzWgShkZGRgYWCAuYTGwYJDRYWBgYJDR+X6Y4c+FEz8fojv4////jBBNmDZcCNkNEVSwUmFgYPjz7AeEK9KjifADp+1GiGq4H7ACqAZOxVYGBoY/F07A2QQ0QABv7ks8SrFoIAaQrIEFq+ixqyfgDCttC8I2ZF2vxRQ0WOOKz0loeiCqCYNpms3wSCQTAAA6REvOXXHfGAAAAABJRU5ErkJggg==",
            name: "Dormant crystal with trigger",
            description: "A crystal that explodes and casts another spell when caught in an explosion",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Dormant_Crystal_With_Trigger"
        },
        {
            id: "FISH",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAa0lEQVR4nGP8//8/AyWAiSLdowbQwQD78s7/CfMu4Y/n////Y+D4uRf/w9h2ZR3/kfnomBFXQrIv7/wv8IQHRWya/R4G1xkfGa6d28dIlBduX1/LcPv6WjgfXTNRXoB5g2QvEAsGeTogBgAA4cB9luVrxTAAAAAASUVORK5CYII=",
            name: "Summon fish",
            description: "FISH!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Fish"
        },
        {
            id: "EXPLODING_DEER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAnklEQVR4nGNgGDCwtzYIjQEBLLg0GBd77cUmzoRLg4BACgMDQ9bq2wwMDOoauugaPnyYg1XbtFBVBgaGAC2l8iB/hIYPH+ac7d2GyyoGBgY3bWY3bWYIG+EHNM8hA+fmdShOgjgXDoyLvfDYhuJpiFI05+26+henBkyfoKlG17Dr6t9dV/86N6+DOBpCdq7biF0DVmkCfiAGkKyBZAAASWMv2tHU6zsAAAAASUVORK5CYII=",
            name: "Summon deercoy",
            description: "Summons a seemingly-innocuous deer",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Deercoy"
        },
        {
            id: "EXPLODING_DUCKS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABA0lEQVR4nGNgGBkguMLxf3CF439sckzYBLszPOCKgysc/++Zfg6n4VgNQDfEJdOIgYGBgeHJhqT/MAyTY8SmOcZV/7++siQDAwMDwwmBnwwMDAwMrx68Y+jS/czAwMDAYFl9D64PxQXzJtb+Z2BgYFiy+yJcgcUHdgYGBgYGMQUhhrLLvCiaGRgYGFjQbZ83sfb/2+unGS7efc4AcwU+gOKCt9dPMzAwMDAIa5oyOPn4MVy8+xzuCphL8BpQOmMHI8wQBgYGDBccXnERI8ywBmJ3hsd/YU1TBjf5pwzLdzxjKJ2xA6s6nOB4qxI8mpCjDBvASAfImhkYGBhkAuaRZjvdAQDpwFKjryjzcAAAAABJRU5ErkJggg==",
            name: "Flock of Ducks",
            description: "Summons a chaotic flock of spicy ducks",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Flock_of_Ducks"
        },
        {
            id: "WORM_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyElEQVR4nGNgGAVEAU0t3/+4+EzIEk4xs/4zMDAwWLiU/kdWbBhbCpfT1PL9L2nkC+czwhT+/////+PTzQwVex0YXly9wSChrcHw4uoNhufnNjNIGvni5MMNgNmaYLaWwdpEluHomccMh3gXwA27t3czAwMDAwOXhCoKnwlm+/HdXQwfn91gsDaRZchfF81gbSILV7S0wpZBydmXgUtCFYOP4oKPz24w5AdcJckFFIcBCsAVCxYupf+RY8EpZhacTxTAlw6GAQAAfaSLdjofEVwAAAAASUVORK5CYII=",
            name: "Worm Launcher",
            description: "Summons a giant worm to cause havoc for a moment!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Worm_Launcher"
        },
        {
            id: "BOMB_DETONATOR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAzUlEQVR4nJ1QIQ7DMAy8VP3BBvuARSOD0/h+0FcUt7AocMN5xFQ6VF4VllQpHCjs3pABT1bkdAM9RcpdIvvOBjZjKV3IvfcsQ57QZbWZX3NcyZJrUroKV8MBwJC39KKUEhG890q8Wm0AXI7nU3ONTfZ3/dVD3oYp48ahTAB0Yx8HYLyraf0j9PnjmTLrxj6rspjzDLvbYSUIbynEUjo669nEB7WQBVYb1rRcRPshJMwez4ZI4Wpq+XM/oQ+1t9oMeUthyFwOIPJQgRhjIz6hs3k8fbFe3AAAAABJRU5ErkJggg==",
            name: "Explosive Detonator",
            description: "All nearby explosive spells cast by you instantly detonate",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Explosive_Detonator"
        },
        {
            id: "LASER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmUlEQVR4nGNgoBb4DwWb73v/J1szOYYwYRPkV/BkwGdI92o7uBwjAwMDw+b73v99FLYwMDAwMBxmmIqi+OOD7Qy+ilsZcRkGl8BlI7+CJ1bDulfb/S8NPcSI02R0Q3EZhNcAXIbCDLNjzMHvAlwaSXIBLo1E2Xjo/5T/h/5PwUgXGNFIcxuxAZgrGBkYGBgO/Z/yn2QbBw0AAOGLfBiV+IvLAAAAAElFTkSuQmCC",
            name: "Concentrated light",
            description: "A pinpointed beam of light",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Concentrated_Light"
        },
        {
            id: "MEGALASER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2UlEQVR4nKWTsQ3CMBBF30UMgTISGyBBQ+kUrAIFdKGhpE5apknEFp+C2HKCQwKcZNmyvt+/89kmiX9i8YV26GQA2ZiwpqCmULyX0mUA26MFwaW1ocunGpUBXPeymgJA9xsWAScvqFeCd1/v3azDAKZXGwxQlwUAK05cWmOXT3AkIYmyQZWcJKlsUNmgGREAbwf9XMmNwQgA75yCdGvGRrKEOIMpkHefdRcpEJUcktgceAOlyhqCTN1n8i2LX2LUQnnNMnehzYD1AJ9il4uaQo/2DBBAAfBrPAF6cnGV3jPb0gAAAABJRU5ErkJggg==",
            name: "Intense concentrated light",
            description: "A spectral wand is summoned that casts a huge beam of light",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Intense_Concentrated_Light"
        },
        {
            id: "LIGHTNING",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAATUlEQVR4nGNgGCGg/donEqQh3P///2FRiibafu2T3aar2E39//8fmknt1z79//8PLo5iM5qo3aarEKUQKQgXnx+weoOwHkw3k6ZhWAEAsN1H0BhtiugAAAAASUVORK5CYII=",
            name: "Lightning bolt",
            description: "The primordial force of nature",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Lightning_Bolt"
        },
        {
            id: "BALL_LIGHTNING",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDUlEQVR4nKWTMW7DMAxFP4OO8UF0BOcAGbsWBbq2Nyigzd4s5AZuxg5F1269QI5g3cPO7N9BYiw1Tp0iBAjZgih+PlJCErfYaumA88PfGUhe5U3XkxwZ1ml/IXBkGjz5FRc0Xc+m66EZ/6UgCcr2t7t3kkRZtSyrFiRziAEYCUCcH854fb8+SfzUFXfpAWvWcP4o+GWb+o0A5FC/wPmBh/oZzh/DRTM1o6zapNYxytX6c5grlW5NIdasCYAA5OvzQ7ScoGIv1hQSM6sCaHY0XX8CU1YtYtbo50DVhSQSYLSmSBjoEErGYWESR2qb0nZO//kszMpSaGnPL03jxce0qfennt8/PHIWIBAY3GI/Up7ER5UeI/EAAAAASUVORK5CYII=",
            name: "Ball Lightning",
            description: "Summons three short range electrical orbs",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Ball_Lightning"
        },
        {
            id: "LASER_EMITTER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAi0lEQVR4nGNgGAUoQCZu6XaZuKXbSdHDhKxZTNnAQ0zZwIMUQ1hgmjOTojyq7CGCbQe1PKYzMBA05MmiaE8GBgYGBqPGq//Rwa4PCAzjo8vBXYANuPIj2Ls/Ivi7P6LKszAwMDC8unthR9tBLSQvMDBMn7dsBzFhwAhjwAIRZiDcf6QAcqJxFDAwAACzSV/trHHrSQAAAABJRU5ErkJggg==",
            name: "Plasma beam",
            description: "An instantaneous, dangerous beam of light",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Plasma_Beam"
        },
        {
            id: "LASER_EMITTER_FOUR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3UlEQVR4nKVTIRKDMBDcdOoxDAqHq0LgqWEGX4dA4PhCq+kXcHXUoWHAwA+qcP1AFbzgKjKBiCaFdtVdcre528sBGjQjUTMS6WKUyDqakXVqkp3qouwHAEA7LfYmgtfzUQNAYCz2JgIAXjst9i8Eq7AHuGBlP8ilemkSmYHBnTSJzByoRJLluOHJP+ByZIw1I1FgcLFEwidI7UDEAwATc5YPha8jE/FM18LZ5861B/LbfZ6E3ILyFTsuKiL+E+24qFRxf0/hK4FOCy2B5bihENVy3HBbXVi/TFqsWec3/Ll9Nrv4hnMAAAAASUVORK5CYII=",
            name: "Plasma Beam Cross",
            description: "Four deadly plasma beams in a cross-shape. Look out, they can hurt you as well!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Plasma_Beam_Cross"
        },
        {
            id: "LASER_EMITTER_CUTTER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtklEQVR4nN2RMQqDMBiFv4inEBfBUSQIhV7ArT2ES2/RyUN09CAdXQoFCeIouEivYSfDr8S6dGkfBPIn/3v/ewn8PJQs8jKaZH2/Dood2Ia8jKZYh6RZAkDbdPRm3CTO4kqSL6cCTQGAoXISH6+nHXA718qfL9IssWRgsZfQQSHEazyAWIccg8Oi0VDZ9cmR7zxdOTBUm9E8gN6MNtue2DqaddA2HSbYnjRDPiJ86xuliKvpz/EGBXZIaXwZ7dQAAAAASUVORK5CYII=",
            name: "Plasma Cutter",
            description: "A plasma beam specialized in cutting materials!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Plasma_Cutter"
        },
        {
            id: "DIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAcUlEQVR4nGNgGE5g89yIwiTjzXMj8CtjhLN8nJTSo80YGBj2Hb3tZK3KwMDgm7wCu4bCJGOICmTVyIz+eWfRbYDombn0FJolmNqY4FrhqmcuPYWmGi6Cz0nI+rfsu4c9lHyclDbPjYAziA0lrIEzrAAAarxHslTyBJcAAAAASUVORK5CYII=",
            name: "Digging bolt",
            description: "A bolt that is ideal for mining operations",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Digging_Bolt"
        },
        {
            id: "POWERDIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAzElEQVR4nGNgGGrg+25nnHKbk8ObXaw3J4fj18wE5y88ed5AXoaBgQGiDVnn9+ftcDYLRAVEKQMDw4WHTyDsCw+fQPRcePiEU7ISpmcvEwMDQ+2eoxcePkG2BFmbgbzM5uTwntgtEBNRnBRvboip7cLDJwtPnocrY4Q4iYGBAc3shSfP60uIMjAwXHzxes2VWxAncUpWMsK1NrtYX3zxGq5IX0K0ds9RuKc5JSu/73bmdN3LAtcAVw1Rt+bKLbgUp2QlrrBGB/gibtAAABdvZRg5vhlIAAAAAElFTkSuQmCC",
            name: "Digging blast",
            description: "More powerful digging",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Digging_Blast"
        },
        {
            id: "CHAINSAW",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAgklEQVR4nGNgGNHg0KxZh2bNYmBgWD9nDlYSAhgZGBgWp6fLGxtD+FJWVliNu3ziRGBKCgMDAxMDA0PszJkPz56FSHz/+hUN3bt2bcfy5boWFhB7mAg69dbFi2r6+gwMDAgbFqenw6U5ubnRkEdkpJKWloqOzpTqaiyehojiIkcqAAAQfkNMWU4fFAAAAABJRU5ErkJggg==",
            name: "Chainsaw",
            description: "A good tool for cutting meat. Also has some magical properties...",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Chainsaw"
        },
        {
            id: "LUMINOUS_DRILL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4ElEQVR4nGNgoBAwMjAwMDDVMiQhC/IJMcjD2B8KGeoJGgADMINgBqhLM4jB5E6GMWQSNICBgYFBoJ+hEV2zs5iYAIzd5vAqEsVSbKbi0qwsoyc/947LMYIG4NIMYyMbgmEAzHZcmhkYGBislKNlYYaw4LMZm0YY21e5TYeBYQ+mAYQ0CzNo84symPLCxFEMqDogthxdMzaN8+66Hk9duMcSwwBiNf5rZrDC8PfcOy7H5t5xOXb9//zH1//Pf/zq/6lP/6Fg7h2XY0y1DP8xNCEDsjXCNJOlEdkAsjRSAwAAmgF9OH4I2msAAAAASUVORK5CYII=",
            name: "Luminous drill",
            description: "A pinpointed, short-ranged beam of concentrated light",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Luminous_Drill"
        },
        {
            id: "LASER_LUMINOUS_DRILL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABW0lEQVR4nK2RMUgCURzGfyeOVkJ1OBgNLoYRDhYkDYHX5iAERbQFDUJDNUkkQUnU1iDYclmTLYGDo4PTSeFwg6SDTRqIOEg0RteQT67LEqxv+v7vvd/3Ht+DP0oCsMXZmnlMqU5XoLfRaZZ4Xooed/Y4GhjgW00ZTleAs51ZGnoWtz9CLFmm0yzhWI9eAtyvEe0XYAcQsHfiFa+i4A/vcnt9QSwJb0BIlp2hAhmA0+XWhjnAJkxDzwLgDx+i5xK9OSTLTnHG456bVmuK1jfA7Y8AoOcSX2YzLLw5xAafhcWSZaptB/l8nmrb0evACgMEPZtTIkQSi6JIoU6zxP75XdEKCj+Ob0yWFkYlLDooyJmfbhXgJPMjAJIkSfZBcD/w6mmluH2TX4TuN/Yr6jfw/YSg9eWoNUVTa4pWMdL1ipGut4yHF6MrtaZotjjGN8isoUEBDwWaA4YC/0MffLu2g87XZckAAAAASUVORK5CYII=",
            name: "Luminous drill with timer",
            description: "A pinpointed, short-ranged beam of concentrated light that casts another spell after a timer runs out",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Luminous_Drill_With_Timer"
        },
        {
            id: "TENTACLE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAuElEQVR4nGNgIBEwovEz09shjOkzKwlogCuFA6x6mJBVy8hKPXx0U0ZWSkZWCqsRUBvgqhkYGKpr4iESrS0Lnzx+hmkP1AYZWamjR/fDVUN0otkDYUBtQDMeGaBZxQIRPXp0v7W1I6ZqTFOgTsKlGifITG/38kxobVlIUCUTnAWxxMszAb8GlIiDeJ0Bh+/RbZg+s/LJ42dHj+5nYGDA4zYmZM70mZXycuoMDAwQbYQ1wAHJgYYHAABEnkGl41V75gAAAABJRU5ErkJggg==",
            name: "Summon Tentacle",
            description: "Calls a terrifying appendage from another dimension",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Tentacle"
        },
        {
            id: "TENTACLE_TIMER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAABK0lEQVR4nGNgIBEwovEz09shjOkzKwlogCuFA6x6mJBVy8hKPXx0U0ZWSkZWCqsRUBvgqhkYGKpr4iESrS0Lnzx+hmkP1AYZWamjR/fDVUN0otkDYUBtQDMeGaBZxQIRPXp0v7W1I6ZqTFOgGrCq1g6eLiBhAmF/eHHm6tpMhFxmeruXZ0Jry0Jk1dbZpw9f/758+fLD179bZ5/WDp6O8DTcEi/PBAhXQMKkI0dHQ+SLi4tLREJBR44OxDaohukzKyE+s7Z2hNvz5MIGBgYGA5+aC1taIGwUGyB6jh7dDwkZBgYGGYMABgaGC1ta4GwUDRA98nLqkED78OJMxZQrN97w7Nmz58YbnoopVz68OIMIJTRgbe24rSZeO3h6xRQGBgYVhiNX0EOJeAAADnqBgbXLOxAAAAAASUVORK5CYII=",
            name: "Summon Tentacle with timer",
            description: "Calls a terrifying appendage from another dimension! Comes with a timer",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Tentacle_With_Timer"
        },
        {
            id: "HEAL_BULLET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAh0lEQVR4nGNgoDVgxBTafN8bzvZV3Iomy4TVGB+FLT4KW7BKYdGgoWCAxiBsAx7AAqEg7sY08vb/agYGhhsPLjCg+Wfzfe//eAE8JMh1EgMDw5YHPnAnqTC0MDAw3GGogXAhTsIJbv+vhjgD4gE0QLKTsGiAOwCrS1gwhRgYGLY88CHVZuoBABgxSK9eHv3BAAAAAElFTkSuQmCC",
            name: "Healing bolt",
            description: "A magical bolt with rejuvenative powers",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Healing_Bolt"
        },
        {
            id: "ANTIHEAL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHUlEQVR4nLVSsU7DMBQ8V1nYQII9SMRhQkh8BEPtP+mAwsrggZUOqH/BGDPwBUxIjDhGanYi0Y2l4jFYz2lJgtKBm+zn0717vgf8FxqtyUhJq6KgRmsa4om+opGSLp6yrdrLpYepqg5/8pcLlVqo1AIAZnney0n6irM8x2d6Fu+n6TmS7KtXIDowUhLPPeSo0brDEfzwfP8duzFOcAsAeMdNrL3VrwAAffzY/oeRksrllMaiXE5jMhOeeVckWUgpaS8OtlajR1h73wrsz+dihYLW3mPhHnClFD7u9rY6Hl2HFA58+PeFc4gjsOJhWQpTVYLVf4M5AOJSDS4SW+VzcOc6vCiw+chnWyvYWgFA7DwaHBMvDxDi3klkU2gIP5PWq5UQNkXbAAAAAElFTkSuQmCC",
            name: "Deadly heal",
            description: "A projectile that at first deals damage, then heals over time",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Deadly_Heal"
        },
        {
            id: "SPIRAL_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAh0lEQVR4nGNgIBEwYhX9////phd/GBgY/CVZSTMv5sAnAiok+19CEGE9MQc+IauDs5EFibUaWQ8LAwPDxue/ifccEy6TMMH///9RWLhUw8U3Pv8NtYGREXtsQMDzQnGcTsIDYg58wuJPrEEp2f8SX1Qgq0OLQcJ6sAIs3oWEhp8EC/7AIBYAADkkP/muaDnBAAAAAElFTkSuQmCC",
            name: "Spiral shot",
            description: "A mystical whirlwind of magic sparks",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Spiral_Shot"
        },
        {
            id: "MAGIC_SHIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJUlEQVR4nMVSsWrDMBB9Kd1CB0G8daohkKF08KIlYwmKfyFDIWPbOd/gOe5o6JBfsEXoD2gxuHQwBPQFCdZgPF+HoCInTvGWt0h3ujvevSfg2hhcenh8+VoPJ3d+U9b65/P5vfcAHqmMjTwBAOawl2rF5yLRFAYMaW4gl36r58YNRKJpMRsLGzdlrQEgDBhenxjCgIFHKnN7bt3AFgLAZruTlnqaG9jTsutkkOYGH98GaW6gVnxu83LpDzbbnXT1OROjM9lRwyOVna4B4Cgej1TWd5C9/2nQlLW+nz68samH4UT57grAUeBLTrSKRKIpLioSiSaXXVxUREQUFxW5PS0XzGEvF7OxsE6YSGVNWWs28oTrhIszKqdUuz7WvwNc9P3O18UvupadEWfPFwMAAAAASUVORK5CYII=",
            name: "Magic guard",
            description: "Four guarding lights rotate around you for a time",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Magic_Guard"
        },
        {
            id: "BIG_MAGIC_SHIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA10lEQVR4nLVTsQ3CMBA8pUUUkWABUlG4oskKFktYME3qpPUYMUUWSBMpEgWVV0gKRP1UjhzzMYoE17198t/f+YF/QKimzIvWCNWUACC1vQNAXrTGryf4BKktSW3JkR2qfiCpLVX9QP55AgC3ayaqfqB0t5fnUwoAeD2e1pHyojV1N8JcDqi7EeHjU2ciYruHCqS2FN4vSlwa0fnzQWBN8uAM5lSuwkzBrFiJBAA2x23m584hOqZQTRnmz/kQMxp+RBzha9QxglMYVRCTyH3x6D74dbhYP8cbAJnzmpYUpdgAAAAASUVORK5CYII=",
            name: "Big magic guard",
            description: "Eight guarding lights rotate around you for a time",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Big_Magic_Guard"
        },
        {
            id: "CHAIN_BOLT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlUlEQVR4nL2SwQkDIRREZ/sIpKRgIykgBViNBzvwmDoEtwVvOjksEzYQJfkbMuBFnPf/4AC/UPaF2Re2RO7vRm+HoOAiW+ILyKQ9qPYNNp08AwUXWfsGMkEE0ibSV7DayeCibXpL/zYr26HJhzKbzdmX53/Xbmyj8qtAaqPOu80WGc+30zICy+iuFwBAua8AgJnnYz0A4VapNMKa9uEAAAAASUVORK5CYII=",
            name: "Chain bolt",
            description: "Fires a mysterious bolt that jumps from enemy to enemy",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Chain_Bolt"
        },
        {
            id: "FIREBALL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAXUlEQVR4nGNgGAWEASMeuY89UWzeghD2r63v+UuWMTAwsED4rwMM2Ww0+YqXfuqNZmBggKvj0JgCYzB89xbk1JwKVQ3X9rEn6j8O8P16Nk4nfeyJQrYH2UmjgBgAABsbMx56SSayAAAAAElFTkSuQmCC",
            name: "Fireball",
            description: "A powerful exploding spell",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Fireball"
        },
        {
            id: "METEOR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAABAElEQVR4nJ2SMY6DMBBFv61RlAax9VbuQ7ESCFGm2p6GE6TYK3ACrpCCYus0XIEyiqBLpC05QhANihCkGGJlCbGiTDH6Hs3z99gG3og69v6+PwFwfpWpY4+FuVNqtYhWdexJfzAzQqsmc0k5XXXk3B+EnRQmh/4gAJByACzXG+kPTeaaHLQJqaCr9qQCAG2eTqzkPWCF5WV3AsAMWy2i1b3VPwCA9Iex9euXK6QCUo5maAJYYdlkAAAFAPTxw5pUUMfCToqpA0/PA4zdNyH9YeZIAOykaPP0sT4/g46u2nfn7ajPW9zuXTwDmsxdrjd62eapFZYmAAD/FN579tVfiit0YF7bAKZpjgAAAABJRU5ErkJggg==",
            name: "Meteor",
            description: "A destructive projectile from the skies!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Meteor"
        },
        {
            id: "FLAMETHROWER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAjElEQVR4nGNgGMrguhkfUdIE1GGCr636JNh+3YwPzSoWZHXfr2dDGP/WHfnqz/Bo4305f0Xu6ovXzfg0T32S81dkOHURYe/369n///////8/hA0XgXMRnoErhQCsXLhqFCdBAIfGlB83ciAkxHnfGAw0T31CDwq4wXD3QJyBFqyMWD3NqTmVcFAOGgAATht5HLAkL5EAAAAASUVORK5CYII=",
            name: "Flamethrower",
            description: "A stream of fire!!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Flamethrower"
        },
        {
            id: "ICEBALL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZklEQVR4nGNgGAUDDxiJURQ77fd/zzAWOH/7qj8Mi7NYGVEMsA79/F/JkYNhUSYLQ9z0PwwMDAwMyJoihVENXf6WgSFKhJERrhnZoNhpv/8TAsve/P9P0Aux037/R3cJuhdGwWAAACPcQmWjAJ7SAAAAAElFTkSuQmCC",
            name: "Iceball",
            description: "A magical ball of frozen fire",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Iceball"
        },
        {
            id: "SLIMEBALL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAf0lEQVR4nGNgGAWEASMav2hyUF/uOgiDgYFBSPYHAwODhBRPitkqLBogiuDq3j3m0DJnMZDlufD4CwMDA0QPE7KGvtx1EOMlpHjePeZAlnrx7AuEwYLskqLJQUKyPxgYflw7yaFlzsLAwHDt5B8Ghi/Y/QB3PYQNcRWaB0YqAABoJytGPJt3lQAAAABJRU5ErkJggg==",
            name: "Slimeball",
            description: "A dripping ball of poisonous slime",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Slimeball"
        },
        {
            id: "DARKFLAME",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAjklEQVR4nGNgoATMduwnQwqL9GzHfiMNWxRBZA6yNFwczmCCcKY/XwdXkbq/MFMyCM3O1P2F2N0A1waxBN0lEBvgBsCtmv58HS6PMaIJYVWaKRkEdxITQdVogAWrKNzTmEYwYShmwAwi7BrgoQk3FasLsTsJWSmyjxnQQokBFnZwDWiqsWhA1saAGcFkAABdFU4Rm4HUkwAAAABJRU5ErkJggg==",
            name: "Path of dark flame",
            description: "A trail of dark, deadly flames",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Path_of_Dark_Flame"
        },
        {
            id: "MISSILE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAbklEQVR4nGNgGIGAEUKdNzZmYGDg1NLSWLwYvwYmZM73a9duxMYSZQMDA0N7ezucraCgAGFo9PTcKCmJjIzE7iSIq857ecGlDbdtg3DheligEmfPImx48ABuw/dr1xi8vAjYgN/fKJ4mJpSGAwAA0iAiz/Cf4F0AAAAASUVORK5CYII=",
            name: "Summon missile",
            description: "A missile!!!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Missile"
        },
        {
            id: "FUNKY_SPELL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAO0lEQVR4nGNgGAXDADDCGJ/buf+z2LhAOCoWmCrvnIAz/xzZw8Bb+ZWRgYGBgQmrsUiK4QCboaNguAAALCILBJxRKo4AAAAASUVORK5CYII=",
            name: "???",
            description: "???",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/???"
        },
        {
            id: "PEBBLE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA6ElEQVR4nGNgoBZIrZyAVZwJl2oR55dY9WDREBBf9EJ5b5guk4jzS0xZRqwuef3s0V/b2xJ3nRkYGGa3F+C0oXJPJUS1qJQc82FVZCOwaAiILwrTZXqhvBfC1Yxlh2gWcX4ZEF+E3Ya6zZcgBos4v4Ro1oxlD9NFUYPCgTgarqjJV+/KgytonkTRAHE9siLmw6p1my/h1MDAwHBi7wa4Igj5YNZnZAUsyJy7188paxppxrJfX6xax3CJ+bAqRGTDwj4sNkBE4R6AqIaYghxKCBAQX6Rr5gBhwEUgDIg4OoCLIktjV0oSAACDA1+kzwO+oAAAAABJRU5ErkJggg==",
            name: "Summon rock spirit",
            description: "Summons an autonomous rock ally",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Rock_Spirit"
        },
        {
            id: "DYNAMITE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAWklEQVR4nGNgGDDQlOo5pyqCWNVwpZh6mLBqePb6IxoDH9hrYQFBWC3BbgMDA8Oxd+8gjJS2FURpsBISwipO2AaiNBx79440G6yEhEi2Aas4dg14VOO0YUABAJL6In7hL+/KAAAAAElFTkSuQmCC",
            name: "Dynamite",
            description: "Summons a small explosive",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Dynamite"
        },
        {
            id: "GLITTER_BOMB",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEUAAACCX1OceljQNdL/ydfgvFeGNGhkjiHHAAAAAXRSTlMAQObYZgAAAEFJREFUeJxjYMAKGBWgDAUmqIAAI4TBbMAAkUtLgwiwGRsngBnJyS5mYIaZMYyRbGwGVWsGYTCnJUMUMySbYbUYAOMsCGMkjNThAAAAAElFTkSuQmCC",
            name: "Glitter bomb",
            description: "Summons a bomb that explodes into volatile fragments",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Glitter_Bomb"
        },
        {
            id: "BUCKSHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAKMGlDQ1BJQ0MgUHJvZmlsZQAAeJydlndUVNcWh8+9d3qhzTAUKUPvvQ0gvTep0kRhmBlgKAMOMzSxIaICEUVEBBVBgiIGjIYisSKKhYBgwR6QIKDEYBRRUXkzslZ05eW9l5ffH2d9a5+99z1n733WugCQvP25vHRYCoA0noAf4uVKj4yKpmP7AQzwAAPMAGCyMjMCQj3DgEg+Hm70TJET+CIIgDd3xCsAN428g+h08P9JmpXBF4jSBInYgs3JZIm4UMSp2YIMsX1GxNT4FDHDKDHzRQcUsbyYExfZ8LPPIjuLmZ3GY4tYfOYMdhpbzD0i3pol5IgY8RdxURaXky3iWyLWTBWmcUX8VhybxmFmAoAiie0CDitJxKYiJvHDQtxEvBQAHCnxK47/igWcHIH4Um7pGbl8bmKSgK7L0qOb2doy6N6c7FSOQGAUxGSlMPlsult6WgaTlwvA4p0/S0ZcW7qoyNZmttbWRubGZl8V6r9u/k2Je7tIr4I/9wyi9X2x/ZVfej0AjFlRbXZ8scXvBaBjMwDy97/YNA8CICnqW/vAV/ehieclSSDIsDMxyc7ONuZyWMbigv6h/+nwN/TV94zF6f4oD92dk8AUpgro4rqx0lPThXx6ZgaTxaEb/XmI/3HgX5/DMISTwOFzeKKIcNGUcXmJonbz2FwBN51H5/L+UxP/YdiftDjXIlEaPgFqrDGQGqAC5Nc+gKIQARJzQLQD/dE3f3w4EL+8CNWJxbn/LOjfs8Jl4iWTm/g5zi0kjM4S8rMW98TPEqABAUgCKlAAKkAD6AIjYA5sgD1wBh7AFwSCMBAFVgEWSAJpgA+yQT7YCIpACdgBdoNqUAsaQBNoASdABzgNLoDL4Dq4AW6DB2AEjIPnYAa8AfMQBGEhMkSBFCBVSAsygMwhBuQIeUD+UAgUBcVBiRAPEkL50CaoBCqHqqE6qAn6HjoFXYCuQoPQPWgUmoJ+h97DCEyCqbAyrA2bwAzYBfaDw+CVcCK8Gs6DC+HtcBVcDx+D2+EL8HX4NjwCP4dnEYAQERqihhghDMQNCUSikQSEj6xDipFKpB5pQbqQXuQmMoJMI+9QGBQFRUcZoexR3qjlKBZqNWodqhRVjTqCakf1oG6iRlEzqE9oMloJbYC2Q/ugI9GJ6Gx0EboS3YhuQ19C30aPo99gMBgaRgdjg/HGRGGSMWswpZj9mFbMecwgZgwzi8ViFbAGWAdsIJaJFWCLsHuxx7DnsEPYcexbHBGnijPHeeKicTxcAa4SdxR3FjeEm8DN46XwWng7fCCejc/Fl+Eb8F34Afw4fp4gTdAhOBDCCMmEjYQqQgvhEuEh4RWRSFQn2hKDiVziBmIV8TjxCnGU+I4kQ9InuZFiSELSdtJh0nnSPdIrMpmsTXYmR5MF5O3kJvJF8mPyWwmKhLGEjwRbYr1EjUS7xJDEC0m8pJaki+QqyTzJSsmTkgOS01J4KW0pNymm1DqpGqlTUsNSs9IUaTPpQOk06VLpo9JXpSdlsDLaMh4ybJlCmUMyF2XGKAhFg+JGYVE2URoolyjjVAxVh+pDTaaWUL+j9lNnZGVkLWXDZXNka2TPyI7QEJo2zYeWSiujnaDdob2XU5ZzkePIbZNrkRuSm5NfIu8sz5Evlm+Vvy3/XoGu4KGQorBToUPhkSJKUV8xWDFb8YDiJcXpJdQl9ktYS4qXnFhyXwlW0lcKUVqjdEipT2lWWUXZSzlDea/yReVpFZqKs0qySoXKWZUpVYqqoypXtUL1nOozuizdhZ5Kr6L30GfUlNS81YRqdWr9avPqOurL1QvUW9UfaRA0GBoJGhUa3RozmqqaAZr5ms2a97XwWgytJK09Wr1ac9o62hHaW7Q7tCd15HV8dPJ0mnUe6pJ1nXRX69br3tLD6DH0UvT2693Qh/Wt9JP0a/QHDGADawOuwX6DQUO0oa0hz7DecNiIZORilGXUbDRqTDP2Ny4w7jB+YaJpEm2y06TX5JOplWmqaYPpAzMZM1+zArMus9/N9c1Z5jXmtyzIFp4W6y06LV5aGlhyLA9Y3rWiWAVYbbHqtvpobWPNt26xnrLRtImz2WczzKAyghiljCu2aFtX2/W2p23f2VnbCexO2P1mb2SfYn/UfnKpzlLO0oalYw7qDkyHOocRR7pjnONBxxEnNSemU73TE2cNZ7Zzo/OEi55Lsssxlxeupq581zbXOTc7t7Vu590Rdy/3Yvd+DxmP5R7VHo891T0TPZs9Z7ysvNZ4nfdGe/t57/Qe9lH2Yfk0+cz42viu9e3xI/mF+lX7PfHX9+f7dwXAAb4BuwIeLtNaxlvWEQgCfQJ3BT4K0glaHfRjMCY4KLgm+GmIWUh+SG8oJTQ29GjomzDXsLKwB8t1lwuXd4dLhseEN4XPRbhHlEeMRJpEro28HqUYxY3qjMZGh0c3Rs+u8Fixe8V4jFVMUcydlTorc1ZeXaW4KnXVmVjJWGbsyTh0XETc0bgPzEBmPXM23id+X/wMy421h/Wc7cyuYE9xHDjlnIkEh4TyhMlEh8RdiVNJTkmVSdNcN24192Wyd3Jt8lxKYMrhlIXUiNTWNFxaXNopngwvhdeTrpKekz6YYZBRlDGy2m717tUzfD9+YyaUuTKzU0AV/Uz1CXWFm4WjWY5ZNVlvs8OzT+ZI5/By+nL1c7flTuR55n27BrWGtaY7Xy1/Y/7oWpe1deugdfHrutdrrC9cP77Ba8ORjYSNKRt/KjAtKC94vSliU1ehcuGGwrHNXpubiySK+EXDW+y31G5FbeVu7d9msW3vtk/F7OJrJaYllSUfSlml174x+6bqm4XtCdv7y6zLDuzA7ODtuLPTaeeRcunyvPKxXQG72ivoFcUVr3fH7r5aaVlZu4ewR7hnpMq/qnOv5t4dez9UJ1XfrnGtad2ntG/bvrn97P1DB5wPtNQq15bUvj/IPXi3zquuvV67vvIQ5lDWoacN4Q293zK+bWpUbCxp/HiYd3jkSMiRniabpqajSkfLmuFmYfPUsZhjN75z/66zxailrpXWWnIcHBcef/Z93Pd3Tvid6D7JONnyg9YP+9oobcXtUHtu+0xHUsdIZ1Tn4CnfU91d9l1tPxr/ePi02umaM7Jnys4SzhaeXTiXd272fMb56QuJF8a6Y7sfXIy8eKsnuKf/kt+lK5c9L1/sdek9d8XhyumrdldPXWNc67hufb29z6qv7Sern9r6rfvbB2wGOm/Y3ugaXDp4dshp6MJN95uXb/ncun572e3BO8vv3B2OGR65y747eS/13sv7WffnH2x4iH5Y/EjqUeVjpcf1P+v93DpiPXJm1H2070nokwdjrLHnv2T+8mG88Cn5aeWE6kTTpPnk6SnPqRvPVjwbf57xfH666FfpX/e90H3xw2/Ov/XNRM6Mv+S/XPi99JXCq8OvLV93zwbNPn6T9mZ+rvitwtsj7xjvet9HvJ+Yz/6A/VD1Ue9j1ye/Tw8X0hYW/gUDmPP8uaxzGQAAAJhJREFUeJylU8ENgCAMbI2LuI7EIfi4BG+X8OMQBJfxwSjnqwYNgsUmfEjuer1eGQD9Ki2BjwYHHATbaYDZxhoFPhoAoPRVCZ6dUwWvBMs2rss2rjVFAKh/AomInN3nGvjG8qXSUWQTl4KSXGf32UeDaQic9aM1SGLiLQdfzBMgM78r0GyhOIKQlLKg3kLzLUxD4Nw//z3nE9mHlbAlnZsnAAAAAElFTkSuQmCC",
            name: "Triplicate bolt",
            description: "A formation of three small, fast bolts",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Triplicate_Bolt"
        },
        {
            id: "FREEZING_GAZE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4klEQVR4nLWTIQ6DQBBF/9YhCJfoEUAhewQ8cAiOgWpSP9T3GFVFIhCQJjhSRRCYJluxUJaFhaZNx0yyO+9lZhaAf4Yd82CrZrcGWwZIldgxD+QzpoP3JqhoEaYRS5RuqM9hGrFkJlDhAbQMATYdQgAYxEyFXQd0vYkiANibAizaKTgbwY554Hug80UUug6ozvXgRCDDvgcqK0DuYikmIxzvnKsFZSVynYv8eI53TQdAXuLPHeh2AIyi1R3IEvUVXAeUZfPnWxQMkq+/A51kOOuvqc+hbqy35HDifOtfWI1PCl/dh53Ix1XOZwAAAABJRU5ErkJggg==",
            name: "Freezing gaze",
            description: "A heart-freezingly sinister aura",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Freezing_Gaze"
        },
        {
            id: "GLOWING_BOLT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEUlEQVR4nK2Sr27DMBDGv1ZjI0MhkyzvBSpFAXuGoIyPJ9bGp6Bgv0CmvECLO3R4sMBkT2BZGjmTkeEMbI7S1E0K9kPnP993dz6vMINSqk3T9FsIcT89c84dqqp6uZoeaK33dV0/AICU8rYsyzsAm4j/DQCcGATxiJgYADZCiK/1uNwQM/M2xN77M/pfBoOu655DnCTJIwBYaz8B7GYdllBKtczcxyCi9/WSQVEUT8D5VmYNiKjPsgzGGDRN8+q9342MPpxzh5MpxMR5nq/+tlsp5Vu4Y629jgqJqGfmnoj62f4ABGeML0cyDzDzNkzpKGuAmS/KrrXeD4vpeJh5sfRAdArGmEXh+OceVXHJw/0rP7DWsvnhFgOpAAAAAElFTkSuQmCC",
            name: "Pinpoint of light",
            description: "An extremely concentrated point of light that explodes after a moment",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Pinpoint_of_Light"
        },
        {
            id: "SPORE_POD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEUlEQVR4nGNgGGjAiEui/Na7/wwMDAxBAiwM6z78YehUE8KqFqtg+a13/29vOIkiphpgjtUQJlyayxOsUcRvbzjJcPLVp/94XYBs849b5xgYGBgYEssjGOZ3rmDgUDPC6hK4C06++oShmYGBgWF+5wq4WHmCNcPtDSfh4QN3AbrNMFuxAXSXoIQBzGaY5sTyCBTN6HyUMDj56tP/zgVHGX7cOsfwM9oXq+3sSzczcKgZMagGmDOYML5nCFVVRo2V8lvv/jvvvwSJ/67t/42dG/4HdW2H+9d5/6X/yP7HC5z3X/pv7NwANxAXwEgHMM0fWtYx8ArIE7QIwwBkzcw5xgx7HfVwJnecIKhrO0GnUw0AAEQ4iZRbzmA3AAAAAElFTkSuQmCC",
            name: "Prickly Spore Pod",
            description: "Summons a spore pod that attaches to a surface and then grows and explodes into spikes",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Prickly_Spore_Pod"
        },
        {
            id: "GLUE_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+UlEQVR4nKWSMY6DMBRE399UuUNOYCGouQlIaVL4HCjnoKBBAmkPQrVFspFPkDukin4ajBxiZ3e1IyH5G2Y8M0ZUlf/gwy+6vtGv70+93a/L4+fYftc3CiChg65vADQvMs6nC4DkRabzmqq2bDc7iToAOOyPAOIJgBpTUtVWAJyb0hHWyIuMqrbiSYGrJ0isxNv9CqDj0C4RvMBhf0xH8ORxaBe7xpShK1l//yIwDm04aiz3WwGP8+lCVVt8ibH8EOlgjqBVbWMxZLvZ/SyQsj4LPYkkI6xOTuKtQOwmfisgIcm5CWNKnJterjHVgUf4ciGHHUT/xL/gARPYn04F4/B4AAAAAElFTkSuQmCC",
            name: "Glue Ball",
            description: "A projectile that explodes into a sticky mess",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Glue_Ball"
        },
        {
            id: "BOMB_HOLY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvElEQVR4nGNgwAP+n4j8///5zP/41DDhkyQGMOKyGUVA3gGiWDIdQz0LNgMuLz/AwMDAwKAbCdHI8PAAec67lC/5H8M1aACrFy7lS/7X9VNAddWmBwx6E58T9gI2zQxaCQy6WgwMlxga/qMbghILMM2XNz1A0QwDuhUNDJfyJVG8hGIATDOGC9DU4DQAK7i2ADsbCrBGI15D0ABWF6CEAQGAYgCyRnRDYHx0cYx4RQ9lGIAFMHo0UpyQKAYAkuFPkt3ULkEAAAAASUVORK5CYII=",
            name: "Holy Bomb",
            description: "Summons a bomb that... well...",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Holy_Bomb"
        },
        {
            id: "BOMB_HOLY_GIGA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVR4nJVSsUoDQRB9d6RMwDZwYAQbi/sAG/ELgu1Z2wc2WG6VUkx/YGF1tpJekKtS50AbwQgD1wq7rYxFbi57lz1OHyzMPN57swwDdMCQVrxOmMuUDWnVpQvZZrnP3MdJH7jEKFosDWk1pI/7hvv4EgBgf2hea47Oruz3+/NANKNosZS6eHoFAMTJzoivXY/otNYa0nuP73uGtNrMxszrhKX3LsGQVmyzXAS18eW88Tazcfcy+8xcpsxl2h8i5kZIZe4KCd2QeDpBsdoink68Q0TjIvTLHLw9+usKgwOmL6QF7w+K1fZPuQcBrrEdIr3LG9IqcEWGtPq8e2iecQVZ8Mntzdy92tro1v85pKBNtANdyGS2WR4Mry8A4BeuQ/BGLg/zXwAAAABJRU5ErkJggg==",
            name: "Giga Holy Bomb",
            description: "Bigger and therefore holier",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Giga_Holy_Bomb"
        },
        {
            id: "PROPANE_TANK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEUlEQVR4nKWTMW7CQBBF30QUaawIikDnggPsEeIDuEosIToXuUMUH4AoJUU6CqS0kMoHSOU+9O4RBSsLRaLbFMQrg+1NEL/andn5O/P/rhhjuASd6kZE7Prl6cMyP7/e28TphVdNrHGUmEJrAAqtiaOktc1GgnPQaQoqPyMIvwH4TL/oe+0EtQ7iKDFBqGwxQBCq1jGOOoijxMwXE4HEDHpDbrp3FFozfcuZLybySyLVmos1OCLY7TfOw015qfoqIjyEj8a7vuUwQpdCa9bbnN1+wzKdyZ/vYJnO5DTmijs1KB+TC40Eys8YjVf0vXdG4xXKz1oJahoA1vNBb8h6mwNwsPeff6FUuyx2uVNT9Vz8AIKAbd8eDoc7AAAAAElFTkSuQmCC",
            name: "Propane tank",
            description: "Summons a propane tank. Be careful what you wish for.",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Propane_Tank"
        },
        {
            id: "BOMB_CART",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGklEQVR4nM2TMUvDQBTHfxdKSAKFVKh0kGTJoKMfRjfd/Aaik1MnwW/gIDg6O/klOrbQDm1wKAkkB4UkZDkHveTaxqmDvuUe773fn/877oRSikPCOoj+FwI9gNuH5+YiZJ7iD4a/Amb/aXwjLIDZdILMU4A9WNd1+IMhMk+ZTSetA8/rs15/Ei/n2I5LXZVbULycAzQ923HxvH4rUBQbUVel8o+OkVmC7bid9uuqRM+MRifCdKBOz873gKLYoB3qMwgjgjAiXi0UIMTF1Z36KQBg5lpEC3TNWToJwuh7XyM3owsOwqh9B7ugzBJkllBXJTJLOoUAehqMVwvM/OP9RZgOLq/vO1cVSqmmqZ28vT5uwbsi5pz489/4BVDWmwR4xySuAAAAAElFTkSuQmCC",
            name: "Bomb cart",
            description: "Summons a self-propeled mine cart loaded with explosives",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Bomb_Cart"
        },
        {
            id: "CURSED_ORB",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMklEQVR4nMWTPW7CQBCFv0Xp3YBdULiBipaG9Q3s2jeI4AYcghtE5AbU9g0MDa2r0FCkQKKwL5CXgvXKISkiESkjrbQ7s+/Nz9s1knjEBg+h/5ygTTLuz6soUptkapNMqyj61q+RxCqK2EzmAOwOpfJFalxczgdAvkgBCKqii/MEsJnM5S4ZtwC0O5TYYeyB7281++uZPMnUkXQt9IGsT0cB2GHMeDojqAqCqmA8nWGHMQC+HUlIYmugHsWqRzGNTbU1qLGpJKmx6Zd9L3aroE0ynj9Ev4pfm8uuroqtQcswVGNT1aPYZ+6yd75lGErSbYiAeR345MYpov31jAVw8vohTme8XC7Gy9gDky9S7Q4lTsofZQRMUBV4gvsH1Lf16ajujaxPRzaTuQd7gkfs/z/TJ25ssrGfIeRxAAAAAElFTkSuQmCC",
            name: "Cursed sphere",
            description: "A projectile that brings bad luck to anyone it hits",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Cursed_Sphere"
        },
        {
            id: "EXPANDING_ORB",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/ElEQVR4nM2TIY7DMBBFnyOHREFZUFBQVhRsXgXvCcJ6hZ6joIfICUqWBZUsDgorLIkUqSxWp6BxaqeLtmB3JJM/+i/fM44SEd6p6C33/wactks5bZcCCUOVCiQyVKkMVQok4wHlD/FoVgKQ5RZAmaKXuLy9wIcqAlBxeX0mGM0qyy1dowH4yTzXI2euW0vdWqcrU/Thfi/7OUfmM1BOfPn6ZQ+LXQBxfR8gI4Qst+6ej3LmxW6SXD8CqFurNms9NbtGy9fhQwWBPbOX+AHYrLWDSNdostzy+X0OU3jl69Maj2aFiz9CBMAUvQIkLm/T+p5zuIbv4Df19//CHfidZx8XwEJ7AAAAAElFTkSuQmCC",
            name: "Expanding Sphere",
            description: "A slow projectile that increases its damage over time",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Expanding_Sphere"
        },
        {
            id: "CRUMBLING_EARTH",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAv0lEQVR4nJ2SvQ3EIAyFH+g2SJE2O5AhIlFkDiZijiuQGCLsQHvFzcBVjnwOkB9LSGDwx3sG5a0pcct4Eu/PV2kXklrm6bBZy8lYx6FoACAIFS3zhLjlS5AXTVxICgC8NYXmC6ZyBtBUJEE8ekp2C5SQsDM7mi/oRWqQVrP/APywzHct9A57awpXdGpBruOWQbZqNg4WWje1olrA/wKpciGp2rc/9EC+hAtJ3VbWa5q3pqzjsI9HQA65pUwCAOAHL6t5hoNL8GAAAAAASUVORK5CYII=",
            name: "Earthquake",
            description: "Calls the anger of the earth",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Earthquake"
        },
        {
            id: "SUMMON_ROCK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABG0lEQVR4nM2RIW7DQBBF30YhliMZhLqtjGxgkGuUVekFygobUBBSXhCQI+QEUViukUoGNgoxtSVLsRZOQTUr23EDq3602pn/duYv/LXktBQRkV8bVuuNrNab0QY5Ld29QszQPDRtP99N12SMMQozi71xxcenF/FnPmEYAVCWZwDaS0ucpA4kIsLXM2axNwBTBfgzHwBrGzwvcEaAIs/cdDqBaqKH9tICUFU11jbESUqRZ5Tl2cHH1pwwoi4kDCPCMKLIM1d/ffuQUYBO0YWo4iTF2gZrG6qqdvfTLuD+4Q7PC4CfEKuqZj4HzwtcqMOHehMo2dqml8nQfDzsXJC9RPUrtbEbngK75ivAGOiW+WoF1fGwM2q6Zf4f+gaFvKH6Wh3+rwAAAABJRU5ErkJggg==",
            name: "Rock",
            description: "Create a mighty rock out of thin air",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Rock"
        },
        {
            id: "SUMMON_EGG",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA40lEQVR4nM2QMQ6CUAyG/4oLbKzEuDE46cRB8BCaeBkXE70DehBMDE4MDiyEt5C44UTq4isoT3QydnlN+/9f2wf8OjgJmZn5K3GUKY4yJWJOwiZ/QAZ9Zs+x4DkWBDLdN4LzHG8B2lxUNQAIhIiImZmTkGl2IAAYmgCeYz29RVVLTkTU1nY2WB9PnQ/SZlOvAwjGIwDA5XqTms51rxeg7/ZdW4y+az/1egF5qYyQoqqRl+ozwLSJafJbQBrHMqmoajHnpUIax58Bu9WS2pC2ebda0qu+U9Cx2Gx5EgSylcn8H3EHhU6BrGAGsdAAAAAASUVORK5CYII=",
            name: "Summon egg",
            description: "Summons an egg that houses a friendly creature",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Egg"
        },
        {
            id: "SUMMON_HOLLOW_EGG",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNklEQVR4nM2Rv0rEQBDGv8gh+ARecR4naieXKzT4FgEF38AuvSFptFDs9QlstNHrrw0HwSoRu1yMeIf4p5SQBAKfxbFrYkJsLJxmZnbn++3MLPDX9nm+zKZ7erskWa1JIpsAkDg6RR4GPsPAZ1Es41qIozOJbCaOzjDwmaUxszSWkKJIwBTRdmuwA3Q2v2mzB+Sei8WDx3k6nWBtQ1VIEv4elMGt0tiBeP366lJ207Sb0g6yNGYS2SWI8D91CyJYWj1RACD3XBwfHeIl35dF9/5dyTeaOx4xS2NapsEw8GmZhszd8ah5DAAoziwg4ifqRmjVQT7e3wAAfVVDZ2Uds+lEnv0KmM+pAQC2t1QMhzfoddt4en6t3UH1LwFYpsG+qqHXbQOAFJ+eXVTqawFFiOiqTvw/7AsSHPG3MwAXfAAAAABJRU5ErkJggg==",
            name: "Summon hollow egg",
            description: "Summons an otherwise empty egg that casts a spell upon cracking open",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Hollow_Egg"
        },
        {
            id: "TNTBOX",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAz0lEQVR4nM2QMQrCUBBE35ekEqIgaIiQK6iNKB5AbBXMNeJJkivYCuoxBCs9ginETrERJLA25qOQELWQTPV2lxnYgX9LdmMREfnZrPkZYiSLje8LwDaK6LouaUxrycafST8MFfsJAKUkIDoeATicz5m88Dx6QYDsxqLaKwWgkoDpcCCOXf/olXC+1j7j9XC5XnPNVct6m/ULg3KDkVnjHl3oqEom929meoBtGLiOg21ZuZwacIpjvuFEBSpxUmnqskZmLZMzSzzFsS4rj4ulB5bFd/0HGGcsAAAAAElFTkSuQmCC",
            name: "Summon Explosive Box",
            description: "Summons a box of explosive matter",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Explosive_Box"
        },
        {
            id: "TNTBOX_BIG",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9ElEQVR4nM2SsUrDUBSGvxuSSUgLhRoi5BVqoUhKV0G6pmCHLvENevENfIEEX6B1FYwv4K64+QjeoWRLySJIIA5qajukXtqh3/RxD/ycy/lhRwTA83RaArwqxZnnUed+qKDzwIuU9ONYGABqsQDgPctq3Q8V1zLjfjzGj6LVBpcXg9J12lvXjeYJMgy+XQrEaSLM3+Eyz7cGXAXnzJIneBshoxIAA2BwdMzQavGplnRFo9YnvR63N9D/sFYBjmniuS6ObWt5FbALBxKQFkX1oOtaPdgkvnvU68FfmrYN/Hxh1Dip7j20Wv/ytR6kRVHdWMf3whedwoE3nnyTZgAAAABJRU5ErkJggg==",
            name: "Summon Large Explosive Box",
            description: "Summons a large box of explosive matter",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Large_Explosive_Box"
        },
        {
            id: "SWARM_FLY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBElEQVR4nGNgoDbwjMj4j028buH9/27527HKYQV1C+9jKK5beP8/ugWM6Iqb4hVRxGB8Iwe//+ISUgzbV8xgRDaABcYIspeDMKAaT5y7gWL7uQObUDTCABPMlnUHH8ENghuGwysYBiAbAjPIwkiDgYGBgeH09k6sAYsrsBmMHPz+e0Zk/IfR+46dg9PY1KP4C2bqyxfPGBgYGBjEJaRQFKMHIIoXwgu64DbANMI0YNMIAyzIHD4JJYbbF46gKIC5BkYTBEYOfv+NHPz+w9jIchce/P3PwIAaM0wMaABXfDMwMDCsO/iI4cKDv/+xxgy6bfhc6BmRgZGk4QCnBJIBxFpGFAAAluWClFOOSeYAAAAASUVORK5CYII=",
            name: "Summon fly swarm",
            description: "Summons five flies to aid you in battle",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Fly_Swarm"
        },
        {
            id: "SWARM_FIREBUG",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFElEQVR4nL2SvWoCQRSFz4hlQNg3sB0h1S5ELSxNLxtI5YJVniLY+Aq2SZoFrS3sYuEPKFi57YBVqoF9gptiucuscxdMkwPLzFzu+fZcZoD/0mY8p1k4oT8ZpNp02PUhm/Gc+OPaLJxUzpntieYmb9ovTwUMhWl7OWF7OZWNOtgpKWkDAAafb8osDiWIYXWjeAAXwqB+JwQAfP984Ta6e/ZiPfafafSQw9gc7aCFOFVYvhLiVIljVApMNjYvxglaleb39d4DlCO4sdjIBsnoAeK06DE2LxO4adxarTLboyTSlESaAIBX1nV1JqB6Mw23QQc79XHMauOaxQHX1Zmkm4H0R0lJpGk67PqvUiQK4jHv6b1Lv2JyiZmwvmH8AAAAAElFTkSuQmCC",
            name: "Summon Firebug swarm",
            description: "Summons four fire bugs to aid you in battle",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Firebug_Swarm"
        },
        {
            id: "SWARM_WASP",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEklEQVR4nGNgoBeoW3j/v1v+9v8kacAm9nBXCYo4I7ripnhFFDEYf0OP1//Fe98yrN1+khHZABYYI8heDsKAajxx7gaK7QEl21A0PtxV8l/erYcRLli38P5/uCEMDAxl/bsYGBgYGCyMNOCuwAaYkJ2+7uAjhnUHH8E1MjAwMGzutGX4+f7W/4e7Sv4basn8//n+Fv6A1LP2gCuG0ehsZPUoToMFVKyzMAMDAwODoZ4WhgXybj3YvRPsaf7/4a6S/w93lfwP9jRHsW1DjxcKjdUFwZ7m/xkYGOC2MzBghjxegM9mGLjw4O9/BgbsiQwF4HJy3cL7/y88+Psf5l0MjTBv4AMwzRhqsZqIw3XoUUkRAADN96NAghWnQQAAAABJRU5ErkJggg==",
            name: "Summon Wasp swarm",
            description: "Summon six wasps to aid you in battle",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Wasp_Swarm"
        },
        {
            id: "FRIEND_FLY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABX0lEQVR4nL1TPUvDUBQ9SZNNHKUgCSI4CCIuTg4Jutg1QugmGQJdmt3Q0V+Qjhmk64MW7F55LhIcgkOGgCDFUqiDW3GREof2hZs8V73LeR/3nHduDgH+s5aDSUERAFSxYLbfZbbfpQS6Z7ZffI2fsRxMSgQATTRmXhgBACMCmRdGDIDL477LY4XZfmGP13db1xdKxQEAOJaJzAsjIZak+Vpk48TlscI/37AzvFEER6vP6VgmAGCEMEKaI0lzHJF7l8cK7dc2h322IQkBxzKRpHllFNFLBSpq9Fs4lonR4zuSNEfj477s8RaroC6Cusjx2WXRancKgQ9PadFqd8o1TUdycNdsRAAwn00BALvGnvQIdaH+RqZEb7EK6khHUAV5eHJQkuezaemAuqFnoqQYaVNPN4Lb71nU043A5XGf2b6Uggqso7l6eQ22m/s4PD1HTzcC6SnIEUpF/4c6/ln9AAeuuf98is8sAAAAAElFTkSuQmCC",
            name: "Summon Friendly fly",
            description: "Summons a friendly fly that attacks your enemies!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Friendly_Fly"
        },
        {
            id: "ACIDSHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6klEQVR4nGNgoBAwYhOMrff5z8DAwKBu+A8uVhOwDataDMHYep//MI0e5hJw8R0nX2A1hAmXZnTgYS7B0LLB6z9eA2Dg5nkmuK2EAIYBN88zMagb/oM7H2bIjpMvGG6eZ8JwBYoBH19/gbMnzniF4hIYGzlcMAzgF+Vh+Pj6C1wxupfUDf8xTJzxCrcBMBfAaHXDfyiG3TzPhOJKBgYs0eiX5QD3I78oD4rcx9dfGDZNO4CiByMQkTUhu+jj6y8YBmI1ANmWTdMOMMIM2TTtACO2NIJhAEyzmRsXhhh64GIFsHyAi09/QMgFALIyb/C0UGW5AAAAAElFTkSuQmCC",
            name: "Acid ball",
            description: "A terrifying acidic projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Acid_Ball"
        },
        {
            id: "THUNDERBALL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAApUlEQVR4nGNgIA94TH2Lh4sd9J7+iocLN4KFGPt7T38tNuWGsJnQjIEYjOwkZNUoNhSbckNUozkGDTBi2s7AwFBkwtV35hvcIGQFTMgugYAiEy44ufvUD5w2eEx962rGAVfKwMCAZonH1Lc7soWxOwnuKohSiCCEjaIBbgkywO4HiDGuZhxwaQgD0w/oLoGw4fHQe/or/lBG14zJJayBAX9aJJhOAZfvXCOeYoPpAAAAAElFTkSuQmCC",
            name: "Thunder charge",
            description: "A projectile with immense stored electricity",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Thunder_Charge"
        },
        {
            id: "FIREBOMB",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAARUlEQVR4nGNgGAVQcFtX6FOhOrGqP683/v///////z+vNyas+lOh+n8kcFtXCE0BExr/5Z7XyFxxF1FqOwnuMEzHjGAAAM4vKis96tBtAAAAAElFTkSuQmCC",
            name: "Firebomb",
            description: "Slow, fiery bolt",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Firebomb"
        },
        {
            id: "SOILBALL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAABQklEQVR4nK1SvWrDMBC+NKFwOBgJjEBgKAQHd8mQhk6ZsrSPkDFr9jxHHqJjH6Fd+gABd/BSgzEEAgJRsDExgoChwxnFTQ3t0Bs+0N33c0IC+JdaLafr9aJz1Ls4bzaPnwft+cLi0/N7t4CoyBkAmLwgNnLmONdtWY8W8HwRR/vJ3U2b5PkCANqB2+3LAACUNmmaBcHwJwk583xRVSelDfITAAwAoCprx+0rbaqyplwiEcbRXgqUAk1eNALH7VtZmh4dtw+gkbM42lMfQ5YliuyuyJLYhACQpkfysx0AmNz731aySJlKGykQQ2byIt4dgmCYJapJsDwqshyFUmmTJQo5C4Kh0mYUykZA3u2VqrLOEjUKZVXW8e6AnNlLnx9uPhvbNEIypunr20f315jPxm22FHjxNbrrYXG7Wk5/5/2lvgDJW8biCZ9LKAAAAABJRU5ErkJggg==",
            name: "Chunk of soil",
            description: "Don't soil yourself",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Chunk_of_Soil"
        },
        {
            id: "DEATH_CROSS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7klEQVR4nGNgGDTAsusLg2XXFxSxhM2f6xM2f/bCp44JxjhexsNwvIwHm9mmyBx0NUwMBIAA7+sGdDEcFmGCpQ+///////9/4lSjgYTNn+v/////f+69b38TNn+ux6WOEV0TAwPE2bpyEm+SFDlFGBgYGObd//4vSZGTKXHLlwYGBobTC3x5t2EYAA1tUwHe1w2mipIMUXIcKDbNu//93+VHL5g+fBb1ZmBgYEA2BK8Xlj78/h+fF/CCpQ+//y84cA9vIOKNxtP3nzMwMDDsQBfHmpDQUyEDAwPDh8+iDR8+i04m2wUMaCGOy6KBBQDI9GeCaLfAfgAAAABJRU5ErkJggg==",
            name: "Death cross",
            description: "A deadly energy cross that explodes after a short time",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Death_Cross"
        },
        {
            id: "DEATH_CROSS_BIG",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABC0lEQVR4nKWTPW7CQBCFPyyEXKR2hbsULtKm8AWs9SUQKTgBUg4R4RNQBHwGJK8saqhoUiFaXFGnsNxsqknsjb2JxFfuvvdmZn/gTkYA8dtnZ/H4+gDAYqNmAOu5zkUne8LYTmwLpunkGXgCctmTYqLz2kY7HSAKknqoQCegjyhIHkNq5erS60sVQmp1xdeuIoMsNmpmjDEHszJymH2MRDxNJy9RkNQhtYpZciQjZvnTNhkAV3x9vpV+VTTv67nOv2+hKpoP0tIjSDRkyjbLKPvt7vLvEQ5mZYwxzhGcyBm4NB78folCu3Ub8Xj2Qpu/zJ2APvbb3eV8K/0hM1h/wX7nwKkqmpOry7v5Ak/mdf4MmjGpAAAAAElFTkSuQmCC",
            name: "Giga death cross",
            description: "A giant, deadly energy cross that explodes after a short time",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Giga_Death_Cross"
        },
        {
            id: "INFESTATION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAQklEQVR4nGNgoAW4MuPmWkJq/v///x+/ABmGEmfTgAOCXsGmgKAmXP6kmf8JGoxNAdnRSDQgK/AoAWQFMNGa6Jp8AUwYP2lDDJaCAAAAAElFTkSuQmCC",
            name: "Infestation",
            description: "A bunch of magical sparks that fly in every direction",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Infestation"
        },
        {
            id: "WALL_HORIZONTAL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeUlEQVR4nGNgGAUDDxiFJrrIMzAwMPBJC/vABAusDJmwKZ5w7Pw/GPvT07dbGBgYGFj4pIUfyCowMwRL6TE4i3ow7H29g8FZ1AO7dVYMcDVrn12a8vjBXwYWBgYGhscP/jKsZbiEohbdIBgfqpnh8YO/1PHCKBgMAACaDjJlRmedQAAAAABJRU5ErkJggg==",
            name: "Horizontal barrier",
            description: "A thin, horizontal barrier that harms passing creatures, including you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Horizontal_Barrier"
        },
        {
            id: "WALL_VERTICAL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuklEQVR4nGNkwAGEJrrI80kLP2BgYGD49PStwrv8PQ+xqWPCZQAMyCow45XHaQCftLCPrAIzQ7CUHgOftLAPyQYwMDAwBEvpMTiLepDnAhjY+3oHXnkWXBIFVoZMcNutGJgKGFaS7gJCthM0gJD/CRpADKCtARSFwYRj5/85i3ow7H29g2HCsfP/yHYBoYDEmQ4YGBgY1j67hFczXhd8evp2y+MHfxnWPrvE8Onp2y0kGwADjx/8xSsPAK2PM5zfeyc7AAAAAElFTkSuQmCC",
            name: "Vertical barrier",
            description: "A thin, vertical barrier that harms passing creatures, including you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Vertical_Barrier"
        },
        {
            id: "WALL_SQUARE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABW0lEQVR4nKWTMWvCUBSFPx9ZO1RJhy5xUKFuXRxKcUnBYNdQx/oDCnXs1NkxxT/QjlJXJYFmseLg4taCUTCLQ0NduhbskhdiMFTwLO8+7jnn3ct9Fw5ERgb5XqNeK2pNx/M3taKWkecukeP5z0uzO4gM8r1Gva4c9UuVAgC6amwJ3MBGVw3cwAZgNpkz+P25XprdgQCoFbVmqVKIhJIoETfUVYNSpcBxTvQBlHgiFPaAoRvYWOPpJUDr4nwU0qqAqasGn8H6dSoNHM/f3JWjR4at04dOGHcAWnQBsFZt3MA2ddXgTM2+A4hkn/8hyRGyxH3EsqV4LNLp+0EknfdBfEoiLbELchq6akSxkn260qQ4HGXVWrXTPKqSF1bdUdb3b/7jqj0CbsKkCZhpZcd/ZNSCNZ4uZpP51oh2/UYpnk3mAC+QWCbgVt6Ti+R4/qZ8kssAfHx9R8t0MP4A2TKVg3yv8kYAAAAASUVORK5CYII=",
            name: "Square barrier",
            description: "A thin, square-shaped barrier that harms passing creatures, including you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Square_Barrier"
        },
        {
            id: "TEMPORARY_WALL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2klEQVR4nKWSMQrCMBiF3y/dFIdCnIpIBnGOQy/QCzg4eEIHh17AC3Rx1g6lSCcLHaRjIQ410ZYmqfimF8L35U8I8GdIlZ1/OoaMrwEgKbM0rvaHIUBKKYlIc54qIePrKOBCrePKDXcEUcDFVjTvFRe4ueGOYLmYA6u67cVsFNwRsKACNtO255/5bTAATEwbY2CrQEopbaCKZ9pQJyuRaRLrFRRIRGSayCn4Fg1J9BXKwge71rqbJEbB/fEEyxvdTem/iRaci+wCtF+57eOiBUmZpUO9H9e/+DkvSZFazpPI9FkAAAAASUVORK5CYII=",
            name: "Summon Wall",
            description: "Summons a shortlived obstacle",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Wall"
        },
        {
            id: "TEMPORARY_PLATFORM",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoUlEQVR4nGNgGHLgPxTA+Ey4JCiygRRxogwhy2UwTYQ0M+GTpBgQ43SKXcDIwMDAECi0erm5qJKai4ySkZwYH4OozDusil8/EWJ49OoTw54n986dfH3v1vp3oZEsDAwMDDDNxkZ/GBgUvjAwaHBjNUD0xhcG0Qd/GBgYlIwYGBgY1r+jghdYGBgYGE6+vncLwlUyknvCwyD6gDgvUGo5dQAAiJNZoXSSBiIAAAAASUVORK5CYII=",
            name: "Summon Platform",
            description: "Summons a shortlived bit of ground",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Platform"
        },
        {
            id: "PURPLE_EXPLOSION_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAY0lEQVR4nL2TwQ3AIAwDWZLRsgNTsAbfzJAFzKtShagJENVv++RYSkp/qOVarsIA4IaYKEIbhMNmDV30lmsxUQCAic43oXTmYfQxQDcYzW/oqtkn3R0OF7t12eoZ9foHjsM76nOobAu8ehHLAAAAAElFTkSuQmCC",
            name: "Glittering field",
            description: "Small explosions appear randomly over a large area",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Glittering_Field"
        },
        {
            id: "DELAYED_SPELL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAd0lEQVR4nL2RsQ2AMAwEH2q2oQyTMEQGyAgZxD07mJIym7g3FZKLUGA5fGnp719+4G+pqo4zs9ARksxCyW12J7NQBoDaitZWfIm1FWWhxELZQlgoaUcAMHc4K4DLHrZlP6eOXlvY9C8/iJnQAH1TPmuENRkCCdUNQg1oODqPo1MAAAAASUVORK5CYII=",
            name: "Delayed spellcast",
            description: "A static, magical phenomenon that casts 3 extra spells after a short while",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Delayed_Spellcast"
        },
        {
            id: "LONG_DISTANCE_CAST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXElEQVR4nGNgoDf4svX//y9b//+H8VlI1Tyrfw6czePNyMhEZQcS5wpkLxAN/v8nQxNVAEk2k+NMnLFArGGM2DQwMjIyYleOwwXotpHiFSZsNpLsAnI0YjVgQAAABVs0DvgLrHgAAAAASUVORK5CYII=",
            name: "Long-distance cast",
            description: "Casts a spell some distance away from the caster",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Long-Distance_Cast"
        },
        {
            id: "TELEPORT_CAST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYUlEQVR4nGNgoBX4svX//y9b//8npI4Fl+ZZ/XPgbB5vRkZcBjCR7URCgFgvEAX+/6eSQRQDol1CipPJigW8FvxHAsRoZMKnAMaH0YyMmAkKQwDZEGwa8LqAFI14DaArAAAhg0f0Bl2F6wAAAABJRU5ErkJggg==",
            name: "Teleporting cast",
            description: "Casts a spell from the closest enemy",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Teleporting_Cast"
        },
        {
            id: "SUPER_TELEPORT_CAST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYklEQVR4nGNgoCb4////f1L1MFFqKdwAmO2kuoIJmyZSDGFiYGBgYGRkZEQWROcTNACbxp2eZ0gLUGxhQLIh2MCXraRHLW0MISeR0cYQBgYKvfRl6///fS6z/1NsCNma0QEAgoJB49VDvA4AAAAASUVORK5CYII=",
            name: "Warp cast",
            description: "Makes a spell immediately jump a long distance, stopped by walls",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Warp_Cast"
        },
        {
            id: "CASTER_CAST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbElEQVR4nGNgoCX4DwX41DAiK4YLMjIyYlOMVw0hm3CpZSJWEy6A1akMDAwMX7aiuojHG7u3WHBpntU/B0MMmyFMDAyk+R8GYHooDgMmBgbc0YYPwPRQHIhwMGDpACUaYSYTk5SJAsRkJooBAA36SV5CILUfAAAAAElFTkSuQmCC",
            name: "Inner spell",
            description: "Causes a projectile to be cast from where the caster is standing",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Inner_Spell"
        },
        {
            id: "MIST_RADIOACTIVE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwklEQVR4nGNgoBaYdSr2/+YHFf9J1ccE03zn5GeG56+ewg2jmssIAUZCCmCukRSTZvBV6MBQz4RNAywsyiYHwDUzMDAwYAsjJnTN6Io/PPkHDxtkF8EAC7LEnZOfGRjMn8JtVDHnZbhz8jMDAwM3AwMDxJAPT/6huIARRTMUiEhzMwjIQByHLI4MVMx5GdLMFjNiBAq6Ydg0YbgAnyHYNJENsKVWjGjEp/nOyc8M1889RolOkpwGMwQWyCheo2v6RwYAkeFucLajnE0AAAAASUVORK5CYII=",
            name: "Toxic mist",
            description: "A cloud of toxic mist",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Toxic_Mist"
        },
        {
            id: "MIST_ALCOHOL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5ElEQVR4nL2SIQvCQBiGnw3DwoQhhrWB3WRYFJPB6B8Q7BajWbBY/AX+AeOCyWwUu2BbOGQwwwVhBrnjdAdTEd90HN/z3st7H/xKu/mgOK6GxaecC7Ce9ov96YrIpTb7WbIqOVUDKk2z7tGebErzrg1QXSzGXQ0D2DpyXmE1DJAcBGHgETVq2kTkkt4s0ZxrwmaRAHHLJ80k58sNkUtE/jiXEihYSb0KYN6bils+vVnilEpZT/tFmkkbQxh4jJbbJ8b6C6aJDfpatm1921mlCgOPTuTrnfgommkSNWpP3/nf/Td1B2/7bEbn/9UaAAAAAElFTkSuQmCC",
            name: "mist of spirits",
            description: "A cloud of potent alcohol",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mist_of_Spirits"
        },
        {
            id: "MIST_SLIME",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3UlEQVR4nGNgoBaYErPy/7LMvf9J1cfEwMDA0OQ94/+jZw8Z3n1+AzeMai4jBBgJKYC5RohXhCFqujOGeiZsGmBhUebUBdfMwMDAgC2MGNE1wxQzMDAwXLh5loGHk49BSFAQbsi7z28YcpaEw/WxIGt+9OwhA4MUwkY5KXmGR88eotj47v17TBfANUMBzFYGBgYMA2BATkqeIWdJOCNGoDR5z/j/5fsnrJp4OPkY6rZmoOjBGgvIhmDTRDbAllqJNhnmKh5OPgYVOVV4miDJaciGCAkKokQnfdM/MgAAdOhh3OqFIskAAAAASUVORK5CYII=",
            name: "Slime mist",
            description: "A cloud of slimy mist",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Slime_Mist"
        },
        {
            id: "MIST_BLOOD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAz0lEQVR4nL2SMQqDMBiFn65CsovSwbmeICB0jbPX6NSDeA1nc4CCN+jsIHqBCJnTKWnUgLVI3xj+7/F4ecBZajnXr6rSR7kQAGrG9HMcMShlzU5Ltqdg78CkuUQRrk2zuQ99gOnikecWBgBfR+EaXh/3Utpu3EQbg5bzRZEAUKQppnm2JoNS6KVcJAhc2CghBBmlAAD33VWRpiiFCDal1IzpaZ69UEII7l23YLy/4Jr4oJ/lW+vXziZVQghucWw3cSiaa5JRilKID//X/bt6Azz+a5L1AimqAAAAAElFTkSuQmCC",
            name: "Blood mist",
            description: "A cloud of blood mist",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Blood_Mist"
        },
        {
            id: "CIRCLE_FIRE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABuklEQVR4nLWTPWvbUBSGn1s8mahj0sZk0GAwXiLQ4NWbiL8gJgHHSwYPAo8duqR4CPZfCHjIkCUOxBCTOinZCp08BJQhXkTrwag0Xg1ZTwdLslR7KaUHhKSr+36c9+jC/6hhLiUy7cauYS4l6/a+ib60y3mRaVeK/RY8PiwW/Xux30KmXWmX82uJQrAMqvJsZ+TZzogMqjLMpUQG1fDbnyQqeJBpVwLF8ZcxE2eOs5kGwJi56IYGQHYvC6aF2rFV2ELYXwSsGxquSmLMXEojT02c+UpOAImgvxVlx+VidK+oFAS8cA3GZAPMjh0PEcDZTOOqJKWRpxr1mlzc3qvjSkGCNibOHExrzRRMi4kzx1VJDl+eaNRrcn55pRr1miQ23nK9tcvNz3eLLIIJxQgeH9ANjbS8cr21y/nllTquFARg//s30vKKMXMXIUYqAXB3cEqx3yIL4OdApSCHL0+Ubj31wc4Ijj8J3/7dwenSQWnkqSirbmh8fP8j/D+CqQROo5hEAOo0e5ycHS1cmJa/cYzOL9jWltZNi06zF4rFlNvlvJycHS2VQiJC651mj0+fv8ZwK/U3h+mf6zcGkvCWPxg0lwAAAABJRU5ErkJggg==",
            name: "Circle of fire",
            description: "An expanding circle of burning air",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Fire"
        },
        {
            id: "CIRCLE_ACID",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABn0lEQVR4nKWTsWobQRRFzxiBB8nZyj+wBjfTRL0KGVK4WBUywo4axYXAH5DKxC4t0DcIVFhqHITJFt7SIBcLSedqGoHmB1ItK7FFYFLIO8lqQxq9ZuAx775779yBHUv8q/npybfNYFjovUTXTFqmdL/Q6N19sCc3VwDEhDRouzOv+WDE9PbZzVW2h2NCUq03IAp+Rd+JAxzY2wKbgziksf1q882p1kiTYF+PNjTrSzLfA+BAKRq06YuPAmAv17w9nPke64VE1JdMWkZIk5R8cgDNYFjaLE3C430kVjMF4Hqp1sSE5CbvbbtqX49YLySTlhG9ftc+3keicxnYXIY0ScFUB9CgjTQJ64Wkdq7p9bt2On4QvX7XVivvWM0U+98OyXyPmLAMEBOS+R7V44zVTDEdP4jOZWABxNkPqscZor7kQKkC4wpsQtIMhsQKUjQ1k9AhsLVzzaRlxMXn91aykXD6Rv8luqb0jH9nAHCG/u8ZXZDmgxEnN1fE6k9oUjT4PwHPUW/QZj4YFSUAeTxdlAFO1RdnWO78dpR3/kw7129OO8nACikODAAAAABJRU5ErkJggg==",
            name: "Circle of acid",
            description: "An expanding circle of dripping acid",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Acid"
        },
        {
            id: "CIRCLE_OIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlElEQVR4nKWTMUscQRiGn1m8g2MKObL7Sa5S0lwhSwo7ET2Ra/IT/Csp8wPyJ65OlWYRVxE7i2QhcCAhVorfrUgCg+AVk2Kd0fVSBO6DYYePed/3m3fehSXL/Kv58cOaXx/ttnpX5Smfvt4unG81Dse5H42HAKjWiKTxG6ospkyKKuJWXoNVa/S6jgC9vAOIZE8CPpBEgqAcyxl+fHsiurxrkY7GQyZFBUAS7gzw89dtc9AZsJ4b1yWzhs9fvhtc+/oBkwCsj3ZRrXn4fQ/OMHMenOH4/MJU2gGIPb2uUa0JJq/wqmauUZ4UF+Zgb8cfnZyZ/e0tn9k52IbkpalJ2Iik4Aw3rksucwL4YG/HJ50elXaYKWA9qs9+xAlUa7Cet/aRSrscnzfKAJv9P8ycJ7MGGbxpTZxAExKRlN5qn0wglzn721s+lzlHJ2cG24CxHpEUkZSr8vSZYCFh1pNvPAJNPsKrxElfYKIHZTHl3cYavdU+m++HyCAF68mkIZRB2ixJKYtp1PqvKEeTWYzy0j/T0vUXHAvDlL+ip60AAAAASUVORK5CYII=",
            name: "Circle of oil",
            description: "An expanding circle of slick oil",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Oil"
        },
        {
            id: "CIRCLE_WATER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlklEQVR4nKWTMUsrQRSFv4lTLbxq2VImmCrLI4UE0sU/YCMRJMULgvkBL7xSAgGx1tJCQbSQgJJC/4DphLCFhLUyZHnlsu1WG8ZCZ8hm5fHQ0wxc7j1z5twzQmvNdyA/K24eTfThjp+rHY9Cgn5drPaKZQXrB9f6tNcCIMkcXJna0+D3yR1/L35ZotLqcJI5jIKY8XNEkjmc3U9IMseSnvZarB9c21utgrtpqk3T+DkijGLi+QsAXrmKrzwAmjWFK1NaPx1hFWweTQrDvvJoLIZ45SpBvy7CKC74ZE083PELN4dAcPkgdve3NTzYmlFhTC6xgnj+QmMxJOjXRafb1rcfJOYZYRTnTLUErkwJo5jGYsisMqDTbeur8xvR6ba1I3+w8Trg8XGMrzxrao4gyRx85fG0tsfG64Cr85sP+TBVf3ha28MrV2nWVE5xCd5D4sqUZk2xtdVkVhmwu7+tZ5V3Il95dhOuTHFlyvEoLK7RGGlgDP3XGi3BcpBMApfJjHRXprk0/leUzSAUoyw++41f/kxfwRvXmu5kk5VKlAAAAABJRU5ErkJggg==",
            name: "Circle of water",
            description: "An expanding circle of water",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Water"
        },
        {
            id: "MATERIAL_WATER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAjElEQVR4nGNgGBggk/dSJu8lVikWTKVfHh6FsGPWfGZgYFgSwousgAlTNY+8NQMDg4MdF7I2LBqQVWNai0UD3CUQcODQNzQGigasXjxw6BtEtYMdF1wBE6Y6rDrRbXgySRyrw+CCcAUIG+DeRdODFhKMyHLIkYBsENx4dD88mSSOFqxoqnECPEmD9gAAObdEXw8Y4PIAAAAASUVORK5CYII=",
            name: "Water",
            description: "Transmute drops of water from nothing",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Water"
        },
        {
            id: "MATERIAL_OIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAmElEQVR4nGNgGBgQF2cWF2eGVYoRU+mLF58kJPgYGBgUFIQYGBiamnYgK2DCr5qBgaGuzgO7BmTVmNZi0fDixSdkRQ8evENjoGjA6sUHD95BVCsoCMEVMGGqw6oTzkaEkpubBoSB6Y0XLz7t2nUD3Qa4OjTPoIUESjxAAgrNeAkJvkWLTsG5KH5YtOgUmnvQVOMEeJIG7QEA25s9PFunoVEAAAAASUVORK5CYII=",
            name: "Oil",
            description: "Transmute drops of oil from nothing",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Oil"
        },
        {
            id: "MATERIAL_BLOOD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+0lEQVR4nMWTvW3DMBBGn8LI6t0ICKAVAq6QMhOki2czu0wQqMoKhFcQEIAu3BkILRB0dRRpypWLXKM73H2fHv+aGCOPxNNDauBZku/drmqe3E8E2PZvzW3vfb8vDW6Fs5sACBacNrHth1WjagnuYOLfuIiVhrYfCqK7Bu5gYrAQ6JI4j9lNlUlhcLEdgQ6FTyYinN1E2w+cx+M6wWS+4kb71JBcTIKF83hko31BURDIsOSBbqmFzFJEMhg+Pxr5swhzCoVPe5KfRkmQrTsJ9VLLHq0SCIUMyPdiy1pIVw3yAUGWE1H4Sgx3bqIM/hoTlYaX11oo0fz7a7wCeQ97P/FZ8pcAAAAASUVORK5CYII=",
            name: "Blood",
            description: "Blood blood blood",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Blood"
        },
        {
            id: "MATERIAL_ACID",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAo0lEQVR4nGNgGNTAfb3Jf/f1Jv/xqWHBpfHK6Y9w/uyvMf8ZGBgYUrmXMKKrZcKlWceUn4GBgYEhxE0DwyCcBqBrxuU6nAYgOxsG1uy6gZWNYQC+wFqz6wZcc4ibBopajDAgBNBdgRKq0lWqcJNxhcOV0x8ZnrbdhutDcQGyJmzhgS2AMeIVPQ2gW7Az8AyKHoww2Bl4hhGb87FpJgiIScoDDwBhGE0CgShL3gAAAABJRU5ErkJggg==",
            name: "Acid",
            description: "Transmute drops of acid from nothing",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Acid"
        },
        {
            id: "MATERIAL_CEMENT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA10lEQVR4nMWTza2EMBCD7WjP0wMdQEMUR0MwFdBCSAH4nWZfftjTHjZSpESJPZ8nQEn4ZqSv1ABesdi2bTg8z1MAME0T+7N1XVuDXlhKAQBIgrvLzB6Nhgjuruu63mKSMLOG6KOBu0sSYpJtwVLKYNJEuO8bAEAS8TokEXHMDDnnZ4J935XSP1Csw0gScs5IKTUUTYT6m4gY9b4mGwyWZWFUjks1Bcl3T+rXaHrQu/dVo0ePBEFRZ65FsQ/SR4P6QiAHAclBPEToTY7jEEnM8zwIY/Dnf+MfmS+N+fqSSHwAAAAASUVORK5CYII=",
            name: "Cement",
            description: "Transmute drops of wet cement from nothing",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Cement"
        },
        {
            id: "TELEPORT_PROJECTILE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoklEQVR4nL1PuxXCMBDTeQIX9ghehT5bwESwRXpWuRHswhscBTFPJCZ8/B7qpHfSScA/YWYbzY2Gyq+fRWTbQFUn5jnns5k9jgFYM7fQtxPI3NWl99l7f2AeQjh2AgQAnKpOKaWZzTHGE5tlVUNExJYNjs0AUGu9Mi+lXF5MuDdYJjR9Zs5N2MRwqoqU0pO45ntw3xzvotWmOZ81GH08HDCMG4dPOJ4Zl8MrAAAAAElFTkSuQmCC",
            name: "Teleport bolt",
            description: "A magical bolt that moves you wherever it ends up flying",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Teleport_Bolt"
        },
        {
            id: "TELEPORT_PROJECTILE_SHORT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbklEQVR4nO2QzQ2AIAxGX52AA6uYsJTLuF5HYIh6UIxAMTFeeRfSJnw/hYmLqiaAnPNmZtgJAOUtLM7nV3ERqWfPOYSwAsQYd0dA2l0XW1WTmdlV4eaqUHVoEwAMUwzdR0mejq1zoTviV34LTOAAoXBLULXcrRkAAAAASUVORK5CYII=",
            name: "Small Teleport Bolt",
            description: "A shortlived magical bolt that moves you wherever it ends up flying",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Small_Teleport_Bolt"
        },
        {
            id: "TELEPORT_PROJECTILE_STATIC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkklEQVR4nK2R0RGEIAxEs/SSgq5SC0ox8UOWiyHiOd7OOEDIPhcQ+bfM7JNr7u5xjGorGA0A0EvIIG6Uf1bVrRsmOJmNZjZHM6EApm+ki6aYIgOvNO7AzDjd0npSvAMeQVT11MQ1e91d/JAAAOstNlf6PkBdr3cXkQMAI8GdGSlGP4L/BMjmxwnuYI8AlV4DXmsHvLxTq4tK+ssAAAAASUVORK5CYII=",
            name: "Return",
            description: "After a period of time, you'll be returned to where you cast this spell",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Return"
        },
        {
            id: "SWAPPER_PROJECTILE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArklEQVR4nKWTOxICIRBEX1NmXsgDGXMYYr2P5VWWVNMxcBGW31q1k0zRPT1AD8jMOBLukBo41cDt8TJAwDC/n3d574cn0J952GDPlA3fNLhezqqxGd94EEIAIN1xxDcnkJSEVq53+fIdmBn2jQ024x3AsiysqOXaXJWEPV5rNkkqRcW6fgu/EsAcQIyx67yyEaPJqBmjKvc6Zs7HWEa6UdKU5iVs2qDevVtz9Dt/AOL3aSqI3k4qAAAAAElFTkSuQmCC",
            name: "Swapper",
            description: "It was theorized that the source of qualia would be transferred \u2026But it turns out it was the whole body all along.",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Swapper"
        },
        {
            id: "TELEPORT_PROJECTILE_CLOSER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuklEQVR4nK2S0Q3CMAxE76p+M0W6AMouDAJjlD1gl4oF4gX4ZYHjp66iym1AcD9RTtbz2QnwT0mCpCxpubfURaaZjQBAsgnoq+55lSaTnKIkNZh1cSllXHcYhuHSjAEApZRRUp5POSyCbsoBDgGA+3N/k31kppRuZgaHnLDsQQBIEpJAMn4FAHgc0nmvsy+yW5kTAJjZdHzZlbPmJD6K9MkHcXmxKtX+5ghVqvA3ud8EtGBfASL9DPhZb6Uae0/DOapYAAAAAElFTkSuQmCC",
            name: "Homebringer Teleport Bolt",
            description: "Brings the target hit closer to you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Homebringer_Teleport_Bolt"
        },
        {
            id: "NUKE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA80lEQVR4nMWToY7CQBRFz9vUoqqaIKowaByp2X4BgtQRJMGtKgJVsVWrIPxCwzcUQYPjJypIMKBwmFlBOky3QLYguGrm5d377tyXEaUUr+DjJTZgAWznopqODYDTO0gdASmeYIrUERIzg+1c9KXp2P8S0QJxHCsA13UrTVmWMfWXRGkfz/MACIJAwAgxDMO70wry1F/qWpIkCv6EOGiVievzDECTLw7KPVZx2O2P1dF21cH6XFawADpjJXDNAcpZRGmfYXtBlI60gzzPgRsh3sJnY8LPJuCrm7A6fQPXzO6u0XT2CHoLz5DB2EJdYgF5+2/8BR0Eaal/TDYyAAAAAElFTkSuQmCC",
            name: "Nuke",
            description: "Take cover!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Nuke"
        },
        {
            id: "NUKE_GIGA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABR0lEQVR4nKWTsWvCQBTGfweluBSHTIKIY2nAP8FS6lZwdHfoIHRKljhIFIdm0SkgnRwLQhehm1Ca0c0hxaUQpNipg5t0uQ72rtEmgu0HD264993vcd8TbuhYfKtjen0OlJj6yHzOAODu9NoGaJ/daiMhBFLKdAc3dKypj1w+GLrc0LGklLpRnZNKSClpvzStqyevp0zzOUPTpKljen0pJcINHSszzvYAisViasP58Q3dSY1WZcTzp8+8NLM7ptfXBJlxtrfPIAgCWpUR3UmNcrkMwLw0s/9MoLT1C3HFL6URABwBvL1//H5yx1M1bwh+DLZGUEoaJQgC6uaAYdjQBFEUIWCThV2TXV2eNBmGDermgFfjniiKWFdXdiJBkhaLhSYoFAqsq6vtb4wHCeDxwtkbJB13FeV4HRTlqY/eFPXqIcsk/rvOX94T6a8Lmo43AAAAAElFTkSuQmCC",
            name: "Giga Nuke",
            description: "What do you expect?",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Giga_Nuke"
        },
        {
            id: "FIREWORK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArklEQVR4nGNgoAXIOK3wn1i1TNg06Zv44jTsf+Yr3IZP/5/7Hwam/8/9j80l/5d/wm3AfzSAbvP/5Z8gEss//cdwScZphf/oLsBqCT4XwLwBMxCrAfjCAF0TKbGBFyAb9P///0KsikKWQQINRuNS/P///2ScNh1/9B8z2pAMwWYgPCGFLPv/31KOkRHZBVDwCQcbP0CzORmZJtkQJAO00NUwoQuggZ1Q+jhJNpMCAHAwnJ7GRlAeAAAAAElFTkSuQmCC",
            name: "Fireworks!",
            description: "A fiery, explosive projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Fireworks!"
        },
        {
            id: "SUMMON_WANDGHOST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoklEQVR4nGNgoDX4///ff7I16xdKkaa54NKhbYQ0EzQUZkj9dvH/yBr0C6X+9x358v///3//cRpScOnQtsPf312Caa7fLv4fhmGaYRjDEJhmsl1w+Pu7S8T4Fas4zHaiFKMBJhhj7e0rT9AlL/Y/Y+w78gWvIXADglV1ZLApKLLhYSTkCgYGBtQ0QApgQuZgCweSLEKPSooAzBCYq6hiKDYAAFoSiTpKJy1YAAAAAElFTkSuQmCC",
            name: "Summon Taikasauva",
            description: "Summons a possessed wand to aid you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Taikasauva"
        },
        {
            id: "TOUCH_GOLD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWUlEQVR4nGNgoBAw4pL4fyflMopClTm6RJn4/07KZXTN+MTx2kqSGmI0Y1PLRKwmok1EF8cnh9cFyBrxeY9iL+A0ADneiUoDAxsLpLiCqNRISlKmfmYiFQAAzG5NdeF9B+EAAAAASUVORK5CYII=",
            name: "Touch of Gold",
            description: "Transmutes everything in a short radius into gold, including walls, creatures... and you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Touch_of_Gold"
        },
        {
            id: "TOUCH_WATER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbElEQVR4nGNgoBAw4pIwq3n2GJl/qkVKligTzWqePUbXjE8cr60kqSFGMza1LKQahDUskDXhMwCnOnRNuAIRG58Jn3OJBoRsJMZFeL2BTw4jFmDgVIuULEwhSakQnU9MAGMYQkpSpn5mIhUAADS8YPI3TybMAAAAAElFTkSuQmCC",
            name: "Touch of Water",
            description: "Transmutes everything in a short radius into water, including walls, creatures... and you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Touch_of_Water"
        },
        {
            id: "TOUCH_OIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAa0lEQVR4nGNgoBAw4pKYUBjwGJlf0L9BligTJxQGPEbXjE8cr63YNOE0BJ9CfHJMeJ1ELMDlLHz+homz4DOYmJDH8AJZsQCTwBVw2NgwmgnmVIJxjGYhhveQTSbkBaLTAllqSA1E6mcmUgEAwUZlkQVrHyMAAAAASUVORK5CYII=",
            name: "Touch of Oil",
            description: "Transmutes everything in a short radius into oil, including walls, creatures... and you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Touch_of_Oil"
        },
        {
            id: "TOUCH_ALCOHOL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAb0lEQVR4nGNgoBAw4pK4MtHrMTJfJ3+bLFEmXpno9RhdMz5xvLaSpIYYzdjUMmGTJNkLMAlkBYTYMBrDBaQCFmSOTv42WVzOhImjRyeGC5AVoPsbb1pAtxlXGKDzKQ4Dgq7AZztOQ0hJB9TPTKQCAB0/ZSu2mwv/AAAAAElFTkSuQmCC",
            name: "Touch of Spirits",
            description: "Transmutes everything in a short radius into alcohol, including walls, creatures... and you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Touch_of_Spirits"
        },
        {
            id: "TOUCH_PISS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZElEQVR4nGNgoBAw4pL4fyflMopClTm6RJn4/07KZXTN+MTx2kqSGlJsRRZjImQjUQCf7YRcQbELsBpAyN8EDSDZBYwqc3SJiUJk18ASFlYXYEt1RKVEihISsgJSEhX1MxOpAACoN1ubM1SBAQAAAABJRU5ErkJggg==",
            name: "Touch of Gold?",
            description: "Transmutes everything in a short radius into urine, including walls, creatures... and you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Touch_of_Gold?"
        },
        {
            id: "TOUCH_BLOOD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZ0lEQVR4nGNgoBAw4pLYaGp6A5nvf/q0BlEmbjQ1vYGuGZ84XltJUkOMZmxqmcjRRLbtyOpgbBZSDdpoanoDI0YocQHeMECOOqw2E3IFvjQBY7OgSyIDolMfPleQrIbUpEz9zEQqAAAdkkiwRccTIQAAAABJRU5ErkJggg==",
            name: "Touch of Blood",
            description: "Transmutes everything in a short radius into blood, including walls, creatures... and you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Touch_of_Blood"
        },
        {
            id: "TOUCH_SMOKE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAY0lEQVR4nGNgoBAw4pLIrFz2GJk/vT1KligTMyuXPUbXjE8cr60kqSFGMza1TNgkSfYCTAJZASE2jMZwAVkA3QZivIDXBdjinGA6wOVnQvIsuFxAVkqkKCEhKyAlHVA/M5EKAOxvYwKy9d05AAAAAElFTkSuQmCC",
            name: "Touch of Smoke",
            description: "Transmutes everything in a short radius into smoke, including walls, creatures... and you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Touch_of_Smoke"
        },
        {
            id: "DESTRUCTION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyElEQVR4nJVS2w3CMAy8IrZoBUPkiz9mqboEDNApEKuUP74YolIYoxw/uHUc98FJleLkzva5Bn7o20iS7NtIuatDM56FI58AljCXxAol3iwmyaFzhFYsj177tgAA7OXweSBDVkmhDg3vr1uRkIcu9Sexbr8ODaU722U2KA3PJgAUfRt5vFaFbbk6ldidJ3vx+QYAHC5lEkNnnYNOnO2B9e7NQPx7drOsS3uw9FdgiVv3YMRaNWvVFWuiHZy7/57YEr2Eq/7/efsCrFDdmR4A/38AAAAASUVORK5CYII=",
            name: "Destruction",
            description: "Instantly decimates foes around you, at the cost of your HP",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Destruction"
        },
        {
            id: "MASS_POLYMORPH",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAvUlEQVR4nGNgGDDw//+/////YYozYVV0+/ZtuAgBI////3f79m04GxlBlDESNgkJMDIysRCj7sOSTAEBHoQf4C7GBebMOcLAwNDTswPqJIgGFRXlO3fuQhi4bGD07WViYGBQVVVlYGBAU33nzl2ICIT88OEL1BsQ6v3i9DcWJXAj4bbBAcRQBgYGhKdFTvQIxs6EOO/OnbsiJ3oYGBgEY2dO9zZG1gnVAA+EPQURDAwMmVvP/t9cjD8kBg8AACc4bF0ZSmwtAAAAAElFTkSuQmCC",
            name: "Muodonmuutos",
            description: "Baa",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Muodonmuutos"
        },
        {
            id: "BURST_2",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAiklEQVR4nMWR0Q0EIQhE2e3BPiyC6cjEGqwJi7APmrgPEpcF7/Ny84UKvnEk+rNEJOxcfqGqpZRjNwAr7t2qqlZ8Q/XeiegSkVqrPzNINmOQG8BaKxjLhDnny1KQ0b3GGM9AhrTW9pVBZ0LQjugZyBBmPkLOBD8cxl4ft6MEYO9mZu8nKmef4/q9PtkxQWerYM6bAAAAAElFTkSuQmCC",
            name: "Double spell",
            description: "Simultaneously casts 2 spells",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvp1jMwMKAa+FtLt5712mUGBgYGxr2zZxBtmnNqBkok0C4MsQG7/qk45Q4VZpNuIC5N+ADVvTxq4KiBZACUhP1bS7eR9drl/86pGaSa04hhIOu1y42/tXTrf2vpkmQS67XLjazXLjfA+IyDvsQGAJ4JLvIcIyzhAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Double_Spell"
        },
        {
            id: "BURST_3",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoUlEQVR4nNWSzRFDERSFD5MW7BVDBaqw14smqIAObPShCFlJ/GVenpksclZc957zMYC/krW2zjUyF0oplTFGUkpLs3MOnHMAgNaaAADtB0spta2dc1/R0DZw4yaDKADknJcDYwyuKF4GJ4oxvg2klOQuhfd+fMST9MHgE4UQYqFo6ZcEO8M+HQAe/UZKSUIIdW4WQmzTt+oNZimljv/L7/QECkZPbhfQi2EAAAAASUVORK5CYII=",
            name: "Triple spell",
            description: "Simultaneously casts 3 spells",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvp1jMwMKAa+FtLt5712mUGBgYGxr2zZxBtmnNqBkok0C4MsQG7/qk45Q4VZpNuIC5N+ADVvTxq4KiBZACUhP1bS7eR9drl/86pGaSa04hhIOu1y42/tXTrf2vpkmQS67XLjazXLjfA+IyDvsQGAJ4JLvIcIyzhAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Triple_Spell"
        },
        {
            id: "BURST_4",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVR4nNWRsRGDMAxFHxyDUDACGwATwBL0FIxAwShmAjSEB/AGbtjAaYLjBAOXLnmVT2dJz/7w9ySfBWutm+eZrut8bZom6roGQERYlsX3pWGjtdYBDMOAUiq6cds2qqpybds6gGxv/ka7LEt/TgG01odLVxYh6e2NE4wxrwFN0yQxi51xHBERlFJv+rcGZ88wxvgk/IA7izMuDbTWPv/YdnjGGFqs6+ojFRGAw5CQLFbcfzjPc/q+TwBXFMVh+2/wABHBWRNgwQkyAAAAAElFTkSuQmCC",
            name: "Quadruple spell",
            description: "Simultaneously casts 4 spells",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvp1jMwMKAa+FtLt5712mUGBgYGxr2zZxBtmnNqBkok0C4MsQG7/qk45Q4VZpNuIC5N+ADVvTxq4KiBZACUhP1bS7eR9drl/86pGaSa04hhIOu1y42/tXTrf2vpkmQS67XLjazXLjfA+IyDvsQGAJ4JLvIcIyzhAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Quadruple_Spell"
        },
        {
            id: "BURST_8",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPUlEQVR4nKWSMa7CMBBEnxFCQqKgo3VBkZLCV8gJuAw34RLOCUhPAYpSoRQRoqIxAhdGSDSm+Y7iJPyGadar9c7ujA0/QnwrHA4HH85VVYn7/c7j8eD5fHI+n8myDIBRt9EYgzHGSymRUnI8HkmSxF+vV79YLHxRFN5a69frtQcYDwz37WS5XPYuKKWac2+DsiyjfLVaAVDX9aDUHkGapqJLYq1ls9mQ53kzPRBGEtrGaa0H1w/N0+lUNATGGGhp11qjlEJrjZSSPM97ZK/XK5Lwr3HW2ib+rS6iZ/xmXBdKKd7vd/R3BMB+v8c559uNZVkyn8/RWkfasyyLCEYAzrnBiaEpxGBcjwBgNptFxaF3D8a1MQZI05Tdbhd5cblcGjO7xrXRW2m73XoA55y43W4e4HQ6iclkwhDBz/gAQ7Oiq3grWd4AAAAASUVORK5CYII=",
            name: "Octuple spell",
            description: "Simultaneously cast 8 spells",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvp1jMwMKAa+FtLt5712mUGBgYGxr2zZxBtmnNqBkok0C4MsQG7/qk45Q4VZpNuIC5N+ADVvTxq4KiBZACUhP1bS7eR9drl/86pGaSa04hhIOu1y42/tXTrf2vpkmQS67XLjazXLjfA+IyDvsQGAJ4JLvIcIyzhAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Octuple_Spell"
        },
        {
            id: "BURST_X",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4klEQVR4nM1Su63CQBCctV4LrsJkUIKvBYgIIYXA0tXg7L0UKjAt3JZgJAcmpoArYgisQ/7csyCClU7a7+3MaIGvN+cc5+oyTnjvmaapxIaNMZP+pD/ovWfw/0NjrR3UEuccYwPjRgBQVZRlOUCRGGOkaZrJtqIooKrPOM9zbO9dzNOBJDmgMGeqittmhayqwdOB2P3itllN+QUd+s9ay8C9XS9Jku16+aT3MoLtXZFVNXA+Iqtq9D95CUV/81saBIFFRBaXqwCA7P9ERDo/hiLABjr1YwcU7CeWHA3MnvLn7QEPaqlk9HMFBAAAAABJRU5ErkJggg==",
            name: "Myriad Spell",
            description: "Simultaneously casts as many spells as you have left uncast in your wand",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvp1jMwMKAa+FtLt5712mUGBgYGxr2zZxBtmnNqBkok0C4MsQG7/qk45Q4VZpNuIC5N+ADVvTxq4KiBZACUhP1bS7eR9drl/86pGaSa04hhIOu1y42/tXTrf2vpkmQS67XLjazXLjfA+IyDvsQGAJ4JLvIcIyzhAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Myriad_Spell"
        },
        {
            id: "SCATTER_2",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAL0lEQVR4nGNgGDng/////78f9v9Plsb///8PBY0MDAwMZPmRqi4Y/AZRJYyGIQAAYX5A4Zvotb4AAAAASUVORK5CYII=",
            name: "Double scatter spell",
            description: "Simultaneously casts 2 spells with low accuracy",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvp1jMwMKAa+FtLt5712mUGBgYGxr2zZxBtmnNqBkok0C4MsQG7/qk45Q4VZpNuIC5N+ADVvTxq4KiBZACUhP1bS7eR9drl/86pGaSa04hhIOu1y42/tXTrf2vpkmQS67XLjazXLjfA+IyDvsQGAJ4JLvIcIyzhAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Double_Scatter_Spell"
        },
        {
            id: "SCATTER_3",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMElEQVR4nGNgoAf4ftj/P9ma////P6qZFIAe2t8P+/9HBwRjhCIXjBqCG1CUF2gOAHglRvF5kmLzAAAAAElFTkSuQmCC",
            name: "Triple scatter spell",
            description: "Simultaneously casts 3 spells with low accuracy",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvp1jMwMKAa+FtLt5712mUGBgYGxr2zZxBtmnNqBkok0C4MsQG7/qk45Q4VZpNuIC5N+ADVvTxq4KiBZACUhP1bS7eR9drl/86pGaSa04hhIOu1y42/tXTrf2vpkmQS67XLjazXLjfA+IyDvsQGAJ4JLvIcIyzhAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Triple_Scatter_Spell"
        },
        {
            id: "SCATTER_4",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVR4nGNgoDX4ftj/P9ma////P8g0/////z9BL2HT/B8KCNqMbjrRGrEZRLZGil1AURjgMwQmTnTCoigdUNUQivICXQAAeO9g7RgpgWcAAAAASUVORK5CYII=",
            name: "Quadruple scatter spell",
            description: "Simultaneously casts 4 spells with low accuracy",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvp1jMwMKAa+FtLt5712mUGBgYGxr2zZxBtmnNqBkok0C4MsQG7/qk45Q4VZpNuIC5N+ADVvTxq4KiBZACUhP1bS7eR9drl/86pGaSa04hhIOu1y42/tXTrf2vpkmQS67XLjazXLjfA+IyDvsQGAJ4JLvIcIyzhAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Quadruple_Scatter_Spell"
        },
        {
            id: "I_SHAPE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAJklEQVR4nGNgGAU0Av///////z8yF00WWQ0TphwjIyNW7iigIQAA0PAX8QO5QrQAAAAASUVORK5CYII=",
            name: "Formation - behind your back",
            description: "Casts two spells: one ahead of and one behind the caster",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvp1jMwMKAa+FtLt5712mUGBgYGxr2zZxBtmnNqBkok0C4MsQG7/qk45Q4VZpNuIC5N+ADVvTxq4KiBZACUhP1bS7eR9drl/86pGaSa04hhIOu1y42/tXTrf2vpkmQS67XLjazXLjfA+IyDvsQGAJ4JLvIcIyzhAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Formation_-_Behind_Your_Back"
        },
        {
            id: "Y_SHAPE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAALklEQVR4nGNgoAX4////////IWwmgkpJMHXIKKUXINNJQ0gbCWmJkZGRHHuQAQAVfCnegqjAUwAAAABJRU5ErkJggg==",
            name: "Formation - bifurcated",
            description: "Casts 2 spells in a bifurcated pattern",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvp1jMwMKAa+FtLt5712mUGBgYGxr2zZxBtmnNqBkok0C4MsQG7/qk45Q4VZpNuIC5N+ADVvTxq4KiBZACUhP1bS7eR9drl/86pGaSa04hhIOu1y42/tXTrf2vpkmQS67XLjazXLjfA+IyDvsQGAJ4JLvIcIyzhAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Formation_-_Bifurcated"
        },
        {
            id: "T_SHAPE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAMklEQVR4nGNgIA/8////////xKhkItMGkgGR7hkogOw8OBt7MGJVik8DLQHtrRtMaQkAkjgp25WMEB8AAAAASUVORK5CYII=",
            name: "Formation - above and below",
            description: "Casts 3 spells - ahead, above and below the caster",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvp1jMwMKAa+FtLt5712mUGBgYGxr2zZxBtmnNqBkok0C4MsQG7/qk45Q4VZpNuIC5N+ADVvTxq4KiBZACUhP1bS7eR9drl/86pGaSa04hhIOu1y42/tXTrf2vpkmQS67XLjazXLjfA+IyDvsQGAJ4JLvIcIyzhAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Formation_-_Above_And_Below"
        },
        {
            id: "W_SHAPE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAN0lEQVR4nGNgoAX4////////IWwmgkpJMHXIKMWjE42NbigepVg0kOmkIaSNhLTEyMhIjj3IAAA8h0TDze9gDQAAAABJRU5ErkJggg==",
            name: "Formation - trifurcated",
            description: "Casts 3 spells in a trifurcated pattern",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvp1jMwMKAa+FtLt5712mUGBgYGxr2zZxBtmnNqBkok0C4MsQG7/qk45Q4VZpNuIC5N+ADVvTxq4KiBZACUhP1bS7eR9drl/86pGaSa04hhIOu1y42/tXTrf2vpkmQS67XLjazXLjfA+IyDvsQGAJ4JLvIcIyzhAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Formation_-_Trifurcated"
        },
        {
            id: "CIRCLE_SHAPE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAO0lEQVR4nGNgoAT8////////+EWYKLKBTAB3A5pj6OwGiO1Y3QCXgjBQQomRkRFTA1ZBOgNaBuvgSEsAeDI11yS8AH8AAAAASUVORK5CYII=",
            name: "Formation - hexagon",
            description: "Casts 6 spells in a hexagonal pattern",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvp1jMwMKAa+FtLt5712mUGBgYGxr2zZxBtmnNqBkok0C4MsQG7/qk45Q4VZpNuIC5N+ADVvTxq4KiBZACUhP1bS7eR9drl/86pGaSa04hhIOu1y42/tXTrf2vpkmQS67XLjazXLjfA+IyDvsQGAJ4JLvIcIyzhAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Formation_-_Hexagon"
        },
        {
            id: "PENTAGRAM_SHAPE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOUlEQVR4nGNgoAr4////////sUoxUccGkgEu9yCkCahAUkOZH7DaQ9DyQQfQXEw9D+CPCmRZ2qclANzhLNpMXg2HAAAAAElFTkSuQmCC",
            name: "Formation - pentagon",
            description: "Casts 5 spells in a pentagonal pattern",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAApUlEQVR4nGP8//8/AzUBE1VNY2BgYIEx7t+/z2DXP7WBgYGhngxzGh9P6mlAMdA5NaOBlUzDfmvp1jMwMKAa+FtLt5712mUGBgYGxr2zZxBtmnNqBkok0C4MsQG7/qk45Q4VZpNuIC5N+ADVvTxq4KiBZACUhP1bS7eR9drl/86pGaSa04hhIOu1y42/tXTrf2vpkmQS67XLjazXLjfA+IyDvsQGAJ4JLvIcIyzhAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Formation_-_Pentagon"
        },
        {
            id: "I_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYklEQVR4nO3PsQnAMAxE0RNkgkziEQQey537bBS4wgMkG2iUS2WI25DChV8pjg8ClkkwU8zUpz0z1fVjlFCUUN3rENYt6daw395lPxyCZMmsx9vVECUEAJbMmCk//ccXlgk8SjBRzWsUTCQAAAAASUVORK5CYII=",
            name: "Iplicate Spell",
            description: "Casts a copy of a projectile behind you, but the copy still cost mana",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Iplicate_Spell"
        },
        {
            id: "Y_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjklEQVR4nM2Tyw2AMAxDHcQEDMAMrIDYgFU4cutA3QCVEbpBJRYxpyDEt6UX3t2OHSVAIq5zdJ1jqm4TK2pSxorpeTn11SCMgQAgjYimAIB2auU17qeutra0tY0WbhVMZQgA/dI/R/svpjLUGlmkLvGWrJPdE8ZAPaYsY3qSnqdfKGINpBGZhzl58IljhRWie2DRyD/JGgAAAABJRU5ErkJggg==",
            name: "Yplicate Spell",
            description: "Casts a copy of a projectile in a bifurcated pattern, but the copy still cost mana",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Yplicate_Spell"
        },
        {
            id: "T_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhUlEQVR4nNWTywnAMAxDldIJOkAhs2SDrJNboOtkBa/QDQJdRL00gf4gcU99ZyMZyQYOxAnFCaFBnLDQKzKoHJ/g2u9+E/i8RQ65W0SVwWNj4oRxigSANCemOdWBHDLLdtfGxqt6nCL95k0ZBgC7WAM05NSawevRaUKsaGs8tfDzX9C+8w7o6nQsYzrS1wAAAABJRU5ErkJggg==",
            name: "Tiplicate Spell",
            description: "Casts copies of a projectile above and below you, but the copies still cost mana",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Tiplicate_Spell"
        },
        {
            id: "W_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAo0lEQVR4nKVTyw2DMAx9rjpBB0BiA1ZAbMAqPXJD6jrZoAojZINIXeT15KgNBWz67u9rGXAiDpFxiPTyClmhIlcrmYk/XQ8F8pQJANKJaAoA6J+9HMY91TU0gaEJZmKpMN9mAsD4GvejwVCjTpGnTN2ivsTXiHUKdWofrQDblyhkFbBU2BzYO+I5Fw8+B/xLmIlk4uoXLlYB6USW++I2XqGu8AaoAo4gYeWo7AAAAABJRU5ErkJggg==",
            name: "Wuplicate Spell",
            description: "Casts copies of a projectile in a trifurcated pattern, but the copies still cost mana",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Wuplicate_Spell"
        },
        {
            id: "QUAD_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAo0lEQVR4nM1TywnDMAx9lE6QTTKAQcRzeIDM4Jt97kYBHTJAs4FGUQ9FNP1EMT71gcGYZ70PNuCAIytHVo/jXjZ4Qy5d01uhm6/e5GC9r/0OylBUspyXeNS2ZPl5/sb/bNtUbc+RVbJoGYrqps+141/3k+lGIBDqVJHmBODVQZoT6lQRxgBaqC2CqbdG/oJZPyUewXJ7HPcdhDF0i//JX2hp+wHM5p6O1zw0JAAAAABJRU5ErkJggg==",
            name: "Quplicate Spell",
            description: "Casts copies of a projectile in a tetragonal pattern, but the copies still cost mana",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Quplicate_Spell"
        },
        {
            id: "PENTA_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR4nK2TvQ3CMBBGnxELZAGUFPSUlImyQdZJnZJVsgFyS5mewhELZISjcuQ4tjGIr7Lk9935fgwJ6VaLbrWkmKTZKhXk8FP0XMmUzr4qVqtMEjRv+E+1mt6Ib3b5o3tZ32oEEXVRCmA8jRtz6EXKRgVo7o1ys86PGYDyWgJQDdWOV6EabfbiXACwPBe6VxdlozK9Eb8HX5lD5yyFmhUb6So72xRoF2s37ty9D3H/+wu5X9fn3jo+tAxWmDfKAAAAAElFTkSuQmCC",
            name: "Peplicate Spell",
            description: "Casts 5 copies of a projectile in a pentagonal pattern, but the copies still cost mana",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Peplicate_Spell"
        },
        {
            id: "HEXA_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0ElEQVR4nNVTsQ2DMBC8j7IAGYAudfAGIGcCeqagdMdAniCRPQKR6FJYygI06T+FBSKYEJMu19i6P9v/935gBiMNG2k4lg9EA6biTzwA7FZv/AVGGuaWg1S59a9/LWMQx3CrcMrx0n6OPeDTBoDiWtA0qFPN3bMLDk31ZKTh/JL7yM0vlBHpVHNyTAAA/b1H+ShpLOPkdfZs37tgawvKiJxyLCox8qIScMoxZUS2tmEdS+465bg5NKxTzXMPoroRa+IitrQx+Ilrqf3RLGwZ5xeYg75p6oZRDQAAAABJRU5ErkJggg==",
            name: "Heplicate Spell",
            description: "Casts 6 copies of a projectile in a hexagonal pattern, but the copies still cost mana",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Heplicate_Spell"
        },
        {
            id: "SPREAD_REDUCE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAPUlEQVR4nGNgGBTg//9/////g7CZqGkqnMQJvh/2J6wIWSmmDeS4Cg2Q62kynUSCpzEBUcGKRzMNYppqAADp0y73/ZvW5QAAAABJRU5ErkJggg==",
            name: "Reduce spread",
            description: "Reduces the spread of a spell",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Reduce_Spread"
        },
        {
            id: "HEAVY_SPREAD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAUklEQVR4nGNgGCjw//////gFaGXT7t27d+HVgE8BQc3YFMLYRGsmSyPMn7t3795Fsk2kuAhmOMEYo8gl+AIQr8GE4pvsWMAFyEq5RGuiWb7ABgDCaWQPPRUilwAAAABJRU5ErkJggg==",
            name: "Heavy spread",
            description: "Gives a projectile a much lower cast delay, but no respect to your aim",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Heavy_Spread"
        },
        {
            id: "RECHARGE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAz0lEQVR4nLWSyxHDIAxE16nAITePW1BdasA1qSG14OEGdgfkBCPziSeZyR4R+5BWAP/SEULKOkJIPxlr9UBTbZ6dwxkjdu+hqgAAIsK6LMi15+s11aDy8hFCUtXEzFuuMfOmqsneaQC5zdo8glyKqlrIPXMNabroHg4kIiVUAHjcGUY6Y0QBqCrOGDE7h94ItjMiAgDs3l8vfcohh8fM23BUEbmsyUIsPG+qO5eF2JdscHebgoiket8WUI/QfkkDIiIQ0SQiTYjrsvS/9Ld6A2YjR18MRTfgAAAAAElFTkSuQmCC",
            name: "Reduce recharge time",
            description: "Reduces the time between spellcasts",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Reduce_Recharge_Time"
        },
        {
            id: "LIFETIME",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABYklEQVR4nK2TMWvCUBSFP8Wl4CBUirQdOmSw2MFB6aDdMnYoCP0LRXTo0KFD59JRiuLi4BYpCP4Ah0LiZAaHShwcHEKRaiGDkPF1sAl5hlBKe5b77uO8c8+93Ad/RGz3olQbC2dpksoU8OKoVfR5uuWKi9M9P4/vCizMTmSuW67Ipjfolit+tJartCXS9dOnAFitViKYh1rIVdoilSn4ubM0mfarkS1IKNXGQtM0oVuuODq/EbrlCk3TRKk29t14lT3Eg4/r5TkA2fRGiguzgyfycr8fCwnkKm3/saqqkqu7xisA9fI8NBeABEAqU+A4f+ZX9JC/fACg120AkDLeQm0nvIM9GWAHHBwcnvDxvqDXbWBPBt8sJVrgOH8lOXh+vAW2c8iqKrN1EqIcOEsTezKXHATFhsMhW54TEogDTPvVWNNQJPJubBqKtA+SAMCoVfRFZuukFJuGIv2HIH69if+OL0gno5JugeVrAAAAAElFTkSuQmCC",
            name: "Increase lifetime",
            description: "Increases the lifetime of a spell",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Increase_Lifetime"
        },
        {
            id: "LIFETIME_DOWN",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABU0lEQVR4nLWTMUgCYRiGHyXB7YIchJwKnGoSJbhNEJpFh8aWJhGnhmjMNURKmtoPpVkQbvsXzUkXnW840OW2A4evwe7nzrMoom/5eP/73vd/v5f/4I+V2D2YmDVRGw8zZRD0ohroOafakNzbk8bJXYGeu/gWH99c/cxap1SRMHaqDQFYrVYSxrEVOqWKmClDY7XxaI1HCQAZKlkX8mSmSxKXZozLxKzJzLJEhkquT89FhkpmliUTs6bdyFBFnCXD5HSzDsC6kI/0nrsgENm9ORnYDsjZcjni6vHuAYB0sx7LBeAAwEwZnBk5fWNQtxdbsdfnFwD8UDaxFeaeg2vb+sPJ4ZEmzz2HuefEyNoBEHNw324D2xyybJN//0pAbTzSngO2ozMIi7m2jfs5t3eF1niU8Lt9Pbyv+92+fg97MyiqgRbJTJeR7nf7kf8hXL96if9SH3K6n4uu2rv8AAAAAElFTkSuQmCC",
            name: "Reduce lifetime",
            description: "Reduces the lifetime of a spell",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Reduce_Lifetime"
        },
        {
            id: "NOLLA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArElEQVR4nK2TwRHDIAwEj1TjFpKfO3EJFMTD1ZCPe9p8REKwxDgzuRkegFikE0j/ELACtZsvQOGjAiwzQLXACmzAwVkHsF2BNFUg2+j3fIjd/D7s7O8hxGpuadcLkOPLk86wOnoyKbX0i03ZM3YA5BYsSTfXEEkppYekp6S7l8mYVvFu8zKJSuhN3GcQ10QL6ts4g5zbGECih+SWOkLCpxx1Z4RMP5NB1hDwi1590ND6cZMpMAAAAABJRU5ErkJggg==",
            name: "Nolla",
            description: "The duration of a projectile is set to zero",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Nolla"
        },
        {
            id: "SLOW_BUT_STEADY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKUlEQVR4nKWTMY6DMBBFX1ablgOYxrKoOEBOgChTpvcNOAAUkW9Bw0WiHCAHSGWNqDgAomeLlVEcwiq7+5uRNePnP2Mb/qndVsI5N4sIxhhCbJpmVf+xBRCRaH29Xv9m0Vo7/5TfbCFsNMYsjrque68F59xcliVVVSEiHI9HyrLEObdyswI45+Ysy8jzHIC+71FKAd9zeIZEAGtttFkphdYagLZt0VqTZVk0l89HgDGGw+FAkiQMw7A4OJ1OaK2p6xoA7z0vASLC7XYDoCgKANI0Zb/fU1XVknvUpoOg8/kMwDRNFEXBOI6/czBNE0opkiThcrmsHKxuIdBD8f1+j9be++iVRoCu63YiskDGcYyi9371H6IWgpqm2Vlr5wB6PvXVi3xLr/7FF5tLktg75xAeAAAAAElFTkSuQmCC",
            name: "Slow But Steady",
            description: "The reload time of the wand is set to exactly 1.5 seconds",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Slow_But_Steady"
        },
        {
            id: "EXPLOSION_REMOVE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABCElEQVR4nM1SMW7DMAy8EF4Koy/oTvgRKbJk9xuSAh3duS/QbI8Zkjd0z1I4Q34QIOha+AFGoSUQO7gUZEdOgGYJF1FH8UgeBdyNSZZJySxD3Na5x1qTSskskmUeI3Uq51AQISRpTSrhud48oSBC5ZwvkKjzdjxOwCwFEcAsy8V3r5PyL1Y5170dM22xZBZb52IbIyHWmlRsnYt2dcbUmlSGrar/+rkAvvY47bZ4fP+Z9AiUEQCS6RyrlwMKIq9PLLknYghesmQ6722GYo+0euWc385qtsFptwUAPDx//F9EoPsb4cjx5MZ0ijcmSnK1slawjRGd+SLJWMATDUhGNRjOFt6jc99qv1jf1H3+uiFYAAAAAElFTkSuQmCC",
            name: "Remove Explosion",
            description: "Makes a projectile no longer explode",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Remove_Explosion"
        },
        {
            id: "EXPLOSION_TINY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtUlEQVR4nGNgGAhwclLwf6IV9yboVp+cFPz//4tzKJpIMgQG0A0hC5BkyPfD/v8ZGBgYPrdzo2hCNoQJm0ZkDd8P+/9nsXGBG8bAwMBwalUrXC0LNgN4K78yMjAwMDCoWCAE75yAM4+cu1WD1QW9CbrV6M7HBooXXIY7AcUAGyO1Fqw67pxg4LTdyIjLQDhAD+Hvh/3/w8IDn4vwGkIWIMsQ9KT5/8W5/ycnBf9HDliSDaELAAAV4Fs0MhK7XQAAAABJRU5ErkJggg==",
            name: "Concentrated Explosion",
            description: "Limits the radius of a projectile's explosion heavily",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Concentrated_Explosion"
        },
        {
            id: "LASER_EMITTER_WIDER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeklEQVR4nGNgoCdoPfD/P7oYI7Ga//9HaGZkZCRaH4rNMEOwuYSBgYGBwajx6n+jxqvYJfFphGnGxiYEGGEaztVro/jLqPHq/2B7LZwa1x68xgDXg9dpBAATuRphgAXmHHRAkhdgGrCxSQIURSM+gC8h0Scpo7uEqgAAzIlV2ZRfiMoAAAAASUVORK5CYII=",
            name: "Plasma Beam Enhancer",
            description: "Makes plasma beam spell's beam wider",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Plasma_Beam_Enhancer"
        },
        {
            id: "MANA_REDUCE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAlElEQVR4nK1SUQqAIAwdkofwFp5JSKgDJRh0Jm/RIQzWx3BZmSX0fhxvb89tCvALlAnKhHfd4OPgY5055diedHxJoYYpkiIiIub2HHSXsqk/mBRHZyWTgg5nZWVKZUJeAyTlTu6gfkgmnlzfQcsp2ufdCh53XfST17ro8paclQAR0n7GeUtkCW0Px4mGr5Hj6+f7gh2Oz4snNWkVfAAAAABJRU5ErkJggg==",
            name: "Add mana",
            description: "Adds 30 mana to the wand",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Add_Mana"
        },
        {
            id: "BLOOD_MAGIC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEklEQVR4nNWRsUrDUBSGP4uji0MWQRBcChcs5AkCYh8g481iO3TzBQqBQiEv0K1DKkIDLpmdpFkcCxUy6iLIhVCFrC3cDmpIehvRTf/pnHPP///nngP/Hnu7imkQ6ONut8hfwhAA0e/v7DfIuVI6V0pfCK+Ic6V0GgQ6kVL/mPz2vDJEcqUqIo26sQHCwZ1h8j4e87hYmO4jIXQiZcVp2z2RUidS6o7jT794laV0HH96efQkAU6aTQ57PeBjiQfrNYP7FXYWc5WmBW+/LDCZDT0cHzuL5fXrKfbtOXPLBcDOYrDcCJBlToMtTGZD76zVAogelsuiPrfcqPT2PW7a7dpTjYSoP+Ovmj5hfAGgPPrfxwZgiKMmJl0ekQAAAABJRU5ErkJggg==",
            name: "Blood magic",
            description: "Reduces a spell's mana cost and recharge time greatly, at the costs of four health points",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Blood_Magic"
        },
        {
            id: "MONEY_MAGIC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0klEQVR4nM1Tuw3DIBQ8Itf2Fu7SOWm8hJsoyjpewN4CWTRegoaUdAzg1KZNQRo/hL+xnCYnIcHj3r3jAcAA19UOR+G62rn3y/0ssig8jL7N/X44Z98ErRI+lhRyxmdEJmJSSBZWIBiukT7Ofn5pLPMCfZs7wzWyqvQV4+ttJGCVGMWsEkgKySIipwF5mryFiNQM18g2Eg3Xvkh4hEUHU1glkFWlX6cA0EgAwCl0cAS7HKzZnzmgzoZ3T/apsXSVhNWH9LzHLiRPKy9i71/4r4/3AdMmlScweJLGAAAAAElFTkSuQmCC",
            name: "Gold to Power",
            description: "Spends 5% of your current gold and adds damage to a projectile proportional to the amount spent",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Gold_To_Power"
        },
        {
            id: "BLOOD_TO_POWER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2UlEQVR4nMVSsQ3DIBB8Iq+AhIcAKUVWSJnGJb3n8DIu07j0CiksQekBjMQQpDoEGNtNpHz1/N099w9E/w52Bq69DsiN89RN847fXImN89cO1l4HELtpZu/XM5REuzmSrYj58DGMiOiGW+zmSAlOECvBo1gJTrIVsabvMvKaklwTH2GxARwgjPM7Yoqn42QOlODZ0lA3zpO+y6wxGlYdHEXqCkusOriyDzFR8Qr4LOkYsI+mmD1r0E0zK4FxsXEfxnkaF1v9iVngbYeHCjgjj7MXZzoDT8m/ii+w94SWpTGZ1QAAAABJRU5ErkJggg==",
            name: "Blood to Power",
            description: "A projectile gains additional damage at the cost of 20% of your health",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Blood_To_Power"
        },
        {
            id: "DUPLICATE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAa0lEQVR4nGNgGFTgy73/cHBh9qv/ZGsmyxBkxRdmv4IbQpIrkAGxBjARY9iXewjvXJj96v+Xe0S4DNkFMC8h0wRtRFdIsmZkZxLtAmyaYeIEwwCXZkIAIxa4FREBSExCghtwZ+9rUiweRAAAHj/L0/XJ7JMAAAAASUVORK5CYII=",
            name: "Spell duplication",
            description: "Duplicates every spell cast before it",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Spell_Duplication"
        },
        {
            id: "QUANTUM_SPLIT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABC0lEQVR4nKWSzU3DQBCFv1lxSAHrUBGiCYsjTbiQiKurQEoHUEmYLYCTHwfvOOsQQwQjrTxa+828H5sk/lN30ZjZrx+fILbZPSCJdOumCrZ6dKr3Nw0IcHKXDocYJAALD65JiHcfZsuAkDB1nfaSpWuAqBia3KGRMHVd9GcTr5XPG61upwJJ7jZ13Tx8C1jZrHTtpcXEkJMASilyd8WzAYYm5ZwppajKWSokXDrYRgZgpRT6IQPoOGLTpyFp04OWgQH0Q9ZxnPuHJ3QcZXARoyTMDG9oBnWa7AHrh6zXF9Yxbv3OlToAb+95/VLSt/zj3t2X8/gstX3a6UcPVmzSbo60JwsgvFh58Nf6AnZwqPTgGGM3AAAAAElFTkSuQmCC",
            name: "Quantum Split",
            description: "Makes a projectile split into three projectiles whose existences are entangled",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Quantum_Split"
        },
        {
            id: "GRAVITY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAOElEQVR4nGNgGGjACGP8////P4oEIyMjpnISwH8ooMgQmEHD3BAmik2l1BX0dwHFAD2BDUEvoAMARvIn5CU4VusAAAAASUVORK5CYII=",
            name: "Gravity",
            description: "Increases the effect gravity has on a projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Gravity"
        },
        {
            id: "GRAVITY_ANTI",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAN0lEQVR4nGNgGHLgPxTA+EwD6RjyALLzGRjo7QV02+nrAmy2D3LN6CkOF2DEZRMjIyMjpvLBCAADOyfk1BFJQwAAAABJRU5ErkJggg==",
            name: "Anti-gravity",
            description: "Applies a lifting force to a projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Anti-Gravity"
        },
        {
            id: "SINEWAVE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJ0lEQVR4nGNgGAWDCPyHAmLFMRSRyobxmSh0OG4X4fIOTSwcBRQCABoYM88k3grkAAAAAElFTkSuQmCC",
            name: "Slithering path",
            description: "Makes a projectile move rapidly in a slithering manner, like a snake",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Slithering_Path"
        },
        {
            id: "CHAOTIC_ARC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAATklEQVR4nMWQSQ4AIAgDW/7/Z71oQgwBRKM9T4cF+JE2AgDyfHIJ0CuvEQ15cpIMJ3uScP0MmJJEUPmRVyVHp6SfacFbZatUEsxiuRylAx4EZ6GIhsrWAAAAAElFTkSuQmCC",
            name: "Chaotic path",
            description: "Causes a projectile to chaotically fly wherever it wishes",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Chaotic_Path"
        },
        {
            id: "PINGPONG_PATH",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAATUlEQVR4nGNgoBAwwhj/////T7QmRkZGwqrwAGTLmCgyiQHJC+gm49WEzQukhAEyGEReIAWMxgKaa0hxBSMjIyNMDcwbLOgKKHURyQAAdbQoBsO9ID0AAAAASUVORK5CYII=",
            name: "Ping-pong path",
            description: "Makes a projectile fly back and forth",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Ping-Pong_Path"
        },
        {
            id: "AVOIDING_ARC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAcElEQVR4nGNgIBFM9zb+7y8u/N9fXPg/AwMDAxOpBiADf3Hh/xQZQLQL/kMB2QbgAyzEKGJkZGTEJUe0FygyAB8gaMD/////U+wFsl1AyHYGBhyxAAs0QppRDEAOaWI0YhhAiiZkQJ+8gAtsfPmWEQBTCSUn4f9IVAAAAABJRU5ErkJggg==",
            name: "Avoiding arc",
            description: "Makes a projectile shy away from obstacles",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Avoiding_Arc"
        },
        {
            id: "FLOATING_ARC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAf0lEQVR4nGNgGAWMuCT+////H66IkRGnOoKasfFJ0kxInIkkp5Fq+3RvY6xe+Q8FKBLYNPuLC/9HNwRdPQsDA+mhjKweaxhM9zb+v+PMAwYGBgaGHWceYHgFxTBskjDNyMDDRAG7Af7iwsTHMRZAcTQybXz5lrRkigQ2vnzLCACn21Aot96OGQAAAABJRU5ErkJggg==",
            name: "Floating arc",
            description: "Makes a projectile float above the ground",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Floating_Arc"
        },
        {
            id: "FLY_DOWNWARDS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXklEQVR4nGNgoDWQSV78Hx+fKGA97fz/+qMf/1tPO0+aZpnkxf//////v/7oRzhNtCv+//8PV0S2C5BtgxlI0HZkm6kKiDKYZrbT3HCibKC9CwiB/1CALs40EI5BAQDoQlPlDTC58AAAAABJRU5ErkJggg==",
            name: "Fly downwards",
            description: "Causes a projectile to aim straight downwards a short time after casting",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Fly_Downwards"
        },
        {
            id: "FLY_UPWARDS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWklEQVR4nGNgoBf4DwXo4kx0cwFBgM15pMjTHhDlApo6k2jDqe4KmeTF/5ENhvFJcon1tPP/649+/G897TxprpNJXvz//////+uPfoTTJLmCYhdgs41k2wkBAJTCU+XAcVmPAAAAAElFTkSuQmCC",
            name: "Fly upwards",
            description: "Causes a projectile to aim straight upwards a short time after casting",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Fly_Upwards"
        },
        {
            id: "HORIZONTAL_ARC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAl0lEQVR4nGNgGAUYgC9+aQk5cgwMDAwMCtWn/hOyAF0NC4yRsfX7/5VbDzQwMDAwcHq3WrGKKFgxcwtxMzAwMPz9+u7r7zcPjn3fWn3s4/u3DRlbv/+f4c3JyICsWaTs1OqMrd//r7z+///K6/8xAEwcWS0DAwMDI7oL3k/zbMTnAsGs7fXh3g4NKC6gJAwwAEWxMArIAwD02G7eAnCXMwAAAABJRU5ErkJggg==",
            name: "Horizontal path",
            description: "Forces a projectile on a horizontal path, but increases its damage",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Horizontal_Path"
        },
        {
            id: "LINE_ARC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdElEQVR4nGNgGGjAiE+y9fT//wwMDAxVJgwMjIyMeNViAONp9//D2P////+PTy1ezSQbIJazFkMxPgNYGBgYGLj8Gv8zMDAw8MjpMLyaEkyaX4kB6C74DwUMDAwMTFS3jRgXIAOSXEBydCJrJFszRTYPDQAAwlM7WicIWzYAAAAASUVORK5CYII=",
            name: "Linear arc",
            description: "Makes a projectile fly only in cardinal or diagonal lines",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Linear_Arc"
        },
        {
            id: "ORBIT_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbUlEQVR4nGNgGLTg6LP//zM2v/5vMeHyf5jYfyjAq/H/////jz7DVPQfDcDEWdAVMTIyMpLiUiZiFSIbjNUSgn6j1AXIADlgyTLAQFkCU5AUL2CLJaINwamZWAOISkjYFOESx5lo0BWTmsDoBwB4Nl8cpS5YrwAAAABJRU5ErkJggg==",
            name: "Orbiting Arc",
            description: "A projectile orbits the point of its origin",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Orbiting_Arc"
        },
        {
            id: "SPIRALING_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAcElEQVR4nGNgGGjAiE/y/////1EUMzLiVY+iEV0zPnG8tpKkhhjN6GqZiFF89Nn//xmbX5Pn9KPPEOLIhmCox2YAsmaLCZf/41WPK9RJcS1WgK4YI22gS2BLLMia0OUZsZpKbIpjIDIaiQJEJVNaAABAYm9bC5CgpgAAAABJRU5ErkJggg==",
            name: "Spiral Arc",
            description: "A projectile flies in a spiralling pattern",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Spiral_Arc"
        },
        {
            id: "PHASING_ARC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAd0lEQVR4nL2QwRGAIAwE76hES6IAS7EaCrAUSzofmhl0gOE+5hUy3LIE+Lv0VJyTG/720wBJS2tuGQBYoyFJM3tb9Ex6gSKpjO50v1AHR5AmwNEcLXGPhuQ2C3xZuAvLkrL7UIpwDbIAlmbPAMAZA5KHTbEXVtUFT79KQ+fhS/wAAAAASUVORK5CYII=",
            name: "Phasing Arc",
            description: "Makes a projectile fly much slower, but teleport short distances over its flight",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Phasing_Arc"
        },
        {
            id: "TRUE_ORBIT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnklEQVR4nKWSsQ3CQAxF/0cMQU+NRMlIlIzCDozADCfRIEWiTnuKBDt8miQ6IvviE6/8tr/tOwN/QktMWbo9P+j6Acf9Dl0/AAAel4OZPyNJKUte/HR9uTHUCq1GIVEjlvajm46OwTJ/ExlzaUJyfsxtZJVSL4tNgymh1rXEXSFK1YAjqwYk6e0epsXAvUjv3ydSls7393ojGbScehNfHyqLo+5hIjMAAAAASUVORK5CYII=",
            name: "True Orbit",
            description: "Makes a projectile rotate around the caster like an orbiting planet",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/True_Orbit"
        },
        {
            id: "BOUNCE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAASklEQVR4nGNgGAUkg/9QAOMz4ZKgyAZSxIkyhCyXwTQR0syET5JiQIzTKXYBY3l5OUVRx3LmzBmKXECxF5j27t3LSK7mvXv3MgIAxdo1HJOkQw0AAAAASUVORK5CYII=",
            name: "Bounce",
            description: "Makes a projectile bounce on impact",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Bounce"
        },
        {
            id: "REMOVE_BOUNCE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAUElEQVR4nGNgoAX4Hxn5Bh+fJEPI0kyRzVRxAb4w+A8FmJpwSZCqDpckMYbjVEySZnRNhDQzkWwyOa6gqQsYy8vLSQ8gJMBy5swZilxAsRcARqtQJbamrkgAAAAASUVORK5CYII=",
            name: "Remove Bounce",
            description: "A normally bouncy projectile stops doing so",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Remove_Bounce"
        },
        {
            id: "HOMING",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnUlEQVR4nLVSwQ3CMAy867uD8OiTEdp92kk6UEeAZyUYhHePBzJE2EmJKiydEifx+eyYknDEmtLlfZp22RkpuA6DAKDtOjzWFQBwXhZWKbCAXGBWQSr7NM/89h2DJIdL30sSbuOo1I+QLcH6YKul+0mBwRR4bO/z8BdqrDgHZXtlblKnzsiEgKwj+rz7Rw9KjP4uIIjKsT3dJB4u4Ql9Zpxuw3F/UgAAAABJRU5ErkJggg==",
            name: "Homing",
            description: "Makes a projectile accelerate towards your foes",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Homing"
        },
        {
            id: "ANTI_HOMING",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEklEQVR4nK1SMWvCYBS817m7jh07OEmX6qp/oEunqqA/IA5CN3EQCg5CF5cODYVCKfgHHHRocGinIKSb69uydO45lBcT05pv6MHjy5H3Lpd7H0jCKvI8prlLCUl8NJsEgNNKBV+bDQDgYrEQOODEHmzAddAgkefRyPl0Kp/9foYXKpDEe6PBdAbGXSr5BcvBTmf8yxb+kgYkk0G7Xk6a/UAl5+BYtWolbnXFra64ju7ZqpVY4GDvol0vczR/ybzROMSsO96H+Dskt8ZO7wYah7gdTACgSCBv7/HhCc+vPu4mAxeBHwd+oDK8uobGIQCgenmWdKQEDr+W5X6gMuuOoXGI5fAt3XaY+PfRu2DpO26hGDuWKjxr9YoNfwAAAABJRU5ErkJggg==",
            name: "Anti Homing",
            description: "Makes a projectile accelerate away from your foes",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Anti_Homing"
        },
        {
            id: "HOMING_WAND",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApUlEQVR4nLVRwQ3DIAw8ou4QiQHyZTYmyAbZoQP0nQUyRebIm+uDOHUhQaAolozF4TNnGySh3XnLFCt5PHaL5EDn7QFWFxCyuBRpUjAtG8nAadmqFbyg7P0ZAKx7rDStAADGuWf6XvJOJ0vfeojpd6cKNEEruF5pYDZE5y2FPM592xaOS9MMogqTDrHVuhyqqfjLeUJBSUWOXxQw5p8gUXCVebeFL748RLoQNfOiAAAAAElFTkSuQmCC",
            name: "Wand Homing",
            description: "Makes a projectile accelerate towards wands",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Wand_Homing"
        },
        {
            id: "HOMING_SHORT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdUlEQVR4nO2Quw2AMBBDbeoMQnEtG2SgbJKF2CBtJBahxhSAQMqngZLXuLDvZBn4eQ0BQNoEkN1gwx4u+1CpdkgSSwiF93hwx2uh5L2e2nlQtlhCkDPDGCOdWdHk3KDWTgJIkkjey5lhzRnTPHe3atLa4OcDdtJwJZo0dM+QAAAAAElFTkSuQmCC",
            name: "Short-range Homing",
            description: "A projectile flies towards targets when near them",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Short-Range_Homing"
        },
        {
            id: "HOMING_ROTATE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApElEQVR4nKWSwQ3CMAxFvzkzCIceGaHdp52kA3UEOFaCQbh/TkZOYjut+JJlxZF/XpwISfyjS7b5Xpauu3gEz2kiAFyHAZ99BwDct01OEWhD1BgSWOzbukq9bhxINvEYR5LEa55p116EV9A5aA4VOVsCE6pfzX2F7DwAxRzSf+CoGaIasMqHpQYCB++MgZpYRTRFPZuBUtXNRT0z8K4kVe4SdPUFdM2PgSiSAoQAAAAASUVORK5CYII=",
            name: "Rotate towards foes",
            description: "Makes a projectile turn towards your foes",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Rotate_Towards_Foes"
        },
        {
            id: "HOMING_SHOOTER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAk0lEQVR4nGNgoBVoDFn6nxh1TLg0H729mShDsBrw8ut9hmuPzjK8/HqfPBeIcysy+FnEM4hzK5JuQJZny3+YIch8ogBMcW+tzX8YRhb///8fhmGM2AyCBd7Lr/cZpm2vwVDz//+//4yMTIwMDAwMLNgMIBR4MM0MDHjCABcf2RX4BcgFxBhENctItoFkm2EaaOpkAMiQWSNWFsAzAAAAAElFTkSuQmCC",
            name: "Boomerang",
            description: "Gives a projectile a path that curves towards you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Boomerang"
        },
        {
            id: "AUTOAIM",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAr0lEQVR4nLVSsQ3DMAwji079pEDWDtlzQmffkHySGzznhOwZekD6DbtEhhoEtougAgRLkEhRtikJZ+xSaiCZ/D0M8jkAXGumvLpO+/gxz6xSYGYAO82KCta+FwCsTaP7ONLnAAhJWfeyDWy5pPoVDOTvA8ZS8AQwBR7Lf/6DKuYcATO1LMFPOx39g8PJU9tqq+m5LKnHE1gDYowCwBBCim8beD/Ar8BCnBR8yT37jB/VG3sSAo6v3gAAAABJRU5ErkJggg==",
            name: "Auto-Aim",
            description: "Makes a projectile turns towards the nearest visible enemy",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Auto-Aim"
        },
        {
            id: "HOMING_ACCELERATING",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqElEQVR4nLVRwQ3CMAy865tBQOqzG9Duk07SDsEWeTAAPCuVERBv3j1ejqKKpokEJ1m2I9l3vgD/hqQQs3OKewBgzoJ71wkADnWN9zQBABrvSRJVrpLGe8bZsKtgdk5WH4eBj74P/Wkcd+chCbe2VeyB9QDyTzAfLJMJ8vP1pctTIb79Qob0RdISFmxh8wSy2jcoJT1+K1pisovZ10qKB1KsWa4Xs/4KH60pkGr1PxcuAAAAAElFTkSuQmCC",
            name: "Accelerative Homing",
            description: "A projectile homes towards enemies at an increasing pace",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Accelerative_Homing"
        },
        {
            id: "HOMING_CURSOR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxklEQVR4nK2SwQ2DMBAE9/KmkCD5STqAfuxKoB/TQfJEgkLyzuaB7BxgO1HEfs5nyau9OQNniCRIbs4kMVtL3ack4REAiAhI4tF1BIDKGDynCQDQeC8icjC45FI13ouuOR0SzNbGrNe+l8W52NfDkDbbM7i3LTWD0KeUHSFwCLWo07ZQUmoDQGGEnDRkZfA9QoAJIFZlEPLljRbnWBmDehikMiYm+ZkBsG4k/M7bOH6gaNLki9t+e79nUEhArqOFqh5lNvKX3uOfvfup5sEGAAAAAElFTkSuQmCC",
            name: "Aiming Arc",
            description: "A projectile rotates towards the direction you're aiming",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Aiming_Arc"
        },
        {
            id: "HOMING_AREA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxUlEQVR4nK2TQQ6CMBBFX1l7EBcGNx4BLoI72cBJWOEOL8IRdKMhwYO4/26YBGtRSPhJ02k7/89PO4WZkIQk+qKQxZJwU4TmrtriLCa/pakANrsdr64D4NC23/zmrnpMturXJNHYga2dTz7uXe6L9kUhi7dV5Z5lKT8Hv+pcB9EUKQS7B5tnVTcH/isEBfwTDQiJGicCyGJOAM45NyH0McaIAC4PzuNNExrmyV4JWlqau+gVVnHxNyfUyr/2Z30mgFCLr4I3zH6uY584tfgAAAAASUVORK5CYII=",
            name: "Projectile Area Teleport",
            description: "If a valid target appears somewhere in the proximity of a projectile, the projectile will teleport right on top of the target",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Projectile_Area_Teleport"
        },
        {
            id: "PIERCING_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAgUlEQVR4nGNgoAb4/////xFsCCMuifsvDvxnYGBgePH+EoOlZh5OdUz4NDMwMDBICOoxHL8+CaersBoAAwkpsQwv3l9iqCjtxqcMuwtgOLfJ+D/JLlCUcGB88f4SAwMDA4ORpQJptiMDmM34XEASoGo6ociw/1DAwEAgGvG5gGoAALmEVR6d5Le7AAAAAElFTkSuQmCC",
            name: "Piercing shot",
            description: "Makes a projectile fly through enemies, but harmful to the caster",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Piercing_Shot"
        },
        {
            id: "CLIPPING_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWklEQVR4nGNkwAOmexv/33HmAU75jS/fMjLhM4AQ8BcX/k+RAQwMDAyjBpBpwIYXbxg2vHiDMOD/////sdEZW87ANSDTyIARn02EEhLcBZSAUQMoNGDjy7eMADXKJ4OdKDduAAAAAElFTkSuQmCC",
            name: "Drilling shot",
            description: "Gives a projectile the power to go through the ground",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Drilling_Shot"
        },
        {
            id: "DAMAGE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAd0lEQVR4nGNgoDq4Gxl5NzISzmUiVT8jfrPRRJSXLyfZBsIAux8m2JhPsDHHykADLMicAAU5NAYDA4Py8uVYNBx48hyNgQuwQGxHFsKvh+RQQvgBbrCDjCQeS1A87SAjSVAPNKaxhiADA0PBkZNoIky4JHAJkgwALKEqmtSVVqcAAAAASUVORK5CYII=",
            name: "Damage Plus",
            description: "Increases the damage done by a projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Damage_Plus"
        },
        {
            id: "DAMAGE_RANDOM",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAUlEQVR4nGNgoBAwEquwftmJDQwMDAwMSm8ZGi28A0iypav+xIb/SKD+RNsGojUfgGreeaJ+w3QoRjaEiZABHAzX4OxMi0a407UZfhLvhZ0n6uFOrj8xZ8P/////n9iHEGNgYGBgmGBj/n+Cjfl/fOz6fScwNGN4IUBB7j82dv2+ExsaHM39T85veGHhhPAKC4xx4MlzBmxsODjHYM7gyMDA8JDhJLIwC8yZ6OrRDWkssZBU/3xiQ1QjwnasXsAFltWf2BDZYO5/on7eBgwXYLPVQUYShR/VaBHAwHBiQ1RjEooLUAyAacRvCCqA5wVs4YAMCo6cxJpvmAgpICRHMQAAszGKf7M0LtwAAAAASUVORK5CYII=",
            name: "Random damage",
            description: "Randomly increases or lowers the damage done by projectiles",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Random_Damage"
        },
        {
            id: "BLOODLUST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTklEQVR4nK2TsWrCUBSGvysSaHHo4iIimUKbLnfQrWMfQMgj+AwZO3XsA/gUTl07WpcouBhDB+lQCqWLQ0wgSzroSW9i0qk/hPy557//PefkXPhP5O5dLg9AoHUoXNYDrcPGzea3KazGpq77KLwtZGnFW4DX+6N49DJXwtWJR0nKZLFSQ8vygAeAVmGQZTPhUZIyHvTzKEkBGA/6OcD15QUAw6xzU8og0DocrdcuwOzzu0h1s4/Z7OOGjhkG4igpH9GlaliHlll/FVGSsosPBReY+jaU6zdP3cUHfMfm6e29ZGzqWwCnrpZO8XpdfMcGwHdsnj++CmPR/xqcejBZrFSUpHi97lk5vmNze9XB1Jd6IMMiJnX9mCxW6iwAx8kyR/gvmOMNxiSqcK6qwaUVb5dZNhtalleknTX/tWLGA61D8y4Il7d5FxpRJ6pb+wGL77XnVdGirgAAAABJRU5ErkJggg==",
            name: "Bloodlust",
            description: "A projectile gains a hefty damage boost, but is also able to hurt you",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Bloodlust"
        },
        {
            id: "DAMAGE_FOREVER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVR4nKWRMWrDQBBFn4zuYFhV7kzuYBnWGNyodK/SJzDJDYIaXcFtSLmNwWTBSukDqHS1CznFptEGkV1FMvnVZ2b+zJ+ZhAhMUaw8z5T6HIsHYte2zrWtu9W18yJTFKtbXTuf8/H0t1hUVWOPxzNwErCwUjYGcitlI7R+sVrfgVJUVWMgT0MPAJwypd4ADKw78TlT6rUbBLALHPRQdkULK+VOaJ13Tp6BO1AO6B6/QeKF79u1A9hfrskQj30hWOHwtHQx3hf18dPgw3wR42NI+/b7mNpkNnnUXw5iUzfZfJKL4IibbP5Qk+CNQ9hfrkksPhsrGMv9G98gXZsGUdV17gAAAABJRU5ErkJggg==",
            name: "Mana To Damage",
            description: "If the wand has more than 50 mana, all mana over that is converted into additional damage",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Mana_To_Damage"
        },
        {
            id: "CRITICAL_HIT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2ElEQVR4nGNgGLTg4sWL/y9evPifkDpGfJKLFy/+z8DAwPD06VOG44cPMijLSjP0zZiDoocJnwGxsbGMMM0MDAwMYgoqKC4k6AIGBgYGf2/P/wwMDAyWtvYMQd++MTAwMDCcVFVlML99m0GtqYkRrwuKMlLgmqWlpTE04/VCUUbK/7uPnzJs3LqdsaKighFZ8+mTJ+HqsBpwYkM7XDOyuJ6eHopmnDbD/A0DFy9e/H+rru7/Unf3/wwMDAwwGqvN6JqRAU6NuGwm2oCijJT/sBCnKcDrhQEDAKAmZoLP5Pb0AAAAAElFTkSuQmCC",
            name: "Critical Plus",
            description: "Gives a projectile +15% chance of a critical hit",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Critical_Plus"
        },
        {
            id: "AREA_DAMAGE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiklEQVR4nO2RsQ2EMAxF348YgU3SsAKiR9QMRh3Rn1iBhk3YwVcgnyDHSaBr+U1sy996seGRrjStg9k+L3t9fMUV8zwtXV7zIeGuGWCels6pAoDZETHPAZoxpmaMKa8HAGnDcaMkeXxm2uuwAx/k8TqYvdrtC/6eEvxS2UtV/U1Q1TH5Ev8+4yN4A39KP5cOaCgvAAAAAElFTkSuQmCC",
            name: "Damage field",
            description: "Gives a projectile an energy field that constantly deals 3.5 damage to nearby creatures",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Damage_Field"
        },
        {
            id: "SPELLS_TO_POWER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVR4nGNgIAH8t3H5T5HClSLSJ4g2DFkxDEyVVSrAJ48BkDUg89HFSTKEZAPQNZKleaqsUsF/G5f//1Mm//+fMvk/VkOuCkr+hym+Kij5/7+Ny///Ni7/UTTDAJIhTAwMkBDVfv+ccaqsUoHDl+/92u+fM167epWBgYGBIUteqR+f6xgJOd3hy/d+LW1tiICGP4S+sZGB8cgeRoIGoBsGY2c/vjeBWH2URSOyQlxsnAA9qaJrwpuU0TMKNsVE50xCigF6e2vhS81WqwAAAABJRU5ErkJggg==",
            name: "Spells to Power",
            description: "Converts any nearby projectiles cast by you into extra damage",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Spells_To_Power"
        },
        {
            id: "ESSENCE_TO_POWER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABu0lEQVR4nI1TPUhCURT+jEc2ODQEBVYPIggy6pJYmwZKQ0RGaw1BEDVcHYREhwaHBKHBd4cmgyA3h4x6Q/TACt5SRgQFQgRBQS3SagS36TyeL/v54HEu73znO+dcvuuCA/rJmaTzzHTI5cw7oTiLU5k8IsEATs8voZ+cSaeIs0GTgFExkd2MI5XJI7sZh1Exm7qpTHCjYuL0/BKRYAAqE7zNTijpnhiJGBUTRX2i7By5qE+UI8FAyxwAIJHOSpUJTrEVp4cZBy2LW8EuojLB6fu3ABXOiYYs1KUs1KX0rV3Ib6SB2VoVAHyhY+5feqlOJu/knGhIlQk+mbyThbq0UKhLa7022unxaMjvCx3zjj62XN33+j9fOq/fnh8wtrKqdfcO/jjdr0ZRmeBdIwvLivd9vLt3ENHFdgBAufiBQ+52AQ4jqUzwBobDbtwbTzdcAEB13+unXO2qXwOA2l7Uauyi5E5uVKOf6xu3sQaGw6834Xm78G5OiRKHHGoZKZXJW5GmsE+3m1Oidg5Z2hKIBANNkVYg/GRzhcglCACmVtI9MTfumy6T8uEpaNRgeyv150v9hkQ6K+0RAL4A/dPRqz6VUtwAAAAASUVORK5CYII=",
            name: "Essence to Power",
            description: "Increases a projectile's damage based on the number of creatures nearby",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Essence_To_Power"
        },
        {
            id: "ZERO_DAMAGE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5ElEQVR4nK2TQQ6CMBBFP0Y23MDENCUeQgws5Abdcg43HIGNiUfxCGyMvUQDISTcoJsuxo01IEUxOKvp5M/r77QF/hEqy0hwRnP1gjNSWUajwhzIpHYO5KtGcEYyTemS7AkALsl+kMs0HTWv+otr3XjSaER+gL5QcEaRH0AajWvdeP2e9buLsu1QAsjDHYpKAc9cGu10PQBYuwAgjUYe7gAARaVw3G6cgJWz+kM4AWXbIfIDFJUaOJkNsGe2tu1gy7b7DLA7uwYmjcb5EGPyGgVndD7Er8m74nS/OSHLn/Liz7QkHg2/iEbtwWA0AAAAAElFTkSuQmCC",
            name: "Null shot",
            description: "Increases a projectile's duration dramatically but removes all damage & explosion from it",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Null_Shot"
        },
        {
            id: "HEAVY_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAeElEQVR4nGNgoAW4WVZGmoYPJ0/C9TDiMVU8OBhZ5OXatepdXSTbQBTAonqOi+YcF02sDDTAhMzxUhBGY2ACFgi17s4rNAY+DWhW49fDhEcOn5OQDQ5SEcNjCQsyJ0hFjKAeaExjDUEGBoaUPdfRRJhwSeASJBkAACZvMbRjCr/QAAAAAElFTkSuQmCC",
            name: "Heavy Shot",
            description: "Greatly increases the damage done by a projectile, at the cost of its speed",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Heavy_Shot"
        },
        {
            id: "LIGHT_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhElEQVR4nGNgoBfInn3zPzJNMph9/P9/sgzJnn3z/+zj/+GYbJdQpBlZE07NmjFz/mvGzPmPj40NMKEL8OsE/MfGxgVYYIxnF7YwYGMTZQA2JxJrCIYXSAUsyBxkW6UMfIhyBQu6gJSBD0mGMMIY+KKKgYGB4fqSFEZs4kyEFBCSoxgAACBEWnTZTZzeAAAAAElFTkSuQmCC",
            name: "Light shot",
            description: "Makes a projectile move considerably faster, but deal less damage",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Light_Shot"
        },
        {
            id: "KNOCKBACK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAArElEQVR4nK2QsQ3DMAwEn4YAI4Xq9O4yh72NoGmCbOERvIdmUJ1CjQGlYMAwNAOk8FeU9CTvBZyu3rs+Dv+YtMh1E5Fp4xtng3aLSTc7G1wwIvoa0UpqJblukyewe5xmAK3gcnv8AuPaZnjerzriMRsJkrzt2xpzbSXxNrMniI+pAGBBKxinmQnNdwXB0Nq3Fcs7j8EbAMRcTUPMVXiMgh75qQGdwUoSH9lO0AuxzmFW+esolwAAAABJRU5ErkJggg==",
            name: "Knockback",
            description: "Gives a projectile the power to knock back the foes it hits",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Knockback"
        },
        {
            id: "RECOIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAYElEQVR4nKWPsRHAMAgDjZfIkIyTPbwOg6Tg3FgpKHxJCiPnCypeglL+AGC5U9nQKUT8sqTmj5kCABF5VaUAkDzskR3TTYme7OqX6zx2NDclTOKZILLddPRGaKM3TtjnBj1NOZLTRzo9AAAAAElFTkSuQmCC",
            name: "Recoil",
            description: "Increases the recoil when casting spells",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Recoil"
        },
        {
            id: "RECOIL_DAMPER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlklEQVR4nGNgGFTg82Rxexj7+/n4+WQbQIpmJmTNvLkvDyJL/v///z9JNqPbTrQBuDT//////5HNc4kzBJtmGFjWXUzYEJgBMGffP7+TdEPQwf/////fP7/zP7LB6DHEhE0jMlA0dGe8f37nf0ZGRkaSXQADMFdgSx8EXQBzBTIfOdpZiDEAZjOn4cJEYtTjBci2UwUAAPU5dmgu81MIAAAAAElFTkSuQmCC",
            name: "Recoil Damper",
            description: "Reduces the recoil when casting spells",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Recoil_Damper"
        },
        {
            id: "SPEED",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAP0lEQVR4nGNgGKygZ/9PIgWh4P///5jSWAURcpjSWAVR5NCksQqiyyFLYxVkwukt/IBMJ5HmadKCleSIG0wAAADViGvFLudeAAAAAElFTkSuQmCC",
            name: "Speed Up",
            description: "Increases the speed at which a projectile flies through the air",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Speed_Up"
        },
        {
            id: "ACCELERATING_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAX0lEQVR4nOXRsQnAIBBGYcnKVtnBMSwcIotZvTQRjt+IyjWBvFLODzxD+E+lJnaGLz0DGCKlplOGsyI8vSJAtAiQFcHUIUC0SAMsgtSQY7qQldxPcC9R2/7GlVyXv90NMHasVaVW8tEAAAAASUVORK5CYII=",
            name: "Accelerating shot",
            description: "Causes a projectile to accelerate as it flies",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Accelerating_Shot"
        },
        {
            id: "DECELERATING_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYklEQVR4nGNgGLngVaDVd2IVnsCm+f////+xKZ6Mrvn///9LsGnGMOBVoNXk////F6NrRjYAWTOKATDNMAOQNcMMQNcMM4CJqIAgBlDkBWRD0PjEByIelxEfjaQAohPS4AcApRKdy14xpqIAAAAASUVORK5CYII=",
            name: "Decelerating shot",
            description: "Makes a projectile decelerate as it flies",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Decelerating_Shot"
        },
        {
            id: "EXPLOSIVE_PROJECTILE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5klEQVR4nGNkwAOmexv/33HmAU75jS/fMjLhM4AQ8BcX/k+RAQwMDAwoBnxu5/5PkQG8lV8ZYezvh/3/MzAwMHiYKDAwMDAwLCn4gdUARqyiSIZw2m5knO5t/J+BgYEBW4Cy4NOI7BIGBgYGhg5MQ/C74Hk7QvOdE3DmnyN7GGImcCBc8P////+MjIyMyPSPIwFYDV3Q8YRhxxkOOJ+JgYGBgZGRkREbjWz7go4nDAs6njAkVMgQ5wVkv8M0RoQcwVCHNSF9bueGByLEyQ8YIkKOYI1KvIFIKC/gdAEpYGAN2PjyLSMAlfhfaC5oxj0AAAAASUVORK5CYII=",
            name: "Explosive projectile",
            description: "Makes a projectile more destructive to the environment",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Explosive_Projectile"
        },
        {
            id: "CLUSTERMOD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJ0lEQVR4nI1ToW7DMBB9jkymKGhgZCAgf7CAgIwFRBooGRjcZyyoqVTJ/YPRgv1AWUHZAgL6CQEFJQNDVjQyyQOL3di5WH3Eln3vfO/8joGAFOESAKKqX+mz96cHtT+erLjd1zfjFJnnRY0kg8TaSuJicXerAvImyYCuneNZMBWMy5ZYw5XgTTCQa54XkOJgEaUIVVT1DADKNIbbByOB5wV+m8PkBU1+fbvH/nhCmcYo09jcM0oCVerP50Lp/XZzNpUwKpgkJ9nloGvx8txcJCillG/1IQAAxhjzrRa6FtvN2U5AQYrQfr1rDXn8E8EQvNRN1ETdfSlCdfO4YwAmZADghAfcn6nnyMBgJMoD7kx8NLRUHlX9Sop/8sQDV8yE1wdjc82N8x9P754g54uGbQAAAABJRU5ErkJggg==",
            name: "Clusterbolt",
            description: "Makes a projectile release a cluster of explosive bolts upon hitting a wall",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Clusterbolt"
        },
        {
            id: "WATER_TO_POISON",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuklEQVR4nGNgQAIySYv+M5AImJA5ogqapOpHNUBLXpR8AwybTv9HpslyATmuYILZCtNopydPkitQXGCnJw93xf///7Eakm6yFrvhhk2n/0cvfPA/euEDuAKYIR8etsHF2t0fkBbV////////2wG4pg2RqAZgBCIy+PCw7T/D94MMDJz2KLYju4IFnwEC8lWM2MQ1hYh0ATJod3/wH6ZRXlMK7gqiDYABeU0pFFdgdSIxrghYrkCSXtoBABohSE1ed+KFAAAAAElFTkSuQmCC",
            name: "Water to poison",
            description: "Makes any water within a projectile's range turns into poison",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Water_To_Poison"
        },
        {
            id: "BLOOD_TO_ACID",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVR4nGNgQALlQkL/GUgETMgcUw4OUvWjGqClqkq+AWukpP4j02S5gBxXMMFshWlUCgsjyRUoLlAKC4O74v///1gNse3Twm74Gimp/9fs7f9fs7eHK4AZ8uFhG1wsdZ8+aVH9//////+/HYBrmvQgEsUAjEBEBh8etv1n+H6QgYHTHsV2ZFew4DNAQL6KEZu4rpIWAwPDRcIuQAap+/T/QzQyMNjLJMFdQbQBMGAvk4TkCgYGrE4kxhV5CstJ0ks7AADHG0RrtpN/2wAAAABJRU5ErkJggg==",
            name: "Blood to acid",
            description: "Makes any blood within a projectile's range turns into acid",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Blood_To_Acid"
        },
        {
            id: "LAVA_TO_BLOOD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0klEQVR4nLWRsQrCMBRFr8HFRaQ4SBYhEJAM/kI3Qdo5/9FJ8AP6Nf0C6WBnNwf3UujcSaf6nJqmGLQRvFseueedEMDKZT8neIbZh9Vm6dsfAnikfgdUiSC23aFKhNczDKDb7mvB7O0A4GthDJ7XkxnySIGInJBDELjhVSKozWNq89hc6CBNmZpZxrnfVxMR0f1sSrcwHADYe6VPU6aERwHMwsF222L6CbBYHyeuuZISqOvvBnYyzklJCQAQWhuL0YAuQuveAoBTcYyFKgqv7v/yAmvTShDfOIZuAAAAAElFTkSuQmCC",
            name: "Lava to blood",
            description: "Makes any lava within a projectile's range turn into blood",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Lava_To_Blood"
        },
        {
            id: "LIQUID_TO_EXPLOSION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVR4nGNgQALKxln/GUgETMgccRldUvWjGiCraEC+AVb+0/8j02S5gBxXMMFshWnU09fDcMXndm6crkJxgZ6+HtwV////h2virfzKSNApVv7T/4cXHP8fXnAcrhFmyIeHbUS7CAP8//////9vB+Aa0DXjddqHh23/+UWtGBg47RkYGRkZvx/2h2vmtN3ISNAAZPD9eTvC5jsn4EwWXBo+t3P/Z7FxwWsop+1GRqJc8P2w/38GFQu47TDnI3sJxWZsBsAwTo24AMxAdE0kRSU+AAAE32GAu/RfsAAAAABJRU5ErkJggg==",
            name: "Liquid Detonation",
            description: "Converts nearby nonmagical liquids into explosive gunpowder",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Liquid_Detonation"
        },
        {
            id: "TOXIC_TO_ACID",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxklEQVR4nGNgQAKpfVr/GUgETMgcLQNWUvWjGmCgpEW+Af379P8j02S5gBxXMMFshWnUkkkiyRWogSiTRJYrGGCu2P8g8v/+B5H/GRgYGP7//4/VFUblSsSHEcyQDw/b4JrCl2qgGIARiMiAkZGR8f/////5Ra3gYpqy6ihq8Brw4WHbf4bvBxkYOO1RbEd2BQs+AwTkqxixiUNccYOwC5BB+FKN/zDni4qqwF1BtAEwICqqguQKBgasTiTGFQ12G0nSixMAAJL7QXcgZBGsAAAAAElFTkSuQmCC",
            name: "Toxic sludge to acid",
            description: "Makes any toxic sludge within a projectile's range turn into acid",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Toxic_Sludge_To_Acid"
        },
        {
            id: "STATIC_TO_SAND",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAp0lEQVR4nGNgoAb4//9/339U0EeqAf/x8fEBJpJsooUBLFC6H83Z/ZQaTDkgJSAJGvLhYRv5hv3//////28HyDPgw8O2//+/HfiP7J3ZXenku2Z2V/r/mgz//8gGseDXggBbl7X/V1ATZGBgOM/AwMDAkFo2k5GBgciEBNN8bN95BikZBQaYK4gyIMnX/v+zJw8Yju07z/Dw3gsGBTVBBks7CxRDKAIAmSViXIpfmJEAAAAASUVORK5CYII=",
            name: "Ground to sand",
            description: "Makes any hard, solid materials within a projectile's range turn into sand",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Ground_To_Sand"
        },
        {
            id: "TRANSMUTATION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAATElEQVR4nGNgoBa4vOU/HJClGR+faPD/////ZGumyGZcrqFYE4z/4WEb+S77///////fDpBnwIeHbf//fztAXtRiA6NphUqAajECAwDCHWEX6uB62QAAAABJRU5ErkJggg==",
            name: "Chaotic transmutation",
            description: "Transmutes various liquids and powdery substances within a projectile's range into something else",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Chaotic_Transmutation"
        },
        {
            id: "RANDOM_EXPLOSION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/ElEQVR4nKWSPW7CQBCFn6joOQRFDgDH4AgmXU4xokmRC9AEStfbpHBjUVAMDZKFlNJSaCh8AlcvBTubzWLzkzzJ0ni83+fR7gI+UqrDXyOlOpI0ieTqJFcn+tEpVVlf9g1+k7PMIvrqUpgkOyUbDxcqbumfPonVg/jDEJ+hfpkuZlY/of31o+nieYa+FCrBLvp+Hrf86d0d29j/wWs53Vo7AIBckjuwxwQA8IXdcTVmCjVVxtDP/c6nkvi9qTIe5iNewF2LY6kd13E1ZlNlZFsH2IS9UdkG+DAfkW1NtjWbKrsOxsdoSSfolRT+5qUSA7o29K4J4kluCh7NN1SU5nzpERjpAAAAAElFTkSuQmCC",
            name: "Chaos magic",
            description: "Makes a projectile launch a random spell (out of a limited selection) when it hits something",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Chaos_Magic"
        },
        {
            id: "NECROMANCY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVR4nM2S0QkAIQiG7WgGFwnaIWjcoB2EFnGJuyfDzO5e74cgyF8/NYBfqrd2M/Nyemu3FxusMeX8mnwQQal1+uaFmd0KnhBx+i77IEdXHERLAt1O1IEWFQAWXI9yIbAB2nzSTFBqDYMIZOongyXdJCsUIr1Gb53RmmWNHoUe7tbCF2bKGU6faWtB4+uWPLkEQoGIQYb7Xz2fBYVM4x/0igAAAABJRU5ErkJggg==",
            name: "Necromancy",
            description: "Makes corpses of creatures killed by a projectile rise to your aid",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Necromancy"
        },
        {
            id: "LIGHT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAs0lEQVR4nJWSsQ3DIBBFf7CLVCziDVDEBDTOGp7Ha5CGCSzLG7AIlRukFOecMcRI/Oo43kcHH6BRj7I1Gc317JaaYTL6PXQAlJEANhcAWB9TW5/RhJJ+dQA0e/qSfr4+7NnXURmZegRt/KV5qYykUQ8D3zKjsyZh4jrurRgQda7UYaAXrIgBgSSdfR1LlJuXV7I+0hmZh5abC9ZH6pxJl8HxMGnYZ9KzWwANBFS/RvPna9YX+YpVlS9kuLgAAAAASUVORK5CYII=",
            name: "Light",
            description: "Makes a projectile illuminate its surroundings",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Light"
        },
        {
            id: "EXPLOSION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAeElEQVR4nGNgGADwuZ2bOupwKvh+2B9TEbIgTj1YjWTCZfz3w/4sNi6YBjNit+F5O5R15wSE/nNkD2/lVwYGBhZk57LYuGDVz2m7kYAHvj9v//68Hdl5KCrQPPf9sD8EYVGKCSCasYYstQEux6DHAxz8ObKHOjYDAHKZPYN9uCtQAAAAAElFTkSuQmCC",
            name: "Explosion",
            description: "A powerful explosion",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Explosion"
        },
        {
            id: "EXPLOSION_LIGHT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3klEQVR4nM1SsQ2DMBA8RzQWygDpM0QK3NEzD30kr5EV3NOZgiHoGQAhN0if6q23MRLpco39tu/+7gH4ewTfEe9XW1N+f5OFfLDamrjm9d5vCgDCYqkowA9KnfgsLJb0o1dFgRxV0wLPV9yHxdL+eSP4Lro7CPBF1bSnQvs4RLcqJyaEeYpEAMA8JeTEgTyMYPI8JW7klzmfgSCxm30cAADauPIQ7/2mYnaOIFA1LbRx6nSIwXekjVNsnTvmkbRx6hBZDlF2CIslzhx8R/InuoQoJAZ3iVCqc5c/OTnDF/whhsK7Cjy4AAAAAElFTkSuQmCC",
            name: "Magical Explosion",
            description: "A large explosion that doesn't damage the ground",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Magical_Explosion"
        },
        {
            id: "FIRE_BLAST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAApklEQVR4nJ1Suw3DIBB9hjJDeBZXiCncZq00WQFRZRYPEckNcopnvRxnV1x1J97nHgCM1XedB5lOxQqxn+wcUwbQanm8NjcKFhz6WOaYssbrwichptxqATB9No7Hcp/qJBDNEpRNTNmu1GXgsaB0kxxpQQTJOAdr3hEUVMLKc0PQPbhl3D6dAy/KyV9DBwVotci91UJhG+D/GursX2C/v58Yq/Hf+QOkcmWPrQfcCQAAAABJRU5ErkJggg==",
            name: "Explosion of brimstone",
            description: "A fiery explosion",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Explosion_of_Brimstone"
        },
        {
            id: "POISON_BLAST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA0ElEQVR4nJ1SMQrCQBCcBJ9xYBswZRpLQYiln0iRysIyhaTIG1LkE5YGBEubKxPIA/IQi4HJudiYLY7buZnbnb0D1kW1u61UhtHmXZt3Si/bK4AoLHI8nwBMfij7QimAQ7MXLRbbOTf5AUCSpUzDUlagY2qYcs9VEalCKDNR9oUV4HtQ7P55f/CWJEtlIxapGWvTnnOObACv6k1wE1YwTuZ5NsgPD7xP45r8QJlsLC2pb5IoS7I0ZC+CZqxlkWyuBO1U+OaEhHIfPtl/sf53fgA6l2OVm6lagAAAAABJRU5ErkJggg==",
            name: "Explosion of poison",
            description: "An alchemical explosion",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Explosion_of_Poison"
        },
        {
            id: "ALCOHOL_BLAST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGklEQVR4nK1TLW/DMBB9meo/ESmqXGkk2AGTikIKGp7RKGigLGODYxsbCApveAtKQgtaEFQyNdVUaX+i4IZ8sp1opHmS5buT3/M9fwBjoUh8Gk3MxXo1pfVqam0wuGGR+HQu50RtxoQi8YnajKjN6FzOe6QHk6ykwOF0BQBEYcC1bv8NAJg9PcLtZKIDJQUX66pBFAZc06J6NuG5nkyhITx//XhmzhY+N78eABwvNx5pHiPNY84BgNqMBgVMEd2J9q6kgJICURj0RKx29KG5OF5ulsDhdGUr1i3oOAoDpHnMAh/vCwBAue0scs/Cy3LGC+uqYd911SDNYygp/j/EctuxZ03W8+vbzrJlvUQzKRKfhnL3Ad2FUT/eH1TwkHJrRADwAAAAAElFTkSuQmCC",
            name: "Explosion of spirits",
            description: "An inebriating explosion",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Explosion_of_Spirits"
        },
        {
            id: "THUNDER_BLAST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAwklEQVR4nJ1SWw7DMAgzO1GkcKPmY71TeqJRiQNNYh9sNI92k8ZXYgw2JMAfcX88T5EZf4eZAcg5D4h9ws9d/dzMeZ6KMwCKNBHlnEspAESk1kpEs51by04piQiAWmspZVmW4IXhQ8F7e6hqXNd1bRUOUTNj5pSSX5nZvQHYtq2z1DJUVVUdcfawg0PBJxYRZhYRdzX46Qq8Jiz56L6Mfd9HS74EbxyWiMjMwlj7GuPrtJpfst2POE1d1uD6R/6CpngBct6ZgLNABqIAAAAASUVORK5CYII=",
            name: "Explosion of thunder",
            description: "An electric explosion",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Explosion_of_Thunder"
        },
        {
            id: "BERSERK_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA50lEQVR4nKWTIQ7DMAxFX6cqaNJA0dQLFPVeI0UFPUJBUcjuFZQLVEMBlYaqgZGlS9xkA/0ksmN/fzsOHESRu3g+HvfQPl+vt1RcmUs005j0S6JCBplpXAEVuCO77YeI5CSTL03VfZIApI2Zxqi9jeADtVinfdKlqbrFOi0URSiC6qF/FXEq18puiIFsAEprcNS6Yu4c9U6NbGGTvVinS2t4NS0Vcwf4c/1FoIKelaPWXgFASsH2jKk5+MohHLVu+0H5p5QKIjWi8m8FGRXwnf4KKLlIu7+QW+W2H4A/q5wi8sh9psN4A8t7fPNPR0XfAAAAAElFTkSuQmCC",
            name: "Circle of fervour",
            description: "A field of berserk magic",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Fervour"
        },
        {
            id: "POLYMORPH_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFUlEQVR4nGNgoBAw4pL4+OT3dGQ+vwxrJlEGwDTeO/seRVzJWBCrQSgGfHzyezq6RnSgZCyIYgjcADTNv7DoZcNmCAsWhb8M/ETyGBgYGC5sejMJmY1uENwFSLbDNd+5c5dBRUUZw3SoQWwwVzAh28yj9TEPxkHX/GFJJgPDllIGA6bOPGQvMjEQCebMOcLAwMDA0NOzA0Uc2QC2L9f4J925c5fhzp27cEEYOyXFhuHDhy8MJSUemAbwy7BmwuJZ5EQPA7JBIid6GC5sejNpxYozDA/4midd+Fc+SclYkA0WCxheEBDgYWBgYGDYUxDB8OUa/yQYH9mlyBxsCekXVBFWGmdCQjaEgYHMpIzNIBjAlZkoBgB5Vn4K5XOn2AAAAABJRU5ErkJggg==",
            name: "Circle of transmogrification",
            description: "A field of sheep-like magic",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Transmogrification"
        },
        {
            id: "CHAOS_POLYMORPH_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApUlEQVR4nGNgoBAw4pL4+OT3dGQ+vwxrJlEGwDTeO/seRVzJWBCrQSgGfHzyezq6RnSgZCyIYgjcAGTNSbmxGdg0z5u8eAa6IUzoinBpxiXHgsvpMNuwab539j3Dxye/p/PLsGay4HImMS5iYMDiBXya0Q1nYIB6gRDAphEGsMYCIYA3FpBBUm5sBtFhwC/DmglLbcTazsBA7aSMzSBkFxJ0HjkAAJBMUnGiU8FnAAAAAElFTkSuQmCC",
            name: "Circle of unstable metamorphosis",
            description: "A field of transformative magic",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Unstable_Metamorphosis"
        },
        {
            id: "ELECTROCUTION_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyklEQVR4nGNgoBAw4pK4//HfdGS+Ij9TJjZ1LLg0TtvwE6s4ukGM6IrQNXqZMWdsO/V3BoyfFcCOYggTPs2pPmwZ0mLMKGLTNvxE8R4TAw7gZcacgUsOGTBhs93LjBlu89NXfzE0IbsCIxCRNTMwMDBIizEzpPogXDN7y68ZyOoxvIDuZ2SAzTUYLkC2Ad0ryLGB4gJFfqbMrAB2DNNxaUaOSpyxgAyw2YziAlyuePrqL0agoSckjLyAKynDDMeblLEZhOxCXGopAgCZsmb029FmzwAAAABJRU5ErkJggg==",
            name: "Circle of thunder",
            description: "A field of electrifying magic",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Thunder"
        },
        {
            id: "FREEZE_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2ElEQVR4nGNgoBAw4pK4dP/1dGS+nqJoJlEGwDTuOHwRRdzDVh+rQSgGXLr/ejq6RnTgYauPYgjcAJhmET2zjJXXvjCEa/GgaISJvbl0agayIUzoNhgosTGEa/EwGCixYWhGFkNxAbrTXQJsMi7c+8VgoMTGgEy/uXRqBrpXMFzAwMDAcOHeLzgbpilRnxdrmLBgE4Q51ZCXnWEPlO5evHcGNrVYXbBnwxGsinEaoKcomgmLZ2SAy1a8sQADhrzsBA1CMQCXK/DZzsBA7aSMzSBkFxJ0HjkAAAVYX0pMI11FAAAAAElFTkSuQmCC",
            name: "Circle of stillness",
            description: "A field of freezing magic",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Stillness"
        },
        {
            id: "REGENERATION_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2ElEQVR4nKVTOw6CQBB9EBMuQbExFFbEHipjuQeBM2ApZ5CDbGmsoDdUFsZQcAk7qyGzn1ETXrU7nzfzdmaBlYgkx/g2F37PE12H4jZS4tA3QbtLFLlBlJhu04r75tfcAUBRthZJHEomaGWglbFsQ99Y8mII2Kl98Owi4tWpbUrIcAYAPHECADym+yKHpHiP6LbMiTIFmElbPlHCv/A6MJP+KYFjGaM7heNBV5zgejMd+fgoRQm8WqgyYSHIE10XZevJcR/NXSTvL0irTORfVzlExDuUYlfhA02EZQMiH5PjAAAAAElFTkSuQmCC",
            name: "Circle of vigour",
            description: "A field of regenerative magic",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Vigour"
        },
        {
            id: "TELEPORTATION_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAn0lEQVR4nGNgoBAw4pJY9vjrdGR+lCx3JlEGwDQuPPkTRTzenB2rQSgGLHv8dTq6RnQQb86OYggTuuYdwYIZO4IFM3AZsPDkTxTvMeFSSCxgRLYdzakZC0/+nIFLI8wrOF2w8OTPGfHm7Bkww3Cpw+sFZEPIMoCQZgYGpGgkFIWwmPFY+34GclRSJxaIdQUDA2ZCom5SxmYQDODKTBQDAK0WUhfuIlwBAAAAAElFTkSuQmCC",
            name: "Circle of displacement",
            description: "A field of teleportative magic",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Displacement"
        },
        {
            id: "LEVITATION_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA90lEQVR4nGNgoBAw4pL4fj5+OjKf03BhJlEGwDR+XL4ZRZw/0herQSgGfD8fPx1dIzrgj/RFMQRuALrmqRwVGVpaagzXrt1i0NJSY3A8lzQDmyFM2GyBaWZgYGCA0fuN5mVgU8uEzfaHD+8zXLt2C85HZjMwQMIHFlZYXSAvr8gAcz7MFeiGoLgA2enILkDW+PDhfcIGZP/omMHAwMDQJb5yBszpMMNgYugAZyzgAlM5KjKqAq/OwBkLZS/DMxgYGBiWBJ7KEO98myHe+TZjSeApeAzAXInhAmJdgTMhIRvCwACJKpjNMevNZhCVlLEZBAO4MhPFAAAJtoOptmm41wAAAABJRU5ErkJggg==",
            name: "Circle of buoyancy",
            description: "A field of levitative magic",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Buoyancy"
        },
        {
            id: "SHIELD_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzElEQVR4nGNgoBAw4pK4/fz3dGS+qiRrJlEGwDTuufCF4cqDPwwMDAwMOgosDC4GPFgNYkTXjKwRHcAMQjaEEZfmggABB2TNEzZ8OIDNECZkRciaLzz4wYCMYQaiu44J2XZkzW8+/GE4cOEHw4ELEDayIXsufIGHFdwF6CYj8/HJoXiBHAA3QEeBBUUCmY9PDiUWJmz4wMDAgAgHZGCgwAGPiYIAAeyxADN5woYPBwwUOBiQMXI0IgPqJSRkQxgYyEzK2AyCAVyZiWIAAMCjj+0xWu3wAAAAAElFTkSuQmCC",
            name: "Circle of shielding",
            description: "A field of protective magic",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Circle_of_Shielding"
        },
        {
            id: "PROJECTILE_TRANSMUTATION_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFElEQVR4nGNgoAb4/////8FlEMWuIMUlLPgkX3T934JNXKKM0QenAYyMjIwwzTdPP30ME3/w+iqKwTBDmHDZjK55k0VHxiaLjgwGBgaGndt2PYa5DqsByDbCNO+Zfo6BgYGBwblgZYZzwcoMnF6Agb+BRzIerGeYAeO7ZBoxvHrwjmHviYoZCqLaDOqmDLJ4DWBgYGB4pdGfIaxpymBxnZ3hhMBPBjEFIQaGF6hqcHrh7fXTDMKapgz7tmxiYGBgYOA8+47B4gM7hjqcBojdKJzx9vppBgYGBoaLd58z6CtLMojdKJyhIKqNEiOMuAx40fV/y85tux4jiymIajMwMDAwqJtKy8KiEacBMEOwiSMnJIoBANtac+S8bWZUAAAAAElFTkSuQmCC",
            name: "Projectile transmutation field",
            description: "Projectiles caught within the field transform into harmless critters",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Projectile_Transmutation_Field"
        },
        {
            id: "PROJECTILE_THUNDER_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/0lEQVR4nGNgoAb4/////8FlEMWuIMUlLPgku07834JNvMyC0QenAYyMjIwwzaf3Pn2MLv/68VWGrhP/t8AMYcJlM0yzUSBfBrLm/dNdM7Yt2PUY5jqsBiBrOLf+0wwY+5+XTEZY27MZorLacDU4DVhVJZWBrNA9zzLjoK8miotwgvZrn/47ZOycDqP////3////f/8dMnZOt9t09f/////+4/UC8yferaKy2gzn1n+asX+6a0bH9S8MMKczbXsyo+P6F8JegIGwtmczYOHAwMDAICqrzbBz0nE4H6sBZRaMPqbO0rLo4i91P2YwMDAweCW4ycKikRGf7cQkJIoBAG9Yhr4Lr9mIAAAAAElFTkSuQmCC",
            name: "Projectile thunder field",
            description: "Projectiles caught within the field transform into blasts of lightning",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Projectile_Thunder_Field"
        },
        {
            id: "PROJECTILE_GRAVITY_FIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsUlEQVR4nGNgoAb4/////8FlEMWuIMUlLPgkX3T938IsyCCLLPb3PcNjiTJGHxifEZ/mm6efPobxH7y+ysDAwMCgIKrNoG4qLQszhImQ5gevr8I1w8DN008fv+j6vwWnATBnwzT+/PPj/s8/P+4ji8HUYDUAGcA0orNhgKABhABBA9hZOBSxsfEa8Pc9w2MGBkiIwzTCNCuIajM8eH0VroboaEQGyNGI0wCYIYQSEsUAAL+ZYgaez+zaAAAAAElFTkSuQmCC",
            name: "Projectile gravity field",
            description: "Projectiles caught within the field are attracted towards its center",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Projectile_Gravity_Field"
        },
        {
            id: "VACUUM_POWDER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABP0lEQVR4nGNgoAXoiZ3//+vt///RaWxqGdEFvt7+/7+6rHYGNsUyPMoZJYsTUfQwoduMSzMDAwPDky93Z6C7BG7A19v//z/5chdD882nV54g86vLamf0xM6HG8KEz+abT688CQoRb7n59MoTZIOQXcLEwMDAkFmXgOFcmOaH914wMDAwMMAMgslPb1qAcAGMg6w5p8C8xcrJkEFeSYKBgYGBYd2alzXq0joyMDUwSzFcANOsoCbIcGzfeQYpGQUGY6P/LeguxOqCm0+vPJEUf9/y7MkDhmP7zjM8vPeCQUFNkMHSzoLB2Og/ihdgljIyMKDGPXqoIwNkL8DSBDxR9MTOxxqN2EBrV3MGtypELzwdlCxOZGztas4gpFmGRxmuGcUABgYGBm5VRkYZHmWchrR2NWMkZawAW0ZCTn1UBQC4o7tcewUWkwAAAABJRU5ErkJggg==",
            name: "Powder Vacuum Field",
            description: "Sucks powder-like materials nearby and releases them upon expiring",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Powder_Vacuum_Field"
        },
        {
            id: "VACUUM_LIQUID",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABO0lEQVR4nGNgoBAwYhOcnyB/z8tWj2Hb4UsMyLR48mYlgga8nOt7b9bqvaexGSwjIWqauOAhiiFM6Daja7784u9OGPvJi9enfx9ovIfVgJdzfe89efEaQ/MNjUlzkQ3p6Og8PT9B/h6KAbhsvqExaa6YhBSGV5BdwsTAwMAQk5CEzcsMYhJSDKpaBljlliyYh3ABjINs+zuHNXNVtQwYrLWFGN45rEHxBrKlGC6AOR2mmYGBgUFVy4ABPSzwukBMQgqumYGBgaE4QIYBPSxwugAGjl59x8DAwMBgocrF0LvhCc4wgCek+Qny8GhEDgMGBgaG29cuMAgdCEnWlWB2Z2BgYKioKDdldahXQjGAgYGB4feBxnsdHZ1wQ5DlYJrRUyNGUkZ2CTpAthkv+H2g8d78BPl76DRBjeQAADdfrFpkxKu7AAAAAElFTkSuQmCC",
            name: "Liquid Vacuum Field",
            description: "Sucks liquid materials nearby and releases them upon expiring",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Liquid_Vacuum_Field"
        },
        {
            id: "VACUUM_ENTITIES",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPUlEQVR4nGNgoBAwYhOMzZ//X9XCi+H2iW0MyHRdpDiGegyBpuUv/5/fO3kGNoN5uJUzFk9MRNHDhG4zLs0MDAwMX77endG0/OV/rC5AtzmS+4YujL38q8ZlXC5hhNn85etdFM2mlTnWDAwMDC/eX2J4POPQUXRDDJ1zM+oixRmZGBgYGFQtvBiwaWZgYGCQENRjkM2ws0Z2EQMDA8PtE9sQYQDjoIOElFiGF+8vMVSUdmPIwSzFcAEyWDBnMcOy1QsZOrpLMeRwumD5V43Lp9unHH3x/hIDAwMDg5GlAlbD8bpg+VeNy49nHDr64v0lBu4tjEexGQCzFB6N6DHBwAAJ0OVfNS7DaJg4LAZQDGBgwJ8KYQA9NaKkxLpIcUYebuUMXJoNnXMxkjLWzNS0/OV/9Ix0+8Q2BnTNVAEA9zGXaqyPjngAAAAASUVORK5CYII=",
            name: "Vacuum Field",
            description: "Sucks nearby projectiles and creatures into the middle of the field instantaneously",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Vacuum_Field"
        },
        {
            id: "SEA_LAVA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlElEQVR4nN2SsRXDIAxEv/WyEXkumMQjZhKKPFgJp5IjHMkkbVRxuuPQAfAfVbd1v8JXGgFIWY5G3dbdYq+nGOCmopSFyptQrGtPMxhYYYS93oBa6R8bZrxYMmUZRK30AXsTiSXVxBqeTUOD6IRZjPAO9GRvKqv76RXOMY8JvIxRbjsNwKKE/V2zaqVzfzyXufKLegFIXWGAYG8M0QAAAABJRU5ErkJggg==",
            name: "Sea of lava",
            description: "Summons a large body of lava below the caster",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Sea_of_Lava"
        },
        {
            id: "SEA_ALCOHOL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtElEQVR4nK1TwQ3DIAw8UOmDX/bIFMyQfVD3yQydgj349dE8ro/UkUFGUZX6xdnGvjPGkcQV85du/6MASCKn2OjoseXLKZLkzmCetiMhp0iNLZ9gAHAksS53AkCpARIQLA20T/Cyvt1N09KJFrZ8zRCl48isuNfBedqapFJDgy1GXge1Pjn3RYcFRh3OZAxnIJ0tVjrvp1foZR4MLI0j3ZoN8F0k51yzXWdWasDj+drvXv3OH5PZd5nkRu1OAAAAAElFTkSuQmCC",
            name: "Sea of alcohol",
            description: "Summons a large body of tasty alcohol below the caster",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Sea_of_Alcohol"
        },
        {
            id: "SEA_OIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAm0lEQVR4nN2RMRLDIBADF8aFJ29y7SdQ+nEueUJqv8lzHamUuRhMSBtVlqzTCYD/QEpL6fGeJwLM8+MtpLQUz1uaOEAA2La1AJid6Ie4FnhNfN+fYfK1vLHFW1qsHG7zCKoAVfQhZudtaBWgYVXV9zX0NkAho5i+GfzmVnCzAXxepI7QQrya/VAPmokAOR/hl6czO8n5CMMDPbwA99ZOuiUdqI8AAAAASUVORK5CYII=",
            name: "Sea of oil",
            description: "Summons a large body of oil below the caster",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Sea_of_Oil"
        },
        {
            id: "SEA_WATER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsUlEQVR4nN1SoRHDMBCTfeUBHaEXHhYe0A26RUgnKekW3SCgvCw8lxECPIGLlHt/33ZwH1kvvV5nG/iP6ocxlnBJ4wGgOV/2Rj+MUWKrRwwADgCut0cEgLCtIEHMBbJHPL3u7iRjSaGFrZ5PyLb7GajxXpJhmRNR03YJDsucN+AwRTxr06xBboMubZa9A262Ukld8go6gYWl4Z6A712Kqk0540jI31WrsK34vJ+urjxQX8ioXCIOJgFiAAAAAElFTkSuQmCC",
            name: "Sea of water",
            description: "Summons a large body of water below the caster",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Sea_of_Water"
        },
        {
            id: "SEA_SWAMP",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA30lEQVR4nK2SMQ6CQBBF/4qJEy+iHQmJjeEMlvZ7EC5k6SFsSAh0cBDNWpBvYXaz4CwNTrXz8/fN7AdDEmtqs+r2PwAgCVuVk3fMe02zVUmSX8DhsKM32Kpk3GuarUrm+Z4kYUjieBQCwPl6QnNvwpTiUgAAHrcaACCSobgUeNxqiGRo26eZAESy5FOdGyGSwbkxaH3vzE+Izo0Tk+9jeHxe/AoxKO5jfautqU1KVdggNmuTUlA1Ax9WHJoGCwBtVa/Nk5/7QwbeNIelgpxs0HUvo11cmjwMbwPg+yeuqQ8B54pIYqB+QwAAAABJRU5ErkJggg==",
            name: "Summon Swamp",
            description: "Summons a large swamp below the caster",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Swamp"
        },
        {
            id: "SEA_ACID",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqUlEQVR4nN2SoRHDMAxFn325sOyRGbpBUHBoQYcqCA0u6gadwXuYmbikysk5OW5phfylf/7/24L/qGWd8hk+43iAYez3xrJOWWOrJxjAAdxecwaIISEDwSKge4Lvl4frtC1NtLDV8xqIYq2sudfDYewLUgypwJYjr4c6n5yPl1YvqCm0YlTfQJQtV5r30y8cY+4OrIy13NoNfBYJyu1qVQyJ7fp0beYX9QaJEWRAjG9NSAAAAABJRU5ErkJggg==",
            name: "Sea of acid",
            description: "Summons a large body of acid below the caster",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Sea_of_Acid"
        },
        {
            id: "SEA_ACID_GAS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnklEQVR4nK1RsRHCMBCTfXS0DMA+6Sk9BANQZACGSEnPPhkgbepQKaf7k7HD8Z2kl/7fBv5VZRy2Hq5Z9+lmTT+FHQ5yotuotuWxad8aex6UOAPA5XreiTIOm2LHEQNA0puWeQUFYg5QjvhZXumka2mjw47LcZrDUbMBbs14ArEG7gEq0FwLVT5HY+3WaKYnsUG/plXLvGJ6vFO7s6M+reRo6MXUChMAAAAASUVORK5CYII=",
            name: "Sea of flammable gas",
            description: "Summons a large body of flammable gas below the caster",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmmBW4NjAwMNSTYU7jqQm7G1AMNPA0J9swNnW+egYGBlQD2dT56n/d/MTAwMDAeGH7SaJNM/A0R4kE2oYhOjArcMUpd2rCbtINxKUJH6C6l0cNHDWQDICSsNnU+Rp/3fz038DTnFRzGjEM/HXzUyObOl89mzofSSb9uvmp8dfNTw0wPuOgL7EB53MrpBgtX1MAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Sea_of_Flammable_Gas"
        },
        {
            id: "CLOUD_WATER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlklEQVR4nNWRSw7EMAhDH1Xv67NwYroJ+ZDMqLvReEWCbIyBX8MAImJruHv/lGTujqRBNNsFZlL2GqKKpMBVJhpgkgxYxFo/3H1xehVyiqWDyImSuvAsclEw79kISMLdqdMB7hN5Fjkg17N8EBE1wK+QZBniDcvOr7Bl0CzPDt7UQ6DYO9afkGeEEU6vD+dcTnt08H94AI8UUrRDAfJXAAAAAElFTkSuQmCC",
            name: "Rain cloud",
            description: "Creates a watery weather phenomenon",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Rain_Cloud"
        },
        {
            id: "CLOUD_OIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR4nN2SwRGDIBBF/2ZytQr7sAitIy4FcIsFsPRBE/ZhFRZALoGwoBlvmck/wcJ/sB+AX4sAIMbYLCzzlIvWBxIRMPPHSNQCSlPXD5TG+7bGGtIAlnmKycTMap4gCczMGvB8jGrzt5MT2BgDALjVprJP60O+kYhARJqs7kfmElKr6wd6t0NNBqeuStYHUhk45656s1QGzJxTBnBprHT0kc7knFM3Vi2Uz7Zva37aul5m8Ad6AUMqfVVUU9KQAAAAAElFTkSuQmCC",
            name: "Oil cloud",
            description: "Creates a rain of oil",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Oil_Cloud"
        },
        {
            id: "CLOUD_BLOOD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7ElEQVR4nNWSsY3DMAxFHw/xDJlBLqIVMoZrNy7pUaQF3F7GyAhWlRkygwteYSuQHRu46y4PEECI+B/kB+FfYGZvb3TORufs+3IxMyOEsOrvGpQigBACIQT2TDKnXKS6tnvXCYCqgvf2BAF4tq3cvLfrNBFBVHVtUIoBYozQtnIeBmtSkhgjTUpzv64tLsYAX9s8SvcsUlVijLPxhhPAo6pW4tJky73r5DwMxjKF5BBv3pubpkNh5lFVNCmJyLyFwJz2X+n7HlgyUFWWsQB+VWd2Q8yrlDXA4Yr5YEbnXgczOmdH/+UhvU3wefwAa12p0PRg7sEAAAAASUVORK5CYII=",
            name: "Blood cloud",
            description: "Creates a rain of blood",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Blood_Cloud"
        },
        {
            id: "CLOUD_ACID",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHUlEQVR4nN2QsUrEQBCG/xHTXNBEEMHqmqtjZWN1kMoieQhNlSbpBFEkb7DTpNG0WtkcWApXpUgaSes9hE0ar5grwobsGUGsxA8Whp1/5p8Z4E8gIl9eUDly834s958XIiJQShl5DekGABDWrpwcTDCdnqPNPdIiO24ksgpiZiRJ0hVSl97RorB2xS8zOny5osgqyI6b3qbNPQprV+y4EWY2picACCpH/DIjbDHm/LC+lDb3KE1TcwKNFgJAZBWk/5gZzIzF27Oh3wWA5WoNf1A8bLKNX2bdemk3fX/E/Se733k+s7BcrTGfWaNNFqcfpI9IAKCU+tZxiN5bKQXjBkmS4PXsrp9gGN8eXfdxUDnyU7Pfs/c4MRzH4n/GBk4Yh1ThTiYFAAAAAElFTkSuQmCC",
            name: "Acid cloud",
            description: "Creates an rain of acid",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Acid_Cloud"
        },
        {
            id: "CLOUD_THUNDER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3ElEQVR4nK1QsQ3CQAw8I6ahQKL4AZLUpGGQ3yNN3oOkSKgJIyAaFmCQo8HRJ3lEgjjppdfZd/YZ+AdIzl5/zGmPJEIIo3rSIBbF9ZTJzMBE1tQfc4YQRibGxQZbALiWBfNzL0aqKlCUsr90JCmqisx7ERH0ABUYejfTe3jvh3/WXcQ4VUW80Qhx5tRBp5njfjHRtSwGcnc4JAc9bjcAQBz3I1zdVCR5au/d1+YpTu29I0lXN9VqMd8wk1Xi8ByvbDHCc4GRq5tqmtc2cXVTLTJJbRQPWC3+6Yhr8QLubNfkT7T0cQAAAABJRU5ErkJggg==",
            name: "Thundercloud",
            description: "Creates a stormy cloud",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Thundercloud"
        },
        {
            id: "ELECTRIC_CHARGE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAbUlEQVR4nGNgoBYIb3+OVZwFq+jq458ZGBhWYpNiIt5snBpCHHgYGBjWHPhClAa48SsrJYnSADEeD0DxNLLrIf6GgFBLXuw2YDUezTOMuKyG24BsPLoNBI3HqQFPWGHXgCcq8DkJV1TgcxIVAADaQyN51kYVCQAAAABJRU5ErkJggg==",
            name: "Electric charge",
            description: "Gives a projectile an electric charge, that it will release on impact",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Electric_Charge"
        },
        {
            id: "MATTER_EATER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoUlEQVR4nGNkwAOmexv/33HmAT4lDEx4ZYkAGAb4iwv/p8iAjS/fMiLzPUwU8BoAV+wvLvwfXTMMTPc2/s/AwMCALTwwNEz3Nv6fufUsToPQDcGqEB9AN4SoWPgPBQwMDAyZW88yIocLE0wBPhofINkLDAyoUY3TC7CQRxdDF2dElsQW+sgaiIpG5PRAVl7AlZiIMoDUfIBhAKm2MzAwMAAAh4BYMkRfuNoAAAAASUVORK5CYII=",
            name: "Matter eater",
            description: "Makes a projectile eat the environment as it flies",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Matter_Eater"
        },
        {
            id: "FREEZE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAr0lEQVR4nLWPMRKCMBBFfywCBaTwCCmpAuegp/cy3sKeyyAVJYeIFEgTi3XiJlFmnNFtsrPz3t8N8GUJei6j7acFQFcVAIyW47x5qJ+WripORgE40Mho6VHPUU+0nz+FRuXkjPNmtGxU7rVzeyQgEHgk70nm85fAj+aRAOoyiz9NNdiV04Nd6zITImCCk6K8lI4FvhrA9XZP4wIhyov8jyelZ+yVc24feLPhx8L/6wEchShYugcbZQAAAABJRU5ErkJggg==",
            name: "Freeze charge",
            description: "Gives a projectile a frozen charge, that it will release on impact",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Freeze_Charge"
        },
        {
            id: "HITFX_BURNING_CRITICAL_HIT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRUlEQVR4nJ2SsUrDUBSGv1MF6wu4BKmgccxaHEQ6leIgdLNSXDq0ax8gQ5durmZwK9KpUAeRjuJgQ6dkNDhJHsFCp+PiLb022tYPLjfJvf85//kJqoqq8nldUPO8ycrxzVa5wn/ILb7M+i0FEBHiONY4jlVE+G0BiKpaYoB8LRCAXq+nAGma8vryzOG+w01wJ+befIRZv6VaKqClgmWvXq+LEQPsHRzNz6IoUoDtVTMa8cnpGdXplKrva+i67A4G4Hl2Bj9pNxtqxI7jABC6LsUk4bjTkcwMdi5vRURoNxv6/pHy8Phk5VFMEiZhyNVoJPMMRIR8LZB8LRARYTzsWmKD53lMwtC2aRws2r44r1gfoyjSN9/X+3JZAcyuqnaB8bC7JF7ECK3mpkBW57ULtJsNNYlvwtIIq8hyIJsUyOLPH2kdvgAnD9m7Ea4i2QAAAABJRU5ErkJggg==",
            name: "Critical on burning",
            description: "Makes a projectile always do a critical hit on burning enemies",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Critical_On_Burning"
        },
        {
            id: "HITFX_CRITICAL_WATER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABVklEQVR4nJWSMUjDQBSGvysuTk51iZKCRrBDCkUoDtaxiIPQVeogFergUmc7tEM3ZwcnW8eCDiIdxUFDi5IODgYHkUzuXZ9DvZCYiuaDI3cX/v/97yWICHot7F9I+PyflSJEOrNKUmbCh6yZDvaj0UgAcrmc+k0sIigRASDfGkrWTPPy/snTyZpSStHpdATA930e7u9YWjQ4PTtXYYPUT9dwikqlorQYYD6zHLxzXVeCFnR1gKJtkm8NBVBAIF7f2KQ8HlNuNMSxLGZ7PbDtaIKibUZS1GtV0WLDMABwLIuC57HSbCogPgOA7p6pjg8P5O3D5/rmVgHBPAqex8Bx2O33lYhMWlBqYvb8neRorh0Ra2zbZtDtxj9FmHqtKjvbW5FL13XltdGQy1JJAPRTRKIGj1ftmDiMFkaKa4Nplf9tUK9VRU88CbEW/mJaApXEYBqxXzkpX2r+2Icy8dCzAAAAAElFTkSuQmCC",
            name: "Critical on wet (water) enemies",
            description: "Makes a projectile always do a critical hit on wet (water) enemies",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Critical_On_Wet_(Water)_Enemies"
        },
        {
            id: "HITFX_CRITICAL_OIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOElEQVR4nK2TsUvDQBjF31dc/APi0FQRal07ioM4BpEiuGfLkDnQwSVDFzvp6iA4HB0LFiydxUGD02VscbLp0r3rc+kdaU3BqG+64+P33ncPTkjiL6rkL92oVdptK3+pVR2ICEgiTVMCQLPZlE0wSYh5QjdqsVZ1MJ3NAUCubp+glCIAZFmG15dn1Hdd3NzdS96gsu5aqzr27Pu+GBgAdvYP7ExrTWDZgUkHgPqeAwC2CwMfn5zicrHAOI6plOJ2vw9rYLSE7RZRGNDArusCAJJGA0eTCQ47HcmXKNPZ3Kb67QeJwoAfnxkGw5EMhiMopWjg9yRZbXJdb4/XvDg/Wxkopai1Zs/z2PM8WnbdIAqDb7DWmuM4tuBGg6LkvAy4sr0xKEr+sUEUBjSNl1FhB2U3kH/9jb/RF563uPbOtOroAAAAAElFTkSuQmCC",
            name: "Critical on oiled enemies",
            description: "Makes a projectile always do a critical hit on oiled enemies",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Critical_On_Oiled_Enemies"
        },
        {
            id: "HITFX_CRITICAL_BLOOD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABR0lEQVR4nK2Tr0/DQBzFP0cwGJIaTLOEhA05uyAImboQBAlihsxVVO8PqJiZQ5OA6xATS4YgZFUDBFumWrmCItVzs1/M7rJuI8DgJZf7lfe+7/typ0SEv2BrcTPQWgZaby5QdBy7TpJEkiQRpRRfDQBlWhhoLUXH4W06BVDVKCIMQwHIsozXlycOCi5X17fKFBGRvINlF/V6XRkywN5+0d7FcSy2BVMdYLdWA7DJGvLR8QkXsxmTIJAwDGWn213NYE62Lhq+J4bsui4Ao1KJSppy2Gwqm8E8eeui0Omohu/J+0fG/cOjAmwelTRlPBpx2e8rEWEboBpFADacYa8lrZtnSzYol8uM2+18aMsPqeF7cn52mjuM41gmQSB3WguAmUUkLzDstVbIizDEXHEjsK7yjwUavicm8d9gpYXvsM6B+tffuAk+AdNFsTOA4wqaAAAAAElFTkSuQmCC",
            name: "Critical on bloody enemies",
            description: "Makes a projectile always do a critical hit on bloody enemies",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Critical_On_Bloody_Enemies"
        },
        {
            id: "HITFX_TOXIC_CHARM",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/ElEQVR4nK2SMQrCMBSG/wqeoYMdWsmUwfYMQhy7iqvQAyheQ3uA7h6ihQreQASnghnaE/QAzyklNqlW8F/y/kDe+97LA/6p5MRJ95QkpJ82TXTDo2kX54xRI+XXJG8Jojnv4lVVOY/nE42UAAAny5yP+GkZ0kVuKC3Dt0o5Y4P4BkGfQpHovt+So6qrh9zb4nw9YLe8Gcg5Y8SDADPftxNwb2ul0GkG56JmcJEbqoWgo+sSANRCUP8H9LlYMe9ti30cGwS2nzCGeG9brBeLDlOp7wcJFAUPAgDAzPfRSAmvKIb3QPWk95ozRrUQ9G0PjCSf7myFftZoorF6ATIdgRAvJerfAAAAAElFTkSuQmCC",
            name: "Charm on toxic sludge",
            description: "Makes a projectile charm creatures covered in toxic sludge",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Charm_On_Toxic_Sludge"
        },
        {
            id: "HITFX_EXPLOSION_SLIME",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA50lEQVR4nGNgQAITdBr+M5AImBgYGBj+///P8P//fwZhXiE4myQDYEBZRBHO/tzOTZQpcAOWWE3+j0zzVn5lxKcRZgETugTMFd8P+//HpgEmh2LBYstJ/4/5bv5/zHfz/x8Tnv9fbDnpP7Ih+LzDgswxcjZBcQWyId8PM/zntN2I4S1GBgZILCyxmvwfptFykw/jlw6e/ywJNQiVd07AmX+O7IGHEYqJn9u5/7PYuCAEVCwwDMDmCqzg+2H//9+ft0MwUoCiBy7cZqwGQDFOjbgAzEB8UUk/QMjpGCkRHfw5sod6rsEGAPBsgcb/bsP+AAAAAElFTkSuQmCC",
            name: "Explosion on slimy enemies",
            description: "Makes a projectile explode upon collision with creatures covered in slime",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Explosion_On_Slimy_Enemies"
        },
        {
            id: "HITFX_EXPLOSION_SLIME_GIGA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABS0lEQVR4nIWSoW7DMBCGP0clURSylRRWDRxZVRBNLWrxuqeZFDYwyXTS6MDAHmAdDktAH6LTYMlYVIVE8kBzjt2m2iH7zvff57sDx15ungwnVhfrM58bCwCMMRhjuI6v7PmSVToyktyUOYEbnAzHvY8rHRk5x9lBAZCkxNlBKSH4uHs1k+GY798fHu4zAAbzFSQp7LY0ZY4I1HttxOcRuBSD+apzJqn11XttmvdnGwoAWx1gupzx+aW9RI+mPTdlTpwdlEcwXc56e+GJtejSi7MeANw+vnnVre22AISLjbJkAEopKh05mMfG9YokKXWBnbOCbly2cX2JDoVLEEA3WxmVoF76grudyo3bQDt7F1u+FI4yJW+bMu8E6mJtwsXmuCRAOMpUpSPj7UMrJiLWpAci5N5ljYWuLtZGivybfFrE/bsn0id2SeS04B/KdMY33K74bgAAAABJRU5ErkJggg==",
            name: "Giant explosion on slimy enemies",
            description: "Makes a projectile explode powerfully upon collision with creatures covered in slime",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Giant_Explosion_On_Slimy_Enemies"
        },
        {
            id: "HITFX_EXPLOSION_ALCOHOL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0UlEQVR4nGNggIK56Sr/GcgATDCGsjgjOfoRBshKiqNIfG7nJspFTAwMEOc/fv6S4e50G7gm3sqveJ0Es4CJgYGBYQGLJEMPuzpDDYssXMH3w/7/sWmAyaFYMDdd5f+BOtX/yC5ANgSfd+BhcPflf4bHz19i2P79sP9/FhsXDBfBAE5/fm7n/s+SUIMQuHMCzvxzZA88jOAu6InX/Q+jYbZiA5y2GxkJBTDc6d+ft0MwmpewOherAVCMUyMuADMQX1TSDxByOhM+SQYGSJTRFAAAd6p4DogBbywAAAAASUVORK5CYII=",
            name: "Explosion on drunk enemies",
            description: "Makes a projectile explode upon collision with creatures covered in alcohol",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Explosion_On_Drunk_Enemies"
        },
        {
            id: "HITFX_EXPLOSION_ALCOHOL_GIGA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRUlEQVR4nIWSsWrDMBCGPxVBMcFkNB4yWQ+hwdm85xW6lT6C94KfopCtc3Zv9pCHSOc0cwimIFCH5BQ5telNOunu///7dXCLj1fjmYih20zey9uTJEWm5upGcW4WXppd3xIAVnk2W3xuFl7OaX25MhlLWl+UEvlFpljlGcVbr6RYlxUYC4c9rm8RgOHYeLnTAFuds3xekuo0sOuyuksxFvoWXVYMR+vd9j28a4AXd6T4+WblMj7jZmPHgLdclxWub0nri9JS8HXywGnePQG7SRcv/lgfvi1iD3HYA5Csd6EvKDg3Cx/L5LCfBjGWoSPshpLmMOcce6QiVvAE97+VrxKpcyPE2znyYDR/DCK5sSR5raTW9e0dYOg2PlnvrksCJHmtgi8PHghICPFAgOJc1ljUDd3GC8m/zY8k8ewjkCmwOZBHwl9/kLpJil/qZgAAAABJRU5ErkJggg==",
            name: "Giant explosion on drunk enemies",
            description: "Makes a projectile explode powerfully upon collision with creatures covered in alcohol",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Giant_Explosion_On_Drunk_Enemies"
        },
        {
            id: "HITFX_PETRIFY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABpUlEQVR4nKWTv0tbURTHP+dRhfACsc3i8GzrEqWkDg6Ca7c66ZhCQaFQ6NIWK+jQpYuCLTqJg0OkoEMXNzcX/4MkiO0SWu+QDjcxUHmQocch3sv1mc0zfu/5fs/3/LiiqtwnHmSBuYUlnZgsA7C1viyDSCJ9WFUR5yAkhpGmXQDZ3f5yR0RViUQEESFLTtMuadollyvw5/eFflz7ptnqAALwYfWrhsSZwl8vVO+VAPh53vBFtjc+iW/h5fyixvmYJBn35BfvXgHQ6tQ4O2x4EWOaJMm4F1FVojgf+2ohGWD04RTPKmWeD/8C4OrflX97+/6zAkQhGMbim9e0OjVWVzY9FudjPxtr2wBEA9lAde87Bz/22dhcuWXf2jbWtr2byFkzpkm9V+Jk54BWpwbA9OxTAC4vre/d5R8fVQVuDunxkzFyuQLGNCEpwWEDKvD/tAgVGBkpctHrbwLwZC9gbZskKVAsPuonTZap7/cwZgiCLWTJANHxUVVcC24wxjR9z5k7uHPaHlBV5haWNFxrmOdmsLW+PFjAhTssN+Ws5ezvlft+52vjYNMjUYXrhAAAAABJRU5ErkJggg==",
            name: "Petrify",
            description: "Turns a wounded enemy into stone",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Petrify"
        },
        {
            id: "ROCKET_DOWNWARDS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVR4nGNgoAWo92uaS4wYAwMDAxMxhuDSjBX0Rk04CtME0wijYXLIgAVdQJpN1oqBgYGBj4dPAyYGY8PkcIIVCWv/o7N7oyYcxSaOFZyuvPAfl0EwGqYGp2ZkxciBh2woslp4LCjYyMMNU5ZUZmBgYGDQFNJOQhdDV8vEwMDA8Hrr+/8iXgIYropYEMyIy8//////j8J5vfX9f5hhuLwGk0NWjwGQJdADDKcmZAXITkPXgNdmbArQ+egWEAQkayAHAADzOp7/J0XF5gAAAABJRU5ErkJggg==",
            name: "Downwards bolt bundle",
            description: "Makes a projectile separate into a bundle of 5 explosive bolts as soon as it moves downwards",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Downwards_Bolt_Bundle"
        },
        {
            id: "ROCKET_OCTAGON",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsUlEQVR4nGNgoCV4vfX9//////8n24D/////f731PV4DmPDZyMjIyEiSi7DZeLrywn988lgBTBOyZmQ2UWBFwtobKxLW3oCxcaljYmBA+O311vf/YTZFLAjWuP7u6qt6v6ZD6C5ADgsWBgYGBhEvAYY32z4wiHoLMsIU331+9+b1d1dfwQyDiSvYyMPVE/QCuleIBtgCj6hARI9ndE0EoxFdAbpikpM20QkHF6A4MxEDACXlu03ly+rvAAAAAElFTkSuQmCC",
            name: "Octagonal bolt bundle",
            description: "Makes a projectile launch 8 magical bolts if it moves slowly enough",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Octagonal_Bolt_Bundle"
        },
        {
            id: "FIZZLE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVR4nLVTsQ3CMBA8I9ago0vBNN6BTBCLFim6TGB2SJkB0pGeygW7PA2WXo4NIREnWfK//3T3bxv4F0QkrCbfh+G5muzJ8Zf6XSY36UC34kn7USC1HmNPjp60Oj+bkSaLSIhKnrRfByoi4b2u2qJWTduJ2Kt9f+u6x7lpLAALALVzfWzhVFUHY8yx6EL3qx0sfg+amA7Jk23pDLmigkCbu0KTcTEBQO3cZZH1EjY954hNH2opXsdKgJBd6dDCAAAAAElFTkSuQmCC",
            name: "Fizzle",
            description: "Gives a spell a small probability of short-circuiting",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Fizzle"
        },
        {
            id: "BOUNCE_EXPLOSION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvUlEQVR4nGNgGHLgPxTA+Ey4JCiygRRxogwhy2UwTYQ0MyFzPrdzUx4G2Fzx/bA/aQbDNKA7H5tBjLg0M6hYIATvnGBgYGBg4LTdiKGesby8HMPUBp8bGAY0bNHA6lqWM2fOYAg2MJgwNPicQDWEgYEBm1omDBGoCxq2aECcDnU+AwMDwwaXExhqMQzY4HKCwafhC6qBWzQYzpw5wxCwxwJdOSQQnZ2dsUaTiYkJQ43AFKwaGRgYGPbu3csIAEIXZ9DnibVeAAAAAElFTkSuQmCC",
            name: "Explosive bounce",
            description: "Makes a projectile explode as it bounces",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Explosive_Bounce"
        },
        {
            id: "BOUNCE_SPARK",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+ElEQVR4nO2QrU7DYBSGn2/pkrW6liy7hjrMRO22ZKYJFRMNHlmBwXAB85tBbEkFCGqbOlR7C5D5KkRHYMnBsKbL1wYa7B73vucv74EznZEfjrrXVvjXhS6+hjldiYiIOV1VA52Gg7SUIC2rJSIiF3fvJwvrGHVhOx6ToaE1LRcD4rHPFmT/fK3qtV5dFHlEvDsAYM3W2I6HNVszH/WZDA1sx/tbjGOUx9dPCdKy0k0xVBiGmrkxb1kuBsxHfZ7evrh5+MDf3zceNLIs08zCiojHPgDx7kCRR2Sl3gegXNdt/O6LdYXteBR5xGW5bY2sANqW/EaSJOob2FGC5KgF73kAAAAASUVORK5CYII=",
            name: "Bubbly bounce",
            description: "Makes a projectile shoot bubble sparks as it bounces",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Bubbly_Bounce"
        },
        {
            id: "BOUNCE_LASER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBUlEQVR4nLWTr04DMRzHP3dZpskpxAwPMEE4hThzgTdgigRz73D3BnsDzBYwC2Yes5zYxNTPnVnCkplpgt1MEaxNb205DD/Xfv+2TeE/Rymlujjxb+DqOPWa2sZxCABYN4vOlsYgOo1tsmk+Wsk2L3iEcxMttkXeBiGTkFjjsb0AeHq97rz55WHimi4PE0foe8axjMIB56A20K3+0q5FHstIdYmjsiwd4OJhx+3wjqxfsDpOWTcLvuZX3sCeiJjF4PGT/SwhJSW7KQDI+gUM4X2+xebqaT3jfpYAICJUVWX2X96eTYDTwNvrNPovXG7uf9IlcTgRQJ7nrXswR0lTb209dV1H34xmkgZj3MJKAAAAAElFTkSuQmCC",
            name: "Concentrated light bounce",
            description: "Makes a projectile release a bundle of concentrated light as it bounces",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Concentrated_Light_Bounce"
        },
        {
            id: "BOUNCE_LASER_EMITTER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/UlEQVR4nJWSPWoCQRTHfytbJyzYCDnEENbWZrHwCgopPMC2a5tCkjp30CsEDANi6xQieIoEYnKBl2I/mOzMjvpv5uO9+b3/mxkIaHMWCcWD2pxFREQuQeKuwP4AqGoMqHerM6nkANoBgPH9ZWADiCq1IXYBO88B2KA2RETEPnSV6hfoctSpx+eT1ADfvVyt5bY8vNyGAd5nfHhafYbWtuKiKJwKd5MpQ1XOhwqYT/u/g6PXSWyMaRbfozeSXU7KAtQrUP0FBfod7FxvC8kuB8pE/bJo9uf5+qsu4Djo6g3g46ccZ4Nj3xhDgusgAsiy7F9/TStp6rVdS2sd/QE4oYftutUacgAAAABJRU5ErkJggg==",
            name: "Plasma Beam Bounce",
            description: "A projectile launches a plasma beam upon bouncing",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Plasma_Beam_Bounce"
        },
        {
            id: "BOUNCE_LARPA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4klEQVR4nLWSIQ7CQBBF3xI0Sa9C65ANCYKLcIIFhWUVXKAWgwSBqQPFImoJB0DBDRhEKWnpbiEhfLPZmfn/z+wO/BMiIp9qWr+aNArcjvWYPFETeE8AbJP99x2oJ8oi2flQcS7XeUd4FynIZZKzA59IE9kpoPtz79c15Zz4aQ+Wo50UZ5Oz0lrXksYYdbUiQZjvwjbZk3XWToG2tfZ1iVpD7H3DcrSTIMxjQQgDemSrNeVa5wj2vgEgOU0rW2gmi5dBrQPfbGY1RjPLL92L0x1AAcRxXHmHYpQoirxEgDRN1QOoPnaC7luqsgAAAABJRU5ErkJggg==",
            name: "Larpa Bounce",
            description: "A projectile will launch a copy of itself when it bounces",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Larpa_Bounce"
        },
        {
            id: "BOUNCE_SMALL_EXPLOSION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAx0lEQVR4nM1RLQ7CMBT+SubGMRA7QAUCV+RSjjNb1/sQJFOQMLEDIOZ3gJXMkDzEIOnaVzIcn2ne+376Xgv8NZwGhT16IxIniV91KXJJeFLs14PNyT8REqGJu3nsbWwee0t+SCpg8QS+ebwc0vtzXzXYnJyeHtznwyCnQYIzZ7v9VGy2QNfgeT1D3B5YHxHpRVVV0QSmvE/mD7oG5lSwG2Rt20ZNAwlTNrMJgAKcViil2AeSUs5qzgwAGdv9YgixWqRKoK5r8QIiVZULmtp8hQAAAABJRU5ErkJggg==",
            name: "Sparkly bounce",
            description: "Makes a projectile release damaging sparks as it bounces",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Sparkly_Bounce"
        },
        {
            id: "BOUNCE_LIGHTNING",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0UlEQVR4nNWSPQ6CQBCFP4wtCa33oDPQUHogvACBa3AFEksaid22wBEs3cABtNDlZ3cojJXbbN6bN+9NZhf+7jw/x+DdVuGnhG94APJuWBVtsYTjqnUNl6RpspvtMGdMY7JlIE6Qd4O4QImLq3attcdejmiERmOCjEbcg3nO62O+l7wd7KVp6riczgVRMOOiH9Fl5oQB7JVSDhncR6LAn/Dx4HMBJO3OYQBdZhT9OOHbfZRk2wZKKXSZ0Who9NtQSgfwAJIkET9HGIabjQB1XXsvAkPGotU7qrIAAAAASUVORK5CYII=",
            name: "Lightning bounce",
            description: "Makes a projectile release powerful lightning as it bounces",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Lightning_Bounce"
        },
        {
            id: "BOUNCE_HOLE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAcElEQVR4nNVQwRHAIAgLXkdyA4diBodyA3ayn3pXFVpbro/mRyAkAPwO9UCrg9VwOTzhl5a8StZEd+Jw1XRjJbo7gXsBMfMUM+dMI6fNAcAmIh0RYzTdxlngix+IyBSXmavmDgCUUlJvO59iiUsptANZQUg/6N1axQAAAABJRU5ErkJggg==",
            name: "Vacuum bounce",
            description: "Makes a projectile remove earth as it bounces",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Vacuum_Bounce"
        },
        {
            id: "FIREBALL_RAY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1klEQVR4nLVRsQ3CMBA8YAHaKDUbuKSgyQLZgB4pQtnBFWOkTRagYARaS6GMlZIRjgJ/5DhGWEJcZb/P/3d/wL9htOJPRA4tv/KMViTJkOzeKr8ZSfZFNvHWALC5WcB2QF5+VGK0IvISsB1213EVV+EmBBZqACDJpH2IHZHPoa05tGmfg8l0n+uFSq/h0ovDszk328P+PhXy8jIj2A6P4+l97ouMRiuGaYgFSUJ4M0t+MVyUI1axeBeQRrM9eIkkpyDw0/DvyYnEiGIzqUmM0BdZuoJUvAAnV+s4ixXfhgAAAABJRU5ErkJggg==",
            name: "Fireball thrower",
            description: "Makes a projectile cast fireballs in random directions",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Fireball_Thrower"
        },
        {
            id: "LIGHTNING_RAY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxklEQVR4nJVTyw3DIAw1Uo/pCL31whLpuRuxQTJPOkvCHsmd1wMyMWA3aiQr4AfPzx8IAAEJ+d/btO0/MXFII6l9kozXDdiTTNuOcVnRK0k1gZXKuKwqaZWCBDiiJjv76yBqcdoobBruAJD9SdC52p/3N97M8UDwA70+kd7PBxERBT+UK3M8Clnwd1d8XDxdYirGONeH6yFSOGW1EWVUJUtdQds+ayIv5PdE7d5o49lrrfeS5HIO+HL/DtRRtsfXIv3r+WpnvqWIqUogPwLZAAAAAElFTkSuQmCC",
            name: "Lightning thrower",
            description: "Makes a projectile cast lightning in random directions",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Lightning_Thrower"
        },
        {
            id: "TENTACLE_RAY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVR4nJVSyw3CMAxNqk5RtatxJWQCBFdaMgHiSldLlDUeB+RgXAeCpR6c+n38EgPA/PPNlwd435sf5V3AOA2lTzF//P9KQGAOut2PtpmgBuLVtRBozjYE/LDFEc1bAMa7AGlThnc67zZreBdgD/srxmkoA8u8Vp1wkmVekWJ+h0hASpyryzW527KCpihJJHmK+UWglVxFPiBy0msBaqDaTMevRFMnID/j8yUD7b1zVemU+p4GpQvNsnbF1RC14iIk8AQBQbb3Q0JE2QAAAABJRU5ErkJggg==",
            name: "Tentacler",
            description: "Makes a projectile cast tentacles in random directions",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Tentacler"
        },
        {
            id: "LASER_EMITTER_RAY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAUlEQVR4nI1TMRKCQAxc/IAWjBVWdNow+gZ9hAX+BEdnzn9YaOcHsDkegGOjnZWdWOALYsEEwnmnUt0l2d3bkAB/fmlJlJZEZrxjBpT+LEpLomn3XykA49WlRaI0ERGRjfwnwXh1sYJbdtifLAriXSEJmFTpqo6ownimx00GHLIrHrfzsx9Gfp4MMVlfa7E8GQIAji9g1vO81iuYmRVZPYh3hYx/7QUDJZnSFYnZXADw5IV9A8B9O/dlbrDYP/ncDyP/tBw1WKWbJvFzWVVakAJOK9K3/ANMYrPxATbvDHLNRG3DVLDFrCRp6R5V2xjLQarBtk2T5Ga+3k7XmprFrtwbAfZmNE+VkkkAAAAASUVORK5CYII=",
            name: "Plasma Beam Thrower",
            description: "A projectile fires plasma beams in all directions!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Plasma_Beam_Thrower"
        },
        {
            id: "FIREBALL_RAY_LINE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAgUlEQVR4nK3SsQ2AIBAF0MMt3ANHcB417ICtQ9Cyzxlbekf4VqgRI+HwlxAehPtEf4WtBgCw1RABW98CwdchbPWJiIAnVIXcIIPgjQjY3eQQI0XiebZ6eNtvcoBSSq1zNxLRUnxzsha8fMREV9k+oVwHYk/EY46NTV5Q0r6qf/g9B02jfUGz38rsAAAAAElFTkSuQmCC",
            name: "Two-way fireball thrower",
            description: "Makes a projectile fire small fireballs perpendicular to its trajectory",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Two-Way_Fireball_Thrower"
        },
        {
            id: "FIREBALL_RAY_ENEMY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGklEQVR4nJWTr04DQRDGvyO8QB3bIuqKQpAzlYitp9W9IPAYmnAvcCGpaaoREJIack+Aqauoq+GSJam5hHN9AvIhLnNc9+66ZZI18+e3MzvfAg5LIp9Of1MSADCNKzGmMUnSaEUkkU+SLCeWgTa8km+0ohDrOjFa7fmYxrR9OTWNabebRP69HCk+NG4BkuJttuQ2W3L1OadAjrJysQty4oLd3o2R7TZ4nEz3upRRnICX5zcs3l/xNJ0AAHrhGugM0QtCGK14CuQv/XPdyROCEN75yEvwgN1NMDtrXeKq3y2AX4M2JPfi49uD0YrFFsjKFmR250MKqCn+ry2I2bqok3WjiWTtLkXGBwUlt1Uki7+PdJQq6/zydyT+C9MNADGdj42HAAAAAElFTkSuQmCC",
            name: "Personal fireball thrower",
            description: "Makes a projectile turn the creatures it hits into living fireball throwers",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Personal_Fireball_Thrower"
        },
        {
            id: "LIGHTNING_RAY_ENEMY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABkUlEQVR4nI2TvU/cQBDF37i+yt2Jhg5OpIo2BY0rnA6K9PkoorRHAdKFP2CNRAXpEERBkdJEViQ3aQlNGiqEzUaHRBEjXXeSO5p7FMcY+1gQW3k9er/Z93YHAEBOiEdWUlTemrMmrGtJUdEHISdkmYazMJZpmBQVh3E3hLMGJFsQZ01LFGU5VeysCUmGdcNh3AXLFCS9VqIsb/3T7gqXOyoW3n3GdhUTAH5f/sfJ2pI4a/oqXNw63Y2ynH9WexAJxBuYswYsU/3uX42OeTU65t+LPTZhT4X7QOyDNK0GutEQZz1/+PgWo/EZBps7952vf4mzBklRMRAJRCEigZysLbX8fTv4jh8/j7C9swnNB3Nv8OnFEQe9DgIAuHw9J4Nep85gcet09+brxvpofAYAeLk8XwMPv6zIv+QV9s/fi0gg02vkhFML96ePspzOmr569wUJDeTuVcFZU/tUW5qJimcz8i4Vs0wRZTmb+2dD1FLzlqZ2+ejstPyzTDGMuw+hZapD5n9MjaHxwodxF0lRUeu3LpRbeLd32I4AAAAASUVORK5CYII=",
            name: "Personal lightning caster",
            description: "Makes a projectile turn the creatures it hits into living thunderstorms",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Personal_Lightning_Caster"
        },
        {
            id: "TENTACLE_RAY_ENEMY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABkklEQVR4nIVTPU/CYBB+XuIfcJMPg4Mik4Pp4g/AXZw1mpg0NZomRhIgYRJaExZkKJI4iCYupvwAWdgcZHKxESIxlI+Nf+A5yJW2YLjkTXp37/PcPfdegQVmaZLHL+Rr5I4LduLZ1lwCRdYpshpyfLs3gJGLCYST6OyGELA0CZuZN5BtzlRlsN0bOEeNmgLhJNCvY6MxBNqJIMg2QUQz7SqyTtwyG9km2ongrE6yTU8Xk7jKh8GWJkGRdYLfFFknJmJwd9Sk7qhJrx9lYhL3/fmOD7yIJOCfsl/z0ckBRuN3pFNFj1y+F3ADC/ka2b2BR9r93SOenmu4LqYAADff+4Rw0skvVaoZ4ZZg5GJCRFqwcInx3mFpZXkL2ztrHlKt8DDtsp0ITl+BvMO1NEll7e4ZKLJOTlH+YCK3JM5NXsgzQLYAS9hoDJ119g8SAMyf8xI/sVuy4IB/3wHAuE0LIYQDuvgqi/WXAdCv4/TqkyrVzCSL2V0wcjHROT772/d/iqhRc0rgt3l/qLuIGjVFPNvCLy5ODjK89QjgAAAAAElFTkSuQmCC",
            name: "Personal tentacler",
            description: "Makes creatures hit by a projectile grow tentacles in a chaotic manner",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Personal_Tentacler"
        },
        {
            id: "GRAVITY_FIELD_ENEMY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLUlEQVR4nGNgoBAw4pJ4O+HndGS+cAF7JlEGwDTuv/sARdxRWQGrQSzommEaz948cx/NbEWYGmRDWNA1wzQ+fPv4Lor2mwiDkA1BcQEMPHz7+G7rVos1DAwMDC/eX2Jo9H1gxMDAwCAvLKuMrpYJ3XZkzQwMDAwSgnoM9ZsVzr37+Orew7eP7569eeb+/rsP4GHFhM0FMJCQEsvw4v0lhorSbpxq8BqwYM5ihmWrFzJ0dJeSZkCmzSajF+8vMTAwMDAYWSrgswNigHABe6ajsgKDsbqJorywrLIQv5hSo+8DoxfvLzGszJQ3YmBgYBDiF1OSF5ZVNlY3UXRUVmDAGwuw0J4c8y1EiF9MaXLMtxBsMcDAgJYS8SUkY3UTRQYGSIpETkgUJ2WKMxPFAABnT4wF4y41dgAAAABJRU5ErkJggg==",
            name: "Personal gravity field",
            description: "Makes creatures hit by a projectile gain a temporary gravity well that draws projectiles in",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Personal_Gravity_Field"
        },
        {
            id: "CURSE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIklEQVR4nGNgoBAwYhNsDgzebSZv/A7GP/XwrFDt+rWuRBnQHBi828DLrRZd/MK2Xc3YDGEiRjMDAwODgZdbbXNg8G6cBiBr1pLlOI6sCMbHZgjcAGQ/X3v8wxKmSUuW4/i1xz8ssanD8AIygGlC1owNwA049fCsED6FuNShxAJyOKi+nm0OE78tmnqSgQF3TKCAzbNnWtxoM8m//+LA//svDvw/fn3S/xttJvmbZ8+0wOsFGFB9PducPalnAowvIajH8D4wbgKyi/AagAwSUmIZXry/xFBR2o1TDV4DFsxZzLBs9UKGju5S4g3QqDoz8ee8koIX7y8xMDAwMBhZKuCzA7sLNKrOTBRcv6jgxftLDJanHxbgNQEfuNFmko9MYwMA9RF590azvpQAAAAASUVORK5CYII=",
            name: "Venomous Curse",
            description: "Imbues a projectile with a curse that makes the target hit by the projectile to waste away",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Venomous_Curse"
        },
        {
            id: "CURSE_WITHER_PROJECTILE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABfUlEQVR4nKWRP0gCYRjGnyII2nRqONDgBgOJI0TvJHIKHFwOGlqKiIYW00AhRAm5kEAHrUmI6A8k1ODgEtxiS2fmICJ4w8ElHMdNHjQITTaIcsp5CD3Ly/d87/v7Hr4X+KcWzEw2zPEOt7c3OnfbdXv5JrUzF4ANc3zQT6Wm/bePJmcGWZxnGACCfirFhjl+2l+yGu4TMSG0tQsSl5CQBEAzAMcbk4wBDre31ydOBZIgISkSSIKEyzkcBjCse0mh87P9YpoAAFaUHKMqAIiYICkSAEBECC4nBfG7CbV2wgA4MwV023X7up8agwBAVYZ3ag0A6HGfETCxBeM/BOS0b+S/r118ArM3MaFiqUKLGU9E1qoDWasOhM71QMx4IsVShTbrX5w2AnLat3yUy4/Oq7YN6OxB3pjIEmDU4fE+NL2F83h2Zo8l4P72Cc+vD7jKxucHuBKNwu9dLKrpLQDAJuO0esM8gSvRKNjKj1FNb4H56kYtCVYSM56IsZrpD9Nwjp4aUJciAAAAAElFTkSuQmCC",
            name: "Weakening Curse - Projectiles",
            description: "Target hit by a projectile takes 25% extra projectile damage for a time",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Weakening_Curse_-_Projectiles"
        },
        {
            id: "CURSE_WITHER_EXPLOSION",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABq0lEQVR4nKVQP0gCYRx9RRC1ZUFN1aZJhISk5+JSYUODzhVW0iY6JERxgR1IkEPWJGj0jxzCHByKbGgQP7IbzKRsqEOniyRpilq+hjg78jyC3vLxHu/3fu/3Af9Ek5Jod3OpvsGRV4mXCllNyHA42jv/UOdvkZNyVEs9uakLm8XAAp81fcX1SBYiUxcAW7esWU6kYYc+TiznTgIADn2cvPMENouBtbu5VMNb7G4uFY4lzbeznbQc1dKXGyelH0+0HNVSSQ/HkubfIbUG0s2Z8V3mLV1Bl24VANBmZCDpcp/iCRJ6vJOoFNcAAO88gUMfJ42a1z6xVMhqBiwGmJ7XyAlWGQCY4CfIaXuQwd3PQKmQ1Sg2SGyzY2eZHHfV/T1sFfymt3QFVsFvkjxnmRyX2GbHGrUBAIRjSXMxYPQI4iUVxEtK7rdoMWD0hGNJs5K/7g+sgt/UOhfclHhPxxCq9plNeRPVADmcrmmI1TyWfBsNPaoBu5EDHB3vYX3D9/cA3TIf+thZ9IrVPABgmOlX26HcQLfMhzoS+16xmgdzXfKqJqihGDB65K8SvgC+EKrTTqJBCwAAAABJRU5ErkJggg==",
            name: "Weakening Curse - Explosives",
            description: "Target hit by a projectile takes 25% extra explosion damage for a time",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Weakening_Curse_-_Explosives"
        },
        {
            id: "CURSE_WITHER_MELEE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABL0lEQVR4nGNgoBAwYhMMzG3eLa9j9g7Gf3jllND6ybWuRBkQmNu828PKoBZdfMexC83YDGEhRnNahM9xBgYGSwaG5t3ohjAS0swX5nP806otlrhcwgRjIPuZ/8Ha49g0o6tDMQAZfFQItoxT3oWhGRuAG/DwyikhGPvTuZXHF911s4S5BBkgq2NgQIsF5HCwv99oDhM/qFh/koEBd0yggJnLN1vcaDPJv//iwP/7Lw78P3590v8bbSb5M5dvtsDrBRiwv99ozp7UMwHGlxDUY3gfGDcB2UV4DUAGCSmxDC/eX2KoKO3GqQavAQvmLGZYtnohQ0d3KfEGaFSdmfhzXknBi/eXGBgYGBiMLBXw2YHdBRpVZyYKrl9U8OL9JQbL0w8L8JqAD9xoM8lHprEBAEezhg8XCwYCAAAAAElFTkSuQmCC",
            name: "Weakening Curse - Melee",
            description: "Target hit by a projectile takes 25% extra melee damage for a time",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Weakening_Curse_-_Melee"
        },
        {
            id: "CURSE_WITHER_ELECTRICITY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABdElEQVR4nGNgoBAwYhMMzG3eLa9j9g7Gf3jllND6ybWuRBkQmNu828PKoJaBgYFhz2+x4y6srywZGBgYdhy70IzNECZ0zSymbi4wflC0GQMDAwNDWoTPcRZTN5fA3ObdOF2AbDNfmM/xT6u2WMI0z1oBYWNzCQuMAfHzLwYGBgaGdUtPMQRF+xyPYGJgWPEP1UbksMHwAszfQdFmDDDNn1ZtseQL8zmOrg7DgIdXTgnB/P1p1RbLFf8gLoG5CF0dRhigh4P9/UZz9crTE262mxYcVKw/uee32PE/p3ftwRWdcDBz+WaLG20m+fdfHPh//8WB/8evT/p/o80kf+byzRZ4vQAD9vcbzdmTeibA+BKCegzvA+Mm2N9vNCfKAGSQkBLL8OL9JYaK0m6cavAasGDOYoZlqxcydHSXEm+ARtWZiT/nlRS8eH+JgYGBgcHIUgGfHdhdoFF1ZqLg+kUFL95fYrA8/bAArwn4wI02k3xkGhsAAEK2mkgStz11AAAAAElFTkSuQmCC",
            name: "Weakening Curse - Electricity",
            description: "Target hit by a projectile takes 25% extra electricity damage for a time",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Weakening_Curse_-_Electricity"
        },
        {
            id: "ORBIT_DISCS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvklEQVR4nKVSsQ0DIQy0f4Xoy9dLrzRpMkN2YYGMkAG+iZRBUmYHSyloaNK5RJnBaR7JIIN45RrA9h2HMUADPrC08gAAQy3xfL1Fr7sEfGBZ5hHu6w2WeexyYjrwgUU7iDE+miQiupROjJpMpNoDAIDzaUIj/Om6vQUiuloOJhHJLMsGQ+ObCaQiRER97sGgiIcUTEK4weCxqabfVkPZq/IXjiVh9xDpYbGGqRs+sPjA4pyTtN8t8pcD7aSV/wEMq3rQX8Qy7AAAAABJRU5ErkJggg==",
            name: "Sawblade Orbit",
            description: "Makes four sawblades rotate around a projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Sawblade_Orbit"
        },
        {
            id: "ORBIT_FIREBALLS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoElEQVR4nLWSPQ7DIAyFY9S5A0P3dmHiBDkVnXKLLr1chJTsVSYu8LLElWO5+VPzTfiBnw24qs4kR4+SAg4llxSAoQEA5Oj3m+ToAQAYmm8XJYX3WtVad6Gra5PLkuH11ZIhd5uqL1FSePLaCf0GYNYuJgyPfmbAh4iIZLwFJxLvLLIRTRh5H9NN3u0X+q2c2n/I4NAk8j+fMom7sSbx74x4X2qt7vydggAAAABJRU5ErkJggg==",
            name: "Fireball Orbit",
            description: "Makes four fireballs rotate around a projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Fireball_Orbit"
        },
        {
            id: "ORBIT_NUKES",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABV0lEQVR4nJWTP0vDUBTFf6+IQ0fDE4p1sAodu3UR4mIFV3HJ4ifI0u6iTvkC+Q4B/wyuQpF27ObkVM2gFlK7tODQ5To0KclL6p8DgXBzznnn3XujMBAEAePxGCYPYB1xunUlb6MJAE0XZfJLZsFxHLTW8hxti9ZaenOfoRUwUsc5McBaQQIBOD+8pje32Z04ySeBPySIokiFYUjnpkUYhnRnHt2ZR9NFTdt1vyjFEtN2fV9ESD8fd5YMfGTgIzEnY5K7glK5lGbhZeXpP8bLcjvJe7oHmyIiaaLEKPB4zRgkJBXnXyEqRCkl3EmKiZGKUaCLCt3Sd1sFs1fmFGoAyciqFYvb9wuVrLXWGgaXGUEu3rRd9x/3au7XxtmyD/1+H9u2cRzn1xmTTgAwtAIO1l1688X+mCa5RYLFX+d53sJkFnL/1KLRCCmXy/9LUK1YVE4+MxxzKN9N4o0VTniiRAAAAABJRU5ErkJggg==",
            name: "Nuke Orbit",
            description: "Makes four\u2026 nukes(?!) rotate around a projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Nuke_Orbit"
        },
        {
            id: "ORBIT_LASERS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+UlEQVR4nKVTO47CMBB9g7anYgvkG1AlnGELzhDJ0p4kCpI5SCSfwQgac4M0oaNhoy2SBk4wFMR8rDiJdl9lz8x746fxAAEIqQ23EFKbUN0klHDYX/vzgwJ/gpDaKMsPKHu3oSynY8hNnJXsI85KFlI3vsibBWU5qvJkVp+K7ebwjG8OQH0qtlWezACcOzsry5FvI85K19l4td/u/PES/2RmJiICgCpPVj/MDABEi5XX7/fNAj8K72R3H4PJC3HugkREQmqzXB+xXB/R8ZHqTjXnLTTGtibqJLfJdGiMg55akeALRsMt0+7yj2XaX4GvaX+jXoEhMgDcAJowzVgFnm+5AAAAAElFTkSuQmCC",
            name: "Plasma Beam Orbit",
            description: "Makes four plasma beams rotate around a projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Plasma_Beam_Orbit"
        },
        {
            id: "ORBIT_LARPA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhUlEQVR4nGNgoCX4/////4+7/v8n24CPu/7///8fYsCPq/+nUOyiT2sJGPJp7X8dUg1hIsMhV8i2HUltBjYXiMMCDAb+/0cEIhq4jWIATBEjIyMjMp8YwISkURUmCDOIEQqw6HuJ1TRkv+EC6GGFHgtEByQ+GyhPcbBki5yUyQIUZyZiAAB6jlRfSG8pNgAAAABJRU5ErkJggg==",
            name: "Orbit Larpa",
            description: "Makes four copies of a projectile rotate around it",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Orbit_Larpa"
        },
        {
            id: "CHAIN_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAATklEQVR4nGNgGLTgPxQQUsdED8eQBv7fKIQ7+3+yIkEvoGqeGoSiAZcBWMMHm2J0A3EagM+puAwhGiCHCTY+SQZQ7BqyAKEUOQhTIqkAALLnQp2FSzEMAAAAAElFTkSuQmCC",
            name: "Chain Spell",
            description: "Causes a projectile to cast a copy of itself upon expiring, up to 5 times",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Chain_Spell"
        },
        {
            id: "ARC_ELECTRIC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAd0lEQVR4nLVSOwqAMAx9iuAtu3ui7q238ACu9TiFlDgEilQbjOAbMiTvRynwAczMzM0yJnokDyIAsB4FwLaXsMyGtJio592F81m5TvcEAMGUYKsk7EajlazUVzlXJ+dzTCTTYCEk57P+dN2eAEaDzoT6335LqDgBC+lFNFlDYioAAAAASUVORK5CYII=",
            name: "Electric Arc",
            description: "Creates arcs of lightning between projectiles (requires 2 projectile spells)",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Electric_Arc"
        },
        {
            id: "ARC_FIRE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAoklEQVR4nGNgIAP8////////DAwM5wzkCSpmgrPOGcjLhUkS1MbEwMDAyMh43lBBc7kPRMjowkOiHPamzeL79ew3bRZv2izgIvic9GjVcwYGBu5AY7iISNUJwvacM5D/fj0b4g1iwgChB+42orSdM5CHeAlTiglTiAEpoCCWYPU9FgCxBM1J2G2AAEi4aS73Ic0eiH+IDTG4Hnh6IxaQrAEOAOusT6on2KrLAAAAAElFTkSuQmCC",
            name: "Fire Arc",
            description: "Creates arcs of fire between projectiles (requires 2 projectile spells)",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Fire_Arc"
        },
        {
            id: "ARC_GUNPOWDER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAxUlEQVR4nGNgIAP8////////EPaHShP8ipngrO/n4z9UmrCHaePXxsTAwMDIyPixypRFwQKuWqD9DFwFTs2/30///X46RPr7+XgC3oC45/v5+N/vp0NUQ0Swq4ZLIGtDU41FM7I2ZOd9qDRBVo0IJbhHf666+ufBCQYGBvYwbYjzIIGBz20QNsQ/8AAgEEUQpfAwgKtmwqOH03DhnwcnWBQs4BGKXQPEME7DhXD/sIdp/1x1FZ970Bz9odIEOb0RBUjWAAcAUy2GP5JQHTMAAAAASUVORK5CYII=",
            name: "Gunpowder Arc",
            description: "Creates arcs of gunpowder between projectiles (requires 2 projectile spells)",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Gunpowder_Arc"
        },
        {
            id: "ARC_POISON",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAsElEQVR4nGNgIAP8////////RCpmgrOqteuJ1cDIyFij0yAjI0OMHqgNdx7cePLkCTF6oBpWfl3JwMBApB4oCOcOh5DT3WdD2PhsgFuioqBx4MgeBxsXXPYwYQqt/LoSj9sYcVldrV0vIyPz5MmT1quN+GxAdv2BI3tkZGTQ/IOuAeITBgaGOw9uQNzmYOOCrAenk+AWqihoYHUbFqUMsPRSrV1PUnpjCOcOJ00DMgAANQNS4IXldP0AAAAASUVORK5CYII=",
            name: "Poison Arc",
            description: "Creates arcs of poison between projectiles (requires 2 projectile spells)",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Poison_Arc"
        },
        {
            id: "CRUMBLING_EARTH_PROJECTILE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAp0lEQVR4nGNgoBAw4pKY7m38H5t45tazKHowDIBp3HHmAVaDPUwUUAxhQte848wDvJp3nHmA4jomdM24AEwzuiFMOHVgARtfvmXM3HqWEdkbBA3wMFHAEMMZBvicjawJaxhg04zuXJhm9IBkQJb0Fxf+7y8u/B9XOkB3AU5DYIqmexvjNQyvDfhchDUaYYLoyRUbwFCD7nRkcWQxgv7HpxCXJSQBdM0AHrB8Ia2hIdUAAAAASUVORK5CYII=",
            name: "Earthquake shot",
            description: "Makes a projectile crumble the earth it hits",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Earthquake_Shot"
        },
        {
            id: "X_RAY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAA8klEQVR4nI1RsQ3CMBC8R9DTEBZAYgEERNAgZQQGYAN6Qgk0FIgNGIANsJSGKBHKBmGBkCZ9EKYwMs4bAScX/++7f9+bYCHwIx1P1i67rdvsvViZKdOQzR7B63lDAImIQ4i5t7TnvNjbwS7wozKVUj6kfJSp1MXKBJWPZ0MA9Y5kje5XAnA+xMoSmRMSEQNQ71HQFf2qiukQonGTEO/K5XYqHerh3aIiyIq87bRCU+FQVuQ/tsQ8sC3V2DXrx9IPCPzI7fb1MRf6eQKAdrPFAhOkG6tgcZybvKzIN9O9ipWT18cxng2lnKxd+odtasi29R1P1Vd7Cm4Tm4YAAAAASUVORK5CYII=",
            name: "All-seeing eye",
            description: "See into the unexplored. But not everywhere...",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/All-Seeing_Eye"
        },
        {
            id: "UNSTABLE_GUNPOWDER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGklEQVR4nI2SoU4DQRCGv70geiF9AJIKBAIPooJ6EsS9QEUFD4DsPcEhcdiKSsw5BO4qTvAAiBMIkktFFWkWQTKIZcv2drfcbzazs//sP/+MIoDP4liG+VY93lzI8+t76AkA5XqjVCyp20IAFrdPHCqSRDNNHU258BToKpN0UiqA/1oIKrBki+vLUwCWd1/9FMCfiTY+pCTowTDfKl1lAqal2Xy0U9JLgYWuMuFsbIKmZnH/4U0kARARCZ078i9m85HnxRGAUmYfuidNbYrs/T7wFcSQTkplydOrt+CbBIzr7qUb25+nD4MuF+iYqNtC0pO81/i8FnRbiLu+VkVsfEEF3QWyRb9XL9EW9kx0yQCWvFydB8nleqN+APVNiiQSfNisAAAAAElFTkSuQmCC",
            name: "Firecrackers",
            description: "Makes a projectile release firecrackers when it disappears",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Firecrackers"
        },
        {
            id: "ACID_TRAIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqUlEQVR4nO2QsQ3CMBBFv7MCsuis7OAMEcmSmSNpPAuV56BAyhBmB4uOghk+1UVOopAgQcdvzjr7vTsZ+Oe3CdHQ95q+1wzRUHokuQqU1feapUhg6W9OLyW7Hs/PH+dr8Pwv3kXtHRCdZXe9qejsRDoRhGh47u4LaXSWQ8pomxpDypO7qjQKXK4uMIAFDADVkDJEIlVEJbwWBQCn44GyXtvU4+UWfHk81Quee2YPnRAtbQAAAABJRU5ErkJggg==",
            name: "Acid trail",
            description: "Gives a projectile a trail of acid",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Acid_Trail"
        },
        {
            id: "POISON_TRAIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAVUlEQVR4nGNgGIGAEavorYwNJ2/dZGBgMFdTV5sRcCtjg+p0f0ZGRnRFcHKxUyeEvdip81bGhv///0NEsANkPfhUEFCERxtpqpF9Qm1Apqmk+ZsmAACa+Cn54+lYFQAAAABJRU5ErkJggg==",
            name: "Poison trail",
            description: "Gives a projectile a trail of poison",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Poison_Trail"
        },
        {
            id: "OIL_TRAIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnklEQVR4nO2RvQ2CUBSFv2v1wgBOwBja6gbQ8DMENRW17kB8S7gLEziAoTtWJKA8xFjY+CW3uj/n5B748zUGIGm2maZ7ORcBEMdb6vpigLyvyPOzAWyeFwDK8igA5yLa9mp9f6frbjRNLu8rsuw0VZL0UkVxkCSSZKe5/oTx0LD4rmYdhNRWHRgrD4eW3KxKYQkzI5jCx4QSWP2Dn/IAjanZ2ORNifQAAAAASUVORK5CYII=",
            name: "Oil trail",
            description: "Gives a projectile a trail of oil",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Oil_Trail"
        },
        {
            id: "WATER_TRAIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVR4nGP8//8/AyWAiSLdw8MAFnySjP6T/zNwCkE48lYM/zsVGRkYGP6LT2ZgeJnLwIjhAkb/yf8ZGBgYGCOWQqKGU4jh/4poRobv7xgYHh5jYCy/D9OMAP///8eKGcKX/P///z8Dg9+k/7jU/P//H2IAsiKYRmIxKoeAbXgNQLYZZhAxrmGkalKGxQJJAF8MEIOp6wVyAAC4ZwVmCuDexgAAAABJRU5ErkJggg==",
            name: "Water trail",
            description: "Gives a projectile a trail of water",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Water_Trail"
        },
        {
            id: "GUNPOWDER_TRAIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPUlEQVR4nN2SoW6EQBCGv72tRJFgSAgSAZInqMAge0lFn6GvUNE3OXGCJk3OYE70CdaVE0hCgiFBrd1MBQeGnMJ15Gzmn+//Z5WIsKcOu6b/h8ATwM/HC9ebo0g1U+dIyoi27gEEwI/nvh9rFWShjM3A8+e3WgmuN0fuwdQ58WPNuerFjzUASRmpRRSQtu4JsnAlUCLC79c7bd2TlBFjMwAQZKGcq14VqZZl20MLYzNIUkaqrXuMRXIPBYO6Uz0c3hD4sZapc8pYyL3ZO7Dmcq56cm8ePJ4urBmMzYCxyLKtSLUYO9u4h8fYDLy9RqvoUodlQ5FqZezcvN6cKlLNueqVsfN7kIWMzcDUuW0GxkI+iwig8s4xdW7F9WO9hgzDlqBINXdkNXUOY5Hj6YIfa5IyWjNYCDZn3FO7v/Ify8qpr050n6gAAAAASUVORK5CYII=",
            name: "Gunpowder trail",
            description: "Gives a projectile a trail of gunpowder",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Gunpowder_Trail"
        },
        {
            id: "FIRE_TRAIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAPElEQVR4nGNgGH7g+27nwWD214kuaNq+368mXzNRqiGM7/erIYyvE13+//+PUxvcPXBt////p2XoDX4AAFxkJY4qlL0mAAAAAElFTkSuQmCC",
            name: "Fire trail",
            description: "Gives a projectile a trail of fiery particles",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Fire_Trail"
        },
        {
            id: "BURN_TRAIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAhklEQVR4nGNgoAr4Gi+PS4qJoAo8UgjwY1kGARuwGonVbCasSpEtQdOGxQZmd088bsPnaaYOLD5hgVDcCx8iG/nfkVCwIjsGrppx/0OIILL9WPyABv7u3A63H13D353b4WyI8QScBDEJohTuMGTjsTgJbglEG7KdUHFMS7/Gy0N8j+Z6MgEAHEQ4ceIXKn8AAAAASUVORK5CYII=",
            name: "Burning trail",
            description: "Gives a projectile a tail of fire",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Burning_Trail"
        },
        {
            id: "TORCH",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAmUlEQVR4nGNgoAq4bsZHHYMI2IDVHhasGuT8Fa8z3McqxYTHHjl/RaJsuG7GxxRkIwdja576RNiGf+uOcFVdYAqywbQEiwY5f0WmIBsGBgYOjSmYslg0MAXZYFWKU8O/dUdwqcaugYGB4ceNHAjJXX0RTYoRjX94ug8DA4OJgzwDAwOn5lQ8VjEwMDDMbwgqiLIkoIhM1cQDADDzI0HuVTeIAAAAAElFTkSuQmCC",
            name: "Torch",
            description: "Lights your wand right up!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAqklEQVR4nGP8//8/AzUBE1VNY2BgYIEx0ieVMuyet6mBgYGhngxzGu9duNnAwMDAwAjzsqSSDNmGcfJx19+7cJMRxYWcfNz13z99ZWBgYGD0K4gk2rRNE5ajRALtwhAb2D1vE0451yQ/0g3EpQkfoLqXRw0cNZAMgJKwOfm4G79/+vp/04TlpJrTiGHg909fGzn5uOs5+bhJMun7p6+N3z99bYDxGQd9iQ0AoiczZoxCV3EAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Torch"
        },
        {
            id: "TORCH_ELECTRIC",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjElEQVR4nLVQsRGAIAzMWuxgZekUDkDhFpYWjOIwdKzwFlzuYkiAQr97+M/nQ/QHYgEkDynD0347VIs0gPrf1bHISgCAWIBhJR6it7PeG4SUwdBcJps1YqkrykTL7CZrLodMdfeqSEwPIKrH5HTJrY0b3OeCfQvm8bje0CxN8r9rvo71ZWZMHdAz/4oHaw3X2ycbymAAAAAASUVORK5CYII=",
            name: "Electric Torch",
            description: "Gives your wand a bright but very dangerous light!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAqklEQVR4nGP8//8/AzUBE1VNY2BgYIEx0ieVMuyet6mBgYGhngxzGu9duNnAwMDAwAjzsqSSDNmGcfJx19+7cJMRxYWcfNz13z99ZWBgYGD0K4gk2rRNE5ajRALtwhAb2D1vE0451yQ/0g3EpQkfoLqXRw0cNZAMgJKwOfm4G79/+vp/04TlpJrTiGHg909fGzn5uOs5+bhJMun7p6+N3z99bYDxGQd9iQ0AoiczZoxCV3EAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Electric_Torch"
        },
        {
            id: "ENERGY_SHIELD",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAq0lEQVR4nKVTwQ3DIAy8WB4hG1RIGYUHQzBah8iDUSJF3SAjoLSPlIgYQ1NxP/Dd2cABdGKoFcIrvvO1fbDK5ZpwXqO6L41YkpJw2fYA4PkteSDaxMlNBikWQgk/jWSd4XMSUkg1sVojpXsTy7aHeY3nncgJWt1VjnaEvyAN/A3NhUPA8bbOMKaR7C/1nVdoTVHULqlqBSlNl3cvDJIJUEbZmSO0Msrdn6kbH3CWWxALCFpfAAAAAElFTkSuQmCC",
            name: "Energy shield",
            description: "Deflects incoming projectiles",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAqklEQVR4nGP8//8/AzUBE1VNY2BgYIEx0ieVMuyet6mBgYGhngxzGu9duNnAwMDAwAjzsqSSDNmGcfJx19+7cJMRxYWcfNz13z99ZWBgYGD0K4gk2rRNE5ajRALtwhAb2D1vE0451yQ/0g3EpQkfoLqXRw0cNZAMgJKwOfm4G79/+vp/04TlpJrTiGHg909fGzn5uOs5+bhJMun7p6+N3z99bYDxGQd9iQ0AoiczZoxCV3EAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Energy_Shield"
        },
        {
            id: "ENERGY_SHIELD_SECTOR",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVR4nGNgoBAwogu4LPkWriHCtMJHlYWBgYGBwUOZBUMNXgOQDElgYGDwIGQQTtNdlnwLZ2BgYNAQYVrBwMDA4KPKgtUQvM6DGcLAwJCgIcLkgc0QJnwGIIEFuCTwGrAnhmsljH3jzb8dW27/Ydhx989/clyA0xWkGIAVkGJAAskGIMUCA6WxgNV2BgZaJSSKkjKpmYliAAD+Xy0WhOiveQAAAABJRU5ErkJggg==",
            name: "Energy shield sector",
            description: "Deflects incoming projectiles",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAqklEQVR4nGP8//8/AzUBE1VNY2BgYIEx0ieVMuyet6mBgYGhngxzGu9duNnAwMDAwAjzsqSSDNmGcfJx19+7cJMRxYWcfNz13z99ZWBgYGD0K4gk2rRNE5ajRALtwhAb2D1vE0451yQ/0g3EpQkfoLqXRw0cNZAMgJKwOfm4G79/+vp/04TlpJrTiGHg909fGzn5uOs5+bhJMun7p6+N3z99bYDxGQd9iQ0AoiczZoxCV3EAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Energy_Shield_Sector"
        },
        {
            id: "ENERGY_SHIELD_SHOT",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6ElEQVR4nMWTPQrCQBCFv1kWvUBuIEKu4AHEFFY2tmJv503sBMHGwt4iFt4jEHKDtCLCkrXJBI0JES2cZpbZfe/N34r3nl/M/IQGLICIABBnDoBT6l4eJXnBetTz0cCKxjRzq4E4cxUwyYu60PKUOuLMvZBUJSg4yYsm8Ba4JnkRK8kbQYddSr9vujRApd5iRz00ZWEBNpN+G9gDjA83AeZlFtFbBvqwwXeaBVid71KWoB2u+3npF3UCAzAdWsKgtZ8KJgxMNB1ankf5yRRmbeoA4r1HRDoXKQzM7lldN7EigO9WWf7+Gx/bKnlRewUGIQAAAABJRU5ErkJggg==",
            name: "Projectile energy shield",
            description: "Gives a projectile a shield that deflects other projectiles",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Projectile_Energy_Shield"
        },
        {
            id: "TINY_GHOST",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqUlEQVR4nK1TOw7CMAx9rjgKEhNTLtEl7OSAZA9LLtGpU6XeJSw0clxbrQhviu33nvxpqZSCHgxd6n8YXKzC6z3x2Sh4d74DIQaAouR0A4to1QZBqO+cIgBgXeYmPuwAAAHA+Hg2SRmrBtqirre7Ktywu0Lwro7C27Y6MM+YU2xEMt5A/FP+bpkA1OS6zM0YwTviBtoSm1NxcU6RJFka7Ai8djjCL+j+mT61qj8p0iQScgAAAABJRU5ErkJggg==",
            name: "Summon Tiny Ghost",
            description: "Summons a tiny ethereal being to your help. It may cast stronger spells depending on how much damage you have suffered.",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAqklEQVR4nGP8//8/AzUBE1VNY2BgYIEx0ieVMuyet6mBgYGhngxzGu9duNnAwMDAwAjzsqSSDNmGcfJx19+7cJMRxYWcfNz13z99ZWBgYGD0K4gk2rRNE5ajRALtwhAb2D1vE0451yQ/0g3EpQkfoLqXRw0cNZAMgJKwOfm4G79/+vp/04TlpJrTiGHg909fGzn5uOs5+bhJMun7p6+N3z99bYDxGQd9iQ0AoiczZoxCV3EAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Tiny_Ghost"
        },
        {
            id: "OCARINA_A",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAVElEQVR4nM1SQQ7AMAgiS///DHwmPfXSuEXqoeOGERQj8FuQVMtAUsngaU1xDaxYWYRqrLR58b1uRTje4G0bABiVCRHxyVOxdfG9+egLSWrBFl/FBL5RTWNEgzIOAAAAAElFTkSuQmCC",
            name: "Ocarina - note A",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Ocarina_-_Note_A"
        },
        {
            id: "OCARINA_B",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAX0lEQVR4nM1SQQ7AMAjSZa/0gfhMeurScZltl2ycNAEFo9lvAYBbA0iWBhxbW8zsrJA0TkT4o2iMoHHGvuRARe7+noOlI2bmVd+s6KZutXREFU89kpKXvhAAO6bFn6IB8CtIkFvVtPkAAAAASUVORK5CYII=",
            name: "Ocarina - note B",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Ocarina_-_Note_B"
        },
        {
            id: "OCARINA_C",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAV0lEQVR4nM2SQQoAIQwDZf//jvSZsyfBLa5EBTG3ghmb0FKulSS2AIAFeLZ+mQFIAsCO1kbIJgvSAkZ9nOkgIj7zbwSSsmlYYs/gbNd9vHSFdUX3Au/RCzRzWRbD3sJJAAAAAElFTkSuQmCC",
            name: "Ocarina - note C",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Ocarina_-_Note_C"
        },
        {
            id: "OCARINA_D",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAW0lEQVR4nM2SUQrAMAhD6+j9jxGPmX21ZELBWhjNl6I+IdratQLAIwDJFOA52pIFAOBQmqzNGqe9WQFi/o8HKgA0Mxt51+LKJHefNR3+KA5vPVJsLn1h6dZX6AWCaU1eXKx8IwAAAABJRU5ErkJggg==",
            name: "Ocarina - note D",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Ocarina_-_Note_D"
        },
        {
            id: "OCARINA_E",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWUlEQVR4nM2SQQ6AQAgDwfj/Z5Rn1mvdZLW7HLRHAgMFIn4rAGwBSFqAo9XFBQCgyrKnFp7s2BZmnU8XkJnZmmCmG0AXpfGqitcljkVLjzQmb32h3nq5+FNdE45cQWWOao4AAAAASUVORK5CYII=",
            name: "Ocarina - note E",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Ocarina_-_Note_E"
        },
        {
            id: "OCARINA_F",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAVklEQVR4nM2SQQ7AIAgExfT/z1ieuV6pCXWVg90zDEygtd8GAEsAkhKgl6aoAACMkfSiwpeOrJBNflSAmVlpgyyvDTJXd1+T5uatR5qLj74w3nq7+WoGsA5FZjhk+UkAAAAASUVORK5CYII=",
            name: "Ocarina - note F",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Ocarina_-_Note_F"
        },
        {
            id: "OCARINA_GSHARP",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaUlEQVR4nM1SQQrAMAjTsS/1bf1RPtNHZadAV1pW52HLJSgmUdDstwDAlAHJLYMjlbJr0FqjNhr5fBKTpLu7mVmtlTLs66Ww51U/dEJqgxX7TCTodiWWUm7z00Qh9Ejj8KsvBEAhLP4UFwmpdY2eDIHzAAAAAElFTkSuQmCC",
            name: "Ocarina - note G#",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Ocarina_-_Note_G#"
        },
        {
            id: "OCARINA_A2",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYUlEQVR4nM2SMQ7AMAgDTdX/PwOeSSdLEUlbpxlSLwzgQxYAv5W75xIgMyXAsbRFBdQ4UjxGqJXm14h3gNqXIozMZmYygMPVDADn0yYAiIiucq4FdeapR/p0phGEmjZv1QXyAmFA2yvrQQAAAABJRU5ErkJggg==",
            name: "Ocarina - note A2",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Ocarina_-_Note_A2"
        },
        {
            id: "KANTELE_A",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZUlEQVR4nGNgGLRgZ2vcf2LUMeGSMHcyI8oinAYQC0gyAJu3SDKAWG8xMDAwMHw4PuU/Nj66OEkuQNdMtGJcrmFgYGBgIcaGk/tO4eVj1UxsQsKqmBTNjMiaYNEkYJnDiFPHoAMA0m00scdNpZQAAAAASUVORK5CYII=",
            name: "Kantele - note A",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Kantele_-_Note_A"
        },
        {
            id: "KANTELE_D",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbUlEQVR4nGNgGLRgZ2vcf2LUMeGSMHcyI8oinAYQC1iIUbSzNe4/zEUCljmMRJn84fiU/9jY6GFDshfcqxcxIhtIcRiQbMDO1rj/yOGAEojITkMGJ/edgsvhDER0zcQmJKyKSdEMdw5ZcT0oAAAotTFDkgDApAAAAABJRU5ErkJggg==",
            name: "Kantele - note D",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Kantele_-_Note_D"
        },
        {
            id: "KANTELE_DIS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlElEQVR4nGNgGLRgZ2vcf2LUMeGSMHcyI8oinAYQCwgasH9C3v8Px6fAvQNjw2gWQgYYmqsxCFjmMH44PuX/hlW7GBgYEOGzoNDvP0leSOjfxMjAwMDgXr2IEcYnyYAFhX7/qe4CRmQFyIHFwMDAIGCZw7h/Qt5/WDjgNR1dM7EJCatiUjTDnbWzNe4/LPURdO6gAgAb/kNWumUvSQAAAABJRU5ErkJggg==",
            name: "Kantele - note D#",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Kantele_-_Note_D#"
        },
        {
            id: "KANTELE_E",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdklEQVR4nGNgGLRgZ2vcf2LUMeGSMHcyI8oinAYQC1iIUbSzNe4/sotO7jvF4F69iJFoA8ydzBgELHMYsckR7YUPx6f8xxawRLmAgYGBchfgAigu+HB8Cta4P7nvFIocciDi1ExsQsKqmBTNcGcgxzWuABucAAAA1S4aax8+1AAAAABJRU5ErkJggg==",
            name: "Kantele - note E",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Kantele_-_Note_E"
        },
        {
            id: "KANTELE_G",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeElEQVR4nGNgGLRgZ2vcf2LUMeGSMHcyI8oinAYQC4g2YGdr3P8Px6f8J9ZrDB+OT4ErRNdElCHIBiCz0QELUc5BshkWuAKWOYwMDESGwcl9pxgYGBgY3KsXMcI0wgAKB92pyIqx2Y4C0DUTHdrYFJOimXgnDloAAJ/GOnSuZotLAAAAAElFTkSuQmCC",
            name: "Kantele - note G",
            description: "Music for your ears!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Kantele_-_Note_G"
        },
        {
            id: "RANDOM_SPELL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7klEQVR4nJ2SMW7CQBRER1GKXCInyAHwLeKaNlVOMXZDEdHTRC6NlOpTpCCFRUExXIAz5ApUn4Y1a2eXAE9yYVnz/l/PAhHsZLgXdjJ39yD5oIzt6dH3QCw26UFx2EcEidiYu3tWskmEz5JZL7kqvBBtIVpKEniMX56wBzABAPzsqtV7UZcA8KtnqyZvrwDwgkNy+OAHrcV+CvU52OAr+vYvoZmAuky45d/+bwq7u48lnJ8FavJrP0zrolxWu9W0LsqrjzZqIktLmTicTs0sVWdPaKCN7kRKkg27u69FE7eRIHPzLm0AAOLWbgrfwxFiLR8oPxbwLAAAAABJRU5ErkJggg==",
            name: "Random spell",
            description: "Casts a spell, any spell, at random!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Random_Spell"
        },
        {
            id: "RANDOM_PROJECTILE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABB0lEQVR4nLWSsUoDQRCGf67yISwsAgZs7MwD2KUwz5BUPkMOhjQWNiltJOXVC8HimiMQwbERKxFyEK18hlS/RXaSzeaSC0p+WBh29/9md2YALynU4a+SQh1JGkQydZKpE32qhKqMtvfNfC9LmEn0zsVmkqyETLw5V3EPfu2CWJyEByf4WMW3rUHH4gssNhK1Bt0OdilXWdFFH5fPLdZ7B8sK+z/zSH7q7iYAkEk0A2+4AgB847U2W+YrH0O2oHWQKmjYrvG8TZKcsc+DoCrPbjg9pxlDhZAkNlobX657N43TBppnlyiRokQKACiR4vPrvTpr7icvnAUAsJfM2Od43t7/hdh8dP0CnRvUfzuFLeIAAAAASUVORK5CYII=",
            name: "Random projectile spell",
            description: "Casts one random projectile spell",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoUlEQVR4nO3UsQ3DIBAF0E+U6jbA42QWT0CNBae49gRpLXkolJYNriUVBUpsBUSkFP4VCPHEHQiVUkLPXLpqAK558Nw2TNZ6AK7B4TUEDwAql3wbhmZME7k1BFWcUBO5KAIA6rEsX2ujMcUl/K6HnzJZu7t2n+d6cG/TUbqXfIIn2JDiYWsijiJpNKbW4TcwirAmcpqoSooiHEV8nqu//7FfVnQzUETyGIMAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Random_Projectile_Spell"
        },
        {
            id: "RANDOM_MODIFIER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMklEQVR4nKWSsUoDQRCG51L5LkLapNQypLjkFSRFbPMAO6SRxRewkSAsXGGTTREkzWlhsZVwHFhcSBW28AmC1W9xN+d5uYOoPxzMzsz/7TB7RIU4dpb+Ko6dBQCBcOQsR86yWzdCHS+O82K+5RwmYndj62YAaIS8FOaNY3tXfG0QiTvVwhm9l/F1fz6S+Jw+f1zUn1+NqE0bxyWd3X0+bvydO1my2H+ZtdYwxkDys+kE9d4OEVHEtX/gjXpERBeHw8p7T1prhMMBdntftiRJksOiYvN1SPU8m04QDgfIlEKmFIwxyJRCY3MV6nhhxSymujlo24PjV/v48RDu9p5W66dAdtHbbsmnKV0ul0G5g6rkGatmqXW7XfJp2nZnbgYAGVvyMvbzeHz0Co2QttpJgN/qC98u9h29XyEbAAAAAElFTkSuQmCC",
            name: "Random modifier spell",
            description: "Casts one random modifier spell",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Random_Modifier_Spell"
        },
        {
            id: "RANDOM_STATIC_PROJECTILE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIUlEQVR4nK1SoU7EQBB9RxDwDcUWgy5UkSAIBlF9aoMhKD5hqEHcD2DIBUGqF4G4NGkwl8wZJB7FJzSoh7jdvW1pEwK8ZJKZ2X1vZ2cGcJBGLX4LadSSpBeRSq1UakWfB0VV5t/znjyTtZiH6K3tk0lyUOTFkRcq9s7ZmIj3t+KDHbwF/yovC+8f4LPzUF5eFBjDQiWoi96vy202uR/DN/Zv5Ll8AICpW8YW390GgErUTsu8CNlXHOEEwDtWpm65NMedB0zd8uF0dwJPJslKuotUiVpTt0yTjGmSUS4fg58mWbeSITJJxgKx+TPAjbFTvotXN8snAJieX2/yzt/fOxxvYDzG/hdIhq/0mxnIfhPHRPrkyZDIWbSFXiSOwwT+A1+kEv14F+43zgAAAABJRU5ErkJggg==",
            name: "Random static projectile spell",
            description: "Casts one random static projectile spell",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Random_Static_Projectile_Spell"
        },
        {
            id: "DRAW_RANDOM",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2klEQVR4nKWSoQ7CMBCG/ywI3mUPAI+xZ8Ah9gyXGQQSgyGT1TWImQWBOAxqwaN4BjJxiLWj69pksD9pcnfN//VyV8CIatb4V1SzFhGxEFKsSbEmPgehTOW4bs176mBWxDvtm0VEgpCLMVdM+mhODGLjxL1Y4tHH23WR2TjFe/DQuthkiKli6unEp67d+lubLDvYeeaSXv5d2+Ti5gkAKPL+wB0rAMATN9+8SA9DojKT9yF+3jZ5v9pRyyFzaNdRQEhMV+3XJgHcNf4MqMzPi0FmdeAO0V/lLH0ASJ3dxHP9DwkAAAAASUVORK5CYII=",
            name: "Copy random spell",
            description: "Casts a random spell among the spells in your wand",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Copy_Random_Spell"
        },
        {
            id: "DRAW_RANDOM_X3",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5klEQVR4nKWSLQ4CMRCFH6u4Cwdgj7FHIDgkJ5hgEIhaDFlZXYPYkGwQiMEgSZAozoAaBJ2ytNuEn5c0mUz7vr5MC3hRyw6/ilp2IiIKIcuOLDvibS+UqU77al7RE6YiXrrYLCLSC9l7c8Pk1n7lIFoX3Y0hzqGelYtK6xHubxeVi2mFnBqmQCfePOO2r97H0sH+Z67p1u2HyRoj2isAwFL0B04YAwCuOAazMTLwwnyOALF+8jEkgcZJOimSwwrVQyIiWXNOTAcXmz+CdJ9RzTFEZ9lr1p8Y710mk93XCZLoxiTP+Lcez0bwhTDFCbAAAAAASUVORK5CYII=",
            name: "Copy random spell thrice",
            description: "Casts a random spell among the spells in your wand three times!",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Copy_Random_Spell_Thrice"
        },
        {
            id: "DRAW_3_RANDOM",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5UlEQVR4nKWSIQ4CMRBFfwkk3AU8HIMz4BCcYbIGgQSBIcjVNYg1GwRiMCiCR3EGgvgI2qVsu4TAT5pMpv1vJjMFnKRUi18lpVqS9BDJ1UquVnSbhKps4rw3z+UJ8xKd2bqZJJOQnTMXKnblThPEx63wootzFU+G2cjHPdzeCg2z8QhNKlQquuj62W75yn0tP9j/zBu5hvn7aUqSvJ+m9LkWAORS+wNHDAAAFxxCc6e/NMYY0+4tUEFyN/k6JIIGqncRPfbQ1K4jc5NU9t93ECpc4ycAyRhQuJ+XgoQVf+4gtca/9QCS+uH/ckGWuAAAAABJRU5ErkJggg==",
            name: "Copy three random spells",
            description: "Casts three random spells among the spells in your wand",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Copy_Three_Random_Spells"
        },
        {
            id: "ALL_NUKES",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA30lEQVR4nLWSLQ7CQBBG3yQNopJmRRPwOByyKEiwuDU9QcMVkL0AnAGDweKoBIVCkdQQDCiSCkwRkA2EluUnjN2db968DPxYArAckQPUfI/pbigc5+B1UUqhtX4Z4ADspSdZNcy3Z1CKPNnUCRoKrbV8RACw9Sa0KxGL8wjAGuIAtCIkjuNryClltu7QbKa4rvsZQc338PuHh6bVWF76sU6YjXtk1dCsmCQJQRCY1awBNj+OLcDm522CIj8iglP08V5WKxrcmo6F80xA2THZKM3jt8dkCL49pieCMll/qwu25G/9AZYOIQAAAABJRU5ErkJggg==",
            name: "Spells to nukes",
            description: "Transforms every projectile currently in the air into a nuke; not a good idea",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Spells_To_Nukes"
        },
        {
            id: "ALL_DISCS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4ElEQVR4nJ2TIRKDMBBFX5ieAUUHU1MThWJ6A86A50h4zsANOihUDKaGAcUlUrVpBihNWZXZzd9kX34AqJvWmmGy3pq/o25au24UolN109o803S9YZwX0iQGIM80+n5VvxpEVVkoES+vJ+O8AASJASK5cprExLcHaRKTZ3ozghkmlzPDZF19ndyb/WiP8jdVZaHMMNmuN1Rl4WqSAxwn4RY0pxwgnGTUqizUJVScZxowwMO9lPA7hrRqtOuVUJB7JlMi/AbJh7kXEXxM45spROwaCCTfTBtIIXH2QznxGeEb8GHpNiCxiUIAAAAASUVORK5CYII=",
            name: "Spells to giga sawblades",
            description: "Transforms every projectile currently in the air into a giant sawblade",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Spells_To_Giga_Sawblades"
        },
        {
            id: "ALL_ROCKETS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABa0lEQVR4nK2SzytEURzFP9/x/F6JaRbUlNBseOTHRqYXYyHKzmrK5i3YobFmRzRba+vZTiywmFIiqcFfMEoULxTjIb4WE83E8yhndbv3nnPPOfcL/4GH1Zg6VhDHCv6ZGwBwN47F6GyiatRUN7uCqv5awHCsoBqtIamY7FCA1+0tdUOvqKqIiL9AfeZKHFBj5xyAmsT2x5kCnwrtaz2aSeUEoD5zVRqhatSUQKwR6Q6Le7nM2/OZFJMBMqmcGJ1NWBPhkpgBgNr5HfKzm7ydXQNIWWWYYvuRxIgarSHm7Cfti+bp3Uvp/q2tqop/yCKR8uaC9ZPpw9IIfkSAo9CL9EXzHERM2b+1v40JQHpRPWcikhjR+/VxHi+WvF90rCB3M12kF1Xd7IpvtBILybiqXd0uOfNUAXLX0D8IdQN4zsSX3WRcta2lsB5bKLroofBZYjJe+Ngpc1jCDTAUteVmF++yfkIyrv5l/RfeAfv1kLFHZka+AAAAAElFTkSuQmCC",
            name: "Spells to magic missiles",
            description: "Transforms every projectile currently in the air into a magic missile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Spells_To_Magic_Missiles"
        },
        {
            id: "ALL_DEATHCROSSES",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPElEQVR4nJWSvUvDUBTFTxJFYq24CF0stGvp4uYQcAxF/4dQyV6nbvVjlA4WsgazZs7w1lqhuBcHlxQ6FewgfTEqml6np0kqbfLb3uN+nHM5OLoJAACGx2F4vAEA4i8X7UGAVt+nvH2S4XFsbnzi63vrQqspndFkKr/yfck5LWYaIANoFNQ53Z3sXDYrqlwvlxZ7xRcSdoA/S4bHYTp6L/73i+2Hke2H0Sob7UEAlyyWUCAmPT6HymgylW+Pq1K60fA4TDbDoeawA3zoQ+qS4fHlDXHZcUxH77lksSF1SeCSxYSdzIghaRtrETZNNlu6wb+F8VClySQ7T6gSFxehKqhzqpdLi4en6BrA1apQyal3QzQ3K6qs1ZROOlSZaPV9IiKy/TBaV5tQII749r4rnd+PcVbdVnJtjpNV9g8e3qm7Lc66WgAAAABJRU5ErkJggg==",
            name: "Spells to death crosses",
            description: "Transforms every projectile currently in the air into a death cross",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Spells_To_Death_Crosses"
        },
        {
            id: "ALL_BLACKHOLES",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA80lEQVR4nLWSoU7EQBCGP8hJNKKtbS2qlTwBchWGOs7xBBtIeIJzaxCXHFXIurqTfYTqbp+gSeUgYDdtLzmWEH61mezM7vdl4I+5AFDaANir24cIYDzuh4/XbRw8RWlj0ziXNM5FRCSNc1Ha2JDeSwD38v3dE1lSMK8FDXDNVb3z59Bs4Iu5qt+irm/JkoKq3nFzPQ7uUpAjpY0tm0nKZjrhV9rY58eDOE+/cQRA2Uyyllw2kywchCZLioWjTQjneNwPQNT1LS/b9xNHnnP+xTXnOUeecy3KcZ7LwsF8D7q+DTAyG/DN6RcqSwpfC86PnP+RT3SjqTUfm23DAAAAAElFTkSuQmCC",
            name: "Spells to black holes",
            description: "Transforms every projectile currently in the air into a black hole",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Spells_To_Black_Holes"
        },
        {
            id: "ALL_ACID",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtUlEQVR4nGNgQAK2fVr/GUgETMgcDQNWUvWjGqCrpEW+Aan79P8j07gAujeZ0BUQcgW6N5lgtsI02ssk4XUFugUoLrCXScLrCmzeZGFgYGCY7XSRMXUfw38GhnkMDAwMDHkKyxnxeQNiwUV8SiAAOcBS9+n/n/Qg8v+kB5H/L/7Z/R/mCoxARAbY0gW6N1mIdSqp3oQ7mVC6wOsFZKeSZAAp6QKvCwilCwYGBgacAYHsCnwBBgBrvUiSiufs+QAAAABJRU5ErkJggg==",
            name: "Spells to acid",
            description: "Transforms every projectile currently in the air into a pool of acid",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Spells_To_Acid"
        },
        {
            id: "ALL_SPELLS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApklEQVR4nKVTURXEIAxL703EDKBiiJkCzMwAYjgVZ+Bc9H4GK107bm98QUKbQIBgDP5EtnAKhSy8K5TFnCNzFmvFA8AkyZFC5U97Lcudcjb4veZ1eaZ/xkh95OKxg0kDnCNj8Z3R2l+064BCIWwAtkH+OveKcRJ4OvLX7+J5Ck1RdW7K6XAlndZ1e1l4i46zo/QV80XdjfeBPMf+US4aWbwZz53v/APVb48XE3493QAAAABJRU5ErkJggg==",
            name: "The end of everything",
            description: "You're heavily advised not to cast this spell.",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/The_End_of_Everything"
        },
        {
            id: "SUMMON_PORTAL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABvElEQVR4nI2TvWrjQBDHf5uI1G5CeuMiD7Bwy9kYF/sE1xlc+BHcy1ylIjl8IL9BikA6X3PlgoyIozXoAQIxeobUFx9zhSxbim24ARXa2Z3/x8woEeFULKceQAaRUScv7OLiXGIQmbOPthsOqCJy9N0N7yUJM/l4E0nCTO6G9yIiJGEmSZjx8Xa4G9QqqngUo60RX6RcFlf0xobceTwpy2lfgCM5lQQFoK2R3Hm6WLQtJWhr6GLJXekJQNA54cHP7z9k7iIAJo8TcucJOkLuPJPHCQBzF7Eu0obrQVXxS7vPZXGFtoZ4FLPCsbh94qZ1DaOSCQ50u2muSsJMAHrjQyLoCF9vDd9aQxbvT7y8erabUv7zg693SgWAGkSG5dRL7jzalsbdtK5ZvJcMZma+P9fWMIiM2s0JF1W/10XKCrfX3MXy8loaWnmywrEu0qaE+iRWLCr3e2PD84OnfjZ3kfrlfze7MDOxzEzM3EVKW7NnAuyRq8d8iqBiArCrrNZFX3S7RNfW8Lf4s0febpDtBlXNQmMXllMvy6nHF6mq0AaRUb5I68hNFvUdSMKMJMzq//Ipf7QL6tw6/2/8A8uaGz31JfN4AAAAAElFTkSuQmCC",
            name: "Summon portal",
            description: "Summons a strange portal",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Summon_Portal"
        },
        {
            id: "ADD_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5klEQVR4nM1SPQ6CMBT+MAwmxblLD6AJMYzeglPg0ngCj0Fc4DgsjMSQ4MbShRlMHUjqgCVoiqAufstr8vr9vPYBf406pGrqzuJd0/Z2kyZPAkPHgpNoWOcmgkx8VXAS1SFVsjyqOqSq4CSSiT9N1o6yPCqZ+GpYh0lGRyg4idjaCSBygLlY0i3AXEDkYGsnMIlYerb+wZgLAB35gVt17g4iBwC0WYrVobJ6gdcEtrfrE9yqMyBytFkKcWnizem6Hx1hc7ruxaWJdWxNBnONZCN++oXXPdBipv4szHF9u8ptln5k+BXu8vyNX/l1gUsAAAAASUVORK5CYII=",
            name: "Add trigger",
            description: "Makes a projectile cast another spell upon collision",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Add_Trigger"
        },
        {
            id: "ADD_TIMER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxklEQVR4nGNgoBAwInOkzdP/C8gYMDAwMDAISJjAxT+8OAOhn1xgeHpyJooeJmQONs3IfJg8TrB8+fL/pMqjuOD06dP4bcACGNEFioqK/puof2cw1FNHEb/wQJwhMjISQz2GALoh5y/dZGDks8OqGacByIbg04wXwALs9evXeAMWr2YYIMkQXFFJlCHomq8fn0DQJUzoAjCwbGbmf3RD9uzZg6EOJXS1g6f/Z2DATMoMDIj8cHVtJu688OHJBRTF6Jph8lQFAKwmX1yYkcCvAAAAAElFTkSuQmCC",
            name: "Add timer",
            description: "Makes a projectile cast another spell after a short time",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Add_Timer"
        },
        {
            id: "ADD_DEATH_TRIGGER",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmUlEQVR4nGNgGGjAiE3wxr1X/9HFNJTEsKplIkYzPnEmYhThk8dwAQMDA8ORMzcYjpy5gcHGBljQBUIiE+Bsm+ULGCb0djAwMDAwTGBgYFizfAGGAVhdQDaYs+rQ/xv3Xv3XMff6f+Peq//Y+EQbMmfVof/2XvH/kflEa75x79V/e694FBqXIdRPSOgacGnEawByGkCmBycAACeeewJ/bZRZAAAAAElFTkSuQmCC",
            name: "Add expiration trigger",
            description: "Makes a projectile cast another spell upon expiring",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Add_Expiration_Trigger"
        },
        {
            id: "LARPA_CHAOS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbUlEQVR4nGNgoBX4////f5Lk0AXfncFuAC5xrJLLMo/g5WMFyIrKXfuxsgkCkhRTDaD7H8b/DwUwl2GEAy6NMIBsALIafNFMHUBsDLBgE1yWeeR/1HQbRrJtx5baiEpEDAy48wDeJEwsoEnIAwBoy2zj6rAosgAAAABJRU5ErkJggg==",
            name: "Chaos larpa",
            description: "Makes a projectile cast copies of itself in random directions",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Chaos_Larpa"
        },
        {
            id: "LARPA_DOWNWARDS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeklEQVR4nGNgGFRgWeaR//j47878/8/AwMDwHwrgEuWu/URphAEMA/ABZMPRLSIZoLuMgYGBgYkcTVgNwOW8i3dOw9keydaE7MM0DNkFRAccsib0GEAHBL0gaIzfMqyBiOxXRkZGRqIM0FcxJdpWrICQXwkCokOY2gAAeFdNpZNpKOwAAAAASUVORK5CYII=",
            name: "Downwards larpa",
            description: "Makes a projectile cast copies of itself with a downwards trajectory",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Downwards_Larpa"
        },
        {
            id: "LARPA_UPWARDS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdklEQVR4nGNgoBb4////f3L0McEY78+SZzHcgB1zj5LlGrgBF++chguS4hombILkugYOlmUegWt6dwa/AVhdgOwdol1T7tqPVRJZnJBrsAJk7yCzyQLYDMAaBsgA2QvIYUOUDeh8WBj8hwKstuDTCAMYBgwoAADDi1zhRI5VUgAAAABJRU5ErkJggg==",
            name: "Upwards larpa",
            description: "Makes a projectile cast copies of itself with an upwards trajectory",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Upwards_Larpa"
        },
        {
            id: "LARPA_CHAOS_2",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlUlEQVR4nL2RsQ3CMBREL2yQWdLSeolsYDoqz0Dlkg2cIWhNxW/omeGvcBToR5ESCdtBXP/u7v8D/qngIlVIFbIZNpnJ4ec1t5R8pgq5PCG4SADoSgxUyH4AptMdz9cDAHC5nb+zwUUmn7lsUFzbYHtYNazC/cnJ5/bkahj4zFV78zxF8nkGxuuxaN5dySuDZtjUCr8BaLKowbE9LfsAAAAASUVORK5CYII=",
            name: "Copy trail",
            description: "Makes a projectile leave a trail of copies of itself",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Copy_Trail"
        },
        {
            id: "LARPA_DEATH",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0klEQVR4nL2SoQ7CMBRF3yX8AENgEXjEhsOSkCDw/MEkim9AIfcH8wgSktk5NoFHYCc2PuFi6NZ1W1rFca/tPXmvLcSBaOfznr0769eixGgoRJI28X42ZS0wA5/cpTeRWgAAVdZIvACIw9TaRWsEM/R8Pdw7UByiNU6bC0VEzskRNoH1gGLoJeoO9Pn1mj/CW45tMO8K1EEvAPSgqv83go66RFu4VxCHKdXtm6I+xnpRZaQ++3KxEkkcBSQJNGFTNkTrK+sbE98WNQQmprCPa1HiC2UKZG9bgNLQAAAAAElFTkSuQmCC",
            name: "Larpa Explosion",
            description: "A projectile will shoot out 8 copies of itself when it expires or hits the ground",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Larpa_Explosion"
        },
        {
            id: "ALPHA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAi0lEQVR4nGNgoCX4eaUgn5AaJgLykT+vFJzAp4CFgAHmZLsAavM0JDZpBkBtP0TIJVgNgNoYwa4zYSUDA0MEIVdgM+A/Oh9dDKcLYLajCeN0BSMh29EBu84EDD0otv+8UhCOQy4c6hXcYUHIdmxhwYQkic3v6AB3jBCyHZcrmJBNJBTXyPIkpQt8AABkjV9dSbhMGAAAAABJRU5ErkJggg==",
            name: "Alpha",
            description: "Casts a copy of the first spell in your wand",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Alpha"
        },
        {
            id: "GAMMA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAY0lEQVR4nGNgoBAwInN+Xik4wcDAYE5Az0l2nQkWMA4LmmQ/AwPDCgYGBgZ2nQmMaHIMP68UhMPkcYKfVwr+/7xS8B+P/AlkPhMB52IAZOeTZQA6GDVg1AAMA5CTKXqSpRkAABqEGtVz+UqNAAAAAElFTkSuQmCC",
            name: "Gamma",
            description: "Casts a copy of the last spell in your wand",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Gamma"
        },
        {
            id: "TAU",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAd0lEQVR4nO2SuxWAIAxFHzQswz4wRtyENdhE+iyTCis9iODBT2HhrUhy8rhFgIcoABCmfGfZ2KB0UScA3tigjA0KgC9mdT/tkoRpFiZX/yBMuWUnTG7tbwbGhnhBPR4sWvQMSvTZcIQ/4NMB5WW2rnTEYOq832UB2s0sHupMyA8AAAAASUVORK5CYII=",
            name: "Tau",
            description: "Copies the two following spells in the wand when cast",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Tau"
        },
        {
            id: "OMEGA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuklEQVR4nLWSsQ3DIBBFv61ILMMM9GQal2ECXDKN6d2m9TKukuZDDgwSUZTfAMe7f3fYwI+aehfnsWwALI9R6XAfMqgSa12M5k5yBOCUDpPSYQLgGLNkrgbnsTxE5V3psKY77nceLdlLB0a0uaISY7FiC4Pe3C1lVhrEBthTZqVBnnGgcmI/BpzxCeSvUUjEijdq/Qcvbl0C+eqehYqcuZXI1QjOyDvB4tap3pM/j8U3OwDnH9Q37J/1Boj+SieuO83PAAAAAElFTkSuQmCC",
            name: "Omega",
            description: "Casts copies of every spell in your wand",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Omega"
        },
        {
            id: "MU",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqElEQVR4nKWTwQ3DIAxFH72wDPdkkzJGugljpJs09yyTU3shyCG2Gym+YGTr/f+RgJsVALZ1+gADsMRURmt5W6cnMNfrElMZgxh+a5tjKm8DsO8QUwkAD2Xv5aifSgMM2mIF53+A7Kip4ANAZD/E2IHa22gRNDXVvgXQYljvcgb0MTz7loNe1bTvAWQM074JEHbn7n7ZQXOBY78B6mdqp1SV6nIu+1v1AzqGQV9HNU5kAAAAAElFTkSuQmCC",
            name: "Mu",
            description: "Every modifier-type spell in the current wand is applied to a projectile",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Mu"
        },
        {
            id: "PHI",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvklEQVR4nK2SsRWDMAxEf2hYxj3ZgBHCGGaCvEwAY5ARskHcexlXpJH9BNg8eOQqo7NOOnxwEbcSEbz9Ao18utqM99Pqwds5eDuf2iB4+wB6NT3CAUNtxrcuVpnmCaA2YxJX50nubAVUc9av1NxapJLmVtYGeG6dJkSul56FhUYmfUrdikv/pyrcPQwt4CDZyUJxbiEgqw1Se+0MjNwQ7aQN5H07oJEUrqfHZHY6C5eDtIsjUS6+graRs/Q3/AD5XFYQTtyfUAAAAABJRU5ErkJggg==",
            name: "Phi",
            description: "Casts a copy of every projectile-type spell in the current wand",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Phi"
        },
        {
            id: "SIGMA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAr0lEQVR4nKVTwQ3DMAgkVSUv43+6SbpF6SRxt2g3sf8swyt9FCQ3BWop97ERcJzlA+Agpj5gwgoA80hjymUyE0xYmXBjwsXJL0y4aXwyalY5787kFwA0jU0Z3VNayuViSo0IhERlXmWqCesJCpTzGSlwCVIuj6hxRIGiRUmXgAlvcl29mhDihfqvzlQgjc2b3hOfjeQCHw+Y37d36I8PehMFymfdhS8Fu2UaWqrDeAP/XkOcSm9IYgAAAABJRU5ErkJggg==",
            name: "Sigma",
            description: "Copies every static projectile -type spell in the wand when cast",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Sigma"
        },
        {
            id: "ZETA",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApklEQVR4nKWTyw3DIBBEnyNLNMM96STuIqSSUIbTiXOnGU7OBUsIBkyUufDZ3ZmBBfgTU76Iwe2DdR9j/Q1gFsHFWP8uN2Nwd2DNiwEugrkqTnim8ZVvTiKxQgxuA66l+hBBZh1jfZVfHkFhTaNTwa6DM/URB4f60kpoEsTgHse805muA3+m3iRIbYP+u9AE6eJkz4WAdCBfnBAA6s+05cEeWm39GV++YzfEnK1IEgAAAABJRU5ErkJggg==",
            name: "Zeta",
            description: "Copies a random spell in another wand you're holding",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Zeta"
        },
        {
            id: "DIVIDE_2",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAQElEQVR4nGNgGAjw+vXr/69fv/7PwMDAwDQgLiAbwJw9BDQjhzIhzSzoikRFRRmRFaDzSQYU+X2YGgIzaPDkBQAp+jjJ5AwcowAAAABJRU5ErkJggg==",
            name: "Divide by 2",
            description: "Casts the next spell twice, but with reduced damage",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Divide_By_2"
        },
        {
            id: "DIVIDE_3",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAARElEQVR4nGNgGAjw+vXr/69fv/7PwMDAwDQgLiAbwJw9BDQjhzI2zcjyLOiKREVFGZEVw/gwNejy1Hf+CDAEZtDgyQsAGtdEScuZdmkAAAAASUVORK5CYII=",
            name: "Divide by 3",
            description: "Casts the next spell 3 times, but with reduced damage",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Divide_By_3"
        },
        {
            id: "DIVIDE_4",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVR4nGNgGFLg9evX/1+/fv0fWYyJbjZTVTOyVwh6QVRUlBFdE1G2whQT0siC7kyYjVQHpLgKQyM+w8g2hCwwcCmRpgAAZ7FWyxItWXMAAAAASUVORK5CYII=",
            name: "Divide by 4",
            description: "Casts the next spell 4 times, but with reduced damage",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Divide_By_4"
        },
        {
            id: "DIVIDE_10",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWElEQVR4nGNgoAZ4/fr1/9evX//Hx8YFmMi1iGKXYpXERqOzibYBm0FEuYRYw/EaQIpiFnRnioqKMpLkNGIBUa6iKBCpEo2keAMGmLA5nZS8wEKKC2gSQwCeBr/N/m0magAAAABJRU5ErkJggg==",
            name: "Divide by 10",
            description: "Casts the next spell 10 times, but with reduced damage",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Divide_By_10"
        },
        {
            id: "METEOR_RAIN",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwUlEQVR4nLWSMQ6CQBBF/xJDNLGx8A5S0hpuYEPNFfAeNlvqPTwEveV6ByoqDM23kZWd7G7EhFeR2WH2DR/gQ6crtmVOROh0RZLsTW17k9gLkvS0AwCsD1dsL8fvQVvmJElpIY0osAZpkTk3jOzvD/WTWm9qO7U3ddAg1OdVGwf4hnS6srVVzCwtMgyNcWqb7OaslQDA63m2henzLKRaKBmJXUGqTZMZmj+NvF9cEMx5mgYAKKW8vbN+5VkDFklmEd7oL6ho/Ap6IQAAAABJRU5ErkJggg==",
            name: "Meteorisade",
            description: "Alea iacta est",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Meteorisade"
        },
        {
            id: "WORM_RAIN",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABi0lEQVR4nJ2SMUjDQBSGv8soqGsU4iAI0WzSQqFYIe2axaGDzdCpg4OdCiq6CXatY1w6VAeHInZysBTBRcRFUgsFBwXNqoWu5yAXakyl+Jb/ePC/+993JwBs15PDoM+UvoRSgLieqveHFgCa7XpSt0wAlI6eozoM+uiWydyqw1O3JbR2oyQCv8di1uF0Zy28SfWq2Q6LWYfA75FfqHKydUdmUAwHiuUVRwLMrTq/4kV754eflJsFahunlJsFhkEfoRjolsnzdSu8LY5BfqFKOmFwe//KzXSds92M0NR+mUExjDeOwfnLDvn9GWoXFtVsB9v1pJbKVWTg90gnDMrNAumEgW6ZjHJRqYZBn65/yey8iZE8oN0oCQGweXQjM4NiGK92YcUyAOj6lwjx7QMQtuvJ+nZAfm/Ax9v37lf1JMVjnSiXdqMUGlVp7UZJGMmDcLqKF+Uy+kfGlpRSAqRyFWm7nnxsrv/QVK4io55fkVRFuahnm2jAX1ziOIxdJ5WryFGdyBg36F/GSesLD6PmXpTZRc0AAAAASUVORK5CYII=",
            name: "Matosade",
            description: "Alea iacta est",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAoklEQVR4nGP8//8/AzUBE1VNY2BgYEHm9DlINjAwMNSTYU5j0YHnDSgGhpkqNzAwcJFlmAX3t3oGBgZUAy24v9Wf+MrFwMDAwLjq9F2iTQszVUaJBNqGITroc5DEKVd04DnpBuLShA9Q3cujBo4aSAZASdgW3N8aT3zl+h9mqkyqOY0YBp74ytVowf2t3oL7G0kmnfjK1XjiK1cDjM846EtsALeIK65H2BliAAAAAElFTkSuQmCC",
            wiki_url: "https://noita.wiki.gg/wiki/Matosade"
        },
        {
            id: "RESET",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAe0lEQVR4nGNgoBAwYhP8/+aRPgMDw2o04VBGEbmLeE37/+aR/v83j279f/OoBYtcC1ROH69mQk7GaQgxmrGpZYLZzsDAsIpYAxgYGFahuIIU29H1MJGqER0MHgNCscU9LgBVG4ouSH40IrmCqISEYTuSJMlJmbqZiRwAAKwoa59yb/64AAAAAElFTkSuQmCC",
            name: "Wand Refresh",
            description: "Reloads the wand immediately",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkklEQVR4nO3UQQrDIBCF4d+S0yh4EcHbZBdQIbvcppCLCHoduyrUlpQqBrrI2w3iB+MMilIKI3MbqgHTa7Go2QOuwwlr2nwFWmW6MY10QA1qpItkAHFP+8+aVaYawrlv+J5FzYdna9rawaNL3zK85Qu8wI5Ui62RIZKLVabVCR9gJAeNdBrZJEVyiGT/rMXf/9gPvlAmm3fJns8AAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Wand_Refresh"
        },
        {
            id: "IF_ENEMY",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABT0lEQVR4nGNggAKTrTfyGXAAbHLKzXM9UBTMfPn/PzaF2OSUm+d6RG+/+B9uCC4DiNIMU/j/P6pCbGJYNWPTgMxGNkS5ea7HzJf/UQxgQg4k0203C057qU9gYGBgmPUKogBGKzfP9bAwMdneNWue593a5B0wA1hMtt7ITzWBaEoTw3AYw+wzNwtSTdQnzGZgKLAzUmc4ceYMijzLGW+NiQxbb0AUo2k8460xkYGBgYFh6w2G9+eO3mQwUce0AT0c7r848P/+iwP/j1+fhBGA6P6HhwFM82rjFxNgfAlBPYbJSrsm4EtgKAYgg4SUWIYX7y8xVJR2o4gfOneJOAMWzFnMsGz1QoaO7lK42N3a5B0nzpzxLEtL2o4RjQwMDAxnvDUmhp6VKHjxHmKLkaUCVidjcwUKMNl6Ix8WgOgBycBAIDUiG4JMowOiDCEEYJoBhaXrnDo+u/wAAAAASUVORK5CYII=",
            name: "Requirement - Enemies",
            description: "The next spell is skipped if there are less than 15 enemies nearby",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Requirement_-_Enemies"
        },
        {
            id: "IF_PROJECTILE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABcklEQVR4nI1SPWjCQBh9KQ6dugiFQrcMyVRpSaFTtkJUKJRO0lHs0MWAs1O2QiGBUlBJ15ukdEh1DghSD0WnOEidCnYp2M3lOsQLiZ6hH4Qc3/vJ4+WA9WheUMWOEWGy5RoJQmPBmIgowmTLNW47YxaZ7DL4l5gTGUsSRTuhWCSIn+MmsuUajQVLGOzFSzp/n5qDgmIDQPM7JPC3bLnGhaZ1Hpov+Vm93OUGGc0LqhUtFN0dbgVDi07NiqbYLcDUzxT0KU3gGVpUHXhBSF4v+Y4WVQcA4AX4Gfam0JStD+xFgo2J70R4lIB38Pyp2gBwfJTF1ToRANSWI6dUKu3Shwa0qDr3XoDacmTPVkBtNbJ934eu63g8OAUABwD84UTsonlB9eMJjD+EEPbVzjJCCCOEpP7GRIKbyasNAPid4218iVxujvbJtRnvYDOFJOxgv2dywqCgOJIkRQJ+H/qU5mf1cjdC4lc2rfVNkzRe6vAe/gDZX/vCAcbL6wAAAABJRU5ErkJggg==",
            name: "Requirement - Projectile Spells",
            description: "The next spell is skipped if there are less than 20 projectiles nearby",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Requirement_-_Projectile_Spells"
        },
        {
            id: "IF_HP",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGUlEQVR4nJWSMU7DMBiFP1U5AxdIpXRGRmJiDu0JECMqa7NHTOnElI5tFRYGThDKjISEhFUJpkQRBygLRzBDamQnTqBvsfX/7z0/2z/sIfJiRgdcPT/JQouw3CnlIrp6fpKFl5t39WvSZfAvsSYqZRNdNafYJTD3pomfZOFypyyDgflIJ49l9DYOUoDVV03Qq59k4akQm9vV3fnnzdWTNvBEXsymohZdH7WCsZZlNBVBuobo7DjgVUqr78nJaEFe1OR9UdfkZLQAIC/43r6UiKB9gustuv69eX8Aryl+GN+nABdmgh4MTDHAkDlD5lZN43n70R27UrFqolJxaw6c33gIelPowTEHqsn7cxorFbeiH2zSJzZNAH4A/WP9NcXqQjMAAAAASUVORK5CYII=",
            name: "Requirement - Low Health",
            description: "The next spell is skipped if you have more than 25% health left",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Requirement_-_Low_Health"
        },
        {
            id: "IF_HALF",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMUlEQVR4nJVSMW6DQBAcWbyBD1Cc6+iiuEoN9hPSxYLWVOlc0bnJuQQLt8kHCK4jRbKUk6WkgsIPIE2esCnI2dxxRM5Kp0O7M8Pu7AG/wYtqgYGw1bwk9zVA2hDZgLaal+T+XflBJ5EhgYvICkikA205K9lG6H53Rbwk99OGNIFR16Trlzp+nzIBANlXC1C3l+T+hPNylW2D43K+UwIOL6pFyFtS5PYaw0bWcciZ2ADx7RXDXkqt7sjZeI2iasEGUc7GawBAUeH78FaDs/4fTB/ShoiIyOa+Of/JA0UOOROrbBtMxDMiFwg5E389MABwTHK3GLkAOBNqhNfDZ09gpIEtofLH5Xy3lzJ4iO7L3hqB87rMMPO2LqDGUCbdPD5ZjQQueI1DW/iXiDr2Xs8iAPADNvQE24jKzjIAAAAASUVORK5CYII=",
            name: "Requirement - Every Other",
            description: "The next spell is skipped every other time this spell is cast",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Requirement_-_Every_Other"
        },
        {
            id: "IF_END",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA40lEQVR4nGNgYGBgUG6e68FAAJhsvZGPVUK5ea5H9PaL//EZYrL1Rv7Ml///k2UIsmaSDTHZeiP//3+EJnQ+AwMDAxOyIXZGerh8QRzA5QqivAAzYObL/xhhgU8zCy7D0BXPPnOzAF38jLfGRKwGCBpZq5/2Up+ALGa67WZBqglELE0MKrb1Bm4XwDQxMDAwwAyDuWI2khgTuqZD5y5hGDTrFcLJZ7w1JmK1DTkA8YU8elpAcQE222efuVkAs9Vk6438VBP1CTCvodiOHP+4bIaJobgCVz7AFufoBqK4AGvAEAEAxFXVaSOOg6AAAAAASUVORK5CYII=",
            name: "Requirement - Endpoint",
            description: "Any Requirement spells before this will skip all spells between them and this spell",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Requirement_-_Endpoint"
        },
        {
            id: "IF_ELSE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNUlEQVR4nK1TMWrDQBCcGH9ATT7g4lylEGswGFLb8RNSGqXVfcCVPyCXsvAzZLkWCAQ5DuJKV/gBSqM61aVwTpxkXxJCplpud2d3hzkAwGizn6OH0WY/j2ut41prV74NnrO3ThGlVRjXWlNahXZsN3d6XCT6C981DwDgvF4dSyEWU6LMJpkcFJ8cFLebp0RZKcTivF4dAWBo3/XoP6AUApRWYUAserm/vO/eAaQVGlkoU2Nw1xfGTPD8GQOAgFiUCMUbWaj+9PaE/hYAIJbjLQAkQvGAWOT5M2ZyNq4IbBFfn1hkSBpZqFt1TgLgIqIhcWF469HzZ8wWMSAWJQD/FUEuT2ikUAnAE3RFzAcf7lWMdY0PXA7sW7uzQS5PbSyW4y3S6mqQXdOZ/lcr/99ncmny03f+BDyPA3DxV2nUAAAAAElFTkSuQmCC",
            name: "Requirement - Otherwise",
            description: "If a Requirement spell before this succeeds, the next spell is skipped",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR4nGP8//8/AzUBE1VNY2BgYEHmFPmYNDAwMNSTYU5j35YzDSgGelnpk22YhhBrPQMDA6qBGkKs9Tfe/WZgYGBg3HbsItGmeVnpo0QCbcMQHRT5mOCU69tyhnQDcWnCB6ju5VEDRw0kA6AkbA0h1sYb737/97LSJ9WcRgwDb7z73aghxFqvIcRKkkk33v1uvPHudwOMzzjoS2wA82wro46n0lQAAAAASUVORK5CYII=",
            wiki_url: "https://noita.wiki.gg/wiki/Requirement_-_Otherwise"
        },
        {
            id: "COLOUR_RED",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAl0lEQVR4nLVTsRHAIAhESxsLaxbIBtm/yAZZwNrCxtZU5AgaQnKXr+R4ngcV4G9sIXQzuSL2iqgWSI7nyb2Uk8QLZmeCm1leUgIAgJizk0XUZG3NDQ544q6j5DySJWLOF9eeJ8iehorY+c2oO7A4GASoi+aCiwxLpGI5DsXqmDQfichYfZV8OVzAMtIAKSQ7m//Hq4/0FQf4yGZB3vE9fgAAAABJRU5ErkJggg==",
            name: "Red Glimmer",
            description: "Gives a projectile a red sparkly trail",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Red_Glimmer"
        },
        {
            id: "COLOUR_ORANGE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoUlEQVR4nLVT2w2AIAysDKImLGLCCo7BOIzBCiYsQqIuUr9KSpWHJvYHCndHDyjA33FYjd1g9AbRmypBYhTfPMOeQJzwNH8UmFwcSiI8JwwAwFAqs2ThDDtMLiZemrS8J8K6ZYdmyWE1jsvcFOFV3Cy0RKoVULTscBElN4nMb5rncj0TQG+QAOSR5/IFbifTt6Uq5NgdUkj2Q3d/vGqkr3EBsE53O2DL+U8AAAAASUVORK5CYII=",
            name: "Orange Glimmer",
            description: "Gives a projectile a orange sparkly trail",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Orange_Glimmer"
        },
        {
            id: "COLOUR_GREEN",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqElEQVR4nGNgoDXwnqr3n2jFtZej/tdejsKrAV0NE7LkuUNX4IqQNWBjwwAjNicb2ekwMDAwMDTrLmPEpuncoSsMW7MvMWI1AJdN2DQzMDAwsBCjCRkga8ZwAbLz8QG8XiBkSLPuMhQ9TOgK0J2IDtC9imEATAEsSpGdjU0cxYDay1H/YQpgLkHmo8cAigEwzegKkPmEvAcHsPQP8w56fiA6f5CUkcgFAKrSbKFckChnAAAAAElFTkSuQmCC",
            name: "Green Glimmer",
            description: "Gives a projectile a green sparkly trail",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Green_Glimmer"
        },
        {
            id: "COLOUR_YELLOW",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnklEQVR4nLVTsRGAIAyMLGLLBu5hJRUzMIkzWGHFHm5AyySxChcjIHpnquSS/+QDAfjb/KqxuxiTRUy2CZA1iif3cOQiDij5RQLj4lAj4THVAAAMtTFrEvZwgHEx47LzpD0Dxu3SVPEEH61mmCzyl7lJ8KvGZZ66J3i9A0miZJLAUg7FTZmkj0hk3PyVfDmcoEfSzSSR7Nx9H68O6audYXmAA0BucikAAAAASUVORK5CYII=",
            name: "Yellow Glimmer",
            description: "Gives a projectile a yellow sparkly trail",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Yellow_Glimmer"
        },
        {
            id: "COLOUR_PURPLE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAn0lEQVR4nGNgoDXoltj5n2jFB9X+/z+o9h+vBnQ1TMiSpz7tgitC1oCNjdWA0hfujLgMQebD1DAwMDAw4nImLi+c+rSLofSFO1wfnEHI7zBgf4sRxVImZAlkp+ECB9X+/0eOGQwvdEvs/G/G50a0C0gOA3RDmNAlYZrRvQPj4/UmzH8wQ9D5eFMlcuAgG0CMlzAAukHoNhOdP0jKSOQCAJsTe14g4EL/AAAAAElFTkSuQmCC",
            name: "Purple Glimmer",
            description: "Gives a projectile a purple sparkly trail",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Purple_Glimmer"
        },
        {
            id: "COLOUR_BLUE",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoklEQVR4nLVTuxWAIAwMzGFpZSUbsIsjMIcjsIsbaGVFyR6xCi9E+eh7XgOBy5EDAvA3BrdjN9l6ROuxmiA5mm+G80gknvA0fxSIq1ElER4TBwBAlcosWQjnAXE1KS9NWt4J26KyQ7NgcDuO09wU4VXcLLREqhUQWna4iJablMxvmsdyPROwHpEI5JHH8gVuJ9O3pSrk2A0pJPuhuz9eNdJXXMIKdeUku7lSAAAAAElFTkSuQmCC",
            name: "Blue Glimmer",
            description: "Gives a projectile a blue sparkly trail",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Blue_Glimmer"
        },
        {
            id: "COLOUR_RAINBOW",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABE0lEQVR4nGNgoDXwnqr3n2jFH2Vl//9f44xXw0G1//8Pqv2Hq2FClrz29i0DAwMDA7IhtZej4GyHuf8xDEcxwPLbN8ZHBx5ADHkYj2IIsuZTn3ZhN4CBgYFBfspdRhgb2RBkzaUv3OFqWGCMj7Ky/xkYGBj4+tXQ9aAAZM0oLuB//JgRFgb4wEG1//+7JXbCXcaCLGn57RvjwwMP/ss5KOA0wP4WI3YXwAByGOByAV4DYFG4Yt1JFPE71y4wMDCgxgCGAR9lZf/DojGy8AYjAwMDw7lDVxgYGBgYnvQaMt65dgEjEFE0H+fi+o/sClg0IicmdIASC5bfvjEyMDAwwFwBAzBXwAByLOAFy/s1iM9I5AIAVPN98l+DudoAAAAASUVORK5CYII=",
            name: "Rainbow Glimmer",
            description: "Gives a projectile a randomly colored sparkly trail",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Rainbow_Glimmer"
        },
        {
            id: "COLOUR_INVIS",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZklEQVR4nLWR2w7AIAhDwf//5/qwLCFNy9ycfVI4XFIiTgsAXsFPBS1zJyqg3u0QhlCkmi5v4orTJjIzSACg4ra7Y5Y8+Dpgv4kz0MVTQRGXierPJg4uZqD+1QVGTbYnMpv+A+5oAk1jl5cCtgUNAAAAAElFTkSuQmCC",
            name: "Invisible Spell",
            description: "Turns a projectile invisible",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Invisible_Spell"
        },
        {
            id: "RAINBOW_TRAIL",
            image: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAp0lEQVR4nGP8//8/AyWAiSLdI8AAl8tM/5n32fxn3LD2P2PNfVho/5djnAIPeRQDfrtp/GdgYGD4d5kXruCv0xFGGJvRatt/Lo7pDI/+5yA0/f//Hys++pbh/////xmY9lr/x6Xm////EAPuMjMjFPWr4NWA1QAY/uWqTpJmFANeSQvDNf+9xPP/////DM6XGAkayEjVpAyLBZIANmfBvEAMpq4XyAEAqRgM235KtSEAAAAASUVORK5CYII=",
            name: "Rainbow trail",
            description: "Gives a projectile a trail of rainbow",
            bgImage: "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAo0lEQVR4nGP8//8/AzUBE1VNY2BgYIExPn3+xWDjUdnAwMBQT4Y5jZeO9jagGKhvHkm2YbyCCvUMDAyoBvIKKtR/fv+AgYGBgfHiyeVEm6ZvHokSCbQLQ2zAxqMSp9yRHe2kG4hLEz5AdS+PGjhqIBkAJWHzCio0fn7/4L++eSSp5jRiGPj5/YNGXkGFel5BBZJM+vz+QePn9w8aYHzGQV9iAwADiC6wybU+TgAAAABJRU5ErkJggg==",
            wiki_url: "https://noita.wiki.gg/wiki/Rainbow_Trail"
        }
    ]
}