import { useState } from "react";

const gridDefault = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 2, 2, 2, 2, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],
  [0, 2, 2, 2, 2, 2, 2, 3, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 3, 2, 2, 2, 2, 2, 2, 0],
  [0, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 0],
  [0, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 0],
  [0, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 0],
  [0, 2, 2, 2, 2, 2, 2, 1, 1, 4, 2, 2, 2, 2, 2, 2, 4, 1, 1, 4, 2, 2, 2, 2, 2, 0],
  [0, 3, 2, 2, 2, 4, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 2, 2, 2, 4, 2, 1, 1, 1, 1, 1, 1, 1, 5, 0],
  [0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 0],
  [0, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 2, 2, 2, 2, 0],
  [0, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 0],
  [0, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 0],
  [0, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 4, 2, 0],
  [0, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0],
  [0, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 4, 2, 2, 3, 0],
  [0, 2, 2, 2, 2, 2, 2, 4, 2, 1, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 0],
  [0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 4, 2, 2, 2, 2, 2, 2, 0],
  [0, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 0],
  [0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 3, 0],
  [0, 2, 2, 2, 2, 2, 2, 4, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 5, 0],
  [0, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0],
  [0, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 4, 2, 2, 2, 2, 2, 2, 0],
  [0, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 0],
  [0, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 0],
  [0, 2, 2, 2, 2, 2, 2, 3, 5, 3, 2, 2, 2, 2, 2, 2, 3, 1, 3, 2, 2, 2, 2, 2, 2, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

export function GamePage() {
  const [grid, setGrid] = useState(gridDefault);

  const [number, setNumber] = useState(0);

  const [phase, setPhase] = useState({ status: "the beginning of the first stages of the move", player: 1, text: "Киньте кубики" });

  const [cubes, setCubes] = useState<{ first: number | string; second: number | string; total: number }>({ first: 0, second: 0, total: 0 });

  return (
    <section className="w-screen h-screen">
      <Map grid={grid} />
      <button onClick={() => randomCubes(phase, setPhase, setCubes)}>Бросить кубики</button>
      <div>Первый кубик: {cubes.first}</div>
      <div>Второй кубик: {cubes.second}</div>
      <div>Итого: {cubes.total}</div>
    </section>
  );

  function Map({ grid }: { grid: number[][] }) {
    return grid.map((row, i) => (
      <div key={i} className={"h-7"}>
        {row.map((val, j) => (
          <div
            key={i * row.length + j}
            className={`w-7 h-7 inline-block ${findColorForTile(val)}`}
            onClick={() => findingPathsForThePlayer(i, j, i, j, number)}
          ></div>
        ))}
      </div>
    ));
  }

  function findingPathsForThePlayer(x: number, y: number, xStart: number, yStart: number, number: number) {
    if (grid[xStart][yStart] != 5) {
      return;
    }

    grid[x][y] = 6;
    setGrid([...grid]);

    if (grid[xStart][yStart] == grid[x][y]) {
      grid[xStart][yStart] = 5;
    }

    for (const [dx, dy] of [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ]) {
      const nextX = x + dx;
      const nextY = y + dy;

      if (withinGrid(grid.length, grid[0].length, nextX, nextY) && grid[nextX][nextY] === 1) {
        // if (Math.abs(nextX - xStart) + Math.abs(nextY - yStart) <= cubes.total) {
        if (number > cubes.total) {
          console.log(number, [x, y]);
          grid[nextX][nextY] = 1;
          return;
        }

        setGrid(grid);

        number++;

        findingPathsForThePlayer(nextX, nextY, xStart, yStart, number);
        // }
      }
    }
  }

  function withinGrid(h: number, w: number, x: number, y: number) {
    return 0 <= x && x < w && 0 <= y && y < h;
  }

  function randomCubes(
    phase: {
      status: string;
      player: number;
    },
    setPhase: React.Dispatch<
      React.SetStateAction<{
        status: string;
        player: number;
        text: string;
      }>
    >,
    setCubes: React.Dispatch<
      React.SetStateAction<{
        first: number | string;
        second: number | string;
        total: number;
      }>
    >
  ) {
    if (phase.status != "the beginning of the first stages of the move") {
      return;
    }
    // const firstCube = Math.floor(Math.random() * 6) + 1;
    // const secondCube = Math.floor(Math.random() * 6) + 1;
    const firstCube = 6;
    const secondCube = 6;

    const answer: { first: number | string; second: number | string; total: number } = {
      first: 0,
      second: 0,
      total: 0,
    };

    switch (firstCube) {
      case 1:
        answer.first = "Возьмите карту";
        break;
      default:
        answer.first = firstCube;
        break;
    }

    switch (secondCube) {
      case 1:
        answer.second = "Возьмите карту";
        break;
      default:
        answer.second = secondCube;
        break;
    }

    answer.total = firstCube + secondCube;

    setCubes(answer);

    setPhase({ ...phase, status: "dice thrown", text: "Сделайте ход" });

    console.log(answer);
  }

  function findColorForTile(val: number): string {
    switch (val) {
      case 0:
        return "bg-blue-600"; //* Граница карты
      case 1:
        return "bg-green-600 border-2 border-black"; //* Клетки для перемещение персонажа
      case 2:
        return "bg-red-600"; //* Клетки комнат
      case 3:
        return "bg-black"; //* Пустые зоны
      case 4:
        return "bg-orange-400"; //* Двери в комнату
      case 5:
        return "bg-pink-600 border-2 border-black"; //* Позиция игроков
      case 6:
        return "bg-white border-2 border-black"; //* Возможные хода
      default:
        return "";
    }
  }
}
