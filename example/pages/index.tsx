import React from 'react'
import {
  Button,
  Card,
  DatePicker,
  Input,
  Table,
} from '../components/da-vinci-ui'
export default function Home() {
  return (
    <div className="text-red-500">
      <DatePicker
        date={new Date()}
        onChange={(a) => {
          console.log({ a })
        }}
      />
      <Card>
        <Input placeholder="aa" />
      </Card>
      <Button
        onClick={() => {
          console.log()
        }}
      >
        {' '}
        Yo
      </Button>
      <Table
        cols={[
          {
            search: true,
            title: 'name',
            width: 'w-[200px]',
          },
          {
            title: 'age',
            width: 'w-[200px]',
          },
          {
            title: 'grade',
            width: 'w-[200px]',
          },
          {
            title: 'email',
            width: 'w-[200px]',
          },
        ]}
        rows={[
          {
            age: '19',
            email: 'Breana61@hotmail.com',
            grade: '7',
            name: 'Desiree Langworth',
          },
          {
            age: '78',
            email: 'Logan44@yahoo.com',
            grade: '3',
            name: 'Shelley Swift',
          },
          {
            age: '38',
            email: 'Louie_Schmeler@hotmail.com',
            grade: '9',
            name: 'Rogelio Murphy',
          },
          {
            age: '93',
            email: 'Milton_Hudson@hotmail.com',
            grade: '1',
            name: 'Kenny Haag',
          },
          {
            age: '62',
            email: 'Katharina.Hettinger45@yahoo.com',
            grade: '8',
            name: 'Gustavo Block',
          },
          {
            age: '23',
            email: 'Franco_Donnelly@gmail.com',
            grade: '3',
            name: 'Traci Stanton',
          },
          {
            age: '59',
            email: 'Kenny39@yahoo.com',
            grade: '3',
            name: 'Pedro Huel MD',
          },
          {
            age: '77',
            email: 'Jade96@hotmail.com',
            grade: '5',
            name: 'Miss Jorge Roberts',
          },
          {
            age: '24',
            email: 'Alvena.Hyatt@yahoo.com',
            grade: '6',
            name: 'Dr. Annette Yundt',
          },
          {
            age: '99',
            email: 'Aurore.Spinka68@yahoo.com',
            grade: '4',
            name: 'Geraldine Lesch',
          },
          {
            age: '12',
            email: 'Roman_Hintz81@gmail.com',
            grade: '9',
            name: 'Albert Ratke',
          },
          {
            age: '70',
            email: 'Janis_Prosacco@yahoo.com',
            grade: '1',
            name: 'Ignacio Kunze',
          },
          {
            age: '14',
            email: 'Caleigh.Nikolaus@yahoo.com',
            grade: '6',
            name: 'Penny Padberg',
          },
          {
            age: '99',
            email: 'Myrtle48@yahoo.com',
            grade: '4',
            name: 'Maggie Satterfield',
          },
          {
            age: '71',
            email: 'Loyce_MacGyver@hotmail.com',
            grade: '7',
            name: 'Julie Kiehn',
          },
          {
            age: '59',
            email: 'Aracely.Gerhold@gmail.com',
            grade: '5',
            name: 'Dennis Schimmel',
          },
          {
            age: '31',
            email: 'Bertram.Kunde@gmail.com',
            grade: '8',
            name: 'Pearl Nikolaus',
          },
          {
            age: '42',
            email: 'Eddie.Feeney@hotmail.com',
            grade: '6',
            name: 'Donald Mraz',
          },
          {
            age: '80',
            email: 'Juwan_Williamson32@yahoo.com',
            grade: '8',
            name: 'Ann Pollich',
          },
          {
            age: '88',
            email: 'Johnnie_Franey@yahoo.com',
            grade: '6',
            name: 'Bernadette Powlowski',
          },
          {
            age: '85',
            email: 'Gwen69@hotmail.com',
            grade: '1',
            name: 'Blanche Herman DDS',
          },
          {
            age: '24',
            email: 'Yadira20@hotmail.com',
            grade: '9',
            name: 'Gerard Swaniawski',
          },
          {
            age: '47',
            email: 'Cheyanne_Heathcote@gmail.com',
            grade: '2',
            name: 'Simon Fahey',
          },
          {
            age: '77',
            email: 'Kraig.Schneider95@gmail.com',
            grade: '7',
            name: 'Claudia Stracke',
          },
          {
            age: '76',
            email: 'Aryanna_Bode@yahoo.com',
            grade: '3',
            name: 'Pete Runte',
          },
          {
            age: '82',
            email: 'Rey.Hirthe@gmail.com',
            grade: '4',
            name: 'Beulah Watsica',
          },
          {
            age: '65',
            email: 'Emiliano_Green@yahoo.com',
            grade: '9',
            name: 'Mona Wisozk',
          },
          {
            age: '31',
            email: 'Micaela.McLaughlin33@yahoo.com',
            grade: '2',
            name: 'Mabel Shields',
          },
          {
            age: '94',
            email: 'Josianne.Armstrong10@gmail.com',
            grade: '9',
            name: 'Ora Littel',
          },
          {
            age: '45',
            email: 'Jakob44@yahoo.com',
            grade: '2',
            name: 'Jonathon Lind',
          },
          {
            age: '47',
            email: 'Nathen51@yahoo.com',
            grade: '1',
            name: 'Angie Hane',
          },
          {
            age: '43',
            email: 'Thora_Mraz@gmail.com',
            grade: '6',
            name: 'Kristina Ernser',
          },
          {
            age: '44',
            email: 'Garrick_Nicolas5@hotmail.com',
            grade: '1',
            name: 'Peter Okuneva',
          },
          {
            age: '61',
            email: 'Noelia_Gibson@hotmail.com',
            grade: '8',
            name: 'Elaine Sawayn',
          },
          {
            age: '26',
            email: 'Kailee71@yahoo.com',
            grade: '5',
            name: 'Charlie Willms',
          },
          {
            age: '80',
            email: 'Amelie32@hotmail.com',
            grade: '8',
            name: 'Andrew Bruen',
          },
          {
            age: '42',
            email: 'Clint71@gmail.com',
            grade: '6',
            name: 'Francis Sanford',
          },
          {
            age: '50',
            email: 'Lauretta14@yahoo.com',
            grade: '9',
            name: 'Ignacio Baumbach',
          },
          {
            age: '13',
            email: 'Conor13@gmail.com',
            grade: '1',
            name: 'Robin Bednar',
          },
          {
            age: '53',
            email: 'Kari.Kling66@gmail.com',
            grade: '5',
            name: "Kyle O'Hara",
          },
          {
            age: '30',
            email: 'Deanna_Steuber49@yahoo.com',
            grade: '1',
            name: 'Kristi Kulas',
          },
          {
            age: '99',
            email: 'Talon_Boehm80@hotmail.com',
            grade: '6',
            name: "Ernesto D'Amore",
          },
          {
            age: '96',
            email: 'Maribel.Jast@gmail.com',
            grade: '9',
            name: 'Mandy Harber',
          },
          {
            age: '73',
            email: 'Halie.Heaney@yahoo.com',
            grade: '2',
            name: 'Joyce Ferry',
          },
          {
            age: '12',
            email: 'Carter.Barrows@yahoo.com',
            grade: '1',
            name: 'Colin Grady',
          },
          {
            age: '66',
            email: 'Floyd78@gmail.com',
            grade: '4',
            name: 'Gary Schuppe',
          },
          {
            age: '15',
            email: 'Maudie_Kohler@yahoo.com',
            grade: '4',
            name: 'Lewis Goldner',
          },
          {
            age: '43',
            email: 'Myah.Nolan2@gmail.com',
            grade: '6',
            name: 'Dr. Nina Kris',
          },
          {
            age: '13',
            email: 'Litzy_Hand98@yahoo.com',
            grade: '4',
            name: 'Wade Powlowski',
          },
          {
            age: '14',
            email: 'Ismael_Murphy58@hotmail.com',
            grade: '7',
            name: 'Mrs. Cody Jacobi PhD',
          },
          {
            age: '23',
            email: 'Miller.Senger24@yahoo.com',
            grade: '4',
            name: 'Cecelia Cruickshank',
          },
          {
            age: '58',
            email: 'Ines.Hilll59@hotmail.com',
            grade: '1',
            name: 'Kerry Hoeger',
          },
          {
            age: '89',
            email: 'Jamaal_Schaden@hotmail.com',
            grade: '4',
            name: 'Orville Hansen',
          },
          {
            age: '84',
            email: 'Adeline_Hand15@gmail.com',
            grade: '6',
            name: 'Edgar Abernathy',
          },
          {
            age: '93',
            email: 'Nat42@gmail.com',
            grade: '7',
            name: 'Amy Ritchie',
          },
          {
            age: '16',
            email: 'Jarrod78@hotmail.com',
            grade: '8',
            name: 'Miranda Kshlerin',
          },
          {
            age: '83',
            email: 'Nakia.Bergstrom@hotmail.com',
            grade: '7',
            name: 'Penny Keebler',
          },
          {
            age: '36',
            email: 'Ricky65@yahoo.com',
            grade: '1',
            name: 'Dan Kuhic',
          },
          {
            age: '30',
            email: 'Rickie_Renner@yahoo.com',
            grade: '8',
            name: 'Dallas Hermiston',
          },
          {
            age: '20',
            email: 'Ron_Larson@gmail.com',
            grade: '4',
            name: 'Arturo Mann',
          },
          {
            age: '82',
            email: 'Verlie.Halvorson@yahoo.com',
            grade: '8',
            name: 'Krista Bins',
          },
          {
            age: '35',
            email: 'Kian.McKenzie27@yahoo.com',
            grade: '7',
            name: 'Marjorie Conroy',
          },
          {
            age: '66',
            email: 'Bridgette56@yahoo.com',
            grade: '9',
            name: 'Mr. Sarah Hagenes',
          },
          {
            age: '84',
            email: 'Uriel_West56@gmail.com',
            grade: '2',
            name: 'Mrs. Ronald Becker',
          },
          {
            age: '27',
            email: 'Anahi6@yahoo.com',
            grade: '5',
            name: 'Yvonne Sporer',
          },
          {
            age: '73',
            email: 'Arnaldo.Bins15@gmail.com',
            grade: '4',
            name: 'Richard Hills Jr.',
          },
          {
            age: '31',
            email: 'Maiya.Roob73@yahoo.com',
            grade: '2',
            name: 'Dr. Vanessa Pollich',
          },
          {
            age: '47',
            email: 'Markus_Ratke26@gmail.com',
            grade: '3',
            name: 'Myra Pfannerstill',
          },
          {
            age: '31',
            email: 'Kristina.Vandervort@hotmail.com',
            grade: '4',
            name: 'Doreen Lowe',
          },
          {
            age: '95',
            email: 'Damon51@gmail.com',
            grade: '3',
            name: 'Kelvin Erdman Jr.',
          },
          {
            age: '16',
            email: 'Kristopher_Predovic42@yahoo.com',
            grade: '6',
            name: 'Steven Stokes',
          },
          {
            age: '27',
            email: 'Donavon.Shanahan@hotmail.com',
            grade: '4',
            name: 'Louise Weber',
          },
          {
            age: '70',
            email: 'Beau46@hotmail.com',
            grade: '6',
            name: 'Mrs. Nadine Bode',
          },
          {
            age: '26',
            email: 'Gaston.Jones97@hotmail.com',
            grade: '7',
            name: 'Luis Kerluke',
          },
          {
            age: '13',
            email: 'Brayan.Sipes@gmail.com',
            grade: '9',
            name: 'Mr. Sophie Johnston',
          },
          {
            age: '77',
            email: 'Haleigh_Treutel@hotmail.com',
            grade: '9',
            name: 'Virginia Maggio',
          },
          {
            age: '86',
            email: 'Fidel_Mayer92@hotmail.com',
            grade: '3',
            name: 'Don Rau',
          },
          {
            age: '99',
            email: 'Hilbert.Ortiz73@gmail.com',
            grade: '6',
            name: 'Harvey Farrell',
          },
          {
            age: '69',
            email: 'Peyton_Jerde@hotmail.com',
            grade: '5',
            name: 'Ian Doyle',
          },
          {
            age: '90',
            email: 'Wendell84@gmail.com',
            grade: '8',
            name: 'Mercedes Bernier',
          },
          {
            age: '93',
            email: 'Rhoda_Braun85@gmail.com',
            grade: '9',
            name: "Tabitha O'Reilly",
          },
          {
            age: '37',
            email: 'Flossie_Kirlin@gmail.com',
            grade: '6',
            name: 'Dr. Stella Frami',
          },
          {
            age: '60',
            email: 'Cornell14@gmail.com',
            grade: '6',
            name: 'Marlon Legros',
          },
          {
            age: '34',
            email: 'Rolando17@yahoo.com',
            grade: '5',
            name: "Pablo O'Reilly",
          },
          {
            age: '20',
            email: 'Marjory18@gmail.com',
            grade: '2',
            name: 'Eva Gutkowski',
          },
          {
            age: '76',
            email: 'Roger_Goyette@hotmail.com',
            grade: '2',
            name: 'Irene Bednar II',
          },
          {
            age: '89',
            email: 'Emery.Jerde@yahoo.com',
            grade: '4',
            name: 'Miss Chris Frami',
          },
          {
            age: '12',
            email: 'Candida51@yahoo.com',
            grade: '4',
            name: 'Nathaniel Friesen',
          },
          {
            age: '76',
            email: 'Lacey44@gmail.com',
            grade: '5',
            name: 'Jeanne Padberg',
          },
          {
            age: '78',
            email: 'Winifred91@yahoo.com',
            grade: '4',
            name: 'Grady Williamson',
          },
          {
            age: '82',
            email: 'Monique92@yahoo.com',
            grade: '2',
            name: 'Eloise Treutel Jr.',
          },
          {
            age: '24',
            email: 'Forest29@hotmail.com',
            grade: '9',
            name: 'Victoria Doyle',
          },
          {
            age: '79',
            email: 'Jarrett9@yahoo.com',
            grade: '4',
            name: 'Jeffrey Kirlin',
          },
          {
            age: '14',
            email: 'Virginie.Leffler@hotmail.com',
            grade: '3',
            name: 'Miss Theodore Kuhlman',
          },
          {
            age: '33',
            email: 'Chanel_Pollich14@gmail.com',
            grade: '1',
            name: 'Dr. Erika Goldner',
          },
          {
            age: '86',
            email: 'Bridgette18@hotmail.com',
            grade: '9',
            name: 'Daniel Wisoky',
          },
          {
            age: '53',
            email: 'Rasheed26@hotmail.com',
            grade: '3',
            name: 'Julian Russel DDS',
          },
          {
            age: '53',
            email: 'Seamus92@gmail.com',
            grade: '5',
            name: 'Dr. Alvin Howe III',
          },
          {
            age: '17',
            email: 'Torrey.Willms56@hotmail.com',
            grade: '1',
            name: 'Agnes Hauck',
          },
          {
            age: '67',
            email: 'Felton.OReilly61@yahoo.com',
            grade: '9',
            name: 'Glen Klein',
          },
        ]}
      />
    </div>
  )
}
