## Instalation

#### JS project

```
> git clone git@github.com:OHUSAR/4networks-task.git
> cd 4networks-task
> yarn install
```

#### Proxy setup

check `./src/setupProxy.js`

#### To run

```
yarn start
```

Go to http://localhost:3000

## Task

1. Nacitat chybajuce data (existujuce su zadefinovane v `src/feed/feed.graphql`) a nastylovat prispevky podla dizajnu. Implementujte len samotne prispevky - nic okolo, ani search, ani bocne panely.

2. V paticke zfunkcnite tlacitko komentare. Po jeho stlaceni sa nacitaju (zo servera) komenentare a zobrazia sa pod prispevkom. Tieto komentare nemusia byt vobec nastylovane. Na opatovne stlacenie by sa mali skryt.

3. Pod prispevkami sfunkcnite tlacitko "Nacitat dalsie" s tym, ze po jeho stlaceni sa k exsitujucim prispevkom docita dalsich N.

   - !! NIEJE implementovane !!
   - principialne pre efektivnu pracu s datami by sa mal "infinite scroll" riesit tak ze sa dotiahne akoby "dalsia strana" a pripoji sa k existujucim vysledokom
   - podla vsetkeho apolo ponuka podporu pre ["fetchMore"](https://www.apollographql.com/docs/react/data/pagination/#cursor-based) preto by som len upravil query z prikladu kde pridam len parameter first a spravne poslem hodnotu kurzora (`pageInfo.endCursor`)

4. Namiesto tlacitka "Nahlasit prispevok" v paticke pridajte tlacitko "Vymazat prispevok". Po jeho stlaceni sa vymaze prispevok zo zoznamu. Nerieste pri tom request na server - vymazte ho len v aktualnom okne. Po refreshi sa samozrejme opat objavi.
   - !! NIEJE implementovane !!
   - bez mazania pomocou api (cize nam ide len o mutaciu lokalneho stavu) by som pouzil `apolloClient.readQuery` a `apolloClient.writeQuery` (mozno existuje iny sposob ale vramci jednoducheho riesenia som v dokumentacii narazil na tuto moznost), dolezite pri tomto ukone je mat spravne = aktualne variables (first, after)
     1. pomocou `readQuery` nacitame zoznam postov
     2. najdeme konkretny post (z onclick mame jeho ID)
     3. prepiseme lokalny stav cez `writeQuery`

## KNOWN ISSUES:

- babel graphql import plugin = at this moment we have to restart dev process when `.graphql` file is changed
