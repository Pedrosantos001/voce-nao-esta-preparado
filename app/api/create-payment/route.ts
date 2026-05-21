import axios from 'axios'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {

  try {

    const body = await req.json()

    const response = await axios.post(
      'https://sandbox.api.pagseguro.com/checkouts',
      {
        reference_id: body.plan,

        customer: {
          name: body.name,
          email: body.email,
          tax_id: '12345678909',
        },

        items: [
          {
            reference_id: body.plan,
            name: body.plan,
            quantity: 1,
            unit_amount: body.amount,
          },
        ],
      },

      {
        headers: {
          Authorization: `Bearer ${process.env.PAGBANK_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    )

    return NextResponse.json(response.data)

  } catch (error: any) {

    console.log(error.response?.data)

    return NextResponse.json(
      { error: 'Erro ao criar pagamento' },
      { status: 500 }
    )

  }

}