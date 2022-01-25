import spinner from './assets/spinner.gif';

const Spinner = () => {
  return (
    <div className='w-50 mt-20'>
      <img src={spinner} alt='spinner' className='text-center mx-auto w-50 ' />;
    </div>
  );
};

export default Spinner;
