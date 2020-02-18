using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BdAPI.Models
{
    public class Categorie
    {
        private int id;
        private string categorie_type;

        public int Id { get => id; set => id = value; }
        public string Categorie_type { get => categorie_type; set => categorie_type = value; }

        [JsonIgnore]
        public List<Bd> BdList { get; set; }

        public Categorie()
        {
            BdList = new List<Bd>();
        }
    }
}
