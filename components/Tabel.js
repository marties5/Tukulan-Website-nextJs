import React from 'react';
import Image from 'next/image';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: '',
      age: '',
      file:''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleAgeChange(event) {
    this.setState({ age: event.target.value });
  }
  handleFileChange(event) {
    this.setState({ file: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newData = {
      age: this.state.age,
      name: this.state.name,
      file: this.state.file,

    };
    this.setState({
      data: [...this.state.data, newData],
      name: '',
      age: '',
      file:''
    });
  }

  render() {
    return (
      <div className="container mx-auto">
        <form onSubmit={this.handleSubmit} className="flex flex-col mb-4">
          <label htmlFor="name" className="mb-2 font-bold text-lg text-gray-900">Name</label>
          <input 
            type="text" 
            name="name" 
            value={this.state.name} 
            onChange={this.handleNameChange} 
            className="border rounded-lg py-2 px-3 mb-2 text-gray-900"
          />
          <label htmlFor="age" className="mb-2 font-bold text-lg text-gray-900">Age</label>
          <input 
            type="text" 
            name="age" 
            value={this.state.age} 
            onChange={this.handleAgeChange} 
            className="border rounded-lg py-2 px-3 mb-2 text-gray-900"
          />

<label htmlFor="image" className="mb-2 font-bold text-lg text-gray-900">file foto</label>
          <input 
            type="file" 
            name="age" 
            value={this.state.file} 
            onChange={this.handleFileChange} 
            className="border rounded-lg py-2 px-3 mb-2 text-gray-900"
          />


          <button 
            type="submit" 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Add
          </button>
        </form>
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Age</th>
              <th className="py-3 px-6 text-left">foto</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {this.state.data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="py-3 px-6 text-left whitespace-nowrap">{row.name}</td>
                <td className="py-3 px-6 text-left">{row.age}</td>
                <Image  src={row.file} width={20} height={30}/>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyComponent;
