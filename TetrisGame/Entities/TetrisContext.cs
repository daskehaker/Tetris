using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TetrisGame.Models;


namespace TetrisGame.Entities
{
    public class TetrisContext: IdentityDbContext
    {
        public TetrisContext(DbContextOptions options): base(options) { }

        public DbSet<AppUser> AppUsers { get; set; }
    }
}
