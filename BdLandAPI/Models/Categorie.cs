using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BdLandAPI.Models
{
    public class Categorie
    {
        private int id;
        private string categorieType;

        public int Id { get => id; set => id = value; }
        public string CategorieType { get => categorieType; set => categorieType = value; }

        [JsonIgnore]
        public List<Bd> Annonces { get; set; }

        public Categorie()
        {
            Annonces = new List<Bd>();
        }
    }
}
