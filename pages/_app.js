import "../styles/globals.css";
import { Provider } from 'react-redux';
import store from '../ReduxStore/store';
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <Head>
          <meta name="description" content="Welcome to Green Acres Hospital, where we provide exceptional healthcare services with a focus on patient well-being. Our dedicated team of medical professionals offers advanced treatments in a compassionate environment." />
          <meta name="keywords" content="Green Acres Hospital, healthcare services, medical center, comprehensive healthcare, patient care, advanced treatments, compassionate environment, colposcopy, HPV, HPV Vaccine, Human papillomavirus, Cervical cancer, Pap smear, Liquid based cytology, Screening"></meta>
          <title>Green Acres Hospital - Delivering Comprehensive Healthcare Services</title>
          <link rel="icon" href="/logo.png" />
        </Head>
        <Component {...pageProps} />
      </Provider>
  );
}
