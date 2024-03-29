exports.data = function () {
  var jsonTest = [
  "..##.........##.........##.........##.........##.........##.......",
  "#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..",
  ".#....#..#..#....#..#..#....#..#..#....#..#..#....#..#..#....#..#.",
  "..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#",
  ".#...##..#..#...##..#..#...##..#..#...##..#..#...##..#..#...##..#.",
  "..#.##.......#.##.......#.##.......#.##.......#.##.......#.##.....",
  ".#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#",
  ".#........#.#........#.#........#.#........#.#........#.#........#",
  "#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...",
  "#...##....##...##....##...##....##...##....##...##....##...##....#",
  ".#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#"
  ]
  var json = [
    "...#.....#.......##......#.....",
    "...#..................#........",
    "....##....#.......#............",
    ".........#.......#.......#.....",
    "..#..............#.........#..#",
    ".....#.........#....#....#....#",
    "....##..........#.#.##.........",
    "...#....##...#...#...#.#..#....",
    "...#.......###..........#......",
    ".........#.....#....#...#.#....",
    ".#...###..#..##..#.........###.",
    "#.#...#..........###...#....#..",
    "#....#.#..#..........#.......#.",
    ".#..#........##.#..............",
    "............#..#.#............#",
    ".............#..........#......",
    "...#.......#...............#...",
    ".#...#..#..#............#..#...",
    "....##.##..................#.##",
    "#......#...#..##....#.....#...#",
    "#..#..........##....#...###....",
    "##......#.##.#......#..#......#",
    "....#...#.......##.##...#.#..#.",
    "##.#...#....#...#...#........#.",
    "........#..#.....#....#.......#",
    ".#......#......#..............#",
    ".#.....#..#..#..#..#..#....#..#",
    ".......#.....#.................",
    ".#......#...#..#..#...#...#....",
    ".........#..#..#.........#.....",
    ".....#.........#.#..........#..",
    "#......#....#....##....#.#.#...",
    "................##.#...........",
    ".....##.....#............#.#...",
    "...........#...#.#..##...#.....",
    ".......#....##.......#..#....#.",
    ".##......##....#....####.##..#.",
    ".....#.##.....#...#....##......",
    ".............#....#......#....#",
    "#.#.#.###........#.#....#.#....",
    ".##...........#................",
    "#..#..#...##..##.##...#..#.#...",
    "..#......##..#.#......#..#.#.#.",
    ".....#..............#......#...",
    "#.#..##.##...#............##...",
    ".#......#.............#........",
    "........##....#......#..#......",
    "##.........##....#..........#..",
    "..#..#....#.........##....#..#.",
    "........#..#..#........#...#...",
    "#.........#......##.#...#.##...",
    ".##.............#..###....#.##.",
    ".##.#....#.......#.............",
    "#..##.#.........#..##.#......##",
    "....#..#.......................",
    ".#.#.........#...............#.",
    "....#......#.#..##..#...#.#..#.",
    "#....##...##..#.......##.....##",
    "....##...##...#....#.....#..#..",
    ".#......#.#.#.#......##..#..#..",
    ".....##..#..#.....#.....#...##.",
    "....###................#..#.#..",
    ".....#..#..#.#..........#..#...",
    "...#.....#............#........",
    "#.............#...#..#.....#..#",
    "#........#.....#.#..#......#...",
    "...#.##.....#.#..#.........#..#",
    ".......##...#..#.#....##.......",
    "..................#..##..#.#.#.",
    "..#......#..#..#.....#...#.#...",
    ".#.......#.....#.#....#.#......",
    "##..#.#....#.###..#...#.......#",
    ".......................#.......",
    "..###..........#..##.##.#...##.",
    ".....#...#....###.........#..#.",
    "..#.....#....###...............",
    "....#.......#........#....#..#.",
    "......#................#.#...##",
    "#.....#.......#..#..........##.",
    "#.#....##.........#.....#.#....",
    "#.#.#...#............####.##..#",
    ".....#....####........#...#..#.",
    "....##........#.#..............",
    ".#......#..#..##......#....#.##",
    "..#....#.#........#..#....#....",
    ".#...#.##...#.#.....#.....#...#",
    "..........#................###.",
    ".....#..........##..#..........",
    ".....#..................#...#..",
    "#......##....#.#...#..#.......#",
    "..#......##....#......#.#...#..",
    "###.#..###.#.#..#...#....#.....",
    "#.....#.#...#.##...#........#..",
    "#..........................#...",
    ".#.#.....#.#.#.......##.#.#....",
    ".#....#..##......#....#........",
    ".#.......#.##......#.#..#......",
    "............#.....#....##.##...",
    "....##........##......#........",
    "....#......##....##.....#......",
    "..#.#.....#......#...#.#.......",
    ".###.........#...#........#....",
    "......#.#...##.....##..##..#...",
    "...#...#.#......#..##..#.......",
    ".##....#.#........#.#..........",
    "#....#.#......#......#.#.#.....",
    "#.....#.....#................##",
    "...........#....#...#...#......",
    "..........##..##..#...##.......",
    ".##......#.......#..#.#..##....",
    "..........##....#....#..#.#....",
    "...............#......#.....##.",
    ".#...#....................#..#.",
    ".............###...............",
    ".####..............#...#.......",
    "....#...#.#...#...#....#.......",
    ".......#.#.....................",
    "...............................",
    "#..#.........##.......#.#.#....",
    "....##...#...........#......#..",
    "........##...#......#..........",
    "....#.#.....#..#......#........",
    "#..#................#..#.##....",
    ".#........#.......#.........##.",
    "#...........#...#...#......#.#.",
    "..#.#.#..........##.##...#...#.",
    "..#...#.##...#.#...........#...",
    "##...........##...##...##......",
    "....#....##...#......#..#.....#",
    "#..#.#.#..#...#...#....#.......",
    "............#.....#....#....#.#",
    "....##.....#.........#......#..",
    ".....##.......#...#...#.###....",
    "...##......##..###.#.#....#....",
    "#.#.#.#..#.#.........#...#...##",
    "..#..........#.................",
    "....##....#....................",
    "###.#...............##...##.#..",
    "....#.......##.#..#.#..........",
    "............##..#.......##.....",
    "#...#.........#..#..#..#...#...",
    "..#......##..#.#...##.#.......#",
    "......#................#...#...",
    "......#..###............#.#....",
    "..#.#...###...#..#...#......##.",
    "...#.##...##............#......",
    "#...##........#.#..#.......#...",
    "#..#.....#..#.##...............",
    "..#.....#.#....#.........#.....",
    ".............#....#..#...#.##..",
    "..#.#.....................##.#.",
    "........#.......#..#.#.........",
    "##..............#.....#.......#",
    ".#.##...###....#.....#..##.#...",
    "#..#...#..#......#..........###",
    "#...........#..#...#....#....#.",
    "....#..#.......##......#......#",
    "#...#.#...............##...#...",
    "...##.#..##.......##..#........",
    "...........##..........#.......",
    "..#....#..##...#......#.#......",
    ".#.#....#.#.#...#.#............",
    ".#.#..#...##.......#.#.........",
    "...#...#.............#.######..",
    "##.#........###.......#....#.#.",
    ".#....#.....#.#........#......#",
    "..#.#.........#..........##.#..",
    ".#....#.#..............#......#",
    ".....#..##.........#..##..#....",
    "........#..#....#.......#.....#",
    "#.#.......#.....#.##.#...#....#",
    "...#...##...#....#.....#....#.#",
    "#..##....#..........#..#.......",
    ".......#.#.....#...#.#.#.....##",
    "#...#...#..#......##.#..#......",
    "...#.......#....#...........#.#",
    "##.......#####.#.........#..#..",
    "....#.#...................##...",
    "......#..##............#.......",
    "#.........#....#####.#.#..#.#..",
    "..#......#.#.##............#...",
    "..#...#.....#.#....#......#....",
    ".#...#....#....#.#.#......#.#..",
    "..#.##.....#..........#...#.#..",
    ".......#...#.............#...#.",
    ".#.........#.....#.#........##.",
    "#....#..#..........##.......##.",
    "...#....#.#.........#.......###",
    "......#....#.#......#.......#..",
    ".....#...#...#.#...##..#.#.....",
    "#.........##..#...##..#.#....#.",
    "...#......#.#......##.....#....",
    ".#####.....#.#.#.#...###.##....",
    "..#................#.#...#.#...",
    "#.......##...#.........##..#...",
    "..#.....#....##............#...",
    "#............##...............#",
    "..#..#.................#.......",
    "...............#..#.......##...",
    "..##..#....#...##..........#..#",
    "#...###....##.#.......#.....#..",
    "..........#.........#..#......#",
    "##....#.....#...##.......#.....",
    "..#..#.......#.................",
    "..#..##......#.........#......#",
    "...........##.#..#......#.#..#.",
    "..#...##...##......#...#...#.#.",
    ".#..#.....#.........#..........",
    "#..##...#............#..#.#....",
    "..#...#...##.#........#....#.#.",
    "......##..###.#....#........#..",
    ".....#..#....##...##..........#",
    "................#.#.#.....#..#.",
    "#.##...#......#.#..#.......###.",
    ".......#.#..#..#......#..##..#.",
    ".##...#...#....#....#.......#..",
    "......#..#....#.#.###.....#.#.#",
    "#....#.#...#......#.#.....#..#.",
    ".......#.#...#.#.#............#",
    "#.....#..#...#.................",
    ".....#..........#..#.#..#.#....",
    ".........#......#.#.........###",
    "..#.###........#....##.#.......",
    ".#.......#.#......#........#..#",
    "............#........#.....#...",
    "......#......#....#.#....#.....",
    ".#.......#.....#.##.#..#...#..#",
    "##.....#...#..........##..#...#",
    ".#........#....#...#....##.#...",
    "...#.#.......#.#....#.#...#...#",
    "........#.#.....#.##...#.#.#...",
    "...........#....#..#.........#.",
    "......#.#..#..##...#.......#...",
    "...#....#..#..#.##...........##",
    ".#..#.#.#......#....##...#.....",
    "......#..#........#...##.......",
    ".............#...##.#.....#...#",
    "....#...............##......#.#",
    ".#...........#.........###.##.#",
    "....##........##...#.##.....#..",
    "#......##........#...........#.",
    "###.#.................#.....#..",
    ".....##..#.........#......##.#.",
    "#.#.......##.#..#...#...#......",
    "...#.#..##.....#....##.....#.#.",
    "...##..#...#........#.#..#..#..",
    "...........#....#...#...##.....",
    "##.......#...#.#.##...##..#.#..",
    "#....#.#..##...................",
    ".#...................#.#..#....",
    "#.....#..........#..#...#...#..",
    "...#..#............#.#.........",
    "............#..##.....##......#",
    "#....#.........#.#..#..........",
    "...#.#................#....#.#.",
    "..#..#...#...#.#.#...#.#.#.....",
    "..#.......#.............##..#.#",
    "#........#.#.###.#...#..#.###..",
    ".......#......#..#.....####...#",
    "..##....#..#...................",
    "....##.#....#......#.#..#..#..#",
    "#...........##...#.#.##..###...",
    "##.##......#...........#....#..",
    ".#....#....#..#..#...##...#....",
    "...##.#.#......#...............",
    ".....##.##...#...........#.....",
    "....#...#.#.........##.#....#.#",
    "#..#...........#......#........",
    "..#..#.....#....#.##.......#..#",
    "..#.......##.....##.......#...#",
    ".#.##.#..#...............#....#",
    ".........#...........#.........",
    "..........##......#.#..........",
    "..#........###....#..#...#...#.",
    "....#.#...#.....#..#....#......",
    "..##...##...#..#..##......##..#",
    "..#..#......#....#....#...#..##",
    "...#...............#..#........",
    "....##..#...#......#........#..",
    "###.....##.......#.............",
    ".#.#.##........##..#...#.......",
    ".....###............#..#..#....",
    ".#....##.#...####........#.....",
    "............#.#.....##....#.#..",
    "....#..........#...#...........",
    "........#.#...#..##...........#",
    "#.......#..#.......###...#....#",
    "#....#..#......#.....#...##.#..",
    "..#.............#.#.###...##..#",
    ".#.#....#...#.....#...#.......#",
    ".##.#..#.........#..#......#...",
    "#....#...#......#.....#.....#..",
    "...........#....#.......##...#.",
    "#.#..##....#....#.#.......#.#..",
    "..............#.#..##.##.......",
    "....#........#......#....#.#...",
    "......#.....................#..",
    "#..##...##.....#.........#.....",
    "#.....#.....#....#...#.....#...",
    "........###...........#...#....",
    "............#.....#...##....#..",
    ".......#.......#...#.#...##....",
    "..#.#..#....#...#...#....#.....",
    "..........#.#....#....###....#.",
    ".##...#......###..#............",
    "...#...#........#....#....##...",
    "##.....#.##...#.#...........#.#",
    "..........#.#....#...##.#...#..",
    "..#....#.#...#...#....#.###....",
    "......#.##..#..#.........#.###.",
    "#.#.#.....#.....##.......#.....",
    "...#..#..#....#.#....#....#....",
    "##..#.#................#......#",
    ".....#...#..#......#..####.....",
    ".....##.....#....####......#...",
    "..........##..###.#....#.....##",
    "###...#.......#......##...#....",
    ".......##...#...#..#.##.#....##",
    ".....##.....##...##.....#..#..#",
    "......#.#.....#...#....#...#...",
    "..##........#...#..............",
    "..#........#.##.........#...#..",
    "#....#....#................#...",
  ];


  return json;
};
