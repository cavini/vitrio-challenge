import { Formik } from 'formik';
export default function NewsLetterForm() {
  interface FormValues {
    email?: string | undefined;
    name?: string | undefined;
  }

  const submit = (values: FormValues) => {
    console.log(values);
  };
  return (
    <div className="form-wrapper">
      <div className="form-header">
        <h3>ASSINE NOSSA NEWSLETTER</h3>
        <h5>
          Fique por dentro das nossas novidades e receba 10% de desconto na
          primeira compra.
        </h5>
        <h6>
          * valido somente para jóias e não acumulativo com outras promoções
        </h6>
      </div>
      <Formik
        initialValues={{ email: '', name: '' }}
        validate={(values) => {
          const errors: FormValues = {};
          if (!values.email) {
            errors.email = 'E-mail é um campo obrigatório';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'E-mail inválido';
          }

          if (!values.name) {
            errors.name = 'Nome é um campo obrigatório';
          } else if (!/^[a-z ,.'-]+$/i.test(values.name)) {
            errors.name = 'Nome inválido';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, setStatus }) => {
          setSubmitting(true);
          setStatus(true);
          submit(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,

          /* and other goodies */
        }) => (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            <div className="input-container">
              <div className="input-wrapper">
                <input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <p>{errors.email && touched.email && errors.email}</p>
              </div>
              <div className="input-wrapper">
                <input
                  type="name"
                  name="name"
                  placeholder="Seu nome"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <p>{errors.name && touched.name && errors.name}</p>
              </div>
              <div className="success-message-container">
                {!errors.email && !errors.name && isSubmitting ? (
                  <p>Formulário enviado com sucesso!</p>
                ) : (
                  <></>
                )}
              </div>
              <button className="submit-btn" disabled={isSubmitting}>
                ENVIAR
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
