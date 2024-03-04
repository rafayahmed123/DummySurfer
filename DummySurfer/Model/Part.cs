using System;
namespace DummySurfer.Models
{
    public class Part
    {
        //public string Item { get; set; }
        ////public string Description { get; set; }
        //public string UOM { get; set; }
        ////public string MaterialType { get; set; }
        ////public string Revision { get; set; }
        //public int MaterialQuantity { get; set; }
        //public int Sequence { get; set; }

        public int Sequence { get; set; }
        public string Item { get; set; }
        public int MaterialQuantity { get; set; }
        public string OUM { get; set; }
        public string PUM { get; set; }



        public Part()
        {


        }
    }
}

