/* eslint-disable react/prop-types */
import { FaRegSave } from "react-icons/fa";
import Button from "../../components/Elements/Button";
import InputForm from "../../components/Elements/InputForm";
import SelectBox from "../../components/Elements/SelectBox";
import { config } from "../../configs";
import TextArea from "../../components/Elements/TextArea";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function EventsForm({
  handleSubmit,
  form,
  handleChange,
  isLoading,
  edit,
  lists,
  handlePlusKeyPoint,
  handleChangeKeyPoint,
  handleMinusKeyPoint,
  handlePlusTicket,
  handleMinusTicket,
  handleChangeTicket,
}) {
  return (
    <div className="mb-2">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full md:w-1/2 px-3">
          <InputForm
            placeholder="Masukan judul"
            label="Judul"
            name="title"
            value={form.title}
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <InputForm
            placeholder="Masukan tagline"
            label="Tagline"
            name="tagline"
            value={form.tagline}
            type="text"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mt-4">
        <div className="w-full md:w-1/2 px-3">
          <InputForm
            placeholder="Masukan tanggal acara"
            label="Tanggal"
            name="date"
            value={form.date}
            type="datetime-local"
            onChange={handleChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <SelectBox
            label="Category"
            placeholder="Masukan kategori"
            name="category"
            value={form.category}
            options={lists.categories}
            isClearable
            handleChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mt-4">
        <div className="w-full md:w-1/2 px-6">
          <TextArea
            placeholder="Masukan about"
            label="About"
            name="about"
            value={form.about}
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <InputForm
            placeholder="Masukan Lokasi Acara"
            label="Lokasi"
            name="venueName"
            value={form.venueName}
            type="text"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3">
        {form.keyPoint.map((key, index) => (
          <div className="w-full md:w-1/2 px-3 " key={index}>
            <div className="flex items-center">
              <InputForm
                label="Key Point"
                className="form-input w-full"
                placeholder="Masukan keypoint"
                value={key}
                type="text"
                name="key"
                onChange={(e) => handleChangeKeyPoint(e, index)}
              />
              {index !== 0 && (
                <Button
                  className=" text-red-500 p-2 mt-8 bg-red-500"
                  onClick={() => handleMinusKeyPoint(index)}
                >
                  <IoCloseCircleOutline />
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full md:w-1/2 px-3">
        <Button
          className="bg-green-500 text-white py-2 px-4 rounded mt-2"
          onClick={handlePlusKeyPoint}
        >
          Tambah keypoint
        </Button>
      </div>

      <div className="flex flex-wrap -mx-3 mt-4">
        <div className="w-full md:w-1/2 px-3">
          <SelectBox
            label="Talent"
            placeholder="Masukan Talent"
            name="talent"
            value={form.talent}
            options={lists.talents}
            isClearable
            handleChange={(e) => handleChange(e)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <InputForm
            label="Cover"
            placeholder="Masukan Avatar"
            name="avatar"
            type="file"
            onChange={handleChange}
          />
          {form.avatar && (
            <div className="mt-2">
              <figure className="flex flex-col justify-center items-center">
                <img
                  width={400}
                  height={400}
                  alt="171x180"
                  src={`${config.VITE_API_IMAGE_DEV}/${form.avatar}`}
                />
                <figcaption>Preview image cover</figcaption>
              </figure>
            </div>
          )}
        </div>
      </div>

      {form.tickets.map((tic, index) => (
        <div key={index}>
          <label className="block mt-4">Tickets</label>
          <div className="flex flex-wrap -mx-3 ">
            <div className="w-full md:w-1/2 px-3">
              <InputForm
                placeholder="Masukan tipe tiket"
                label="Type"
                name="type"
                value={tic.type}
                type="text"
                onChange={(e) => handleChangeTicket(e, index)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <InputForm
                placeholder="Masukan Harga"
                label="Harga"
                name="price"
                value={tic.price}
                type="number"
                onChange={(e) => handleChangeTicket(e, index)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <InputForm
                placeholder="Masukan tipe tiket"
                label="Stock"
                name="stock"
                value={tic.stock}
                type="number"
                onChange={(e) => handleChangeTicket(e, index)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 flex items-center">
              <InputForm
                placeholder="Masukan Status Tiket"
                label="Status Ticket"
                name="statusTicketCategories"
                value={tic.statusTicketCategories}
                type="text"
                onChange={(e) => handleChangeTicket(e, index)}
              />
              {index !== 0 && (
                <Button
                  className=" text-red-500 p-2 mt-8 bg-red-500"
                  onClick={() => handleMinusTicket(index)}
                >
                  <IoCloseCircleOutline />
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="w-full md:w-1/2 px-3">
        <Button
          className="bg-green-500 text-white py-2 px-4 rounded"
          onClick={handlePlusTicket}
        >
          Tambah Ticket
        </Button>
      </div>

      <div className="mt-10">
        <Button
          onClick={handleSubmit}
          disabled={isLoading}
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          <FaRegSave className="w-6 h-6 fill-current inline-block" />
          <span> {edit ? "Edit" : "Simpan"}</span>
        </Button>
      </div>
    </div>
  );
}
