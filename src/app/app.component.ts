import { Component } from '@angular/core';

export class Games {
  id: number;
  name: string;
  summary : string;
  genres : number [];
  screenshots : string;
  // videos : ;
  cover : string;
}

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <div><label>id: </label>{{games.id}}</div>
    <h2>Name : {{games.name}}</h2> 
    <h3>Summary : {{games.summary}}</h3>    
    <h4>Genres : {{games.genres}}</h4>
    <h4>Screenshots : {{games.screenshots}}</h4>
    <h4>Cover : {{games.cover}}</h4>
    `
})

export class AppComponent {
  title = 'Tour of Games';
  games : Games = {
    id : 1,
    name : 'Super Mario World',
    summary : 'Super Mario World (known in Japan as Super Mario World: Super Mario Bros. 4) is a side-scrolling platformer developed by Nintendo EAD and published by Nintendo for the Super Nintendo Entertainment System on November 21, 1990 (in Japan), August 31, 1991 (in North America), and April 11, 1992 (in Europe).\n\nOne of the launch titles of the SNES (and bundled with early systems in North America), Super Mario World is the fifth main game in the Super Mario series. (starring Nintendos mascot, Mario, and his brother, Luigi). The game follows both Mario brothers as they explore Dinosaur Land (known for its large amount of dinosaurs) to find and defeat the evil Koopa king Bowser (and his seven underlings, the Koopalings) while rescuing Princess Toadstool.\n\nAlong with new abilities (such as the \"Spin Jump\"), a new power-up (the \"Cape Feather\") and more obstacles, the game introduces dinosaur companions (known as Yoshi) that Mario and Luigi can ride. Yoshi, known for using their long tongues to snare and eat enemies, have become a fan-favorite among the series (giving them their own games and spin-offs, most notably this games prequel).\n\nSpecial bundles of the SNES in 1994 included a compilation cartridge mixing Super Mario World with Super Mario All-Stars. The only difference in this version is a new sprite set for Luigi. The original game was later ported to the Game Boy Advance on February 11, 2002 as Super Mario World: Super Mario Advance 2. Along with a special version of the original Mario Bros., the port includes a variety of differences, including Luigi as a selectable character (who now has unique features, such as his floating jump from Super Mario Bros. 2), new voice acting, and the ability to save anywhere. The original game was also digitally re-released in Nintendos Virtual Console platform for the Wii (on February 5, 2007) and Wii U (on April 26, 2013).',
    genres : [8],
    screenshots: 'http://images.igdb.com/igdb/image/upload/t_cover_big/pdkvjmhh5urjnrwng5cg.png',
    cover: 'http://images.igdb.com/igdb/image/upload/t_cover_big/rbdpnsh7jkx4cvejygkc.png',
  };
}