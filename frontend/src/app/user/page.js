import WithRole from '../components/WithRole';

export default function UserPage() {
  return (
    <WithRole roles={['user', 'admin']}>
      <div>Hello, User!</div>
    </WithRole>
  );
}
