import {useState, useRef, useEffect} from 'react';

const BuyTicketForm = () => {
  const [nume, setNume] = useState("");
  const [prenume, setPrenume] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [varsta, setVarsta] = useState(false);
  const [abonare, setAbonare] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [nrBilet, setNrBilet] = useState("");

  const formBoxRef = useRef(null);
  const ticketRef = useRef(null);
  const ageRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!varsta) {
      alert("Trebuie sa ai cel putin 18 ani pentru a intra la eveniment!");
      return;
    }
    else {
      setSubmited(true);
      const numar = Math.floor(Math.random() * 900000) + 100000;
      setNrBilet(numar);
      formBoxRef.current.style.display = "none";
      ticketRef.current.style.display = "flex";
    }
  }

  return (
    <div className="w-[90%] sm:w-[70%] max-w-[650px] shadow-[10px_-5px_12px_1px_#000000] m-auto relative top-[150px] p-[30px] h-auto">
      <h1 className='text-center text-[1.5rem]'>{submited ? `EVENTMANIA.RO` : `Cumpara Bilet`}</h1>
      <form className='flex flex-wrap flex-1 flex-row gap-[25px] w-full relative top-[15px]' onSubmit={handleSubmit} ref={formBoxRef}>
        <div className='nume w-full sm:w-[40%]'>
          <label>Nume *</label>
          <input type='text' className='border-black border-[1px] p-[6px] rounded-[8px] w-full' onChange={(e) => setNume(e.target.value)} required/>
        </div>
        <div className='prenume w-full sm:w-[40%]'>
          <label>Prenume *</label>
          <input type='text' className='border-black border-[1px] p-[6px] rounded-[8px] w-full' onChange={(e) => setPrenume(e.target.value)} required/>
        </div>
        <div className='email w-full sm:w-[60%]'>
          <label>Email *</label>
          <input type='email' className='border-black border-[1px] p-[6px] rounded-[8px] w-full' onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className='telefon w-full sm:w-[30%]'>
          <label>Telefon *</label>
          <input type='tel' className='border-black border-[1px] p-[6px] rounded-[8px] w-full' pattern="^07[0-9]{8}$" onChange={(e) => setTelefon(e.target.value)} required/>
        </div>
        <div className='optiuni flex flex-col'>
          <label ref={ageRef}><input type='checkbox' checked={varsta} onChange={(e) => setVarsta(e.target.checked)}/> Mentionez ca am 18 ani si sunt de acord cu termenii si conditiile</label>
          <label><input type='checkbox' checked={abonare} onChange={(e) => setAbonare(e.target.checked)} /> Doresc sa ma abonez la recomandari din partea Ticket.ro</label>
        </div>
        <div className='btn text-center'>
          <button type='submit' className='bg-[#ffe600] p-[8px] w-[150px]'>Cumpara Bilet</button>
        </div>
      </form>

      <div className='hidden justify-around items-center' ref={ticketRef}>
        <div id='bilet'>
        <h1 className='text-[1.7rem] font-bold'>Bilet nr: #{nrBilet}</h1>
        <p>Nume: {nume}</p>
        <p>Prenume: {prenume}</p>
        <p>Email: {email}</p>
        <p>Telefon: {telefon}</p>
        <p>BBiletul este unic. Acesta contine informatiile furnizate si vor fi verificate la intrare.</p>
        </div>
        <img src="/qr.png" className='w-[190px] h-[190px] relative top-[5px]'/>
      </div>
    </div>
  )
}
export default function App() {
  return (
    <BuyTicketForm />
  )
}