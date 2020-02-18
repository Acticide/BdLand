using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BdAPI.Models
{
    public class Bd
    {
        private int id;
        private string titre;
        private string bd_description;
        private string autheur;
        private DateTime date_post;
        private string contenu;
        private string bd_image;
        private int categorieId;

        public int Id { get => id; set => id = value; }
        public string Titre { get => titre; set => titre = value; }
        public string Bd_description { get => bd_description; set => bd_description = value; }
        public string Autheur { get => autheur; set => autheur = value; }
        public DateTime Date_post { get => date_post; set => date_post = value; }
        public string Contenu { get => contenu; set => contenu = value; }
        public string Bd_image { get => bd_image; set => bd_image = value; }
        public int CategorieId { get => categorieId; set => categorieId = value; }

        public Categorie Categorie { get; set; }
    }
}
