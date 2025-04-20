import PaymentsWorkforce from './PaymentsWorkForce';
import { paymentsData, workforceData } from '@/features/landingPage/lib/paymentWorkForce/paymentWorkForceData';

export default function PaymentWorkForceRender() {
  return (
    <div>
      <PaymentsWorkforce data={paymentsData} />
      <PaymentsWorkforce data={workforceData} />
    </div>
  );
}