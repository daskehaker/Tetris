using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TetrisGame.Entities;
using TetrisGame.Models;

namespace TetrisGame.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfilesController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly TetrisContext _tetrisContext;
        public UserProfilesController(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpGet]
        [Authorize]
        public async Task<AppUser> GetUsetProfile()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            return user;
        }

        [HttpGet("All")]
        public IList<AppUser> GetAllProfiles()
        {
            var appUsers = _userManager.Users.ToList();
            IList<AppUser> users = new List<AppUser>();
            appUsers.ForEach(u => users.Add(u));
            return users;
        }
    }
}