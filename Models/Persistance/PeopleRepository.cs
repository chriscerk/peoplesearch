using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace peoplesearch.Models.Persistance
{
    public class PeopleRepository : IPeopleRepository
    {

        private static ConcurrentDictionary<string, Person> _people =
              new ConcurrentDictionary<string, Person>();

        private static readonly ExamplePeopleList _list = new ExamplePeopleList();

        public PeopleRepository()
        {
            _list.ExampleList.ForEach(p => _people.TryAdd(p.Id.ToString(), p));
        }

        public void Add(Person p)
        {
            _people.TryAdd(p.Id.ToString(), p);
        }

        public IEnumerable<Person> GetAll()
        {
            return _people.Values;
        }

        public Person Find(string key)
        {
            Person p;
            _people.TryGetValue(key, out p);
            return p;
        }

        public Person Remove(string key)
        {
            Person p;
            _people.TryRemove(key, out p);
            return p;
        }

        public void Update(Person p)
        {
            _people.TryUpdate(p.Id.ToString(), p, p);
        }
    }
}
