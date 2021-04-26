import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className={"page"}>
        <section className={"contact-page"}>
          <article className={'contact-info'}>
            <h3>Want TO Get In Touch</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              cupiditate delectus doloribus eos esse eveniet facere ipsa labore
              libero modi, numquam obcaecati porro praesentium quod rem saepe
              sit temporibus vel!
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              illum libero, minus nemo perferendis rerum?
            </p>
          </article>
          <article>
            <form className={'form contact-form'}>
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type={'text'} name={'name'} id={'name'}/>
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type={'text'} name={'email'} id={'email'}/>
              </div>
              <div className={'form-row'}>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"> </textarea>
                <button type={'submit'}>Submit</button>
              </div>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
