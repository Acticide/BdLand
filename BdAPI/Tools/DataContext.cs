using BdAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BdAPI.Tools
{
    public class DataContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=(LocalDb)\BddBdLand;Integrated Security=True");
        }

        public DbSet<Bd> Bd { get; set; }
        public DbSet<Categorie> Categorie { get; set; }


    }
}
