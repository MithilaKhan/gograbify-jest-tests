import { render, screen } from "@testing-library/react"
import TiktokVideoDownloader from "@/features/tiktok-video-downloader"

test("check text", () => {
  render(<TiktokVideoDownloader />)
  const textElement = screen.getByText("Tiktok Video Download")
  expect(textElement).toBeInTheDocument()
})

test("Testing  input box", () => {
  render(<TiktokVideoDownloader />)
  let checkInput = screen.getByRole("textbox")
  let checkPlaceHolder = screen.getByPlaceholderText("Paste video URL here...")
  expect(checkInput).toBeInTheDocument()
  expect(checkPlaceHolder).toBeInTheDocument()
  expect(checkInput).toHaveAttribute("type", "text")
  expect(checkInput).toHaveAttribute("id", "banner-input")
})

//test group wise  
describe("test banner", () => {

  test("test title", () => {
    render(<TiktokVideoDownloader />)
    const title = screen.getByText("Tiktok Video Download")
    expect(title).toBeInTheDocument()
  })

  test("test description", () => {
    render(<TiktokVideoDownloader />)
    const description = screen.getByText("Download Tiktok videos online in HD MP4 format. Paste the video link and start downloading instantly.")
    expect(description).toBeInTheDocument()

  })

  //nested describe
  describe("test nested describe", () => {
    test("testing input 2", () => {
      render(<TiktokVideoDownloader />)
      const inputPlaceholder = screen.getByPlaceholderText("Paste video URL here...")
      expect(inputPlaceholder).toBeInTheDocument()
    })
  })
})




// it only  test  this group not others
describe.only("test banner 2", () => {
  test("testing input 1", () => {
    render(<TiktokVideoDownloader />)
    let checkInput = screen.getByRole("textbox")
    expect(checkInput).toBeInTheDocument()
    expect(checkInput).toHaveAttribute("type", "text")
    expect(checkInput).toHaveAttribute("id", "banner-input")
  })

  test("testing input 2", () => {
    render(<TiktokVideoDownloader />)
    const inputPlaceholder = screen.getByPlaceholderText("Paste video URL here...")
    expect(inputPlaceholder).toBeInTheDocument()
  })
})

// it skip this test group not others
describe.skip("test banner 3", () => {
  test("testing input 1", () => {
    render(<TiktokVideoDownloader />)
    let checkInput = screen.getByRole("textbox")
    expect(checkInput).toBeInTheDocument()
    expect(checkInput).toHaveAttribute("type", "text")
    expect(checkInput).toHaveAttribute("id", "banner-input")
  })

  test("testing input 2", () => {
    render(<TiktokVideoDownloader />)
    const inputPlaceholder = screen.getByPlaceholderText("Paste video URL here...")
    expect(inputPlaceholder).toBeInTheDocument()
  })
})