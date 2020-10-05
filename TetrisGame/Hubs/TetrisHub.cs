using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TetrisGame.Models;

namespace TetrisGame.Hubs
{
    [Authorize]
    public class TetrisHub: Hub
    {
        public override Task OnConnectedAsync()
        {
            var userId = Context.User.Claims.First(c => c.Type == "UserID").Value;
            ConnectedUser.Ids.Add(userId, Context.ConnectionId);
            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception exeption)
        {
            var userId = Context.User.Claims.First(c => c.Type == "UserID").Value;
            ConnectedUser.Ids.Remove(userId);
            return base.OnDisconnectedAsync(exeption);
        }


        public Task SendMessage(string user, string msgText)
        {
            return Clients.Others.SendAsync("ReceiveOne", user, msgText);
        }

        public Task SpawPiece(int x, int y, string color, int [][] shape)
        {
            return Clients.Others.SendAsync("Spawn", x, y, color, shape);
        }
    }
}
