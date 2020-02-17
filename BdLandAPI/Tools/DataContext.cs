using BdLandAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BdLandAPI.Tools
{
    public class DataContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=(LocalDb)\CoursSql;Integrated Security=True");
        }

        public DbSet<Bd> Bd { get; set; }
        public DbSet<Categorie> Categorie { get; set; }


    }
}
