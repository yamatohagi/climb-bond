import PropTypes from 'prop-types';
// form
import { FormProvider as Form } from 'react-hook-form';

// ----------------------------------------------------------------------

export default function FormProvider({
  children,
  onSubmit,
  methods
}: any) {
  // @ts-expect-error TS(2364): The left-hand side of an assignment expression mus... Remove this comment to see the full error message
  return (
    // @ts-expect-error TS(2749): 'Form' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Form {...methods}>
      // @ts-expect-error TS(2304): Cannot find name 'form'.
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}

FormProvider.propTypes = {
  children: PropTypes.node,
  methods: PropTypes.object,
  onSubmit: PropTypes.func,
};
