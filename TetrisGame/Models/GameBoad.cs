using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TetrisGame.Models
{
    public class GameBoad
    {
        private int Height { get; set; }
        private int Width { get; set; }
        private int[][] BoardMatrix { get; set; }

        public GameBoad(int Height, int Width)
        {
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

        public int[][] getBoadr()
        {
            return this.BoardMatrix;
        }

        public int getHeight()
        {
            return this.Height;
        }

        public int getWidth()
        {
            return this.Width;
        }
    }
}
