using DummySurfer.Models;
using Microsoft.AspNetCore.Mvc;

namespace DummySurfer.Controllers;

[ApiController]
[Route("[controller]")]
public class PartsController : ControllerBase
{

    private readonly ILogger<PartsController> _logger;

    public PartsController(ILogger<PartsController> logger)
    {
        _logger = logger;
    }


    // Initializing an array of objects using anonymous types
    private static readonly Part[] Parts = new Part[]
   {
    new Part { Sequence = 1, Item = "Charger", MaterialQuantity = 30, OUM = "PC" },
    new Part { Sequence = 2, Item = "Mouse", MaterialQuantity = 25, OUM = "PC"  },
    new Part { Sequence = 3, Item = "Keyboard", MaterialQuantity = 40, OUM = "PC"  },
    new Part { Sequence = 4, Item = "Screen", MaterialQuantity = 40, OUM = "PC"  },
    new Part { Sequence = 5, Item = "Stand", MaterialQuantity = 40, OUM = "PC"  },
    new Part { Sequence = 11, Item = "Charger", MaterialQuantity = 30, OUM = "PC" },
    new Part { Sequence = 21, Item = "Mouse", MaterialQuantity = 25, OUM = "PC"  },
    new Part { Sequence = 31, Item = "Keyboard", MaterialQuantity = 40, OUM = "PC"  },
    new Part { Sequence = 41, Item = "Screen", MaterialQuantity = 40, OUM = "PC"  },
    new Part { Sequence = 51, Item = "Stand", MaterialQuantity = 40, OUM = "PC"  },
    new Part { Sequence = 12, Item = "Charger", MaterialQuantity = 30, OUM = "PC" },
    new Part { Sequence = 22, Item = "Mouse", MaterialQuantity = 25, OUM = "PC"  },
    new Part { Sequence = 32, Item = "Keyboard", MaterialQuantity = 40, OUM = "PC"  },
    new Part { Sequence = 42, Item = "Screen", MaterialQuantity = 40, OUM = "PC"  },
    new Part { Sequence = 52, Item = "Stand", MaterialQuantity = 40, OUM = "PC"  },
    new Part { Sequence = 13, Item = "Charger", MaterialQuantity = 30, OUM = "PC" },
    new Part { Sequence = 23, Item = "Mouse", MaterialQuantity = 25, OUM = "PC"  },
    new Part { Sequence = 33, Item = "Keyboard", MaterialQuantity = 40, OUM = "PC"  },
    new Part { Sequence = 43, Item = "Screen", MaterialQuantity = 40, OUM = "PC"  },
    new Part { Sequence = 53, Item = "Stand", MaterialQuantity = 40, OUM = "PC"  },
   };


    // Initializing an array of objects using anonymous types
    private static readonly Structure[] Structures = new Structure[]
   {
    new Structure { Sequence = 1, Item = "Charger", MaterialQuantity = 30, OUM = "PC" },
    new Structure { Sequence = 2, Item = "Mouse", MaterialQuantity = 25, OUM = "PC"  },
    new Structure { Sequence = 3, Item = "Keyboard", MaterialQuantity = 40, OUM = "PC"  },
    new Structure { Sequence = 4, Item = "Screen", MaterialQuantity = 40, OUM = "PC"  },
    new Structure { Sequence = 5, Item = "Stand", MaterialQuantity = 40, OUM = "PC"  },
    new Structure { Sequence = 11, Item = "Charger", MaterialQuantity = 30, OUM = "PC" },
    new Structure { Sequence = 21, Item = "Mouse", MaterialQuantity = 25, OUM = "PC"  },
    new Structure { Sequence = 31, Item = "Keyboard", MaterialQuantity = 40, OUM = "PC"  },
    new Structure { Sequence = 41, Item = "Screen", MaterialQuantity = 40, OUM = "PC"  },
    new Structure { Sequence = 51, Item = "Stand", MaterialQuantity = 40, OUM = "PC"  },
    new Structure { Sequence = 12, Item = "Charger", MaterialQuantity = 30, OUM = "PC" },
    new Structure { Sequence = 22, Item = "Mouse", MaterialQuantity = 25, OUM = "PC"  },
    new Structure { Sequence = 32, Item = "Keyboard", MaterialQuantity = 40, OUM = "PC"  },
    new Structure { Sequence = 42, Item = "Screen", MaterialQuantity = 40, OUM = "PC"  },
    new Structure { Sequence = 52, Item = "Stand", MaterialQuantity = 40, OUM = "PC"  },
    new Structure { Sequence = 13, Item = "Charger", MaterialQuantity = 30, OUM = "PC" },
    new Structure { Sequence = 23, Item = "Mouse", MaterialQuantity = 25, OUM = "PC"  },
    new Structure { Sequence = 33, Item = "Keyboard", MaterialQuantity = 40, OUM = "PC"  },
    new Structure { Sequence = 43, Item = "Screen", MaterialQuantity = 40, OUM = "PC"  },
    new Structure { Sequence = 53, Item = "Stand", MaterialQuantity = 40, OUM = "PC"  },
   };


    [HttpGet]
    [Route("GetStructureByDescription")]
    public Structure GetStructureByDescription(string description)
    {
        var matchingObject = Structures.FirstOrDefault(com => com.Item == description);

        return matchingObject;
    }

    [HttpGet]
    [Route("GetStructureByNumber")]
    public Structure GetStructureByNumber(int sequence)
    {
        var matchingObject = Structures.FirstOrDefault(com => com.Sequence == sequence);

        return matchingObject;
    }

    [HttpGet]
    [Route("GetRelatedComponents")]
    public List<Part> GetRelatedComponents(string OUM)
    {
        var filteredObjects = Parts.Where(com => com.OUM == OUM).ToList();

        return filteredObjects;
    }

    [HttpGet]
    [Route("GetRelatedStructures")]
    public List<Structure> GetRelatedStructures(string OUM)
    {
        var filteredObjects = Structures.Where(com => com.OUM == OUM).ToList();

        return filteredObjects;
    }
}

