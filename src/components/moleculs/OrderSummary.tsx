
interface OrderSummaryProps {
  watch: any;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ watch }) => {
  return (
    <div>
      <p>ORDER SUMMARY</p>
      <h4>
        I drink my coffee as{' '}
        <span>{watch('preferences') || '___'}</span>
        , with a{' '}
        <span>{watch('bean-type') || '___'}</span>{' '}
        type of bean.{' '}
        <span>{watch('quantity') || '___'}</span>{' '}
        ground ala{' '}
        <span>{watch('grind') || '___'}</span>
        , sent to me{' '}
        <span>{watch('delivery') || '___'}</span>
        .
      </h4>
    </div>
  );
};

export default OrderSummary;
