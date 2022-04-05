import React from 'react';

const Blogs = () => {
  return (
    <section className='max-w-7xl mx-auto p-8'>
      <h2 className='font-bold text-4xl text-primary mt-10 mb-6'>
        What is Context API?
      </h2>
      <p className='text-2xl text-gray'>
        Context API gives us opportunity to pass props through the component
        tree without sharing the props in every level. Normally we pass data by
        sharing the props in every level in the component tree. This process
        brings difficulty to manage the codebase. When a component needs any
        changes in props data, we had to change that data in every level. To
        handle this, Context brings solutions to share props to any descendants
        directly. It creates global variables which can be share in any
        descendants. To use Context, first we have to create Context using
        React.createContext(defaultValue). It gives a consumer and a provider.
        Provider is a component that provides the state to its children.
        Consumer is a component that uses the state.
      </p>

      <h2 className='font-bold text-4xl text-primary mt-10 mb-6'>
        Block vs Inline vs Inline-block Elements
      </h2>
      <p className='text-2xl text-gray mb-4'>
        <strong>Block-level</strong> elements always create a new line. They
        always takes the whole width. We can set top and bottom margin in a
        block-level element, but its not possible in an inline element.
      </p>
      <p className='text-2xl text-gray mb-4'>
        An <strong>Inline</strong> Element does not create a new line. It does
        not takes the whole width. It only takes its necessary width. In an
        inline element height and width do not work. Top and bottom
        margin/paddings are not respected as well.
      </p>
      <p className='text-2xl text-gray mb-4'>
        <strong>Inline-block</strong> elements are combination of block and
        inline level elements. It doesn't take the whole width like block-level
        element. But we can set height-width, top and bottom margin/padding in
        an inline-block element. When we needs an inline element behaves like
        block level element(except width) we can use inline-block element.
      </p>
    </section>
  );
};

export default Blogs;
