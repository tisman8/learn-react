function Scientist({person, profession, awards, discoveries}) {
  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <Avatar person={person} />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.count} </b>
          ({awards.all})
        </li>
        <li>
          <b>Discovered: </b>
          {discoveries}
        </li>
      </ul>
    </section>
  )
}

function Avatar({person}) {
  return (
    <img
      className="avatar"
      src={'https://i.imgur.com/' + person.imageId + 's.jpg'}
      alt={person.name}
      width={70}
      height={70}
    />
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Scientist person={{ name: 'Maria Skłodowska-Curie', imageId: 'szV5sdG' }}
        profession={'physicist and chemist'}
        awards={{ all: 'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal', count: 4 }}
        discoveries={'polonium (element)'} />
      <Scientist person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2'}}
        profession={'geochemist'}
        awards={{ all: 'Miyake Prize for geochemistry, Tanaka Prize', count: 2}}
        discoveries={'a method for measuring carbon dioxide in seawater'} />
    </div>
  );
}
