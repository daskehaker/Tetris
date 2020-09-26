using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TetrisGame.ReqDto
{
    public class PieceDto
    {
        public int x { get; set; }
        public int y { get; set; }
        public string color { get; set; }
        public int[][] shape { get; set; }

        public PieceDto(int x, int y, string color)
        {
            this.x = x;
            this.y = y;
            this.color = color;

            int[][] arr = new int[3][];
            arr[0] = new int[3] { 2, 0, 0 };
            arr[1] = new int[3] { 2, 2, 2 };
            arr[2] = new int[3] { 0, 0, 0 };

            this.shape = arr;
        }

        public void move()
        {
            this.x++;
        }
    }
}
