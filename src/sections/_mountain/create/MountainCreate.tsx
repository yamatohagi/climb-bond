import MountainCreateEditForm from '../components/MountainCreateEditForm';
import useMountainForm, { MountainInput } from '../hooks/useMountainForm';

export default function MountainCreate() {
  const methods = useMountainForm();

  const handleReplySubmit = async (fv: MountainInput) => {
    console.log(fv);
  };

  return <MountainCreateEditForm handleReplySubmit={handleReplySubmit} methods={methods} />;
}
