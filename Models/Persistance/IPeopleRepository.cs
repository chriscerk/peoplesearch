using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace peoplesearch.Models.Persistance
{
    public interface IPeopleRepository
    {
        void Add(Person p);
        IEnumerable<Person> GetAll();
        Person Find(string key);
        Person Remove(string key);
        void Update(Person p);
    }
}
