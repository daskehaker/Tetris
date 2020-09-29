using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TetrisGame.Controllers.Resource;
using TetrisGame.Models;

namespace TetrisGame.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppUsersController : ControllerBase
    {
        private UserManager<AppUser> _userManager;
        //private SignInManager<AppUser> _signInManager;

        public AppUsersController(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
           // _signInManager = signInManager;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> PostAppUSer(UserResource user)
        {
            var appUser = new AppUser()
            {
                UserName = user.name,
                Name = user.name
            };

            try
            {
                var result = await _userManager.CreateAsync(appUser, user.password);
                return Ok(result);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}