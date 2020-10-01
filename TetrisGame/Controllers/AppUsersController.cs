using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
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

        [HttpPost("Login")]
        public async Task<IActionResult> LoginAppUSer(UserResource user)
        {
            var appUser = await _userManager.FindByNameAsync(user.name);

            if (appUser != null && await _userManager.CheckPasswordAsync(appUser, user.password))
            {
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[] {
                new Claim ("UserID", appUser.Id.ToString())
                }),
                    Expires = DateTime.UtcNow.AddMonths(6),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes("0123456789123456")), SecurityAlgorithms.HmacSha256Signature)
                };
                var TokenHandler = new JwtSecurityTokenHandler();
                var securityToken = TokenHandler.CreateToken(tokenDescriptor);
                var token = TokenHandler.WriteToken(securityToken);
                return Ok(new { token });
            }
            else return BadRequest();
        }
    }
}