using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TetrisGame.Models
{
    public class GameBoad
    {
        public string Player { get; set; }
        public int Height { get; set; }
        public int Width { get; set; }
        public int[][] BoardMatrix { get; set; }

        public GameBoad(string Id, int Height, int Width)
        {
            this.Player = Id;
            this.Height = Height;
            this.Width = Width;
            createBoard(Height, Width);
        }

        private void createBoard(int height, int width)
        {
            this.BoardMatrix = new int[height][];
            for (int i = 0; i < height; i++)
            {
                this.BoardMatrix[i]= new int[width];
            }

        }
    }
}
