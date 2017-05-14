import * as React from 'react';

import Panel from './panel';

const react = <a href="https://facebook.github.io/react/">React</a>;
const redux = <a href="http://redux.js.org/">Redux</a>;
const immutablejs = <a href="https://facebook.github.io/immutable-js/">ImmutableJS</a>;
const typescript = <a href="https://www.typescriptlang.org/">TypeScript</a>;
const django = <a href="https://www.djangoproject.com/">Django</a>;
const drf = <a href="http://www.django-rest-framework.org/">Django Rest framework</a>;
const pi = <a href="https://techsupport.osisoft.com/products/pi-server/pi-data-archive/overview/">OSIsoft PI</a>;
const python = <a href="https://www.python.org/">Python</a>;
const fcc = <a href="https://www.freecodecamp.com/">Free Code Camp</a>;
const docker = <a href="https://www.docker.com/">Docker</a>;

const Portfolio = (): JSX.Element => (
  <section className="portfolio__container">
    <div className="portfolio__header">
      This section contains a collection of open source projects I have worked on,
      mostly as a hobby away from work. All projects have links to their github
      repositories, and most have sample projects hosted on this site you can
      navigate to by clicking their titles.
    </div>
    <hr></hr>
    <Panel
      title="Hierarchy"
      github="https://github.com/erik-sn/hierarchy"
      description={`
        An application used to build manufacturing analysis tools and
        dashboards. Built around "modules" that are assigned to a piece
        of the manufacturing hierarchy. Contains an admin interface and
        plotting utilities to make building and deploying new modules
        fast and flexible.
      `}
      link="https://devsandbox.io/hierarchy/atl/processing"
      images={[
        'https://res.cloudinary.com/dvr87tqip/image/upload/v1494783929/hierarchy1_cfyblg.png',
        'https://res.cloudinary.com/dvr87tqip/image/upload/v1494783927/hierarchy3_eymyi0.png',
        'https://res.cloudinary.com/dvr87tqip/image/upload/v1494783930/hierarchy2_znmy9k.png',
        'https://res.cloudinary.com/dvr87tqip/image/upload/v1494783929/hierarchy4_aygefg.png',
      ]}
      tech={[react, redux, typescript, immutablejs, drf]}
      textLeft={true}
    />
    <hr></hr>
    <Panel
      title="Tag Map"
      github="https://github.com/erik-sn/tagmap"
      description={`
        An analysis and mapping UI to describe the system of an
        OSIsoft PI Data Archive. These archives contain "tags" - each of which
        is connected to an industrial PLC. As more tags are added and
        equations are constructed the system becomes complex and difficult
        to reasona bout. This applications seeks to map out connections between
        tags and equations, then analyze and visualize them.
      `}
      link=""
      images={[
        'https://res.cloudinary.com/dvr87tqip/image/upload/v1494548734/tagmap1_iuso2z.png',
        'https://res.cloudinary.com/dvr87tqip/image/upload/v1494548734/tagmap2_zfjzsv.png',
      ]}
      tech={[react, redux, pi, drf]}
      textLeft={false}
    />
    <hr></hr>
    <Panel
      title="Xlwrap"
      github="https://github.com/erik-sn/xlwrap"
      description={`
        A python library that wraps openpyxl & xlrd to create a simpler, unified
        API that can be operated on .xls, .xlsx and .xlsm. Designed with simplicity
        in mind so that non-programmers (engineers, office workers, managers) can
        utilize it to automate daily tasks.
      `}
      link=""
      images={[]}
      tech={[python]}
      textLeft={true}
      height={175}
    />
    <hr></hr>
    <Panel
      title="Filter-Table"
      github="https://github.com/erik-sn/filter-table/"
      description={`A react component that takes in an array
      of JavaScript objects, a configuration object and converts
      it to a filterable, sortable table.
      `}
      link="https://devsandbox.io/filtertable"
      images={[
        'https://res.cloudinary.com/dvr87tqip/image/upload/v1494467879/filtertable1_h3h5it.png',
        'https://res.cloudinary.com/dvr87tqip/image/upload/v1494783929/filter_table_style_ytgoko.png',
      ]}
      tech={[typescript]}
      textLeft={false}
    />
    <hr></hr>
    <Panel
      title="Axelrod API"
      github="https://github.com/Axelrod-Python/axelrod-api/"
      description={`
        An open source API based on the Axelrod python library
        used to study game theory surrounding the "Prisoner's Dilemma". This
        research is based on David Axelrod's 1980's tournament where game
        theorists were invited to submit "strategies" to compete. The API
        provides start tournaments and retrieve their results.
      `}
      link="https://devsandbox.io/axelrod/api/"
      images={[
        'https://res.cloudinary.com/dvr87tqip/image/upload/v1494461739/axelrod_api_amok9n.png',
        'https://res.cloudinary.com/dvr87tqip/image/upload/v1494461739/axelrod_api2_mal2fs.png',
      ]}
      tech={[python, drf, docker]}
      textLeft={true}
    />
    <hr></hr>
    <Panel
      title="Axelrod UI"
      github="https://github.com/Axelrod-Python/axelrod-ui/"
      description={`
        User interface to interact with tournaments, matches
        and moran processes for the axelrod library. Built on top of the Axelrod API
        and designed to emulate basic operations that the python based library uses. This
        includes starting a contest then retrieving and visualizing results.
      `}
      link="https://devsandbox.io/axelrod"
      images={[
        'https://res.cloudinary.com/dvr87tqip/image/upload/v1494461399/axelrod3_k0gmur.png',
        'https://res.cloudinary.com/dvr87tqip/image/upload/v1494461399/axelrod2_jbatj8.png',
        'https://res.cloudinary.com/dvr87tqip/image/upload/v1494461398/axelrod1_u0ykaj.png',
      ]}
      tech={[react, redux, typescript, docker]}
      textLeft={false}
    />
    <hr></hr>
    <Panel
      title="Web Application Boilerplate"
      github="https://github.com/erik-sn/webapp/"
      description={`
        A boilerplate web application implementing Django, Django Rest Framework,
        React & Redux as the core technologies. This represents a collection of
        tools and utilities that have been found useful when generating web applications
        for both hobby and work projects. Django & DRF are used for the server side, and
        a react application in ES6 JavaScript or TypeScript for the client side.
      `}
      link=""
      images={[]}
      tech={[react, redux, typescript, django, drf]}
      textLeft={true}
      height={175}
    />
    <hr></hr>
    <Panel
      title="Simon Says"
      github="https://github.com/erik-sn/react-simon/"
      description={`
        A user interface where the user must follow and repeat the
        computer's moves in a browser based version of the class electronic
        game Simon.
      `}
      link="https://devsandbox.io/simon"
      images={[
        'https://res.cloudinary.com/dvr87tqip/image/upload/v1494461181/simon_nclwqm.png',
      ]}
      tech={[react]}
      textLeft={false}
    />
    <hr></hr>
    <Panel
      title="Pomodoro"
      github="https://github.com/erik-sn/react-pomodoro/"
      description={`
        A productivity clock that allows the user to set times
        for work & break.
      `}
      link="https://devsandbox.io/pomodoro"
      images={[
        'https://res.cloudinary.com/dvr87tqip/image/upload/v1494461084/pomodoro_bszf56.png',
      ]}
      tech={[react]}
      textLeft={true}
    />
    <hr></hr>
    <Panel
      title="Tic-Tac-Toe"
      github="https://github.com/erik-sn/react-tictactoe/"
      description={`
        A basic implementation of a tic tac toe game with an "unbeatable" opponent.
      `}
      link="https://devsandbox.io/tictactoe"
      images={[
        'https://res.cloudinary.com/dvr87tqip/image/upload/v1494460824/tictactoe_ihatch.png',
      ]}
      tech={[react]}
      textLeft={false}
    />
    <hr></hr>
    <Panel
      title="Calculator"
      github="https://github.com/erik-sn/react-calc/"
      description={`
        A simple browser-based calculator.
      `}
      link="https://devsandbox.io/calculator"
      images={[
        'https://res.cloudinary.com/dvr87tqip/image/upload/v1494460961/calculator_heza96.png',
      ]}
      tech={[react]}
      textLeft={true}
    />
  </section>
);

export default Portfolio;
