import styled from "@emotion/styled";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #333;
  line-height: 1.6;

  h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 500px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  font-size: 1rem;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus {
    border-color: #1abc9c;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;

  &:focus {
    border-color: #1abc9c;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
  color: white;
  background-color: #2c3e50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1abc9c;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;

  a {
    text-decoration: none;
    color: #2c3e50;
    font-size: 1.2rem;

    &:hover {
      color: #1abc9c;
    }
  }
`;

const Contact = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Message submitted!"); // Replace this with actual form submission logic
    };

    return (
        <ContactContainer>
            <h1>Contact Me</h1>
            <Form onSubmit={handleSubmit}>
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" name="name" required />
                </div>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" name="email" required />
                </div>
                <div>
                    <Label htmlFor="phone1">Phone Number 1</Label>
                    <Input type="tel" id="phone1" name="phone1" required />
                </div>
                <div>
                    <Label htmlFor="phone2">Phone Number 2</Label>
                    <Input type="tel" id="phone2" name="phone2" />
                </div>
                <div>
                    <Label htmlFor="message">Message</Label>
                    <TextArea id="message" name="message" rows={5} required />
                </div>
                <Button type="submit">Send Message</Button>
            </Form>
            <SocialLinks>
                <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
                <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
                    Twitter
                </a>
            </SocialLinks>
        </ContactContainer>
    );
};

export { Contact };