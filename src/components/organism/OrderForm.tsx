import { useForm } from 'react-hook-form';
import { formData, FormDataSection } from '../../ultils/content';
import FormOptions from '../moleculs/FormOptions';
import OrderSummary from '../moleculs/OrderSummary';

const OrderForm = () => {
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <section>
      <h3>Order Form</h3>
      <aside>
        <ol>
          {formData.map((item) => (
            <li key={item.legend}>
              <a href={`#${item.legend}`}>{item.legend}</a>
            </li>
          ))}
        </ol>
      </aside>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <input type="submit" />
      </form>
    </section>
  );
};

export default OrderForm;
