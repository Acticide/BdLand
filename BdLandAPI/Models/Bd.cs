using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BdLandAPI.Models
{
    public class Bd
    {
        private int id;
        private string titre;
        private string description;
        private string autheur;
        private DateTime datePost;
        private string contenu;
        private string image;

        public int Id { get => id; set => id = value; }
        public string Titre { get => titre; set => titre = value; }
        public string Description { get => description; set => description = value; }
        public string Autheur { get => autheur; set => autheur = value; }
        public DateTime DatePost { get => datePost; set => datePost = value; }
        public string Contenu { get => contenu; set => contenu = value; }
        public string Image { get => image; set => image = value; }

        public Categorie Categorie { get; set; }

    }
}
