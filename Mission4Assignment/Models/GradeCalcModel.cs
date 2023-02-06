using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Mission4Assignment.Models
{
    // these are the models where there are the set and get and the data validation to make sure the numbers are between 0 and 100
    public class GradeCalcModel
    {
        [Required]
        [Range(0,100)]
        public int Assign {get;set;}

        [Required]
        [Range(0,100)]
        public int Quiz { get; set; }

        [Required]
        [Range(0, 100)]
        public int Tex { get; set; }

        [Required]
        [Range(0, 100)]
        public int Mid { get; set; }

        [Required]
        [Range(0, 100)]
        public int Final { get; set; }

        [Required]
        [Range(0, 100)]
        public int Projects { get; set; }
    }
}
