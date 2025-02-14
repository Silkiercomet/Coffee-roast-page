import { useForm } from 'react-hook-form';
import { formData } from '../../ultils/content';
import FormOptions from '../moleculs/FormOptions';
import OrderSummary from '../moleculs/OrderSummary';
import style from "./OrderForm.module.css"

const OrderForm = () => {
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <section className={style.order}>
      <h3 className={style.order_header}>Order Form</h3>
      <div className={style.wrapper}>
        <aside className={style.order_aside}>
          <ol>
            {formData.map((item) => (
              <li key={item.legend} className={style.order_aside_item}>
                <a href={`#${item.legend}`}>{item.legend}</a>
              </li>
            ))}
          </ol>
        </aside>
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          {formData.map((item) => (
            <FormOptions
              key={item.legend}
              register={register}
              name={item.legend}
              options={item.options}
              optionTitle={item.title}
            />
          ))}
          <OrderSummary watch={watch} />
          <input type="submit" className={style.button} value="Create Plan"/>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
