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

        public PieceDto(int x, int y, string color, int[][] shape)
        {
            this.x = x;
            this.y = y;
            this.color = color;
            this.shape = shape;
        }

        public void moveRight()
        {

            if(checkRight()) this.x++;
        }

        public void moveLeft()
        {
            if(checkLeft()) this.x--;
        }

        public void moveDown()
        {
            if (checkBottom()) this.y++;
        }

        private bool checkLeft()
        {
            if (this.x > 0) return true;
            return false;
        }

        private bool checkRight()
        {
            if (this.x < 7) return true;
            return false;
        }

        private bool checkBottom()
        {
            if (this.y < 18) return true;
            return false;
        }
    }
}
