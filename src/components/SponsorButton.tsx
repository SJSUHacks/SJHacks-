export default function SponsorButton() {
    const emailId = "organizer@siliconxhacks.com"
  
    const goToEmail = () => {
      window.open(`https://mail.google.com/mail/u/0/?fs=1&to=${emailId}&tf=cm`, "_blank")
    }
  
    return (
      <button className="sponsor" onClick={goToEmail}>
        Sponsor Us
      </button>
    )
  }