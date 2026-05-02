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