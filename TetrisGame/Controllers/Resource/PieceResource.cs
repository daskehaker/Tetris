using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TetrisGame.Controllers.Resource
{
    public class PieceResource
    {
        public int x { get; set; }
        public int y { get; set; }
        public string color { get; set; }
        public int[][] shape { get; set; }
    }
}
