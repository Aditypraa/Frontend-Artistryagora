/* eslint-disable react/prop-types */
import { FaRegSave } from "react-icons/fa";
import Button from "../../components/Elements/Button";
import InputForm from "../../components/Elements/InputForm";
import SelectBox from "../../components/Elements/SelectBox";
import { config } from "../../configs";

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
        <div className="w-full md:w-1/2 px-3">
          <InputForm
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
                  className="ml-2 text-red-500 p-1 bg-red-500"
                  onClick={() => handleMinusKeyPoint(index)}
                >
                  &times;
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      <Button
        className="bg-green-500 text-white py-2 px-4 rounded mt-2"
        onClick={handlePlusKeyPoint}
      >
        Tambah keypoint
      </Button>

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
            placeholder="Masukan Avatar"
            label="Cover"
            name="avatar"
            type="file"
            onChange={handleChange}
          />
          {form.avatar && (
            <div className="mt-2">
              <figure>
                <img
                  width={171}
                  height={180}
                  alt="171x180"
                  src={`${config.VITE_API_IMAGE_DEV}/${form.avatar}`}
                />
                <figcaption>Perview image cover</figcaption>
              </figure>
            </div>
          )}
        </div>
      </div>

      <label className="block mt-4">Tickets</label>
      {form.tickets.map((tic, index) => (
        <div className="flex flex-wrap -mx-3 " key={index}>
          <div className="w-full md:w-1/2 px-3">
            <InputForm
              placeholder="Masukan tipe tiket"
              label="type"
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
                className="ml-2 text-red-500 p-1 bg-red-500"
                onClick={() => handleMinusTicket(index)}
              >
                &times;
              </Button>
            )}
          </div>
        </div>
      ))}
      <div className="mb-3">
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
          className="w-full px-5 py-3 bg-blue-500 hover:shadow-[#6025F5]/50"
        >
          <FaRegSave className="w-6 h-6 fill-current inline-block" />
          <span> {edit ? "Edit" : "Simpan"}</span>
        </Button>
      </div>
    </div>
  );
}
